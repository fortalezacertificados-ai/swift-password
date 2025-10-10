import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  ArrowLeft, Bold, Italic, Underline,
  AlignLeft, AlignCenter, AlignRight,
  List, ListOrdered, Upload
} from "lucide-react";

export default function ArticleEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== "new";

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [uploading, setUploading] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEditing) loadArticle();
  }, [id]);

  const loadArticle = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast.error("Erro ao carregar artigo");
      navigate("/admin");
    } else if (data) {
      setTitle(data.title);
      setAuthor(data.author);
      setExcerpt(data.excerpt || "");
      setImageUrl(data.image_url || "");
      setPublished(data.published);
      if (contentRef.current) contentRef.current.innerHTML = data.content || "";
    }
  };

  const applyFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    contentRef.current?.focus();
  };

  const changeFontSize = (increase: boolean) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) return;

    const span = document.createElement("span");
    const currentSize = window.getComputedStyle(range.commonAncestorContainer.parentElement || document.body).fontSize;
    const currentSizePx = parseInt(currentSize);
    const newSize = increase ? currentSizePx + 2 : Math.max(currentSizePx - 2, 10);
    span.style.fontSize = `${newSize}px`;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    selection.addRange(newRange);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      setUploading(true);

      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `articles/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("images").getPublicUrl(filePath);
      setImageUrl(data.publicUrl);

      toast.success("Imagem enviada com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao enviar imagem: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const slug = generateSlug(title);
      const articleData = {
        title,
        slug,
        author,
        excerpt,
        content: contentRef.current?.innerHTML || "",
        image_url: imageUrl || null,
        published,
        created_by: user.id,
      };

      if (isEditing) {
        const { error } = await supabase
          .from("articles")
          .update(articleData)
          .eq("id", id);
        if (error) throw error;
        toast.success("Artigo atualizado com sucesso!");
      } else {
        const { error } = await supabase
          .from("articles")
          .insert([articleData]);
        if (error) throw error;
        toast.success("Artigo criado com sucesso!");
      }

      navigate("/admin");
    } catch (error: any) {
      toast.error(error.message || "Erro ao salvar artigo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/admin")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>{isEditing ? "Editar Artigo" : "Novo Artigo"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Digite o título do artigo"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Autor *</Label>
                <Input
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Nome do autor"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Resumo</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Breve descrição do artigo (opcional)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Imagem de Capa</Label>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <Input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Ou cole uma URL manualmente"
                    className="flex-1"
                  />
                  <div className="flex items-center gap-2">
                    <Input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("file-upload")?.click()}
                      disabled={uploading}
                    >
                      <Upload className="h-4 w-4 mr-1" />
                      {uploading ? "Enviando..." : "Upload"}
                    </Button>
                  </div>
                </div>

                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="mt-3 max-w-sm rounded-lg shadow"
                  />
                )}
              </div>

              <div className="space-y-2">
                <Label>Conteúdo *</Label>

                <div className="flex items-center gap-1 p-2 border rounded-t bg-muted/50 flex-wrap">
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("bold")}><Bold className="h-4 w-4" /></Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("italic")}><Italic className="h-4 w-4" /></Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("underline")}><Underline className="h-4 w-4" /></Button>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Button type="button" size="sm" variant="outline" onClick={() => changeFontSize(true)}>A+</Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => changeFontSize(false)}>A-</Button>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("justifyLeft")}><AlignLeft className="h-4 w-4" /></Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("justifyCenter")}><AlignCenter className="h-4 w-4" /></Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("justifyRight")}><AlignRight className="h-4 w-4" /></Button>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("insertUnorderedList")}><List className="h-4 w-4" /></Button>
                  <Button type="button" size="sm" variant="outline" onClick={() => applyFormat("insertOrderedList")}><ListOrdered className="h-4 w-4" /></Button>
                </div>

                <div
                  ref={contentRef}
                  contentEditable
                  className="border border-t-0 rounded-b p-4 min-h-[300px] focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                  suppressContentEditableWarning
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="published" checked={published} onCheckedChange={setPublished} />
                <Label htmlFor="published">Publicar artigo</Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                  {loading ? "Salvando..." : "Salvar Artigo"}
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/admin")}>
                  Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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
import { ArrowLeft } from "lucide-react";

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

  const contentRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);

  const [initialContentLoaded, setInitialContentLoaded] = useState(false);

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

      // inicializa o conteúdo apenas uma vez no editor
      if (contentRef.current) {
        contentRef.current.innerHTML = data.content || "";
        setInitialContentLoaded(true);
      }
    }
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

  // Função para alterar o tamanho da fonte do texto selecionado
  const changeFontSize = (size: number) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (range.collapsed) return;

    const span = document.createElement("span");
    span.style.fontSize = `${size}px`;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    // mantém seleção no novo conteúdo
    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    selection.addRange(newRange);
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
                <Label htmlFor="imageUrl">URL da Imagem</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
                {imageUrl && (
                  <img src={imageUrl} alt="Preview" className="mt-2 max-w-sm rounded-lg" />
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Conteúdo *</Label>

                {/* Box de tamanho de fonte */}
                <div className="flex items-center gap-2 mb-2">
                  <Label>Tamanho da Fonte:</Label>
                  <select
                    className="border rounded px-2 py-1"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                  >
                    {[8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48].map((s) => (
                      <option key={s} value={s}>{s}px</option>
                    ))}
                  </select>
                  <Button type="button" onClick={() => changeFontSize(fontSize)}>
                    Aplicar
                  </Button>
                </div>

                {/* Editor de conteúdo */}
                <div
                  ref={contentRef}
                  contentEditable
                  className="border rounded p-2 min-h-[300px] focus:outline-none whitespace-pre-wrap break-words"
                  suppressContentEditableWarning
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={published}
                  onCheckedChange={setPublished}
                />
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

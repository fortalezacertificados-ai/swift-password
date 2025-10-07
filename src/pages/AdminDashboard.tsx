import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, LogOut, Edit, Trash2 } from "lucide-react";
import { User } from "@supabase/supabase-js";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<any[]>([]);
  const [fontSize, setFontSize] = useState(16); // Tamanho de fonte padrão em px

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }
      setUser(user);

      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .single();

      if (roleError || !roleData) {
        toast.error("Acesso negado. Você não é um administrador.");
        await supabase.auth.signOut();
        navigate("/auth");
        return;
      }

      setIsAdmin(true);
      loadArticles();
    } catch (error) {
      toast.error("Erro ao verificar autenticação");
      navigate("/auth");
    } finally {
      setLoading(false);
    }
  };

  const loadArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Erro ao carregar artigos");
    } else {
      setArticles(data || []);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;

    const { error } = await supabase
      .from("articles")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Erro ao excluir artigo");
    } else {
      toast.success("Artigo excluído com sucesso!");
      loadArticles();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold">Painel Administrativo</h1>
            <p className="text-muted-foreground mt-2">Gerencie seus artigos</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/admin/article/new")}>
              <Plus className="mr-2 h-4 w-4" />
              Novo Artigo
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Controle de tamanho de fonte */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            Ajustar tamanho da fonte dos artigos: {fontSize}px
          </label>
          <input
            type="range"
            min={12}
            max={32}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Lista de artigos */}
        <div className="grid gap-4">
          {articles.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">Nenhum artigo criado ainda.</p>
                <Button onClick={() => navigate("/admin/article/new")} className="mt-4">
                  Criar Primeiro Artigo
                </Button>
              </CardContent>
            </Card>
          ) : (
            articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle
                        style={{ fontSize: `${fontSize + 4}px` }} // título ligeiramente maior que o corpo
                        className="font-semibold"
                      >
                        {article.title}
                      </CardTitle>
                      <p
                        style={{ fontSize: `${fontSize}px` }}
                        className="text-muted-foreground mt-1"
                      >
                        Por {article.author} • {new Date(article.created_at).toLocaleDateString()}
                      </p>
                      <p
                        style={{ fontSize: `${fontSize - 2}px` }}
                        className="text-muted-foreground mt-1"
                      >
                        Status: {article.published ? "Publicado" : "Rascunho"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(`/admin/article/${article.id}`)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(article.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {article.excerpt && (
                  <CardContent>
                    <p style={{ fontSize: `${fontSize}px` }} className="text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

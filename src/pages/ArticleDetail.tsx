import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single();

    if (error || !data) {
      navigate("/articles");
    } else {
      setArticle(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!article) return null;

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt || article.content.substring(0, 160)}
        keywords="cybersecurity, password security, online safety"
        canonical={`https://passwordgencheck.com/article/${article.slug}`}
      />
      
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Artigos
          </Link>

          {article.image_url && (
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
          )}

          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span>Por {article.author}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.created_at).toLocaleDateString('pt-BR')}</span>
            </div>
          </div>

          {article.excerpt && (
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              {article.excerpt}
            </p>
          )}

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-wrap">{article.content}</div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link to="/articles">
              <Button variant="outline">
                Ver mais artigos
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Calendar, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Articles = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setArticles(data);
    }
    setLoading(false);
  };
  return (
    <>
      <SEOHead
        title="Cybersecurity Articles & News - Stay Safe Online"
        description="Read the latest cybersecurity articles, password security tips, and digital privacy news. Stay informed about online threats and how to protect yourself."
        keywords="cybersecurity articles, security news, password tips, online safety, digital privacy, hacking prevention"
        canonical="https://passwordgencheck.com/articles"
      />
      
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Cybersecurity Articles</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Stay informed with the latest news, tips, and best practices for online security
          </p>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Carregando artigos...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum artigo publicado ainda.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow">
                  {article.image_url && (
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt || article.content.substring(0, 150) + "..."}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.created_at).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">Por {article.author}</p>
                    
                    <Link to={`/article/${article.slug}`}>
                      <Button variant="outline" className="w-full">
                        Ler Mais
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          <div className="mt-12 text-center">           
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles;

import { Link } from "react-router-dom";
import { Shield, ArrowLeft, Calendar, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Article data structure
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
  image?: string;
}

// Sample articles - in a real app, this would come from a CMS or database
const articles: Article[] = [
  {
    id: "1",
    title: "How to Create an Unbreakable Password in 2025",
    excerpt: "Learn the latest techniques and best practices for creating strong, memorable passwords that can withstand modern hacking attempts. Discover why password managers are essential and how to use them effectively.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Password Security",
    link: "/password-guide",
  },
  {
    id: "2",
    title: "Understanding Two-Factor Authentication: Your Second Line of Defense",
    excerpt: "Two-factor authentication (2FA) adds an extra layer of security to your accounts. Learn why it's crucial, how it works, and which 2FA methods are most secure in today's digital landscape.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Authentication",
    link: "/password-guide",
  },
  {
    id: "3",
    title: "Common Password Mistakes That Put You at Risk",
    excerpt: "Avoid these critical password security mistakes that millions of people make every day. From using personal information to reusing passwords across sites, learn what to avoid.",
    date: "2025-01-05",
    readTime: "4 min read",
    category: "Security Tips",
    link: "/password-guide",
  },
];

const Articles = () => {
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary mb-3">
                    <span className="font-semibold">{article.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Link to={article.link}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              More articles coming soon. Stay tuned for the latest in cybersecurity!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles;

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

// Real articles with quality content for AdSense compliance
const articles: Article[] = [
  {
    id: "1",
    title: "How to Create an Unbreakable Password in 2025",
    excerpt: "In an era where cyber threats are more sophisticated than ever, creating a strong password is your first line of defense against hackers. This comprehensive guide explores proven strategies for generating passwords that are both secure and memorable, including the use of passphrases, password managers, and multi-factor authentication. Learn how to protect your digital identity with passwords that can withstand brute force attacks, dictionary attacks, and social engineering attempts.",
    date: "2025-10-05",
    readTime: "8 min read",
    category: "Password Security",
    link: "/articles/unbreakable-password-2025",
  },
  {
    id: "2",
    title: "Understanding Two-Factor Authentication: Your Second Line of Defense",
    excerpt: "Two-factor authentication (2FA) has become essential for protecting online accounts from unauthorized access. This in-depth article explains the different types of 2FA methods available today, from SMS codes and authenticator apps to hardware security keys and biometric verification. Discover why relying solely on passwords is no longer sufficient, how attackers bypass weak 2FA implementations, and which authentication methods provide the strongest protection for your sensitive accounts.",
    date: "2025-10-04",
    readTime: "10 min read",
    category: "Authentication",
    link: "/articles/two-factor-authentication-guide",
  },
  {
    id: "3",
    title: "Common Password Mistakes That Put You at Risk",
    excerpt: "Despite widespread awareness of cybersecurity threats, millions of people continue to make critical password mistakes that leave their accounts vulnerable to attacks. This article identifies the most common password security errors, including using predictable patterns, recycling passwords across multiple sites, storing passwords insecurely, and falling for phishing scams. Learn practical strategies to avoid these pitfalls and implement a robust password security routine that protects your personal and professional data from cybercriminals.",
    date: "2025-10-03",
    readTime: "7 min read",
    category: "Security Tips",
    link: "/articles/common-password-mistakes",
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
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "How to Create an Unbreakable Password in 2025",
    description: "Learn the latest techniques and best practices for creating strong, memorable passwords that can withstand modern hacking attempts. Discover why password managers are essential and how to use them effectively.",
    date: "Oct 5, 2025",
    readTime: "8 min read",
    category: "Password Security",
    link: "/articles/unbreakable-password-2025"
  },
  {
    title: "Understanding Two-Factor Authentication: Your Second Line of Defense",
    description: "Complete guide to two-factor authentication (2FA). Learn about SMS codes, authenticator apps, hardware keys, and which methods provide the strongest account protection.",
    date: "Oct 4, 2025",
    readTime: "10 min read",
    category: "Authentication",
    link: "/articles/two-factor-authentication-guide"
  },
  {
    title: "Common Password Mistakes That Put You at Risk",
    description: "Discover the password security errors millions make every day. Avoid using personal information, password reuse, predictable patterns, and other vulnerabilities that hackers exploit.",
    date: "Oct 3, 2025",
    readTime: "7 min read",
    category: "Security Tips",
    link: "/articles/common-password-mistakes"
  }
];

const ArticleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
      setIsTransitioning(false);
    }, 300);
  };

  const currentArticle = articles[currentIndex];

  return (
    <section className="mb-12 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Latest from Our Blog</h2>
        <Link to="/articles" className="text-primary hover:underline text-sm">
          View all articles →
        </Link>
      </div>
      
      <div className="relative bg-card border border-border rounded-lg shadow-lg overflow-hidden">
        <div
          className={`p-6 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <span className="text-primary font-semibold text-sm">
                {currentArticle.category}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-3">
                {currentArticle.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {currentArticle.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{currentArticle.date}</span>
                <span>•</span>
                <span>{currentArticle.readTime}</span>
              </div>
              <Link to={currentArticle.link}>
                <Button>Read More</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="h-8 w-8"
            aria-label="Previous article"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Dots indicator */}
          <div className="flex gap-1.5 mx-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="h-8 w-8"
            aria-label="Next article"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSlider;

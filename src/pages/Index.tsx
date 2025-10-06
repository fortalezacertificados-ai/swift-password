import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import PasswordGenerator from "@/components/PasswordGenerator";
import SecurityTips from "@/components/SecurityTips";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HeroSection from "@/components/HeroSection";
import PasswordGuide from "@/components/PasswordGuide";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { translations, Language } from "@/lib/translations";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [copied, setCopied] = useState<string | null>(null);
  const [visitorCount, setVisitorCount] = useState<number>(0);

  const t = translations[language];

  const handleCopy = (address: string, coin: string) => {
    navigator.clipboard.writeText(address);
    setCopied(`${coin} address copied!`);
    setTimeout(() => setCopied(null), 2000);
  };

  // ⚡ Inicializa blocos de AdSense e contador global
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense error:", e);
    }

    // Track visitor using Lovable Cloud function
    const trackVisitor = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-visitor`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.count);
        }
      } catch (error) {
        console.error("Visitor count error:", error);
      }
    };

    trackVisitor();
  }, []);

  return (
    <>
      <SEOHead
        title="Free Password Generator - Create Strong, Secure Passwords"
        description="Generate ultra-secure random passwords instantly with our free tool. Test password strength, learn security best practices. Create unbreakable passwords in seconds - 100% client-side, private & safe."
        keywords="password generator, password strength checker, secure password creator, random password generator, strong password maker, password security tool, free password generator"
        canonical="https://passwordgencheck.com/"
      />
      <SchemaMarkup type="website" />
      <SchemaMarkup type="faq" />

      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Navigation */}
          <header className="flex justify-between items-center mb-8 animate-fade-in">
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                to="/articles"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">Articles</span>
              </Link>
              <Link
                to="/strength-checker"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">{t.strengthCheckerLink}</span>
              </Link>
              <Link
                to="/password-guide"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">{t.articleLink}</span>
              </Link>
            </div>
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={(lang) => setLanguage(lang as Language)}
            />
          </header>

          {/* Hero Section */}
          <HeroSection title={t.title} subtitle={t.subtitle} />

          {/* Featured Article Section */}
          <section className="mb-12 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Latest from Our Blog</h2>
              <Link to="/articles" className="text-primary hover:underline text-sm">
                View all articles →
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <span className="text-primary font-semibold text-sm">Password Security</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">
                    How to Create an Unbreakable Password in 2025
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Learn the latest techniques and best practices for creating strong, memorable passwords 
                    that can withstand modern hacking attempts. Discover why password managers are essential 
                    and how to use them effectively.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>Jan 15, 2025</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <Link to="/password-guide">
                    <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 🔹 Anúncio Square (manual) */}
          <div className="w-full my-6">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-9180151864858869"
              data-ad-slot="6857910865"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </div>

          {/* Password Guide Section */}
          <PasswordGuide
            translations={{
              guideTitle: t.guideTitle,
              whatIsSecurePassword: t.whatIsSecurePassword,
              whatIsSecurePasswordText: t.whatIsSecurePasswordText,
              howToCreate: t.howToCreate,
              howToCreateText: t.howToCreateText,
              commonMistakes: t.commonMistakes,
              commonMistakesText: t.commonMistakesText,
              bestPractices: t.bestPractices,
              bestPracticesText: t.bestPracticesText,
            }}
          />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
            <div className="lg:col-span-2">
              <PasswordGenerator
                translations={{
                  title: t.title,
                  subtitle: t.subtitle,
                  length: t.length,
                  uppercase: t.uppercase,
                  lowercase: t.lowercase,
                  numbers: t.numbers,
                  symbols: t.symbols,
                  generate: t.generate,
                  copy: t.copy,
                  copied: t.copied,
                }}
              />
            </div>

            <div className="lg:col-span-1 flex flex-col gap-6">
              <SecurityTips
                translations={{
                  title: t.securityTitle,
                  tips: t.securityTips,
                }}
              />

              {/* 🔹 Anúncio Vertical (manual) */}
              <div className="w-full my-6">
                <ins
                  className="adsbygoogle"
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-9180151864858869"
                  data-ad-slot="6119528354"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                ></ins>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 text-center text-muted-foreground text-sm animate-fade-in border-t border-border pt-8">
            <p>© 2025 Password Generator. All passwords are generated locally in your browser.</p>
            <p className="mt-2 text-xs">Your security is our priority. No data is stored or transmitted.</p>
            <p className="mt-4 flex flex-wrap justify-center gap-2">
              <Link to="/about-us" className="text-primary hover:underline text-xs">About Us</Link>
              {" • "}
              <Link to="/contact-us" className="text-primary hover:underline text-xs">Contact Us</Link>
              {" • "}
              <Link to="/privacy-policy" className="text-primary hover:underline text-xs">Privacy Policy</Link>
              {" • "}
              <Link to="/cookie-policy" className="text-primary hover:underline text-xs">Cookie Policy</Link>
            </p>

            {/* Donate Section */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <p className="font-medium text-foreground">Donate to support this project 💙</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => handleCopy("1DFPKXMbfbjdGjWUwkBiX2EEGa45ZhuTYj", "BTC")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
                >
                  BTC
                </button>
                <button
                  onClick={() => handleCopy("4RgbL64ZFmAH2LVD8EF9ZzuvvwEpRbLoUS3rPkNtGjXf", "SOL")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
                >
                  SOL
                </button>
                <button
                  onClick={() => handleCopy("0x6585bC3996d5D4594e26bd8909c55661440d26F6", "ETH")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
                >
                  ETH
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Click a button to copy wallet address
              </p>
            </div>

            {/* Daily Visitors Counter */}
            <div className="mt-4 text-sm text-muted-foreground">
              Visitors today: {visitorCount}
            </div>

            {/* Toast Notification */}
            {copied && (
              <div className="fixed bottom-5 right-5 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
                {copied}
              </div>
            )}
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;

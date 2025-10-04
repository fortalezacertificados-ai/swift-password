import { useState } from "react";
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

  const t = translations[language];

  const handleCopy = (address: string, coin: string) => {
    navigator.clipboard.writeText(address);
    setCopied(`${coin} address copied!`);
    setTimeout(() => setCopied(null), 2000);
  };

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
          <div className="flex items-center gap-4">
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

          <div className="lg:col-span-1">
            <SecurityTips
              translations={{
                title: t.securityTitle,
                tips: t.securityTips,
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground text-sm animate-fade-in border-t border-border pt-8">
          <p>© 2025 Password Generator. All passwords are generated locally in your browser.</p>
          <p className="mt-2 text-xs">Your security is our priority. No data is stored or transmitted.</p>
          <p className="mt-4">
            <Link to="/cookie-policy" className="text-primary hover:underline text-xs">Cookie Policy</Link>
            {" • "}
            <Link to="/privacy-policy" className="text-primary hover:underline text-xs">Privacy Policy</Link>
          </p>

          {/* Donate Section */}
          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="font-medium text-foreground">Donate to support this project 💙</p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {/* BTC */}
              <button
                onClick={() => handleCopy("1DFPKXMbfbjdGjWUwkBiX2EEGa45ZhuTYj", "BTC")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
              >
                {/* Bitcoin Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                  <circle cx="16" cy="16" r="16" fill="#f7931a"/>
                  <path d="M17.6 17.7c.2 1.5-2.2 2-3 2.2l.6 2.5-1.4.3-.6-2.4c-.4.1-.9.2-1.3.3l.6 2.5-1.4.3-.6-2.5-2 .5-.4-1.5 1.9-.5-.9-3.5-2 .5-.4-1.5 2-.5-.6-2.5 1.4-.3.6 2.4c.4-.1.8-.2 1.2-.3l-.6-2.4 1.4-.3.6 2.4c2.3-.5 4.9-.4 5.3 1.8.2 1.1-.3 1.8-1.3 2.1.9.2 1.7.7 1.9 1.7z" fill="#fff"/>
                </svg>
                BTC
              </button>

              {/* SOL */}
              <button
                onClick={() => handleCopy("4RgbL64ZFmAH2LVD8EF9ZzuvvwEpRbLoUS3rPkNtGjXf", "SOL")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
              >
                {/* Solana Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 311" className="w-5 h-5">
                  <defs><linearGradient id="solana" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop stopColor="#9945FF" offset="0%"/><stop stopColor="#14F195" offset="100%"/>
                  </linearGradient></defs>
                  <path d="M64.8 237.9c2.1-2.1 4.9-3.3 7.9-3.3h317.8c6.6 0 9.9 8 5.2 12.7l-68.6 68.9c-2.1 2.1-4.9 3.3-7.9 3.3H1.4c-6.6 0-9.9-8-5.2-12.7l68.6-68.9zM64.8 4.2c2.1-2.1 4.9-3.3 7.9-3.3h317.8c6.6 0 9.9 8 5.2 12.7l-68.6 68.9c-2.1 2.1-4.9 3.3-7.9 3.3H1.4c-6.6 0-9.9-8-5.2-12.7L64.8 4.2zM332.1 121c2.1-2.1 4.9-3.3 7.9-3.3H397c6.6 0 9.9 8 5.2 12.7l-68.6 68.9c-2.1 2.1-4.9 3.3-7.9 3.3H13.3c-6.6 0-9.9-8-5.2-12.7L332.1 121z" fill="url(#solana)"/>
                </svg>
                SOL
              </button>

              {/* ETH */}
              <button
                onClick={() => handleCopy("0x6585bC3996d5D4594e26bd8909c55661440d26F6", "ETH")}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm"
              >
                {/* Ethereum Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 417" className="w-5 h-5">
                  <polygon fill="#343434" points="127.9,0 124.5,12.1 124.5,279.1 127.9,282.5 255.8,209.7"/>
                  <polygon fill="#8C8C8C" points="127.9,0 0,209.7 127.9,282.5 127.9,150.4"/>
                  <polygon fill="#3C3C3B" points="127.9,306.7 125.9,309.1 125.9,412.6 127.9,417 255.9,234.1"/>
                  <polygon fill="#8C8C8C" points="127.9,417 127.9,306.7 0,234.1"/>
                </svg>
                ETH
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-2">
              Click a button to copy wallet address
            </p>
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

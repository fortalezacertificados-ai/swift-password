import { useState } from "react";
import PasswordGenerator from "@/components/PasswordGenerator";
import SecurityTips from "@/components/SecurityTips";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translations, Language } from "@/lib/translations";

const Index = () => {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Language Switcher */}
        <header className="flex justify-end mb-8 animate-fade-in">
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={(lang) => setLanguage(lang as Language)}
          />
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
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
        <footer className="mt-16 text-center text-muted-foreground text-sm animate-fade-in">
          <p>© 2025 Password Generator. All passwords are generated locally in your browser.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;

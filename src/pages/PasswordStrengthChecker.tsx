import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Check, X, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translations, Language } from "@/lib/translations";

const PasswordStrengthChecker = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const t = translations[language];

  // Calculate password strength
  const calculateStrength = (pwd: string) => {
    let score = 0;
    const checks = {
      length: pwd.length >= 12,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /[0-9]/.test(pwd),
      symbols: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };

    if (checks.length) score += 20;
    if (checks.uppercase) score += 20;
    if (checks.lowercase) score += 20;
    if (checks.numbers) score += 20;
    if (checks.symbols) score += 20;

    let strength: "weak" | "medium" | "strong" = "weak";
    if (score >= 80) strength = "strong";
    else if (score >= 50) strength = "medium";

    return { score, checks, strength };
  };

  const { score, checks, strength } = password ? calculateStrength(password) : { score: 0, checks: null, strength: "weak" as const };

  const getStrengthColor = () => {
    if (strength === "strong") return "text-green-500";
    if (strength === "medium") return "text-yellow-500";
    return "text-red-500";
  };

  const getStrengthBgColor = () => {
    if (strength === "strong") return "bg-green-500";
    if (strength === "medium") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Navigation */}
        <header className="flex justify-between items-center mb-8 animate-fade-in">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{t.generatorLink}</span>
          </Link>
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={(lang) => setLanguage(lang as Language)}
          />
        </header>

        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {t.strengthChecker}
          </h1>
        </div>

        {/* Strength Checker Card */}
        <Card className="p-8 mb-8 animate-fade-in">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.enterPassword}
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="pr-24"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </div>
            </div>

            {password && (
              <>
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{t.strengthResult}</span>
                    <span className={`text-sm font-bold ${getStrengthColor()}`}>
                      {t[strength].toUpperCase()}
                    </span>
                  </div>
                  <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full transition-all duration-500 ${getStrengthBgColor()}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className={`p-4 rounded-lg border ${
                  strength === "strong" ? "bg-green-500/10 border-green-500/20" :
                  strength === "medium" ? "bg-yellow-500/10 border-yellow-500/20" :
                  "bg-red-500/10 border-red-500/20"
                }`}>
                  <p className="text-sm">
                    {strength === "strong" ? t.strongDescription :
                     strength === "medium" ? t.mediumDescription :
                     t.weakDescription}
                  </p>
                </div>

                {/* Criteria Checklist */}
                <div className="space-y-3">
                  <h3 className="font-semibold">{t.strengthCriteria}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {checks?.length ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className={checks?.length ? "text-foreground" : "text-muted-foreground"}>
                        {t.criteriaLength}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {checks?.uppercase ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className={checks?.uppercase ? "text-foreground" : "text-muted-foreground"}>
                        {t.criteriaUppercase}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {checks?.lowercase ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className={checks?.lowercase ? "text-foreground" : "text-muted-foreground"}>
                        {t.criteriaLowercase}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {checks?.numbers ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className={checks?.numbers ? "text-foreground" : "text-muted-foreground"}>
                        {t.criteriaNumbers}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {checks?.symbols ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                      <span className={checks?.symbols ? "text-foreground" : "text-muted-foreground"}>
                        {t.criteriaSymbols}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-sm animate-fade-in">
          <p>© 2025 Password Generator. All passwords are checked locally in your browser.</p>
          <p className="mt-2 text-xs">Your security is our priority. No data is stored or transmitted.</p>
        </footer>
      </div>
    </main>
  );
};

export default PasswordStrengthChecker;

import { Card } from "@/components/ui/card";
import { Shield, Key, Lock, Eye } from "lucide-react";
import passwordProtection from "@/assets/password-protection.jpg";
import strongPassword from "@/assets/strong-password.jpg";

interface PasswordGuideProps {
  translations: {
    guideTitle: string;
    whatIsSecurePassword: string;
    whatIsSecurePasswordText: string;
    howToCreate: string;
    howToCreateText: string;
    commonMistakes: string;
    commonMistakesText: string;
    bestPractices: string;
    bestPracticesText: string;
  };
}

const PasswordGuide = ({ translations }: PasswordGuideProps) => {
  return (
    <section className="space-y-8 mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
        {translations.guideTitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* What is a Secure Password */}
        <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 animate-fade-in hover:border-primary/40 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {translations.whatIsSecurePassword}
            </h3>
          </div>
          <img
            src={passwordProtection}
            alt="Password Protection"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-muted-foreground leading-relaxed">
            {translations.whatIsSecurePasswordText}
          </p>
        </Card>

        {/* How to Create */}
        <Card className="p-8 backdrop-blur-sm bg-card/50 border-accent/20 animate-fade-in hover:border-accent/40 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shrink-0">
              <Key className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {translations.howToCreate}
            </h3>
          </div>
          <img
            src={strongPassword}
            alt="Strong Password"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-muted-foreground leading-relaxed">
            {translations.howToCreateText}
          </p>
        </Card>

        {/* Common Mistakes */}
        <Card className="p-8 backdrop-blur-sm bg-card/50 border-destructive/20 animate-fade-in hover:border-destructive/40 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-destructive rounded-xl shrink-0">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {translations.commonMistakes}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {translations.commonMistakesText}
          </p>
        </Card>

        {/* Best Practices */}
        <Card className="p-8 backdrop-blur-sm bg-card/50 border-primary/20 animate-fade-in hover:border-primary/40 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              {translations.bestPractices}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {translations.bestPracticesText}
          </p>
        </Card>
      </div>
    </section>
  );
};

export default PasswordGuide;

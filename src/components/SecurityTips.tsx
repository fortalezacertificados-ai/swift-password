import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface SecurityTipsProps {
  translations: {
    title: string;
    tips: string[];
  };
}

const SecurityTips = ({ translations }: SecurityTipsProps) => {
  return (
    <Card className="p-6 backdrop-blur-sm bg-card/50 border-accent/20 animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span className="text-accent">🔐</span>
        {translations.title}
      </h2>
      <ul className="space-y-3">
        {translations.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SecurityTips;

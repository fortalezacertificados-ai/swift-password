import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Copy, RefreshCw, Shield } from "lucide-react";
import { toast } from "sonner";

interface PasswordGeneratorProps {
  translations: {
    title: string;
    subtitle: string;
    length: string;
    uppercase: string;
    lowercase: string;
    numbers: string;
    symbols: string;
    generate: string;
    copy: string;
    copied: string;
  };
}

const PasswordGenerator = ({ translations }: PasswordGeneratorProps) => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
      toast.error("Please select at least one character type");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = async () => {
    if (!password) {
      toast.error("Generate a password first!");
      return;
    }
    
    try {
      await navigator.clipboard.writeText(password);
      toast.success(translations.copied);
    } catch (err) {
      toast.error("Failed to copy password");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Card className="p-8 space-y-6 backdrop-blur-sm bg-card/50 border-primary/20 animate-slide-up">
        {/* Password Display */}
        <div className="relative">
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-primary/30 min-h-[60px]">
            <div className="flex-1 font-mono text-lg break-all">
              {password || "••••••••••••••••"}
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={copyToClipboard}
              className="shrink-0 hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Copy className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Length Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-base">{translations.length}</Label>
            <span className="text-2xl font-bold text-primary">{length}</span>
          </div>
          <Slider
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            min={6}
            max={32}
            step={1}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <Checkbox
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="uppercase" className="cursor-pointer flex-1 text-base">
              {translations.uppercase}
            </Label>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <Checkbox
              id="lowercase"
              checked={includeLowercase}
              onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="lowercase" className="cursor-pointer flex-1 text-base">
              {translations.lowercase}
            </Label>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <Checkbox
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="numbers" className="cursor-pointer flex-1 text-base">
              {translations.numbers}
            </Label>
          </div>

          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <Checkbox
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label htmlFor="symbols" className="cursor-pointer flex-1 text-base">
              {translations.symbols}
            </Label>
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={generatePassword}
          className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          {translations.generate}
        </Button>
      </Card>
    </div>
  );
};

export default PasswordGenerator;

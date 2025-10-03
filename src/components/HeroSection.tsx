import { Shield } from "lucide-react";
import heroImage from "@/assets/security-hero.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl mb-16 animate-fade-in">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Security Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      <div className="relative z-10 text-center py-20 px-4">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-primary rounded-2xl mb-6 animate-glow">
          <Shield className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          {title}
        </h1>
        <p className="text-2xl text-foreground/90 max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group p-6 md:p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 border border-border/50 hover:border-primary/20 animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;

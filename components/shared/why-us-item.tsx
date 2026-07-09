import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyUsItemProps {
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function WhyUsItem({ title, description, className }: WhyUsItemProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 rounded-2xl border border-white/[0.08] bg-surface/30 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-surface/50",
        className
      )}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Check className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}

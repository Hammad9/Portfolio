import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "subtle";
}

export function GradientText({ children, className, variant = "default" }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        variant === "default"
          ? "bg-gradient-to-r from-primary via-accent to-secondary"
          : "bg-gradient-to-br from-foreground via-foreground to-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

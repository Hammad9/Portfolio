import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "primary" | "accent" | "secondary";
}

const glowColors = {
  primary: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
  accent: "hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]",
  secondary: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]",
};

export function GlowCard({
  children,
  className,
  hover = true,
  glowColor = "primary",
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300",
        hover && "hover:-translate-y-1 hover:border-white/[0.15]",
        hover && glowColors[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}

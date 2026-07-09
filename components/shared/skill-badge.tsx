import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  level?: string;
  className?: string;
}

export function SkillBadge({ name, level, className }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/[0.08] bg-surface/50 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.25)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium text-foreground">{name}</span>
        {level && (
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {level}
          </span>
        )}
      </div>
    </div>
  );
}

interface TechBadgeProps {
  name: string;
  category?: string;
  className?: string;
}

export function TechBadge({ name, category, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.08] bg-surface-elevated/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/30 hover:text-foreground",
        className
      )}
    >
      {name}
      {category && (
        <span className="ml-2 text-xs text-muted-foreground">{category}</span>
      )}
    </span>
  );
}

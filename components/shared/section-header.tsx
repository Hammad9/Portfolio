import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg text-muted", centered && "mx-auto max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}

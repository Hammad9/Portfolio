import { cn } from "@/lib/utils";

export function MDXComponents() {
  return {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className={cn(
          "mt-8 mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={cn(
          "mt-8 mb-4 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className={cn(
          "mt-6 mb-3 font-heading text-xl font-bold text-foreground md:text-2xl",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        className={cn("mb-4 text-lg leading-relaxed text-muted", className)}
        {...props}
      />
    ),
    a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = href?.startsWith("http");
      return (
        <a
          href={href}
          className={cn(
            "font-medium text-primary underline-offset-4 hover:underline",
            className
          )}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        />
      );
    },
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className={cn("mb-6 list-disc space-y-2 pl-6 text-muted", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className={cn("mb-6 list-decimal space-y-2 pl-6 text-muted", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className={cn("text-lg leading-relaxed", className)} {...props} />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong className={cn("font-semibold text-foreground", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className={cn(
          "my-6 border-l-4 border-primary bg-surface/50 p-6 italic text-foreground",
          className
        )}
        {...props}
      />
    ),
    hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
      <hr className={cn("my-8 border-white/[0.08]", className)} {...props} />
    ),
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code
        className={cn(
          "rounded bg-surface-elevated px-1.5 py-0.5 font-mono text-sm text-accent",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        className={cn(
          "mb-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-surface p-4 font-mono text-sm",
          className
        )}
        {...props}
      />
    ),
  };
}

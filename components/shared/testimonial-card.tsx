import { Quote } from "lucide-react";
import { GlowCard } from "@/components/shared/glow-card";
import type { Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlowCard className="relative h-full">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
      <blockquote className="mb-6 text-lg text-foreground">&ldquo;{testimonial.quote}&rdquo;</blockquote>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading font-bold text-primary-foreground">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div className="font-heading font-semibold text-foreground">{testimonial.author}</div>
          <div className="text-sm text-muted">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

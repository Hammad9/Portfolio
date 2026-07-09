"use client";

import { Container } from "@/components/layout/container";
import { MotionSection } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Testimonials"
            title={
              <>
                What clients say about <GradientText>working with me</GradientText>
              </>
            }
            description="Feedback from people who have seen the impact of clean code, smart automation, and reliable delivery."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2"
                >
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static translate-x-0 translate-y-0 border-white/[0.08] bg-surface hover:bg-surface-elevated" />
              <CarouselNext className="static translate-x-0 translate-y-0 border-white/[0.08] bg-surface hover:bg-surface-elevated" />
            </div>
          </Carousel>
        </MotionSection>
      </Container>
    </section>
  );
}

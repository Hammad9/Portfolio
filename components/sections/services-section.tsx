"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { ServiceCard } from "@/components/shared/service-card";
import { services, serviceCategories } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<typeof serviceCategories[0]["id"]>("development");

  const filteredServices = services.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Services that <GradientText>drive business outcomes</GradientText>
              </>
            }
            description="From custom software to CRM automation and procurement consulting, I help organizations operate smarter and grow faster."
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "border border-white/[0.08] bg-surface/50 text-muted hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.2}>
          <StaggerContainer
            key={activeCategory}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.1}
          >
            {filteredServices.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </MotionSection>
      </Container>
    </section>
  );
}

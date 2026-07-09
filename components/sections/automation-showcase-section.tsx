"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { MotionSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { automationFeatures } from "@/lib/data/automation-showcase";
import { cn } from "@/lib/utils";

export function AutomationShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(automationFeatures[0].id);
  const activeData = automationFeatures.find((f) => f.id === activeFeature)!;

  return (
    <section id="automation" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Automation Showcase"
            title={
              <>
                GoHighLevel workflows that <GradientText>scale your business</GradientText>
              </>
            }
            description="A glimpse into the automation systems I design to capture leads, nurture relationships, and close more deals."
          />
        </MotionSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <MotionSection delay={0.1}>
            <StaggerContainer className="space-y-3" staggerDelay={0.08}>
              {automationFeatures.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeFeature === feature.id;

                return (
                  <StaggerItem key={feature.id}>
                    <button
                      onClick={() => setActiveFeature(feature.id)}
                      className={cn(
                        "w-full rounded-xl border p-5 text-left transition-all",
                        isActive
                          ? "border-primary/50 bg-primary/10"
                          : "border-white/[0.08] bg-surface/30 hover:border-white/[0.15]"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-surface-elevated text-muted"
                          )}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3
                            className={cn(
                              "font-heading text-lg font-semibold",
                              isActive ? "text-primary" : "text-foreground"
                            )}
                          >
                            {feature.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted">{feature.description}</p>
                        </div>
                      </div>
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </MotionSection>

          <MotionSection delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlowCard className="h-full">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <activeData.icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {activeData.title}
                  </h3>
                  <p className="mt-3 text-muted">{activeData.description}</p>

                  <div className="mt-8">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                      How it works
                    </h4>
                    <ol className="mt-4 space-y-4">
                      {activeData.steps.map((step, index) => (
                        <li key={index} className="flex gap-4">
                          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                            {index + 1}
                          </span>
                          <span className="text-muted">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}

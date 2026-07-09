"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { MotionSection } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { GlowCard } from "@/components/shared/glow-card";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export function TechStackExplorerSection() {
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0].skills[0]);
  const selectedCategory = skillCategories.find((cat) =>
    cat.skills.some((skill) => skill.name === selectedSkill.name)
  );

  return (
    <section id="tech-stack" className="relative overflow-hidden bg-background py-24 md:py-32">
      <Container>
        <MotionSection>
          <SectionHeader
            eyebrow="Tech Stack Explorer"
            title={
              <>
                Explore my <GradientText>technology toolkit</GradientText>
              </>
            }
            description="Hover over any technology to see my experience level and how I use it to deliver business value."
          />
        </MotionSection>

        <div className="grid gap-8 lg:grid-cols-12">
          <MotionSection delay={0.1} className="lg:col-span-7">
            <div className="space-y-8">
              {skillCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.button
                        key={skill.name}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        onClick={() => setSelectedSkill(skill)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                          selectedSkill.name === skill.name
                            ? "border-primary bg-primary/20 text-primary"
                            : "border-white/[0.08] bg-surface/50 text-muted hover:border-primary/30 hover:text-foreground"
                        )}
                      >
                        {skill.name}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.2} className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <GlowCard className="h-full min-h-[300px]">
                  <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {selectedCategory?.title}
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-foreground">
                    {selectedSkill.name}
                  </h3>
                  <div className="mt-4 inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    Experience: {selectedSkill.level}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    {selectedSkill.description}
                  </p>

                  <div className="mt-8 rounded-xl bg-surface-elevated/50 p-4">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                      Business Application
                    </h4>
                    <p className="mt-2 text-sm text-muted">
                      Used to deliver reliable, scalable solutions that align with client goals and reduce long-term technical debt.
                    </p>
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

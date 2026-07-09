"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { MotionSection } from "@/components/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { GradientText } from "@/components/shared/gradient-text";
import { SkillBadge } from "@/components/shared/skill-badge";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const activeCategoryData = skillCategories.find((cat) => cat.id === activeCategory)!;

  return (
    <section id="skills" className="relative overflow-hidden bg-surface/30 py-24 md:py-32">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />

      <Container className="relative z-10">
        <MotionSection>
          <SectionHeader
            eyebrow="Skills"
            title={
              <>
                Technologies &amp; expertise that <GradientText>power modern businesses</GradientText>
              </>
            }
            description="A multi-disciplinary skill set spanning frontend engineering, backend integration, automation, and digital procurement."
          />
        </MotionSection>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Category tabs */}
          <MotionSection delay={0.1} className="lg:col-span-4">
            <div className="sticky top-24 space-y-3">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "w-full rounded-xl border p-5 text-left transition-all",
                    activeCategory === category.id
                      ? "border-primary/50 bg-primary/10"
                      : "border-white/[0.08] bg-surface/30 hover:border-white/[0.15]"
                  )}
                >
                  <h3
                    className={cn(
                      "font-heading text-lg font-semibold",
                      activeCategory === category.id ? "text-primary" : "text-foreground"
                    )}
                  >
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                </button>
              ))}
            </div>
          </MotionSection>

          {/* Skills grid */}
          <MotionSection delay={0.2} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {activeCategoryData.title}
                  </h3>
                  <p className="mt-2 text-muted">{activeCategoryData.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {activeCategoryData.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}

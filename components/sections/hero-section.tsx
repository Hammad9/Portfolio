"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { GradientText } from "@/components/shared/gradient-text";
import { TypewriterText } from "@/components/motion/typewriter-text";
import { FloatingElement } from "@/components/motion";
import { personalInfo } from "@/lib/data/site";

const techIcons = [
  { name: "React", color: "#61DAFB", x: "10%", y: "20%", delay: 0 },
  { name: "Next.js", color: "#FFFFFF", x: "85%", y: "15%", delay: 0.5 },
  { name: "TypeScript", color: "#3178C6", x: "75%", y: "75%", delay: 1 },
  { name: "JavaScript", color: "#F7DF1E", x: "15%", y: "70%", delay: 1.5 },
  { name: "Git", color: "#F05032", x: "50%", y: "10%", delay: 2 },
  { name: "MongoDB", color: "#47A248", x: "90%", y: "50%", delay: 2.5 },
  { name: "SQL", color: "#F29111", x: "5%", y: "45%", delay: 3 },
];

function TechIcon({ icon }: { icon: typeof techIcons[0] }) {
  return (
    <FloatingElement
      y={8}
      duration={4 + icon.delay * 0.5}
      className="absolute"
      style={{ left: icon.x, top: icon.y }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-surface/80 backdrop-blur-md shadow-lg md:h-14 md:w-14"
        style={{ boxShadow: `0 0 20px -5px ${icon.color}40` }}
      >
        <span className="text-xs font-bold" style={{ color: icon.color }}>
          {icon.name.slice(0, 2)}
        </span>
      </div>
    </FloatingElement>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <Link href="#stats" className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground">
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-6 rounded-full border-2 border-current p-1">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-full rounded-full bg-current"
          />
        </div>
      </Link>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m <br />
              <GradientText>Muhammad Hammad</GradientText>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 font-heading text-xl text-muted sm:text-2xl md:text-3xl"
            >
              <TypewriterText
                texts={personalInfo.headlines}
                className="text-accent"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/[0.08] bg-surface/50 hover:bg-surface-elevated"
              >
                <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-foreground hover:bg-surface/50"
              >
                {/* <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Link> */}
              </Button>
            </motion.div>
          </div>

          {/* Right content - Hero image */}
          < motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 relative flex items-center justify-center lg:order-2"
          >
            <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px]">
              {/* Gradient blob behind image */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-3xl"
              />

              {/* Profile image */}
              <div className="absolute inset-4 overflow-hidden rounded-3xl border border-white/[0.08] bg-surface/50 backdrop-blur-sm">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 400px, 500px"
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute inset-0">
                {techIcons.map((icon) => (
                  <TechIcon key={icon.name} icon={icon} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}

"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionSection({ children, className, delay = 0, ...props }: MotionSectionProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  ...props
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        reducedMotion
          ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
          : {
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  y?: number;
  style?: React.CSSProperties;
}

export function FloatingElement({
  children,
  className,
  duration = 4,
  y = 10,
  style,
}: FloatingElementProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={reducedMotion ? {} : { y: [-y, y, -y] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}

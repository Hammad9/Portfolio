"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

export function CountUp({ end, duration = 2, suffix = "", prefix = "", className, delay = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;

    if (reducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, end, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

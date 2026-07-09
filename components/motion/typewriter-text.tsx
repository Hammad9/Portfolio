"use client";

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypewriterText({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(text.substring(0, currentText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (currentText === text) {
      setIsPaused(true);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(text.substring(0, currentText.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-block min-h-[1.2em]", className)}>
      {currentText}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-primary align-middle" />
    </span>
  );
}

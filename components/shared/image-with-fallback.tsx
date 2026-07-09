"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const fallbackSrc = "/images/placeholder.svg";

  if (fill) {
    return (
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        onError={() => setError(true)}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}

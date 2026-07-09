import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "default" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-4xl",
  default: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
  full: "max-w-none",
};

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}

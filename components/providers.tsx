import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <TooltipProvider delay={200}>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#18181b",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#f8fafc",
          },
        }}
      />
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  );
}

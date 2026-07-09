import { CountUp } from "@/components/motion/count-up";
import { GlowCard } from "@/components/shared/glow-card";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix = "", label, delay = 0 }: StatCardProps) {
  return (
    <GlowCard className="text-center" hover={false}>
      <div className="font-heading text-4xl font-bold text-foreground md:text-5xl">
        <CountUp end={value} suffix={suffix} delay={delay} />
      </div>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </GlowCard>
  );
}

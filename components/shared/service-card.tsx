import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/shared/glow-card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <GlowCard className="group flex h-full flex-col">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 flex-1 text-muted">{service.description}</p>
      <div className="mt-4 rounded-lg bg-surface-elevated/50 p-3">
        <p className="text-sm text-foreground">
          <span className="font-semibold text-primary">Business value: </span>
          {service.value}
        </p>
      </div>
      <Button
        asChild
        variant="ghost"
        className="mt-4 w-full justify-between px-0 text-primary hover:bg-transparent hover:text-primary/80"
      >
        <Link href="#contact">
          Discuss this service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </GlowCard>
  );
}

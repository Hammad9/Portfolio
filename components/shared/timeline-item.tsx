import type { Experience } from "@/lib/data/experience";

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export function TimelineItem({ experience, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 h-[calc(100%+2rem)] w-px bg-gradient-to-b from-primary/50 to-transparent md:left-[13px]" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background md:top-1.5">
        <div className="absolute inset-1 rounded-full bg-primary" />
      </div>

      <div className="rounded-2xl border border-white/[0.08] bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-white/[0.15]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {experience.startDate} — {experience.endDate}
          </span>
          <span className="text-sm text-muted">{experience.type}</span>
        </div>

        <h3 className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
          {experience.role}
        </h3>
        <div className="mt-1 text-muted">
          {experience.company} • {experience.location}
        </div>

        <p className="mt-4 text-muted">{experience.description}</p>

        <ul className="mt-4 space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {achievement}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

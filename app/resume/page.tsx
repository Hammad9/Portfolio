import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { personalInfo } from "@/lib/data/site";
import { experiences } from "@/lib/data/experience";
import { skillCategories } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Resume",
  description: `Resume of ${personalInfo.name} - Software Engineer, Frontend Developer, and Business Automation Specialist.`,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema,
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Resume", url: `${siteConfig.url}/resume` },
          ]),
        ]}
      />
      <section className="relative overflow-hidden bg-background pb-24 pt-32 md:pb-32">
        <Container className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
            <Button
              asChild
              variant="outline"
              className="border-white/[0.08] bg-surface/50 hover:bg-surface-elevated"
            >
              <Link href="/">← Back to home</Link>
            </Button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-surface/30 p-8 md:p-12 print:border-0 print:bg-white">
            <header className="border-b border-white/[0.08] pb-8">
              <h1 className="font-heading text-4xl font-bold text-foreground print:text-black">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-xl text-primary print:text-black">
                Software Engineer & Business Automation Specialist
              </p>
              <p className="mt-4 max-w-2xl text-muted print:text-black">{personalInfo.summary}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted print:text-black">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-primary">
                  <Mail className="h-4 w-4" /> {personalInfo.email}
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary">
                  <LinkedinIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary">
                  <GithubIcon className="h-4 w-4" /> GitHub
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" /> {personalInfo.location}
                </span>
              </div>
            </header>

            <div className="grid gap-12 pt-8 md:grid-cols-3">
              <div className="md:col-span-2 space-y-10">
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground print:text-black">Experience</h2>
                  <div className="mt-6 space-y-8">
                    {experiences.map((exp) => (
                      <div key={exp.id}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-heading text-lg font-semibold text-foreground print:text-black">{exp.role}</h3>
                          <span className="text-sm text-muted print:text-black">{exp.startDate} — {exp.endDate}</span>
                        </div>
                        <p className="text-muted print:text-black">{exp.company} • {exp.location}</p>
                        <ul className="mt-3 space-y-1">
                          {exp.achievements.slice(0, 3).map((achievement, i) => (
                            <li key={i} className="text-sm text-muted print:text-black">• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground print:text-black">Featured Projects</h2>
                  <div className="mt-6 space-y-6">
                    {projects.slice(0, 3).map((project) => (
                      <div key={project.id}>
                        <h3 className="font-heading text-lg font-semibold text-foreground print:text-black">{project.title}</h3>
                        <p className="text-sm text-muted print:text-black">{project.description}</p>
                        <p className="mt-1 text-sm text-primary print:text-black">{project.techStack.join(" • ")}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-10">
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground print:text-black">Skills</h2>
                  <div className="mt-4 space-y-6">
                    {skillCategories.map((category) => (
                      <div key={category.id}>
                        <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary print:text-black">{category.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="rounded-full border border-white/[0.08] bg-surface-elevated/50 px-2.5 py-1 text-xs text-muted print:border-black print:bg-white print:text-black"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground print:text-black">Education & Certifications</h2>
                  <p className="mt-4 text-muted print:text-black">
                    Continuous learning through professional projects, online courses, and industry certifications in web development, automation, and digital procurement.
                  </p>
                </section>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

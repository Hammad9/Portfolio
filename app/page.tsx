import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { AutomationShowcaseSection } from "@/components/sections/automation-showcase-section";
import { EpadsExpertiseSection } from "@/components/sections/epads-expertise-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { siteConfig } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema,
          websiteSchema,
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
          ]),
        ]}
      />
      <HeroSection />
      
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <AutomationShowcaseSection />
      <EpadsExpertiseSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}

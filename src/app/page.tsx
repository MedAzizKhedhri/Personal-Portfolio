import { Hero } from "@/components/hero";
import { BentoSection } from "@/components/bento-section";
import { FeaturesSection } from "@/components/features-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ScrollReveal className="w-full">
        <BentoSection />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal className="w-full">
        <AboutSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
}

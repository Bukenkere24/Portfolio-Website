import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { ResponsiveGrid } from "@/components/common/ResponsiveGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechBadge } from "@/components/common/TechBadge";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data";
import type { SkillCategory } from "@/types";

const categoryLabels: Record<SkillCategory, string> = {
  languages: "Languages",
  frameworks: "Frameworks",
  tools: "Tools",
  cloud: "Cloud & Data",
  ai: "AI & ML",
};

const categories: SkillCategory[] = [
  "languages",
  "frameworks",
  "tools",
  "cloud",
  "ai",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies behind the work."
          subtitle="A practical stack shaped by projects, internships, and continuous learning."
        />

        <ResponsiveGrid className="mt-16 gap-6">
          {categories.map((category, index) => {
            const items = skills.filter((skill) => skill.category === category);
            if (items.length === 0) return null;

            return (
              <FadeIn key={category} delay={index * 0.05}>
                <Card padding="md">
                  <h3 className="text-lg font-semibold">{categoryLabels[category]}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <TechBadge key={skill.name} label={skill.name} />
                    ))}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </ResponsiveGrid>
      </Container>
    </section>
  );
}

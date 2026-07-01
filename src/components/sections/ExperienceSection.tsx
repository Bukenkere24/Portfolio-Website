import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TechBadge } from "@/components/common/TechBadge";
import { Container } from "@/components/layout/Container";
import { experience } from "@/data";
import { formatDateRange } from "@/utils/format";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Internships and practical engineering work."
          subtitle="Hands-on experience across AI systems, enterprise automation, and production-minded delivery."
        />

        <div className="mt-16 space-y-5">
          {experience.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.06}>
              <Card padding="lg">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 text-text-secondary">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-cyan">
                    {formatDateRange(item.startDate, item.endDate)}
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-text-secondary">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

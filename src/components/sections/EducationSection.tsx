import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { education } from "@/data";
import { formatDateRange } from "@/utils/format";

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in computer science."
          subtitle="Building strong fundamentals while applying engineering concepts through projects and internships."
        />

        <div className="mt-16 space-y-5">
          {education.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.06}>
              <Card padding="lg">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.degree} in {item.field}
                    </h3>
                    <p className="mt-1 text-text-secondary">{item.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm text-cyan">
                      {formatDateRange(item.startDate, item.endDate)}
                    </p>
                    {item.gpa && (
                      <p className="mt-1 text-sm text-text-secondary">{item.gpa}</p>
                    )}
                  </div>
                </div>
                {item.highlights && (
                  <ul className="mt-5 space-y-2 text-text-secondary">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { ResponsiveGrid } from "@/components/common/ResponsiveGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { certifications } from "@/data";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning beyond the classroom."
          subtitle="Certifications and structured learning that support project work and engineering growth."
        />

        <ResponsiveGrid columns="2" className="mt-16">
          {certifications.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.06}>
              <Card padding="md">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
                  {item.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-text-secondary">{item.issuer}</p>
                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    className="mt-4 inline-flex text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View credential
                  </a>
                )}
              </Card>
            </FadeIn>
          ))}
        </ResponsiveGrid>
      </Container>
    </section>
  );
}

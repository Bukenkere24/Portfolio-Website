import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
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

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {certifications.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.06}>
              <Card className="p-6">
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
        </div>
      </Container>
    </section>
  );
}

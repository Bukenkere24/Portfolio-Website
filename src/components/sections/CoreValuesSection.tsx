import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/common/Card";
import { ResponsiveGrid } from "@/components/common/ResponsiveGrid";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { coreValues } from "@/data";

export function CoreValuesSection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="values-heading">
      <Container>
        <SectionHeading
          eyebrow="Core Values"
          title="The principles behind the work."
          subtitle="Simple ideas that keep the engineering honest, focused, and useful."
        />

        <ResponsiveGrid columns="3" className="mt-16">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <FadeIn key={value.title} delay={index * 0.08}>
                <Card hover padding="md" className="h-full">
                  <div className="grid size-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-text-secondary">{value.description}</p>
                </Card>
              </FadeIn>
            );
          })}
        </ResponsiveGrid>
      </Container>
    </section>
  );
}

import { FadeIn } from "@/components/animations/FadeIn";
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

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <FadeIn key={value.title} delay={index * 0.08}>
                <article className="h-full rounded-card border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
                  <div className="grid size-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-text-secondary">{value.description}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

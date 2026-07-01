import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { technologyFocus } from "@/data";

export function TechnologyPreviewSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology Preview"
          title="Focused on systems that think, scale, and automate."
          subtitle="Instead of a long tool list, these are the engineering areas that define the work."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologyFocus.map((focus, index) => (
            <FadeIn key={focus.title} delay={index * 0.05}>
              <article className="group h-full rounded-card border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.055]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{focus.title}</h3>
                  <ArrowUpRight className="size-5 text-text-secondary transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
                </div>
                <p className="mt-4 text-sm leading-6 text-text-secondary">
                  {focus.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { type ReactNode } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

interface CaseStudySectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  delay?: number;
}

export function CaseStudySection({
  id,
  title,
  children,
  delay = 0,
}: CaseStudySectionProps) {
  return (
    <FadeIn delay={delay}>
      <section id={id} className="scroll-mt-28">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </section>
    </FadeIn>
  );
}

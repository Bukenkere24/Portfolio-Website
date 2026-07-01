import { FadeIn } from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && <p className="type-eyebrow mb-4">{eyebrow}</p>}
        <h2 className="type-section-title text-balance">{title}</h2>
        {subtitle && (
          <p className="mt-5 text-lg text-text-secondary md:text-xl">{subtitle}</p>
        )}
      </div>
    </FadeIn>
  );
}

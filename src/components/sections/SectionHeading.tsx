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
        {eyebrow && (
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-cyan">
            {eyebrow}
          </p>
        )}
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-lg text-text-secondary md:text-xl">{subtitle}</p>
        )}
      </div>
    </FadeIn>
  );
}

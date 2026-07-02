import { FadeIn } from "@/components/animations/FadeIn";
import { SafeImage } from "@/components/common/SafeImage";
import { Container } from "@/components/layout/Container";
import { aboutStory } from "@/data";
import { isValidImageSrc } from "@/utils/images";

export function AboutSection() {
  const hasPortrait = isValidImageSrc(aboutStory.portraitSrc);

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute left-0 top-1/3 size-72 rounded-full bg-purple/10 blur-3xl"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeIn>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-8 rounded-image bg-cyan/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-image border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(248,250,252,0.16),rgba(17,24,39,0.72)_42%,rgba(7,9,15,0.96))]">
                  {hasPortrait ? (
                    <SafeImage
                      src={aboutStory.portraitSrc}
                      alt={aboutStory.portraitAlt}
                      className="h-full w-full object-cover object-[center_20%]"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-8">
                      <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
                        {aboutStory.location}
                      </p>
                      <p className="font-heading text-6xl font-semibold">{aboutStory.monogram}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan">
                {aboutStory.eyebrow}
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                {aboutStory.title}
              </h2>
              <p className="mt-5 text-lg text-text-secondary">{aboutStory.subtitle}</p>
            </FadeIn>

            <div className="mt-8 space-y-5 text-text-secondary">
              {aboutStory.paragraphs.map((paragraph, index) => (
                <FadeIn key={paragraph} delay={0.08 * index}>
                  <p>{paragraph}</p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.25}>
              <figure className="mt-10 rounded-card border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                <figcaption className="mb-3 font-heading text-xl font-semibold">
                  {aboutStory.philosophyTitle}
                </figcaption>
                <blockquote className="text-lg text-text-secondary">
                  &quot;{aboutStory.philosophy}&quot;
                </blockquote>
              </figure>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

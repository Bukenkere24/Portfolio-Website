import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { mission } from "@/data";

export function MissionSection() {
  const Icon = mission.icon;

  return (
    <section className="py-24 md:py-32" aria-labelledby="mission-heading">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-8 grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan">
              <Icon className="size-6" aria-hidden />
            </div>
            <h2
              id="mission-heading"
              className="text-balance text-5xl font-semibold tracking-tight md:text-7xl"
            >
              {mission.headline}
              <span className="mt-3 block bg-gradient-to-r from-cyan via-text-primary to-purple bg-clip-text text-transparent">
                {mission.emphasis}
              </span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg text-text-secondary md:text-xl">
              {mission.body}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

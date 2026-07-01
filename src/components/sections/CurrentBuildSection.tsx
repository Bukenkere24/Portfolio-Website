import { CheckCircle2, CircleDotDashed } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { currentBuild } from "@/data";

export function CurrentBuildSection() {
  return (
    <section id="current-build" className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <article className="relative overflow-hidden rounded-project border border-white/10 bg-white/[0.04] p-8 shadow-[0_24px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
            <div
              aria-hidden
              className="absolute right-0 top-0 size-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-success">
                  <CircleDotDashed className="size-4" aria-hidden />
                  {currentBuild.status}
                </span>
                <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
                  Currently Building: {currentBuild.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-text-secondary">
                  {currentBuild.subtitle}
                </p>
              </div>

              <div>
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.25em] text-cyan">
                  Roadmap
                </p>
                <ol className="grid gap-3 sm:grid-cols-2">
                  {currentBuild.roadmap.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/40 p-4"
                    >
                      <CheckCircle2
                        className={index < 2 ? "size-5 text-success" : "size-5 text-text-secondary"}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        </FadeIn>
      </Container>
    </section>
  );
}

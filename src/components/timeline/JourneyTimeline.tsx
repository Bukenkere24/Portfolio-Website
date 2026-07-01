import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { journeyStages } from "@/data";

export function JourneyTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="journey" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Journey Timeline"
          title="A path shaped by building."
          subtitle="Each stage added a different kind of engineering judgment: fundamentals, AI, client work, automation, and product thinking."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <motion.div
            aria-hidden
            className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan via-accent to-purple md:block"
            initial={reduceMotion ? false : { scaleY: 0 }}
            whileInView={reduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <ol className="space-y-6">
            {journeyStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <FadeIn key={stage.id} delay={Math.min(index * 0.06, 0.32)}>
                  <TimelineItem stage={stage} icon={Icon} />
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

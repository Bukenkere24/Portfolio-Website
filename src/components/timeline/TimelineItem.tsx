import { motion, useReducedMotion } from "framer-motion";
import type { JourneyStage } from "@/types/landing";
import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  stage: JourneyStage;
  icon: LucideIcon;
}

export function TimelineItem({ stage, icon: Icon }: TimelineItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <li className="group grid gap-4 md:grid-cols-[2.5rem_1fr]">
      <motion.div
        className="relative z-10 grid size-10 place-items-center rounded-full border border-white/10 bg-surface text-cyan shadow-[0_0_30px_rgba(6,182,212,0.12)]"
        whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <Icon className="size-4" aria-hidden />
      </motion.div>
      <article
        className="rounded-card border border-white/10 bg-white/[0.035] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/20 group-hover:bg-white/[0.055] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
        data-cursor-hover
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold">{stage.title}</h3>
          <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-xs text-cyan">
            {stage.year}
          </span>
        </div>
        <p className="mt-3 text-text-secondary">{stage.description}</p>
      </article>
    </li>
  );
}

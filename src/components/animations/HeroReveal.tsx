import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePageMotion } from "@/context/PageMotionContext";
import { heroSequence, motionEase, sectionReveal } from "@/constants/motion";

interface HeroRevealProps {
  children: ReactNode;
  step: keyof typeof heroSequence;
}

export function HeroReveal({ children, step }: HeroRevealProps) {
  const { isReady } = usePageMotion();
  const reduceMotion = useReducedMotion();
  const delay = heroSequence[step];

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: sectionReveal.y, filter: `blur(${sectionReveal.blur}px)` }
      }
      animate={
        isReady || reduceMotion
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: sectionReveal.y, filter: `blur(${sectionReveal.blur}px)` }
      }
      transition={{
        duration: reduceMotion ? 0 : sectionReveal.duration,
        delay: reduceMotion ? 0 : delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}

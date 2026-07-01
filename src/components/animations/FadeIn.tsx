import { type ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { motionEase, sectionReveal } from "@/constants/motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = sectionReveal.duration,
  y = sectionReveal.y,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y, filter: `blur(${sectionReveal.blur}px)` }
      }
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : duration, delay, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

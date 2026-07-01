import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface UseIntersectionRevealOptions {
  margin?: string;
  once?: boolean;
}

export function useIntersectionReveal({
  margin = "-80px",
  once = true,
}: UseIntersectionRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` });
  const reduceMotion = useReducedMotion();

  return {
    ref,
    isVisible: reduceMotion || isInView,
    reduceMotion,
  };
}

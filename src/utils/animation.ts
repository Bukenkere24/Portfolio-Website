import { motionEase, sectionReveal } from "@/constants/motion";

export function getRevealTransition(delay = 0, duration = sectionReveal.duration) {
  return {
    duration,
    delay,
    ease: motionEase,
  };
}

export function getStaggerDelay(index: number, step = 0.08, max = 0.32) {
  return Math.min(index * step, max);
}

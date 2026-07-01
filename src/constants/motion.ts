export const motionEase = [0.25, 0.1, 0.25, 1] as const;

export const motionDurations = {
  fast: 0.2,
  base: 0.45,
  section: 0.65,
  slow: 1.1,
} as const;

export const sectionReveal = {
  y: 30,
  blur: 8,
  duration: motionDurations.section,
} as const;

export const stagger = {
  card: 0.08,
  hero: 0.12,
  section: 0.05,
} as const;

export const heroSequence = {
  background: 0,
  aurora: 0.1,
  navbar: 0.15,
  headline: 0.25,
  subheadline: 0.4,
  typing: 0.55,
  cta: 0.7,
  stats: 0.85,
  portrait: 0.6,
  scroll: 1.1,
} as const;

export const buttonMotion = {
  hover: { y: -4, scale: 1.02 },
  tap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 28 },
};

export const cardMotion = {
  hover: { y: -4, scale: 1.01 },
  transition: { duration: motionDurations.base, ease: motionEase },
};

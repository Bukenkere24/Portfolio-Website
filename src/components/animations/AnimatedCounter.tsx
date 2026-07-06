import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Animate without waiting for scroll-into-view (e.g. hero stats above/below fold). */
  immediate?: boolean;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  immediate = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const shouldAnimate = immediate || isInView;
  const [displayValue, setDisplayValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!shouldAnimate) return;

    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1100;

    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Number((value * eased).toFixed(value % 1 === 0 ? 0 : 1)));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    }

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [shouldAnimate, reduceMotion, value]);

  useEffect(() => {
    if (shouldAnimate) return;

    const timeoutId = window.setTimeout(() => setDisplayValue(value), 1500);
    return () => window.clearTimeout(timeoutId);
  }, [shouldAnimate, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useFinePointer } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const finePointer = useFinePointer();
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const enabled = finePointer && !reduceMotion;

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(
        Boolean(
          target?.closest("a, button, [data-cursor-hover], input, textarea, select, label"),
        ),
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan mix-blend-difference"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[199] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/40 bg-cyan/5"
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? 44 : 28,
          height: isHovering ? 44 : 28,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.35 }}
      />
    </>
  );
}

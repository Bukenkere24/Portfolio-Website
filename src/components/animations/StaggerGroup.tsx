import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { stagger } from "@/constants/motion";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = stagger.card,
}: StaggerGroupProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: {},
              visible: { transition: { staggerChildren: staggerDelay } },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduceMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

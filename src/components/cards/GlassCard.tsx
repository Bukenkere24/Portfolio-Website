import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cardPadding } from "@/constants/design";
import { cardMotion } from "@/constants/motion";
import { cn } from "@/utils/cn";

type CardPadding = keyof typeof cardPadding;

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
}

export function GlassCard({
  children,
  className,
  hover = false,
  padding = "md",
}: GlassCardProps) {
  const baseClassName = cn(
    "rounded-card border border-white/10 bg-white/[0.035] shadow-[var(--shadow-card)] backdrop-blur-md",
    cardPadding[padding],
    hover &&
      "transition duration-300 hover:border-cyan/25 hover:bg-white/[0.055] hover:shadow-[var(--shadow-card-hover)]",
    className,
  );

  if (!hover) {
    return <div className={baseClassName}>{children}</div>;
  }

  return (
    <motion.div
      className={baseClassName}
      whileHover={cardMotion.hover}
      transition={cardMotion.transition}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}

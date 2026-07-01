import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cardMotion } from "@/constants/motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  if (!hover) {
    return (
      <div
        className={cn(
          "rounded-card border border-white/10 bg-white/[0.035] backdrop-blur-md",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        "rounded-card border border-white/10 bg-white/[0.035] backdrop-blur-md",
        "hover:border-cyan/25 hover:bg-white/[0.055] hover:shadow-[0_16px_50px_rgba(0,0,0,0.28)]",
        className,
      )}
      whileHover={cardMotion.hover}
      transition={cardMotion.transition}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}

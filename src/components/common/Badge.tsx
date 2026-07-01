import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

const variants = {
  default: "border-white/10 bg-white/5 text-text-secondary",
  accent: "border-accent/20 bg-accent/10 text-accent",
  cyan: "border-cyan/20 bg-cyan/10 text-cyan",
  success: "border-success/20 bg-success/10 text-success",
  purple: "border-purple/20 bg-purple/10 text-purple",
} as const;

interface BadgeProps {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

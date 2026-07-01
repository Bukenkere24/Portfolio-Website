import { cva, type VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import {
  badgeLabels,
  type BadgeIntent,
} from "@/constants/badges";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em]",
  {
    variants: {
      intent: {
        featured: "border-accent/25 bg-accent/10 text-accent",
        ongoing: "border-success/25 bg-success/10 text-success",
        "hackathon-winner": "border-purple/25 bg-purple/10 text-purple",
        "client-project": "border-cyan/25 bg-cyan/10 text-cyan",
        ai: "border-accent/25 bg-accent/10 text-accent",
        ml: "border-purple/25 bg-purple/10 text-purple",
        enterprise: "border-cyan/25 bg-cyan/10 text-cyan",
        default: "border-white/10 bg-white/5 text-text-secondary",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  },
);

type BadgeVariants = VariantProps<typeof badgeVariants>;

interface BadgeProps extends BadgeVariants {
  children?: ReactNode;
  intent?: BadgeIntent;
  label?: string;
  className?: string;
}

export function Badge({
  children,
  intent = "default",
  label,
  className,
}: BadgeProps) {
  const content = children ?? label ?? badgeLabels[intent];

  return (
    <span className={cn(badgeVariants({ intent }), className)}>
      {content}
    </span>
  );
}

export { badgeVariants };

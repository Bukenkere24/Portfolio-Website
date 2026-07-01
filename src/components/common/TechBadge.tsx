import { cn } from "@/utils/cn";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-sm text-text-secondary",
        className,
      )}
    >
      {label}
    </span>
  );
}

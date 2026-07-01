import { badgeLabels, getTechBadgeIntent, type BadgeIntent } from "@/constants/badges";
import { Badge } from "@/components/common/Badge";
import { cn } from "@/utils/cn";

interface TechBadgeProps {
  label: string;
  intent?: BadgeIntent;
  className?: string;
}

const semanticIntents: BadgeIntent[] = ["ai", "ml", "enterprise"];

export function TechBadge({ label, intent, className }: TechBadgeProps) {
  const resolvedIntent = intent ?? getTechBadgeIntent(label);
  const displayLabel = semanticIntents.includes(resolvedIntent)
    ? badgeLabels[resolvedIntent]
    : label;

  return (
    <Badge
      intent={resolvedIntent}
      className={cn(
        !semanticIntents.includes(resolvedIntent) &&
          "normal-case tracking-normal text-xs",
        className,
      )}
    >
      {displayLabel}
    </Badge>
  );
}

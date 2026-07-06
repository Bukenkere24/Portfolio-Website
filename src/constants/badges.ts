import type { ProjectBadge } from "@/types";

export type BadgeIntent =
  | "featured"
  | "ongoing"
  | "hackathon-winner"
  | "client-project"
  | "ai"
  | "ml"
  | "enterprise"
  | "default";

export const badgeLabels: Record<BadgeIntent, string> = {
  featured: "Featured",
  ongoing: "Ongoing",
  "hackathon-winner": "Hackathon Winner",
  "client-project": "Client Project",
  ai: "AI",
  ml: "ML",
  enterprise: "Enterprise",
  default: "Label",
};

export const projectBadgeToIntent: Record<ProjectBadge, BadgeIntent> = {
  "currently-building": "ongoing",
  "client-project": "client-project",
  "hackathon-winner": "hackathon-winner",
  "anveshan-sponsorship": "client-project",
};

const semanticIntents: BadgeIntent[] = ["ai", "ml", "enterprise"];

export function getTechBadgeIntent(label: string): BadgeIntent {
  const normalized = label.toLowerCase();

  if (normalized.includes("machine learning") || normalized === "ml") {
    return "ml";
  }

  if (
    normalized.includes("ai") ||
    normalized.includes("artificial intelligence") ||
    normalized.includes("rag")
  ) {
    return "ai";
  }

  if (
    normalized.includes("enterprise") ||
    normalized.includes("salesforce") ||
    normalized.includes("automation")
  ) {
    return "enterprise";
  }

  return "default";
}

export function getTechBadgeDisplayKey(label: string): string {
  const intent = getTechBadgeIntent(label);
  return semanticIntents.includes(intent) ? intent : label.toLowerCase();
}

export function dedupeTagsByDisplay(tags: string[], limit = 4): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const tag of tags) {
    const key = getTechBadgeDisplayKey(tag);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(tag);
    if (unique.length >= limit) break;
  }

  return unique;
}

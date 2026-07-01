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

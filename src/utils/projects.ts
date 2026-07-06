import { projects } from "@/data/projects";
import { badgeLabels, projectBadgeToIntent } from "@/constants/badges";
import type { BadgeIntent } from "@/constants/badges";
import type { Project, ProjectBadge, ProjectStatus } from "@/types";
import { isValidExternalUrl } from "@/utils/links";

export function getFeaturedProjects(): Project[] {
  return [...projects]
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectGithub(project: Project) {
  const url = project.github?.trim();
  return isValidExternalUrl(url) && url.startsWith("http") ? url : undefined;
}

export function getProjectDemo(project: Project) {
  const url = project.demo?.trim();
  return isValidExternalUrl(url) && url.startsWith("http") ? url : undefined;
}

export function hasProjectLinks(project: Project) {
  return Boolean(getProjectGithub(project) || getProjectDemo(project));
}

export function getProjectBadgeIntent(badge: ProjectBadge): BadgeIntent {
  return projectBadgeToIntent[badge];
}

export function getProjectBadgeLabel(badge: ProjectBadge): string {
  return badgeLabels[projectBadgeToIntent[badge]];
}

export function getUniqueProjectBadgeIntents(
  badges: ProjectBadge[] | undefined,
  status: ProjectStatus,
): BadgeIntent[] {
  const seen = new Set<BadgeIntent>();
  const intents: BadgeIntent[] = [];

  for (const badge of badges ?? []) {
    const intent = getProjectBadgeIntent(badge);
    if (seen.has(intent)) continue;
    seen.add(intent);
    intents.push(intent);
  }

  if (status === "in-progress" && !seen.has("ongoing")) {
    intents.push("ongoing");
  }

  return intents;
}

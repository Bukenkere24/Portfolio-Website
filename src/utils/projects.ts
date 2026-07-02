import { projects } from "@/data/projects";
import { badgeLabels, projectBadgeToIntent } from "@/constants/badges";
import type { BadgeIntent } from "@/constants/badges";
import type { Project, ProjectBadge } from "@/types";
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

import { projects } from "@/data/projects";
import { badgeLabels, projectBadgeToIntent } from "@/constants/badges";
import type { BadgeIntent } from "@/constants/badges";
import type { Project, ProjectBadge } from "@/types";

export function getFeaturedProjects(): Project[] {
  return [...projects]
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectGithub(project: Project) {
  return project.github?.trim() || undefined;
}

export function getProjectDemo(project: Project) {
  return project.demo?.trim() || undefined;
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

import { projects } from "@/data/projects";
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

const badgeLabels: Record<ProjectBadge, string> = {
  "currently-building": "Currently Building",
  "client-project": "Real Client Project",
  "hackathon-winner": "Hackathon Winner",
  "anveshan-sponsorship": "Anveshan Sponsorship",
};

export function getProjectBadgeLabel(badge: ProjectBadge): string {
  return badgeLabels[badge];
}

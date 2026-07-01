import type {
  Project,
  ProjectArchitecture,
  ProjectScreenshot,
  ProjectResults,
  EngineeringDecision,
  ProjectBadge,
  ProjectAccent,
  ProjectStatus,
} from "@/types";

/** Internal authoring shape kept in data files during migration. */
export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  badges?: ProjectBadge[];
  status: ProjectStatus;
  featured: boolean;
  featuredOrder: number;
  year: number;
  accent: ProjectAccent;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  caseStudy: {
    executiveSummary: string;
    problemStatement: string;
    solution: string;
    architecture: ProjectArchitecture;
    features: string[];
    technologyStack: string[];
    engineeringDecisions: EngineeringDecision[];
    gallery: ProjectScreenshot[];
    debugging: ProjectScreenshot[];
    results: ProjectResults;
    lessonsLearned: string[];
    futureImprovements: string[];
  };
}

export function toProject(record: ProjectRecord): Project {
  const category = record.tags[0] ?? "Engineering";

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    subtitle: record.subtitle,
    category,
    status: record.status,
    year: record.year,
    description: record.description,
    problem: record.caseStudy.problemStatement,
    solution: record.caseStudy.solution,
    features: record.caseStudy.features,
    technologies: record.caseStudy.technologyStack,
    architecture: record.caseStudy.architecture,
    screenshots: record.caseStudy.gallery,
    github: record.links.github,
    demo: record.links.live ?? record.links.demo,
    lessonsLearned: record.caseStudy.lessonsLearned,
    futureImprovements: record.caseStudy.futureImprovements,
    featured: record.featured,
    featuredOrder: record.featuredOrder,
    accent: record.accent,
    tags: record.tags,
    badges: record.badges,
    executiveSummary: record.caseStudy.executiveSummary,
    engineeringDecisions: record.caseStudy.engineeringDecisions,
    debuggingScreenshots: record.caseStudy.debugging,
    results: record.caseStudy.results,
  };
}

export function toProjects(records: ProjectRecord[]): Project[] {
  return records.map(toProject);
}

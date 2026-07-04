export type ProjectBadge =
  | "currently-building"
  | "client-project"
  | "hackathon-winner"
  | "anveshan-sponsorship";

export type ProjectAccent = "accent" | "cyan" | "purple" | "success";
export type ProjectStatus = "completed" | "in-progress";

export interface ProjectScreenshot {
  id: string;
  src?: string;
  alt: string;
  caption: string;
  placeholder?: string;
}

export interface ProjectDemoVideo {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectMetric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  description?: string;
}

export interface ArchitectureEdge {
  from: string;
  to: string;
}

export interface EngineeringDecision {
  title: string;
  description: string;
}

export interface ProjectArchitecture {
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export interface ProjectResults {
  summary: string;
  metrics: ProjectMetric[];
}

/** Chapter 5 flat project model used across the application. */
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  status: ProjectStatus;
  year: number;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  architecture: ProjectArchitecture;
  screenshots: ProjectScreenshot[];
  github?: string;
  demo?: string;
  lessonsLearned: string[];
  futureImprovements: string[];
  featured: boolean;
  featuredOrder: number;
  accent: ProjectAccent;
  tags?: string[];
  badges?: ProjectBadge[];
  executiveSummary?: string;
  engineeringDecisions?: EngineeringDecision[];
  debuggingScreenshots?: ProjectScreenshot[];
  demoVideo?: ProjectDemoVideo;
  results?: ProjectResults;
}

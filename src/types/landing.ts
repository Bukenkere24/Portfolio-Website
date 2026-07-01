import type { LucideIcon } from "lucide-react";

export interface HeroStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface AboutStory {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  philosophy: string;
}

export interface JourneyStage {
  id: string;
  title: string;
  year: string;
  description: string;
  icon: LucideIcon;
}

export interface CurrentBuild {
  title: string;
  subtitle: string;
  status: string;
  roadmap: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechnologyFocus {
  title: string;
  description: string;
}

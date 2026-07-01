export type SkillCategory =
  | "languages"
  | "frameworks"
  | "tools"
  | "cloud"
  | "ai";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type SkillCategory =
  | "languages"
  | "libraries"
  | "tools"
  | "other";

export interface Skill {
  name: string;
  category: SkillCategory;
}

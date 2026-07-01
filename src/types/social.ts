export type SocialIcon = "github" | "linkedin" | "twitter" | "email" | "resume";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: SocialIcon;
}

import type { SocialLink } from "@/types";
import { site } from "@/constants/site";

export const socials: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: site.github,
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: site.linkedin,
    icon: "linkedin",
  },
  {
    id: "resume",
    label: "Resume",
    href: site.resumePath,
    icon: "resume",
  },
];

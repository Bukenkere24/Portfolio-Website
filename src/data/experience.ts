import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "ai-internship",
    role: "AI Engineering Intern",
    company: "Technology Company",
    location: "Bengaluru, India",
    startDate: "2025",
    endDate: "2025",
    description: [
      "Worked on intelligent systems applied to production-minded problems.",
      "Improved model evaluation, documentation, and delivery workflows.",
      "Collaborated across engineering and product contexts.",
    ],
    technologies: ["Python", "Machine Learning", "FastAPI", "LLM APIs"],
  },
  {
    id: "enterprise-automation-internship",
    role: "Enterprise Automation Intern",
    company: "Business Technology Team",
    location: "Remote",
    startDate: "2025",
    endDate: null,
    description: [
      "Built automation workflows that reduced repetitive operational effort.",
      "Designed integrations between business systems and backend services.",
      "Focused on reliability, maintainability, and clear process mapping.",
    ],
    technologies: ["Python", "Automation", "APIs", "Workflow Design"],
  },
];

import {
  BrainCircuit,
  Building2,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  Lightbulb,
  Scale,
  Sparkles,
  Target,
  Trophy,
  Workflow,
} from "lucide-react";
import type {
  AboutStory,
  CoreValue,
  CurrentBuild,
  HeroStat,
  JourneyStage,
  TechnologyFocus,
} from "@/types";

export const heroRoles = [
  "AI Engineer",
  "Machine Learning Enthusiast",
  "Backend Developer",
  "Enterprise Automation Builder",
  "Problem Solver",
] as const;

export const heroStats: HeroStat[] = [
  { value: 8, suffix: "+", label: "Engineering Projects" },
  { value: 2, label: "Internships" },
  { value: 1, suffix: "st", label: "Hackathon Winner" },
  { value: 8.2, suffix: "+", label: "CGPA" },
];

export const aboutStory: AboutStory = {
  eyebrow: "Who I Am",
  title: "The journey behind the engineer.",
  subtitle:
    "A Computer Science Engineering student in Bengaluru, building across AI, backend systems, and enterprise automation.",
  paragraphs: [
    "I am Avaneesh G B, a Computer Science Engineering student at JSS Academy who enjoys understanding how systems work and how they can be made more useful for people.",
    "My work sits across artificial intelligence, backend engineering, automation, and product-minded web development. I have explored machine learning, built client projects, worked through internships, and learned how much software quality depends on clear thinking before code.",
    "Hackathons, internships, and hands-on projects have shaped how I build: start with the problem, design the system carefully, and keep refining until the result feels reliable, simple, and useful.",
  ],
  philosophy:
    "I enjoy building software that solves practical problems. Whether it's automating enterprise workflows, designing intelligent AI systems, or creating tools that simplify complex processes, I enjoy transforming ideas into reliable software that people can actually use.",
};

export const journeyStages: JourneyStage[] = [
  {
    id: "started-engineering",
    title: "Started Engineering",
    year: "2022",
    description:
      "Began Computer Science Engineering with a focus on fundamentals, curiosity, and disciplined technical growth.",
    icon: GraduationCap,
  },
  {
    id: "learned-programming",
    title: "Learned Programming",
    year: "2023",
    description:
      "Built fluency in programming by turning concepts into small working systems and practical experiments.",
    icon: Code2,
  },
  {
    id: "machine-learning",
    title: "Explored Machine Learning",
    year: "2024",
    description:
      "Started applying AI and ML ideas to real workflows, learning how models become useful inside products.",
    icon: BrainCircuit,
  },
  {
    id: "client-projects",
    title: "Built Client Projects",
    year: "2024",
    description:
      "Worked on practical software where reliability, communication, and user needs mattered as much as implementation.",
    icon: Building2,
  },
  {
    id: "hackathon",
    title: "Won Hackathon",
    year: "2025",
    description:
      "Strengthened fast problem-solving, product framing, and execution under pressure with a first-place hackathon result.",
    icon: Trophy,
  },
  {
    id: "ai-internship",
    title: "AI Internship",
    year: "2025",
    description:
      "Applied intelligent systems to production-minded problems while improving technical communication and delivery.",
    icon: Cpu,
  },
  {
    id: "enterprise-automation",
    title: "Enterprise Automation",
    year: "2025",
    description:
      "Built automation workflows that reduce manual effort and make complex business processes easier to operate.",
    icon: Workflow,
  },
  {
    id: "legal-ai",
    title: "Building Legal AI",
    year: "Now",
    description:
      "Designing an AI-powered legal research and document intelligence platform with a careful backend-first architecture.",
    icon: Scale,
  },
];

export const currentBuild: CurrentBuild = {
  title: "Legal AI Bot",
  subtitle: "AI-powered legal research and document intelligence platform.",
  status: "In Active Development",
  roadmap: ["Research", "Architecture", "Backend", "Frontend", "Deployment"],
};

export const coreValues: CoreValue[] = [
  {
    title: "Curiosity",
    description: "Continuous learning, experimentation, and asking better questions.",
    icon: Compass,
  },
  {
    title: "Engineering",
    description: "Reliable, maintainable, scalable software shaped by clear systems thinking.",
    icon: Sparkles,
  },
  {
    title: "Impact",
    description: "Technology should solve meaningful real-world problems, not just demonstrate tools.",
    icon: Target,
  },
];

export const technologyFocus: TechnologyFocus[] = [
  {
    title: "Artificial Intelligence",
    description: "Building intelligent workflows that make complex information easier to use.",
  },
  {
    title: "Backend Engineering",
    description: "Designing dependable systems, APIs, and data flows behind product experiences.",
  },
  {
    title: "Enterprise Automation",
    description: "Turning repetitive business processes into reliable software workflows.",
  },
  {
    title: "Machine Learning",
    description: "Exploring model-driven systems with practical product outcomes.",
  },
  {
    title: "Computer Vision",
    description: "Applying visual intelligence to real-world recognition and analysis tasks.",
  },
  {
    title: "Web Development",
    description: "Creating polished interfaces with strong UX, performance, and accessibility.",
  },
];

export const mission = {
  headline: "I don't just enjoy writing code.",
  emphasis: "I enjoy solving problems with software.",
  body: "My strongest work happens where AI, automation, backend engineering, and thoughtful product design meet. I like taking unclear problems, breaking them into systems, and building software that makes the result feel simple for the person using it.",
  icon: Lightbulb,
} as const;

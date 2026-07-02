import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/types";
import { getProjectDemo, getProjectGithub } from "@/utils/projects";

interface ProjectLinksFooterProps {
  project: Project;
}

export function ProjectLinksFooter({ project }: ProjectLinksFooterProps) {
  const github = getProjectGithub(project);
  const demo = getProjectDemo(project);

  if (!github && !demo) return null;

  return (
    <FadeIn>
      <div className="rounded-card border border-white/10 bg-white/[0.03] p-8 text-center md:p-10">
        <h2 className="text-2xl font-semibold">Explore this project</h2>
        <p className="mt-3 text-text-secondary">
          View the implementation or try the live demo.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {github && (
            <ButtonLink
              href={github}
              variant="secondary"
              icon={Github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </ButtonLink>
          )}
          {demo && (
            <ButtonLink
              href={demo}
              icon={ExternalLink}
              iconPosition="right"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </ButtonLink>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

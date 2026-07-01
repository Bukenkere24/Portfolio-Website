import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/common/Badge";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { getProjectBadgeIntent, getProjectDemo, getProjectGithub } from "@/utils/projects";
import type { Project } from "@/types";
import { cn } from "@/utils/cn";

const accentGlow: Record<Project["accent"], string> = {
  accent: "from-accent/20 via-transparent to-transparent",
  cyan: "from-cyan/20 via-transparent to-transparent",
  purple: "from-purple/20 via-transparent to-transparent",
  success: "from-success/20 via-transparent to-transparent",
};

interface CaseStudyHeroProps {
  project: Project;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const github = getProjectGithub(project);
  const demo = getProjectDemo(project);

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24 md:py-32">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-b",
          accentGlow[project.accent],
        )}
      />

      <Container className="relative">
        <FadeIn>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to featured work
          </Link>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.featured && <Badge intent="featured" />}
            {project.badges?.map((badge) => (
              <Badge key={badge} intent={getProjectBadgeIntent(badge)} />
            ))}
            {project.status === "in-progress" && <Badge intent="ongoing" />}
            <Badge>{project.year}</Badge>
            <Badge intent="default">{project.category}</Badge>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1 className="type-display mt-6 max-w-5xl text-balance">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-text-secondary md:text-xl">
            {project.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
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
        </FadeIn>
      </Container>
    </section>
  );
}

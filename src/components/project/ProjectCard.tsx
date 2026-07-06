import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { TechBadge } from "@/components/common/TechBadge";
import { getUniqueProjectBadgeIntents } from "@/utils/projects";
import { dedupeTagsByDisplay } from "@/constants/badges";
import type { Project, ProjectAccent } from "@/types";
import { cn } from "@/utils/cn";

const accentStyles: Record<ProjectAccent, string> = {
  accent: "from-accent/25 via-accent/5 to-transparent text-accent",
  cyan: "from-cyan/25 via-cyan/5 to-transparent text-cyan",
  purple: "from-purple/25 via-purple/5 to-transparent text-purple",
  success: "from-success/25 via-success/5 to-transparent text-success",
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  const tags = dedupeTagsByDisplay(project.tags ?? [project.category], 4);
  const badgeIntents = getUniqueProjectBadgeIntents(project.badges, project.status);

  return (
    <Card hover className="group relative overflow-hidden">
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-80",
          accentStyles[project.accent],
        )}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-2">
          {project.featured && <Badge intent="featured" />}
          {badgeIntents.map((intent) => (
            <Badge key={intent} intent={intent} />
          ))}
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors group-hover:text-cyan"
          data-cursor-hover
        >
          Read case study
          <ArrowUpRight className="size-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Card>
  );
});

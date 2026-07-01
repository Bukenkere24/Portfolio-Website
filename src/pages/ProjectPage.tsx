import { Navigate, useParams } from "react-router-dom";
import { ProjectCaseStudyView } from "@/components/project/ProjectCaseStudyView";
import { getProjectBySlug } from "@/utils/projects";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  return <ProjectCaseStudyView project={project} />;
}

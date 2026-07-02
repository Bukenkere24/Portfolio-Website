import { Navigate, useParams } from "react-router-dom";
import { ProjectCaseStudyView } from "@/components/project/ProjectCaseStudyView";
import { SeoHead } from "@/components/seo/SeoHead";
import { getProjectBySlug } from "@/utils/projects";
import { buildProjectJsonLd } from "@/utils/seo";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/#work" replace />;
  }

  return (
    <>
      <SeoHead
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
        type="article"
        jsonLd={buildProjectJsonLd(project)}
      />
      <ProjectCaseStudyView project={project} />
    </>
  );
}

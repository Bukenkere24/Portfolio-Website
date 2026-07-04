import { CaseStudyHero } from "@/components/project/CaseStudyHero";
import { CaseStudySection } from "@/components/project/CaseStudySection";
import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectDemoVideo } from "@/components/project/ProjectDemoVideo";
import { ProjectMetrics } from "@/components/project/ProjectMetrics";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/common/Card";
import { TechBadge } from "@/components/common/TechBadge";
import { ProjectLinksFooter } from "@/components/project/ProjectLinksFooter";
import type { Project } from "@/types";

interface ProjectCaseStudyViewProps {
  project: Project;
}

export function ProjectCaseStudyView({ project }: ProjectCaseStudyViewProps) {
  const summary = project.executiveSummary ?? project.description;

  return (
    <>
      <CaseStudyHero project={project} />

      <Container className="space-y-20 py-20 md:py-28">
        <CaseStudySection title="Executive Summary">
          <p className="max-w-4xl text-lg text-text-secondary">{summary}</p>
        </CaseStudySection>

        <CaseStudySection title="Problem Statement" delay={0.04}>
          <p className="max-w-4xl text-text-secondary">{project.problem}</p>
        </CaseStudySection>

        <CaseStudySection title="Solution" delay={0.08}>
          <p className="max-w-4xl text-text-secondary">{project.solution}</p>
        </CaseStudySection>

        <CaseStudySection title={project.architecture.title} delay={0.12}>
          <ArchitectureDiagram
            architecture={project.architecture}
            accent={project.accent}
          />
        </CaseStudySection>

        <CaseStudySection title="Features" delay={0.16}>
          <ul className="grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-secondary"
              >
                {feature}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Technology Stack" delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </CaseStudySection>

        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <CaseStudySection title="Engineering Decisions" delay={0.24}>
            <div className="grid gap-4 md:grid-cols-2">
              {project.engineeringDecisions.map((decision) => (
                <Card key={decision.title} className="p-6">
                  <h3 className="text-lg font-semibold">{decision.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {decision.description}
                  </p>
                </Card>
              ))}
            </div>
          </CaseStudySection>
        )}

        {project.demoVideo && (
          <CaseStudySection title="Agent Demo" delay={0.26}>
            <ProjectDemoVideo video={project.demoVideo} />
          </CaseStudySection>
        )}

        {project.screenshots.length > 0 && (
          <CaseStudySection title="Gallery" delay={0.28}>
            <ProjectGallery items={project.screenshots} title="Project gallery" />
          </CaseStudySection>
        )}

        {project.debuggingScreenshots && project.debuggingScreenshots.length > 0 && (
          <CaseStudySection title="Debugging and Validation" delay={0.32}>
            <ProjectGallery items={project.debuggingScreenshots} title="Debugging gallery" />
          </CaseStudySection>
        )}

        {project.results && (
          <CaseStudySection title="Results" delay={0.36}>
            <ProjectMetrics results={project.results} />
          </CaseStudySection>
        )}

        <CaseStudySection title="Lessons Learned" delay={0.4}>
          <ul className="space-y-3">
            {project.lessonsLearned.map((lesson) => (
              <li
                key={lesson}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-secondary"
              >
                {lesson}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Future Improvements" delay={0.44}>
          <ul className="space-y-3">
            {project.futureImprovements.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <ProjectLinksFooter project={project} />
      </Container>
    </>
  );
}

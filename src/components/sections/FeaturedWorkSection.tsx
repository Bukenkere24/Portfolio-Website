import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/layout/Container";
import { getFeaturedProjects } from "@/utils/projects";

export function FeaturedWorkSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured Engineering Work"
          title="Software systems built to solve real problems."
          subtitle="A collection of software systems, AI applications, enterprise automation, and client solutions built to solve real-world problems."
        />

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}

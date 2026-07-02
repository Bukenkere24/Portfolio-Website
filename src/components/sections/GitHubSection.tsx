import { ExternalLink, Github } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/common/Card";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Container } from "@/components/layout/Container";
import { socials } from "@/data";
import { isValidExternalUrl } from "@/utils/links";
import { getFeaturedProjects, getProjectGithub } from "@/utils/projects";

export function GitHubSection() {
  const github = socials.find((social) => social.id === "github");
  const featuredRepos = getFeaturedProjects()
    .map((project) => ({
      title: project.title,
      github: getProjectGithub(project),
    }))
    .filter((project) => project.github && isValidExternalUrl(project.github))
    .slice(0, 4);

  return (
    <section id="github" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="GitHub"
          title="Open engineering work and repositories."
          subtitle="Selected project repositories that reflect backend, AI, automation, and full-stack engineering."
        />

        <FadeIn>
          <div className="mt-12 flex flex-wrap gap-4">
            {github && isValidExternalUrl(github.href) && (
              <ButtonLink href={github.href} target="_blank" rel="noreferrer">
                <Github className="size-4" aria-hidden />
                View GitHub Profile
              </ButtonLink>
            )}
          </div>
        </FadeIn>

        {featuredRepos.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {featuredRepos.map((repo, index) => (
              <FadeIn key={repo.title} delay={index * 0.05}>
                <Card hover padding="md">
                  <h3 className="text-lg font-semibold">{repo.title}</h3>
                  {repo.github && (
                    <a
                      href={repo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-cyan hover:text-text-primary"
                    >
                      Open repository
                      <ExternalLink className="size-4" aria-hidden />
                    </a>
                  )}
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <FadeIn>
            <Card padding="lg" className="mt-10 text-center">
              <p className="text-text-secondary">
                Repository links will appear here once project GitHub URLs are added to the
                portfolio data.
              </p>
            </Card>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}

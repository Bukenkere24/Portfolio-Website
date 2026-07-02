import { site } from "@/constants/site";
import { socials } from "@/data/socials";
import type { Project } from "@/types";
import { isValidExternalUrl } from "@/utils/links";

export function getCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, site.url).toString();
}

export function getOgImageUrl(imagePath = "/og-image.png") {
  return new URL(imagePath, site.url).toString();
}

export function buildPersonJsonLd() {
  const sameAs = socials
    .map((social) => social.href)
    .filter((href) => isValidExternalUrl(href) && href.startsWith("http"));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Software Engineer",
    description: site.description,
    sameAs,
  };
}

export function buildProjectJsonLd(project: Project) {
  const projectUrl = getCanonicalUrl(`/projects/${project.slug}`);
  const codeRepository = isValidExternalUrl(project.github) ? project.github : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    url: projectUrl,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    dateCreated: `${project.year}`,
    keywords: project.tags?.join(", "),
    ...(codeRepository ? { codeRepository } : {}),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    author: {
      "@type": "Person",
      name: site.name,
    },
  };
}

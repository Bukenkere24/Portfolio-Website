export const site = {
  name: "Avaneesh G B",
  title: "Avaneesh G B - Software Engineer",
  description:
    "Software engineer building thoughtful, high-performance products at the intersection of design and engineering.",
  url: import.meta.env.VITE_SITE_URL ?? "https://avaneesh.dev",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "hello@avaneesh.dev",
  github: import.meta.env.VITE_GITHUB_URL ?? "https://github.com/avaneeshgb",
  linkedin:
    import.meta.env.VITE_LINKEDIN_URL ?? "https://www.linkedin.com/in/avaneeshgb",
  locale: "en_US",
  ogImage: "/og-image.png",
  resumePath: "/resume.pdf",
} as const;

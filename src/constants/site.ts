export const site = {
  name: "Avaneesh G B",
  title: "Avaneesh G B - Software Engineer",
  description:
    "Software engineer building thoughtful, high-performance products at the intersection of design and engineering.",
  url: import.meta.env.VITE_SITE_URL ?? "https://avaneesh.dev",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "gbavaneesh@gmail.com",
  github: import.meta.env.VITE_GITHUB_URL ?? "https://github.com/Bukenkere24",
  linkedin:
    import.meta.env.VITE_LINKEDIN_URL ??
    "https://www.linkedin.com/in/avaneesh-g-b-623772305",
  locale: "en_US",
  ogImage: "/og-image.png",
  resumePath: "/resume.pdf",
} as const;

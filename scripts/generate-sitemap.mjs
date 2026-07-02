import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const projectsFile = readFileSync(
  path.join(rootDir, "src/data/projects.ts"),
  "utf8",
);

const siteUrl = process.env.VITE_SITE_URL ?? "https://avaneesh.dev";
const slugs = [...projectsFile.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (match) => match[1],
);

const urls = [
  { loc: siteUrl, changefreq: "weekly", priority: "1.0" },
  ...slugs.map((slug) => ({
    loc: `${siteUrl}/projects/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const lastmod = new Date().toISOString().split("T")[0];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const distDir = path.join(rootDir, "dist");
mkdirSync(distDir, { recursive: true });
writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf8");
writeFileSync(path.join(rootDir, "public/sitemap.xml"), xml, "utf8");

console.log(`Generated sitemap with ${urls.length} URLs for ${siteUrl}`);

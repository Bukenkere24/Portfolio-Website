import { Helmet } from "react-helmet-async";
import { site } from "@/constants/site";
import { getCanonicalUrl, getOgImageUrl } from "@/utils/seo";

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function SeoHead({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noIndex = false,
  jsonLd,
}: SeoHeadProps) {
  const pageTitle = title ? `${title} | ${site.name}` : site.title;
  const pageDescription = description ?? site.description;
  const canonical = getCanonicalUrl(path);
  const ogImage = image ? getOgImageUrl(image) : getOgImageUrl();
  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={site.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION && (
        <meta
          name="google-site-verification"
          content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION}
        />
      )}

      {jsonLdItems.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

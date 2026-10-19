// Reusable SEO helpers for TanStack Start route head() options.
// Usage: head: () => ({ ...buildSeo({ title, description, path }) })

const SITE = "https://meditatiidirect.ro";

export interface SeoInput {
  title: string;
  description: string;
  /** Path starting with "/" (e.g. "/despre"). Used for canonical + og:url. */
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
}

export function buildSeo(s: SeoInput) {
  const url = `${SITE}${s.path}`;
  const meta: Array<Record<string, string>> = [
    { title: s.title },
    { name: "description", content: s.description },
    { property: "og:title", content: s.title },
    { property: "og:description", content: s.description },
    { property: "og:url", content: url },
    { property: "og:type", content: s.type ?? "website" },
    { name: "twitter:title", content: s.title },
    { name: "twitter:description", content: s.description },
  ];
  if (s.image) {
    meta.push({ property: "og:image", content: s.image });
    meta.push({ name: "twitter:image", content: s.image });
  }
  if (s.noindex) meta.push({ name: "robots", content: "noindex, follow" });
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

export const courseJsonLd = (c: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.name,
  description: c.description,
  url: `${SITE}${c.path}`,
  provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
});

export const blogPostingJsonLd = (p: {
  title: string; description: string; path: string;
  datePublished: string; dateModified?: string; image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.description,
  url: `${SITE}${p.path}`,
  datePublished: p.datePublished,
  dateModified: p.dateModified ?? p.datePublished,
  image: p.image,
  author: { "@type": "Organization", name: "MeditatiiDirect" },
  publisher: {
    "@type": "Organization",
    name: "MeditatiiDirect",
    logo: { "@type": "ImageObject", url: `${SITE}/apple-touch-icon.png` },
  },
  mainEntityOfPage: `${SITE}${p.path}`,
});

export const faqJsonLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

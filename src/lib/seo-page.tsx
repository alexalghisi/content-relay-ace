// Helper compact pentru a defini o pagină SEO landing reutilizând <SeoLanding/>.
// Reduce dramatic codul per rută — un fișier de rută devine ~10 linii.
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";

const SITE = "https://meditatiidirect.ro";

export interface SeoPageConfig {
  path: string;            // ex: "/meditatii-chimie"
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets?: string[];
  faqs?: FaqItem[];
  related?: { to: string; label: string }[];
  ctaPrimary?: { to: string; label: string };
}

export function seoPage(c: SeoPageConfig) {
  const url = `${SITE}${c.path}`;
  return {
    head: () => ({
      meta: [
        { title: c.title },
        { name: "description", content: c.description },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: c.title },
        { name: "twitter:description", content: c.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: c.faqs
        ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(c.faqs)) }]
        : [],
    }),
    component: () => (
      <SeoLanding
        pageUrl={url}
        h1={c.h1}
        intro={c.intro}
        bullets={c.bullets}
        ctaPrimary={c.ctaPrimary ?? { to: "/meditatii", label: "Vezi profesori verificați" }}
        faqs={c.faqs}
        related={c.related}
      />
    ),
  };
}

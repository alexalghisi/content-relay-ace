// Helper compact pentru a defini o pagină SEO landing reutilizând <SeoLanding/>.
// Reduce dramatic codul per rută — un fișier de rută devine ~10 linii.
import {
  SeoLanding,
  faqJsonLd,
  type FaqItem,
  type SeoLandingProps,
} from "@/components/seo-landing";

import { subjectLoader } from "@/lib/subject-stats";
import { snippetMaterie } from "@/lib/snippet-materie";
import type { ComboStats } from "@/lib/market-stats.functions";

const SITE = "https://meditatiidirect.ro";

export interface SeoPageConfig {
  path: string; // ex: "/meditatii-chimie"
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets?: string[];
  faqs?: FaqItem[];
  related?: { to: string; label: string }[];
  ctaPrimary?: SeoLandingProps["ctaPrimary"];
  ctaSecondary?: SeoLandingProps["ctaSecondary"];
  ctaFooter?: SeoLandingProps["ctaFooter"];
  sections?: SeoLandingProps["sections"];
  image?: string; // URL absolut 1200x630 pentru og:image
  jsonLd?: object[]; // JSON-LD suplimentar (ex. Service)
}

const SUBJECT_OG = [
  "matematica",
  "romana",
  "engleza",
  "franceza",
  "germana",
  "biologie",
  "chimie",
  "fizica",
  "geografie",
  "istorie",
  "informatica",
];
function defaultImage(path: string) {
  const m = /^\/meditatii-([a-z]+)$/.exec(path);
  return m && SUBJECT_OG.includes(m[1]) ? `${SITE}/og/meditatii/${m[1]}.jpg` : undefined;
}

export function seoPage(c: SeoPageConfig) {
  const url = `${SITE}${c.path}`;
  const image = c.image ?? defaultImage(c.path);
  const sm = /^\/meditatii-([a-z]+)$/.exec(c.path);
  return {
    ...(sm && SUBJECT_OG.includes(sm[1]) ? { loader: subjectLoader(sm[1]) } : {}),
    head: ({ loaderData }: { loaderData?: unknown }) => {
      // Pe paginile de materie titlul/descrierea folosesc cifrele reale din loader (snippet-materie.ts).
      const fromLoader = loaderData as
        { subjectStats?: ComboStats | null; subjectName?: string } | undefined;
      const { title, description } =
        sm && SUBJECT_OG.includes(sm[1]) && fromLoader?.subjectName
          ? snippetMaterie(fromLoader.subjectName, fromLoader.subjectStats, {
              title: c.title,
              description: c.description,
            })
          : { title: c.title, description: c.description };
      return {
        meta: [
          { title },
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:url", content: url },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          ...(image
            ? [
                { property: "og:image", content: image },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },
                { name: "twitter:image", content: image },
              ]
            : []),
        ],
        links: [{ rel: "canonical", href: url }],
        scripts: [...(c.faqs ? [faqJsonLd(c.faqs)] : []), ...(c.jsonLd ?? [])].map((d) => ({
          type: "application/ld+json",
          children: JSON.stringify(d),
        })),
      };
    },
    component: () => (
      <SeoLanding
        pageUrl={url}
        h1={c.h1}
        intro={c.intro}
        bullets={c.bullets}
        ctaPrimary={c.ctaPrimary ?? { to: "/meditatii", label: "Cere meditații gratuit" }}
        ctaSecondary={c.ctaSecondary}
        ctaFooter={c.ctaFooter}
        sections={c.sections}
        faqs={c.faqs}
        related={c.related}
      />
    ),
  };
}

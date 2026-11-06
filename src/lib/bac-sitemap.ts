import { BAC_ORIGINALS } from "@/lib/bac-originals";
import { BAC_AGGREGATES } from "@/lib/bac-archive";
import { bacPaperKey, bacPaperPath } from "@/lib/bac-paths";

export const BAC_SITEMAP_BASE_URL = "https://meditatiidirect.ro";

export type BacSitemapEntry = { path: string; changefreq: string; priority: string };

/**
 * Every indexable URL of the /subiecte-bac section: hub, subject hubs, year hubs, one page
 * per original paper (subiect + barem) and its step-by-step solution when one is written.
 * Pure (the solution lookup is injected) so bun tests can run it without Vite's import.meta.glob.
 */
export function bacSitemapEntries(hasRezolvare: (key: string) => boolean): BacSitemapEntry[] {
  const out: BacSitemapEntry[] = [{ path: "/subiecte-bac", changefreq: "weekly", priority: "0.9" }];

  const materii = new Set<string>([
    ...Object.keys(BAC_AGGREGATES),
    ...BAC_ORIGINALS.map((r) => r.subject_slug),
  ]);
  for (const slug of materii) {
    out.push({ path: `/subiecte-bac/materie/${slug}`, changefreq: "monthly", priority: "0.8" });
  }

  const years = Array.from(new Set(BAC_ORIGINALS.map((r) => r.year))).sort((a, b) => b - a);
  for (const y of years) {
    out.push({ path: `/subiecte-bac/an/${y}`, changefreq: "monthly", priority: "0.8" });
  }

  const seen = new Set<string>();
  for (const r of BAC_ORIGINALS) {
    if (!r.pdf_url) continue;
    const path = bacPaperPath(r);
    if (seen.has(path)) continue;
    seen.add(path);
    out.push({ path, changefreq: "yearly", priority: "0.7" });
    if (hasRezolvare(bacPaperKey(r))) {
      out.push({ path: `${path}/rezolvare`, changefreq: "monthly", priority: "0.75" });
    }
  }
  return out;
}

export function bacSitemapXml(entries: BacSitemapEntry[], base = BAC_SITEMAP_BASE_URL) {
  const urls = entries.map(
    (e) =>
      `  <url>\n    <loc>${base}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
}

import { createFileRoute } from "@tanstack/react-router";
import { submitToIndexNow, SITE_URL } from "@/lib/indexnow.server";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";

const CORE_PATHS = [
  "/",
  "/meditatii",
  "/profesori",
  "/materii",
  "/anunturi-meditatii",
  "/meditatii-online",
  "/meditatii-matematica",
  "/meditatii-romana",
  "/meditatii-engleza",
  "/meditatii-informatica",
  "/meditatii-bac",
  "/variante-bacalaureat",
  "/subiecte-bac",
  "/bac",
  "/blog",
  "/preturi-meditatii",
];

/** Deterministic rotating slice so every long-tail page gets re-crawled over time. */
function rotatingSlice<T>(items: T[], perDay: number, dayIndex: number): T[] {
  if (items.length <= perDay) return items;
  const start = (dayIndex * perDay) % items.length;
  const out = items.slice(start, start + perDay);
  if (out.length < perDay) out.push(...items.slice(0, perDay - out.length));
  return out;
}

/**
 * Daily SEO maintenance — submits freshly changed content plus a rotating batch
 * of evergreen pages to IndexNow so search engines keep the index warm.
 * Scheduled via pg_cron.
 */
export const Route = createFileRoute("/api/public/hooks/seo-daily")({
  server: {
    handlers: {
      POST: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const since = new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString();
        const paths = new Set<string>(CORE_PATHS);

        // 1. Everything that actually changed in the last 36h.
        try {
          const { data: ads } = await supabaseAdmin
            .from("ads")
            .select("id, seo_slug, updated_at")
            .eq("status", "active")
            .gte("updated_at", since)
            .limit(2000);
          for (const a of ads ?? []) paths.add(`/anunt/${a.seo_slug || a.id}`);

          const { data: posts } = await supabaseAdmin
            .from("blog_posts")
            .select("slug, updated_at")
            .eq("is_published", true)
            .gte("updated_at", since)
            .limit(500);
          for (const p of posts ?? []) paths.add(`/blog/${p.slug}`);
        } catch (err) {
          console.error("seo-daily: fresh content query failed", err);
        }

        // 2. Rotating evergreen batch (local + subject landing pages).
        const dayIndex = Math.floor(Date.now() / 86_400_000);
        const evergreen: string[] = [];
        for (const c of CITIES) {
          evergreen.push(`/meditatii-in/${c.slug}`, `/profesori/${c.slug}`);
          for (const s of SUBJECTS_SEO) evergreen.push(`/meditatii/${s.slug}/${c.slug}`);
        }
        for (const s of SUBJECTS_SEO) evergreen.push(`/preturi-meditatii/${s.slug}`);
        for (const p of rotatingSlice(evergreen, 120, dayIndex)) paths.add(p);

        const urls = [...paths].map((p) => `${SITE_URL}${p}`);
        urls.push(`${SITE_URL}/sitemap.xml`);

        const result = await submitToIndexNow(urls);
        return Response.json({ ok: result.submitted > 0, day: dayIndex, ...result });
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { submitToIndexNow, SITE_URL } from "@/lib/indexnow.server";

/**
 * Instant re-index hook — called by a database trigger whenever an ad is
 * published or modified (and callable manually).
 *
 * Public on purpose (no secret): it only asks search engines to re-crawl URLs
 * that are verified to exist as active ads in our own database.
 */
export const Route = createFileRoute("/api/public/hooks/indexnow")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: { adId?: string; slug?: string; paths?: string[] } = {};
        try {
          body = (await request.json()) as typeof body;
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const urls: string[] = [];

        if (body.adId || body.slug) {
          const q = supabaseAdmin.from("ads").select("id, seo_slug, status, subject_slug");
          const { data: ad } = body.adId
            ? await q.eq("id", body.adId).maybeSingle()
            : await q.eq("seo_slug", body.slug!).maybeSingle();

          if (!ad) return Response.json({ error: "Ad not found" }, { status: 404 });
          if (ad.status !== "active") {
            // Deleted/paused ads: still tell engines to recrawl the hubs.
            urls.push(`${SITE_URL}/meditatii`, `${SITE_URL}/anunturi-meditatii`);
          } else {
            urls.push(`${SITE_URL}/anunt/${ad.seo_slug || ad.id}`);
            urls.push(
              `${SITE_URL}/`,
              `${SITE_URL}/meditatii`,
              `${SITE_URL}/anunturi-meditatii`,
              `${SITE_URL}/profesori`,
            );
            if (ad.subject_slug) urls.push(`${SITE_URL}/meditatii?materie=${ad.subject_slug}`);
          }
        }

        // Allow explicit internal paths (validated shape only).
        for (const p of body.paths ?? []) {
          if (typeof p === "string" && p.startsWith("/") && !p.startsWith("//")) {
            urls.push(`${SITE_URL}${p}`);
          }
        }

        if (urls.length === 0) {
          return Response.json({ error: "Nothing to submit" }, { status: 400 });
        }

        urls.push(`${SITE_URL}/sitemap.xml`);
        const result = await submitToIndexNow(urls);
        return Response.json({ ok: result.submitted > 0, ...result });
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { bacSitemapEntries, bacSitemapXml } from "@/lib/bac-sitemap";
import { hasRezolvare } from "@/lib/bac-rezolvari";

/** /sitemap-subiecte-bac.xml — every hub, subject, year, paper and solution page of /subiecte-bac. */
export const Route = createFileRoute("/sitemap-subiecte-bac.xml")({
  server: {
    handlers: {
      GET: async () => {
        // No synthetic <lastmod>: the bundled archive carries no real content timestamps.
        const xml = bacSitemapXml(bacSitemapEntries(hasRezolvare));
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});

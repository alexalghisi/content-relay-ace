import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CITIES } from "@/data/cities";

const BASE_URL = "https://meditatiidirect.ro";

const STATIC_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/meditatii", priority: "0.9", changefreq: "daily" },
  { path: "/profesori", priority: "0.8", changefreq: "daily" },
  { path: "/materii", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-online", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-matematica", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-romana", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-engleza", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-bac", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-evaluare-nationala", priority: "0.9", changefreq: "weekly" },
  { path: "/admitere", priority: "0.8", changefreq: "weekly" },
  { path: "/subiecte-bac", priority: "0.8", changefreq: "weekly" },
  { path: "/subiecte-admitere", priority: "0.8", changefreq: "weekly" },
  { path: "/variante-bacalaureat", priority: "0.7", changefreq: "weekly" },
  { path: "/simulare-bacalaureat", priority: "0.7", changefreq: "weekly" },
  { path: "/grile-medicina", priority: "0.7", changefreq: "weekly" },
  { path: "/grile-upb", priority: "0.7", changefreq: "weekly" },
  { path: "/anunturi-meditatii", priority: "0.95", changefreq: "daily" },
  { path: "/meditatori", priority: "0.9", changefreq: "daily" },
  { path: "/platforma-meditatii-online", priority: "0.85", changefreq: "weekly" },
  { path: "/ofer-meditatii", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-franceza", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-informatica", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-fizica", priority: "0.8", changefreq: "weekly" },
  { path: "/simulari-bacalaureat-2026", priority: "0.85", changefreq: "weekly" },
  { path: "/grile-admitere-medicina-2026", priority: "0.85", changefreq: "weekly" },
  { path: "/simulare-utcn-2026", priority: "0.8", changefreq: "weekly" },
  { path: "/simulare-drept-2026", priority: "0.8", changefreq: "weekly" },
  { path: "/preturi-meditatii", priority: "0.6", changefreq: "monthly" },
  { path: "/cum-functioneaza", priority: "0.6", changefreq: "monthly" },
  { path: "/pentru-profesori", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/tutoriale", priority: "0.6", changefreq: "weekly" },
  { path: "/despre", priority: "0.4", changefreq: "monthly" },
  { path: "/contact", priority: "0.4", changefreq: "monthly" },
  { path: "/termeni", priority: "0.2", changefreq: "yearly" },
  { path: "/confidentialitate", priority: "0.2", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const today = new Date().toISOString().slice(0, 10);

        const urls: string[] = STATIC_PATHS.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        try {
          const { data: subjects } = await supabaseAdmin.from("subjects").select("slug");
          for (const s of subjects ?? []) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/meditatii?materie=${s.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
          const { data: cities } = await supabaseAdmin.from("cities").select("slug");
          for (const c of cities ?? []) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/meditatii?oras=${c.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
          // Per-ad pages — primary long-tail SEO surface
          const { data: ads } = await supabaseAdmin
            .from("ads")
            .select("id,seo_slug,updated_at")
            .eq("status", "active");
          for (const a of ads ?? []) {
            const slug = a.seo_slug || a.id;
            const last = (a.updated_at ?? today).toString().slice(0, 10);
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/anunt/${slug}</loc>\n    <lastmod>${last}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
            );
          }
          // City landing pages
          for (const c of CITIES) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/meditatii-in/${c.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`,
            );
          }
          // Blog posts
          const { data: posts } = await supabaseAdmin
            .from("blog_posts").select("slug,updated_at").eq("is_published", true);
          for (const p of posts ?? []) {
            const last = (p.updated_at ?? today).toString().slice(0, 10);
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/blog/${p.slug}</loc>\n    <lastmod>${last}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
        } catch (err) {
          console.error("sitemap dynamic fetch failed", err);
        }

        // Pagini-resursă pentru fiecare PDF găzduit la noi (BAC + admitere)
        try {
          const { BAC_ARCHIVE } = await import("@/data/bac-archive");
          for (const it of BAC_ARCHIVE) {
            urls.push(`  <url>\n    <loc>${BASE_URL}${it.internal}</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`);
          }
          const { ADM_ARCHIVE } = await import("@/data/admitere-archive");
          for (const it of ADM_ARCHIVE) {
            urls.push(`  <url>\n    <loc>${BASE_URL}${it.internal}</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`);
          }
        } catch (err) {
          console.error("sitemap resurse fetch failed", err);
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            // Refresh frecvent ca paginile de resurse nou-adăugate să intre rapid în sitemap
            "Cache-Control": "public, max-age=300, s-maxage=300, stale-while-revalidate=600",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});

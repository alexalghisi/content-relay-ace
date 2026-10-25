import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { consolidatedTarget } from "@/lib/seo-redirects";
import { BLOCAJE, BLOCAJE_MATERII } from "@/data/blocaje";

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
  { path: "/meditatii-la-domiciliu", priority: "0.95", changefreq: "weekly" },
  { path: "/profesori-meditatii", priority: "0.95", changefreq: "weekly" },
  { path: "/caut-profesor", priority: "0.95", changefreq: "weekly" },
  { path: "/ore-online", priority: "0.95", changefreq: "weekly" },
  { path: "/meditatii-franceza", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-informatica", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-fizica", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-chimie", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-biologie", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-germana", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-istorie", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-geografie", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-clasa-8", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-clasa-12", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-admitere-medicina", priority: "0.95", changefreq: "weekly" },
  { path: "/meditatii-admitere-politehnica", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-admitere-drept", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-admitere-ase", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-titularizare", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-definitivat", priority: "0.8", changefreq: "weekly" },
  { path: "/meditatii-ieftine", priority: "0.85", changefreq: "weekly" },
  { path: "/profesor-particular", priority: "0.9", changefreq: "weekly" },
  { path: "/profesor-meditatii", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-scoala", priority: "0.95", changefreq: "weekly" },
  { path: "/meditatii-gimnaziu", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-liceu", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-private", priority: "0.9", changefreq: "weekly" },
  { path: "/meditatii-particulare", priority: "0.95", changefreq: "weekly" },
  { path: "/anunturi-meditatii-bac", priority: "0.9", changefreq: "daily" },

  { path: "/simulari-bacalaureat-2026", priority: "0.85", changefreq: "weekly" },
  { path: "/grile-admitere-medicina-2026", priority: "0.85", changefreq: "weekly" },
  { path: "/simulare-utcn-2026", priority: "0.8", changefreq: "weekly" },
  { path: "/simulare-drept-2026", priority: "0.8", changefreq: "weekly" },
  { path: "/rezultate-bac-2026", priority: "0.98", changefreq: "daily" },
  { path: "/subiecte-bac-2026", priority: "0.98", changefreq: "daily" },
  { path: "/admitere-facultate-2026", priority: "0.95", changefreq: "daily" },
  { path: "/preturi-meditatii", priority: "0.85", changefreq: "weekly" },
  { path: "/pregatire-bacalaureat", priority: "0.9", changefreq: "weekly" },
  { path: "/pregatire-admitere-medicina", priority: "0.9", changefreq: "weekly" },
  { path: "/cum-functioneaza", priority: "0.6", changefreq: "monthly" },
  { path: "/pentru-profesori", priority: "0.7", changefreq: "monthly" },
  { path: "/vreau-sa-dau-meditatii", priority: "0.9", changefreq: "weekly" },
  { path: "/invita-un-coleg", priority: "0.5", changefreq: "monthly" },
  { path: "/castiga-din-meditatii", priority: "0.9", changefreq: "weekly" },
  { path: "/rezolvari", priority: "0.9", changefreq: "weekly" },
  { path: "/calculator-medie-bac", priority: "0.9", changefreq: "monthly" },
  { path: "/calculator-nota-admitere", priority: "0.85", changefreq: "monthly" },
  { path: "/evaluare-nationala", priority: "0.95", changefreq: "weekly" },
  { path: "/calculator-media-evaluare-nationala", priority: "0.9", changefreq: "monthly" },
  { path: "/evaluare-nationala-cluj", priority: "0.85", changefreq: "weekly" },
  { path: "/meditatii-cluj", priority: "0.9", changefreq: "weekly" },
  { path: "/harta-blocajelor", priority: "0.9", changefreq: "weekly" },
  { path: "/profesor-ai", priority: "0.9", changefreq: "weekly" },
  { path: "/scaner-lacune", priority: "0.9", changefreq: "weekly" },
  { path: "/simulare-ai", priority: "0.9", changefreq: "weekly" },
  { path: "/meditator-ai", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/tutoriale", priority: "0.6", changefreq: "weekly" },
  { path: "/parteneri", priority: "0.5", changefreq: "monthly" },
  { path: "/despre", priority: "0.4", changefreq: "monthly" },
  { path: "/contact", priority: "0.4", changefreq: "monthly" },
  { path: "/termeni", priority: "0.2", changefreq: "yearly" },
  { path: "/confidentialitate", priority: "0.2", changefreq: "yearly" },
  { path: "/politica-cookies", priority: "0.2", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        // No synthetic <lastmod>: only entries with a real content timestamp carry one.
        const urls: string[] = STATIC_PATHS.filter((p) => !consolidatedTarget(p.path)).map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        // Harta Blocajelor — conținut static, indexabil: o pagină pe materie + una pe blocaj
        for (const m of BLOCAJE_MATERII) {
          urls.push(
            `  <url>\n    <loc>${BASE_URL}/harta-blocajelor/${m.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
          );
        }
        // Scanerul de lacune — o pagină indexabilă pe materie (?tinta= nu se listează)
        for (const m of BLOCAJE_MATERII) {
          urls.push(
            `  <url>\n    <loc>${BASE_URL}/scaner-lacune/${m.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
          );
        }
        for (const n of BLOCAJE) {
          urls.push(
            `  <url>\n    <loc>${BASE_URL}/harta-blocajelor/${n.materie}/${n.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
          );
        }

        try {
          // Query-string listings (/meditatii?materie=…) are canonicalised to /meditatii — not listed.
          // Per-ad pages — primary long-tail SEO surface
          const { data: ads } = await supabaseAdmin.from("ads").select("id,seo_slug,updated_at").eq("status", "active");
          for (const a of ads ?? []) {
            const slug = a.seo_slug || a.id;
            const last = a.updated_at ? new Date(a.updated_at).toISOString().slice(0, 10) : null;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/anunt/${slug}</loc>\n${last ? `    <lastmod>${last}</lastmod>\n` : ""}    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
            );
          }
          // Paginile „materie-online” sunt noindex (șabloane aproape identice) — nu se listează.
          // Orașe: doar cele cu profesori locali reali (aceeași regulă ca pagina).
          const { MIN_LISTINGS_FOR_INDEX: MIN_CITY } = await import("@/lib/market-stats.functions");
          const { data: locRows } = await supabaseAdmin
            .from("ads")
            .select("location")
            .eq("status", "active")
            .limit(10000);
          const locs = (locRows ?? []).map((r: { location: string | null }) => (r.location ?? "").toLowerCase());
          for (const c of CITIES) {
            if (locs.filter((l) => c.matchLocation.some((m) => l.includes(m.toLowerCase()))).length < MIN_CITY)
              continue;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/meditatii-in/${c.slug}</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`,
            );
          }

          // Published teacher profiles (/profesor/{slug}) — SSR pages with Person JSON-LD
          const { data: teachers } = await supabaseAdmin
            .from("teacher_profiles")
            .select("slug,updated_at")
            .eq("is_published", true);
          for (const t of teachers ?? []) {
            if (!t.slug) continue;
            const last = t.updated_at ? new Date(t.updated_at).toISOString().slice(0, 10) : null;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/profesor/${t.slug}</loc>\n${last ? `    <lastmod>${last}</lastmod>\n` : ""}    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
            );
          }

          // Blog posts
          const { data: posts } = await supabaseAdmin
            .from("blog_posts")
            .select("slug,updated_at")
            .eq("is_published", true);
          for (const p of posts ?? []) {
            const last = p.updated_at ? new Date(p.updated_at).toISOString().slice(0, 10) : null;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/blog/${p.slug}</loc>\n${last ? `    <lastmod>${last}</lastmod>\n` : ""}    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
        } catch (err) {
          console.error("sitemap dynamic fetch failed", err);
        }

        // Pagini-resursă pentru fiecare PDF găzduit la noi (BAC + admitere)
        try {
          const { BAC_ARCHIVE } = await import("@/data/bac-archive");
          // Resource pages without a hosted subject PDF are noindex — skip them.
          const { data: names } = await supabaseAdmin.rpc("bac_pdf_names", { _prefix: "" });
          const have = new Set(
            ((names ?? []) as string[])
              .filter((n) => n.endsWith("-subiect.pdf"))
              .map((n) => n.split("/").slice(0, 2).join("/")),
          );
          for (const it of BAC_ARCHIVE) {
            const m = it.internal.match(/^\/resurse\/bac\/([^/]+)\/(\d{4})/);
            if (m && !have.has(`${m[1]}/${m[2]}`)) continue;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}${it.internal}</loc>\n    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`,
            );
          }
        } catch (err) {
          console.error("sitemap bac fetch failed", err);
        }

        // Combo materie × oraș — TOATE combinațiile (14 orașe × 11 materii = 154 pagini)
        // + pagini preț pe materie
        try {
          const { SUBJECTS_SEO } = await import("@/data/subjects-seo");
          const { CITIES } = await import("@/data/cities");
          // Same rule as the page: a combo with no active ads is noindex, so keep it out of the sitemap.
          const { data: adRows } = await supabaseAdmin
            .from("ads")
            .select("subject_slug,location,is_online")
            .eq("status", "active")
            .limit(10000);
          const rows = (adRows ?? []) as { subject_slug: string | null; location: string | null; is_online: boolean }[];
          const { MIN_LISTINGS_FOR_INDEX } = await import("@/lib/market-stats.functions");
          const comboHasAds = (subs: string[], locs: string[]) =>
            rows.filter(
              (r) =>
                r.subject_slug &&
                subs.includes(r.subject_slug) &&
                locs.some((m) => (r.location ?? "").toLowerCase().includes(m.toLowerCase())),
            ).length >= MIN_LISTINGS_FOR_INDEX;
          const { getGhidLocal } = await import("@/data/ghiduri-locale");
          for (const s of SUBJECTS_SEO) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/preturi-meditatii/${s.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
            );
            for (const c of CITIES) {
              // Combinațiile cu ghid local sunt indexabile și fără anunțuri (vezi ruta).
              if (!getGhidLocal(s.slug, c.slug) && !comboHasAds(s.dbSlugs, c.matchLocation)) continue;
              urls.push(
                `  <url>\n    <loc>${BASE_URL}/meditatii/${s.slug}/${c.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
              );
            }
          }
        } catch (err) {
          console.error("sitemap combo fetch failed", err);
        }

        // Arhivă BAC: /bac, /bac/{materie}, /bac/{materie}/{an}, /bac/{materie}/{an}/{sesiune}
        // + simulări cronometrate pe materie
        try {
          const { BAC_SUBJECTS, BAC_YEARS, BAC_SESSIONS } = await import("@/data/bac-catalog");
          // Doar sesiunile care au efectiv subiectul verificat în arhivă (restul sunt noindex).
          const { data: pdfNames } = await supabaseAdmin.rpc("bac_pdf_names", { _prefix: "" });
          // Aceeași regulă ca pagina: doar subiectele care trec auditul de conținut (src/lib/bac-verificare.ts).
          const { subiecteVerificate } = await import("@/lib/bac-verificare");
          const pdfSet = subiecteVerificate((pdfNames ?? []) as string[]);
          urls.push(
            `  <url>\n    <loc>${BASE_URL}/bac</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
          );
          for (const s of BAC_SUBJECTS) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/bac/${s.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
            );
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/simulare-bac/${s.slug}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
            );
            for (const y of BAC_YEARS) {
              if (![...pdfSet].some((n) => n.startsWith(`${s.slug}/${y}/`) && n.endsWith("-subiect.pdf"))) continue;
              urls.push(
                `  <url>\n    <loc>${BASE_URL}/bac/${s.slug}/${y}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
              );
              for (const ses of BAC_SESSIONS) {
                if (!pdfSet.has(`${s.slug}/${y}/${ses.slug}-subiect.pdf`)) continue;
                urls.push(
                  `  <url>\n    <loc>${BASE_URL}/bac/${s.slug}/${y}/${ses.slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
                );
              }
            }
          }
        } catch (err) {
          console.error("sitemap bac catalog fetch failed", err);
        }

        // Rezolvări publicate — doar cele făcute pe subiectul oficial
        try {
          // Rezolvările verificate din repo (src/data/rezolvari-verificate) + cele din DB, fără dubluri.
          // Cele din repo apar chiar dacă citirea din DB eșuează.
          const { REZOLVARI_PUBLICATE } = await import("@/data/rezolvari-verificate");
          let rezDb: { materie: string; an: number; sesiune: string; updated_at: string | null }[] = [];
          try {
            const { data } = await supabaseAdmin
              .from("bac_rezolvari")
              .select("materie, an, sesiune, updated_at")
              .eq("sursa", "subiect_oficial");
            rezDb = data ?? [];
          } catch (err) {
            console.error("sitemap rezolvari DB fetch failed", err);
          }
          const statice = REZOLVARI_PUBLICATE.map((r) => ({
            materie: r.materie,
            an: r.an,
            sesiune: r.sesiune,
            updated_at: r.actualizat,
          }));
          const chei = new Set(statice.map((r) => `${r.materie}/${r.an}/${r.sesiune}`));
          const rez = [...statice, ...(rezDb ?? []).filter((r) => !chei.has(`${r.materie}/${r.an}/${r.sesiune}`))];
          for (const r of rez) {
            const last = r.updated_at ? new Date(r.updated_at).toISOString().slice(0, 10) : null;
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/rezolvari/${r.materie}/${r.an}/${r.sesiune}</loc>\n${last ? `    <lastmod>${last}</lastmod>\n` : ""}    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
            );
          }
        } catch (err) {
          console.error("sitemap rezolvari fetch failed", err);
        }

        // Rezolvări verificate la admitere (din repo; nu depind de DB)
        {
          const { REZOLVARI_ADMITERE_PUBLICATE } = await import("@/data/rezolvari-admitere");
          for (const r of REZOLVARI_ADMITERE_PUBLICATE) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/rezolvari-admitere/${r.universitate}/${r.materie}/${r.an}</loc>\n    <lastmod>${r.actualizat}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>`,
            );
          }
        }

        // Noua arhivă /subiecte-admitere/* — generată din tabelul admission_papers
        try {
          // /subiecte-admitere itself is already listed in STATIC_PATHS.
          // Aceeași regulă ca paginile: doar documentele care trec auditul (src/lib/admitere-verificare.ts).
          const { filtreazaAfisate } = await import("@/lib/admitere-verificare");
          const { data: papersRaw } = await supabaseAdmin
            .from("admission_papers")
            .select("university_slug, subject_slug, year, updated_at, storage_path")
            .eq("is_published", true);
          const papers = filtreazaAfisate(papersRaw);
          const unis = new Set<string>();
          const unisSub = new Set<string>();
          const unisSubYear = new Set<string>();
          const subjects = new Set<string>();
          for (const p of papers ?? []) {
            unis.add(p.university_slug);
            unisSub.add(`${p.university_slug}/${p.subject_slug}`);
            unisSubYear.add(`${p.university_slug}/${p.subject_slug}/${p.year}`);
            subjects.add(p.subject_slug);
          }
          for (const s of subjects) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/subiecte-admitere/materie/${s}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
            );
          }
          for (const u of unis) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/subiecte-admitere/${u}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
          for (const us of unisSub) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/subiecte-admitere/${us}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
            );
          }
          for (const usy of unisSubYear) {
            urls.push(
              `  <url>\n    <loc>${BASE_URL}/subiecte-admitere/${usy}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
            );
          }
        } catch (err) {
          console.error("sitemap admission_papers fetch failed", err);
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            // Refresh frecvent ca paginile de resurse nou-adăugate să intre rapid în sitemap
            "Cache-Control": "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
            "X-Robots-Tag": "noindex",
          },
        });
      },
    },
  },
});

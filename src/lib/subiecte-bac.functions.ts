import { createServerFn } from "@tanstack/react-start";
import { BAC_AGGREGATES } from "@/lib/bac-archive";
import { BAC_ORIGINALS, compareBacRows, originalBySlug, originalsFor } from "@/lib/bac-originals";

/**
 * Public reads for the /subiecte-bac archive. Every row comes from the bundled original
 * PDFs (src/lib/bac-originals.json, files under public/bac/). The older Supabase-backed
 * archive under /bac/… and /rezolvari/… is separate and untouched.
 */
export type PaperRow = {
  id: string;
  slug: string | null;
  year: number;
  session: string;
  subject_slug: string;
  subject_name: string;
  profil: string | null;
  paper_type: string;
  title: string;
  pdf_url: string | null;
  storage_path: string | null;
  source_url: string | null;
  variant: string | null;
  description: string | null;
  verification?: string | null;
  original_filename?: string | null;
};

const rows = (list: unknown[]) => (list as PaperRow[]).slice().sort(compareBacRows);

export const listSubiecteBac = createServerFn({ method: "GET" })
  .inputValidator(
    (d: {
      an?: number | null;
      materie?: string | null;
      sesiune?: string | null;
      profil?: string | null;
      q?: string | null;
    }) => d,
  )
  .handler(async ({ data }) => rows(originalsFor(data)));

export const getSubiecteBacFilters = createServerFn({ method: "GET" }).handler(async () => {
  const years = new Set<number>();
  const sessions = new Set<string>();
  const materii = new Map<string, string>();
  const profile = new Set<string>();
  BAC_ORIGINALS.forEach((r) => {
    years.add(r.year);
    if (r.session) sessions.add(r.session);
    if (r.subject_slug) materii.set(r.subject_slug, r.subject_name);
    if (r.profil) profile.add(r.profil);
  });
  return {
    years: Array.from(years).sort((a, b) => b - a),
    sessions: Array.from(sessions).sort(),
    materii: Array.from(materii.entries())
      .map(([slug, name]) => ({ slug, name }))
      .sort((a, b) => a.name.localeCompare(b.name, "ro")),
    profile: Array.from(profile).sort(),
  };
});

export const getBacByMaterie = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }) => {
    const list = rows(originalsFor({ materie: data.slug }));
    const name = BAC_AGGREGATES[data.slug]?.name ?? list[0]?.subject_name ?? data.slug;
    return { name, slug: data.slug, rows: list };
  });

export const getBacByYear = createServerFn({ method: "GET" })
  .inputValidator((d: { year: number }) => d)
  .handler(async ({ data }) => ({ year: data.year, rows: rows(originalsFor({ an: data.year })) }));

/** Legacy /subiecte-bac/lucrare/$slug lookups (used only to 301 to the SEO paper URL). */
export const getBacBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }) => {
    const row = originalBySlug(data.slug) as PaperRow | null;
    return row ? { row } : null;
  });

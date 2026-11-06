import { createServerFn } from "@tanstack/react-start";
import { BAC_ORIGINALS, compareBacRows } from "@/lib/bac-originals";
import { bacLucrareSegment, bacMaterieSegment, bacPaperKey, bacPaperPath } from "@/lib/bac-paths";
import { hasRezolvare, rezolvareFor } from "@/lib/bac-rezolvari";

type Original = (typeof BAC_ORIGINALS)[number];

function slim(r: Original) {
  return {
    id: r.id,
    slug: r.slug,
    year: r.year,
    session: r.session,
    subject_slug: r.subject_slug,
    subject_name: r.subject_name,
    profil: r.profil,
    paper_type: r.paper_type,
    title: r.title,
    pdf_url: r.pdf_url,
    source_url: r.source_url,
    variant: r.variant,
    description: r.description,
    verification: r.verification,
    original_filename: r.original_filename,
  };
}

export type BacLucrareRow = ReturnType<typeof slim>;

export const getBacLucrare = createServerFn({ method: "GET" })
  .inputValidator((d: { an: string; materie: string; lucrare: string }) => d)
  .handler(async ({ data }) => {
    const year = Number(data.an);
    if (!Number.isInteger(year)) return null;
    const rows = BAC_ORIGINALS.filter(
      (r) =>
        r.year === year &&
        bacMaterieSegment(r) === data.materie &&
        bacLucrareSegment(r) === data.lucrare,
    );
    if (!rows.length) return null;
    const first = rows[0];
    const key = bacPaperKey(first);
    const subiect = rows.find((r) => r.paper_type === "subiect");
    const barem = rows.find((r) => r.paper_type === "barem");

    // Other papers of the same subject (same year first, then neighbouring years).
    const seen = new Set<string>([key]);
    const related = BAC_ORIGINALS.filter((r) => bacMaterieSegment(r) === data.materie)
      .sort((a, b) => Math.abs(a.year - year) - Math.abs(b.year - year) || compareBacRows(a, b))
      .filter((r) => {
        const k = bacPaperKey(r);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, 16)
      .map((r) => ({
        path: bacPaperPath(r),
        year: r.year,
        session: r.session,
        variant: r.variant,
        rezolvare: hasRezolvare(bacPaperKey(r)),
      }));

    return {
      key,
      year,
      materie: data.materie,
      lucrare: data.lucrare,
      session: first.session,
      variant: first.variant,
      profil: first.profil,
      subject_slug: first.subject_slug,
      subject_name: first.subject_name,
      subiect: subiect ? slim(subiect) : null,
      barem: barem ? slim(barem) : null,
      rezolvare: rezolvareFor(key),
      related,
    };
  });

/** Papers that have a published step-by-step solution (for listings and the sitemap). */
export const listBacRezolvari = createServerFn({ method: "GET" }).handler(async () => {
  const seen = new Set<string>();
  return BAC_ORIGINALS.filter((r) => {
    const k = bacPaperKey(r);
    if (seen.has(k) || !hasRezolvare(k)) return false;
    seen.add(k);
    return true;
  })
    .sort(compareBacRows)
    .map((r) => ({
      path: bacPaperPath(r),
      year: r.year,
      session: r.session,
      variant: r.variant,
      subject_name: r.subject_name,
      materie: bacMaterieSegment(r),
    }));
});

export const BAC_MATRIX_COLUMNS = [
  { materie: "romana-real", label: "Română · real" },
  { materie: "romana-uman", label: "Română · uman" },
  { materie: "matematica-mate-info", label: "Mate M1 · mate-info" },
  { materie: "matematica-st-nat", label: "Mate M2 · șt. naturii" },
  { materie: "matematica-tehnologic", label: "Mate · tehnologic" },
  { materie: "matematica-pedagogic", label: "Mate · pedagogic" },
  { materie: "informatica-mate-info", label: "Info C/C++ · mate-info" },
  { materie: "informatica-stiinte-ale-naturii", label: "Info C/C++ · șt. naturii" },
] as const;

const MATRIX_SESSION_ORDER = [
  "iunie-iulie",
  "august-septembrie",
  "simulare",
  "sesiune-speciala",
  "rezerva",
  "model",
];

/** Year × subject grid of every original paper, linking to its SEO page. */
export const getBacMatrix = createServerFn({ method: "GET" }).handler(async () => {
  type Cell = { session: string; variant: string | null; path: string; rezolvare: boolean };
  const byYear = new Map<number, Record<string, Cell[]>>();
  const seen = new Set<string>();
  for (const r of BAC_ORIGINALS) {
    const key = bacPaperKey(r);
    if (seen.has(key)) continue;
    seen.add(key);
    let materie = bacMaterieSegment(r);
    if (materie === "romana") materie = "romana-real"; // 2010–2012: one paper for all profiles
    const row = byYear.get(r.year) ?? {};
    (row[materie] ??= []).push({
      session: r.session,
      variant: r.variant,
      path: bacPaperPath(r),
      rezolvare: hasRezolvare(key),
    });
    byYear.set(r.year, row);
  }
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, cells]) => {
      for (const list of Object.values(cells)) {
        list.sort(
          (a, b) =>
            MATRIX_SESSION_ORDER.indexOf(a.session) - MATRIX_SESSION_ORDER.indexOf(b.session) ||
            Number(a.variant ?? 0) - Number(b.variant ?? 0),
        );
      }
      return { year, cells };
    });
});

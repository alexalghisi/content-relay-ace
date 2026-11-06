import originals from "./bac-originals.json";
import { matchesBacSubject } from "./bac-archive";

/**
 * Original BAC PDFs (Matematică + Informatică, 2017–2026) bundled with the site.
 * Each row mirrors the `bac_papers` table shape so public reads can merge it with
 * database papers. `verification` records how the file was checked:
 * - official-hash: byte-identical to the PDF inside the ministry's ZIP on subiecteYYYY.edu.ro
 * - ministry-metadata: ministry header + PDF metadata checked; the official archive is offline
 * - official-zip: only the official ZIP could be verified, so the row links to that ZIP
 */
export type BacOriginal = (typeof originals)[number];

export const BAC_ORIGINALS = originals as BacOriginal[];

export const SITE_URL = "https://meditatiidirect.ro";

export function absolutePdfUrl(url: string | null | undefined) {
  if (!url) return null;
  return url.startsWith("/") ? `${SITE_URL}${url}` : url;
}

export function originalsFor(filter: {
  an?: number | null;
  materie?: string | null;
  sesiune?: string | null;
  profil?: string | null;
  q?: string | null;
}) {
  const q = filter.q?.trim().toLowerCase();
  return BAC_ORIGINALS.filter(
    (r) =>
      (!filter.an || r.year === filter.an) &&
      (!filter.materie || matchesBacSubject(r.subject_slug, filter.materie)) &&
      (!filter.sesiune || r.session === filter.sesiune) &&
      (!filter.profil || r.profil === filter.profil) &&
      (!q ||
        r.title.toLowerCase().includes(q) ||
        r.subject_name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q)),
  );
}

export function originalBySlug(slug: string) {
  return BAC_ORIGINALS.find((r) => r.slug === slug) ?? null;
}

const SESSION_ORDER = [
  "iunie-iulie",
  "august-septembrie",
  "sesiune-speciala",
  "rezerva",
  "simulare",
  "model",
  "antrenament",
];

export function compareBacRows(
  a: {
    year: number;
    session: string;
    subject_slug: string;
    paper_type: string;
    variant?: string | null;
  },
  b: {
    year: number;
    session: string;
    subject_slug: string;
    paper_type: string;
    variant?: string | null;
  },
) {
  return (
    b.year - a.year ||
    a.subject_slug.localeCompare(b.subject_slug) ||
    SESSION_ORDER.indexOf(a.session) - SESSION_ORDER.indexOf(b.session) ||
    (a.variant ?? "").localeCompare(b.variant ?? "") ||
    b.paper_type.localeCompare(a.paper_type)
  );
}

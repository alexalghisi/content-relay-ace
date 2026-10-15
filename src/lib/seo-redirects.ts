// Permanent (301) consolidation of duplicate pages into one canonical page per search intent.
// Used by src/server.ts (redirects) and the sitemap (exclusion). Keep both in sync via this file only.

/** Landing pages with the same search intent → canonical landing page. */
export const LANDING_REDIRECTS: Record<string, string> = {
  "/profesor-meditatii": "/profesor-particular",
  "/profesori-meditatii": "/profesor-particular",
  "/meditatori": "/profesor-particular",
  "/caut-profesor": "/profesor-particular",
  "/meditatii-private": "/meditatii-particulare",
  "/meditatii-scoala": "/meditatii-particulare",
  "/ore-online": "/meditatii-online",
  "/platforma-meditatii-online": "/meditatii-online",
  "/anunturi-meditatii-bac": "/anunturi-meditatii",
};

const cluster = (canonical: string, dups: string[]) => Object.fromEntries(dups.map((d) => [d, canonical]));

/** Duplicate blog articles → canonical article of the same topic. */
export const BLOG_REDIRECTS: Record<string, string> = {
  ...cluster("meditatii-individuale-vs-grup-ghid-complet-2026", [
    "diferente-meditatii-individuale-vs-grup", "meditatii-individuale-sau-grup-avantaje-dezavantaje",
    "meditatii-individuale-vs-grup-2026", "meditatii-individuale-vs-grup-avantaje-dezavantaje",
    "meditatii-individuale-vs-grup-ghid-2026", "meditatii-individuale-vs-grup-ghid-alegere-2026",
  ]),
  ...cluster("evaluare-nationala-vs-teste-nationale-ghid-2026", [
    "diferente-evaluare-nationala-teste-nationale-2026", "evaluare-nationala-vs-teste-nationale-2026",
    "evaluare-nationala-vs-teste-nationale-calendar-probe-2026", "evaluare-nationala-vs-teste-nationale-diferente-2026",
    "evaluare-nationala-vs-teste-nationale-ghid-2026-2026-10-03",
  ]),
  ...cluster("simulare-bacalaureat-2026-ghid-complet", [
    "ghid-complet-simulare-bac-2026-probe-calendar-note", "simulare-bac-2026-ghid-complet-date-probe-note",
    "simulare-bac-2026-ghid-complet-probe-date-note",
  ]),
  ...cluster("cv-bursa-strainatate-ghid-2026", [
    "cv-bursa-strainatate-ghid-2026-2026-10-05", "cv-bursa-studii-strainatate-ghid-2026", "model-cv-bursa-studii-strainatate-2026",
  ]),
  ...cluster("bursa-erasmus-liceeni-studenti-2026", ["bursa-erasmus-liceeni-studenti-2026-2026-09-10"]),
  ...cluster("admitere-drept-bucuresti-2026-ghid-complet", [
    "admitere-drept-2026-gramatica-rationament-logic", "drept-admitere-rationament-logic", "ghid-admitere-drept-bucuresti-2026",
    "ghid-admitere-drept-bucuresti-2026-gramatica-rationament-logic", "meditatii-pentru-admitere-drept",
    "pregatire-admitere-drept-bucuresti-2026", "pregatire-admitere-drept-bucuresti-gramatica-2026",
  ]),
  ...cluster("meditatii-fizica-electromagnetism-explicat-pas-cu-pas-2026", [
    "meditatii-fizica-electromagnetism-explicat", "meditatii-fizica-electromagnetism-explicat-pas-cu-pas-2026-2026-09-26",
    "meditatii-fizica-electromagnetism-ghid-complet-2026",
  ]),
  ...cluster("meditatii-cambridge-cae-c1-6-luni-2026", [
    "meditatii-cambridge-advanced-cae-c1-6-luni", "meditatii-cambridge-advanced-cae-ghid-c1-6-luni",
  ]),
  ...cluster("top-10-greseli-bac-matematica-2026-cum-eviti", [
    "top-10-greseli-bac-matematica-2027-cum-le-eviti", "top-10-greseli-bac-matematica-cum-eviti-2026",
  ]),
  ...cluster("eseu-luceafarul-eminescu-bac-romana-2026", [
    "bac-romana-2026-eseu-luceafarul-eminescu-explicat", "eseu-bac-romana-luceafarul-eminescu-2026",
  ]),
  ...cluster("tehnica-pomodoro-invatare-eficienta-2026", ["tehnica-pomodoro-liceeni-invatare-2026"]),
};

/** Returns the 301 target for a path, or null. */
export function consolidatedTarget(pathname: string): string | null {
  if (LANDING_REDIRECTS[pathname]) return LANDING_REDIRECTS[pathname];
  const p = pathname.match(/^\/profesori\/([^/]+)$/);
  if (p) return `/meditatii-in/${p[1]}`;
  const b = pathname.match(/^\/blog\/([^/]+)$/);
  if (b && BLOG_REDIRECTS[b[1]]) return `/blog/${BLOG_REDIRECTS[b[1]]}`;
  return null;
}

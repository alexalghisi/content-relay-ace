// Reguli pure pentru paginile locale (/meditatii/$materie/$oras și /meditatii-in/$oras):
// când e indexabilă o pagină, când folosim datele naționale și cum arată title/description.
// Folosite de rute ȘI de sitemap, ca Google să nu primească semnale contradictorii.
import { MIN_LISTINGS_FOR_INDEX } from "@/lib/market-stats.functions";

export const faraDiacritice = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

export interface SemnaleLocale {
  /** Anunțuri active cu locația în oraș. */
  localAds: number;
  /** Anunțuri active online (nu din oraș) pentru aceeași materie. */
  onlineAds: number;
  /** Cereri reale postate pentru orașul respectiv (nu doar online). */
  cityRequests: number;
  /** Există un ghid local scris de mână pentru combinație. */
  ghid?: boolean;
}

/**
 * O pagină locală intră în index dacă are conținut real și specific orașului:
 * - un ghid local scris de mână, sau
 * - cel puțin MIN_LISTINGS_FOR_INDEX anunțuri din oraș, sau
 * - destui profesori (din oraș + online) ȘI cel puțin o cerere reală din acel oraș.
 * Profesorii online singuri apar în toate orașele, deci nu fac o pagină unică; o pagină goală rămâne noindex.
 */
export function paginaLocalaIndexabila(s: SemnaleLocale): boolean {
  if (s.ghid) return true;
  if (s.localAds >= MIN_LISTINGS_FOR_INDEX) return true;
  return s.localAds + s.onlineAds >= MIN_LISTINGS_FOR_INDEX && s.cityRequests >= 1;
}

/** Sub acest prag (tarife sau cereri), pagina locală completează cu datele naționale ale materiei. */
export const PRAG_DATE_LOCALE = 3;

export function necesitaDateNationale(s: {
  price: { n: number } | null;
  recentRequests: unknown[];
}): boolean {
  return !s.price || s.price.n < PRAG_DATE_LOCALE || s.recentRequests.length < PRAG_DATE_LOCALE;
}

const primulCare = (candidati: string[], max: number) =>
  candidati.find((c) => c.length <= max) ?? candidati[candidati.length - 1]!;

/**
 * Alege prima bază care încape în `max` și o completează până la `min` cu fraze adevărate;
 * ca ultimă soluție taie la ultimul cuvânt întreg.
 */
function potriveste(baze: string[], extra: string[], min = 140, max = 160): string {
  const baza = baze.find((x) => x.length <= max);
  if (!baza) {
    const t = baze[baze.length - 1]!.slice(0, max - 1);
    return `${t.slice(0, t.lastIndexOf(" "))}…`;
  }
  let d = baza;
  for (const e of extra) {
    if (d.length >= min) break;
    if ((d + " " + e).length <= max) d = `${d} ${e}`;
  }
  return d;
}

// Fraze adevărate pentru orice pagină: cererea e gratuită, plata e directă (fără comision),
// profesorul își propune tariful (AGENTS.md, src/routes/index.tsx HOME_FAQ).
const FRAZE = [
  "Tu alegi profesorul.",
  "Plătești direct profesorului.",
  "Online sau acasă.",
  "Profesori care predau și online.",
];

export interface PretReal {
  min: number;
  median: number;
  max: number;
  n: number;
}

export function titluCombo(materie: string, oras: string, an: number): string {
  const m = faraDiacritice(materie).toLowerCase();
  const o = faraDiacritice(oras);
  return primulCare(
    [
      `Meditatii ${m} ${o} ${an} — online sau acasă`,
      `Meditatii ${m} ${o} — online sau acasă`,
      `Meditatii ${m} ${o} — online/acasă`,
      `Meditatii ${m} ${o}`,
    ],
    60,
  );
}

export function descriereCombo(opts: {
  materie: string;
  oras: string;
  pret: PretReal | null;
  pretNational: boolean;
  /** Există anunțuri ale unor profesori din oraș (altfel nu promitem „profesori din …”). */
  profesoriLocali: boolean;
}): string {
  const m = faraDiacritice(opts.materie).toLowerCase();
  const o = faraDiacritice(opts.oras);
  const cine = opts.profesoriLocali
    ? `profesori din ${opts.oras} și online`
    : `profesori care predau online și elevilor din ${opts.oras}`;
  const cta = "Ceri gratuit oferte cu preț și program, fără comision.";
  const pretLung = opts.pret
    ? ` Tarif median real: ${opts.pret.median} lei/oră${opts.pretNational ? " (național)" : ""}.`
    : "";
  const pretScurt = opts.pret
    ? ` Median ${opts.pret.median} lei/oră${opts.pretNational ? " (RO)" : ""}.`
    : "";
  return potriveste(
    [
      `Meditatii ${m} ${o}: ${cine}. ${cta}${pretLung}`,
      `Meditatii ${m} ${o}: ${cine}. ${cta}${pretScurt}`,
      `Meditatii ${m} ${o}, online sau acasă. ${cta}${pretScurt}`,
    ],
    FRAZE,
  );
}

export function titluOras(oras: string, an: number): string {
  const o = faraDiacritice(oras);
  return primulCare(
    [
      `Meditatii ${o} ${an} — profesori online sau acasă`,
      `Meditatii ${o} — profesori online sau acasă`,
      `Meditatii ${o} — online sau acasă`,
      `Meditatii ${o}`,
    ],
    60,
  );
}

export function descriereOras(opts: {
  oras: string;
  pret: PretReal | null;
  profesoriLocali: boolean;
}): string {
  const o = faraDiacritice(opts.oras);
  const cine = opts.profesoriLocali
    ? `profesori din ${opts.oras} sau online`
    : `profesori care predau online și elevilor din ${opts.oras}`;
  const cta = "Ceri gratuit oferte, fără comision.";
  const pret = opts.pret ? ` Tarif median real: ${opts.pret.median} lei/oră.` : "";
  return potriveste(
    [
      `Meditatii ${o}: matematică, română, engleză, BAC, cu ${cine}. ${cta}${pret}`,
      `Meditatii ${o}: ${cine}. ${cta}${pret}`,
    ],
    FRAZE,
  );
}

/** Normalizare pentru potriviri de text (fără diacritice, litere mici). */
export const normText = (s: string | null | undefined) => faraDiacritice(s ?? "").toLowerCase();

/** O cerere/ofertă cu materia în text liber aparține materiei paginii? (aceeași regulă ca statisticile) */
export function potrivesteMaterie(
  text: string | null,
  numeMaterie: string,
  sluguri: string[],
): boolean {
  const n = normText(text);
  const subj = normText(numeMaterie);
  return !!n && (n.includes(subj) || sluguri.map(normText).some((x) => n.includes(x)));
}

/** Locația (text liber) e în orașul dat? Lista goală = toată țara. */
export function inLocalitate(loc: string | null, match: string[]): boolean {
  return match.length === 0 || match.some((m) => normText(loc).includes(normText(m)));
}

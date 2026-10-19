// Scanerul de lacune — logică pură (fără UI, fără rețea, fără stocare).
// Pornește de la blocajul ales de elev și coboară adaptiv pe prerechizitele din
// Harta Blocajelor: o întrebare greșită deschide verificarea noțiunilor pe care se
// sprijină, una corectă închide ramura. Rezultatul: rădăcinile reale ale blocajului
// și traseul de recuperare, în ordinea în care se învață.
import {
  BLOCAJE,
  blocajeForMaterie,
  getBlocaj,
  type BlocajMaterie,
  type BlocajNode,
} from "@/data/blocaje";

/** Câte întrebări pune cel mult un scan (scurt, ca elevul să-l termine). */
export const MAX_INTREBARI = 10;

export type Raspuns = "stiu" | "lacuna";

export interface ScanState {
  tinta: string;
  /** Ordinea în care au fost puse întrebările. */
  istoric: string[];
  raspunsuri: Record<string, Raspuns>;
  /** Noțiuni care urmează să fie verificate (BFS: mai întâi cele apropiate de țintă). */
  coada: string[];
}

export const startScan = (tinta: string): ScanState => ({
  tinta,
  istoric: [],
  raspunsuri: {},
  coada: getBlocaj(tinta) ? [tinta] : [],
});

/** Următoarea noțiune de verificat, sau `null` când scanul s-a încheiat. */
export function nextQuestion(s: ScanState): BlocajNode | null {
  if (s.istoric.length >= MAX_INTREBARI) return null;
  const slug = s.coada.find((x) => !(x in s.raspunsuri));
  return slug ? (getBlocaj(slug) ?? null) : null;
}

export function answer(s: ScanState, slug: string, r: Raspuns): ScanState {
  if (slug in s.raspunsuri) return s;
  const raspunsuri = { ...s.raspunsuri, [slug]: r };
  const coada = s.coada.filter((x) => x !== slug);
  if (r === "lacuna") {
    const n = getBlocaj(slug);
    for (const p of n?.lipsa ?? []) {
      if (!(p in raspunsuri) && !coada.includes(p) && getBlocaj(p)) coada.push(p);
    }
  }
  return { ...s, istoric: [...s.istoric, slug], raspunsuri, coada };
}

export const isDone = (s: ScanState) => nextQuestion(s) === null;

/**
 * Sortare topologică stabilă: prerechizitele înaintea noțiunilor care le folosesc;
 * la egalitate, clasa mai mică și apoi ordinea din programă (ordinea din fișiere).
 */
export function topoOrder(nodes: BlocajNode[]): BlocajNode[] {
  const inSet = new Set(nodes.map((n) => n.slug));
  const pos = new Map(BLOCAJE.map((n, i) => [n.slug, i]));
  const key = (n: BlocajNode) => [Math.min(...n.clase), pos.get(n.slug) ?? 0] as const;
  const cmp = (a: BlocajNode, b: BlocajNode) => {
    const [ca, pa] = key(a);
    const [cb, pb] = key(b);
    return ca - cb || pa - pb;
  };
  const deg = new Map(nodes.map((n) => [n.slug, n.lipsa.filter((p) => inSet.has(p)).length]));
  const ready = nodes.filter((n) => deg.get(n.slug) === 0).sort(cmp);
  const out: BlocajNode[] = [];
  while (ready.length) {
    const n = ready.shift()!;
    out.push(n);
    for (const d of nodes) {
      if (!d.lipsa.includes(n.slug)) continue;
      const left = (deg.get(d.slug) ?? 0) - 1;
      deg.set(d.slug, left);
      if (left === 0) {
        ready.push(d);
        ready.sort(cmp);
      }
    }
  }
  return out;
}

/** Ordinea în care se construiesc noțiunile la o materie (conținut static, indexabil). */
export const learningOrder = (m: BlocajMaterie) => topoOrder(blocajeForMaterie(m));

export interface ScanResult {
  tinta: BlocajNode;
  /** Ținta a fost rezolvată corect din prima. */
  tintaOk: boolean;
  /** Noțiunile cu lacună a căror bază a fost verificată (sau nu are bază): de aici pornești. */
  radacini: BlocajNode[];
  /** Toate lacunele, în ordinea de recuperare. */
  traseu: BlocajNode[];
  /** Noțiuni confirmate ca știute. */
  stiute: BlocajNode[];
  /** Noțiuni rămase neverificate pentru că s-a atins limita de întrebări. */
  neverificate: BlocajNode[];
}

export function result(s: ScanState): ScanResult | null {
  const tinta = getBlocaj(s.tinta);
  if (!tinta) return null;
  const pick = (r: Raspuns) =>
    s.istoric
      .filter((x) => s.raspunsuri[x] === r)
      .map(getBlocaj)
      .filter((x): x is BlocajNode => !!x);
  const lacune = pick("lacuna");
  const gapSet = new Set(lacune.map((n) => n.slug));
  const neverificate = s.coada
    .filter((x) => !(x in s.raspunsuri))
    .map(getBlocaj)
    .filter((x): x is BlocajNode => !!x);
  const pending = new Set(neverificate.map((n) => n.slug));
  // Rădăcină = lacună fără prerechizite cu lacună. Dacă are prerechizite încă
  // neverificate, rămâne candidat (le arătăm separat ca „de verificat”).
  const radacini = topoOrder(lacune).filter((n) => !n.lipsa.some((p) => gapSet.has(p)));
  return {
    tinta,
    tintaOk: s.raspunsuri[s.tinta] === "stiu",
    radacini: radacini.length ? radacini : [],
    traseu: topoOrder(lacune),
    stiute: pick("stiu"),
    neverificate: neverificate.filter((n) => pending.has(n.slug)),
  };
}

/** Textul precompletat în cererea de meditații (fără date personale). */
export function diagnosticText(r: ScanResult): string {
  if (r.tintaOk)
    return `Am făcut Scanerul de lacune: „${r.tinta.titlu}” îmi iese. Vreau să continui cu capitolele următoare.`;
  const rad = r.radacini.map((n) => n.titlu).join("; ");
  const traseu = r.traseu.map((n) => n.titlu).join(" → ");
  return [
    `Diagnostic din Scanerul de lacune: m-am blocat la „${r.tinta.titlu}”.`,
    rad ? `Rădăcina problemei: ${rad}.` : "",
    traseu ? `Traseu de recuperare: ${traseu}.` : "",
  ]
    .filter(Boolean)
    .join(" ")
    .slice(0, 1500);
}

/** Codifică/decodifică un rezultat în URL (doar slug-uri, fără date personale). */
export const encodeTraseu = (r: ScanResult) =>
  [r.tinta.slug, ...r.traseu.map((n) => n.slug)].join(".");

export function textFromTraseuParam(param: string): string {
  const [t, ...rest] = param.split(".").slice(0, 20);
  const tinta = getBlocaj(t);
  if (!tinta) return "";
  const lacune = rest.map(getBlocaj).filter((x): x is BlocajNode => !!x);
  const gapSet = new Set(lacune.map((n) => n.slug));
  const ordered = topoOrder(lacune);
  return diagnosticText({
    tinta,
    tintaOk: lacune.length === 0,
    radacini: ordered.filter((n) => !n.lipsa.some((p) => gapSet.has(p))),
    traseu: ordered,
    stiute: [],
    neverificate: [],
  });
}

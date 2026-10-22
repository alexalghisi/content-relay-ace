import { INFORMATICA_2026_IUNIE } from "./informatica-2026-iunie";
import { INFORMATICA_2025_SIMULARE } from "./informatica-2025-simulare";
import { MATEMATICA_2024_AUGUST } from "./matematica-2024-august";
import { MATEMATICA_2024_SIMULARE } from "./matematica-2024-simulare";
import { rezolvareAdmitere } from "@/data/rezolvari-admitere";
import {
  esteAdmitere,
  type ItemRezolvat,
  type OriceRezolvare,
  type RezolvareVerificata,
} from "./types";

export type { ItemRezolvat, OriceRezolvare, RezolvareAdmitere, RezolvareVerificata } from "./types";

/** Toate rezolvările din repo, indiferent de status (pentru teste și flux editorial). */
export const TOATE_REZOLVARILE: RezolvareVerificata[] = [
  INFORMATICA_2026_IUNIE,
  MATEMATICA_2024_AUGUST,
  INFORMATICA_2025_SIMULARE,
  MATEMATICA_2024_SIMULARE,
];

/** Doar cele publicate apar pe site, în sitemap și în contextul Meditatorului AI. */
export const REZOLVARI_PUBLICATE = TOATE_REZOLVARILE.filter((r) => r.status === "publicat");

export const cheieRezolvare = (materie: string, an: number, sesiune: string) =>
  `${materie}/${an}/${sesiune}`;

export function rezolvarePublicata(
  materie: string,
  an: number,
  sesiune: string,
): RezolvareVerificata | null {
  return (
    REZOLVARI_PUBLICATE.find(
      (r) => r.materie === materie && r.an === an && r.sesiune === sesiune,
    ) ?? null
  );
}

/** Id global al unui exercițiu: "informatica/2026/iunie#s3-1" (BAC) sau "admitere/upb/informatica/2025#q1". */
export const idExercitiu = (r: OriceRezolvare, item: ItemRezolvat) =>
  esteAdmitere(r)
    ? `admitere/${r.universitate}/${r.materie}/${r.an}#${item.id}`
    : `${cheieRezolvare(r.materie, r.an, r.sesiune)}#${item.id}`;
export const ID_EXERCITIU_RE =
  /^([a-z][a-z0-9-]*)\/(\d{4})\/(iunie|august|speciala|simulare)#([a-z0-9-]{1,20})$/;
const ID_ADMITERE_RE =
  /^admitere\/([a-z0-9-]{1,40})\/([a-z0-9-]{1,40})\/(\d{4})#([a-z0-9-]{1,20})$/;

export function gasesteExercitiu(
  id: string,
): { rezolvare: OriceRezolvare; item: ItemRezolvat } | null {
  let r: OriceRezolvare | null = null;
  let itemId = "";
  const a = ID_ADMITERE_RE.exec(id);
  if (a) {
    r = rezolvareAdmitere(a[1], a[2], Number(a[3]));
    itemId = a[4];
  } else {
    const m = ID_EXERCITIU_RE.exec(id);
    if (!m) return null;
    r = rezolvarePublicata(m[1], Number(m[2]), m[3]);
    itemId = m[4];
  }
  const item = r?.sectiuni.flatMap((s) => s.itemi).find((i) => i.id === itemId);
  return r && item ? { rezolvare: r, item } : null;
}

/**
 * Contextul trimis Meditatorului AI pentru un exercițiu. Se construiește PE SERVER din conținutul
 * publicat și verificat din repo — clientul trimite doar id-ul, nu poate injecta un „răspuns corect” fals.
 */
export function contextExercitiu(id: string, maxLen = 3900): string | null {
  const g = gasesteExercitiu(id);
  if (!g) return null;
  const { rezolvare: r, item } = g;
  const linii = [
    esteAdmitere(r)
      ? `Exercițiu din subiectul de admitere ${r.an}, ${r.universitateNume}, ${r.proba} (${r.programa}).`
      : `Exercițiu din subiectul oficial de bacalaureat ${r.an}, ${r.proba}, ${r.varianta != null ? `Varianta ${r.varianta}` : "Simulare"} (${r.programa}).`,
    `${item.eticheta} (${item.puncte} p). Cerința, reformulată: ${item.cerinta}`,
    `Rezolvarea verificată MeditatiiDirect (nu este baremul oficial; elevul o poate vedea pe pagină):`,
    ...item.pasi.map((p, i) => `${i + 1}. ${p}`),
    `Răspuns final: ${item.raspuns}`,
    item.cod ? `Cod (${item.cod.limbaj}):\n${item.cod.sursa}` : "",
    item.greseli.length ? `Greșeli frecvente: ${item.greseli.join(" | ")}` : "",
  ].filter(Boolean);
  return linii.join("\n").slice(0, maxLen);
}

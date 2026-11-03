/**
 * Calendarele examenelor naționale 2027, așa cum au fost anunțate de Ministerul Educației
 * (forma comunicată presei în toamna 2026). Sursele sunt afișate pe pagini; varianta obligatorie
 * este ordinul publicat în Monitorul Oficial.
 */
export type Eveniment = { data: string; ziua: string; ce: string };

export const BAC_2027: { titlu: string; evenimente: Eveniment[] }[] = [
  { titlu: "Simularea BAC 2027 (probele scrise)", evenimente: [
    { data: "2027-03-22", ziua: "luni, 22 martie", ce: "Limba și literatura română (E.a)" },
    { data: "2027-03-23", ziua: "marți, 23 martie", ce: "Proba obligatorie a profilului (E.c) — ex. matematică, istorie" },
    { data: "2027-03-24", ziua: "miercuri, 24 martie", ce: "Proba la alegere a profilului (E.d) — ex. informatică, biologie, geografie" },
    { data: "2027-03-25", ziua: "joi, 25 martie", ce: "Limba și literatura maternă (E.b)" },
    { data: "2027-04-09", ziua: "vineri, 9 aprilie", ce: "Rezultatele simulării" },
  ] },
  { titlu: "Probele de competențe (orale și digitale)", evenimente: [
    { data: "2027-04-12", ziua: "12–14 aprilie", ce: "Competențe de comunicare orală în limba română (proba A)" },
    { data: "2027-04-14", ziua: "14–16 aprilie", ce: "Competențe de comunicare orală în limba maternă (proba B)" },
    { data: "2027-04-19", ziua: "19–21 aprilie", ce: "Competențe lingvistice într-o limbă de circulație internațională (proba C)" },
    { data: "2027-04-21", ziua: "21–23 aprilie", ce: "Competențe digitale (proba D)" },
  ] },
  { titlu: "Probele scrise — sesiunea iunie 2027", evenimente: [
    { data: "2027-06-14", ziua: "luni, 14 iunie", ce: "Limba și literatura română (E.a)" },
    { data: "2027-06-15", ziua: "marți, 15 iunie", ce: "Proba obligatorie a profilului (E.c)" },
    { data: "2027-06-17", ziua: "joi, 17 iunie", ce: "Proba la alegere a profilului și specializării (E.d)" },
    { data: "2027-06-18", ziua: "vineri, 18 iunie", ce: "Limba și literatura maternă (E.b)" },
  ] },
  { titlu: "Rezultate și contestații", evenimente: [
    { data: "2027-06-23", ziua: "miercuri, 23 iunie", ce: "Rezultate inițiale (până la ora 12:00); depunerea contestațiilor 14:00–18:00" },
    { data: "2027-06-24", ziua: "24–25 iunie", ce: "Vizualizarea lucrărilor și depunerea contestațiilor" },
    { data: "2027-07-01", ziua: "joi, 1 iulie", ce: "Rezultate finale, după contestații" },
  ] },
];

export const EN_2027: { titlu: string; evenimente: Eveniment[] }[] = [
  { titlu: "Simularea Evaluării Naționale 2027 (clasa a VIII-a)", evenimente: [
    { data: "2027-03-16", ziua: "marți, 16 martie", ce: "Limba și literatura română" },
    { data: "2027-03-17", ziua: "miercuri, 17 martie", ce: "Matematică" },
    { data: "2027-03-18", ziua: "joi, 18 martie", ce: "Limba și literatura maternă" },
    { data: "2027-03-30", ziua: "marți, 30 martie", ce: "Rezultatele simulării" },
  ] },
  { titlu: "Evaluarea Națională 2027 — examenul", evenimente: [
    { data: "2027-06-22", ziua: "marți, 22 iunie", ce: "Limba și literatura română" },
    { data: "2027-06-24", ziua: "joi, 24 iunie", ce: "Matematică" },
    { data: "2027-06-25", ziua: "vineri, 25 iunie", ce: "Limba și literatura maternă" },
  ] },
  { titlu: "Rezultate și contestații", evenimente: [
    { data: "2027-06-30", ziua: "miercuri, 30 iunie", ce: "Rezultate inițiale (până la ora 12:00)" },
    { data: "2027-06-30", ziua: "30 iunie – 2 iulie", ce: "Vizualizarea lucrărilor (opțională) și depunerea contestațiilor" },
    { data: "2027-07-03", ziua: "3–6 iulie", ce: "Soluționarea contestațiilor" },
    { data: "2027-07-07", ziua: "miercuri, 7 iulie", ce: "Rezultate finale" },
  ] },
];

export const SURSE_BAC_2027 = [
  { label: "Edupedu — Calendar BAC 2027", href: "https://www.edupedu.ro/calendar-bac-2027-anuntat-de-ministerul-educatiei-probele-orale-incep-pe-12-aprilie-absolventii-de-liceu-vor-sustine-probele-scrise-perioada-14-18-iunie-cand-are-loc-simularea-examenului-national/" },
];
export const SURSE_EN_2027 = [
  { label: "Digi24 — Evaluarea Națională 2027, calendarul oficial", href: "https://www.digi24.ro/stiri/actualitate/educatie/evaluarea-nationala-2027-ministerul-educatiei-a-anuntat-calendarul-oficial-cand-au-loc-simularea-si-examenul-4000119" },
];

/** Zile întregi până la o dată ISO (0 dacă a trecut). */
export function zilePana(iso: string, acum: Date): number {
  const t = Date.parse(`${iso}T00:00:00+02:00`);
  return Math.max(0, Math.ceil((t - acum.getTime()) / 86_400_000));
}

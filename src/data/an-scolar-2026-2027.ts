/**
 * Structura anului școlar 2026-2027, conform Ordinului ministrului educației și cercetării
 * nr. 3.194/2026 (Monitorul Oficial nr. 126 din 16 februarie 2026). Sursele sunt afișate pe pagină.
 * Modulele 3 și 4 depind de săptămâna de vacanță aleasă de inspectoratul școlar al fiecărui județ.
 */
import type { Eveniment } from "@/data/calendar-2027";

export const AN_SCOLAR_2026_2027: { titlu: string; evenimente: Eveniment[] }[] = [
  {
    titlu: "Module de cursuri și vacanțe 2026-2027",
    evenimente: [
      { data: "2026-09-07", ziua: "7 sept. – 23 oct. 2026", ce: "Modulul 1 de cursuri" },
      { data: "2026-10-24", ziua: "24 oct. – 1 nov. 2026", ce: "Vacanța de toamnă" },
      { data: "2026-11-02", ziua: "2 nov. – 22 dec. 2026", ce: "Modulul 2 de cursuri" },
      { data: "2026-12-23", ziua: "23 dec. 2026 – 10 ian. 2027", ce: "Vacanța de iarnă" },
      {
        data: "2027-01-11",
        ziua: "din 11 ianuarie 2027",
        ce: "Modulul 3 de cursuri — se încheie pe 12, 19 sau 26 februarie, în funcție de județ",
      },
      {
        data: "2027-02-15",
        ziua: "15 feb. – 7 mar. 2027",
        ce: "Vacanța mobilă („de schi”): o săptămână din acest interval, stabilită de inspectoratul școlar județean",
      },
      {
        data: "2027-02-22",
        ziua: "până pe 23 aprilie 2027",
        ce: "Modulul 4 de cursuri — începe pe 22 februarie, 1 martie sau 8 martie, în funcție de județ",
      },
      { data: "2027-04-24", ziua: "24 apr. – 4 mai 2027", ce: "Vacanța de primăvară" },
      { data: "2027-05-05", ziua: "5 mai – 18 iun. 2027", ce: "Modulul 5 de cursuri" },
      { data: "2027-06-19", ziua: "19 iun. – 5 sept. 2027", ce: "Vacanța de vară" },
    ],
  },
  {
    titlu: "Când se termină cursurile pentru clasele terminale",
    evenimente: [
      {
        data: "2027-06-04",
        ziua: "vineri, 4 iunie 2027",
        ce: "Clasa a XII-a zi și a XIII-a seral/frecvență redusă (34 de săptămâni de cursuri)",
      },
      {
        data: "2027-06-11",
        ziua: "vineri, 11 iunie 2027",
        ce: "Clasa a VIII-a (35 de săptămâni de cursuri)",
      },
      {
        data: "2027-06-18",
        ziua: "vineri, 18 iunie 2027",
        ce: "Celelalte clase (36 de săptămâni de cursuri)",
      },
      {
        data: "2027-06-25",
        ziua: "vineri, 25 iunie 2027",
        ce: "Liceul tehnologic (clasele neterminale, fără a IX-a) și învățământul profesional (37 de săptămâni)",
      },
    ],
  },
];

export const SURSE_AN_SCOLAR = [
  {
    label: "Edupedu — Calendarul anului școlar 2026-2027",
    href: "https://www.edupedu.ro/cand-incepe-scoala-in-septembrie-2026-calendarul-anului-scolar-2026-2027/",
  },
  {
    label: "Agerpres — Ordinul privind structura anului școlar, în Monitorul Oficial",
    href: "https://agerpres.ro/educatie-stiinta/2026/02/16/ordinul-privind-structura-anului-scolar-2026---2027-a-fost-publicat-in-monitorul-oficial--1528717",
  },
];

import { createFileRoute, Link } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

// Google Trends (RO, 12 luni): „meditatii matematica sector 6/3/4” apar printre căutările de top pentru matematică.
const SECTOARE: { n: number; cartiere: string }[] = [
  { n: 1, cartiere: "Dorobanți, Aviației, Băneasa, Pajura, Bucureștii Noi, Victoriei" },
  { n: 2, cartiere: "Floreasca, Tei, Colentina, Pantelimon, Obor, Iancului" },
  { n: 3, cartiere: "Titan, Dristor, Vitan, Balta Albă, Unirii" },
  { n: 4, cartiere: "Berceni, Tineretului, Văcărești, Giurgiului, Olteniței" },
  { n: 5, cartiere: "Rahova, Ferentari, 13 Septembrie, Cotroceni, Ghencea" },
  { n: 6, cartiere: "Drumul Taberei, Militari, Crângași, Giulești, Grozăvești" },
];

export const Route = createFileRoute("/meditatii-bucuresti-sectoare")(
  seoPage({
    path: "/meditatii-bucuresti-sectoare",
    title: "Meditații pe sectoare în București (sector 1–6) | MeditatiiDirect.ro",
    description:
      "Meditații la matematică, română, engleză în sectorul 1, 2, 3, 4, 5 sau 6 din București: postezi gratuit o cerere și primești oferte de la profesori din zona ta.",
    h1: "Meditații în București, pe sectoare",
    intro:
      "Cauți meditații la matematică în sectorul 6, la română în sectorul 3 sau la engleză în sectorul 1? Postează gratuit o cerere cu sectorul și materia, iar profesorii din zona ta (sau online) îți trimit oferte.",
    bullets: [
      "Cererea e gratuită și durează un minut",
      "Alegi: la tine acasă, la profesor sau online",
      "Vezi oferta, prețul și profilul înainte să răspunzi",
    ],
    sections: SECTOARE.map(({ n, cartiere }) => ({
      title: `Meditații sector ${n}`,
      body: (
        <>
          <p id={`sector-${n}`}>
            Zone: {cartiere}. Scrie în cerere „sector {n}” și cartierul, ca profesorii apropiați să
            te găsească ușor.
          </p>
          <p>
            <Link
              to="/meditatii"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Cere meditații în sectorul {n}
            </Link>
          </p>
        </>
      ),
    })),
    faqs: [
      {
        q: "Cum găsesc meditații la matematică în sectorul meu?",
        a: "Postezi o cerere pe MeditatiiDirect.ro în care scrii materia, clasa și sectorul (de exemplu „matematică clasa a 8-a, sector 6, Drumul Taberei”). Profesorii care predau în zonă sau online îți trimit propuneri.",
      },
      {
        q: "Pot face meditații online dacă nu găsesc un profesor în sector?",
        a: "Da. Mulți profesori predau online, iar lecția nu mai depinde de distanță sau de trafic.",
      },
      {
        q: "Cât costă meditațiile în București?",
        a: "Prețul îl propune fiecare profesor în ofertă și depinde de materie, nivel și durată. Tarifele reale de pe platformă, pe materii, sunt pe pagina de prețuri.",
      },
    ],
    related: [
      { to: "/meditatii-in/bucuresti", label: "Meditații București" },
      { to: "/meditatii-matematica", label: "Meditații matematică" },
      { to: "/meditatii-online", label: "Meditații online" },
      { to: "/preturi-meditatii", label: "Prețuri meditații" },
    ],
  }),
);

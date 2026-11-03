import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { BAC_2027, SURSE_BAC_2027 } from "@/data/calendar-2027";

const URL = "https://meditatiidirect.ro/calendar-bac-2027";
const TITLE = "Calendar BAC 2027 oficial: simulare 22-25 martie, probe scrise 14-18 iunie";
const DESC = "Calendarul Bacalaureat 2027: simularea BAC (22-25 martie), probele orale din aprilie, probele scrise 14-18 iunie, rezultate 23 iunie și contestații. Plan de pregătire pe luni.";

const FAQS = [
  { q: "Când este simularea BAC 2027?", a: "Simularea probelor scrise de la Bacalaureat 2027 are loc între 22 și 25 martie 2027: română (22 martie), proba obligatorie a profilului (23 martie), proba la alegere (24 martie) și limba maternă (25 martie). Rezultatele apar pe 9 aprilie." },
  { q: "Când încep probele scrise la BAC 2027?", a: "Probele scrise încep luni, 14 iunie 2027, cu limba și literatura română. Urmează proba obligatorie a profilului pe 15 iunie, proba la alegere pe 17 iunie și limba maternă pe 18 iunie." },
  { q: "Când apar rezultatele la BAC 2027?", a: "Rezultatele inițiale se afișează pe 23 iunie 2027, până la ora 12:00. Contestațiile se depun în aceeași zi și pe 24–25 iunie, iar rezultatele finale apar pe 1 iulie 2027." },
  { q: "Când sunt probele orale la BAC 2027?", a: "Proba de comunicare orală în limba română are loc în 12–14 aprilie 2027, limba maternă 14–16 aprilie, limba străină 19–21 aprilie, iar competențele digitale 21–23 aprilie." },
  { q: "Contează nota de la simularea BAC 2027?", a: "Nu, simularea nu intră în media de la Bacalaureat. Este însă cel mai bun test real: îți arată exact la ce capitole pierzi puncte, cu aproape trei luni înainte de examen." },
  { q: "Cum mă pregătesc pentru BAC 2027 în timpul rămas?", a: "Până la simulare (martie) recapitulezi materia de bază și rezolvi variante din anii trecuți; după rezultatele simulării lucrezi țintit pe capitolele unde ai pierdut puncte. Un profesor de meditații te ajută să faci un plan pe săptămâni." },
];

export const Route = createFileRoute("/calendar-bac-2027")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "calendar bac 2027, bac 2027, simulare bac 2027, calendar bacalaureat 2027, cand este bacul 2027, data bac 2027, simulare bacalaureat 2027, probe orale bac 2027, rezultate bac 2027, meditatii bac 2027" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Event", name: "Bacalaureat 2027 — probele scrise",
        startDate: "2027-06-14", endDate: "2027-06-18", eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "Centrele de examen din România", address: { "@type": "PostalAddress", addressCountry: "RO" } },
        organizer: { "@type": "Organization", name: "Ministerul Educației", url: "https://www.edu.ro" },
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Calendar BAC 2027: simularea, probele orale și probele scrise"
      intro="Toate datele Bacalaureatului 2027 într-un singur loc: simularea din martie, probele de competențe din aprilie, probele scrise din 14–18 iunie, rezultatele și contestațiile. Mai jos ai și un plan de pregătire pe luni."
      bullets={[
        "Simulare BAC 2027: 22–25 martie, rezultate pe 9 aprilie",
        "Probe scrise: 14, 15, 17 și 18 iunie 2027",
        "Rezultate inițiale: 23 iunie; finale: 1 iulie 2027",
        "Plan de pregătire lună cu lună + profesori verificați",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Meditații BAC 2027" }}
      ctaSecondary={{ to: "/variante-bacalaureat", label: "Variante BAC rezolvate" }}
      sections={[
        { title: "Calendarul complet BAC 2027", body: <CalendarExamen grupe={BAC_2027} surse={SURSE_BAC_2027} /> },
        { title: "Plan de pregătire pentru BAC 2027", body: (
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Noiembrie–decembrie:</strong> recapitulezi materia de clasa a IX-a și a X-a și faci câte o variantă completă pe săptămână.</li>
            <li><strong>Ianuarie–februarie:</strong> lucrezi pe subiecte din anii trecuți, cu timp cronometrat (3 ore).</li>
            <li><strong>Martie:</strong> simularea BAC — tratezi-o ca pe examenul real.</li>
            <li><strong>Aprilie–mai:</strong> după rezultatele simulării, lucrezi țintit pe capitolele unde ai pierdut puncte.</li>
            <li><strong>Iunie:</strong> doar variante complete și recapitulare scurtă, fără materie nouă.</li>
          </ul>
        ) },
        { title: "Ai nevoie de ajutor până la simulare?", body: <p>Postează gratuit o cerere pe <a className="text-primary underline" href="/meditatii">MeditatiiDirect</a> și primești propuneri de la profesori verificați la matematică, română, informatică, biologie, istorie sau geografie — online sau la domiciliu. Poți încerca și <a className="text-primary underline" href="/simulare-ai">simularea BAC cu AI</a>, care îți dă o notă și îți arată unde ai greșit.</p> },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-evaluare-nationala-2027", label: "Calendar Evaluare Națională 2027" },
        { to: "/simulare-bacalaureat", label: "Simulare bacalaureat" },
        { to: "/variante-bacalaureat", label: "Variante și subiecte BAC" },
        { to: "/calculator-medie-bac", label: "Calculator medie BAC" },
        { to: "/meditatii-matematica-bac", label: "Meditații matematică BAC" },
        { to: "/meditatii-romana-bac", label: "Meditații română BAC" },
      ]}
    />
  ),
});

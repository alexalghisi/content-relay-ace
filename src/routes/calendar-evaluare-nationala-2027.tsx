import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { EN_2027, SURSE_EN_2027 } from "@/data/calendar-2027";

const URL = "https://meditatiidirect.ro/calendar-evaluare-nationala-2027";
const TITLE = "Calendar Evaluare Națională 2027: simulare 16-18 martie, examen 22-25 iunie";
const DESC = "Evaluarea Națională 2027 clasa a VIII-a: simularea (16-18 martie), examenul la română (22 iunie) și matematică (24 iunie), rezultate 30 iunie, contestații și rezultate finale 7 iulie.";

const FAQS = [
  { q: "Când este simularea Evaluării Naționale 2027?", a: "Simularea pentru clasa a VIII-a are loc pe 16 martie 2027 (română), 17 martie (matematică) și 18 martie (limba maternă). Rezultatele simulării se afișează pe 30 martie 2027." },
  { q: "Când este Evaluarea Națională 2027?", a: "Examenul începe marți, 22 iunie 2027, cu limba și literatura română. Proba de matematică este joi, 24 iunie, iar limba maternă vineri, 25 iunie." },
  { q: "Când apar rezultatele la Evaluarea Națională 2027?", a: "Rezultatele inițiale apar pe 30 iunie 2027, până la ora 12:00. Contestațiile se depun 30 iunie – 2 iulie, se soluționează 3–6 iulie, iar rezultatele finale se afișează pe 7 iulie 2027." },
  { q: "Contează simularea Evaluării Naționale în media de admitere la liceu?", a: "Nu. Simularea nu intră în media de admitere, dar este un test realist care arată ce capitole trebuie lucrate până în iunie." },
  { q: "Cum mă pregătesc pentru Evaluarea Națională 2027 la matematică?", a: "Recapitulează pe capitole (numere, ecuații, geometrie plană și în spațiu), apoi rezolvă variante complete cronometrate (2 ore). Un profesor de meditații te ajută să nu pierzi punctele ușoare de la subiectul I." },
];

export const Route = createFileRoute("/calendar-evaluare-nationala-2027")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "evaluare nationala 2027, calendar evaluare nationala 2027, simulare evaluare nationala 2027, cand este evaluarea nationala 2027, en 2027, simulare clasa a 8 a 2027, rezultate evaluare nationala 2027, meditatii evaluare nationala" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Event", name: "Evaluarea Națională 2027 — clasa a VIII-a",
        startDate: "2027-06-22", endDate: "2027-06-25", eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "Centrele de examen din România", address: { "@type": "PostalAddress", addressCountry: "RO" } },
        organizer: { "@type": "Organization", name: "Ministerul Educației", url: "https://www.edu.ro" },
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Calendar Evaluarea Națională 2027 (clasa a VIII-a)"
      intro="Datele Evaluării Naționale 2027: simularea din martie, examenul din iunie, rezultatele și contestațiile — plus cum te pregătești la română și matematică în lunile rămase."
      bullets={[
        "Simulare EN 2027: 16–18 martie, rezultate pe 30 martie",
        "Română: 22 iunie · Matematică: 24 iunie 2027",
        "Rezultate inițiale: 30 iunie; finale: 7 iulie 2027",
        "Profesori verificați pentru clasa a VIII-a",
      ]}
      ctaPrimary={{ to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" }}
      ctaSecondary={{ to: "/calculator-media-evaluare-nationala", label: "Calculator medie EN" }}
      sections={[
        { title: "Calendarul complet Evaluarea Națională 2027", body: <CalendarExamen grupe={EN_2027} surse={SURSE_EN_2027} /> },
        { title: "Cum te pregătești până la simulare", body: (
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Matematică:</strong> câte un capitol pe săptămână (numere reale, ecuații și inecuații, funcții, geometrie) și o variantă completă la final de săptămână.</li>
            <li><strong>Română:</strong> exersezi textul argumentativ și cerințele de gramatică; cronometrează-te la 2 ore.</li>
            <li><strong>După simulare:</strong> notezi fiecare punct pierdut și lucrezi exact pe acele tipuri de exerciții.</li>
          </ul>
        ) },
        { title: "Un profesor pentru clasa a VIII-a", body: <p>Pe <a className="text-primary underline" href="/meditatii">MeditatiiDirect</a> postezi gratuit o cerere și primești propuneri de la profesori verificați de matematică și română, online sau la domiciliu.</p> },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-bac-2027", label: "Calendar BAC 2027" },
        { to: "/admitere-liceu-2027", label: "Admitere liceu 2027" },
        { to: "/evaluare-nationala", label: "Evaluare Națională — subiecte" },
        { to: "/meditatii-clasa-8", label: "Meditații clasa a VIII-a" },
        { to: "/calculator-media-evaluare-nationala", label: "Calculator medie EN" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
      ]}
    />
  ),
});

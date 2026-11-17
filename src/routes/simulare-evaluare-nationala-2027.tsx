import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { EN_2027, SURSE_EN_2027 } from "@/data/calendar-2027";

const URL = "https://meditatiidirect.ro/simulare-evaluare-nationala-2027";
const IMAGE = "https://meditatiidirect.ro/og/calendar/calendar-evaluare-nationala-2027.jpg";
const TITLE = "Simulare Evaluarea Națională 2027: 16-18 martie, probe și rezultate";
const DESC =
  "Simularea Evaluării Naționale 2027 pentru clasa a VIII-a: română pe 16 martie, matematică pe 17 martie, limba maternă pe 18 martie, rezultate pe 30 martie. Plan de pregătire.";

const FAQS = [
  {
    q: "Când este simularea Evaluării Naționale 2027?",
    a: "Simularea pentru clasa a VIII-a are loc în 16–18 martie 2027: limba și literatura română marți, 16 martie, matematică miercuri, 17 martie, și limba și literatura maternă joi, 18 martie.",
  },
  {
    q: "Când apar rezultatele la simularea Evaluării Naționale 2027?",
    a: "Rezultatele simulării se comunică elevilor pe 30 martie 2027.",
  },
  {
    q: "Se trece nota de la simulare în catalog?",
    a: "Nota de la simulare nu intră în media de admitere la liceu. Simularea arată unde pierde elevul puncte, cu trei luni înainte de examen; pentru regulile din școala voastră, întrebați dirigintele.",
  },
  {
    q: "Ce materie intră la simulare?",
    a: "Simularea respectă structura examenului. Lucrează modelul oficial de subiect pentru 2027 și subiectele din anii trecuți ca să vezi tipurile de cerințe; materia exactă pentru simulare o comunică școala.",
  },
  {
    q: "Cum se pregătește un elev de clasa a VIII-a până în martie?",
    a: "Din noiembrie până în februarie: recapitularea materiei din clasele V–VII și câte un test complet pe săptămână, corectat cu baremul. În vacanța mobilă din februarie: două-trei teste cronometrate la fiecare materie.",
  },
];

export const Route = createFileRoute("/simulare-evaluare-nationala-2027")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "simulare evaluare nationala 2027, simulare evaluarea nationala 2027, simulare clasa a 8-a 2027, cand este simularea evaluare nationala, rezultate simulare evaluare nationala 2027, simulare en 2027 matematica",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Simulare Evaluarea Națională 2027: date, probe și plan de pregătire",
          description: DESC,
          image: [IMAGE],
          datePublished: "2026-11-13",
          dateModified: "2026-11-13",
          inLanguage: "ro",
          mainEntityOfPage: URL,
          author: {
            "@type": "Organization",
            name: "MeditatiiDirect.ro",
            url: "https://meditatiidirect.ro",
          },
          publisher: {
            "@type": "Organization",
            name: "MeditatiiDirect.ro",
            logo: {
              "@type": "ImageObject",
              url: "https://meditatiidirect.ro/apple-touch-icon.png",
            },
          },
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Simulare Evaluarea Națională 2027"
      intro="Simularea Evaluării Naționale 2027 pentru clasa a VIII-a are loc în 16–18 martie, iar rezultatele vin pe 30 martie. Mai jos sunt datele fiecărei probe și un plan de pregătire care începe din noiembrie."
      bullets={[
        "16 martie: limba și literatura română",
        "17 martie: matematică",
        "18 martie: limba și literatura maternă",
        "30 martie: rezultatele simulării",
      ]}
      ctaPrimary={{ to: "/meditatii-evaluare-nationala", label: "Meditații Evaluarea Națională" }}
      ctaSecondary={{
        to: "/modele-subiecte-evaluare-nationala-2027",
        label: "Modele de subiecte 2027",
      }}
      sections={[
        {
          title: "Calendarul simulării și al examenului",
          body: <CalendarExamen grupe={EN_2027} surse={SURSE_EN_2027} />,
        },
        {
          title: "Plan de pregătire până la simulare",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Noiembrie–decembrie:</strong> lucrezi{" "}
                <a
                  className="text-primary underline"
                  href="/modele-subiecte-evaluare-nationala-2027"
                >
                  modelul oficial de subiect
                </a>{" "}
                și afli, cu baremul, la ce capitole pierzi puncte.
              </li>
              <li>
                <strong>Vacanța de iarnă (23 decembrie – 10 ianuarie):</strong> recapitulezi materia
                din clasele V–VII, câte un capitol pe zi.
              </li>
              <li>
                <strong>Ianuarie–februarie:</strong> un test complet pe săptămână la fiecare
                materie, cronometrat.
              </li>
              <li>
                <strong>Vacanța mobilă din februarie:</strong> două-trei teste din anii trecuți,
                corectate cu baremul.
              </li>
              <li>
                <strong>După 30 martie:</strong> pornești de la lucrarea de la simulare și lucrezi
                doar pe greșelile de acolo.
              </li>
            </ul>
          ),
        },
        {
          title: "Ce faci cu rezultatul",
          body: (
            <p>
              Introdu notele de la simulare în{" "}
              <a className="text-primary underline" href="/calculator-media-evaluare-nationala">
                calculatorul de medie
              </a>{" "}
              și compară cu ultima medie de admitere a liceului dorit, pe pagina{" "}
              <a className="text-primary underline" href="/admitere-liceu-2027">
                Admitere liceu 2027
              </a>
              . Dacă diferența e mare, un profesor poate face un plan pe săptămâni: postează gratuit
              o cerere pe{" "}
              <a className="text-primary underline" href="/meditatii">
                MeditatiiDirect
              </a>
              .
            </p>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-evaluare-nationala-2027", label: "Calendar Evaluarea Națională 2027" },
        { to: "/evaluare-nationala", label: "Subiecte Evaluarea Națională" },
        { to: "/meditatii-clasa-8", label: "Meditații clasa a VIII-a" },
        { to: "/structura-an-scolar-2026-2027", label: "Vacanțe școlare 2026-2027" },
        { to: "/simulare-bacalaureat", label: "Simulare BAC 2027" },
      ]}
    />
  ),
});

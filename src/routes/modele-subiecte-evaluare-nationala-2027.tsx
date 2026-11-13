import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { EN_2027, SURSE_EN_2027 } from "@/data/calendar-2027";

const URL = "https://meditatiidirect.ro/modele-subiecte-evaluare-nationala-2027";
const IMAGE = "https://meditatiidirect.ro/og/calendar/calendar-evaluare-nationala-2027.jpg";
const TITLE = "Modele subiecte Evaluarea Națională 2027: română și matematică, cu barem";
const DESC =
  "Modelele oficiale de subiecte pentru Evaluarea Națională 2027 (clasa a VIII-a), publicate pe 1 noiembrie 2026: română, matematică și limba maternă. Cum le lucrezi cu baremul.";
const OFICIAL = "https://subiecte.edu.ro/2027/evaluarenationala/modeledesubiecte/";

const FAQS = [
  {
    q: "Au apărut modelele de subiecte pentru Evaluarea Națională 2027?",
    a: "Da. Modelele de subiecte și baremele pentru Evaluarea Națională 2027 au fost publicate pe 1 noiembrie 2026, pe site-ul oficial subiecte.edu.ro, la secțiunea Evaluarea Națională – modele de subiecte.",
  },
  {
    q: "La ce materii există modele pentru Evaluarea Națională 2027?",
    a: "La limba și literatura română, matematică, limba și literatura română pentru școlile cu predare în limba maghiară și limba maternă: maghiară, germană, croată, italiană, rromani, sârbă, slovacă și ucraineană.",
  },
  {
    q: "Cât durează proba de matematică la Evaluarea Națională?",
    a: "Timpul de lucru efectiv este de două ore, așa cum scrie pe modelul oficial de subiect la matematică pentru anul școlar 2026-2027.",
  },
  {
    q: "Când este simularea Evaluării Naționale 2027?",
    a: "Simularea are loc în 16–18 martie 2027: limba română pe 16 martie, matematică pe 17 martie și limba maternă pe 18 martie. Rezultatele se comunică pe 30 martie.",
  },
  {
    q: "Când se dă Evaluarea Națională 2027?",
    a: "Proba de limba și literatura română este pe 22 iunie 2027, matematica pe 24 iunie, iar limba maternă pe 25 iunie. Rezultatele inițiale apar pe 30 iunie, iar cele finale pe 7 iulie 2027.",
  },
];

export const Route = createFileRoute("/modele-subiecte-evaluare-nationala-2027")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "modele subiecte evaluare nationala 2027, model subiect evaluare nationala 2027 matematica, model evaluare nationala 2027 romana, subiecte evaluare nationala 2027, barem evaluare nationala 2027, teste evaluare nationala clasa a 8-a",
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
          headline: "Modele de subiecte Evaluarea Națională 2027, cu barem",
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
      h1="Modele de subiecte Evaluarea Națională 2027"
      intro="Pe 1 noiembrie 2026 au fost publicate modelele oficiale de subiecte și baremele pentru Evaluarea Națională 2027, pentru elevii de clasa a VIII-a. Aici găsești lista disciplinelor, sursa oficială și un plan simplu de lucru până la simularea din martie."
      bullets={[
        "Modele cu barem la română, matematică și limba maternă",
        "Sursa oficială: subiecte.edu.ro",
        "Simulare: 16–18 martie 2027; examen: 22, 24 și 25 iunie 2027",
        "Matematică: două ore timp de lucru efectiv",
      ]}
      ctaPrimary={{ to: "/meditatii-evaluare-nationala", label: "Meditații Evaluarea Națională" }}
      ctaSecondary={{ to: "/evaluare-nationala", label: "Subiecte Evaluarea Națională" }}
      sections={[
        {
          title: "Ce modele au fost publicate",
          body: (
            <div>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Limba și literatura română</strong> — model de subiect și barem.
                </li>
                <li>
                  <strong>Matematică</strong> — model de subiect și barem.
                </li>
                <li>
                  <strong>
                    Limba și literatura română pentru școlile și secțiile cu predare în limba
                    maghiară
                  </strong>{" "}
                  — model și barem.
                </li>
                <li>
                  <strong>Limba și literatura maternă</strong> — maghiară, germană, croată,
                  italiană, rromani, sârbă, slovacă și ucraineană.
                </li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Modelele se descarcă de pe site-ul oficial:{" "}
                <a
                  className="text-primary underline"
                  href={OFICIAL}
                  rel="noopener nofollow"
                  target="_blank"
                >
                  subiecte.edu.ro — modele Evaluarea Națională 2027
                </a>
                . Sursă pentru listă:{" "}
                <a
                  className="text-primary underline"
                  href="https://www.edupedu.ro/modele-de-subiecte-si-bareme-evaluarea-nationala-2027-publicate-de-ministerul-educatiei/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  Edupedu
                </a>
                .
              </p>
            </div>
          ),
        },
        {
          title: "Cum lucrezi modelul, pas cu pas",
          body: (
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                <strong>Lucrează-l ca la examen:</strong> două ore, pe foaie, fără calculator și
                fără ajutor.
              </li>
              <li>
                <strong>Corectează cu baremul</strong> și scrie punctajul pe fiecare subiect, nu
                doar nota finală.
              </li>
              <li>
                <strong>Notează greșelile pe capitole</strong> (de exemplu: calcul cu fracții,
                geometrie în spațiu, tipuri de text la română).
              </li>
              <li>
                <strong>Reia capitolele slabe</strong>, apoi lucrează subiectele date la examen în
                anii trecuți.
              </li>
              <li>
                <strong>Refă modelul în februarie</strong>, înainte de simulare, și compară
                punctajele.
              </li>
            </ol>
          ),
        },
        {
          title: "Calendarul Evaluării Naționale 2027",
          body: <CalendarExamen grupe={EN_2027} surse={SURSE_EN_2027} />,
        },
        {
          title: "Unde are copilul nevoie de ajutor?",
          body: (
            <p>
              Calculează ce medie rezultă din notele de la simulare cu{" "}
              <a className="text-primary underline" href="/calculator-media-evaluare-nationala">
                calculatorul de medie
              </a>
              , apoi postează gratuit o cerere pe{" "}
              <a className="text-primary underline" href="/meditatii">
                MeditatiiDirect
              </a>
              : primești propuneri de la profesori de matematică și română pentru clasa a VIII-a,
              online sau la domiciliu.
            </p>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-evaluare-nationala-2027", label: "Calendar Evaluarea Națională 2027" },
        { to: "/simulare-evaluare-nationala-2027", label: "Simulare Evaluarea Națională 2027" },
        { to: "/meditatii-clasa-8", label: "Meditații clasa a VIII-a" },
        { to: "/admitere-liceu-2027", label: "Admitere liceu 2027" },
        { to: "/modele-subiecte-bac-2027", label: "Modele subiecte BAC 2027" },
      ]}
    />
  ),
});

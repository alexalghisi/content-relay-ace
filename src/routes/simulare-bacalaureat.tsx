import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { BAC_2027, SURSE_BAC_2027 } from "@/data/calendar-2027";

const URL = "https://meditatiidirect.ro/simulare-bacalaureat";
const IMAGE = "https://meditatiidirect.ro/og-bac.jpg";
const TITLE = "Simulare BAC 2027: 22-25 martie, probe, rezultate și subiecte de exersat";
const DESC =
  "Simularea Bacalaureatului 2027: română pe 22 martie, proba profilului pe 23 martie, proba la alegere pe 24 martie, rezultate pe 9 aprilie. Subiecte și bareme pentru antrenament.";

const faqs = [
  {
    q: "Când este simularea BAC 2027?",
    a: "Simularea probelor scrise are loc în 22–25 martie 2027: limba și literatura română luni, 22 martie, proba obligatorie a profilului marți, 23 martie, proba la alegere miercuri, 24 martie, și limba maternă joi, 25 martie.",
  },
  {
    q: "Când apar rezultatele la simularea BAC 2027?",
    a: "Rezultatele simulării se comunică pe 9 aprilie 2027, cu câteva zile înainte de probele de competențe, care încep pe 12 aprilie.",
  },
  {
    q: "Contează nota de la simulare?",
    a: "Nu intră în media de la Bacalaureat și nu contează la admiterea la facultate. Este însă cel mai bun reper cu aproape trei luni înainte de examen: îți arată la ce capitole pierzi puncte.",
  },
  {
    q: "Ce probe se dau la simulare?",
    a: "În 2027 simularea cuprinde doar probele scrise: română, proba obligatorie a profilului, proba la alegere și, unde este cazul, limba maternă. Fiecare probă scrisă durează trei ore, ca la examen.",
  },
  {
    q: "Pe ce subiecte mă antrenez pentru simulare?",
    a: "Pe modelele oficiale de subiecte pentru 2027 și pe subiectele date la simulările și sesiunile din anii trecuți, corectate cu baremul. Le găsești grupate pe materii în arhiva de subiecte BAC.",
  },
];

export const Route = createFileRoute("/simulare-bacalaureat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: IMAGE },
      {
        name: "keywords",
        content:
          "simulare bac 2027, simulare bacalaureat 2027, cand este simularea bac 2027, rezultate simulare bac 2027, subiecte simulare bac, simulare bac matematica, simulare bac romana",
      },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Simulare BAC 2027"
      intro="Simularea Bacalaureatului 2027 are loc în 22–25 martie, doar la probele scrise, iar rezultatele vin pe 9 aprilie. Mai jos ai datele fiecărei probe și subiecte cu barem pe care te poți antrena de pe acum."
      bullets={[
        "22 martie: limba și literatura română",
        "23 martie: proba obligatorie a profilului (matematică sau istorie)",
        "24 martie: proba la alegere; 25 martie: limba maternă",
        "9 aprilie: rezultatele simulării",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Caută profesor BAC" }}
      sections={[
        {
          title: "Calendarul simulării BAC 2027",
          body: <CalendarExamen grupe={BAC_2027.slice(0, 1)} surse={SURSE_BAC_2027} />,
        },
        {
          title: "Cum te pregătești până pe 22 martie",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Acum:</strong> lucrează{" "}
                <a className="text-primary underline" href="/modele-subiecte-bac-2027">
                  modelul oficial de subiect pentru 2027
                </a>{" "}
                și notează, cu baremul, unde pierzi puncte.
              </li>
              <li>
                <strong>Vacanța de iarnă:</strong> recapitulează materia din clasele a IX-a și a
                X-a.
              </li>
              <li>
                <strong>Ianuarie–februarie:</strong> o variantă completă pe săptămână, în trei ore,
                din{" "}
                <a className="text-primary underline" href="/subiecte-bac">
                  arhiva de subiecte BAC
                </a>
                .
              </li>
              <li>
                <strong>Martie:</strong> subiectele date la simulările din anii trecuți; tratează
                simularea ca pe examen.
              </li>
            </ul>
          ),
        },
      ]}
      pdfs={[
        { href: "/resurse/bac/matematica-m1/2025", title: "Matematică M_mate-info" },
        { href: "/resurse/bac/matematica-m2/2025", title: "Matematică M_științe (M2)" },
        { href: "/resurse/bac/romana/2025", title: "Limba română" },
        { href: "/resurse/bac/biologie/2025", title: "Biologie" },
        { href: "/resurse/bac/fizica/2025", title: "Fizică" },
        { href: "/resurse/bac/informatica/2025", title: "Informatică (C/C++)" },
        { href: "/resurse/bac/istorie/2025", title: "Istorie" },
      ]}
      faqs={faqs}
      related={[
        { to: "/calendar-bac-2027", label: "Calendar și simulare BAC 2027" },
        { to: "/modele-subiecte-bac-2027", label: "Modele subiecte BAC 2027" },
        { to: "/simulare-evaluare-nationala-2027", label: "Simulare Evaluarea Națională 2027" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
        { to: "/meditatii-bac", label: "Meditații BAC" },
      ]}
    />
  ),
});

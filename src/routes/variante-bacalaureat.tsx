import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/variante-bacalaureat";
const TITLE = "Variante bacalaureat 2026 — Subiecte oficiale + simulare | MeditatiiDirect.ro";
const DESC = "Variante bacalaureat 2026: subiecte de antrenament la matematică, română, biologie, fizică, informatică, istorie, cu bareme și rezolvări PDF.";

const faqs = [
  { q: "Câte variante de BAC sunt publicate?", a: "Pentru fiecare materie publicăm modele complete (3 subiecte) cu rezolvări și barem. Numărul de variante crește pe măsură ce ne apropiem de examenul din iunie 2026." },
  { q: "Cum aleg variantele potrivite pentru mine?", a: "Începe cu variantele de simulare (martie 2026), apoi rezolvă variantele oficiale din anii anteriori. Lasă variantele de antrenament intensiv pentru ultimele 4 săptămâni." },
];

export const Route = createFileRoute("/variante-bacalaureat")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      h1="Variante bacalaureat 2026"
      intro="Variante de antrenament pentru bacalaureatul 2026, conforme cu programa oficială și modelul Ministerului Educației. Rezolvări complete și bareme pe punctaje."
      bullets={[
        "Variante după modelul oficial",
        "Rezolvări pas cu pas",
        "Bareme cu punctaje detaliate",
        "Toate materiile principale",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Pregătire BAC cu profesor" }}
      pdfs={[
        { href: "/pdfs/simulare-bac-2026-matematica-m1.pdf", title: "Matematică M_mate-info" },
        { href: "/pdfs/simulare-bac-2026-romana.pdf", title: "Limba română" },
        { href: "/pdfs/simulare-bac-2026-biologie.pdf", title: "Biologie" },
        { href: "/pdfs/simulare-bac-2026-fizica.pdf", title: "Fizică" },
        { href: "/pdfs/simulare-bac-2026-informatica.pdf", title: "Informatică" },
        { href: "/pdfs/simulare-bac-2026-istorie.pdf", title: "Istorie" },
      ]}
      faqs={faqs}
      related={[
        { to: "/simulare-bacalaureat", label: "Simulare BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
        { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
      ]}
    />
  ),
});

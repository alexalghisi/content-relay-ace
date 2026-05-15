import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { BacArchive } from "@/components/archive-list";
import { BAC_ARCHIVE } from "@/data/bac-archive";

const URL = "https://meditatiidirect.ro/variante-bacalaureat";
const TITLE = "Variante bacalaureat 2010–2026 — Subiecte și bareme PDF | MeditatiiDirect.ro";
const DESC = "Arhivă completă variante bacalaureat 2010–2026: subiecte oficiale și bareme la matematică, română, biologie, fizică, chimie, informatică, istorie, geografie, logică, psihologie. Toate gratis în PDF.";

const faqs = [
  { q: "Ce variante BAC găsesc aici?", a: "Subiecte și bareme oficiale + modele de antrenament la 11 materii (matematică M1/M2, română, biologie, fizică, chimie, informatică, istorie, geografie, logică, psihologie) pentru fiecare an din 2010 până în 2026 — peste 370 de PDF-uri gratuite." },
  { q: "Cum folosesc cel mai bine aceste variante?", a: "Începe cu variantele de simulare ale anului în curs, apoi rezolvă cronologic invers: 2026 → 2010. Verifică-te pe barem după fiecare subiect și lucrează cu un meditator pe punctele slabe." },
  { q: "Sunt subiectele identice cu cele oficiale de la MEN?", a: "Variantele sunt construite după modelul Ministerului Educației, cu aceeași programă, structură și punctaj. Pentru subiectele originale 100% scanate, accesează site-ul oficial subiecte.edu.ro." },
  { q: "De unde iau profesor pentru pregătirea BAC?", a: "Pe MeditatiiDirect.ro găsești peste 1000 de meditatori verificați pentru bacalaureat, cu profil afișat, materii, prețuri și recenzii. Contact direct, fără comision." },
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
  component: Page,
});

function Page() {
  return (
    <>
      <SeoLanding
        h1="Variante bacalaureat 2010 – 2026"
        intro="Cea mai mare arhivă online de variante bacalaureat din România: subiecte și bareme oficiale la toate materiile, pentru fiecare sesiune din 2010 până în 2026. Peste 370 de PDF-uri gratuite, optimizate pentru pregătire individuală sau cu meditator."
        bullets={[
          "11 materii principale acoperite",
          "17 ani de bacalaureat: 2010 – 2026",
          "Subiecte + bareme cu punctaje detaliate",
          "Conform programei oficiale MEN",
          "Descarcă liber, fără cont",
        ]}
        ctaPrimary={{ to: "/meditatii-bac", label: "Pregătire BAC cu profesor" }}
        faqs={faqs}
        related={[
          { to: "/simulare-bacalaureat", label: "Simulare BAC" },
          { to: "/subiecte-bac", label: "Subiecte BAC" },
          { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
          { to: "/meditatii-matematica", label: "Meditații matematică" },
          { to: "/meditatii-romana", label: "Meditații română" },
        ]}
      />
      <div className="container-page">
        <BacArchive items={BAC_ARCHIVE} />
      </div>
    </>
  );
}

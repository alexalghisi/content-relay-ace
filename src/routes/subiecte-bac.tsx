import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { BacArchive } from "@/components/archive-list";
import { BAC_ARCHIVE } from "@/data/bac-archive";

const URL = "https://meditatiidirect.ro/subiecte-bac";
const TITLE = "Subiecte BAC 2001–2026 — Toate materiile, subiecte și bareme PDF | MeditatiiDirect.ro";
const DESC = "Subiecte BAC oficiale 2001–2026 la matematică, română, biologie, fizică, chimie, informatică, istorie, geografie. Subiecte + bareme PDF gratuit, fără cont. Cea mai mare arhivă de subiecte bacalaureat din România.";

const faqs = [
  { q: "Ce subiecte BAC găsesc pe MeditatiiDirect.ro?", a: "Toate subiectele oficiale de bacalaureat date de Ministerul Educației din 2001 până în 2026, la 15+ materii: matematică (M1, M2, M3), limba română, biologie, fizică, chimie, informatică (C/C++), istorie, geografie, logică, psihologie, economie, sociologie, filosofie. Subiectele și baremele complete, în PDF, găzduite direct pe platforma noastră." },
  { q: "Sunt subiectele BAC identice cu cele oficiale?", a: "Da — fiecare subiect este cel oficial publicat de MEN / subiecte.edu.ro, scanat și verificat automat de crawler-ul nostru pentru a evita confuziile între subiect și barem." },
  { q: "Subiectele BAC sunt gratuite?", a: "Da, 100% gratuite. Nu ai nevoie de cont, abonament sau plată. Descarci PDF-ul direct de la noi." },
  { q: "Cum mă pregătesc cel mai eficient cu aceste subiecte de BAC?", a: "Rezolvă cronologic invers (2026 → 2010), cronometrat 3 ore ca la examen, apoi verifică-te pe baremul oficial. Lucrează cu un meditator pe punctele slabe — pe MeditatiiDirect.ro găsești profesori verificați pentru pregătire BAC la toate materiile." },
  { q: "Pot descărca subiectele BAC 2026?", a: "Da, imediat ce sunt publicate de Ministerul Educației după sesiunea iunie 2026, crawler-ul nostru le aduce automat în arhivă, alături de baremele oficiale." },
];

export const Route = createFileRoute("/subiecte-bac")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "subiecte bac, subiecte bacalaureat, subiecte bac 2025, subiecte bac 2026, subiecte bac matematica, subiecte bac romana, bareme bac, variante bac, bac 2025, bac 2026" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
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
        pageUrl={URL}
        h1="Subiecte BAC 2001 – 2026 — arhivă oficială completă"
        intro="Cea mai mare arhivă de subiecte BAC din România: subiecte oficiale și bareme la toate materiile de bacalaureat, din 2001 până în 2026. Peste 500 de PDF-uri gratuite cu subiectele Ministerului Educației, verificate automat, organizate pe materie și an — totul găzduit direct pe MeditatiiDirect.ro."
        bullets={[
          "Subiecte BAC oficiale MEN 2001 – 2026",
          "15+ materii: matematică, română, biologie, fizică, chimie, informatică, istorie, geografie",
          "Subiecte + bareme cu punctaje detaliate, în PDF",
          "Toate sesiunile: iunie, august, simulare",
          "Gratuit, fără cont, fără reclame intruzive",
        ]}
        ctaPrimary={{ to: "/meditatii-bac", label: "Pregătire BAC cu profesor verificat" }}
        faqs={faqs}
        related={[
          { to: "/variante-bacalaureat", label: "Variante BAC" },
          { to: "/simulare-bacalaureat", label: "Simulare BAC" },
          { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
          { to: "/subiecte-bac-2026", label: "Subiecte BAC 2026" },
          { to: "/bac", label: "Hub BAC pe materii" },
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

import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/simulari-bacalaureat-2026";
const TITLE = "Simulări BAC 2026 — Subiecte și bareme PDF | MeditatiiDirect.ro";
const DESC = "Subiecte simulare BAC 2026 cu rezolvări și bareme: matematică, română, biologie, fizică, chimie, informatică, istorie, geografie. Descarcă gratuit PDF.";

const faqs = [
  { q: "Când sunt simulările BAC 2026?", a: "Simularea națională BAC 2026 are loc în luna martie 2026, conform calendarului oficial al Ministerului Educației. Verifică pagina edu.ro pentru datele exacte." },
  { q: "De ce să descarc subiecte de simulare?", a: "Antrenamentul pe subiecte de simulare este cel mai bun predictor al rezultatului la BAC. Te obișnuiești cu structura, cu timpul de lucru și cu nivelul de dificultate." },
  { q: "Sunt subiectele oficiale?", a: "Variantele de pe această pagină sunt elaborate după modelul oficial al subiectelor de simulare. Pentru variantele oficiale ale Ministerului Educației, vezi pagina /variante-bacalaureat." },
];

export const Route = createFileRoute("/simulari-bacalaureat-2026")({
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
      pageUrl={URL}
      h1="Simulări BAC 2026 — subiecte și bareme"
      intro="Pregătește-te eficient pentru bacalaureatul 2026 cu variantele de simulare elaborate după modelul oficial. Toate PDF-urile sunt gratuite și conțin rezolvări complete plus barem de corectare."
      bullets={[
        "Subiecte după modelul Ministerului Educației",
        "Rezolvări detaliate la toți itemii",
        "Bareme de corectare pe punctaje",
        "Toate filierele: real, uman, tehnologic",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Pregătire BAC cu profesor" }}
      pdfs={[
        { href: "/resurse/bac/matematica-m1/2025", title: "Matematică M_mate-info", meta: "Subiect + barem" },
        { href: "/resurse/bac/matematica-m2/2025", title: "Matematică M_științe (M2)", meta: "Subiect + barem" },
        { href: "/resurse/bac/romana/2025", title: "Limba și literatura română", meta: "Subiectul I, II, III + plan eseu" },
        { href: "/resurse/bac/biologie/2025", title: "Biologie vegetală și animală", meta: "Itemi + problemă genetică" },
        { href: "/resurse/bac/fizica/2025", title: "Fizică", meta: "Mecanică + electricitate" },
        { href: "/resurse/bac/informatica/2025", title: "Informatică (C/C++)", meta: "Algoritmi + problemă" },
        { href: "/resurse/bac/istorie/2025", title: "Istorie", meta: "Tematică + eseu model" },
      ]}
      faqs={faqs}
      related={[
        { to: "/simulare-bacalaureat", label: "Simulare bacalaureat" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC rezolvate" },
        { to: "/meditatii-bac", label: "Meditații BAC" },
      ]}
    />
  ),
});

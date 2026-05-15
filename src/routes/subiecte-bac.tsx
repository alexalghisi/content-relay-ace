import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/subiecte-bac";
const TITLE = "Subiecte BAC 2026 rezolvate — Toate materiile | MeditatiiDirect.ro";
const DESC = "Subiecte BAC 2026 și ani anteriori, rezolvate complet: matematică, română, biologie, fizică, informatică, istorie. Descarcă PDF gratuit.";

const faqs = [
  { q: "De unde sunt subiectele de BAC?", a: "Subiectele de antrenament publicate pe această pagină sunt elaborate după modelul oficial al Ministerului Educației pentru BAC 2026." },
  { q: "Cum folosesc eficient subiectele rezolvate?", a: "Rezolvă întâi singur, fără să te uiți la rezolvare. Apoi compară cu baremul. Marchează itemii la care ai greșit și revino după o săptămână." },
];

export const Route = createFileRoute("/subiecte-bac")({
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
      h1="Subiecte BAC rezolvate"
      intro="Arhivă cu subiecte de bacalaureat rezolvate complet: itemi după modelul oficial pentru 2026, plus rezolvări detaliate la matematică, română, biologie, fizică, informatică, istorie."
      bullets={[
        "Subiecte după modelul oficial BAC 2026",
        "Rezolvări pas cu pas, nu doar răspunsul final",
        "Bareme oficiale de corectare",
        "Strategii de gestionare a timpului",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Caută profesor BAC" }}
      pdfs={[
        { href: "/pdfs/simulare-bac-2026-matematica-m1.pdf", title: "Matematică M_mate-info — model + rezolvări" },
        { href: "/pdfs/simulare-bac-2026-barem-matematica.pdf", title: "Barem matematică (model)" },
        { href: "/pdfs/simulare-bac-2026-romana.pdf", title: "Română — text suport + plan eseu Ion" },
        { href: "/pdfs/simulare-bac-2026-biologie.pdf", title: "Biologie + problemă genetică" },
        { href: "/pdfs/simulare-bac-2026-fizica.pdf", title: "Fizică" },
        { href: "/pdfs/simulare-bac-2026-informatica.pdf", title: "Informatică (C/C++)" },
        { href: "/pdfs/simulare-bac-2026-istorie.pdf", title: "Istorie + eseu interbelic" },
      ]}
      faqs={faqs}
      related={[
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
        { to: "/meditatii-bac", label: "Meditații BAC" },
      ]}
    />
  ),
});

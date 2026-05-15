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
      pageUrl={URL}
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
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Matematică M_mate-info — model + rezolvări" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Barem matematică (model)" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Română — text suport + plan eseu Ion" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Biologie + problemă genetică" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Fizică" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Informatică (C/C++)" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Istorie + eseu interbelic" },
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

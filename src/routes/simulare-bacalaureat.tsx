import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/simulare-bacalaureat";
const TITLE = "Simulare bacalaureat 2026 — Subiecte și bareme | MeditatiiDirect.ro";
const DESC = "Simulări bacalaureat 2026 cu subiecte după modelul oficial: matematică, română, biologie, fizică, informatică, istorie. PDF gratuit cu rezolvări.";

const faqs = [
  { q: "Când are loc simularea bacalaureatului 2026?", a: "Simularea națională a bacalaureatului 2026 se desfășoară în luna martie 2026, pe perioada unei săptămâni, cu probe identice ca structură celor de la examenul oficial din iunie." },
  { q: "Contează nota de la simulare?", a: "Nu contează la admiterea la facultate, dar este cel mai bun indicator al nivelului tău cu 3 luni înainte de BAC. Identifică lacunele și concentrează-te pe ele." },
  { q: "Ce timp de lucru am la simulare?", a: "Trei ore la fiecare probă scrisă, cu 10 puncte din oficiu. La proba orală la limba română aproximativ 15 minute, la limba modernă 10–15 minute." },
];

export const Route = createFileRoute("/simulare-bacalaureat")({
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
      h1="Simulare bacalaureat 2026"
      intro="Antrenează-te pentru BAC 2026 cu simulări complete: subiecte de antrenament la toate materiile principale, rezolvări detaliate și bareme oficiale."
      bullets={[
        "Toate materiile principale — real, uman, tehnologic",
        "Subiecte după modelul Ministerului Educației",
        "Rezolvări complete + barem pe punctaje",
        "Strategii de gestionare a timpului în 3 ore",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Caută profesor BAC" }}
      pdfs={[
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Matematică M_mate-info" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Barem matematică" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Limba română" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Biologie" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Fizică" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Informatică (C/C++)" },
        { href: "https://subiecte.edu.ro/2026/bacalaureat/", title: "Istorie" },
      ]}
      faqs={faqs}
      related={[
        { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
        { to: "/meditatii-bac", label: "Meditații BAC" },
      ]}
    />
  ),
});

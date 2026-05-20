import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-bac";
const TITLE = "Meditații BAC 2026 — Pregătire bacalaureat cu profesori verificați | MeditatiiDirect.ro";
const DESC = "Meditații BAC 2026 la matematică, română, biologie, fizică, chimie, informatică, istorie. Profesori verificați + variante simulare PDF gratuit.";

const faqs = [
  { q: "Cât costă o oră de meditații BAC?", a: "Tarifele orientative: 50–80 lei/oră pentru materii uzuale, 80–150 lei/oră pentru pregătire intensivă cu profesori titulari de top." },
  { q: "Câte ore de meditații BAC sunt necesare?", a: "În medie 1–2 ore/săptămână pe materie, începute cu 6–9 luni înainte. Pentru recuperare intensivă în ultimele 2 luni, 4 ore/săptămână." },
  { q: "Pot face meditații BAC online?", a: "Da, peste 60% din meditațiile BAC se fac astăzi online prin Zoom sau Meet. Calitatea este similară cu cea la domiciliu, iar tarifele sunt deseori mai mici." },
];

export const Route = createFileRoute("/meditatii-bac")({
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
      h1="Meditații BAC 2026"
      intro="Pregătire completă pentru bacalaureatul 2026 cu profesori verificați. Toate materiile, toate filierele — real, uman, tehnologic. Online sau la domiciliu."
      bullets={[
        "Matematică M_mate-info, M_șt-nat, M_pedagogic, M_tehnologic",
        "Română — proba scrisă și orală",
        "Biologie, fizică, chimie, geografie, istorie, informatică",
        "Limbi moderne — engleză, franceză, germană, italiană",
        "Plan personalizat de pregătire",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Caută profesor BAC" }}
      pdfs={[
        { href: "/resurse/bac/matematica-m1/2026", title: "Simulare Matematică M_mate-info" },
        { href: "/resurse/bac/romana/2026", title: "Simulare Română" },
        { href: "/resurse/bac/biologie/2026", title: "Simulare Biologie" },
        { href: "/resurse/bac/fizica/2026", title: "Simulare Fizică" },
        { href: "/resurse/bac/informatica/2026", title: "Simulare Informatică" },
        { href: "/resurse/bac/istorie/2026", title: "Simulare Istorie" },
      ]}
      faqs={faqs}
      related={[
        { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/simulare-utcn-2026";
const TITLE = "Simulare UTCN 2026 — Subiecte admitere Cluj | MeditatiiDirect.ro";
const DESC = "Subiecte de simulare admitere UTCN 2026 (Universitatea Tehnică Cluj-Napoca): matematică, fizică, informatică. PDF gratuit + meditatori specializați.";

const faqs = [
  { q: "Cum se face admiterea la UTCN în 2026?", a: "La majoritatea specializărilor pe baza notei de BAC + un test grilă (matematică sau matematică+fizică), durata 2 ore. Unele facultăți admit doar pe baza BAC." },
  { q: "Ce materie trebuie pregătită pentru UTCN?", a: "Programa de matematică din liceu — algebra, analiza, geometria. Pentru anumite facultăți (electrotehnică, mecanică) se cere și fizică." },
];

export const Route = createFileRoute("/simulare-utcn-2026")({
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
      h1="Simulare admitere UTCN 2026"
      intro="Pregătire pentru admiterea la Universitatea Tehnică din Cluj-Napoca în 2026. Subiecte tip grilă la matematică și fizică, conform modelului oficial."
      bullets={[
        "Itemi tip grilă, 25 de întrebări, 2 ore",
        "Algebră, analiză, geometrie, trigonometrie",
        "Profesori care au antrenat candidați admiși la UTCN",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Vezi pregătire admitere" }}
      pdfs={[
        { href: "/pdfs/admitere-2026-utcn-matematica.pdf", title: "Simulare UTCN 2026 — Matematică", meta: "Itemi tip grilă cu răspunsuri" },
      ]}
      faqs={faqs}
      related={[
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/grile-upb", label: "Grile UPB" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
      ]}
    />
  ),
});

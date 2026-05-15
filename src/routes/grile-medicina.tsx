import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/grile-medicina";
const TITLE = "Grile Medicină 2026 — UMF biologie, chimie | MeditatiiDirect.ro";
const DESC = "Grile model pentru admiterea la Medicină 2026 (UMF Carol Davila, Cluj, Iași): biologie, chimie organică. Descarcă PDF gratuit cu răspunsuri.";

const faqs = [
  { q: "Care este structura testului grilă la UMF?", a: "100 grile (50 biologie + 50 chimie organică sau 60+40), durata 3 ore, răspuns unic sau complement multiplu, în funcție de universitate." },
  { q: "Cum mă pregătesc eficient pentru grilele de Medicină?", a: "Citește integral manualul de biologie clasa XI, rezolvă minim 50 de grile/zi, fă recapitulări săptămânale și lucrează cu un meditator pentru capitolele dificile." },
];

export const Route = createFileRoute("/grile-medicina")({
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
      h1="Grile Medicină 2026"
      intro="Pregătire completă pentru admiterea la Medicină în 2026 — biologie clasa XI (Corpul uman), chimie organică, grile model elaborate după programa UMF."
      bullets={[
        "Biologie: celulă, țesuturi, sisteme, genetică",
        "Chimie organică: alcooli, acizi, zaharide, amine",
        "Strategii de eliminare a variantelor",
        "Cronometrare: 1,8 minute / grilă",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Pregătire admitere Medicină" }}
      pdfs={[
        { href: "https://umfcd.ro/admitere/", title: "Grile Medicină 2026 (UMF)", meta: "Biologie + chimie organică" },
      ]}
      faqs={faqs}
      related={[
        { to: "/grile-admitere-medicina-2026", label: "Grile admitere Medicină 2026" },
        { to: "/admitere", label: "Admitere facultate" },
      ]}
    />
  ),
});

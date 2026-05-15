import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/grile-upb";
const TITLE = "Grile UPB 2026 — Admitere Politehnică București | MeditatiiDirect.ro";
const DESC = "Grile pentru admiterea la Politehnica București 2026: matematică, fizică, informatică. Modele cu rezolvări, descarcă PDF gratuit.";

const faqs = [
  { q: "Cum se intră la UPB în 2026?", a: "Majoritatea facultăților din UPB admit pe baza mediei BAC (cu pondere mare pentru matematică) sau printr-un examen scris cu probă de matematică (+ fizică sau informatică pentru anumite specializări)." },
  { q: "Ce facultăți cer fizică la admitere?", a: "Inginerie electrică, energetică, mecanică, transporturi. Calculatoare și automatică solicită în general matematică+informatică." },
];

export const Route = createFileRoute("/grile-upb")({
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
      h1="Grile admitere UPB 2026"
      intro="Pregătire pentru admiterea la Universitatea Politehnică din București în 2026. Grile model la matematică și fizică conform programei oficiale."
      bullets={[
        "Algebră, analiză, trigonometrie, geometrie analitică",
        "Mecanică, electricitate, optică",
        "Itemi tip grilă cu răspuns unic",
        "Profesori care antrenează viitorii studenți la UPB",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Pregătire admitere" }}
      pdfs={[
        { href: "/pdfs/admitere-2026-upb-matematica-fizica.pdf", title: "Admitere UPB 2026 — Matematică + Fizică", meta: "Grile model" },
      ]}
      faqs={faqs}
      related={[
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-fizica", label: "Meditații fizică" },
      ]}
    />
  ),
});

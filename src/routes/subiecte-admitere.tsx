import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/subiecte-admitere";
const TITLE = "Subiecte admitere 2026 — Medicină, UPB, UTCN, Drept | MeditatiiDirect.ro";
const DESC = "Subiecte și grile model pentru admiterea 2026: Medicină (UMF), Politehnică (UPB), UTCN, Drept. Descarcă PDF-uri gratuite cu rezolvări.";

const faqs = [
  { q: "Unde găsesc subiecte oficiale de admitere?", a: "Pe site-ul fiecărei universități, la secțiunea Admitere. Pe MeditatiiDirect.ro publicăm modele de subiecte conforme cu programa oficială, cu rezolvări complete." },
  { q: "Sunt subiectele de admitere mai grele decât BAC?", a: "În general da, mai ales la facultățile cu concurs (Medicină, UPB Calculatoare). Necesită pregătire dedicată de minim 6–9 luni." },
];

export const Route = createFileRoute("/subiecte-admitere")({
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
      h1="Subiecte admitere 2026"
      intro="Modele de subiecte de admitere la principalele facultăți din România în 2026 — Medicină, Politehnică București, UTCN Cluj, Drept. Cu rezolvări și recomandări de pregătire."
      bullets={[
        "Medicină: biologie + chimie organică",
        "UPB: matematică + fizică",
        "UTCN Cluj: matematică",
        "Drept: logică, română, eseu",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Pregătire admitere" }}
      pdfs={[
        { href: "https://umfcd.ro/admitere/", title: "Medicină — UMF 2026", meta: "Biologie + chimie" },
        { href: "https://admitere.pub.ro/", title: "Politehnică București (UPB)", meta: "Matematică + fizică" },
        { href: "https://admitere.utcluj.ro/", title: "UTCN Cluj — Matematică" },
        { href: "https://drept.unibuc.ro/Admitere-s23-ro.htm", title: "Drept — Logică, română, eseu" },
      ]}
      faqs={faqs}
      related={[
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/grile-medicina", label: "Grile medicină" },
        { to: "/grile-upb", label: "Grile UPB" },
        { to: "/simulare-utcn-2026", label: "Simulare UTCN 2026" },
        { to: "/simulare-drept-2026", label: "Simulare Drept 2026" },
      ]}
    />
  ),
});

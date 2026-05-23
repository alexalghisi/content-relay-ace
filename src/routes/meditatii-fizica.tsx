import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-fizica";
const TITLE = "Meditații Fizică 2026 — Online | BAC, Admitere UPB, UMF | București, Cluj, Iași";
const DESC = "★ Meditații fizică online sau acasă: BAC, admitere Politehnică (UPB, UTCN) și Medicină. Mecanică, electricitate, optică. Profesori verificați în București, Cluj, Iași, Timișoara.";

const faqs = [
  { q: "Ce capitole de fizică sunt acoperite?", a: "Toate capitolele din programa școlară: mecanică, termodinamică, electricitate și magnetism, optică, fizică modernă (atomică și nucleară)." },
  { q: "Sunt utile meditațiile de fizică pentru admitere?", a: "Da. Fizica este probă de admitere la majoritatea facultăților Politehnice și la unele facultăți de Medicină. Avem profesori specializați pe ambele profile." },
];

export const Route = createFileRoute("/meditatii-fizica")({
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
      h1="Meditații fizică"
      intro="Profesori verificați de fizică pentru toate nivelurile: gimnaziu, liceu, pregătire BAC și admitere la Politehnică sau Medicină. Mecanică, termodinamică, electricitate, optică, fizică modernă."
      bullets={[
        "Toată programa de gimnaziu și liceu",
        "Pregătire BAC profil real (M_mate-info, M_șt-nat)",
        "Pregătire admitere UPB, UTCN, UPT",
        "Probleme tip admitere Medicină (acolo unde se cere)",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori fizică" }}
      pdfs={[
        { href: "/resurse/bac/fizica/2026", title: "Simulare BAC 2026 — Fizică", meta: "Mecanică, electricitate, exemple rezolvate" },
        { href: "/resurse/admitere/upb-inginerie/2026", title: "Admitere UPB 2026 — Matematică și Fizică", meta: "Grile model" },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-matematica", label: "Matematică" },
        { to: "/grile-upb", label: "Grile UPB" },
        { to: "/grile-medicina", label: "Grile Medicină" },
      ]}
    />
  ),
});

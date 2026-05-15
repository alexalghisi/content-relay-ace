import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/grile-admitere-medicina-2026";
const TITLE = "Grile admitere Medicină 2026 — UMF București, Cluj, Iași | MeditatiiDirect.ro";
const DESC = "Grile model admitere Medicină 2026 (UMF Carol Davila, Iuliu Hațieganu, Grigore T. Popa): biologie, chimie organică. PDF gratuit + meditatori specializați.";

const faqs = [
  { q: "Câte grile sunt la admiterea la Medicină în 2026?", a: "În general 100 de grile (50 biologie + 50 chimie sau 60+40, după universitate), cu durata de 3 ore. Verifică regulamentul fiecărei UMF pentru detalii." },
  { q: "Ce manuale sunt obligatorii pentru admitere?", a: "Pentru biologie: manualul de clasa a XI-a (Corpul uman), iar la unele universități și clasa a X-a. Pentru chimie organică: manualul de clasa a X-a, ediția aprobată de Minister." },
  { q: "Cât durează pregătirea pentru admitere la Medicină?", a: "În medie 9–12 luni de pregătire intensivă, cu meditații săptămânale și rezolvarea zilnică a grilelor. Mulți candidați încep încă din clasa a XI-a." },
];

export const Route = createFileRoute("/grile-admitere-medicina-2026")({
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
      h1="Grile admitere Medicină 2026"
      intro="Pregătirea pentru admiterea la Medicină 2026 — UMF Carol Davila, UMF Cluj, UMF Iași, UMF Timișoara. Grile model la biologie și chimie organică, plus meditatori specializați care antrenează viitorii studenți la Medicină."
      bullets={[
        "Grile model elaborate după programa oficială",
        "Biologie clasa XI (Corpul uman) — sursa #1",
        "Chimie organică — alcooli, acizi, zaharide, amine",
        "Meditatori cu experiență în pregătire UMF",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Pregătire admitere Medicină" }}
      pdfs={[
        { href: "https://umfcd.ro/admitere/", title: "Grile model UMF 2026", meta: "Biologie + chimie organică, cu răspunsuri" },
      ]}
      faqs={faqs}
      related={[
        { to: "/grile-medicina", label: "Grile medicină" },
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/subiecte-admitere", label: "Subiecte admitere" },
      ]}
    />
  ),
});

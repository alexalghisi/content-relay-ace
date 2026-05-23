import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-franceza";
const TITLE = "Meditații Franceză 2026 — Online & Acasă | A1-C2, DELF, BAC | De la 50 lei";
const DESC = "★ Meditații limba franceză online sau la domiciliu: A1–C2, DELF, DALF, BAC, conversație. Profesori nativi și români verificați, contact direct, FĂRĂ comision.";

const faqs = [
  { q: "Ce niveluri acoperă meditațiile de franceză?", a: "De la începător absolut (A1) până la nivel avansat (C2), inclusiv pregătire pentru examenele DELF, DALF, TCF și BAC." },
  { q: "Pot face meditații franceză cu profesor nativ?", a: "Da. Pe MeditatiiDirect.ro găsești atât profesori nativi (din Franța, Belgia, Quebec) cât și români cu certificări recunoscute internațional." },
  { q: "Cât costă meditațiile de franceză?", a: "Tarifele variază între 50 și 120 lei/oră, în funcție de nivelul predat, experiența profesorului și formatul (online sau la domiciliu)." },
];

export const Route = createFileRoute("/meditatii-franceza")({
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
      h1="Meditații limba franceză"
      intro="Învață franceza cu profesori verificați — de la primele cuvinte și până la examenele DELF/DALF. Conversație, gramatică, pregătire BAC sau franceză pentru afaceri."
      bullets={[
        "Toate nivelurile CECR: A1, A2, B1, B2, C1, C2",
        "Pregătire DELF, DALF, TCF",
        "Profesori nativi și români certificați",
        "Online prin Zoom/Meet sau la domiciliu",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori franceză" }}
      faqs={faqs}
      related={[
        { to: "/meditatii-engleza", label: "Engleză" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/meditatii-bac", label: "BAC" },
      ]}
    />
  ),
});

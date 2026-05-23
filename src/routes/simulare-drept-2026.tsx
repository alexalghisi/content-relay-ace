import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/simulare-drept-2026";
const TITLE = "Simulare Drept 2026 — Subiecte + Barem Oficial PDF GRATIS | Logică, Română";
const DESC = "★ Simulare admitere Drept 2026: subiecte oficiale + barem PDF GRATUIT. Logică juridică, gramatică română, eseu argumentativ. Plus profesori verificați pentru pregătire.";

const faqs = [
  { q: "Cum se intră la Facultatea de Drept în 2026?", a: "În funcție de universitate: pe baza mediei de BAC, prin probă scrisă (Logică juridică, Limba română, Istorie) sau printr-o combinație. Verifică regulamentul facultății alese." },
  { q: "Ce este Logica juridică?", a: "O disciplină care testează gândirea critică, raționamentele deductive (modus ponens, modus tollens), categoriile silogistice și capacitatea de a identifica sofisme." },
];

export const Route = createFileRoute("/simulare-drept-2026")({
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
      h1="Simulare admitere Drept 2026"
      intro="Pregătire completă pentru admiterea la Facultatea de Drept în 2026. Itemi de logică juridică, gramatică română și eseu argumentativ — cu rezolvări și plan de eseu."
      bullets={[
        "Logică juridică — silogisme, sofisme, raționamente",
        "Gramatică română aplicată",
        "Eseu argumentativ pe teme juridice",
        "Barem orientativ pentru autoevaluare",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Pregătire admitere" }}
      pdfs={[
        { href: "/resurse/admitere/drept-bucuresti/2026", title: "Simulare admitere Drept 2026", meta: "Logică, română, eseu" },
      ]}
      faqs={faqs}
      related={[
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/subiecte-admitere", label: "Subiecte admitere" },
      ]}
    />
  ),
});

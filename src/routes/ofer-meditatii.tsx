import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/ofer-meditatii";
const TITLE = "Ofer meditații — Publică anunț gratuit | MeditatiiDirect.ro";
const DESC = "Ești profesor și vrei să oferi meditații? Publică gratuit primul anunț, ajungi în fața a mii de elevi, încasezi direct, fără comision.";

const faqs = [
  { q: "Cât costă să public un anunț de meditații?", a: "Publicarea anunțurilor de bază este gratuită. Plătești doar dacă vrei să-ți promovezi anunțul în primele rezultate." },
  { q: "Trebuie să fiu profesor titular ca să ofer meditații?", a: "Nu, dar trebuie să demonstrezi competența: studii relevante, experiență sau rezultate (olimpiade, lucrări publicate, ani de predare)." },
  { q: "Cum încasez banii pentru meditații?", a: "Direct de la elev/părinte. Tu negociezi prețul și forma de plată — cash, transfer bancar, Revolut. Platforma nu intermediază plățile." },
];

export const Route = createFileRoute("/ofer-meditatii")({
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
      h1="Ofer meditații — publică anunț gratuit"
      intro="Ești profesor sau student avansat și vrei să oferi meditații? Publică gratuit anunțul tău pe MeditatiiDirect.ro și ajungi în fața a mii de elevi care caută activ profesori."
      bullets={[
        "Anunț gratuit, fără limită de durată",
        "Profil verificat cu badge de încredere",
        "Chat integrat — primești cereri direct în cont",
        "Tu stabilești prețul, programul și locația",
        "Fără comision din ședințe",
      ]}
      ctaPrimary={{ to: "/signup", label: "Creează cont profesor" }}
      ctaSecondary={{ to: "/pentru-profesori", label: "Vezi cum funcționează" }}
      faqs={faqs}
      related={[
        { to: "/pentru-profesori", label: "Pentru profesori" },
        { to: "/preturi-meditatii", label: "Tarife orientative" },
        { to: "/meditatori", label: "Catalog profesori" },
      ]}
    />
  ),
});

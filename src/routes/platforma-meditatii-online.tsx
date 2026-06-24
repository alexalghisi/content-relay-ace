import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/platforma-meditatii-online";
const TITLE = "Platformă Meditații Online #1 în România 2026 — Începe GRATIS în 5 min";
const DESC = "★ Platforma #1 de meditații online din România: profesori particulari verificați, chat integrat, tarife transparente, FĂRĂ comision, fără abonament. Primul mesaj gratuit.";

const faqs = [
  { q: "Cum funcționează o ședință de meditații online?", a: "Stabilești cu profesorul ora și platforma video (Zoom, Google Meet, Microsoft Teams). Profesorul îți trimite link-ul, intri din browser sau aplicație și începi ședința." },
  { q: "Care sunt avantajele meditațiilor online față de cele la domiciliu?", a: "Economisești timp de drum, ai acces la cei mai buni profesori indiferent de oraș, ședințele pot fi înregistrate pentru recapitulare, iar tarifele sunt deseori mai mici." },
  { q: "Ce ai nevoie pentru meditații online?", a: "Un laptop sau tabletă, conexiune stabilă la internet, microfon și cameră. Pentru matematică/fizică, o tabletă grafică ieftină ajută enorm." },
];

export const Route = createFileRoute("/platforma-meditatii-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "platforma meditatii online, platforma meditatii, meditatii online romania, site meditatii, aplicatie meditatii, platforma profesori online, platforma ore particulare, meditatii pe internet, lectii online, profesori online romania" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Platforma de meditații online #1 din România"
      intro="Învață cu profesori verificați din toată țara, direct de acasă. Chat integrat, plată directă către profesor, fără comision. Începi în 5 minute, fără abonament."
      bullets={[
        "Acces la profesori din toate orașele",
        "Chat integrat — fără schimb de numere de telefon",
        "Recenzii și badge „Verificat\" pentru fiecare profesor",
        "Compatibil Zoom, Meet, Teams — folosești ce preferi",
        "Fără abonament, fără comision",
      ]}
      ctaPrimary={{ to: "/meditatii-online", label: "Caută profesori online" }}
      ctaSecondary={{ to: "/cum-functioneaza", label: "Cum funcționează" }}
      faqs={faqs}
      related={[
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/meditatii", label: "Anunțuri" },
        { to: "/preturi-meditatii", label: "Prețuri" },
      ]}
    />
  ),
});

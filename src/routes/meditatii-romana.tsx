import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-romana";
const TITLE = "Meditații Română 2026 — Online și Acasă, BAC și EN";
const DESC = "Meditații limba română online sau la domiciliu: gramatică, eseu, comentariu literar, BAC, Evaluare Națională, admitere. De la 40 lei/oră, fără comision.";

const faqs = [
  { q: "Cât costă o meditație la română?", a: "Tarifele pentru meditații de limba română încep de la 40 lei/oră pentru gimnaziu, 50–100 lei/oră pentru liceu și pregătire BAC, și 80–150 lei/oră pentru pregătire intensivă pentru admitere la Drept sau Litere." },
  { q: "Pot face meditații română online?", a: "Da. Majoritatea profesorilor de română oferă meditații online prin Zoom sau Google Meet, cu materiale partajate în timp real. Eficient mai ales pentru analiză de text, comentariu și pregătire eseu BAC." },
  { q: "Ce includ meditațiile pentru BAC la română?", a: "Gramatică (morfologie, sintaxă, fonetică), comentariu literar pe operele din programă, eseu argumentativ, planuri tip rezolvate, simulări cronometrate și corectare individuală." },
  { q: "Există meditații de română pentru Evaluare Națională?", a: "Da, avem profesori specializați pe Evaluare Națională clasa a VIII-a: subiect tip, lectură, redactare, gramatică nivel gimnaziu și simulări complete." },
  { q: "Cum aleg cel mai bun profesor de română?", a: "Filtrează după nivel (gimnaziu, liceu, BAC, admitere), verifică recenziile, citește descrierea metodei și solicită o oră de probă. Mulți profesori oferă prima ședință la preț redus." },
];

export const Route = createFileRoute("/meditatii-romana")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "meditatii romana, meditatii limba romana, meditatii romana online, meditatii romana bac, meditatii romana evaluare nationala, meditatii romana bucuresti, meditatii romana cluj, meditatii romana iasi, profesor romana, meditatii gramatica, meditatii eseu romana, comentariu literar bac, meditatii romana admitere" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        serviceType: "Meditații limba română",
        name: "Meditații română — MeditatiiDirect.ro",
        description: DESC, url: URL,
        areaServed: { "@type": "Country", name: "România" },
        offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "40", highPrice: "150" },
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații limba română — online și la domiciliu"
      intro="Profesori verificați de limba română pentru gimnaziu, Evaluare Națională, liceu, BAC și admitere la Drept sau Litere. Gramatică, comentariu literar, eseu argumentativ, redactare — totul cu plan personalizat și corectare individuală. Online prin Zoom/Meet sau la domiciliu în București, Cluj, Iași, Timișoara, Brașov, Constanța."
      bullets={[
        "Pregătire BAC română — eseu, comentariu, planuri",
        "Evaluare Națională clasa a VIII-a",
        "Gramatică completă: morfologie, sintaxă, fonetică",
        "Admitere Drept, Litere, Jurnalism",
        "Online sau la domiciliu — tu alegi",
        "De la 40 lei/oră, fără comision",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori română" }}
      ctaSecondary={{ to: "/meditatii-bac", label: "Pregătire BAC română" }}
      pdfs={[
        { href: "/resurse/bac/romana/2025", title: "Subiect BAC 2026 — Limba română", meta: "Subiect oficial + barem PDF gratuit" },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-bac", label: "Meditații BAC" },
        { to: "/meditatii-evaluare-nationala", label: "Evaluare Națională" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-engleza";
const TITLE = "Meditații Engleză 2026 — Online & Acasă | BAC, Cambridge, IELTS, Conversație";
const DESC = "★ Meditații limba engleză cu profesori verificați: conversație, gramatică, Cambridge (FCE, CAE, CPE), IELTS, TOEFL, BAC. Online sau la domiciliu, de la 40 lei/oră. FĂRĂ comision.";

const faqs = [
  { q: "Cât costă o meditație la engleză?", a: "Tarifele pornesc de la 40 lei/oră pentru gimnaziu și conversație de bază, 60–120 lei/oră pentru BAC și pregătire Cambridge/IELTS, și 100–180 lei/oră pentru profesori nativi sau cu experiență în business English." },
  { q: "Pot face meditații engleză online?", a: "Da. Majoritatea profesorilor de engleză predau online prin Zoom, Google Meet sau Skype, cu materiale partajate digital. Eficient mai ales pentru conversație și pregătire examene internaționale." },
  { q: "Există meditații pentru Cambridge sau IELTS?", a: "Da, avem profesori specializați pe FCE, CAE, CPE, IELTS Academic, IELTS General și TOEFL — cu simulări cronometrate, feedback pe Writing și Speaking mock interviews." },
  { q: "Cu ce vârstă pot începe meditațiile de engleză?", a: "Avem profesori care lucrează cu copii de la 5–6 ani (English for kids cu jocuri și cântece), elevi de gimnaziu/liceu, adulți pentru business English și pregătire interviuri." },
  { q: "Pot avea un profesor nativ de engleză?", a: "Da, mai mulți profesori sunt nativi sau bilingvi (UK, US, Canada). Filtrează după „profesor nativ\" sau menționează cerința în primul mesaj." },
];

export const Route = createFileRoute("/meditatii-engleza")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "meditatii engleza, meditatii limba engleza, meditatii engleza online, meditatii engleza bac, meditatii cambridge, meditatii ielts, meditatii toefl, meditatii engleza bucuresti, meditatii engleza cluj, meditatii engleza iasi, profesor engleza, profesor nativ engleza, conversatie engleza, business english, meditatii engleza copii" },
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
        serviceType: "Meditații limba engleză",
        name: "Meditații engleză — MeditatiiDirect.ro",
        description: DESC, url: URL,
        areaServed: { "@type": "Country", name: "România" },
        offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "40", highPrice: "180" },
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații limba engleză — online și la domiciliu"
      intro="Profesori verificați de limba engleză pentru toate nivelurile: copii (English for kids), gimnaziu, liceu, BAC, Cambridge (FCE, CAE, CPE), IELTS, TOEFL, business English și pregătire interviuri. Conversație cu profesori nativi sau bilingvi, gramatică structurată, Writing & Speaking cu corectare individuală. Online prin Zoom/Meet sau la domiciliu în București, Cluj, Iași, Timișoara, Brașov, Constanța."
      bullets={[
        "BAC engleză — gramatică, eseu, comprehension",
        "Cambridge FCE, CAE, CPE — simulări complete",
        "IELTS Academic & General, TOEFL iBT",
        "Conversație cu profesori nativi (UK, US)",
        "Business English & pregătire interviuri",
        "English for kids — 5+ ani, prin joacă",
        "Online sau la domiciliu — tu alegi",
        "De la 40 lei/oră, fără comision",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori engleză" }}
      ctaSecondary={{ to: "/meditatii-bac", label: "Pregătire BAC engleză" }}
      faqs={faqs}
      related={[
        { to: "/meditatii-bac", label: "Meditații BAC" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/meditatii-franceza", label: "Meditații franceză" },
        { to: "/meditatii-germana", label: "Meditații germană" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
      ]}
    />
  ),
});

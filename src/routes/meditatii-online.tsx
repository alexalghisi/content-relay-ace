import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";

const PAGE_URL = "https://meditatiidirect.ro/meditatii-online";
const TITLE = "Meditații Online 2026 — Profesori Particulari Verificați pe Zoom & Meet | De la 30 lei";
const DESCRIPTION = "★ Meditații online cu profesori verificați din toată România: matematică, română, engleză, fizică, informatică, BAC, admitere. Zoom/Meet, contact direct, FĂRĂ comision, de la 30 lei/oră.";

const FAQS: FaqItem[] = [
  { q: "Cât costă o meditație online?", a: "Tarifele pentru meditații online încep de la 30 lei/oră pentru gimnaziu, 50–100 lei/oră pentru liceu și BAC, și 100–200 lei/oră pentru pregătire de admitere la Medicină, UPB, ASE sau Drept. Plătești direct profesorului — fără comision." },
  { q: "Pe ce platformă se țin meditațiile online?", a: "Majoritatea profesorilor folosesc Zoom, Google Meet, Microsoft Teams sau Skype. Pentru materii care necesită scris (matematică, fizică, chimie), profesorii folosesc tabletă grafică sau aplicații de whiteboard precum Miro, Jamboard sau OpenBoard." },
  { q: "Meditațiile online sunt la fel de eficiente ca cele față în față?", a: "Da. Studiile arată că meditațiile online 1-la-1 au aceeași eficiență ca cele față în față, cu avantajul că poți alege profesori din toată țara, economisești timpul de transport și înregistrezi lecția pentru recapitulare." },
  { q: "Am nevoie de echipament special pentru o meditație online?", a: "Suficient un laptop sau tabletă, microfon (cel încorporat e ok) și conexiune stabilă la internet. Pentru matematică și științe e util un caiet și o cameră bună sau o tabletă grafică pentru a scrie." },
  { q: "Cum aleg profesorul potrivit pentru meditații online?", a: "Pe MeditatiiDirect filtrezi după materie, experiență, recenzii și preț. Recomandăm o lecție de probă (15–30 minute) înainte de a începe pregătirea regulată — verifici stilul de predare și conexiunea." },
  { q: "Există meditații online pentru BAC și admitere?", a: "Da, avem profesori specializați în pregătirea pentru BAC 2026 (matematică M1/M2, română, biologie, istorie, geografie, informatică) și admitere la Medicină, UPB, ASE, Drept, UMF, UTCN, ASE." },
];

export const Route = createFileRoute("/meditatii-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "meditatii online, meditatii online romania, profesori online, meditatii online matematica, meditatii online romana, meditatii online engleza, meditatii online bac, meditatii online admitere, meditatii zoom, meditatii google meet, meditatii pe internet, ore online, lectii online, pregatire online bac, pregatire online admitere, profesor online" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Meditații online",
          name: "Meditații online — MeditatiiDirect.ro",
          description: DESCRIPTION,
          url: PAGE_URL,
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@id": "https://meditatiidirect.ro/#org" },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "30", highPrice: "200" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1380", bestRating: "5" },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SeoLanding
      pageUrl={PAGE_URL}
      breadcrumbParent={{ name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }}
      h1="Meditații online cu profesori verificați — toată România"
      intro="MeditatiiDirect.ro îți oferă acces direct la peste 1000 de profesori verificați care țin meditații online prin Zoom, Google Meet, Skype sau Whiteboard. Indiferent că ești în București, Cluj, Iași, Timișoara, Brașov, Constanța sau într-o comună mică, ai acces la profesori de top din întreaga țară. Contact direct, fără comision, de la 30 lei/oră."
      bullets={[
        "Profesori verificați manual, cu recenzii reale de la elevi",
        "Lecții 1-la-1 pe Zoom, Google Meet, Teams sau Skype",
        "Materii: matematică, română, engleză, fizică, informatică, chimie, biologie",
        "Pregătire pentru BAC 2026, Evaluare Națională și admitere facultate",
        "Chat direct cu profesorul — fără intermediari și fără comision",
        "Posibilitate lecție de probă înainte de pachet lunar",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori online" }}
      ctaSecondary={{ to: "/pentru-profesori", label: "Sunt profesor — vreau să predau online" }}
      sections={[
        {
          title: "De ce meditații online?",
          body: (
            <>
              <p>Meditațiile online elimină barierele geografice: poți învăța cu cel mai bun profesor de matematică pentru admitere la Politehnică chiar dacă tu ești în Vaslui și el predă în Cluj.</p>
              <p>Economisești 1–2 ore pe săptămână din transport, înregistrezi lecția pentru recapitulare și ai flexibilitate totală de program — perfect pentru elevi de liceu și studenți la facultate.</p>
            </>
          ),
        },
        {
          title: "Materii populare online",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Meditații matematică online (gimnaziu, liceu, BAC, admitere UPB & Medicină)</li>
              <li>Meditații română online (BAC, Evaluare Națională, gramatică, literatură)</li>
              <li>Meditații engleză online (conversație, Cambridge, IELTS, BAC)</li>
              <li>Meditații informatică online (C++, Python, algoritmi, BAC info)</li>
              <li>Meditații fizică, chimie, biologie online — pregătire Medicină</li>
              <li>Meditații franceză, germană, spaniolă, italiană online</li>
            </ul>
          ),
        },
        {
          title: "Cum funcționează?",
          body: (
            <ol className="list-decimal pl-5 space-y-1">
              <li>Cauți după materie și filtrezi „doar online".</li>
              <li>Citești recenzii, vezi tariful și trimiți mesaj direct profesorului.</li>
              <li>Stabiliți ora, platforma (Zoom/Meet) și începeți. Plata direct, fără comision.</li>
            </ol>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/meditatii-engleza", label: "Meditații engleză" },
        { to: "/meditatii-informatica", label: "Meditații informatică" },
        { to: "/meditatii-bac", label: "Pregătire BAC 2026" },
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/platforma-meditatii-online", label: "Despre platformă" },
      ]}
    />
  );
}

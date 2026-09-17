import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-la-domiciliu";
const TITLE = "Meditații la domiciliu 2026 — Profesori care vin acasă | MeditatiiDirect.ro";
const DESC = "Meditații la domiciliu cu profesori verificați care vin acasă la tine: matematică, română, engleză, fizică. București, Cluj, Iași, Timișoara. De la 40 lei/oră, contact direct.";

const faqs = [
  { q: "Cât costă o meditație la domiciliu?", a: "Tarifele pentru meditații la domiciliu pornesc de la 40 lei/oră pentru clasele gimnaziale și ajung la 150-200 lei/oră pentru pregătire BAC sau admitere. Profesorul poate include un mic supliment pentru deplasare în funcție de distanță." },
  { q: "În ce orașe găsesc profesori care vin acasă?", a: "Avem profesori care oferă meditații la domiciliu în București (toate sectoarele), Cluj-Napoca, Iași, Timișoara, Brașov, Constanța, Sibiu, Oradea, Craiova, Ploiești și majoritatea reședințelor de județ." },
  { q: "Cât durează o ședință de meditații la domiciliu?", a: "Standard 60 sau 90 de minute. Pentru elevii de gimnaziu recomandăm 60 min, iar pentru BAC/admitere 90-120 min, pentru a avea timp atât de teorie cât și de probleme aplicate." },
  { q: "Profesorul vine cu materiale didactice?", a: "Da, profesorii verificați aduc culegeri, fișe de lucru, subiecte rezolvate și planuri de pregătire personalizate, adaptate nivelului elevului." },
  { q: "Cum aleg cel mai bun profesor care vine la domiciliu?", a: "Filtrează după orașul tău, vezi profilul complet, recenzii reale, experiență (ani de predare) și rezultate (BAC, olimpiade, admitere). Apoi contactează profesorul direct prin chat — fără intermediari, fără comision." },
  { q: "Pot avea meditații la domiciliu pentru mai mulți copii?", a: "Da, mulți profesori acceptă grupe de 2-3 copii de același nivel, cu tarif partajat. Este o soluție populară pentru frați sau colegi de clasă." },
];

export const Route = createFileRoute("/meditatii-la-domiciliu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "meditatii la domiciliu, meditatii acasa, profesori la domiciliu, meditatii bucuresti la domiciliu, meditatii cluj domiciliu, profesori care vin acasa, meditatii fata in fata, ore particulare acasa, meditator la domiciliu" },
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Meditații la domiciliu",
          serviceType: "Ore particulare la domiciliul elevului",
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro/" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "RON",
            lowPrice: "40",
            highPrice: "200",
            offerCount: "500",
          },
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      breadcrumbParent={{ name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }}
      h1="Meditații la domiciliu — profesori care vin acasă la tine"
      intro="Cauți meditații la domiciliu în România? Pe MeditatiiDirect.ro găsești profesori verificați care vin acasă la elev — în București, Cluj-Napoca, Iași, Timișoara, Brașov și toată țara. Contact direct cu profesorul, fără comision, fără intermediari, de la 40 lei/oră."
      bullets={[
        "Profesori verificați manual (identitate + experiență)",
        "Vin acasă la tine — economisești timp de drum",
        "Materii: matematică, română, engleză, fizică, chimie, informatică",
        "Pregătire pentru BAC, Evaluare Națională și admitere",
        "Recenzii reale de la elevi anteriori",
        "Tu negociezi prețul direct cu profesorul",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesorii disponibili" }}
      ctaSecondary={{ to: "/meditatori", label: "Catalog meditatori" }}
      sections={[
        {
          title: "De ce meditații la domiciliu?",
          body: (
            <>
              <p>Meditațiile la domiciliu rămân cea mai eficientă formă de pregătire individuală pentru elevii care au nevoie de atenție 100% personalizată. Fără distragerile online, fără probleme de conexiune, fără timpi pierduți la deplasare.</p>
              <p>Profesorul observă direct cum lucrează elevul, îi corectează postura, caietul, modul de organizare a rezolvărilor — detalii care fac diferența la examen.</p>
            </>
          ),
        },
        {
          title: "Cele mai cerute materii la domiciliu",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Matematică</strong> — gimnaziu, liceu, BAC, admitere</li>
              <li><strong>Limba română</strong> — Evaluare Națională și BAC</li>
              <li><strong>Limba engleză</strong> — conversație, Cambridge, IELTS</li>
              <li><strong>Fizică & Chimie</strong> — BAC și admitere Medicină/Politehnică</li>
              <li><strong>Informatică</strong> — algoritmi, C++, BAC info</li>
            </ul>
          ),
        },
        {
          title: "Cum funcționează?",
          body: (
            <ol className="list-decimal pl-5 space-y-1">
              <li>Caută profesori în orașul tău</li>
              <li>Verifică profil, experiență și recenzii</li>
              <li>Contactează profesorul prin chat — gratuit</li>
              <li>Stabilești programul și locul (la tine acasă)</li>
              <li>Plătești direct profesorului, fără comision platformă</li>
            </ol>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii", label: "Toate meditațiile" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/meditatii-engleza", label: "Meditații engleză" },
        { to: "/meditatii-bac", label: "Meditații BAC" },
        { to: "/meditatori", label: "Profesori meditatori" },
      ]}
    />
  ),
});

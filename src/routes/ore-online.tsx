import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/ore-online";
const TITLE = "Ore online 2026 — Meditații private prin Zoom & Meet | MeditatiiDirect.ro";
const DESC = "Ore online cu profesori verificați: matematică, română, engleză, fizică, informatică. Live pe Zoom sau Google Meet, de la 30 lei/oră. Contact direct, fără comision.";

const faqs = [
  { q: "Cum funcționează orele online?", a: "Stabilești cu profesorul ora și platforma (Zoom, Google Meet, Skype). Profesorul îți trimite linkul, te conectezi de pe telefon, tabletă sau laptop. Ai cameră, microfon și un Whiteboard digital comun pentru exerciții." },
  { q: "Sunt orele online la fel de eficiente ca cele față în față?", a: "Da, conform studiilor recente, eficiența este comparabilă pentru elevii de gimnaziu și liceu, mai ales pentru materii teoretice (matematică, română, limbi străine, informatică). Avantajul: economisești 30-60 minute de drum și ai acces la profesorii din toată țara." },
  { q: "Cât costă o oră online?", a: "Tarifele pentru ore online pornesc de la 30 lei/oră (studenți olimpici, gimnaziu) și ajung la 150-200 lei/oră pentru pregătire BAC sau admitere la facultăți competitive. În general, orele online sunt cu 10-20% mai ieftine decât cele la domiciliu." },
  { q: "Ce am nevoie pentru o oră online?", a: "Un laptop sau tabletă cu cameră și microfon, conexiune stabilă la internet (minim 10 Mbps), un caiet pentru notițe și liniște. Pentru materii cu mult scris (matematică, fizică), o tabletă grafică ajută enorm, dar nu este obligatorie." },
  { q: "Pot avea ore online pentru BAC sau admitere?", a: "Da, peste 70% din pregătirea pentru BAC și admitere se face online. Profesorul folosește platforme cu Whiteboard (Miro, Zoom Whiteboard), trimite fișe în PDF, dă teme pe care le corectează individual." },
  { q: "Ce fac dacă nu sunt mulțumit de profesorul ales?", a: "Schimbi profesorul oricând — nu ești blocat în niciun contract. Pe platformă găsești sute de alternative, iar contactarea unui nou profesor este gratuită." },
];

export const Route = createFileRoute("/ore-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "ore online, meditatii online, ore particulare online, lectii online, ore zoom, ore google meet, profesori online, meditatii zoom, lectii private online, scoala online, pregatire online bac, pregatire online admitere" },
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
          name: "Ore online cu profesori verificați",
          serviceType: "Ore particulare online (Zoom, Google Meet)",
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro/" },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "30", highPrice: "200", offerCount: "800" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1380", bestRating: "5" },
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      breadcrumbParent={{ name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }}
      h1="Ore online — meditații private prin Zoom sau Google Meet"
      intro="Cauți ore online cu profesori verificați? Pe MeditatiiDirect.ro găsești sute de profesori care predau live, prin Zoom sau Google Meet, la toate materiile. Acces la profesori din toată România, fără timp pierdut la deplasare, de la 30 lei/oră."
      bullets={[
        "800+ profesori care predau exclusiv online",
        "Platforme: Zoom, Google Meet, Skype, Microsoft Teams",
        "Toate materiile — matematică, română, engleză, fizică, info, chimie",
        "Whiteboard digital pentru exerciții live",
        "Acces la cei mai buni profesori, indiferent de oraș",
        "Cu 10-20% mai ieftin decât la domiciliu",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi profesori online" }}
      ctaSecondary={{ to: "/meditatii-online", label: "Mai multe despre online" }}
      sections={[
        {
          title: "De ce ore online?",
          body: (
            <>
              <p>Orele online au devenit standardul pentru meditațiile moderne. Elevii economisesc 30-60 minute de drum pe ședință, iar părinții nu mai trebuie să-i transporte. În plus, ai acces la profesori din toată țara — un olimpic din București poate preda unui elev din Vaslui fără probleme.</p>
              <p>Profesorii folosesc Whiteboard digital pentru a scrie formule live, trimit fișe PDF în chat, înregistrează ședința pentru recapitulare. Pregătirea este la fel de eficientă ca față în față.</p>
            </>
          ),
        },
        {
          title: "Cele mai cerute ore online",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Ore online matematică — gimnaziu, liceu, BAC</li>
              <li>Ore online limba română — Evaluare, BAC</li>
              <li>Ore online engleză — Cambridge, IELTS</li>
              <li>Ore online fizică & chimie — BAC, Medicină</li>
              <li>Ore online informatică — algoritmi, C++</li>
              <li>Ore online pentru admitere UPB, ASE, Drept</li>
            </ul>
          ),
        },
        {
          title: "Ce ai nevoie?",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Laptop / tabletă cu cameră și microfon</li>
              <li>Conexiune internet stabilă (min. 10 Mbps)</li>
              <li>Cont gratuit pe Zoom sau Google Meet</li>
              <li>Caiet pentru notițe (sau tabletă grafică)</li>
              <li>Spațiu liniștit pentru 60-90 minute</li>
            </ul>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/meditatii", label: "Toate anunțurile" },
        { to: "/platforma-meditatii-online", label: "Platformă meditații online" },
        { to: "/meditatii-matematica", label: "Matematică online" },
        { to: "/meditatii-engleza", label: "Engleză online" },
        { to: "/caut-profesor", label: "Caut profesor" },
        { to: "/meditatii-bac", label: "Pregătire BAC online" },
      ]}
    />
  ),
});

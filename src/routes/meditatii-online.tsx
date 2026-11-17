import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";

const PAGE_URL = "https://meditatiidirect.ro/meditatii-online";
const TITLE = "Meditații online — platformă de meditații cu profesori verificați, oferte gratuite";
const DESCRIPTION =
  "Meditații online la matematică, română, engleză și alte materii. Postează gratuit cererea, compară propunerile cu tarif și program și discută direct cu profesorul.";

const FAQS: FaqItem[] = [
  {
    q: "Cât costă o meditație online?",
    a: "Fiecare profesor își stabilește tariful și îl vezi în propunerea lui înainte să accepți. Tarifele reale din anunțurile de pe site, pe materii și orașe, sunt pe pagina Prețuri meditații.",
  },
  {
    q: "Pe ce platformă se țin meditațiile online?",
    a: "Stabilești platforma împreună cu profesorul, de exemplu Zoom, Google Meet sau Microsoft Teams. Pentru matematică și științe, întreabă cum veți scrie și corecta exercițiile: pe tablă digitală, tabletă grafică sau fotografii ale caietului.",
  },
  {
    q: "Meditațiile online sunt la fel de eficiente ca cele față în față?",
    a: "Formatul potrivit depinde de elev, materie, conexiune și felul în care profesorul explică și verifică rezolvările. Discută metoda de lucru înainte de a accepta propunerea; platforma nu garantează rezultate la examene.",
  },
  {
    q: "Am nevoie de echipament special pentru o meditație online?",
    a: "Suficient un laptop sau tabletă, microfon (cel încorporat e ok) și conexiune stabilă la internet. Pentru matematică și științe e util un caiet și o cameră bună sau o tabletă grafică pentru a scrie.",
  },
  {
    q: "Cum aleg profesorul potrivit pentru meditații online?",
    a: "Postezi cererea cu materia, nivelul, bugetul și opțiunea online. Compari propunerile primite după tarif, program și metodă, apoi discuți direct în chat. Condițiile unei eventuale lecții de probă le stabilești cu profesorul.",
  },
  {
    q: "Există meditații online pentru BAC și admitere?",
    a: "Poți cere pregătire online pentru BAC, Evaluarea Națională și admitere. Precizează materia, profilul sau facultatea și capitolele dificile, astfel încât profesorii să îți trimită propuneri potrivite.",
  },
];

export const Route = createFileRoute("/meditatii-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "meditatii online, meditatii online romania, profesori online, meditatii online matematica, meditatii online romana, meditatii online engleza, meditatii online bac, meditatii online admitere, meditatii zoom, meditatii google meet, meditatii pe internet, ore online, lectii online, pregatire online bac, pregatire online admitere, profesor online",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      h1="Meditații online — primește propuneri de la profesori"
      intro="Descrii materia, nivelul și programul dorit, alegi online și primești propuneri cu tarif. Compari ofertele și discuți direct cu profesorul despre platforma video și metoda de lucru, indiferent de orașul în care locuiești. Cererea este gratuită, fără comision."
      bullets={[
        "Propuneri cu tarif și program înainte să alegi",
        "Platforma video și formatul lecției se stabilesc cu profesorul",
        "Materii: matematică, română, engleză, fizică, informatică, chimie, biologie",
        "Cereri pentru BAC, Evaluare Națională și admitere facultate",
        "Chat direct cu profesorul — fără intermediari și fără comision",
        "Evaluarea propunerii din pagina privată a cererii",
      ]}
      ctaPrimary={{ to: "/meditatii", search: { online: "1" }, label: "Cere meditații online" }}
      ctaSecondary={{ to: "/pentru-profesori", label: "Sunt profesor — vreau să predau online" }}
      sections={[
        {
          title: "De ce meditații online?",
          body: (
            <>
              <p>
                Meditațiile online îți permit să primești propuneri și de la profesori din alte
                orașe. În cerere precizează obiectivul: recapitulare, un capitol dificil sau
                pregătirea pentru un examen.
              </p>
              <p>
                Nu te deplasezi la lecție. Verifică împreună cu profesorul conexiunea, sunetul și
                modul de trimitere a rezolvărilor. Orice înregistrare a lecției se discută și se
                acceptă în prealabil de către participanți.
              </p>
            </>
          ),
        },
        {
          title: "Materii populare online",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li><Link to="/meditatii-matematica" className="text-primary underline">Meditații matematică</Link> online: gimnaziu, liceu, BAC și admitere cu probă de matematică</li>
              <li><Link to="/meditatii-romana-online" className="text-primary underline">Meditații română online</Link>: BAC, Evaluare Națională, gramatică și literatură</li>
              <li><Link to="/meditatii-engleza-online" className="text-primary underline">Meditații engleză online</Link>: conversație și pregătire pentru examene</li>
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
              <li>Postezi gratuit cererea cu materia, nivelul, bugetul și opțiunea online.</li>
              <li>Primești propuneri cu tarif și program, apoi discuți direct în chat.</li>
              <li>
                Stabiliți ora, platforma (Zoom/Meet) și începeți. Plata direct, fără comision.
              </li>
            </ol>
          ),
        },
      ]}
      ctaFooter={{ title: "Cauți meditații online?", body: "Spune materia și obiectivul. Profesorii interesați îți trimit propuneri cu tarif și program.", to: "/meditatii", label: "Trimite cererea gratuită", search: { online: "1" } }}
      faqs={FAQS}
      related={[
        { to: "/meditatii-engleza-online", label: "Engleză online" },
        { to: "/meditatii-romana-online", label: "Română online" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/meditatii-engleza", label: "Meditații engleză" },
        { to: "/meditatii-informatica", label: "Meditații informatică" },
        { to: "/meditatii-bac", label: "Pregătire BAC" },
        { to: "/admitere", label: "Admitere facultate" },
        { to: "/preturi-meditatii", label: "Prețuri meditații din tarife reale" },
      ]}
    />
  );
}

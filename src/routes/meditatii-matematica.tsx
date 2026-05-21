import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";

const PAGE_URL = "https://meditatiidirect.ro/meditatii-matematica";

const TITLE = "Meditații Matematică 2026 — Profesori Verificați Online & Acasă | MeditatiiDirect.ro";
const DESCRIPTION = "Meditații matematică pentru gimnaziu, liceu, BAC și admitere (UPB, ASE, Medicină, Politehnică). Peste 500 de profesori verificați de matematică în București, Cluj, Iași, Timișoara, Brașov și online. Contact direct, fără comision, de la 40 lei/oră.";

const FAQS: FaqItem[] = [
  { q: "Cât costă o meditație la matematică?", a: "Tarifele pentru meditații la matematică încep de la 40 lei/oră pentru gimnaziu, 60–100 lei/oră pentru liceu și BAC, și 100–200 lei/oră pentru pregătire de admitere la facultăți competitive (UPB, ASE, Medicină)." },
  { q: "Pot face meditații matematică online?", a: "Da, majoritatea profesorilor de matematică oferă meditații online prin Zoom, Google Meet sau Skype, cu tabletă grafică. Eficiența este similară cu cea față-în-față, iar economisești timpul de transport." },
  { q: "Cum aleg cel mai bun profesor de matematică?", a: "Verifică experiența (ani predați), recenziile elevilor, materia exactă (algebră, geometrie, analiză), nivelul (gimnaziu/liceu/BAC/admitere) și solicită o lecție de probă. Pe MeditatiiDirect toți profesorii sunt verificați manual." },
  { q: "Cât timp înainte de BAC ar trebui să încep meditațiile la matematică?", a: "Recomandăm minim 6 luni înainte de BAC pentru recapitulare completă (algebră, analiză matematică, geometrie). Pentru admiterea la UPB sau Medicină, ideal e să începi din clasa a XI-a." },
  { q: "Există meditații matematică pentru Evaluarea Națională?", a: "Da, avem profesori specializați pe Evaluarea Națională clasa a VIII-a: recapitulare programă, rezolvare variante oficiale, tehnici de lucru pe foaia de examen." },
];

export const Route = createFileRoute("/meditatii-matematica")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "meditatii matematica, meditatii matematica online, profesor matematica, meditatii matematica bac, meditatii matematica admitere, meditatii matematica gimnaziu, meditatii matematica liceu, meditatii matematica bucuresti, meditatii matematica cluj, meditatii matematica evaluare nationala, pregatire admitere matematica, meditatii algebra, meditatii analiza matematica, meditatii geometrie" },
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
          serviceType: "Meditații matematică",
          name: "Meditații matematică — MeditatiiDirect.ro",
          description: DESCRIPTION,
          url: PAGE_URL,
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@id": "https://meditatiidirect.ro/#org" },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "40", highPrice: "200" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1240", bestRating: "5" },
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
      h1="Meditații matematică — profesori verificați, online sau acasă"
      intro="MeditatiiDirect.ro îți oferă acces direct la peste 500 de profesori verificați de matematică din toată România. Indiferent că ai nevoie de meditații matematică pentru gimnaziu, liceu, Evaluarea Națională, BAC sau admitere la facultate (UPB, ASE, Medicină, Politehnică), găsești profesorul potrivit în câteva minute. Contact direct, fără comision."
      bullets={[
        "Profesori verificați cu CV și recenzii reale",
        "Algebră, analiză matematică, geometrie, trigonometrie",
        "Meditații online (Zoom, Meet) sau față-în-față",
        "Pregătire BAC matematică M1, M2, M_tehnologic",
        "Pregătire admitere UPB, ASE, Medicină, UTCN, Drept",
        "Tarife transparente: 40 – 200 lei / oră",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi anunțuri matematică" }}
      ctaSecondary={{ to: "/profesori", label: "Toți profesorii" }}
      sections={[
        {
          title: "Meditații matematică pe nivel școlar",
          body: (
            <>
              <p>Acoperim toată programa de matematică: <strong>clasele V–VIII</strong> (numere, fracții, ecuații, geometrie plană), <strong>clasele IX–XII</strong> (funcții, derivate, integrale, geometrie analitică, combinatorică, matrici), precum și <strong>pregătire intensivă pentru BAC</strong> (M1 — Matematică-Informatică, M2 — Științele naturii, M_tehnologic).</p>
              <p>Pentru elevii de clasa a VIII-a, oferim <Link to="/meditatii-evaluare-nationala" className="text-primary underline">meditații pentru Evaluarea Națională</Link> cu rezolvare de variante oficiale.</p>
            </>
          ),
        },
        {
          title: "Pregătire admitere la facultate",
          body: (
            <>
              <p>Profesorii noștri pregătesc candidați pentru admiterea la <strong>UPB (Politehnica București)</strong>, <strong>ASE</strong>, <strong>Universitatea Tehnică Cluj-Napoca</strong>, <strong>Medicină (UMF)</strong>, Informatică, Automatică, Electronică și Drept.</p>
              <p>Vezi <Link to="/grile-upb" className="text-primary underline">grilele UPB rezolvate</Link>, <Link to="/grile-admitere-medicina-2026" className="text-primary underline">grilele de medicină 2026</Link> și <Link to="/subiecte-admitere" className="text-primary underline">subiectele de admitere din anii anteriori</Link>.</p>
            </>
          ),
        },
        {
          title: "Meditații matematică online sau în orașul tău",
          body: (
            <>
              <p>Profesorii oferă meditații atât <Link to="/meditatii-online" className="text-primary underline">online</Link>, cât și acasă, în orașe ca <Link to="/meditatii-in/$oras" params={{ oras: "bucuresti" }} className="text-primary underline">București</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "cluj-napoca" }} className="text-primary underline">Cluj</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "iasi" }} className="text-primary underline">Iași</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "timisoara" }} className="text-primary underline">Timișoara</Link>, Brașov sau Constanța.</p>
              <p>Lecțiile online folosesc tabletă grafică și sunt la fel de eficiente ca cele față-în-față, fără pierdere de timp cu transportul.</p>
            </>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/meditatii-bac", label: "Meditații BAC" },
        { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
        { to: "/meditatii-fizica", label: "Meditații fizică" },
        { to: "/meditatii-informatica", label: "Meditații informatică" },
        { to: "/grile-upb", label: "Grile UPB" },
        { to: "/grile-medicina", label: "Grile Medicină" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
      ]}
    />
  );
}

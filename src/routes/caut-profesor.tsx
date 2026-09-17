import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/caut-profesor";
const TITLE = "Caut profesor 2026 — Găsește profesorul potrivit în 2 minute | MeditatiiDirect.ro";
const DESC = "Caut profesor de meditații? profesori particulari verificați: matematică, română, engleză, fizică, informatică. Online sau acasă, contact direct, fără comision. De la 30 lei/oră.";

const faqs = [
  { q: "Cum caut un profesor bun de meditații?", a: "Pe MeditatiiDirect.ro filtrezi după materie, oraș, online/la domiciliu și buget. Vezi profil complet, recenzii reale de la elevi anteriori, experiență (ani de predare) și rezultate (BAC, olimpiade, admitere). Contact direct prin chat — gratuit, fără intermediari." },
  { q: "Caut profesor de matematică — unde găsesc?", a: "Avem sute de profesori de matematică pentru toate nivelurile: gimnaziu, liceu, BAC, admitere la UPB, ASE, Politehnică sau Medicină. Filtrează direct pe pagina /meditatii-matematica." },
  { q: "Caut profesor particular online — funcționează?", a: "Da, peste 60% din meditațiile actuale se fac online (Zoom, Google Meet). Calitatea pregătirii este aceeași ca față în față, dar economisești timp de drum și ai acces la profesori din toată țara." },
  { q: "Cât costă un profesor particular?", a: "Tarife între 30-200 lei/oră. Profesori titulari cu mulți ani de experiență costă 80-150 lei/oră, studenți olimpici 30-60 lei/oră, iar pregătirea pentru admitere la Medicină/UPB poate ajunge la 200 lei/oră." },
  { q: "Cum verific dacă profesorul este serios?", a: "Verifică: badge-ul de profesor verificat (identitate confirmată manual), recenziile reale de la elevi, anii de experiență, rezultatele concrete (medii BAC, admiteri reușite, olimpici pregătiți)." },
  { q: "Pot vorbi cu profesorul înainte să rezerv?", a: "Da. Contactarea profesorilor este 100% gratuită prin chatul integrat. Discuți programul, prețul și forma (online/acasă) direct cu el, fără să plătești nimic platformei." },
];

export const Route = createFileRoute("/caut-profesor")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "caut profesor, caut profesor meditatii, caut profesor matematica, caut profesor romana, caut profesor engleza, caut meditator, gasire profesor, profesor particular, profesor bun, profesor verificat, caut profesor bucuresti, caut profesor cluj, caut profesor online" },
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
          name: "Caut profesor de meditații",
          serviceType: "Servicii de căutare profesori particulari",
          areaServed: { "@type": "Country", name: "România" },
          provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro/" },
          offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: "30", highPrice: "200", offerCount: "1000" },
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      breadcrumbParent={{ name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }}
      h1="Caut profesor — găsește profesorul potrivit în 2 minute"
      intro="Cauți un profesor de meditații serios? Pe MeditatiiDirect.ro alegi din peste 1000 de profesori verificați manual: titulari, olimpici, masteranzi, doctoranzi. Filtrezi după materie, oraș și buget, vezi recenzii reale și contactezi profesorul direct — gratuit, fără comision."
      bullets={[
        "profesori particulari verificați la toate materiile",
        "Filtrare după oraș, materie, online/domiciliu, buget",
        "Recenzii reale de la elevi anteriori",
        "Contact direct prin chat — 100% gratuit",
        "Tu negociezi prețul cu profesorul",
        "Anunțuri actualizate zilnic",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Caută profesor acum" }}
      ctaSecondary={{ to: "/meditatori", label: "Răsfoiește catalogul" }}
      sections={[
        {
          title: "Caut profesor de... (cele mai cerute)",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>matematică</strong> — gimnaziu, liceu, BAC, admitere UPB/ASE/Medicină</li>
              <li><strong>limba română</strong> — Evaluare Națională, BAC</li>
              <li><strong>limba engleză</strong> — Cambridge, IELTS, BAC, conversație</li>
              <li><strong>fizică</strong> — BAC, admitere Politehnică & Medicină</li>
              <li><strong>chimie</strong> — BAC, admitere Medicină</li>
              <li><strong>informatică</strong> — algoritmi, C++, BAC info</li>
              <li><strong>biologie</strong> — admitere Medicină</li>
              <li><strong>franceză, germană, spaniolă</strong> — toate nivelurile</li>
            </ul>
          ),
        },
        {
          title: "Cum cauți pe MeditatiiDirect",
          body: (
            <ol className="list-decimal pl-5 space-y-1">
              <li>Alege materia și orașul</li>
              <li>Filtrezi după preț, experiență, online/domiciliu</li>
              <li>Compari profile (recenzii, rezultate)</li>
              <li>Trimiți mesaj prin chat — gratuit</li>
              <li>Stabiliți programul, plătești direct profesorului</li>
            </ol>
          ),
        },
        {
          title: "De ce să cauți aici?",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Profesori verificați manual (nu doar declarați)</li>
              <li>Fără comision pe ședință</li>
              <li>Anunțuri reale, actualizate zilnic</li>
              <li>Recenzii verificate de la elevi anteriori</li>
              <li>Toată România — București, Cluj, Iași, Timișoara, Brașov, Constanța...</li>
            </ul>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii", label: "Toate anunțurile" },
        { to: "/meditatori", label: "Catalog profesori" },
        { to: "/profesori-meditatii", label: "Profesori meditații" },
        { to: "/meditatii-matematica", label: "Profesori matematică" },
        { to: "/meditatii-romana", label: "Profesori română" },
        { to: "/meditatii-engleza", label: "Profesori engleză" },
        { to: "/meditatii-online", label: "Profesori online" },
        { to: "/meditatii-la-domiciliu", label: "Profesori la domiciliu" },
      ]}
    />
  ),
});

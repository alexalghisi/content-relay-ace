import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/profesori-meditatii";
const TITLE = "Profesori meditații 2026 — Meditatori Verificați | MeditatiiDirect.ro";
const DESC = "Catalog profesori meditații verificați din România: matematică, română, engleză, fizică, informatică. Contact direct cu profesorul, recenzii reale, fără comision.";

const faqs = [
  { q: "Cum sunt verificați profesorii de meditații?", a: "Verificăm manual identitatea, diplomele de studii, experiența didactică (ani de predare) și colectăm recenzii reale de la elevi anteriori. Profesorii verificați primesc un badge vizibil pe profil." },
  { q: "Cât costă un profesor de meditații?", a: "Între 30-200 lei/oră, în funcție de materie, nivel și experiența profesorului. Pentru BAC și admitere la facultăți competitive (Medicină, UPB, ASE, Drept), tarifele sunt mai mari." },
  { q: "Pot alege profesor titular sau student?", a: "Pe platformă găsești și profesori titulari cu zeci de ani de experiență, și studenți olimpici sau masteranzi care oferă tarife mai accesibile. Tu alegi în funcție de buget și nivelul de pregătire dorit." },
  { q: "Cum aleg profesorul potrivit?", a: "Verifică: 1) experiența (ani de predare), 2) rezultatele elevilor (BAC, admitere, olimpiade), 3) recenziile reale, 4) materia exactă pe care o predă, 5) disponibilitatea (online sau la domiciliu)." },
  { q: "Profesorii oferă și meditații online?", a: "Da, majoritatea profesorilor oferă atât meditații online (Zoom, Google Meet) cât și față în față, la domiciliu sau la cabinetul lor." },
];

export const Route = createFileRoute("/profesori-meditatii")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "profesori meditatii, meditatori, profesori particulari, profesor matematica, profesor romana, profesor engleza, profesori bac, profesori admitere, meditatori verificati, profesori bucuresti, profesori cluj" },
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
          "@type": "ItemList",
          name: "Profesori meditații verificați",
          
          itemListOrder: "Unordered",
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      breadcrumbParent={{ name: "Meditații", url: "https://meditatiidirect.ro/meditatii" }}
      h1="Profesori meditații — meditatori particulari verificați în România"
      intro="Cauți un profesor de meditații serios? Pe MeditatiiDirect.ro găsești peste 1000 de profesori verificați manual: titulari cu experiență, studenți olimpici, masteranzi și doctoranzi. Contact direct, fără intermediari, fără comision platformă."
      bullets={[
        "Profesori verificați (identitate + studii + experiență)",
        "Toate materiile: matematică, română, engleză, fizică, chimie, informatică",
        "Profesori în București, Cluj, Iași, Timișoara și toată țara",
        "Recenzii reale de la elevi anteriori",
        "Online, la domiciliu sau la cabinetul profesorului",
        "De la 30 lei/oră — tu negociezi direct",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi catalog profesori" }}
      ctaSecondary={{ to: "/meditatori", label: "Răsfoiește meditatori" }}
      sections={[
        {
          title: "Tipuri de profesori pe platformă",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Profesori titulari</strong> — 10+ ani de catedră, experiență BAC/Evaluare</li>
              <li><strong>Studenți olimpici</strong> — tarife accesibile, metode moderne</li>
              <li><strong>Doctoranzi & masteranzi</strong> — specializare pe admiteri competitive</li>
              <li><strong>Profesori universitari</strong> — pregătire admitere facultate</li>
            </ul>
          ),
        },
        {
          title: "Materiile cele mai cerute",
          body: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Profesori matematică — gimnaziu, liceu, BAC, admitere</li>
              <li>Profesori limba română — Evaluare Națională, BAC</li>
              <li>Profesori limba engleză — Cambridge, IELTS, BAC</li>
              <li>Profesori fizică & chimie — BAC, Medicină, UPB</li>
              <li>Profesori informatică — algoritmi, C++, BAC info</li>
            </ul>
          ),
        },
        {
          title: "Cum contactezi un profesor?",
          body: (
            <ol className="list-decimal pl-5 space-y-1">
              <li>Cauți profesori după materie și oraș</li>
              <li>Citești profilul complet și recenziile</li>
              <li>Trimiți mesaj prin chatul integrat — gratuit</li>
              <li>Stabiliți programul și forma (online/acasă)</li>
              <li>Plătești direct profesorului — fără comision</li>
            </ol>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii", label: "Toate anunțurile" },
        { to: "/meditatori", label: "Catalog meditatori" },
        { to: "/meditatii-online", label: "Profesori online" },
        { to: "/meditatii-la-domiciliu", label: "Profesori la domiciliu" },
        { to: "/meditatii-matematica", label: "Profesori matematică" },
        { to: "/meditatii-romana", label: "Profesori română" },
        { to: "/meditatii-engleza", label: "Profesori engleză" },
        { to: "/meditatii-bac", label: "Profesori BAC" },
      ]}
    />
  ),
});

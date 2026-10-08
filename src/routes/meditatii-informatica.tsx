import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { AdsterraNativeBanner, AdsterraBanner728 } from "@/components/ads/adsterra";

const URL = "https://meditatiidirect.ro/meditatii-informatica";
const TITLE = "Meditații informatică — C++, BAC, admitere și online | MeditatiiDirect.ro";
const DESC = "Cauți meditații informatică pentru BAC, admitere sau programare? Postezi gratuit cererea, primești propuneri cu tarif și discuți cu profesorii în chat.";

const faqs = [
  { q: "Ce limbaje sunt acoperite la meditațiile de informatică?", a: "Precizează în cerere limbajul și obiectivul: C/C++ pentru exerciții de liceu, Python pentru început în programare sau alt limbaj pentru un proiect. Pentru BAC verifică programa și instrucțiunile probei." },
  { q: "Sunt utile meditațiile pentru olimpiada de informatică (ONI)?", a: "Poți cere pregătire pentru olimpiadă. Întreabă profesorul despre experiența sa, nivelul problemelor și modul de lucru; pregătirea pentru BAC și cea pentru concursuri au obiective diferite." },
  { q: "Pot învăța programare de la zero cu meditații?", a: "Da, poți solicita un plan pentru începători: variabile, condiții, bucle, funcții și exerciții progresive. Ritmul depinde de experiență și de practica dintre lecții; nu există un termen garantat." },
  { q: "Cât costă o ședință de meditații la informatică?", a: "Profesorul include tariful în propunere. Compară durata ședinței, feedbackul pe cod și disponibilitatea. Plata se stabilește direct cu profesorul, fără comisionul platformei." },
  { q: "Unde găsesc subiectele BAC informatică din anii anteriori?", a: "În arhiva BAC la informatică găsești sesiunile pentru care sunt disponibile materiale. Verifică anul, sesiunea, profilul și baremul afișate; arhiva nu promite acoperire completă." },
  { q: "Pot face meditații online la informatică?", a: "Da. Selectează online în cerere și stabilește în chat instrumentele pentru partajarea ecranului și corectarea codului." },
];

export const Route = createFileRoute("/meditatii-informatica")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "meditatii informatica, meditatii informatica online, profesor informatica, meditatii c++, meditatii python, meditatii programare, meditatii informatica bac, meditatii informatica admitere, meditatii algoritmi, meditatii informatica bucuresti, meditatii informatica cluj, meditatii informatica iasi, meditatii UPB, meditatii UTCN, subiecte bac informatica, bac informatica 2026" },
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
  component: Page,
});

function Page() {
  return (
    <>
      <SeoLanding
        pageUrl={URL}
        h1="Meditații informatică — BAC, admitere și programare"
        intro="Cauți ajutor la algoritmi, C++, BAC sau admitere? Descrii obiectivul într-o cerere gratuită. Profesorii interesați trimit propuneri cu tarif și program, discuți în chat și poți evalua propunerile cu stele. Alegi online sau lecții în orașul tău."
        bullets={[
          "C/C++, algoritmi și rezolvare de probleme",
          "Python pentru începători, data science și AI",
          "Pregătire admitere UPB, UTCN, Info Iași, ASE CSIE",
          "Antrenament olimpiadă: ONI, baraje, IOI",
          "Algoritmi, structuri de date, complexitate, grafuri",
          "Legături spre subiecte BAC și bareme disponibile",
        ]}
        ctaPrimary={{ to: "/meditatii", search: { materie: "informatica" }, label: "Cere meditații la informatică" }}
        sections={[
          { title: "BAC informatică: explică algoritmul, nu memora codul", body: <><p>Lucrează pe programa profilului tău: urmărirea algoritmilor, tablouri, subprograme și probleme de implementare. Cere profesorului să discute cazurile-limită și raționamentul din spatele fiecărei soluții.</p><p>Consultă <Link to="/bac/$materie" params={{ materie: "informatica" }} className="text-primary underline">subiectele BAC la informatică</Link> și <Link to="/rezolvari" className="text-primary underline">rezolvările explicate</Link>, ținând cont de starea lor de verificare.</p></> },
          { title: "Admitere sau programare de la zero?", body: <p>Pentru admitere, trimite programa facultății și exemple de probleme. Pentru începători, menționează ce ai lucrat deja și ce proiect vrei să faci. În chat întreabă cum vei primi feedback pe cod și câtă practică este necesară între ședințe.</p> },
        ]}
        ctaFooter={{ title: "Cauți ajutor la informatică?", body: "Spune limbajul, clasa și obiectivul. Primești propuneri cu tarif și program.", to: "/meditatii", search: { materie: "informatica" }, label: "Trimite cererea gratuită" }}
        faqs={faqs}
        related={[
          { to: "/meditatii-matematica", label: "Matematică" },
          { to: "/meditatii-bac", label: "BAC 2026" },
          { to: "/grile-upb", label: "Grile UPB" },
          { to: "/meditatii-admitere-politehnica", label: "Admitere Politehnică" },
          { to: "/subiecte-bac", label: "Subiecte BAC arhivă" },
        ]}
      />
      <div className="container-page">
        <AdsterraBanner728 />
        <AdsterraNativeBanner />
      </div>
    </>
  );
}

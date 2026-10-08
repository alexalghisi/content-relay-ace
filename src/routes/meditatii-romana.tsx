import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-romana";
const TITLE = "Meditații română — BAC și Evaluarea Națională | MeditatiiDirect.ro";
const DESC = "Cauți meditații română pentru BAC, Evaluarea Națională sau gramatică? Postezi cererea gratuită, compari propunerile și discuți direct în chat cu profesorii.";

const faqs = [
  { q: "Cât costă o meditație la română?", a: "Fiecare profesor își comunică tariful în propunere. Menționează bugetul și durata dorită în cerere; compară prețul pe ședință și ce include corectarea temelor. Platforma nu stabilește prețul lecțiilor." },
  { q: "Pot face meditații română online?", a: "Da. Bifează online în cerere. Stabilești cu profesorul platforma video și modul de lucru: documente partajate, analiza textului, redactare și corectarea individuală a eseurilor." },
  { q: "Ce includ meditațiile pentru BAC la română?", a: "Pregătirea pentru proba scrisă poate include înțelegerea textului la prima vedere, textul argumentativ, cerințele de analiză și eseul literar, în funcție de profil și programa oficială. Cere feedback pe propriile texte, nu doar comentarii memorate." },
  { q: "Există meditații de română pentru Evaluare Națională?", a: "Poți trimite o cerere pentru clasa a VIII-a: lectură, compararea textelor, redactare, vocabular, morfologie și sintaxă. Precizează capitolele dificile și dacă dorești simulări cronometrate." },
  { q: "Cum aleg cel mai bun profesor de română?", a: "Compară propunerile primite după nivel, metodă, disponibilitate și tarif. Întreabă în chat cum se corectează redactările și cum se măsoară progresul. În pagina privată a cererii poți acorda propunerilor 1–5 stele." },
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
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații limba română — online și la domiciliu"
      intro="Cauți meditații la limba română pentru gimnaziu, Evaluarea Națională, BAC sau admitere? Descrii ce ai nevoie într-o cerere gratuită, iar profesorii interesați trimit propuneri cu tarif, dată și oră. Compari metodele, discuți direct în chat și evaluezi propunerile cu stele. Alegi online sau în orașul tău."
      bullets={[
        "Pregătire BAC română — eseu, comentariu, planuri",
        "Evaluare Națională clasa a VIII-a",
        "Gramatică completă: morfologie, sintaxă, fonetică",
        "Admitere Drept, Litere, Jurnalism",
        "Online sau la domiciliu — tu alegi",
        "Tarif în fiecare propunere, fără comision",
      ]}
      ctaPrimary={{ to: "/meditatii", search: { materie: "romana" }, label: "Cere meditații la română" }}
      ctaSecondary={{ to: "/meditatii", search: { materie: "romana", online: "1" }, label: "Cere meditații online" }}
      sections={[
        { title: "Meditații română pentru BAC", body: <><p>Pornește de la profilul tău și programa oficială. Un plan de lucru util separă textul argumentativ, analiza textului la prima vedere și eseul despre opera literară. Lucrează cu baremul și cere profesorului să explice ce puncte ai pierdut.</p><p>Consultă <Link to="/bac/$materie" params={{ materie: "romana" }} className="text-primary underline">arhiva de subiecte BAC la română</Link> și <Link to="/rezolvari" className="text-primary underline">rezolvările explicate</Link>. Respectă starea de verificare afișată pentru fiecare rezolvare.</p></> },
        { title: "Clasa a VIII-a și gramatică", body: <><p>La Evaluarea Națională contează atât lectura, cât și exprimarea și gramatica. În cerere scrie concret: dificultăți la pronume, funcții sintactice, frază, rezumat sau redactare. Un diagnostic inițial ajută la alegerea exercițiilor potrivite.</p><p>Vezi pagina de <Link to="/meditatii-evaluare-nationala" className="text-primary underline">pregătire pentru Evaluarea Națională</Link>.</p></> },
        { title: "Cum alegi propunerea potrivită", body: <><p>Spune clasa, obiectivul, programul și bugetul. Când primești o propunere, întreabă în chat despre corectarea temelor și feedback. Stabiliți durata lecției și ritmul de lucru; acceptarea profesorului închide cererea.</p><p>Vezi <Link to="/cum-functioneaza" className="text-primary underline">cum funcționează cererea și propunerile</Link> sau <Link to="/preturi-meditatii" className="text-primary underline">ghidul de prețuri</Link>.</p></> },
      ]}
      ctaFooter={{ title: "Cauți un profesor de română?", body: "Spune clasa, examenul și ce vrei să îmbunătățești. Profesorii interesați îți trimit propuneri.", to: "/meditatii", label: "Trimite cererea gratuită", search: { materie: "romana" } }}
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

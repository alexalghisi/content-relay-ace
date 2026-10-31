import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-romana-online";
const TITLE = "Meditații română online — pregătire BAC și Evaluare Națională la limba română";
const DESC = "Meditatii romana online: profesori de limba română pentru BAC, Evaluare Națională și gimnaziu. Eseuri corectate, comentarii, gramatică. Ceri gratuit oferte de oriunde din țară.";

const faqs = [
  { q: "Merg meditațiile la română online?", a: "Da. Româna se bazează pe scris și corectat, ceea ce se face foarte bine online, cu documente partajate." },
  { q: "Pot face pregătire pentru BAC la română online?", a: "Da, inclusiv pentru profil real și uman. Lucrezi pe subiecte oficiale și primești eseurile corectate după barem." },
  { q: "Există meditații la română online pentru Evaluarea Națională?", a: "Da. Precizează clasa a VIII-a în cerere și primești propuneri de la profesori care pregătesc EN." },
  { q: "Cât durează o lecție de română online?", a: "De obicei 50–60 de minute; înainte de examen se fac și ședințe mai lungi de simulare." },
  { q: "Cum aleg profesorul de română?", a: "Compari propunerile primite, întrebi în chat cum corectează eseurile și alegi." },
];

export const Route = createFileRoute("/meditatii-romana-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații română online"
      intro="La limba română diferența o fac eseurile scrise și corectate des. Online, profesorul îți corectează lucrarea direct pe ecran și îți arată exact unde pierzi puncte după barem."
      bullets={["BAC română real și uman: eseu, comentariu, text argumentativ", "Evaluare Națională clasa a VIII-a", "Gramatică și ortografie pentru gimnaziu", "Lucrări corectate după baremul oficial"]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "romana" } }}
      sections={[
    { title: "Cum se lucrează la română online", body: <p>{"Scrii eseul acasă, îl trimiți, iar la lecție profesorul îl parcurge cu tine: structură, argumente, citate, exprimare. Apoi repeti pe un subiect nou până ajungi la punctajul dorit."}</p> },
    { title: "BAC la română", body: <p>{"Subiectul I (text la prima vedere și text argumentativ), Subiectul al II-lea (text literar) și Subiectul al III-lea (eseul de minimum 400 de cuvinte) cer fiecare altă tehnică. Exersează pe subiectele oficiale și pe rezolvările noastre explicate."}</p> },
    { title: "Evaluare Națională", body: <p>{"La clasa a VIII-a punctele vin din înțelegerea textului, gramatică și compunere. Profesorul lucrează cu elevul pe modele oficiale și îi formează un ritm de lucru pe timp."}</p> },
    { title: "Cum primești oferte", body: <p>{"Completezi gratuit cererea (clasă, examen, program, buget), iar profesorii de română îți trimit propuneri. Alegi după tarif, program și discuția din chat."}</p> },
      ]}
      faqs={faqs}
      related={[{ to: "/meditatii-romana", label: "Meditații română" }, { to: "/meditatii-romana-bac", label: "Meditații română BAC" }, { to: "/meditatii-online", label: "Meditații online" }, { to: "/meditatii-bac", label: "Meditații BAC" }]}
    />
  ),
});

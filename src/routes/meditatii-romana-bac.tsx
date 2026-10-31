import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-romana-bac";
const TITLE = "Meditații română BAC 2026 — pregătire bacalaureat limba română, real și uman";
const DESC = "Meditatii romana BAC 2026: pregătire bacalaureat la limba română cu profesori verificați, eseuri corectate după barem, online sau acasă. Ceri gratuit oferte.";

const faqs = [
  { q: "Când să încep meditațiile la română pentru BAC?", a: "Ideal din clasa a XI-a sau de la începutul clasei a XII-a; cu 3–4 luni de lucru constant se pot recupera multe puncte." },
  { q: "Sunt diferite meditațiile pentru real și uman?", a: "Da, la uman programa de opere e mai largă. Precizează profilul în cerere." },
  { q: "Ce opere trebuie știute pentru BAC?", a: "Operele din programa de bacalaureat pentru profilul tău; profesorul te ajută să le organizezi pe tipuri de eseu." },
  { q: "Pot face pregătire BAC la română online?", a: "Da, majoritatea elevilor aleg online pentru corectarea eseurilor." },
  { q: "Cât costă meditațiile la română pentru BAC?", a: "Fiecare profesor își propune tariful în ofertă, iar tu stabilești bugetul în cerere; platforma nu ia comision." },
];

export const Route = createFileRoute("/meditatii-romana-bac")({
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
      h1="Meditații română BAC 2026"
      intro="Proba scrisă la română (Proba E.a) se câștigă prin eseuri bine structurate și exersate pe subiecte reale. Un profesor te ajută să înveți ce cere baremul și să scrii sigur în timpul de examen."
      bullets={["Profil real și profil uman", "Eseul de 400+ cuvinte: operele din programă", "Text argumentativ și comentariu de text", "Simulări cu timp și corectare după barem"]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "romana" } }}
      sections={[
    { title: "Ce se dă la BAC la română", body: <p>{"Subiectul I: înțelegerea unui text și un text argumentativ. Subiectul al II-lea: un text literar (poezie, fragment). Subiectul al III-lea: eseul despre o operă studiată, minimum 400 de cuvinte. Fiecare are criterii clare în barem."}</p> },
    { title: "Cum ajuți un elev să crească nota", body: <p>{"Lista de opere, scheme pentru fiecare tip de eseu (temă și viziune, personaj, relație între personaje), citate scurte de memorat și exerciții pe timp. Eseurile se corectează punct cu punct după barem."}</p> },
    { title: "Subiecte și rezolvări", body: <p>{"Exersează pe subiectele oficiale de BAC la română din arhivă și pe rezolvările explicate pas cu pas, apoi lucrează cu profesorul pe ce nu iese."}</p> },
    { title: "Online sau acasă", body: <p>{"Româna se pretează la meditații online (documente partajate, corectare pe loc). Dacă preferi acasă, scrie orașul în cerere."}</p> },
      ]}
      faqs={faqs}
      related={[{ to: "/meditatii-romana", label: "Meditații română" }, { to: "/meditatii-romana-online", label: "Meditații română online" }, { to: "/meditatii-bac", label: "Meditații BAC" }, { to: "/bac", label: "Subiecte BAC" }]}
    />
  ),
});

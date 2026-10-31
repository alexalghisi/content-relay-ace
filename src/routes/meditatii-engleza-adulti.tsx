import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-engleza-adulti";
const TITLE = "Meditații engleză adulți — engleză de la zero, conversație, business, online sau acasă";
const DESC = "Meditatii engleza adulti: profesori de engleză pentru adulți, de la zero sau pentru job, interviu, relocare. Online sau acasă în București, Cluj și toată țara. Ceri gratuit oferte, fără comision.";

const faqs = [
  { q: "Pot începe meditațiile de engleză de la zero, ca adult?", a: "Da. Spune în cerere că ești începător. Profesorii îți propun un plan de la nivelul A1, cu accent pe vorbit și pe situații de zi cu zi." },
  { q: "Se fac meditațiile de engleză pentru adulți online?", a: "Da, majoritatea adulților aleg online, seara sau în weekend. Bifează „online” și primești oferte din toată țara." },
  { q: "Există meditații de engleză pentru adulți în București?", a: "Da. Scrie București și sectorul în cerere; primești propuneri de la profesori care vin la tine sau te primesc acasă, plus variante online." },
  { q: "Cât costă meditațiile de engleză pentru adulți?", a: "Tariful îl propune fiecare profesor în ofertă, iar tu îți setezi bugetul în cerere. Compari propunerile înainte să alegi; platforma nu ia comision." },
  { q: "Pot face engleză pentru business sau pentru un interviu?", a: "Da. Precizează domeniul și data interviului. Profesorul pregătește cu tine exact vocabularul și întrebările de care ai nevoie." },
];

export const Route = createFileRoute("/meditatii-engleza-adulti")({
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
      h1="Meditații engleză pentru adulți"
      intro="Înveți engleză ca adult — de la zero, pentru conversație, pentru job sau pentru o mutare în străinătate? Descrie o dată ce urmărești și primești propuneri de la profesori de engleză obișnuiți să lucreze cu adulți, în ritmul tău."
      bullets={["Engleză de la zero (A1) până la avansat (C1)", "Conversație, engleză pentru job, interviu și relocare", "Business English: e-mailuri, prezentări, ședințe", "Lecții online, seara sau în weekend, potrivite programului de lucru"]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "engleza" } }}
      sections={[
    { title: "Cum arată meditațiile de engleză pentru adulți", body: <p>{"Primele lecții stabilesc nivelul real și scopul: vrei să vorbești fără blocaje, să scrii e-mailuri corecte sau să treci un interviu. Profesorul construiește apoi un plan pe situații reale din viața ta, nu pe capitole de manual."}</p> },
    { title: "Engleză pentru job și interviu", body: <p>{"Exersezi prezentarea ta, întrebările tipice de interviu, vocabularul domeniului tău (IT, medical, vânzări, construcții) și e-mailurile de lucru. La final ai fraze pregătite pe care le folosești sigur."}</p> },
    { title: "Online sau acasă", body: <p>{"Online e cel mai comod pentru adulți: lecții de 50–60 de minute seara sau în pauza de prânz, fără drum. Dacă preferi față în față, scrie orașul și zona (de exemplu București, sector 3) și primești propuneri de la profesori din apropiere."}</p> },
    { title: "Cât de repede progresezi", body: <p>{"Cu 2 lecții pe săptămână și puțin exercițiu între ele, majoritatea adulților simt diferența la conversație în 2–3 luni. Contează constanța mai mult decât numărul de ore."}</p> },
      ]}
      faqs={faqs}
      related={[{ to: "/meditatii-engleza", label: "Meditații engleză" }, { to: "/meditatii-engleza-online", label: "Meditații engleză online" }, { to: "/meditatii-in/bucuresti", label: "Meditații București" }, { to: "/preturi-meditatii", label: "Prețuri meditații" }]}
    />
  ),
});

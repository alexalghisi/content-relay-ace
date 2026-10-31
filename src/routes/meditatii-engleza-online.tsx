import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-engleza-online";
const TITLE = "Meditații engleză online — profesori de engleză pe Zoom/Meet, BAC, Cambridge, adulți";
const DESC = "Meditatii engleza online cu profesori verificați: BAC, Cambridge, IELTS, conversație și engleză pentru adulți. Ceri gratuit oferte cu preț și program, lecții de oriunde din România.";

const faqs = [
  { q: "Sunt eficiente meditațiile de engleză online?", a: "Da, pentru engleză sunt la fel de eficiente ca față în față, mai ales pentru conversație și pregătirea examenelor." },
  { q: "Ce îmi trebuie pentru meditații online la engleză?", a: "Un laptop, tabletă sau telefon cu cameră și microfon și o conexiune stabilă. Căștile ajută mult la ascultare." },
  { q: "Pot face pregătire pentru BAC la engleză online?", a: "Da. Profesorul lucrează cu tine pe subiectele oficiale BAC și te corectează la eseu și la proba orală." },
  { q: "Cum aleg profesorul de engleză online?", a: "Compari propunerile primite (tarif, program, experiență), discuți în chat și poți cere o primă lecție de cunoaștere." },
  { q: "Pot face meditații de engleză online și ca adult?", a: "Da, majoritatea adulților aleg online. Precizează în cerere scopul (job, interviu, conversație)." },
];

export const Route = createFileRoute("/meditatii-engleza-online")({
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
      h1="Meditații engleză online"
      intro="Engleza e materia care se învață cel mai bine online: conversație, ascultare, scriere și pregătire pentru examene, de acasă, cu profesorul potrivit oriunde ar fi el în țară."
      bullets={["Pregătire BAC proba C, Cambridge (FCE, CAE), IELTS", "Conversație și engleză pentru adulți", "Lecții pe Zoom, Google Meet sau WhatsApp video", "Profesori din toată România, nu doar din orașul tău"]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "engleza" } }}
      sections={[
    { title: "De ce merge engleza atât de bine online", body: <p>{"Lecțiile de limbă sunt despre vorbit, ascultat și scris — exact ce se face ușor pe video. Profesorul îți arată texte, audio și exerciții pe ecran, iar tu primești corecturile scrise imediat."}</p> },
    { title: "Pentru elevi: BAC și examene Cambridge", body: <p>{"Pentru BAC (proba C de competențe lingvistice) lucrezi pe subiecte oficiale, mai ales la Writing și Speaking. Pentru Cambridge și IELTS faci simulări cu timp și primești feedback pe fiecare probă."}</p> },
    { title: "Pentru adulți", body: <p>{"Conversație de la zero, engleză pentru job, interviu sau relocare, în intervale orare potrivite programului tău. Vezi și pagina dedicată meditațiilor de engleză pentru adulți."}</p> },
    { title: "Cum primești oferte", body: <p>{"Completezi gratuit cererea (nivel, scop, buget, program), iar profesorii de engleză îți trimit propuneri cu tarif și orar. Discuți cu ei în chat și alegi tu."}</p> },
      ]}
      faqs={faqs}
      related={[{ to: "/meditatii-engleza", label: "Meditații engleză" }, { to: "/meditatii-engleza-adulti", label: "Engleză pentru adulți" }, { to: "/meditatii-online", label: "Meditații online" }, { to: "/platforma-meditatii-online", label: "Platformă meditații online" }]}
    />
  ),
});

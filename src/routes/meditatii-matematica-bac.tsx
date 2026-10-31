import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-matematica-bac";
const TITLE = "Meditații matematică BAC 2026 — pregătire bacalaureat M1, M2, tehnologic";
const DESC = "Meditatii matematica BAC 2026: profesori de matematică pentru bacalaureat M_mate-info, M_șt-nat, tehnologic și pedagogic. Variante rezolvate, simulări, online sau acasă. Oferte gratuite.";

const faqs = [
  { q: "Când să încep meditațiile la matematică pentru BAC?", a: "Cât mai devreme în clasa a XII-a; pentru recuperări mari, din clasa a XI-a." },
  { q: "Diferă pregătirea pentru M1 și M2?", a: "Da. M1 (mate-info) are programa cea mai largă; M2 (științe ale naturii) și tehnologic sunt mai scurte. Precizează profilul în cerere." },
  { q: "Pot face meditații la matematică pentru BAC online?", a: "Da, cu tablă virtuală sau poze ale rezolvărilor; mulți elevi preferă online." },
  { q: "Câte ore pe săptămână sunt recomandate?", a: "De obicei 1–2 lecții pe săptămână plus exerciții acasă pe variante oficiale." },
  { q: "Cât costă meditațiile la matematică pentru BAC?", a: "Fiecare profesor propune tariful în ofertă; tu îți setezi bugetul în cerere, fără comision." },
];

export const Route = createFileRoute("/meditatii-matematica-bac")({
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
      h1="Meditații matematică BAC 2026"
      intro="La matematică, nota la BAC vine din exercițiu pe variante oficiale și din corectarea greșelilor tipice. Un profesor te duce pe programa profilului tău, capitol cu capitol, până rezolvi singur o variantă întreagă în 3 ore."
      bullets={["M_mate-info (M1), M_șt-nat (M2), tehnologic, pedagogic", "Subiectul I rapid și sigur, Subiectul II–III pas cu pas", "Simulări cu timp pe variante oficiale", "Online sau acasă, în orașul tău"]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "matematica" } }}
      sections={[
    { title: "Ce conține BAC-ul la matematică", body: <p>{"Subiectul I: 6 exerciții scurte (algebră, geometrie, trigonometrie). Subiectul al II-lea: matrice și determinanți sau legi de compoziție/polinoame. Subiectul al III-lea: analiză — funcții, derivate, integrale. Fiecare profil are programa lui."}</p> },
    { title: "Cum se lucrează la meditații", body: <p>{"Diagnostic pe o variantă, apoi capitolele unde pierzi puncte, apoi variante complete cu timp. Profesorul îți arată și cum se punctează pe barem, ca să nu pierzi puncte pe redactare."}</p> },
    { title: "Variante rezolvate", body: <p>{"Folosește arhiva noastră de subiecte BAC la matematică cu rezolvări explicate pas cu pas pentru toate profilurile, apoi lucrează cu profesorul ce nu iese."}</p> },
    { title: "Online sau acasă", body: <p>{"Matematica se face bine și online (tablă partajată, poze cu rezolvări). Dacă vrei față în față, scrie orașul și zona."}</p> },
      ]}
      faqs={faqs}
      related={[{ to: "/meditatii-matematica", label: "Meditații matematică" }, { to: "/meditatii-bac", label: "Meditații BAC" }, { to: "/meditatii-online", label: "Meditații online" }, { to: "/bac", label: "Subiecte BAC" }]}
    />
  ),
});

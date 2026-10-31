import { subjectLoader } from "@/lib/subject-stats";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";

const PAGE_URL = "https://meditatiidirect.ro/meditatii-matematica";

const TITLE = "Meditații matematică — BAC, clasa a 8-a și online | MeditatiiDirect.ro";
const DESCRIPTION = "Cauți meditații matematică? Postezi gratuit cererea pentru BAC, Evaluarea Națională sau admitere, primești propuneri cu tarif și discuți direct cu profesorii.";

const FAQS: FaqItem[] = [
  { q: "Cât costă o meditație la matematică?", a: "Prețul este stabilit de fiecare profesor în propunerea sa, nu de platformă. Menționează bugetul, durata dorită și nivelul în cerere; compară costul unei ședințe, nu doar prețul pe oră. Plata lecțiilor se stabilește direct cu profesorul." },
  { q: "Pot face meditații matematică online?", a: "Da. Bifează online în cerere și discută cu profesorul despre platforma video, tabla digitală și felul în care veți corecta exercițiile. Ai nevoie de o conexiune stabilă și de o modalitate de a trimite rezolvările tale." },
  { q: "Cum aleg cel mai bun profesor de matematică?", a: "Postează cererea, apoi compară propunerile după nivel, metodă, tarif și disponibilitate. În chat întreabă profesorul cum identifică lacunele și cum urmărește progresul; poți evalua cu 1–5 stele propunerea primită în pagina privată a cererii." },
  { q: "Cât timp înainte de BAC ar trebui să încep meditațiile la matematică?", a: "Recomandăm minim 6 luni înainte de BAC pentru recapitulare completă (algebră, analiză matematică, geometrie). Pentru admitere, verifică mai întâi programa și materiile cerute de facultatea aleasă." },
  { q: "Există meditații matematică pentru Evaluarea Națională?", a: "Poți posta o cerere pentru clasa a VIII-a și Evaluarea Națională. Precizează ce ai nevoie: ecuații, probleme de geometrie, recapitulare sau antrenament pe subiecte oficiale." },
];

export const Route = createFileRoute("/meditatii-matematica")({
  loader: subjectLoader("matematica"),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "meditatii matematica, meditatii matematica online, profesor matematica, meditatii matematica bac, meditatii matematica admitere, meditatii matematica gimnaziu, meditatii matematica liceu, meditatii matematica bucuresti, meditatii matematica cluj, meditatii matematica evaluare nationala, pregatire admitere matematica, meditatii algebra, meditatii analiza matematica, meditatii geometrie" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://meditatiidirect.ro/og/meditatii/matematica.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://meditatiidirect.ro/og/meditatii/matematica.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
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
      h1="Meditații matematică — online sau acasă"
      intro="Pe MeditatiiDirect.ro descrii o singură dată ce ai nevoie la matematică, iar profesorii îți trimit propuneri direct. Indiferent că ai nevoie de meditații matematică pentru gimnaziu, liceu, Evaluarea Națională, BAC sau admitere la facultate (UPB, ASE, Medicină, Politehnică), primești oferte cu dată, oră și tarif. Contact direct, fără comision."
      bullets={[
        "Cerere gratuită, propuneri cu tarif și program",
        "Algebră, analiză matematică, geometrie, trigonometrie",
        "Meditații online (Zoom, Meet) sau față-în-față",
        "Pregătire BAC matematică M1, M2, M_tehnologic",
        "Pregătire pentru admiterea cu probă de matematică",
        "Compari tariful și discuți direct în chat",
      ]}
      ctaPrimary={{ to: "/meditatii", search: { materie: "matematica" }, label: "Cere meditații la matematică" }}
      ctaSecondary={{ to: "/meditatii", search: { materie: "matematica", online: "1" }, label: "Cere meditații online" }}
      sections={[
        {
          title: "Meditații matematică pe nivel școlar",
          body: (
            <>
              <p>În cerere poți preciza capitolele pe care vrei să lucrezi: <strong>clasele V–VIII</strong> (numere, fracții, ecuații, geometrie plană), <strong>clasele IX–XII</strong> (funcții, derivate, integrale, geometrie analitică, combinatorică, matrici), precum și <strong>pregătire intensivă pentru BAC</strong> (M1 — Matematică-Informatică, M2 — Științele naturii, M_tehnologic).</p>
              <p>Pentru elevii de clasa a VIII-a, poți cere <Link to="/meditatii-evaluare-nationala" className="text-primary underline">meditații pentru Evaluarea Națională</Link> cu rezolvare de variante oficiale.</p>
            </>
          ),
        },
        {
          title: "Pregătire admitere la facultate",
          body: (
            <>
              <p>Pentru admiterea la <strong>Politehnica București</strong>, <strong>ASE</strong>, <strong>UTCN</strong> sau o facultate de informatică, verifică metodologia instituției. Include în cerere facultatea, programa, formatul examenului și capitolele care îți pun probleme. Nu toate facultățile au probă de matematică.</p>
              <p>Vezi <Link to="/grile-upb" className="text-primary underline">grilele UPB rezolvate</Link>, <Link to="/subiecte-admitere" className="text-primary underline">subiectele de admitere din anii anteriori</Link>.</p>
            </>
          ),
        },
        {
          title: "Meditații matematică online sau în orașul tău",
          body: (
            <>
              <p>Profesorii oferă meditații atât <Link to="/meditatii-online" className="text-primary underline">online</Link>, cât și acasă, în orașe ca <Link to="/meditatii-in/$oras" params={{ oras: "bucuresti" }} className="text-primary underline">București</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "cluj-napoca" }} className="text-primary underline">Cluj</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "iasi" }} className="text-primary underline">Iași</Link>, <Link to="/meditatii-in/$oras" params={{ oras: "timisoara" }} className="text-primary underline">Timișoara</Link>, Brașov sau Constanța.</p>
              <p>În chat stabiliți cum veți scrie și corecta rezolvările, ce materiale folosiți și durata ședinței. Alege formatul în care poți lucra constant, nu doar cel cu cel mai mic tarif.</p>
            </>
          ),
        },
      ]}
      ctaFooter={{ title: "Cauți un profesor de matematică?", body: "Precizează clasa, examenul și capitolele dificile. Primești propuneri cu tarif și program.", to: "/meditatii", label: "Trimite cererea gratuită", search: { materie: "matematica" } }}
      faqs={FAQS}
      related={[
        { to: "/meditatii-matematica-bac", label: "Meditații matematică BAC" },
        { to: "/harta-blocajelor/matematica", label: "Harta Blocajelor matematică" },
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

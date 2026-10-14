import { subjectLoader } from "@/lib/subject-stats";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-engleza";
const TITLE = "Meditații engleză online și acasă — meditator engleză pentru BAC, adulți, Cambridge";
const DESC =
  "Cauți meditator de engleză? Descrie gratuit ce ai nevoie (BAC, Cambridge, IELTS, conversație, adulți), iar profesorii îți trimit propuneri cu dată, oră și tarif. Online sau acasă, fără comision.";

const faqs = [
  { q: "Cât costă o oră de meditații la engleză?", a: "De obicei între 50 și 150 de lei pe oră, în funcție de nivel (gimnaziu, BAC, Cambridge/IELTS, business English), oraș și formatul ales. Pe MeditatiiDirect.ro îți stabilești singur bugetul în cerere, iar fiecare profesor îți trimite tariful lui în propunere — compari înainte să alegi." },
  { q: "Cum găsesc un meditator de engleză pe MeditatiiDirect.ro?", a: "Completezi gratuit o cerere, fără cont: nivelul, scopul (BAC, examen Cambridge, conversație), orașul sau online și bugetul. Profesorii de engleză îți trimit propuneri cu dată, oră, tarif și mesaj. Vorbești direct cu ei în chat și alegi tu." },
  { q: "Se pot face meditații la engleză online?", a: "Da. Engleza se predă foarte bine online, mai ales conversația, Speaking și Writing pentru examene. Bifează „online” în cerere și primești propuneri de la profesori din toată țara." },
  { q: "Există meditații de engleză pentru adulți?", a: "Da. În cerere scrie că ești adult și ce urmărești — conversație de la zero, engleză pentru job, interviu sau relocare. Profesorii îți propun un plan potrivit ritmului tău." },
  { q: "Cum mă pregătesc pentru BAC la engleză?", a: "Proba C de competențe lingvistice evaluează înțelegerea după ascultare, citirea, scrierea și vorbirea. Exersează pe subiectele oficiale din arhiva noastră BAC și lucrează cu un profesor pe Writing și Speaking, unde se pierd cele mai multe puncte." },
  { q: "Pot evalua profesorul după lecție?", a: "Da. Din pagina privată a cererii tale poți da o notă de 1–5 stele propunerii pe care ai ales-o. Evaluările vin doar de la elevi care au primit propuneri reale." },
];

const CITIES = [
  { slug: "bucuresti", name: "București" },
  { slug: "cluj-napoca", name: "Cluj-Napoca" },
  { slug: "timisoara", name: "Timișoara" },
  { slug: "iasi", name: "Iași" },
];

export const Route = createFileRoute("/meditatii-engleza")({
  loader: subjectLoader("engleza"),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://meditatiidirect.ro/og/meditatii/engleza.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: "https://meditatiidirect.ro/og/meditatii/engleza.jpg" },
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
          serviceType: "Meditații limba engleză",
          name: "Meditații engleză — MeditatiiDirect.ro",
          description: DESC,
          url: URL,
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: "https://meditatiidirect.ro" },
          areaServed: { "@type": "Country", name: "România" },
          availableLanguage: ["ro", "en"],
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații engleză — găsește meditatorul potrivit, online sau acasă"
      intro="Spui ce vrei să înveți, iar profesorii de engleză vin la tine cu propuneri. Fie că ai BAC-ul în iunie, vrei Cambridge (FCE, CAE) sau IELTS, ori ești adult și vrei să vorbești fluent la job, completezi o singură cerere gratuită și primești oferte cu dată, oră și tarif. Discuți direct cu profesorul în chat, fără intermediari și fără comision."
      bullets={[
        "Cerere gratuită, fără cont, în 2 minute",
        "Propuneri cu dată, oră și tarif — compari și alegi",
        "Chat direct cu profesorul",
        "BAC engleză, Cambridge, IELTS, TOEFL",
        "Conversație și engleză pentru adulți",
        "Online din toată țara sau acasă, în orașul tău",
        "Evaluezi în stele propunerea aleasă",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Cere ofertă la engleză", search: { materie: "engleza" } }}
      ctaSecondary={{ to: "/meditatii", label: "Meditații engleză online", search: { materie: "engleza", online: "1" } }}
      sections={[
        {
          title: "Pentru cine sunt meditațiile de engleză",
          body: (
            <div className="space-y-3">
              <p><strong>Elevi de liceu, pentru BAC.</strong> Proba C verifică ascultarea, citirea, scrierea și vorbirea. Un meditator te ajută mai ales la eseu și la proba orală. Exersează și pe <Link to="/bac/$materie" params={{ materie: "engleza" }} className="text-primary hover:underline">subiectele BAC oficiale la engleză</Link>.</p>
              <p><strong>Examene Cambridge și IELTS.</strong> Pentru FCE, CAE, CPE sau IELTS contează simulările cu timp și corectarea părților de Writing și Speaking. Scrie în cerere examenul și data la care îl dai.</p>
              <p><strong>Adulți.</strong> Engleză de la zero, conversație pentru job, interviu sau relocare. Lecțiile online se potrivesc ușor cu programul de lucru.</p>
              <p><strong>Copii și gimnaziu.</strong> Vocabular, gramatică și pregătire pentru testări. Precizează vârsta copilului în cerere.</p>
            </div>
          ),
        },
        {
          title: "Cum funcționează, în 3 pași",
          body: (
            <ol className="list-decimal space-y-2 pl-5">
              <li>Completezi cererea: nivel, scop, oraș sau online, buget.</li>
              <li>Profesorii de engleză îți trimit propuneri cu dată, oră, tarif și un mesaj.</li>
              <li>Vorbești cu ei în chat, alegi propunerea potrivită și, după lecție, o evaluezi în stele.</li>
            </ol>
          ),
        },
        {
          title: "Meditații engleză în orașul tău",
          body: (
            <div className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <Link key={c.slug} to="/meditatii/$materie/$oras" params={{ materie: "engleza", oras: c.slug }}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                  Meditații engleză {c.name}
                </Link>
              ))}
              <Link to="/preturi-meditatii/$materie" params={{ materie: "engleza" }}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                Prețuri meditații engleză
              </Link>
            </div>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-bac", label: "Meditații BAC" },
        { to: "/meditatii-romana", label: "Meditații română" },
        { to: "/meditatii-germana", label: "Meditații germană" },
        { to: "/meditatii-franceza", label: "Meditații franceză" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/cum-functioneaza", label: "Cum funcționează" },
      ]}
    />
  );
}

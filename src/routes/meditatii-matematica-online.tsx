// Pagină dedicată (indexabilă) pentru „meditatii matematica online” — căutare în creștere în Google
// Trends (nov. 2026). Are prioritate față de șablonul generic /meditatii-{materie}-online (noindex) din $.tsx.
import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { subjectLoader } from "@/lib/subject-stats";

const URL = "https://meditatiidirect.ro/meditatii-matematica-online";
const TITLE = "Meditații matematică online — EN, BAC și admitere, cu profesori verificați";
const DESC =
  "Meditații matematică online pentru Evaluarea Națională, BAC M1/M2 și admitere: tablă digitală, exerciții corectate pe loc, program flexibil. Ceri gratuit oferte de la profesori din toată țara.";

const faqs = [
  {
    q: "Merg meditațiile la matematică online la fel de bine ca față în față?",
    a: "Pentru cei mai mulți elevi, da. Cu o tablă digitală (sau o tabletă cu stylus) profesorul scrie rezolvarea pas cu pas, iar tu lucrezi pe aceeași tablă. Pentru elevii mici sau pentru cei care se concentrează greu, merită o primă ședință de probă înainte să alegi formatul.",
  },
  {
    q: "De ce am nevoie pentru o meditație la matematică online?",
    a: "Laptop sau tabletă, conexiune stabilă, căști cu microfon și un caiet. Ideal: o tabletă cu stylus sau camera telefonului îndreptată spre caiet, ca profesorul să vadă cum rezolvi, nu doar rezultatul.",
  },
  {
    q: "Pot face online pregătirea pentru Evaluarea Națională la matematică?",
    a: "Da. Precizează în cerere că ești în clasa a VIII-a și ce capitole te încurcă. Pe site găsești și modelul oficial pentru 2027 rezolvat pas cu pas, pe care îl poți lucra apoi cu profesorul.",
  },
  {
    q: "Ce program de BAC lucrez online: M1 sau M2?",
    a: "Pe cel al profilului tău: M1 la mate-info, M2 la științele naturii și la tehnologic. Scrie programa în cerere, ca să primești propuneri de la profesori care pregătesc exact acel subiect.",
  },
  {
    q: "Cât costă o meditație la matematică online?",
    a: "Tariful îl propune fiecare profesor în oferta lui, înainte să accepți. Tarifele reale din anunțurile de pe site sunt pe pagina de prețuri pentru meditații la matematică.",
  },
];

export const Route = createFileRoute("/meditatii-matematica-online")({
  loader: subjectLoader("matematica"),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://meditatiidirect.ro/og/meditatii/matematica.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      breadcrumbParent={{ name: "Meditații matematică", url: "https://meditatiidirect.ro/meditatii-matematica" }}
      h1="Meditații matematică online"
      intro="La matematică online contează să vezi cum gândește profesorul, nu doar rezultatul. Pe o tablă digitală comună, profesorul scrie rezolvarea pas cu pas, te oprește exact unde greșești și îți dă imediat un exercițiu asemănător, ca să verifici că ai înțeles."
      bullets={[
        "Evaluarea Națională: modelul oficial 2027 și subiectele din 2026",
        "BAC M1 (mate-info) și M2 (științe, tehnologic)",
        "Admitere: UPB, UTCN, ASE, informatică",
        "Tablă digitală comună, exerciții corectate pe loc",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Cere oferte gratuite", search: { materie: "matematica" } }}
      sections={[
        {
          title: "Cum arată o lecție de matematică online",
          body: (
            <>
              <p>
                Lecția începe de la ce ai greșit data trecută. Profesorul rezolvă un exemplu pe tabla comună,
                explicând fiecare pas, apoi îți dă un exercițiu asemănător pe care îl rezolvi tu, în timp ce el
                urmărește. Greșelile se văd pe loc, nu după o săptămână, la corectarea temei.
              </p>
              <p className="mt-3">
                Pentru geometrie, cere profesorului să folosească o aplicație de desen (GeoGebra sau tabla
                digitală): figurile desenate corect fac jumătate din problemă.
              </p>
            </>
          ),
        },
        {
          title: "Evaluarea Națională 2027 la matematică",
          body: (
            <p>
              Proba de matematică este pe 24 iunie 2027, iar simularea între 16 și 18 martie. Lucrează întâi{" "}
              <Link to="/subiecte-evaluare-nationala/$slug" params={{ slug: "model-2027-matematica" }} className="text-primary underline">
                modelul oficial 2027, rezolvat pas cu pas
              </Link>
              , apoi spune-i profesorului ce itemi ai greșit. Așa ședințele merg direct pe capitolele care te
              costă puncte.
            </p>
          ),
        },
        {
          title: "BAC și admitere",
          body: (
            <p>
              Pentru BAC, profesorul lucrează pe programa ta (M1 sau M2) și pe subiectele din anii trecuți. Pentru
              admitere, cere-i să lucreze pe subiectele facultății vizate; găsești{" "}
              <Link to="/subiecte-bac" className="text-primary underline">subiectele de BAC cu rezolvări</Link>{" "}
              și{" "}
              <Link to="/grile-upb" className="text-primary underline">grilele UPB</Link> direct pe site.
            </p>
          ),
        },
        {
          title: "Cum primești oferte",
          body: (
            <p>
              Completezi gratuit cererea (clasa, examenul, capitolele grele, programul și bugetul), iar profesorii de
              matematică îți trimit propuneri cu tarif și program. Discutați în chat înainte să alegi și nu plătești
              niciun comision platformei.
            </p>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-matematica-bac", label: "Meditații matematică BAC" },
        { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/preturi-meditatii/matematica", label: "Prețuri meditații matematică" },
      ]}
    />
  ),
});

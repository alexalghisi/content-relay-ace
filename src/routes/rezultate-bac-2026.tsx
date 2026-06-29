import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/rezultate-bac-2026";
const TITLE = "Rezultate BAC 2026 — listă verificare + contestații | MeditatiiDirect";
const DESC = "Rezultate Bacalaureat 2026 pe edu.ro: cum verifici nota, calendarul contestațiilor și ce faci dacă nu ai luat. Profesori verificați pentru sesiunea de toamnă.";

const FAQS = [
  { q: "Când apar rezultatele BAC 2026?", a: "Rezultatele inițiale ale Bacalaureatului 2026 se publică pe bacalaureat.edu.ro conform calendarului Ministerului Educației, în prima săptămână după ultima probă scrisă. Notele finale (după contestații) apar la circa o săptămână distanță." },
  { q: "Cum verific rezultatul BAC 2026?", a: "Intri pe bacalaureat.edu.ro, alegi județul și școala de proveniență, apoi cauți după codul unic primit la examen sau după inițiala numelui. Lista este publică și nominală." },
  { q: "Cum depun contestație la BAC 2026?", a: "Contestația se depune online pe portalul Ministerului Educației, în intervalul oficial anunțat (de regulă 48h de la afișarea notelor). Nota finală după contestație poate fi mai mică sau mai mare decât cea inițială." },
  { q: "Ce fac dacă nu am luat BAC-ul 2026?", a: "Te poți înscrie la sesiunea de toamnă (august-septembrie) — ai timp de 6 săptămâni de pregătire intensivă. Pe MeditatiiDirect găsești profesori verificați pentru orice materie din BAC, cu meditații online sau la domiciliu." },
  { q: "Cât trebuie să iei la BAC ca să intri la facultate?", a: "Pentru promovare minim 6 la fiecare probă scrisă și media ≥ 6. La admitere însă fiecare facultate are praguri proprii: medicina 8.5+, ASE 8+, drept 7.5+. Verifică pe site-ul facultății vizate." },
];

export const Route = createFileRoute("/rezultate-bac-2026")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "rezultate bac 2026, bacalaureat 2026 rezultate, rezultate bacalaureat 2026, contestatii bac 2026, edu.ro rezultate, bac 2026 note, sesiunea toamna bac 2026, meditatii bac toamna" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Rezultate BAC 2026 — verifică nota și ce urmează"
      intro="Notele Bacalaureatului 2026 se publică oficial pe bacalaureat.edu.ro. Iată cum verifici rezultatul, cum depui contestația și — dacă nu ai luat — cum te pregătești rapid pentru sesiunea de toamnă cu un profesor verificat."
      bullets={[
        "Pași clari pentru verificarea notei pe portalul oficial",
        "Calendar contestații + ce se întâmplă cu nota finală",
        "Plan de pregătire 6 săptămâni pentru sesiunea de toamnă",
        "Profesori verificați la toate materiile de BAC",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Pregătire BAC toamna 2026" }}
      ctaSecondary={{ to: "/variante-bacalaureat", label: "Subiecte BAC din anii anteriori" }}
      sections={[
        { title: "Unde apar rezultatele BAC 2026", body: <p>Rezultatele oficiale Bacalaureat 2026 se publică pe portalul Ministerului Educației la <a className="text-primary underline" href="https://bacalaureat.edu.ro" rel="noopener nofollow">bacalaureat.edu.ro</a>. Lista este nominală, organizată pe județe și unități de învățământ.</p> },
        { title: "Ce faci dacă nu ai luat BAC-ul", body: <p>Te înscrii imediat la <strong>sesiunea de toamnă</strong> (august-septembrie 2026). Ai 6 săptămâni de pregătire intensivă — suficient pentru o creștere de 2-3 puncte cu un profesor bun. Pe <a className="text-primary underline" href="/meditatii">MeditatiiDirect</a> găsești profesori verificați pentru fiecare materie.</p> },
        { title: "Contestații BAC 2026", body: <p>Depui contestația online în 48h de la afișarea notelor. Comisia recorectează lucrarea integral — nota finală poate fi mai mare <em>sau</em> mai mică decât cea inițială. Decizia este definitivă.</p> },
      ]}
      faqs={FAQS}
      related={[
        { to: "/meditatii-bac", label: "Pregătire BAC" },
        { to: "/variante-bacalaureat", label: "Variante & subiecte BAC 2010-2026" },
        { to: "/admitere", label: "Admitere facultate 2026" },
        { to: "/meditatii-matematica", label: "Meditații matematică BAC" },
        { to: "/meditatii-romana", label: "Meditații română BAC" },
      ]}
    />
  ),
});

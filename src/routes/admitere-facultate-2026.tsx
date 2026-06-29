import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/admitere-facultate-2026";
const TITLE = "Admitere facultate 2026 — calendar, praguri, pregătire | MeditatiiDirect";
const DESC = "Admitere facultate 2026: calendar pe universități, medii minime, subiecte de pregătire și profesori verificați pentru medicină, politehnică, ASE, drept.";

const FAQS = [
  { q: "Când începe admiterea la facultate în 2026?", a: "Majoritatea universităților publice țin admitere în iulie 2026 (sesiunea de vară) și septembrie 2026 (sesiunea de toamnă). Datele exacte diferă pe universitate — verifică pe site-ul oficial." },
  { q: "Ce medie îmi trebuie la admitere la medicină 2026?", a: "Pragul de admitere la Medicină (UMF) este de obicei 8.5-9.5 la examen, în funcție de universitate și specializare. Concurența este 4-7 candidați pe loc. Începe pregătirea cu minimum 6 luni înainte." },
  { q: "Cum mă pregătesc rapid pentru admiterea 2026?", a: "Rezolvă grilele oficiale ale facultății vizate, lucrează cronometrat și fă săptămânal o ședință cu un profesor de admitere. Pe MeditatiiDirect găsești profesori specializați pe fiecare facultate." },
  { q: "Pot da admitere fără BAC?", a: "Nu — diploma de Bacalaureat este obligatorie pentru înscriere. Dacă ai picat BAC-ul în iunie, dă sesiunea de toamnă (august-septembrie) și apoi admiterea de toamnă." },
];

export const Route = createFileRoute("/admitere-facultate-2026")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "admitere facultate 2026, admitere medicina 2026, admitere politehnica 2026, admitere ase 2026, admitere drept 2026, meditatii admitere, pregatire admitere facultate, grile admitere medicina 2026, examen admitere 2026" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Admitere facultate 2026 — calendar, praguri și pregătire"
      intro="Tot ce trebuie să știi pentru admiterea la facultate în 2026: calendar pe universități, medii minime, subiecte de pregătire și profesori verificați pe MeditatiiDirect pentru medicină, politehnică, ASE, drept și alte facultăți."
      bullets={[
        "Calendar admitere 2026 pe principalele universități",
        "Praguri reale de admitere pe specializări",
        "Grile oficiale + subiecte pentru pregătire",
        "Profesori specializați pe fiecare facultate",
      ]}
      ctaPrimary={{ to: "/admitere", label: "Vezi facultățile" }}
      ctaSecondary={{ to: "/meditatii-admitere-medicina", label: "Pregătire medicină" }}
      sections={[
        { title: "Cele mai căutate facultăți la admiterea 2026", body: <ul className="list-disc pl-5 space-y-1"><li><a className="text-primary underline" href="/meditatii-admitere-medicina">Medicină (UMF București, Cluj, Iași, Timișoara)</a></li><li><a className="text-primary underline" href="/meditatii-admitere-politehnica">Politehnică (UPB, UTCN, UPT)</a></li><li><a className="text-primary underline" href="/meditatii-admitere-ase">ASE București</a></li><li><a className="text-primary underline" href="/meditatii-admitere-drept">Drept (București, Cluj, Iași)</a></li></ul> },
        { title: "Cum reușești la admitere", body: <p>Strategia câștigătoare: alege facultatea cu minim 4-6 luni înainte, rezolvă subiectele oficiale ale ultimilor 5 ani, fă săptămânal ședințe cu un profesor specializat pe acea facultate. <a className="text-primary underline" href="/meditatii">Caută aici profesor</a>.</p> },
      ]}
      faqs={FAQS}
      related={[
        { to: "/grile-medicina", label: "Grile medicină" },
        { to: "/grile-upb", label: "Grile Politehnică" },
        { to: "/subiecte-admitere", label: "Subiecte admitere" },
        { to: "/meditatii-admitere-medicina", label: "Meditații admitere medicină" },
        { to: "/meditatii-admitere-politehnica", label: "Meditații admitere politehnică" },
        { to: "/rezultate-bac-2026", label: "Rezultate BAC 2026" },
      ]}
    />
  ),
});

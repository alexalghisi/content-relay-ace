import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { modeleVerificate } from "@/lib/bac-verificare";
import { getBacSubject } from "@/data/bac-catalog";

const STORAGE = "https://gmgcufdfwwvfnnzfazae.supabase.co/storage/v1/object/public/bac-pdfs/";
const MODELE_2027 = modeleVerificate(2027);

const URL = "https://meditatiidirect.ro/modele-subiecte-bac-2027";
const IMAGE = "https://meditatiidirect.ro/og-bac.jpg";
const TITLE = "Modele BAC 2027: subiecte PDF, bareme și rezolvări | MeditatiiDirect.ro";
const DESC =
  "Descarcă modelele oficiale BAC 2027 și baremele PDF pe materii. Rezolvare informatică pas cu pas, cu editor și rulare online Python/C++.";
const OFICIAL = "https://subiecte.edu.ro/2027/";

const FAQS = [
  {
    q: "Au apărut modelele de subiecte pentru BAC 2027?",
    a: "Da. Modelele de subiecte pentru Bacalaureat 2027, cu baremele de evaluare, au fost publicate de Ministerul Educației la începutul lunii noiembrie 2026 pe site-ul oficial subiecte.edu.ro.",
  },
  {
    q: "La ce materii există modele de subiecte BAC 2027?",
    a: "Există modele la limba și literatura română (real și uman), matematică (mate-info, științele naturii, tehnologic, pedagogic), istorie și la probele la alegere: geografie, informatică, biologie, fizică, chimie, logică, psihologie, sociologie, filosofie și economie.",
  },
  {
    q: "Modelul de subiect este subiectul care se dă la examen?",
    a: "Nu. Modelul arată structura probei, tipurile de cerințe și felul în care se acordă punctele în barem. Subiectele de la simulare și de la examen sunt diferite, dar respectă aceeași structură.",
  },
  {
    q: "Când folosesc modelele: înainte sau după simulare?",
    a: "Înainte. Simularea BAC 2027 are loc în 22–25 martie, iar modelul îți arată din noiembrie ce formă va avea proba. Lucrează-l cronometrat, în trei ore, apoi corectează-te cu baremul.",
  },
  {
    q: "De unde iau și subiectele din anii trecuți?",
    a: "Arhiva oficială este pe subiecte.edu.ro. Pe MeditatiiDirect găsești subiectele BAC din anii trecuți grupate pe materii, cu barem, iar pentru o parte dintre ele și rezolvări explicate pas cu pas.",
  },
];

const MATERII: { proba: string; modele: string; to?: string; label?: string }[] = [
  {
    proba: "Limba și literatura română (E.a)",
    modele: "profil real și profil uman",
    to: "/subiecte-bac/materie/romana",
    label: "Subiecte BAC română",
  },
  {
    proba: "Matematică (E.c)",
    modele: "mate-info, științele naturii, tehnologic și pedagogic",
    to: "/subiecte-bac/materie/matematica",
    label: "Subiecte BAC matematică",
  },
  {
    proba: "Istorie (E.c)",
    modele: "un model cu barem",
    to: "/subiecte-bac/materie/istorie",
    label: "Subiecte BAC istorie",
  },
  {
    proba: "Informatică (E.d)",
    modele: "mate-info și științele naturii",
    to: "/subiecte-bac/materie/informatica",
    label: "Subiecte BAC informatică",
  },
  {
    proba: "Biologie (E.d)",
    modele: "anatomie și fiziologie umană; biologie vegetală și animală",
    to: "/subiecte-bac/materie/biologie",
    label: "Subiecte BAC biologie",
  },
  {
    proba: "Chimie (E.d)",
    modele: "chimie organică și chimie anorganică",
    to: "/subiecte-bac/materie/chimie",
    label: "Subiecte BAC chimie",
  },
  {
    proba: "Fizică (E.d)",
    modele: "filiera teoretică și filiera tehnologică",
    to: "/subiecte-bac/materie/fizica",
    label: "Subiecte BAC fizică",
  },
  {
    proba: "Geografie (E.d)",
    modele: "un model cu barem",
    to: "/subiecte-bac/materie/geografie",
    label: "Subiecte BAC geografie",
  },
  { proba: "Socio-umane (E.d)", modele: "logică, psihologie, sociologie, filosofie și economie" },
];

export const Route = createFileRoute("/modele-subiecte-bac-2027")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "modele subiecte bac 2027, model subiect bac 2027, modele bac 2027 matematica, modele bac 2027 romana, model subiect istorie bac 2027, subiecte bac 2027, barem model bac 2027, modele bacalaureat 2027",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Modele de subiecte BAC 2027: lista pe materii și cum le folosești",
          description: DESC,
          image: [IMAGE],
          datePublished: "2026-11-13",
          dateModified: "2026-11-21",
          inLanguage: "ro",
          mainEntityOfPage: URL,
          author: {
            "@type": "Organization",
            name: "MeditatiiDirect.ro",
            url: "https://meditatiidirect.ro",
          },
          publisher: {
            "@type": "Organization",
            name: "MeditatiiDirect.ro",
            logo: {
              "@type": "ImageObject",
              url: "https://meditatiidirect.ro/apple-touch-icon.png",
            },
          },
        }),
      },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Modele de subiecte BAC 2027"
      intro="Ministerul Educației a publicat la începutul lunii noiembrie 2026 modelele de subiecte și baremele pentru Bacalaureat 2027. Mai jos ai lista pe materii, linkul către sursa oficială și un mod de lucru care te ajută până la simularea din martie."
      bullets={[
        "Modele cu barem la română, matematică, istorie și probele la alegere",
        "Sursa oficială: subiecte.edu.ro",
        "Simularea BAC 2027: 22–25 martie; probele scrise: 14–18 iunie",
        "Subiecte din anii trecuți, cu barem, pentru fiecare materie",
      ]}
      ctaPrimary={{ to: "/meditatii-bac", label: "Meditații BAC 2027" }}
      ctaSecondary={{ to: "/subiecte-bac", label: "Subiecte BAC cu barem" }}
      sections={[
        {
          title: "Lista modelelor BAC 2027, pe probe",
          body: (
            <div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="py-2 pr-3">Proba</th>
                    <th className="py-2 pr-3">Modele publicate</th>
                    <th className="py-2">Exersează pe</th>
                  </tr>
                </thead>
                <tbody>
                  {MATERII.map((m) => (
                    <tr key={m.proba} className="border-b border-border align-top">
                      <th scope="row" className="py-2 pr-3 text-left font-semibold">
                        {m.proba}
                      </th>
                      <td className="py-2 pr-3 text-muted-foreground">{m.modele}</td>
                      <td className="py-2">
                        {m.to ? (
                          <a className="text-primary underline" href={m.to}>
                            {m.label}
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {MODELE_2027.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold">
                    Modelele oficiale, găzduite și verificate la noi ({MODELE_2027.length} de fișiere)
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Fiecare PDF a fost citit și verificat după conținut (emitent, an, antet „Model”).
                  </p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {MODELE_2027.map((m) => (
                      <li key={m.subiect} className="rounded-lg border border-border bg-card p-3 text-sm">
                        <p className="font-medium">
                          {getBacSubject(m.materie)?.name ?? m.materie}
                          {m.profil ? ` — ${m.profil}` : ""}
                        </p>
                        <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                          <a className="text-primary underline" href={STORAGE + m.subiect} target="_blank" rel="noopener">
                            Subiect (PDF)
                          </a>
                          {m.barem && (
                            <a className="text-primary underline" href={STORAGE + m.barem} target="_blank" rel="noopener">
                              Barem (PDF)
                            </a>
                          )}
                          <a className="text-primary underline" href={`/bac/${m.materie}/2027/model`}>
                            Deschide în pagină
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm">
                    <a className="font-medium text-primary underline" href="/rezolvari/informatica/2027/model">
                      Rezolvarea completă a modelului de informatică (mate-info, C/C++)
                    </a>{" "}
                    — explicată pas cu pas, cu codul testat pe care îl poți rula online pe platformă.
                  </p>
                </div>
              )}
              <p className="mt-3 text-xs text-muted-foreground">
                Modelele și baremele se descarcă de pe site-ul oficial al Ministerului Educației:{" "}
                <a
                  className="text-primary underline"
                  href={OFICIAL}
                  rel="noopener nofollow"
                  target="_blank"
                >
                  subiecte.edu.ro/2027
                </a>
                . Lista de mai sus urmează anunțurile publicate de{" "}
                <a
                  className="text-primary underline"
                  href="https://www.edupedu.ro/tag/modele-subiecte-bacalaureat-2027/"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  Edupedu
                </a>
                . Există modele și pentru limba română la secțiile cu predare în limba maghiară și
                pentru probele de competențe.
              </p>
            </div>
          ),
        },
        {
          title: "Cum lucrezi un model de subiect",
          body: (
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                <strong>Cronometrat, dintr-o bucată.</strong> Proba scrisă durează trei ore;
                lucrează modelul în aceleași condiții, fără telefon și fără caiet.
              </li>
              <li>
                <strong>Corectează-te cu baremul, nu „din ochi”.</strong> Baremul arată pentru ce se
                dau punctele; notează ce ai pierdut la fiecare cerință.
              </li>
              <li>
                <strong>Fă lista capitolelor slabe.</strong> Punctele pierdute se grupează, de
                obicei, pe două-trei capitole. De acolo începe recapitularea.
              </li>
              <li>
                <strong>Treci la variantele reale.</strong> După model, lucrează{" "}
                <a className="text-primary underline" href="/subiecte-bac">
                  subiectele date în anii trecuți
                </a>{" "}
                la sesiunile de vară, toamnă și la simulări.
              </li>
              <li>
                <strong>Repetă înainte de simulare.</strong> Reia modelul în februarie și compară
                punctajul cu cel din noiembrie.
              </li>
            </ol>
          ),
        },
        {
          title: "Nu îți iese un tip de cerință?",
          body: (
            <p>
              Postează gratuit o cerere pe{" "}
              <a className="text-primary underline" href="/meditatii">
                MeditatiiDirect
              </a>{" "}
              și primești propuneri de la profesori pentru materia ta, online sau la domiciliu. Poți
              lucra și cu{" "}
              <a className="text-primary underline" href="/profesor-ai">
                Profesorul AI
              </a>
              , la orice oră: îi încarci subiectul și îl parcurgeți împreună, pas cu pas.
            </p>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-bac-2027", label: "Calendar BAC 2027" },
        { to: "/simulare-bacalaureat", label: "Simulare BAC 2027" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/rezolvari", label: "Rezolvări explicate" },
        {
          to: "/modele-subiecte-evaluare-nationala-2027",
          label: "Modele Evaluarea Națională 2027",
        },
      ]}
    />
  ),
});

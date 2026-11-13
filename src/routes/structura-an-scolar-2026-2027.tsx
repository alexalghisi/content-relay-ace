import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { CalendarExamen } from "@/components/calendar-examen";
import { AN_SCOLAR_2026_2027, SURSE_AN_SCOLAR } from "@/data/an-scolar-2026-2027";

const URL = "https://meditatiidirect.ro/structura-an-scolar-2026-2027";
const TITLE = "Structura anului școlar 2026-2027: vacanțe, module, ultima zi de școală";
const DESC =
  "Vacanțe școlare 2026-2027: vacanța de iarnă 23 decembrie – 10 ianuarie, vacanța mobilă din februarie, vacanța de primăvară 24 aprilie – 4 mai și când se termină școala.";

const FAQS = [
  {
    q: "Când începe vacanța de iarnă 2026?",
    a: "Vacanța de iarnă începe miercuri, 23 decembrie 2026, și se încheie duminică, 10 ianuarie 2027. Ultima zi de cursuri este marți, 22 decembrie, iar elevii revin la școală luni, 11 ianuarie 2027.",
  },
  {
    q: "Când este vacanța de schi (vacanța mobilă) în 2027?",
    a: "Vacanța mobilă durează o săptămână și este stabilită de inspectoratul școlar al fiecărui județ în intervalul 15 februarie – 7 martie 2027. Întreabă la școală sau verifică site-ul inspectoratului pentru săptămâna aleasă în județul tău.",
  },
  {
    q: "Când este vacanța de primăvară 2027?",
    a: "Vacanța de primăvară este între sâmbătă, 24 aprilie, și marți, 4 mai 2027. Cursurile se reiau miercuri, 5 mai 2027.",
  },
  {
    q: "Când se termină școala în 2027?",
    a: "Pentru majoritatea elevilor, cursurile se încheie vineri, 18 iunie 2027. Clasa a XII-a termină pe 4 iunie, clasa a VIII-a pe 11 iunie, iar liceul tehnologic (clasele neterminale) și învățământul profesional pe 25 iunie 2027.",
  },
  {
    q: "Câte module are anul școlar 2026-2027?",
    a: "Anul școlar are cinci module de cursuri, separate de cinci vacanțe, și 36 de săptămâni de cursuri pentru majoritatea claselor. Structura este stabilită prin Ordinul ministrului educației nr. 3.194/2026.",
  },
  {
    q: "Se fac cursuri pe 5 octombrie?",
    a: "Nu. Luni, 5 octombrie 2026, de Ziua internațională a educației, nu s-au organizat cursuri, conform ordinului privind structura anului școlar.",
  },
];

export const Route = createFileRoute("/structura-an-scolar-2026-2027")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "structura an scolar 2026-2027, vacante scolare 2026-2027, vacanta de iarna 2026, vacanta de schi 2027, vacanta mobila februarie 2027, vacanta de primavara 2027, cand se termina scoala 2027, module an scolar, calendar scolar 2026-2027",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Structura anului școlar 2026-2027: module, vacanțe și ultima zi de cursuri",
          description: DESC,
          datePublished: "2026-11-13",
          dateModified: "2026-11-13",
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
      h1="Structura anului școlar 2026-2027: vacanțe și module"
      intro="Toate vacanțele și modulele anului școlar 2026-2027, cu datele din ordinul Ministerului Educației: vacanța de iarnă, vacanța mobilă din februarie, vacanța de primăvară și ziua în care se termină școala pentru fiecare clasă."
      bullets={[
        "Vacanța de iarnă: 23 decembrie 2026 – 10 ianuarie 2027",
        "Vacanța mobilă: o săptămână între 15 februarie și 7 martie 2027",
        "Vacanța de primăvară: 24 aprilie – 4 mai 2027",
        "Ultima zi de cursuri: 18 iunie 2027 (4 iunie pentru a XII-a, 11 iunie pentru a VIII-a)",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Cere ofertă de meditații" }}
      ctaSecondary={{ to: "/calendar-bac-2027", label: "Calendar BAC 2027" }}
      sections={[
        {
          title: "Calendarul anului școlar 2026-2027",
          body: <CalendarExamen grupe={AN_SCOLAR_2026_2027} surse={SURSE_AN_SCOLAR} />,
        },
        {
          title: "Cum se leagă vacanțele de examene",
          body: (
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>Vacanța de iarnă</strong> este ultima pauză lungă înainte de simulări:
                simularea Evaluării Naționale are loc în 16–18 martie, iar{" "}
                <a className="text-primary underline" href="/simulare-bacalaureat">
                  simularea BAC
                </a>{" "}
                în 22–25 martie 2027.
              </li>
              <li>
                <strong>Vacanța mobilă</strong> din februarie cade cu câteva săptămâni înainte de
                simulări — bună pentru variante complete, cronometrate.
              </li>
              <li>
                <strong>Probele de competențe</strong> de la BAC (12–23 aprilie 2027) se dau în
                timpul cursurilor, chiar înainte de vacanța de primăvară.
              </li>
              <li>
                <strong>Clasa a XII-a</strong> termină cursurile pe 4 iunie, cu zece zile înainte de
                prima probă scrisă (14 iunie); <strong>clasa a VIII-a</strong> termină pe 11 iunie,
                iar Evaluarea Națională începe pe 22 iunie.
              </li>
            </ul>
          ),
        },
        {
          title: "Școala Altfel și Săptămâna Verde",
          body: (
            <p>
              Ambele programe rămân în anul școlar 2026-2027. Fiecare durează cinci zile lucrătoare
              consecutive, se desfășoară între 7 septembrie 2026 și 23 aprilie 2027, iar perioada
              exactă o stabilește fiecare școală. Cele două programe se organizează în module
              diferite.
            </p>
          ),
        },
        {
          title: "Folosește vacanțele pentru recuperat materia",
          body: (
            <p>
              Dacă ai rămas în urmă la un capitol, vacanța e momentul în care îl poți relua fără
              presiunea temelor. Postează gratuit o cerere pe{" "}
              <a className="text-primary underline" href="/meditatii">
                MeditatiiDirect
              </a>{" "}
              și primești propuneri de la profesori, online sau la domiciliu, ori verifică singur ce
              îți lipsește cu{" "}
              <a className="text-primary underline" href="/scaner-lacune">
                Scanerul de lacune
              </a>
              .
            </p>
          ),
        },
      ]}
      faqs={FAQS}
      related={[
        { to: "/calendar-bac-2027", label: "Calendar BAC 2027" },
        { to: "/calendar-evaluare-nationala-2027", label: "Calendar Evaluarea Națională 2027" },
        { to: "/simulare-bacalaureat", label: "Simulare BAC 2027" },
        { to: "/simulare-evaluare-nationala-2027", label: "Simulare Evaluarea Națională 2027" },
        { to: "/admitere-liceu-2027", label: "Admitere liceu 2027" },
      ]}
    />
  ),
});

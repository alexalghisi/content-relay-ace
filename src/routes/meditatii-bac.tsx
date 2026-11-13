import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatii-bac";
const TITLE = "Meditatii BAC 2027 la toate materiile, online sau acasă";
const DESC =
  "Meditatii BAC 2027 la română, matematică, biologie, chimie, fizică, informatică, istorie și geografie. Postezi gratuit cererea și primești oferte.";

const faqs = [
  {
    q: "Cât costă o oră de meditații BAC?",
    a: "Fiecare profesor își stabilește tariful și îl vezi în propunerea lui înainte să accepți. Tarifele reale din anunțurile de pe site, pe materii, sunt pe pagina Prețuri meditații.",
  },
  {
    q: "Câte ore de meditații BAC sunt necesare?",
    a: "Depinde de nivelul de pornire și de nota țintă. De obicei se lucrează una-două ședințe pe săptămână la materia de examen, plus variante rezolvate singur între ședințe. Profesorul îți propune ritmul după prima ședință.",
  },
  {
    q: "Pot face meditații BAC online?",
    a: "Da. Ședința se ține pe Zoom sau Google Meet, cu tablă comună pentru exerciții, și nu pierzi timp pe drum. Spune în cerere că vrei online și primești propuneri din toată țara.",
  },
];

export const Route = createFileRoute("/meditatii-bac")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Meditații BAC 2027"
      intro="Profesori verificați pentru bacalaureatul 2027, la proba ta: simularea e în 22–25 martie, probele scrise în 14–18 iunie 2027. Toate materiile, toate filierele — real, uman, tehnologic. Online sau la domiciliu."
      bullets={[
        "Matematică M_mate-info, M_șt-nat, M_pedagogic, M_tehnologic",
        "Română — proba scrisă și orală",
        "Biologie, fizică, chimie, geografie, istorie, informatică",
        "Limbi moderne — engleză, franceză, germană, italiană",
        "Plan personalizat de pregătire",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Caută profesor BAC" }}
      pdfs={[
        { href: "/resurse/bac/matematica-m1/2025", title: "Simulare Matematică M_mate-info" },
        { href: "/resurse/bac/romana/2025", title: "Simulare Română" },
        { href: "/resurse/bac/biologie/2025", title: "Simulare Biologie" },
        { href: "/resurse/bac/fizica/2025", title: "Simulare Fizică" },
        { href: "/resurse/bac/informatica/2025", title: "Simulare Informatică" },
        { href: "/resurse/bac/istorie/2025", title: "Simulare Istorie" },
      ]}
      faqs={faqs}
      related={[
        { to: "/calendar-bac-2027", label: "Calendar BAC 2027" },
        { to: "/meditatii-matematica-bac", label: "Meditații matematică BAC" },
        { to: "/meditatii-romana-bac", label: "Meditații română BAC" },
        { to: "/simulare-bacalaureat", label: "Simulare BAC 2027" },
        { to: "/variante-bacalaureat", label: "Variante BAC" },
        { to: "/subiecte-bac", label: "Subiecte BAC" },
        { to: "/meditatii-matematica", label: "Meditații matematică" },
        { to: "/meditatii-romana", label: "Meditații română" },
      ]}
    />
  ),
});

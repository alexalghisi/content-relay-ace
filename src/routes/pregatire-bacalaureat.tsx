import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/pregatire-bacalaureat")(
  seoPage({
    path: "/pregatire-bacalaureat",
    title: "Pregătire Bacalaureat 2027 — plan lună cu lună până în iunie",
    description:
      "Cum te pregătești pentru Bacalaureat 2027: plan lună cu lună până la probele din 14–18 iunie, simularea din martie, subiecte oficiale gratuite și profesori verificați.",
    h1: "Pregătire Bacalaureat 2027: planul de până în iunie",
    intro:
      "Un plan realist de pregătire pentru BAC 2027, materie cu materie, plus profesori care lucrează pe subiectele oficiale din anii anteriori. Alege profesorul, stabilește ritmul și urmărește progresul prin simulări lunare.",
    bullets: [
      "Profesori pentru toate probele: română, matematică, istorie, biologie, fizică, chimie, informatică, geografie",
      "Plan de pregătire pe 8 luni, cu recapitulare și simulări",
      "Subiecte și bareme oficiale disponibile gratuit pe site",
      "Lecții online sau la domiciliu, în toată România",
      "Tariful îl vezi în propunere; plătești direct profesorului",
      "Discuți cu profesorul înainte să începi",
    ],
    faqs: [
      { q: "Când trebuie să încep pregătirea pentru Bacalaureat?", a: "Ideal în septembrie–octombrie ale clasei a XII-a, cu două ședințe pe săptămână la materia cea mai slabă. O pregătire începută în martie poate salva promovarea, dar rareori ajunge pentru note peste 9." },
      { q: "Câte ore de meditații sunt necesare pentru BAC?", a: "Nu există un număr valabil pentru toți: depinde de nivelul de pornire, de nota țintă și de cât lucrezi singur. Un profesor îți poate estima ritmul după o primă ședință în care vede ce știi." },
      { q: "Cât costă pregătirea de Bacalaureat?", a: "Fiecare profesor își stabilește tariful și îl vezi în propunerea lui înainte să accepți. Tarifele reale din anunțurile de pe site, pe materii și orașe, sunt pe pagina Prețuri meditații." },
      { q: "Ce probe se dau la Bacalaureat 2027?", a: "Limba și literatura română (proba scrisă obligatorie), proba obligatorie a profilului (matematică sau istorie), o probă la alegere din profil (biologie, fizică, chimie, informatică, geografie, logică, psihologie, sociologie, economie, filosofie), plus competențele lingvistice și digitale." },
      { q: "Unde găsesc subiecte și bareme oficiale?", a: "Pe MeditatiiDirect.ro găsești arhiva de subiecte și bareme de Bacalaureat, pe materii și pe ani, găzduită direct la noi, în format PDF, gratuit." },
      { q: "Merită pregătirea în grupă?", a: "Da, dacă elevii au un nivel apropiat: costul se împarte și grupa motivează. Pentru goluri mari, ședințele individuale sunt de obicei mai eficiente la început." },
    ],
    related: [
      { to: "/meditatii-bac", label: "Meditații BAC 2027" },
      { to: "/calendar-bac-2027", label: "Calendar BAC 2027" },
      { to: "/variante-bacalaureat", label: "Variante bacalaureat" },
      { to: "/subiecte-bac-2026", label: "Subiecte BAC 2026" },
      { to: "/simulare-bacalaureat", label: "Simulare bacalaureat" },
      { to: "/preturi-meditatii", label: "Prețuri meditații" },
    ],
    ctaPrimary: { to: "/meditatii", label: "Găsește profesor pentru BAC" },
  }),
);

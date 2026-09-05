import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/pregatire-bacalaureat")(
  seoPage({
    path: "/pregatire-bacalaureat",
    title: "Pregătire Bacalaureat 2026 — profesori verificați",
    description:
      "Pregătire Bacalaureat 2026 cu profesori verificați: română, matematică, istorie, biologie, informatică. Plan pe 8 luni, simulări, 50–150 lei/oră, fără comision.",
    h1: "Pregătire Bacalaureat 2026 cu profesori verificați",
    intro:
      "Un plan realist de pregătire pentru BAC 2026, materie cu materie, plus profesori care lucrează pe subiectele oficiale din anii anteriori. Alege profesorul, stabilește ritmul și urmărește progresul prin simulări lunare.",
    bullets: [
      "Profesori pentru toate probele: română, matematică, istorie, biologie, fizică, chimie, informatică, geografie",
      "Plan de pregătire pe 8 luni, cu recapitulare și simulări",
      "Subiecte și bareme oficiale disponibile gratuit pe site",
      "Lecții online sau la domiciliu, în toată România",
      "Tarife între 50 și 150 lei/oră, fără comision",
      "Ședință de probă înainte de angajament",
    ],
    faqs: [
      { q: "Când trebuie să încep pregătirea pentru Bacalaureat?", a: "Ideal în septembrie–octombrie ale clasei a XII-a, cu două ședințe pe săptămână la materia cea mai slabă. O pregătire începută în martie poate salva promovarea, dar rareori ajunge pentru note peste 9." },
      { q: "Câte ore de meditații sunt necesare pentru BAC?", a: "În medie 60–100 de ore pe materie pentru un salt de la nota 6 la nota 9. Elevii care vizează media 9,50+ lucrează suplimentar 4–6 ore săptămânal individual, pe variante oficiale." },
      { q: "Cât costă pregătirea de Bacalaureat?", a: "Între 50 și 150 lei/oră, în funcție de materie, oraș și experiența profesorului. O pregătire de 8 luni la o materie, cu două ședințe de 90 de minute pe săptămână, costă în medie 1.000–1.600 lei pe lună." },
      { q: "Ce materii se dau la Bacalaureat 2026?", a: "Limba și literatura română (proba scrisă obligatorie), proba obligatorie a profilului (matematică sau istorie), o probă la alegere din profil (biologie, fizică, chimie, informatică, geografie, logică, psihologie, sociologie, economie, filosofie), plus competențele lingvistice și digitale." },
      { q: "Unde găsesc subiecte și bareme oficiale?", a: "Pe MeditatiiDirect.ro găsești arhiva de subiecte și bareme de Bacalaureat, pe materii și pe ani, găzduită direct la noi, în format PDF, gratuit." },
      { q: "Merită pregătirea în grupă?", a: "Da, dacă elevii au nivel apropiat. Costul pe elev scade cu 30–40%, iar competiția din grupă motivează. Pentru lacune mari, primele luni sunt mai eficiente individual." },
    ],
    related: [
      { to: "/meditatii-bac", label: "Meditații BAC" },
      { to: "/variante-bacalaureat", label: "Variante bacalaureat" },
      { to: "/subiecte-bac-2026", label: "Subiecte BAC 2026" },
      { to: "/simulare-bacalaureat", label: "Simulare bacalaureat" },
      { to: "/preturi-meditatii", label: "Prețuri meditații" },
    ],
    ctaPrimary: { to: "/meditatii", label: "Găsește profesor pentru BAC" },
  }),
);

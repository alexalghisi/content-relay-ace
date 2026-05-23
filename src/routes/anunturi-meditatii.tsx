import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/anunturi-meditatii";
const TITLE = "Anunțuri Meditații 2026 — 1000+ Profesori Verificați GRATIS | MeditatiiDirect.ro";
const DESC = "★ Anunțuri meditații reale în toată România: matematică, română, engleză, BAC, admitere. Contactezi profesorul DIRECT, fără comision, de la 30 lei/oră. Răspuns în 24h.";

const faqs = [
  { q: "Cum public un anunț de meditații?", a: "Creezi cont gratuit pe MeditatiiDirect.ro, completezi profilul de profesor (CV, materii, experiență) și publici primul anunț în mai puțin de 5 minute. Verificarea durează în medie 24 de ore." },
  { q: "Ce informații conține un anunț de meditații?", a: "Materia, nivelul (gimnaziu, liceu, BAC, admitere), prețul pe oră, locația sau opțiunea online, durata ședinței și o descriere detaliată cu metoda profesorului. Vezi exemple concrete în pagina de anunțuri." },
  { q: "Sunt profesorii verificați?", a: "Da. Echipa MeditatiiDirect verifică identitatea, diploma și experiența fiecărui profesor înainte ca anunțul să fie publicat. Profilurile au badge „Verificat\"." },
  { q: "Cât costă o oră de meditații în România în 2026?", a: "Tarifele orientative pornesc de la 30 lei/oră în provincie pentru gimnaziu și ajung la 150–200 lei/oră pentru pregătire intensivă pentru admiterea la Medicină în București." },
  { q: "Ia MeditatiiDirect comision din meditații?", a: "Nu. Contactul dintre elev și profesor este direct, iar plata se face între ei. Platforma nu percepe niciun comision din ședințe." },
];

export const Route = createFileRoute("/anunturi-meditatii")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "anunturi meditatii, anunturi de meditatii, anunturi meditatii bucuresti, anunturi meditatii cluj, anunturi meditatii iasi, anunturi meditatii online, anunturi profesori, anunturi meditatii matematica, anunturi meditatii romana, anunturi meditatii bac, anunturi meditatii 2026, meditatori, profesori particulari, ore particulare, meditatii ieftine" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList", name: "Anunțuri meditații România",
        description: DESC, url: URL, numberOfItems: 1000,
      }) },
    ],
  }),
  component: () => (
    <SeoLanding
      pageUrl={URL}
      h1="Anunțuri meditații în România"
      intro="Mii de anunțuri reale postate de profesori verificați, la toate materiile și pentru toate nivelurile — din gimnaziu și până la admiterea la facultate. Caută după materie, oraș sau profesor, contactează direct, fără intermediari și fără comision."
      bullets={[
        "1000+ anunțuri active actualizate zilnic",
        "Profesori verificați cu identitate și diplomă",
        "Filtre după oraș, materie, online vs. la domiciliu",
        "Recenzii reale de la elevi și părinți",
        "Contact direct prin chat, telefon sau WhatsApp",
        "Tarife transparente, de la 30 lei/oră",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Vezi toate anunțurile" }}
      ctaSecondary={{ to: "/pentru-profesori", label: "Publică un anunț" }}
      sections={[
        { title: "Pentru elevi și părinți", body: <>Compară zeci de profesori la aceeași materie. Vezi prețul, experiența, recenziile și disponibilitatea înainte să trimiți primul mesaj. Toate anunțurile sunt gratuit de consultat.</> },
        { title: "Pentru profesori", body: <>Publici gratuit primele anunțuri și ajungi în fața a mii de elevi din toată țara. Plătești doar dacă vrei să-ți promovezi anunțul în top.</> },
        { title: "Materii populare", body: <>Matematică, limba română, limba engleză, biologie, fizică, chimie, informatică, istorie, germană, franceză, italiană, spaniolă, japoneză, economie, drept și 20+ alte discipline.</> },
      ]}
      faqs={faqs}
      related={[
        { to: "/meditatii", label: "Toate anunțurile" },
        { to: "/profesori", label: "Profesori verificați" },
        { to: "/meditatii-online", label: "Meditații online" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
        { to: "/meditatii-bac", label: "Meditații BAC 2026" },
      ]}
    />
  ),
});

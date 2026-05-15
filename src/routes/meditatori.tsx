import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/meditatori";
const TITLE = "Meditatori verificați în România 2026 | MeditatiiDirect.ro";
const DESC = "Catalog cu peste 1000 de meditatori verificați: matematică, română, engleză, BAC, admitere Medicină, Drept, Politehnică. Vezi profil, prețuri și recenzii.";

const faqs = [
  { q: "Ce înseamnă „meditator verificat\"?", a: "Înseamnă că am verificat manual identitatea, diploma și experiența profesorului înainte ca acesta să poată publica anunțuri. Profilul afișează badge-ul „Verificat\"." },
  { q: "Cum aleg meditatorul potrivit?", a: "Filtrează după materie, nivel și oraș, citește descrierea metodei de lucru, recenziile și verifică disponibilitatea. Trimite mesaj la 2–3 meditatori și alege-l pe cel cu care „rezonezi\" cel mai bine." },
  { q: "Ce experiență au meditatorii?", a: "De la profesori titulari în licee de top și autori de manuale, la doctoranzi și olimpici naționali. Fiecare profil afișează anii de experiență și diplomele relevante." },
];

export const Route = createFileRoute("/meditatori")({
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
      h1="Meditatori verificați în România"
      intro="Cei mai buni meditatori din România într-un singur loc. Profile complete cu CV, materii predate, ani de experiență, prețuri și recenzii reale de la elevi."
      bullets={[
        "Profesori titulari, doctoranzi, olimpici naționali",
        "Verificare manuală a identității și diplomelor",
        "Recenzii reale, neșterse, validate",
        "Disponibilitate în toate orașele mari și online",
      ]}
      ctaPrimary={{ to: "/profesori", label: "Vezi profesorii" }}
      ctaSecondary={{ to: "/meditatii", label: "Caută anunțuri" }}
      faqs={faqs}
      related={[
        { to: "/profesori", label: "Toți profesorii" },
        { to: "/meditatii", label: "Anunțuri meditații" },
        { to: "/preturi-meditatii", label: "Prețuri" },
        { to: "/cum-functioneaza", label: "Cum funcționează" },
      ]}
    />
  ),
});

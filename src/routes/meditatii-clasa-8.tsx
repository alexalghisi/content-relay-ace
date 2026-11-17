import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { SECTIUNI } from "@/data/continut-pagini";

export const Route = createFileRoute("/meditatii-clasa-8")(seoPage({
  path: "/meditatii-clasa-8",
  title: "Meditații clasa a 8-a — pregătire Evaluare Națională 2027 la mate și română",
  description: "Meditații clasa a 8-a pentru Evaluarea Națională 2027 la matematică și română: lucru pe modelul oficial 2027, simulare în martie, profesori verificați online sau acasă.",
  h1: "Meditații clasa a 8-a — Evaluare Națională 2027",
  intro: "Pregătire pentru EN 2027: matematică, română, recuperarea materiei din clasele V–VII și lucru pe modelul oficial publicat pe 1 noiembrie 2026. Simularea e pe 16–18 martie, examenul pe 22 și 24 iunie 2027.",
  bullets: ["Matematică EN — algebră + geometrie", "Română EN — text literar + redactare", "Simulări săptămânale + corectare", "Lucru pe modelul oficial 2027 și pe subiectele din 2026"],
  sections: SECTIUNI["meditatii-clasa-8"],
  faqs: [
    { q: "Când să încep meditațiile pentru Evaluare Națională?", a: "Ideal din clasa a 7-a sau începutul clasei a 8-a. Pentru recuperare, minim 4–6 luni înainte de examen, cu 2 ore/săptămână per materie." },
  ],
  related: [
    { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
    { to: "/subiecte-evaluare-nationala", label: "Subiecte și model EN 2027 rezolvat" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-romana", label: "Meditații română" },
  ],
}));

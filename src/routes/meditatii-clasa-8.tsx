import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-clasa-8")(seoPage({
  path: "/meditatii-clasa-8",
  title: "Meditații Clasa a 8-a — Pregătire Evaluare Națională 2026 | MeditatiiDirect.ro",
  description: "Meditații clasa a 8-a pentru Evaluare Națională 2026 la matematică și română. Profesori verificați, online sau la domiciliu.",
  h1: "Meditații clasa a 8-a — Evaluare Națională 2026",
  intro: "Pregătire intensivă pentru EN 2026: matematică, română, recuperare materie și simulări săptămânale. Plan personalizat per elev.",
  bullets: ["Matematică EN — algebră + geometrie", "Română EN — text literar + redactare", "Simulări săptămânale + corectare", "Profesori titulari cu experiență EN"],
  faqs: [
    { q: "Când să încep meditațiile pentru Evaluare Națională?", a: "Ideal din clasa a 7-a sau începutul clasei a 8-a. Pentru recuperare, minim 4–6 luni înainte de examen, cu 2 ore/săptămână per materie." },
  ],
  related: [
    { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-romana", label: "Meditații română" },
  ],
}));

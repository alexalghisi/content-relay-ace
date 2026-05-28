import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-titularizare")(seoPage({
  path: "/meditatii-titularizare",
  title: "Meditații Titularizare 2026 — Pregătire concurs profesori | MeditatiiDirect.ro",
  description: "Pregătire titularizare 2026: specialitate + metodică + pedagogie. Profesori formatori și mentori cu experiență la examenele de titularizare.",
  h1: "Meditații titularizare 2026",
  intro: "Pregătire completă pentru concursul de titularizare: probă scrisă pe specialitate, metodica predării, pedagogie. Subiecte rezolvate din anii anteriori.",
  bullets: ["Toate specialitățile", "Metodica predării", "Pedagogie + psihologia educației", "Subiecte rezolvate 2018–2025"],
  related: [
    { to: "/meditatii-definitivat", label: "Meditații definitivat" },
    { to: "/pentru-profesori", label: "Pentru profesori" },
  ],
}));

import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-definitivat")(seoPage({
  path: "/meditatii-definitivat",
  title: "Meditații Definitivat 2026 — Examen definitivare în învățământ | MeditatiiDirect.ro",
  description: "Pregătire examen definitivat 2026 pentru toate specialitățile. Mentori și profesori formatori experimentați.",
  h1: "Meditații definitivat 2026",
  intro: "Pregătire pentru examenul de definitivare în învățământ: portofoliu, inspecții, probă scrisă pe specialitate + metodică.",
  bullets: ["Portofoliu profesional", "Inspecții speciale", "Probă scrisă specialitate + metodică"],
  related: [
    { to: "/meditatii-titularizare", label: "Meditații titularizare" },
    { to: "/pentru-profesori", label: "Pentru profesori" },
  ],
}));

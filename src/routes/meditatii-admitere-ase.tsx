import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-admitere-ase")(seoPage({
  path: "/meditatii-admitere-ase",
  title: "Meditații Admitere ASE 2026 — Academia de Studii Economice | MeditatiiDirect.ro",
  description: "Pregătire admitere ASE București: matematică, economie, engleză. Profesori verificați și absolvenți ASE.",
  h1: "Meditații admitere ASE București 2026",
  intro: "Pregătire pentru admitere la ASE — CIG, Management, Finanțe, Marketing, Relații Economice Internaționale. Matematică economică + engleză.",
  bullets: ["Toate facultățile ASE", "Matematică (algebră + analiză economică)", "Engleză REI", "Profesori absolvenți ASE"],
  related: [
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-engleza", label: "Meditații engleză" },
  ],
}));

import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-admitere-drept")(seoPage({
  path: "/meditatii-admitere-drept",
  title: "Meditații Admitere Drept 2026 — Facultatea de Drept | MeditatiiDirect.ro",
  description: "Pregătire admitere Drept: română, istorie, logică. Profesori verificați și absolvenți de top. Simulări și subiecte rezolvate.",
  h1: "Meditații admitere Drept 2026",
  intro: "Pregătire structurată pentru admiterea la Facultatea de Drept (București, Cluj, Iași). Limba română, logică argumentativă, istorie.",
  bullets: ["UB, UBB, UAIC + universități private", "Logică argumentativă", "Română admitere", "Simulări lunare"],
  related: [
    { to: "/simulare-drept-2026", label: "Simulare Drept 2026" },
    { to: "/meditatii-romana", label: "Meditații română" },
    { to: "/meditatii-istorie", label: "Meditații istorie" },
  ],
}));

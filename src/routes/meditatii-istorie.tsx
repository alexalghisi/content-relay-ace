import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-istorie")(seoPage({
  path: "/meditatii-istorie",
  title: "Meditații Istorie — BAC și admitere drept | MeditatiiDirect.ro",
  description: "Meditații istorie pentru BAC, admitere drept și relații internaționale. Profesori titulari și doctoranzi. Online sau la domiciliu.",
  h1: "Meditații istorie cu profesori verificați",
  intro: "Pregătire structurată pentru BAC istorie, admitere drept, relații internaționale, științe politice. Sinteze și subiecte rezolvate.",
  bullets: ["BAC istorie integral", "Admitere drept + RI + științe politice", "Eseu istoric și interpretare surse", "Online sau la domiciliu"],
  related: [
    { to: "/meditatii-romana", label: "Meditații română" },
    { to: "/simulare-drept-2026", label: "Simulare admitere drept" },
  ],
}));

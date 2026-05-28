import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-germana")(seoPage({
  path: "/meditatii-germana",
  title: "Meditații Germană — Conversație, gramatică, examene | MeditatiiDirect.ro",
  description: "Meditații germană toate nivelurile: A1–C2, Goethe, telc, BAC, conversație. Profesori nativi și certificați, online sau la domiciliu.",
  h1: "Meditații germană cu profesori verificați",
  intro: "Pregătire pentru toate nivelurile europene (A1–C2), examene Goethe, telc, BAC limba germană. Conversație cu profesori nativi.",
  bullets: ["Niveluri A1–C2 (CEFR)", "Goethe-Zertifikat, telc", "BAC limba germană maternă/modernă", "Conversație cu profesori nativi"],
  related: [
    { to: "/meditatii-engleza", label: "Meditații engleză" },
    { to: "/meditatii-franceza", label: "Meditații franceză" },
  ],
}));

import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-germana")(
  seoPage({
    path: "/meditatii-germana",
    title: "Meditatii germana online sau acasă | A1–C2, Goethe, BAC",
    description:
      "Meditatii germana pentru niveluri A1–C2, examene Goethe și telc, BAC sau conversație, online sau acasă. Ceri gratuit oferte de la profesori, fără comision.",
    h1: "Meditații germană cu profesori verificați",
    intro:
      "Pregătire pentru toate nivelurile europene (A1–C2), examene Goethe, telc, BAC limba germană și conversație. Alegi profesorul după profil și propunere.",
    bullets: [
      "Niveluri A1–C2 (CEFR)",
      "Goethe-Zertifikat, telc",
      "BAC limba germană maternă/modernă",
      "Conversație și pronunție",
    ],
    related: [
      { to: "/meditatii-engleza", label: "Meditații engleză" },
      { to: "/meditatii-franceza", label: "Meditații franceză" },
    ],
  }),
);

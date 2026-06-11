import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-gimnaziu")(seoPage({
  path: "/meditatii-gimnaziu",
  title: "Meditații Gimnaziu (Clasele V–VIII) — Profesori Verificați | MeditatiiDirect.ro",
  description: "★ Meditații gimnaziu pentru clasele V–VIII: matematică, română, engleză, fizică, chimie, istorie, geografie. Pregătire Evaluare Națională cu profesori titulari. De la 35 lei/oră.",
  h1: "Meditații gimnaziu — clasele V–VIII",
  intro: "Pregătire temeinică pentru elevii de gimnaziu, cu profesori titulari și experiență la Evaluare Națională. Recuperare materie, teze, olimpiade și pregătire EN.",
  bullets: [
    "Matematică gimnaziu — algebră, geometrie, ecuații",
    "Limba română — gramatică, lectură, compunere",
    "Engleză, franceză, germană — toate nivelurile",
    "Fizică, chimie, biologie — laborator și teorie",
    "Istorie, geografie — sinteze și hărți",
    "Pregătire Evaluare Națională clasa a 8-a",
  ],
  faqs: [
    { q: "Câte ore de meditații sunt necesare pentru un elev de gimnaziu?", a: "Recomandăm 1–2 ore pe săptămână per materie. Pentru recuperare sau pregătire EN, 2–3 ore/săptămână timp de minim 4 luni." },
    { q: "Există meditații pentru olimpiade de gimnaziu?", a: "Da, avem profesori specializați în pregătire pentru olimpiade de matematică, fizică, română și informatică, cu rezultate la fazele județene și naționale." },
  ],
  related: [
    { to: "/meditatii-scoala", label: "Meditații școală" },
    { to: "/meditatii-clasa-8", label: "Meditații clasa a 8-a" },
    { to: "/meditatii-evaluare-nationala", label: "Evaluare Națională" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-romana", label: "Meditații română" },
  ],
}));

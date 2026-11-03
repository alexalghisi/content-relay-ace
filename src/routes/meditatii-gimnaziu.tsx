import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { SECTIUNI } from "@/data/continut-pagini";

export const Route = createFileRoute("/meditatii-gimnaziu")(seoPage({
  path: "/meditatii-gimnaziu",
  title: "Meditații Gimnaziu (Clasele V–VIII) — Profesori Verificați | MeditatiiDirect.ro",
  description: "★ Meditații gimnaziu pentru clasele V–VIII: matematică, română, engleză, fizică, chimie, istorie, geografie. Pregătire Evaluare Națională, online sau acasă.",
  h1: "Meditații gimnaziu — clasele V–VIII",
  intro: "Pregătire temeinică pentru elevii de gimnaziu, pe programa școlară și pe subiectele de Evaluare Națională. Recuperare materie, teze, olimpiade și pregătire EN.",
  bullets: [
    "Matematică gimnaziu — algebră, geometrie, ecuații",
    "Limba română — gramatică, lectură, compunere",
    "Engleză, franceză, germană — toate nivelurile",
    "Fizică, chimie, biologie — laborator și teorie",
    "Istorie, geografie — sinteze și hărți",
    "Pregătire Evaluare Națională clasa a 8-a",
  ],
  sections: SECTIUNI["meditatii-gimnaziu"],
  faqs: [
    { q: "Câte ore de meditații sunt necesare pentru un elev de gimnaziu?", a: "Recomandăm 1–2 ore pe săptămână per materie. Pentru recuperare sau pregătire EN, 2–3 ore/săptămână timp de minim 4 luni." },
    { q: "Există meditații pentru olimpiade de gimnaziu?", a: "Da. Scrie în cerere că pregătești olimpiada și la ce etapă (școlară, locală, județeană), ca să primești propuneri de la profesori care lucrează probleme de concurs." },
  ],
  related: [
    { to: "/meditatii-scoala", label: "Meditații școală" },
    { to: "/meditatii-clasa-8", label: "Meditații clasa a 8-a" },
    { to: "/meditatii-evaluare-nationala", label: "Evaluare Națională" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-romana", label: "Meditații română" },
  ],
}));

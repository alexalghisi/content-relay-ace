import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-geografie")(seoPage({
  path: "/meditatii-geografie",
  title: "Meditații Geografie — BAC și olimpiadă | MeditatiiDirect.ro",
  description: "Meditații geografie pentru BAC, olimpiadă și admitere. Geografie fizică, umană și economică cu profesori verificați.",
  h1: "Meditații geografie cu profesori verificați",
  intro: "Pregătire pentru BAC geografie (Europa și România), olimpiadă, admitere la geografie/turism. Profesori titulari și autori de manuale.",
  bullets: ["BAC geografie integral", "Olimpiadă județeană & națională", "Hărți, climatologie, geomorfologie"],
  related: [
    { to: "/meditatii-istorie", label: "Meditații istorie" },
    { to: "/meditatii-bac", label: "Meditații BAC" },
  ],
}));

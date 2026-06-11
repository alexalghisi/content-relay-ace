import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-private")(seoPage({
  path: "/meditatii-private",
  title: "Meditații Private 1-la-1 — Profesori Verificați în România | MeditatiiDirect.ro",
  description: "★ Meditații private 1-la-1 cu profesori verificați manual. Lecții personalizate acasă sau online, fără comision. Toate materiile, toate clasele. De la 30 lei/oră.",
  h1: "Meditații private — lecții 1-la-1 cu profesori verificați",
  intro: "Meditații private individuale, adaptate ritmului fiecărui elev. Contact direct cu profesorul, fără intermediari, fără comision. Peste 1000 de meditatori verificați în toată România.",
  bullets: [
    "Lecții 1-la-1 — atenție 100% pentru elev",
    "Plan personalizat după nivel și obiectiv",
    "Acasă, în spațiul profesorului sau online",
    "Tu alegi profesorul, ora și prețul",
    "Fără comision — plata direct profesorului",
  ],
  faqs: [
    { q: "Care e diferența între meditații private și grupe?", a: "Meditațiile private sunt 1-la-1: doar tu cu profesorul, plan adaptat, ritm propriu. Grupele sunt 3–8 elevi, costă mai puțin, dar atenția e împărțită." },
    { q: "Pot avea o lecție de probă înainte?", a: "Majoritatea profesorilor acceptă o primă lecție de probă (15–30 min) pentru a vedea dacă există compatibilitate cu elevul." },
  ],
  related: [
    { to: "/meditatii", label: "Toate meditațiile" },
    { to: "/profesor-particular", label: "Profesor particular" },
    { to: "/meditatii-la-domiciliu", label: "Meditații la domiciliu" },
    { to: "/meditatii-online", label: "Meditații online" },
  ],
}));

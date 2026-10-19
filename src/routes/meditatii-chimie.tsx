import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-chimie")(seoPage({
  path: "/meditatii-chimie",
  title: "Meditații Chimie — Profesori verificați online și acasă | MeditatiiDirect.ro",
  description: "Meditații chimie pentru BAC, admitere medicină, gimnaziu și liceu. Profesori verificați, online sau la domiciliu. Contact direct, fără comision.",
  h1: "Meditații chimie cu profesori verificați",
  intro: "Pregătire la chimie organică și anorganică pentru BAC, admitere la medicină și olimpiade. Profesori titulari și doctoranzi, online sau la tine acasă.",
  bullets: ["Chimie organică & anorganică", "BAC + admitere medicină UMF", "Gimnaziu, liceu, recuperare", "Online sau la domiciliu", "Tarife 40–120 lei/oră"],
  faqs: [
    { q: "Cât costă o meditație la chimie?", a: "Tarifele orientative sunt 40–80 lei/oră pentru gimnaziu/liceu și 70–120 lei/oră pentru admitere medicină cu profesori titulari." },
    { q: "Se pot face meditații chimie online?", a: "Da, majoritatea profesorilor predau online prin Zoom sau Meet cu tabletă grafică, la fel de eficient ca la domiciliu." },
  ],
  related: [
    { to: "/harta-blocajelor/chimie", label: "Harta Blocajelor chimie" },
    { to: "/meditatii-biologie", label: "Meditații biologie" },
    { to: "/grile-medicina", label: "Grile medicină" },
    { to: "/meditatii-bac", label: "Meditații BAC" },
  ],
}));

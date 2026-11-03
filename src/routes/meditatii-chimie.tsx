import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { SECTIUNI } from "@/data/continut-pagini";

export const Route = createFileRoute("/meditatii-chimie")(seoPage({
  path: "/meditatii-chimie",
  title: "Meditații Chimie — Profesori verificați online și acasă | MeditatiiDirect.ro",
  description: "Meditații chimie pentru BAC, admitere medicină, gimnaziu și liceu. Profesori verificați, online sau la domiciliu. Contact direct, fără comision.",
  h1: "Meditații chimie cu profesori verificați",
  intro: "Pregătire la chimie organică și anorganică pentru BAC, admitere la medicină și olimpiade. Alegi profesorul după profil și propunere, online sau la tine acasă.",
  bullets: ["Chimie organică & anorganică", "BAC + admitere medicină UMF", "Gimnaziu, liceu, recuperare", "Online sau la domiciliu", "Tariful îl vezi în propunere, înainte să accepți"],
  sections: SECTIUNI["meditatii-chimie"],
  faqs: [
    { q: "Cât costă o meditație la chimie?", a: "Tariful îl stabilește fiecare profesor și îl vezi în propunerea lui înainte să accepți. Prețurile reale din anunțurile de pe site sunt adunate pe pagina Prețuri meditații chimie." },
    { q: "Se pot face meditații chimie online?", a: "Da, majoritatea profesorilor predau online prin Zoom sau Meet cu tabletă grafică, la fel de eficient ca la domiciliu." },
  ],
  related: [
    { to: "/harta-blocajelor/chimie", label: "Harta Blocajelor chimie" },
    { to: "/meditatii-biologie", label: "Meditații biologie" },
    { to: "/grile-medicina", label: "Grile medicină" },
    { to: "/meditatii-bac", label: "Meditații BAC" },
  ],
}));

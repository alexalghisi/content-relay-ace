import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-biologie")(seoPage({
  path: "/meditatii-biologie",
  title: "Meditații Biologie — BAC și admitere medicină | MeditatiiDirect.ro",
  description: "Meditații biologie pentru BAC, admitere UMF, evaluare națională. Profesori verificați online sau la domiciliu. Tarife transparente.",
  h1: "Meditații biologie cu profesori verificați",
  intro: "Anatomie, genetică, ecologie pentru BAC și admitere medicină. Pregătire intensivă cu profesori titulari și medici rezidenți.",
  bullets: ["BAC M1 + M2 biologie", "Admitere UMF București, Cluj, Iași, Timișoara", "Gimnaziu + evaluare națională", "Online sau la domiciliu"],
  faqs: [
    { q: "Câte ore de meditații biologie pentru admitere UMF?", a: "Recomandăm 2 ore/săptămână începute cu 9–12 luni înainte. Pentru recuperare intensivă, 4–6 ore/săptămână în ultimele 3 luni." },
  ],
  related: [
    { to: "/meditatii-chimie", label: "Meditații chimie" },
    { to: "/grile-medicina", label: "Grile medicină" },
    { to: "/meditatii-bac", label: "Meditații BAC" },
  ],
}));

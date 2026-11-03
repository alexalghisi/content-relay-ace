import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { FAQ_ADMITERE_LICEU, SECTIUNI_ADMITERE_LICEU, SURSE_ADMITERE_LICEU } from "@/data/continut-pagini";

export const Route = createFileRoute("/admitere-liceu-2027")(seoPage({
  path: "/admitere-liceu-2027",
  title: "Admitere liceu 2027: cum se calculează media și ce se știe până acum",
  description: "Admiterea la liceu 2027: cum s-a calculat media de admitere în 2026, rolul mediei claselor V–VIII, datele Evaluării Naționale 2027 și ce urmează să fie publicat.",
  h1: "Admitere liceu 2027 — media de admitere și calendarul",
  intro: "Ce știm sigur despre admiterea la liceu în 2027, ce s-a aplicat în 2026 și ce rămâne de anunțat de Ministerul Educației. Pagina se actualizează când apare ordinul oficial.",
  bullets: [
    "2026: media de admitere = media notelor de la Evaluarea Națională",
    "Media claselor V–VIII: doar la departajare",
    "Evaluarea Națională 2027: 22–25 iunie, rezultate finale 7 iulie",
    "Metodologia 2027: în curs de publicare",
  ],
  ctaPrimary: { to: "/meditatii-evaluare-nationala", label: "Pregătire Evaluare Națională" },
  ctaSecondary: { to: "/calculator-media-evaluare-nationala", label: "Calculează-ți media" },
  sections: [
    ...SECTIUNI_ADMITERE_LICEU,
    { title: "Surse", body: (
      <ul className="list-disc space-y-1 pl-5 text-sm">
        {SURSE_ADMITERE_LICEU.map((s) => <li key={s.href}><a className="text-primary underline" href={s.href} target="_blank" rel="noopener nofollow">{s.label}</a></li>)}
      </ul>
    ) },
  ],
  faqs: FAQ_ADMITERE_LICEU,
  related: [
    { to: "/calendar-evaluare-nationala-2027", label: "Calendar EN 2027" },
    { to: "/meditatii-evaluare-nationala", label: "Meditații Evaluare Națională" },
    { to: "/evaluare-nationala", label: "Subiecte Evaluare Națională" },
    { to: "/meditatii-clasa-8", label: "Meditații clasa a VIII-a" },
  ],
}));

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { CITIES } from "@/data/cities";

/** Formular scurt „Cere ofertă" — trimite elevul direct în lista de anunțuri filtrată. */
export function LeadCta({ defaultSubject, defaultCity }: { defaultSubject?: string; defaultCity?: string }) {
  const navigate = useNavigate();
  const [materie, setMaterie] = useState(defaultSubject ?? "");
  const [oras, setOras] = useState(defaultCity ?? "");
  const [nivel, setNivel] = useState("");

  return (
    <section className="card-soft p-6 sm:p-8" id="cere-oferta">
      <h2 className="text-xl font-bold">Cere ofertă de la profesori</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Spune-ne ce cauți și profesorii verificați îți trimit propuneri direct. Durează 2 minute și este gratuit.
      </p>
      <form
        className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_1fr_auto]"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({
            to: "/meditatii",
            search: {
              materie: materie || undefined,
              oras: oras || undefined,
              q: nivel || undefined,
            },
          });
        }}
      >
        <label className="sr-only" htmlFor="lead-materie">Materie</label>
        <select id="lead-materie" value={materie} onChange={(e) => setMaterie(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm">
          <option value="">Alege materia</option>
          {SUBJECTS_SEO.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>

        <label className="sr-only" htmlFor="lead-oras">Oraș</label>
        <select id="lead-oras" value={oras} onChange={(e) => setOras(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm">
          <option value="">Oraș / online</option>
          <option value="online">Online</option>
          {CITIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>

        <label className="sr-only" htmlFor="lead-nivel">Nivel</label>
        <select id="lead-nivel" value={nivel} onChange={(e) => setNivel(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-3 text-sm">
          <option value="">Nivel</option>
          <option value="gimnaziu">Gimnaziu</option>
          <option value="evaluare nationala">Evaluare Națională</option>
          <option value="liceu">Liceu</option>
          <option value="bac">Bacalaureat</option>
          <option value="admitere">Admitere facultate</option>
        </select>

        <button type="submit" className="btn-primary h-11 px-5 inline-flex items-center gap-2">
          <Send className="h-4 w-4" /> Cere ofertă
        </button>
      </form>
    </section>
  );
}

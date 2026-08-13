import { Link } from "@tanstack/react-router";

interface Props {
  title: string;
  /** Paragraf explicativ despre materie/oraș — conținut util, nu pagină goală. */
  description: string;
  /** Sugestii de navigare: etichetă + rută. */
}

/**
 * Empty state „bogat": explică contextul, oferă CTA pentru profesori și
 * trimite utilizatorul către categorii active — fără dead-end-uri.
 */
export function EmptyResults({ title, description }: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="/ofer-meditatii" className="btn-primary">Ești profesor? Publică anunț gratuit</Link>
        <Link to="/meditatii" className="btn-outline">Vezi toate anunțurile</Link>
        <Link to="/contact" className="btn-outline">Cere ajutor la găsirea unui profesor</Link>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <div className="text-sm font-semibold">Categorii active</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><Link to="/meditatii-matematica" className="hover:text-foreground hover:underline">Meditații matematică</Link></li>
            <li><Link to="/meditatii-romana" className="hover:text-foreground hover:underline">Meditații română</Link></li>
            <li><Link to="/meditatii-engleza" className="hover:text-foreground hover:underline">Meditații engleză</Link></li>
            <li><Link to="/meditatii-informatica" className="hover:text-foreground hover:underline">Meditații informatică</Link></li>
            <li><Link to="/meditatii-online" className="hover:text-foreground hover:underline">Meditații online</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Resurse gratuite</div>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li><Link to="/variante-bacalaureat" className="hover:text-foreground hover:underline">Variante BAC (subiecte + bareme)</Link></li>
            <li><Link to="/subiecte-admitere" className="hover:text-foreground hover:underline">Subiecte admitere facultate</Link></li>
            <li><Link to="/blog" className="hover:text-foreground hover:underline">Articole și ghiduri de pregătire</Link></li>
            <li><Link to="/preturi-meditatii" className="hover:text-foreground hover:underline">Prețuri meditații în România</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

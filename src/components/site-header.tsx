import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { NewRequestsBadge } from "@/components/new-requests-badge";

const NAV = [
  { to: "/meditatii", label: "Cere ofertă" },
  { to: "/cereri", label: "Cereri elevi" },
  { to: "/materii", label: "Materii" },
  { to: "/harta-blocajelor", label: "Harta Blocajelor" },
  { to: "/cum-functioneaza", label: "Cum funcționează" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="container-page grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 xl:flex xl:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-bold xl:shrink-0">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-pop)]">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="truncate text-lg leading-tight">
            MeditatiiDirect<span className="text-primary">.ro</span>
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-1 xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-center text-sm leading-5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "font-medium text-primary bg-primary-soft" }}
            >
              {n.label}{n.to === "/cereri" && <NewRequestsBadge />}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          {user ? (
            <>
              <Link to="/mesaje" className="btn-pill text-sm text-foreground/80 hover:text-foreground hover:bg-muted">Mesaje</Link>
              <Link to="/profesor" className="btn-outline border-primary text-primary">Panoul meu</Link>
              <Link to="/cont" className="btn-outline">Contul meu</Link>
              <button onClick={() => signOut()} className="btn-pill text-sm text-muted-foreground hover:text-foreground">
                Ieșire
              </button>
            </>
          ) : (
            <>
              <span className="hidden 2xl:block"><Link to="/login" className="btn-outline">Autentificare</Link></span>
              <Link to="/signup" className="btn-primary">Creează cont</Link>
              <Link to="/pentru-profesori" className="btn-outline border-primary text-primary">Devino profesor</Link>
            </>
          )}
        </div>

          <button className="grid h-10 w-10 place-items-center rounded-lg border border-border xl:hidden" onClick={() => setOpen((v) => !v)} aria-label="Meniu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 py-2 text-center text-sm leading-5 hover:bg-muted" onClick={() => setOpen(false)}>
                {n.label}{n.to === "/cereri" && <NewRequestsBadge />}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {user ? (
                <>
                  <Link to="/mesaje" className="btn-outline flex-1" onClick={() => setOpen(false)}>Mesaje</Link>
                  <Link to="/cont" className="btn-outline flex-1" onClick={() => setOpen(false)}>Cont</Link>
                  <button onClick={() => signOut()} className="btn-outline flex-1">Ieșire</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-outline flex-1" onClick={() => setOpen(false)}>Autentificare</Link>
                  <Link to="/signup" className="btn-primary flex-1" onClick={() => setOpen(false)}>Creează cont</Link>
                </>
              )}
            </div>
            {user
              ? <Link to="/profesor" className="btn-outline mt-2 border-primary text-primary" onClick={() => setOpen(false)}>Panoul profesorului</Link>
              : <Link to="/pentru-profesori" className="btn-outline mt-2" onClick={() => setOpen(false)}>Devino profesor</Link>}
          </div>
        </div>
      )}
    </header>
  );
}

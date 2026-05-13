import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";

const NAV = [
  { to: "/meditatii", label: "Meditatii" },
  { to: "/materii", label: "Materii" },
  { to: "/admitere", label: "Admitere" },
  { to: "/meditatii-bac", label: "Pregătire BAC" },
  { to: "/subiecte-bac", label: "Subiecte BAC" },
  { to: "/variante-bacalaureat", label: "Variante BAC" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg leading-tight">
            MeditatiiDirect<span className="text-primary">.ro</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-medium text-primary bg-primary-soft" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link to="/cont" className="btn-outline">Contul meu</Link>
              <button onClick={() => signOut()} className="btn-pill text-sm text-muted-foreground hover:text-foreground">
                Ieșire
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline">Login</Link>
              <Link to="/signup" className="btn-primary">Înscriere gratuită</Link>
            </>
          )}
        </div>

        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Meniu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-lg px-3 py-2 text-sm hover:bg-muted" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {user ? (
                <>
                  <Link to="/cont" className="btn-outline flex-1" onClick={() => setOpen(false)}>Contul meu</Link>
                  <button onClick={() => signOut()} className="btn-outline flex-1">Ieșire</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-outline flex-1" onClick={() => setOpen(false)}>Login</Link>
                  <Link to="/signup" className="btn-primary flex-1" onClick={() => setOpen(false)}>Înscriere</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

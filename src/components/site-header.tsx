import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { NewRequestsBadge } from "@/components/new-requests-badge";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useT } from "@/lib/i18n-context";
import type { MsgKey } from "@/lib/i18n";

const NAV = [
  { to: "/meditatii", label: "nav.request" as MsgKey },
  { to: "/cereri", label: "nav.requests" as MsgKey },
  { to: "/profesor-ai", label: "nav.ai" as MsgKey },
  { to: "/harta-blocajelor", label: "nav.map" as MsgKey },
  { to: "/meditator-ai", label: "nav.meditator" as MsgKey },
  { to: "/cum-functioneaza", label: "nav.how" as MsgKey },
  { to: "/blog", label: "nav.blog" as MsgKey },
] as const;

export function SiteHeader() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const t = useT();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="container-page grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 2xl:flex 2xl:max-w-none 2xl:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 font-bold xl:shrink-0">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-pop)]">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="truncate text-lg leading-tight">
            MeditatiiDirect<span className="text-primary">.ro</span>
          </span>
        </Link>

        <nav className="hidden shrink-0 items-center gap-1 2xl:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`${n.to === "/meditator-ai" ? "hidden 2xl:inline-flex" : "inline-flex"} min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-2 py-2 text-center text-sm leading-5 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground`}
              activeProps={{ className: "font-medium text-primary bg-primary-soft" }}
            >
              {t(n.label)}{n.to === "/cereri" && <NewRequestsBadge />}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 2xl:flex">
          <LanguageSwitcher />
          {user ? (
            <>
              <Link to="/mesaje" className="btn-pill text-sm text-foreground/80 hover:text-foreground hover:bg-muted">{t("auth.messages")}</Link>
              <Link to="/profesor" className="btn-outline border-primary text-primary">{t("auth.myPanel")}</Link>
              <Link to="/cont" className="btn-outline">{t("auth.myAccount")}</Link>
              <button onClick={() => signOut()} className="btn-pill text-sm text-muted-foreground hover:text-foreground">
                {t("auth.logout")}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-outline">{t("auth.login")}</Link>
              <Link to="/signup" className="btn-primary">{t("auth.signup")}</Link>
              <Link to="/pentru-profesori" className="btn-outline border-primary text-primary">{t("auth.becomeTeacher")}</Link>
            </>
          )}
        </div>

          <div className="flex items-center gap-2 2xl:hidden"><LanguageSwitcher />
          <button className="grid h-10 w-10 place-items-center rounded-lg border border-border" onClick={() => setOpen((v) => !v)} aria-label={t("ui.menu")} aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button></div>
      </div>

      {open && (
        <div className="border-t border-border bg-background 2xl:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="inline-flex min-h-11 items-center justify-center rounded-lg px-3 py-2 text-center text-sm leading-5 hover:bg-muted" onClick={() => setOpen(false)}>
                {t(n.label)}{n.to === "/cereri" && <NewRequestsBadge />}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {user ? (
                <>
                  <Link to="/mesaje" className="btn-outline flex-1" onClick={() => setOpen(false)}>{t("auth.messages")}</Link>
                  <Link to="/cont" className="btn-outline flex-1" onClick={() => setOpen(false)}>{t("auth.account")}</Link>
                  <button onClick={() => signOut()} className="btn-outline flex-1">{t("auth.logout")}</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn-outline flex-1" onClick={() => setOpen(false)}>{t("auth.login")}</Link>
                  <Link to="/signup" className="btn-primary flex-1" onClick={() => setOpen(false)}>{t("auth.signup")}</Link>
                </>
              )}
            </div>
            {user
              ? <Link to="/profesor" className="btn-outline mt-2 border-primary text-primary" onClick={() => setOpen(false)}>{t("auth.teacherPanel")}</Link>
              : <Link to="/pentru-profesori" className="btn-outline mt-2" onClick={() => setOpen(false)}>{t("auth.becomeTeacher")}</Link>}
          </div>
        </div>
      )}
    </header>
  );
}

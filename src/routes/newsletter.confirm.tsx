// Confirmarea abonării la newsletter: /newsletter/confirm?t=TOKEN
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { confirmNewsletter } from "@/lib/newsletter.functions";

export const Route = createFileRoute("/newsletter/confirm")({
  validateSearch: (search: Record<string, unknown>) => ({ t: search.t ? String(search.t) : "" }),
  head: () => ({
    meta: [
      { title: "Confirmare abonare | MeditatiiDirect.ro" },
      { name: "description", content: "Activează abonarea la variante și rezolvări BAC." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Confirmare abonare | MeditatiiDirect.ro" },
      { property: "og:description", content: "Activează abonarea la variante și rezolvări BAC." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ConfirmPage,
});

function ConfirmPage() {
  const { t } = Route.useSearch();
  const [state, setState] = useState<"loading" | "ok" | "already" | "invalid">("loading");

  useEffect(() => {
    let active = true;
    if (!t) {
      setState("invalid");
      return;
    }
    confirmNewsletter({ data: { token: t } })
      .then((res) => {
        if (!active) return;
        if (!res.ok) setState("invalid");
        else setState(res.reason === "already" ? "already" : "ok");
      })
      .catch(() => active && setState("invalid"));
    return () => {
      active = false;
    };
  }, [t]);

  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center">
        {state === "loading" && <p className="text-muted-foreground">Se verifică linkul…</p>}
        {state === "ok" && (
          <>
            <h1 className="text-2xl font-bold">Abonare confirmată</h1>
            <p className="mt-3 text-muted-foreground">
              Gata! Îți trimitem un email scurt când publicăm variante sau rezolvări noi.
            </p>
          </>
        )}
        {state === "already" && (
          <>
            <h1 className="text-2xl font-bold">Ești deja abonat</h1>
            <p className="mt-3 text-muted-foreground">Nu mai e nimic de făcut — primești variantele noi pe email.</p>
          </>
        )}
        {state === "invalid" && (
          <>
            <h1 className="text-2xl font-bold">Link invalid sau expirat</h1>
            <p className="mt-3 text-muted-foreground">
              Abonează-te din nou din pagina de arhivă BAC și îți trimitem un link nou.
            </p>
          </>
        )}
        <Link
          to="/bac"
          className="mt-6 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Mergi la arhiva BAC
        </Link>
      </div>
    </main>
  );
}

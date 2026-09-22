// Dezabonare de la emailurile site-ului: /unsubscribe?token=...
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/unsubscribe")({
  validateSearch: (search: Record<string, unknown>) => ({
    token: search.token ? String(search.token) : "",
  }),
  head: () => ({
    meta: [
      { title: "Dezabonare | MeditatiiDirect.ro" },
      { name: "description", content: "Nu mai primi emailuri de la MeditatiiDirect.ro." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Dezabonare | MeditatiiDirect.ro" },
      { property: "og:description", content: "Nu mai primi emailuri de la MeditatiiDirect.ro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const { token } = Route.useSearch();
  const [state, setState] = useState<"checking" | "ready" | "done" | "already" | "invalid" | "sending">("checking");

  useEffect(() => {
    let active = true;
    if (!token) {
      setState("invalid");
      return;
    }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        const body = await r.json().catch(() => ({}));
        if (!active) return;
        if (!r.ok) setState("invalid");
        else if (body.valid === false) setState("already");
        else setState("ready");
      })
      .catch(() => active && setState("invalid"));
    return () => {
      active = false;
    };
  }, [token]);

  async function confirm() {
    setState("sending");
    try {
      const res = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) setState("invalid");
      else setState(body.success === false ? "already" : "done");
    } catch {
      setState("invalid");
    }
  }

  return (
    <main className="container-page py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center">
        {state === "checking" && <p className="text-muted-foreground">Se verifică linkul…</p>}
        {(state === "ready" || state === "sending") && (
          <>
            <h1 className="text-2xl font-bold">Confirmi dezabonarea?</h1>
            <p className="mt-3 text-muted-foreground">Nu vei mai primi emailuri de la MeditatiiDirect.ro.</p>
            <button
              onClick={confirm}
              disabled={state === "sending"}
              className="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              {state === "sending" ? "Se procesează…" : "Dezabonează-mă"}
            </button>
          </>
        )}
        {state === "done" && (
          <>
            <h1 className="text-2xl font-bold">Te-am dezabonat</h1>
            <p className="mt-3 text-muted-foreground">Nu îți mai trimitem emailuri.</p>
          </>
        )}
        {state === "already" && (
          <>
            <h1 className="text-2xl font-bold">Ești deja dezabonat</h1>
            <p className="mt-3 text-muted-foreground">Nu mai primești emailuri de la noi.</p>
          </>
        )}
        {state === "invalid" && (
          <>
            <h1 className="text-2xl font-bold">Link invalid sau expirat</h1>
            <p className="mt-3 text-muted-foreground">Scrie-ne și te scoatem noi de pe listă.</p>
          </>
        )}
        <div className="mt-6">
          <Link to="/" className="text-sm text-primary hover:underline">
            Înapoi la site
          </Link>
        </div>
      </div>
    </main>
  );
}

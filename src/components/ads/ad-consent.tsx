import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AD_CONSENT_KEY, canServeAdsterra } from "@/lib/ad-consent";

const CONSENT_EVENT = "md-ad-consent-change";

export function useAdConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const update = () => {
      try { setConsent(localStorage.getItem(AD_CONSENT_KEY)); }
      catch { setConsent(null); }
      setReady(true);
    };
    update();
    window.addEventListener(CONSENT_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CONSENT_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return { consent, ready, allowed: canServeAdsterra(consent) };
}

export function AdConsent() {
  const { consent, ready } = useAdConsent();
  const [editing, setEditing] = useState(false);
  function choose(value: "accepted" | "rejected") {
    try { localStorage.setItem(AD_CONSENT_KEY, value); }
    catch { return; }
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setEditing(false);
  }
  if (!ready) return null;
  if (consent && !editing) return <div className="bg-background px-4 pb-4 text-center"><Button variant="link" size="sm" onClick={() => setEditing(true)}>Preferințe reclame</Button></div>;
  return (
    <section aria-label="Acord pentru reclame" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background p-4 shadow-soft">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
        <div className="max-w-xl text-sm text-foreground">
          <p>Permiți reclamele Adsterra? Furnizorul poate folosi cookie-uri și date despre dispozitiv pentru publicitate. Poți refuza sau retrage acordul oricând.</p>
          <Link to="/politica-cookies" className="text-primary underline">Politica de cookies</Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => choose("rejected")}>Refuz</Button>
          <Button variant="outline" onClick={() => choose("accepted")}>Accept</Button>
        </div>
      </div>
    </section>
  );
}
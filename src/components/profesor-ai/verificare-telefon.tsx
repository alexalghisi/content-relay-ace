import { useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { confirmaCodTelefon, trimiteCodTelefon } from "@/lib/profesor-ai-verificare.functions";

/** Verificare telefon (cod SMS) + adresă, cerută o singură dată înainte de lecția gratuită. */
export function VerificareTelefon({ onVerificat }: { onVerificat: () => void }) {
  const { user } = useAuth();
  const [phone, setPhone] = useState(() =>
    typeof user?.user_metadata?.phone === "string" ? user.user_metadata.phone : "",
  );
  const [address, setAddress] = useState("");
  const [cod, setCod] = useState("");
  const [trimis, setTrimis] = useState(false);
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");

  const trimite = async () => {
    setEroare("");
    setPending(true);
    const r = await trimiteCodTelefon({ data: { phone, address } }).catch(() => ({
      ok: false as const,
      error: "Conexiunea a eșuat.",
    }));
    setPending(false);
    if (!r.ok) return setEroare(r.error);
    if ("verificat" in r && r.verificat) return onVerificat();
    setTrimis(true);
  };
  const confirma = async () => {
    setEroare("");
    setPending(true);
    const r = await confirmaCodTelefon({ data: { cod } }).catch(() => ({
      ok: false as const,
      error: "Conexiunea a eșuat.",
    }));
    setPending(false);
    if (!r.ok) return setEroare(r.error);
    onVerificat();
  };

  const input = "mt-1 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm";
  return (
    <div className="mt-5 rounded-2xl border border-primary/30 bg-primary-soft/40 p-4">
      <p className="flex items-center gap-2 text-sm font-bold">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
        Verifică-ți telefonul pentru lecția gratuită
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        O singură lecție gratuită per persoană. Un număr de telefon poate fi folosit o singură dată.
      </p>
      {!trimis ? (
        <div className="mt-3 grid gap-3">
          <label className="text-sm font-semibold">
            Telefon mobil
            <input
              className={input}
              inputMode="tel"
              autoComplete="tel"
              placeholder="07xx xxx xxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="text-sm font-semibold">
            Adresa
            <input
              className={input}
              autoComplete="street-address"
              placeholder="Strada, numărul, localitatea"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={trimite}
            disabled={pending}
            className="btn-primary h-12 px-6 disabled:opacity-60"
          >
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Continuă
          </button>
        </div>
      ) : (
        <div className="mt-3 grid gap-3">
          <label className="text-sm font-semibold">
            Codul primit prin SMS
            <input
              className={input}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={cod}
              onChange={(e) => setCod(e.target.value.replace(/\D/g, ""))}
            />
          </label>
          <button
            type="button"
            onClick={confirma}
            disabled={pending || cod.length !== 6}
            className="btn-primary h-12 px-6 disabled:opacity-60"
          >
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}Confirmă codul
          </button>
          <button type="button" onClick={() => setTrimis(false)} className="text-xs text-primary underline">
            Schimbă numărul sau retrimite codul
          </button>
        </div>
      )}
      {eroare && <p className="mt-3 rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">{eroare}</p>}
    </div>
  );
}

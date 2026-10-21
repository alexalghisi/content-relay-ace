import { useState, type FormEvent } from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import {
  lectieGratuitaTrimiteCod,
  lectieGratuitaVerificaCod,
} from "@/lib/lectie-gratuita.functions";

const EROARE_CONEXIUNE = { ok: false as const, error: "Conexiunea a eșuat." };

export function VerificareTelefon({ onVerificat }: { onVerificat: () => void }) {
  const [telefon, setTelefon] = useState("");
  const [cod, setCod] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");

  const trimite = async (e: FormEvent) => {
    e.preventDefault();
    setEroare("");
    setPending(true);
    const r = await lectieGratuitaTrimiteCod({ data: { telefon } }).catch(() => EROARE_CONEXIUNE);
    setPending(false);
    if (!r.ok) return setEroare(r.error);
    setToken(r.data.token);
  };

  const verifica = async (e: FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setEroare("");
    setPending(true);
    const r = await lectieGratuitaVerificaCod({ data: { token, cod } }).catch(
      () => EROARE_CONEXIUNE,
    );
    setPending(false);
    if (!r.ok) return setEroare(r.error);
    onVerificat();
  };

  return (
    <div className="mt-5 rounded-2xl border border-primary/30 bg-primary-soft/40 p-4">
      <p className="flex items-center gap-2 text-sm font-bold">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
        Verifică-ți telefonul pentru lecția gratuită
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        Fiecare elev primește o singură lecție gratuită de 15 minute. Îți trimitem un cod prin SMS;
        numărul nu este afișat nicăieri.
      </p>
      {token ? (
        <form onSubmit={verifica} className="mt-3 flex flex-wrap gap-2">
          <label htmlFor="pa-cod" className="sr-only">
            Codul primit prin SMS
          </label>
          <input
            id="pa-cod"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{6}"
            maxLength={6}
            required
            value={cod}
            onChange={(e) => setCod(e.target.value)}
            placeholder="Codul din SMS"
            className="h-11 w-40 rounded-xl border border-border bg-background px-3 text-sm tracking-widest"
          />
          <button type="submit" disabled={pending} className="btn-primary h-11 px-5">
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Confirmă codul
          </button>
          <button type="button" onClick={() => setToken(null)} className="btn-outline h-11 px-4">
            Alt număr
          </button>
        </form>
      ) : (
        <form onSubmit={trimite} className="mt-3 flex flex-wrap gap-2">
          <label htmlFor="pa-telefon" className="sr-only">
            Număr de mobil
          </label>
          <input
            id="pa-telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            placeholder="07xx xxx xxx"
            className="h-11 w-48 rounded-xl border border-border bg-background px-3 text-sm"
          />
          <button type="submit" disabled={pending} className="btn-primary h-11 px-5">
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Trimite codul
          </button>
        </form>
      )}
      {eroare && (
        <p role="alert" className="mt-2 text-sm text-destructive">
          {eroare}
        </p>
      )}
    </div>
  );
}

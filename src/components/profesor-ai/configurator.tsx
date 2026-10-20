import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, CreditCard, Loader2, Sparkles } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { profesorAiAcces, profesorAiPorneste } from "@/lib/profesor-ai.functions";
import {
  PA_DURATE,
  PA_MATERII,
  PA_NIVELURI,
  PA_OBIECTIVE,
  PRETURI_IMPLICITE,
  pretSesiune,
  type PaConfig,
  type PaDurata,
  type TabelPreturi,
} from "@/lib/profesor-ai";

export const PA_TOKEN_KEY = "profesor-ai-token";

export function salveazaToken(t: string) {
  try {
    sessionStorage.setItem(PA_TOKEN_KEY, t);
  } catch {
    /* fără stocare: tokenul rămâne doar în URL */
  }
}

export function ConfiguratorProfesorAi() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [cfg, setCfg] = useState<PaConfig>({
    materie: "matematica",
    nivel: "gimnaziu",
    durata: 30,
    obiectiv: "lectie",
  });
  const [acces, setAcces] = useState<{
    gratuit: boolean;
    preturi: TabelPreturi;
    plataActiva: boolean;
    aiDisponibil: boolean;
  } | null>(null);
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");

  useEffect(() => {
    if (!user) return setAcces(null);
    profesorAiAcces()
      .then(setAcces)
      .catch(() => setAcces(null));
  }, [user]);

  const pret = pretSesiune(cfg.materie, cfg.durata, acces?.preturi ?? PRETURI_IMPLICITE);
  const set = <K extends keyof PaConfig>(k: K, v: PaConfig[K]) => setCfg((c) => ({ ...c, [k]: v }));

  const porneste = async () => {
    // Deblochează vocea în timpul click-ului (iPhone/Safari permit sunet doar după un gest),
    // ca profesorul să poată vorbi singur când se deschide sesiunea.
    try {
      window.speechSynthesis?.speak(new SpeechSynthesisUtterance(""));
    } catch {
      /* fără sinteză vocală */
    }
    setEroare("");
    setPending(true);
    const r = await profesorAiPorneste({ data: cfg }).catch(() => ({
      ok: false as const,
      error: "Conexiunea a eșuat.",
    }));
    if (!r.ok) {
      setPending(false);
      return setEroare(r.error);
    }
    if (r.data.token) {
      salveazaToken(r.data.token);
      return navigate({ to: "/profesor-ai/sesiune", search: { s: r.data.token } });
    }
    if (r.data.checkoutUrl) window.location.href = r.data.checkoutUrl;
  };

  const chip = (activ: boolean) =>
    `rounded-xl border px-3 py-2.5 text-left text-sm transition ${activ ? "border-primary bg-primary-soft font-semibold text-primary" : "border-border bg-background hover:border-primary/40"}`;

  return (
    <div className="card-soft p-5 sm:p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="pa-materie" className="text-sm font-bold">
            Materia
          </label>
          <select
            id="pa-materie"
            value={cfg.materie}
            onChange={(e) => set("materie", e.target.value as PaConfig["materie"])}
            className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
          >
            {PA_MATERII.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pa-nivel" className="text-sm font-bold">
            Nivelul de studiu
          </label>
          <select
            id="pa-nivel"
            value={cfg.nivel}
            onChange={(e) => set("nivel", e.target.value as PaConfig["nivel"])}
            className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-3 text-sm"
          >
            {PA_NIVELURI.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-bold">Durata ședinței</legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {PA_DURATE.map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={cfg.durata === d}
              onClick={() => set("durata", d as PaDurata)}
              className={chip(cfg.durata === d) + " text-center"}
            >
              {d} min
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-bold">Obiectivul</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {PA_OBIECTIVE.map((o) => (
            <button
              key={o.slug}
              type="button"
              aria-pressed={cfg.obiectiv === o.slug}
              onClick={() => set("obiectiv", o.slug)}
              className={chip(cfg.obiectiv === o.slug)}
            >
              <span className="block">{o.name}</span>
              <span className="block text-xs font-normal text-muted-foreground">{o.desc}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-muted/60 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Costul sesiunii</p>
          {acces?.gratuit ? (
            <p className="text-2xl font-bold">
              <span className="text-muted-foreground line-through">{pret} lei</span>{" "}
              <span className="text-success">gratuit</span>
            </p>
          ) : (
            <p className="text-2xl font-bold">{pret} lei</p>
          )}
          <p className="text-xs text-muted-foreground">
            {cfg.durata} minute · plata o singură dată, înainte de începere
          </p>
        </div>
        {loading ? (
          <div className="h-12 w-48 animate-pulse rounded-full bg-muted" />
        ) : !user ? (
          <div className="flex flex-wrap gap-2">
            <Link to="/signup" className="btn-primary h-12 px-6">
              Creează cont și începe
            </Link>
            <Link to="/login" className="btn-outline h-12 px-5">
              Am cont
            </Link>
          </div>
        ) : (
          <button
            type="button"
            onClick={porneste}
            disabled={
              pending ||
              acces?.aiDisponibil === false ||
              (!acces?.gratuit && acces?.plataActiva === false)
            }
            className="btn-primary h-12 px-6 disabled:opacity-60"
          >
            {pending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : acces?.gratuit ? (
              <Sparkles className="mr-2 h-4 w-4" />
            ) : (
              <CreditCard className="mr-2 h-4 w-4" />
            )}
            {acces?.gratuit ? "Începe sesiunea (cont de test)" : `Plătește ${pret} lei și începe`}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
      {user && acces && !acces.aiDisponibil && (
        <p role="alert" className="mt-3 rounded-xl bg-warning/10 px-4 py-2 text-sm text-foreground">
          Profesorul AI este temporar indisponibil (creditele AI ale platformei s-au epuizat). Nu
          poți porni o sesiune acum și nu ți se percepe nimic. Încearcă mai târziu sau{" "}
          <Link to="/meditatii" className="font-semibold text-primary underline">
            cere un meditator real
          </Link>
          .
        </p>
      )}
      {user && acces?.gratuit && acces.aiDisponibil && (
        <p className="mt-3 text-xs text-muted-foreground">
          Cont de test: fără plată și fără limită zilnică internă. Funcționează cât timp platforma
          are credite AI disponibile.
        </p>
      )}
      {user && acces && !acces.gratuit && !acces.plataActiva && (
        <p className="mt-3 text-sm text-muted-foreground">
          Plata cu cardul se activează în curând.
        </p>
      )}
      {eroare && (
        <p className="mt-3 rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {eroare}
        </p>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        Plata se face securizat prin Stripe (card, Apple Pay, Google Pay). Profesorul AI poate
        greși; pentru pregătire de examen îți recomandăm și un meditator real.
      </p>
    </div>
  );
}

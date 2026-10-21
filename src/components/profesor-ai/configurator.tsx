import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Crown, Loader2, Sparkles } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { VerificareTelefon } from "./verificare-telefon";
import { profesorAiAcces, profesorAiPorneste } from "@/lib/profesor-ai.functions";
import {
  PA_DURATE,
  PA_MATERII,
  PA_NIVELURI,
  PA_OBIECTIVE,
  type PaConfig,
  type PaDurata,
  type TabelPreturi,
} from "@/lib/profesor-ai";

/** Durata lecției gratuite de probă; restul duratelor sunt Premium (în curând). */
const DURATA_GRATUITA: PaDurata = 15;

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
    durata: DURATA_GRATUITA,
    obiectiv: "lectie",
  });
  const [acces, setAcces] = useState<{
    poateTesta: boolean;
    gratuit: boolean;
    preturi: TabelPreturi;
    plataActiva: boolean;
    premiumActiv: boolean;
    telefonVerificat: boolean;
    lectiaGratuitaFolosita: boolean;
    aiDisponibil: boolean;
  } | null>(null);
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");

  const incarcaAcces = () =>
    profesorAiAcces()
      .then(setAcces)
      .catch(() => setAcces(null));
  useEffect(() => {
    if (!user) return setAcces(null);
    incarcaAcces();
  }, [user]);

  // Fără cont de test: doar lecția de 15 minute se poate porni; restul = Premium, în curând.
  const premium = cfg.durata !== DURATA_GRATUITA;
  const blocatPremium = !!user && !acces?.gratuit && premium && acces?.premiumActiv === false;
  const faraLectii = !!user && !acces?.gratuit && !premium && !!acces?.lectiaGratuitaFolosita;
  const trebuieVerificat = !!user && !!acces && !acces.gratuit && !premium && !acces.telefonVerificat;
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

  if (loading) return <div className="card-soft h-64 animate-pulse" aria-busy="true" />;

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
          {PA_DURATE.map((d) => {
            const esteGratuit = d === DURATA_GRATUITA;
            return (
              <button
                key={d}
                type="button"
                aria-pressed={cfg.durata === d}
                onClick={() => set("durata", d as PaDurata)}
                className={chip(cfg.durata === d) + " text-center"}
              >
                <span className="block">{d} min</span>
                <span className="block text-[11px] font-normal text-muted-foreground">
                  {acces?.gratuit
                    ? "cont de test"
                    : esteGratuit
                      ? "gratuit"
                      : "Premium · în curând"}
                </span>
              </button>
            );
          })}
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
          <p className="text-xs text-muted-foreground">Costul lecției</p>
          {acces?.gratuit ? (
            <p className="text-2xl font-bold text-success">gratuit · cont de test</p>
          ) : premium ? (
            <p className="text-2xl font-bold">
              <Crown className="mr-1 inline h-5 w-5 text-primary" aria-hidden="true" />
              Premium · în curând
            </p>
          ) : (
            <p className="text-2xl font-bold text-success">gratuit</p>
          )}
          <p className="text-xs text-muted-foreground">
            {acces?.gratuit
              ? `${cfg.durata} minute · fără plată și fără limită zilnică`
              : premium
                ? `${cfg.durata} minute · disponibil cu contul Premium, pe care îl pregătim`
                : `${cfg.durata} minute · lecție de probă, fără card`}
          </p>
        </div>
        {loading ? (
          <div className="h-12 w-48 animate-pulse rounded-full bg-muted" />
        ) : !user ? (
          <div className="flex flex-wrap gap-2">
            <Link to="/signup" className="btn-primary h-12 px-6">
              Creează cont și începe gratuit
            </Link>
            <Link to="/login" className="btn-outline h-12 px-5">
              Am cont
            </Link>
          </div>
        ) : (
          <button
            type="button"
            onClick={porneste}
            disabled={pending || acces?.aiDisponibil === false || blocatPremium || faraLectii || trebuieVerificat}
            className="btn-primary h-12 px-6 disabled:opacity-60"
          >
            {pending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : premium && !acces?.gratuit ? (
              <Crown className="mr-2 h-4 w-4" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            {acces?.gratuit
              ? "Începe lecția (cont de test)"
              : premium
                ? "Premium · în curând"
                : `Începe lecția gratuită de ${DURATA_GRATUITA} minute`}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
      {blocatPremium && (
        <p className="mt-3 text-sm text-muted-foreground">
          Lecțiile de 30, 45 și 60 de minute vor fi disponibile cu contul Premium, în curând. Până
          atunci poți face gratuit lecția de {DURATA_GRATUITA} minute.
        </p>
      )}
      {faraLectii && (
        <p className="mt-3 text-sm text-muted-foreground">
          Ai folosit deja lecția gratuită. Lecțiile mai lungi vin în curând; până atunci poți{" "}
          <Link to="/meditatii" className="font-semibold text-primary underline">
            cere un meditator real
          </Link>
          .
        </p>
      )}
      {trebuieVerificat && <VerificareTelefon onVerificat={incarcaAcces} />}
      {user && acces && !acces.aiDisponibil && (
        <p role="alert" className="mt-3 rounded-xl bg-warning/10 px-4 py-2 text-sm text-foreground">
          Profesorul AI este temporar indisponibil. Încearcă puțin mai târziu sau{" "}
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
      {eroare && (
        <p className="mt-3 rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {eroare}
        </p>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        Lecția de probă nu cere card. Profesorul AI poate greși; pentru pregătire de examen îți
        recomandăm și un meditator real.
      </p>
    </div>
  );
}

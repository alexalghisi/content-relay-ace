import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Loader2, Mic, MicOff, Send, Square, Volume2, VolumeX } from "lucide-react";
import { AvatarAnimat, useVoceRo } from "./avatar-animat";
import { profesorAiAvatar, profesorAiRaspunde } from "@/lib/profesor-ai.functions";
import {
  paMaterieName,
  paNivelName,
  paObiectivName,
  type PaConfig,
  type PaReplica,
} from "@/lib/profesor-ai";

type Msg = { role: "user" | "assistant"; content: string; tabla?: string };
type HeyGen = {
  speak: (r: { text: string; taskType?: string }) => Promise<unknown>;
  interrupt: () => Promise<unknown>;
  stopAvatar: () => Promise<unknown>;
};

const START =
  "Începe sesiunea: salută-mă pe scurt, spune-mi cum lucrăm azi și pune-mi prima întrebare.";
const SCURTATURI = [
  "Nu am înțeles, explică altfel",
  "Dă-mi un exemplu",
  "Dă-mi un exercițiu",
  "Verifică-mi răspunsul",
  "Mai simplu, te rog",
];

type SR = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  start: () => void;
  stop: () => void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
};

export function SesiuneProfesorAi({
  token,
  config,
  exp,
  gratuit,
}: {
  token: string;
  config: PaConfig;
  exp: number;
  gratuit: boolean;
}) {
  const [mesaje, setMesaje] = useState<Msg[]>([]);
  const [emotie, setEmotie] = useState<PaReplica["emotie"]>("zambet");
  const [tabla, setTabla] = useState<string>("");
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");
  const [asculta, setAsculta] = useState(false);
  const [sunet, setSunet] = useState(true);
  const [ramas, setRamas] = useState(() => Math.max(0, exp - Date.now()));
  const [modAvatar, setModAvatar] = useState<"incarcare" | "realist" | "animat">("incarcare");
  const [realistVorbeste, setRealistVorbeste] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const heygen = useRef<HeyGen | null>(null);
  const sr = useRef<SR | null>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const voce = useVoceRo();
  const terminat = !gratuit && ramas <= 0;

  // Avatar realist (HeyGen) dacă e configurat; altfel avatarul animat cu voce din browser.
  useEffect(() => {
    let anulat = false;
    (async () => {
      try {
        const { heygen: h } = await profesorAiAvatar({ data: { token } });
        if (!h || anulat) return setModAvatar("animat");
        const mod = await import("@heygen/streaming-avatar");
        const av = new mod.default({ token: h.token });
        av.on(mod.StreamingEvents.STREAM_READY, (e: CustomEvent<MediaStream>) => {
          if (video.current) {
            video.current.srcObject = e.detail;
            void video.current.play().catch(() => {});
          }
        });
        av.on(mod.StreamingEvents.AVATAR_START_TALKING, () => setRealistVorbeste(true));
        av.on(mod.StreamingEvents.AVATAR_STOP_TALKING, () => setRealistVorbeste(false));
        av.on(mod.StreamingEvents.STREAM_DISCONNECTED, () => setModAvatar("animat"));
        await av.createStartAvatar({
          quality: mod.AvatarQuality.High,
          avatarName: h.avatarId,
          language: "ro",
          voice: { voiceId: h.voiceId, emotion: mod.VoiceEmotion.FRIENDLY, rate: 1 },
          activityIdleTimeout: 600,
        });
        if (anulat) return void av.stopAvatar();
        heygen.current = av as unknown as HeyGen;
        setModAvatar("realist");
      } catch {
        if (!anulat) setModAvatar("animat");
      }
    })();
    return () => {
      anulat = true;
      void heygen.current?.stopAvatar().catch(() => {});
      heygen.current = null;
    };
  }, [token]);

  useEffect(() => {
    if (gratuit) return;
    const t = window.setInterval(() => setRamas(Math.max(0, exp - Date.now())), 1000);
    return () => window.clearInterval(t);
  }, [exp, gratuit]);

  useEffect(() => {
    scroll.current?.scrollTo({ top: scroll.current.scrollHeight, behavior: "smooth" });
  }, [mesaje, pending]);

  const vorbeste = useCallback(
    async (t: string) => {
      if (!sunet) return;
      if (heygen.current) {
        try {
          await heygen.current.speak({ text: t, taskType: "repeat" });
          return;
        } catch {
          setModAvatar("animat");
        }
      }
      await voce.spune(t);
    },
    [sunet, voce],
  );

  const trimite = useCallback(
    async (continut: string, ascuns = false) => {
      const c = continut.trim();
      if (!c || pending || terminat) return;
      setEroare("");
      voce.opreste();
      void heygen.current?.interrupt().catch(() => {});
      const istoric: Msg[] = [...mesaje, { role: "user", content: c }];
      if (!ascuns) setMesaje(istoric);
      setPending(true);
      setEmotie("gandire");
      const r = await profesorAiRaspunde({
        data: { token, mesaje: istoric.slice(-30).map(({ role, content }) => ({ role, content })) },
      }).catch(() => ({ ok: false as const, error: "Conexiunea a eșuat. Încearcă din nou." }));
      setPending(false);
      if (!r.ok) {
        setEroare(r.error);
        setEmotie("neutru");
        return;
      }
      const raspuns: Msg = { role: "assistant", content: r.data.vorbit, tabla: r.data.tabla };
      // Mesajul de pornire rămâne în istoric (pentru AI), dar nu se afișează ca replică a elevului.
      setMesaje(ascuns ? [{ role: "user", content: c }, raspuns] : [...istoric, raspuns]);
      if (r.data.tabla) setTabla(r.data.tabla);
      setEmotie(r.data.emotie);
      void vorbeste(r.data.vorbit);
    },
    [mesaje, pending, terminat, token, voce, vorbeste],
  );

  // Profesorul deschide lecția după ce avatarul e gata.
  const pornit = useRef(false);
  useEffect(() => {
    if (modAvatar === "incarcare" || pornit.current) return;
    pornit.current = true;
    void trimite(START, true);
  }, [modAvatar, trimite]);

  const microfon = () => {
    if (asculta) return sr.current?.stop();
    const W = window as unknown as {
      SpeechRecognition?: new () => SR;
      webkitSpeechRecognition?: new () => SR;
    };
    const Ctor = W.SpeechRecognition ?? W.webkitSpeechRecognition;
    if (!Ctor) {
      setEroare("Browserul tău nu suportă dictarea. Scrie întrebarea în căsuța de mai jos.");
      return;
    }
    voce.opreste();
    void heygen.current?.interrupt().catch(() => {});
    const rec = new Ctor();
    rec.lang = "ro-RO";
    rec.interimResults = false;
    rec.continuous = false;
    rec.onresult = (e) => {
      const spus = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join(" ");
      if (spus.trim()) void trimite(spus);
    };
    rec.onend = () => setAsculta(false);
    rec.onerror = () => setAsculta(false);
    sr.current = rec;
    setAsculta(true);
    rec.start();
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const t = text;
    setText("");
    void trimite(t);
  };

  const min = Math.floor(ramas / 60000);
  const sec = Math.floor((ramas % 60000) / 1000);
  const vorbesteAcum = modAvatar === "realist" ? realistVorbeste : voce.vorbeste;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
      <section className="min-w-0 overflow-hidden rounded-3xl border border-border bg-foreground/95 shadow-[var(--shadow-card)]">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          {modAvatar === "realist" ? (
            <video ref={video} autoPlay playsInline className="h-full w-full object-cover" />
          ) : modAvatar === "animat" ? (
            <AvatarAnimat
              gura={voce.gura}
              emotie={pending ? "gandire" : emotie}
              asculta={asculta}
            />
          ) : (
            <div className="grid h-full place-items-center text-background/80">
              <Loader2 className="h-8 w-8 animate-spin" aria-label="Se conectează profesorul" />
            </div>
          )}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-black/55 px-3 py-1 font-semibold text-white">
              Profesor AI · {paMaterieName(config.materie)}
            </span>
            {vorbesteAcum && (
              <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground">
                vorbește…
              </span>
            )}
            {pending && (
              <span className="rounded-full bg-black/55 px-3 py-1 text-white">se gândește…</span>
            )}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white">
              <Clock className="h-3.5 w-3.5" />{" "}
              {gratuit ? "test · nelimitat" : `${min}:${String(sec).padStart(2, "0")}`}
            </span>
            <button
              type="button"
              onClick={() => {
                setSunet((s) => !s);
                voce.opreste();
              }}
              aria-label={sunet ? "Oprește vocea" : "Pornește vocea"}
              className="grid h-8 w-8 place-items-center rounded-full bg-black/55 text-white"
            >
              {sunet ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {tabla && (
          <div className="border-t border-white/10 bg-[#13321f] px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-200/80">
              Tabla
            </p>
            <pre className="mt-1 whitespace-pre-wrap font-mono text-sm leading-relaxed text-emerald-50">
              {tabla}
            </pre>
          </div>
        )}
      </section>

      <section className="flex min-h-[420px] min-w-0 flex-col rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="border-b border-border px-5 py-3 text-xs text-muted-foreground">
          {paNivelName(config.nivel)} · {paObiectivName(config.obiectiv)} · {config.durata} min
        </div>
        <div ref={scroll} className="flex-1 space-y-3 overflow-y-auto px-5 py-4" aria-live="polite">
          {mesaje
            .filter((m) => m.content !== START)
            .map((m, i) => (
              <div key={i} className={m.role === "user" ? "ml-auto max-w-[85%]" : "max-w-[90%]"}>
                <p
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                >
                  {m.content}
                </p>
              </div>
            ))}
          {pending && <p className="text-sm text-muted-foreground">Profesorul se gândește…</p>}
          {eroare && (
            <p className="rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">
              {eroare}
            </p>
          )}
          {terminat && (
            <div className="rounded-2xl border border-border p-4 text-sm">
              <p className="font-semibold">Sesiunea s-a încheiat.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/profesor-ai" className="btn-primary h-10 px-4 text-sm">
                  Sesiune nouă
                </Link>
                <Link to="/meditatii" className="btn-outline h-10 px-4 text-sm">
                  Cere un meditator real
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 overflow-x-auto px-5 pb-2">
          {SCURTATURI.map((s) => (
            <button
              key={s}
              type="button"
              disabled={pending || terminat}
              onClick={() => void trimite(s)}
              className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs hover:border-primary/40 disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
        <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-3">
          <button
            type="button"
            onClick={microfon}
            disabled={pending || terminat}
            aria-label={asculta ? "Oprește microfonul" : "Vorbește cu profesorul"}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${asculta ? "bg-destructive text-white" : "bg-primary text-primary-foreground"} disabled:opacity-50`}
          >
            {asculta ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>
          <label htmlFor="pa-text" className="sr-only">
            Scrie profesorului
          </label>
          <input
            id="pa-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={terminat}
            placeholder={asculta ? "Te ascult…" : "Scrie sau apasă microfonul și vorbește"}
            className="h-11 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-sm"
            maxLength={2000}
          />
          {vorbesteAcum ? (
            <button
              type="button"
              onClick={() => {
                voce.opreste();
                void heygen.current?.interrupt().catch(() => {});
              }}
              aria-label="Oprește profesorul"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border"
            >
              <Square className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={pending || terminat || !text.trim()}
              aria-label="Trimite"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          )}
        </form>
        {modAvatar === "animat" && (
          <p className="px-5 pb-3 text-[11px] text-muted-foreground">
            Avatar animat cu vocea dispozitivului tău.
          </p>
        )}
      </section>
    </div>
  );
}

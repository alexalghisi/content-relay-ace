import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Loader2, Mic, MicOff, Send, Square, VideoOff, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createSpeechQueue } from "@/lib/profesor-ai-dialog";
import { profesorAiAvatar, profesorAiRaspunde } from "@/lib/profesor-ai.functions";
import {
  paMaterieName,
  paNivelName,
  paObiectivName,
  type PaConfig,
} from "@/lib/profesor-ai";

type Msg = { role: "user" | "assistant"; content: string; tabla?: string };
type HeyGen = {
  speak: (r: { text: string; taskType?: string }) => Promise<unknown>;
  interrupt: () => Promise<unknown>;
  startListening: () => Promise<unknown>;
  stopListening: () => Promise<unknown>;
  stopAvatar: () => Promise<unknown>;
};

/** Ultimele mesaje (economie de tokeni), începând mereu cu un mesaj al elevului. */
const fereastra = (m: Msg[]) => {
  const w = m.slice(-12);
  while (w.length && w[0].role !== "user") w.shift();
  return w.map(({ role, content }) => ({ role, content }));
};

const START =
  "Începe sesiunea: un salut scurt și o singură întrebare despre ce vreau să învăț, fără prezentare.";
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
  onspeechstart: (() => void) | null;
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
  const [tabla, setTabla] = useState<string>("");
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");
  // Ultimul mesaj care n-a primit răspuns din cauza furnizorului — se poate retrimite manual.
  const [deReluat, setDeReluat] = useState<{ text: string; ascuns: boolean; cod?: string } | null>(
    null,
  );
  const [asculta, setAsculta] = useState(false);
  const [sunet, setSunet] = useState(true);
  const [ramas, setRamas] = useState(() => Math.max(0, exp - Date.now()));
  const [modAvatar, setModAvatar] = useState<"incarcare" | "realist" | "indisponibil">("incarcare");
  const [avatarError, setAvatarError] = useState("");
  const [realistVorbeste, setRealistVorbeste] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const heygen = useRef<HeyGen | null>(null);
  const sr = useRef<SR | null>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const coada = useRef(createSpeechQueue());
  const processing = useRef(false);
  const revision = useRef(0);
  const messagesRef = useRef<Msg[]>([]);
  const nextQuestion = useRef<{ text: string; ascuns: boolean }[]>([]);
  const sendRef = useRef<(text: string, ascuns?: boolean) => Promise<void>>(async () => {});
  const listening = useRef(false);
  const liveVoice = useRef(false);
  const interrupt = useCallback(() => {
    revision.current += 1;
    coada.current.cancel();
    setRealistVorbeste(false);
    void heygen.current?.interrupt().catch(() => {});
  }, []);
  const interruptRef = useRef(interrupt);
  interruptRef.current = interrupt;
  const terminat = !gratuit && ramas <= 0;

  // Never disguise an unavailable realistic stream with a cartoon or device voice.
  useEffect(() => {
    let anulat = false;
    (async () => {
      try {
        const { heygen: h, error } = await profesorAiAvatar({ data: { token } });
        if (anulat) return;
        if (!h) { setAvatarError(error ?? "Avatarul video nu este disponibil."); return setModAvatar("indisponibil"); }
        if (h.provider === "liveavatar") {
          const la = await import("@heygen/liveavatar-web-sdk");
          // Microfonul pornește doar la cererea elevului; vocea lui întrerupe profesorul.
          const s = new la.LiveAvatarSession(h.token, { autoKeepAlive: true, voiceChat: { defaultMuted: true } });
          heygen.current = {
            speak: async ({ text }) => { s.repeat(text); },
            interrupt: async () => { s.interrupt(); },
            startListening: async () => { await s.voiceChat.unmute(); },
            stopListening: async () => { await s.voiceChat.mute(); },
            stopAvatar: async () => { await s.stop(); },
          };
          liveVoice.current = true;
          s.on(la.SessionEvent.SESSION_STREAM_READY, () => {
            if (video.current) { s.attach(video.current); void video.current.play().catch(() => {}); }
          });
          s.on(la.AgentEventsEnum.AVATAR_SPEAK_STARTED, () => setRealistVorbeste(true));
          s.on(la.AgentEventsEnum.AVATAR_SPEAK_ENDED, () => setRealistVorbeste(false));
          s.on(la.AgentEventsEnum.USER_SPEAK_STARTED, () => interruptRef.current());
          s.on(la.AgentEventsEnum.USER_TRANSCRIPTION, (e) => {
            if (e.text?.trim()) void sendRef.current(e.text);
          });
          s.on(la.SessionEvent.SESSION_DISCONNECTED, () => {
            if (!anulat) { setAvatarError("Conexiunea video s-a închis."); setModAvatar("indisponibil"); }
          });
          await s.start();
          if (anulat) return void s.stop();
          setModAvatar("realist");
          return;
        }
        const mod = await import("@heygen/streaming-avatar");
        const av = new mod.default({ token: h.token });
        heygen.current = av as unknown as HeyGen;
        av.on(mod.StreamingEvents.STREAM_READY, (e: CustomEvent<MediaStream>) => {
          if (video.current) {
            video.current.srcObject = e.detail;
            void video.current.play().catch(() => {});
          }
        });
        av.on(mod.StreamingEvents.AVATAR_START_TALKING, () => setRealistVorbeste(true));
        av.on(mod.StreamingEvents.AVATAR_STOP_TALKING, () => setRealistVorbeste(false));
        av.on(mod.StreamingEvents.STREAM_DISCONNECTED, () => {
          if (!anulat) { setAvatarError("Conexiunea video s-a închis."); setModAvatar("indisponibil"); }
        });
        await av.createStartAvatar({
          quality: mod.AvatarQuality.High,
          avatarName: h.avatarId,
          language: "ro",
          voice: {
            voiceId: h.voiceId,
            emotion: mod.VoiceEmotion.FRIENDLY,
            rate: 1,
          },
          activityIdleTimeout: 600,
        });
        if (anulat) return void av.stopAvatar();
        heygen.current = av as unknown as HeyGen;
        setModAvatar("realist");
      } catch {
        void heygen.current?.stopAvatar().catch(() => {});
        heygen.current = null;
        if (!anulat) { setAvatarError("Nu am putut conecta avatarul video. Verifică accesul și configurația avatarului."); setModAvatar("indisponibil"); }
      }
    })();
    return () => {
      anulat = true;
      coada.current.cancel();
      listening.current = false;
      sr.current?.stop();
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

  // Coadă de vorbire: salutul și primul răspuns se spun pe rând, fără să se taie unul pe altul.
  const vorbeste = useCallback(
    (t: string) => {
      if (!sunet) return Promise.resolve();
      const spune = async () => {
        if (heygen.current) {
          try {
            await heygen.current.speak({ text: t, taskType: "repeat" });
            return;
          } catch {
            setModAvatar("indisponibil");
          }
        }

      };
      return coada.current.enqueue(spune);
    },
    [sunet],
  );

  const trimite = useCallback(
    async (continut: string, ascuns = false) => {
      const c = continut.trim();
      if (!c || terminat) return;
      if (!ascuns) interrupt();
      if (processing.current) {
        nextQuestion.current.push({ text: c, ascuns });
        return;
      }
      processing.current = true;
      const currentRevision = revision.current;
      setEroare("");
      const previous = messagesRef.current;
      const istoric: Msg[] = [...previous, { role: "user", content: c }];
      if (!ascuns) setMesaje(istoric);
      setPending(true);

      const r = await profesorAiRaspunde({
        data: { token, mesaje: fereastra(istoric) },
      }).catch(() => ({
        ok: false as const,
        error: "Conexiunea a eșuat. Încearcă din nou.",
        cod: "retea" as string | undefined,
      }));
      processing.current = false;
      setPending(false);
      const next = nextQuestion.current.shift();
      if (next) {
        messagesRef.current = istoric;
        void sendRef.current(next.text, next.ascuns);
        return;
      }
      if (currentRevision !== revision.current) return;
      if (!r.ok) {
        setEroare(r.error);

        // Nu reîncercăm automat (fără bucle și fără cost ascuns); elevul apasă „Reîncearcă”.
        setDeReluat({ text: c, ascuns, cod: r.cod });
        if (!ascuns) setMesaje(previous);
        return;
      }
      setDeReluat(null);
      const raspuns: Msg = { role: "assistant", content: r.data.vorbit, tabla: r.data.tabla };
      // Mesajul de pornire rămâne în istoric (pentru AI), dar nu se afișează ca replică a elevului.
      messagesRef.current = [...istoric, raspuns];
      setMesaje(messagesRef.current);
      if (r.data.tabla) setTabla(r.data.tabla);

      void vorbeste(r.data.vorbit);
    },
    [terminat, token, interrupt, vorbeste],
  );

  sendRef.current = trimite;

  // Profesorul începe să vorbească singur imediat ce avatarul e gata: salutul se spune pe loc,
  // iar prima întrebare a lecției vine de la AI imediat după. Dacă browserul nu permite încă
  // sunet (pagină deschisă direct, fără click), cerem un singur click „Începe lecția”.
  const [permisSunet, setPermisSunet] = useState(true);
  useEffect(() => {
    const ua = (navigator as Navigator & { userActivation?: { hasBeenActive: boolean } })
      .userActivation;
    if (ua && !ua.hasBeenActive) setPermisSunet(false);
  }, []);
  const pornit = useRef(false);
  useEffect(() => {
    if (modAvatar === "incarcare" || !permisSunet || pornit.current) return;
    pornit.current = true;

    void trimite(START, true);
  }, [modAvatar, permisSunet, trimite, vorbeste, config.materie]);

  const microfon = () => {
    // LiveAvatar: microfon continuu — vocea elevului oprește profesorul și devine întrebarea.
    if (liveVoice.current && heygen.current) {
      const pornit = !asculta;
      setAsculta(pornit);
      listening.current = pornit;
      if (pornit) interrupt();
      const op = pornit ? heygen.current.startListening() : heygen.current.stopListening();
      void op.catch(() => {
        setAsculta(false);
        listening.current = false;
        setEroare("Microfonul nu este disponibil. Verifică permisiunea sau scrie întrebarea.");
      });
      return;
    }
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
    interrupt();
    listening.current = true;
    void heygen.current?.startListening().catch(() => {});
    const rec = new Ctor();
    rec.lang = "ro-RO";
    rec.interimResults = false;
    rec.onspeechstart = interrupt;
    rec.continuous = false;
    rec.onresult = (e) => {
      const spus = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join(" ");
      if (spus.trim()) void sendRef.current(spus);
    };
    const stopListening = () => {
      listening.current = false;
      setAsculta(false);
      void heygen.current?.stopListening().catch(() => {});
    };
    rec.onend = stopListening;
    rec.onerror = () => {
      stopListening();
      setEroare("Microfonul nu este disponibil. Verifică permisiunea sau scrie întrebarea.");
    };
    sr.current = rec;
    setAsculta(true);
    try { rec.start(); } catch { rec.onerror?.(); }
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const t = text;
    setText("");
    void trimite(t);
  };

  const min = Math.floor(ramas / 60000);
  const sec = Math.floor((ramas % 60000) / 1000);
  const vorbesteAcum = modAvatar === "realist" && realistVorbeste;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
      <section className="min-w-0 overflow-hidden rounded-3xl border border-border bg-foreground/95 shadow-[var(--shadow-card)]">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          <video ref={video} autoPlay playsInline muted={!sunet} className={modAvatar === "realist" ? "h-full w-full object-cover" : "hidden"} />
          {modAvatar === "indisponibil" ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-background">
              <VideoOff className="h-8 w-8" />
              <p>{avatarError || "Avatarul video și vocea realistă nu sunt disponibile momentan."}</p>
              <p className="text-sm">Poți continua lecția în scris.</p>
            </div>
          ) : modAvatar === "incarcare" ? (
            <div className="grid h-full place-items-center text-background/80">
              <Loader2 className="h-8 w-8 animate-spin" aria-label="Se conectează profesorul" />
            </div>
          ) : null}
          {!permisSunet && modAvatar !== "incarcare" && (
            <Button
              type="button"
              onClick={() => setPermisSunet(true)}
              className="absolute inset-0 grid place-items-center bg-foreground/35 text-lg font-bold text-background"
            >
              <span className="rounded-full bg-primary px-6 py-3 shadow-lg">▶ Începe lecția</span>
            </Button>
          )}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-foreground/55 px-3 py-1 font-semibold text-background">
              Profesor AI · {paMaterieName(config.materie)}
            </span>
            {vorbesteAcum && (
              <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground">
                vorbește…
              </span>
            )}
            {pending && (
              <span className="rounded-full bg-foreground/55 px-3 py-1 text-background">se gândește…</span>
            )}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground/55 px-3 py-1 text-xs font-semibold text-background">
              <Clock className="h-3.5 w-3.5" />{" "}
              {gratuit ? "cont de test · fără plată" : `${min}:${String(sec).padStart(2, "0")}`}
            </span>
            <Button
              type="button"
              onClick={() => {
                setSunet((s) => !s);
                interrupt();
              }}
              aria-label={sunet ? "Oprește vocea" : "Pornește vocea"}
              className="grid h-8 w-8 place-items-center rounded-full bg-foreground/55 text-background"
            >
              {sunet ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        {tabla && (
          <div className="border-t border-border bg-foreground px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-background/80">
              Tabla
            </p>
            <pre className="mt-1 whitespace-pre-wrap font-mono text-sm leading-relaxed text-background">
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
            <div
              role="alert"
              className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              <p>{eroare}</p>
              {deReluat && (
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    onClick={() => {
                      const d = deReluat;
                      setDeReluat(null);
                      void trimite(d.text, d.ascuns);
                    }}
                    disabled={pending}
                    className="btn-outline h-9 px-3 text-xs"
                  >
                    Reîncearcă
                  </Button>
                  {(deReluat.cod === "credits" ||
                    deReluat.cod === "auth" ||
                    deReluat.cod === "config") && (
                    <Link to="/meditatii" className="btn-outline h-9 px-3 text-xs">
                      Cere un meditator real
                    </Link>
                  )}
                </div>
              )}
            </div>
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
            <Button
              key={s}
              type="button"
              disabled={terminat}
              onClick={() => void trimite(s)}
              className="shrink-0 rounded-full border border-border px-3 py-1.5 text-xs hover:border-primary/40 disabled:opacity-50"
            >
              {s}
            </Button>
          ))}
        </div>
        <form onSubmit={submit} className="flex items-center gap-2 border-t border-border p-3">
          <Button
            type="button"
            onClick={microfon}
            disabled={terminat}
            aria-label={asculta ? "Oprește microfonul" : "Vorbește cu profesorul"}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${asculta ? "bg-destructive text-background" : "bg-primary text-primary-foreground"} disabled:opacity-50`}
          >
            {asculta ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <label htmlFor="pa-text" className="sr-only">
            Scrie profesorului
          </label>
          <input
            id="pa-text"
            value={text}
            onChange={(e) => { if (vorbesteAcum) interrupt(); setText(e.target.value); }}
            disabled={terminat}
            placeholder={asculta ? "Te ascult…" : "Scrie sau apasă microfonul și vorbește"}
            className="h-11 min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-sm"
            maxLength={2000}
          />
          {vorbesteAcum && (
            <Button
              type="button"
              onClick={() => {
                interrupt();

              }}
              aria-label="Oprește profesorul"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border"
            >
              <Square className="h-4 w-4" />
            </Button>
          )}
          <Button
              type="submit"
              disabled={terminat || !text.trim()}
              aria-label="Trimite"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
          </Button>
        </form>
        {modAvatar === "indisponibil" && (
          <p className="px-5 pb-3 text-[11px] text-muted-foreground">
            Vocea dispozitivului nu este folosită ca înlocuitor al vocii realiste.
          </p>
        )}
      </section>
    </div>
  );
}

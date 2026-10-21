import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Loader2, Mic, MicOff, Square, VideoOff, Volume2, VolumeX } from "lucide-react";
import hannah from "@/assets/profesoara-hannah.jpg.asset.json";
import { TablaComuna } from "./tabla-comuna";
import { Button } from "@/components/ui/button";
import { createSpeechQueue, isEcho, spokenPart, takeSentences } from "@/lib/profesor-ai-dialog";
import { playLessonMedia } from "@/lib/profesor-ai-audio";
import { supabase } from "@/integrations/supabase/client";
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
  const [pending, setPending] = useState(false);
  const [eroare, setEroare] = useState("");
  const [deReluat, setDeReluat] = useState<{ text: string; ascuns: boolean; cod?: string } | null>(null);
  const [asculta, setAsculta] = useState(false);
  const [sunet, setSunet] = useState(true);
  const [permisSunet, setPermisSunet] = useState(false);
  const [sunetBlocat, setSunetBlocat] = useState(false);
  const audioActivated = useRef(false);
  const [ramas, setRamas] = useState(() => Math.max(0, exp - Date.now()));
  const [modAvatar, setModAvatar] = useState<"incarcare" | "realist" | "indisponibil">("incarcare");
  const [avatarError, setAvatarError] = useState("");
  const [realistVorbeste, setRealistVorbeste] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const heygen = useRef<HeyGen | null>(null);
  const sr = useRef<SR | null>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const coada = useRef(createSpeechQueue());
  const revision = useRef(0);
  const messagesRef = useRef<Msg[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const sendRef = useRef<(text: string, ascuns?: boolean, imagine?: string) => Promise<void>>(async () => {});
  const handsFree = useRef(false);
  const liveVoice = useRef(false);
  const speakEnd = useRef<(() => void) | null>(null);
  const spokenNow = useRef("");
  const speakingRef = useRef(false);
  const sunetRef = useRef(sunet);
  sunetRef.current = sunet;
  // Măsurare: momentul trimiterii întrebării → primul sunet al profesorului.
  const t0 = useRef(0);
  const marcheazaVorbire = () => {
    if (!t0.current) return;
    const ms = Math.round(performance.now() - t0.current);
    t0.current = 0;
    const w = window as unknown as { __paTtfs?: number[] };
    (w.__paTtfs ??= []).push(ms);
    console.info(`[profesor-ai] time-to-first-speech ${ms} ms`);
  };

  const interrupt = useCallback(() => {
    revision.current += 1;
    coada.current.cancel();
    abortRef.current?.abort();
    setRealistVorbeste(false);
    speakEnd.current?.();
    spokenNow.current = "";
    void heygen.current?.interrupt().catch(() => {});
    try { window.speechSynthesis?.cancel(); } catch { /* ignore */ }
  }, []);
  useEffect(() => { speakingRef.current = realistVorbeste; }, [realistVorbeste]);
  const interruptRef = useRef(interrupt);
  interruptRef.current = interrupt;
  const terminat = !gratuit && ramas <= 0;

  const treceLaVoce = useCallback((motiv: string) => {
    heygen.current = null;
    liveVoice.current = false;
    setAvatarError(motiv);
    setModAvatar("indisponibil");
    // Microfonul continuă cu recunoașterea vocală a browserului.
    if (handsFree.current) window.setTimeout(() => startRef.current(), 300);
  }, []);
  const startRef = useRef<() => void>(() => {});

  // Avatar indisponibil → tabla + vocea browserului în română; pagina nu se închide niciodată.
  useEffect(() => {
    let anulat = false;
    (async () => {
      try {
        const { heygen: h, error } = await profesorAiAvatar({ data: { token } });
        if (anulat) return;
        if (!h) return treceLaVoce(error ?? "Avatarul video nu este disponibil.");
        const la = await import("@heygen/liveavatar-web-sdk");
        const { connectVoice } = await import("@/lib/profesor-ai-voice");
        const s = new la.LiveAvatarSession(h.token, { autoKeepAlive: true, voiceChat: { defaultMuted: true } });
        const v = connectVoice(s as unknown as import("@/lib/profesor-ai-voice").VoiceSession, {
          onUserSpeechStart: () => interruptRef.current(),
          onUserTranscript: (t) => void sendRef.current(t),
          onSpeaking: (on) => { setRealistVorbeste(on); if (on) marcheazaVorbire(); },
        });
        heygen.current = {
          speak: ({ text }) => v.speak(text),
          interrupt: async () => { v.interrupt(); },
          startListening: () => v.enableMic(),
          stopListening: () => v.disableMic(),
          stopAvatar: async () => { await s.stop(); },
        };
        liveVoice.current = true;
        s.on(la.SessionEvent.SESSION_STREAM_READY, () => {
          const el = video.current;
          if (el) {
            s.attach(el);
            void playLessonMedia(el, audioActivated.current && sunetRef.current).then((ok) => {
              if (!anulat) setSunetBlocat(!ok && audioActivated.current && sunetRef.current);
            });
          }
        });
        s.on(la.SessionEvent.SESSION_DISCONNECTED, () => {
          console.info("[voice] in session.disconnected");
          if (!anulat && heygen.current) treceLaVoce("Sesiunea video s-a încheiat. Continuăm cu tabla și vocea în română.");
        });
        await s.start();
        if (anulat) return void s.stop();
        setModAvatar("realist");
      } catch {
        void heygen.current?.stopAvatar().catch(() => {});
        if (!anulat) treceLaVoce("Nu am putut conecta avatarul video. Continuăm cu tabla și vocea în română.");
      }
    })();
    return () => {
      anulat = true;
      coada.current.cancel();
      handsFree.current = false;
      sr.current?.stop();
      void heygen.current?.stopAvatar().catch(() => {});
      heygen.current = null;
    };
  }, [token, treceLaVoce]);

  useEffect(() => {
    if (gratuit) return;
    const t = window.setInterval(() => setRamas(Math.max(0, exp - Date.now())), 1000);
    return () => window.clearInterval(t);
  }, [exp, gratuit]);

  useEffect(() => {
    scroll.current?.scrollTo({ top: scroll.current.scrollHeight, behavior: "smooth" });
  }, [mesaje, pending]);

  // Coadă de vorbire: propozițiile se spun pe rând, imediat ce sunt gata.
  const vorbeste = useCallback((t: string) => {
    const spune = async () => {
      if (!sunetRef.current) return marcheazaVorbire();
      spokenNow.current = t;
      if (heygen.current) {
        try { await heygen.current.speak({ text: t, taskType: "repeat" }); return; } catch { heygen.current = null; }
      }
      const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
      if (!synth) return marcheazaVorbire();
      await new Promise<void>((done) => {
        const u = new SpeechSynthesisUtterance(t);
        u.lang = "ro-RO";
        const v = synth.getVoices().find((x) => x.lang.toLowerCase().startsWith("ro"));
        if (v) u.voice = v;
        u.rate = 1.05;
        u.onstart = () => { setRealistVorbeste(true); marcheazaVorbire(); };
        u.onend = u.onerror = () => { setRealistVorbeste(false); done(); };
        synth.speak(u);
      });
    };
    return coada.current.enqueue(spune);
  }, []);

  const trimite = useCallback(
    async (continut: string, ascuns = false, imagine?: string) => {
      const c = continut.trim();
      if (!c || terminat) return;
      interrupt(); // o întrebare nouă oprește orice răspuns în curs
      const rev = revision.current;
      setEroare("");
      const previous = messagesRef.current;
      const istoric: Msg[] = [...previous, { role: "user", content: c }];
      messagesRef.current = istoric;
      setMesaje(istoric);
      setPending(true);
      t0.current = performance.now();
      const tSend = t0.current;
      let primaGata = false;
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      let rostit = false;
      const filler = window.setTimeout(() => {
        if (!rostit && rev === revision.current && !ascuns) { rostit = true; void vorbeste("Hmm, stai puțin."); }
      }, 2500);
      const fail = (error: string, cod?: string) => {
        if (rev !== revision.current) return;
        setEroare(error);
        setDeReluat({ text: c, ascuns, cod });
        messagesRef.current = previous;
        setMesaje(previous);
      };
      try {
        const { data: sess } = await supabase.auth.getSession();
        const res = await fetch("/api/profesor-ai-stream", {
          method: "POST",
          signal: ctrl.signal,
          headers: { "content-type": "application/json", authorization: `Bearer ${sess.session?.access_token ?? ""}` },
          body: JSON.stringify({ token, mesaje: fereastra(istoric), imagine }),
        });
        if (!res.ok || !res.body) {
          const j = (await res.json().catch(() => null)) as { error?: string; cod?: string } | null;
          // Gemini ocupat/limitat → răspuns complet prin serviciul AI de rezervă, apoi rostit pe propoziții.
          if (j?.cod === "rate_limit" || j?.cod === "upstream") {
            const r = await profesorAiRaspunde({ data: { token, mesaje: fereastra(istoric) } }).catch(() => null);
            if (rev !== revision.current) return;
            if (r?.ok) {
              rostit = true;
              void vorbeste(r.data.vorbit.replace(/[*#`_]/g, ""));
              if (r.data.tabla) setTabla(r.data.tabla);
              setDeReluat(null);
              messagesRef.current = [...istoric, { role: "assistant", content: r.data.vorbit, tabla: r.data.tabla }];
              return setMesaje(messagesRef.current);
            }
          }
          return fail(j?.error ?? "Profesorul nu a putut răspunde. Încearcă din nou.", j?.cod);
        }
        const reader = res.body.getReader();
        const dec = new TextDecoder();
        let full = "";
        let restVorbit = "";
        let consumed = 0; // câte caractere din partea vorbită au fost deja trimise la voce
        const bubble = () => {
          const { spoken, board } = spokenPart(full);
          const m: Msg = { role: "assistant", content: spoken.replace(/[*#`_]/g, "").trim() || "…", tabla: board ?? undefined };
          setMesaje([...istoric, m]);
          if (board) setTabla(board);
          return spoken;
        };
        for (;;) {
          const { done, value } = await reader.read();
          if (rev !== revision.current) return void reader.cancel();
          if (value) full += dec.decode(value, { stream: true });
          const spoken = bubble();
          const { sentences } = takeSentences(spoken.slice(consumed) + (done ? " " : ""));
          for (const sn of sentences) {
            consumed = spoken.indexOf(sn, consumed) + sn.length;
            if (!primaGata) {
              primaGata = true;
              const w = window as unknown as { __paFirstSentence?: number[] };
              (w.__paFirstSentence ??= []).push(Math.round(performance.now() - tSend));
            }
            // Fluent speech: only the first sentence goes out alone (fast start); the rest is
            // spoken as one continuous utterance, without pauses between sentences.
            if (!rostit) { rostit = true; void vorbeste(sn.replace(/[*#`_]/g, "")); }
            else restVorbit += " " + sn;
          }
          if (done) {
            const tail = (restVorbit + " " + spoken.slice(consumed)).replace(/[*#`_]/g, "").replace(/\s+/g, " ").trim();
            if (tail) { rostit = true; void vorbeste(tail); }
            break;
          }
        }
        const { spoken, board } = spokenPart(full);
        if (!spoken.trim()) return fail("Nu am primit un răspuns. Încearcă din nou.");
        setDeReluat(null);
        messagesRef.current = [...istoric, { role: "assistant", content: spoken.trim(), tabla: board?.trim() || undefined }];
        setMesaje(messagesRef.current);
      } catch (e) {
        if ((e as Error).name !== "AbortError") fail("Conexiunea a eșuat. Încearcă din nou.", "retea");
      } finally {
        window.clearTimeout(filler);
        if (rev === revision.current) setPending(false);
      }
    },
    [terminat, token, interrupt, vorbeste],
  );
  sendRef.current = trimite;

  // Ascultare continuă (mâini libere) cât timp sesiunea e pornită.
  const startMic = useCallback(() => {
    handsFree.current = true;
    if (liveVoice.current && heygen.current) {
      // Browser recognition would fight LiveAvatar for the microphone.
      const old = sr.current;
      sr.current = null;
      old?.stop();
      setAsculta(true);
      void heygen.current.startListening().catch(() => {
        setAsculta(false);
        handsFree.current = false;
        setEroare("Microfonul nu este disponibil. Permite accesul la microfon sau scrie întrebarea.");
      });
      return;
    }
    const W = window as unknown as { SpeechRecognition?: new () => SR; webkitSpeechRecognition?: new () => SR };
    const Ctor = W.SpeechRecognition ?? W.webkitSpeechRecognition;
    if (!Ctor) {
      handsFree.current = false;
      setEroare("Browserul tău nu suportă dictarea. Scrie întrebarea în căsuța de mai jos.");
      return;
    }
    sr.current?.stop();
    const rec = new Ctor();
    rec.lang = "ro-RO";
    rec.continuous = true;
    rec.interimResults = true;
    rec.onspeechstart = null;
    rec.onresult = (e) => {
      const last = e.results[e.results.length - 1] as ArrayLike<{ transcript: string }> & { isFinal?: boolean };
      const spus = last?.[0]?.transcript?.trim() ?? "";
      // Ignorăm ecoul vocii profesorului captat de microfon.
      if (!spus || isEcho(spus, spokenNow.current)) return;
      if (!last.isFinal) {
        // Elevul vorbește peste profesoară: o oprim imediat, ca la telefon.
        if (speakingRef.current && spus.split(/\s+/).length >= 2) {
          console.info("[voice] fallback barge-in");
          interruptRef.current();
        }
        return;
      }
      console.info("[voice] fallback transcription", spus);
      void sendRef.current(spus);
    };
    rec.onend = () => {
      if (handsFree.current && sr.current === rec) { try { rec.start(); return; } catch { /* fall through */ } }
      setAsculta(false);
    };
    rec.onerror = () => {
      handsFree.current = false;
      setAsculta(false);
      setEroare("Microfonul nu este disponibil. Permite accesul la microfon sau scrie întrebarea.");
    };
    sr.current = rec;
    setAsculta(true);
    try { rec.start(); } catch { rec.onerror?.(); }
  }, []);
  startRef.current = startMic;

  const stopMic = () => {
    handsFree.current = false;
    setAsculta(false);
    const r = sr.current;
    sr.current = null;
    r?.stop();
    void heygen.current?.stopListening().catch(() => {});
  };

  // A tap on a previous page is not enough for Safari's audible playback permission.
  // Invoke playback and speech synthesis synchronously in this page's tap handler.
  const activeazaSunet = () => {
    audioActivated.current = true;
    sunetRef.current = true;
    setSunet(true);
    setPermisSunet(true);
    const el = video.current;
    if (el) void playLessonMedia(el, true).then((ok) => setSunetBlocat(!ok && liveVoice.current));
    const synth = window.speechSynthesis;
    if (synth && !liveVoice.current) {
      const unlock = new SpeechSynthesisUtterance(" ");
      unlock.lang = "ro-RO";
      synth.speak(unlock);
    }
  };
  const pornit = useRef(false);
  useEffect(() => {
    if (modAvatar === "incarcare" || !permisSunet || pornit.current) return;
    pornit.current = true;
    void trimite(START, true);
    startMic();
  }, [modAvatar, permisSunet, trimite, startMic]);

  const microfon = () => (asculta ? stopMic() : startMic());


  const min = Math.floor(ramas / 60000);
  const sec = Math.floor((ramas % 60000) / 1000);
  const vorbesteAcum = modAvatar !== "incarcare" && realistVorbeste;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
      <section className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="relative aspect-[4/3] w-full bg-foreground sm:aspect-video">
          {modAvatar !== "realist" && (
            <img src={hannah.url} alt="Profesoara ta AI" className="absolute inset-0 h-full w-full object-cover" />
          )}
          <video ref={video} autoPlay playsInline muted={!permisSunet || !sunet} poster={hannah.url} className={modAvatar === "realist" ? "h-full w-full object-cover" : "hidden"} />
          {modAvatar === "indisponibil" ? (
            <div className="absolute inset-x-3 bottom-3 flex items-start gap-2 rounded-2xl bg-foreground/70 px-4 py-3 text-sm text-background">
              <VideoOff className="mt-0.5 h-4 w-4 shrink-0" />
              <p>{avatarError || "Video indisponibil momentan."} Vorbește liber: îți răspunde cu vocea browserului, în română.</p>
            </div>
          ) : modAvatar === "incarcare" ? (
            <div className="absolute inset-0 grid place-items-center bg-foreground/30 text-background">
              <Loader2 className="h-8 w-8 animate-spin" aria-label="Se conectează profesoara" />
            </div>
          ) : null}
          {(!permisSunet || sunetBlocat) && (
            <Button
              type="button"
              onClick={activeazaSunet}
              className="absolute inset-0 grid h-full w-full place-items-center rounded-none bg-foreground/35 text-lg font-bold text-background"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-lg"><Volume2 className="h-5 w-5" />{permisSunet ? "Activează sunetul" : "Începe lecția cu sunet"}</span>
            </Button>
          )}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-foreground/55 px-3 py-1 font-semibold text-background">
              Profesor AI · {paMaterieName(config.materie)}
            </span>
            {vorbesteAcum ? (
              <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground">vorbește…</span>
            ) : pending ? (
              <span className="rounded-full bg-foreground/55 px-3 py-1 text-background">se gândește…</span>
            ) : asculta ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-foreground/55 px-3 py-1 text-background">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> te ascult…
              </span>
            ) : null}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground/55 px-3 py-1 text-xs font-semibold text-background">
              <Clock className="h-3.5 w-3.5" />{" "}
              {gratuit ? "cont de test · fără plată" : `${min}:${String(sec).padStart(2, "0")}`}
            </span>
            <Button
              type="button"
              onClick={() => {
                if (!sunet || !permisSunet || sunetBlocat) { activeazaSunet(); return; }
                sunetRef.current = false;
                setSunet(false);
                if (video.current) video.current.muted = true;
                try { window.speechSynthesis?.cancel(); } catch { /* unavailable */ }
              }}
              aria-label={sunet && permisSunet && !sunetBlocat ? "Oprește vocea" : "Pornește vocea"}
              className="grid h-8 w-8 place-items-center rounded-full bg-foreground/55 text-background"
            >
              {sunet && permisSunet && !sunetBlocat ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 border-b border-border px-4 py-3">
          <Button
            type="button"
            onClick={microfon}
            disabled={terminat}
            aria-label={asculta ? "Oprește microfonul" : "Pornește microfonul"}
            aria-pressed={asculta}
            className={`h-12 gap-2 rounded-full px-6 ${asculta ? "bg-primary text-primary-foreground" : "bg-destructive text-background"}`}
          >
            {asculta ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            {asculta ? "Microfon pornit — vorbește oricând" : "Microfon oprit — apasă ca să vorbești"}
          </Button>
          {vorbesteAcum && (
            <Button type="button" variant="outline" onClick={interrupt} aria-label="Oprește profesoara" className="h-12 w-12 rounded-full p-0">
              <Square className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="px-5 pt-3 text-xs text-muted-foreground">
          {paNivelName(config.nivel)} · {paObiectivName(config.obiectiv)} · {config.durata} min · poți vorbi peste profesoară ca s-o întrerupi
        </div>
        <div ref={scroll} className="max-h-72 flex-1 space-y-3 overflow-y-auto px-5 py-3" aria-live="polite">
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
          {eroare && (
            <div role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
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
                  {(deReluat.cod === "credits" || deReluat.cod === "auth" || deReluat.cod === "config") && (
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
      </section>

      <section className="min-w-0 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="border-b border-border px-5 py-3">
          <h2 className="text-sm font-semibold">Tabla comună</h2>
          <p className="text-xs text-muted-foreground">Desenează, pune o poză sau un fișier și arată-i profesoarei.</p>
        </div>
        <TablaComuna
          textProfesor={tabla}
          dezactivat={terminat}
          onTrimite={(jpeg, descriere) => void trimite(descriere, false, jpeg)}
        />
      </section>
    </div>
  );
}

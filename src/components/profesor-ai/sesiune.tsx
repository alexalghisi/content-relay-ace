import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Loader2, VideoOff, Volume2, VolumeX } from "lucide-react";
import hannah from "@/assets/profesoara-hannah.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { createEchoLog, createSpeechQueue, spokenPart, takeSentences } from "@/lib/profesor-ai-dialog";
import { createTrimitereAnticipata, sttBrowserPreferat } from "@/lib/profesor-ai-ascultare";
import { playLessonMedia } from "@/lib/profesor-ai-audio";
import { supabase } from "@/integrations/supabase/client";
import { profesorAiAvatar, profesorAiRaspunde } from "@/lib/profesor-ai.functions";
import {
  paMaterieName,
  paNivelName,
  paObiectivName,
  type PaConfig,
  paLimba,
  PA_START,
  PA_TACERE,
  PA_TACERE_MAX,
  PA_TACERE_SEC,
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
  const coada = useRef(createSpeechQueue());
  const revision = useRef(0);
  const messagesRef = useRef<Msg[]>([]);
  const abortRef = useRef<AbortController | null>(null);
  const sendRef = useRef<(text: string, ascuns?: boolean, imagine?: string, incercare?: number) => Promise<void>>(async () => {});
  const handsFree = useRef(false);
  const liveVoice = useRef(false);
  const speakEnd = useRef<(() => void) | null>(null);
  const spokenNow = useRef("");
  const ecou = useRef(createEchoLog());
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
          // Nu oprim profesoara la orice zgomot/ecou detectat de VAD; o oprește doar o întrebare reală (trimite → interrupt).
          onUserSpeechStart: () => {},
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
        try {
          await s.start();
        } catch {
          await new Promise((r) => setTimeout(r, 1500));
          if (anulat) return;
          await s.start();
        }
        if (anulat) return void s.stop();
        // Închiderea tabului oprește sesiunea LiveAvatar, ca să nu rămână una „fantomă” care blochează următoarea.
        const laInchidere = () => { void s.stop().catch(() => {}); };
        window.addEventListener("pagehide", laInchidere, { once: true });
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

  // Coadă de vorbire: propozițiile se spun pe rând, imediat ce sunt gata.
  const vorbeste = useCallback((t: string) => {
    const spune = async () => {
      if (!sunetRef.current) return marcheazaVorbire();
      spokenNow.current = t;
      ecou.current.add(t);
      if (heygen.current) {
        try { await heygen.current.speak({ text: t, taskType: "repeat" }); return; } catch { heygen.current = null; }
      }
      const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
      if (!synth) return marcheazaVorbire();
      await new Promise<void>((done) => {
        const u = new SpeechSynthesisUtterance(t);
        u.lang = paLimba(config.limba).bcp47;
        const v = synth.getVoices().find((x) => x.lang.toLowerCase().startsWith(paLimba(config.limba).slug));
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
    async (continut: string, ascuns = false, imagine?: string, incercare = 0) => {
      const c = continut.trim();
      if (!c || terminat) return;
      if (c === PA_TACERE) tacereNr.current += 1;
      else if (!ascuns) tacereNr.current = 0;
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
      // A spoken filler only when the model is really slow: queued speech delays the real answer
      // by its own length, so it must not fire around the usual time-to-first-sentence (~1.5 s).
      const filler = window.setTimeout(() => {
        if (!rostit && rev === revision.current && !ascuns) { rostit = true; void vorbeste("Hmm, stai puțin."); }
      }, 4500);
      const fail = (error: string, cod?: string) => {
        if (rev !== revision.current) return;
        messagesRef.current = previous;
        setMesaje(previous);
        // A provider hiccup must not freeze the lesson: one silent retry after a short pause,
        // then she says out loud that something went wrong instead of going quiet.
        if (incercare === 0 && cod !== "limita_interna" && cod !== "auth" && cod !== "auth_user" && cod !== "config") {
          window.setTimeout(() => { if (rev === revision.current) void sendRef.current(c, ascuns, imagine, 1); }, 1500);
          return;
        }
        if (!ascuns) void vorbeste("Am o mică problemă tehnică. Mai spune o dată, te rog.");
        setEroare(error);
        setDeReluat({ text: c, ascuns, cod });
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
        let consumed = 0; // câte caractere din partea vorbită au fost deja trimise la voce
        let inAer = 0; // replici trimise la voce și încă nerostite până la capăt
        const spuneAcum = (t: string) => {
          inAer += 1;
          return vorbeste(t).finally(() => { inAer -= 1; });
        };
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
          // One fluent utterance: LiveAvatar needs ~2 s to start each spoken chunk, so sending the
          // reply sentence by sentence made her stop and start. The spoken part is short (a few
          // sentences, written in well under a second once the first token arrives), so it goes out
          // whole as soon as it is complete (board started or reply finished). Only if the model is
          // unusually slow does she start with the sentences already written.
          const curat = (x: string) => x.replace(/[*#`_]/g, "").replace(/\s+/g, " ").trim();
          const complet = done || spokenPart(full).board !== null;
          const marcheazaPrima = () => {
            if (primaGata) return;
            primaGata = true;
            const w = window as unknown as { __paFirstSentence?: number[] };
            (w.__paFirstSentence ??= []).push(Math.round(performance.now() - tSend));
          };
          if (complet) {
            const rest = curat(spoken.slice(consumed));
            consumed = spoken.length;
            if (rest) { rostit = true; marcheazaPrima(); void spuneAcum(rest); }
          } else if (!rostit && performance.now() - tSend > 3500) {
            const { sentences } = takeSentences(spoken.slice(consumed), true);
            if (sentences.length) {
              const last = sentences[sentences.length - 1];
              consumed = spoken.indexOf(last, consumed) + last.length;
              rostit = true;
              marcheazaPrima();
              void spuneAcum(curat(sentences.join(" ")));
            }
          }
          if (done) {
            // The closing question belongs to the spoken part; if the model put it on the board,
            // she still says it, otherwise the student would wait for a question never asked.
            const tablaText = spokenPart(full).board ?? "";
            const intrebari = tablaText
              .split("\n")
              .map((l) => l.trim())
              .filter((l) => /\?$/.test(l) && l.split(/\s+/).length >= 4 && !spoken.includes(l));
            const q = intrebari[intrebari.length - 1];
            if (q) { rostit = true; void spuneAcum(curat(q)); }
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
    const W = window as unknown as { SpeechRecognition?: new () => SR; webkitSpeechRecognition?: new () => SR };
    const Ctor = W.SpeechRecognition ?? W.webkitSpeechRecognition;
    // Fast path: the browser's recognizer gives interim text, so the question is sent after a short
    // pause and barge-in is immediate. The avatar's own (slower) STT is used only where the browser
    // has none or cannot run it beside the video (iOS); the mic is then published to LiveAvatar.
    if (liveVoice.current && heygen.current && !sttBrowserPreferat(navigator.userAgent, !!Ctor)) {
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
    if (!Ctor) {
      handsFree.current = false;
      setEroare("Browserul tău nu suportă dictarea. Folosește Chrome, Edge sau Safari ca să vorbești cu profesoara.");
      return;
    }
    sr.current?.stop();
    const rec = new Ctor();
    rec.lang = paLimba(config.limba).bcp47;
    rec.continuous = true;
    rec.interimResults = true;
    rec.onspeechstart = null;
    const anticipat = createTrimitereAnticipata((t) => {
      console.info("[voice] browser transcription", t);
      void sendRef.current(t);
    });
    rec.onresult = (e) => {
      const last = e.results[e.results.length - 1] as ArrayLike<{ transcript: string }> & { isFinal?: boolean };
      const spus = last?.[0]?.transcript?.trim() ?? "";
      // Ignorăm ecoul vocii profesorului captat de microfon (difuzoare fără căști).
      if (!spus || ecou.current.isEcho(spus, speakingRef.current)) return;
      if (!last.isFinal) {
        // Elevul vorbește peste profesoară: o oprim doar la vorbire reală (cel puțin 3 cuvinte care nu sunt ecou).
        if (speakingRef.current && spus.split(/\s+/).length >= 3) {
          console.info("[voice] barge-in");
          interruptRef.current();
        }
        // Trimitem întrebarea după o pauză scurtă, fără să așteptăm rezultatul „final” al browserului.
        anticipat.interim(spus);
        return;
      }
      anticipat.final(spus);
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
      unlock.lang = paLimba(config.limba).bcp47;
      synth.speak(unlock);
    }
  };
  // Sunet și microfon pornite din start: clicul de pe pagina anterioară (navigare în aceeași aplicație)
  // păstrează permisiunea browserului; doar dacă browserul totuși blochează apare butonul de sunet.
  const autoSunet = useRef(false);
  useEffect(() => {
    if (autoSunet.current) return;
    autoSunet.current = true;
    activeazaSunet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // If the browser still blocks sound, it turns on by itself at the first touch, click or key anywhere.
  useEffect(() => {
    if (!sunetBlocat) return;
    const evs = ["pointerdown", "touchend", "keydown"] as const;
    const pe = () => { evs.forEach((e) => window.removeEventListener(e, pe, true)); activeazaSunet(); };
    evs.forEach((e) => window.addEventListener(e, pe, true));
    return () => evs.forEach((e) => window.removeEventListener(e, pe, true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sunetBlocat]);
  const pornit = useRef(false);
  const tacereNr = useRef(0);
  // Elevul tace: după PA_TACERE_SEC de liniște (profesoara a terminat, microfonul ascultă),
  // profesoara reia singură firul, ca la o oră reală. Nu insistă la nesfârșit.
  useEffect(() => {
    if (!pornit.current || terminat || pending || realistVorbeste || !asculta || eroare) return;
    if (tacereNr.current >= PA_TACERE_MAX) return;
    const t = window.setTimeout(() => void sendRef.current(PA_TACERE, true), PA_TACERE_SEC * 1000);
    return () => window.clearTimeout(t);
  }, [terminat, pending, realistVorbeste, asculta, eroare, mesaje]);
  useEffect(() => {
    if (modAvatar === "incarcare" || !permisSunet || pornit.current) return;
    pornit.current = true;
    void trimite(PA_START, true);
    startMic();
  }, [modAvatar, permisSunet, trimite, startMic]);



  const min = Math.floor(ramas / 60000);
  const sec = Math.floor((ramas % 60000) / 1000);
  const vorbesteAcum = modAvatar !== "incarcare" && realistVorbeste;

  return (
    <div className="mx-auto grid w-full max-w-4xl gap-4">
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
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-foreground/55 px-3 py-1 font-semibold text-background">
              Profesor AI · {paMaterieName(config.materie)}
            </span>
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

        <div className="px-5 pt-3 text-xs text-muted-foreground">
          {paNivelName(config.nivel)} · {paObiectivName(config.obiectiv)} · {config.durata} min · {paLimba(config.limba).name} · poți vorbi peste profesoară ca s-o întrerupi
        </div>
        {/* Under the video: what the teacher writes (formulas, examples), then errors and the end of the session. */}
        {tabla && (
          <div className="mx-5 mt-3 rounded-2xl bg-muted px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Profesoara a scris</p>
            <pre className="mt-1 whitespace-pre-wrap font-sans text-base leading-relaxed">{tabla}</pre>
          </div>
        )}
        <div className={`space-y-3 px-5 ${eroare || terminat ? "py-3" : "pb-3"}`} aria-live="polite">
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


    </div>
  );
}

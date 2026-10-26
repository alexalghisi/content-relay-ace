import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Loader2, Mic, MicOff } from "lucide-react";
import hannah from "@/assets/profesoara-hannah.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { profesorAiLive } from "@/lib/profesor-ai.functions";
import { paMaterieName, paNivelName, paObiectivName, PA_START, PA_TACERE, PA_TACERE_MAX, PA_TACERE_SEC, type PaConfig } from "@/lib/profesor-ai";
import { SesiuneProfesorAi } from "./sesiune";
import { FiguraSvg } from "./tabla-render";
const TablaRender = lazy(() => import("./tabla-render"));

type Props = { token: string; config: PaConfig; exp: number; gratuit: boolean };

/**
 * Live lesson (Gemini Live speech-to-speech + LiveAvatar LITE lip-sync). If the live path cannot
 * start, the classic lesson takes over so the student is never left without a teacher.
 */
export function SesiuneProfesorAiAuto(p: Props) {
  const [clasic, setClasic] = useState(false);
  if (clasic) return <SesiuneProfesorAi {...p} />;
  return <SesiuneLive {...p} onFallback={() => setClasic(true)} />;
}

function SesiuneLive({ token, config, exp, gratuit, onFallback }: Props & { onFallback: () => void }) {
  const [stare, setStare] = useState<"conectare" | "live" | "eroare">("conectare");
  const [video, setVideo] = useState(false);
  const [vorbeste, setVorbeste] = useState(false);
  const [tabla, setTabla] = useState("");
  const [desen, setDesen] = useState("");
  const [eroare, setEroare] = useState("");
  const [mut, setMut] = useState(false);
  const [ramas, setRamas] = useState(() => Math.max(0, exp - Date.now()));
  const videoEl = useRef<HTMLVideoElement>(null);
  const lesson = useRef<import("@/lib/profesor-ai-live").LiveLesson | null>(null);
  const ultimaActivitate = useRef(Date.now());
  const avatarVorbeste = useRef(false);
  const playerVorbeste = useRef(false);
  const taceri = useRef(0);
  const terminat = !gratuit && ramas <= 0;

  useEffect(() => {
    let anulat = false;
    let gata = false;
    const curatenie: (() => void)[] = [];
    (async () => {
      const r = await profesorAiLive({ data: { token } }).catch(() => null);
      if (anulat) return;
      if (!r?.ok) { console.warn("[profesor-ai] live indisponibil:", r?.error); return onFallback(); }
      const { LiveLesson, PcmPlayer, AvatarLipSync } = await import("@/lib/profesor-ai-live");

      // Video avatar (optional): LITE session, we feed it Gemini's audio.
      let lip: InstanceType<typeof AvatarLipSync> | null = null;
      if (r.avatarToken) {
        try {
          const la = await import("@heygen/liveavatar-web-sdk");
          const s = new la.LiveAvatarSession(r.avatarToken, { autoKeepAlive: true });
          s.on(la.SessionEvent.SESSION_STREAM_READY, () => {
            if (videoEl.current) { s.attach(videoEl.current); videoEl.current.muted = false; void videoEl.current.play().catch(() => {}); }
          });
          await s.start();
          if (anulat) { void s.stop(); return; }
          const sock = () => (s as unknown as { _sessionEventSocket?: WebSocket | null })._sessionEventSocket ?? null;
          if (sock()) {
            lip = new AvatarLipSync(sock);
            // Avatar speaking state straight from LiveAvatar's events.
            sock()?.addEventListener("message", (ev) => {
              try {
                const t = (JSON.parse(String(ev.data)) as { type?: string }).type;
                if (t === "agent.speak_started") { avatarVorbeste.current = true; setVorbeste(true); }
                if (t === "agent.speak_ended" || t === "agent.speak_interrupted") { avatarVorbeste.current = false; setVorbeste(false); ultimaActivitate.current = Date.now(); }
              } catch { /* not JSON */ }
            });
            setVideo(true);
            const ka = window.setInterval(() => lip?.keepAlive(), 60_000);
            curatenie.push(() => window.clearInterval(ka));
          }
          const stop = () => { void s.stop().catch(() => {}); };
          window.addEventListener("pagehide", stop, { once: true });
          curatenie.push(stop);
        } catch (e) {
          console.warn("[profesor-ai] avatar LITE indisponibil, continuăm doar cu voce", e);
        }
      }
      const player = new PcmPlayer();
      player.onPlaying = (on) => { playerVorbeste.current = on; if (!lip) setVorbeste(on); };
      curatenie.push(() => player.close());

      const L = new LiveLesson(r.geminiToken, r.setup, {
        onReady: () => { gata = true; setStare("live"); },
        onTeacherAudio: (b64) => {
          ultimaActivitate.current = Date.now();
          if (lip) lip.push(b64); else player.play(b64);
        },
        onTurnComplete: () => { lip?.end(); ultimaActivitate.current = Date.now(); },
        onInterrupted: () => { lip?.interrupt(); player.stop(); avatarVorbeste.current = false; setVorbeste(false); },
        onBoard: (t) => setTabla(t),
        onDrawing: (svg) => setDesen(svg),
        onTeacherText: () => {},
        onStudentText: () => { ultimaActivitate.current = Date.now(); taceri.current = 0; },
        onError: (m) => {
          console.warn("[profesor-ai] live eroare:", m);
          // Failed before the lesson really started → classic lesson.
          if (!gata) return onFallback();
          setEroare("Conexiunea cu profesoara s-a întrerupt. Pornește o sesiune nouă.");
          setStare("eroare");
        },
        onClose: () => {},
      });
      L.teacherSpeaking = () => avatarVorbeste.current || playerVorbeste.current;
      lesson.current = L;
      curatenie.push(() => L.stop());
      try {
        await L.start(PA_START);
      } catch {
        setEroare("Permite accesul la microfon ca să vorbești cu profesoara.");
        setStare("eroare");
      }
      // If Gemini never answers the setup, fall back instead of a frozen screen.
      window.setTimeout(() => { if (!gata && !anulat) { L.stop(); onFallback(); } }, 12_000);
    })();
    return () => { anulat = true; curatenie.forEach((f) => f()); lesson.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // Silence: after PA_TACERE_SEC without anyone talking, the teacher picks the thread up herself.
  useEffect(() => {
    if (stare !== "live") return;
    const t = window.setInterval(() => {
      if (vorbeste || terminat || taceri.current >= PA_TACERE_MAX) return;
      if (Date.now() - ultimaActivitate.current > (PA_TACERE_SEC + 35) * 1000) {
        taceri.current += 1;
        ultimaActivitate.current = Date.now();
        lesson.current?.sendText(PA_TACERE);
      }
    }, 1000);
    return () => window.clearInterval(t);
  }, [stare, vorbeste, terminat]);

  useEffect(() => {
    if (gratuit) return;
    const t = window.setInterval(() => setRamas(Math.max(0, exp - Date.now())), 1000);
    return () => window.clearInterval(t);
  }, [exp, gratuit]);
  useEffect(() => { if (terminat) lesson.current?.stop(); }, [terminat]);

  const min = Math.floor(ramas / 60000);
  const sec = Math.floor((ramas % 60000) / 1000);

  return (
    <div className="mx-auto grid w-full max-w-4xl gap-4">
      <section className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="relative aspect-[4/3] w-full bg-foreground sm:aspect-video">
          {!video && <img src={hannah.url} alt="Profesoara ta AI" className={`absolute inset-0 h-full w-full object-cover ${vorbeste ? "" : "opacity-90"}`} />}
          <video ref={videoEl} autoPlay playsInline poster={hannah.url} className={video ? "h-full w-full object-cover" : "hidden"} />
          {stare === "conectare" && (
            <div className="absolute inset-0 grid place-items-center bg-foreground/30 text-background">
              <Loader2 className="h-8 w-8 animate-spin" aria-label="Se conectează profesoara" />
            </div>
          )}
          <div className="absolute left-3 top-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-foreground/55 px-3 py-1 font-semibold text-background">Profesor AI · {paMaterieName(config.materie)}</span>
            {stare === "live" && <span className="rounded-full bg-red-600/90 px-3 py-1 font-semibold text-white">● LIVE</span>}
          </div>
          <div className="absolute right-3 top-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground/55 px-3 py-1 text-xs font-semibold text-background">
              <Clock className="h-3.5 w-3.5" /> {gratuit ? "cont de test · fără plată" : `${min}:${String(sec).padStart(2, "0")}`}
            </span>
            <Button
              type="button"
              onClick={() => { const m = !mut; setMut(m); if (lesson.current) lesson.current.muted = m; }}
              aria-label={mut ? "Pornește microfonul" : "Oprește microfonul"}
              className="grid h-8 w-8 place-items-center rounded-full bg-foreground/55 text-background"
            >
              {mut ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="px-5 pt-3 text-xs text-muted-foreground">
          {paNivelName(config.nivel)} · {paObiectivName(config.obiectiv)} · {config.durata} min · Română · vorbește liber, o poți întrerupe oricând
        </div>
        {(tabla || desen) && (
          <div className="mx-5 mt-3 rounded-2xl bg-muted px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Profesoara a scris</p>
            {desen && <FiguraSvg svg={desen} />}
            {tabla && (
              <Suspense fallback={<pre className="mt-1 whitespace-pre-wrap font-sans text-base">{tabla}</pre>}>
                <div className="mt-1"><TablaRender text={tabla} /></div>
              </Suspense>
            )}
          </div>
        )}
        <div className="space-y-3 px-5 py-3" aria-live="polite">
          {eroare && <div role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{eroare}</div>}
          {(terminat || stare === "eroare") && (
            <div className="flex flex-wrap gap-2">
              <Link to="/profesor-ai" className="btn-primary h-10 px-4 text-sm">Sesiune nouă</Link>
              <Link to="/meditatii" className="btn-outline h-10 px-4 text-sm">Cere un meditator real</Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

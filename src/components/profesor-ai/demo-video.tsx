import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshCw, Volume2, VolumeX } from "lucide-react";
import hannahDemo from "@/assets/hannah-matematica-demo.mp4.asset.json";
import hannahDemoWebm from "@/assets/hannah-matematica-demo.webm.asset.json";
import { amestecaLectii, cheieLectie, LECTII } from "./demo-repertoriu";
import { AUDIO_DEMO } from "./demo-audio.generated";

const ULTIMA = "profesor-ai-video-ultima";

/**
 * Voiced demo lesson (teacher + student) that rotates through the whole lesson deck:
 * every visit starts with a different subject, and lessons never repeat before the deck is exhausted.
 * Hannah's video plays while she talks and pauses while the student speaks.
 * Sound starts unmuted when the browser allows it, otherwise at the visitor's first tap/click/key.
 */
export function DemoVideoProfesoara({ className = "" }: { className?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const audio = useRef<HTMLAudioElement>(null);
  const [idx, setIdx] = useState<number | null>(null);
  const [linie, setLinie] = useState(-1);
  const [sunet, setSunet] = useState(false);

  const ordine = useRef<number[]>([]);
  const precedenta = useRef<number | null>(null);
  const baza = useRef(0); // performance.now() at t = 0 of the current lesson (fallback clock when audio can't play)
  const opritManual = useRef(false);
  const gataSunet = useRef(false);

  const urmatoarea = useCallback(() => {
    if (!ordine.current.length) ordine.current = amestecaLectii(LECTII.length, precedenta.current);
    const noua = ordine.current.shift();
    if (noua === undefined) return;
    precedenta.current = noua;
    try { localStorage.setItem(ULTIMA, String(noua)); } catch { /* Storage is optional. */ }
    setIdx(noua);
    setLinie(-1);
  }, []);

  useEffect(() => {
    try {
      const u = localStorage.getItem(ULTIMA);
      if (u !== null && /^\d+$/.test(u)) precedenta.current = Number(u);
    } catch { /* Shuffle still works with storage disabled. */ }
    urmatoarea();
  }, [urmatoarea]);

  const lectie = idx === null ? null : LECTII[idx];
  const cheie = lectie ? cheieLectie(lectie) : "";
  const timpi = AUDIO_DEMO[cheie];

  // Start each lesson from the beginning, with sound if it is already allowed.
  useEffect(() => {
    const a = audio.current;
    if (!a || !lectie) return;
    a.src = `/demo-lectii/${cheie}.mp3`;
    a.currentTime = 0;
    a.muted = !gataSunet.current || opritManual.current;
    baza.current = performance.now();
    a.play().catch(() => {
      a.muted = true;
      a.play().catch(() => {});
    });
  }, [cheie, lectie]);

  // Unmuted autoplay is often blocked: switch the voice on at the first interaction anywhere.
  useEffect(() => {
    const a = audio.current;
    if (!a) return;
    const evs = ["pointerdown", "touchend", "click", "keydown"] as const;
    const scoate = () => evs.forEach((e) => window.removeEventListener(e, cuSunet, true));
    async function cuSunet() {
      if (!a || gataSunet.current || opritManual.current) return;
      const t = (performance.now() - baza.current) / 1000;
      a.muted = false;
      a.volume = 1;
      if (a.paused && Number.isFinite(t)) a.currentTime = t;
      try {
        await a.play();
        gataSunet.current = true;
        setSunet(true);
        scoate();
      } catch {
        a.muted = true;
      }
    }
    evs.forEach((e) => window.addEventListener(e, cuSunet, true));
    void cuSunet();
    return scoate;
  }, []);

  // Timeline: follow the audio when it plays, otherwise a clock, so captions advance even without sound.
  useEffect(() => {
    if (!timpi) return;
    let raf = 0;
    let terminat: ReturnType<typeof setTimeout> | undefined;
    const pas = () => {
      const a = audio.current;
      let t: number;
      if (a && !a.paused && a.currentTime > 0) {
        t = a.currentTime;
        baza.current = performance.now() - t * 1000;
      } else {
        t = (performance.now() - baza.current) / 1000;
      }
      let i = -1;
      timpi.replici.forEach(([s], k) => { if (t >= s) i = k; });
      setLinie((x) => (x === i ? x : i));
      const v = video.current;
      const vorbeste = i >= 0 && lectie?.replici[i].cine === "prof" && t <= timpi.replici[i][1];
      if (v) {
        if (vorbeste && v.paused) v.play().catch(() => {});
        if (!vorbeste && !v.paused) v.pause();
      }
      if (t >= timpi.durata) {
        terminat = setTimeout(urmatoarea, 1200);
        return;
      }
      raf = requestAnimationFrame(pas);
    };
    raf = requestAnimationFrame(pas);
    return () => { cancelAnimationFrame(raf); clearTimeout(terminat); };
  }, [timpi, lectie, urmatoarea]);

  const comuta = () => {
    const a = audio.current;
    if (!a) return;
    if (sunet) {
      opritManual.current = true;
      a.muted = true;
      setSunet(false);
    } else {
      opritManual.current = false;
      gataSunet.current = true;
      const t = (performance.now() - baza.current) / 1000;
      a.muted = false;
      if (a.paused && Number.isFinite(t)) a.currentTime = t;
      a.play().catch(() => {});
      setSunet(true);
    }
  };

  const replica = lectie && linie >= 0 ? lectie.replici[linie] : null;
  const tabla = lectie ? [...lectie.replici.slice(0, linie + 1)].reverse().find((r) => r.tabla)?.tabla : undefined;
  const vorbitor = replica?.cine;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] ${className}`}>
      <video
        ref={video}
        className="aspect-video w-full bg-foreground object-cover"
        poster="/promo-profesor-ai.jpg"
        width={1280}
        height={720}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={hannahDemoWebm.url} type="video/webm" />
        <source src={hannahDemo.url} type="video/mp4" />
      </video>
      <audio ref={audio} preload="auto" onEnded={() => audio.current?.pause()} />

      {lectie && (
        <>
          <div className="absolute left-2 top-2 flex max-w-[70%] flex-col items-start gap-1 sm:left-3 sm:top-3">
            <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-primary-foreground shadow sm:text-xs">
              {lectie.materie} · <span className="font-normal opacity-90">{lectie.nivel}</span>
            </span>
            {tabla && (
              <span className="rounded-md bg-foreground/85 px-2 py-1 font-mono text-[10px] leading-4 text-background shadow sm:text-xs">
                {tabla}
              </span>
            )}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-3 pb-2.5 pt-8 sm:px-4 sm:pb-3">
            {replica && (
              <p key={`${idx}-${linie}`} className={`flex flex-col animate-in fade-in duration-300 ${vorbitor === "elev" ? "items-end text-right" : "items-start"}`}>
                <span className={`mb-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide sm:text-[11px] ${vorbitor === "elev" ? "bg-amber-400 text-black" : "bg-sky-300 text-black"}`}>
                  {vorbitor === "elev" ? "Elev" : "Hannah · Profesor AI"}
                </span>
                <span className="max-w-[92%] text-[13px] font-medium leading-5 text-white sm:text-base sm:leading-6">{replica.text}</span>
              </p>
            )}
          </div>

          <div className="absolute right-2 top-2 flex gap-2 sm:right-3 sm:top-3">
            <button
              type="button"
              onClick={urmatoarea}
              className="inline-flex h-10 items-center gap-1 rounded-full bg-background/90 px-3 text-xs font-semibold text-foreground shadow-lg"
              aria-label="Altă lecție"
            >
              <RefreshCw className="h-4 w-4" /> <span className="hidden sm:inline">Altă lecție</span>
            </button>
            <button
              type="button"
              onClick={comuta}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
              aria-label={sunet ? "Oprește sunetul" : "Pornește sunetul"}
            >
              {sunet ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>
          </div>
        </>
      )}
      <p className="sr-only" aria-live="polite">
        {lectie ? `Exemplu de lecție: ${lectie.materie}, ${lectie.nivel}.` : "Se pregătește exemplul de lecție."}
      </p>
    </div>
  );
}

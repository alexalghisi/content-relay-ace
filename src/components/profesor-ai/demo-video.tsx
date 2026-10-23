import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshCw, Volume2, VolumeX } from "lucide-react";
import { amestecaLectii, cheieLectie, LECTII } from "./demo-repertoriu";
import { VIDEO_DEMO } from "./demo-video-lectii.generated";

const ULTIMA = "profesor-ai-video-ultima";

/**
 * Demo lessons rendered in HeyGen: teacher and pupil are both avatars, each scene is one line,
 * so lips, face and voice come from the same render and stay in sync.
 * Only lessons that have a rendered video are shown.
 */
export const LECTII_VIDEO = LECTII.map((l, i) => ({ l, i })).filter(({ l }) => VIDEO_DEMO[cheieLectie(l)]);

export const videoLectie = (cheie: string) => `/demo-video/lectii/${cheie}.mp4`;
export const posterLectie = (cheie: string) => `/demo-video/lectii/${cheie}.jpg`;

/**
 * Voiced demo lesson that rotates through the whole deck: every visit starts with a different subject,
 * and lessons never repeat before the deck is exhausted.
 * Sound starts unmuted when the browser allows it, otherwise at the visitor's first tap/click/key.
 */
export function DemoVideoProfesoara({ className = "" }: { className?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [poz, setPoz] = useState<number | null>(null);
  const [linie, setLinie] = useState(-1);
  const [sunet, setSunet] = useState(false);

  const ordine = useRef<number[]>([]);
  const precedenta = useRef<number | null>(null);
  const opritManual = useRef(false);
  const gataSunet = useRef(false);

  const urmatoarea = useCallback(() => {
    if (!LECTII_VIDEO.length) return;
    if (!ordine.current.length) ordine.current = amestecaLectii(LECTII_VIDEO.length, precedenta.current);
    const noua = ordine.current.shift();
    if (noua === undefined) return;
    precedenta.current = noua;
    try { localStorage.setItem(ULTIMA, String(noua)); } catch { /* Storage is optional. */ }
    setPoz(noua);
    setLinie(-1);
  }, []);

  useEffect(() => {
    try {
      const u = localStorage.getItem(ULTIMA);
      if (u !== null && /^\d+$/.test(u) && Number(u) < LECTII_VIDEO.length) precedenta.current = Number(u);
    } catch { /* Shuffle still works with storage disabled. */ }
    urmatoarea();
  }, [urmatoarea]);

  const lectie = poz === null ? null : LECTII_VIDEO[poz]?.l ?? null;
  const cheie = lectie ? cheieLectie(lectie) : "";
  const timpi = VIDEO_DEMO[cheie];

  // Start each lesson from the beginning, with sound if it is already allowed.
  useEffect(() => {
    const v = video.current;
    if (!v || !lectie) return;
    v.currentTime = 0;
    // Always try with sound first (allowed on return visits / after any click on the site);
    // if the browser blocks it, play muted and unmute at the first tap, click or key anywhere.
    v.muted = opritManual.current;
    v.play().then(() => {
      if (!v.muted) { gataSunet.current = true; setSunet(true); }
    }).catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  }, [cheie, lectie]);

  // Unmuted autoplay is often blocked: switch the voice on at the first interaction anywhere.
  useEffect(() => {
    const evs = ["pointerdown", "touchend", "click", "keydown"] as const;
    const scoate = () => evs.forEach((e) => window.removeEventListener(e, cuSunet, true));
    async function cuSunet() {
      const v = video.current;
      if (!v || gataSunet.current || opritManual.current) return;
      v.muted = false;
      v.volume = 1;
      try {
        await v.play();
        gataSunet.current = true;
        setSunet(true);
        scoate();
      } catch {
        v.muted = true;
        v.play().catch(() => {});
      }
    }
    evs.forEach((e) => window.addEventListener(e, cuSunet, true));
    void cuSunet();
    return scoate;
  }, []);

  // Captions follow the video clock.
  const laTimp = () => {
    const v = video.current;
    if (!v || !timpi) return;
    const t = v.currentTime;
    let i = -1;
    timpi.replici.forEach(([s], k) => { if (t >= s) i = k; });
    setLinie((x) => (x === i ? x : i));
  };

  const comuta = () => {
    const v = video.current;
    if (!v) return;
    if (sunet) {
      opritManual.current = true;
      v.muted = true;
      setSunet(false);
    } else {
      opritManual.current = false;
      gataSunet.current = true;
      v.muted = false;
      v.play().catch(() => {});
      setSunet(true);
    }
  };

  const replica = lectie && linie >= 0 ? lectie.replici[linie] : null;
  const tabla = lectie ? [...lectie.replici.slice(0, linie + 1)].reverse().find((r) => r.tabla)?.tabla : undefined;
  const vorbitor = replica?.cine;

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] ${className}`}>
      <video
        key={cheie || "poster"}
        ref={video}
        className="aspect-video w-full bg-foreground object-cover"
        poster={cheie ? posterLectie(cheie) : "/promo-profesor-ai.jpg"}
        width={854}
        height={480}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={laTimp}
        onEnded={() => setTimeout(urmatoarea, 1200)}
        aria-hidden="true"
      >
        {cheie && <source src={videoLectie(cheie)} type="video/mp4" />}
      </video>

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
              <p key={`${cheie}-${linie}`} className={`flex flex-col animate-in fade-in duration-300 ${vorbitor === "elev" ? "items-end text-right" : "items-start"}`}>
                <span className={`mb-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide sm:text-[11px] ${vorbitor === "elev" ? "bg-amber-400 text-black" : "bg-sky-300 text-black"}`}>
                  {vorbitor === "elev" ? "Elev" : "Profesor AI"}
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

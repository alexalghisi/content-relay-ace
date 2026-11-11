import { useEffect, useRef, useState, type RefObject } from "react";

/** Resolves once the page has finished loading and the main thread is idle (or after `maxWait` ms). */
export function onPageIdle(cb: () => void, maxWait = 2500): () => void {
  let cancelled = false;
  let idleId: number | undefined;
  let timer: ReturnType<typeof setTimeout> | undefined;
  const run = () => {
    if (cancelled) return;
    const w = window as Window & {
      requestIdleCallback?: (fn: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback)
      idleId = w.requestIdleCallback(() => !cancelled && cb(), { timeout: maxWait });
    else timer = setTimeout(() => !cancelled && cb(), 200);
  };
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
  return () => {
    cancelled = true;
    window.removeEventListener("load", run);
    if (timer) clearTimeout(timer);
    const w = window as Window & { cancelIdleCallback?: (id: number) => void };
    if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
  };
}

/** True once the page has loaded and the browser is idle; false during SSR and hydration. */
export function useAfterLoad(maxWait = 2500): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => onPageIdle(() => setReady(true), maxWait), [maxWait]);
  return ready;
}

/**
 * True once the element is near the viewport AND the page has finished loading,
 * so heavy media never competes with the first render. Stays true afterwards.
 */
export function useNearViewport<T extends Element>(
  rootMargin = "300px",
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const loaded = useAfterLoad();
  const [near, setNear] = useState(false);
  useEffect(() => {
    if (near) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [near, rootMargin]);
  return [ref, near && loaded];
}

/**
 * Reclamele (AdSense) pornesc la prima interacțiune (atingere, scroll, tastă) sau, pentru
 * vizitatorii care doar citesc, la ADS_FALLBACK_MS după încărcare. Scripturile de reclame costau ~1,5 s
 * de procesor pe telefon exact în secundele în care pagina trebuie să răspundă; așa rămân afișate
 * tuturor vizitatorilor (fără banner de consimțământ), dar nu mai concurează cu prima afișare.
 */
export const ADS_FALLBACK_MS = 12_000;
const EVENIMENTE_INTERACTIUNE = [
  "pointerdown",
  "touchstart",
  "keydown",
  "scroll",
  "wheel",
] as const;
let reclamePornite = false;
const asteptari = new Set<() => void>();

function pornesteReclame() {
  if (reclamePornite) return;
  reclamePornite = true;
  for (const ev of EVENIMENTE_INTERACTIUNE) window.removeEventListener(ev, pornesteReclame);
  const cbs = [...asteptari];
  asteptari.clear();
  // După interacțiune, în timpul liber al procesorului: nu încetinim chiar gestul utilizatorului.
  onPageIdle(() => cbs.forEach((cb) => cb()), 1000);
}

let initializat = false;
function initReclame() {
  if (initializat || typeof window === "undefined") return;
  initializat = true;
  for (const ev of EVENIMENTE_INTERACTIUNE)
    window.addEventListener(ev, pornesteReclame, { once: true, passive: true });
  const laIncarcare = () => setTimeout(pornesteReclame, ADS_FALLBACK_MS);
  if (document.readyState === "complete") laIncarcare();
  else window.addEventListener("load", laIncarcare, { once: true });
}

/** Rulează `cb` când reclamele au voie să pornească. Întoarce funcția de anulare. */
export function onAdsReady(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  initReclame();
  if (reclamePornite) return onPageIdle(cb, 1000);
  asteptari.add(cb);
  return () => {
    asteptari.delete(cb);
  };
}

/** Varianta hook: false până când reclamele au voie să pornească (și în SSR). */
export function useAdsReady(): boolean {
  const [ready, setReady] = useState(false);
  useEffect(() => onAdsReady(() => setReady(true)), []);
  return ready;
}

/** Doar pentru teste. */
export function __resetAdsForTests() {
  reclamePornite = false;
  initializat = false;
  asteptari.clear();
}

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
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(() => !cancelled && cb(), { timeout: maxWait });
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
export function useNearViewport<T extends Element>(rootMargin = "300px"): [RefObject<T | null>, boolean] {
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

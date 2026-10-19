import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Download, Share, SquarePlus, X } from "lucide-react";

/** Evenimentul Chrome/Android pentru instalarea aplicației (nu e în tipurile DOM standard). */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "md-app-banner-dismissed";
const DISMISS_DAYS = 14;
// Fluxurile private sau cu formulare lungi nu primesc banner peste conținut.
const HIDDEN = /^\/(admin|login|signup|cont|mesaje|cererea-mea|simulare-ai|meditator-ai)(\/|$)/;

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

function dismissedRecently() {
  try {
    const t = Number(localStorage.getItem(DISMISS_KEY) || 0);
    return Date.now() - t < DISMISS_DAYS * 86_400_000;
  } catch {
    return false;
  }
}

/**
 * Banner jos, doar pe telefon: instalează MeditatiiDirect ca aplicație (PWA).
 * Android/Chrome: buton „Instalează” nativ. iPhone/Safari: pașii „Partajează → Adaugă pe ecranul principal”.
 */
export function InstallAppBanner() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [visible, setVisible] = useState(false);
  const [iosHelp, setIosHelp] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (!mobile || isStandalone() || dismissedRecently()) return;
    const ua = navigator.userAgent;
    const ios = /iPhone|iPad|iPod/i.test(ua);
    setPlatform(ios ? "ios" : "android");
    // Pe iOS nu există prompt nativ — afișăm direct instrucțiunile.
    if (ios) setVisible(true);
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onInstalled = () => setVisible(false);
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    // Unele browsere Android nu emit evenimentul; arătăm totuși bannerul cu instrucțiuni.
    const fallback = window.setTimeout(() => setVisible(true), 4000);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      window.clearTimeout(fallback);
    };
  }, []);

  if (!visible || !platform || HIDDEN.test(pathname)) return null;

  const close = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* stocare indisponibilă — închidem doar pentru sesiunea curentă */
    }
    setVisible(false);
  };

  const install = async () => {
    if (deferred) {
      await deferred.prompt();
      const { outcome } = await deferred.userChoice;
      setDeferred(null);
      if (outcome === "accepted") setVisible(false);
      return;
    }
    setIosHelp(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Instalează aplicația MeditatiiDirect"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] backdrop-blur md:hidden"
    >
      <div className="flex items-center gap-3">
        <img
          src="/icon-192.png"
          alt=""
          width="44"
          height="44"
          className="h-11 w-11 shrink-0 rounded-xl"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold leading-tight">Aplicația MeditatiiDirect</p>
          <p className="text-xs leading-snug text-muted-foreground">
            Gratuită, direct pe telefon
          </p>
        </div>
        <button type="button" onClick={install} className="btn-primary h-10 shrink-0 px-4 text-sm">
          <Download className="mr-1.5 h-4 w-4" /> Instalează
        </button>
        <button
          type="button"
          onClick={close}
          aria-label="Închide"
          className="grid h-10 w-8 shrink-0 place-items-center text-muted-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      {iosHelp && (
        <p className="mt-3 rounded-xl bg-muted px-3 py-2 text-xs leading-relaxed text-foreground/90">
          {platform === "ios" ? (
            <>
              În Safari apasă <Share className="inline h-4 w-4 align-text-bottom" />{" "}
              <strong>Partajează</strong>, apoi{" "}
              <SquarePlus className="inline h-4 w-4 align-text-bottom" />{" "}
              <strong>Adaugă pe ecranul principal</strong>.
            </>
          ) : (
            <>
              Deschide meniul browserului (⋮) și alege <strong>Instalează aplicația</strong> sau{" "}
              <strong>Adaugă pe ecranul de pornire</strong>.
            </>
          )}
        </p>
      )}
    </div>
  );
}

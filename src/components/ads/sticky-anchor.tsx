import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AdSenseSlot, ADSENSE_CLIENT } from "./adsense";

/**
 * Bară de reclamă lipită jos (anchor), descărcată după ce userul a derulat ~600px.
 * - Dismissibilă cu X (memorat 24h în localStorage).
 * - Nu se afișează pe rute sensibile (auth, mesaje, cont, admin, checkout).
 * - Mai puțin deranjantă decât popunder / interstitial, dar cu CPM bun.
 */
const DISMISS_KEY = "md_sticky_ad_dismissed_at";
const DISMISS_TTL_MS = 24 * 60 * 60 * 1000; // 24h

const HIDE_ON_PATHS = [
  "/login",
  "/signup",
  "/mesaje",
  "/cont",
  "/admin",
  "/ofer-meditatii",
];

export function StickyAnchorAd() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (HIDE_ON_PATHS.some((p) => path === p || path.startsWith(p + "/"))) return;

    try {
      const raw = localStorage.getItem(DISMISS_KEY);
      if (raw && Date.now() - Number(raw) < DISMISS_TTL_MS) return;
    } catch { /* noop */ }

    const onScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="relative mx-auto flex max-w-5xl items-center justify-center px-2 py-1.5">
        <button
          type="button"
          aria-label="Închide reclama"
          onClick={() => {
            try { localStorage.setItem(DISMISS_KEY, String(Date.now())); } catch { /* noop */ }
            setVisible(false);
          }}
          className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-background/80 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="w-full max-w-[728px] min-h-[60px]">
          <AdSenseSlot format="horizontal" className="!my-0" />
        </div>
      </div>
    </div>
  );
}

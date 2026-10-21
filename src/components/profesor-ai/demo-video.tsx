import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import hannahDemo from "@/assets/hannah-matematica-demo.mp4.asset.json";
import hannahDemoWebm from "@/assets/hannah-matematica-demo.webm.asset.json";

/**
 * Demo video that starts WITH sound. Browsers only allow unmuted autoplay when permitted;
 * if blocked, it plays muted and turns sound on at the visitor's first tap/click/key anywhere.
 */
export function DemoVideoProfesoara({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [sunet, setSunet] = useState(false);
  const opritManual = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let gata = false;
    const cuSunet = async () => {
      if (gata || opritManual.current) return;
      v.muted = false;
      v.volume = 1;
      try {
        await v.play();
        gata = true;
        setSunet(true);
        scoate();
      } catch {
        v.muted = true;
        v.play().catch(() => {});
      }
    };
    const evs = ["pointerdown", "touchend", "click", "keydown"] as const;
    const scoate = () => evs.forEach((e) => window.removeEventListener(e, cuSunet, true));
    evs.forEach((e) => window.addEventListener(e, cuSunet, true));
    void cuSunet();
    return scoate;
  }, []);

  const comuta = () => {
    const v = ref.current;
    if (!v) return;
    opritManual.current = sunet;
    v.muted = sunet;
    if (!sunet) v.play().catch(() => {});
    setSunet(!sunet);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] ${className}`}>
      <video
        ref={ref}
        className="aspect-video w-full bg-foreground object-cover"
        poster="/promo-profesor-ai.jpg"
        width={1280}
        height={720}
        autoPlay
        loop
        playsInline
        controls
        preload="auto"
        onVolumeChange={(e) => setSunet(!e.currentTarget.muted)}
        aria-label="Demonstrație video: profesoara Hannah explică o ecuație în română"
      >
        <source src={hannahDemoWebm.url} type="video/webm" />
        <source src={hannahDemo.url} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={comuta}
        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        aria-label={sunet ? "Oprește sunetul" : "Pornește sunetul"}
      >
        {sunet ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </div>
  );
}

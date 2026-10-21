import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import hannahDemo from "@/assets/hannah-matematica-demo.mp4.asset.json";
import hannahDemoWebm from "@/assets/hannah-matematica-demo.webm.asset.json";
import { playLessonMedia } from "@/lib/profesor-ai-audio";

/** Demo video: autoplays muted (browser rule), one tap restarts it with sound on phone and laptop. */
export function DemoVideoProfesoara({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [sunet, setSunet] = useState(false);

  const comuta = async () => {
    const v = ref.current;
    if (!v) return;
    if (sunet) {
      v.muted = true;
      setSunet(false);
      return;
    }
    if (v.ended || v.currentTime > v.duration - 1) v.currentTime = 0;
    const ok = await playLessonMedia(v, true);
    setSunet(ok);
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
        muted
        loop
        playsInline
        controls={sunet}
        preload="metadata"
        onVolumeChange={(e) => setSunet(!e.currentTarget.muted)}
        aria-label="Demonstrație video: profesoara Hannah explică o ecuație în română"
      >
        <source src={hannahDemoWebm.url} type="video/webm" />
        <source src={hannahDemo.url} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={comuta}
        className={`absolute inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground shadow-lg whitespace-nowrap transition hover:opacity-90 ${
          sunet ? "right-3 top-3 px-3 py-2" : "bottom-4 left-1/2 -translate-x-1/2 animate-pulse"
        }`}
        aria-pressed={sunet}
      >
        {sunet ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-5 w-5" />}
        {sunet ? "Fără sunet" : "Apasă pentru sunet"}
      </button>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import type { PaReplica } from "@/lib/profesor-ai";

/**
 * Avatar desenat, folosit când avatarul video realist (HeyGen) nu e configurat sau nu se poate
 * conecta. Clipește, își mișcă buzele după voce și își schimbă expresia după `emotie`.
 */
export function AvatarAnimat({
  gura,
  emotie,
  asculta,
}: {
  gura: number;
  emotie: PaReplica["emotie"];
  asculta: boolean;
}) {
  const [clipire, setClipire] = useState(false);
  useEffect(() => {
    let t: number;
    const loop = () => {
      t = window.setTimeout(
        () => {
          setClipire(true);
          window.setTimeout(() => setClipire(false), 140);
          loop();
        },
        2500 + Math.random() * 2500,
      );
    };
    loop();
    return () => window.clearTimeout(t);
  }, []);

  const spranceana = emotie === "gandire" ? -3 : emotie === "incurajare" ? 2 : 0;
  const zambet = emotie === "zambet" || emotie === "incurajare" ? 7 : emotie === "gandire" ? 1 : 4;
  const deschis = Math.max(0, Math.min(1, gura)) * 14;
  const ochiH = clipire ? 0.6 : 7;

  return (
    <svg
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Profesorul AI"
      className="h-full w-full"
    >
      <defs>
        <radialGradient id="pa-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#e8f0ff" />
          <stop offset="1" stopColor="#c9d8f5" />
        </radialGradient>
        <linearGradient id="pa-skin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f6d3bd" />
          <stop offset="1" stopColor="#e9b896" />
        </linearGradient>
        <linearGradient id="pa-hair" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#5a3b2a" />
          <stop offset="1" stopColor="#3d271b" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#pa-bg)" />
      {/* umeri / bluză */}
      <path d="M70 400 C80 320 140 290 200 290 C260 290 320 320 330 400 Z" fill="#0f3a75" />
      <path d="M170 292 L200 330 L230 292 Z" fill="#f4f6fb" />
      {/* gât */}
      <rect x="178" y="250" width="44" height="50" rx="18" fill="#e9b896" />
      {/* păr spate */}
      <path
        d="M110 190 C100 90 170 60 205 62 C260 64 305 100 292 200 C300 250 290 280 280 290 L120 290 C108 270 102 240 110 190 Z"
        fill="url(#pa-hair)"
      />
      {/* față */}
      <ellipse cx="200" cy="175" rx="82" ry="96" fill="url(#pa-skin)" />
      {/* breton */}
      <path
        d="M118 150 C125 95 175 78 215 84 C255 90 280 115 283 152 C260 128 220 112 180 118 C150 122 130 135 118 150 Z"
        fill="url(#pa-hair)"
      />
      {/* urechi */}
      <ellipse cx="119" cy="180" rx="10" ry="18" fill="#e9b896" />
      <ellipse cx="281" cy="180" rx="10" ry="18" fill="#e9b896" />
      {/* sprâncene */}
      <path
        d={`M150 ${142 - spranceana} Q170 ${134 - spranceana} 188 ${142 - spranceana}`}
        stroke="#4a3022"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M212 ${142 - spranceana} Q230 ${134 - spranceana} 250 ${142 - spranceana}`}
        stroke="#4a3022"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* ochi */}
      <ellipse cx="169" cy="165" rx="9" ry={ochiH} fill="#2b1d16" />
      <ellipse cx="231" cy="165" rx="9" ry={ochiH} fill="#2b1d16" />
      {!clipire && (
        <>
          <circle cx="172" cy="162" r="2.5" fill="#fff" />
          <circle cx="234" cy="162" r="2.5" fill="#fff" />
        </>
      )}
      {/* ochelari */}
      <g stroke="#1e293b" strokeWidth="3" fill="none" opacity="0.85">
        <rect x="146" y="148" width="46" height="34" rx="12" />
        <rect x="208" y="148" width="46" height="34" rx="12" />
        <path d="M192 162 L208 162" />
      </g>
      {/* nas */}
      <path
        d="M200 175 Q194 200 202 206"
        stroke="#c98f6d"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* obraji */}
      <ellipse
        cx="150"
        cy="210"
        rx="14"
        ry="8"
        fill="#f08a8a"
        opacity={emotie === "zambet" ? 0.35 : 0.18}
      />
      <ellipse
        cx="250"
        cy="210"
        rx="14"
        ry="8"
        fill="#f08a8a"
        opacity={emotie === "zambet" ? 0.35 : 0.18}
      />
      {/* gură: buze sincronizate cu vocea */}
      <path
        d={`M172 ${226 - zambet / 2} Q200 ${226 + zambet} 228 ${226 - zambet / 2} Q200 ${226 + zambet + deschis + 4} 172 ${226 - zambet / 2} Z`}
        fill="#9b3b45"
      />
      {deschis > 5 && (
        <ellipse
          cx="200"
          cy={228 + zambet / 2 + deschis / 3}
          rx="12"
          ry={deschis / 4}
          fill="#5a1f27"
        />
      )}
      {/* indicator de ascultare */}
      {asculta && (
        <g>
          <circle cx="360" cy="40" r="12" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </g>
      )}
    </svg>
  );
}

/** Voce în română din browser, cu nivel de deschidere a gurii pentru sincronizarea buzelor. */
export function useVoceRo() {
  const [gura, setGura] = useState(0);
  const [vorbeste, setVorbeste] = useState(false);
  const timer = useRef<number | null>(null);

  const opreste = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis?.cancel();
    if (timer.current) window.clearInterval(timer.current);
    setGura(0);
    setVorbeste(false);
  };

  const spune = (text: string) =>
    new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return resolve();
      opreste();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ro-RO";
      const voci = window.speechSynthesis.getVoices();
      const ro = voci.filter((v) => v.lang.toLowerCase().startsWith("ro"));
      u.voice = ro.find((v) => /natural|neural|premium|enhanced/i.test(v.name)) ?? ro[0] ?? null;
      u.rate = 1;
      u.pitch = 1.05;
      u.onstart = () => {
        setVorbeste(true);
        // Mișcare de bază a buzelor; granițele de cuvânt o accentuează.
        timer.current = window.setInterval(() => setGura(0.25 + Math.random() * 0.6), 110);
      };
      u.onboundary = () => setGura(0.9);
      const gata = () => {
        if (timer.current) window.clearInterval(timer.current);
        setGura(0);
        setVorbeste(false);
        resolve();
      };
      u.onend = gata;
      u.onerror = gata;
      window.speechSynthesis.speak(u);
    });

  useEffect(() => opreste, []);
  return { gura, vorbeste, spune, opreste };
}

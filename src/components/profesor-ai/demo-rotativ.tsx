import { useEffect, useState } from "react";
import { MessageSquareText, PlayCircle } from "lucide-react";
import { DemoVideoProfesoara } from "./demo-video";
import { DemoConversatie } from "./demo-conversatie";
import { useVariantaRotativa } from "./rotatie";

/**
 * Rotates what the visitor sees first: the video appears only one visit in four;
 * the other visits show a different written lesson each time (20-lesson shuffled deck).
 */
export function DemoProfesorAiRotativ({ className = "" }: { className?: string }) {
  const slot = useVariantaRotativa("profesor-ai-demo-slot", 4);
  const [mod, setMod] = useState<"video" | "lectie" | null>(null);

  useEffect(() => {
    if (slot !== null) setMod(slot === 0 ? "video" : "lectie");
  }, [slot]);

  if (mod === null) return <div className={`card-soft h-[28rem] animate-pulse ${className}`} aria-busy="true" />;

  return (
    <div className={className}>
      {mod === "video" ? <DemoVideoProfesoara /> : <DemoConversatie />}
      <button
        type="button"
        onClick={() => setMod(mod === "video" ? "lectie" : "video")}
        className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 text-center text-sm font-medium text-primary hover:bg-primary-soft"
      >
        {mod === "video"
          ? <><MessageSquareText className="h-4 w-4" /> Vezi o lecție întreagă cu întrebări și răspunsuri</>
          : <><PlayCircle className="h-4 w-4" /> Vezi video cu profesoara</>}
      </button>
    </div>
  );
}

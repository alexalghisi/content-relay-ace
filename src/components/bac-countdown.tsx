import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";

// Dată orientativă pentru prima probă scrisă (E.a), sesiunea iunie 2026.
const TARGET = new Date("2026-06-29T09:00:00+03:00");

function diff(to: Date) {
  const ms = to.getTime() - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    zile: Math.floor(s / 86400),
    ore: Math.floor((s % 86400) / 3600),
    minute: Math.floor((s % 3600) / 60),
    secunde: s % 60,
  };
}

export function BacCountdown({ className = "" }: { className?: string }) {
  const [left, setLeft] = useState<ReturnType<typeof diff>>(null);

  useEffect(() => {
    setLeft(diff(TARGET));
    const id = window.setInterval(() => setLeft(diff(TARGET)), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!left) return null;

  const cells = [
    { v: left.zile, l: "zile" },
    { v: left.ore, l: "ore" },
    { v: left.minute, l: "min" },
    { v: left.secunde, l: "sec" },
  ];

  return (
    <div className={`rounded-2xl border border-primary/20 bg-primary-soft/40 p-5 ${className}`}>
      <p className="flex items-center gap-2 text-sm font-medium">
        <CalendarClock className="h-4 w-4 text-primary" aria-hidden /> Până la prima probă scrisă de BAC (sesiunea iunie 2026)
      </p>
      <div className="mt-3 flex flex-wrap gap-3" aria-live="off">
        {cells.map((c) => (
          <div key={c.l} className="min-w-16 rounded-xl border border-border bg-card px-3 py-2 text-center">
            <p className="font-mono text-2xl font-bold tabular-nums">{String(c.v).padStart(2, "0")}</p>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{c.l}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">Dată orientativă, până la publicarea calendarului oficial al Ministerului Educației.</p>
    </div>
  );
}

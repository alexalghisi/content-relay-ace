import { Link } from "@tanstack/react-router";
import { BAC_SESSIONS } from "@/lib/bac-archive";
import {
  bacMaterieLabel,
  bacMaterieSegment,
  bacPaperKey,
  bacPaperPath,
  bacRezolvarePath,
  isBundledOriginal,
} from "@/lib/bac-paths";
import { hasRezolvareKey } from "@/lib/bac-rezolvari-index";

export type BacRow = {
  id: string;
  year: number;
  session: string;
  subject_slug: string;
  subject_name: string;
  profil: string | null;
  paper_type: string;
  pdf_url: string | null;
  variant: string | null;
};

/** Chronological order of a BAC year, like the official calendar. */
const ORDINE = [
  "antrenament",
  "simulare",
  "model",
  "sesiune-speciala",
  "iunie-iulie",
  "rezerva",
  "august-septembrie",
];

/**
 * One year of BAC laid out like the classic archives: one table per session, one row per
 * subject (and variant), with the subject PDF, the barem PDF and the explained solution.
 */
export function BacTabelAn({ year, rows }: { year: number; rows: BacRow[] }) {
  const sesiuni = new Map<
    string,
    Map<string, { materie: string; variant: string | null; subiect?: BacRow; barem?: BacRow }>
  >();
  for (const r of rows) {
    const s = sesiuni.get(r.session) ?? new Map();
    const materie = bacMaterieSegment(r);
    const k = `${materie}|${r.variant ?? ""}`;
    const e = s.get(k) ?? { materie, variant: r.variant };
    if (r.paper_type === "barem") e.barem = r;
    else e.subiect ??= r;
    s.set(k, e);
    sesiuni.set(r.session, s);
  }
  const ordonate = Array.from(sesiuni.entries()).sort(
    (a, b) => ((ORDINE.indexOf(a[0]) + 99) % 99) - ((ORDINE.indexOf(b[0]) + 99) % 99),
  );

  return (
    <div className="space-y-10">
      {ordonate.map(([sesiune, randuri]) => {
        const lista = Array.from(randuri.values()).sort(
          (a, b) =>
            a.materie.localeCompare(b.materie, "ro") ||
            Number(a.variant ?? 0) - Number(b.variant ?? 0),
        );
        const titlu = `${BAC_SESSIONS[sesiune] ?? sesiune} ${year}`;
        return (
          <section key={sesiune} id={`sesiune-${sesiune}`} className="scroll-mt-24">
            <h2 className="text-xl font-semibold">Subiecte Bacalaureat {titlu}</h2>
            <div className="mt-3 overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 text-left">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Materia</th>
                    <th className="px-3 py-2 font-semibold">Subiect</th>
                    <th className="px-3 py-2 font-semibold">Barem</th>
                    <th className="px-3 py-2 font-semibold">Rezolvare explicată</th>
                  </tr>
                </thead>
                <tbody>
                  {lista.map((e) => {
                    const ref = e.subiect ?? e.barem!;
                    const rez = isBundledOriginal(ref) && hasRezolvareKey(bacPaperKey(ref));
                    const nume = `${bacMaterieLabel(e.materie)}${e.variant ? ` · varianta ${e.variant}` : ""}`;
                    return (
                      <tr key={`${e.materie}-${e.variant}`} className="border-t">
                        <td className="px-3 py-2">
                          {isBundledOriginal(ref) ? (
                            <a
                              href={bacPaperPath(ref)}
                              className="font-medium hover:text-primary hover:underline"
                            >
                              {nume}
                            </a>
                          ) : (
                            <span className="font-medium">{nume}</span>
                          )}
                        </td>
                        <td className="px-3 py-2">
                          {e.subiect?.pdf_url ? (
                            <a
                              href={e.subiect.pdf_url}
                              target="_blank"
                              rel="noopener"
                              className="text-primary underline"
                            >
                              Subiect PDF
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-3 py-2">
                          {e.barem?.pdf_url ? (
                            <a
                              href={e.barem.pdf_url}
                              target="_blank"
                              rel="noopener"
                              className="text-primary underline"
                            >
                              Barem PDF
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-3 py-2">
                          {rez ? (
                            <a
                              href={bacRezolvarePath(ref)}
                              className="font-semibold text-emerald-700 underline dark:text-emerald-400"
                            >
                              Rezolvare pas cu pas
                            </a>
                          ) : (
                            <span className="text-muted-foreground">în curând</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function BacAniNav({ curent }: { curent?: number }) {
  const ani = Array.from({ length: 17 }, (_, i) => 2026 - i);
  return (
    <ul className="flex flex-wrap gap-2">
      {ani.map((y) => (
        <li key={y}>
          <Link
            to="/subiecte-bac/an/$an"
            params={{ an: String(y) }}
            className={`inline-block rounded-md border px-3 py-1.5 text-sm ${y === curent ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary/40 hover:text-primary"}`}
          >
            Bacalaureat {y}
          </Link>
        </li>
      ))}
    </ul>
  );
}

import type { Eveniment } from "@/data/calendar-2027";

export function CalendarExamen({ grupe, surse }: { grupe: { titlu: string; evenimente: Eveniment[] }[]; surse: { label: string; href: string }[] }) {
  return (
    <div className="space-y-6">
      {grupe.map((g) => (
        <div key={g.titlu}>
          <h3 className="text-lg font-semibold">{g.titlu}</h3>
          <table className="mt-2 w-full text-sm">
            <tbody>
              {g.evenimente.map((e) => (
                <tr key={e.data + e.ce} className="border-b border-border">
                  <th scope="row" className="w-40 py-2 pr-3 text-left font-semibold align-top"><time dateTime={e.data}>{e.ziua}</time></th>
                  <td className="py-2 text-muted-foreground">{e.ce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <p className="text-xs text-muted-foreground">
        Datele sunt cele anunțate de Ministerul Educației; varianta obligatorie este ordinul publicat în Monitorul Oficial. Surse:{" "}
        {surse.map((s, i) => (
          <span key={s.href}>{i > 0 && ", "}<a className="text-primary underline" href={s.href} rel="noopener nofollow" target="_blank">{s.label}</a></span>
        ))}
        .
      </p>
    </div>
  );
}

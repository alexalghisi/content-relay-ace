// Texte pure pentru anunțarea elevului când un profesor îi trimite o propunere (email + SMS).
// Fără I/O: testate în notify-student-mesaje.test.ts.

export type DatePropunere = {
  numeElev?: string | null;
  profesor?: string | null;
  materie: string;
  pretPeOra?: number | null;
  data?: string | null;
  ora?: string | null;
  link: string;
};

export const escHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export function linkCerere(id: string, token?: string | null): string {
  return `https://meditatiidirect.ro/cererea-mea/${encodeURIComponent(id)}${
    token ? `?t=${encodeURIComponent(token)}` : ""
  }`;
}

export function numeProfesor(p?: string | null): string {
  return p?.trim() || "Un profesor";
}

export function detaliiPropunere(d: DatePropunere): string {
  return [
    d.pretPeOra ? `${d.pretPeOra} lei/oră` : "",
    d.data ? `din ${d.data}` : "",
    d.ora ? `ora ${String(d.ora).slice(0, 5)}` : "",
  ]
    .filter(Boolean)
    .join(", ");
}

export function subiectEmail(d: DatePropunere): string {
  return `Un profesor vrea să-ți fie meditator la ${d.materie}`;
}

export function htmlEmail(d: DatePropunere): string {
  const prof = numeProfesor(d.profesor);
  const det = detaliiPropunere(d);
  const salut = d.numeElev?.trim() ? `Bună, ${escHtml(d.numeElev.trim())}!` : "Bună!";
  return `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:24px;color:#1f2937">
<p>${salut}</p>
<p><strong>${escHtml(prof)}</strong> s-a oferit să-ți fie profesor de meditații pentru cererea ta la <strong>${escHtml(d.materie)}</strong>${det ? ` (${escHtml(det)})` : ""}.</p>
<p>Poți vedea propunerea, o poți accepta și îl poți evalua pe profesor:</p>
<p><a href="${d.link}" style="display:inline-block;background:#1d4ed8;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">Vezi propunerea</a></p>
<p style="font-size:13px">Sau deschide: <a href="${d.link}">${d.link}</a></p>
<p style="font-size:12px;color:#6b7280">Linkul este privat — nu îl distribui. Primești acest e-mail pentru că ai postat o cerere pe https://meditatiidirect.ro.</p></div>`;
}

export function textEmail(d: DatePropunere): string {
  const det = detaliiPropunere(d);
  return `${d.numeElev?.trim() ? `Bună, ${d.numeElev.trim()}!` : "Bună!"}

${numeProfesor(d.profesor)} s-a oferit să-ți fie profesor de meditații pentru cererea ta la ${d.materie}${det ? ` (${det})` : ""}.

Vezi propunerea, accept-o sau evaluează profesorul aici: ${d.link}

Echipa MeditatiiDirect.ro`;
}

/** SMS fără diacritice (încape în GSM-7, deci costă un singur segment mai des). */
export function textSms(d: DatePropunere): string {
  const fara = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  const prof = fara(numeProfesor(d.profesor)).slice(0, 40);
  return `MeditatiiDirect: ${prof} vrea sa-ti fie profesor la ${fara(d.materie)}. Vezi propunerea: ${d.link}`;
}

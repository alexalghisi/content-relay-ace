/** Fără importuri: folosit de înscriere, resetare și schimbarea parolei din cont. */
/**
 * Motivul exact pentru care Supabase respinge o parolă (eroarea `weak_password`), în română.
 * Supabase poate combina mai multe motive în același mesaj: lungime, tipuri de caractere lipsă
 * sau parolă găsită în listele de parole furate. Întoarce null dacă mesajul nu e despre parolă slabă.
 */
export function motivParolaSlaba(message: string): string | null {
  const m = message.toLowerCase();
  const motive: string[] = [];
  const lungime = /at least (\d+) characters/.exec(m);
  if (lungime) motive.push(`să aibă cel puțin ${lungime[1]} caractere`);
  const idx = m.indexOf("at least one character of each");
  if (idx >= 0) {
    const grupe = message.slice(idx).split(":").slice(1).join(":");
    const cer: string[] = [];
    const areMici = /abcdefghijklmnopqrstuvwxyz/.test(grupe);
    const areMari = /ABCDEFGHIJKLMNOPQRSTUVWXYZ/.test(grupe);
    // „litere mici și mari” într-o singură grupă = orice literă; grupe separate = câte una din fiecare.
    if (/abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/.test(grupe)) cer.push("o literă");
    else {
      if (areMici) cer.push("o literă mică (a–z)");
      if (areMari) cer.push("o literă mare (A–Z)");
    }
    if (/0123456789/.test(grupe)) cer.push("o cifră (0–9)");
    if (/[!@#$%^&*]/.test(grupe)) cer.push("un simbol (de ex. ! @ # $ %)");
    if (cer.length) motive.push(`să conțină cel puțin ${cer.length > 1 ? cer.slice(0, -1).join(", ") + " și " + cer.at(-1) : cer[0]}`);
  }
  const furata = m.includes("known to be weak") || m.includes("easy to guess") || m.includes("pwned") || m.includes("leaked");
  if (!motive.length && !furata) {
    if (m.includes("weak_password") || (m.includes("password") && m.includes("weak"))) return "Parola este prea ușor de ghicit. Alege o parolă mai lungă, cu litere și cifre.";
    return null;
  }
  const parti: string[] = [];
  if (motive.length) parti.push(`Parola trebuie ${motive.join(" și ")}.`);
  if (furata) parti.push("Parola aleasă apare în listele publice de parole furate sau foarte des folosite (ca 123456), așa că nu e acceptată. Alege una pe care n-o folosești și în alte părți.");
  return parti.join(" ");
}


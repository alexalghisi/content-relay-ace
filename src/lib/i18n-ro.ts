// Textele interfeței în română — singura limbă a site-ului. Modul mic, separat de celelalte limbi
// (src/lib/i18n.ts), ca pachetul JavaScript al fiecărei pagini să nu mai includă 9 dicționare.
export const DEFAULT_LOCALE = "ro" as const;
export const LOCALE_COOKIE = "md_lang";

export const ro = {
  "nav.request": "Cere ofertă",
  "nav.requests": "Cereri elevi",
  "nav.ai": "Profesor AI",
  "nav.map": "Harta Blocajelor",
  "nav.meditator": "Meditator AI",
  "nav.how": "Cum funcționează",
  "nav.blog": "Blog",
  "auth.messages": "Mesaje",
  "auth.myPanel": "Panoul meu",
  "auth.myAccount": "Contul meu",
  "auth.account": "Cont",
  "auth.logout": "Ieșire",
  "auth.login": "Autentificare",
  "auth.signup": "Creează cont",
  "auth.becomeTeacher": "Devino profesor",
  "auth.teacherPanel": "Panoul profesorului",
  "ui.menu": "Meniu",
  "ui.language": "Limba site-ului",
  "footer.promoTitle": "Pregătire pentru admitere la toate facultățile din România",
  "footer.promoText": "UMF, ASE, Politehnica, Drept, Poliție + 100 universități. Testează-te gratuit pe GrileAdmitere.ro",
  "footer.promoCta": "Vezi grilele →",
  "footer.about": "Educație la un click distanță. Meditații cu profesori verificați în toată România — chat direct, fără intermediari.",
  "footer.students": "Pentru elevi",
  "footer.search": "Caută meditații",
  "footer.map": "Harta Blocajelor — ce noțiune îți lipsește",
  "footer.scanner": "Scanerul de lacune — test gratuit",
  "footer.sim": "Simulare test cu corectare AI",
  "footer.teachers": "Profesori",
  "footer.subjects": "Materii",
  "footer.prices": "Prețuri",
  "footer.exams": "Examene",
  "footer.bac": "Variante BAC (subiecte + bareme)",
  "footer.subiecteBac": "Subiecte BAC cu rezolvări",
  "footer.en": "Evaluarea Națională — calendar și reguli",
  "footer.enCalc": "Calculator medie Evaluarea Națională",
  "footer.admission": "Admitere facultate",
  "footer.enTutoring": "Meditații Evaluare Națională",
  "footer.company": "Companie",
  "footer.aboutUs": "Despre noi",
  "footer.contact": "Contact",
  "footer.blog": "Blog & ghiduri",
  "footer.tutorials": "Tutoriale",
  "footer.partners": "Parteneri",
  "footer.terms": "Termeni și condiții",
  "footer.privacy": "Confidențialitate (GDPR)",
  "footer.cookies": "Politica de cookies",
  "footer.popular": "Meditații populare după oraș",
  "footer.rights": "Toate drepturile rezervate.",
  "footer.love": "Made with ♥ pentru educație în România.",
  "err.404title": "Pagina nu a fost găsită",
  "err.404text": "Pagina căutată nu există sau a fost mutată.",
  "err.home": "Înapoi acasă",
  "err.title": "A apărut o eroare",
  "err.retry": "Încearcă din nou",
  "err.homeShort": "Acasă",
  "ui.contentNote": "Unele pagini sunt disponibile momentan doar în română.",
};

export type MsgKey = keyof typeof ro;

export function translateRo(key: MsgKey): string {
  return ro[key];
}

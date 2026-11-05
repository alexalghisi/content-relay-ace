/**
 * Comutator temporar (decizia proprietarului, nov. 2026): livrarea SMS nu e de încredere, așa că
 * înregistrarea NU mai cere telefon și nu mai blochează contul până la codul SMS.
 * Pune `true` ca să reactivezi telefonul obligatoriu + verificarea SMS la înscriere.
 * Profesor AI își păstrează propria verificare SMS (lecția gratuită o singură dată per număr).
 */
export const TELEFON_LA_INREGISTRARE = false;

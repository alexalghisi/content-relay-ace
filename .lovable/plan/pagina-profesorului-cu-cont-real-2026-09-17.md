# Pagina profesorului cu cont real

Profesorii primesc un spațiu propriu, accesibil doar după autentificare: profil real, calendar de disponibilitate și ofertele pe care le publică. Elevii rămân cei care postează cererea — profilul profesorului se vede doar în propunerile trimise și în pagina lui publică, nu într-o listă de profesori.

## Ce construim

### 1. Panoul profesorului — `/profesor`
Accesibil doar autentificat (altfel invitație la autentificare / creare cont).
Trei secțiuni în pagină:

**Profil real**
- Nume, fotografie, oraș (preluate din contul existent)
- Titlu profesional („Profesor de matematică, 8 ani experiență")
- Descriere, materii predate, nivel, ani de experiență
- Tarif orientativ (de la / până la, lei/oră)
- Online / la domiciliu / în cabinet
- Buton „Publică profilul" — atât timp cât e nepublicat, nimeni nu-l vede

**Calendar de disponibilitate**
- Grilă săptămânală: pentru fiecare zi se adaugă intervale (ex. Luni 16:00–20:00)
- Se pot adăuga / șterge intervale, salvare imediată
- Un rezumat text („Disponibil: Lu, Mi, Vi după-amiaza") apare pe profilul public

**Ofertele mele**
- Listă cu ofertele publicate: materie, nivel, titlu, descriere, preț/oră, online/fizic, status
- Creare, editare, pauză, ștergere
- Fiecare ofertă publicată primește o pagină proprie, legată de profil

### 2. Pagină publică de profesor — `/profesor/<nume>`
Se generează doar când profesorul apasă „Publică profilul": nume, foto, titlu, descriere, materii, tarif, disponibilitate, ofertele active și buton de contact. Nu apare nicio listă publică de profesori — pagina se ajunge prin link direct sau prin propunerea trimisă unui elev.

### 3. Legături în site
- În meniu, pentru utilizatorii autentificați: „Panoul meu"
- Pagina „Pentru profesori" primește conținut real (cum funcționează, de ce cont, ce e gratuit) și buton „Creează cont de profesor"
- Din `/cereri`, profesorul poate trimite o propunere la o cerere, cu profilul lui atașat

## Detalii tehnice

- Tabele noi: `teacher_profiles` (date profesionale legate de `auth.users`), `teacher_availability` (zi + interval orar), `teacher_offers` (ofertele publicate), `teacher_proposals` (propunerea trimisă la o cerere).
- RLS: fiecare profesor scrie și citește doar propriile rânduri; citire publică (anon) doar pentru profilurile și ofertele marcate publicate; GRANT-uri explicite pe fiecare tabel.
- Tabelele vechi `teachers` / `ads` (date importate) rămân neatinse.
- Pagina publică primește `head()` propriu cu titlu, descriere, OG și JSON-LD `Person`; panoul privat este `noindex`.
- Fără date inventate: totul vine din ce completează profesorul.

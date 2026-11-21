# BAC 2027: modele oficiale, bareme, rezolvări pas cu pas și rulare de cod online

## Situația reală (21 nov 2026)
- Subiectele BAC 2027 din sesiune (14–18 iunie 2027) nu există încă.
- Există deja **modelele oficiale BAC 2027** (subiect + barem), publicate de Minister pe subiecte.edu.ro la 1 nov 2026: 26 de subiecte și 24 de bareme, la 14 materii.
- Pe site, regula actuală ascunde orice document marcat „model”. Modelele vor fi afișate separat, cu eticheta clară **„Model oficial 2027”**, nu ca subiect dat în sesiune.
- Platforma nu are încă rulare de cod online. Asta e o funcție nouă, nu o completare.

## Ce construim

### 1. PDF-uri și bareme BAC 2027 (toate materiile)
- Descarc modelele și baremele de pe subiecte.edu.ro și le urc în arhiva de PDF-uri, cu un nume nou: `materie/2027/model-subiect.pdf` și `model-barem.pdf`.
- Auditul automat citește textul fiecărui PDF și confirmă emitentul, anul 2027 și faptul că e model. Baremul e pus lângă subiect doar dacă profilul se potrivește.
- Paginile /subiecte-bac primesc anul 2027 cu secțiunea „Model oficial”. Sitemap-ul îl include după aceeași regulă.

### 2. Rezolvări explicate pas cu pas
- **Informatică (mate-info, C/C++)** și **Matematică M1**: rezolvări complete, scrise ca până acum, cu pași, răspuns, verificare și greșeli frecvente.
- Codul C++ trece prin teste reale (compilare și rulare pe exemple și cazuri limită) înainte de publicare, exact ca la 2026.
- Celelalte materii primesc PDF și barem acum. Rezolvările lor vin ulterior, pe rând.
- Rezolvările nu se prezintă niciodată ca barem oficial.

### 3. Trimite codul și rulează-l pe platformă (nou)
- La fiecare problemă de programare apar un editor de cod și butoanele **„Rulează”** și **„Evaluează”**.
- „Evaluează” rulează codul elevului pe teste ascunse (ca în captura trimisă) și arată câte teste trec, cu limită de timp.
- Funcția e disponibilă doar pentru utilizatorii autentificați, cu o limită zilnică de rulări, ca să nu fie folosită abuziv.
- Codul se compilează la un serviciu extern de compilare. Testele ascunse rămân pe server și nu ajung în browser.

## Decizie necesară
Rularea codului are nevoie de un serviciu extern de compilare C++ (de exemplu Judge0). Fie îmi dai o cheie pentru un astfel de serviciu, fie aleg eu o variantă gratuită, cu limite mai mici. Până răspunzi, construiesc punctele 1 și 2.

## Detalii tehnice
- `Sesiune` primește valoarea `model`. Regex-ul din `scripts/audit-bac-pdfs.py` și regulile din `src/lib/bac-verificare.ts` acceptă `model-*` doar când `model_document` e adevărat și anul e confirmat. Testele bun acoperă cazul.
- Rezolvări noi în `src/data/rezolvari-verificate/informatica-2027-model.ts` și `matematica-2027-model.ts`, plus scripturi în `scripts/verificare-rezolvari/*-2027-model/`. Testul existent verifică faptul că codul afișat e identic cu fișierul `.cpp` testat.
- Runner-ul: o funcție de server `src/lib/ruleaza-cod.functions.ts`, protejată cu `requireSupabaseAuth`, cu cotă zilnică pe edge-cache și teste ascunse în `*.server.ts`. Componenta editorului se încarcă doar în browser.
- AGENTS.md primește regula pentru modele și runner.

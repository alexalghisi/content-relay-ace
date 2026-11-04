# Roadmap

- [x] Monitoring: politică SELECT numai pentru propriul folder avatars aplicată și confirmată în DB; transfer real, refresh și curățare cu admin trec, 4 teste UI trec. Test opt-in e2e/profile-photo-rls.py păstrat.
- [ ] Monitoring: confirmare completă fotografii cu utilizator obișnuit — blocat: singura sesiune autorizată disponibilă este admin; nu modifica rolul și nu alege alt cont fără aprobarea utilizatorului.
- [x] Monitoring: reîncercarea înscrierii după conflict/generare/livrare eșuată nu păstrează cheia; cooldown 60 s doar la succes și mesaj neutru pentru cerere în curs. Handler real testat cu furnizori simulați.
- [x] Monitoring: limita AI se aplică numai conectării, apoi inactivității pe fiecare fragment; flux activ peste limită testat. 47 regresii trec, build OK. Modificările codului nu sunt publicate; conversația audibilă nu este verificată.

- [x] Numărul proprietarului reutilizabil la înscriere și SMS, indexul unic actualizat; confirmarea emailului/codului rămâne obligatorie, fără privilegii din număr. 28 teste trec, build OK; nu s-a creat cont nou și nu s-a trimis SMS real în această intervenție. Codul necesită publicare.

- [x] Fotografii multiple: transfer TUS cu progres/reîncercare, originale JPG/PNG/WebP/GIF păstrate, alte formate convertite fără pierderi; limita de 3 MB a bucketului eliminată. Transfer real + refresh + ștergere verificate cu contul proprietarului; teste originale multiple desktop/telefon trec. Limita globală a furnizorului nu este încă verificată; nu sunt promise încărcări nelimitate.
- [ ] Autentificare e-mail/Google reală: remediate stările la erori; 16 teste simulate de înscriere/confirmare/login trec. Blocat pentru confirmare reală: nu există sesiune Google interactivă sau acces la confirmarea unui cont de test nou; nu declara OAuth verificat.
- [x] Audit SEO public: șase pagini live cu titluri unice, OG, canonical, limba ro și un H1; robots, sitemap 752 URL-uri unice, /subiecte-admitere o singură dată, 404 real verificate. Search Console confirmă prima pagină indexată; fără garanții de clasament.
- [ ] Integrare conținut extern — blocat: raportul Semrush atașat menționat și textele Claude nu au fost furnizate.
- [ ] Monitorizare zilnică: workflow GitHub pregătit cu teste, verificări SEO live, raport și issue la eșec; rularea programată/notificările nu pot fi confirmate fără repo GitHub conectat. Monitorizarea Semrush existentă rulează, dar eșuează cu TOTAL LIMIT EXCEEDED; necesită refacerea cotei la furnizor.
- [ ] Publicare solicitată 3 noiembrie: verificarea live încă nu arată formularul nou de recenzii; finalizarea publicării nu este confirmată. Commit/push/merge și programarea GitHub nu pot fi confirmate fără acces la repository.
- [x] Evaluări: formular rating 1–5 și recenzie editabilă Profesor AI (după răspuns confirmat pe server), profesori reali din linkul cererii; update zero rânduri nu mai pretinde salvare. 4 regresii trec; panoul real AI eligibil verificat după răspuns corect.
- [ ] Evaluări pentru sesiunile vocale AI directe — blocat: confirmarea utilizării ajunge numai în browser, nu pe server; nu acorda eligibilitate din afirmații client nevalidate.
- [x] Profesor AI: fragmente avatar cu același ID, întrerupere numai validată, pornire limitată și fallback PCM, anulare la închidere, timeout primul token/idle pentru un singur furnizor, fără rerulări automate ambigue; teste trec. Răspuns real 7+5 corect (doisprezece), ~1,5 s; nu verifică vocea audibilă.
- [ ] Profesor AI: conversație reală cu avatar/voce/întrerupere, două lecții succesive și iPhone — blocat: testele browser nu confirmă sunet audibil și microfonul uman.

- [ ] Căsuță admin@meditatiidirect.ro: conectare Cloudflare cu permisiuni limitate la DNS pentru domeniu; alegere/activare serviciu de căsuță poștală, apoi confirmarea înregistrărilor exacte înainte de modificări. Blocat: conexiunea Cloudflare și contul serviciului de e-mail nu sunt încă disponibile.
- [x] Explică formularul tokenului Cloudflare: Zone → DNS → Edit și Zone → Zone → Read, numai meditatiidirect.ro; fără Access: Apps sau Revoke.
- [x] SMS: urmărire server-side cu ID, acceptare separată de livrare; retrimitere reală: POST 200, GET inițial 404, apoi GET 200 DELIVERED la reverificarea după 10 secunde. 13 teste trec; codul și cheia nu sunt expuse. Modificările sunt în previzualizare.
- [x] SMS: domeniu GatewayAPI corectat la global (cheia existentă acceptată HTTP 200, respinsă UE HTTP 401); eliminată verificarea fără cod la eșec, 7 teste de regresie trec. Nu s-au trimis SMS-uri reale către utilizatori.
- [ ] SMS: publicare — modificările sunt în previzualizare; livrarea testului pe telefon real este confirmată de GatewayAPI (DELIVERED).

- [x] Admitere: audit de conținut pentru cele 57 de documente publicate; afișate doar cele cu sursă declarată și an confirmat (UPB de pe physics.pub.ro = oficial; UMF Cluj/Iași de pe submed.ro = „copie preluată”, simulările etichetate). Ascunse: Drept București (11 scanări fără sursă) și simulările UMF Timișoara fără sursă.
- [x] Rezolvări verificate UPB 2025: Informatică (10 grile, cod rulat cu g++) și Matematică AAM (10 grile, SymPy), cu Meditator AI pe fiecare grilă.
- [ ] Admitere: subiecte oficiale UBB, UTCN, ASE, UMF Cluj direct de pe site-urile universităților; sursa oficială pentru Drept București.

- [x] Audit de conținut pentru toate cele 288 de PDF-uri BAC găzduite (text citit din fiecare fișier): 134 trec, 154 ascunse (73 emitent neoficial — inclusiv o bibliografie a Bibliotecii Naționale și culegeri județene, 59 subiecte puse ca barem, 42 modele, 17 sesiune greșită, 16 an greșit). Baremele de altă specializare/variantă nu mai apar lângă subiect. Paginile, hub-urile și sitemap-ul folosesc aceeași regulă.
- [x] 4 rezolvări originale verificate prin rulare (g++ / SymPy): Informatică 2026 iunie V4, Matematică M_tehnologic 2024 august V3, Informatică simulare 2025 (ISJ Brăila), Matematică M_mate-info simulare 2024; butoane Meditator AI pe fiecare exercițiu, context construit pe server.
- [ ] Completare arhivă cu PDF-uri oficiale 2017–2026 lipsă (ex. Matematică/Informatică iunie 2025) — blocat: subiecte2024–2026.edu.ro dau eroare de certificat HTTPS în browser și nu sunt accesibile din mediul cloud; necesită descărcare manuală sau cheia de upload (service role).
- [ ] Collab ↔ collaborare.ro: câmp `problemSlug` în setările camerei Collab + link „Deschide enunțul” — blocat pentru enunțuri în Collab: collaborare.ro nu are API/export de date și repo-ul sursă nu e accesibil din această sesiune.

- [x] Corectează activarea sunetului dintr-o apăsare în lecție, inclusiv în timpul conectării; 11 teste trec și browserul la 402×725 confirmă muted true → false, volum 1 și oprire/reluare. Build OK. Numai previzualizare.
- [ ] Confirmă vocea audibilă pe iPhone real — browserul de test nu a conectat video LiveAvatar; activarea elementului audio este verificată, nu conversația audibilă.

- [x] Ascunde invitația de instalare mobilă și rezervă testarea Profesor AI proprietarului; ceilalți văd „În curând”. Verificat în browser: acces citit pentru proprietar și pornire activă, vizitator anonim fără configurator sau sesiune, banner mobil absent; 28 teste trec. Numai previzualizare.

- [x] Profesor AI: replici simple și deschiderea scurtate; eliminat salutul vocal dublu, modelul/plafonul/protecțiile păstrate. Întrebare reală 7+5: 3,40 sec înainte, 1,91 sec după, răspuns corect și fără erori; variația furnizorului nu permite garantarea timpului. Video neprobat deliberat; numai previzualizare.

- [x] Profesor AI: corectată coada de vorbire, întrebările pot fi trimise și în timpul răspunsului, prioritate întrebării noi; 6 teste trec. Cont real: răspuns corect la 7+5, fără erori; doar previzualizare.
- [x] Profesor AI: integrare LiveAvatar pregătită (avatar video, voce, întrerupere prin voce); 20 teste trec.
- [ ] Profesor AI: test complet cu voce, avatar și întrerupere — blocat: lipsesc cheia LiveAvatar (app.liveavatar.com/developers) și codurile avatarului/vocii alese, din LiveAvatar. Vechiul serviciu HeyGen este retras (404).

- [x] Repară erorile document.cookie din cadrele Adsterra fără a elimina izolarea; 80 citiri/scrieri simulate în cadrul real fără cookie-uri persistate sau erori, verificare separată a scripturilor furnizorului fără erori; 10 teste trec. Test AI real generat cu cont conectat. Doar previzualizare; livrarea reclamelor nu este confirmată.

- [x] Integrează Social Bar într-un cadru izolat și Smartlink etichetat pe paginile publice, mută native mai sus. Verificat la 1280 și 390 px: fără overflow sau erori, trei cadre nepopulate cu înălțime zero, link corect; 7 teste trec. Numai previzualizare, nepublicat.
- [ ] Confirmă livrarea Social Bar și bannerelor — blocat de Adsterra: toate scripturile solicitate la verificarea din 18 octombrie răspund 200 cu 0 bytes pe calculator și telefon. Compatibilitatea Social Bar în cadru izolat și destinațiile Smartlink nu sunt confirmate de furnizor.

- [x] Elimină cadrele, etichetele și spațiile proprii Adsterra fără reclamă; pe prima pagină și spațierea exterioară dispare. Browser: ambele plasări reale au înălțime 0; cu media simulată ambele se afișează, fără erori. Cele 4 teste trec. Simularea nu confirmă livrarea furnizorului.
- [ ] Livrare efectivă Adsterra — blocată de furnizor: browserul local primește 200 cu 0 bytes; verificarea HTTP independentă primește 403 cu 0 bytes la cele trei URL-uri, inclusiv cu Referer live. Codurile rămân integrate, fără reclame fabricate. Modificările sunt în previzualizare, nepublicate.
- [x] Actualizează cele trei coduri de bannere Adsterra furnizate pe 18 octombrie, în plasările existente, inclusiv bannerul mobil 320×50; fără popup/social bar și cu AdSense oprit.
- [x] Diagnostichează răspunsurile, consola și blocările celor trei bannere; repară solicitarea mobilă inutilă înaintea bannerului desktop, fără modificarea designului.
- [ ] Confirmă livrarea reclamelor cu noile coduri — pe 18 octombrie, cererile din browser și cele directe (cu/fără Referer meditatiidirect.ro) returnează HTTP 200, Content-Length: 0, application/javascript pentru cele trei scripturi noi; nicio eroare de browser sau cerere blocată în browserul de test, fără CSP restrictiv. Livrarea de conținut depinde de Adsterra; aprobarea zonelor, filtrarea IP/geografică și compatibilitatea sandbox nu sunt confirmate. Live folosește încă URL-urile vechi: schimbările noi nu sunt publicate. Scriptul suplimentar fără configurație de banner rămâne neactivat.

- [x] Restaurează plasările Adsterra lipsă pe prima pagină; verificat: două cadre după acceptare, zero înainte de acord și după refuz; AdSense rămâne oprit.
- [ ] Afișare efectivă reclame Adsterra — blocat: verificat din nou pe preview și pe meditatiidirect.ro la 18 octombrie 2026, după apăsarea Accept; ambele invoke.js răspund HTTP 200 cu 0 bytes, inclusiv la cereri directe în browser. Identificatorul native corespunde containerului, iar cheia bannerului corespunde URL-ului; nu există conținut publicitar de executat. Necesită coduri active și confirmarea zonelor/domeniului de la Adsterra; eliminarea acordului necesită o variantă confirmată fără cookie-uri/date personale. Designul și izolarea reclamelor au rămas neschimbate; cele 4 teste de acord/AdSense trec.

- [x] Reintroduce Adsterra în plasările existente, separat de AdSense, cu acord explicit și fără popunder/social bar.

- [x] Corectează prezentarea incompletă a articolelor, livrează blogul în primul răspuns, înlocuiește pagina goală de tutoriale cu ghiduri practice și suspendă reclamele; verificat în preview pe desktop și telefon.
- [ ] Revizuire editorială integrală a articolelor și materialelor de examen — blocat: necesită verificare umană a exactității și surselor; corecțiile tehnice nu garantează aprobarea AdSense.
- [ ] Reevaluare AdSense — blocat: aprobarea este decisă de Google, cererea se trimite din contul utilizatorului după publicare.

- [x] Verifică acum concurența și cererea de căutare din România; configurează monitorizarea SEO zilnică automată prin Semrush.
- [x] Aplică optimizări relevante pe paginile de meditații, păstrând modelul cerere–propunere și designul.

- [x] Transformă orașul, materiile, nivelurile și tarifele profilului în selecții clare; include toate județele prin orașele disponibile.
- [x] Adaugă modificarea ofertelor existente, păstrând pauza și ștergerea.
- [x] Creează și integrează pe prima pagină un clip profesional realist despre meditații.
- [x] Analizează concurenții și expresiile de căutare relevante; aplică optimizări SEO fără copiere de conținut.
- [x] Rezolvări BAC doar pe subiectul oficial (PDF verificat); drafturile vechi fără sursă ascunse; PDF-urile greșite mutate în `_carantina/`
- [ ] Revizuire umană a rezolvărilor (status draft → revizuit) — blocat: necesită editor
- [ ] Reîncărcare subiecte oficiale corecte pentru variantele carantinate — blocat: sursă verificată a fișierelor
- [x] Apel video în chat + ascunderea automată a telefoanelor/emailurilor în mesaje
- [x] Număr „Cereri noi” lângă „Cereri elevi”
- [ ] SMS către profesori la cerere nouă — blocat: conectarea contului GatewayAPI de către utilizator
- [x] Pauză de respirație de 2 minute înainte de pornirea cronometrului în simularea BAC
- [ ] Arhivă Evaluarea Națională (subiecte + bareme pe ani și sesiuni), pagină reală pentru clasa a VIII-a și calculator de notă — în lucru
- [ ] Admitere medicină: grile reale pe discipline, calculator de admitere, pagină UMF Cluj
- [ ] Pagină admin cu mesaje (inbox contact_messages) + cont admin@meditatiidirect.ro
- [ ] Notificare e-mail profesori la cereri noi — blocat: necesită serviciu extern de campanii (sistemul intern nu permite e-mail în masă); utilizatorul alege serviciul

- [x] Limba site-ului (9 limbi): meniu de limbă în antet pe toate paginile; meniul, subsolul și paginile de eroare traduse; alegerea se păstrează. 4 teste trec. Numai previzualizare.
- [ ] Traducerea conținutului paginilor principale (acasă, cereri, cere ofertă, înscriere/autentificare, profesori, Profesor AI) în cele 9 limbi, cu adrese proprii pe limbă (/en/...) și hreflang — următoarea etapă.

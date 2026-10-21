# Roadmap

- [ ] Repară activarea sunetului lecției pe iPhone; verifică pornirea din apăsare și blocarea redării. Confirmarea auditivă pe iPhone real necesită telefonul proprietarului.

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

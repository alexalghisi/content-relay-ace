# Remediere și verificare MeditatiiDirect

## Obiectiv
Remedierea funcțiilor existente, fotografii multiple, evaluări autentice și verificări zilnice, fără redesign sau pierderea URL-urilor indexate. Publicarea se face după verificări, cu rezultate reale și blocaje declarate.

## Constatări deja verificate
- Înscrierea prin e-mail folosește serviciul propriu de confirmare; Google există pe înscriere și autentificare. Excepțiile Google pot lăsa butonul blocat.
- Fotografiile sunt limitate în cod la 30 MB, sunt redimensionate pentru o limită de 3 MB și se păstrează o singură fotografie principală. Cerința nouă necesită o colecție separată și încărcări fără reducerea ascunsă a calității.
- Testele existente de autentificare și fotografii folosesc răspunsuri simulate; nu reprezintă confirmarea funcționării serviciilor reale.
- În Profesor AI, fiecare fragment audio primește alt identificator LiveAvatar; protocolul cere un singur identificator pentru întreaga replică. Mai există riscuri de pierdere audio la deconectare, reconectare după oprire și întrerupere pe zgomot.
- Există programări active pentru monitorizarea concurenței și IndexNow. Ele nu înlocuiesc verificările zilnice ale autentificării/fotografiilor și notificările de defecțiuni.
- CI rulează la modificări, nu zilnic. Există și o programare activă de blog: verificăm că publicarea automată rămâne oprită și eliminăm executarea inutilă fără să o reactivăm.
- Raportul Semrush menționat în document nu este atașat. „0,26%” rămâne valoare declarată de proprietar, nu rezultat verificat.

## 1. Profesor AI și evaluări rămase neterminate
- Corectează identificatorul comun al replicilor audio și recuperarea către redare audio atunci când avatarul se deconectează.
- Impune termene de conectare/răspuns și anulare completă la oprire, reconectare și întrebare nouă; nu întrerupe vocea doar pe zgomot.
- Protejează microfonul de reutilizarea fluxurilor încheiate și de pornirea întârziată după închiderea lecției.
- Păstrează avatarul ales, autentificarea, cotele și lecția gratuită existentă. Nu înregistrează conținutul conversațiilor în loguri.
- Adaugă evaluare 1–5 și comentariu pentru Profesor AI, unică și editabilă per cont, eligibilitate verificată server-side și fără recenzii inventate.
- Pentru profesorii reali păstrează evaluarea prin cererea privată; corectează succesul fals la zero rânduri actualizate, păstrarea comentariului și erorile vizibile. Nu publică automat comentarii colectate în privat.

## 2. Autentificare și fotografii
- Păstrează înscrierea server-side, confirmarea e-mailului și verificarea separată SMS. Corectează erorile Google, persistența sesiunii și destinațiile de revenire.
- Adaugă colecție de fotografii cu o fotografie principală, autorizare proprie utilizatorului și ștergere sigură; păstrează fotografiile existente.
- Înlătură plafonul arbitrar din frontend și compresia obligatorie. Folosește încărcări reluabile cu progres, retry și anulare pentru fișiere mari.
- Configurează limitele storage numai în limitele reale ale serviciului. Documentează limita efectivă și costurile; nu promite fișiere nelimitate și nu majorează abonamente fără acord.
- Verifică salvarea după refresh, logout/login, eșecul transferului și recuperarea după eșecul salvării profilului.

## 3. SEO și conținut extern
- Inventariază familiile de pagini și verifică live statusul, canonical, indexarea, titlurile/descrierile, OG/Twitter, H1, schema, linkurile interne, robots și sitemap.
- Repară doar probleme demonstrate; păstrează redirecturile centralizate, excluderile noindex și timestampurile semnificative de pagină. Nu genera lastmod din data rulării.
- Elimină cifre neconfirmate din conținut/schema sau înlocuiește-le cu agregate reale, fără modificarea designului.
- Măsoară încărcarea și principalele imagini pe telefon și desktop; optimizează fără schimbarea aspectului.
- Refolosește arhitectura existentă pentru textele furnizate de Claude. Pregătește validarea metadatelor și a slugurilor; nu generează articole generice sau pagini duplicate și nu repornește blogul automat.
- Folosește Search Console conectat pentru datele proprii și Semrush pentru concurență; fără promisiunea poziției 1.

## 4. Teste, monitorizare și notificări
- Rulează testele unitare și de regresie relevante, apoi integrare și browser pentru autentificare, fotografii, evaluări, audio și pagini SEO.
- Separă explicit testele simulate de verificările reale. Login Google necesită o autorizare reală; confirmarea e-mailului necesită acces la mesajul de test. Nu solicită parole sau coduri în chat.
- Adaugă rulare zilnică în GitHub Actions pentru regresii și verificări live read-only, rezultate păstrate ca artefacte și notificări la eșec.
- Verificările reale de cont/fotografii folosesc doar un cont dedicat și secrete securizate ale runnerului; nu creează zilnic utilizatori obișnuiți și nu trimite SMS inutil.
- Verifică schedulerul existent, ultimele execuții și destinația notificărilor; execută manual o verificare și o notificare de test.
- Monitorizarea detectează și notifică problemele. Repararea autonomă ulterioară necesită un executant autorizat separat; nu pretinde că un workflow de teste poate modifica singur aplicația.

## 5. Publicare și raport
- Publică după ce verificările relevante trec și testează din nou pe meditatiidirect.ro.
- Raportează teste trecute/eșuate, rezultate reale vs. simulate, limitele furnizorului, monitorizarea activă și blocajele rămase.
- Git este gestionat prin sincronizarea Lovable. Nu executa commit/push/merge manual și nu declara sincronizarea sau merge-ul confirmate fără dovadă din serviciu.

## Detalii tehnice
- TanStack Start și server functions existente; fără migrarea autentificării sau funcții Edge noi.
- Storage API pentru configurarea bucketurilor; migrații cu GRANT și RLS pentru fotografii/evaluări, acces legat de identitatea verificată.
- LiveAvatar LITE: identificator per replică, cleanup după fiecare await și teste cu socket/microfon simulate; verificarea audio reală este raportată separat.
- Workflow zilnic cu permisiuni minime, timeout și fără secrete sau date personale în loguri/artefacte.

## Dependențe externe
- Raportul Semrush și textele Claude nu sunt furnizate; integrarea lor rămâne în așteptare.
- Activarea/verificarea GitHub Actions depinde de repository-ul sincronizat și de accesul la execuțiile/secretele lui; sursa workflowului singură nu dovedește activarea.
- Vocea audibilă și întreruperea necesită o sesiune reală cu microfon și conexiune la furnizor; nu raporta succes pe baza evenimentelor simulate.
- Căsuța poștală și celelalte sarcini istorice blocate rămân separate de acest pachet.
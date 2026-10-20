// Ghiduri locale scrise de mână pentru combinațiile materie × oraș cu cerere reală de căutare
// (ex. „meditatii matematica cluj”, „meditatii romana cluj”). Conținut editorial, nu date de piață:
// fără prețuri, fără număr de profesori, fără recenzii — acestea vin doar din baza de date.
// O combinație cu ghid este indexabilă chiar dacă are puține anunțuri, pentru că pagina are
// conținut util propriu; restul combinațiilor rămân sub regula MIN_LISTINGS_FOR_INDEX.

export interface GhidLocal {
  materie: string; // slug din SUBJECTS_SEO
  oras: string; // slug din CITIES
  /** <title> — formulat ca în căutările reale (Google Autocomplete, RO). */
  title: string;
  description: string;
  h1: string;
  intro: string;
  sectiuni: { titlu: string; paragrafe: string[] }[];
  faq: { q: string; a: string }[];
}

const CLUJ_CARTIERE =
  "Mănăștur, Mărăști, Gheorgheni, Zorilor, Grigorescu, Centru, Bună Ziua, Europa, Andrei Mureșanu, Iris, Dâmbul Rotund, Florești, Apahida sau Baciu";

const faqComune = (materie: string): { q: string; a: string }[] => [
  {
    q: `Găsesc meditații la ${materie} la domiciliu, în cartierul meu din Cluj?`,
    a: `Da. Scrie în cerere cartierul (${CLUJ_CARTIERE}) și intervalul orar. Profesorii care se deplasează acolo îți trimit propuneri; dacă preferi, bifezi „online” și primești propuneri de la profesori din tot Clujul sau din țară.`,
  },
  {
    q: `Cum aleg profesorul de ${materie} potrivit în Cluj-Napoca?`,
    a: "Compară propunerile după trei lucruri: experiența cu exact nivelul tău (clasa, examenul, facultatea), cum explică la prima ședință și cât de clar îți spune ce veți lucra în următoarele săptămâni. Pe platformă discuți direct cu fiecare profesor înainte să te decizi.",
  },
  {
    q: "Plătesc ceva pentru a posta o cerere de meditații?",
    a: "Nu. Postarea cererii este gratuită, platforma nu ia comision, iar tariful îl stabilește fiecare profesor în propunerea lui.",
  },
];

export const GHIDURI_LOCALE: GhidLocal[] = [
  {
    materie: "matematica",
    oras: "cluj-napoca",
    title: "Meditații matematică Cluj-Napoca: profesori pentru Evaluare Națională, BAC și admitere",
    description:
      "Meditații matematică în Cluj-Napoca, la domiciliu sau online: clasele V–XII, Evaluarea Națională, BAC M1/M2 și admitere UTCN/UBB. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații matematică în Cluj-Napoca",
    intro:
      "Matematica este materia cu cele mai multe cereri de meditații din Cluj: pentru Evaluarea Națională, pentru BAC și pentru admiterea la Universitatea Tehnică sau la Facultatea de Matematică și Informatică din UBB. Aici găsești profesori din Cluj-Napoca care predau la domiciliu sau online, plus un ghid scurt despre ce să ceri și cum să alegi.",
    sectiuni: [
      {
        titlu: "Pentru ce se caută meditații la matematică în Cluj",
        paragrafe: [
          "Clasele V–VIII: recuperarea bazelor (fracții, ecuații, geometrie plană) și pregătirea pentru Evaluarea Națională, cu subiecte în stilul examenului. Mulți părinți din Cluj încep pregătirea din clasa a VII-a, pentru că media de admitere la liceele căutate (Racoviță, Coșbuc, Șincai, Avram Iancu, Liceul de Informatică „Tiberiu Popoviciu”) se decide în mare parte la matematică.",
          "Liceu și BAC: programele M1 (mate-info) și M2 (științe ale naturii, tehnologic) au cerințe diferite; un profesor bun lucrează pe programa ta, nu pe una generală. Pentru profilul uman sau pedagogic, pregătirea e pentru M3/materiile de examen din programa respectivă.",
          "Admitere la facultate: UTCN (Universitatea Tehnică) ia în calcul nota la matematică de la BAC sau proba scrisă, iar Facultatea de Matematică și Informatică (UBB) are propria procedură de admitere. Cere profesorului să lucreze pe subiectele din anii anteriori ale facultății pe care o vizezi.",
        ],
      },
      {
        titlu: "Online sau la domiciliu, în Cluj-Napoca",
        paragrafe: [
          `Pentru clasele mici, ședințele față în față funcționează de obicei mai bine. Profesorii se deplasează în cartiere precum ${CLUJ_CARTIERE}; scrie cartierul în cerere ca să primești propuneri de la cei care ajung ușor la tine.`,
          "Pentru liceu și admitere, online (cu tabletă grafică sau tablă virtuală) este la fel de eficient și îți deschide accesul la profesori din tot Clujul și din țară, fără timp pierdut pe drum.",
        ],
      },
      {
        titlu: "Ce să scrii în cerere ca să primești propuneri bune",
        paragrafe: [
          "Clasa și programa (M1/M2), examenul vizat și termenul, ultimele note sau capitolele care te blochează (de exemplu: funcții, derivate, geometrie în spațiu), cartierul sau „online”, zilele libere și bugetul orientativ. Cu aceste detalii, propunerile primite sunt concrete: profesorul îți spune de câte ședințe are nevoie și cum va lucra.",
          "Dacă nu știi exact unde te blochezi, folosește Harta Blocajelor de pe platformă: îți arată noțiunile de care depinde capitolul la care ai probleme și trimite diagnosticul direct în cerere.",
        ],
      },
    ],
    faq: [
      {
        q: "Cât durează pregătirea pentru Evaluarea Națională la matematică?",
        a: "Depinde de punctul de plecare. Pentru un elev cu baze solide, 1–2 ședințe pe săptămână din toamna clasei a VIII-a sunt de obicei suficiente; pentru recuperarea unor lacune din gimnaziu, profesorii recomandă să începi mai devreme și să lucrezi constant pe subiecte în stilul examenului.",
      },
      {
        q: "Meditațiile la matematică pentru BAC din Cluj acoperă și M1 și M2?",
        a: "Da. Precizează în cerere programa (M1 pentru mate-info, M2 pentru științe/tehnologic) și profesorii care predau pe acea programă îți trimit propuneri.",
      },
      ...faqComune("matematică"),
    ],
  },
  {
    materie: "romana",
    oras: "cluj-napoca",
    title: "Meditații română Cluj-Napoca: BAC, Evaluare Națională, clasele V–XII",
    description:
      "Meditații limba română în Cluj-Napoca, la domiciliu sau online: eseuri și texte pentru BAC, Evaluarea Națională, gramatică pentru gimnaziu. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații limba română în Cluj-Napoca",
    intro:
      "La română, diferența o fac structura și exercițiul: eseul argumentativ, caracterizarea personajului, textele de bază pentru BAC și cerințele de gramatică de la Evaluarea Națională. Găsești aici profesori de română din Cluj-Napoca, pentru pregătire la domiciliu sau online, și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Ce pregătesc elevii din Cluj la română",
        paragrafe: [
          "Evaluarea Națională (clasa a VIII-a): înțelegerea textului, gramatică (morfologie și sintaxă), redactarea unui text la cerință. Pregătirea pe modele de subiecte și pe barem contează mai mult decât memorarea.",
          "BAC (clasa a XII-a): subiectul I (text la prima vedere), subiectul II (textul argumentativ sau de analiză) și subiectul III (eseul pe operele studiate, în funcție de profil: real sau uman). Un profesor bun te învață schema eseului și te pune să scrii, nu doar să citești comentarii.",
          "Admitere: pentru Facultatea de Litere (UBB) sau pentru școlile de poliție, cerințele de română sunt specifice; menționează instituția în cerere.",
        ],
      },
      {
        titlu: "Online sau la domiciliu în Cluj-Napoca",
        paragrafe: [
          `Româna se pretează foarte bine online: lucrările se trimit în scris, iar profesorul le corectează cu observații pe text. Pentru gimnaziu, mulți părinți preferă ședințele acasă, în cartiere precum ${CLUJ_CARTIERE}.`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa, examenul și profilul (real/uman), ce tip de cerințe îți dau bătăi de cap (eseul, gramatica, textul argumentativ), cât timp ai până la examen, cartierul sau „online” și bugetul orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Câte eseuri trebuie să știu pentru BAC la română?",
        a: "Depinde de profil și de programa în vigoare în anul tău de examen; profesorul îți face lista operelor obligatorii pentru profilul tău și te ajută să înveți o structură de eseu pe care o adaptezi, nu zeci de texte memorate.",
      },
      {
        q: "Se pot face meditații la română pentru clasele mici (I–IV) în Cluj?",
        a: "Da. Pentru citit, scris corect și compuneri, mulți învățători și profesori oferă ședințe la domiciliu sau online; menționează clasa în cerere.",
      },
      ...faqComune("română"),
    ],
  },
  {
    materie: "engleza",
    oras: "cluj-napoca",
    title: "Meditații engleză Cluj-Napoca: copii, adulți, Cambridge, BAC și conversație",
    description:
      "Meditații engleză în Cluj-Napoca, la domiciliu sau online: copii și elevi, adulți (conversație, business), pregătire Cambridge/IELTS și BAC. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații engleză în Cluj-Napoca",
    intro:
      "Engleza se caută în Cluj pentru trei scopuri diferite: școală și BAC, certificate (Cambridge, IELTS) și engleză pentru adulți, de la conversație la engleza de birou din companiile IT din oraș. Spune în cerere care este scopul tău și primești propuneri de la profesori potriviți.",
    sectiuni: [
      {
        titlu: "Pentru cine sunt meditațiile la engleză în Cluj",
        paragrafe: [
          "Copii și elevi: consolidarea gramaticii și a vocabularului, teme, pregătire pentru competența lingvistică de la BAC sau pentru olimpiadă.",
          "Certificate: Cambridge (KET, PET, FCE, CAE), IELTS sau TOEFL pentru admitere la facultăți din străinătate sau pentru angajare; pregătirea se face pe formatul exact al examenului.",
          "Adulți: conversație, engleză pentru interviuri și pentru job (multe companii din Cluj lucrează în engleză), engleză medicală pentru personalul care pleacă în străinătate.",
        ],
      },
      {
        titlu: "Online sau față în față",
        paragrafe: [
          `Pentru conversație și pregătirea de certificate, online este cea mai folosită variantă. Pentru copii, ședințele la domiciliu în ${CLUJ_CARTIERE} sunt la fel de disponibile; scrie cartierul în cerere.`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Nivelul actual (A1–C1, dacă îl știi), scopul (școală, certificat, conversație, job), termenul, ritmul dorit (ședințe pe săptămână), cartierul sau „online” și bugetul orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Există profesori nativi de engleză în Cluj?",
        a: "Pe platformă, profesorii își descriu singuri experiența și pregătirea; dacă vrei un vorbitor nativ sau un profesor cu certificare CELTA/DELTA, scrie asta în cerere și verifică descrierea din propunere.",
      },
      ...faqComune("engleză"),
    ],
  },
  {
    materie: "fizica",
    oras: "cluj-napoca",
    title: "Meditații fizică Cluj-Napoca: liceu, BAC, admitere UTCN și UMF",
    description:
      "Meditații fizică în Cluj-Napoca, online sau la domiciliu: clasele IX–XII, BAC, admitere la Universitatea Tehnică și la UMF. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații fizică în Cluj-Napoca",
    intro:
      "Fizica se caută în Cluj mai ales de la clasa a IX-a în sus: pentru note, pentru BAC și pentru admiterea la Universitatea Tehnică (UTCN) sau la UMF „Iuliu Hațieganu”, unde fizica este probă la unele specializări. Găsești aici profesori de fizică din Cluj-Napoca și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Pentru ce se pregătesc elevii la fizică",
        paragrafe: [
          "Liceu: mecanică, termodinamică, electricitate, optică; problemele cer și matematică solidă, așa că un profesor bun verifică întâi bazele de calcul.",
          "BAC: subiectele urmează programa profilului (real); pregătirea pe variante din anii anteriori și pe barem este cea mai eficientă.",
          "Admitere: UTCN folosește pentru multe facultăți nota de la BAC sau un concurs de admitere la matematică/fizică; la UMF, fizica este probă pentru anumite specializări. Precizează facultatea în cerere ca profesorul să lucreze pe bibliografia ei.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Fizica se predă bine online cu tablă virtuală, pentru că problemele se rezolvă în scris pas cu pas. Pentru ședințe acasă, în ${CLUJ_CARTIERE}, scrie cartierul în cerere.`,
        ],
      },
    ],
    faq: [
      {
        q: "Pot face meditații la fizică pentru admiterea la Politehnică (UTCN) în Cluj?",
        a: "Da. Menționează facultatea și specializarea; profesorii cu experiență în admitere lucrează pe tipurile de probleme din anii anteriori și pe programa publicată de universitate.",
      },
      ...faqComune("fizică"),
    ],
  },
  {
    materie: "chimie",
    oras: "cluj-napoca",
    title: "Meditații chimie Cluj-Napoca: admitere UMF, BAC, liceu",
    description:
      "Meditații chimie în Cluj-Napoca, online sau la domiciliu: chimie organică și anorganică pentru admitere la UMF „Iuliu Hațieganu”, BAC și liceu. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații chimie în Cluj-Napoca",
    intro:
      "În Cluj, cele mai multe cereri de chimie vin de la elevii care pregătesc admiterea la Medicină, Farmacie sau Medicină Dentară (UMF „Iuliu Hațieganu”), unde chimia organică este probă principală. Pe lângă admitere, profesorii din Cluj predau chimie pentru liceu și pentru BAC.",
    sectiuni: [
      {
        titlu: "Chimie pentru admiterea la UMF Cluj",
        paragrafe: [
          "Admiterea se dă pe grile, după bibliografia publicată de universitate (manualul de chimie organică pentru clasa a X-a/a XI-a și culegerile recomandate). Pregătirea eficientă înseamnă teorie organizată pe capitole și foarte multe grile rezolvate cu explicații, nu doar cu cheia corectă.",
          "Cere profesorului un plan pe luni, cu simulări periodice, și verifică din timp ediția bibliografiei pentru anul tău de admitere.",
        ],
      },
      {
        titlu: "Chimie pentru liceu și BAC",
        paragrafe: [
          "Pentru note și pentru BAC (profil real), accentul cade pe calcule stoechiometrice, soluții, reacții și pe nomenclatura organică; un profesor bun pornește de la lacunele concrete și construiește de acolo.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Grilele se lucrează foarte bine online. Pentru ședințe acasă, în ${CLUJ_CARTIERE}, scrie cartierul în cerere.`,
        ],
      },
    ],
    faq: [
      {
        q: "Când ar trebui să încep pregătirea la chimie pentru admiterea la Medicină în Cluj?",
        a: "Cei mai mulți candidați încep din clasa a XI-a, în paralel cu biologia; cu cât începi mai devreme, cu atât pregătirea poate fi mai puțin intensă. Dacă începi în clasa a XII-a, profesorul îți va propune un ritm mai dens, cu simulări frecvente.",
      },
      ...faqComune("chimie"),
    ],
  },
  {
    materie: "biologie",
    oras: "cluj-napoca",
    title: "Meditații biologie Cluj-Napoca: admitere medicină UMF, BAC, liceu",
    description:
      "Meditații biologie în Cluj-Napoca, online sau la domiciliu: admitere UMF „Iuliu Hațieganu”, BAC (anatomie sau biologie vegetală și animală), liceu. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații biologie în Cluj-Napoca",
    intro:
      "Biologia este, alături de chimie, materia de admitere la UMF Cluj și una dintre cele mai căutate la meditații în oraș. Găsești aici profesori de biologie din Cluj-Napoca, pentru admitere, BAC sau liceu, și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Biologie pentru admiterea la UMF Cluj",
        paragrafe: [
          "Admiterea se dă pe grile din bibliografia publicată de universitate (manualul de biologie clasa a XI-a — anatomia și fiziologia omului — la care se pot adăuga alte surse, în funcție de specializare și de an). Pregătirea bună înseamnă teorie memorată structurat, scheme, și grile cu explicații pentru fiecare variantă greșită.",
        ],
      },
      {
        titlu: "Biologie pentru BAC",
        paragrafe: [
          "La BAC alegi între anatomie și fiziologie umană, genetică și ecologie umană (clasele XI–XII) și biologie vegetală și animală (clasele IX–X). Spune în cerere varianta aleasă ca profesorul să lucreze pe programa corectă.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Biologia se pregătește bine online, cu grile și scheme partajate. Pentru ședințe acasă, în ${CLUJ_CARTIERE}, scrie cartierul în cerere.`,
        ],
      },
    ],
    faq: [
      {
        q: "Pot pregăti biologia și chimia cu același profesor pentru UMF Cluj?",
        a: "Unii profesori predau ambele materii, dar cei mai mulți sunt specializați pe una. Poți posta o cerere pentru fiecare materie sau poți scrie în aceeași cerere că vrei ambele; primești propuneri separate.",
      },
      ...faqComune("biologie"),
    ],
  },
  {
    materie: "informatica",
    oras: "cluj-napoca",
    title: "Meditații informatică Cluj-Napoca: C++, BAC, admitere UBB și UTCN, programare",
    description:
      "Meditații informatică în Cluj-Napoca, online sau la domiciliu: C++ pentru liceu și BAC, admitere UBB și UTCN, programare pentru începători. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații informatică în Cluj-Napoca",
    intro:
      "Clujul este cel mai mare centru IT din Transilvania, iar informatica se caută la meditații pentru școală (C++ la liceu, BAC), pentru admiterea la Facultatea de Matematică și Informatică (UBB) sau la UTCN, și pentru programare de la zero. Găsești aici profesori din Cluj-Napoca și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Pentru ce se caută meditații la informatică",
        paragrafe: [
          "Liceu și BAC: algoritmi, tablouri, șiruri de caractere, subprograme și structuri de date în C++ (sau Pascal, unde se mai folosește); subiectele de BAC urmăresc programa profilului mate-info.",
          "Admitere: Facultatea de Matematică și Informatică (UBB) are probă scrisă din matematică și/sau informatică, iar UTCN (Calculatoare, Automatică) folosește matematica; verifică procedura anului tău și spune în cerere facultatea.",
          "Programare pentru începători sau pentru schimbare de carieră: Python, JavaScript, baze de date; profesorul îți propune un traseu pe proiecte, nu doar teorie.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Informatica se predă cel mai bine online, cu ecran partajat și cod scris împreună. Ședințele acasă, în ${CLUJ_CARTIERE}, sunt posibile dacă scrii cartierul în cerere.`,
        ],
      },
    ],
    faq: [
      {
        q: "Învăț C++ sau Python pentru BAC la informatică?",
        a: "La BAC se acceptă limbajele din programa oficială (C/C++, Pascal și, în funcție de an, altele); C++ este cel mai folosit în liceele din Cluj. Pentru programare în afara școlii, Python este de obicei punctul de plecare recomandat.",
      },
      ...faqComune("informatică"),
    ],
  },
  {
    materie: "germana",
    oras: "cluj-napoca",
    title: "Meditații germană Cluj-Napoca: copii, adulți, Goethe, germană medicală",
    description:
      "Meditații germană în Cluj-Napoca, online sau la domiciliu: pentru școală, certificate Goethe (A1–C1), germană pentru job sau pentru personal medical. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații germană în Cluj-Napoca",
    intro:
      "Germana se caută în Cluj pentru școlile și liceele cu predare în germană, pentru certificatele Goethe cerute la angajare sau la studii în Germania și Austria, și pentru germana medicală. Găsești aici profesori de germană din Cluj-Napoca și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Pentru cine sunt meditațiile la germană",
        paragrafe: [
          "Elevi din secțiile cu predare în germană sau care învață germana ca a doua limbă: gramatică, vocabular, pregătire pentru competența lingvistică de la BAC.",
          "Adulți: certificate Goethe sau telc (A1–C1) pentru job, studii sau reîntregirea familiei; germană medicală pentru medici și asistenți care pleacă în Germania.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Pentru certificate și conversație, online este varianta cea mai folosită. Pentru copii, ședințele acasă în ${CLUJ_CARTIERE} sunt disponibile dacă scrii cartierul în cerere.`,
        ],
      },
    ],
    faq: [
      {
        q: "Cât durează să ajung la nivelul B1 la germană?",
        a: "Depinde de ritm și de timpul investit acasă; profesorul îți estimează după o primă ședință, în funcție de nivelul actual, și îți propune un plan pe săptămâni.",
      },
      ...faqComune("germană"),
    ],
  },
  {
    materie: "franceza",
    oras: "cluj-napoca",
    title: "Meditații franceză Cluj-Napoca: școală, BAC, DELF/DALF, conversație",
    description:
      "Meditații franceză în Cluj-Napoca, online sau la domiciliu: pentru școală și BAC, certificate DELF/DALF, conversație și franceză pentru job. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații franceză în Cluj-Napoca",
    intro:
      "Franceza se caută în Cluj pentru școală (inclusiv secțiile bilingve), pentru BAC și pentru certificatele DELF/DALF cerute la studii în Franța sau Belgia. Găsești aici profesori de franceză din Cluj-Napoca și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Pentru cine sunt meditațiile la franceză",
        paragrafe: [
          "Elevi: gramatică, vocabular, exprimare scrisă și orală; pregătire pentru competența lingvistică de la BAC sau pentru olimpiadă.",
          "Adulți: DELF/DALF (A1–C2) pentru studii sau job, conversație, franceză medicală sau pentru relocare.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Conversația și pregătirea pentru DELF se fac foarte bine online. Pentru copii, ședințele acasă în ${CLUJ_CARTIERE} sunt disponibile dacă scrii cartierul în cerere.`,
        ],
      },
    ],
    faq: [...faqComune("franceză")],
  },
  {
    materie: "istorie",
    oras: "cluj-napoca",
    title: "Meditații istorie Cluj-Napoca: BAC, admitere Drept, Academia de Poliție",
    description:
      "Meditații istorie în Cluj-Napoca, online sau la domiciliu: BAC (profil uman), admitere la Drept (UBB) și la Academia de Poliție. Cerere gratuită, propuneri cu tarif de la profesori din Cluj.",
    h1: "Meditații istorie în Cluj-Napoca",
    intro:
      "Istoria se caută în Cluj mai ales pentru BAC (profilul uman) și pentru admiterile care au istoria ca probă: Facultatea de Drept (UBB) și Academia de Poliție. Găsești aici profesori de istorie din Cluj-Napoca și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Istorie pentru BAC și admitere",
        paragrafe: [
          "BAC: subiectele cer analiză de surse istorice, cronologie și eseu structurat pe programa clasei a XII-a (istoria românilor în context european). Pregătirea pe barem și pe variante din anii anteriori este esențială.",
          "Admitere: Facultatea de Drept (UBB) și Academia de Poliție publică bibliografia și tipul probei (grile sau scris); menționează instituția în cerere ca profesorul să lucreze pe bibliografia corectă pentru anul tău.",
        ],
      },
      {
        titlu: "Online sau la domiciliu",
        paragrafe: [
          `Istoria se pregătește bine online, cu scheme și grile. Pentru ședințe acasă în ${CLUJ_CARTIERE}, scrie cartierul în cerere.`,
        ],
      },
    ],
    faq: [...faqComune("istorie")],
  },
];

export const getGhidLocal = (materie: string, oras: string) =>
  GHIDURI_LOCALE.find((g) => g.materie === materie && g.oras === oras);

export const ghiduriPentruOras = (oras: string) => GHIDURI_LOCALE.filter((g) => g.oras === oras);

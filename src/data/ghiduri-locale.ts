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

const IASI_CARTIERE =
  "Copou, Tătărași, Nicolina, Păcurari, Alexandru cel Bun, Dacia, Podu Roș, Galata, CUG, Bucium, Canta sau Tudor Vladimirescu";
const TIMISOARA_ZONE =
  "Complexul Studențesc, Fabric, Iosefin, Elisabetin, Circumvalațiunii, Calea Lipovei, Calea Girocului, Soarelui, Dâmbovița, Dumbrăvița sau Giroc";
const BRASOV_CARTIERE =
  "Centru, Șchei, Răcădău, Astra, Tractorul, Noua, Bartolomeu, Florilor, Triaj sau Săcele";

/** Întrebări comune pentru ghidurile din alte orașe decât Clujul (fără date de piață). */
const faqOras = (materie: string, oras: string, cartiere: string): { q: string; a: string }[] => [
  {
    q: `Găsesc meditații la ${materie} la domiciliu în ${oras}?`,
    a: `Da. Scrie în cerere cartierul (${cartiere}) și intervalul orar. Profesorii care se deplasează acolo îți trimit propuneri; dacă bifezi „online”, primești propuneri și de la profesori din alte orașe.`,
  },
  {
    q: `Cum aleg profesorul de ${materie} potrivit în ${oras}?`,
    a: "Compară propunerile după experiența cu nivelul tău (clasa, examenul, facultatea), după cum explică la prima ședință și după cât de clar îți spune ce veți lucra în următoarele săptămâni. Pe platformă vorbești direct cu fiecare profesor înainte să alegi.",
  },
  {
    q: "Plătesc ceva pentru a posta o cerere de meditații?",
    a: "Nu. Cererea este gratuită, platforma nu ia comision, iar tariful îl propune fiecare profesor.",
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
  // ——— Iași, Timișoara, Brașov ———
  {
    materie: "matematica",
    oras: "iasi",
    title: "Meditații matematică Iași: Evaluare Națională, BAC și admitere",
    description:
      "Meditații matematică în Iași, la domiciliu sau online: clasele V–XII, Evaluarea Națională, BAC M1/M2 și admitere la Politehnica „Gheorghe Asachi” sau UAIC. Cerere gratuită, fără comision.",
    h1: "Meditații matematică în Iași",
    intro:
      "În Iași, meditațiile la matematică se cer pentru trei momente: Evaluarea Națională din clasa a VIII-a, BAC-ul și admiterea la facultăți unde matematica contează, cum sunt Universitatea Tehnică „Gheorghe Asachi” sau Facultatea de Informatică a Universității „Alexandru Ioan Cuza”. Aici găsești profesori din Iași care predau acasă sau online și un ghid scurt despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Ce pregătesc elevii din Iași la matematică",
        paragrafe: [
          "Gimnaziu: recuperarea bazelor (fracții, ecuații, geometrie plană) și pregătirea pentru Evaluarea Națională pe subiecte în stilul examenului. Media de la EN decide liceul, iar la colegiile căutate din Iași, precum Colegiul Național „Costache Negruzzi”, Colegiul Național Iași sau Colegiul Național „Emil Racoviță”, concurența pe locuri este mare.",
          "Liceu și BAC: programa M1 (mate-info) și programa M2 (științe ale naturii, tehnologic) diferă, așa că spune-i profesorului de la început pe care o urmezi. Pregătirea cea mai eficientă se face pe variantele oficiale din anii trecuți, corectate pe barem.",
          "Admitere: la facultățile tehnice și la informatică, cerințele de admitere se publică pe site-ul fiecărei facultăți. Cere profesorului să lucreze pe subiectele ei din anii anteriori, nu pe o culegere generală.",
        ],
      },
      {
        titlu: "Acasă sau online, în Iași",
        paragrafe: [
          `Pentru elevii mici, ședințele față în față funcționează de obicei mai bine. Scrie în cerere cartierul (${IASI_CARTIERE}) ca să primești propuneri de la profesorii care ajung ușor la tine.`,
          "Pentru liceu și admitere, online cu tablă virtuală merge la fel de bine și îți deschide accesul la profesori din tot orașul și din țară, fără drumuri prin trafic.",
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa și programa, examenul vizat și termenul, capitolele care te blochează (de exemplu: funcții, probabilități, geometrie în spațiu), cartierul sau „online”, zilele libere și un buget orientativ. Cu aceste detalii, profesorii îți răspund cu un plan concret, nu cu o ofertă generală.",
        ],
      },
    ],
    faq: [
      {
        q: "Când e bine să încep meditațiile pentru Evaluarea Națională la matematică?",
        a: "Ideal din toamna clasei a VIII-a, iar dacă există goluri din clasele V–VII, chiar mai devreme. Prima ședință ar trebui să fie un diagnostic pe o variantă de examen, ca să se vadă unde se pierd punctele.",
      },
      ...faqOras("matematică", "Iași", IASI_CARTIERE),
    ],
  },
  {
    materie: "romana",
    oras: "iasi",
    title: "Meditații română Iași: BAC, Evaluare Națională, clasele V–XII",
    description:
      "Meditații limba română în Iași, acasă sau online: eseul și textul argumentativ pentru BAC, gramatică și redactare pentru Evaluarea Națională. Cerere gratuită, tariful îl propune profesorul.",
    h1: "Meditații limba română în Iași",
    intro:
      "La română, punctele vin din structură și exercițiu: eseul pe operele studiate, textul argumentativ, cerințele de gramatică de la Evaluarea Națională. Găsești aici profesori de română din Iași, pentru ședințe acasă sau online, și ce să ceri ca pregătirea să fie pe măsura examenului tău.",
    sectiuni: [
      {
        titlu: "Ce se lucrează la meditațiile de română",
        paragrafe: [
          "Evaluarea Națională: înțelegerea textului, morfologie și sintaxă, redactarea unui text după cerință. Contează mult să lucrezi pe modele oficiale și să compari răspunsul cu baremul.",
          "BAC: textul la prima vedere, textul argumentativ și eseul pe operele din programă, diferite pentru profilul real și pentru cel uman. Un profesor bun te pune să scrii în fiecare săptămână și îți corectează lucrarea pe criteriile baremului.",
          "Proba orală de la BAC: discuția pe un text la prima vedere se exersează cu voce tare, nu doar în scris; cere și câteva ședințe pentru asta în primăvară.",
        ],
      },
      {
        titlu: "Acasă sau online, în Iași",
        paragrafe: [
          `Româna se potrivește bine cu ședințele online: lucrările se trimit în scris și se corectează direct pe text. Pentru gimnaziu, mulți părinți preferă ședințele acasă, în cartiere precum ${IASI_CARTIERE}.`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa, examenul și profilul, ce cerințe îți dau bătăi de cap (eseul, gramatica, argumentarea), cât timp mai ai până la examen, cartierul sau „online” și un buget orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Merită meditații la română pentru BAC dacă iau note bune la școală?",
        a: "Notele de la clasă nu măsoară întotdeauna ce cere baremul de BAC. Lucrează câteva variante oficiale cronometrat: dacă pierzi puncte constant la aceeași cerință, câteva ședințe țintite rezolvă de obicei problema.",
      },
      ...faqOras("română", "Iași", IASI_CARTIERE),
    ],
  },
  {
    materie: "engleza",
    oras: "iasi",
    title: "Meditații engleză Iași: elevi, adulți, Cambridge și conversație",
    description:
      "Meditații engleză în Iași, acasă sau online: școală și BAC, certificate Cambridge sau IELTS, engleză pentru job și conversație pentru adulți. Cerere gratuită, propuneri direct de la profesori.",
    h1: "Meditații engleză în Iași",
    intro:
      "Engleza se caută în Iași pentru școală și BAC, pentru certificate (Cambridge, IELTS) și pentru job, mai ales în companiile de IT și servicii din oraș, unde engleza se folosește zilnic. Spune în cerere care e scopul tău și primești propuneri de la profesori potriviți.",
    sectiuni: [
      {
        titlu: "Pentru cine sunt meditațiile la engleză",
        paragrafe: [
          "Elevi: gramatică, vocabular, teme și pregătirea probei de competență lingvistică de la BAC.",
          "Certificate: Cambridge (B1 Preliminary, B2 First, C1 Advanced), IELTS sau TOEFL pentru studii în străinătate; pregătirea se face pe formatul exact al examenului ales.",
          "Adulți: conversație, interviuri, e-mailuri și prezentări în engleză pentru job.",
        ],
      },
      {
        titlu: "Online sau față în față",
        paragrafe: [
          `Pentru conversație și certificate, online este varianta cea mai folosită. Pentru copii, ședințele acasă sunt la fel de posibile; scrie cartierul în cerere (${IASI_CARTIERE}).`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Nivelul actual (A1–C1, dacă îl știi), scopul (școală, certificat, conversație, job), termenul, câte ședințe pe săptămână vrei, cartierul sau „online” și un buget orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Cum aflu ce nivel de engleză am înainte de meditații?",
        a: "Cere profesorului un test scurt de plasare la prima ședință. Pe baza lui îți spune ce nivel ai și cât ar dura, realist, până la nivelul sau certificatul pe care îl vrei.",
      },
      ...faqOras("engleză", "Iași", IASI_CARTIERE),
    ],
  },
  {
    materie: "romana",
    oras: "timisoara",
    title: "Meditații română Timișoara: BAC, Evaluare Națională, gimnaziu",
    description:
      "Meditații limba română în Timișoara, acasă sau online: eseul pentru BAC, textul argumentativ, gramatica pentru Evaluarea Națională. Cerere gratuită, propuneri cu tarif de la profesori.",
    h1: "Meditații limba română în Timișoara",
    intro:
      "La română, cele mai multe puncte se pierd din redactare, nu din necunoașterea operelor. Găsești aici profesori de română din Timișoara, pentru ședințe acasă sau online, și un ghid despre ce să ceri pentru Evaluarea Națională sau pentru BAC.",
    sectiuni: [
      {
        titlu: "Ce pregătesc elevii din Timișoara la română",
        paragrafe: [
          "Evaluarea Națională: înțelegerea textului, gramatică și redactare. Admiterea la liceele căutate din oraș, precum Colegiul Național „Constantin Diaconovici Loga” sau Colegiul Național Bănățean, depinde direct de media de la EN, iar româna are aceeași pondere ca matematica.",
          "BAC: textul la prima vedere, argumentarea și eseul pe operele studiate. Cere profesorului să lucrați pe variantele oficiale și să-ți corecteze fiecare lucrare pe barem.",
        ],
      },
      {
        titlu: "Acasă sau online, în Timișoara",
        paragrafe: [
          `Pentru gimnaziu, mulți părinți aleg ședințele acasă, în zone precum ${TIMISOARA_ZONE}. Pentru liceu, online funcționează foarte bine: lucrările se trimit în scris și se corectează pe text.`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa, examenul și profilul, cerințele la care pierzi puncte, termenul, zona sau „online” și un buget orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Câte ședințe de română pe săptămână sunt necesare înainte de BAC?",
        a: "Pentru majoritatea elevilor, o ședință pe săptămână plus o lucrare scrisă acasă este un ritm sustenabil. Înainte de simulare și în ultimele săptămâni înainte de examen, ritmul poate crește.",
      },
      ...faqOras("română", "Timișoara", TIMISOARA_ZONE),
    ],
  },
  {
    materie: "informatica",
    oras: "timisoara",
    title: "Meditații informatică Timișoara: BAC C++, olimpiadă și admitere",
    description:
      "Meditații informatică în Timișoara, online sau acasă: C++ și algoritmi pentru BAC, pregătire de olimpiadă și admitere la UPT sau UVT. Cerere gratuită, profesorii îți propun tariful.",
    h1: "Meditații informatică în Timișoara",
    intro:
      "Informatica se caută în Timișoara pentru BAC-ul de la mate-info, pentru olimpiadă și pentru admiterea la Universitatea Politehnica Timișoara (Automatică și Calculatoare) sau la Facultatea de Matematică și Informatică a Universității de Vest. Aici găsești profesori care predau acasă sau online și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Ce se lucrează la informatică",
        paragrafe: [
          "BAC: subiectele cer C++ (sau Pascal), algoritmi pe tablouri și șiruri de caractere, subprograme și fișiere. Pregătirea pe variantele oficiale, cu programele rulate efectiv în compilator, arată imediat unde se greșește.",
          "Olimpiadă și concursuri: probleme de algoritmică pe platforme de evaluare automată; aici contează lucrul constant și analiza soluțiilor după fiecare problemă.",
          "Admitere: verifică pe site-ul facultății dacă se dă examen scris sau se ia în calcul media de la BAC și cere profesorului să lucreze pe acel format.",
        ],
      },
      {
        titlu: "Online sau acasă, în Timișoara",
        paragrafe: [
          `Informatica se predă foarte bine online, cu ecran partajat și cod scris împreună. Dacă preferi ședințe față în față, scrie în cerere zona (${TIMISOARA_ZONE}).`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa, limbajul (C++ sau Pascal), scopul (BAC, olimpiadă, admitere), ce capitole te blochează, termenul și un buget orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "Pot învăța informatică pentru BAC dacă am rămas în urmă din clasa a IX-a?",
        a: "Da, dar ai nevoie de un plan pe capitole, de la structurile de bază ale limbajului până la subprograme. Un profesor îți poate face întâi un diagnostic pe o variantă de BAC, ca să știi cât timp îți trebuie.",
      },
      ...faqOras("informatică", "Timișoara", TIMISOARA_ZONE),
    ],
  },
  {
    materie: "matematica",
    oras: "brasov",
    title: "Meditații matematică Brașov: Evaluare Națională, BAC, admitere",
    description:
      "Meditații matematică în Brașov, acasă sau online: clasele V–XII, Evaluarea Națională, BAC M1/M2 și admitere la Universitatea Transilvania. Cerere gratuită, propuneri cu tarif de la profesori.",
    h1: "Meditații matematică în Brașov",
    intro:
      "În Brașov, meditațiile la matematică se cer mai ales pentru Evaluarea Națională, pentru BAC și pentru admiterea la facultățile tehnice ale Universității Transilvania. Aici găsești profesori din Brașov care predau acasă sau online și un ghid despre ce să ceri.",
    sectiuni: [
      {
        titlu: "Ce pregătesc elevii din Brașov la matematică",
        paragrafe: [
          "Gimnaziu: baze solide de calcul și geometrie, apoi variante de Evaluare Națională. La colegiile căutate din oraș, precum Colegiul Național „Andrei Șaguna”, Colegiul Național „Unirea” sau Colegiul Național „Dr. Ioan Meșotă”, media de la EN face diferența.",
          "BAC: M1 pentru mate-info, M2 pentru științe ale naturii și tehnologic. Lucrul pe variantele oficiale, cu baremul alături, e mai util decât culegerile generale.",
          "Admitere: verifică pe site-ul facultății cum se calculează media și dacă există probă scrisă, apoi cere profesorului să lucreze pe acel format.",
        ],
      },
      {
        titlu: "Acasă sau online, în Brașov",
        paragrafe: [
          `Scrie în cerere cartierul (${BRASOV_CARTIERE}) ca să primești propuneri de la profesorii care se deplasează acolo, sau bifează „online” ca să ai de unde alege și din alte orașe.`,
        ],
      },
      {
        titlu: "Ce să scrii în cerere",
        paragrafe: [
          "Clasa și programa, examenul și termenul, capitolele grele, cartierul sau „online”, zilele libere și un buget orientativ.",
        ],
      },
    ],
    faq: [
      {
        q: "E mai bine să fac meditații la matematică în grup sau individual?",
        a: "Pentru recuperarea unor goluri, ședințele individuale sunt de obicei mai eficiente, pentru că profesorul lucrează exact pe greșelile tale. Grupul mic poate merge pentru exersare, când bazele sunt deja solide.",
      },
      ...faqOras("matematică", "Brașov", BRASOV_CARTIERE),
    ],
  },
];

export const getGhidLocal = (materie: string, oras: string) =>
  GHIDURI_LOCALE.find((g) => g.materie === materie && g.oras === oras);

export const ghiduriPentruOras = (oras: string) => GHIDURI_LOCALE.filter((g) => g.oras === oras);

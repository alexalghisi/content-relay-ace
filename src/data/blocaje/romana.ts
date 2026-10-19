import type { BlocajNode } from "./types";

// Limba și literatura română, gimnaziu → BAC.
export const ROMANA: BlocajNode[] = [
  {
    slug: "partile-de-vorbire",
    materie: "romana",
    clase: [5, 6],
    titlu: "Părțile de vorbire",
    blocaj:
      "Nu știu să spun ce parte de vorbire este un cuvânt, mai ales la adjectiv vs. adverb sau la pronume vs. adjectiv pronominal.",
    simptome: [
      "Confunzi adjectivul (însoțește un substantiv) cu adverbul (însoțește un verb).",
      "Nu faci diferența între „al meu” pronume și „caietul meu” adjectiv pronominal.",
      "La analiza morfologică nu știi ce categorii gramaticale să scrii.",
    ],
    lipsa: [],
    explicatie: [
      "Partea de vorbire se stabilește după ce exprimă cuvântul și cum se comportă în propoziție, nu după formă. Substantivul denumește (ființe, lucruri, idei), adjectivul arată o însușire a substantivului și se acordă cu el, verbul exprimă o acțiune sau o stare, adverbul arată cum/când/unde se petrece acțiunea și nu se schimbă.",
      "Testul adjectiv/adverb: dacă cuvântul se poate pune la plural odată cu substantivul (copil cuminte → copii cuminți), este adjectiv; dacă rămâne la fel pentru că determină un verb (vorbește frumos → vorbesc frumos), este adverb.",
      "Testul pronume/adjectiv pronominal: pronumele ține locul unui substantiv și stă singur („al meu este aici”); adjectivul pronominal însoțește un substantiv și se acordă cu el („caietul meu”, „caietele mele”).",
    ],
    exemplu: {
      enunt:
        "Precizează partea de vorbire a cuvintelor subliniate: „Fratele meu aleargă repede, iar al tău merge încet.”",
      pasi: [
        "„meu” însoțește substantivul „fratele” → adjectiv pronominal posesiv.",
        "„repede” determină verbul „aleargă” și nu se schimbă → adverb de mod.",
        "„al tău” stă singur, ține locul substantivului „fratele” → pronume posesiv.",
      ],
      raspuns: "meu – adjectiv pronominal posesiv; repede – adverb; al tău – pronume posesiv",
    },
    verificare: {
      intrebare: "În enunțul „Elevii harnici învață bine”, cuvântul „bine” este:",
      optiuni: ["adjectiv", "adverb", "substantiv", "verb"],
      corect: 1,
      explicatie:
        "„bine” arată cum se desfășoară acțiunea de a învăța și nu se acordă cu nimic → adverb de mod. „harnici” este adjectivul (se acordă cu „elevii”).",
    },
    urmeaza: ["functii-sintactice", "ortografie-cratima"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "functii-sintactice",
    materie: "romana",
    clase: [6, 7],
    titlu: "Funcții sintactice: subiect, predicat, atribut, complement",
    blocaj:
      "Găsesc predicatul, dar nu știu să identific subiectul când nu e la început și confund atributul cu complementul.",
    simptome: [
      "Iei drept subiect primul substantiv din propoziție.",
      "Nu deosebești predicatul verbal de cel nominal („este elev”).",
      "Nu știi ce întrebare să pui pentru atribut și pentru complement.",
    ],
    lipsa: ["partile-de-vorbire"],
    explicatie: [
      "Pornește mereu de la predicat (verb la mod personal). Subiectul se află întrebând „cine? / ce?” pe lângă predicat și se acordă cu verbul în număr și persoană; poate sta oriunde în propoziție sau poate fi inclus/subînțeles.",
      "Predicatul verbal este un verb cu înțeles de sine stătător („copilul citește”); predicatul nominal este verb copulativ (a fi, a deveni, a rămâne, a părea…) + nume predicativ („copilul este atent”, „a devenit medic”).",
      "Atributul determină un substantiv (întrebări: care? ce fel de? al cui? câți?); complementul determină un verb (pe cine? ce? cui? cum? unde? când? de ce?). Deci întreabă-te întâi pe cine determină cuvântul: substantiv → atribut; verb → complement.",
    ],
    exemplu: {
      enunt: "Analizează sintactic: „Ieri, prietena Mariei a adus niște cărți interesante.”",
      pasi: [
        "Predicat: „a adus” (verb la mod personal) → predicat verbal.",
        "Cine a adus? „prietena” → subiect. „Mariei” determină substantivul „prietena” (a cui prietenă?) → atribut substantival genitival.",
        "Ce a adus? „cărți” → complement direct. „interesante” determină „cărți” (ce fel de cărți?) → atribut adjectival. „Ieri” – când? → complement circumstanțial de timp.",
      ],
      raspuns:
        "a adus – PV; prietena – S; Mariei – atribut; cărți – CD; interesante – atribut; ieri – CCT",
    },
    verificare: {
      intrebare: "În enunțul „Bunica le-a dat copiilor mere”, cuvântul „copiilor” este:",
      optiuni: ["subiect", "atribut", "complement direct", "complement indirect"],
      corect: 3,
      explicatie:
        "Cui a dat? → copiilor (dativ) → complement indirect. „mere” este complementul direct (ce a dat?), iar subiectul este „bunica”.",
    },
    urmeaza: ["fraza-subordonate"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "fraza-subordonate",
    materie: "romana",
    clase: [7, 8],
    titlu: "Fraza: propoziții principale și subordonate",
    blocaj:
      "Nu știu să împart fraza în propoziții și nu îmi dau seama ce fel de subordonată este fiecare.",
    simptome: [
      "Numeri greșit propozițiile pentru că nu găsești toate predicatele.",
      "Nu faci diferența între „că” (subordonată) și „și” (coordonare).",
      "La felul subordonatei pui întrebarea greșită.",
    ],
    lipsa: ["functii-sintactice"],
    explicatie: [
      "Câte predicate, atâtea propoziții. Primul pas este să subliniezi toate predicatele (inclusiv cele nominale), apoi să delimitezi propozițiile folosind elementele de relație: conjuncții, pronume și adverbe relative.",
      "Propoziția principală are înțeles de sine stătător; subordonata depinde de un cuvânt din altă propoziție (regenta) și răspunde la o întrebare pusă de la acel cuvânt. Conjuncțiile coordonatoare (și, dar, iar, sau, deci) leagă propoziții de același fel; cele subordonatoare (că, să, dacă, deoarece, deși, ca să…) introduc subordonate.",
      "Felul subordonatei se află exact ca funcția sintactică a cuvântului pe care îl înlocuiește: răspunde la „cine?” pe lângă regentă → subiectivă; la „ce?” pe lângă un verb → completivă directă; la „care? ce fel de?” pe lângă un substantiv → atributivă; la „de ce? când? cum?” → circumstanțială (cauzală, temporală, de mod…).",
    ],
    exemplu: {
      enunt:
        "Împarte în propoziții și identifică subordonatele: „Am aflat că a plouat când ne-am întors acasă.”",
      pasi: [
        "Predicate: „am aflat”, „a plouat”, „ne-am întors” → trei propoziții.",
        "P1: „Am aflat” – principală. P2: „că a plouat” – ce am aflat? → completivă directă.",
        "P3: „când ne-am întors acasă” – când a plouat? → circumstanțială de timp (temporală), subordonată față de P2.",
      ],
      raspuns: "P1 principală; P2 CD; P3 CT",
    },
    verificare: {
      intrebare:
        "În fraza „Cartea pe care mi-ai dat-o este captivantă”, propoziția „pe care mi-ai dat-o” este:",
      optiuni: ["completivă directă", "atributivă", "subiectivă", "principală"],
      corect: 1,
      explicatie:
        "Determină substantivul „cartea” (care carte?) → propoziție subordonată atributivă.",
    },
    urmeaza: ["textul-argumentativ"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "ortografie-cratima",
    materie: "romana",
    clase: [5, 6, 7, 8],
    titlu: "Ortografie: cratima și cuvintele care se confundă",
    blocaj:
      "Nu știu când scriu „s-a” sau „sa”, „i-a” sau „ia”, „într-o” sau „întro”, „nici o” sau „nicio”.",
    simptome: [
      "Scrii „sa dus” sau „s-a carte”.",
      "Pierzi puncte la Evaluarea Națională la cerința de ortografie.",
      "Nu ai o regulă, ghicești după cum „sună”.",
    ],
    lipsa: ["partile-de-vorbire"],
    explicatie: [
      "Cratima leagă două cuvinte diferite rostite împreună. „s-a” = „se” + „a” (pronume + verb auxiliar): „s-a dus”. „sa” este un singur cuvânt, adjectiv posesiv: „cartea sa” (= a lui/a ei). Test: dacă poți înlocui cu „a lui/a ei” → „sa”; dacă urmează un verb la participiu → „s-a”.",
      "„i-a” = „îi” + „a”: „i-a spus” (lui/ei). „ia” este verbul a lua: „ia cartea”. „ne-am”, „v-ați”, „m-am” se scriu mereu cu cratimă (pronume + auxiliar). „într-o”, „dintr-un”, „printr-o” se scriu cu cratimă întotdeauna.",
      "Conform normei actuale, „nicio”, „niciun” se scriu legat când sunt adjective pronominale („niciun elev”), dar „nici o dată” se desparte când „nici” este conjuncție și „o dată” înseamnă o singură dată. „niciodată” (adverb, = în niciun moment) se scrie legat.",
    ],
    exemplu: {
      enunt:
        "Alege forma corectă: „Maria (s-a / sa) întâlnit cu colega (s-a / sa) și (i-a / ia) dat caietul.”",
      pasi: [
        "„s-a întâlnit”: urmează participiul „întâlnit”, „se” + „a” → s-a.",
        "„colega sa”: pot înlocui cu „colega ei” → sa.",
        "„i-a dat”: „îi” + „a dat”, pot înlocui cu „ei i-a dat” → i-a.",
      ],
      raspuns: "s-a întâlnit, colega sa, i-a dat",
    },
    verificare: {
      intrebare: "Care enunț este scris corect?",
      optiuni: [
        "Ea ia spus că sa dus acasă.",
        "Ea i-a spus că s-a dus acasă.",
        "Ea i-a spus că sa dus acasă.",
        "Ea ia spus că s-a dus acasă.",
      ],
      corect: 1,
      explicatie:
        "„i-a spus” (îi + a), „s-a dus” (se + a). „ia” ar fi verbul a lua, iar „sa” adjectivul posesiv.",
    },
    urmeaza: ["textul-argumentativ"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "figuri-de-stil",
    materie: "romana",
    clase: [5, 6, 7, 8],
    titlu: "Figuri de stil și imagini artistice",
    blocaj:
      "Confund metafora cu epitetul și personificarea, și nu știu să explic ce „sugerează” o figură de stil.",
    simptome: [
      "Numești orice adjectiv „metaforă”.",
      "Identifici figura, dar nu poți comenta efectul ei.",
      "Nu vezi diferența dintre comparație și metaforă.",
    ],
    lipsa: [],
    explicatie: [
      "Epitetul este un cuvânt (de obicei adjectiv sau adverb) care exprimă o însușire neobișnuită, afectivă: „codrul bătrân”. Personificarea atribuie însușiri omenești unor lucruri sau ființe necuvântătoare: „vântul șoptește”. Comparația pune alături doi termeni printr-un cuvânt de legătură (ca, precum, asemenea): „ochii ca două stele”.",
      "Metafora este o comparație din care lipsește termenul de legătură și, de obicei, primul termen: „două stele mă priveau” (= ochii). Hiperbola exagerează („un ocean de lacrimi”), enumerația înșiră termeni, repetiția reia un cuvânt pentru accent.",
      "Cum comentezi: 1) numești figura; 2) explici ce înseamnă în context (ce înlocuiește, ce însușire scoate în evidență); 3) spui ce stare sau idee transmite (liniște, teamă, trecerea timpului…).",
    ],
    exemplu: {
      enunt:
        "Identifică și comentează figura de stil din versul „Codrul își clatină fruntea obosită.”",
      pasi: [
        "Codrul are „frunte” și este „obosit” — însușiri omenești atribuite pădurii → personificare.",
        "„fruntea obosită” conține și un epitet („obosită”).",
        "Efect: pădurea devine o ființă bătrână, care trăiește trecerea timpului; versul transmite melancolie și apropierea omului de natură.",
      ],
      raspuns: "personificare (+ epitet); sugerează oboseala, trecerea timpului",
    },
    verificare: {
      intrebare: "Structura „ochii ei, două lacuri adânci” conține:",
      optiuni: ["o comparație", "o metaforă", "o personificare", "o hiperbolă"],
      corect: 1,
      explicatie:
        "Ochii sunt numiți direct „lacuri”, fără „ca” sau „precum” → metaforă. Cu „ochii ca două lacuri” ar fi fost comparație.",
    },
    urmeaza: ["caracterizarea-personajului", "eseul-bac"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "textul-argumentativ",
    materie: "romana",
    clase: [7, 8, 9, 10],
    titlu: "Textul argumentativ: structură și conectori",
    blocaj:
      "Știu ce părere am, dar nu reușesc să scriu un text argumentativ cu structura cerută și pierd puncte la conținut.",
    simptome: [
      "Scrii o singură idee repetată, fără două argumente distincte.",
      "Nu folosești conectori (în primul rând, în al doilea rând, de exemplu, în concluzie).",
      "Argumentele nu au exemple concrete.",
    ],
    lipsa: ["fraza-subordonate", "ortografie-cratima"],
    explicatie: [
      "Structura standard: ipoteza (formulezi clar opinia, reluând cerința), două argumente dezvoltate (fiecare cu afirmație + explicație + exemplu concret), concluzia (reiei opinia cu alte cuvinte, fără informații noi).",
      "Fiecare argument trebuie să aducă o idee diferită, nu aceeași idee reformulată. Exemplul poate veni din experiența personală, din lecturi, din filme sau din realitatea din jur, dar trebuie să susțină exact afirmația.",
      "Conectorii fac vizibilă structura pentru cel care corectează: „În opinia mea…”, „Un prim argument este…”, „De exemplu…”, „În al doilea rând…”, „Prin urmare…”, „În concluzie…”. Respectă numărul minim de cuvinte și alineatele cerute.",
    ],
    exemplu: {
      enunt:
        "Scrie scheletul unui text argumentativ despre afirmația „Lectura ne ajută să îi înțelegem mai bine pe ceilalți.”",
      pasi: [
        "Ipoteză: Consider că lectura ne ajută să îi înțelegem pe ceilalți, deoarece ne pune în locul unor personaje diferite de noi.",
        "Argument 1 + exemplu: Cărțile ne arată gândurile și motivele altora — de exemplu, citind un roman în care naratorul este un copil sărac, înțelegem frica și rușinea pe care el nu le spune nimănui.",
        "Argument 2 + exemplu: Lectura dezvoltă vocabularul emoțiilor, ca să putem numi ce simt cei din jur — după ce citim despre „dezamăgire”, recunoaștem mai ușor această stare la un prieten.",
        "Concluzie: Așadar, prin experiențele trăite alături de personaje, lectura ne face mai atenți și mai empatici cu oamenii reali.",
      ],
      raspuns: "ipoteză + 2 argumente cu exemple + concluzie",
    },
    verificare: {
      intrebare: "Care dintre următoarele este un argument corect dezvoltat?",
      optiuni: [
        "Lectura e bună. Lectura e foarte bună pentru toți.",
        "În primul rând, lectura dezvoltă vocabularul: de exemplu, după ce am citit un roman istoric am înțeles cuvinte pe care le auzeam la știri.",
        "Cred că lectura este importantă și toată lumea ar trebui să citească.",
        "În concluzie, lectura este utilă.",
      ],
      corect: 1,
      explicatie:
        "Are conector, afirmație clară, explicație și exemplu concret. Celelalte variante repetă opinia sau sunt doar concluzii fără argument.",
    },
    urmeaza: ["eseul-bac"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "caracterizarea-personajului",
    materie: "romana",
    clase: [8, 9, 10, 11, 12],
    titlu: "Caracterizarea personajului",
    blocaj:
      "Povestesc ce face personajul în loc să îl caracterizez și nu știu ce înseamnă caracterizare directă vs. indirectă.",
    simptome: [
      "Compunerea ta este un rezumat al acțiunii.",
      "Nu dai citate sau exemple din text pentru trăsături.",
      "Nu menționezi statutul personajului (social, psihologic, moral).",
    ],
    lipsa: ["figuri-de-stil"],
    explicatie: [
      "Caracterizarea directă este făcută de narator, de alte personaje sau de personajul însuși (autocaracterizare), prin afirmații explicite despre trăsături. Caracterizarea indirectă reiese din fapte, vorbe, gânduri, relații cu alte personaje, mediu, nume.",
      "Structura unei caracterizări: 1) statutul personajului (social: elev, boier, țăran; psihologic: dominat de orgoliu, de teamă; moral: cinstit, ipocrit); 2) două-trei trăsături dominante, fiecare susținută de o scenă sau un citat și de precizarea tipului de caracterizare; 3) relația cu alt personaj; 4) o concluzie despre semnificația personajului în operă.",
      "Regula de aur: fiecare trăsătură afirmată trebuie dovedită cu un exemplu din text. „Este curajos” nu valorează nimic fără „așa cum reiese din scena în care…”.",
    ],
    exemplu: {
      enunt: "Cum construiești un paragraf de caracterizare pentru o trăsătură (model generic)?",
      pasi: [
        "Afirmă trăsătura: „O trăsătură dominantă a personajului este perseverența.”",
        "Dovedește cu text: „Aceasta reiese indirect din faptele sale, în scena în care, deși refuzat de două ori, revine și…”",
        "Precizează mijlocul: „caracterizare indirectă, prin fapte”.",
        "Interpretează: „Perseverența îl definește ca personaj care își asumă destinul, în contrast cu…”",
      ],
      raspuns: "afirmație → dovadă din text → tip de caracterizare → interpretare",
    },
    verificare: {
      intrebare: "Dacă naratorul spune despre personaj că „era un om cumsecade și tăcut”, avem:",
      optiuni: [
        "caracterizare indirectă prin fapte",
        "caracterizare directă făcută de narator",
        "autocaracterizare",
        "caracterizare indirectă prin limbaj",
      ],
      corect: 1,
      explicatie: "Trăsăturile sunt afirmate explicit de narator → caracterizare directă.",
    },
    urmeaza: ["eseul-bac"],
    nivelCerere: "Liceu",
  },
  {
    slug: "eseul-bac",
    materie: "romana",
    clase: [11, 12],
    titlu: "Eseul de la BAC: structură și cerințe",
    blocaj: "Știu opera, dar nu știu să organizez eseul pe cerințele din barem și rămân fără timp.",
    simptome: [
      "Scrii tot ce știi despre operă, fără să urmărești punctele din cerință.",
      "Nu încadrezi opera în curent sau specie cu două trăsături.",
      "Nu respecți numărul de cuvinte și structura (introducere, cuprins, încheiere).",
    ],
    lipsa: ["caracterizarea-personajului", "textul-argumentativ", "figuri-de-stil"],
    explicatie: [
      "Cerința de la subiectul al III-lea listează explicit ce se punctează: de obicei încadrarea în curent/specie prin două trăsături, prezentarea temei și a două scene sau secvențe relevante, analiza a două elemente de structură (titlu, incipit, conflict, perspectivă narativă, relații temporale și spațiale, limbaj…). Fiecare element din listă este un paragraf.",
      "Introducerea: autor, operă, specie, curent, o frază despre temă. Cuprinsul: un paragraf pentru fiecare cerință, cu conectori vizibili și exemple din text. Încheierea: reiei ideea esențială și semnificația operei.",
      "Gestionarea timpului: fă pe ciornă un plan cu cerințele numerotate (5 minute), scrie direct pe curat urmărind planul, lasă 5 minute pentru recitire și corectarea ortografiei. Un eseu complet, chiar mai scurt, ia mai multe puncte decât unul lung care sare cerințe.",
    ],
    exemplu: {
      enunt:
        "Cerința: „Redactează un eseu despre particularitățile unui text narativ studiat, având în vedere: două trăsături ale curentului; tema și două secvențe; două elemente de structură.” Fă planul.",
      pasi: [
        "Introducere: autor, operă, curent, specie + temă (3–4 rânduri).",
        "Paragraf 1: trăsătura 1 a curentului + exemplu din text. Paragraf 2: trăsătura 2 + exemplu.",
        "Paragraf 3: tema + secvența 1. Paragraf 4: secvența 2 (cum ilustrează tema).",
        "Paragraf 5: element de structură 1 (ex. titlul). Paragraf 6: element 2 (ex. conflictul).",
        "Încheiere: semnificația operei, revenire la temă.",
      ],
      raspuns: "7–8 paragrafe, câte unul pe cerință",
    },
    verificare: {
      intrebare: "Care este cea mai sigură metodă de a lua punctele de conținut la eseu?",
      optiuni: [
        "Să scrii cât mai mult despre viața autorului.",
        "Să tratezi fiecare element din cerință într-un paragraf distinct, cu exemple din text.",
        "Să rezumi integral acțiunea operei.",
        "Să enumeri toate figurile de stil din text.",
      ],
      corect: 1,
      explicatie:
        "Baremul punctează fiecare cerință separat; paragrafele dedicate, cu exemple, acoperă exact punctele din barem.",
    },
    urmeaza: [],
    nivelCerere: "Bacalaureat",
  },
];

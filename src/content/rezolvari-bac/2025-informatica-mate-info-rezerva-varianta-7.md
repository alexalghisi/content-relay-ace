Rezolvarea completă a subiectului de **Bacalaureat 2025 la Informatică, limbajul C/C++, profil mate-info**, sesiunea de rezervă, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas și codul C++ complet, testat.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe se punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c**, 3 – **d**, 4 – **d**, 5 – **a** (câte 4 puncte).

### 1. Valoarea `15.4/2+15/2` → b. 14.7

`15.4/2` are un operand real → împărțire reală: **7.7**. `15/2` are ambii operanzi întregi → împărțire întreagă: **7**. Suma: $7.7 + 7 = 14.7$.

- a. 14 — ar presupune că și prima împărțire e întreagă.
- c. 15 / d. 15.2 — ar presupune împărțire reală și la `15/2` (7.5) sau alte rotunjiri.

### 2. Expiră în 2025, după octombrie → c. `m.expira.an==2025 && m.expira.luna>10`

`m` este variabila, `expira` este câmpul de tip `data`, iar `an` și `luna` sunt câmpurile acestuia: `m.expira.an`. „După octombrie” înseamnă luna > 10.

- a. `data` este numele **tipului**, nu al câmpului.
- b. și d. au ordinea accesului inversată.

### 3. Soluția dinaintea lui (cizme, sandale, teniși) → d. (botine, sandale, teniși)

Comenzile sunt combinări de 3 categorii, în ordine crescătoare. Prima comandă care începe cu **cizme** ar fi (cizme, ghete, …) — interzisă (ghete și cizme) — deci prima validă este chiar (cizme, sandale, teniși). Soluția dinaintea ei este **ultima** care începe cu botine: (botine, sandale, teniși) — validă (nu conține perechile interzise).

- a, b, c. încep tot cu botine, dar sunt generate mai devreme (ghete < sandale, cizme < sandale).

### 4. Rădăcini pentru care arborele are trei frunze → d. 4,6

Nodurile de grad 1 sunt 3, 4, 5, 6. Într-un arbore cu rădăcină, frunzele sunt nodurile **fără fii**.

- Rădăcina 1 sau 2 (grad > 1): frunze 3, 4, 5, 6 → 4 frunze.
- Rădăcina 4: nodul 4 are un fiu (2), deci nu mai e frunză; frunze 3, 5, 6 → **3 frunze** ✔. La fel pentru rădăcina 6.

Doar varianta d are ambele noduri dintre 3, 4, 5, 6.

### 5. Numărul minim de arce pentru două componente tare conexe → a. 1

Acum graful nu are niciun circuit, deci fiecare vârf este singur în componenta lui (6 componente). Vârful 5 nu are arce care pleacă din el — îl lăsăm singur. Adăugăm arcul **(3,2)**:

- 2 → 1 → 3 → 2 este un circuit;
- 2 → 6 → 4 → 3 → 2 este un circuit.

Deci {1, 2, 3, 4, 6} devine tare conexă, iar {5} rămâne separată → **2 componente** cu un singur arc adăugat. Fără niciun arc ar rămâne 6 componente.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul descompune n în factori primi. Pentru fiecare factor prim d găsit: `x ← d` (ultimul factor găsit, deci **cel mai mare factor prim**) și `y ← y·d` (**produsul factorilor primi distincți**). Se afișează x și y.

#### a) Pentru 252 → **7 42**

$252 = 2^2 \cdot 3^2 \cdot 7$. Cel mai mare factor prim este 7, iar produsul factorilor distincți este $2 \cdot 3 \cdot 7 = 42$. Se afișează **7 42**. *(6p)*

#### b) Două numere din [10, 100] cu valori afișate egale

x = y doar dacă n are **un singur factor prim**, adică n este o putere a unui număr prim. Exemple: **16** ($2^4$ → 2 2) și **81** ($3^4$ → 3 3). Orice număr prim din interval (11, 13, …) este de asemenea corect. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, d = 2, x = 1, y = 1;
    cin >> n;
    while (n > 1)
    {
        if (n % d == 0)
        {
            x = d;
            y = y * d;
            while (n % d == 0)
                n = n / d;
        }
        d = d + 1;
    }
    cout << x << ' ' << y;
    return 0;
}
```

#### d) Algoritm echivalent, cu test final pentru a doua structură *(6p)*

Bucla interioară se află în ramura `dacă n%d = 0`, deci condiția ei este adevărată la intrare și corpul se execută sigur cel puțin o dată. O putem înlocui direct:

```text
citește n (număr natural, n ≥ 2)
d ← 2; x ← 1; y ← 1
┌cât timp n > 1 execută
│ ┌dacă n%d = 0 atunci
│ │  x ← d; y ← y*d
│ │ ┌repetă
│ │ │  n ← [n/d]
│ │ └până când n%d ≠ 0
│ └■
│  d ← d + 1
└■
scrie x, ' ', y
```

### 2. Valorile f(2) și f(17) → **2** și **8** *(6p)*

f(2) = 2, deoarece 2 ≤ 4.

Pentru 17 coborâm din 2 în 2 până la o valoare ≤ 4, apoi urcăm:

| x | 3 | 5 | 7 | 9 | 11 | 13 | 15 | 17 |
|---|---|---|---|---|---|---|---|---|
| f(x) | 3 | 5−3 = 2 | 7−2 = 5 | 9−5 = 4 | 11−4 = 7 | 13−7 = 6 | 15−6 = 9 | 17−9 = **8** |

### 3. Șirul s1 și valoarea n → **parea** și **5** *(6p)*

- `strstr(s1,"car")` indică prima apariție a lui „car” în „parcarea”, adică subșirul **„carea”** → s2 = „carea”.
- n = strlen(s2) = **5**.
- `strcpy(s1+3, s2+3)`: de la poziția 3 din s1 (după „par”) copiem „ea” (s2 începând cu poziția 3). s1 devine **„parea”**.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul consecutiv *(10p)*

Produsele $f(f+1)$ cresc odată cu f: 2, 6, 12, 20, 30, … Căutăm cel mai mic f pentru care $n \le f(f+1)$; pentru el, automat, $(f-1)f < n$ (altfel f−1 ar fi fost deja bun).

```cpp
void consecutiv(int n, int &f)
{
    f = 1;
    while (f * (f + 1) < n)
        f++;
}
```

**Verificare:** n = 19: f = 1 (2 < 19), 2 (6 < 19), 3 (12 < 19), 4 (20 ≥ 19) → **f = 4** ✔.

### 2. Triplete de locuri libere în parcare *(10p)*

Ne interesează doar **primul** și **ultimul** rând. Pe fiecare dintre ele numărăm pozițiile `j` pentru care locurile j, j+1, j+2 sunt toate libere (0).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int nr, np, a[51][51], i, j, cnt = 0;
    cin >> nr >> np;
    for (i = 0; i < nr; i++)
        for (j = 0; j < np; j++)
            cin >> a[i][j];
    for (j = 0; j + 2 < np; j++)
    {
        if (a[0][j] == 0 && a[0][j + 1] == 0 && a[0][j + 2] == 0) cnt++;
        if (a[nr - 1][j] == 0 && a[nr - 1][j + 1] == 0 && a[nr - 1][j + 2] == 0) cnt++;
    }
    cout << cnt;
    return 0;
}
```

**Verificare pe exemplu:** primul rând 1 0 0 0 1 → un triplet; ultimul rând 0 0 0 0 1 → două triplete. Total **3** ✔ (cum nr ≥ 3, primul și ultimul rând sunt distincte).

### 3. Extragerile de la loterie

#### a) Descrierea algoritmului *(2p)*

Prin inversarea cifrelor, fiecare număr devine tot un număr de 4 cifre (cifra unităților e nenulă), deci între 1000 și 9999. Folosim un vector de apariții `ap[10000]`: pentru fiecare număr citit calculăm inversul și marcăm `ap[invers] = 1`. Astfel duplicatele dispar automat.

La final parcurgem vectorul: prima valoare marcată este **cel mai mic** număr, a doua marcată este cel mai mic dintre cele rămase după extragerea maximului, iar ultima marcată (de la capăt) este **cel mai mare**. Dacă sunt mai puțin de trei valori distincte, afișăm „nu exista”.

**Eficiență:** citirea este **liniară** în numărul de valori, iar parcurgerea vectorului are un număr constant de pași (10000), independent de câte numere sunt în fișier. Memoria este constantă (vectorul de apariții), nu depinde de numărul de valori citite.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

bool ap[10000];

int main()
{
    ifstream f("bac.in");
    int x, i, cnt = 0, mic1 = 0, mic2 = 0, mare = 0;
    while (f >> x)
    {
        int inv = 0;
        while (x != 0)
        {
            inv = inv * 10 + x % 10;
            x = x / 10;
        }
        ap[inv] = true;
    }
    for (i = 1000; i <= 9999; i++)
        if (ap[i])
        {
            cnt++;
            if (cnt == 1) mic1 = i;
            else if (cnt == 2) mic2 = i;
            mare = i;
        }
    if (cnt < 3) cout << "nu exista";
    else cout << mic1 << ' ' << mare << ' ' << mic2;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** inversele sunt 4111, 2123, 7123, 5582, 9037, 1312, 1312, 8321, 3987. Cel mai mic: 1312; cel mai mare: 9037; apoi cel mai mic dintre cele rămase: 2123 → `1312 9037 2123` ✔.

## Ce merită reținut din varianta 7

- **Împărțirea:** `real / int` este reală, `int / int` este întreagă — în aceeași expresie pot apărea ambele.
- **Structuri imbricate:** `variabilă.câmp.subcâmp`.
- **Frunze într-un arbore cu rădăcină:** nodurile fără fii; o frunză aleasă ca rădăcină nu mai este frunză.
- **Componente tare conexe:** un singur arc bine ales poate închide mai multe circuite deodată.
- **Valori distincte dintr-un domeniu mic:** vector de apariții în loc de sortare.

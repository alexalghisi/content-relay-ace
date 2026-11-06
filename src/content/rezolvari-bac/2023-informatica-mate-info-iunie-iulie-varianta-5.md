Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **c**, 3 – **c**, 4 – **b**, 5 – **a** (câte 4 puncte).

### 1. Expresia cu cea mai mare valoare → d. `(20*23)/2*2`

Operatorii `*` și `/` au aceeași prioritate și se evaluează de la stânga la dreapta:

- a. `20*23/(2*2)` = 460 / 4 = **115**;
- b. `20/2*23/2` = 10 · 23 / 2 = 230 / 2 = **115**;
- c. `(20*23)/2` = **230**;
- d. `(20*23)/2*2` = 230 · 2 = **460** — cea mai mare.

### 2. Ce afișează `f(23)` → c. 010111

Funcția coboară până la n = 0 și afișează restul `n%2` **la revenire** — adică scrie numărul în baza 2, precedat de un 0 (afișat de apelul f(0)).

Apelurile: 23 → 11 → 5 → 2 → 1 → 0. La revenire: f(0) afișează 0, apoi 1%2 = 1, 2%2 = 0, 5%2 = 1, 11%2 = 1, 23%2 = 1 → **010111**.

### 3. Valoarea lui k → c. 2

`s[2]` este `'c'`, iar `'c' - 'a'` = 2. Instrucțiunea devine `s[2] = '\0'`, deci șirul se termină după „ba” → `strlen(s)` = **2**.

### 4. Vector de tați cu un nod cu trei ascendenți → b. 3,0,2,1,3,2,1

În b, rădăcina este 2. Nodul 4 are tatăl 1, nodul 1 are tatăl 3, iar 3 are tatăl 2: ascendenții lui 4 sunt **1, 3, 2** — trei ascendenți ✔.

- a. rădăcina 1; cel mai adânc nod (de exemplu 3 → 2 → 1) are doar 2 ascendenți.
- c. rădăcina 3; cel mai adânc nod (de exemplu 1 → 4 → 3) are doar 2 ascendenți.
- d. nu reprezintă un arbore: pe poziția 3 se află valoarea 3, adică nodul 3 ar fi propriul tată, iar nodurile 3 și 6 nu sunt legate de rădăcina 4.

### 5. Benzi adăugate pentru trei componente tare conexe → a. 4

Componentele trebuie să fie {1, 3, 5} (mere), {2, 4} (pere) și {6} (piersici).

- {1, 3, 5}: există 1 → 5; mai trebuie, de exemplu, 5 → 3 și 3 → 1 (circuitul 1 → 5 → 3 → 1) — **2 arce** (un circuit cu 3 vârfuri are minimum 3 arce, unul există deja).
- {2, 4}: nu există niciun arc între ele; trebuie 2 → 4 și 4 → 2 — **2 arce**.
- {6} rămâne separat, iar arcele 5 → 2, 5 → 4, 6 → 1 nu au arce „înapoi”, deci componentele nu se unesc.

Total: **4** benzi.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul parcurge cifrele lui x de la dreapta la stânga (`c` = cifra de pe poziția p). Reține în m ultima cifră păstrată; dacă cifra curentă este **mai mare** decât m, o păstrează (și trece la poziția următoare), altfel o **elimină** din x. Rămân doar cifrele care, citite de la dreapta, formează un șir strict crescător. Dacă x = 0, nu se păstrează nimic și se afișează „nul”.

#### a) Pentru 6907512 → **9752**

De la dreapta: 2 (păstrat, m = 2), 1 ≤ 2 (eliminat), 5 (păstrat), 7 (păstrat), 0 ≤ 7 (eliminat), 9 (păstrat), 6 ≤ 9 (eliminat). Rămâne **9752**. *(6p)*

#### b) Două valori din [100, 999] afișate nemodificat

Nicio cifră nu trebuie eliminată, deci cifrele citite de la dreapta trebuie să fie strict crescătoare, adică numărul are **cifrele strict descrescătoare**: de exemplu **321** și **987**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, p = 1, m = -1, c;
    cin >> x;
    while (p <= x)
    {
        c = x / p % 10;
        if (c > m)
        {
            m = c;
            p = p * 10;
        }
        else
            x = x / (p * 10) * p + x % p;
    }
    if (m >= 0) cout << x;
    else cout << "nul";
    return 0;
}
```

#### d) Algoritm echivalent, cu test final *(6p)*

Bucla nu se execută deloc doar dacă x = 0 (atunci p = 1 > x). Protejăm structura repetitivă cu condiția inițială:

```text
citește x (număr natural)
p ← 1; m ← -1
┌dacă p ≤ x atunci
│ ┌repetă
│ │  c ← [x/p]%10
│ │ ┌dacă c > m atunci m ← c; p ← p*10
│ │ │altfel x ← [x/(p*10)]*p + x%p
│ │ └■
│ └până când p > x
└■
┌dacă m ≥ 0 atunci scrie x
│altfel scrie "nul"
└■
```

### 2. Soluțiile din jurul lui (ocean, ploaie) *(6p)*

Ordinea: lac, mare, ocean, ploaie, râu; exact o sursă sărată (mare sau ocean) și una sau două dulci.

- **Înainte:** amestecurile care încep cu „mare” sunt (mare, ploaie), (mare, ploaie, râu), (mare, râu); ultimul este **(mare, râu)**. Apoi începe „ocean”: (ocean, ploaie) este primul.
- **După:** extindem (ocean, ploaie) cu râu → **(ocean, ploaie, râu)**.

### 3. Structura lalea *(6p)*

`f[0].stoc.nrFire` arată că `stoc` este o structură cu câmpurile `nrFire` și `pretFir`, iar `f` este un tablou de 10 structuri.

```cpp
struct lalea
{
    char denumire[21];
    struct
    {
        int nrFire, pretFir;
    } stoc;
} f[10];
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul abundent *(10p)*

Trebuie să comparăm $S(n)/n$ cu $S(k)/k$ pentru **toți** $k < n$. Calculăm suma divizorilor pentru toate numerele 1…n cu un **ciur**: fiecare d se adaugă la toți multiplii săi — în total aproximativ $n \ln n$ operații (circa 14 milioane pentru $n = 10^6$). Comparăm rapoartele fără numere reale: $S(n) \cdot k > S(k) \cdot n$.

```cpp
long long S[1000001];

int abundent(int n)
{
    for (int i = 1; i <= n; i++) S[i] = 0;
    for (int d = 1; d <= n; d++)
        for (int k = d; k <= n; k += d)
            S[k] += d;
    for (int k = 1; k < n; k++)
        if (S[n] * k <= S[k] * n)
            return 0;
    return 1;
}
```

**Verificare:** n = 6: S(6)/6 = 12/6 = 2, mai mare decât orice raport anterior (maximul este S(4)/4 = 1.75) → 1 ✔; n = 7: 8/7 ≈ 1.14 < 2 → 0 ✔; n = 8: 15/8 = 1.875 < 2 → 0 ✔.

### 2. Talvegul albiei *(10p)*

Pentru fiecare linie găsim **prima** poziție a maximului (comparăm cu `>` strict, ca la egalitate să rămână primul) și afișăm perechea `linie:coloană`, numerotate de la 1.

```cpp
#include <iostream>
using namespace std;

int a[1001][51];

int main()
{
    int ns, np, i, j;
    cin >> ns >> np;
    for (i = 1; i <= ns; i++)
        for (j = 1; j <= np; j++)
            cin >> a[i][j];
    for (i = 1; i <= ns; i++)
    {
        int pmax = 1;
        for (j = 2; j <= np; j++)
            if (a[i][j] > a[i][pmax]) pmax = j;
        cout << i << ':' << pmax << ' ';
    }
    return 0;
}
```

**Verificare pe exemplu:** linia 2 (2 6 6 3) → primul 6 este pe poziția 2; linia 4 (1 3 3 3) → poziția 2. Se afișează `1:3 2:2 3:2 4:2 5:4 6:3` ✔.

### 3. Valori de două cifre egal de frecvente ca prefix și sufix

#### a) Descrierea algoritmului *(2p)*

Doar numerele cu 3 sau 4 cifre au prefixe/sufixe de două cifre. Pentru fiecare număr x citit:

- sufixul de două cifre este `x % 100` (contează doar dacă are într-adevăr două cifre, adică ≥ 10);
- prefixul de două cifre este `x / 10` (pentru 3 cifre) sau `x / 100` (pentru 4 cifre).

Numărăm aparițiile în doi vectori de frecvență, `pf[10..99]` și `sf[10..99]`. La final numărăm valorile v pentru care $pf[v] = sf[v] > 0$.

**Eficiență:** fiecare număr se prelucrează în timp constant → timp **liniar**; vectorii au dimensiune fixă (100), deci nu memorăm șirul.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int pf[100], sf[100];

int main()
{
    ifstream f("bac.txt");
    int x, nr = 0;
    while (f >> x)
        if (x > 99)
        {
            if (x % 100 >= 10) sf[x % 100]++;
            if (x > 999) pf[x / 100]++;
            else pf[x / 10]++;
        }
    for (int v = 10; v <= 99; v++)
        if (pf[v] > 0 && pf[v] == sf[v]) nr++;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 34 apare de 3 ori ca prefix (342, 3405, 3412) și de 3 ori ca sufix (2134, 5434, 8634); 10 de câte 2 ori (1010, 102 / 1010, 310); 11 și 16 câte o dată → **4** ✔.

## Ce merită reținut din varianta 5

- **`*` și `/`** se evaluează de la stânga la dreapta — parantezele schimbă rezultatul.
- **Recursivitate și baza 2:** afișarea restului la revenire scrie numărul în binar.
- **Caractere ca numere:** `'c' - 'a'` = 2.
- **Componente tare conexe impuse:** fiecare grup are nevoie de un circuit care trece prin toate vârfurile lui.
- **Ciurul pentru suma divizorilor:** $O(n \log n)$, mult mai rapid decât calculul separat pentru fiecare număr.

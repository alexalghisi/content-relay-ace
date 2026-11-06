Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Expresia cu cea mai mare valoare → d. `(20*23)/2*2`

Operatorii `*` și `/` au aceeași prioritate și se evaluează de la stânga la dreapta:

- a. `20*23/(2*2)` = 460 / 4 = 115.
- b. `20/2*23/2` = 10 · 23 / 2 = 230 / 2 = 115.
- c. `(20*23)/2` = 230.
- d. `(20*23)/2*2` = 230 · 2 = **460** — cea mai mare.

### 2. Se afișează 11001 → b. `n/2`

Afișăm `n%2`, apoi trebuie să trecem la restul numărului în baza 2 — împărțim la 2. Cifrele binare ale lui 19 ($10011_2$) apar de la ultima la prima: 1, 1, 0, 0, 1 → **11001** ✔.

- a, c. `n*2`, `n+2` cresc n — bucla nu se mai termină.
- d. `n-2` dă 19, 17, 15, … → numai 1, apoi trece prin valori negative fără să atingă 0.

### 3. x comparat cu trei elemente → a. 2019, 2025

Cu 7 elemente (pozițiile 1..7), căutarea are 3 niveluri: poziția 4 (2017); pozițiile 2 sau 6 (2013, 2021); pozițiile 1, 3, 5, 7 (2011, 2015, 2019, 2023). Trei comparații se fac pentru valorile de pe ultimul nivel sau pentru valori **care nu există** în tablou. 2019 este pe ultimul nivel, iar 2025 nu există → ambele dau 3 comparații ✔.

- b. 2017 este găsit din prima comparație. c, d. 2013 este găsit după două comparații.

### 4. Interschimbarea lui x și y → c.

Cu valorile inițiale $x_0$, $y_0$:

- `y=x+y` → $y = x_0 + y_0$;
- `x=y-x` → $x = (x_0 + y_0) - x_0 = y_0$;
- `y=y-x` → $y = (x_0 + y_0) - y_0 = x_0$ ✔.

Celelalte secvențe nu refac valorile: de exemplu la d, `x=x+y` dă $2x_0 + y_0$.

### 5. `ceil(x)-x<0.2` → d. 1.84

`ceil(1.84) = 2`, iar $2 - 1{,}84 = 0{,}16 < 0{,}2$ ✔.

- a. $1 - 0{,}4 = 0{,}6$. b. $2 - 1{,}16 = 0{,}84$. c. $2 - 1{,}4 = 0{,}6$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

`p` indică poziția cifrei curente (1 = unități, 10 = zeci, …), iar `m` este ultima cifră păstrată. Parcurgând de la dreapta, o cifră se **păstrează** dacă este mai mare decât `m` (și se trece la poziția următoare), altfel se **elimină** din număr: `[x/(p·10)]·p + x%p` „scoate” cifra de pe poziția p. Rămân doar cifrele care formează, de la dreapta la stânga, un șir strict crescător.

#### a) Pentru x = 6907512 → **9752**

| x | Cifra pe poziția p | Acțiune | m |
|---|---|---|---|
| 6907512 | 2 (unități) | păstrată | 2 |
| 6907512 | 1 | eliminată → 690752 | 2 |
| 690752 | 5 | păstrată | 5 |
| 690752 | 7 | păstrată | 7 |
| 690752 | 0 | eliminată → 69752 | 7 |
| 69752 | 9 | păstrată | 9 |
| 69752 | 6 | eliminată → 9752 | 9 |

Acum $p = 10^4 > 9752$, bucla se oprește; m ≥ 0 → se afișează **9752**. *(6p)*

#### b) Două valori din [100, 999] care rămân neschimbate

Nu se elimină nicio cifră dacă, de la dreapta la stânga, cifrele cresc strict, adică numărul are **cifrele în ordine strict descrescătoare** (de la stânga la dreapta). Exemplu: **321** și **987**. *(câte 3p)*

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

#### d) Structură repetitivă cu test final *(6p)*

Pentru x = 0 bucla inițială nu se execută (1 ≤ 0 e fals) și se afișează „nul”. Ca să păstrăm acest caz, punem structura cu test final într-un `dacă`:

```text
citește x (număr natural)
p ← 1; m ← -1
┌dacă p ≤ x atunci
│ ┌repetă
│ │  c ← [x/p]%10
│ │ ┌dacă c > m atunci
│ │ │  m ← c; p ← p*10
│ │ │altfel
│ │ │  x ← [x/(p*10)]*p + x%p
│ │ └■
│ └până când p > x
└■
┌dacă m ≥ 0 atunci scrie x
│altfel scrie "nul"
└■
```

### 2. Valorile x, y, z *(6p)*

Tablourile sunt descrescătoare, deci pentru interclasarea crescătoare le parcurgem de la dreapta: A → 17, 29, x, z, 2019 și B → 4, 32, y, 45, 2000. Ca x, y, z să fie consecutive în rezultat, trebuie $x < y < z$, iar între ele să nu se strecoare alte valori: 32 trebuie să fie înainte de x, iar 45 după z. Condiția este $32 < x < y < z < 45$.

Exemplu: **x = 33, y = 34, z = 35** → rezultatul 4, 17, 29, 32, **33, 34, 35**, 45, 2000, 2019 ✔.

### 3. Numărul de lalele din fiecare soi *(6p)*

Pentru fiecare soi se plătesc 1000 de lei, deci numărul de fire este 1000 / preț.

```cpp
char cod1, cod2;
cout << cod1 << ' ' << 1000 / pret1 << endl;
cout << cod2 << ' ' << 1000 / pret2;
```

**Verificare:** A cu prețul 5 → `A 200`; P cu prețul 4 → `P 250` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Număr abundent — pseudocod *(10p)*

Calculăm $S(n)$ și verificăm, pentru fiecare k de la 1 la n−1, că $\dfrac{S(n)}{n} > \dfrac{S(k)}{k}$. Ca să evităm erorile de rotunjire ale împărțirii reale, comparăm produsele: $S(n) \cdot k > S(k) \cdot n$ (echivalent, pentru că n, k > 0).

```text
citește n (număr natural, n ≥ 2)
sn ← 0
┌pentru d ← 1, n execută
│ ┌dacă n%d = 0 atunci sn ← sn + d
│ └■
└■
ok ← 1
┌pentru k ← 1, n−1 execută
│  sk ← 0
│ ┌pentru d ← 1, k execută
│ │ ┌dacă k%d = 0 atunci sk ← sk + d
│ │ └■
│ └■
│ ┌dacă sn*k ≤ sk*n atunci ok ← 0
│ └■
└■
scrie ok
```

**Verificare:** n = 6: $S(6)/6 = 12/6 = 2$, mai mare decât toate rapoartele anterioare (maximul este $S(4)/4 = 1{,}75$) → **1** ✔. n = 7: $8/7 \approx 1{,}14 < 2$ → 0; n = 8: $15/8 = 1{,}875 < 2$ → 0 ✔.

### 2. Punctele talvegului *(10p)*

Secțiunea 1 ocupă pozițiile 1..np, secțiunea 2 pozițiile np+1..2·np. În fiecare căutăm poziția primului maxim (comparație **strictă**, ca la egalitate să rămână primul).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int np, v[101], i, s, pmax;
    cin >> np;
    for (i = 1; i <= 2 * np; i++)
        cin >> v[i];
    for (s = 1; s <= 2; s++)
    {
        int st = (s - 1) * np;          // ultimul indice dinaintea secțiunii s
        pmax = 1;
        for (i = 2; i <= np; i++)
            if (v[st + i] > v[st + pmax])   // strict: păstrăm primul maxim
                pmax = i;
        cout << s << ':' << pmax << ' ';
    }
    return 0;
}
```

**Verificare:** (2, 4, 5, 3 | 1, 3, 2, 3) → secțiunea 1: maximul 5 pe punctul 3; secțiunea 2: maximul 3, primul pe punctul 2 → **1:3 2:2** ✔.

### 3. Prefixe și sufixe de două cifre

#### a) Descrierea algoritmului *(2p)*

Toate numerele au 3 cifre, deci singurul prefix de două cifre al lui x este `[x/10]`, iar sufixul de două cifre este `x%100` (dacă a doua cifră e 0, de exemplu la 102, „sufixul” 2 nu are două cifre și nu contează). Folosim doi vectori de frecvență, `pf` și `sf`, actualizați la citirea fiecărui număr. La final numărăm valorile v din [10, 99] cu `sf[v] = pf[v] ≠ 0`.

**Eficiență:** o singură parcurgere a fișierului, plus o parcurgere a 90 de valori → timp **liniar**; vectorii au dimensiune constantă.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int pf[100], sf[100];   // apariții ca prefix / ca sufix

int main()
{
    ifstream f("bac.txt");
    int x, v, nr = 0;
    while (f >> x)
    {
        pf[x / 10]++;     // prefixul de două cifre
        sf[x % 100]++;    // sufixul (poate avea și o singură cifră, ex. 102 → 2)
    }
    for (v = 10; v <= 99; v++)
        if (sf[v] == pf[v] && sf[v] != 0)
            nr++;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** se afișează **4** (valorile 10, 11, 16, 34) ✔ — de exemplu 34 este prefix pentru 342, 345, 342 și sufix pentru 234, 534, 834 (de câte 3 ori).

## Ce merită reținut din varianta 5

- **`*` și `/`** se evaluează de la stânga la dreapta; ordinea contează la împărțirea întreagă.
- **Cifrele în baza 2:** `n%2`, apoi `n/2`, de la ultima cifră spre prima.
- **Interschimbare prin sume:** `y=x+y; x=y-x; y=y-x;`.
- **Eliminarea cifrei de pe poziția p:** `x/(p*10)*p + x%p`.
- **Compararea fracțiilor:** $a/b > c/d$ ⇔ $a\cdot d > c\cdot b$ (pentru b, d > 0) — fără erori de rotunjire.

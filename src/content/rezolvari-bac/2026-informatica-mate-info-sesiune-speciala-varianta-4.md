Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **b**, 4 – **c**, 5 – **c** (câte 4 puncte).

### 1. Expresia cu valoarea 26 → d. `2026%100`

Restul împărțirii la 100 dă ultimele două cifre: `2026%100 = 26`.

- a. `(2026-26)/100 = 2000/100 = 20`.
- b. `2026/100 = 20` (împărțire întreagă).
- c. `(2026-26)%100 = 2000%100 = 0`.

### 2. Valoarea `f(1,10)` → b. 3

La fiecare apel `n` crește cu 1, iar `m` scade cu 2, și se adaugă 1:

f(1,10) = 1 + f(2,8) = 2 + f(3,6) = 3 + f(4,4) = 3 + 0 = **3** (la f(4,4) avem n ≥ m).

### 3. Pachetul generat înainte de (Șvinița, Bușteni, Venus) → b. (Eșelnița, Predeal, Olimp)

Pachetele se generează ca la un „contor”: ultima poziție variază cel mai repede. (Șvinița, Bușteni, Venus) este **primul** pachet care începe cu Șvinița, deci cel dinaintea lui este **ultimul** pachet care începe cu Eșelnița: ultima destinație montană (Predeal) și ultima de litoral (Olimp).

- a. este primul pachet cu Eșelnița.
- c. și d. încep cu Șvinița, deci apar **după** (Șvinița, Bușteni, Venus).

### 4. Un circuit elementar → c. 1, 3, 4, 2, 1

Din matrice: arcele sunt 1→2, 1→3, 2→1, 2→3, 3→4, 4→1, 4→2. Verificăm c: 1→3 ✔, 3→4 ✔, 4→2 ✔, 2→1 ✔, iar vârfurile 1, 3, 4, 2 sunt distincte → circuit elementar.

- a. vârful 1 apare de trei ori → nu e elementar.
- b. nu se încheie în vârful de plecare, deci este un drum, nu un circuit.
- d. arcul 1→4 nu există.

### 5. Numărul minim de muchii eliminate → c. 5

Graful are 16 muchii. Trebuie să împărțim nodurile în trei grupe **conexe** de câte 4 noduri, păstrând cât mai multe muchii în interiorul grupelor.

Grupa care conține nodul 1 trebuie să conțină 1, 2, 3 și încă un vecin: 4 sau 5. Grupa cu nodurile 10, 11, 12 are nevoie de 9 (singura legătură spre restul) → {9, 10, 11, 12} cu 4 muchii interne. Rămân, de exemplu, {4, 6, 7, 8} sau {5, 6, 7, 8} cu 3 muchii interne.

- {1, 2, 3, 4}: 4 muchii; {5, 6, 7, 8}: 3 muchii; {9, 10, 11, 12}: 4 muchii → 11 muchii păstrate.

Se elimină $16 - 11 = 5$ muchii: [3,5], [4,5], [4,6], [7,9], [8,9].

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul descompune `n` în factori primi: pentru fiecare divizor `d`, bucla interioară împarte cât timp se poate, iar `p` devine 1 dacă `d` a fost factor. La final, dacă a rămas `n ≠ 1`, acesta este un ultim factor prim. Se afișează **numărul de factori primi distincți** ai lui n.

#### a) Pentru 2600 → **3**

$2600 = 2^3 \cdot 5^2 \cdot 13$: factorii distincți sunt 2, 5, 13 → **3**. (2 și 5 sunt găsiți în buclă; după ele n = 13, iar 13 ≠ 1 se numără la final.) *(6p)*

#### b) Două numere din [10, 99] pentru care se afișează 1

Trebuie un singur factor prim, adică numere de forma $x^k$, cu x prim și k > 0: de exemplu **11** și **16** (= $2^4$). Orice număr prim sau putere a unui număr prim din interval este corect. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, nr = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            p = 1;
            n = n / d;
        }
        nr = nr + p;
        d = d + 1;
    }
    if (n != 1)
        nr = nr + 1;
    cout << nr;
    return 0;
}
```

*Barem: declarare 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent, cu test final pentru a doua structură *(6p)*

Bucla „cât timp” poate să nu se execute deloc (dacă `d` nu divide `n`), iar cea cu test final se execută cel puțin o dată. De aceea o „protejăm” cu un `dacă`:

```text
citește n (număr natural nenul)
nr ← 0; d ← 2
┌cât timp d*d ≤ n execută
│  p ← 0
│ ┌dacă n%d = 0 atunci
│ │ ┌repetă
│ │ │  p ← 1; n ← [n/d]
│ │ └până când n%d ≠ 0
│ └■
│  nr ← nr + p; d ← d + 1
└■
┌dacă n ≠ 1 atunci nr ← nr + 1
└■
scrie nr
```

### 2. Valorile afișate → **10 DA DA** *(6p)*

- `strlen("anatoliana")` = **10**.
- `strstr(s,t)` returnează adresa primei apariții a lui „ana” în s. Ea este chiar la început, deci `strstr(s,t)==s` → **DA**.
- `strstr(s+1,t)` caută „ana” începând cu al doilea caracter: găsește apariția de la final, „ana”. Șirul de acolo până la sfârșit este exact „ana”, deci `strcmp(…, t)==0` → **DA**.

### 3. Structura observator *(6p)*

`s.numar` este un câmp simplu, iar `s.stea[0].magnitudine` arată că `stea` este un **tablou de structuri** cu câmpurile `magnitudine` (real) și `distanta` (natural, până la $10^6$ → încape în `int`).

```cpp
struct observator
{
    int numar;
    struct
    {
        float magnitudine;
        int distanta;
    } stea[200];
} s;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul moda *(10p)*

Căutăm **prima cifră pară de la stânga** și poziția ei. Parcurgând cifrele de la dreapta, ultima cifră pară întâlnită este de fapt prima de la stânga; reținem poziția ei numărată de la dreapta (`k`) și numărul total de cifre (`t`). Poziția de la stânga este $t - k + 1$. Folosim `do … while` ca și n = 0 să aibă o cifră (0, costum).

```cpp
void moda(int n, int &pc)
{
    int t = 0, k = 0;
    do
    {
        t++;
        if (n % 10 % 2 == 0)
            k = t;
        n = n / 10;
    } while (n != 0);
    pc = t - k + 1;
}
```

**Verificare:** 5700 → de la dreapta: 0 (k=1), 0 (k=2), 7, 5; t = 4 → pc = 4 − 2 + 1 = **3** ✔. 576798 → ultima cifră pară de la dreapta este 6, pe poziția 4 de la dreapta; t = 6 → pc = **3** ✔. Zerourile de la final sunt tratate corect.

### 2. Interschimbarea minimului pe coloane *(10p)*

Pentru fiecare coloană găsim poziția `pmin` a minimului; dacă minimul este par îl interschimbăm cu `a[0][j]`, altfel cu `a[m-1][j]`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, a[51][51], i, j, pmin, aux;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            cin >> a[i][j];
    for (j = 0; j < n; j++)
    {
        pmin = 0;
        for (i = 1; i < m; i++)
            if (a[i][j] < a[pmin][j]) pmin = i;
        int dest = (a[pmin][j] % 2 == 0) ? 0 : m - 1;
        aux = a[pmin][j]; a[pmin][j] = a[dest][j]; a[dest][j] = aux;
    }
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare pe exemplu:** coloana 0 (7, 1, 2, 5): minim 1, impar → schimb cu ultimul → 7, 5, 2, 1 ✔; coloana 1 (5, 2, 2, 6): minim 2, par → schimb cu primul → 2, 5, 2, 6 ✔; coloana 4 (9, 7, 5, 8): minim 5, impar → 9, 7, 8, 5 ✔. Se obține exact tabloul din enunț.

### 3. Pachetele livrate, în ordine descrescătoare

#### a) Descrierea algoritmului *(2p)*

Șirul este crescător, deci $a_n = a_{n-1} + 2(a_{n-1} - a_{n-2}) = 3a_{n-1} - 2a_{n-2}$. De aici putem merge **înapoi**: $a_{n-2} = \dfrac{3a_{n-1} - a_n}{2}$.

Scriem cele două valori citite (ultima x, penultima y), apoi, cât timp y ≠ 0, calculăm termenul anterior $z = (3y - x)/2$, îl scriem și deplasăm: x ← y, y ← z. Ne oprim după ce am scris 0 (prima lună).

**Eficiență:** fiecare termen se calculează într-un pas, din ultimii doi → timp **liniar** în numărul de termeni (și termenii cresc aproape exponențial, deci sunt puțini); folosim doar trei variabile, fără tablouri → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long x, y, z;
    cin >> x >> y;
    ofstream g("bac.txt");
    g << x << ' ' << y;
    while (y != 0)
    {
        z = (3 * y - x) / 2;
        g << ' ' << z;
        x = y;
        y = z;
    }
    g.close();
    return 0;
}
```

`3 * y` poate depăși `int` pentru valori apropiate de $10^9$, de aceea folosim `long long`.

**Verificare pe exemplu:** 189 și 93 → (279 − 189)/2 = 45, apoi 21, 9, 3, 0. Fișierul conține `189 93 45 21 9 3 0` ✔.

## Ce merită reținut din varianta 4

- **`%100` și `/100`:** ultimele două cifre, respectiv numărul fără ele.
- **Backtracking „produs cartezian”:** elementul dinaintea primei soluții cu un nou prefix este ultima soluție cu prefixul anterior.
- **Circuit elementar:** se închide în nodul de start și nu repetă alte noduri.
- **Înlocuirea „cât timp” cu „repetă”:** pune un `dacă` cu condiția inițială în jurul buclei.
- **Recurențe parcurse înapoi:** exprimă termenul vechi din cei doi mai noi.

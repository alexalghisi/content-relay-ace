Rezolvarea completă a subiectului de **Bacalaureat 2021 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Expresia C/C++ pentru fracția dată → d. `((x+y)/5+(x-y)/2)/(x+2)`

Expresia matematică are la numărător $\frac{x+y}{5} + \frac{x-y}{2}$, iar la numitor $x+2$. În C/C++ trebuie paranteze în jurul **întregului numărător** și al **întregului numitor**.

- a. `y/5` și `y/2` fără paranteze, iar `/x+2` împarte doar la x. Greșit.
- b. împarte la (x+2) doar al doilea termen. Greșit.
- c. `/x+2` înseamnă „împarte la x, apoi adună 2”. Greșit.

### 2. Valoarea lui f(1234) → b. 4

`(n%2)*(n%10)` este cifra unităților dacă e impară, altfel 0. Funcția adună deci **cifrele impare** ale lui n: 1 + 3 = **4**.

### 3. A șasea soluție → a. 1230

Numerele se construiesc cifră cu cifră (prima cifră nenulă, cifre distincte); un număr este afișat de îndată ce suma cifrelor ajunge la 6, iar apoi se mai încearcă adăugarea unei cifre 0 (singura care păstrează suma). Ordinea: 1023, 1032, 105, 1203, apoi **123** (a 5-a) și, prin adăugarea lui 0, **1230** (a 6-a).

### 4. Numărul de cicluri după adăugarea unei muchii într-un arbore → b. 1

Într-un arbore, între oricare două noduri există **un singur lanț elementar**. Muchia nouă închide exact acel lanț într-un ciclu, deci graful are **un singur** ciclu elementar.

### 5. Numărul de zerouri din matricea de adiacență → c. $21^2 - 2 \cdot 12$

Nodurile se grupează după ultima cifră: {1, 11, 21} (3 noduri) și alte 9 grupe de câte 2 noduri ({2, 12}, …, {9, 19}, {10, 20}). În fiecare grupă toate nodurile sunt legate între ele.

- muchii: $3 + 9 \cdot 1 = 12$;
- fiecare muchie apare de 2 ori în matrice (simetrie) → $2 \cdot 12 = 24$ de valori 1;
- zerouri: $21^2 - 2 \cdot 12 = 417$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se afișează numerele i de la 1 la n care sunt divizibile **cu exact unul** dintre x și y. Dacă nu există niciunul, se afișează 0.

#### a) Pentru 15, 3, 4 → **3 4 6 8 9 15**

Multiplii lui 3: 3, 6, 9, 12, 15; multiplii lui 4: 4, 8, 12. Numărul 12 se divide cu amândouă, deci nu se afișează. *(6p)*

#### b) Două seturi pentru care se afișează 0

Dacă **x = y**, orice multiplu al lui x este și multiplu al lui y, deci condiția „exact unul” nu e niciodată adevărată. Exemple: **n = 10, x = 2, y = 2** și **n = 5, x = 5, y = 5**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, ok = 0;
    cin >> n >> x >> y;
    for (int i = 1; i <= n; i++)
        if ((i % x == 0 && i % y != 0) || (i % x != 0 && i % y == 0))
        {
            cout << i << ' ';
            ok = 1;
        }
    if (ok == 0) cout << 0;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

#### d) Structura „pentru” înlocuită cu una cu test inițial *(6p)*

```text
citește n, x, y (numere naturale nenule, x≤n, y≤n)
ok ← 0
i ← 1
┌cât timp i ≤ n execută
│ ┌dacă (i%x=0 și i%y≠0) sau (i%x≠0 și i%y=0) atunci
│ │  scrie i, ' '
│ │  ok ← 1
│ └■
│  i ← i + 1
└■
┌dacă ok = 0 atunci scrie 0
└■
```

Barem: inițializarea contorului, condiția `i ≤ n` și actualizarea `i ← i + 1` — câte 1p.

### 2. Șirul obținut → **ARMONIA** *(6p)*

s = „ROMANIA”, indici 0…6, i = 6. La fiecare pas se interschimbă `s[i]` cu `s[i-j]`, apoi `i = i - j`.

| j | interschimbare | s | i nou |
|---|---|---|---|
| 3 | s[6] ↔ s[3] (A ↔ A) | ROMANIA | 3 |
| 2 | s[3] ↔ s[1] (A ↔ O) | RAMONIA | 1 |
| 1 | s[1] ↔ s[0] (A ↔ R) | ARMONIA | 0 |
| 0 | s[0] ↔ s[0] | ARMONIA | 0 |

### 3. Inițializarea datelor primului angajat *(6p)*

Anul nașterii este în structura internă `dp`, deci ajungem la el prin două niveluri.

```cpp
a[0].dp.anNastere = 2000;
a[0].venit = 4000;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul cuburi *(10p)*

Primele n cuburi perfecte nenule sunt $1^3, 2^3, \dots, n^3$; le afișăm descrescător, cu b de la n la 1.

```cpp
#include <iostream>
using namespace std;

void cuburi(int n)
{
    for (int b = n; b >= 1; b--)
        cout << b * b * b << ' ';
}
```

Pentru n = 5 → **125 64 27 8 1** ✔. Cum n ≤ 1000, $n^3 \le 10^9$ încape în `int`.

### 2. Construirea tabloului *(10p)*

Pe diagonala principală, pe linia i (de la 0), se află al (i+1)-lea multiplu al lui k: `k*(i+1)`. Linia conține numere consecutive, deci elementul de pe coloana j diferă de cel de pe diagonală cu `j - i`: `a[i][j] = k*(i+1) + j - i`.

```cpp
#include <iostream>
using namespace std;

int a[105][105];

int main()
{
    int k, n;
    cin >> k >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            a[i][j] = k * (i + 1) + j - i;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

Pentru k = 3, n = 4 se obține exact tabloul din exemplu ✔ (valorile sunt pozitive, pentru că `k*(i+1) - i ≥ 2i + 2 - i > 0`).

### 3. Perechi asemenea

#### a) Descrierea algoritmului *(2p)*

Contează doar ultimele două cifre ale fiecărui număr, adică `x % 100` ∈ [0, 99]. Citim șirul A și construim un vector de frecvență `v`, unde `v[i]` = câte numere din A au ultimele două cifre i. Apoi citim pe rând termenii y din B: fie `i = y % 100` și `j` = i cu cifrele inversate; adunăm la rezultat `v[i]` și, dacă `j ≠ i`, și `v[j]`.

**Eficiență:** fiecare număr se citește o singură dată și se prelucrează în timp constant → timp **liniar** O(na + nb); memorie: doar vectorul de 100 de elemente.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    int na, nb, x, v[100] = {0};
    long long nr = 0;
    f >> na >> nb;
    for (int k = 0; k < na; k++)
    {
        f >> x;
        v[x % 100]++;
    }
    for (int k = 0; k < nb; k++)
    {
        f >> x;
        int i = x % 100;
        int j = (i % 10) * 10 + i / 10;
        nr += v[i];
        if (j != i) nr += v[j];
    }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** se afișează **13** ✔ (de exemplu, 402 se termină în „02”, care inversat dă 20 — perechea cu 20).

## Ce merită reținut din varianta 4

- **Fracții în C/C++:** pune între paranteze întregul numărător și întregul numitor.
- **Arbore + o muchie** → exact un ciclu.
- **Matricea de adiacență** conține de 2 ori numărul de muchii valori 1.
- **„Exact una dintre condiții”**: `(A && !B) || (!A && B)`.
- **Ultimele două cifre** (`x % 100`) → vector de frecvență cu 100 de poziții.

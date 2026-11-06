Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2025 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **a** (câte 4 puncte).

### 1. Intervalul pentru care expresia are valoarea 1 → c. [2005,2024]

Traducem fiecare negație:

- `!(x<2004)` ⇔ $x \ge 2004$;
- `!(x<2005 || x>2024)` ⇔ $2005 \le x \le 2024$;
- `!(x>2025)` ⇔ $x \le 2025$.

Intersecția celor trei condiții este $[2005, 2024]$. Celelalte intervale conțin valori (de exemplu 2004 sau 2025) pentru care expresia este 0.

### 2. Valoarea `f(2,5)` → d. −5

- f(2,5) = f(f(0,5) − 2, 0). Cum f(0,5) = 5 (n nu e > 0), avem f(2,5) = f(3, 0).
- f(3,0) = f(f(1,0) − 2, −5).
- f(1,0) = f(f(−1,0) − 2, −5) = f(0 − 2, −5) = f(−2, −5) = **−5**.
- Deci f(3,0) = f(−5 − 2, −5) = f(−7, −5) = **−5**.

### 3. Șirul obținut din „ROMANIA” → a. ARMONIA

| i | j | Interschimbare | s |
|---|---|---|---|
| 6 | 3 | s[6] ↔ s[3] (A ↔ A) | ROMANIA |
| 3 | 2 | s[3] ↔ s[1] (A ↔ O) | RAMONIA |
| 1 | 1 | s[1] ↔ s[0] (A ↔ R) | ARMONIA |
| 0 | 0 | s[0] ↔ s[0] | ARMONIA |

### 4. Un circuit elementar → b. 1,2,3,1

Arcele (1,2), (2,3), (3,1) există, iar circuitul se închide în vârful de plecare fără să repete alte vârfuri.

- a. nu se întoarce în 1 — e doar un drum.
- c. trece de două ori prin 3 → nu e elementar.
- d. arcul (6,1) nu există.

### 5. Numărul de noduri ale grafului complet cu 300 de muchii → a. 25

Graful complet cu n noduri are $\frac{n(n-1)}{2}$ muchii. $\frac{n(n-1)}{2} = 300 \Rightarrow n(n-1) = 600 = 25 \cdot 24$, deci $n = 25$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Se numără valorile `i` de la n la 1 care se divid cu **exact unul** dintre numerele x și y.

#### a) Valorile 15, 3, 4 → **6**

Multiplii lui 3 până la 15: 3, 6, 9, 12, 15; multiplii lui 4: 4, 8, 12. 12 se divide cu amândouă, deci nu se numără. Rămân 3, 6, 9, 15 și 4, 8 → **6**. *(6p)*

#### b) Două seturi pentru care se afișează 0

Dacă **x = y**, orice număr se divide fie cu amândouă, fie cu niciunul → nr = 0. Exemple: **n = 10, x = 2, y = 2** și **n = 5, x = 5, y = 5**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, nr = 0, i;
    cin >> n >> x >> y;
    for (i = n; i >= 1; i--)
        if (i % x == 0 && i % y != 0)
            nr = nr + 1;
        else if (i % x != 0 && i % y == 0)
            nr = nr + 1;
    cout << nr;
    return 0;
}
```

*Barem: declarare 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent cu test inițial *(6p)*

```text
citește n, x, y (numere naturale nenule, x ≤ n, y ≤ n)
nr ← 0
i ← n
┌cât timp i ≥ 1 execută
│ ┌dacă i%x = 0 și i%y ≠ 0 atunci nr ← nr + 1
│ │altfel
│ │ ┌dacă i%x ≠ 0 și i%y = 0 atunci nr ← nr + 1
│ │ └■
│ └■
│  i ← i − 1
└■
scrie nr
```

Cele trei elemente punctate: inițializarea `i ← n`, condiția `i ≥ 1`, actualizarea `i ← i − 1`.

### 2. A cincea și a șasea soluție *(6p)*

Cifrele se adaugă pe rând, în ordine crescătoare (prima cifră nenulă), iar un număr este soluție de îndată ce suma cifrelor lui este 6. După 1203, următoarele numere care încep cu 1, 2 sunt:

- **123** (1 + 2 + 3 = 6) — a cincea soluție;
- **1230** (îi mai putem adăuga cifra 0, suma rămâne 6, iar cifrele sunt distincte) — a șasea soluție.

Urmează apoi 1302, 132, 1320 etc. Am verificat ordinea generând toate soluțiile cu un program de backtracking: 1023, 1032, 105, 1203, **123**, **1230**, 1302, …

### 3. Structura epoca *(6p)*

`m.anFabricatie` este un câmp simplu, iar `m.expo.zi` și `m.expo.luna` arată că `expo` este o **structură** cu câmpurile `zi` (întreg) și `luna` (șir de cel mult 15 caractere).

```cpp
struct epoca
{
    int anFabricatie;
    struct
    {
        int zi;
        char luna[16];
    } expo;
} m;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul pao *(10p)*

Din x păstrăm doar cifrele pare nenule și construim numărul lor **în ordine inversă** (parcurgând de la dreapta, `rx = rx*10 + c`). Din y păstrăm cifrele pare nenule **în ordinea lor** (le punem în față, cu o putere a lui 10). Numerele sunt par-oglindite dacă cele două valori sunt egale. Dacă niciunul nu are cifre pare nenule, rezultatul este 0 (vezi exemplul x = 15, y = 510).

```cpp
void pao(int x, int y, int &rez)
{
    int rx = 0, fy = 0, p = 1;
    while (x != 0)
    {
        int c = x % 10;
        if (c != 0 && c % 2 == 0) rx = rx * 10 + c;
        x = x / 10;
    }
    while (y != 0)
    {
        int c = y % 10;
        if (c != 0 && c % 2 == 0) { fy = c * p + fy; p = p * 10; }
        y = y / 10;
    }
    if (rx == fy && rx != 0) rez = 1;
    else rez = 0;
}
```

**Verificare:** x = 814 → cifre pare nenule 8, 4 → inversat **48**; y = 7003485 → 4, 8 → **48** → rez = 1 ✔. Pentru y = 7003465 → 46 ≠ 48 → 0 ✔; y = 7003845 → 84 ≠ 48 → 0 ✔; x = 15, y = 510 → niciun număr nu are cifre pare nenule → 0 ✔.

### 2. Tablou cu multiplii lui k pe diagonală *(10p)*

Pe linia i (de la 0) diagonala conține $k(i+1)$, iar pe linie valorile scad cu 1 de la stânga la dreapta. Deci elementul de pe coloana j este $k(i+1) - (j - i)$ — formula funcționează și la stânga, și la dreapta diagonalei.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int k, n, a[101][101], i, j;
    cin >> k >> n;
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            a[i][j] = k * (i + 1) + i - j;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare:** k = 5, n = 4 → linia 0: 5 4 3 2; linia 1: 11 10 9 8; linia 2: 17 16 15 14; linia 3: 23 22 21 20 ✔. Condiția $k \ge n$ garantează că toate valorile sunt naturale.

### 3. Ultimele două mașini consecutive din anul x

#### a) Descrierea algoritmului *(2p)*

Anul are 4 cifre, deci pentru un cod c: anul este `c % 10000`, iar identificatorul `c / 10000`. Citim codurile pe rând și ținem minte codul anterior (`ant`). De fiecare dată când **ambele** coduri (`ant` și cel curent) au anul x, reținem identificatorii lor în `pu` și `u` — la final rămâne ultima pereche găsită. Dacă nu s-a găsit nicio pereche (`u` rămâne −1), afișăm „nu exista”.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; nu memorăm șirul, ci doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, ant = 0, crt, pu = -1, u = -1;
    f >> x;
    while (f >> crt)
    {
        if (ant % 10000 == x && crt % 10000 == x)
        {
            pu = ant / 10000;
            u = crt / 10000;
        }
        ant = crt;
    }
    if (u == -1) cout << "nu exista";
    else cout << pu << ' ' << u;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** perechile consecutive din 1925 sunt (2, 893), (893, 3), (1, 3), (3, 15); ultima este **3 15** ✔.

## Ce merită reținut din model

- **Negații:** `!(a<b)` ⇔ `a>=b`; `!(A || B)` ⇔ `!A && !B`.
- **Recursivitate cu apeluri imbricate:** calculează întâi apelul interior.
- **Graf complet:** $\frac{n(n-1)}{2}$ muchii.
- **Backtracking cu „sumă”:** cifra 0 nu schimbă suma, deci după o soluție mai poate urma una cu 0 adăugat.
- **Coduri compuse:** `%10000` dă ultimele 4 cifre, `/10000` restul.

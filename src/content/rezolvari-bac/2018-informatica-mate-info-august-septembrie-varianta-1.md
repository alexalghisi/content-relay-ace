Rezolvarea completă a subiectului de **Bacalaureat 2018 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Șirul crescător pentru `z<x && 2*z==3*y` → b. y, z, x *(4p)*

Din `2*z == 3*y` rezultă $z = \frac{3}{2}y > y$ (numere nenule). Din `z < x` avem și $z < x$. Deci $y < z < x$ — de exemplu y = 2, z = 3, x = 4.

### 2. Algoritmul în pseudocod

Algoritmul parcurge cifrele lui |n| de la dreapta la stânga și ține în `m` maximul cifrelor întâlnite până acum. La fiecare pas pune acest maxim pe poziția cifrei curente: practic, fiecare cifră este înlocuită cu maximul dintre ea și cifrele din dreapta ei.

#### a) Pentru n = 10523 → **55533** *(6p)*

| c | m | x | p (după) |
|---|---|---|---|
| 3 | 3 | 3 | 10 |
| 2 | 3 | 33 | 100 |
| 5 | 5 | 533 | 1000 |
| 0 | 5 | 5533 | 10000 |
| 1 | 5 | 55533 | 100000 |

Se afișează **55533**.

#### b) Patru numere pentru care se afișează 722 *(4p)*

Ultima cifră trebuie să fie 2 și să rămână maximul până la cifra sutelor, care devine 7: numerele au forma 7?2 cu cifra zecilor ≤ 2. Semnul nu contează (n negativ devine pozitiv). Exemple: **722, −722, 712, −712** (sau 702, −702). Câte 1p pentru fiecare număr.

#### c) Algoritm echivalent cu structură repetitivă cu test inițial *(6p)*

Structura **repetă** execută corpul cel puțin o dată, chiar și pentru n = 0. De aceea executăm corpul o dată înainte de **cât timp**:

```text
citește n (număr întreg)
m ← 0; p ← 1; x ← 0
┌dacă n<0 atunci n ← -n
└■
c ← n%10; n ← [n/10]
┌dacă c>m atunci m ← c
└■
x ← m*p+x; p ← p*10
┌cât timp n≠0 execută
│  c ← n%10; n ← [n/10]
│ ┌dacă c>m atunci m ← c
│ └■
│  x ← m*p+x; p ← p*10
└■
scrie x
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, c, m = 0, p = 1, x = 0;
    cin >> n;
    if (n < 0) n = -n;
    do
    {
        c = n % 10;
        n = n / 10;
        if (c > m) m = c;
        x = m * p + x;
        p = p * 10;
    } while (n != 0);
    cout << x;
    return 0;
}
```

„Repetă … până când n = 0” devine `do { … } while (n != 0);` — condiția se **neagă**. *Barem: variabile 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **c** (câte 4 puncte).

### 1. `strlen("2018")` → a. 4

`strlen` numără caracterele până la terminatorul `'\0'`, fără el: '2', '0', '1', '8' → **4**.

### 2. Numărul minim de arce eliminate → c. 6

Un graf orientat cu 5 vârfuri are cel mult $5 \cdot 4 = 20$ arce, deci graful dat conține **toate** arcele posibile. Împărțim vârfurile în grupa A (3 vârfuri) și grupa B (2 vârfuri). Între ele există $3 \cdot 2 = 6$ perechi, fiecare cu ambele arce (12 arce).

Ca A și B să fie componente tare conexe **diferite**, nu trebuie să putem merge și din A în B, și din B în A. Păstrăm toate arcele într-un singur sens (A → B) și eliminăm cele 6 arce în sens invers. În interiorul grupelor nu eliminăm nimic (rămân complete). Minim: **6**.

### 3. Câtul și restul lui 2018 la x *(6p)*

```cpp
if (x != 0)
{
    rezultat.cat = 2018 / x;
    rezultat.rest = 2018 % x;
}
else
    cout << "impartire nepermisa";
```

Câmpurile se accesează cu **variabilă.câmp** (`rezultat.cat`, nu `impartire.cat`).

### 4. Trei noduri care pot fi rădăcină *(6p)*

Din matrice citim muchiile: [1,2], [1,3], [1,4], [2,6], [2,8], [5,6], [6,7].

| Nod | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Grad | 3 | 3 | 1 | 1 | 1 | 3 | 1 | 1 |

Rădăcina are ca fii **toți** vecinii ei, iar orice alt nod are ca fii vecinii minus tatăl. Nodurile de grad 3 (1, 2, 6) au deci 2 fii dacă nu sunt rădăcină, dar 3 fii dacă sunt rădăcină. Rădăcina trebuie așadar să fie o frunză: oricare trei dintre **3, 4, 5, 7, 8** (de exemplu 3, 4, 5).

### 5. Tabloul cu șirul pe coloane, alternativ *(10p)*

Pe coloanele **impare** șirul se citește de sus în jos: `a[i][j] = v[i]`. Pe coloanele **pare** se citește de jos în sus: `a[n-1-i][j] = v[i]`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[105], a[105][105];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> v[i];
    for (int j = 0; j < n; j++)
        for (int i = 0; i < n; i++)
            if (j % 2 == 0) a[n - 1 - i][j] = v[i];
            else a[i][j] = v[i];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare** pentru n = 4 și 7 2 5 3: se afișează `3 7 3 7`, `5 2 5 2`, `2 5 2 5`, `7 3 7 3` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Ce afișează `f(7)` → c. 101 *(4p)*

- f(7): afișează 7%2 = **1**, apoi f(4)
- f(4): afișează 4%2 = **0**, apoi f(1)
- f(1): afișează 1%2 = **1**; 1 < 3, deci se oprește

Se afișează **101**.

### 2. Backtracking — a șasea și a șaptea soluție *(6p)*

Ordinea elementelor este {stilou, pană, toc, creion, pensulă}. A 5-a soluție este (toc, creion, pensulă, stilou, pană); pe ultima poziție se încearcă următorul element posibil, deci schimbăm stilou și pană între ele. După ce se termină variantele cu (toc, creion, pensulă, …), pe poziția 2 urmează pensulă, iar creionul trebuie să vină înaintea stiloului și a penei.

- a 6-a soluție: **(toc, creion, pensulă, pană, stilou)**
- a 7-a soluție: **(toc, pensulă, creion, stilou, pană)**

### 3. Subprogramul interval *(10p)*

Fie p primul număr prim ≥ n. Atunci [n, p] conține un singur număr prim, iar p + 1 este par și mai mare decât 2, deci **nu este prim**. Orice număr y cu n < y < p nu conține niciun prim în [n, y], deci răspunsul este exact **p + 1**.

```cpp
int prim(int x)
{
    if (x < 2) return 0;
    for (int d = 2; d * d <= x; d++)
        if (x % d == 0) return 0;
    return 1;
}

int interval(int n)
{
    int x = n;
    while (!prim(x)) x++;
    return x + 1;
}
```

**Verificare:** n = 8 → primul prim este 11 → se returnează **12** ✔. Pentru n = 7 (prim) se returnează 8.

### 4. Termenii șirului în ordine descrescătoare

#### a) Descrierea algoritmului *(2p)*

Din relația $f_n = 2 f_{n-1} - f_{n-2} + 2$ scoatem termenul anterior: dacă w, x, y sunt termeni consecutivi, atunci $w = 2x - y + 2$. Scriem în fișier y și x, apoi, cât timp x ≠ 0 (primul termen este 0), calculăm w, îl scriem și mutăm fereastra: y ← x, x ← w.

**Eficiență:** fiecare termen se calculează în O(1) din cei doi termeni de după el, deci timpul este **liniar** în numărul de termeni scriși. Nu folosim tablouri, doar trei variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long x, y, w;
    cin >> x >> y;
    ofstream g("bac.txt");
    g << y << ' ' << x;
    while (x != 0)
    {
        w = 2 * x - y + 2;
        g << ' ' << w;
        y = x;
        x = w;
    }
    g.close();
    return 0;
}
```

Am folosit `long long` pentru că `2*x` poate depăși $2 \cdot 10^9$. **Verificare** pentru 48 63: fișierul conține `63 48 35 24 15 8 3 0` ✔.

## Ce merită reținut din varianta 1

- **Repetă … până când** → `do … while` cu condiția negată; la transformarea în „cât timp”, corpul se scrie o dată înainte de buclă.
- **Arbori:** rădăcina are ca fii toți vecinii, deci pentru „cel mult 2 fii” rădăcina trebuie să aibă grad ≤ 2.
- **Componente tare conexe:** între două componente pot rămâne arce, dar doar într-un singur sens.
- **Șiruri recurente:** scoate din relație termenul anterior ca să mergi înapoi fără să memorezi șirul.

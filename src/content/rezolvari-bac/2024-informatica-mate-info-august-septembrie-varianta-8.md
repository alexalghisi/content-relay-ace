Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 8**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. [x,y] nu conține numere de două cifre → b. `!(x<=99 && y>=10)`

Intervalul [x,y] **intersectează** [10,99] exact când $x \le 99$ și $y \ge 10$. Negația acestei condiții este cerința.

- a. `!(x>=10 || y>99)` ⇔ `x<10 && y<=99` — e adevărată pentru [5,50], care conține 10…50. Greșit.
- c. e adevărată pentru [10,99]. Greșit.
- d. `x>99 && y<10` este imposibil (x ≤ y). Greșit.

### 2. Apelul care afișează 13579 → d. `f(6,1,1)`

Funcția afișează y, apoi se reapelează cu y + 2 și z + 1, cât timp z < x. Deci afișează $x - z$ valori, începând cu y. Pentru 1, 3, 5, 7, 9 avem nevoie de y = 1 și de 5 valori: $x - z = 5$ → `f(6,1,1)` ✔.

- a. începe cu 0. b. `f(5,1,1)` afișează doar 4 valori (1357). c. `f(6,1,6)` nu afișează nimic.

### 3. Șirul s → a. oare

`strcmp("soare","ploaie")`: 's' > 'p', deci rezultatul este pozitiv → `strcpy(s, x+1)` copiază „soare” fără prima literă: **„oare”**.

### 4. Rădăcina arborelui → b. 3

Rădăcina este nodul al cărui tată este **0**. În vectorul (13,3,**0**,6,…) valoarea 0 se află pe poziția 3.

### 5. Numărul maxim de vârfuri izolate → c. 18

Ca să avem cât mai multe vârfuri izolate, punem toate cele 24 de arce între cât mai puține vârfuri. Între k vârfuri pot exista cel mult $k(k-1)$ arce (în ambele sensuri). $5 \cdot 4 = 20 < 24$, dar $6 \cdot 5 = 30 \ge 24$, deci sunt necesare minimum 6 vârfuri. Rămân izolate $24 - 6 = $ **18**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla parcurge numărul de la dreapta: `x` reține **ultimele două cifre** ale lui n (prima iterație), iar `y` se suprascrie la fiecare pas, rămânând în final cu **primele două cifre**. După buclă, n este prima cifră. Se lipesc: prima cifră, apoi cele două valori de câte două cifre, cea mai mică întâi.

#### a) Pentru 412531 → **43141**

| n | x | y |
|---|---|---|
| 412531 | 31 | −1 |
| 41253 | 31 | 53 |
| 4125 | 31 | 25 |
| 412 | 31 | 12 |
| 41 | 31 | 41 |
| 4 | — | — |

x = 31 < y = 41 → $n = (4 \cdot 100 + 31) \cdot 100 + 41 = $ **43141**. *(6p)*

#### b) Două numere din [1, 11110] pentru care se afișează 11111

Rezultatul este format din prima cifră, apoi două grupe de câte 2 cifre: 1 | 11 | 11, deci prima cifră trebuie să fie 1, iar x și y (ultimele, respectiv primele două cifre) să fie ambele 11. Verificând, numerele corecte din interval sunt **111**, **1111** și **11011**; de exemplu **111** și **1111**:

- 111: x = 11, apoi y = 11, n = 1 → $(100 + 11) \cdot 100 + 11 = 11111$ ✔.
- 1111: x = 11, y = 11 (de două ori), n = 1 → 11111 ✔. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = -1, y = -1;
    cin >> n;
    while (n > 9)
    {
        if (x == -1) x = n % 100;
        else y = n % 100;
        n = n / 10;
    }
    if (x < y) n = (n * 100 + x) * 100 + y;
    else n = (n * 100 + y) * 100 + x;
    cout << n;
    return 0;
}
```

*Barem: declarare 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent, cu test final *(6p)*

Bucla poate să nu se execute deloc (n ≤ 9), de aceea o protejăm cu un `dacă`:

```text
citește n (număr natural nenul)
x ← -1; y ← -1
┌dacă n > 9 atunci
│ ┌repetă
│ │ ┌dacă x = -1 atunci x ← n%100
│ │ │altfel y ← n%100
│ │ └■
│ │  n ← [n/10]
│ └până când n ≤ 9
└■
┌dacă x < y atunci n ← (n*100+x)*100+y
│altfel n ← (n*100+y)*100+x
└■
scrie n
```

### 2. Soluțiile din jurul lui (crin, gerbera, orhidee) *(6p)*

Ordinea: trandafir, crin, gerbera, iris, eustoma, orhidee, zambilă; crinul nu stă cu eustoma sau zambila.

- **Înainte:** cu prefixul (crin, gerbera), a treia floare dinainte de orhidee ar fi eustoma (interzisă), apoi iris → **(crin, gerbera, iris)**.
- **După:** (crin, gerbera, zambilă) este interzisă; se trece la prefixul (crin, iris) → **(crin, iris, orhidee)** (eustoma, între iris și orhidee, este interzisă).

### 3. Verificarea terței *(6p)*

În notația englezească, ordinea notelor de la do este C, D, E, F, G, A, B. O terță înseamnă că nota a doua este **la două poziții** după prima: C–E, D–F, E–G, F–A, G–B. Pentru C, D, E literele sunt consecutive în alfabet (`nota1 + 2`); pentru F și G gama „trece” la A, B.

```cpp
if ((m.nota1 >= 'C' && m.nota1 <= 'E' && m.nota2 == m.nota1 + 2) ||
    (m.nota1 == 'F' && m.nota2 == 'A') ||
    (m.nota1 == 'G' && m.nota2 == 'B'))
    cout << "TERTA";
else
    cout << "NU";
```

Exemplu: G și B → TERTA ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul moderat *(10p)*

Găsim cel mai mic divizor prim p al lui n și fie $q = n / p$. n este moderat dacă q este prim, $q > p$ și **niciun număr între p și q nu este prim** (p și q sunt consecutive).

```cpp
int prim(int x)
{
    if (x < 2) return 0;
    for (int d = 2; d * d <= x; d++)
        if (x % d == 0) return 0;
    return 1;
}

int moderat(int n)
{
    if (n < 2) return 0;
    int p = 2;
    while (n % p != 0) p++;          // cel mai mic divizor (prim)
    int q = n / p;
    if (q <= p || !prim(q)) return 0;
    for (int k = p + 1; k < q; k++)
        if (prim(k)) return 0;       // există un prim între p și q
    return 1;
}
```

**Verificare:** 35 = 5 · 7 (consecutive) → 1 ✔; 18 = 2 · 9 (9 nu e prim) → 0 ✔; 55 = 5 · 11 (7 e între ele) → 0 ✔; 4 = 2 · 2 (q = p) → 0 ✔.

### 2. Tunderea gazonului *(10p)*

Cu numerotarea de la 0, rândurile pare sunt gazon, cele impare flori. Rândul de gazon `i` are după el rândul de flori `i+1` (dacă există). Fiecare parcelă de flori trebuie să fie cu cel puțin 1 dm mai înaltă decât **oricare** parcelă de gazon de pe rândul `i`, deci înălțimea maximă permisă pentru gazon este $\min(\text{rândul } i+1) - 1$. Parcelele de gazon mai înalte sunt aduse la această valoare.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, a[101][101], i, j;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
            cin >> a[i][j];
    for (i = 0; i + 1 < m; i += 2)
    {
        int mn = a[i + 1][0];
        for (j = 1; j < n; j++)
            if (a[i + 1][j] < mn) mn = a[i + 1][j];
        for (j = 0; j < n; j++)
            if (a[i][j] > mn - 1) a[i][j] = mn - 1;
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

**Verificare pe exemplu:** rândul 1 are minimul 5 → gazonul de pe rândul 0 se taie la 4: `4 2 3 4 4 4` ✔; rândul 3 are minimul 2 → rândul 2 devine `1 1 1 1 1 1` ✔.

### 3. Termenii șirului, descrescător

#### a) Descrierea algoritmului *(2p)*

Din relația $f_n = 4f_{n-1} - 3f_{n-2} - 2f_{n-3}$ obținem termenul **anterior**:

$$f_{n-3} = \frac{4f_{n-1} - 3f_{n-2} - f_n}{2}.$$

Scriem z, y, x (descrescător), apoi calculăm repetat termenul precedent din ultimii trei, îl scriem și deplasăm fereastra (z ← y, y ← x, x ← termenul nou). Ne oprim după ce am scris doi termeni 0 consecutivi ($f_2$ și $f_1$).

**Eficiență:** fiecare termen se obține în timp constant, iar termenii cresc exponențial, deci numărul de pași este mic (logaritmic în z); folosim doar 4 variabile, fără tablouri → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long x, y, z, crt;
    cin >> x >> y >> z;
    ofstream g("bac.txt");
    g << z << ' ' << y << ' ' << x;
    while (!(x == 0 && y == 0))
    {
        crt = (4 * y - 3 * x - z) / 2;
        g << ' ' << crt;
        z = y; y = x; x = crt;
    }
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** 38 105 280 → (420 − 114 − 280)/2 = 13, apoi 4, 1, 0, 0. Fișierul: `280 105 38 13 4 1 0 0` ✔.

## Ce merită reținut din varianta 8

- **Intervale care se intersectează:** [x,y] ∩ [a,b] ≠ ∅ ⇔ x ≤ b și y ≥ a.
- **`strcmp`** compară lexicografic, caracter cu caracter.
- **Vector de tați:** rădăcina este poziția valorii 0.
- **Graf orientat cu k vârfuri:** cel mult $k(k-1)$ arce.
- **Recurențe:** pentru a merge înapoi, izolează termenul cel mai vechi.

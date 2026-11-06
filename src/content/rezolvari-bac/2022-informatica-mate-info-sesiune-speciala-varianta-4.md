Rezolvarea completă a subiectului de **Bacalaureat 2022 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **c**, 3 – **a**, 4 – **c**, 5 – **b** (câte 4 puncte).

### 1. Expresia cu valoarea 2022 → d. `1011*(1+1)`

- a. `4044/4/2` = 1011/2 = 505 (împărțire întreagă).
- b. `4044/(4*2)` = 4044/8 = 505.
- c. `1011*1+1` = 1012 (înmulțirea are prioritate).
- d. `1011*(1+1)` = 1011·2 = **2022** ✔.

### 2. Valoarea lui x pentru care f(x,3) = 2022 → c. 202345

Cât timp `p > 0`, funcția taie ultima cifră a lui n și scade p. După 3 tăieri, la `p == 0` returnează `n*10+2`, adică lipește cifra 2 la final.

`f(202345,3)` → `f(20234,2)` → `f(2023,1)` → `f(202,0)` = 202·10 + 2 = **2022** ✔.

### 3. Penultima soluție → a. (Logan, Lodgy, Sandero)

Se generează aranjamente de câte 3 (ordinea contează). Sandero nu poate fi primul, iar Logan nu poate apărea înaintea lui Dokker sau Duster — deci soluțiile care încep cu Logan nu conțin nici Dokker, nici Duster și sunt ultimele generate: (Logan, Lodgy, Sandero), apoi (Logan, Sandero, Lodgy). Penultima este **(Logan, Lodgy, Sandero)**.

### 4. Șirul memorat în d → c. rocnee

`s` = „info@rocnee.eu” are 14 caractere; `s[11] = '\0'` taie „.eu” → `s` = „info@rocnee”. `strchr(s,'@')+1` indică primul caracter de după „@”, deci `d` = **rocnee**.

### 5. Numărul maxim de frați ai nodului 7 → b. 3

Un arbore cu 7 noduri are 6 muchii, deci suma numărului de fii ai tuturor nodurilor este 6. Nodurile interne i au i + 1 fii, iar rădăcina 1 este internă (2 fii). Căutăm noduri interne cu suma (i + 1) = 6: singura variantă este {1, 3}: 2 + 4 = 6. Deci 1 are 2 fii (unul dintre ei fiind 3), iar 3 are 4 fii. Dacă 7 este fiu al lui 3, are **3 frați** — maximul posibil.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

La fiecare pas, `x` = ultimele două cifre ale lui n, apoi n pierde o cifră. Se afișează `x` dacă x > 1 și nu se divide cu 2, 3, 5, 7 (produsul resturilor e nenul). Pentru numere de cel mult două cifre, asta înseamnă că **x este număr prim de două cifre** (cel mai mic număr compus fără acești divizori este 121). Așadar se afișează, de la dreapta la stânga, perechile de cifre vecine care formează numere prime.

#### a) Pentru n = 1237518 → **37 23**

| n | x = n%100 | se afișează? |
|---|---|---|
| 1237518 | 18 | nu (par) |
| 123751 | 51 | nu (3·17) |
| 12375 | 75 | nu |
| 1237 | 37 | **da** |
| 123 | 23 | **da** |
| 12 | 12 | nu |

Apoi n = 1 < 10 și bucla se oprește. *(6p)*

#### b) Numere din [100, 999] pentru care se afișează două numere

Avem nevoie de un număr $\overline{xyz}$ cu $\overline{xy}$ și $\overline{yz}$ ambele prime: de exemplu **113** (11 și 13) sau **237** (23 și 37). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, p;
    cin >> n;
    do
    {
        x = n % 100;
        if (x > 1)
        {
            p = (x % 2) * (x % 3) * (x % 5) * (x % 7);
            if (p != 0) cout << x << ' ';
        }
        n = n / 10;
    } while (n >= 10);
    return 0;
}
```

„repetă … până când n < 10” devine `do { … } while (n >= 10);` — condiția se neagă. *Barem: variabile 1p, citire 1p, afișare 1p, decizii 3p, repetitivă 2p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm cu structură repetitivă cu test inițial *(6p)*

Singura diferență între `repetă` și `cât timp` este prima execuție când n < 10 de la început. Atunci x = n este o cifră, iar pentru x ∈ [2, 9] produsul resturilor este 0, deci nu se afișează nimic. Așadar putem testa direct `n ≥ 10` la început.

```text
citește n (număr natural)
┌cât timp n ≥ 10 execută
│  x ← n%100
│ ┌dacă x > 1 atunci
│ │  p ← (x%2)*(x%3)*(x%5)*(x%7)
│ │ ┌dacă p ≠ 0 atunci scrie x, ' '
│ │ └■
│ └■
│  n ← [n/10]
└■
```

### 2. Subgraf complet cu număr maxim de noduri *(6p)*

Nodurile 1, 2, 3, 5 sunt legate două câte două (există toate muchiile [1,2], [1,3], [1,5], [2,3], [2,5], [3,5]). Un subgraf complet cu 5 noduri nu există (nodul 6 are gradul 2, nodul 4 are doar vecinii 1, 2, 6). Răspuns: **{[1,2], [1,3], [1,5], [2,3], [2,5], [3,5]}**.

### 3. Suma totală din vânzarea biletelor *(6p)*

```cpp
s = 0;
for (i = 0; i < 15; i++)
    s = s + t[i].nrLocuri * t[i].pret;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul patrate *(10p)*

$x^2 \cdot y^2 = (xy)^2 = n$, deci n trebuie să fie pătrat perfect, $n = r^2$, iar x și y sunt doi divizori ai lui r cu $x \cdot y = r$ și $2 \le x < y$. Căutăm cel mai mic divizor x ≥ 2 al lui r, cu x < r / x.

```cpp
#include <cmath>
void patrate(int n, int &x, int &y)
{
    x = 0; y = 0;
    int r = (int)sqrt((double)n);
    while (r * r > n) r--;
    while ((r + 1) * (r + 1) <= n) r++;
    if (r * r != n) return;               // n nu este pătrat perfect
    for (int d = 2; d * d < r; d++)
        if (r % d == 0)
        {
            x = d; y = r / d;
            return;
        }
}
```

Condiția `d * d < r` garantează `d < r/d`, adică x < y. **Exemple:** n = 400 → r = 20 → x = 2, y = 10 ✔; n = 16 → r = 4, singura pereche 2·2 nu are x < y → 0, 0 ✔; n = 24 nu e pătrat perfect → 0, 0 ✔.

### 2. Eliminarea diagonalei principale *(10p)*

Pe linia i, elementul de pe diagonala principală este `a[i][i]`. Elementele din dreapta lui se mută cu o poziție spre stânga; linia rămâne cu n − 1 elemente.

```cpp
#include <iostream>
using namespace std;

int a[105][105];

int main()
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];
    for (int i = 0; i < n; i++)
        for (int j = i; j < n - 1; j++)
            a[i][j] = a[i][j + 1];
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - 1; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

Pe exemplu se obține 30 80 52 / 71 64 51 / 62 81 49 / 90 65 32 ✔.

### 3. Secvența progresivă de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Șirul e crescător, deci termenii egali formează blocuri consecutive. Un bloc cu valoarea v este „bun” dacă are exact v termeni. O secvență progresivă este o succesiune de blocuri bune vecine, deci căutăm cea mai lungă succesiune de blocuri bune consecutive. Citim termenii unul câte unul, numărăm lungimea blocului curent; la sfârșitul unui bloc (termen nou diferit sau final de fișier), dacă blocul e bun îl adăugăm la lungimea curentă `lc` și actualizăm maximul, altfel `lc` redevine 0.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, y, cnt = 0, lc = 0, lmax = 0;
    f >> x; cnt = 1;
    while (f >> y)
    {
        if (y == x) cnt++;
        else
        {
            if (cnt == x) { lc += cnt; if (lc > lmax) lmax = lc; }
            else lc = 0;
            x = y; cnt = 1;
        }
    }
    if (cnt == x) { lc += cnt; if (lc > lmax) lmax = lc; }   // ultimul bloc
    cout << lmax;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** blocurile 1, 2 2 sunt bune (3), 3 nu e bun, 4 4 4 4 și 6×6 sunt bune (10), 7×3 nu e bun, 8×8 e bun (8). Se afișează **10** ✔.

## Ce merită reținut din varianta 4

- **Prioritatea operatorilor:** `*` și `/` înaintea lui `+`; paranteze pentru a schimba ordinea.
- **`strchr(s, c) + 1`** = subșirul care începe imediat după caracterul c.
- **Arbori:** suma numărului de fii = numărul de muchii = n − 1.
- **`repetă … până când C`** ⇔ `do … while (!C)`.
- **Șiruri crescătoare:** prelucrează pe blocuri de valori egale și nu uita ultimul bloc.

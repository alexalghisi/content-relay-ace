Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2020 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **c**, 4 – **b**, 5 – **b** (câte 4 puncte).

### 1. x mai mic decât y și decât z → c. `x+z<z+y && z+y>y+x`

Simplificăm: `x+z<z+y` ⇔ x < y, iar `z+y>y+x` ⇔ z > x. Împreună: x < y și x < z ✔.

- a. `z+x<x+y` ⇔ z < y și `x+z>z+y` ⇔ x > y. Greșit.
- b. `z+x<x+y` ⇔ z < y și `z+y>y+x` ⇔ z > x — nu compară x cu y. Greșit.
- d. `x+y<y+z` ⇔ x < z, dar `x+z>z+y` ⇔ x > y. Greșit.

### 2. Subprogramele cu aceeași valoare pentru n = 12 → d. f1, f2 și f3

- f1 calculează recursiv $n! = n \cdot (n-1)!$.
- f2 calculează $n \cdot (n-1) \cdot f2(n-2)$, adică tot n! (pentru n = 12 se oprește la f2(0) = 1).
- f3 calculează iterativ $n \cdot (n-1) \cdots 1 = n!$.

Toate trei returnează 12! = 479001600 (încape în `int`).

### 3. A șasea soluție → c. {căpșune, prune, cireșe}

Ordinea: caise, căpșune, prune, piersici, cireșe; câte 3, fără căpșune + piersici. După primele patru soluții urmează (caise, piersici, cireșe) — a 5-a —, apoi seturile care încep cu căpșune: (căpșune, prune, piersici) este interzis, deci a 6-a este **(căpșune, prune, cireșe)**.

### 4. Fiii nodului 7 → b. 3

Vecinii lui 7 sunt 2, 3, 5, 8. Cu rădăcina 5, tatăl lui 7 este 5, iar fiii sunt ceilalți vecini: **2, 3, 8**.

### 5. Numărul minim de noduri → b. 5

Componentele tare conexe formează o „ordine” fără cicluri: există o componentă în care nu intră arce din altă parte și una din care nu ies arce spre altă parte. Ca nodurile acestora să aibă și grad interior, și exterior nenul, fiecare dintre cele două componente are nevoie de un circuit intern, deci de cel puțin 2 noduri. A treia componentă poate avea un singur nod. Minim: 2 + 1 + 2 = **5** noduri, iar cu 5 noduri se pot pune până la 12 arce, deci 10 arce sunt posibile.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

m urcă, n coboară. Când m este multiplu de x, se adaugă la s, iar pasul lui m devine x; analog pentru n (dacă m ≠ n). Bucla se oprește când m depășește n.

#### a) Pentru 21, 38, 4 → **120**

| m | n | ce se adaugă | s |
|---|---|---|---|
| 21 | 38 | — | 0 |
| 22 | 37 | — | 0 |
| 23 | 36 | 36 (pn = 4) | 36 |
| 24 | 32 | 24 (pm = 4) și 32 | 92 |
| 28 | 28 | 28 (m = n, deci n nu se mai adaugă) | 120 |

Apoi m = 32 > n = 24 → se afișează **120**. *(6p)*

#### b) m = 20, x = 2020 → cel mai mic n: **2020**, cel mai mare n: **4039**

Pentru s = 2020 trebuie adunat o singură dată multiplul 2020. Pentru n < 2020 nu se întâlnește niciun multiplu (s = 0). Pentru n = 2020, n se adaugă imediat, iar apoi n devine 0 și bucla se oprește. Pentru n între 2021 și 4039, n coboară din 1 în 1 și întâlnește 2020 o singură dată (după care sare cu 2020 sub m). Pentru n ≥ 4040 se adaugă și 4040, deci suma depășește 2020. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, x, s = 0, pm = 1, pn = 1;
    cin >> m >> n >> x;
    do
    {
        if (m % x == 0) { s = s + m; pm = x; }
        if (n % x == 0 && m != n) { s = s + n; pn = x; }
        m = m + pm;
        n = n - pn;
    } while (m <= n);
    cout << s;
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una de alt tip *(6p)*

Datele de intrare garantează m ≤ n, deci prima iterație se execută oricum; putem folosi direct `cât timp m ≤ n`.

```text
citește m, n, x (numere naturale nenule, m≤n)
s ← 0; pm ← 1; pn ← 1
┌cât timp m ≤ n execută
│ ┌dacă m%x = 0 atunci s ← s + m; pm ← x
│ └■
│ ┌dacă n%x = 0 și m ≠ n atunci s ← s + n; pn ← x
│ └■
│  m ← m + pm
│  n ← n − pn
└■
scrie s
```

### 2. Structura parcare *(6p)*

```cpp
struct parcare
{
    int id, numar, pret;
} p[20];
```

Toate cele trei valori sunt numere naturale; `p` este un tablou de 20 de structuri.

### 3. Liniile cu primul sau ultimul element egal cu 2020 *(6p)*

Primul element al liniei i este `a[i][0]`, ultimul `a[i][6]`.

```cpp
for (i = 0; i < 5; i++)
    if (a[i][0] == 2020 || a[i][6] == 2020)
        cout << i << ' ';
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul duplicare *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul cu o putere a lui 10. O cifră impară se scrie de două ori (`c*p + c*p*10`, apoi p crește de 100 de ori), una pară o singură dată. Dacă nu am întâlnit nicio cifră impară, rezultatul este −1.

```cpp
void duplicare(int n, int &d)
{
    int p = 1, imp = 0;
    d = 0;
    while (n != 0)
    {
        int c = n % 10;
        if (c % 2 == 1)
        {
            d = d + c * p + c * p * 10;
            p = p * 100;
            imp = 1;
        }
        else
        {
            d = d + c * p;
            p = p * 10;
        }
        n = n / 10;
    }
    if (imp == 0) d = -1;
}
```

**Exemplu:** 2019 → 9 → 99, 1 → 1199, 0 → 01199, 2 → **201199** ✔.

### 2. Cuvinte lungi, apoi cuvinte scurte *(10p)*

Despărțim textul în cuvinte cu `strtok`, le memorăm, apoi le afișăm în două treceri: întâi cele cu cel puțin n litere, apoi celelalte. Dacă una dintre categorii este goală, afișăm doar mesajul.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    int n, k = 0, lungi = 0;
    char s[105], cuv[55][105];
    cin >> n;
    cin.get();                       // trecem de Enter-ul de după n
    cin.getline(s, 105);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        strcpy(cuv[k], p);
        if ((int)strlen(p) >= n) lungi++;
        k++;
        p = strtok(NULL, " ");
    }
    if (lungi == 0 || lungi == k) cout << "nu exista";
    else
    {
        for (int i = 0; i < k; i++)
            if ((int)strlen(cuv[i]) >= n) cout << cuv[i] << '\n';
        for (int i = 0; i < k; i++)
            if ((int)strlen(cuv[i]) < n) cout << cuv[i] << '\n';
    }
    return 0;
}
```

Test: n = 5, „el mergea tot spre aleea pietruita” → mergea, aleea, pietruita, apoi el, tot, spre ✔.

### 3. Valori din [1, n] care lipsesc din șir

#### a) Descrierea algoritmului *(2p)*

Șirul e ordonat descrescător, deci valorile lipsă sunt „golurile” dintre termeni. Citim primul termen p și începem cu contorul `n − p` (valorile p+1 … n). Apoi, pentru fiecare pereche de termeni consecutivi x > y (distincți), adăugăm `x − y − 1`. La final adăugăm `y − 1` (valorile 1 … y−1, unde y este ultimul termen).

**Eficiență:** o singură parcurgere, fără a memora șirul → timp **liniar** în numărul de termeni, memorie **constantă** (nu parcurgem intervalul [1, n], care poate fi uriaș).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("numere.in");
    long long n, x, y, nr;
    f >> n >> x;
    nr = n - x;
    while (f >> y)
    {
        if (y != x) nr += x - y - 1;
        x = y;
    }
    nr += x - 1;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 10, șirul 8 8 8 5 3 3 → (10 − 8) + (8 − 5 − 1) + (5 − 3 − 1) + (3 − 1) = 2 + 2 + 1 + 2 = **7** ✔.

## Ce merită reținut din model

- **Simplifică expresiile** înainte de a le compara: `x+z<z+y` ⇔ `x<y`.
- **n!** se poate calcula recursiv sau iterativ, cu același rezultat.
- **Fii într-un arbore dat prin muchii:** vecinii nodului, mai puțin tatăl.
- **Componente tare conexe:** cele „de la capete” au nevoie de un circuit intern.
- **Golurile dintr-un șir sortat** se numără din diferențele dintre termeni consecutivi.

Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **a**, 4 – **b**, 5 – **b** (câte 4 puncte).

### 1. Expresie echivalentă cu `(x<3)&&(y>=5)` → c. `!(!(x<3)||!(y>=5))`

Cu De Morgan: `!(!A || !B)` = `!!A && !!B` = `A && B` ✔.

- a. `!(A || B)` = `!A && !B` — exact invers. b. = `x<3 && y<5`. d. `!(!A && !B)` = `A || B`.

### 2. Completarea pentru cmmdc → b. `m,n,d-1`

Apelul pornește cu d = x și afișează primul d care divide ambele numere. Pentru a obține **cel mai mare** divizor comun, d trebuie să scadă: `f(m, n, d-1)`. Cum 1 divide orice număr, căutarea se oprește sigur.

### 3. A șasea soluție → a. (afine, caise, mere)

Submulțimi de cel puțin 2 fructe, în ordine lexicografică (afine, caise, lămâi, mere, pere). După (afine, caise, lămâi, pere), terminate seturile care încep cu (afine, caise, lămâi), urmează **(afine, caise, mere)**.

### 4. Un lanț elementar → b. 1,2,3,4

Un lanț elementar nu repetă noduri și folosește doar muchii existente. În desen există muchiile [1,2], [2,3], [3,4], deci 1, 2, 3, 4 este lanț elementar.

- a. și d. repetă nodul 1. c. ar avea nevoie de muchia [4,5], care nu apare în desen.

### 5. Numărul de fii ai celor șase noduri → b. 0,0,0,0,2,3

Un arbore cu 6 noduri are 5 muchii, iar fiecare muchie leagă un fiu de tatăl lui, deci **suma numerelor de fii este 5**. Doar varianta b are suma 5 (a: 6, c: 9, d: 6).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la 1 la n, se numără de câte ori se împarte i la k. Suma p este deci **exponentul lui k în descompunerea lui n!**.

#### a) Pentru 10 și 3 → **4**

Multiplii lui 3 până la 10: 3 (o dată), 6 (o dată), 9 (de două ori) → p = **4**. *(6p)*

#### b) k = 5, se afișează 10

Exponentul lui 5 în n! este [n/5] + [n/25] + … Pentru n = 45: 9 + 1 = 10 ✔; pentru n = 50 ar fi 10 + 2 = 12. Deci oricare trei dintre **45, 46, 47, 48, 49**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, p = 0, i = 1, x;
    cin >> n >> k;
    while (i <= n)
    {
        x = i;
        while (x % k == 0)
        {
            x = x / k;
            p = p + 1;
        }
        i = i + 1;
    }
    cout << p;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n, k (numere naturale, k număr prim)
p ← 0
┌pentru i ← 1, n execută
│  x ← i
│ ┌cât timp x%k = 0 execută
│ │  x ← [x/k]; p ← p + 1
│ └■
└■
scrie p
```

### 2. Data d este anterioară evenimentului *(6p)*

```cpp
d.luna < e.dev.luna || (d.luna == e.dev.luna && d.zi < e.dev.zi)
```

Data evenimentului se află pe al doilea nivel al structurii: `e.dev.luna`, `e.dev.zi`. Comparăm întâi luna, iar la aceeași lună, ziua.

### 3. Completarea tabloului *(6p)*

Pe „rama” formată de linia i și coloana i (din colțul stânga-sus) valorile sunt constante: 4 pe prima ramă, 3 pe a doua, …, 0 în colțul dreapta-jos. Elementul (i, j) aparține ramei min(i, j).

```cpp
for (i = 1; i <= 5; i++)
    for (j = 1; j <= 5; j++)
        if (i < j) a[i][j] = 5 - i;
        else a[i][j] = 5 - j;
```

Verificare: a[1][1] = 4, a[2][4] = 3, a[5][5] = 0 ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul Egal *(10p)*

Reținem prima cifră impară întâlnită și comparăm cu ea toate celelalte cifre impare.

```cpp
int Egal(int n)
{
    int prima = -1;
    while (n != 0)
    {
        int c = n % 10;
        if (c % 2 == 1)
        {
            if (prima == -1) prima = c;
            else if (c != prima) return 0;
        }
        n = n / 10;
    }
    return 1;
}
```

**Exemple:** 7727470 → cifrele impare 7, 7, 7, 7 → **1**; 7240 → doar 7 → **1**; 7921470 → 7, 9, 1, 7 → **0** ✔.

### 2. Cuvintele cu exact n litere *(10p)*

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    int n, gasit = 0;
    cin.getline(s, 101);
    cin >> n;
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if ((int)strlen(p) == n)
        {
            cout << p << '\n';
            gasit = 1;
        }
        p = strtok(NULL, " ");
    }
    if (!gasit) cout << "nu exista";
    return 0;
}
```

Test: „Fat Frumos este cel mai viteaz”, n = 6 → **Frumos** și **viteaz** ✔.

### 3. Primii n termeni ai șirului, în ordine inversă

#### a) Descrierea algoritmului *(2p)*

Din relația $f_i = f_{i-1} + f_{i-2} - f_{i-3}$ rezultă $f_i - f_{i-2} = f_{i-1} - f_{i-3}$: termenii de pe pozițiile pare cresc mereu cu $z - x$, iar cei de pe pozițiile impare cresc cu $z - x$ începând de la f3. Obținem formula directă:

- i par: $f_i = (i/2 - 1)(z - x) + y$;
- i impar: $f_i = [i/2] \cdot z - ([i/2] - 1) \cdot x$.

Scriem termenii pentru i = n, n − 1, …, 1, calculând fiecare cu formula.

**Eficiență:** fiecare termen se calculează în timp constant → timp **liniar** în n; nu memorăm șirul → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long n, x, y, z;
    cin >> n >> x >> y >> z;
    ofstream g("bac.txt");
    for (long long i = n; i >= 1; i--)
    {
        long long t;
        if (i % 2 == 0) t = (i / 2 - 1) * (z - x) + y;
        else t = (i / 2) * z - (i / 2 - 1) * x;
        g << t << ' ';
    }
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 10, x = 1, y = 2, z = 4 → **14 13 11 10 8 7 5 4 2 1** ✔.

## Ce merită reținut din varianta 1

- **De Morgan:** `!(!A || !B)` ⇔ `A && B`.
- **Cel mai mare divizor comun** prin căutare descrescătoare de la min(x, y).
- **Arbore:** suma numărului de fii = numărul de muchii = n − 1.
- **Exponentul lui k în n!**: $\sum [n/k^j]$.
- **Recurențe liniare:** caută o formulă directă ca să poți genera termenii în orice ordine.

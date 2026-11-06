Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2022 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **b**, 4 – **c**, 5 – **c** (câte 4 puncte).

### 1. Expresie echivalentă cu `x<=20 || x>22` → a. `!(x>20) || !(x<=22)`

`!(x>20)` înseamnă `x<=20`, iar `!(x<=22)` înseamnă `x>22`. Legate prin `||`, obținem exact expresia dată.

- b. `!(x>=20) && !(x>=22)` = `x<20` — ratează 20 și 23, 24, …. Greșit.
- c. `!(x<20 || x<=22)` = `x>22` — ratează x ≤ 20. Greșit.
- d. `!(x<20 && x<22)` = `x>=20` — include 21, 22. Greșit.

### 2. Apelul după care r = 2 → d. `f(18,19,r)`

Funcția se oprește (z = 1) când ambele numere sunt impare; altfel împarte ambele la 2, se autoapelează și apoi adună 1. Deci rezultatul = 1 + numărul de înjumătățiri necesare.

- `f(18,19)`: 18 e par → `f(9,9)`: ambele impare → z = 1; la revenire z = **2** ✔.
- `f(21,22)` → `f(10,11)` → `f(5,5)` → 3. `f(20,21)` → `f(10,10)` → `f(5,5)` → 3. `f(19,20)` → `f(9,10)` → `f(4,5)` → `f(2,2)` → `f(1,1)` → 5.

### 3. A șasea cutie → b. (drajeuri, jeleuri)

Ordinea: bomboane, drajeuri, jeleuri, praline; cel puțin două tipuri, fără jeleuri + praline. Soluțiile: (b, d), (b, d, j), (b, d, p), (b, j), [(b, j, p) interzisă], **(b, p)** – a 5-a, apoi **(drajeuri, jeleuri)** – a 6-a.

### 4. Graf fără cicluri cu 22 de muchii și 2 componente conexe → c. 24

O pădure cu n noduri și p componente conexe are **n − p** muchii. Deci n − 2 = 22 → **n = 24**.

### 5. a[2021][2022] pe diagonala secundară → c. 4044

Pe diagonala secundară (indici de la 0): `i + j = n − 1`. Deci 2021 + 2022 = 4043 = n − 1 → **n = 4044**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare k de la x la y se calculează $s = 1^2 + 2^2 + \dots + [\sqrt{k}]^2$. Când `s` se schimbă față de valoarea anterioară `u`, se afișează `s*nr`, unde `nr` = câte valori k s-au parcurs de la ultima afișare (inclusiv cea curentă).

#### a) Pentru 2 și 7 → **1\*1 5\*2**

| k | [√k] | s | nr | afișare |
|---|---|---|---|---|
| 2 | 1 | 1 | 1 | `1*1`, nr ← 0 |
| 3 | 1 | 1 | 1 | — |
| 4 | 2 | 5 | 2 | `5*2`, nr ← 0 |
| 5, 6, 7 | 2 | 5 | 1, 2, 3 | — |

Se afișează **1\*1 5\*2**. *(6p)*

#### b) y = 22, se afișează doar 30\*1

$30 = 1 + 4 + 9 + 16$, adică [√k] = 4, ceea ce se întâmplă pentru k ∈ [16, 24]. Ca să apară o singură afișare, chiar cu nr = 1, primul k (adică x) trebuie să aibă deja [√x] = 4, iar x < 22. Deci x ∈ {16, 17, 18, 19, 20, 21}, de exemplu **16** și **21**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int x, y, u = 0, nr = 0, s;
    cin >> x >> y;
    for (int k = x; k <= y; k++)
    {
        s = 0; nr = nr + 1;
        for (int t = 1; t <= (int)sqrt(k); t++)
            s = s + t * t;
        if (s != u)
        {
            cout << s << '*' << nr << ' ';
            u = s; nr = 0;
        }
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Înlocuirea structurii „pentru” interioare cu „cât timp” *(6p)*

```text
citește x, y (numere naturale, x<y)
u ← 0; nr ← 0
┌pentru k ← x, y execută
│  s ← 0; nr ← nr + 1
│  t ← 1
│ ┌cât timp t ≤ [√k] execută
│ │  s ← s + t*t
│ │  t ← t + 1
│ └■
│ ┌dacă s ≠ u atunci
│ │  scrie s, '*', nr, ' '
│ │  u ← s; nr ← 0
│ └■
└■
```

Barem: inițializarea contorului (`t ← 1`), condiția (`t ≤ [√k]`) și actualizarea (`t ← t + 1`) — câte 1p.

### 2. Fiii nodului 3 → **1, 7, 8** *(6p)*

În vectorul de „tați” (3, 5, 2, 2, 0, 5, 3, 3, 8), valoarea 3 apare pe pozițiile **1, 7, 8** — acestea sunt fiii lui 3.

### 3. Structura zbor *(6p)*

Din expresia `z.aterizare.ora` rezultă că `aterizare` este la rândul ei o structură, cu câmpurile `ora` și `minut`.

```cpp
struct moment
{
    int ora, minut;
};
struct zbor
{
    int cod;
    moment aterizare;
    int durata;
} z;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul mozaic *(10p)*

Toate cele trei benzi au aceeași lungime și sunt formate din plăcuțe întregi, deci lungimea trebuie să fie multiplu comun al lui x, y și z. Lungimea minimă este **cmmmc(x, y, z)**. Cum valorile sunt mici (≤ 200), putem căuta direct primul multiplu al lui x care se împarte la y și la z.

```cpp
int mozaic(int x, int y, int z)
{
    int L = x;
    while (L % y != 0 || L % z != 0)
        L = L + x;
    return L;
}
```

**Exemplu:** x = 30, y = 40, z = 20 → 30, 60, 90, **120** (se împarte la 40 și 20) ✔.

### 2. Numere cu același număr de cifre *(10p)*

Despărțim textul în cuvinte cu `strtok`. Un „cuvânt” care începe cu o cifră este număr; lungimea lui (`strlen`) este numărul de cifre. Reținem lungimea primului număr și comparăm cu celelalte.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin.getline(s, 101);
    int k = 0, ok = 1;
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if (p[0] >= '0' && p[0] <= '9')
        {
            int L = strlen(p);
            if (k == 0) k = L;
            else if (L != k) ok = 0;
        }
        p = strtok(NULL, " ");
    }
    if (ok) cout << k;
    else cout << "NU";
    return 0;
}
```

Test: „la zoo sunt 100 de cocori si 120 de pasari flamingo” → **3**; „… 100 de cocori si 10 pasari flamingo” → **NU** ✔.

### 3. Secvențe par-încadrate de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Termenii sunt cifre, deci există doar 5 valori pare posibile: 0, 2, 4, 6, 8. Cea mai lungă secvență care începe și se termină cu valoarea pară i merge de la **prima** până la **ultima** apariție a lui i. Citim fișierul o singură dată, reținând poziția curentă și, pentru fiecare cifră pară, prima poziție `p[i]` și ultima poziție `u[i]`. La final, lungimea maximă este max(u[i] − p[i] + 1), iar valorile cerute sunt cifrele pare care o ating (parcurse crescător, deci afișate în ordine crescătoare).

**Eficiență:** o singură parcurgere → timp **liniar** O(n); memoria este constantă (doi vectori de 10 elemente), indiferent de numărul de termeni.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int p[10] = {0}, u[10] = {0}, x, poz = 0, Lmax = 0;
    while (f >> x)
    {
        poz++;
        if (x % 2 == 0)
        {
            if (p[x] == 0) p[x] = poz;
            u[x] = poz;
        }
    }
    for (int i = 0; i <= 8; i += 2)
        if (p[i] && u[i] - p[i] + 1 > Lmax) Lmax = u[i] - p[i] + 1;
    cout << Lmax << '\n';
    for (int i = 0; i <= 8; i += 2)
        if (p[i] && u[i] - p[i] + 1 == Lmax) cout << i << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** pentru 4, prima poziție e 5 și ultima 13 → 9; pentru 8: 9 și 17 → 9; pentru 2: 4 și 8 → 5. Se afișează `9` și `4 8` ✔.

## Ce merită reținut din modelul 2022

- **Pădure:** n noduri, p componente conexe, fără cicluri → n − p muchii.
- **Diagonala secundară** (indici de la 0): `i + j = n − 1`.
- **Benzi de aceeași lungime din plăcuțe întregi** → cel mai mic multiplu comun.
- **Valori dintr-un domeniu mic** (cifre): vectori de apariții / prima și ultima poziție, în loc să memorezi șirul.

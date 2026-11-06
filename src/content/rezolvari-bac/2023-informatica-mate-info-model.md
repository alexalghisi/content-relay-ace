Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2023 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **d**, 3 – **a**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Valori pentru care `x%20==x/23` → b. {20, 41}

- x = 20: `20%20 = 0`, `20/23 = 0` → egale ✔.
- x = 41: `41%20 = 1`, `41/23 = 1` → egale ✔.

Celelalte variante conțin câte o valoare greșită: 40 (`0` vs `1`) în a și c, 60 (`0` vs `2`) în d.

### 2. Apelul care afișează de două ori 23 → d. `f(21,27)`

La fiecare apel se afișează media întreagă `(m+n)/2`, apoi m crește cu 1 și n scade cu 2, cât timp m ≤ n.

- f(21,27): 24, apoi f(22,25): **23**, f(23,23): **23**, f(24,21): 22 → „24 23 23 22” ✔.
- a. „21 21 20”; b. „23 22 22 21”; c. „23 22 22” — câte un singur 23 sau niciunul.

### 3. A șasea soluție → a. (mousse, castane, ganache)

Primele două straturi se aleg din {castane, mousse, șerbet}, iar al treilea este frișcă sau ganache. După cele patru soluții care încep cu castane, urmează cele care încep cu mousse: (mousse, castane, frișcă) — a 5-a, apoi **(mousse, castane, ganache)** — a 6-a.

- b. (mousse, șerbet, frișcă) este a 7-a. c. și d. încep cu șerbet, deci apar mai târziu.

### 4. Componenta tare conexă a vârfului 3 → c. 4

Circuitele 1 → 2 → 6 → 1 și 2 → 3 → 2 (precum și 1 → 3 → 6 → 1) arată că **1, 2, 3, 6** sunt în aceeași componentă. Din 3 se ajunge în 4, dar din 4 (care merge doar spre 5 și 7, iar 7 → 4) nu se mai revine în 3. Componenta are **4 vârfuri**.

### 5. Muchii eliminate pentru a obține un arbore → d. 5

- Ciclul eulerian trece o singură dată prin **fiecare muchie** → graful are 11 muchii.
- Ciclul hamiltonian trece o singură dată prin **fiecare nod** → graful are 7 noduri.

Un arbore cu 7 noduri are 6 muchii, deci eliminăm $11 - 6 = 5$ muchii (graful fiind conex, se poate).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare x din [p, q]: dacă x se divide cu m **sau** cu n se adună, iar dacă se divide cu **amândouă** se scade la loc. Rezultatul este suma numerelor divizibile cu **exact unul** dintre m și n.

#### a) Pentru 4, 3, 11, 25 → **90**

În [11, 25]: multiplii lui 4 sau 3 sunt 12, 15, 16, 18, 20, 21, 24. 12 și 24 se divid cu ambele, deci nu se numără. Suma: $15 + 16 + 18 + 20 + 21 = 90$. *(6p)*

#### b) m = 10, n = 15, p = 2 și se afișează 250

Numerele numărate (divizibile cu exact unul dintre 10 și 15): 10, 15, 20, 40, 45, 50, 70 (30 și 60 se divid cu ambele). Sumele parțiale: 10, 25, 45, 85, 130, 180, **250** (după 70). Următorul număr numărat este 75, deci $q \in [70, 74]$, de exemplu **70** și **74**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, p, q, s = 0, x;
    cin >> m >> n >> p >> q;
    for (x = p; x <= q; x++)
    {
        if (x % m == 0 || x % n == 0)
            s = s + x;
        if (x % m == 0 && x % n == 0)
            s = s - x;
    }
    cout << s;
    return 0;
}
```

#### d) Algoritm echivalent, cu test inițial *(6p)*

```text
citește m, n, p, q (numere naturale nenule, p ≤ q)
s ← 0
x ← p
┌cât timp x ≤ q execută
│ ┌dacă x%m = 0 sau x%n = 0 atunci s ← s + x
│ └■
│ ┌dacă x%m = 0 și x%n = 0 atunci s ← s − x
│ └■
│  x ← x + 1
└■
scrie s
```

### 2. Echipele în ordinea descrescătoare a rezultatelor *(6p)*

Cu doar trei echipe, putem ordona un tablou de indici prin comparații directe, fără a modifica datele.

```cpp
int o[3] = {0, 1, 2}, i, j, aux;
for (i = 0; i < 2; i++)
    for (j = i + 1; j < 3; j++)
        if (c[o[i]].rezultat < c[o[j]].rezultat)
        {
            aux = o[i]; o[i] = o[j]; o[j] = aux;
        }
for (i = 0; i < 3; i++)
    cout << c[o[i]].nume << ' ';
```

Accesul la câmpuri se face cu `c[indice].camp`, pentru că `c` este un **tablou** de structuri.

### 3. Ce se afișează → **7fantastic** *(6p)*

| Instrucțiune | Efect |
|---|---|
| `p=strchr(s1,' ')-s1` | spațiul este pe poziția **7** |
| `strcpy(s2,s1+p+1)` | s2 = „fistic” |
| `strcpy(s1+p-1,s2+2)` | de la poziția 6 („u”) se scrie „stic” → s1 = „plantastic” |
| `strcpy(s2+1,s1+2)` | după „f” se scrie „antastic” → s2 = „fantastic” |

Se afișează p urmat de s2: **7fantastic**.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul DoiTrei *(10p)*

Verificăm fiecare cifră; la prima cifră diferită de 2 și 3 returnăm 0. Folosim `do … while`, ca n = 0 (cifra 0) să returneze corect 0.

```cpp
int DoiTrei(int n)
{
    do
    {
        int c = n % 10;
        if (c != 2 && c != 3) return 0;
        n = n / 10;
    } while (n != 0);
    return 1;
}
```

**Verificare:** 22323 → 1 ✔; 3 → 1 ✔; 2023 → cifra 0 → 0 ✔.

### 2. Caruselele fără vecin tobogan *(10p)*

Pentru fiecare zonă cu codul 3 verificăm cei (cel mult) patru vecini cu latură comună: sus, jos, stânga, dreapta. Bordăm tabloul cu valori −1 (indici 0 și n+1), ca să nu tratăm separat marginile.

```cpp
#include <iostream>
using namespace std;

int a[102][102];

int main()
{
    int n, i, j, gasit = 0;
    cin >> n;
    for (i = 0; i <= n + 1; i++)
        for (j = 0; j <= n + 1; j++)
            a[i][j] = -1;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            cin >> a[i][j];
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            if (a[i][j] == 3 && a[i - 1][j] != 0 && a[i + 1][j] != 0
                && a[i][j - 1] != 0 && a[i][j + 1] != 0)
            {
                cout << i << ' ';
                gasit = 1;
            }
    if (!gasit) cout << "nu exista";
    return 0;
}
```

**Verificare pe exemplu:** caruselele bune sunt (2,1), (3,3), (3,4) și (6,6) → se afișează `2 3 3 6` ✔. Celelalte (de exemplu (1,6), vecin cu tobogan pe (2,6)) sunt excluse.

### 3. Șir p-ordonat

#### a) Descrierea algoritmului *(2p)*

O pereche (x, y) cu aceeași paritate este mereu bună; o pereche cu parități diferite e bună doar dacă x > y. Deci condiția se reduce la două comparații:

- orice **par** din prima jumătate > orice **impar** din a doua: `minPar1 > maxImpar2`;
- orice **impar** din prima jumătate > orice **par** din a doua: `minImpar1 > maxPar2`.

Citim primele n numere și reținem minimul par (p1) și minimul impar (i1); citim ultimele n și reținem maximul par (p2) și maximul impar (i2). Inițializăm minimele cu 1000001 și maximele cu −1 (astfel, dacă o categorie lipsește, condiția este automat adevărată). Răspunsul este DA dacă $p1 > i2$ și $i1 > p2$.

**Eficiență:** o singură parcurgere → timp **liniar**; doar 4 variabile, fără tablouri → memorie **O(1)**, în loc să comparăm toate cele $n^2$ perechi.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int n, x, i;
    int p1 = 1000001, i1 = 1000001, p2 = -1, i2 = -1;
    f >> n;
    for (i = 1; i <= n; i++)
    {
        f >> x;
        if (x % 2 == 0) { if (x < p1) p1 = x; }
        else            { if (x < i1) i1 = x; }
    }
    for (i = 1; i <= n; i++)
    {
        f >> x;
        if (x % 2 == 0) { if (x > p2) p2 = x; }
        else            { if (x > i2) i2 = x; }
    }
    if (p1 > i2 && i1 > p2) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe primul exemplu:** prima jumătate 22 37 21 8 15 → p1 = 8, i1 = 15; a doua 2 3 14 4 5 → p2 = 14, i2 = 5. $8 > 5$ și $15 > 14$ → `DA` ✔. În al doilea exemplu prima jumătate nu are impare (i1 = 1000001) și $p1 = 8 > i2 = 5$ → `DA` ✔.

## Ce merită reținut din model

- **`%` și `/`** dau rezultate întregi — verifică fiecare valoare din variantă.
- **Ciclu eulerian ↔ muchii, ciclu hamiltonian ↔ noduri.**
- **Arbore:** n noduri, n − 1 muchii.
- **„Exact unul dintre”:** adaugi la „sau” și scazi la „și”.
- **Condiții „pentru orice pereche”:** se reduc la comparația dintre un minim și un maxim.

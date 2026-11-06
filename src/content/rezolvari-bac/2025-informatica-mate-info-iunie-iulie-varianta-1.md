Rezolvarea completă a subiectului de **Bacalaureat 2025 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas și codul C++ complet, testat.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe se punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **a**, 3 – **b**, 4 – **c**, 5 – **b** (câte 4 puncte).

### 1. Aceeași valoare ca `2025%2019+6` → d. `2025%2021+8`

`2025%2019 = 6`, deci expresia dată valorează $6 + 6 = 12$. Pentru d: `2025%2021 = 4`, iar $4 + 8 = 12$ ✔.

- a. `2025/2020 + 5 = 1 + 5 = 6`.
- b. `2025/2021 + 8 = 1 + 8 = 9`.
- c. `2025%2020 + 5 = 5 + 5 = 10`.

### 2. Ce afișează `f(3)` → a. 1211213

Pentru `i` par se afișează **întâi** `i`, apoi se apelează `f(i-1)`; pentru `i` impar se apelează **întâi** `f(i-1)`, apoi se afișează `i`.

- f(1): i = 1 → f(0) (nimic), afișează **1** → „1”.
- f(2): i = 1 → „1”; i = 2 → „2” + f(1) = „21” → „121”.
- f(3): i = 1 → „1”; i = 2 → „21”; i = 3 → f(2) = „121”, apoi „3” → **„1211213”**.

### 3. Tablou bidimensional cu maximum 100 de numere reale → b. `float m[4][25];`

$4 \cdot 25 = 100$ elemente reale, două dimensiuni, fiecare între paranteze drepte proprii.

- a. `m[2,50]` nu este sintaxă C/C++ pentru două dimensiuni.
- c. sintaxă inexistentă.
- d. tablou **unidimensional** de **întregi**.

### 4. Penultimul cod generat → c. 975862

Codurile sunt generate în ordine lexicografică. Cele mai mari trei cifre impare distincte, în ordinea maximă, sunt **975**; cele mai mari trei cifre pare distincte sunt 8, 6, 4. Deci ultimul cod este **975864**, iar înaintea lui ultima cifră scade la următoarea valoare pară nefolosită: **975862**.

- a, b. încep cu 957 < 975 → mult mai devreme.
- d. 975846 < 975862, deci e generat înainte de c.

### 5. Numărul maxim de arce într-un graf orientat fără circuite cu 10 vârfuri → b. 45

Numerotăm vârfurile 1…10 și punem arcul (i, j) pentru **toate** perechile i < j. Orice arc merge spre un vârf cu număr mai mare, deci nu poate exista circuit. Numărul de arce este $\frac{10 \cdot 9}{2} = 45$. Mai mult nu se poate: între două vârfuri nu pot exista ambele arce (i, j) și (j, i), altfel ar forma un circuit.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare `i` începând de la `m`, bucla interioară găsește cel mai mic `x` cu $x^2 \ge i$. Dacă $x^2 = i$, `i` este **pătrat perfect** și se reține în `nr`, iar căutarea se oprește. Se afișează **primul pătrat perfect din intervalul [m, n]**, sau 0 dacă nu există.

#### a) Valorile 7 și 17 → **9**

7 și 8 nu sunt pătrate perfecte, 9 = $3^2$ este → se afișează **9**. *(6p)*

#### b) n = 25 și se afișează 25

25 trebuie să fie primul pătrat perfect ≥ m. Pătratul perfect anterior este 16, deci $m \in [17, 25]$, de exemplu **17** și **25**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, nr = 0, i, x;
    cin >> m >> n;
    i = m;
    do
    {
        x = 1;
        while (x * x < i)
            x = x + 1;
        if (x * x == i)
            nr = i;
        else
            i = i + 1;
    } while (i <= n && nr == 0);
    cout << nr;
    return 0;
}
```

„până când `i>n sau nr≠0`” se neagă după De Morgan: `while (i <= n && nr == 0)`.

#### d) Algoritm echivalent, cu test final în locul lui „cât timp” *(6p)*

Pornim cu `x ← 0` și creștem `x` până când $x^2 \ge i$. Cum $i \ge 1$, rezultatul este același ca în algoritmul dat.

```text
citește m, n (numere naturale nenule, m ≤ n)
nr ← 0; i ← m
┌repetă
│  x ← 0
│ ┌repetă
│ │  x ← x + 1
│ └până când x*x ≥ i
│ ┌dacă x*x = i atunci nr ← i
│ │altfel i ← i + 1
│ └■
└până când i > n sau nr ≠ 0
scrie nr
```

### 2. Subgraf eulerian fără noduri izolate *(6p)*

Un **subgraf** se obține eliminând noduri împreună cu toate muchiile incidente lor. Alegem nodurile **{1, 2, 3}**: între ele există muchiile **{[1,2], [1,3], [2,3]}** (un triunghi). Toate nodurile au gradul 2 (par), iar subgraful este conex → este **eulerian** ✔.

### 3. Structura prajitura *(6p)*

`p.cod` (întreg de două cifre), `p.pret` (real) și `p.informatii[0]` arată că `informatii` este un **tablou** de 3 numere naturale.

```cpp
struct prajitura
{
    int cod;
    float pret;
    int informatii[3];
} p;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul ascendent *(10p)*

Fie `c` cifra unităților lui n. Parcurgem toate numerele din [x, y] și verificăm dacă **toate** cifrele lor sunt ≥ c; dacă da, le adunăm. Folosim `do … while` ca și numărul 0 să-și verifice cifra (0).

```cpp
int ascendent(int n, int x, int y)
{
    int c = n % 10, s = 0;
    for (int i = x; i <= y; i++)
    {
        int t = i, ok = 1;
        do
        {
            if (t % 10 < c) ok = 0;
            t = t / 10;
        } while (t != 0);
        if (ok) s = s + i;
    }
    return s;
}
```

**Verificare:** pentru n = 827 (c = 7), x = 9, y = 800, se adună exact numerele formate doar din cifrele 7, 8, 9 din interval → **7893** ✔ (am rulat programul). Intervalul are cel mult 1000 de numere, deci soluția este rapidă.

### 2. Cuvinte semioglindite *(10p)*

Parcurgem textul cuvânt cu cuvânt (de la un început `i` până la spațiu sau sfârșit). Dacă lungimea `L` este pară, interschimbăm, în loc, litera de pe poziția `i+j` cu cea de pe poziția `i+L/2+j`, pentru $j = 0, \dots, L/2 - 1$ — asta schimbă între ele cele două jumătăți.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[201];
    cin.getline(s, 201);
    int n = strlen(s), i = 0, gasit = 0;
    while (i < n)
    {
        int j = i;
        while (j < n && s[j] != ' ') j++;   // cuvântul este s[i..j-1]
        int L = j - i;
        if (L % 2 == 0)
        {
            gasit = 1;
            int k = L / 2;
            for (int t = 0; t < k; t++)
            {
                char aux = s[i + t];
                s[i + t] = s[i + k + t];
                s[i + k + t] = aux;
            }
        }
        i = j + 1;
    }
    if (gasit) cout << s;
    else cout << "nu exista";
    return 0;
}
```

**Verificare pe exemplu:** „am facut fotografii unei flori mari” → `ma facut rafiifotog eiun flori rima` ✔ („fotografii” are 10 litere: „fotog” ↔ „rafii”).

### 3. Muzee convenabile

#### a) Descrierea algoritmului *(2p)*

Un muzeu cu intervalul [c, d] se suprapune cu intervalul disponibil [a, b] pe intervalul $[\max(a,c), \min(b,d)]$. Muzeul este convenabil dacă această suprapunere are cel puțin o oră: $\min(b,d) - \max(a,c) \ge 1$.

Citim întâi [a, b], apoi fiecare pereche [c, d], numerotând muzeele. Pentru fiecare muzeu convenabil creștem contorul și reținem numărul lui de ordine ca „ultimul convenabil”.

**Eficiență:** o singură parcurgere a fișierului, cu calcul în timp constant pentru fiecare muzeu → timp **liniar**; nu memorăm intervalele, ci doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int a, b, c, d, k = 0, cnt = 0, ultim = 0;
    f >> a >> b;
    while (f >> c >> d)
    {
        k++;
        int st = (a > c) ? a : c;
        int dr = (b < d) ? b : d;
        if (dr - st >= 1)
        {
            cnt++;
            ultim = k;
        }
    }
    cout << cnt << ' ' << ultim;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** intervalul disponibil 16–19; muzeele 15–18 (suprapunere 16–18 ✔), 17–21 (17–19 ✔), 19–21 (0 ore ✘), 18–20 (18–19 ✔), 12–13 (✘) → se afișează `3 4` ✔.

## Ce merită reținut din varianta 1

- **`%` și `/` cu numere apropiate:** `2025%2019` este diferența, `2025/2020` este 1.
- **Recursivitate în buclă:** urmărește pe rând f(1), f(2), f(3) — fiecare îl folosește pe cel anterior.
- **Graf orientat fără circuite:** maximum $\frac{n(n-1)}{2}$ arce.
- **Subgraf vs. graf parțial:** la subgraf elimini noduri (cu muchiile lor), la graf parțial doar muchii.
- **Suprapunerea a două intervale:** $[\max(\text{stânga}), \min(\text{dreapta})]$.

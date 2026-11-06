Rezolvarea completă a subiectului de **Bacalaureat 2021 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **d**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. x și y sunt ambele pare → a. `x%2==0 && (y+1)%2!=0`

`(y+1)%2!=0` înseamnă că y+1 este impar, adică **y este par**. Împreună cu `x%2==0`, expresia spune exact „x și y pare”.

- b. `(x-y)/2==0` — adevărată de exemplu pentru x = 3, y = 2. Greșit.
- c. și d. sunt adevărate și când x și y sunt **ambele impare**. Greșit.

### 2. Parametrii pentru care f(n,c) = 2021 → d. n=720721 și c=7

Funcția reconstruiește numărul n **fără cifrele egale cu c** (cifrele diferite de c sunt păstrate în ordine). Din 720721 eliminăm cifrele 7 → **2021** ✔.

- a. din 2021 fără 0 rămâne 221. b. din 200211 fără 2 rămâne 11. c. din 312032 fără 3 rămâne 1202.

### 3. Element de pe diagonala secundară → d. `m[42][57]`

Pentru 100 de linii și coloane (de la 0), elementele de pe diagonala secundară au `i + j = 99`: 42 + 57 = 99 ✔. Variantele a, b, c nu sunt nici măcar accesări corecte la un element al unui tablou bidimensional.

### 4. Un ciclu elementar → b. 1,2,3,1

Un ciclu este un lanț care se închide în nodul de plecare, iar un ciclu elementar nu repetă noduri (în afară de primul = ultimul). Muchiile [1,2], [2,3], [3,1] există ✔.

- a. nu se închide. c. repetă nodul 3. d. muchia [6,1] nu există.

### 5. Numărul minim de noduri pe nivelul 3 → c. 8

Dacă toate nodurile de pe un nivel au același număr de fii f, nivelul următor are de f ori mai multe noduri. Numerele de noduri pe niveluri trebuie să fie distincte, deci fiecare factor f ≥ 2: nivelurile au minim 1, 2, 4, **8** noduri.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

După eventuala interschimbare, x ≤ y. Bucla merge de la y în jos până la x (adică de y − x + 1 ori). La fiecare pas se afișează 1, apoi 2 dacă nr ≥ x, apoi 1; nr se triplează: 1, 3, 9, 27, …

#### a) Pentru 8 și 5 → **1111121121**

După interschimbare x = 5, y = 8, deci 4 pași, cu nr = 1, 3, 9, 27:

| pas | nr | nr ≥ 5? | afișare |
|---|---|---|---|
| 1 | 1 | nu | 11 |
| 2 | 3 | nu | 11 |
| 3 | 9 | da | 121 |
| 4 | 27 | da | 121 |

*(6p)*

#### b) x = 10, cifra 2 afișată de trei ori → **6** și **15**

- Dacă y ≥ 10: x = 10; la pasul k, nr = $3^{k-1}$ și nr ≥ 10 începând cu pasul 4 (nr = 27). Pentru 3 afișări ale lui 2 trebuie 6 pași: y − 10 + 1 = 6 → **y = 15**.
- Dacă y < 10: se interschimbă, x = y, y = 10. Pentru **y = 6** sunt 5 pași, nr = 1, 3, 9, 27, 81, iar nr ≥ 6 de 3 ori ✔.

*(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, y, nr, aux;
    cin >> x >> y;
    if (x > y) { aux = x; x = y; y = aux; }
    nr = 1;
    for (int i = y; i >= x; i--)
    {
        cout << 1;
        if (nr >= x) cout << 2;
        nr = nr * 3;
        cout << 1;
    }
    return 0;
}
```

Interschimbarea se face manual, cu o variabilă auxiliară. *Barem: variabile 1p, citire 1p, afișare 1p, decizii 2p, repetitivă 2p, interschimbare 1p, atribuiri 1p, corectitudine 1p.*

#### d) Structura „pentru” înlocuită cu una cu test inițial *(6p)*

```text
citește x, y (numere naturale nenule)
┌dacă x > y atunci x ↔ y
└■
nr ← 1
i ← y
┌cât timp i ≥ x execută
│  scrie 1
│ ┌dacă nr ≥ x atunci scrie 2
│ └■
│  nr ← nr * 3
│  scrie 1
│  i ← i − 1
└■
```

### 2. Următoarele două soluții după (ciocârlie, privighetoare, scatiu) *(6p)*

Ordinea: cinteză, ciocârlie, mierlă, privighetoare, scatiu; grupuri de cel puțin 2, fără mierlă + privighetoare. După (ciocârlie, privighetoare, scatiu) urmează **(ciocârlie, scatiu)**; apoi grupurile care încep cu mierlă: (mierlă, privighetoare) este interzis, deci urmează **(mierlă, scatiu)**.

### 3. Scăderea fracțiilor *(6p)*

$\dfrac{2020}{2021} - \dfrac{a}{b} = \dfrac{2020 \cdot b - 2021 \cdot a}{2021 \cdot b}$

```cpp
fs.a = 2020 * f.b - 2021 * f.a;
fs.b = 2021 * f.b;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul divPrim *(10p)*

Descompunem n în factori primi: pentru fiecare divizor d, numărăm de câte ori se împarte n la d (exponentul p). Dacă p este impar, adunăm d la s. Ne oprim la $d \cdot d \le n$; ce rămâne la final (dacă e > 1) este un factor prim cu exponentul 1, deci se adună și el.

```cpp
void divPrim(int n, int &s)
{
    s = 0;
    for (int d = 2; d * d <= n; d++)
    {
        int p = 0;
        while (n % d == 0) { p++; n = n / d; }
        if (p % 2 == 1) s = s + d;
    }
    if (n > 1) s = s + n;   // factor prim rămas, la puterea 1
}
```

**Exemple:** 360 = $2^3 \cdot 3^2 \cdot 5$ → s = 2 + 5 = **7** ✔; 16 = $2^4$ → **0** ✔.

### 2. Primele k cuvinte terminate în vocală *(10p)*

Reținem cuvintele potrivite într-un tablou de cuvinte (cel mult k). Dacă la final avem k cuvinte, le afișăm; altfel afișăm doar mesajul.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    int n, k, nr = 0;
    char s[11], rez[21][11];
    cin >> n >> k;
    for (int i = 0; i < n; i++)
    {
        cin >> s;
        if (nr < k && strchr("aeiou", s[strlen(s) - 1]) != NULL)
        {
            strcpy(rez[nr], s);
            nr++;
        }
    }
    if (nr == k)
        for (int i = 0; i < k; i++) cout << rez[i] << '\n';
    else cout << "nu exista";
    return 0;
}
```

Test pe exemplu (n = 5, k = 2): „norii” și „pluteau” se termină în vocală → se afișează **norii** și **pluteau** ✔.

### 3. Ultimii doi termeni consecutivi cu sufixul x

#### a) Descrierea algoritmului *(2p)*

x are exact 3 cifre, deci un număr y îl are pe x drept sufix exact când `y % 1000 == x`. Citim șirul o singură dată, păstrând termenul anterior `ant` și ultima pereche găsită (`pu`, `u`, inițial −1). Când atât `ant`, cât și `crt` au sufixul x, actualizăm perechea: `pu = ant`, `u = crt`. La final, dacă `u == -1`, afișăm „nu exista”.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul, doar câteva variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, crt, ant = -1, pu = -1, u = -1;
    f >> x;
    while (f >> crt)
    {
        if (ant != -1 && ant % 1000 == x && crt % 1000 == x)
        {
            pu = ant;
            u = crt;
        }
        ant = crt;
    }
    if (u == -1) cout << "nu exista";
    else cout << pu << ' ' << u;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** perechile consecutive cu sufixul 210 sunt (1210, 3210) și (3210, 15210); ultima este **3210 15210** ✔.

## Ce merită reținut din varianta 1

- **Paritate:** `(y+1)%2!=0` ⇔ y par.
- **Diagonala secundară** (n = 100, indici de la 0): `i + j = 99`.
- **Ciclu elementar:** se închide în nodul de plecare și nu repetă alte noduri.
- **Descompunere în factori primi:** nu uita factorul prim rămas după bucla cu `d*d <= n`.
- **Sufix de 3 cifre:** `y % 1000 == x`.

Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil mate-info**, sesiunea de rezervă, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **a**, 4 – **c**, 5 – **b** (câte 4 puncte).

### 1. Expresia cu valoarea 1 → a. `!(2>3 || 3>4)`

`2>3` și `3>4` sunt ambele false (0), deci `2>3 || 3>4` este 0, iar negația este **1**.

- b. `!(2>3)` este 1, dar `3>4` este 0 → `1 && 0 = 0`.
- c. `2>3` este 0 → toată conjuncția e 0.
- d. `4>3>2` se evaluează de la stânga: `4>3` dă 1, apoi `1>2` dă **0**. Capcană clasică!

### 2. Valoarea `f(56579)` → d. 3

Funcția parcurge cifrele de la dreapta la stânga: adună 1 pentru fiecare cifră **impară** și scade 1 pentru fiecare cifră **pară**.

Cifrele 5, 6, 5, 7, 9: patru impare (+4) și una pară (−1) → $4 - 1 = 3$.

### 3. Durata părții a doua, în secunde → a. `s.doi.sec+60*s.doi.min`

Variabila este `s`; câmpul `doi` este o structură cu câmpurile `min` și `sec`. Accesul merge „din exterior spre interior”: `s.doi.min`. Un minut are 60 de secunde. Variantele b (numele tipului în loc de variabilă), c și d (ordine inversată) sunt greșite.

### 4. Numărul de niveluri → c. 4

Vectorul de tați (3,4,0,3,4,8,2,3): rădăcina este **3** (tată 0).

| Nivel | Noduri |
|---|---|
| 0 | 3 |
| 1 | 1, 4, 8 (tatăl lor e 3) |
| 2 | 2, 5 (tatăl 4), 6 (tatăl 8) |
| 3 | 7 (tatăl 2) |

Niveluri 0…3 → **4 niveluri**.

### 5. Numărul minim de arce pentru tare conexitate → b. 2

Componentele tare conexe sunt {1, 2, 3} (circuitul 1→2→3→1) și {4, 5, 6, 7} (circuitul 4→5→6→7→4, plus 4→6). Între ele nu există niciun arc. Ca să se poată ajunge din fiecare componentă în cealaltă, trebuie **un arc în fiecare sens**, de exemplu (1,4) și (4,1) → **2 arce**. Un singur arc ar permite drumul doar într-un sens.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr `i` din intervalul [m, n], bucla interioară îi parcurge cifrele și numără câte sunt egale cu `k`. Se afișează **numărul total de apariții ale cifrei k** în numerele de la m la n.

#### a) Valorile 120, 126, 2 → **8**

120 (1), 121 (1), 122 (**2**), 123 (1), 124 (1), 125 (1), 126 (1) → $1+1+2+1+1+1+1 = 8$. *(6p)*

#### b) m = 2026, k = 6 și se afișează 2

2026 conține o cifră 6. Numerele 2027…2035 nu conțin 6. Următorul este **2036** (încă un 6) → total 2. La 2046 apare al treilea 6. Deci $n \in [2036, 2045]$, de exemplu **2036** și **2045**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, k, nr = 0, i, x;
    cin >> m >> n >> k;
    for (i = m; i <= n; i++)
    {
        x = i;
        do
        {
            if (x % 10 == k)
                nr = nr + 1;
            x = x / 10;
        } while (x != 0);
    }
    cout << nr;
    return 0;
}
```

Bucla „repetă … până când x = 0” devine `do … while (x != 0)` — astfel numărul 0 are și el o cifră (0). *Barem: declarare 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent cu „cât timp … execută” *(6p)*

```text
citește m, n, k (numere naturale nenule, m ≤ n, 0 ≤ k ≤ 9)
nr ← 0
i ← m
┌cât timp i ≤ n execută
│  x ← i
│ ┌repetă
│ │ ┌dacă x%10 = k atunci nr ← nr + 1
│ │ └■
│ │  x ← [x/10]
│ └până când x = 0
│  i ← i + 1
└■
scrie nr
```

Cele trei elemente punctate: inițializarea `i ← m`, condiția `i ≤ n` și actualizarea `i ← i + 1`.

### 2. Cifrurile generate înainte și după 16789 *(6p)*

Cifrele trebuie să fie distincte și să alterneze paritatea. 16789 are forma impar–par–impar–par–impar.

- **Înainte:** păstrăm prefixul 1678 și luăm ultima cifră impară mai mică decât 9, nefolosită (1 și 7 sunt folosite): cea mai mare este 5 → **16785**.
- **După:** cu prefixul 1678 nu mai există cifră impară > 9; cu prefixul 167 nu există cifră pară > 8; cu prefixul 16 a treia cifră (impară) poate crește de la 7 la **9**. Apoi cea mai mică cifră pară nefolosită: **0**, și cea mai mică impară nefolosită (1, 9 sunt folosite): **3** → **16903**.

### 3. Șirul „Prof. prenume nume” *(6p)*

Spațiul separă numele de prenume. Găsim spațiul cu `strchr`, apoi construim t: titlul, prenumele (după spațiu), un spațiu și numele (primele `p−s` caractere din s).

```cpp
char s[51], t[51] = "";
char *p;
p = strchr(s, ' ');
strcpy(t, "Prof. ");
strcat(t, p + 1);
strcat(t, " ");
strncat(t, s, p - s);
```

Exemplu: s = `POP Grigore` → `p` indică spațiul, `p+1` este `Grigore`, iar `p−s = 3` caractere sunt `POP` → t = `Prof. Grigore POP` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul pagini *(10p)*

Un set are $p + 3p = 4p$ pagini, cu p prim. Deci n trebuie să fie **multiplu de 4**, iar $n/4$ să fie **prim** (atenție la cazul n = 4: p = 1 nu este prim).

```cpp
int pagini(int n)
{
    if (n % 4 != 0) return 0;
    int p = n / 4;
    if (p < 2) return 0;
    for (int d = 2; d * d <= p; d++)
        if (p % d == 0) return 0;
    return 1;
}
```

**Verificare:** 44 = 4 · 11, 11 prim → 1 ✔; 48 = 4 · 12, 12 nu e prim → 0 ✔; 27 nu e multiplu de 4 → 0 ✔.

### 2. Coloane stabile *(10p)*

Calculăm suma fiecărei coloane într-un vector, apoi comparăm sumele coloanelor consecutive `j` și `j+1`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, a[21][21], s[21] = {0}, i, j, gasit = 0;
    cin >> m >> n;
    for (i = 0; i < m; i++)
        for (j = 0; j < n; j++)
        {
            cin >> a[i][j];
            s[j] = s[j] + a[i][j];
        }
    for (j = 0; j < n - 1; j++)
        if (s[j] == s[j + 1])
        {
            cout << j << ' ' << j + 1 << '\n';
            gasit = 1;
        }
    if (!gasit) cout << "nu exista";
    return 0;
}
```

**Verificare pe exemplu:** sumele coloanelor sunt 12, 12, 12, 2, 16, 2, 2 → perechile **0 1**, **1 2**, **5 6** ✔.

### 3. Termenii șirului în ordine inversă

#### a) Descrierea algoritmului *(2p)*

Observăm că termenii de rang par sunt puteri ale lui 2 ($f_{2k} = 2^k$), iar cei de rang impar sunt $f_{2k+1} = 3 \cdot 2^k - 1$ (numere impare). Așadar:

- dacă x este **impar**, el este $3 \cdot 2^k - 1$: îl scriem și trecem la termenul anterior, $(x+1)/3 = 2^k$;
- cât timp $x \ge 2$ ($x = 2^k$): scriem x și termenul anterior lui, $3 \cdot (x/2) - 1$, apoi $x \leftarrow x/2$;
- la final scriem $f_0 = 1$.

**Eficiență:** fiecare pas înjumătățește x, deci se fac $O(\log x)$ pași; nu memorăm șirul, ci doar variabila x → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;
    ofstream g("bac.txt");
    if (x % 2 == 1)
    {
        g << x << ' ';
        x = (x + 1) / 3;
    }
    while (x >= 2)
    {
        g << x << ' ' << 3 * (x / 2) - 1 << ' ';
        x = x / 2;
    }
    g << 1;
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** x = 8 → scrie 8 11, x = 4 → 4 5, x = 2 → 2 2, x = 1 → 1. Fișierul conține `8 11 4 5 2 2 1` ✔.

## Ce merită reținut din varianta 5

- **Comparații înlănțuite:** în C/C++, `a>b>c` **nu** înseamnă ce înseamnă în matematică.
- **Vector de tați:** rădăcina are tatăl 0; nivelurile se află urcând din tată în tată.
- **Tare conexitate:** între două componente tare conexe izolate trebuie câte un arc în fiecare sens.
- **Backtracking:** soluția următoare se obține modificând **ultima poziție care mai poate crește**.
- **Șiruri recurente:** caută forma generală a termenilor — de multe ori dă un algoritm logaritmic.

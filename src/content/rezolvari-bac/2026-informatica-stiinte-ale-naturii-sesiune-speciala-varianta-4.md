Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea specială, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **a**, 4 – **d**, 5 – **c** (câte 4 puncte).

### 1. Expresia egală cu 26 → d. `2026%100`

Restul împărțirii la 100 dă ultimele două cifre: `2026%100 = 26`.

- a. `(2026-26)/100 = 2000/100 = 20`.
- b. `2026/100 = 20` (împărțire întreagă).
- c. `(2026-26)%100 = 2000%100 = 0`.

### 2. 9 se compară cu 4 elemente din B → b. `(4,5,6,10,13)`

La interclasarea crescătoare, elementul 9 din A rămâne „curent” cât timp elementele din B sunt mai mici decât el (ele trec în rezultat), iar comparațiile se opresc la primul element din B mai mare decât 9. Deci în B trebuie să fie **exact 3 valori mai mici decât 9**, urmate de o valoare mai mare.

- b. 9 se compară cu 4, 5, 6 (trec în rezultat) și cu 10 → 9 trece în rezultat: **4 comparații** ✔.
- a. toate valorile din B sunt < 9 → 5 comparații.
- c, d. doar 2 valori < 9 (4, 7 respectiv 4, 8) → 3 comparații.

### 3. `ceil(20.26)` → a. 21

`ceil` rotunjește **în sus**, la cel mai mic întreg ≥ argumentul: 21. Varianta b (20) ar fi `floor`, iar c, d nu sunt întregi.

### 4. r = 2^26 → d. `n=n*n; e=e/2;`

Este **exponențierea rapidă**: privim exponentul în baza 2. La fiecare pas, dacă bitul curent al lui `e` este 1, înmulțim `r` cu `n`; apoi `n` devine $n^2$ (puterea corespunzătoare bitului următor) și `e` se înjumătățește.

Pentru $e = 26 = 11010_2$: n ia valorile $2, 2^2, 2^4, 2^8, 2^{16}$, iar r = $2^2 \cdot 2^8 \cdot 2^{16} = 2^{26}$ ✔.

- a, b. `n=n/2` micșorează baza. Greșit.
- c. `n=n*n; e=e-1` ar ridica baza la puteri uriașe, nu la $2^{26}$.

### 5. Pachetul de dinainte de (Predeal, Venus) → c. (Păltiniș, Olimp)

Cele două bucle generează perechile (i, j) în ordinea: (1,1), (1,2), (1,3), (2,1), (2,2), **(2,3)**, (3,1), … (Predeal, Venus) = (3,1), iar înaintea lui este (2,3) = **(Păltiniș, Olimp)**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare `d` cu $d^2 \le n$, bucla interioară împarte `n` la `d` cât timp se poate; `p` devine 1 dacă `d` a fost divizor. Așadar `nr` numără **factorii primi distincți** ai lui n. Ce rămâne la final (`n ≠ 1`) este un ultim factor prim, mai mare decât $\sqrt{n}$, care se adaugă și el.

#### a) Pentru n = 2600 → **3**

$2600 = 2^3 \cdot 5^2 \cdot 13$.

| d | Ce se întâmplă | n după | nr |
|---|---|---|---|
| 2 | se împarte de 3 ori | 325 | 1 |
| 3, 4 | nu divid | 325 | 1 |
| 5 | se împarte de 2 ori | 13 | 2 |
| 6 | $36 > 13$ → stop | 13 | 2 |

`n = 13 ≠ 1` → `nr = 3`. Se afișează **3**. *(6p)*

#### b) Două numere din [10, 99] pentru care se afișează 1

Trebuie un singur factor prim, adică numere de forma $x^k$, cu x prim: de exemplu **11** și **16** (alte variante: 13, 25, 27, 32, 49, 81 …). *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, nr = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            p = 1;
            n = n / d;
        }
        nr = nr + p;
        d = d + 1;
    }
    if (n != 1)
        nr = nr + 1;
    cout << nr;
    return 0;
}
```

#### d) A doua structură „cât timp” înlocuită cu test final *(6p)*

O structură cu test final execută corpul cel puțin o dată, însă aici `d` poate să nu fie divizor deloc. De aceea o punem într-un `dacă`, care tratează cazul inițial `n%d = 0`:

```text
citește n (număr natural nenul)
nr ← 0; d ← 2
┌cât timp d*d ≤ n execută
│  p ← 0
│ ┌dacă n%d = 0 atunci
│ │ ┌repetă
│ │ │  p ← 1; n ← [n/d]
│ │ └până când n%d ≠ 0
│ └■
│  nr ← nr + p; d ← d + 1
└■
┌dacă n ≠ 1 atunci
│  nr ← nr + 1
└■
scrie nr
```

### 2. Căutare binară cu comparațiile 26, 16, 21 *(6p)*

Tabloul (10, 16, 21, 26, 32, 38, 50), pozițiile 1..7:

1. mijlocul = poziția 4 → **26**; ca să mergem la stânga, $x < 26$;
2. intervalul 1..3, mijlocul = poziția 2 → **16**; ca să mergem la dreapta, $x > 16$;
3. intervalul 3..3 → **21**, ultima comparație.

Deci x poate fi orice număr din **[17, 25]**, de exemplu **17** și **21**. *(câte 3p)*

### 3. Clasificarea stelei după distanță *(6p)*

Magnitudinea este număr real, deci o declarăm `float` (sau `double`):

```cpp
float magnitudine;
if (distanta < 100)
    cout << "aproape";
else if (distanta >= 1000)
    cout << "departe";
else
    cout << "medie";
```

*Barem: declarare 1p, mesaje și corelarea lor cu cazurile 4p, corectitudine 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. Numărul de ordine al primului costum — pseudocod *(10p)*

Ne interesează **prima cifră pară de la stânga**. Parcurgând cifrele de la dreapta la stânga, numărăm cifrele (`k`) și reținem în `poz` poziția (numărată de la dreapta) a **ultimei** cifre pare întâlnite — aceasta este prima din stânga. La final, numărul de ordine de la stânga este $k - poz + 1$.

Folosim o structură cu test final ca să tratăm corect și n = 0 (o singură cifră, 0, pară).

```text
citește n (număr natural)
k ← 0; poz ← 0
┌repetă
│  k ← k + 1
│ ┌dacă n%10%2 = 0 atunci
│ │  poz ← k
│ └■
│  n ← [n/10]
└până când n = 0
scrie k − poz + 1
```

**Verificare:** n = 576798 → k = 6, ultima cifră pară întâlnită (de la dreapta) este 6, pe poziția 4 → $6 - 4 + 1 = 3$ ✔. n = 5700 → k = 4, cifra 0 de pe poziția 2 → $4 - 2 + 1 = 3$ ✔.

### 2. Interschimbarea minimului *(10p)*

Determinăm poziția `pmin` a minimului. Dacă minimul este par, îl interschimbăm cu primul element; dacă este impar, cu ultimul.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[51], i, pmin = 1, aux;
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    for (i = 2; i <= n; i++)
        if (v[i] < v[pmin])
            pmin = i;
    int poz;                       // poziția cu care interschimbăm
    if (v[pmin] % 2 == 0) poz = 1;
    else poz = n;
    aux = v[pmin]; v[pmin] = v[poz]; v[poz] = aux;
    for (i = 1; i <= n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** (8, 6, 2, 2, 7, 4) → minimul 2 (par, poziția 3) ↔ primul → **2 6 8 2 7 4** ✔; (8, 6, 1, 2, 7, 4) → minimul 1 (impar) ↔ ultimul → **8 6 4 2 7 1** ✔.

### 3. Pachetele livrate, în ordine descrescătoare

#### a) Descrierea algoritmului *(2p)*

Relația șirului este $a_{k+1} = 2a_k + 1$ (pornind de la 3), deci, mergând înapoi, $a_k = [(a_{k+1} - 1)/2]$. Scriem valoarea citită, apoi calculăm pe rând termenul anterior cu această formulă, cât timp valoarea este mai mare decât 3. Excepția este începutul șirului: înaintea lui 3 vine 0 (nu 1), așa că după 3 scriem direct 0. Dacă se citește 0, se scrie doar 0.

**Eficiență:** valorile se înjumătățesc la fiecare pas → doar $O(\log n)$ pași (cel mult ~30 pentru $10^9$); nu memorăm șirul, ci o singură variabilă → memorie O(1).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ofstream g("bac.txt");
    int y;
    cin >> y;
    while (y > 3)
    {
        g << y << ' ';
        y = (y - 1) / 2;
    }
    if (y == 3)
        g << 3 << ' ';
    g << 0;
    g.close();
    return 0;
}
```

**Verificare:** 127 → **127 63 31 15 7 3 0** ✔; 0 → 0; 3 → 3 0.

## Ce merită reținut din varianta 4

- **`%100`** dă ultimele două cifre, **`/100`** le elimină.
- **`ceil`** rotunjește în sus, **`floor`** în jos.
- **Exponențiere rapidă:** `if(e%2) r*=n; n*=n; e/=2;`.
- **Factori primi distincți:** împarte cât timp se poate și nu uita factorul rămas > √n.
- **Șir recurent parcurs invers:** inversează formula ($a_k = (a_{k+1}-1)/2$) și tratează separat primii termeni.

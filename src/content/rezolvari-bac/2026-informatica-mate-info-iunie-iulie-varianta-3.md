Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **b**, 4 – **a**, 5 – **b** (câte 4 puncte).

### 1. Aceeași paritate pentru x și y → c. `(x+y)%2==0`

Două numere au aceeași paritate exact când suma lor este pară: par + par = par, impar + impar = par, iar par + impar = impar.

- a. `(x*y)%2==0` — e adevărat și pentru 2 și 3 (parități diferite). Greșit.
- b. `x%2==0 && y%2==0` — ratează cazul „ambele impare”. Greșit.
- d. `!(x%2==y%2)` — este exact **negația** cerinței. Greșit.

### 2. Ce argumente afișează 7 la apelul `f(35,17)` → d. `n,d-1`

Funcția afișează `d` când `n%d==0`. Cu `f(n, d-1)`, `d` scade: 17, 16, 15, …, 8, 7. Primul divizor al lui 35 întâlnit este **7**, deci se afișează 7.

- c. `n,d+1` ar urca: 17, 18, …, 35 → afișează 35.
- a/b modifică și `n`, deci nu mai testăm divizorii lui 35.

### 3. Al 10-lea termen al progresiei → b. `p.prim+9*p.ratie`

Termenul general: $a_k = a_1 + (k-1)\cdot r$, deci $a_{10} = a_1 + 9r$. Câmpurile unei structuri se accesează cu **variabilă.câmp**: `p.prim`, `p.ratie`. Variantele a, c, d inversează ordinea sau folosesc numele tipului (`progresie`) în loc de numele variabilei.

### 4. Vârfuri cu |grad intern − grad extern| = 1 → a. 2

Gradul **extern** al unui vârf = suma pe **linie**; gradul **intern** = suma pe **coloană**.

| Vârf | Grad extern (linia) | Grad intern (coloana) | Diferență |
|---|---|---|---|
| 1 | 2 | 2 | 0 |
| 2 | 1 | 2 | **1** |
| 3 | 3 | 2 | **1** |
| 4 | 2 | 2 | 0 |
| 5 | 2 | 2 | 0 |

Doar vârfurile 2 și 3 îndeplinesc condiția → **2 vârfuri**.

### 5. Numărul maxim de muchii adăugate pentru un graf eulerian → b. 6

Muchiile din desen: [1,2], [1,3], [1,5], [2,3], [3,6], [5,6] — 6 muchii; nodul 4 este izolat.

Un graf este **eulerian** dacă este conex (fără a lua în calcul nodurile izolate) și **toate gradele sunt pare**. Cu 6 noduri, gradul maxim posibil este 5 (impar), deci gradul maxim par este **4**. Suma gradelor ≤ $6 \cdot 4 = 24$, deci graful final are cel mult $24 / 2 = 12$ muchii.

Se poate atinge 12: eliminăm din graful complet $K_6$ o potrivire de 3 muchii care **nu** există în desen, de exemplu [1,4], [3,5], [2,6]. Graful rămas are toate gradele 4, este conex și conține toate muchiile inițiale. Muchii adăugate: $12 - 6 = 6$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Algoritmul ține în `x` ultima valoare care a fost „record” (mai mare decât toate dinainte). Dacă `y` depășește recordul, îl adună la `s` și devine noul record; dacă `y` este **egal** cu recordul, îl scade din `s`.

#### a) Valoarea afișată pentru 8, 3, 1, 5, 2, 4, 5, 5, 7 → **5**

| y | Condiție | s | x |
|---|---|---|---|
| 3 | 3 > 0 | 3 | 3 |
| 1 | — | 3 | 3 |
| 5 | 5 > 3 | 8 | 5 |
| 2 | — | 8 | 5 |
| 4 | — | 8 | 5 |
| 5 | 5 = 5 | 3 | 5 |
| 5 | 5 = 5 | −2 | 5 |
| 7 | 7 > 5 | 5 | 7 |

Se afișează **5**. *(6p)*

#### b) n = 3 și se afișează 0

Un exemplu: **4, 4, 1**. Primul 4 este record → `s = 4`; al doilea 4 este egal cu recordul → `s = 0`; 1 este mai mic → nu se schimbă nimic. Orice set de forma `x, x, y` sau `x, y, x` cu `y < x` este corect. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, y, s = 0, x = 0, p = 1;
    cin >> n;
    do
    {
        cin >> y;
        if (y > x)
        {
            s = s + y;
            x = y;
        }
        else if (x == y)
            s = s - y;
        p = p + 1;
    } while (p <= n);
    cout << s;
    return 0;
}
```

Structura **repetă … până când p > n** devine în C++ `do { … } while (p <= n);` — condiția se **neagă**. *Barem: variabile 1p, citire 1p, afișare 1p, repetitivă 2p, decizii 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent cu „pentru … execută” *(6p)*

```text
citește n (număr natural nenul)
s ← 0; x ← 0
┌pentru p ← 1, n execută
│  citește y (număr natural nenul)
│ ┌dacă y > x atunci
│ │  s ← s + y; x ← y
│ │altfel
│ │ ┌dacă x = y atunci s ← s − y
│ │ └■
│ └■
└■
scrie s
```

Contorul `p` merge de la 1 la n, iar actualizarea lui este automată, deci atribuirea `p ← p + 1` dispare. Bucla se execută tot de `n` ori (n ≥ 1).

### 2. Backtracking — a șasea și a șaptea soluție *(6p)*

Mulțimea ordonată: {broșură, ghid, pliant, revistă}; seturi de cel mult 3 elemente, crescătoare, fără pliant și revistă împreună.

După **(broșură, pliant)**, următoarea extindere ar fi (broșură, pliant, revistă) — **interzisă**. Se trece la (broșură, revistă), apoi, terminate seturile care încep cu broșură, la (ghid).

- a 6-a soluție: **(broșură, revistă)**
- a 7-a soluție: **(ghid)**

### 3. Completarea tabloului 5×5 *(6p)*

Valorile cresc de la 0 la 24 **pe coloane, „în șerpuire”**: coloanele pare (0, 2, 4) cresc de sus în jos, cele impare (1, 3) cresc de jos în sus. Coloana `j` conține valorile $5j, \dots, 5j+4$.

- coloană pară: `a[i][j] = 5*j + i`
- coloană impară: `a[i][j] = 5*j + 4 - i`

```cpp
for(i=0;i<5;i++)
    for(j=0;j<5;j++)
        if (j % 2 == 0) a[i][j] = 5 * j + i;
        else a[i][j] = 5 * j + 4 - i;
```

Verificare: `a[0][1] = 5 + 4 − 0 = 9`, `a[4][1] = 5`, `a[2][2] = 12` ✔. Am folosit 2 atribuiri (maxim permis: 4).

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul ImparPar *(10p)*

Parcurgem cifrele de la dreapta la stânga. Construim **separat** numărul format din cifrele impare și cel format din cifrele pare, păstrând ordinea lor (adăugăm fiecare cifră nouă **în fața** numărului construit, cu ajutorul unei puteri a lui 10). La final lipim numărul par după cel impar: `impar * 10^(nr. cifre pare) + par`.

```cpp
int ImparPar(int n)
{
    int imp = 0, par = 0, pi = 1, pp = 1;
    while (n != 0)
    {
        int c = n % 10;
        if (c % 2 == 1) { imp = c * pi + imp; pi = pi * 10; }
        else            { par = c * pp + par; pp = pp * 10; }
        n = n / 10;
    }
    return imp * pp + par;
}
```

**Urmărire pentru n = 19472:** 2 → par = 2; 7 → imp = 7; 4 → par = 42; 9 → imp = 97; 1 → imp = 197. Rezultat: $197 \cdot 100 + 42 = 19742$ ✔.

Cum $n < 10^9$ și rezultatul are aceleași cifre, totul încape în `int`.

### 2. Verificarea alternanței vocală/consoană *(10p)*

Cuvântul alternează dacă oricare două litere vecine au **tip diferit** (una vocală, cealaltă consoană). Comparăm tipul fiecărei litere cu tipul celei dinainte.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin >> s;
    int ok = 1, n = strlen(s);
    for (int i = 1; i < n && ok; i++)
    {
        bool v1 = strchr("aeiou", s[i - 1]) != NULL;
        bool v2 = strchr("aeiou", s[i]) != NULL;
        if (v1 == v2) ok = 0;   // două vocale sau două consoane consecutive
    }
    if (ok) cout << "alterneaza";
    else cout << "nu alterneaza";
    return 0;
}
```

Test: „pas” → p (consoană), a (vocală), s (consoană) → **alterneaza**; „aer” → a, e sunt două vocale → **nu alterneaza**.

### 3. Rezultate motivante la șah și go

#### a) Descrierea algoritmului *(2p)*

Citim perechile pe rând, fără să le memorăm. Păstrăm doar **ultima poziție** obținută la șah (`ups`) și la go (`upg`), inițial −1 (adică „încă niciun concurs”), și doi contori `ns`, `ng`. Pentru fiecare pereche (p, c): dacă e concurs de șah și `p < ups`, creștem `ns`, apoi `ups = p`; analog pentru go cu `upg` și `ng`.

**Eficiență:** fiecare valoare se citește o singură dată → timp **liniar** O(n); folosim doar câteva variabile simple → memorie **O(1)**, independentă de numărul de rezultate.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int p, c, ups = -1, upg = -1, ns = 0, ng = 0;
    while (f >> p >> c)
    {
        if (c == 1)
        {
            if (ups != -1 && p < ups) ns++;
            ups = p;
        }
        else
        {
            if (upg != -1 && p < upg) ng++;
            upg = p;
        }
    }
    cout << ns << ' ' << ng;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** șah: 6, 7, **3**, 4, 5, **1**, 2, **1** → 3 rezultate motivante; go: 8, **5**, **1**, 4 → 2. Se afișează `3 2` ✔.

## Ce merită reținut din varianta 3

- **Paritate:** „aceeași paritate” ⇔ `(x+y)%2==0`.
- **Grafuri orientate:** linia dă gradul extern, coloana gradul intern.
- **Grafuri euleriene:** toate gradele pare + conexitate; numărul maxim de muchii se obține plecând de la gradul par maxim.
- **Tablouri „în șerpuire”:** scrie formula separat pentru coloanele (sau liniile) pare și impare.
- **Probleme de eficiență:** citește și prelucrează din mers, cu „ultima valoare” memorată pentru fiecare categorie.

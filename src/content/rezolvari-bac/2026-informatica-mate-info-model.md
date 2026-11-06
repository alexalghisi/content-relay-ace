Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2026 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **b**, 3 – **a**, 4 – **a**, 5 – **c** (câte 4 puncte).

### 1. Valoarea expresiei `20/25*20/2` → a. 0

Toți operanzii sunt întregi, deci `/` este **împărțire întreagă**, evaluată de la stânga la dreapta: `20/25 = 0`, apoi `0*20 = 0`, `0/2 = 0`.

- b, c sunt rezultate reale — imposibile în aritmetica întreagă.
- d. 8 ar fi rezultatul calculului matematic $\frac{20}{25}\cdot\frac{20}{2}$, cu numere reale. Greșit.

### 2. Valoarea `f(0,4,x)` → b. 2

Funcția împarte intervalul [s,d] în două jumătăți până ajunge la câte un singur element și numără pozițiile `d` pentru care `v[d]==2*d`.

| i | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| v[i] | 2 | 0 | 2 | 6 | 8 |
| 2·i | 0 | 2 | 4 | **6** | **8** |

Doar pozițiile 3 și 4 respectă condiția → **2**.

### 3. Penultimul set generat → a. (șah, lego, scrabble)

Ordinea elementelor: jenga, kendama, lego, șah, scrabble. Seturile sunt generate în ordine lexicografică după această ordine, deci ultimele seturi încep cu **șah** (scrabble nu poate fi primul).

Dacă șah e primul, nu putem alege jenga sau kendama (șahul ar fi înaintea lor). Rămân doar lego și scrabble: **(șah, lego, scrabble)**, apoi **(șah, scrabble, lego)** — ultimul. Penultimul este deci (șah, lego, scrabble).

- b. este **ultimul** set.
- c. și d. încep cu lego, deci apar înaintea seturilor care încep cu șah.

### 4. Numărul de locuitori ai primei zone → a. `z[0].densitate*z[0].suprafata`

Densitatea = locuitori / suprafață, deci locuitori = densitate · suprafață. `z` este un **tablou de structuri**: întâi indexăm (`z[0]`), apoi accesăm câmpul (`.densitate`). Variantele b, c, d au sintaxa inversată sau inexistentă.

### 5. Celelalte două muchii → c. [2,3] și [4,5]

Lanțul 3, 7, 4, 5, 2, 1 folosește muchiile [3,7], [7,4], [4,5], [5,2], [2,1]. Dintre ele, **[4,5]** lipsește din lista dată, deci trebuie să fie una dintre cele două muchii (elimină b și d).

- a. Cu [1,6] am obține lanțul 3, 7, 4, 5, 2, 6, 1 de lungime 6 > 5, deci lanțul dat n-ar mai fi de lungime maximă. Greșit.
- c. Cu [2,3]: nodurile 1 și 6 au gradul 1 și sunt legate doar de 2, deci nu pot fi ambele în același lanț (ar trebui ca 2 să fie între ele, iar lanțul s-ar opri acolo). Un lanț nu poate trece prin toate cele 7 noduri, deci lungimea maximă rămâne 5 ✔.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară este **algoritmul lui Euclid prin scăderi**: la final `x` = cmmdc(m, y). Bucla exterioară testează, pe rând, valorile n, n−1, n−2, … și se oprește la prima pentru care cmmdc(m, valoare) ≠ 1. Cum `n` este decrementat după ce s-a pus `y ← n`, se afișează `n+1`, adică exact valoarea testată.

**Concluzie:** se afișează cel mai mare număr ≤ n care are un divizor comun (> 1) cu m.

#### a) Valorile 27 și 38 → **36**

cmmdc(27, 38) = 1, cmmdc(27, 37) = 1, cmmdc(27, 36) = 9 ≠ 1 → se afișează **36**. *(6p)*

#### b) m = 5 și se afișează 10

Trebuie ca 10 să fie primul număr, coborând de la n, care are divizor comun cu 5 — adică primul multiplu de 5. Numerele 11, 12, 13, 14 nu sunt multipli de 5, iar 15 este. Deci $n \in [10, 14]$, de exemplu **10** și **14**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, x, y;
    cin >> m >> n;
    do
    {
        x = m; y = n; n = n - 1;
        do
        {
            if (x > y) x = x - y;
            else y = y - x;
        } while (y != 0);
    } while (x == 1);
    cout << n + 1;
    return 0;
}
```

„repetă … până când C” devine `do { … } while (!C);`. *Barem: declarare 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm echivalent, cu test inițial pentru a doua structură *(6p)*

La intrarea în bucla interioară `y = n ≥ 2`, deci `y ≠ 0` și corpul s-ar executa oricum cel puțin o dată. Putem folosi direct condiția `y ≠ 0`:

```text
citește m, n (numere naturale, 1<m<n)
┌repetă
│  x ← m; y ← n; n ← n − 1
│ ┌cât timp y ≠ 0 execută
│ │ ┌dacă x > y atunci x ← x − y
│ │ │altfel y ← y − x
│ │ └■
│ └■
└până când x ≠ 1
scrie n+1
```

### 2. Rădăcini pentru care nodul 8 are doi „frați” *(6p)*

Nodul 8 are doi frați dacă tatăl lui are exact **3 fii**. Vecinii lui 8 sunt 2, 5, 6, 7 — tatăl trebuie să fie unul dintre ei.

- **Rădăcina 2:** fiii lui 2 sunt 1, 8, 9 → 8 are frații 1 și 9 ✔.
- **Rădăcina 6:** fiii lui 6 sunt 3, 4, 8 → 8 are frații 3 și 4 ✔.

Nodurile 5 și 7 au gradul 1, deci ca tată al lui 8 ar avea un singur fiu. Răspuns: **2** și **6**.

### 3. Numărul de telefon format local *(6p)*

Numărul local = prefixul național + tot ce urmează după paranteza `)`. Găsim `)` cu `strchr`, apoi copiem și concatenăm.

```cpp
char tI[21], pN[21], tL[21];
// ... tI și pN au valori, tL este vid
strcpy(tL, pN);
strcat(tL, strchr(tI, ')') + 1);
```

Exemplu: `(+254)722123456` și `0` → `strchr` dă `)722123456`, sărim peste `)` → tL = `0` + `722123456` = `0722123456` ✔. Dacă pN e vid, tL = `2121234567` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul Plus *(10p)*

Secvența 25 înseamnă o cifră 5 care are **imediat la stânga** cifra 2. Parcurgem cifrele de la dreapta la stânga; pentru fiecare cifră 5 verificăm cifra următoare (`m/10%10`) și, dacă este 2, o înlocuim cu 6. Reconstruim numărul cu o putere a lui 10, ca să păstrăm ordinea cifrelor și zerourile de la final.

```cpp
void Plus(int &n)
{
    int m = n, r = 0, p = 1;
    while (m != 0)
    {
        int c = m % 10;
        if (c == 5 && m / 10 % 10 == 2)
            c = 6;
        r = r + c * p;
        p = p * 10;
        m = m / 10;
    }
    n = r;
}
```

**Urmărire pentru n = 202535250:** cifrele de la dreapta: 0, 5 (stânga 2 → 6), 2, 5 (stânga 3 → rămâne 5), 3, 5 (stânga 2 → 6), 2, 0, 2. Rezultat: **202635260** ✔. Parametrul este transmis prin **referință** (`int &n`), deoarece rezultatul se furnizează prin el.

### 2. Eliminarea diagonalei secundare *(10p)*

Cu indici de la 1, elementul de pe diagonala secundară din linia `i` este pe coloana `n+1−i`. Pe fiecare linie deplasăm cu o poziție spre stânga elementele aflate după el; tabloul rămâne cu `n−1` coloane.

```cpp
#include <iostream>
using namespace std;

int a[103][103];

int main()
{
    int n, i, j;
    cin >> n;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            cin >> a[i][j];
    for (i = 1; i <= n; i++)
        for (j = n + 1 - i; j < n; j++)
            a[i][j] = a[i][j + 1];
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j < n; j++)
            cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

**Verificare:** pe linia 2 (36 16 48 52) se elimină coloana 3 (48) → 36 16 52 ✔; pe linia 1 se elimină ultimul element (26) — nu se deplasează nimic.

### 3. Cea mai mare putere a lui 26 care divide n!

#### a) Descrierea algoritmului *(2p)*

$26 = 2 \cdot 13$. În $n!$ factorul 2 apare de mult mai multe ori decât factorul 13, deci exponentul lui 26 este egal cu **exponentul lui 13** în $n!$. După formula lui Legendre:

$$p = \left[\frac{n}{13}\right] + \left[\frac{n}{13^2}\right] + \left[\frac{n}{13^3}\right] + \dots$$

Împărțim repetat n la 13 și adunăm câturile până devin 0.

**Eficiență:** numărul de pași este $\log_{13} n$ (cel mult 9 pentru $n \le 10^9$) → timp **logaritmic**; folosim doar două variabile → memorie **O(1)**. Nu calculăm factorialul (ar fi uriaș) și nici nu parcurgem toate numerele 1…n.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    int n, p = 0;
    cin >> n;
    while (n >= 13)
    {
        n = n / 13;
        p = p + n;
    }
    ofstream g("bac.txt");
    g << p;
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 28 → 28 / 13 = 2, 2 / 13 = 0 → p = **2** ✔.

## Ce merită reținut din model

- **Împărțirea întreagă:** `int / int` taie zecimalele la fiecare pas, de la stânga la dreapta.
- **Tablou de structuri vs. structură cu tablouri:** `z[0].camp` vs. `m.camp[0]`.
- **Euclid prin scăderi:** se oprește când unul dintre numere devine 0; celălalt este cmmdc.
- **Șiruri:** `strchr` + `strcpy` + `strcat` rezolvă rapid extragerile de subșiruri.
- **Exponentul unui prim în n!:** formula lui Legendre, $\sum [n/p^k]$.

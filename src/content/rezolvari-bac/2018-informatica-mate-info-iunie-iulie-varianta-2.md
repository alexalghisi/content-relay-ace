Rezolvarea completă a subiectului de **Bacalaureat 2018 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Expresie echivalentă cu `!(x%y!=0 || y<2)` → c. `(x/y)*y==x && y>=2` *(4p)*

După legile lui De Morgan, negația unui „sau” devine „și” între negații: `x%y==0 && y>=2`. Iar `x%y==0` (y divide x) este echivalent cu `(x/y)*y==x` — împărțirea întreagă nu pierde nimic exact când restul e 0.

- a. `x%y==y%x` nu înseamnă divizibilitate. Greșit.
- b, d. Folosesc `||`, deci sunt adevărate în prea multe cazuri. Greșit.

### 2. Algoritmul în pseudocod

Pentru fiecare cifră x a lui |n|, bucla „pentru” adună x de x ori, adică adaugă $x^2$. Algoritmul calculează deci **suma pătratelor cifrelor** lui n.

#### a) Pentru n = 2018 → **69** *(6p)*

$8^2 + 1^2 + 0^2 + 2^2 = 64 + 1 + 0 + 4 =$ **69**.

#### b) Patru numere din [10, 1000] cu rezultatul 100 *(4p)*

Avem nevoie de cifre cu suma pătratelor 100: $36 + 64 = 100$ (cifrele 6 și 8), la care se pot adăuga zerouri. Exemple: **68, 86, 608, 806** (sau 680, 860). Câte 1p pentru fiecare.

#### c) „pentru” înlocuit cu o atribuire *(6p)*

A aduna x de x ori înseamnă a aduna $x \cdot x$:

```text
citește n (număr întreg nenul)
┌dacă n<0 atunci n ← -n
└■
s ← 0
┌repetă
│  x ← n%10
│  s ← s+x*x
│  n ← [n/10]
└până când n=0
scrie s
```

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, s = 0, x, i;
    cin >> n;
    if (n < 0) n = -n;
    do
    {
        x = n % 10;
        for (i = 1; i <= x; i++)
            s = s + x;
        n = n / 10;
    } while (n != 0);
    cout << s;
    return 0;
}
```

„Repetă … până când n = 0” devine `do { … } while (n != 0);`. *Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **b** (baremul acceptă și a) (câte 4 puncte).

### 1. Codul substanței active din primul medicament → b. `m[0].substanta.cod`

Pornim de la variabilă spre câmp: `m[0]` este primul medicament, `.substanta` câmpul-structură, `.cod` câmpul din interiorul lui. Celelalte variante inversează ordinea sau pun indicele pe un câmp care nu e tablou.

### 2. Numărul minim de vârfuri → b. 4

Un vârf cu gradul intern 3 are 3 predecesori distincți, deci graful are cel puțin **4** vârfuri. Cu 4 vârfuri se poate: arcele (2,1), (3,1), (4,1), (1,2), (1,3), (1,4), (3,2), (2,3) dau gradele interne 3, 2, 2, 1, iar vârful 1 are gradul extern 3. *(Baremul oficial acceptă și răspunsul a.)*

### 3. Rădăcini pentru care nodul 2 are cele mai puține descendenți *(6p)*

Muchiile: [1,2], [1,6], [1,8], [1,9], [2,3], [2,7], [4,5], [5,7]. Descendenții lui 2 sunt toate nodurile din „ramurile” lui 2 care nu conțin rădăcina:

| Rădăcina în ramura | Descendenții lui 2 | Număr |
|---|---|---|
| lui 1 (1, 6, 8, 9) | 3, 7, 5, 4 | **4** |
| lui 7 (7, 5, 4) | 1, 6, 8, 9, 3 | 5 |
| lui 3 | 1, 6, 8, 9, 7, 5, 4 | 7 |
| rădăcina = 2 | toate celelalte | 8 |

Minimul se obține pentru oricare trei dintre **1, 6, 8, 9** (de exemplu 1, 6, 8).

### 4. Completarea tabloului 9×9 *(6p)*

În afara diagonalei principale, valoarea este $(i+j) \bmod 8$ — pe diagonala secundară $i + j = 8$, deci restul e tot 0. Doar diagonala principală trebuie tratată separat.

```cpp
for(i=0;i<9;i++)
   for(j=0;j<9;j++)
      if (i == j) a[i][j] = 0;
      else a[i][j] = (i + j) % 8;
```

Verificare: `a[0][1] = 1`, `a[1][2] = 3`, `a[0][8] = 0`, `a[2][6] = 0` ✔.

### 5. Codificarea cuvântului *(10p)*

Literele adăugate **la început** ajung în ordine inversă parcurgerii, iar cele adăugate **la final** în ordinea parcurgerii. Construim direct cuvântul `t`: întâi literele cu cifră pară (de la ultima spre a doua), apoi prima literă, apoi literele cu cifră impară.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[105], c[105], t[105];
    int n, k = 0;
    cin >> s >> c;
    n = strlen(s);
    if (strlen(c) != n)
        cout << "cod incorect";
    else
    {
        for (int i = n - 1; i >= 1; i--)      // literele puse la început, în ordine inversă
            if ((c[i] - '0') % 2 == 0) t[k++] = s[i];
        t[k++] = s[0];
        for (int i = 1; i < n; i++)           // literele puse la final
            if ((c[i] - '0') % 2 == 1) t[k++] = s[i];
        t[k] = '\0';
        cout << t;
    }
    return 0;
}
```

**Verificare:** „etalon” cu „025843”: cifre pare la t, l, o → la început, în ordinea o, l, t; apoi e; apoi a, n → **oltean** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Soluția de după (Java, PHP, SQL, C#) → a. (Java, C#) *(4p)*

Ordinea limbajelor: {PHP, Java, Python, C#, SQL}. După ce se termină cursurile care încep cu (Java, PHP, …), pe poziția 2 urmează Python — interzis lângă Java — apoi **C#**. (Java, C#) are deja 2 limbaje (număr par), deci este soluție.

### 2. Valori ale lui x pentru care nu se afișează `*` *(6p)*

Fiecare apel scade atât caracterul, cât și x. Pornind de la 'e', apelurile sunt ('e', x), ('d', x−1), ('c', x−2), ('b', x−3), ('a', x−4). Se afișează `*` dacă x devine 0 într-unul dintre ele, adică dacă $x \le 4$. Pentru $x \ge 5$ se ajunge la 'a' cu o valoare nenulă și se afișează numărul. Exemple: **5, 6, 7** (orice număr ≥ 5).

### 3. Subprogramul resturi *(10p)*

Cu $n$ până la $10^9$, o parcurgere a intervalului ar fi prea lentă. Un număr dă restul r la x și la y exact când $i - r$ este multiplu și al lui x, și al lui y, adică multiplu al lui $L = \text{cmmmc}(x, y)$. Numerele sunt deci r, r + L, r + 2L, … ≤ n — în total $\left[\frac{n-r}{L}\right] + 1$ (r ≥ 1, deci toate sunt în [1, n]).

```cpp
int resturi(int n, int x, int y, int r)
{
    long long a = x, b = y, rest;
    while (b != 0) { rest = a % b; a = b; b = rest; }   // a = cmmdc(x, y)
    long long L = (long long)x / a * y;                  // cmmmc(x, y)
    return (n - r) / L + 1;
}
```

Cmmmc-ul poate depăși `int`, de aceea folosim `long long`. **Verificare:** n = 200, x = 5, y = 14, r = 2 → L = 70, (200 − 2) / 70 + 1 = 2 + 1 = **3** ✔.

### 4. Lungimea maximă a unei secvențe neuniforme

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând și păstrăm ultimele două valori, a și b, precum și lungimea L a celei mai lungi secvențe neuniforme care se termină la termenul curent. Pentru un nou termen c:

- dacă a, b, c sunt toate diferite, secvența continuă: L crește cu 1;
- altfel, dacă b ≠ c, secvența nouă începe cu b, c: L = 2;
- altfel (b = c), L = 1.

După fiecare pas actualizăm maximul, apoi a ← b, b ← c.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile simple → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int a, b, c, L, Lmax;
    f >> a >> b;
    if (a != b) L = 2; else L = 1;
    Lmax = L;
    while (f >> c)
    {
        if (a != b && a != c && b != c) L++;
        else if (b != c) L = 2;
        else L = 1;
        if (L > Lmax) Lmax = L;
        a = b;
        b = c;
    }
    cout << Lmax;
    f.close();
    return 0;
}
```

**Verificare** pentru 7 7 1 3 7 7 5 3 3 3 7 8 9: secvențele 7 1 3 7 și 3 7 8 9 au lungimea maximă **4** ✔.

## Ce merită reținut din varianta 2

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **Structuri imbricate în tablou:** `m[0].substanta.cod` — indicele stă lângă variabila-tablou.
- **Descendenții unui nod** depind de rădăcină: rădăcina „mută” o ramură deasupra nodului.
- **Resturi egale la x și y** ⇒ lucrează cu cmmmc, nu cu o parcurgere până la $10^9$.
- **Proprietăți pe ferestre de 3 termeni:** păstrează ultimele două valori citite.

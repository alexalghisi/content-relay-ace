Rezolvarea completă a subiectului de **Bacalaureat 2018 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

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

**Răspunsuri:** 1 – **c**, 2 – **d** (câte 4 puncte).

### 1. Câte valori are `ceil(x)+floor(x)` pentru x ∈ [1, 2] → c. 3

- x = 1: ceil = 1, floor = 1 → **2**
- 1 < x < 2: ceil = 2, floor = 1 → **3**
- x = 2: ceil = 2, floor = 2 → **4**

Trei valori posibile.

### 2. Ce secvențe numără multiplii lui k din [1, n] → d. S1, S2 și S3

- **S1:** pentru fiecare i, scade k cât timp se poate — obține restul `i % k`; numără valorile cu rest 0. Corect.
- **S2:** numără direct i cu `i%k==0`. Corect.
- **S3:** în [1, n] sunt exact [n/k] multipli ai lui k (k, 2k, …, [n/k]·k). Corect.

### 3. Prețul medicamentului cu doză mai mare *(6p)*

Același cod înseamnă aceeași substanță activă; în acest caz dozele sunt sigur diferite.

```cpp
if (cod1 == cod2)
{
    if (doza1 > doza2) cout << pret1;
    else cout << pret2;
}
else
    cout << "ALTA CATEGORIE";
```

### 4. Numere din [1, n] cu restul r la x și la y

#### a) Algoritmul în pseudocod *(10p)*

Testăm fiecare număr i din [1, n] și numărăm cele care dau restul r atât la x, cât și la y.

```text
citește n, x, y, r (numere naturale nenule, r<x<y<n)
nr ← 0
┌pentru i ← 1,n execută
│ ┌dacă i%x=r și i%y=r atunci
│ │  nr ← nr+1
│ └■
└■
scrie nr
```

Exemplu: n = 200, x = 5, y = 14, r = 2 → numerele 2, 72, 142 → se afișează **3** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **n** — capătul din dreapta al intervalului [1, n];
- **x, y** — cele două numere la care se face împărțirea;
- **r** — restul cerut;
- **i** — contor, parcurge pe rând numerele din [1, n];
- **nr** — numără valorile care au proprietatea cerută.

**Date de intrare:** n, x, y, r. **Date de ieșire:** nr.

## Subiectul al III-lea (30 de puncte)

### 1. Expresia pentru tabloul afișat → b. `(i+j)%8` *(4p)*

Verificăm câteva elemente din afara diagonalei principale: linia 0, coloana 1 → 1; linia 1, coloana 2 → 3; linia 0, coloana 8 → 0. Toate se potrivesc cu $(i+j) \bmod 8$: 1, 3, 8 mod 8 = 0 ✔. Varianta a dă pentru linia 0, coloana 1 valoarea `(0-1)%8 = -1`, deci nu se potrivește.

### 2. bun = 1 dacă s-a citit 2018 *(6p)*

```cpp
bun = 0;
for(i=1;i<=20;i++)
{ cin >> k;
  if (k == 2018) bun = 1;
}
```

Pornim de la „nu s-a găsit” (0) și trecem pe 1 la prima apariție a lui 2018; nu mai revenim la 0.

### 3. Codificarea lui s pe baza codului c *(10p)*

Nu trebuie să construim efectiv șirul. Termenii adăugați **la început** apar în ordine **inversă** față de parcurgere, iar cei adăugați **la final** în ordinea parcurgerii. Deci afișăm: termenii cu cod par, de la ultimul spre al doilea; apoi `s[0]`; apoi termenii cu cod impar, de la al doilea spre ultimul.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int ns, nc, s[101], c[101];
    cin >> ns >> nc;
    for (int i = 0; i < ns; i++) cin >> s[i];
    for (int i = 0; i < nc; i++) cin >> c[i];
    if (ns != nc)
        cout << "cod incorect";
    else
    {
        for (int i = ns - 1; i >= 1; i--)      // cei puși la început, în ordine inversă
            if (c[i] % 2 == 0) cout << s[i] << ' ';
        cout << s[0] << ' ';
        for (int i = 1; i < ns; i++)           // cei puși la final, în ordinea parcurgerii
            if (c[i] % 2 == 1) cout << s[i] << ' ';
    }
    return 0;
}
```

**Verificare:** s = 7 3 6 2 8, c = 0 12 5 23 14 → coduri pare la pozițiile 1 și 4 (3 și 8), impare la 2 și 3 (6 și 2) → `8 3 7 6 2` ✔.

### 4. Lungimea maximă a unei secvențe neuniforme

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând, păstrând doar valoarea anterioară `a`. Ținem lungimea `L` a secvenței neuniforme care se termină la termenul curent: dacă termenul curent b diferă de a, secvența continuă (`L++`); altfel începe una nouă (`L = 1`). După fiecare pas actualizăm maximul.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; doar câteva variabile simple, fără tablou → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int a, b, L = 1, Lmax = 1;
    f >> a;
    while (f >> b)
    {
        if (b != a) L++;
        else L = 1;
        if (L > Lmax) Lmax = L;
        a = b;
    }
    cout << Lmax;
    f.close();
    return 0;
}
```

**Verificare** pentru 7 7 1 3 1 1 7 3 3 3 7 3 9: secvențele neuniforme maxime sunt 7 1 3 1 și 3 7 3 9, de lungime **4** ✔.

## Ce merită reținut din varianta 2

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **„pentru” care adună x de x ori** se înlocuiește cu `s ← s + x*x`.
- **ceil și floor** sunt egale doar pentru numere întregi.
- **Adăugare la început / la final:** cei puși la început ies în ordine inversă — se poate afișa direct, fără un șir nou.
- **Secvențe cu proprietate între vecini:** o parcurgere, cu termenul anterior și lungimea curentă.

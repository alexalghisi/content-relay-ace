Rezolvarea completă a subiectului de **Bacalaureat 2021 la Informatică, limbajul C/C++, profil mate-info**, sesiunea specială, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **a**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Expresie cu valoarea 1 dacă 2021 divide x → c. `x%(x/2021)==0`

Dacă 2021 divide x, atunci $x = 2021 \cdot q$ cu q ≠ 0, deci `x/2021 = q`, iar `x % q == 0` ✔ — expresia are valoarea 1.

- a. `x/(x/2021)` = 2021, niciodată 0. Greșit.
- b. și d. conțin `x%2021`, care este 0 tocmai când 2021 divide x → **împărțire la zero**. Greșit.

### 2. Două soluții consecutive → b. 2020, 21

Se generează, în ordine lexicografică a cifrelor, numerele formate cu cifrele 0, 1, 2 (cel mult 4 cifre) mai mici decât 2021. După **2020**, ar urma 2021 și 2022, care nu sunt mai mici decât 2021, deci se revine și urmează **21**.

- a. după 2002 urmează 201. c. după 122 urmează 1220. d. după 21 urmează 210.

### 3. Atribuire corectă → a. `x[1]=y;`

`x[1]` și `y` sunt ambele de tipul `struct masina`, iar structurile de același tip se pot atribui direct. Celelalte variante pun indicele sau numele câmpului în locuri greșite.

### 4. Numărul de fii ai nodului 4 → c. 5

În vectorul de „tați” (9, 3, 4, 6, 4, 8, 6, 0, 4, 4, 4), valoarea 4 apare pe pozițiile 3, 5, 9, 10, 11 → **5 fii**.

### 5. Graf complet cu 210 muchii → d. 21

Un graf complet cu n noduri are $n(n-1)/2$ muchii: $n(n-1) = 420 = 21 \cdot 20$ → **n = 21**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

După eventuala interschimbare m ≤ n; dacă m e par, devine impar. Apoi bucla sare din 2 în 2 prin numerele impare, afișând câte o steluță. Se afișează deci câte un `*` pentru **fiecare număr impar din [m, n]**.

#### a) Pentru 2 și 9 → **\*\*\*\***

m devine 3; numerele impare din [3, 9] sunt 3, 5, 7, 9 → 4 steluțe. *(6p)*

#### b) n = 79, 40 de steluțe

Avem nevoie de 40 de numere impare în interval. Dacă m ≤ 79: în [1, 79] sunt exact 40 de numere impare → **m = 1**. Dacă m > 79, valorile se interschimbă și intervalul devine [79, m]: pentru **m = 157** sau **m = 158**, numerele impare 79, 81, …, 157 sunt 40. Oricare două dintre 1, 157, 158. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, aux;
    cin >> m >> n;
    if (m > n) { aux = m; m = n; n = aux; }
    if (m % 2 == 0) m = m + 1;
    while (m <= n)
    {
        m = m + 2;
        cout << '*';
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizii 2p, repetitivă 2p, atribuiri 1p, interschimbare 1p, corectitudine 1p.*

#### d) Structura „cât timp” înlocuită cu una cu test final *(6p)*

Bucla cu test final se execută cel puțin o dată, deci o protejăm cu un `dacă` cu aceeași condiție.

```text
citește m, n (numere naturale)
┌dacă m > n atunci m ↔ n
└■
┌dacă m%2 = 0 atunci m ← m + 1
└■
┌dacă m ≤ n atunci
│ ┌repetă
│ │  m ← m + 2
│ │  scrie '*'
│ └până când m > n
└■
```

### 2. f(2) și f(21) *(6p)*

- **f(2) = 2** (x ≤ 4, se returnează x).
- f(21) = 21 − f(19), f(19) = 19 − f(17), …, până la f(3) = 3. Calculând de jos în sus: f(5) = 2, f(7) = 5, f(9) = 4, f(11) = 7, f(13) = 6, f(15) = 9, f(17) = 8, f(19) = 11, **f(21) = 10**.

### 3. Ce se afișează *(6p)*

`x+3` este adresa caracterului de pe poziția 3, deci se afișează subșirul de la poziția 3: **2021**. Apoi, pe linia următoare, se afișează fiecare caracter care **nu** este cifră, urmat de „!”: **b!a!c!**

```text
2021
b!a!c!
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul imog *(10p)*

Eliminăm cifrele pare din fiecare număr, păstrând ordinea celorlalte (construim numărul cu o putere a lui 10). Apoi verificăm dacă unul este oglinditul celuilalt. Cifrele rămase sunt impare (nenule), deci oglinditul se poate calcula numeric. Dacă niciunul nu are cifre impare, nu există numere care să fie oglindite → rez = 0.

```cpp
int faraPare(int x)
{
    int r = 0, p = 1;
    do
    {
        int c = x % 10;
        if (c % 2 == 1) { r = r + c * p; p = p * 10; }
        x = x / 10;
    } while (x != 0);
    return r;
}

int oglindit(int x)
{
    int r = 0;
    while (x != 0) { r = r * 10 + x % 10; x = x / 10; }
    return r;
}

void imog(int x, int y, int &rez)
{
    int a = faraPare(x), b = faraPare(y);
    if (a != 0 && a == oglindit(b)) rez = 1;
    else rez = 0;
}
```

**Exemple:** 523 → 53, 84356 → 35, oglinditul lui 35 este 53 → **rez = 1** ✔; 84536 → 53 ≠ oglinditul → 0; 40 și 86 nu au cifre impare → 0 ✔.

### 2. Interschimbarea liniei k cu coloana k *(10p)*

Cu indici de la 1: elementele de pe linia k aflate în stânga diagonalei principale sunt `a[k][1..k-1]`, iar cele de pe coloana k aflate deasupra diagonalei sunt `a[1..k-1][k]`. Al j-lea element dintr-un șir se schimbă cu al j-lea din celălalt: `a[k][j] ↔ a[j][k]`.

```cpp
#include <iostream>
using namespace std;

int a[21][21];

int main()
{
    int n, k;
    cin >> n >> k;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            cin >> a[i][j];
    for (int j = 1; j < k; j++)
    {
        int aux = a[k][j];
        a[k][j] = a[j][k];
        a[j][k] = aux;
    }
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

Pe exemplu (k = 4): 6 1 3 de pe linia 4 se schimbă cu 5 8 0 de pe coloana 4 → se obține tabloul cerut ✔.

### 3. Termenii șirului în ordine inversă

#### a) Descrierea algoritmului *(2p)*

Din definiție, $f_n - f_{n-1} = 2n$. Cum x și y sunt termeni consecutivi, $y = f_n$ cu $n = (y - x)/2$. Pornim de la y și coborâm: scriem termenul curent t, apoi $t \leftarrow t - 2n$ și $n \leftarrow n - 1$, până scriem $f_0 = 1$.

**Eficiență:** se fac doar n + 1 pași (atâția câți termeni se scriu), fără tablouri → memorie **constantă**, timp **liniar** în numărul de termeni afișați.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long x, y;
    cin >> x >> y;
    ofstream g("bac.out");
    long long n = (y - x) / 2, t = y;
    while (n >= 0)
    {
        g << t << ' ';
        t = t - 2 * n;
        n--;
    }
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** x = 21, y = 31 → n = 5 → 31, 21, 13, 7, 3, 1 ✔.

## Ce merită reținut din varianta 7

- **Atenție la împărțirea la zero** în expresii cu `%` și `/`.
- **Structuri de același tip** se pot atribui direct.
- **Graf complet:** $n(n-1)/2$ muchii.
- **`x+k` pentru un șir** = subșirul care începe pe poziția k.
- **Șiruri recurente:** din diferența a doi termeni consecutivi afli indicele, apoi mergi înapoi.

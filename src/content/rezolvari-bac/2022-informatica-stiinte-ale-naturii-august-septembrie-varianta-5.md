Rezolvarea completă a subiectului de **Bacalaureat 2022 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **d**, 3 – **c**, 4 – **a**, 5 – **c** (câte 4 puncte).

### 1. Expresie echivalentă cu `x>=3 && x<10` → b. `!(x<3 || x>=10)`

Conform legilor lui De Morgan, `!(x<3 || x>=10)` = `x>=3 && x<10`.

- a. `!(x<3 && x>=10)` — paranteza e mereu falsă, deci expresia e mereu 1. Greșit.
- c. `x<3 && …` — adevărată doar pentru x < 3. Greșit.
- d. folosește `||` și `x>=10`, adevărată de exemplu pentru x = 20. Greșit.

### 2. Elementele din A comparate cu 15 → d. 7, 8, 16

Simulăm interclasarea, comparând mereu elementele curente din A și B:

| Comparație | Se copiază |
|---|---|
| 7 cu 2 | 2 |
| 7 cu 4 | 4 |
| **7** cu 15 | 7 |
| **8** cu 15 | 8 |
| **16** cu 15 | 15 |

După ce 15 a fost copiat, nu mai participă la comparații. Răspuns: **7, 8, 16**.

### 3. Căutarea binară a lui 15 → c. 14, 18, 16

Indici 0…6. Mijlocul (0+6)/2 = 3 → **14** < 15, căutăm în dreapta [4, 6]; mijlocul 5 → **18** > 15, căutăm în [4, 4]; mijlocul 4 → **16** ≠ 15, intervalul se golește. Ordinea comparațiilor: 14, 18, 16.

### 4. Valoarea minimă a lui `abs(x%10-x/10)` pentru x ∈ [40, 49] → a. 0

`x/10 = 4` (cifra zecilor), `x%10` = cifra unităților. Pentru x = **44** diferența este 0.

### 5. Valoarea maximă a lui x pentru care `(x/3)*x==x` → c. 5

Cum x ≠ 0, împărțim la x: `x/3 == 1`, adică x ∈ {3, 4, 5} (împărțire întreagă). Maximul este **5**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară este algoritmul lui Euclid prin scăderi: calculează **cmmdc(m, y)**. Bucla exterioară ia pe rând y = n, n−1, n−2, … și se oprește la primul y cu cmmdc(m, y) ≠ 1. Cum `n` a fost deja decrementat, se afișează `n+1`, adică chiar acel y: cel mai mare număr ≤ n care **nu** este prim cu m.

#### a) Pentru m = 21, n = 47 → **45**

| y | cmmdc(21, y) | continuă? |
|---|---|---|
| 47 | 1 | da |
| 46 | 1 | da |
| 45 | 3 | nu |

La oprire `n = 44`, se afișează `n+1 = 45`. *(6p)*

#### b) m = 5, se afișează 10

Cel mai mare număr ≤ n care este multiplu de 5 trebuie să fie 10 → n ∈ [10, 14], de exemplu **10** și **14**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, x, y;
    cin >> m >> n;
    x = 1;
    while (x == 1)
    {
        x = m; y = n; n = n - 1;
        while (x != y)
            if (x > y) x = x - y;
            else y = y - x;
    }
    cout << n + 1;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Algoritm cu structură repetitivă cu test final *(6p)*

Prima buclă se execută sigur o dată (x = 1 inițial), deci o înlocuim direct cu `repetă … până când x ≠ 1`.

```text
citește m, n (numere naturale nenule, m<n)
┌repetă
│  x ← m; y ← n; n ← n − 1
│ ┌cât timp x ≠ y execută
│ │ ┌dacă x > y atunci x ← x − y
│ │ │altfel y ← y − x
│ │ └■
│ └■
└până când x ≠ 1
scrie n + 1
```

### 2. Literele afișate → **istet** *(6p)*

Caracterele se pot aduna cu numere (se lucrează cu codul ASCII). Pentru i > 1 se adaugă 1, iar pentru i impar se scad în plus 5.

| i | c inițial | i > 1? | c afișat |
|---|---|---|---|
| 0 | 'i' | nu | **i** |
| 1 | 's' | nu | **s** |
| 2 | 's' | +1 | **t** |
| 3 | 'i' | +1 − 5 = −4 | **e** |
| 4 | 's' | +1 | **t** |

### 3. Mesaj după temperatură *(6p)*

```cpp
if (temperatura > 11) cout << "CALDUROS";
else if (temperatura < 10) cout << "RACOROS";
else cout << "NORMAL";
```

Cazul „NORMAL” acoperă temperaturile 10 și 11.

## Subiectul al III-lea (30 de puncte)

### 1. Înlocuirea cifrei de pe poziția p — pseudocod *(10p)*

Calculăm $10^p$, extragem cifra de pe poziția p cu `[n / 10^p] % 10`, o scădem și adăugăm noua cifră înmulțită cu $10^p$.

```text
citește n, x, p (numere naturale, 1 ≤ x ≤ 9)
put ← 1
┌pentru i ← 1, p execută
│  put ← put * 10
└■
c ← [n / put] % 10
n ← n − c * put + x * put
scrie n
```

**Exemplu:** n = 12587, p = 3 → put = 1000, c = 2 → n = 12587 − 2000 + 6000 = **16587** ✔.

### 2. Codificarea cu 10-prieteni *(10p)*

10-prietenul unui număr b care nu se divide cu 10 este cel mai mare multiplu de 10 mai mic decât b, adică `b/10*10` (împărțire întreagă). Pentru b < 10 se obține 0, care e divizibil cu 10.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[105];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++)
        if (a[i] % 10 != 0) a[i] = a[i] / 10 * 10;
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

Test: (21, 70, 16, 7, 9, 50, 19) → **20 70 10 0 0 50 10** ✔.

### 3. Lungimea maximă a unei secvențe paritare

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând, păstrând termenul anterior `x` și pe cel curent `y`. Dacă au aceeași paritate, lungimea secvenței curente `L` crește, altfel redevine 1; după fiecare pas actualizăm maximul.

**Eficiență:** o singură parcurgere → timp **liniar**; nu memorăm șirul → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, y, L = 1, Lmax = 1;
    f >> x;
    while (f >> y)
    {
        if (x % 2 == y % 2) L++;
        else L = 1;
        if (L > Lmax) Lmax = L;
        x = y;
    }
    cout << Lmax;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** secvențele cele mai lungi (de exemplu 3 5 1 7 9) au 5 termeni → se afișează **5** ✔.

## Ce merită reținut din varianta 5

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **Căutarea binară:** compari mereu cu elementul din mijlocul intervalului rămas.
- **Interclasare:** un element din B se compară cu elementele din A până când el este copiat.
- **Caractere:** `char` se poate aduna cu întregi (cod ASCII).
- **Rotunjire în jos la multiplu de 10:** `b/10*10`.

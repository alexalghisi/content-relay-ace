Rezolvarea completă a **simulării pentru Bacalaureat 2021 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **b**, 3 – **a**, 4 – **d**, 5 – **d** (câte 4 puncte).

### 1. Intervalul pentru care expresia are valoarea 1 → c. [2002, 2020]

`!(x<2001)` ⇔ x ≥ 2001; `!(x<2002 || x>2020)` ⇔ 2002 ≤ x ≤ 2020; `!(x>2021)` ⇔ x ≤ 2021. Intersecția este **[2002, 2020]**.

### 2. Valori comparate cu trei elemente → b. 16, 48

Tabloul (48, 24, 16, 14, 9, 8, 4) este ordonat descrescător. Prima comparație este cu mijlocul, **14**; a doua cu 24 (stânga) sau 8 (dreapta); a treia cu 48 sau 16 (în stânga), respectiv 9 sau 4 (în dreapta). Valorile 16 și 48 sunt găsite abia la a treia comparație ✔. În celelalte variante apare 24, găsit deja la a doua comparație.

### 3. Rezultatul interclasării crescătoare → a. (2,3,4,7,10,11,18,20,21,50)

Interclasarea păstrează toate cele 10 elemente, în ordine crescătoare. Doar varianta a îndeplinește ambele condiții (d adună elementele, ceea ce nu este interclasare).

### 4. Expresia cu valoarea 10 → d. `sqrt(10*10)`

$\sqrt{100} = 10$. Celelalte: `abs(0)` = 0, `ceil(20)` = 20, `pow(10,10)` = $10^{10}$.

### 5. Completarea pentru cmmdc → d. `x-y>0`

Este algoritmul lui Euclid prin scăderi: când x > y se scade y din x, altfel x din y. Condiția este **x > y**, adică `x-y>0`.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Cifrele lui x se iau de la dreapta la stânga, ignorându-le pe cele nule. Fiecare cifră nenulă c se compară cu cifra din stânga ei: dacă aceasta este **mai mică**, c se adaugă la dreapta lui y; altfel c se adaugă la stânga lui y.

#### a) Pentru 35210579 → **2197553**

| c | cifra din stânga | unde se pune | y |
|---|---|---|---|
| 9 | 7 < 9 | dreapta | 9 |
| 7 | 5 < 7 | dreapta | 97 |
| 5 | 0 < 5 | dreapta | 975 |
| 0 | — | ignorată | 975 |
| 1 | 2 ≥ 1 | stânga | 1975 |
| 2 | 5 ≥ 2 | stânga | 21975 |
| 5 | 3 < 5 | dreapta | 219755 |
| 3 | 0 < 3 | dreapta | 2197553 |

*(6p)*

#### b) Două numere din [1000, 10000) pentru care se afișează 212

Oricare două dintre **2012**, **2201**, **2210**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int x, p = 1, y = 0, c;
    cin >> x;
    do
    {
        c = x % 10; x = x / 10;
        if (c != 0)
        {
            if (x % 10 < c) y = y * 10 + c;
            else y = c * p + y;
            p = p * 10;
        }
    } while (x != 0);
    cout << y;
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una cu test inițial *(6p)*

Pentru x = 0, bucla „repetă” face un singur pas cu c = 0, care nu modifică y; deci testul inițial `x ≠ 0` dă același rezultat.

```text
citește x (număr natural)
p ← 1; y ← 0
┌cât timp x ≠ 0 execută
│  c ← x%10; x ← [x/10]
│ ┌dacă c ≠ 0 atunci
│ │ ┌dacă x%10 < c atunci y ← y*10 + c
│ │ │altfel y ← c*p + y
│ │ └■
│ │  p ← p*10
│ └■
└■
scrie y
```

### 2. Mesajul despre aprecieri *(6p)*

```cpp
if (2 * nrAprecieri > nrAccesari) cout << "Peste 50%!";
else if (2 * nrAprecieri == nrAccesari) cout << "Jumatate!";
else cout << "Sub 50%!";
```

### 3. Ce se afișează → **ELEMENT** *(6p)*

Mai întâi se afișează c1 și c2: „EL”. Apoi, pentru i par se afișează c1 = 'E', iar pentru i impar `c2 + i/2`:

| i | c |
|---|---|
| 2 | E |
| 3 | 'L' + 1 = M |
| 4 | E |
| 5 | 'L' + 2 = N |

La final se afișează c3 = 'T' → **ELEMENT**.

## Subiectul al III-lea (30 de puncte)

### 1. Factorul prim cu puterea minimă — pseudocod *(10p)*

Descompunem n în factori primi și calculăm exponentul fiecărui factor. Păstrăm factorul cu exponentul **strict** mai mic decât minimul de până atunci; cum factorii apar crescător, la egalitate rămâne cel mai mic. Factorul rămas la final (dacă n > 1) are exponentul 1.

```text
citește n (număr natural, n ≥ 2)
pmin ← 100; rez ← 0; d ← 2
┌cât timp d*d ≤ n execută
│ ┌dacă n%d = 0 atunci
│ │  e ← 0
│ │ ┌cât timp n%d = 0 execută
│ │ │  e ← e + 1; n ← [n/d]
│ │ └■
│ │ ┌dacă e < pmin atunci pmin ← e; rez ← d
│ │ └■
│ └■
│  d ← d + 1
└■
┌dacă n > 1 și 1 < pmin atunci rez ← n
└■
scrie rez
```

**Exemplu:** 880 = $2^4 \cdot 5 \cdot 11$ → se scrie **5** ✔.

### 2. Deplasarea circulară a primelor k valori *(10p)*

Salvăm al k-lea element, mutăm elementele 1 … k−1 cu o poziție spre dreapta și punem elementul salvat pe prima poziție.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, a[25];
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> k;
    int aux = a[k - 1];
    for (int i = k - 1; i > 0; i--) a[i] = a[i - 1];
    a[0] = aux;
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

Pentru n = 7, k = 4 și (3, 0, 6, 4, 0, 0, 8) → **4 3 0 6 0 0 8** ✔.

### 3. Suma taxelor de proiectare

#### a) Descrierea algoritmului *(2p)*

Se plătesc 10 lei pentru fiecare **latură distinctă**. Laturile sunt din [1, 10], deci folosim un vector caracteristic `a`, cu `a[x] = 1` dacă latura x apare în fișier. Îl completăm citind fișierul o singură dată, apoi adunăm 10 pentru fiecare x cu `a[x] = 1`.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 10 pași la final; memorie constantă.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int a[11] = {0}, x, s = 0;
    while (f >> x) a[x] = 1;
    for (x = 1; x <= 10; x++)
        if (a[x] == 1) s += 10;
    cout << s;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** laturile distincte sunt 1, 2, 7 → se afișează **30** ✔.

## Ce merită reținut din simulare

- **Căutarea binară pe un tablou descrescător** funcționează la fel, cu sensurile inversate.
- **Interclasarea** nu adună și nu pierde elemente.
- **Euclid prin scăderi:** condiția este `x > y`.
- **Caractere + întregi:** `'L' + 1` = `'M'`.
- **Vector caracteristic** pentru valori distincte dintr-un domeniu mic.

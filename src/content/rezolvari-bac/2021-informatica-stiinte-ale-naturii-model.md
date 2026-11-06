Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2021 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **d**, 3 – **b**, 4 – **a**, 5 – **d** (câte 4 puncte).

### 1. Valoarea expresiei `21/2*2-5` → c. 15

Împărțire întreagă, de la stânga la dreapta: `21/2 = 10`, `10*2 = 20`, `20-5 = 15`.

### 2. Rezultatul interclasării descrescătoare → d. (63,50,45,36,27,20,8,5,3,2)

Interclasarea păstrează **toate** cele 10 elemente și le pune în ordinea cerută (aici descrescătoare). Doar varianta d are toate elementele, în ordine descrescătoare.

### 3. Valori ale lui x comparate cu exact două elemente → b. 8, 24

Indici 0…6: prima comparație este mereu cu mijlocul, **14**. A doua este cu 8 (mijlocul lui [0, 2]) sau cu 24 (mijlocul lui [4, 6]). Căutarea se oprește după a doua comparație doar dacă x este găsit atunci, deci x = **8** sau x = **24**.

### 4. Valoarea lui `floor(-20.20)` → a. −21

`floor` rotunjește **în jos**, spre −∞: cel mai mare întreg ≤ −20,20 este **−21**.

### 5. Secvență echivalentă → d

Secvența dată: dacă x == y, atunci r = 1 când z ≠ w și r = 2 când z == w; altfel r = 3. Varianta d face exact asta: pentru x == y pune r = 1 și îl schimbă în 2 dacă z == w; altfel r = 3. Variantele a, b folosesc `||` (de exemplu pentru x ≠ y și z ≠ w dau r = 1), iar c dă r = 2 pentru x ≠ y și z == w.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

La fiecare pas se elimină ultima cifră a lui n. Dacă aceasta era **impară**, noua ultimă cifră se adaugă în stânga lui `nr`; dacă era **pară**, k scade. Bucla se oprește când n = 0 sau k = 0.

#### a) Pentru 3845267 și 3 → **46**

| cifra eliminată | paritate | n după | acțiune | nr | k |
|---|---|---|---|---|---|
| 7 | impară | 384526 | adaugă 6 | 6 | 3 |
| 6 | pară | 38452 | k−1 | 6 | 2 |
| 2 | pară | 3845 | k−1 | 6 | 1 |
| 5 | impară | 384 | adaugă 4 | 46 | 1 |
| 4 | pară | 38 | k−1 | 46 | 0 |

*(6p)*

#### b) k = 2, n cu 4 cifre, se afișează 20

Numere de forma $\overline{2x0y}$ cu x, y cifre impare, de exemplu **2105**, **2301**, **2907**. Pentru 2105: 5 impar → se adaugă 0; 0 par → k = 1; 1 impar → se adaugă 2 → nr = 20; 2 par → k = 0. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, p = 1, nr, c;
    cin >> n >> k;
    if (k == 0) nr = -1;
    else
    {
        nr = 0;
        do
        {
            c = n % 2; n = n / 10;
            if (c != 0)
            {
                nr = nr + (n % 10) * p;
                p = p * 10;
            }
            else k = k - 1;
        } while (n != 0 && k != 0);
    }
    cout << nr;
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una cu test inițial *(6p)*

Pe ramura „altfel”, k ≠ 0; dacă n = 0, bucla „repetă” ar face un singur pas care nu modifică `nr`. Deci testul inițial `n ≠ 0 și k ≠ 0` dă același rezultat.

```text
citește n, k (numere naturale)
p ← 1
┌dacă k = 0 atunci
│  nr ← −1
│altfel
│  nr ← 0
│ ┌cât timp n ≠ 0 și k ≠ 0 execută
│ │  c ← n%2; n ← [n/10]
│ │ ┌dacă c ≠ 0 atunci
│ │ │  nr ← nr + (n%10)*p; p ← p*10
│ │ │altfel
│ │ │  k ← k − 1
│ │ └■
│ └■
└■
scrie nr
```

### 2. Valoarea lui nr → **16** *(6p)*

`cin >> c` sare peste spații și citește cele 9 litere: r, e, a, l, i, z, a, r, e. Pentru fiecare 'e' sau 'i' se adaugă `c - 'a'`, adică poziția literei în alfabet numărată de la 0: 'e' − 'a' = 4, 'i' − 'a' = 8. Apar e, i, e → 4 + 8 + 4 = **16**.

### 3. Vacanță sau școală *(6p)*

Vacanța cuprinde zilele 23–31 decembrie 2020 și 1–10 ianuarie 2021; orice altă dată din semestru este zi de școală.

```cpp
if ((an == 2020 && luna == 12 && zi >= 23) || (an == 2021 && luna == 1 && zi <= 10))
    cout << "vacanta";
else
    cout << "scoala";
```

Pentru 16.11.2020 se afișează **scoala** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Cele mai mari două numere prime mai mici decât n — pseudocod *(10p)*

Căutăm de la n − 1 în jos primul număr prim (y), apoi următorul (x), și le scriem crescător.

```text
citește n (număr natural, n ≥ 4)
y ← n − 1; gasit ← 0
┌cât timp gasit < 2 execută
│  prim ← 1; d ← 2
│ ┌cât timp d*d ≤ y și prim = 1 execută
│ │ ┌dacă y%d = 0 atunci prim ← 0
│ │ └■
│ │  d ← d + 1
│ └■
│ ┌dacă prim = 1 atunci
│ │  gasit ← gasit + 1
│ │ ┌dacă gasit = 1 atunci b ← y
│ │ │altfel a ← y
│ │ └■
│ └■
│  y ← y − 1
└■
scrie a, ' ', b
```

**Exemplu:** n = 49 → b = 47, a = 43 → se scrie **43 47** ✔ (pentru n ≥ 4 există mereu cel puțin 2 și 3, iar y nu coboară sub 2).

### 2. Pătrate perfecte pare în ordine descrescătoare *(10p)*

Pătratele perfecte pare sunt $(2t)^2$; primele n corespund lui t = 0 … n − 1. În ordine descrescătoare, elementul de pe poziția i este $(2(n-1-i))^2$.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[105];
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int t = n - 1 - i;
        a[i] = (2 * t) * (2 * t);
    }
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

Pentru n = 6 → **100 64 36 16 4 0** ✔.

### 3. Suma maximă pe tip de produs

#### a) Descrierea algoritmului *(2p)*

Tipurile sunt numere din [1, 100], deci folosim un tablou `s`, cu `s[t]` = suma cheltuită pentru tipul t. Pentru fiecare linie (t, nr, pret) adăugăm `nr*pret` la `s[t]`. La final căutăm maximul din `s`.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 100 de pași la final.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("cheltuieli.in");
    long long s[101] = {0}, mx = 0;
    int t, nr, pret;
    while (f >> t >> nr >> pret)
        s[t] += nr * pret;
    for (int i = 1; i <= 100; i++)
        if (s[i] > mx) mx = s[i];
    cout << mx;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** s[1] = 26, s[4] = 26, s[2] = 5 → se afișează **26** ✔.

## Ce merită reținut din model

- **Interclasarea** păstrează toate elementele ambelor tablouri.
- **Căutarea binară:** fiecare comparație suplimentară înseamnă că x nu a fost încă găsit.
- **`floor` la numere negative** coboară: −20,2 → −21.
- **`c - 'a'`** = poziția literei în alfabet, numărată de la 0.
- **Sume pe categorii:** tablou indexat după categorie.

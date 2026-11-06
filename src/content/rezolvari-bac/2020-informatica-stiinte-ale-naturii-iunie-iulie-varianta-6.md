Rezolvarea completă a subiectului de **Bacalaureat 2020 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **c**, 4 – **c**, 5 – **a** (câte 4 puncte).

### 1. Valoarea expresiei `3+5.0/2+2` → d. 7.5

`5.0` este real, deci `5.0/2 = 2.5`, iar 3 + 2,5 + 2 = **7.5**.

### 2. Condiția pentru caracterul `<` → b. `j<i && i+j>6`

În figură, `<` apare doar pe liniile 4–6, într-un triunghi: linia 4 → coloana 3; linia 5 → coloanele 2–4; linia 6 → coloanele 1–5. Acestea sunt elementele aflate **sub diagonala principală** (j < i) și **sub diagonala secundară** (i + j > 6). Verificare pe linia 5: j < 5 și j > 1 → coloanele 2, 3, 4 ✔.

### 3. Interclasarea descrescătoare → c. (60,50,45,36,25,20,8,5,4,2)

Rezultatul conține toate cele 10 elemente, în ordine descrescătoare. Doar varianta c respectă ambele condiții.

### 4. Valoarea maximă din [0, 100) cu `sqrt(x)==floor(sqrt(x))` → c. 81

Expresia este adevărată exact când $\sqrt{x}$ este întreg, adică x este **pătrat perfect**. Cel mai mare pătrat perfect mai mic decât 100 este **81**.

### 5. Completarea pentru $y = 10^8$ → a. `n/2`

Este ridicarea rapidă la putere: când n este par, baza se ridică la pătrat (`x=x*x`) și exponentul se **înjumătățește** (`n=n/2`), păstrând $y \cdot x^n$ constant. La final n = 0 și $y = 10^8$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră pară c = 0, 2, 4, 6, 8, bucla interioară caută cifra c în a și afișează 1 dacă o găsește, altfel 0.

#### a) Pentru 240107 → **1 1 1 0 0**

Numărul conține cifrele 0, 2, 4, dar nu și 6, 8. *(6p)*

#### b) Cel mai mic și cel mai mare număr din [10⁵, 10⁶), cu cifre distincte, cu toate valorile nenule

Numărul trebuie să conțină toate cifrele 0, 2, 4, 6, 8, plus încă o cifră: cel mai mic este **102468**, cel mai mare **986420**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int a, b, c = 0, x;
    cin >> a;
    do
    {
        b = a; x = 0;
        do
        {
            if (b % 10 == c) x = 1;
            b = b / 10;
        } while (b != 0 && x != 1);
        cout << x << ' ';
        c = c + 2;
    } while (c <= 9);
    return 0;
}
```

#### d) A doua structură „repetă” înlocuită cu o structură de alt tip *(6p)*

Bucla „repetă” execută corpul cel puțin o dată (important pentru a = 0); pentru echivalență, executăm corpul o dată înainte de „cât timp”.

```text
citește a (număr natural)
c ← 0
┌repetă
│  b ← a; x ← 0
│ ┌dacă b%10 = c atunci x ← 1
│ └■
│  b ← [b/10]
│ ┌cât timp b ≠ 0 și x ≠ 1 execută
│ │ ┌dacă b%10 = c atunci x ← 1
│ │ └■
│ │  b ← [b/10]
│ └■
│  scrie x
│  c ← c + 2
└până când c > 9
```

### 2. Mesajul despre monitor *(6p)*

```cpp
char monitor;
// ... (valorile sunt deja memorate)
cout << memorie << ' ';
if (monitor == 'T') cout << "tehnologie invechita";
else cout << "tehnologie actuala";
```

Pentru memorie = 8 și monitor = 'L' se afișează **8 tehnologie actuala** ✔.

### 3. Tablou pentru care se compară 4, 16, 7 *(6p)*

Căutarea binară cere tablou ordonat. Cu indici 0…6, prima comparație este cu elementul de pe poziția 3, deci acolo stă **4**. Cum 7 > 4, se continuă în [4, 6], cu mijlocul pe poziția 5 — acolo stă **16**. Cum 7 < 16, rămâne poziția 4 — acolo stă **7**.

Un exemplu: **(1, 2, 3, 4, 7, 16, 20)**.

## Subiectul al III-lea (30 de puncte)

### 1. Suma divizorilor comuni — pseudocod *(10p)*

```text
citește a, b (numere naturale nenule)
s ← 0
┌pentru d ← 1, a execută
│ ┌dacă a%d = 0 și b%d = 0 atunci s ← s + d
│ └■
└■
scrie s
```

**Exemplu:** a = 20, b = 12 → divizorii comuni 1, 2, 4 → se scrie **7** ✔.

### 2. Rotirea spre stânga a numerelor de trei cifre *(10p)*

Pentru $\overline{abc}$ se obține $\overline{bca}$: ultimele două cifre (`x % 100`) urcă cu o poziție, iar prima cifră (`x / 100`) trece la final. Zerourile de la început dispar automat (700 → 7, 501 → 15).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[55], gasit = 0;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++)
        if (a[i] >= 100 && a[i] <= 999)
        {
            a[i] = a[i] % 100 * 10 + a[i] / 100;
            gasit = 1;
        }
    if (gasit)
        for (int i = 0; i < n; i++) cout << a[i] << ' ';
    else cout << "nu exista";
    return 0;
}
```

Test: (120, 700, 65, 128, 3456, 5, 501) → **201 7 65 281 3456 5 15** ✔.

### 3. Șir cu număr par de termeni rearanjabil ca palindrom

#### a) Descrierea algoritmului *(2p)*

Un șir cu număr **par** de termeni poate fi rearanjat ca palindrom exact când **fiecare valoare apare de un număr par de ori** (valorile se așază în perechi simetrice). Valorile sunt din [1, 1000], deci folosim un vector de frecvență completat la citire și verificăm la final că toate frecvențele sunt pare.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**, plus 1000 de pași la final.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int ap[1001];

int main()
{
    ifstream f("bac.in");
    int x, ok = 1;
    while (f >> x) ap[x]++;
    for (x = 1; x <= 1000; x++)
        if (ap[x] % 2 == 1) ok = 0;
    if (ok) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 100 apare de 2 ori, 30 de 4 ori → toate frecvențele pare → **DA** ✔.

## Ce merită reținut din varianta 6

- **Zone dintr-o matrice:** sub diagonala principală j < i, sub cea secundară i + j > n − 1.
- **Pătrat perfect:** `sqrt(x)==floor(sqrt(x))`.
- **Ridicare rapidă la putere:** exponent par → `x=x*x; n=n/2`.
- **Căutare binară:** pozițiile comparate sunt fixate de indici (3, apoi 5, apoi 4…).
- **Palindrom prin rearanjare** (număr par de termeni): toate frecvențele pare.

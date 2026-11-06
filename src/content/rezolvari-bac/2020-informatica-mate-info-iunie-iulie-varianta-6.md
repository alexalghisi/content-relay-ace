Rezolvarea completă a subiectului de **Bacalaureat 2020 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **b**, 3 – **c**, 4 – **c**, 5 – **a** (câte 4 puncte).

### 1. Valoarea expresiei `3+5.0/2+2` → d. 7.5

`5.0` este real, deci împărțirea este reală: `5.0/2 = 2.5`. Apoi 3 + 2,5 + 2 = **7.5**.

### 2. Tabloul pentru care se afișează 2020 → b. 0,2,0,1

Funcția coboară recursiv până la i = 3, unde crește `v[3]` cu 1 și îl afișează; la revenire afișează `v[2]`, `v[1]`, `v[0]`. Se afișează deci `v[3]+1`, `v[2]`, `v[1]`, `v[0]`. Pentru (0, 2, 0, 1): 1+1 = **2**, **0**, **2**, **0** → „2020” ✔.

### 3. A șasea soluție → c. (80,70,30,20)

Sumele sunt multipli nenuli de 10, strict descrescători, cu totalul 200. După (80, 60, 40, 20) urmează **(80, 60, 50, 10)** — a 5-a —, apoi, terminate variantele cu al doilea 60, **(80, 70, 30, 20)** — a 6-a.

### 4. Numărul de frunze → c. 5

Frunzele sunt nodurile care nu sunt tatăl nimănui, adică nu apar în vectorul (7, 5, 6, 5, 7, 0, 6, 3, 3, 8). Apar 7, 5, 6, 3, 8; lipsesc **1, 2, 4, 9, 10** → 5 frunze.

### 5. Grafuri parțiale conexe diferite de graful dat → a. 4

Din matrice, muchiile sunt [1,2], [1,4], [1,5], [2,3], [3,4]: ciclul 1-2-3-4-1 plus muchia [1,5]. Un graf parțial păstrează toate nodurile și elimină muchii.

- Muchia [1,5] nu poate fi eliminată (nodul 5 ar rămâne izolat).
- Din ciclu se poate elimina **o singură** muchie (4 variante); eliminând două, graful se rupe.

Deci **4** grafuri parțiale conexe diferite de cel dat.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră pară c = 0, 2, 4, 6, 8, bucla interioară caută cifra c în a și afișează 1 dacă o găsește, altfel 0.

#### a) Pentru 240107 → **1 1 1 0 0**

Numărul conține cifrele 0, 2, 4, dar nu și 6, 8. *(6p)*

#### b) Cel mai mic și cel mai mare număr din [10⁵, 10⁶), cu cifre distincte, cu toate valorile nenule

Numărul trebuie să conțină toate cifrele pare 0, 2, 4, 6, 8 (cinci cifre distincte) plus încă o cifră. Cel mai mic: **102468**; cel mai mare: **986420**. *(6p)*

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

Bucla „repetă” execută corpul cel puțin o dată (important pentru a = 0 și c = 0). Pentru echivalență, executăm corpul o dată înainte de bucla „cât timp”.

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
│  scrie x, ' '
│  c ← c + 2
└până când c > 9
```

### 2. Structura calculator *(6p)*

Din `c.memorie.interna` rezultă că `memorie` este o structură cu câmpurile `interna` și `externa`.

```cpp
struct calculator
{
    char monitor;
    struct
    {
        int interna, externa;
    } memorie;
} c;
```

### 3. Completarea tabloului *(6p)*

Semnul `<` apare doar pe liniile 5–8, într-un „triunghi” centrat pe coloana 4: pe linia 5 doar coloana 4, pe linia 6 coloanele 3–5, pe linia 7 coloanele 2–6, pe linia 8 coloanele 1–7. Adică distanța față de coloana 4 este cel mult i − 5.

```cpp
for (i = 0; i < 9; i++)
    for (j = 0; j < 9; j++)
        if (i - abs(j - 4) >= 5) a[i][j] = '<';
        else a[i][j] = '>';
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul suma *(10p)*

Divizorii comuni lui a și b sunt numerele d ≤ min(a, b) care împart ambele numere.

```cpp
int suma(int a, int b)
{
    int s = 0;
    for (int d = 1; d <= a && d <= b; d++)
        if (a % d == 0 && b % d == 0) s = s + d;
    return s;
}
```

**Exemplu:** a = 20, b = 12 → divizorii comuni 1, 2, 4 → **7** ✔.

### 2. Rotirea spre stânga a cuvintelor *(10p)*

Parcurgem șirul cuvânt cu cuvânt (pozițiile i … j−1). Pentru cuvintele cu cel puțin 3 litere salvăm prima literă, mutăm restul cu o poziție spre stânga și punem litera salvată la final.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin.getline(s, 101);
    int n = strlen(s), i = 0, gasit = 0;
    while (i < n)
    {
        int j = i;
        while (j < n && s[j] != ' ') j++;   // cuvântul este s[i..j-1]
        if (j - i >= 3)
        {
            char prima = s[i];
            for (int t = i; t < j - 1; t++) s[t] = s[t + 1];
            s[j - 1] = prima;
            gasit = 1;
        }
        i = j + 1;
    }
    if (gasit) cout << s;
    else cout << "nu exista";
    return 0;
}
```

Test: „un palc mic de scolarite ilumina sala” → **un alcp icm de colarites luminai alas** ✔.

### 3. Șir care poate fi rearanjat ca palindrom

#### a) Descrierea algoritmului *(2p)*

Un șir poate fi rearanjat ca palindrom exact când **cel mult o valoare apare de un număr impar de ori** (ea ar sta în mijloc). Valorile sunt din [1, 1000], deci folosim un vector de frecvență `ap`, completat la citire. La final numărăm valorile cu frecvență impară și afișăm DA dacă sunt cel mult una.

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
    int x, impare = 0;
    while (f >> x) ap[x]++;
    for (x = 1; x <= 1000; x++)
        if (ap[x] % 2 == 1) impare++;
    if (impare <= 1) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 100 apare de 2 ori, 30 de 4 ori, 500 o dată → o singură frecvență impară → **DA** ✔ (de exemplu 30 100 30 500 30 100 30).

## Ce merită reținut din varianta 6

- **Un operand real** (`5.0`) face împărțirea reală.
- **Afișare după apelul recursiv** → valorile apar în ordine inversă.
- **Frunze:** nodurile care nu apar în vectorul de „tați”.
- **Grafuri parțiale conexe:** dintr-un ciclu poți elimina o singură muchie.
- **Palindrom prin rearanjare:** cel mult o valoare cu frecvență impară.

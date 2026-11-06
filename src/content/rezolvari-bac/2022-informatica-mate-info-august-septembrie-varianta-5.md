Rezolvarea completă a subiectului de **Bacalaureat 2022 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **a**, 3 – **d**, 4 – **c**, 5 – **b** (câte 4 puncte).

### 1. Expresie echivalentă cu `x>=3 && x<10` → b. `!(x<3 || x>=10)`

Conform legilor lui De Morgan, `!(x<3 || x>=10)` = `!(x<3) && !(x>=10)` = `x>=3 && x<10`.

- a. `!(x<3 && x>=10)` — condiția din paranteză e mereu falsă, deci expresia e mereu 1. Greșit.
- c. `x<3 && ...` — adevărată pentru x < 3. Greșit.
- d. folosește `||` și `x>=10`, adevărată de exemplu pentru x = 20. Greșit.

### 2. Completarea apelului recursiv → a. `y+2`

Funcția testează primalitatea lui `x` încercând divizorii impari 3, 5, 7, … până când `y*y > x`. Numerele pare (în afară de 2) sunt eliminate de la început, deci e suficient să trecem la următorul număr impar: `f(x, y+2)`.

- `y-2` și `y/2` scad divizorul (ajung la 1 sau 0 → rezultat greșit/împărțire la 0), iar `y*2` sare peste divizori (3, 6, 12…: ratează 5, 7).

### 3. Soluția de după (gutuie, prună, caisă) → d. (prună, caisă, piersică)

Ordinea: măr, gutuie, prună, caisă, piersică; combinări de câte 3, fără gutuie + piersică împreună. După (gutuie, prună, caisă) ar urma (gutuie, prună, piersică) și (gutuie, caisă, piersică) — ambele **interzise**. Se trece la seturile care încep cu prună: **(prună, caisă, piersică)**.

### 4. A[20][j] pe diagonala secundară → c. 79

Pe diagonala secundară a unui tablou n×n (indici de la 0): `i + j = n − 1`. Aici `20 + j = 99`, deci **j = 79**.

### 5. Celelalte două muchii → b. [1,4] și [5,7]

Lanțul 1, 2, 7, 5, 4, 6 are nevoie de muchiile [1,2], [2,7], [7,5], [5,4], [4,6]. Dintre ele lipsește din cele date doar **[5,7]**, deci aceasta e obligatorie → rămân variantele b și d.

- d. cu [3,6] am avea lanțul 1, 2, 7, 5, 4, 6, 3 de lungime 6 — mai lung, deci cel dat n-ar mai fi maxim. Greșit.
- b. cu [1,4]: nodul 3 e legat doar de 4, iar lanțurile maxime au lungimea 5. ✔

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară este algoritmul lui Euclid prin scăderi: calculează **cmmdc(m, y)**. Bucla exterioară ia pe rând y = n, n−1, n−2, … și se oprește la primul y cu cmmdc(m, y) ≠ 1. Cum `n` a fost deja decrementat, se afișează `n+1`, adică chiar acel **y**: cel mai mare număr ≤ n care **nu** este prim cu m.

#### a) Pentru m = 21, n = 47 → **45**

| y | cmmdc(21, y) | continuă? |
|---|---|---|
| 47 | 1 | da |
| 46 | 1 | da |
| 45 | 3 | nu |

La oprire `n = 44`, se afișează `n+1 = 45`. *(6p)*

#### b) m = 5, se afișează 10

Cel mai mare număr ≤ n care are un divizor comun cu 5 (adică multiplu de 5) trebuie să fie 10 → n ∈ [10, 14]. De exemplu **10** și **14** (orice două din 10, 11, 12, 13, 14). *(6p)*

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

Prima buclă se execută sigur o dată (x = 1 inițial), deci o putem înlocui direct cu `repetă … până când x ≠ 1`.

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

### 2. Rădăcini pentru care nodul 5 are doi „frați” → **2** și **8** *(6p)*

Vecinii lui 5 sunt 2, 4, 6, 8. Pentru ca 5 să aibă doi frați, tatăl lui 5 trebuie să aibă exact 3 fii.

- Rădăcina **2**: fiii lui 2 sunt 3, 5, 7 → frații lui 5 sunt 3 și 7 ✔.
- Rădăcina **8**: fiii lui 8 sunt 1, 5, 9 → frații lui 5 sunt 1 și 9 ✔.

### 3. Mesaj după temperatură *(6p)*

```cpp
if (x.temperatura > 11) cout << "CALDUROS";
else if (x.temperatura < 10) cout << "RACOROS";
else cout << "NORMAL";
```

Câmpul se accesează cu `x.temperatura`; cazul „NORMAL” acoperă temperaturile 10 și 11.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul schimb *(10p)*

Calculăm $10^p$, extragem cifra de pe poziția p cu `(n / 10^p) % 10`, o scădem și adăugăm noua cifră înmulțită cu $10^p$. Parametrul `n` este transmis **prin referință**, pentru că rezultatul se întoarce prin el.

```cpp
void schimb(int &n, int x, int p)
{
    int put = 1;
    for (int i = 1; i <= p; i++) put = put * 10;
    int c = n / put % 10;          // cifra de pe poziția p
    n = n - c * put + x * put;
}
```

**Exemplu:** n = 12587, p = 3 → put = 1000, c = 2 → n = 12587 − 2000 + 6000 = **16587** ✔.

### 2. Codificarea parolei cu vocale prietene *(10p)*

Vocala prietenă a unei consoane c este **cea mai apropiată vocală aflată înaintea ei** în alfabet. Pornim de la c și coborâm până dăm de o vocală (întotdeauna există, pentru că „a” e prima literă).

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[51];
    cin >> s;
    for (int i = 0; s[i]; i++)
        if (strchr("aeiou", s[i]) == NULL)      // consoană
        {
            char v = s[i];
            while (strchr("aeiou", v) == NULL) v--;
            s[i] = v;
        }
    cout << s;
    return 0;
}
```

Test: „rame” → r→o, m→i → **oaie**; „sport” → s→o, p→o, r→o, t→o, o rămâne → **ooooo** ✔.

### 3. Secvențe paritare de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Citim numerele pe rând, păstrând doar termenul anterior `x` și pe cel curent `y`. Dacă au aceeași paritate, lungimea secvenței curente `L` crește, altfel redevine 1. După fiecare pas: dacă `L > Lmax`, atunci `Lmax = L` și `nr = 1`; dacă `L == Lmax`, `nr++`.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; nu memorăm șirul, doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, y, L = 1, Lmax = 0, nr = 0;
    f >> x;
    while (f >> y)
    {
        if (x % 2 == y % 2) L++;
        else L = 1;
        if (L > 1)
        {
            if (L > Lmax) { Lmax = L; nr = 1; }
            else if (L == Lmax) nr++;
        }
        x = y;
    }
    cout << nr << ' ' << Lmax;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** secvențele de lungime maximă 5 sunt 3 5 1 7 9; 11 15 17 21 11; 11 15 17 21 11; 2 6 4 0 16 → se afișează `4 5` ✔.

## Ce merită reținut din varianta 5

- **De Morgan:** `!(A || B)` ⇔ `!A && !B`.
- **Diagonala secundară** (indici de la 0): `i + j = n − 1`.
- **Euclid prin scăderi:** `cât timp x≠y` cu scăderi calculează cmmdc.
- **Vecinii unui nod în arbore:** frații depind de alegerea rădăcinii — tatăl trebuie să aibă exact numărul potrivit de fii.
- **Secvențe maxime:** compară mereu termenul curent cu cel anterior și numără egalitățile cu maximul.

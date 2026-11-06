Rezolvarea completă a **simulării pentru Bacalaureat 2019 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Expresia cu valoarea 1 → d. `19/21*3==3/19*21`

Împărțirea este întreagă: `19/21 = 0`, deci stânga = 0; `3/19 = 0`, deci dreapta = 0. 0 == 0 → **1** ✔.

- a. 21/3·19 = 133, 3/19·21 = 0. b. 21/19·3 = 3, 19/3·21 = 126. c. 19/3·21 = 126, 3/21·19 = 0.

### 2. Soluția de dinaintea lui (galben, verde, alb) → d. (galben, roșu, verde)

Aranjamente de câte 3 culori (ordinea contează), în ordinea alb, galben, negru, roșu, verde. Înainte de (galben, verde, alb) vin toate drapelele care încep cu (galben, roșu, …), ultimul fiind **(galben, roșu, verde)**.

### 3. Condiția de oprire pentru numărul divizorilor → a. `d*d>n`

Funcția numără divizorii în perechi (d, n/d): pentru fiecare d < √n care divide n adaugă 2, iar pentru d = √n adaugă 1. Căutarea trebuie să se oprească imediat după √n, adică la `d*d>n`. Cu b, c sau d, perechile s-ar număra de două ori.

### 4. Trei noduri care nu aparțin niciunui ciclu → b. 2, 7, 8

Ciclurile grafului sunt 3-5-6-3, 3-4-6-3 și 3-4-6-5-3. Nodurile 1, 2, 7, 8 formează lanțul 7-8-2-1, legat de restul grafului doar prin muchia [1,6], deci nu fac parte din niciun ciclu. Dintre variante, doar **2, 7, 8** are toate nodurile în afara ciclurilor.

### 5. Numărul maxim de frunze → c. 13

Nodul i poate avea fii doar cu etichete din [i+1, 2i−1], deci cel mai mare fiu posibil este 2i − 1. Nodurile 1, 2, 3 trebuie să fie interne (1 → 2, 2 → 3, 3 → 4, 5). Un nod intern ≤ 5 ajunge cel mult la 9, unul ≤ 9 cel mult la 17, deci pentru a ajunge la 19 mai trebuie un nod intern. Minimum 6 noduri interne, de exemplu 1, 2, 3, 5, 9, 10 (5 → 6…9, 9 → 10…17, 10 → 18, 19). Frunze: 19 − 6 = **13**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru i de la b în jos până la a se calculează p = exponentul lui k în i. Se reține în y numărul cu cel mai mic exponent nenul (la egalitate rămâne primul găsit, adică cel mai mare). Dacă niciun număr nu se divide cu k, y rămâne 0.

#### a) Pentru 5, 19, 4 → **12**

Multiplii lui 4 din [5, 19], de sus în jos: 16 (exponent 2) → y = 16; 12 (exponent 1) → y = 12; 8 (exponent 1, nu e mai mic). Se afișează **12**. *(6p)*

#### b) b = 2019, k = 5, se afișează 0

Se afișează 0 dacă în [a, 2019] nu există niciun multiplu de 5. Cel mai apropiat multiplu de 5 sub 2019 este 2015, deci a ∈ [2016, 2019]: cel mai mic **2016**, cel mai mare **2019**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int a, b, k, pm = 0, y = 0, i, x, p;
    cin >> a >> b >> k;
    i = b;
    while (i >= a)
    {
        x = i; p = 0;
        while (x % k == 0)
        {
            x = x / k;
            p = p + 1;
        }
        if (p != 0 && (p < pm || pm == 0))
        {
            pm = p;
            y = i;
        }
        i = i - 1;
    }
    cout << y;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește a, b, k (numere naturale, 1≤a≤b, k>1)
pm ← 0; y ← 0
┌pentru i ← b, a, −1 execută
│  x ← i; p ← 0
│ ┌cât timp x%k = 0 execută
│ │  x ← [x/k]; p ← p + 1
│ └■
│ ┌dacă p ≠ 0 și (p < pm sau pm = 0) atunci
│ │  pm ← p; y ← i
│ └■
└■
scrie y
```

### 2. Structura eveniment *(6p)*

```cpp
struct eveniment
{
    struct
    {
        int zi, luna;
    } data;
    int id;
} e;
```

### 3. Completarea tabloului *(6p)*

Pe fiecare linie valorile cresc cu 1, iar fiecare linie începe cu 2 mai mult decât precedenta: `a[i][j] = 2*i + j`.

```cpp
for (i = 0; i < 5; i++)
    for (j = 0; j < 5; j++)
        a[i][j] = 2 * i + j;
```

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul inserare *(10p)*

Parcurgem cifrele de la dreapta la stânga și construim rezultatul cu o putere a lui 10. Pentru fiecare cifră nouă c (aflată în stânga cifrei anterioare d), punem întâi |c − d|, apoi c.

```cpp
void inserare(int &n)
{
    int d = n % 10, r = d, p = 10;
    n = n / 10;
    while (n != 0)
    {
        int c = n % 10;
        int dif = c > d ? c - d : d - c;
        r = r + dif * p; p = p * 10;
        r = r + c * p;   p = p * 10;
        d = c;
        n = n / 10;
    }
    n = r;
}
```

**Exemplu:** 7255 → 5; |5−5| = 0, 5 → 505; |2−5| = 3, 2 → 23505; |7−2| = 5, 7 → **7523505** ✔. Pentru n < 10⁵, rezultatul are cel mult 9 cifre și încape în `int`.

### 2. Scrierea fără prescurtări *(10p)*

Doar cuvintele COLEGIUL, LICEUL, NATIONAL, TEORETIC pot fi prescurtate, iar ele încep cu litere diferite. Așadar un cuvânt care se termină cu „.” se înlocuiește cu cuvântul complet care începe cu aceeași literă.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[51], rez[101] = "";
    const char *complet[] = {"COLEGIUL", "LICEUL", "NATIONAL", "TEORETIC"};
    cin.getline(s, 51);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        if (rez[0]) strcat(rez, " ");
        if (p[strlen(p) - 1] == '.')
        {
            for (int k = 0; k < 4; k++)
                if (complet[k][0] == p[0]) strcat(rez, complet[k]);
        }
        else strcat(rez, p);
        p = strtok(NULL, " ");
    }
    cout << rez;
    return 0;
}
```

Test: „COLEG. NAT. DE INFORMATICA” → **COLEGIUL NATIONAL DE INFORMATICA** ✔.

### 3. Șir paritar

#### a) Descrierea algoritmului *(2p)*

Condiția cere ca orice număr par din prima jumătate să fie mai mic decât orice număr impar din a doua jumătate, și orice număr impar din prima jumătate să fie mai mic decât orice număr par din a doua jumătate. E suficient să comparăm extremele: din prima jumătate reținem cel mai mare par `p1` și cel mai mare impar `i1` (inițial −1); din a doua, cel mai mic par `p2` și cel mai mic impar `i2` (inițial 1000001). Șirul este paritar dacă `p1 < i2` și `i1 < p2`.

**Eficiență:** o singură parcurgere → timp **liniar**; doar patru variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int n, x, p1 = -1, i1 = -1, p2 = 1000001, i2 = 1000001;
    f >> n;
    for (int k = 1; k <= 2 * n; k++)
    {
        f >> x;
        if (k <= n)
        {
            if (x % 2 == 0 && x > p1) p1 = x;
            if (x % 2 == 1 && x > i1) i1 = x;
        }
        else
        {
            if (x % 2 == 0 && x < p2) p2 = x;
            if (x % 2 == 1 && x < i2) i2 = x;
        }
    }
    if (p1 < i2 && i1 < p2) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** prima jumătate 20 3 11 4 15 → p1 = 20, i1 = 15; a doua 25 49 18 53 16 → p2 = 16, i2 = 25. 20 < 25 și 15 < 16 → **DA** ✔.

## Ce merită reținut din simulare

- **Împărțirea întreagă** a unui număr mai mic la unul mai mare dă 0.
- **Numărarea divizorilor în perechi** se oprește la `d*d > n`.
- **Noduri în afara ciclurilor:** cele de pe „ramuri” care nu se închid.
- **Comparații „orice … cu orice”** se reduc la compararea maximului cu minimul.

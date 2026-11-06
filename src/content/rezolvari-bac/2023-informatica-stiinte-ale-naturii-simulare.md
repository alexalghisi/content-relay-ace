Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil științe ale naturii**, **simularea** examenului. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **a**, 3 – **c**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. `x/2+y%3` egal cu 23 → d. x = 43 și y = 20

`43/2 = 21` (împărțire întreagă) și `20%3 = 2` → $21 + 2 = 23$ ✔.

- a. `8/2 + 23%3` = 4 + 2 = 6.
- b. `20/2 + 39%3` = 10 + 0 = 10.
- c. `23/2 + 66%3` = 11 + 0 = 11.

### 2. Valorile de deasupra antidiagonalei → a. `5-j`

Pentru `i+j<=6` (partea din stânga-sus) valorile depind doar de coloană: coloana 1 → 4, coloana 2 → 3, …, coloana 5 → 0, adică `5-j`. Restul (`i+j>6`) primește `i-1`. Verificare: linia 2: 4 3 2 1 (pentru j = 1..4), apoi `i-1 = 1` ✔.

- b. `5-i` ar da aceeași valoare pe toată linia. c, d. dau valori care cresc cu j.

### 3. x, y, z consecutive în rezultat → c. x = 16, y = 23, z = 27

Tablourile sunt descrescătoare; pentru interclasarea crescătoare le parcurgem de la dreapta: A → 3, x, z, 29, 2023 (deci 3 < x < z < 29) și B → 9, 15, y, 49, 2019 (deci 15 < y < 49). Ca x, y, z să fie consecutive și în această ordine, trebuie $15 < x < y < z < 29$. Varianta c: 15 < 16 < 23 < 27 < 29 ✔.

- a. x = 12 < 15 → 15 s-ar afla între x și y.
- b. x = 14 < 15, la fel.
- d. z = 28 < y = 37 → ordinea nu e x, y, z.

### 4. Echivalent cu `x=23*23;` → b. `x=pow(23,2);`

`pow(23,2)` = $23^2$ = 529. Celelalte: `sqrt(23)` ≈ 4,8, iar `floor(23)` și `ceil(23)` dau 23.

### 5. Termeni consecutivi din șirul lui Fibonacci → c. `x*y==1`

Pasul `(x, y) → (y−x, x)` merge **înapoi** în șirul lui Fibonacci. Pentru doi termeni consecutivi (1 < x < y) se ajunge până la perechea (1, 1), unde `x == y` și bucla se oprește → `x*y == 1`.

Exemplu: (3, 5) → (2, 3) → (1, 2) → (1, 1) ✔. Pentru (2, 4) → (2, 2), stop, `x*y = 4` → 0 ✔; pentru (3, 4) → (1, 3) → (2, 1) → (−1, 2), stop pe `x>0`.

- a. `x/y==1` ar fi adevărată și la (2, 2). b. `x%y==1` nu descrie perechea (1, 1) (`1%1 = 0`). d. `x+y==1` nu este posibil la (1, 1).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla exterioară se execută pentru x = 5, 4, 3, 2, 1. La fiecare trecere, bucla interioară reconstruiește n cifră cu cifră și înlocuiește fiecare cifră egală cu x prin **5 − x**. Zerourile apărute în față se pierd (numărul 0174 devine 174).

#### a) Pentru n = 5174 → **474**

| x | Înlocuire | n după |
|---|---|---|
| 5 | 5 → 0 | 0174 = 174 |
| 4 | 4 → 1 | 171 |
| 3 | — | 171 |
| 2 | — | 171 |
| 1 | 1 → 4 | 474 |

Se afișează **474**. *(6p)*

#### b) Trei numere impare, cu cifre distincte, din [100, 10⁴), pentru care se afișează 34

Valorile corecte sunt **521, 531, 5021, 5031** (am verificat prin rularea programului pe toate numerele impare din interval). De exemplu, pentru 521: x = 5 → 021 = 21; x = 2 → 31; x = 1 → **34**. Pentru 531: x = 5 → 31; x = 3 → 21; x = 2 → 31; x = 1 → **34**. Alegem, de exemplu, **521, 531, 5021**. *(câte 2p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = 5, cn, c, p;
    cin >> n;
    do
    {
        cn = n; n = 0; p = 1;
        do
        {
            c = cn % 10;
            if (c == x) c = 5 - c;
            n = c * p + n;
            cn = cn / 10;
            p = p * 10;
        } while (cn != 0);
        x = x - 1;
    } while (x != 0);
    cout << n;
    return 0;
}
```

#### d) Prima structură „repetă” înlocuită cu „pentru” *(6p)*

Bucla exterioară se execută exact pentru x = 5, 4, 3, 2, 1:

```text
citește n (număr natural)
┌pentru x ← 5, 1, -1 execută
│  cn ← n; n ← 0; p ← 1
│ ┌repetă
│ │  c ← cn%10
│ │ ┌dacă c = x atunci c ← 5 − c
│ │ └■
│ │  n ← c*p + n; cn ← [cn/10]; p ← p*10
│ └până când cn = 0
└■
scrie n
```

### 2. Căutare binară pentru x = 23 *(6p)*

Tabloul (10, 12, 15, 17, 20, 27, 50), pozițiile 1..7: mijlocul 4 → **17**; 23 > 17 → 5..7, mijlocul 6 → **27**; 23 < 27 → poziția 5 → **20**; 23 ≠ 20, stop.

Succesiunea: **17, 27, 20**.

### 3. Garda la sol *(6p)*

```cpp
double garda1, garda2;
if (garda1 == garda2)
    cout << "la fel";
else if (garda1 > garda2)
    cout << "prima sus";
else
    cout << "a doua sus";
```

## Subiectul al III-lea (30 de puncte)

### 1. Numere cu trei divizori impari — pseudocod *(10p)*

Pentru fiecare i din [x, y] numărăm divizorii impari d = 1, 3, 5, … și contorizăm valorile care au exact 3.

```text
citește x, y (numere naturale, 2 ≤ x < y)
nr ← 0
┌pentru i ← x, y execută
│  k ← 0
│ ┌pentru d ← 1, i, 2 execută
│ │ ┌dacă i%d = 0 atunci k ← k + 1
│ │ └■
│ └■
│ ┌dacă k = 3 atunci nr ← nr + 1
│ └■
└■
scrie nr
```

**Verificare:** x = 4, y = 50 → 9, 18, 25, 36, 49, 50 (de exemplu 18 are divizorii impari 1, 3, 9) → **6** ✔. (Observație: un număr are exact trei divizori impari când partea lui impară este pătratul unui număr prim impar.)

### 2. Înlocuirea cu 23 *(10p)*

Cifra zecilor este `v[i]/10%10`; numerele de o singură cifră nu au cifra zecilor, deci le excludem cu `v[i] >= 10`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[51], i, z;
    cin >> n;
    for (i = 0; i < n; i++)
        cin >> v[i];
    for (i = 0; i < n; i++)
    {
        z = v[i] / 10 % 10;            // cifra zecilor (0 pentru numerele de o cifră)
        if (v[i] >= 10 && (z == 2 || z == 3))
            v[i] = 23;
    }
    for (i = 0; i < n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** (9, 2, 20, 75, 35, 20, 40, 59, 23, 16, 34) → **9 2 23 75 23 23 40 59 23 16 23** ✔; (2, 0, 2, 3) rămâne neschimbat ✔.

### 3. Pașii reprezentativi

#### a) Descrierea algoritmului *(2p)*

Un pas este reprezentativ dacă temperatura lui este **mai mare sau egală** cu toate temperaturile anterioare, adică cu maximul de până atunci. Citim temperaturile pe rând, numărând pașii (`px`) și păstrând maximul curent `tr` (inițial −1). Dacă `x ≥ tr`, afișăm `px` și actualizăm `tr = x`.

**Eficiență:** o singură parcurgere → timp **liniar**; doar câteva variabile simple → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, tr = -1, px = 0;
    while (f >> x)
    {
        px++;                   // poziția (pasul) curentă
        if (x >= tr)            // nicio temperatură anterioară nu e mai mare
        {
            cout << px << ' ';
            tr = x;
        }
    }
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 7 4 9 10 10 10 3 9 2 10 10 8 2 30 → **1 3 4 5 6 10 11 14** ✔ (egalitatea `>=` face ca pașii cu 10 repetat să fie reprezentativi).

## Ce merită reținut din simulare

- **Împărțirea întreagă și restul:** calculează direct, pe fiecare variantă.
- **Interclasare cu necunoscute:** scrie ordinea parcurgerii și deduce inegalitățile.
- **Fibonacci înapoi:** $(x, y) \to (y-x, x)$ ajunge la (1, 1) pentru termeni consecutivi.
- **Cifra zecilor:** `x/10%10`, dar doar pentru numere cu cel puțin două cifre.
- **„Niciun element anterior mai mare”** ⇔ elementul este ≥ maximul de până atunci.

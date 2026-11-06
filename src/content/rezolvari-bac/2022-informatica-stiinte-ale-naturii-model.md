Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2022 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **c**, 3 – **d**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Expresie echivalentă cu `x<=20 || x>22` → a. `!(x>20) || !(x<=22)`

`!(x>20)` înseamnă `x<=20`, iar `!(x<=22)` înseamnă `x>22` — exact expresia dată. Celelalte variante: b = `x<20`, c = `x>22`, d = `x>=20` — niciuna nu este echivalentă.

### 2. Valorile lui x pentru care se compară 17, 21, 19 → c. {18, 19, 20}

Indici 0…6: mijlocul 3 → **17**; ca să continuăm în dreapta, x > 17. În [4, 6] mijlocul 5 → **21**; ca să continuăm în stânga, x < 21. În [4, 4] se compară **19** (x poate fi 19 — găsit — sau 18, 20 — negăsit). Deci x ∈ {18, 19, 20}.

### 3. Comparația care dă al 6-lea element → d. xa=21 și xb=13

Interclasarea produce, pe rând: 2 (A), 3 (B), 6 (B), 8 (A), 11 (A). Acum elementul curent din A este 21, iar din B este 13; comparându-le, al 6-lea element este 13. Deci **xa = 21, xb = 13**.

### 4. Valori distincte ale lui `floor(sqrt(x))` pentru x ∈ [90, 120] → b. 2

$\sqrt{90} \approx 9{,}49$ și $\sqrt{120} \approx 10{,}95$, deci partea întreagă poate fi doar **9** sau **10** → 2 valori.

### 5. Expresia matematică pentru `E=(x+1/y*z)/2022;` → d

`1/y*z` se evaluează de la stânga la dreapta: întâi `1/y`, apoi rezultatul se înmulțește cu z (variabilele sunt reale, deci împărțirea este reală). Așadar $E = \dfrac{x + \frac{1}{y} \cdot z}{2022}$ — varianta **d**.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare k de la x la y se calculează $s = 1^2 + 2^2 + \dots + [\sqrt{k}]^2$. Când `s` se schimbă față de valoarea anterioară `u`, se afișează `s*nr`, unde `nr` = câte valori k s-au parcurs de la ultima afișare (inclusiv cea curentă).

#### a) Pentru 2 și 7 → **1\*1 5\*2**

| k | [√k] | s | nr | afișare |
|---|---|---|---|---|
| 2 | 1 | 1 | 1 | `1*1`, nr ← 0 |
| 3 | 1 | 1 | 1 | — |
| 4 | 2 | 5 | 2 | `5*2`, nr ← 0 |
| 5, 6, 7 | 2 | 5 | 1, 2, 3 | — |

*(6p)*

#### b) y = 22, se afișează doar 30\*1

$30 = 1 + 4 + 9 + 16$, adică [√k] = 4, pentru k ∈ [16, 24]. Ca să existe o singură afișare, cu nr = 1, chiar primul k (adică x) trebuie să aibă [√x] = 4, iar x < 22: x ∈ {16, …, 21}, de exemplu **16** și **21**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int x, y, u = 0, nr = 0, s;
    cin >> x >> y;
    for (int k = x; k <= y; k++)
    {
        s = 0; nr = nr + 1;
        for (int t = 1; t <= (int)sqrt(k); t++)
            s = s + t * t;
        if (s != u)
        {
            cout << s << '*' << nr << ' ';
            u = s; nr = 0;
        }
    }
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Structura „pentru” interioară înlocuită cu „cât timp” *(6p)*

```text
citește x, y (numere naturale, x<y)
u ← 0; nr ← 0
┌pentru k ← x, y execută
│  s ← 0; nr ← nr + 1
│  t ← 1
│ ┌cât timp t ≤ [√k] execută
│ │  s ← s + t*t
│ │  t ← t + 1
│ └■
│ ┌dacă s ≠ u atunci
│ │  scrie s, '*', nr, ' '
│ │  u ← s; nr ← 0
│ └■
└■
```

Barem: inițializarea contorului, condiția și actualizarea contorului — câte 1p.

### 2. Ce se afișează → **BOMBOANA** *(6p)*

La i = 2, c1 și c2 se interschimbă (c1 = 'N', c2 = 'A'). Pentru i par se afișează `c1+k`, pentru i impar `c2+k`.

| i | k | c1, c2 | c afișat |
|---|---|---|---|
| 0 | 1 | A, N | A+1 = **B** |
| 1 | 1 | A, N | N+1 = **O** |
| 2 | −1 | N, A | N−1 = **M** |
| 3 | 1 | N, A | A+1 = **B** |
| 4 | 1 | N, A | N+1 = **O** |
| 5 | 0 | N, A | **A** |
| 6 | 0 | N, A | **N** |
| 7 | 0 | N, A | **A** |

### 3. Ora și minutul decolării *(6p)*

Transformăm momentul aterizării în minute de la miezul nopții, scădem durata, apoi revenim la ore și minute.

```cpp
int t = ora_aterizare * 60 + minut_aterizare - durata;
ora_decolare = t / 60;
minut_decolare = t % 60;
```

Zborul are loc în aceeași zi, deci t ≥ 0.

## Subiectul al III-lea (30 de puncte)

### 1. Lungimea minimă a mozaicului — pseudocod *(10p)*

Toate benzile au aceeași lungime, formată din plăcuțe întregi, deci lungimea este un multiplu comun al lui x, y, z; minimul este **cmmmc(x, y, z)**. Căutăm primul multiplu al lui x care se divide cu y și z.

```text
citește x, y, z (numere naturale)
L ← x
┌cât timp L%y ≠ 0 sau L%z ≠ 0 execută
│  L ← L + x
└■
scrie L
```

**Exemplu:** x = 30, y = 40, z = 20 → 30, 60, 90, **120** ✔.

### 2. Numere cu același număr de cifre *(10p)*

Calculăm numărul de cifre al primului element și verificăm că toate celelalte au același număr de cifre.

```cpp
#include <iostream>
using namespace std;

int nrcif(int x)
{
    int c = 0;
    while (x != 0) { c++; x = x / 10; }
    return c;
}

int main()
{
    int n, a[105], ok = 1;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    int k = nrcif(a[0]);
    for (int i = 1; i < n; i++)
        if (nrcif(a[i]) != k) ok = 0;
    if (ok) cout << k;
    else cout << "NU";
    return 0;
}
```

Test: (100, 712, 310, 130, 490) → **3**; (1000, 712, 310, 130, 490) → **NU** ✔.

### 3. Lungimea maximă a unei secvențe par-încadrate

#### a) Descrierea algoritmului *(2p)*

Termenii sunt cifre, deci valorile pare posibile sunt doar 0, 2, 4, 6, 8. Cea mai lungă secvență care începe și se termină cu valoarea pară i merge de la prima la ultima apariție a lui i. Citim fișierul o dată, reținând pentru fiecare cifră pară prima poziție `p[i]` și ultima poziție `u[i]`; răspunsul este max(u[i] − p[i] + 1).

**Eficiență:** o singură parcurgere → timp **liniar**; memorie constantă (doi vectori de 10 elemente).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int p[10] = {0}, u[10] = {0}, x, poz = 0, Lmax = 0;
    while (f >> x)
    {
        poz++;
        if (x % 2 == 0)
        {
            if (p[x] == 0) p[x] = poz;
            u[x] = poz;
        }
    }
    for (int i = 0; i <= 8; i += 2)
        if (p[i] && u[i] - p[i] + 1 > Lmax) Lmax = u[i] - p[i] + 1;
    cout << Lmax;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** pentru 4 (pozițiile 5 și 13) și pentru 8 (pozițiile 9 și 17) se obține 9 → se afișează **9** ✔.

## Ce merită reținut din model

- **Căutarea binară:** fiecare comparație restrânge intervalul valorilor posibile ale lui x.
- **Interclasare:** al k-lea element rezultă din comparația elementelor curente din cele două tablouri.
- **`1/y*z`** = $(1/y) \cdot z$ — evaluare de la stânga la dreapta.
- **Ore și minute:** lucrează în minute totale, apoi `/60` și `%60`.
- **cmmmc prin multipli succesivi** ai unuia dintre numere.

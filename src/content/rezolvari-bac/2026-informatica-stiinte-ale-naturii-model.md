Rezolvarea completă a subiectului de **Bacalaureat 2026 la Informatică, limbajul C/C++, profil științe ale naturii**, **modelul oficial** publicat de CNCE. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **c**, 3 – **d**, 4 – **b**, 5 – **b** (câte 4 puncte).

### 1. Valoarea lui `20/25*20/2` → a. 0

Toți operanzii sunt întregi, deci `/` este **împărțire întreagă**, evaluată de la stânga la dreapta: `20/25 = 0`, apoi `0*20 = 0`, `0/2 = 0`.

- b, c. valori reale — imposibil, nu apare niciun operand real.
- d. 8 ar fi rezultatul matematic exact $\frac{20}{25}\cdot 20 / 2$, dar C/C++ trunchiază `20/25` la 0.

### 2. Căutare binară pentru x = 26 → c. 25, 45, 30

Tabloul (7, 16, 20, 25, 30, 45, 70), pozițiile 1..7. Mijlocul este poziția 4 → **25**; 26 > 25 → căutăm în 5..7, mijlocul 6 → **45**; 26 < 45 → poziția 5 → **30**; 26 ≠ 30 și intervalul se golește.

- a. este o căutare secvențială. b. lipsește comparația cu 45. d. începe de la capăt, nu din mijloc.

### 3. Valoarea maximă a lui `ceil(1+sqrt(x%26))` → d. 6

`x%26` ia valori între 0 și 25. Cea mai mare valoare este 25: $1 + \sqrt{25} = 6$, iar `ceil(6) = 6`. Pentru 24, $1+\sqrt{24} \approx 5{,}9$ → tot 6. Nu se poate ajunge la 7, deci maximul este **6**.

- a. 27 ar presupune `x%26` = 26 și fără radical. b, c. valori prea mari.

### 4. Antepenultimul set generat → b. lego, șah

Se afișează perechile (i, j) cu i ≠ j și `i*j != 4` — condiția exclude perechile (1,4) și (4,1), adică jenga cu șah. În ordinea generării:

(1,2), (1,3), (2,1), (2,3), (2,4), (3,1), (3,2), **(3,4)**, (4,2), (4,3).

Antepenultimul (al treilea de la final) este **(3,4)** = (lego, șah).

### 5. Diferența m − n → b. `dif-1`

La fiecare pas `x` crește cu 1, `y` scade cu 1 și `dif` crește cu 2. Dacă $m-n$ este par, bucla se termină cu `x == y` și `dif = m − n`. Dacă $m-n$ este impar, bucla „sare” peste egalitate și se termină cu `x = y + 1`; atunci `dif` a numărat un pas în plus: `dif = m − n + 1`. Corecția este `dif = dif - 1`.

Exemplu: n = 2, m = 5 → după 2 pași x = 4, y = 3, dif = 4 → `dif-1 = 3` ✔.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Bucla interioară este algoritmul lui Euclid prin scăderi (varianta în care se oprește la `y = 0`): la final `x = cmmdc(m, n)`. Bucla exterioară încearcă pe rând n, n−1, n−2, … până găsește o valoare cu `cmmdc(m, valoare) ≠ 1`. Cum `n` scade **înainte** de calcul, se afișează `n+1`, adică chiar valoarea găsită: **cel mai mare număr ≤ n care nu este prim cu m**.

#### a) Pentru m = 27, n = 38 → **36**

- 38: cmmdc(27, 38) = 1 → continuă;
- 37: cmmdc(27, 37) = 1 → continuă;
- 36: cmmdc(27, 36) = 9 ≠ 1 → stop.

Se afișează **36**. *(6p)*

#### b) m = 5 și se afișează 10

Primul număr ≤ n care are un divizor comun cu 5 (adică multiplu de 5) trebuie să fie 10. Asta se întâmplă pentru orice n din **[10, 14]** (pentru 15 s-ar afișa 15). Exemplu: **10** și **14**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, x, y;
    cin >> m >> n;
    do
    {
        x = m; y = n; n = n - 1;
        do
        {
            if (x > y) x = x - y;
            else y = y - x;
        } while (y != 0);
    } while (x == 1);
    cout << n + 1;
    return 0;
}
```

„repetă … până când C” devine `do { … } while (!C);` — de aceea `până când y=0` devine `while (y != 0)` și `până când x≠1` devine `while (x == 1)`.

#### d) A doua structură „repetă” înlocuită cu test inițial *(6p)*

La intrarea în bucla interioară `y = n ≥ 2`, deci `y ≠ 0` și corpul s-ar executa oricum măcar o dată; structura cu test inițial este echivalentă.

```text
citește m, n (numere naturale, 1<m<n)
┌repetă
│  x ← m; y ← n; n ← n − 1
│ ┌cât timp y ≠ 0 execută
│ │ ┌dacă x > y atunci x ← x − y
│ │ │altfel y ← y − x
│ │ └■
│ └■
└până când x ≠ 1
scrie n+1
```

### 2. Al 6-lea element la interclasarea crescătoare *(6p)*

Tablourile A = (20, 15, 9, 4, 2) și B = (50, 18, 16, 10, 1) sunt **descrescătoare**, deci pentru o interclasare crescătoare le parcurgem de la dreapta la stânga: A → 2, 4, 9, 15, 20 și B → 1, 10, 16, 18, 50.

| Element din C | Comparație | Ales |
|---|---|---|
| 1 | 2 cu 1 | 1 |
| 2 | 2 cu 10 | 2 |
| 3 | 4 cu 10 | 4 |
| 4 | 9 cu 10 | 9 |
| 5 | 15 cu 10 | 10 |
| 6 | **15 cu 16** | 15 |

Răspuns: **xa = 15, xb = 16** (câte 3p).

### 3. Compararea a două numere de telefon *(6p)*

Mai întâi verificăm țara; doar dacă țara coincide are sens să comparăm zona.

```cpp
if (cT1 == cT2)
{
    if (cZ1 == cZ2)
        cout << "aceeasi zona sau retea " << nL1 << ' ' << nL2;
    else
        cout << "aceeasi tara, dar zone sau retele diferite";
}
else
    cout << "tari diferite";
```

*Barem: câte 2p pentru fiecare mesaj afișat corect în cazul lui.*

## Subiectul al III-lea (30 de puncte)

### 1. Înlocuirea secvențelor 25 cu 26 — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga. O cifră `c = 5` face parte dintr-o secvență 25 exact când cifra din stânga ei, `[n/10]%10`, este 2; atunci o înlocuim cu 6. Reconstruim numărul cu o putere a lui 10, astfel încât ordinea cifrelor (inclusiv zerourile de la final) să se păstreze.

```text
citește n (număr natural, n ≥ 10)
r ← 0; p ← 1
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c = 5 și [n/10]%10 = 2 atunci
│ │  c ← 6
│ └■
│  r ← c*p + r; p ← p*10
│  n ← [n/10]
└■
scrie r
```

**Verificare:** 202535255 → secvențele 25 de pe pozițiile „2025…” și „…5255” se înlocuiesc → **202635265** ✔ (am rulat aceeași logică în C++ și am obținut exact acest rezultat).

### 2. Eliminarea jucăriei a doua și a penultimei *(10p)*

Eliminăm un element prin **deplasarea la stânga** a celor de după el. Ștergem întâi penultimul (poziția n−1), apoi al doilea (poziția 2) — așa poziția celui de-al doilea nu se schimbă între cele două ștergeri. Cum n ≥ 4, cele două poziții sunt distincte.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i;
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    // eliminăm întâi penultimul (poziția n-1), apoi al doilea (poziția 2)
    for (i = n - 1; i < n; i++)
        v[i] = v[i + 1];
    n--;
    for (i = 2; i < n; i++)
        v[i] = v[i + 1];
    n--;
    for (i = 1; i <= n; i++)
        cout << v[i] << ' ';
    return 0;
}
```

**Verificare:** 85 36 26 12 25 → fără 36 (al doilea) și 12 (penultimul) → **85 26 25** ✔.

### 3. Cea mai mare putere a lui 13 care divide n!

#### a) Descrierea algoritmului *(2p)*

Exponentul unui număr prim $q$ în $n!$ este dat de **formula lui Legendre**:

$$p = \left[\frac{n}{13}\right] + \left[\frac{n}{13^2}\right] + \left[\frac{n}{13^3}\right] + \dots$$

$[n/13]$ numără multiplii lui 13 din 1..n, $[n/169]$ adaugă câte un 13 în plus pentru multiplii lui 169 etc. Calculăm suma cu o variabilă `put` care se înmulțește cu 13 cât timp `put ≤ n`.

**Eficiență:** se fac doar $\log_{13} n$ pași (cel mult 8 pentru $n \le 10^9$) — mult mai bine decât parcurgerea tuturor numerelor 1..n; memorie O(1). Folosim `long long` pentru `put`, ca înmulțirea cu 13 să nu depășească domeniul.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ofstream g("bac.txt");
    long long n, put = 13, p = 0;
    cin >> n;
    while (put <= n)
    {
        p = p + n / put;
        put = put * 13;
    }
    g << p;
    g.close();
    return 0;
}
```

**Verificare:** n = 28 → $[28/13] = 2$, $[28/169] = 0$ → **2** ✔.

## Ce merită reținut din model

- **Împărțirea întreagă** în C/C++: `20/25` este 0.
- **Căutare binară:** pornește mereu din mijloc și înjumătățește intervalul.
- **„repetă … până când C”** se scrie `do { … } while (!C);`.
- **Interclasare crescătoare a unor tablouri descrescătoare:** parcurge-le de la final.
- **Formula lui Legendre** pentru exponentul unui prim în $n!$.

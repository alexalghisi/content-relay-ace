Rezolvarea completă a **simulării de Bacalaureat 2018 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (30 de puncte)

### 1. Valoarea expresiei `2018/3/22` → a. 30 *(4p)*

Toți operanzii sunt întregi, deci împărțirea este **întreagă** și se face de la stânga la dreapta: 2018 / 3 = 672, apoi 672 / 22 = **30**.

### 2. Algoritmul în pseudocod

Algoritmul caută descompuneri n = x + y + z cu $1 \le x < y \le [n/3]$ și afișează tripletele în care z are aceeași paritate cu x; la final scrie `#`.

#### a) Pentru n = 9 → **135\*234\*#** *(6p)*

[9/3] = 3, deci perechile (x, y) sunt (1,2), (1,3), (2,3):

| x | y | z = 9 − x − y | z%2 = x%2? | Afișare |
|---|---|---|---|---|
| 1 | 2 | 6 | 0 ≠ 1 | — |
| 1 | 3 | 5 | 1 = 1 | 135* |
| 2 | 3 | 4 | 0 = 0 | 234* |

Se afișează **135\*234\*#**.

#### b) Cel mai mic n pentru un singur `*` → **6** *(4p)*

Ca să existe măcar o pereche x < y, trebuie [n/3] ≥ 2, adică n ≥ 6. Pentru n = 6 singura pereche este (1, 2), cu z = 3, impar ca x = 1 → se afișează o dată `123*`. Răspuns: **6**.

#### c) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural)
┌pentru x ← 1,[n/3] execută
│  y ← x+1
│ ┌cât timp y≤[n/3] execută
│ │  z ← n-x-y
│ │ ┌dacă z%2=x%2 atunci scrie x,y,z,'*'
│ │ └■
│ │  y ← y+1
│ └■
└■
scrie '#'
```

Contorul x pornește de la 1 și crește automat cu 1, deci dispar atribuirile `x ← 1` și `x ← x+1`.

#### d) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, z;
    cin >> n;
    x = 1;
    while (x <= n / 3)
    {
        y = x + 1;
        while (y <= n / 3)
        {
            z = n - x - y;
            if (z % 2 == x % 2) cout << x << y << z << '*';
            y = y + 1;
        }
        x = x + 1;
    }
    cout << '#';
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

## Subiectul al II-lea (30 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **c** (câte 4 puncte).

### 1. Perechile (±2018, 0), (0, ±2018) → c. `abs(di)+abs(dj)==2018 && abs(di)*abs(dj)==0`

Produsul nul înseamnă că una dintre valori este 0; atunci suma modulelor egală cu 2018 cere ca cealaltă să fie ±2018. Exact cele 4 perechi.

- a. `abs(di)-abs(dj)==2018` exclude (0, ±2018). Greșit.
- b. Împarte la `abs(dj)`, care poate fi 0. Greșit.
- d. Suma modulelor 0 înseamnă ambele 0. Greșit.

### 2. Condiția pentru r = m − n → c. `x<y`

x urcă de la n, y coboară de la m, iar r numără pașii. Cu `x<y`, bucla se oprește când x și y se întâlnesc (x = y, diferență pară) sau se încrucișează (x = y + 1, diferență impară). Apoi `r=2*r` și se scade 1 dacă s-au încrucișat.

Verificare cu n = 0, m = 3: (x, y, r) = (1, 2, 1), (2, 1, 2) → stop; r = 4, x ≠ y → r = **3** ✔. Cu m = 2: (1, 1, 1) → stop; r = 2 ✔.

### 3. Media și mesajul ACTUAL / ISTORIC *(6p)*

```cpp
cout << (temp1 + temp2) / 2.0 << '\n';
if (an1 == 2018 && an2 == 2018) cout << "ACTUAL";
else cout << "ISTORIC";
```

Împărțim la `2.0`, nu la `2`: altfel media a două întregi ar fi trunchiată (20 și 21 ar da 20 în loc de 20.5).

### 4. √n scris ca x · √y, cu x maxim

#### a) Algoritmul în pseudocod *(10p)*

$\sqrt{n} = x\sqrt{y}$ înseamnă $n = x^2 \cdot y$. Pentru x maxim, $x^2$ trebuie să fie cel mai mare pătrat perfect care îl divide pe n.

```text
citește n (număr natural, n≥1)
x ← 1
d ← 1
┌cât timp d*d≤n execută
│ ┌dacă n%(d*d)=0 atunci
│ │  x ← d
│ └■
│  d ← d+1
└■
y ← [n/(x*x)]
scrie x,' ',y
```

Exemplu: 15000 = $50^2 \cdot 6$ → se scrie **50 6**; 9 = $3^2 \cdot 1$ → **3 1** ✔.

#### b) Rolul variabilelor, date de intrare și de ieșire *(6p)*

- **n** — numărul citit;
- **d** — contor, candidatul curent pentru x (parcurge 1, 2, … cât timp $d^2 \le n$);
- **x** — cel mai mare d găsit cu $d^2$ divizor al lui n;
- **y** — ce rămâne sub radical, $n / x^2$.

**Date de intrare:** n. **Date de ieșire:** x și y.

## Subiectul al III-lea (30 de puncte)

### 1. Condiția pentru valorile 8 → b. `i+j>=7 && i+j<=9` *(4p)*

Valorile 8 stau pe diagonala secundară ($i + j = 8$) și pe paralelele vecine ($i + j = 7$ și $9$), deci condiția este $7 \le i+j \le 9$. Variantele cu `||` sunt adevărate pentru orice element.

### 2. Tablou pentru căutarea binară cu comparațiile 22, 3, 18 *(6p)*

Tabloul trebuie să fie **ordonat** (crescător). Cu 7 elemente (pozițiile 1…7):

1. mijlocul este poziția 4 → `a[4] = 22`; 20 < 22 → căutăm în pozițiile 1…3;
2. mijlocul este poziția 2 → `a[2] = 3`; 20 > 3 → căutăm în poziția 3;
3. `a[3] = 18` ≠ 20 → căutarea se termină fără succes.

Un tablou posibil: **1, 3, 18, 22, 30, 40, 50** (prima valoare < 3, ultimele trei > 22, iar 20 lipsește).

### 3. Pereche descentrată de numere *(10p)*

Pentru un număr a cu L cifre (L impar), fie $p = 10^{L/2}$. Atunci `a / p` este partea stângă **inclusiv** cifra din mijloc, iar `a % p` partea dreaptă. Numărul cu cifra din mijloc dublată este `(st*10 + st%10)*p + a%p`. Verificăm dacă vreun termen al șirului este egal cu acest număr.

```cpp
#include <iostream>
using namespace std;

int nrcif(int a)
{
    int k = 0;
    do { k++; a /= 10; } while (a);
    return k;
}

int dubleaza(int a)          // a are număr impar de cifre
{
    int L = nrcif(a), p = 1;
    for (int i = 1; i <= L / 2; i++) p *= 10;
    int st = a / p;          // jumătatea stângă, inclusiv cifra din mijloc
    return (st * 10 + st % 10) * p + a % p;
}

int main()
{
    int n, v[101], gasit = 0;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> v[i];
    for (int i = 0; i < n && !gasit; i++)
        if (nrcif(v[i]) % 2 == 1)
            for (int j = 0; j < n && !gasit; j++)
                if (dubleaza(v[i]) == v[j]) gasit = 1;
    if (gasit) cout << "DA";
    else cout << "NU";
    return 0;
}
```

**Verificare:** 233 → p = 10, st = 23, rezultat (230 + 3) · 10 + 3 = 2333, care se află în șir → **DA** ✔. Rezultatul are un număr par de cifre, deci perechea este validă.

### 4. Inserarea lui x pentru număr asociat minim

#### a) Descrierea algoritmului *(2p)*

Ca numărul să fie minim, x trebuie pus **înaintea primului termen mai mare decât el**: înaintea unei cifre mai mici sau egale numărul ar crește. Citim termenii unul câte unul și îi afișăm imediat; la primul termen mai mare decât x, afișăm mai întâi x. Dacă nu există un astfel de termen, x se afișează la final.

**Eficiență:** fiecare termen este citit și afișat o singură dată → timp **liniar**; nu memorăm șirul → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, t, pus = 0;
    f >> x;
    while (f >> t)
    {
        if (!pus && t > x) { cout << x << ' '; pus = 1; }
        cout << t << ' ';
    }
    if (!pus) cout << x;
    f.close();
    return 0;
}
```

**Verificare** pentru x = 6 și șirul 1 7 5: 6 se pune înaintea lui 7 → `1 6 7 5` ✔.

## Ce merită reținut din simulare

- **Împărțirea întreagă** între `int`-uri trunchiază la fiecare pas; pentru medii folosește `2.0`.
- **„Una dintre valori e 0”** se scrie elegant cu produsul: `a*b==0`.
- **Căutarea binară** cere tablou ordonat; urmărește mijlocul fiecărui interval.
- **Lucrul cu cifre:** împarte numărul cu o putere a lui 10 ca să obții partea stângă și partea dreaptă.
- **Inserare pentru număr minim:** cifra se pune înaintea primei cifre mai mari decât ea.

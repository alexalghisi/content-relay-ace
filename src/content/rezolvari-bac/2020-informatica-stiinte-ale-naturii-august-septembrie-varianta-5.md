Rezolvarea completă a subiectului de **Bacalaureat 2020 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **b**, 3 – **d**, 4 – **a**, 5 – **c** (câte 4 puncte).

### 1. Valoarea maximă a lui `x%2020` → b. 2019

Restul împărțirii la 2020 este un întreg din [0, 2019]; 2019 se obține pentru x = 2019.

### 2. Rezultatul interclasării → b. (2,3,5,8,22,25,32,45,48,60)

Interclasarea crescătoare păstrează toate cele 10 elemente, în ordine crescătoare. Varianta a pierde elemente, c nu este ordonată, d doar alipește tablourile.

### 3. Tabloul pentru care se compară 20, 2, 0 → d. (0,2,4,20,30,32,40)

Indici 0…6: mijlocul 3 → **20** > 0, căutăm în [0, 2]; mijlocul 1 → **2** > 0, căutăm în [0, 0]; se compară **0** — găsit ✔. În a, mijlocul este 4; în b, 8; c nu este ordonat.

### 4. Discriminantul → a. `pow(B,2)-4*A*C`

`pow(B,2)` = $B^2$. Variantele b și d folosesc rădăcina pătrată, iar c ridică întregul discriminant la pătrat.

### 5. Calculul lui 2ⁿ → c. `n%2==1`

Este algoritmul de ridicare rapidă la putere: când exponentul n este **impar**, înmulțim rezultatul cu baza și scădem 1 din n; când este par, ridicăm baza la pătrat și înjumătățim n. Invariantul $y \cdot x^n = 2^{n_0}$ se păstrează, iar la final n = 0, deci $y = 2^{n_0}$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră c a lui n: dacă c < 5 se scade 2·c din m, altfel se adună c. La final, dacă m = 0 se afișează DA, altfel m urmat de NU.

#### a) Pentru 247388 → **5NU**

Cifrele de la dreapta: +8, +8, −6, +7, −8, −4 → m = 5 → se afișează **5NU**. *(6p)*

#### b) Două numere de 3 cifre distincte pentru care se afișează DA

Avem nevoie de două cifre x, y < 5 și o cifră z ≥ 5 cu 2·(x + y) = z: de exemplu **126** (6 − 4 − 2 = 0) și **138** (8 − 6 − 2 = 0). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, m = 0, c;
    cin >> n;
    do
    {
        c = n % 10; n = n / 10;
        if (c < 5) m = m - 2 * c;
        else m = m + c;
    } while (n != 0);
    if (m == 0) cout << "DA";
    else cout << m << "NU";
    return 0;
}
```

#### d) Structura „repetă” înlocuită cu una cu test inițial *(6p)*

Pentru n = 0, bucla „repetă” face un pas cu c = 0, care nu schimbă m; deci testul inițial `n ≠ 0` este echivalent.

```text
citește n (număr natural)
m ← 0
┌cât timp n ≠ 0 execută
│  c ← n%10; n ← [n/10]
│ ┌dacă c < 5 atunci m ← m − 2*c
│ │altfel m ← m + c
│ └■
└■
┌dacă m = 0 atunci scrie 'DA'
│altfel scrie m, 'NU'
└■
```

### 2. Producătorul procesoarelor *(6p)*

```cpp
char p1, p2;
// ... (literele sunt deja memorate)
if (p1 == p2)
{
    if (p1 == 'I') cout << "Intel";
    else cout << "Advanced Micro Devices";
}
else cout << "Producatori diferiti";
```

### 3. Ordonarea valorilor pare, cu cea impară pe loc *(6p)*

Afișăm valorile inițiale, apoi identificăm poziția valorii impare și afișăm celelalte două în ordine crescătoare pe pozițiile rămase.

```cpp
cout << x1 << ' ' << x2 << ' ' << x3 << '\n';
if (x1 % 2 == 1)
    cout << x1 << ' ' << min(x2, x3) << ' ' << max(x2, x3);
else if (x2 % 2 == 1)
    cout << min(x1, x3) << ' ' << x2 << ' ' << max(x1, x3);
else
    cout << min(x1, x2) << ' ' << max(x1, x2) << ' ' << x3;
```

Pentru x1 = 8, x2 = 5, x3 = 4 → „8 5 4” și „4 5 8” ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Al k-lea p-număr din [a, b] — pseudocod *(10p)*

Pentru fiecare x din [a, b] calculăm suma divizorilor și verificăm dacă are aceeași paritate cu x. Numărăm p-numerele și ne oprim la al k-lea.

```text
citește a, b, k (numere naturale nenule, a≤b)
nr ← 0; rez ← −1; x ← a
┌cât timp x ≤ b și rez = −1 execută
│  s ← 0
│ ┌pentru d ← 1, x execută
│ │ ┌dacă x%d = 0 atunci s ← s + d
│ │ └■
│ └■
│ ┌dacă x%2 = s%2 atunci
│ │  nr ← nr + 1
│ │ ┌dacă nr = k atunci rez ← x
│ │ └■
│ └■
│  x ← x + 1
└■
scrie rez
```

**Exemplu:** în [27, 50], p-numerele sunt 30, 32, **34**, … → pentru k = 3 se scrie 34 ✔.

### 2. Înlocuirea numerelor de trei cifre cu oglinditele lor *(10p)*

Un număr de trei cifre are un număr distinct „în oglindă” exact când ultima lui cifră nu este 0 (altfel oglinditul ar avea mai puține cifre, ca la 100 sau 180) și nu este palindrom (ca 121).

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[55], schimbat = 0;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n; i++)
        if (a[i] >= 100 && a[i] <= 999 && a[i] % 10 != 0)
        {
            int og = a[i] % 10 * 100 + a[i] / 10 % 10 * 10 + a[i] / 100;
            if (og != a[i]) { a[i] = og; schimbat = 1; }
        }
    if (schimbat)
        for (int i = 0; i < n; i++) cout << a[i] << ' ';
    else cout << "nu exista";
    return 0;
}
```

Test: (721, 72, 6, 108, 180, 1221, 121, 537, 1000) → **127 72 6 801 180 1221 121 735 1000**; (525, 72, 6, 120) → **nu exista** ✔.

### 3. Cel mai mic interval (a, b) care conține tot șirul

#### a) Descrierea algoritmului *(2p)*

Intervalul deschis cel mai scurt care conține toate numerele este (min − 1, max + 1). Citim șirul o singură dată, actualizând minimul și maximul.

**Eficiență:** o singură parcurgere → timp **liniar** O(n); doar două variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, mn = 1000000001, mx = 0;
    while (f >> x)
    {
        if (x < mn) mn = x;
        if (x > mx) mx = x;
    }
    cout << mn - 1 << ' ' << mx + 1;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** min = 2, max = 350 → se afișează **1 351** ✔.

## Ce merită reținut din varianta 5

- **Interclasarea** păstrează toate elementele, în ordine.
- **Ridicare rapidă la putere:** exponent impar → înmulțești rezultatul; par → ridici baza la pătrat.
- **`pow(B,2)`** = $B^2$; `sqrt` este rădăcina pătrată.
- **Oglinditul unui număr de 3 cifre** există doar dacă ultima cifră e nenulă și numărul nu e palindrom.
- **Interval minim (a, b):** (min − 1, max + 1).

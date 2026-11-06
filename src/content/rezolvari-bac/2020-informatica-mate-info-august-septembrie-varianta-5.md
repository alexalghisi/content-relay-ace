Rezolvarea completă a subiectului de **Bacalaureat 2020 la Informatică, limbajul C/C++, profil mate-info**, sesiunea august–septembrie, **varianta 5**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **c**, 3 – **c**, 4 – **d**, 5 – **b** (câte 4 puncte).

### 1. Valoarea maximă a lui `x%2020` → b. 2019

Restul împărțirii la 2020 este un întreg din [0, 2019]. Valoarea 2019 se obține, de exemplu, pentru x = 2019.

### 2. Apelul care afișează `*` de trei ori → c. `f(17)`

Fiecare apel afișează o steluță și, dacă x > 5, se autoapelează cu (x+1)/2.

- `f(17)` → `f(9)` → `f(5)` (stop) → **3** steluțe ✔.
- `f(30)` → 15 → 8 → 4: 4 steluțe. `f(21)` → 11 → 6 → 3: 4 steluțe. `f(8)` → 4: 2 steluțe.

### 3. A șasea soluție → c. (căpșune, mere, portocale)

Ordinea: căpșune, mere, pepene, pere, portocale; seturi de 3 sau 4 fructe. După (căpșune, mere, pere) urmează extinderea (căpșune, mere, pere, portocale) — a 5-a —, apoi **(căpșune, mere, portocale)** — a 6-a.

### 4. Un frate al nodului 4 → d. 8

În vectorul de „tați” (8, 6, 4, 2, 3, 0, 4, 2, 7), tatăl lui 4 este 2. Fiii lui 2 sunt nodurile pe care apare valoarea 2: **4 și 8**. Deci fratele lui 4 este **8**.

### 5. Numărul minim de muchii → b. 6

Într-un graf eulerian toate gradele sunt pare, iar graful este conex. Nodul de grad 4 este legat de toate celelalte 4 noduri, deci fiecare dintre ele are grad cel puțin 1 — adică, fiind par, cel puțin 2. Suma gradelor este cel puțin $4 + 4 \cdot 2 = 12$, deci cel puțin **6** muchii. Se poate: nodul 1 legat de toate, plus muchiile [2,3] și [4,5].

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră c a lui n: dacă c < 5 se scade 2·c din m, altfel se adună c. La final, dacă m = 0 se afișează DA, altfel m urmat de NU.

#### a) Pentru 247388 → **5NU**

Cifrele de la dreapta: 8 → +8, 8 → +8, 3 → −6, 7 → +7, 4 → −8, 2 → −4. Total m = 5 ≠ 0 → se afișează **5NU**. *(6p)*

#### b) Două numere de 3 cifre distincte pentru care se afișează DA

Avem nevoie de două cifre x, y < 5 și o cifră z ≥ 5 cu 2·(x + y) = z (în orice ordine). De exemplu x = 1, y = 2, z = 6 → **126** (6 − 4 − 2 = 0) și x = 1, y = 3, z = 8 → **138**. *(6p)*

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

### 2. Structura procesor *(6p)*

```cpp
struct procesor
{
    char producator;
    int frecventa;
    float pret;
} p[20];
```

Producătorul este o literă → `char`; frecvența este număr natural → `int`; prețul este real → `float`. `p` este un tablou de 20 de structuri, de aceea apare `p[0]`.

### 3. Ordonarea elementelor pare de pe coloana a 3-a *(6p)*

Coloana a 3-a are indicele 2. Aplicăm o sortare prin interschimbare, dar comparăm și interschimbăm **doar perechile de elemente pare**; elementele impare nu se mișcă.

```cpp
for (i = 0; i < 5; i++)
    for (j = i + 1; j < 6; j++)
        if (a[i][2] % 2 == 0 && a[j][2] % 2 == 0 && a[i][2] > a[j][2])
        {
            k = a[i][2];
            a[i][2] = a[j][2];
            a[j][2] = k;
        }
```

Pe exemplu, coloana 4, 8, 5, 2, 1, 0 devine **0, 2, 5, 4, 1, 8** ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul kpn *(10p)*

Pentru fiecare număr din [a, b] calculăm suma divizorilor (cu perechile (d, x/d) până la $\sqrt{x}$) și verificăm dacă are aceeași paritate cu numărul. Numărăm p-numerele și returnăm al k-lea.

```cpp
int sumaDiv(int x)
{
    int s = 0;
    for (int d = 1; d * d <= x; d++)
        if (x % d == 0)
        {
            s += d;
            if (d != x / d) s += x / d;
        }
    return s;
}

int kpn(int a, int b, int k)
{
    int nr = 0;
    for (int x = a; x <= b; x++)
        if (x % 2 == sumaDiv(x) % 2)
        {
            nr++;
            if (nr == k) return x;
        }
    return -1;
}
```

**Exemplu:** în [27, 50], p-numerele sunt 30, 32, **34**, … → pentru k = 3 se returnează 34 ✔.

### 2. Înlocuirea cuvintelor cu oglinditele lor *(10p)*

Din exemplu se vede că „era” devine „are” chiar dacă „are” nu apare în text: un cuvânt are un cuvânt-oglindă **distinct** exact când **nu este palindrom**. Așadar inversăm, direct în șir, fiecare cuvânt cu număr impar de litere care nu este palindrom.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin.getline(s, 101);
    int n = strlen(s), i = 0, schimbat = 0;
    while (i < n)
    {
        int j = i;
        while (j < n && s[j] != ' ') j++;      // cuvântul este s[i..j-1]
        int L = j - i;
        if (L % 2 == 1)
        {
            int pal = 1;
            for (int t = 0; t < L / 2; t++)
                if (s[i + t] != s[j - 1 - t]) pal = 0;
            if (!pal)
            {
                for (int t = 0; t < L / 2; t++)
                {
                    char aux = s[i + t];
                    s[i + t] = s[j - 1 - t];
                    s[j - 1 - t] = aux;
                }
                schimbat = 1;
            }
        }
        i = j + 1;
    }
    if (schimbat) cout << s;
    else cout << "nu exista";
    return 0;
}
```

Test: „era o selectie reper de desene animate prezenta” → **are o selectie reper de desene etamina prezenta** („o” și „reper” sunt palindroame); „un reper pentru desene” → **nu exista** ✔.

### 3. Cel mai mic interval (a, b) care conține toate numerele de două cifre

#### a) Descrierea algoritmului *(2p)*

Intervalul deschis (a, b) cel mai scurt care conține toate numerele de două cifre din șir este (min − 1, max + 1), unde min și max sunt cel mai mic, respectiv cel mai mare număr de două cifre. Citim șirul o dată și actualizăm `mn` și `mx` doar pentru termenii din [10, 99]. Dacă nu am găsit niciunul, afișăm „nu exista”.

**Eficiență:** o singură parcurgere → timp **liniar** O(n); doar câteva variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, mn = 100, mx = 9;
    while (f >> x)
        if (x >= 10 && x <= 99)
        {
            if (x < mn) mn = x;
            if (x > mx) mx = x;
        }
    if (mn == 100) cout << "nu exista";
    else cout << mn - 1 << ' ' << mx + 1;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** numerele de două cifre sunt 40, 11, 15, 10, 18 → min = 10, max = 40 → se afișează **9 41** ✔.

## Ce merită reținut din varianta 5

- **Restul la împărțirea prin m** este din [0, m − 1].
- **Fii ai unui nod** în vectorul de „tați”: pozițiile pe care apare eticheta lui.
- **Graf eulerian:** conex și toate gradele pare — gradul minim al unui nod neizolat este 2.
- **Sortare doar a unor elemente:** compari și interschimbi doar perechile care respectă condiția.
- **Interval minim (a, b):** (min − 1, max + 1).

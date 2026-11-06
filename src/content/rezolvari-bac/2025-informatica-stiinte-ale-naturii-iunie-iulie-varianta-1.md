Rezolvarea completă a subiectului de **Bacalaureat 2025 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **d**, 3 – **b**, 4 – **c**, 5 – **a** (câte 4 puncte).

### 1. Aceeași valoare ca `2025%2019+6` → d. `2025%2021+8`

`2025%2019 = 6`, deci expresia dată valorează $6 + 6 = 12$. Calculăm variantele:

- a. `2025/2020+5` = 1 + 5 = 6.
- b. `2025/2021+8` = 1 + 8 = 9.
- c. `2025%2020+5` = 5 + 5 = 10.
- d. `2025%2021+8` = 4 + 8 = **12** ✔.

### 2. Căutare încheiată după cel mult două comparații → d. 6, 11, 21

Tabloul are 11 elemente (pozițiile 1..11). Prima comparație este cu mijlocul, poziția 6 → **11**. A doua comparație este cu mijlocul jumătății stângi (pozițiile 1..5 → poziția 3 → **6**) sau al celei drepte (pozițiile 7..11 → poziția 9 → **21**). Doar pentru x = 11, 6 sau 21 căutarea se termină (cu succes) după cel mult două comparații.

- a, b, c. conțin valori precum 1, 4, 25, 30, care sunt găsite abia după 3–4 comparații.

### 3. `floor(sqrt(25)-sqrt(20))` → b. 0

$\sqrt{25} = 5$, $\sqrt{20} \approx 4{,}47$, diferența ≈ 0,53, iar `floor` (partea întreagă inferioară) dă **0**.

- a. −1 ar apărea doar pentru o diferență negativă. c. 1 ar fi `ceil`. d. 5 ignoră scăderea.

### 4. Interschimbare fără variabilă auxiliară → c. `y=x-y;`

După `x=x+y`, x memorează suma $x_0+y_0$. Cu `y=x-y` obținem $y = x_0$; apoi `x=x-y` dă $x = (x_0+y_0) - x_0 = y_0$ ✔.

- a. `x=y-x` modifică tot x, iar y rămâne $y_0$.
- b. `y=x+y` dă $x_0 + 2y_0$.
- d. `y=y-x` dă $-x_0$.

### 5. p = 3!·5! → a. `f*(i-1)*i`

Se intră în `if` doar pentru i = 3 și i = 5. Vrem ca `f` să devină 3! = 6 și apoi 5! = 120, adică să înmulțim cu factorii care lipsesc:

- i = 3: `f = 1·2·3 = 6` ✔;
- i = 5: `f = 6·4·5 = 120` ✔ → p = 6 · 120.

Celelalte: b. dă 12 la i = 3; c. dă 3, apoi 15; d. dă 6, apoi $3\cdot4\cdot5 = 60 \ne 5!$.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare i de la m în sus, bucla „cât timp” găsește cel mai mic x cu $x^2 \ge i$. Dacă $x^2 = i$, `i` este **pătrat perfect** și îl reținem în `nr`, iar căutarea se oprește. Algoritmul afișează **primul pătrat perfect din [m, n]**, sau 0 dacă nu există.

#### a) Pentru m = 7, n = 17 → **9**

7 și 8 nu sunt pătrate perfecte; 9 = $3^2$ → `nr = 9`, stop. *(6p)*

#### b) n = 25 și se afișează 25

Primul pătrat perfect ≥ m trebuie să fie 25, deci $16 < m \le 25$: orice m din **[17, 25]**, de exemplu **17** și **25**. *(câte 3p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, nr = 0, i, x;
    cin >> m >> n;
    i = m;
    do
    {
        x = 1;
        while (x * x < i)
            x = x + 1;
        if (x * x == i) nr = i;
        else i = i + 1;
    } while (!(i > n || nr != 0));
    cout << nr;
    return 0;
}
```

`până când i>n sau nr≠0` devine `while (!(i > n || nr != 0))`, adică `while (i <= n && nr == 0)`.

#### d) Structura „cât timp” înlocuită cu test final *(6p)*

Pentru i = 1 bucla „cât timp” nu se execută deloc (1·1 < 1 e fals). Pornim de la x = 0 și incrementăm înainte de test — astfel prima verificare se face tot pentru x = 1, iar algoritmul rămâne echivalent:

```text
citește m, n (numere naturale nenule, m ≤ n)
nr ← 0; i ← m
┌repetă
│  x ← 0
│ ┌repetă
│ │  x ← x + 1
│ └până când x*x ≥ i
│ ┌dacă x*x = i atunci nr ← i
│ │altfel i ← i + 1
│ └■
└până când i > n sau nr ≠ 0
scrie nr
```

### 2. Valorile din B comparate cu 7 *(6p)*

Interclasare crescătoare, parcurgând de la dreapta la stânga: A → 4, 7, 9, 10, 15, 20; B → 5, 6, 8, 12, 21.

| Comparație | Se adaugă |
|---|---|
| 4 cu 5 | 4 |
| **7 cu 5** | 5 |
| **7 cu 6** | 6 |
| **7 cu 8** | 7 |

Mulțimea cerută: **{5, 6, 8}**.

### 3. Prăjitura cu sau fără cremă *(6p)*

```cpp
char c;
if (c == 'N')
    cout << "crema NU";
else
    cout << "crema DA";
cout << endl << "pret " << p;
```

Literele se compară cu **constante de tip caracter** (`'N'`, între apostrofuri). Pentru c = 'V', p = 10 se afișează `crema DA` și pe linia următoare `pret 10` ✔.

## Subiectul al III-lea (30 de puncte)

### 1. Suma ascendenților lui n din [x, y] — pseudocod *(10p)*

Fie `u` cifra unităților lui n. Parcurgem toate numerele i din [x, y] și verificăm dacă **toate** cifrele lui i sunt ≥ u. Folosim o structură cu test final pentru cifre, ca să tratăm corect și numărul 0.

```text
citește n, x, y (numere naturale, x < y)
u ← n%10; s ← 0
┌pentru i ← x, y execută
│  t ← i; ok ← 1
│ ┌repetă
│ │ ┌dacă t%10 < u atunci ok ← 0
│ │ └■
│ │  t ← [t/10]
│ └până când t = 0
│ ┌dacă ok = 1 atunci s ← s + i
│ └■
└■
scrie s
```

**Verificare:** n = 827 (u = 7), x = 9, y = 800 → numerele cu toate cifrele în {7, 8, 9} → suma **7893** ✔ (verificat și prin rularea aceleiași logici în C++).

### 2. Șirul semioglindit *(10p)*

Dacă n este par, cu k = n/2, interschimbăm `v[i]` cu `v[i+k]` pentru i = 1..k — astfel prima jumătate trece în locul celei de-a doua, păstrându-și ordinea.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[101], i, k, aux;
    cin >> n;
    for (i = 1; i <= n; i++)
        cin >> v[i];
    if (n % 2 == 1)
        cout << "nu exista";
    else
    {
        k = n / 2;
        for (i = 1; i <= k; i++)
        {
            aux = v[i]; v[i] = v[i + k]; v[i + k] = aux;
        }
        for (i = 1; i <= n; i++)
            cout << v[i] << ' ';
    }
    return 0;
}
```

**Verificare:** (2, 3, 4, 4, 5, 1) → **4 5 1 2 3 4** ✔.

### 3. Muzee convenabile

#### a) Descrierea algoritmului *(2p)*

Citim intervalul disponibil [h1, h2]. Pentru fiecare muzeu citit [a, b], calculăm **intersecția** celor două intervale: $v_1 = \max(h_1, a)$, $v_2 = \min(h_2, b)$. Cum limitele sunt ore fixe, muzeul poate fi vizitat cel puțin o oră exact când $v_1 < v_2$; atunci creștem contorul.

**Eficiență:** fiecare pereche se citește și se prelucrează o singură dată → timp **liniar**; nu memorăm intervalele, doar câteva variabile → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.in");
    int h1, h2, a, b, v1, v2, nr = 0;
    f >> h1 >> h2;
    while (f >> a >> b)
    {
        v1 = max(h1, a);
        v2 = min(h2, b);
        if (v1 < v2) nr++;
    }
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** disponibil 16–19. Intersecții: 16–18 ✔, 17–19 ✔, 19–19 ✗, 18–19 ✔, 16–13 ✗ → **3** ✔.

## Ce merită reținut din varianta 1

- **Interschimbare fără auxiliar:** `x=x+y; y=x-y; x=x-y;`.
- **Căutare binară:** cu o comparație găsești doar mijlocul, cu două — și mijloacele celor două jumătăți.
- **„repetă … până când C”** devine `do { … } while (!C);`.
- **Intersecția a două intervale:** $[\max(a_1,a_2), \min(b_1,b_2)]$, nevidă dacă stânga < dreapta.
- **Verificarea cifrelor:** folosește o structură cu test final ca să nu ratezi numărul 0.

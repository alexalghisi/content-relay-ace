Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **a**, 3 – **b**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. Expresia cu valoarea 0 → b. `'m'=='M'`

'm' (109) și 'M' (77) au coduri ASCII diferite, deci comparația este falsă. Celelalte sunt adevărate: 'm' < 'n'; 'm' + 'N' − 'n' = 'm' − 32 = 'M'; 'N' = 'M' + 1.

### 2. Suma primelor 20 de numere nenule → a. `21`

$1 + 2 + \dots + 20 = \frac{20 \cdot 21}{2} = 210$. Bucla se execută de 10 ori, deci trebuie să adunăm de fiecare dată 21 (perechile 1+20, 2+19, …, 10+11). Celelalte variante dau 100, 55, respectiv 110.

### 3. Tablourile pe care se aplică direct căutarea binară → b. doar S1 şi S3

Căutarea binară cere un tablou ordonat. S1 este crescător, S3 este descrescător, iar S2 (21, 69, 36, 24, 16) nu este ordonat.

### 4. Partea fracționară a lui x → c. `x-floor(x)`

`floor(x)` este partea întreagă (pentru x pozitiv), deci x − [x] este partea fracționară.

### 5. Condiția pentru testul de primalitate → d. `d*d<=n`

Căutăm divizori până la $\sqrt{n}$ inclusiv; dacă nu găsim niciunul, n este prim. Cu `d*d<n` am rata divizorul √n pentru pătrate perfecte (de exemplu n = 4 sau 9); cu `d+d<n` sau `d+d>=n` testul e greșit pentru numere mici (de exemplu n = 4 ar fi declarat prim).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare cifră x de la 1 la 9 se parcurg cifrele lui n și, de câte ori apare x, se adaugă la finalul lui m. Rezultatul: **cifrele nenule ale lui n, în ordine crescătoare**.

#### a) Pentru 27102 → **1227**

*(6p)*

#### b) Trei numere din [10, 9999] pentru care se afișează 11

Cifrele nenule trebuie să fie exact două de 1: oricare trei dintre **11, 101, 110, 1001, 1010, 1100**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, m = 0, x = 1, cp;
    cin >> n;
    while (x <= 9)
    {
        cp = n;
        while (cp != 0)
        {
            if (cp % 10 == x) m = m * 10 + x;
            cp = cp / 10;
        }
        x = x + 1;
    }
    cout << m;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n (număr natural)
m ← 0
┌pentru x ← 1, 9 execută
│  cp ← n
│ ┌cât timp cp ≠ 0 execută
│ │ ┌dacă cp%10 = x atunci m ← m*10 + x
│ │ └■
│ │  cp ← [cp/10]
│ └■
└■
scrie m
```

### 2. Punct în interiorul cercului unitate *(6p)*

Un punct (x, y) se află în interiorul sau pe cercul cu centrul în origine și raza 1 exact când distanța până la origine este cel mult 1, adică $x^2 + y^2 \le 1$.

```cpp
if (x * x + y * y <= 1) cout << "interior";
else cout << "exterior";
```

### 3. Completarea buclei *(6p)*

Linia i afișează numerele de la 6 − i în jos până la 1.

```cpp
for (i = 1; i <= 5; i++)
{
    for (j = 6 - i; j >= 1; j--)
        cout << j << ' ';
    cout << endl;
}
```

## Subiectul al III-lea (30 de puncte)

### 1. Cel mai mare număr cu produsul divizorilor impari mai mare decât el — pseudocod *(10p)*

Pornim de la b în jos și calculăm produsul divizorilor impari, oprindu-ne imediat ce produsul îl depășește pe x (astfel evităm valori uriașe).

```text
citește a, b (numere naturale, 2≤a<b)
rez ← 0; x ← b
┌cât timp x ≥ a și rez = 0 execută
│  p ← 1; d ← 1
│ ┌cât timp d ≤ x și p ≤ x execută
│ │ ┌dacă x%d = 0 atunci p ← p*d
│ │ └■
│ │  d ← d + 2
│ └■
│ ┌dacă p > x atunci rez ← x
│ └■
│  x ← x − 1
└■
scrie rez
```

**Exemplu:** a = 14, b = 19 → 19: 1·19 = 19 (nu); **18**: 1·3·9 = 27 > 18 → se scrie 18 ✔.

### 2. Segmentul maxim cu elemente egale *(10p)*

Segmentul de dimensiune m are toate elementele egale cu primul. Numărăm câte elemente de la început sunt egale cu `a[0]`.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[25], m = 1;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    while (m < n && a[m] == a[0]) m++;
    cout << m;
    return 0;
}
```

Pentru (2, 2, 2, 5, 2) → **3** ✔.

### 3. Termenii pari în ordine crescătoare

#### a) Descrierea algoritmului *(2p)*

Valorile sunt din [0, 1000], deci folosim un vector de frecvență `v`, completat la citire. Apoi parcurgem indicii pari crescător și afișăm fiecare valoare de `v[i]` ori.

**Eficiență:** o parcurgere a fișierului plus o parcurgere a vectorului de 1001 elemente → timp **liniar**, fără sortare.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int v[1001];

int main()
{
    ifstream f("bac.txt");
    int x;
    while (f >> x) v[x]++;
    for (int i = 0; i <= 1000; i += 2)
        for (int k = 0; k < v[i]; k++) cout << i << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 12 2 3 1 2 5 → **2 2 12** ✔.

## Ce merită reținut din varianta 2

- **Suma lui Gauss:** $1 + \dots + n = n(n+1)/2$.
- **Căutarea binară** funcționează pe tablouri crescătoare sau descrescătoare.
- **Partea fracționară:** `x - floor(x)`.
- **Test de primalitate:** divizori până la `d*d <= n`.
- **Cercul unitate:** $x^2 + y^2 \le 1$.

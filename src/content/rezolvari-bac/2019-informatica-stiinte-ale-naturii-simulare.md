Rezolvarea completă a **simulării pentru Bacalaureat 2019 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **d**, 3 – **a**, 4 – **b**, 5 – **b** (câte 4 puncte).

### 1. Expresia cu valoarea 1 → d. `19/21*3==3/19*21`

Împărțire întreagă: `19/21 = 0` și `3/19 = 0`, deci ambele părți sunt 0 → **1**. Celelalte compară valori diferite (133 cu 0, 3 cu 126, 126 cu 0).

### 2. Expresia afișată → d. `2*i+j`

Pe fiecare linie valorile cresc cu 1, iar fiecare linie începe cu 2 mai mult decât precedenta (0, 2, 4, 6, 8): `2*i+j`.

### 3. Numărarea divizorilor → a. `d*d<n`

Bucla adaugă 2 pentru fiecare pereche de divizori (d, n/d) cu d < √n, iar după buclă se adaugă 1 dacă n este pătrat perfect (d·d = n). Deci bucla trebuie să meargă cât timp `d*d<n`.

### 4. Tablourile interclasate → b. A=(10,2019), B=(2209,25,23,12)

Împreună, A și B trebuie să conțină exact valorile 10, 12, 23, 25, 2019, 2209. Doar a și b au aceste valori; în a, B nu este ordonat (2019, 2209, 23, 25). În b, A este crescător, iar B este descrescător — parcurs de la dreapta la stânga, este tot crescător, deci interclasarea crescătoare dă rezultatul cerut.

### 5. Intervalul pentru `abs(x-10)<2019` → b. (−2009, 2029)

|x − 10| < 2019 ⇔ −2019 < x − 10 < 2019 ⇔ −2009 < x < 2029.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru i de la b în jos până la a se calculează p = exponentul lui k în i. Se reține în y numărul cu cel mai mic exponent nenul (la egalitate rămâne primul găsit, cel mai mare). Dacă niciun număr nu se divide cu k, y rămâne 0.

#### a) Pentru 5, 19, 4 → **12**

Multiplii lui 4 din [5, 19], de sus în jos: 16 (exponent 2) → y = 16; 12 (exponent 1) → y = 12; 8 (exponent 1, nu e mai mic). Se afișează **12**. *(6p)*

#### b) b = 2019, k = 5, se afișează 0

În [a, 2019] nu trebuie să existe multipli de 5; cum 2015 este multiplu de 5, a ∈ [2016, 2019]: cel mai mic **2016**, cel mai mare **2019**. *(6p)*

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

### 2. Ziua din an sau „primavara-vara” *(6p)*

Ianuarie are 31 de zile, deci pentru februarie numărul de ordine al zilei este 31 + zi.

```cpp
if (luna == 1) cout << zi;
else if (luna == 2) cout << 31 + zi;
else cout << "primavara-vara";
```

Pentru zi = 1, luna = 2 → **32** ✔.

### 3. Tablou pentru care 2019 se compară cu trei elemente *(6p)*

Tabloul trebuie să fie ordonat. Cu indici 0…6, prima comparație este cu elementul de pe poziția 3; punem acolo **10** (< 2019, deci căutarea continuă în dreapta). Mijlocul lui [4, 6] este poziția 5; punem acolo **2020** (> 2019, căutarea continuă în stânga). Rămâne poziția 4, a treia comparație.

Exemplu: **(1, 2, 3, 10, 2018, 2020, 2021)**.

## Subiectul al III-lea (30 de puncte)

### 1. Inserarea diferențelor dintre cifre — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și construim rezultatul cu o putere a lui 10: pentru fiecare cifră nouă c (aflată în stânga cifrei anterioare d) punem întâi |c − d|, apoi c.

```text
citește n (număr natural, n≥10)
d ← n%10; r ← d; p ← 10; n ← [n/10]
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c > d atunci dif ← c − d
│ │altfel dif ← d − c
│ └■
│  r ← r + dif*p; p ← p*10
│  r ← r + c*p; p ← p*10
│  d ← c; n ← [n/10]
└■
scrie r
```

**Exemplu:** 7255 → **7523505** ✔.

### 2. Înlocuirea elementelor din {2, 0, 1, 9} cu suma lor *(10p)*

Prima parcurgere calculează suma elementelor egale cu 2, 0, 1 sau 9; a doua le înlocuiește cu această sumă.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[55], s = 0;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        if (a[i] == 2 || a[i] == 0 || a[i] == 1 || a[i] == 9) s = s + a[i];
    }
    for (int i = 0; i < n; i++)
        if (a[i] == 2 || a[i] == 0 || a[i] == 1 || a[i] == 9) a[i] = s;
    for (int i = 0; i < n; i++) cout << a[i] << ' ';
    return 0;
}
```

Test: (7, 9, 0, 57, 9, 1, 20, 19, 1, 16, 2) → **7 22 22 57 22 22 20 19 22 16 22**; (7, 5, 3) → **7 5 3** ✔.

### 3. Șir paritar

#### a) Descrierea algoritmului *(2p)*

Fiecare număr par din prima jumătate trebuie să fie mai mic decât orice număr impar din a doua jumătate. E suficient să comparăm **cel mai mare număr par** din prima jumătate (`p1`) cu **cel mai mic număr impar** din a doua (`i2`, inițial 1000001, pentru cazul în care nu există impare). Șirul este paritar dacă `p1 < i2`.

**Eficiență:** o singură parcurgere → timp **liniar**; doar două variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int n, x, p1 = -1, i2 = 1000001;
    f >> n;
    for (int k = 1; k <= 2 * n; k++)
    {
        f >> x;
        if (k <= n && x % 2 == 0 && x > p1) p1 = x;
        if (k > n && x % 2 == 1 && x < i2) i2 = x;
    }
    if (p1 < i2) cout << "DA";
    else cout << "NU";
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** primul fișier: p1 = 20, i2 = 25 → **DA**; al doilea: p1 = 20, a doua jumătate nu are impare → **DA** ✔.

## Ce merită reținut din simulare

- **Împărțirea întreagă** a unui număr mic la unul mare dă 0.
- **Divizori în perechi** până la √n, cu pătratul perfect tratat separat.
- **|x − a| < r** ⇔ a − r < x < a + r.
- **Căutare binară cu un număr dat de comparații:** fixează valorile pe pozițiile mijloc (3, apoi 5, apoi 4).
- **Comparații „toate cu toate”** se reduc la maxim vs. minim.

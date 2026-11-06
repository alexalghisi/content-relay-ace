Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2021 la Informatică, limbajul C/C++, profil mate-info**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **c**, 2 – **a**, 3 – **d**, 4 – **b**, 5 – **c** (câte 4 puncte).

### 1. Valoarea expresiei `21/2*2-5` → c. 15

Împărțire întreagă, evaluare de la stânga la dreapta: `21/2 = 10`, `10*2 = 20`, `20-5 = 15`.

### 2. Afișarea datei → a. `cout<<x.zi<<" "<<x.luna<<" "<<x.an;`

Câmpurile se accesează cu **variabilă.câmp**: `x.zi`, `x.luna`, `x.an`. Variantele b (ordine inversată), c (sintaxă inexistentă) și d (folosește numele tipului `data`) sunt greșite.

### 3. Valoarea f(3,1) → d. −9

Parametrul `x` este transmis prin valoare, deci fiecare apel are propria copie.

- `f(3,1)`: x = 2 → returnează `f(2,2) - 2`
- `f(2,2)`: x = 3 → returnează `f(1,3) - 3`
- `f(1,3)`: x = 4 → returnează `f(0,4) - 4` = 0 − 4 = −4

Revenind: f(2,2) = −4 − 3 = −7, iar f(3,1) = −7 − 2 = **−9**.

### 4. Numărul maxim de frunze → b. 4

Gradele nodurilor: 1 → 3, 3 → 3, 4 → 2, 5 → 2, iar 2, 6, 7, 8 au gradul 1. Frunzele sunt nodurile de grad 1, **cu excepția rădăcinii**. Alegând drept rădăcină un nod de grad mai mare (de exemplu 1), toate cele 4 noduri de grad 1 sunt frunze → maximul este **4**.

### 5. Muchii eliminate pentru a obține un arbore → c. 190

Graful complet cu 21 de noduri are $21 \cdot 20 / 2 = 210$ muchii. Un graf parțial conex și fără cicluri este un arbore, cu 21 − 1 = 20 de muchii. Se elimină $210 - 20 = $ **190** muchii.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

La fiecare pas se uită la ultima cifră a lui n și o elimină. Dacă acea cifră era **impară**, cifra **următoare** (noua ultimă cifră) se adaugă în stânga lui `nr`; dacă era **pară**, k scade. Se oprește când n devine 0 sau k devine 0.

#### a) Pentru 3845267 și 3 → **46**

| cifra eliminată | paritate | n după | acțiune | nr | k |
|---|---|---|---|---|---|
| 7 | impară | 384526 | adaugă 6 | 6 | 3 |
| 6 | pară | 38452 | k−1 | 6 | 2 |
| 2 | pară | 3845 | k−1 | 6 | 1 |
| 5 | impară | 384 | adaugă 4 | 46 | 1 |
| 4 | pară | 38 | k−1 | 46 | 0 |

k = 0, bucla se oprește → se afișează **46**. *(6p)*

#### b) k = 2, n cu 4 cifre, se afișează 20

Numere de forma $\overline{2x0y}$ cu x, y impare. De exemplu, pentru **2105**: 5 impar → se adaugă 0 (nr = 0); 0 par → k = 1; 1 impar → se adaugă 2 (nr = 20); 2 par → k = 0, stop. Alte exemple: **2301**, **2907**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, k, p = 1, nr, c;
    cin >> n >> k;
    if (k == 0) nr = -1;
    else
    {
        nr = 0;
        do
        {
            c = n % 2; n = n / 10;
            if (c != 0)
            {
                nr = nr + (n % 10) * p;
                p = p * 10;
            }
            else k = k - 1;
        } while (n != 0 && k != 0);
    }
    cout << nr;
    return 0;
}
```

„până când n=0 sau k=0” devine `while (n != 0 && k != 0)` (negația, cu De Morgan).

#### d) Structura „repetă” înlocuită cu una cu test inițial *(6p)*

Pe ramura „altfel”, k ≠ 0. Dacă și n ≠ 0, prima iterație se execută oricum; dacă n = 0, bucla „repetă” ar face un singur pas care nu modifică `nr` (doar k), deci rezultatul afișat este același. Putem folosi direct testul inițial `n ≠ 0 și k ≠ 0`.

```text
citește n, k (numere naturale)
p ← 1
┌dacă k = 0 atunci
│  nr ← −1
│altfel
│  nr ← 0
│ ┌cât timp n ≠ 0 și k ≠ 0 execută
│ │  c ← n%2; n ← [n/10]
│ │ ┌dacă c ≠ 0 atunci
│ │ │  nr ← nr + (n%10)*p; p ← p*10
│ │ │altfel
│ │ │  k ← k − 1
│ │ └■
│ └■
└■
scrie nr
```

### 2. Ultimele trei numere generate cu prima cifră 4 *(6p)*

Un număr de 5 cifre strict crescătoare care începe cu 4 folosește alte 4 cifre din {5, 6, 7, 8, 9}. Sunt 5 astfel de numere, în ordinea generării: 45678, 45679, 45689, 45789, 46789. Ultimele trei: **45689, 45789, 46789**.

### 3. Ce se afișează → **OAIAE** *(6p)*

`k = 'a' - 'A' = 32`, deci `s[i] - k` transformă o literă mică în majusculă. Șirul se parcurge **de la dreapta la stânga**, iar vocalele **mici** se transformă și se afișează: din „A realizat tot” obținem, în ordine inversă, o, a, i, a, e → **OAIAE**. Primul „A” este deja majusculă, deci `strchr("aeiou", 'A')` îl ignoră.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul prime *(10p)*

Căutăm de la n − 1 în jos primul număr prim (acesta este y), apoi continuăm în jos până la următorul (acesta este x).

```cpp
int estePrim(int a)
{
    if (a < 2) return 0;
    for (int d = 2; d * d <= a; d++)
        if (a % d == 0) return 0;
    return 1;
}

void prime(int n, int &x, int &y)
{
    y = n - 1;
    while (!estePrim(y)) y--;
    x = y - 1;
    while (!estePrim(x)) x--;
}
```

**Exemplu:** n = 49 → y = **47**, x = **43** ✔. Cum n ≥ 4, există mereu primele 2 și 3 sub n.

### 2. Tablou cu pătrate perfecte pare descrescătoare *(10p)*

Pătratele perfecte pare sunt $(2t)^2$: 0, 4, 16, 36, … Primele m·n sunt pentru t = 0 … m·n − 1, iar în ordine descrescătoare începem cu t = m·n − 1.

```cpp
#include <iostream>
using namespace std;

int a[105][105];

int main()
{
    int m, n;
    cin >> m >> n;
    int t = m * n - 1;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
        {
            a[i][j] = (2 * t) * (2 * t);
            t--;
        }
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++) cout << a[i][j] << ' ';
        cout << '\n';
    }
    return 0;
}
```

Pentru m = 2, n = 3 → **100 64 36** / **16 4 0** ✔. Valoarea maximă este $(2 \cdot 9999)^2 \approx 4 \cdot 10^8$, încape în `int`.

### 3. Suma maximă pe tip de produs

#### a) Descrierea algoritmului *(2p)*

Tipurile sunt numere din [1, 100], deci folosim un tablou `s`, unde `s[t]` = suma cheltuită pentru tipul t. Pentru fiecare linie (t, nr, pret) citită, adăugăm `nr*pret` la `s[t]`. La final determinăm maximul din `s` și numărăm de câte ori apare.

**Eficiență:** o singură parcurgere a fișierului → timp **liniar** în numărul de linii, plus o parcurgere a celor 100 de tipuri.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("cheltuieli.in");
    long long s[101] = {0}, mx = 0;
    int t, nr, pret, cnt = 0;
    while (f >> t >> nr >> pret)
        s[t] += nr * pret;
    for (int i = 1; i <= 100; i++)
        if (s[i] > mx) { mx = s[i]; cnt = 1; }
        else if (s[i] == mx && mx > 0) cnt++;
    cout << mx << ' ' << cnt;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** s[4] = 10 + 16 = 26, s[1] = 16 + 10 = 26, s[2] = 5 → se afișează **26 2** ✔. Suma poate ajunge la $10^6 \cdot 10^4$, de aceea am folosit `long long`.

## Ce merită reținut din model

- **Parametri prin valoare:** fiecare apel recursiv are propria copie a lui x.
- **Frunze într-un arbore cu rădăcină:** nodurile de grad 1, cu excepția rădăcinii.
- **Arbore parțial al lui $K_n$:** se păstrează n − 1 muchii din $n(n-1)/2$.
- **Litere mici → mari:** se scade `'a' - 'A'` (32).
- **Sume pe categorii:** tablou indexat după categorie, completat pe măsura citirii.

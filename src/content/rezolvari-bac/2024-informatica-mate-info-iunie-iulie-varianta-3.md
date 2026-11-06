Rezolvarea completă a subiectului de **Bacalaureat 2024 la Informatică, limbajul C/C++, profil mate-info**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **d**, 3 – **c**, 4 – **d**, 5 – **b** (câte 4 puncte).

### 1. x și y sunt ambele pare → a. `x%2==0 && (y+1)%2!=0`

`x%2==0` înseamnă x par. `(y+1)%2!=0` înseamnă că y + 1 este impar, adică **y este par**. Conjuncția exprimă exact cerința.

- b. `(x-y)%2==0` și c. `(x+y)%2==0` sunt adevărate și pentru x, y ambele impare (de exemplu 3 și 5).
- d. `x%2==y%2` — tot „aceeași paritate”, deci acceptă și două numere impare.

### 2. Ce afișează `f(2020,0)` → d. 23022100

Pentru x ≥ 10, funcția coboară întâi la `f(x/10, y+1)`, apoi afișează ultima cifră a lui x, iar la final (în orice caz) afișează y.

- f(2,3): afișează 2, apoi 3 → „23”.
- revenire în f(20,2): afișează 0, apoi 2 → „02”.
- revenire în f(202,1): afișează 2, apoi 1 → „21”.
- revenire în f(2020,0): afișează 0, apoi 0 → „00”.

Rezultat: **23022100**.

### 3. A șaptea permutare → c. (2,6,4,1,3,5)

Primele șase permutări au prefixul (2,4,6) și toate cele 6 aranjări ale lui 1, 3, 5 pe ultimele poziții. Următorul prefix par, în ordine lexicografică, este (2,6,4), urmat de cea mai mică aranjare a imparelor: **(2,6,4,1,3,5)**.

- a., b. încep cu 4 → apar după toate permutările care încep cu 2.
- d. conține 2 de două ori — nu e permutare.

### 4. Tipul celui de-al 11-lea sortiment → d. `x[10].tip`

`x` este un **tablou de structuri** numerotat de la 0, deci al 11-lea element este `x[10]`, iar câmpul se accesează cu `.tip`. Variantele a și c folosesc numele tipului (`ciocolata`) ca și cum ar fi câmp; b tratează `tip` ca tablou.

### 5. Numărul maxim de noduri → b. 15

Suma gradelor este $2 \cdot 10 = 20$. Ca să avem cât mai multe noduri, le dăm grade cât mai mici:

- cele 6 noduri cu grad impar au gradul minim **1** → suma 6;
- nodurile cu grad par nenul au gradul minim **2** → rămân $20 - 6 = 14$, adică **7 noduri**;
- plus 2 noduri izolate.

Total: $6 + 7 + 2 = 15$. Se poate construi: trei lanțuri cu capetele de grad 1 și, în total, 7 noduri interioare de grad 2 ($7 + 3 = 10$ muchii).

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr x citit, îl împărțim la 3 (cel puțin o dată) până ajunge ≤ 3. Dacă rezultatul nu este 0, îl înmulțim în p. Se afișează produsul acestor rezultate.

#### a) Pentru 5, 15, 27, 10, 1, 17 → **9**

| x | Împărțiri succesive la 3 | Rezultat |
|---|---|---|
| 15 | 5 → 1 | 1 |
| 27 | 9 → 3 | 3 |
| 10 | 3 | 3 |
| 1 | 0 | 0 (ignorat) |
| 17 | 5 → 1 | 1 |

$p = 1 \cdot 3 \cdot 3 \cdot 1 = 9$. *(6p)*

#### b) n = 2 și se afișează 4

Fiecare rezultat este cel mult 3, deci $4 = 2 \cdot 2$: ambele numere trebuie să ajungă la **2**. Cum se face cel puțin o împărțire, x trebuie să fie de forma $[2 \cdot 3^k, 3^{k+1})$ cu $k \ge 1$, de exemplu 6, 7, 8, 18…26 etc. Un set corect: **6 și 7** (6 → 2, 7 → 2). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, p = 1, i;
    cin >> n;
    for (i = 1; i <= n; i++)
    {
        cin >> x;
        do
        {
            x = x / 3;
        } while (x > 3);
        if (x != 0)
            p = p * x;
    }
    cout << p;
    return 0;
}
```

#### d) Algoritm echivalent cu „cât timp … execută” *(6p)*

```text
citește n (număr natural nenul)
p ← 1
i ← 1
┌cât timp i ≤ n execută
│  citește x (număr natural)
│ ┌repetă
│ │  x ← [x/3]
│ └până când x ≤ 3
│ ┌dacă x ≠ 0 atunci p ← p*x
│ └■
│  i ← i + 1
└■
scrie p
```

### 2. Cel mai lung lanț elementar din rădăcină *(6p)*

Vectorul de tați (3,0,2,5,2,5,1,5): rădăcina este **2**. Fiii lui 2: 3 și 5; fiul lui 3: 1; fiul lui 1: 7; fiii lui 5: 4, 6, 8 (frunze).

Ramura cea mai adâncă este 2 → 3 → 1 → 7 (lungime 3), față de 2 → 5 → 4 (lungime 2). Răspuns: **2, 3, 1, 7**.

### 3. Completarea tabloului 9×9 *(6p)*

Valorile 4 apar în colțul stânga-sus, unde $i + j \le 3$, și în colțul dreapta-jos, unde $i + j \ge 13$. În rest, 2.

```cpp
for(i=0;i<9;i++)
    for(j=0;j<9;j++)
        if (i + j <= 3 || i + j >= 13) a[i][j] = 4;
        else a[i][j] = 2;
```

Verificare: linia 0 are 4 pe coloanele 0…3 ✔; linia 8 are 4 pe coloanele 5…8 ($8 + 5 = 13$) ✔. Am folosit 2 atribuiri.

## Subiectul al III-lea (30 de puncte)

### 1. Subprogramul majImp *(10p)*

Pentru fiecare număr din [a, b], în ordine crescătoare, adunăm separat divizorii proprii (de la 2 la $k/2$) impari și pari. Primul număr pentru care suma impară este mai mare este răspunsul.

```cpp
int majImp(int a, int b)
{
    for (int k = a; k <= b; k++)
    {
        int si = 0, sp = 0;
        for (int d = 2; d <= k / 2; d++)
            if (k % d == 0)
            {
                if (d % 2 == 1) si = si + d;
                else sp = sp + d;
            }
        if (si > sp) return k;
    }
    return 0;
}
```

**Verificare:** pentru a = 16: 16 (pari 2, 4, 8) ✘, 17 (niciun divizor propriu, 0 > 0 fals) ✘, 18 (3 + 9 = 12 > 2 + 6 = 8) ✔ → **18**.

### 2. Cuvinte de aceeași lungime *(10p)*

Comparăm lungimea fiecărui cuvânt (extras cu `strtok`) cu lungimea primului cuvânt.

```cpp
#include <iostream>
#include <cstring>
using namespace std;

int main()
{
    char s[101];
    cin.getline(s, 101);
    char *p = strtok(s, " ");
    int n = strlen(p), ok = 1;
    while (p != NULL)
    {
        if ((int)strlen(p) != n) ok = 0;
        p = strtok(NULL, " ");
    }
    if (ok) cout << "DA " << n;
    else cout << "NU";
    return 0;
}
```

**Verificare:** „Ana are cel mai bun mar” → toate au 3 litere → `DA 3` ✔; „Ana are cel mai dulce mar” → „dulce” are 5 → `NU` ✔.

### 3. Scara de lungime maximă

#### a) Descrierea algoritmului *(2p)*

Citim cotele pe rând. Dacă cota curentă x este cu 1 mai mare decât precedenta, scara curentă continuă (creștem `lgCrt`); altfel începe o scară nouă (`lgCrt = 1`). După fiecare pas, dacă `lgCrt > lgMax`, reținem `lgMax = lgCrt` și ultima cotă a acestei scări (`ultMax = x`). La final, dacă `lgMax < 2`, nu există scară; altfel afișăm cotele $ultMax - lgMax + 1, \dots, ultMax$ (sunt numere consecutive, deci nu trebuie memorate).

**Eficiență:** o singură parcurgere a fișierului → timp **liniar**; doar câteva variabile simple → memorie **O(1)**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, ant = 0, lgCrt = 0, lgMax = 0, ultMax = 0;
    while (f >> x)
    {
        if (x == ant + 1) lgCrt++;
        else lgCrt = 1;
        if (lgCrt > lgMax)
        {
            lgMax = lgCrt;
            ultMax = x;
        }
        ant = x;
    }
    if (lgMax < 2) cout << "nu exista";
    else
        for (int i = ultMax - lgMax + 1; i <= ultMax; i++)
            cout << i << ' ';
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** scările sunt 600 601, 569 570, 700 701 (lungime 2) și 625 626 627 (lungime 3) → se afișează `625 626 627` ✔.

## Ce merită reținut din varianta 3

- **Paritate:** „aceeași paritate” nu înseamnă „ambele pare”.
- **Recursivitate:** instrucțiunile de după apel se execută la revenire, de la cel mai adânc apel spre primul.
- **Număr maxim de noduri pentru o sumă de grade fixată:** dă fiecărui nod gradul minim permis.
- **Tablouri pe „diagonale”:** relațiile de forma $i + j \le c$ sau $i + j \ge c$ descriu triunghiuri.
- **Secvențe de numere consecutive:** reține doar lungimea și ultimul element — restul se reconstruiește.

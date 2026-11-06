Rezolvarea completă a subiectului de **Bacalaureat 2023 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **b**, 2 – **a**, 3 – **b**, 4 – **c**, 5 – **d** (câte 4 puncte).

### 1. `y%x-(x/y)*3!=0` → b. x = 25 și y = 15

`15%25 = 15`, `25/15 = 1` (împărțire întreagă), deci $15 - 1 \cdot 3 = 12 \ne 0$ ✔.

- a. `75%25 = 0`, `25/75 = 0` → 0 − 0 = 0 → expresia e 0.
- c. `x/y` cu y = 0 este **împărțire la zero** — eroare.
- d. `30%10 = 0`, `10/30 = 0` → 0.

### 2. `x='2'; x=x+3;` → a. 5

Caracterele sunt memorate prin codurile lor, iar cifrele '0'…'9' au coduri consecutive. Adunând 3 la codul lui '2' obținem codul lui **'5'**, iar `cout` afișează caracterul `5`.

- b, c, d. nu se face nicio concatenare de texte în C/C++ prin `+` pe `char`.

### 3. Căutare binară pentru x = 11 → b. 15, 7, 11

Pozițiile 1..7, mijlocul 4 → **15**; 11 < 15 → 1..3, mijlocul 2 → **7**; 11 > 7 → poziția 3 → **11**, găsit.

- a. după 15 nu se merge la dreapta (16), pentru că 11 < 15.
- c, d. căutarea binară nu pornește de la primul element.

### 4. Adevărată pentru orice x nenul → c. `ceil(ceil(x))==ceil(x)`

`ceil(x)` este deja un număr întreg, iar `ceil` aplicat unui întreg îl lasă neschimbat. Deci egalitatea este mereu adevărată.

- a. pentru x = 0.5: $1 \ne 0{,}25$.
- b. `ceil(x) >= x`, egalitatea are loc doar pentru x întreg (x = 0.5 → 1 ≤ 0.5 fals).
- d. pentru x = 2: $2 \ne 0{,}5$.

### 5. Suma x + (x+1) + … + y → d. `s=y*(y+1)/2-x*(x-1)/2;`

$\sum_{i=x}^{y} i = (1 + 2 + \dots + y) - (1 + 2 + \dots + (x-1)) = \dfrac{y(y+1)}{2} - \dfrac{(x-1)x}{2}$.

Verificare pentru x = 2, y = 4: $10 - 1 = 9 = 2 + 3 + 4$ ✔.

- c. scade și pe x (dă 7). a, b. nu includ pe y.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare pereche (a, b): bucla „cât timp” reduce `a` la **prima sa cifră**, iar `p` devine $10^{k-1}$ (k = numărul de cifre al lui a). Noua valoare este `prima_cifră · p + b` — adică prima cifră a lui a urmată de b, „suprapus” peste celelalte cifre. Dacă rezultatul diferă de a-ul inițial (`c`), x crește.

#### a) Pentru 3, 746, 82, 3067, 67, 78, 178 → **2**

| (a, b) | Prima cifră, p | a·p + b | Diferit de c? | x |
|---|---|---|---|---|
| (746, 82) | 7, 100 | 782 | da | 1 |
| (3067, 67) | 3, 1000 | 3067 | nu | 1 |
| (78, 178) | 7, 10 | 248 | da | 2 |

Se afișează **2**. *(6p)*

#### b) n = 2 și se afișează 0

Pentru a cu o cifră, p = 1 și noua valoare este $a + b$; ea este egală cu a doar dacă **b = 0**. Exemplu: **5, 0, 7, 0** (orice șir de forma x, 0, y, 0). *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x = 0, a, b, c, p;
    cin >> n;
    while (n > 0)
    {
        cin >> a >> b;
        c = a; p = 1;
        while (a > 9)
        {
            a = a / 10;
            p = p * 10;
        }
        a = a * p + b;
        if (a != c)
            x = x + 1;
        n = n - 1;
    }
    cout << x;
    return 0;
}
```

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

Bucla exterioară se execută de n ori, iar n nu mai este folosit după ea:

```text
citește n (număr natural nenul)
x ← 0
┌pentru i ← n, 1, -1 execută
│  citește a, b (numere naturale)
│  c ← a; p ← 1
│ ┌cât timp a > 9 execută
│ │  a ← [a/10]; p ← p*10
│ └■
│  a ← a*p + b
│ ┌dacă a ≠ c atunci x ← x + 1
│ └■
└■
scrie x
```

### 2. Elementele tabloului B *(6p)*

Rezultatul (65, 57, 49, 21, 21, 10, 4) conține toate elementele lui A și ale lui B. Eliminăm elementele lui A = (4, 21, 49, 57) și rămân **65, 21, 10**. Cum interclasarea este descrescătoare, B = **(65, 21, 10)** (baremul acceptă și ordinea crescătoare, (10, 21, 65), parcursă invers).

### 3. Ieftin, moderat sau scump *(6p)*

```cpp
double p;
if (p < 100)
    cout << "ieftin";
else if (p <= 500)
    cout << "moderat";
else
    cout << "scump";
```

Pe ramura `else` știm deja că $p \ge 100$, deci pentru „moderat” e suficient testul `p <= 500`.

## Subiectul al III-lea (30 de puncte)

### 1. Divizorii impari care nu sunt primi — pseudocod *(10p)*

Parcurgem doar valorile impare d = 1, 3, 5, … ≤ n. Pentru fiecare divizor verificăm dacă este prim; îl scriem doar dacă **nu** este (1 nu este prim, deci se scrie).

```text
citește n (număr natural nenul)
┌pentru d ← 1, n, 2 execută
│ ┌dacă n%d = 0 atunci
│ │  prim ← 1
│ │ ┌dacă d < 2 atunci prim ← 0
│ │ └■
│ │  k ← 2
│ │ ┌cât timp k*k ≤ d și prim = 1 execută
│ │ │ ┌dacă d%k = 0 atunci prim ← 0
│ │ │ └■
│ │ │  k ← k + 1
│ │ └■
│ │ ┌dacă prim = 0 atunci scrie d, ' '
│ │ └■
│ └■
└■
```

**Verificare:** n = 90 → divizorii impari 1, 3, 5, 9, 15, 45; eliminăm primii 3 și 5 → **1 9 15 45** ✔.

### 2. Perechea de valoare maximă *(10p)*

Calculăm suma fiecărei perechi de celule vecine (v[i], v[i+1]) și păstrăm maximul; inițializăm maximul cu prima pereche.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, v[21], i, pmax;
    cin >> n;
    for (i = 0; i < n; i++)
        cin >> v[i];
    pmax = v[0] + v[1];
    for (i = 1; i < n - 1; i++)
        if (v[i] + v[i + 1] > pmax)
            pmax = v[i] + v[i + 1];
    cout << pmax;
    return 0;
}
```

**Verificare:** 1 12 11 1 14 4 2 16 → sumele 13, **23**, 12, 15, 18, 6, 18 → se afișează **23** ✔.

### 3. Perechi de poziții cu valori egale

#### a) Descrierea algoritmului *(2p)*

În fiecare șir valorile sunt distincte, deci o valoare comună celor două șiruri dă exact o pereche de poziții, iar fiecare poziție apare într-o singură pereche. Numărul cerut este deci **numărul de valori comune**. Valorile sunt sub 1000, așa că folosim un vector de frecvență `a`: la citirea fiecărui număr (din ambele șiruri) creștem `a[x]`. La final numărăm valorile cu `a[x] = 2`.

**Eficiență:** fiecare număr se citește o singură dată, iar vectorul are dimensiune constantă → timp **liniar** O(m + n), fără comparații între toate perechile (care ar fi O(m·n)).

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int a[1000];   // a[v] = în câte șiruri apare valoarea v (0, 1 sau 2)

int main()
{
    ifstream f("date.in");
    int m, n, i, x, nr = 0;
    f >> m >> n;
    for (i = 1; i <= m + n; i++)
    {
        f >> x;
        a[x]++;
    }
    for (x = 0; x < 1000; x++)
        if (a[x] == 2) nr++;
    cout << nr;
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** valorile comune sunt 1, 2, 5, 3, 0 → **5** ✔.

## Ce merită reținut din varianta 7

- **Împărțirea la zero** (`x/0`, `x%0`) este o eroare — elimină imediat astfel de variante.
- **Caractere cifră:** `'2' + 3` este `'5'`.
- **Suma x..y:** $\frac{y(y+1)}{2} - \frac{(x-1)x}{2}$.
- **Interclasare:** B = rezultatul minus elementele lui A, păstrând ordinea.
- **Valori comune** în șiruri cu elemente distincte: vector de frecvență, numără valorile cu frecvența 2.

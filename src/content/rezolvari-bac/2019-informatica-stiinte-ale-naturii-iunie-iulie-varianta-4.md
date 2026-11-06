Rezolvarea completă a subiectului de **Bacalaureat 2019 la Informatică, limbajul C/C++, profil științe ale naturii**, sesiunea iunie–iulie, **varianta 4**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **a**, 2 – **a**, 3 – **d**, 4 – **b**, 5 – **d** (câte 4 puncte).

### 1. Valori pentru care `x/2+x%y-x/y==0` → a. x=4 şi y=2

4/2 + 4%2 − 4/2 = 2 + 0 − 2 = **0** ✔. Pentru b: 3 + 0 − 2 = 1; c: 4 + 0 − 2 = 2; d: împărțire la zero.

### 2. Verificarea vocalei → a

`x=='a' || x=='e' || x=='i' || x=='o' || x=='u'` — caracterele se scriu între apostrofuri, iar condițiile se leagă cu „sau”.

- b. folosește ghilimele (șiruri) și „și” (nicio literă nu poate fi simultan a și e). c. include și consoane. d. fără apostrofuri, `a`, `e` … sunt variabile.

### 3. Căutarea binară într-un tablou de 7 numere descrescătoare → d

Fiecare comparație înjumătățește zona de căutare: 7 → 3 → 1 elemente, deci sunt necesare **cel mult 3 comparații** (și când x există, și când nu există). Căutarea binară funcționează pe orice tablou ordonat — crescător sau descrescător.

### 4. Instrucțiune echivalentă cu `y=x*x;` → b. `y=pow(x,2);`

`pow(x,2)` = $x^2$. Celelalte calculează radicalul, respectiv partea întreagă inferioară / superioară.

### 5. Secvență echivalentă cu if-urile imbricate → d

Un `else` se asociază mereu cu **cel mai apropiat** `if` fără `else`:

```cpp
if (x == 0)
{
    if (y == 0)
    {
        if (z == 0) w = 1;
        else w = 2;
    }
    else w = 3;
}
```

Deci w = 1 pentru x = y = z = 0; w = 2 pentru x = y = 0, z ≠ 0; w = 3 pentru x = 0, y ≠ 0 — exact varianta d.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru p de la p la q: s1 numără valorile divizibile cu m **sau** cu n, s2 pe cele divizibile cu m **și** cu n. Se afișează s1 − 2·s2.

#### a) Pentru 4, 3, 11, 25 → **3**

În [11, 25]: multiplii lui 4 sau 3: 12, 15, 16, 18, 20, 21, 24 → s1 = 7; multiplii comuni: 12, 24 → s2 = 2. Se afișează 7 − 4 = **3**. *(6p)*

#### b) m = 3, n = 5, p = 1, se afișează 10

Oricare două dintre **25, 26, 30, 31, 32**. Pentru q = 25: 12 multipli de 3 sau 5, dintre care unul comun (15) → 12 − 2 = 10 ✔. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int m, n, p, q, s1 = 0, s2 = 0;
    cin >> m >> n >> p >> q;
    while (p <= q)
    {
        if (p % m == 0 || p % n == 0) s1 = s1 + 1;
        if (p % m == 0 && p % n == 0) s2 = s2 + 1;
        p = p + 1;
    }
    cout << s1 - 2 * s2;
    return 0;
}
```

#### d) Structura „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește m, n, p, q (numere naturale nenule, p≤q)
s1 ← 0; s2 ← 0
┌pentru i ← p, q execută
│ ┌dacă i%m = 0 sau i%n = 0 atunci s1 ← s1 + 1
│ └■
│ ┌dacă i%m = 0 și i%n = 0 atunci s2 ← s2 + 1
│ └■
└■
s ← s1 − 2*s2
scrie s
```

### 2. Axa cea mai apropiată *(6p)*

Distanța punctului (x, y) până la axa Ox este y, iar până la axa Oy este x (coordonatele sunt numere naturale).

```cpp
if (y < x) cout << "axa Ox";
else if (x < y) cout << "axa Oy";
else cout << "egal";
```

### 3. Al 50-lea termen al șirului *(6p)*

Păstrăm în a și b ultimii doi termeni ($f_{n-2}$ și $f_{n-1}$) și calculăm termenul curent c după paritatea lui n, apoi „avansăm” perechea.

```cpp
a = 1; b = 2;
for (n = 3; n <= 50; n++)
{
    if (n % 2 == 1) c = a - b;
    else c = b - a;
    a = b;
    b = c;
}
```

## Subiectul al III-lea (30 de puncte)

### 1. Înlocuirea cifrelor impare — pseudocod *(10p)*

Parcurgem cifrele de la dreapta la stânga și reconstruim numărul; o cifră impară c devine c − 1.

```text
citește n (număr natural)
r ← 0; p ← 1
┌cât timp n ≠ 0 execută
│  c ← n%10
│ ┌dacă c%2 = 1 atunci c ← c − 1
│ └■
│  r ← r + c*p; p ← p*10
│  n ← [n/10]
└■
scrie r
```

**Exemple:** 235690 → **224680**; 15690 → **4680** ✔.

### 2. Tablou simetric față de elementul din mijloc *(10p)*

Elementul de pe poziția i trebuie să fie egal cu cel de pe poziția n − 1 − i.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[25], ok = 1;
    cin >> n;
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < n / 2; i++)
        if (a[i] != a[n - 1 - i]) ok = 0;
    if (ok) cout << "DA";
    else cout << "NU";
    return 0;
}
```

Pentru (1, 2, 4, 2, 1) → **DA** ✔.

### 3. Vârfurile locale

#### a) Descrierea algoritmului *(2p)*

Un termen este vârf local dacă niciun termen anterior nu este strict mai mare decât el, adică dacă este **mai mare sau egal cu maximul** termenilor de dinaintea lui. Citim numerele pe rând, păstrând maximul curent `mx`; dacă x ≥ mx, îl afișăm și actualizăm maximul.

**Eficiență:** o singură parcurgere → timp **liniar**; doar două variabile → memorie **constantă**.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    ifstream f("bac.txt");
    int x, mx = -1;
    while (f >> x)
        if (x >= mx)
        {
            cout << x << ' ';
            mx = x;
        }
    f.close();
    return 0;
}
```

**Verificare pe exemplu:** 7 4 9 10 10 10 8 10 8 30 → **7 9 10 10 10 10 30** ✔.

## Ce merită reținut din varianta 4

- **Caractere** între apostrofuri (`'a'`), șiruri între ghilimele (`"a"`).
- **Căutarea binară** pe n = 7 elemente: cel mult 3 comparații.
- **`else` se leagă de cel mai apropiat `if`** fără `else`.
- **Recurențe:** păstrează doar ultimii termeni necesari.
- **„Niciun termen anterior mai mare”** ⇔ x ≥ maximul de până acum.

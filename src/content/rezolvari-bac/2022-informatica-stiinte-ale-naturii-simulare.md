Rezolvarea completă a **simulării pentru Bacalaureat 2022 la Informatică, limbajul C/C++, profil științe ale naturii**. Pentru fiecare item ai răspunsul, raționamentul pas cu pas, codul C++ complet și punctajul din baremul oficial.

> **Sfat:** încearcă întâi singur fiecare cerință, apoi verifică aici. La programe, baremul punctează orice soluție corectă — nu trebuie să scrii exact codul de mai jos.

## Subiectul I (20 de puncte)

**Răspunsuri:** 1 – **d**, 2 – **d**, 3 – **a**, 4 – **c**, 5 – **b** (câte 4 puncte).

### 1. Expresie echivalentă cu `x<=3 || x>30` → d. `!(x>3) || !(x<=30)`

`!(x>3)` înseamnă `x<=3`, iar `!(x<=30)` înseamnă `x>30` — exact expresia dată. Varianta b, `!(x>=3 && x<=30)` = `x<3 || x>30`, ratează valoarea 3.

### 2. Comparația care dă al 6-lea element → d. xa=16 și xb=16

Tablourile sunt descrescătoare, deci pentru o interclasare crescătoare le parcurgem de la dreapta la stânga: A: 2, 4, 9, 16, 20 și B: 1, 2, 16, 18, 50. Primele 5 elemente obținute: 1, 2, 2, 4, 9. Elementele curente rămân 16 (din A) și 16 (din B), iar comparația lor dă al 6-lea element → **xa = 16, xb = 16**.

### 3. Condiția pentru narcise → a. `i%2==j%2`

Pe rândurile 1 și 3, N apare pe coloanele impare; pe rândul 2, pe coloanele pare. Deci N apare exact când i și j au aceeași paritate: `i%2==j%2`.

### 4. Valori distincte ale lui `floor(sqrt(x))` pentru x ∈ [10, 30] → c. 3

$\sqrt{10} \approx 3{,}16$ și $\sqrt{30} \approx 5{,}48$, deci partea întreagă poate fi **3, 4 sau 5**.

### 5. Corecția pentru dif = m − n → b. `dif-1`

La fiecare pas x crește cu 1, y scade cu 1, iar dif crește cu 2 (distanța dintre ele se micșorează cu 2). Dacă m − n este par, x și y se întâlnesc (x = y) și dif = m − n. Dacă m − n este impar, x „sare” peste y (x = y + 1) și dif = m − n + 1, deci trebuie corectat cu `dif-1`.

## Subiectul al II-lea (40 de puncte)

### 1. Algoritmul în pseudocod

Pentru fiecare număr y citit, se taie ultimele cifre ale lui y cât timp ultima cifră nu are aceeași paritate cu x. Apoi, dacă y a devenit egal cu x, se numără.

#### a) n = 6, x = 16 → **3**

| y | după tăiere | = 16? |
|---|---|---|
| 4273 | 42 | nu |
| 1679 | 16 | **da** |
| 3165 | 316 | nu |
| 16 | 16 | **da** |
| 200 | 200 | nu |
| 167 | 16 | **da** |

*(6p)*

#### b) n = 2, x = 22, se afișează 2

x este par, deci se taie cifrele impare de la final. Numerele (de 4 cifre) trebuie să fie de forma $\overline{22xy}$ cu x, y cifre impare: de exemplu **2213** și **2279**. *(6p)*

#### c) Programul C/C++ *(10p)*

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, x, y, nr = 0, i = 1;
    cin >> n >> x;
    while (i <= n)
    {
        cin >> y;
        while (y != 0 && y % 2 != x % 2)
            y = y / 10;
        if (y == x) nr = nr + 1;
        i = i + 1;
    }
    cout << nr;
    return 0;
}
```

*Barem: variabile 1p, citire 1p, afișare 1p, decizie 2p, repetitive 3p, atribuiri 1p, corectitudine 1p.*

#### d) Prima structură „cât timp” înlocuită cu „pentru” *(6p)*

```text
citește n, x (numere naturale nenule)
nr ← 0
┌pentru i ← 1, n execută
│  citește y (număr natural)
│ ┌cât timp y ≠ 0 și y%2 ≠ x%2 execută
│ │  y ← [y/10]
│ └■
│ ┌dacă y = x atunci nr ← nr + 1
│ └■
└■
scrie nr
```

### 2. Valori x pentru care se compară 15, 20, 17 *(6p)*

Indici 0…6: mijlocul 3 → **15**, deci x > 15; în [4, 6] mijlocul 5 → **20**, deci x < 20; în [4, 4] se compară **17**. Deci x ∈ {16, 17, 18, 19}, de exemplu **16, 17, 18**.

### 3. Orașul cu densitatea mai mare *(6p)*

```cpp
char cod1, cod2;
float suprafata1, suprafata2;
// ... (datele sunt deja memorate)
float d1 = nrLocuitori1 / suprafata1, d2 = nrLocuitori2 / suprafata2;
if (d1 > d2) cout << cod1;
else if (d1 < d2) cout << cod2;
else cout << "egale";
```

Codul este o literă → `char`; suprafața este număr real → `float`, deci împărțirea este reală.

## Subiectul al III-lea (30 de puncte)

### 1. Cea mai mare valoare cu resturile 2 — pseudocod *(10p)*

Pornim de la n și coborâm până găsim un număr cu ambele resturi egale cu 2; dacă nu există, rezultatul rămâne 0.

```text
citește x, y, n (numere naturale nenule, x<y<n)
k ← 0; i ← n
┌cât timp i ≥ 1 și k = 0 execută
│ ┌dacă i%x = 2 și i%y = 2 atunci k ← i
│ └■
│  i ← i − 1
└■
scrie k
```

**Exemplu:** x = 10, y = 101, n = 3000 → se scrie **2022** ✔.

### 2. Numele invitaților cu prenumele x *(10p)*

Lista este formată din grupuri de câte trei valori: (prenume, nume, 0). Parcurgem tabloul din 3 în 3; dacă prenumele (`a[i]`) este x, afișăm numele (`a[i+1]`). Așa nu confundăm un nume egal cu x cu un prenume.

```cpp
#include <iostream>
using namespace std;

int main()
{
    int n, a[305], x, gasit = 0;
    cin >> n;
    for (int i = 0; i < 3 * n; i++) cin >> a[i];
    cin >> x;
    for (int i = 0; i < 3 * n; i += 3)
        if (a[i] == x)
        {
            cout << a[i + 1] << ' ';
            gasit = 1;
        }
    if (!gasit) cout << "NU";
    return 0;
}
```

Test: (10, 121, 0, 101, 512, 0, 10, 9876, 0, 2103, 10, 0), x = 10 → **121 9876** ✔.

### 3. Cea mai mare putere a lui 9 care divide n!

#### a) Descrierea algoritmului *(2p)*

$9 = 3^2$. Dacă exponentul lui 3 în n! este `e3`, atunci $9^p$ divide n! exact când $2p \le e3$, deci $p = [e3/2]$. Exponentul se calculează cu formula lui Legendre: $e3 = [n/3] + [n/9] + [n/27] + \dots$

**Eficiență:** numărul de pași este logaritmic ($\log_3 n$), memorie constantă — nu calculăm n!.

#### b) Programul C/C++ *(8p)*

```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
    long long n, e3 = 0, p;
    cin >> n;
    for (p = 3; p <= n; p = p * 3) e3 += n / p;
    ofstream g("bac.txt");
    g << e3 / 2;
    g.close();
    return 0;
}
```

**Verificare pe exemplu:** n = 14 → e3 = 4 + 1 = 5 → [5/2] = **2** ✔.

## Ce merită reținut din simulare

- **Tablouri descrescătoare** se interclasează crescător parcurgându-le de la dreapta la stânga.
- **Model de tablă de șah:** `i%2==j%2`.
- **Paritatea diferenței** contează când două contoare se apropie cu câte 1.
- **Formula lui Legendre:** exponentul lui p în n! este $\sum [n/p^k]$.

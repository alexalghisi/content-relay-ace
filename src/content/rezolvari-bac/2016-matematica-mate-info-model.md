Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2016 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $7$, $3x$, $x^2 + 2$ termeni consecutivi ai unei progresii aritmetice

$$2\cdot 3x = 7 + x^2 + 2 \iff x^2 - 6x + 9 = 0 \iff (x - 3)^2 = 0.$$

**Răspuns:** $x = 3$. *Barem: 3p, 2p.*

### 2. Parabola lui $f(x) = x^2 - 2x + m$ este tangentă axei $Ox$

$\Delta = 4 - 4m = 0 \iff m = 1$. *Barem: 3p, 2p.*

### 3. $\left(\dfrac12\right)^{4x - 9} = 32^x$

$2^{-(4x - 9)} = 2^{5x} \iff 9 - 4x = 5x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca o submulțime a lui $A = \{\sqrt1, \sqrt2, \dots, \sqrt6\}$ să aibă cel mult două elemente

Cazuri posibile: $2^6 = 64$ submulțimi. Favorabile: $C_6^0 + C_6^1 + C_6^2 = 1 + 6 + 15 = 22$.

**Răspuns:** $p = \dfrac{22}{64} = \dfrac{11}{32}$. *Barem: 2p, 2p, 1p.*

### 5. Paralela prin $B$ la mediana din $A$; $A(-1,0)$, $B(1,0)$, $C(1,4)$

Mijlocul lui $BC$: $M(1, 2)$; $m_{AM} = \dfrac{2 - 0}{1 + 1} = 1$. Paralela prin $B$: $y = x - 1$.

**Răspuns:** $y = x - 1$. *Barem: 1p, 2p, 2p.*

### 6. Raza cercului circumscris: $A = \dfrac{3\pi}{4}$, $BC = \sqrt2$

$$R = \frac{BC}{2\sin A} = \frac{\sqrt2}{2\cdot\frac{\sqrt2}{2}} = 1.$$

**Răspuns:** $R = 1$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x & 0\\ 0 & 1 & 0\\ 0 & 0 & 2^x\end{pmatrix}$

#### a) $\det(A(10)) = 1024$

Matrice superior triunghiulară: $\det = 1\cdot1\cdot2^{10} = 1024$. *Barem: 2p, 3p.*

#### b) $A(x)A(2x) = A(x^2 + 2)$

Se verifică ușor $A(x)A(y) = \begin{pmatrix} 1 & x + y & 0\\ 0 & 1 & 0\\ 0 & 0 & 2^{x+y}\end{pmatrix} = A(x + y)$. Deci $A(3x) = A(x^2 + 2) \iff x^2 - 3x + 2 = 0$.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 2p, 3p.*

#### c) $A(n) = A(1)A(2)\cdots A(2016)$; $n$ divizibil cu $2017$

$$A(1)A(2)\cdots A(2016) = A(1 + 2 + \dots + 2016) = A\left(\frac{2016\cdot2017}{2}\right) = A(1008\cdot 2017).$$

Deci $n = 1008\cdot2017$, divizibil cu $2017$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f = X^3 - 5X + a$

#### a) $f(0) = a$

Termenul liber. *Barem: 3p, 2p.*

#### b) $a$ cu $x_1^3 + x_2^3 + x_3^3 = 2016 - 4a$

$x_i^3 = 5x_i - a$, deci $\sum x_i^3 = 5\sum x_i - 3a = -3a$ (suma rădăcinilor e $0$).

$-3a = 2016 - 4a \iff a = 2016$.

**Răspuns:** $a = 2016$. *Barem: 3p, 2p.*

#### c) $f$ are cel mult o rădăcină întreagă

Presupunem că $x_1, x_2 \in \mathbb Z$; atunci $x_3 = -x_1 - x_2 \in \mathbb Z$. Viète: $\sum x_i^2 = 0 - 2(-5) = 10$. Singura scriere a lui $10$ ca sumă de trei pătrate perfecte este $9 + 1 + 0$, deci $\{|x_i|\} = \{3, 1, 0\}$. Dar $\pm3 \pm 1 + 0 \ne 0$, contradicție cu $\sum x_i = 0$. $\blacksquare$ *Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x - \dfrac12x^2 - x - 1$

#### a) $f'(x) = e^x - x - 1$

Derivăm termen cu termen. *Barem: 2p, 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f'(x)}{f(x)}$

L'Hospital de două ori ($\frac\infty\infty$):

$$\lim\frac{e^x - x - 1}{e^x - \frac{x^2}{2} - x - 1} = \lim\frac{e^x - 1}{e^x - x - 1} = \lim\frac{e^x}{e^x - 1} = 1.$$

**Răspuns:** $1$. *Barem: 3p, 2p.*

#### c) $f(2\sqrt3) < f(3\sqrt2)$

$f''(x) = e^x - 1 > 0$ pe $(0, \infty)$, deci $f'$ e strict crescătoare acolo; cum $f'(0) = 0$, $f' > 0$ pe $(0, \infty)$ și $f$ e strict crescătoare. $2\sqrt3 = \sqrt{12} < \sqrt{18} = 3\sqrt2$, deci $f(2\sqrt3) < f(3\sqrt2)$. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $I_n = \displaystyle\int_0^1(1 - x^2)^n\,dx$

#### a) $I_1 = \dfrac23$

$\left(x - \dfrac{x^3}{3}\right)\Big|_0^1 = \dfrac23$. *Barem: 3p, 2p.*

#### b) $I_{n+1} \le I_n$

$I_{n+1} - I_n = \displaystyle\int_0^1(-x^2)(1 - x^2)^n\,dx \le 0$. *Barem: 2p, 3p.*

#### c) $(2n + 3)I_{n+1} = 2(n + 1)I_n$

Prin părți ($u = (1 - x^2)^{n+1}$, $v = x$):

$$I_{n+1} = x(1 - x^2)^{n+1}\Big|_0^1 + 2(n + 1)\int_0^1 x^2(1 - x^2)^n\,dx = 2(n + 1)(I_n - I_{n+1}),$$

folosind $x^2 = 1 - (1 - x^2)$. Rezultă $(2n + 3)I_{n+1} = 2(n + 1)I_n$. $\blacksquare$ *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 3$ |
| I.2 | $m = 1$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{11}{32}$ |
| I.5 | $y = x - 1$ |
| I.6 | $R = 1$ |
| II.1.b | $x \in \{1, 2\}$ |
| II.2.b | $a = 2016$ |
| III.1.b | $1$ |
| III.2.a | $\tfrac23$ |

## Ce merită reținut din model

- **O mulțime cu $n$ elemente are $2^n$ submulțimi.**
- **Rădăcini întregi**: din $\sum x_i^2$ fixat obții un număr finit de cazuri de verificat.
- **Compară radicali** băgând factorii sub radical: $2\sqrt3 = \sqrt{12}$.

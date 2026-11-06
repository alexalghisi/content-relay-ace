Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(\frac12 - \frac15\right)\cdot\frac{10}{3} = 1$

$$\frac12 - \frac15 = \frac{3}{10}, \qquad \frac{3}{10}\cdot\frac{10}{3} = 1.$$

*Barem: 3p + 2p.*

### 2. $A(1, 0)$ pe graficul lui $f(x) = x - a$

$f(1) = 0 \iff 1 - a = 0 \iff a = 1$. *Barem: 3p + 2p.*

### 3. Ecuația $\sqrt{x + 1} = 5$

$x + 1 = 25 \iff x = 24$, care verifică. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr din $M = \{10, 20, \dots, 90\}$ să fie multiplu de 30

Favorabile: $30, 60, 90$ — 3 din 9. $p = \frac13$. *Barem: 1p + 2p + 2p.*

### 5. Mijlocul segmentului $AB$, $A(3,5)$, $B(7,5)$

$x_M = 5$, $y_M = 5$. **Răspuns:** $M(5, 5)$. *Barem: 3p + 2p.*

### 6. Dacă $x \in \left(0, \frac\pi2\right)$ și $\cos x = \frac{5}{13}$, atunci $\operatorname{tg} x = \frac{12}{5}$

$\sin^2 x = 1 - \frac{25}{169} = \frac{144}{169}$; în cadranul I, $\sin x = \frac{12}{13}$.

$$\operatorname{tg} x = \frac{\sin x}{\cos x} = \frac{12}{13}\cdot\frac{13}{5} = \frac{12}{5}.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 1\\ -1 & 0\end{pmatrix}$, $B = \begin{pmatrix} 0 & -1\\ 1 & 1\end{pmatrix}$

#### a) $\det A = 1$

$$\det A = 1\cdot0 - 1\cdot(-1) = 1.$$

*Barem: 3p + 2p.*

#### b) $B\cdot B + A = O_2$

$$B\cdot B = \begin{pmatrix} 0 - 1 & 0 - 1\\ 0 + 1 & -1 + 1\end{pmatrix} = \begin{pmatrix} -1 & -1\\ 1 & 0\end{pmatrix} = -A,$$

deci $B\cdot B + A = O_2$. *Barem: 3p + 2p.*

#### c) $x, y$ cu $A + B = \begin{pmatrix} 2^x & 0\\ 0 & 4^y\end{pmatrix}$

$A + B = \begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix}$, deci $2^x = 1$ și $4^y = 1$.

**Răspuns:** $x = 0$, $y = 0$. *Barem: 2p + 3p.*

### 2. $f = X^3 - 2X^2 - 2X + 1$

#### a) $f(1) = -2$

$$1 - 2 - 2 + 1 = -2.$$

*Barem: 3p + 2p.*

#### b) Câtul și restul împărțirii la $X + 1$

Horner cu $-1$:

| | $1$ | $-2$ | $-2$ | $1$ |
|---|---|---|---|---|
| $-1$ | $1$ | $-3$ | $1$ | $0$ |

**Răspuns:** câtul $X^2 - 3X + 1$, restul $0$. *Barem: 3p + 2p.*

#### c) $(x_2 + x_3)(x_3 + x_1)(x_1 + x_2) = -3$

$x_1 + x_2 + x_3 = 2$, deci $x_2 + x_3 = 2 - x_1$ etc. Atunci produsul este

$$(2 - x_1)(2 - x_2)(2 - x_3) = f(2) = 8 - 8 - 4 + 1 = -3. \ \blacksquare$$

*Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = -x^3 + 3x + 2$

#### a) $f'(x) = 3(1 - x)(1 + x)$

$$f'(x) = -3x^2 + 3 = 3(1 - x^2) = 3(1 - x)(1 + x).$$

*Barem: 3p + 2p.*

#### b) $\lim\limits_{x\to2}\dfrac{f(x)}{x - 2} = -9$

$f(2) = -8 + 6 + 2 = 0$, deci limita este $f'(2) = 3\cdot(-1)\cdot3 = -9$. *Barem: 3p + 2p.*

#### c) $f(x) \le 4$ pentru $x \in [-1, +\infty)$

$f'(x) = 0 \iff x = \pm1$. Pe $[-1, 1]$, $f' \ge 0$ (crescătoare); pe $[1, +\infty)$, $f' \le 0$ (descrescătoare). Maximul pe $[-1, +\infty)$ este $f(1) = -1 + 3 + 2 = 4$. $\blacksquare$ *Barem: 2p + 1p + 1p + 1p.*

### 2. $f(x) = x + 2$

#### a) $\displaystyle\int_{-1}^1(f(x) - 2)\,dx = 0$

$$\int_{-1}^1 x\,dx = \frac{x^2}{2}\Big|_{-1}^1 = \frac12 - \frac12 = 0.$$

*Barem: 2p + 3p.*

#### b) $\displaystyle\int_0^1 e^xf(x)\,dx = 2e - 1$

Prin părți:

$$\int_0^1 e^x(x+2)\,dx = e^x(x+2)\Big|_0^1 - \int_0^1 e^x\,dx = (3e - 2) - (e - 1) = 2e - 1.$$

*Barem: 3p + 2p.*

#### c) $a$ cu $\displaystyle\int_0^a f(x)\,dx = \int_0^{6-a}(f(x) - 4)\,dx$

$$\int_0^a(x + 2)\,dx = \frac{a^2}{2} + 2a, \qquad \int_0^{6-a}(x - 2)\,dx = \frac{(6-a)^2}{2} - 2(6 - a).$$

Înmulțind cu 2: $a^2 + 4a = 36 - 12a + a^2 - 24 + 4a \iff 4a = 12 - 8a \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p + 2p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x = 24$ |
| I.4 | $p = \frac13$ |
| I.5 | $M(5, 5)$ |
| II.1.c | $x = y = 0$ |
| II.2.b | cât $X^2 - 3X + 1$, rest $0$ |
| III.1.c | maxim $f(1) = 4$ |
| III.2.b | $2e - 1$ |
| III.2.c | $a = 1$ |

## Ce merită reținut din varianta 8

- **$(x_2 + x_3)(x_3 + x_1)(x_1 + x_2) = f(S)$**, unde $S = x_1 + x_2 + x_3$ (pentru $f$ monic de grad 3).
- **Integrala unei funcții impare** pe un interval simetric este $0$.
- **$\int e^x(x + c)\,dx = e^x(x + c - 1) + C$**.
- **Maximul pe un interval** se citește din tabelul de variație.

Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia geometrică cu $b_1 = 2$, $b_2 = 6$; al treilea termen

$q = \frac{b_2}{b_1} = 3$, $b_3 = b_1q^2 = 2\cdot9 = 18$.

*Barem: 3p + 2p.*

### 2. $f(x) = x + 7$, $g(x) = x - 7$; calculați $(f\circ g)(7)$

$g(7) = 0$, $(f\circ g)(7) = f(0) = 7$.

*Barem: 2p + 3p.*

### 3. Ecuația $\sqrt{2x - 1} = x - 2$

Condiție $x \ge 2$. Ridicăm la pătrat: $2x - 1 = x^2 - 4x + 4 \iff x^2 - 6x + 5 = 0 \iff x \in \{1, 5\}$.

$x = 1$ nu convine ($1 - 2 < 0$); $x = 5$: $\sqrt9 = 3$ ✔.

**Răspuns:** $x = 5$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca $n$ de o cifră să verifice $n(n-1)(n-2)(n-3)(n-4) > 0$

10 cazuri posibile. Pentru $n \in \{0,1,2,3,4\}$ produsul e $0$; pentru $n \ge 5$ toți factorii sunt pozitivi. Favorabile: $5, 6, 7, 8, 9$.

$$p = \frac5{10} = \frac12.$$

*Barem: 2p + 2p + 1p.*

### 5. $A(1,1)$, $B(-1,0)$, $C(3,5)$, $D(5,6)$: $B$, $D$ și mijlocul lui $AC$ sunt coliniare

Mijlocul lui $AC$: $M(2, 3)$. $m_{BM} = \frac{3 - 0}{2 + 1} = 1$, $m_{BD} = \frac{6 - 0}{5 + 1} = 1$. Pantele sunt egale (și au punctul $B$ comun), deci $B, D, M$ sunt coliniare. $\blacksquare$

*Barem: 3p + 2p.*

### 6. $x \in (0,\pi)$ cu $(\sin x - \cos x)^2 = 2$

$$\sin^2x - 2\sin x\cos x + \cos^2x = 2 \iff 1 - \sin2x = 2 \iff \sin2x = -1.$$

$2x \in (0, 2\pi)$, deci $2x = \frac{3\pi}2$, $x = \frac{3\pi}4$.

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 + 2^a & 2^a\\ -2^a & 1 - 2^a\end{pmatrix}$

Observație utilă: $A(a) = I_2 + 2^aN$, cu $N = \begin{pmatrix}1&1\\-1&-1\end{pmatrix}$ și $N^2 = O_2$.

#### a) $\det A(0) = 1$

$$A(0) = \begin{pmatrix}2&1\\-1&0\end{pmatrix},\quad \det = 0 + 1 = 1.$$

*Barem: 3p + 2p.*

#### b) $A(1) + A(2) - A(1)A(2) = I_2$

$$A(1) = \begin{pmatrix}3&2\\-2&-1\end{pmatrix},\ A(2) = \begin{pmatrix}5&4\\-4&-3\end{pmatrix},\ A(1)A(2) = \begin{pmatrix}7&6\\-6&-5\end{pmatrix},$$

$$A(1) + A(2) - A(1)A(2) = \begin{pmatrix}3 + 5 - 7 & 2 + 4 - 6\\ -2 - 4 + 6 & -1 - 3 + 5\end{pmatrix} = I_2.$$

*Barem: 3p + 2p.*

#### c) $m, n$ naturale cu $A(m)A(n) = A(m+n)$ $\Rightarrow m = n = 1$

$A(m)A(n) = (I_2 + 2^mN)(I_2 + 2^nN) = I_2 + (2^m + 2^n)N$ (pentru că $N^2 = O_2$), iar $A(m+n) = I_2 + 2^{m+n}N$.

$$2^{m+n} = 2^m + 2^n \iff 2^m2^n - 2^m - 2^n + 1 = 1 \iff (2^m - 1)(2^n - 1) = 1.$$

Factorii sunt naturali, deci $2^m - 1 = 2^n - 1 = 1$, adică $m = n = 1$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. Legea $x * y = x^2 + y^2 + x + y$

#### a) $(-1) * (-1) = 0$

$$1 + 1 - 1 - 1 = 0.$$

*Barem: 3p + 2p.*

#### b) $x * y = \left(x + \frac12\right)^2 + \left(y + \frac12\right)^2 - \frac12$

$$\left(x + \tfrac12\right)^2 + \left(y + \tfrac12\right)^2 - \tfrac12 = x^2 + x + \tfrac14 + y^2 + y + \tfrac14 - \tfrac12 = x * y.$$

*Barem: 3p + 2p.*

#### c) $x$ real cu $x^2 * x^2 \le 4$

$$2\left(x^2 + \tfrac12\right)^2 - \tfrac12 \le 4 \iff \left(x^2 + \tfrac12\right)^2 \le \tfrac94 \iff x^2 + \tfrac12 \le \tfrac32 \iff x^2 \le 1$$

(am folosit $x^2 + \frac12 > 0$).

**Răspuns:** $x \in [-1, 1]$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-2,\infty)\to\mathbb R$, $f(x) = x^2 + 4x - \frac12\ln(x + 2)$

#### a) $f'(x) = \dfrac{(2x+3)(2x+5)}{2(x+2)}$

$$f'(x) = 2(x + 2) - \frac1{2(x+2)} = \frac{4(x+2)^2 - 1}{2(x+2)} = \frac{(2x + 3)(2x + 5)}{2(x+2)}.$$

*Barem: 3p + 2p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{x^2 + 4x - f(x)}{x}$

$$\lim_{x\to\infty}\frac{\frac12\ln(x+2)}{x} \overset{\text{l'H}}{=} \lim_{x\to\infty}\frac{\frac1{2(x+2)}}{1} = 0.$$

**Răspuns:** $0$. *Barem: 2p + 3p.*

#### c) $x^2 + 4x + \frac{15}4 \ge \frac12\ln(2x + 4)$ pe $(-2,\infty)$

Pe $(-2,\infty)$: $2x + 5 > 0$, $x + 2 > 0$, deci semnul lui $f'$ este al lui $2x + 3$. $f$ descrește pe $\left(-2, -\frac32\right]$ și crește pe $\left[-\frac32, \infty\right)$, cu minimul

$$f\left(-\tfrac32\right) = \tfrac94 - 6 - \tfrac12\ln\tfrac12 = -\tfrac{15}4 + \tfrac12\ln2.$$

Din $f(x) \ge f\left(-\frac32\right)$: $x^2 + 4x + \frac{15}4 \ge \frac12\ln(x + 2) + \frac12\ln2 = \frac12\ln(2x + 4)$. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = 1 + \dfrac2{x^2 + 1}$

#### a) $\displaystyle\int_0^3(x^2+1)f(x)dx = 18$

$$\int_0^3(x^2 + 3)dx = \left(\frac{x^3}3 + 3x\right)\Big|_0^3 = 9 + 9 = 18.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_1^3xf(x)dx = 4 + \ln5$

$$\int_1^3\left(x + \frac{2x}{x^2+1}\right)dx = \left(\frac{x^2}2 + \ln(x^2+1)\right)\Big|_1^3 = \frac{9 - 1}{2} + \ln10 - \ln2 = 4 + \ln5.$$

*Barem: 3p + 2p.*

#### c) $F(x + 1) \ge F(x) + 1$

$F(x + 1) - F(x) = \displaystyle\int_x^{x+1}f(t)dt$. Cum $f(t) = 1 + \frac2{t^2+1} > 1$,

$$\int_x^{x+1}f(t)dt \ge \int_x^{x+1}1\,dt = 1,$$

deci $F(x+1) \ge F(x) + 1$. $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_3 = 18$ |
| I.2 | $7$ |
| I.3 | $x = 5$ |
| I.4 | $p = \frac12$ |
| I.6 | $x = \frac{3\pi}4$ |
| II.2.c | $x \in [-1,1]$ |
| III.1.b | $0$ |

## Ce merită reținut din varianta 2

- **Matrice de forma $I_2 + tN$ cu $N^2 = O_2$:** produsul adună parametrii, $(I + aN)(I + bN) = I + (a+b)N$.
- **$(2^m - 1)(2^n - 1) = 1$** — artificiul de factorizare pentru ecuații exponențiale în naturale.
- **Diferența de primitive** $F(x+1) - F(x) = \int_x^{x+1}f$.

Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 2 + i$; arătați că $z^2 - 4z + 5 = 0$

$$(2 + i)^2 - 4(2 + i) + 5 = 4 + 4i + i^2 - 8 - 4i + 5 = i^2 + 1 = 0.$$

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 + x + a$; $a$ cu $M(0,2) \in G_f$

$f(0) = 2 \iff a = 2$. *Barem: 3p + 2p.*

### 3. Ecuația $x = \sqrt[3]{x^3 + 2x}$

Ridicăm la cub (funcție bijectivă pe $\mathbb R$): $x^3 = x^3 + 2x \iff x = 0$.

*Barem: 3p + 2p.*

### 4. Numere de cinci cifre distincte din $\{1,2,3,4,5\}$; probabilitatea ca zecile să fie 2 și unitățile 3

Cazuri posibile: $5! = 120$. Fixând zecile $= 2$ și unitățile $= 3$, celelalte trei cifre se aranjează în $3! = 6$ moduri.

$$p = \frac6{120} = \frac1{20}.$$

*Barem: 2p + 2p + 1p.*

### 5. $A(0,1)$, $B(2,3)$, $C(4,a)$; $C$ pe mediatoarea lui $AB$

$C$ e pe mediatoare $\iff CA = CB$:

$$16 + (a - 1)^2 = 4 + (a - 3)^2 \iff 17 - 2a = 13 - 6a \iff a = -1.$$

*Barem: 3p + 2p.*

### 6. $A$, $B$, $C$ în progresie aritmetică $\Rightarrow B = \frac\pi3$

$2B = A + C$ și $A + B + C = \pi$, deci $3B = \pi$, $B = \frac\pi3$. $\blacksquare$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1&0&1 + \ln x\\0&x&0\\0&0&1\end{pmatrix}$, $x > 0$

#### a) $\det A(1) = 1$

$A(1) = \begin{pmatrix}1&0&1\\0&1&0\\0&0&1\end{pmatrix}$ este superior triunghiulară: $\det = 1\cdot1\cdot1 = 1$.

*Barem: 3p + 2p.*

#### b) $A(x)A(y) = A(y)A(x)$

$$A(x)A(y) = \begin{pmatrix}1 & 0 & 1 + \ln y + 1 + \ln x\\ 0 & xy & 0\\ 0&0&1\end{pmatrix} = \begin{pmatrix}1&0&2 + \ln(xy)\\0&xy&0\\0&0&1\end{pmatrix}.$$

Expresia e simetrică în $x$ și $y$, deci $A(y)A(x)$ dă aceeași matrice. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $n$ cu $A\left(\frac13\right)A\left(\frac12\right)A(1)A(2)A(3) = \begin{pmatrix}1&0&n\\0&1&0\\0&0&1\end{pmatrix}$

Prin inducție din b), produsul a $k$ matrice are pe poziția $(2,2)$ produsul parametrilor și pe poziția $(1,3)$ suma $\sum(1 + \ln x_i)$. Aici:

$$\tfrac13\cdot\tfrac12\cdot1\cdot2\cdot3 = 1,\qquad 5 + \ln\left(\tfrac13\cdot\tfrac12\cdot1\cdot2\cdot3\right) = 5 + \ln1 = 5.$$

(Altfel: $A\left(\frac13\right)A(3) = A\left(\frac12\right)A(2) = \begin{pmatrix}1&0&2\\0&1&0\\0&0&1\end{pmatrix}$, iar cu $A(1)$ se obține $5$.)

**Răspuns:** $n = 5$. *Barem: 2p + 3p.*

### 2. Legea $x * y = xy - 4(x + y) + a$

#### a) Pentru $a = 10$: $1 * 2 = 0$

$$1 * 2 = 2 - 12 + 10 = 0.$$

*Barem: 3p + 2p.*

#### b) Pentru $a = 20$: $e = 5$ este elementul neutru

$x * 5 = 5x - 4x - 20 + 20 = x$, iar $5 * x = x$ analog. $\blacksquare$ *Barem: 2p + 3p.*

#### c) Pentru $a \ge 20$, $H = [4,\infty)$ este parte stabilă

$x * y = (x - 4)(y - 4) + a - 16$. Pentru $x, y \in H$: $(x-4)(y-4) \ge 0$ și $a - 16 \ge 4$, deci $x * y \ge 4$, adică $x * y \in H$. $\blacksquare$ *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\to(0,\infty)$, $f(x) = 6^x - 3^x + 2^x$

#### a) $f'(0) = \ln4$

$f'(x) = 6^x\ln6 - 3^x\ln3 + 2^x\ln2$, deci $f'(0) = \ln6 - \ln3 + \ln2 = \ln\frac{6\cdot2}{3} = \ln4$.

*Barem: 3p + 2p.*

#### b) $a$ cu $A(a, \ln(16e))$ pe tangenta în $x = 0$

$f(0) = 1$, deci tangenta: $y = x\ln4 + 1$. $\ln(16e) = 1 + \ln16 = 1 + 2\ln4$, deci $a\ln4 + 1 = 1 + 2\ln4 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p + 2p.*

#### c) $\lim\limits_{x\to0}\dfrac{\ln f(x)}{x}$

Caz $\frac00$ ($\ln f(0) = \ln1 = 0$). L'Hôpital:

$$\lim_{x\to0}\frac{f'(x)}{f(x)} = \frac{f'(0)}{f(0)} = \ln4.$$

*Barem: 3p + 2p.*

### 2. $f(x) = 1 - \dfrac{2x}{x^2+3} - \dfrac2{x^2+3}$

#### a) $\displaystyle\int_1^2(x^2+3)f(x)dx = \frac13$

$(x^2 + 3)f(x) = x^2 + 3 - 2x - 2 = (x - 1)^2$:

$$\int_1^2(x-1)^2dx = \frac{(x-1)^3}3\Big|_1^2 = \frac13.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1f(x)dx = 1 - \ln\frac43 - \frac{\pi\sqrt3}9$

$$\int_0^1f(x)dx = \left(x - \ln(x^2+3) - \frac2{\sqrt3}\operatorname{arctg}\frac x{\sqrt3}\right)\Big|_0^1 = 1 - \ln4 + \ln3 - \frac2{\sqrt3}\cdot\frac\pi6 = 1 - \ln\frac43 - \frac{\pi\sqrt3}9.$$

*Barem: 3p + 2p.*

#### c) $I_n = \displaystyle\int_0^1f^n(x)dx$; $\lim I_n = 0$

$f(x) = \dfrac{(x-1)^2}{x^2+3}$ și $f'(x) = \dfrac{2(x - 1)(x + 3)}{(x^2+3)^2} \le 0$ pe $[0,1]$, deci $f$ e descrescătoare: $0 = f(1) \le f(x) \le f(0) = \frac13$.

$$0 \le I_n \le \int_0^1\left(\tfrac13\right)^ndx = \left(\tfrac13\right)^n \to 0,$$

deci $\lim\limits_{n\to\infty}I_n = 0$ (criteriul cleștelui). $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 2$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac1{20}$ |
| I.5 | $a = -1$ |
| II.1.c | $n = 5$ |
| III.1.b | $a = 2$ |
| III.1.c | $\ln4$ |

## Ce merită reținut din varianta 3

- **Mediatoarea** = locul punctelor egal depărtate de capetele segmentului.
- **Limită cu $\ln f(x)$** când $f(0) = 1$: rezultatul e $\frac{f'(0)}{f(0)}$.
- **$\int\frac{dx}{x^2 + a^2} = \frac1a\operatorname{arctg}\frac xa$.**
- **$\int f^n \to 0$** dacă $0 \le f \le q < 1$.

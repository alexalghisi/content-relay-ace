Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_mate-info**, sesiunea specială, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = 3 + 2\sqrt2 + \dfrac1{3 + 2\sqrt2}$ este natural

Raționalizăm: $\dfrac1{3 + 2\sqrt2} = \dfrac{3 - 2\sqrt2}{9 - 8} = 3 - 2\sqrt2$.

$$a = 3 + 2\sqrt2 + 3 - 2\sqrt2 = 6 \in \mathbb N.$$

*Barem: 3p + 2p.*

### 2. $f(x) = 2x + 1$; arătați că $(f\circ f)(1) = f(2) + 2$

$(f\circ f)(1) = f(3) = 7$, iar $f(2) + 2 = 5 + 2 = 7$. $\blacksquare$ *Barem: 3p + 2p.*

### 3. Ecuația $9^{x^2} = 3\cdot3^x$

$3^{2x^2} = 3^{x+1} \iff 2x^2 - x - 1 = 0 \iff (2x + 1)(x - 1) = 0$.

**Răspuns:** $x \in \left\{-\frac12, 1\right\}$. *Barem: 2p + 3p.*

### 4. $n$ cu $A = \{1, \dots, n\}$ având exact 10 submulțimi cu două elemente

$$C_n^2 = \frac{n(n-1)}2 = 10 \iff n^2 - n - 20 = 0 \iff (n - 5)(n + 4) = 0 \Rightarrow n = 5.$$

*Barem: 2p + 3p.*

### 5. $M(1,0)$, $N(7,0)$, $A(a,3)$ cu $AM = AN$; arătați că $AO = 5$

$A$ e pe mediatoarea lui $MN$, adică $a = \frac{1 + 7}2 = 4$ (sau din $(a-1)^2 + 9 = (a-7)^2 + 9$). Atunci $A(4,3)$ și $AO = \sqrt{16 + 9} = 5$. $\blacksquare$

*Barem: 3p + 2p.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $3\cos x - 2 = 2\cos2x$; calculați $\cos x$

$2\cos2x = 4\cos^2x - 2$, deci $3\cos x = 4\cos^2x \iff \cos x(4\cos x - 3) = 0$. Pe $\left(0,\frac\pi2\right)$, $\cos x \ne 0$, deci $\cos x = \frac34$.

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 & 2 - a & a\\ a & 1 & 1\\ a & 2a - 5 & a - 2\end{pmatrix}$, sistemul $\begin{cases}x + (2 - a)y + az = 1\\ax + y + z = 2 - a\\ax + (2a-5)y + (a-2)z = -4\end{cases}$

#### a) $\det A(0) = 3$

$$\det\begin{pmatrix}1&2&0\\0&1&1\\0&-5&-2\end{pmatrix} = 1\cdot\begin{vmatrix}1&1\\-5&-2\end{vmatrix} = -2 + 5 = 3.$$

*Barem: 2p + 3p.*

#### b) $\det A(a) = (a - 1)(a - 3)(3a + 1)$

Scădem linia 2 din linia 1: $L_1 - L_2 = (1 - a,\ 1 - a,\ a - 1) = (a - 1)(-1, -1, 1)$. Deci

$$\det A(a) = (a - 1)\begin{vmatrix}-1&-1&1\\a&1&1\\a&2a-5&a-2\end{vmatrix}.$$

Adunăm coloana 3 la coloanele 1 și 2: $\begin{vmatrix}0&0&1\\a+1&2&1\\2a-2&3a-7&a-2\end{vmatrix} = (a+1)(3a-7) - 2(2a-2) = 3a^2 - 8a - 3 = (a - 3)(3a + 1)$.

Deci $\det A(a) = (a - 1)(a - 3)(3a + 1)$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $a$ natural pentru care sistemul are soluție unică în numere naturale

Soluție unică $\iff \det A(a) \ne 0$; pentru $a \in \mathbb N$: $a \notin \{1, 3\}$. A doua ecuație: $ax_0 + y_0 + z_0 = 2 - a \ge 0$ (membrul stâng e natural), deci $a \le 2$: $a \in \{0, 2\}$.

- $a = 2$: $2x_0 + y_0 + z_0 = 0 \Rightarrow x_0 = y_0 = z_0 = 0$, dar prima ecuație dă $0 = 1$ — nu convine.
- $a = 0$: $x + 2y = 1$, $y + z = 2$, $-5y - 2z = -4$. Din ultimele două: $y = 0$, $z = 2$, apoi $x = 1$: soluția $(1, 0, 2)$, naturală — convine.

**Răspuns:** $a = 0$. *Barem: 3p + 2p.*

### 2. Legea $x * y = \log_2(2^x + 2^y)$

#### a) $0 * 0 = 1$

$$0 * 0 = \log_2(1 + 1) = 1.$$

*Barem: 3p + 2p.*

#### b) Legea este comutativă

$x * y = \log_2(2^x + 2^y) = \log_2(2^y + 2^x) = y * x$. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $x$ cu $(x * x) * x = 3 + \log_23$

$x * x = \log_2(2\cdot2^x) = x + 1$, iar $(x + 1) * x = \log_2(2^{x+1} + 2^x) = \log_2(3\cdot2^x)$.

$$\log_2(3\cdot2^x) = \log_2(8\cdot3) \iff 2^x = 8 \iff x = 3.$$

*Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{x^4 - x^2 + 1}$

#### a) $f'(x) = \dfrac{x(2x^2 - 1)}{\sqrt{x^4 - x^2 + 1}}$

$$f'(x) = \frac{4x^3 - 2x}{2\sqrt{x^4 - x^2 + 1}} = \frac{x(2x^2 - 1)}{\sqrt{x^4 - x^2 + 1}}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 1$, $f'(1) = 1$, deci $y - 1 = x - 1 \iff y = x$.

*Barem: 2p + 3p.*

#### c) Pentru $m \in \left(\frac{\sqrt3}2, 1\right)$, $f(x) = m$ are exact patru soluții

$f'(x) = 0 \iff x \in \left\{-\frac1{\sqrt2}, 0, \frac1{\sqrt2}\right\}$. $f$ strict descrescătoare pe $\left(-\infty, -\frac1{\sqrt2}\right]$ și $\left[0, \frac1{\sqrt2}\right]$, strict crescătoare pe $\left[-\frac1{\sqrt2}, 0\right]$ și $\left[\frac1{\sqrt2}, \infty\right)$, cu $\lim\limits_{x\to\pm\infty}f = +\infty$.

$f\left(\pm\frac1{\sqrt2}\right) = \sqrt{\frac14 - \frac12 + 1} = \frac{\sqrt3}2 < m$, $f(0) = 1 > m$.

Pe fiecare dintre cele patru intervale de monotonie, $f$ este continuă și strict monotonă, iar $m$ se află între valorile de la capete, deci ecuația are exact câte o soluție pe fiecare: în total **patru soluții**. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = \dfrac{x}{x^2 + 2x + 5}$

#### a) $\displaystyle\int_1^2x\cdot\frac1{f(x)}dx = \frac{31}3$

$$\int_1^2(x^2 + 2x + 5)dx = \left(\frac{x^3}3 + x^2 + 5x\right)\Big|_1^2 = \frac73 + 3 + 5 = \frac{31}3.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1g(x)dx = \frac12\ln\frac85$, $g(x) = f(x) + \dfrac1{x^2+2x+5}$

$g(x) = \dfrac{x + 1}{x^2 + 2x + 5} = \dfrac12\cdot\dfrac{(x^2+2x+5)'}{x^2+2x+5}$:

$$\int_0^1g(x)dx = \frac12\ln(x^2 + 2x + 5)\Big|_0^1 = \frac12\ln\frac85.$$

*Barem: 3p + 2p.*

#### c) $I_n = \displaystyle\int_{-1}^1x^{2n-1}f(x)dx$; $\lim I_n = 0$

$x^{2n-1}f(x) = \dfrac{x^{2n}}{(x+1)^2 + 4}$ și $(x + 1)^2 + 4 \ge 4$, deci $0 \le x^{2n-1}f(x) \le \dfrac{x^{2n}}4$.

$$0 \le I_n \le \int_{-1}^1\frac{x^{2n}}4dx = \frac{1}{2(2n+1)} \to 0,$$

deci $\lim\limits_{n\to\infty}I_n = 0$. $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 6$ |
| I.3 | $x \in \{-\frac12, 1\}$ |
| I.4 | $n = 5$ |
| I.6 | $\cos x = \frac34$ |
| II.1.c | $a = 0$ |
| II.2.c | $x = 3$ |
| III.1.b | $y = x$ |

## Ce merită reținut din varianta 1

- **Factorizarea determinantului:** caută o combinație de linii care scoate un factor comun.
- **Soluții naturale:** o ecuație cu membrul stâng natural limitează parametrul.
- **$\log_2(2^x + 2^x) = x + 1$.**
- **Număr de soluții** pentru funcții „în W”: comparare cu minimele și maximul local.

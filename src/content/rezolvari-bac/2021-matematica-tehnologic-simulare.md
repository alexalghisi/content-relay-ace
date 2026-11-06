Rezolvarea completă a **simulării pentru Bacalaureat 2021 la Matematică M_tehnologic** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1 + 3i)^2 - 6i = -8$

$$(1 + 3i)^2 - 6i = 1 + 6i + 9i^2 - 6i = 1 - 9 = -8.$$

*Barem: 3p + 2p.*

### 2. Intersecția graficelor lui $f(x) = x + 1$ și $g(x) = 3x - 7$

$x + 1 = 3x - 7 \iff x = 4$, $f(4) = 5$.

**Răspuns:** $(4, 5)$. *Barem: 3p + 2p.*

### 3. Ecuația $\sqrt{3 - x} = 2x$

Condiție $x \ge 0$. $3 - x = 4x^2 \iff 4x^2 + x - 3 = 0 \iff x \in \left\{-1, \frac34\right\}$. Doar $x = \frac34$ convine (verificare: $\sqrt{9/4} = \frac32$).

**Răspuns:** $x = \frac34$. *Barem: 3p + 2p.*

### 4. $A = \{1,2,3,4,5\}$: numărul submulțimilor cu 2 elemente = numărul celor cu 3 elemente

$$C_5^2 = \frac{5!}{2!\,3!} = 10 = \frac{5!}{3!\,2!} = C_5^3.\ \blacksquare$$

*Barem: 2p + 3p.*

### 5. $A(1,2)$, $B(-1,0)$, $C(0,a)$; dreapta $AB$ conține $C$

$m_{AB} = \frac{0 - 2}{-1 - 1} = 1$, deci $AB: y = x + 1$. $C \in AB \iff a = 0 + 1 = 1$.

**Răspuns:** $a = 1$. *Barem: 2p + 3p.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $\cos x + \sin\frac\pi6 = 1$; calculați $\sin x$

$\cos x = 1 - \frac12 = \frac12$. $\sin^2x = 1 - \frac14 = \frac34$, iar $\sin x > 0$ pe $\left(0,\frac\pi2\right)$:

$$\sin x = \frac{\sqrt3}2.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}2&4\\-1&-2\end{pmatrix}$, $B = \begin{pmatrix}-2&-6\\1&3\end{pmatrix}$, $M(x) = A + xB$

#### a) $\det A = 0$

$$\det A = 2\cdot(-2) - 4\cdot(-1) = 0.$$

*Barem: 3p + 2p.*

#### b) $M(x)\cdot M(1) = xM(1)$

$M(x) = \begin{pmatrix}2 - 2x & 4 - 6x\\ -1 + x & -2 + 3x\end{pmatrix}$, $M(1) = \begin{pmatrix}0&-2\\0&1\end{pmatrix}$.

$$M(x)M(1) = \begin{pmatrix}0 & -2(2 - 2x) + 4 - 6x\\ 0 & -2(-1 + x) - 2 + 3x\end{pmatrix} = \begin{pmatrix}0&-2x\\0&x\end{pmatrix} = xM(1).$$

*Barem: 2p + 3p.*

#### c) $n$ natural cu $M(4)M(3)M(2)M(1) = nM(1)$

Aplicând b) de la dreapta la stânga: $M(2)M(1) = 2M(1)$, apoi $M(3)\cdot2M(1) = 6M(1)$, apoi $M(4)\cdot6M(1) = 24M(1)$.

**Răspuns:** $n = 24$. *Barem: 3p + 2p.*

### 2. Legea $x * y = x + y + x^2y^2$

#### a) $1 * 2 = 7$

$$1 * 2 = 1 + 2 + 1\cdot4 = 7.$$

*Barem: 3p + 2p.*

#### b) $e = 0$ este elementul neutru

$x * 0 = x + 0 + 0 = x$ și $0 * x = x$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $x$ întreg cu $(-2) * x \le 3$

$$-2 + x + 4x^2 \le 3 \iff 4x^2 + x - 5 \le 0 \iff (4x + 5)(x - 1) \le 0 \iff x \in \left[-\tfrac54, 1\right].$$

**Răspuns:** $x \in \{-1, 0, 1\}$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x + x^4 - 2x + 2$

#### a) $f'(x) = e^x + 4x^3 - 2$

Derivăm termen cu termen: $f'(x) = e^x + 4x^3 - 2$. *Barem: 2p + 3p.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 1 + 2 = 3$, $f'(0) = 1 - 2 = -1$:

$$y - 3 = -x \iff y = -x + 3.$$

*Barem: 2p + 3p.*

#### c) $f$ este convexă

$f''(x) = e^x + 12x^2 > 0$ pentru orice $x$, deci $f$ e convexă. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f:(0,\infty)\to\mathbb R$, $f(x) = x - \frac1x$

#### a) $\displaystyle\int_1^3\left(f(x) + \frac1x\right)dx = 4$

$$\int_1^3x\,dx = \frac{x^2}2\Big|_1^3 = \frac92 - \frac12 = 4.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_1^2\left(f(x) + \frac1x\right)\ln x\,dx = 2\ln2 - \frac34$

$$\int_1^2x\ln x\,dx = \frac{x^2}2\ln x\Big|_1^2 - \int_1^2\frac x2dx = 2\ln2 - \frac{x^2}4\Big|_1^2 = 2\ln2 - \frac34.$$

*Barem: 3p + 2p.*

#### c) Cel mai mare $n \in \mathbb N^*$ cu $\displaystyle\int_1^{\sqrt2}x^{n+1}f^n(x)dx \ge \frac1{2021}$

$x^{n+1}f^n(x) = x\cdot x^n\left(x - \frac1x\right)^n = x(x^2 - 1)^n = \frac12(x^2 - 1)'(x^2 - 1)^n$, deci

$$\int_1^{\sqrt2}x(x^2-1)^ndx = \frac{(x^2 - 1)^{n+1}}{2(n+1)}\Big|_1^{\sqrt2} = \frac1{2(n+1)}.$$

$\dfrac1{2(n+1)} \ge \dfrac1{2021} \iff 2n + 2 \le 2021 \iff n \le 1009{,}5$.

**Răspuns:** $n = 1009$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $(4,5)$ |
| I.3 | $x = \frac34$ |
| I.5 | $a = 1$ |
| I.6 | $\sin x = \frac{\sqrt3}2$ |
| II.1.c | $n = 24$ |
| II.2.c | $x \in \{-1,0,1\}$ |
| III.1.b | $y = -x + 3$ |
| III.2.c | $n = 1009$ |

## Ce merită reținut din simulare

- **$C_n^k = C_n^{n-k}$** (formula combinărilor complementare).
- **Relația $M(x)M(1) = xM(1)$** se aplică în lanț, de la dreapta.
- **$\int u'u^n = \frac{u^{n+1}}{n+1}$** — după ce scrii integrandul ca $x(x^2-1)^n$.

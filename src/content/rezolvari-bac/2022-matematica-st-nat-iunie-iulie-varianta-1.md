Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_2 = 6$, $a_3 = 12$; aflați $a_1$

Rația: $r = a_3 - a_2 = 6$. Atunci $a_1 = a_2 - r = 6 - 6 = 0$.

**Răspuns:** $a_1 = 0$. *Barem: 2p rația, 3p $a_1$.*

### 2. $f(x) = x - 5$; $a$ cu $f(a) + f(2a) = 2$

$$(a - 5) + (2a - 5) = 2 \iff 3a = 12 \iff a = 4.$$

**Răspuns:** $a = 4$. *Barem: 3p + 2p.*

### 3. Ecuația $5^x\cdot\frac15 = 25$

$5^{x-1} = 5^2 \iff x - 1 = 2 \iff x = 3$.

**Răspuns:** $x = 3$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie multiplu de 16

Cazuri posibile: $10, \dots, 99$ — **90**. Multipli de 16 de două cifre: $16, 32, 48, 64, 80, 96$ — **6**.

$$p = \frac{6}{90} = \frac{1}{15}.$$

*Barem: 2p + 3p.*

### 5. $A(3,2)$, $B(1,4)$; $C$ astfel încât $A$ să fie mijlocul lui $BC$

$$\frac{1 + x_C}{2} = 3 \Rightarrow x_C = 5,\qquad \frac{4 + y_C}{2} = 2 \Rightarrow y_C = 0.$$

**Răspuns:** $C(5, 0)$. *Barem: 3p + 2p.*

### 6. $E(x) = \sin x + \sin\frac{3x}{2} - \cos\frac x2$; arătați că $E\left(\frac\pi3\right) = 1$

$$E\left(\tfrac\pi3\right) = \sin\tfrac\pi3 + \sin\tfrac\pi2 - \cos\tfrac\pi6 = \tfrac{\sqrt3}{2} + 1 - \tfrac{\sqrt3}{2} = 1.$$

*Barem: 3p valorile, 2p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1&-1\\-1&1\end{pmatrix}$, $B(x) = \begin{pmatrix}x & 3 - x\\ 2 - x & x\end{pmatrix}$

#### a) $\det A = 0$

$$\det A = 1\cdot 1 - (-1)(-1) = 0.$$

*Barem: 3p + 2p.*

#### b) $B(x) - B(0) = xA$

$B(0) = \begin{pmatrix}0&3\\2&0\end{pmatrix}$, deci

$$B(x) - B(0) = \begin{pmatrix}x & -x\\ -x & x\end{pmatrix} = x\begin{pmatrix}1&-1\\-1&1\end{pmatrix} = xA.$$

*Barem: 3p + 2p.*

#### c) $C(a) = B(a)B(1) - B(a+1)$ este inversabilă pentru orice $a \in \mathbb Z$

$B(1) = \begin{pmatrix}1&2\\1&1\end{pmatrix}$, deci

$$B(a)B(1) = \begin{pmatrix}3 & a + 3\\ 2 & 4 - a\end{pmatrix},\quad B(a+1) = \begin{pmatrix}a+1 & 2 - a\\ 1 - a & a + 1\end{pmatrix},$$

$$C(a) = \begin{pmatrix}2 - a & 2a + 1\\ a + 1 & 3 - 2a\end{pmatrix},\quad \det C(a) = (2-a)(3-2a) - (2a+1)(a+1) = 5 - 10a.$$

$\det C(a) = 0 \iff a = \frac12 \notin \mathbb Z$, deci pentru orice $a$ întreg $\det C(a) \ne 0$ și $C(a)$ este inversabilă. $\blacksquare$ *Barem: 3p determinantul, 2p concluzia.*

### 2. Legea $x * y = (2x - 1)(2y - 1) + 1$

#### a) $1 * 2 = 4$

$$1 * 2 = (2 - 1)(4 - 1) + 1 = 3 + 1 = 4.$$

*Barem: 3p + 2p.*

#### b) $x$ cu $x * x = 2$

$$(2x - 1)^2 + 1 = 2 \iff (2x - 1)^2 = 1 \iff 4x^2 - 4x = 0 \iff 4x(x - 1) = 0.$$

**Răspuns:** $x \in \{0, 1\}$. *Barem: 2p + 3p.*

#### c) $m \in \mathbb Z^*$ cu $m * \left(1 + \frac1m\right) = 1$

$2\left(1 + \frac1m\right) - 1 = 1 + \frac2m$, deci

$$m * \left(1 + \tfrac1m\right) = (2m - 1)\left(1 + \tfrac2m\right) + 1 = 1 \iff (2m - 1)\cdot\frac{m + 2}{m} = 0.$$

Soluțiile sunt $m = \frac12$ (nu e întreg) și $m = -2$.

**Răspuns:** $m = -2$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = 2x^2 + 1 + \ln x$

#### a) $f'(x) = \dfrac{4x^2 + 1}{x}$

$$f'(x) = 4x + \frac1x = \frac{4x^2 + 1}{x},\quad x > 0.$$

*Barem: 2p + 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x) - \ln x}{x^2 + x + 4} = 2$

$$\lim_{x\to\infty}\frac{2x^2 + 1}{x^2 + x + 4} = \lim_{x\to\infty}\frac{x^2\left(2 + \frac1{x^2}\right)}{x^2\left(1 + \frac1x + \frac4{x^2}\right)} = 2.$$

*Barem: 3p + 2p.*

#### c) $f$ este bijectivă

**Injectivitate:** $f'(x) > 0$ pe $(0, \infty)$, deci $f$ este strict crescătoare, deci injectivă.

**Surjectivitate:** $f$ este continuă, $\lim\limits_{x\searrow0} f(x) = 1 + (-\infty) = -\infty$, $\lim\limits_{x\to\infty} f(x) = +\infty$; din continuitate (proprietatea lui Darboux) $f$ ia toate valorile reale.

Deci $f$ este bijectivă. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = x\left(e^x + 2x^2\right)$

#### a) $\displaystyle\int_0^4 \frac{f(x)}{e^x + 2x^2}dx = 8$

$$\int_0^4 x\,dx = \frac{x^2}{2}\Big|_0^4 = 8.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1\left(f(x) - 2x^3\right)dx = 1$

$f(x) - 2x^3 = xe^x$. Integrăm prin părți ($u = x$, $v' = e^x$):

$$\int_0^1 xe^x dx = xe^x\Big|_0^1 - \int_0^1 e^x dx = e - (e - 1) = 1.$$

*Barem: 3p + 2p.*

#### c) $a$ cu $\displaystyle\int_1^2\frac1x f(x^2)\,dx = \frac{e^4 - e}{2} + a$

$f(x^2) = x^2\left(e^{x^2} + 2x^4\right)$, deci $\frac1x f(x^2) = xe^{x^2} + 2x^5$.

$$\int_1^2 xe^{x^2}dx = \frac12 e^{x^2}\Big|_1^2 = \frac{e^4 - e}{2},\qquad \int_1^2 2x^5dx = \frac{x^6}{3}\Big|_1^2 = \frac{64 - 1}{3} = 21.$$

**Răspuns:** $a = 21$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 0$ |
| I.2 | $a = 4$ |
| I.3 | $x = 3$ |
| I.4 | $p = \frac1{15}$ |
| I.5 | $C(5,0)$ |
| II.2.b | $x \in \{0,1\}$ |
| II.2.c | $m = -2$ |
| III.2.c | $a = 21$ |

## Ce merită reținut din varianta 1

- **Bijectivitate** = strict monotonă (injectivă) + continuă cu limitele $-\infty$ și $+\infty$ la capete (surjectivă).
- **$\int xe^{x^2}dx = \frac12e^{x^2}$** — schimbare de variabilă $t = x^2$.
- **Invers­abilitate pentru valori întregi:** determinantul se anulează doar într-o valoare neîntreagă.

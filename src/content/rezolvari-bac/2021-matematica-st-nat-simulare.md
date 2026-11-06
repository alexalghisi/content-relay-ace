Rezolvarea completă a **simulării pentru Bacalaureat 2021 la Matematică M_șt-nat** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 3 + 2i$; arătați că $z + \frac{13}z = 6$

$$\frac{13}{3 + 2i} = \frac{13(3 - 2i)}{9 + 4} = 3 - 2i \Rightarrow z + \frac{13}z = 3 + 2i + 3 - 2i = 6.$$

*Barem: 3p + 2p.*

### 2. $f(x) = 3x - 5$, $g(x) = x^2 + x$; $a$ cu $(f\circ g)(a) = (f\circ g)(-a)$

$f$ e injectivă, deci condiția devine $g(a) = g(-a)$: $a^2 + a = a^2 - a \iff a = 0$.

*Barem: 3p + 2p.*

### 3. Ecuația $3^{3x+5} = 9\cdot3^{x+1}$

$9\cdot3^{x+1} = 3^{x+3}$, deci $3x + 5 = x + 3 \iff x = -1$.

*Barem: 3p + 2p.*

### 4. $A$ cu 4 elemente; probabilitatea ca o submulțime să aibă număr impar de elemente

Cazuri posibile: $2^4 = 16$ submulțimi. Favorabile: $C_4^1 + C_4^3 = 4 + 4 = 8$.

$$p = \frac8{16} = \frac12.$$

*Barem: 2p + 2p + 1p.*

### 5. $A(1,3)$, $B(3,5)$, $C(0,6)$; dreapta prin $A$ paralelă cu mediana din $C$

Mijlocul lui $AB$: $M(2,4)$; $m_{CM} = \frac{4 - 6}{2 - 0} = -1$. Deci $m_d = -1$:

$$d:\ y - 3 = -(x - 1) \iff y = -x + 4.$$

*Barem: 2p + 3p.*

### 6. $AB = 2$, $AC = 2\sqrt3$, $B = \frac\pi3$; lungimea lui $BC$

Teorema cosinusului: $AC^2 = AB^2 + BC^2 - 2AB\cdot BC\cos B$:

$$12 = 4 + BC^2 - 2BC \iff BC^2 - 2BC - 8 = 0 \iff (BC - 4)(BC + 2) = 0.$$

**Răspuns:** $BC = 4$. *Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1 + 2x & 0 & -4x\\ 0 & a & 0\\ x & 0 & 1 - 2x\end{pmatrix}$, $a \ne 0$

#### a) $\det A(x) = a$

Dezvoltând după linia a doua:

$$\det A(x) = a\big[(1 + 2x)(1 - 2x) + 4x^2\big] = a(1 - 4x^2 + 4x^2) = a.$$

*Barem: 3p + 2p.*

#### b) $a$ cu $A(x)A(y) = A(x + y)$ pentru orice $x, y$

Calculând produsul: $(1+2x)(1+2y) - 4xy = 1 + 2(x+y)$; $-4y(1+2x) - 4x(1-2y) = -4(x+y)$; $x(1+2y) + y(1-2x) = x + y$; $-4xy + (1-2x)(1-2y) = 1 - 2(x+y)$, iar elementul central este $a^2$:

$$A(x)A(y) = \begin{pmatrix}1 + 2(x+y) & 0 & -4(x+y)\\ 0 & a^2 & 0\\ x + y & 0 & 1 - 2(x+y)\end{pmatrix}.$$

Egalitatea cu $A(x+y)$ cere $a^2 = a$, și cum $a \ne 0$, $a = 1$. *Barem: 3p + 2p.*

#### c) Pentru $a = 1$, $X$ cu $A(2)\cdot X = A(3)$

$A(-2)A(2) = A(0) = I_3$, deci $A(2)^{-1} = A(-2)$ și

$$X = A(-2)A(3) = A(1) = \begin{pmatrix}3&0&-4\\0&1&0\\1&0&-1\end{pmatrix}.$$

*Barem: 2p + 3p.*

### 2. Pe $M = [0,\infty)$: $x * y = \log_2\left(2^x + 2^y - 1\right)$

#### a) $0 * 2021 = 2021$

$$0 * 2021 = \log_2(1 + 2^{2021} - 1) = \log_22^{2021} = 2021.$$

*Barem: 3p + 2p.*

#### b) Elementul neutru

$x * e = x \iff 2^x + 2^e - 1 = 2^x \iff 2^e = 1 \iff e = 0 \in M$. Verificare: $0 * x = \log_2(1 + 2^x - 1) = x$.

**Răspuns:** $e = 0$. *Barem: 3p + 2p.*

#### c) $x \in M$ cu $x * (x+1) * (x+2) = \log_254$

Din asociativitate: $x * y * z = \log_2(2^x + 2^y + 2^z - 2)$. Atunci

$$2^x + 2\cdot2^x + 4\cdot2^x - 2 = 54 \iff 7\cdot2^x = 56 \iff 2^x = 8 \iff x = 3 \in M.$$

**Răspuns:** $x = 3$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{\dfrac{x^2 + x + 1}{x^2 + 1}}$

#### a) $f'(x) = \dfrac{1 - x^2}{2(x^2+1)\sqrt{(x^2+x+1)(x^2+1)}}$

Cu $u = \frac{x^2+x+1}{x^2+1}$: $u' = \dfrac{(2x+1)(x^2+1) - 2x(x^2+x+1)}{(x^2+1)^2} = \dfrac{1 - x^2}{(x^2+1)^2}$.

$$f'(x) = \frac{u'}{2\sqrt u} = \frac{1 - x^2}{(x^2+1)^2}\cdot\frac{\sqrt{x^2+1}}{2\sqrt{x^2+x+1}} = \frac{1 - x^2}{2(x^2+1)\sqrt{(x^2+x+1)(x^2+1)}}.$$

*Barem: 2p + 3p.*

#### b) Asimptota orizontală spre $-\infty$

$$\lim_{x\to-\infty}f(x) = \lim_{x\to-\infty}\sqrt{\frac{1 + \frac1x + \frac1{x^2}}{1 + \frac1{x^2}}} = 1.$$

**Răspuns:** $y = 1$. *Barem: 3p + 2p.*

#### c) $\sqrt2 \le \sqrt{\dfrac{x^2+x+1}{x^2+1}} + \sqrt{\dfrac{x^2-x+1}{x^2+1}} \le \sqrt6$

Semnul lui $f'$ este al lui $1 - x^2$: $f$ descrescătoare pe $(-\infty,-1]$, crescătoare pe $[-1,1]$, descrescătoare pe $[1,\infty)$, cu $\lim\limits_{x\to\pm\infty}f = 1$.

$f(-1) = \sqrt{\frac12} = \frac{\sqrt2}2$ (minim global), $f(1) = \sqrt{\frac32} = \frac{\sqrt6}2$ (maxim global). Deci $\frac{\sqrt2}2 \le f(x) \le \frac{\sqrt6}2$ pentru orice $x$.

Al doilea radical este $f(-x)$, deci adunând inegalitățile pentru $x$ și $-x$: $\sqrt2 \le f(x) + f(-x) \le \sqrt6$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f:(0,\infty)\to\mathbb R$, $f(x) = 2x + 3 - 2\ln x$

#### a) $\displaystyle\int_1^3\left(f(x) + 2\ln x\right)dx = 14$

$$\int_1^3(2x + 3)dx = (x^2 + 3x)\Big|_1^3 = 18 - 4 = 14.$$

*Barem: 3p + 2p.*

#### b) Calculați $\displaystyle\int_1^e\left(2x + 3 - f(x)\right)dx$

$$\int_1^e2\ln x\,dx = 2(x\ln x - x)\Big|_1^e = 2\big[(e - e) - (0 - 1)\big] = 2.$$

**Răspuns:** $2$. *Barem: 3p + 2p.*

#### c) $\displaystyle\int_0^1x^2f(x^3 + 1)dx = \frac{4(2 - \ln2)}3$

Cu $t = x^3 + 1$, $dt = 3x^2dx$:

$$\frac13\int_1^2f(t)dt = \frac13\Big[t^2 + 3t - 2(t\ln t - t)\Big]_1^2 = \frac13\big[(4 + 6 - 4\ln2 + 4) - (1 + 3 + 2)\big] = \frac{8 - 4\ln2}{3} = \frac{4(2 - \ln2)}{3}.$$

*Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 0$ |
| I.3 | $x = -1$ |
| I.4 | $p = \frac12$ |
| I.5 | $y = -x + 4$ |
| I.6 | $BC = 4$ |
| II.1.b | $a = 1$ |
| II.1.c | $X = A(1)$ |
| II.2.b | $e = 0$ |
| II.2.c | $x = 3$ |
| III.1.b | $y = 1$ |
| III.2.b | $2$ |

## Ce merită reținut din simulare

- **Familii de matrice cu $A(x)A(y) = A(x+y)$:** inversa lui $A(x)$ este $A(-x)$.
- **Legea $\log_2(2^x + 2^y - 1)$** se extinde natural: $x*y*z = \log_2(2^x + 2^y + 2^z - 2)$.
- **$\int\ln x\,dx = x\ln x - x$.**

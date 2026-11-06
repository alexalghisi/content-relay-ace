Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 - i$; arătați că $z^2 = -2i$

$$z^2 = (1 - i)^2 = 1 - 2i + i^2 = 1 - 2i - 1 = -2i.$$

*Barem: 2p, 3p.*

### 2. $(g\circ f)(0)$, cu $f(x) = x + 2016$, $g(x) = x - 2016$

$f(0) = 2016$, $g(2016) = 0$.

**Răspuns:** $0$. *Barem: 2p, 3p.*

### 3. Ecuația $3^{x^2 - 3x} = 3^{x - 4}$

$$x^2 - 3x = x - 4 \iff x^2 - 4x + 4 = 0 \iff (x - 2)^2 = 0 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $M = \{1, 2, \dots, 100\}$ să fie pătrat perfect

Cazuri posibile: **100**. Pătrate perfecte: $1^2, 2^2, \dots, 10^2$ — **10**.

$$p = \frac{10}{100} = \frac{1}{10}.$$

*Barem: 1p, 2p, 2p.*

### 5. Dreapta $d$ prin $A(0, 1)$, paralelă cu $y = 3x - 2016$

Panta lui $d$ este $3$; $A$ este pe $Oy$, deci ordonata la origine este $1$.

**Răspuns:** $d: y = 3x + 1$. *Barem: 2p, 3p.*

### 6. Aria triunghiului $ABC$ cu $AB = 6$, $AC = 4$, $A = \frac\pi6$

$$\mathcal A = \frac{AB\cdot AC\cdot\sin A}{2} = \frac{6\cdot 4\cdot\frac12}{2} = 6.$$

**Răspuns:** $6$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(m) = \begin{pmatrix} m - 1 & -1\\ 2 & m - 2\end{pmatrix}$

#### a) $\det(A(0)) = 4$

$$\det A(0) = \begin{vmatrix} -1 & -1\\ 2 & -2\end{vmatrix} = 2 - (-2) = 4.$$

*Barem: 2p, 3p.*

#### b) $A(1 + m) + A(1 - m) = 2A(1)$

$$A(1+m) + A(1-m) = \begin{pmatrix} m & -1\\ 2 & m - 1\end{pmatrix} + \begin{pmatrix} -m & -1\\ 2 & -m - 1\end{pmatrix} = \begin{pmatrix} 0 & -2\\ 4 & -2\end{pmatrix} = 2\begin{pmatrix} 0 & -1\\ 2 & -1\end{pmatrix} = 2A(1).$$

*Barem: 3p, 2p.*

#### c) $A(m)$ este inversabilă pentru orice $m$

$$\det A(m) = (m - 1)(m - 2) + 2 = m^2 - 3m + 4.$$

Discriminantul este $9 - 16 = -7 < 0$, deci $m^2 - 3m + 4 > 0$ pentru orice $m$ real. Matricea este inversabilă. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $x * y = -3xy + 9x + 9y - 24$

#### a) $x * y = -3(x - 3)(y - 3) + 3$

$$-3(xy - 3x - 3y + 9) + 3 = -3xy + 9x + 9y - 27 + 3 = x * y.$$

*Barem: 2p, 3p.*

#### b) Legea este asociativă

$$(x * y) * z = -3\big(-3(x-3)(y-3)\big)(z - 3) + 3 = 9(x-3)(y-3)(z-3) + 3,$$

$$x * (y * z) = -3(x - 3)\big(-3(y-3)(z-3)\big) + 3 = 9(x-3)(y-3)(z-3) + 3.$$

Expresiile coincid, deci legea este asociativă. *Barem: 2p, 3p.*

#### c) $x$ cu $(x * x) * x = 12$

Din b), $(x * x) * x = 9(x - 3)^3 + 3$:

$$9(x - 3)^3 + 3 = 12 \iff (x - 3)^3 = 1 \iff x = 4.$$

**Răspuns:** $x = 4$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^3 - 3\ln x$

#### a) $f'(x) = \dfrac{3(x^3 - 1)}{x}$

$$f'(x) = 3x^2 - \frac3x = \frac{3x^3 - 3}{x} = \frac{3(x^3 - 1)}{x}.$$

*Barem: 3p, 2p.*

#### b) Asimptota verticală

$$\lim_{x\searrow 0}(x^3 - 3\ln x) = 0 - 3\cdot(-\infty) = +\infty,$$

deci $x = 0$ este asimptotă verticală.

**Răspuns:** $x = 0$. *Barem: 2p, 3p.*

#### c) $f(x) \ge 1$ pentru orice $x > 0$

$f'(x) = 0 \iff x = 1$. Pe $(0, 1]$, $x^3 \le 1$, $f' \le 0$ ($f$ descrescătoare); pe $[1, +\infty)$, $f' \ge 0$ ($f$ crescătoare). Minimul global este $f(1) = 1$, deci $f(x) \ge 1$. $\blacksquare$ *Barem: 1p, 1p, 1p, 2p.*

### 2. $f(x) = \dfrac{2x + 3}{x^2 + 3x + 3}$

(Numitorul are $\Delta = 9 - 12 < 0$, deci e pozitiv pe $\mathbb R$.)

#### a) $\displaystyle\int_1^2(x^2 + 3x + 3)f(x)\,dx = 6$

$$\int_1^2(2x + 3)\,dx = (x^2 + 3x)\Big|_1^2 = 10 - 4 = 6.$$

*Barem: 3p, 2p.*

#### b) Aria delimitată de $G_f$, $Ox$, $x = 0$, $x = 3$ este $\ln 7$

Pe $[0, 3]$, $f > 0$, iar numărătorul este derivata numitorului:

$$\mathcal A = \int_0^3\frac{(x^2 + 3x + 3)'}{x^2 + 3x + 3}\,dx = \ln(x^2 + 3x + 3)\Big|_0^3 = \ln 21 - \ln 3 = \ln 7.$$

*Barem: 3p, 2p.*

#### c) $\displaystyle\int_{-1}^0 f'(x)f(x)\,dx = 0$

$$\int_{-1}^0 f'f\,dx = \frac{f^2(x)}{2}\Big|_{-1}^0 = \frac12\big(f^2(0) - f^2(-1)\big) = \frac12(1 - 1) = 0,$$

deoarece $f(0) = \frac33 = 1$ și $f(-1) = \frac{1}{1} = 1$. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac{1}{10}$ |
| I.5 | $y = 3x + 1$ |
| I.6 | $6$ |
| II.2.c | $x = 4$ |
| III.1.b | $x = 0$ |
| III.2.b | $\ln 7$ |

## Ce merită reținut din varianta 8

- **Inversabilitate pentru orice parametru**: arată că determinantul (de gradul 2) are $\Delta < 0$.
- **Legea $k(x-a)(y-a) + a$** este asociativă; compunerea a trei elemente dă $k^2(x-a)(y-a)(z-a) + a$.
- **$\int\frac{u'}{u} = \ln|u|$**, iar $\int u'u = \frac{u^2}{2}$.
- **Minimul lui $x^3 - 3\ln x$** se atinge în $x = 1$.

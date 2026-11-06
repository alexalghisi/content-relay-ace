Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 1 + i$; arătați că $z^2 - 2i = 0$

$$z^2 = (1 + i)^2 = 1 + 2i + i^2 = 2i \Rightarrow z^2 - 2i = 0.$$

*Barem: 3p, 2p.*

### 2. $(g\circ f)(3)$, cu $f(x) = x - 3$ și $g(x) = x + 2015$

$f(3) = 0$, apoi $(g\circ f)(3) = g(0) = 2015$.

**Răspuns:** $2015$. *Barem: 2p, 3p.*

### 3. Ecuația $5^{x^2 - 5x} = 5^{3 - 3x}$

$$x^2 - 5x = 3 - 3x \iff x^2 - 2x - 3 = 0 \iff (x - 3)(x + 1) = 0.$$

**Răspuns:** $x \in \{-1, 3\}$. *Barem: 3p, 2p.*

### 4. Numărul submulțimilor cu patru elemente ale mulțimii $\{1, 2, 3, 4, 5\}$

$$C_5^4 = \frac{5!}{4!\cdot 1!} = 5.$$

**Răspuns:** $5$. *Barem: 3p, 2p.*

### 5. Dreapta $d$ prin $A(0, 4)$, paralelă cu $y = 2x + 7$

Panta lui $d$ este $2$, iar ordonata la origine este $4$ ($A$ e pe $Oy$):

$$d: y = 2x + 4.$$

**Răspuns:** $y = 2x + 4$. *Barem: 2p, 3p.*

### 6. Aria triunghiului $MNP$ cu $MN = 12$, $MP = 3$, $m(\angle M) = 30^\circ$

$$\mathcal A = \frac{MN\cdot MP\cdot\sin M}{2} = \frac{12\cdot 3\cdot\frac12}{2} = 9.$$

**Răspuns:** $9$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & -a\\ -a & 1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$A(0) = I_2$, deci $\det A(0) = 1\cdot 1 - 0\cdot 0 = 1$. *Barem: 2p, 3p.*

#### b) $a$ cu $\det(A(a)) = 0$

$$\det A(a) = 1 - a^2 = 0 \iff a \in \{-1, 1\}.$$

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 3p, 2p.*

#### c) $A(a)A(b) = A(a + b) + abI_2$

$$A(a)A(b) = \begin{pmatrix} 1 + ab & -b - a\\ -a - b & ab + 1\end{pmatrix},$$

$$A(a + b) + abI_2 = \begin{pmatrix} 1 & -a - b\\ -a - b & 1\end{pmatrix} + \begin{pmatrix} ab & 0\\ 0 & ab\end{pmatrix} = \begin{pmatrix} 1 + ab & -a - b\\ -a - b & 1 + ab\end{pmatrix}.$$

Matricele coincid. $\blacksquare$ *Barem: 3p, 2p.*

### 2. $f = X^3 - mX + 2$

#### a) $f(0) = 2$

$f(0) = 0 - 0 + 2 = 2$. *Barem: 3p, 2p.*

#### b) $m$ pentru care restul împărțirii la $g = X^2 + X - 2$ este $0$

$(X - 1)(X^2 + X - 2) = X^3 - 3X + 2$, deci

$$f = (X - 1)g + (3 - m)X.$$

Restul este $(3 - m)X$, iar el este nul $\iff m = 3$.

**Răspuns:** $m = 3$. *Barem: 3p, 2p.*

#### c) $x_1^3 + x_2^3 + x_3^3 = -6$

Viète: $x_1 + x_2 + x_3 = 0$. Fiecare rădăcină verifică $x_i^3 = mx_i - 2$; adunând:

$$x_1^3 + x_2^3 + x_3^3 = m(x_1 + x_2 + x_3) - 6 = -6. \ \blacksquare$$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x - x - 1$

#### a) $\lim\limits_{x\to 0}\dfrac{f(x) - f(0)}{x} = 0$

Limita este $f'(0)$. $f'(x) = e^x - 1$, $f'(0) = 0$. *Barem: 2p, 3p.*

#### b) $f$ este descrescătoare pe $(-\infty, 0]$

Pentru $x \le 0$, $e^x \le 1$, deci $f'(x) = e^x - 1 \le 0$ și $f$ este descrescătoare. *Barem: 2p, 3p.*

#### c) $e^x \ge x + 1$ pentru orice $x$ real

Pentru $x \ge 0$, $f'(x) \ge 0$, deci $f$ este crescătoare pe $[0, +\infty)$. Cu b), $x = 0$ este punct de minim global:

$$f(x) \ge f(0) = 0 \iff e^x \ge x + 1. \ \blacksquare$$

*Barem: 2p, 3p.*

### 2. $f(x) = x^2 - 2x + 5$

#### a) $\displaystyle\int_0^1(f(x) + 2x - 5)\,dx = \frac13$

$$\int_0^1 x^2\,dx = \frac{x^3}{3}\Big|_0^1 = \frac13.$$

*Barem: 2p, 3p.*

#### b) $\displaystyle\int_0^2\frac{f'(x)}{f(x)}\,dx$

$f > 0$ ($\Delta < 0$), deci

$$\int_0^2\frac{f'(x)}{f(x)}\,dx = \ln f(x)\Big|_0^2 = \ln 5 - \ln 5 = 0.$$

**Răspuns:** $0$. *Barem: 3p, 2p.*

#### c) $\displaystyle\int_{2014}^{2015}\frac{1}{f(x)}\,dx \le \frac14$

$f(x) = (x - 1)^2 + 4 \ge 4$, deci $\dfrac{1}{f(x)} \le \dfrac14$ și

$$\int_{2014}^{2015}\frac{dx}{f(x)} \le \int_{2014}^{2015}\frac14\,dx = \frac14. \ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $2015$ |
| I.3 | $x \in \{-1, 3\}$ |
| I.4 | $5$ |
| I.5 | $y = 2x + 4$ |
| I.6 | $9$ |
| II.1.b | $a \in \{-1, 1\}$ |
| II.2.b | $m = 3$ |
| III.1.a | $0$ |
| III.2.a | $\tfrac13$ |
| III.2.b | $0$ |

## Ce merită reținut din varianta 8

- **Aria cu sinus**: $\mathcal A = \frac12 ab\sin C$.
- **Suma cuburilor rădăcinilor**: înlocuiește $x_i^3$ folosind chiar ecuația polinomului.
- **Inegalitatea $e^x \ge x + 1$** — clasică, se demonstrează prin studiul minimului lui $e^x - x - 1$.
- **$\int\frac{f'}{f} = \ln|f|$**; încadrarea unei integrale pornește de la minimul/maximul integrandului.

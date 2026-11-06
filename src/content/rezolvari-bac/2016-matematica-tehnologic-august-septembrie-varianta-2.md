Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $1 - \frac12 : 0{,}5 = 0$

$\frac12 : 0{,}5 = \frac12 : \frac12 = 1$, deci $1 - 1 = 0$. *Barem: 3p + 2p.*

### 2. $2(x_1 + x_2) - x_1x_2 = 1$ pentru rădăcinile lui $x^2 - 8x + 15 = 0$

Viète: $x_1 + x_2 = 8$, $x_1x_2 = 15$. $2\cdot8 - 15 = 1$. *Barem: 2p + 3p.*

### 3. Ecuația $\sqrt{5x + 1} = 6$

$5x + 1 = 36 \iff x = 7$, care verifică. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr din $\{1, \dots, 8\}$ să fie divizibil cu 2

Favorabile: $2, 4, 6, 8$ — 4 din 8. $p = \frac12$. *Barem: 1p + 2p + 2p.*

### 5. Lungimea segmentului $AB$, $A(6,0)$, $B(0,8)$

$$AB = \sqrt{36 + 64} = 10.$$

*Barem: 3p + 2p.*

### 6. Triunghi dreptunghic în $A$, $BC = 3\sqrt2$, $B = 45^\circ$; aflați $AB$

$AB$ este cateta alăturată unghiului $B$:

$$\cos B = \frac{AB}{BC} \Rightarrow AB = 3\sqrt2\cdot\frac{\sqrt2}{2} = 3.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 0\\ -2 & 1\end{pmatrix}$

#### a) $\det A = 1$

$$\det A = 1\cdot1 - 0\cdot(-2) = 1.$$

*Barem: 3p + 2p.*

#### b) $A\cdot A + I_2 = 2A$

$$A\cdot A = \begin{pmatrix} 1 & 0\\ -4 & 1\end{pmatrix}, \qquad A\cdot A + I_2 = \begin{pmatrix} 2 & 0\\ -4 & 2\end{pmatrix} = 2A.$$

*Barem: 3p + 2p.*

#### c) $a, b, c$ cu $A\cdot\begin{pmatrix} a - 2 & b\\ c + 1 & 1\end{pmatrix} = I_2$

$$A\cdot\begin{pmatrix} a - 2 & b\\ c + 1 & 1\end{pmatrix} = \begin{pmatrix} a - 2 & b\\ -2(a-2) + c + 1 & -2b + 1\end{pmatrix} = \begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix}.$$

$a - 2 = 1 \Rightarrow a = 3$; $b = 0$; $-2 + c + 1 = 0 \Rightarrow c = 1$.

**Răspuns:** $a = 3$, $b = 0$, $c = 1$. *Barem: 2p + 3p.*

### 2. $x\circ y = xy + 3x + 3y + 6$

#### a) $1\circ(-3) = -3$

$$-3 + 3 - 9 + 6 = -3.$$

*Barem: 3p + 2p.*

#### b) $x\circ y = (x+3)(y+3) - 3$

$$xy + 3x + 3y + 9 - 3 = x(y+3) + 3(y+3) - 3 = (x+3)(y+3) - 3.$$

*Barem: 2p + 3p.*

#### c) $x\circ x \le x$

$$(x+3)^2 - 3 \le x \iff (x+3)^2 - (x+3) \le 0 \iff (x+3)(x+2) \le 0 \iff x \in [-3, -2].$$

*Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 2x^3 - 3x^2 + 7$

#### a) $f'(x) = 6x(x-1)$

$$f'(x) = 6x^2 - 6x = 6x(x-1).$$

*Barem: 2p + 3p.*

#### b) $\lim\limits_{x\to2}\dfrac{f(x) - 11}{x - 2} = 12$

$f(2) = 16 - 12 + 7 = 11$, deci limita este $f'(2) = 6\cdot2\cdot1 = 12$. *Barem: 3p + 2p.*

#### c) $f(x) \ge 6$ pentru $x \ge 0$

$f'(x) = 0 \iff x \in \{0, 1\}$. Pe $[0, 1]$, $f' \le 0$ (descrescătoare); pe $[1, +\infty)$, $f' \ge 0$ (crescătoare). Minimul pe $[0, +\infty)$ este $f(1) = 2 - 3 + 7 = 6$. $\blacksquare$ *Barem: 2p + 1p + 1p + 1p.*

### 2. $f(x) = x^2 + 3x$

#### a) $\displaystyle\int_{-1}^1(f(x) - 3x)\,dx = \frac23$

$$\int_{-1}^1 x^2\,dx = \frac{x^3}{3}\Big|_{-1}^1 = \frac13 + \frac13 = \frac23.$$

*Barem: 2p + 3p.*

#### b) $\displaystyle\int_0^1(f(x) - x^2)e^x\,dx = 3$

$$3\int_0^1 xe^x\,dx = 3(x - 1)e^x\Big|_0^1 = 3\big(0 - (-1)\big) = 3.$$

*Barem: 3p + 2p.*

#### c) Volumul pentru $g(x) = \dfrac{3f(x)}{x} = 3(x + 3)$ pe $[1,2]$

$$V = \pi\int_1^2 9(x+3)^2\,dx = 9\pi\frac{(x+3)^3}{3}\Big|_1^2 = 3\pi(125 - 64) = 183\pi.$$

*Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 7$ |
| I.4 | $p = \frac12$ |
| I.5 | $10$ |
| I.6 | $AB = 3$ |
| II.1.c | $a = 3$, $b = 0$, $c = 1$ |
| II.2.c | $x \in [-3, -2]$ |
| III.1.c | minim $f(1) = 6$ |
| III.2.c | $183\pi$ |

## Ce merită reținut din varianta 2

- **Legea $(x+a)(y+a) - a$**: inecuația $x\circ x \le x$ devine $(x+a)(x+a-1) \le 0$.
- **Ecuații matriceale cu necunoscute în elemente**: efectuează produsul și identifică element cu element.
- **$\int xe^x dx = (x-1)e^x + C$**.
- **Volume cu $g$ liniar**: $\int(x+c)^2dx = \frac{(x+c)^3}{3}$ — fără dezvoltare.

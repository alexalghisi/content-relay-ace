Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_tehnologic**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\sqrt3(2 - \sqrt2) + \sqrt2(\sqrt3 - \sqrt6) = 0$

$$2\sqrt3 - \sqrt6 + \sqrt6 - \sqrt{12} = 2\sqrt3 - 2\sqrt3 = 0,$$

deoarece $\sqrt{12} = 2\sqrt3$. *Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = x^2 - 2$; $a$ cu $f(a) = a$

$$a^2 - 2 = a \iff a^2 - a - 2 = 0 \iff (a - 2)(a + 1) = 0.$$

**Răspuns:** $a \in \{-1, 2\}$. *Barem: 2p $f(a)$, 3p soluțiile.*

### 3. $2^{7x - 5} = 4^x$

$4^x = 2^{2x}$, iar funcția exponențială este injectivă: $7x - 5 = 2x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca $n \in \{1, 2, 3, 4, 5\}$ să verifice $2^n \le 16$

5 cazuri posibile. $2^n \le 16 = 2^4 \iff n \le 4$: $n \in \{1, 2, 3, 4\}$ — 4 cazuri favorabile.

**Răspuns:** $p = \dfrac45$. *Barem: 1p posibile, 2p favorabile, 2p probabilitatea.*

### 5. $M(1,2)$, $N(4,3)$, $P(6,1)$; lungimea $MQ$, $Q$ mijlocul lui $NP$

$$Q\left(\frac{4+6}{2}, \frac{3+1}{2}\right) = Q(5, 2), \qquad MQ = \sqrt{(5-1)^2 + (2-2)^2} = 4.$$

**Răspuns:** $MQ = 4$. *Barem: 2p $Q$, 3p distanța.*

### 6. $\sin 30^\circ + \sin 45^\circ - \cos 60^\circ - \cos 45^\circ = 0$

$\sin 30^\circ = \cos 60^\circ = \dfrac12$ și $\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt2}{2}$, deci termenii se reduc doi câte doi: $\dfrac12 + \dfrac{\sqrt2}2 - \dfrac12 - \dfrac{\sqrt2}2 = 0$. *Barem: 2p valorile, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 1\\ -1 & 2\end{pmatrix}$

#### a) $\det(A(2)) = 5$

$$\det(A(2)) = \begin{vmatrix} 2 & 1\\ -1 & 2\end{vmatrix} = 2\cdot 2 - (-1)\cdot 1 = 5.$$

*Barem: 3p, 2p.*

#### b) $x, y$ cu $A(x)\cdot A(y) = 3I_2$

$$A(x)A(y) = \begin{pmatrix} xy - 1 & x + 2\\ -y - 2 & -1 + 4\end{pmatrix} = \begin{pmatrix} 3 & 0\\ 0 & 3\end{pmatrix}.$$

Din $x + 2 = 0$ și $-y - 2 = 0$: $x = y = -2$; verificare $xy - 1 = 4 - 1 = 3$ ✔.

**Răspuns:** $x = -2$, $y = -2$. *Barem: 3p produsul, 2p valorile.*

#### c) $p \in \mathbb Z$ cu $\det(A(p)\cdot A(p) + I_2) = 5$

$$A(p)^2 + I_2 = \begin{pmatrix} p^2 - 1 & p + 2\\ -p - 2 & 3\end{pmatrix} + I_2 = \begin{pmatrix} p^2 & p + 2\\ -p - 2 & 4\end{pmatrix},$$

$$\det = 4p^2 + (p + 2)^2 = 5p^2 + 4p + 4.$$

$5p^2 + 4p + 4 = 5 \iff 5p^2 + 4p - 1 = 0 \iff (p + 1)(5p - 1) = 0$, iar $p$ întreg.

**Răspuns:** $p = -1$. *Barem: 2p determinantul, 3p soluția.*

### 2. Legea $x * y = xy - (x + y) + 2$ (asociativă)

#### a) $2 * 2 = 2$

$$2 * 2 = 4 - 4 + 2 = 2.$$

*Barem: 3p, 2p.*

#### b) $x * y = (x - 1)(y - 1) + 1$

$$x * y = xy - x - y + 1 + 1 = x(y - 1) - (y - 1) + 1 = (x - 1)(y - 1) + 1.$$

*Barem: 2p, 3p.*

#### c) $1 * 2 * 3 * \ldots * 2018$

$1 * x = 0\cdot(x - 1) + 1 = 1$ pentru orice $x$. Grupând (asociativitate):

$$1 * (2 * 3 * \ldots * 2018) = 1.$$

**Răspuns:** $1$. *Barem: 3p $1 * x = 1$, 2p rezultatul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + x + 1}{x^2 + 2x + 2}$

#### a) $f'(x) = \dfrac{x(x+2)}{(x^2 + 2x + 2)^2}$

$$f'(x) = \frac{(2x+1)(x^2 + 2x + 2) - (x^2 + x + 1)(2x + 2)}{(x^2+2x+2)^2}.$$

Numărătorul: $(2x^3 + 5x^2 + 6x + 2) - (2x^3 + 4x^2 + 4x + 2) = x^2 + 2x = x(x+2)$. *Barem: 3p, 2p.*

#### b) Tangenta în $x = -1$

$f(-1) = \dfrac{1}{1} = 1$, $f'(-1) = \dfrac{-1}{1} = -1$:

$$y - 1 = -(x + 1) \iff y = -x.$$

**Răspuns:** $y = -x$. *Barem: 2p, 3p.*

#### c) $1 \le f(x) + f(y) \le 3$

Semnul lui $f'$ este semnul lui $x(x+2)$: $f$ crescătoare pe $(-\infty, -2]$, descrescătoare pe $[-2, 0]$, crescătoare pe $[0, +\infty)$.

$\lim\limits_{x\to\pm\infty} f(x) = 1$, $f(-2) = \dfrac{3}{2}$ (maxim local), $f(0) = \dfrac12$ (minim local). Deci $\dfrac12 \le f(x) \le \dfrac32$ pentru orice $x$, și la fel pentru $y$. Adunând:

$$1 \le f(x) + f(y) \le 3. \ \blacksquare$$

*Barem: 2p monotonia, 3p încadrarea.*

### 2. $f(x) = x^3 - 6x^2 + 12x + 5$

#### a) $\displaystyle\int_0^1 (f(x) - x^3)\,dx = 9$

$$\int_0^1(-6x^2 + 12x + 5)\,dx = (-2x^3 + 6x^2 + 5x)\Big|_0^1 = -2 + 6 + 5 = 9.$$

*Barem: 3p, 2p.*

#### b) Orice primitivă $F$ este convexă

$F'' = f' = 3x^2 - 12x + 12 = 3(x - 2)^2 \ge 0$ pe $\mathbb R$, deci $F$ este convexă. *Barem: 3p $F''$, 2p concluzia.*

#### c) $\displaystyle\int_2^4 \frac{3}{f'(x) + 12}dx = \frac\pi8$

$f'(x) + 12 = 3(x-2)^2 + 12 = 3\big((x-2)^2 + 4\big)$:

$$\int_2^4\frac{dx}{(x-2)^2 + 2^2} = \frac12\operatorname{arctg}\frac{x-2}{2}\Big|_2^4 = \frac12(\operatorname{arctg}1 - \operatorname{arctg}0) = \frac12\cdot\frac\pi4 = \frac\pi8.$$

*Barem: 3p primitiva, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a \in \{-1, 2\}$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac45$ |
| I.5 | $MQ = 4$ |
| II.1.b | $x = y = -2$ |
| II.1.c | $p = -1$ |
| II.2.c | $1$ |
| III.1.b | $y = -x$ |
| III.2.a | $9$ |
| III.2.c | $\tfrac\pi8$ |

## Ce merită reținut din varianta 3

- **Legea $(x-1)(y-1) + 1$**: $1$ este element absorbant, deci orice șir de compuneri care conține $1$ dă $1$.
- **Încadrarea unei funcții**: din tabelul de variație ia minimul și maximul, inclusiv limitele la $\pm\infty$.
- **$\int \frac{dx}{(x-a)^2 + b^2} = \frac1b\operatorname{arctg}\frac{x-a}{b}$.**

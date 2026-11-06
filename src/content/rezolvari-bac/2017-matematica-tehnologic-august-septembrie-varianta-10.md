Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\left(4 - \dfrac14\right)\cdot\dfrac{8}{15} = 2$

$$4 - \frac14 = \frac{15}{4}, \qquad \frac{15}{4}\cdot\frac{8}{15} = \frac84 = 2.$$

*Barem: 3p, 2p.*

### 2. $A(1, 5)$ pe graficul lui $f(x) = x^2 + m$

$f(1) = 5 \iff 1 + m = 5 \iff m = 4$.

**Răspuns:** $m = 4$. *Barem: 3p, 2p.*

### 3. $\sqrt{x^2 + x + 1} = 1$

Ridicăm la pătrat (ambii membri nenegativi): $x^2 + x + 1 = 1 \iff x(x + 1) = 0$.

**Răspuns:** $x \in \{-1, 0\}$ (ambele verifică). *Barem: 2p, 3p.*

### 4. Probabilitatea ca $n \in \{1, \dots, 9\}$ să verifice $(n - 2)(n - 4) = 0$

9 cazuri posibile; favorabile $n = 2$ și $n = 4$ — 2 cazuri.

**Răspuns:** $p = \dfrac29$. *Barem: 1p, 2p, 2p.*

### 5. Perimetrul triunghiului $MNP$, $M(0,3)$, $N(4,3)$, $P(4,0)$

$MN = 4$ (segment orizontal), $NP = 3$ (segment vertical), $MP = \sqrt{16 + 9} = 5$.

$$P_{MNP} = 4 + 3 + 5 = 12.$$

**Răspuns:** $12$. *Barem: 3p laturile, 2p perimetrul.*

### 6. $\sin^2 120^\circ - \cos^2 30^\circ = 0$

$\sin 120^\circ = \sin 60^\circ = \dfrac{\sqrt3}{2}$, $\cos 30^\circ = \dfrac{\sqrt3}{2}$; pătratele sunt egale ($\frac34$), diferența $0$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 3\\ 3 & -4\end{pmatrix}$, $B = \begin{pmatrix} 2 & 2\\ 2 & 2\end{pmatrix}$

#### a) $\det A = -13$

$1\cdot(-4) - 3\cdot 3 = -4 - 9 = -13$. *Barem: 3p, 2p.*

#### b) $A\cdot B - B\cdot A = \begin{pmatrix} 0 & 10\\ -10 & 0\end{pmatrix}$

$$A B = \begin{pmatrix} 2 + 6 & 2 + 6\\ 6 - 8 & 6 - 8\end{pmatrix} = \begin{pmatrix} 8 & 8\\ -2 & -2\end{pmatrix}, \qquad BA = \begin{pmatrix} 2 + 6 & 6 - 8\\ 2 + 6 & 6 - 8\end{pmatrix} = \begin{pmatrix} 8 & -2\\ 8 & -2\end{pmatrix}.$$

Diferența: $\begin{pmatrix} 0 & 10\\ -10 & 0\end{pmatrix}$. *Barem: 2p, 3p.*

#### c) $\det(B\cdot B - xI_2) = 0$

$B\cdot B = \begin{pmatrix} 8 & 8\\ 8 & 8\end{pmatrix}$, deci

$$\det\begin{pmatrix} 8 - x & 8\\ 8 & 8 - x\end{pmatrix} = (8 - x)^2 - 64 = x^2 - 16x.$$

$x^2 - 16x = 0 \iff x \in \{0, 16\}$.

**Răspuns:** $x \in \{0, 16\}$. *Barem: 3p, 2p.*

### 2. $f = X^3 + 3X^2 - X - 3$

#### a) $f(1) = 0$

$1 + 3 - 1 - 3 = 0$. *Barem: 3p, 2p.*

#### b) Câtul și restul împărțirii la $X - 2$

Schema lui Horner cu $a = 2$: coeficienții $1, 3, -1, -3$ devin $1,\ 2\cdot1 + 3 = 5,\ 2\cdot 5 - 1 = 9,\ 2\cdot 9 - 3 = 15$.

**Răspuns:** câtul $X^2 + 5X + 9$, restul $15$ (verificare: $f(2) = 8 + 12 - 2 - 3 = 15$). *Barem: 3p câtul, 2p restul.*

#### c) $x_1^2 + x_2^2 + x_3^2 = 11$

Viète: $x_1 + x_2 + x_3 = -3$, $x_1x_2 + x_2x_3 + x_3x_1 = -1$.

$$x_1^2 + x_2^2 + x_3^2 = (-3)^2 - 2\cdot(-1) = 9 + 2 = 11.$$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 2x^3 - 6x + 4$

#### a) $f'(x) = 6(x - 1)(x + 1)$

$f'(x) = 6x^2 - 6 = 6(x^2 - 1) = 6(x - 1)(x + 1)$. *Barem: 3p, 2p.*

#### b) $\lim\limits_{x\to1}\dfrac{f(x)}{x - 1} = 0$

$f(1) = 2 - 6 + 4 = 0$, deci limita este definiția derivatei în 1:

$$\lim_{x\to1}\frac{f(x) - f(1)}{x - 1} = f'(1) = 0.$$

*Barem: 2p, 3p.*

#### c) $0 \le f(x) \le 8$ pe $[-1, 1]$

Pe $[-1, 1]$, $f'(x) \le 0$, deci $f$ e descrescătoare: $f(1) \le f(x) \le f(-1)$. Cum $f(1) = 0$ și $f(-1) = -2 + 6 + 4 = 8$, rezultă $0 \le f(x) \le 8$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = x^2 + 5x$

#### a) $\displaystyle\int_0^1(f(x) - 5x)\,dx = \frac13$

$$\int_0^1 x^2\,dx = \frac{x^3}{3}\Big|_0^1 = \frac13.$$

*Barem: 2p, 3p.*

#### b) $F(x) = \dfrac13x^3 + \dfrac52x^2 + 2017$ este primitivă a lui $f$

$F'(x) = \dfrac13\cdot 3x^2 + \dfrac52\cdot 2x + 0 = x^2 + 5x = f(x)$. *Barem: 3p, 2p.*

#### c) Volumul corpului obținut prin rotația graficului lui $g(x) = \dfrac{f(x)}{x}$, $x \in [1, 2]$

$g(x) = x + 5$.

$$V = \pi\int_1^2(x + 5)^2dx = \pi\frac{(x + 5)^3}{3}\Big|_1^2 = \pi\frac{343 - 216}{3} = \frac{127\pi}{3}.$$

*Barem: 3p formula, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 4$ |
| I.3 | $x \in \{-1, 0\}$ |
| I.4 | $p = \tfrac29$ |
| I.5 | perimetrul $12$ |
| II.1.c | $x \in \{0, 16\}$ |
| II.2.b | cât $X^2 + 5X + 9$, rest $15$ |
| II.2.c | $11$ |
| III.1.b | $0$ |
| III.2.a | $\tfrac13$ |
| III.2.c | $V = \tfrac{127\pi}{3}$ |

## Ce merită reținut din varianta 10

- **Limita $\frac{f(x)}{x - a}$ cu $f(a) = 0$** este $f'(a)$.
- **Schema lui Horner** dă simultan câtul și restul împărțirii la $X - a$.
- **Volumul de rotație**: $V = \pi\int_a^b g^2(x)\,dx$.

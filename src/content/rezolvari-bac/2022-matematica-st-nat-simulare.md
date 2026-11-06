Rezolvarea completă a **simulării pentru Bacalaureat 2022 la Matematică M_șt-nat** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia geometrică cu $b_1 = \sqrt2$, $b_2 = 4$; calculați $b_4$

Rația: $q = \dfrac{b_2}{b_1} = \dfrac{4}{\sqrt2} = 2\sqrt2$.

$$b_4 = b_1q^3 = \sqrt2\cdot(2\sqrt2)^3 = \sqrt2\cdot16\sqrt2 = 32.$$

**Răspuns:** $b_4 = 32$. *Barem: 2p rația, 3p $b_4$.*

### 2. $f(x) = mx^2 - 2x + 1$, $m \ne 0$; axa $Ox$ tangentă graficului

Parabola e tangentă la $Ox$ $\iff$ $\Delta = 0$: $4 - 4m = 0 \iff m = 1$.

**Răspuns:** $m = 1$. *Barem: 3p + 2p.*

### 3. Ecuația $3^{x+2} - 3^x - 6\cdot3^{x-1} = 6$

Dăm factor comun $3^{x-1}$: $3^{x-1}(27 - 3 - 6) = 6 \iff 18\cdot3^{x-1} = 6 \iff 3^{x-1} = 3^{-1}$, deci $x - 1 = -1$.

**Răspuns:** $x = 0$. *Barem: 3p + 2p.*

### 4. $A$ = numerele naturale de două cifre; probabilitatea ca $2n - 60 \in A$

90 cazuri posibile. $10 \le 2n - 60 \le 99 \iff 35 \le n \le 79{,}5$, deci $n \in \{35, \dots, 79\}$: **45 cazuri favorabile**.

$$p = \frac{45}{90} = \frac12.$$

*Barem: 2p + 3p.*

### 5. $A(-1,4)$, $B(5,2)$, $C$ mijlocul lui $AB$; dreapta $d$ prin $C$, perpendiculară pe $AB$

$m_{AB} = \dfrac{2 - 4}{5 + 1} = -\dfrac13$, deci $m_d = 3$. $C(2, 3)$.

$$d:\ y - 3 = 3(x - 2) \iff y = 3x - 3.$$

*Barem: 2p panta, 3p ecuația.*

### 6. $\triangle ABC$ isoscel cu $\angle A = 120^\circ$, $AB = 6$; aria $= 9\sqrt3$

Unghiul de $120^\circ$ nu poate fi unghi de la bază, deci $AB = AC = 6$.

$$\mathcal A = \frac{AB\cdot AC\cdot\sin120^\circ}{2} = \frac{6\cdot6\cdot\frac{\sqrt3}{2}}{2} = 9\sqrt3.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $B(x) = xI_2 + iA$

#### a) $\det A = 1$

$$\det A = 0\cdot 0 - 1\cdot(-1) = 1.$$

*Barem: 3p + 2p.*

#### b) $x$ cu $B(3)B(5) = 8B(x)$

$A^2 = -I_2$, deci $(iA)^2 = i^2A^2 = I_2$.

$$B(3)B(5) = (3I_2 + iA)(5I_2 + iA) = 15I_2 + 8iA + I_2 = 16I_2 + 8iA = 8(2I_2 + iA) = 8B(2).$$

**Răspuns:** $x = 2$. *Barem: 3p + 2p.*

#### c) Perechi $(m,n)$ de întregi cu $B(m) + iB(n)$ neinversabilă

$$B(m) + iB(n) = (m + in)I_2 + (i - 1)A = \begin{pmatrix}m + in & i - 1\\ 1 - i & m + in\end{pmatrix}.$$

$\det = (m + in)^2 - (i - 1)(1 - i) = (m+in)^2 - 2i = m^2 - n^2 + 2(mn - 1)i$.

Neinversabilă $\iff \det = 0 \iff m^2 = n^2$ și $mn = 1$. În întregi: $(1,1)$ și $(-1,-1)$.

**Răspuns:** $(m,n) \in \{(1,1), (-1,-1)\}$. *Barem: 2p + 3p.*

### 2. Pe $M = [1,\infty)$: $x * y = xy - \sqrt{(x-1)(y-1)}$

#### a) $2 * 5 = 8$

$$2 * 5 = 10 - \sqrt{1\cdot4} = 10 - 2 = 8.$$

*Barem: 3p + 2p.*

#### b) $e = 1$ este elementul neutru

$x * 1 = x - \sqrt{(x-1)\cdot0} = x$ și $1 * x = x$, pentru orice $x \in M$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $(nx) * y \ge x(n * y)$, $x, y \in M$, $n \ge 2$

$$(nx) * y = nxy - \sqrt{(nx-1)(y-1)},\qquad x(n * y) = nxy - x\sqrt{(n-1)(y-1)}.$$

Inegalitatea devine $x\sqrt{(n-1)(y-1)} \ge \sqrt{(nx-1)(y-1)}$. Dacă $y = 1$, e egalitate. Dacă $y > 1$, simplificăm cu $\sqrt{y-1}$ și ridicăm la pătrat (ambii membri $\ge 0$):

$$x^2(n - 1) \ge nx - 1 \iff nx^2 - x^2 - nx + 1 \ge 0 \iff (x - 1)(nx - x - 1) \ge 0.$$

Cum $x \ge 1$ și $nx - x - 1 = x(n-1) - 1 \ge 1 - 1 = 0$, produsul e $\ge 0$. $\blacksquare$ *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = \dfrac{4\sqrt x}{x^2 + 3}$

#### a) $f'(x) = \dfrac{6(1 - x^2)}{\sqrt x\,(x^2+3)^2}$

$$f'(x) = \frac{\frac{2}{\sqrt x}(x^2 + 3) - 4\sqrt x\cdot2x}{(x^2+3)^2} = \frac{2x^2 + 6 - 8x^2}{\sqrt x\,(x^2+3)^2} = \frac{6(1 - x^2)}{\sqrt x\,(x^2+3)^2}.$$

*Barem: 3p + 2p.*

#### b) $a > 0$ cu tangenta în $A(a, f(a))$ paralelă cu $Ox$

$f'(a) = 0 \iff 1 - a^2 = 0$; cum $a > 0$, $a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p + 2p.*

#### c) $\dfrac{\sqrt x}{x^2+3} > \dfrac{\sqrt{x + \frac1x}}{x^2 + \frac1{x^2} + 5}$ pentru $x > 1$

Pe $(1,\infty)$, $f'(x) < 0$, deci $f$ e strict descrescătoare. Pentru $x > 1$: $1 < x < x + \frac1x$, deci $f(x) > f\left(x + \frac1x\right)$.

Cum $\left(x + \frac1x\right)^2 + 3 = x^2 + \frac1{x^2} + 5$, inegalitatea $f(x) > f\left(x+\frac1x\right)$, împărțită la 4, este exact cea cerută. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = \dfrac{e^x + 2x}{e^x} = 1 + 2xe^{-x}$

#### a) $\displaystyle\int_0^1 e^xf(x)dx = e$

$$\int_0^1(e^x + 2x)dx = (e^x + x^2)\Big|_0^1 = e + 1 - 1 = e.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_{-1}^0 f(x)dx = -1$

O primitivă a lui $2xe^{-x}$ (prin părți) este $-2(x+1)e^{-x}$. Deci

$$\int_{-1}^0(1 + 2xe^{-x})dx = \big(x - 2(x+1)e^{-x}\big)\Big|_{-1}^0 = (0 - 2) - (-1 - 0) = -1.$$

*Barem: 3p + 2p.*

#### c) $a$ cu $\displaystyle\int_0^1F(x)f''(x)dx = \frac{a(e+1)}{e^2}$, $F' = f$, $F(0) = 0$

Prin părți, cu $F' = f$:

$$\int_0^1Ff''dx = Ff'\Big|_0^1 - \int_0^1 ff'dx = F(1)f'(1) - F(0)f'(0) - \frac{f^2(1) - f^2(0)}{2}.$$

$f'(x) = 2(1 - x)e^{-x}$, deci $f'(1) = 0$; $F(0) = 0$. $f(1) = 1 + \frac2e$, $f(0) = 1$:

$$f^2(1) - f^2(0) = \frac4e + \frac4{e^2} = \frac{4(e+1)}{e^2} \Rightarrow \int_0^1Ff''dx = -\frac{2(e+1)}{e^2}.$$

**Răspuns:** $a = -2$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_4 = 32$ |
| I.2 | $m = 1$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac12$ |
| I.5 | $y = 3x - 3$ |
| II.1.b | $x = 2$ |
| II.1.c | $(1,1), (-1,-1)$ |
| III.1.b | $a = 1$ |
| III.2.c | $a = -2$ |

## Ce merită reținut din simulare

- **Tangența parabolei la $Ox$** $\iff \Delta = 0$.
- **Matrice cu $A^2 = -I_2$** se comportă ca numerele complexe: calculele devin algebrice.
- **Inegalități între valori ale funcției:** compară argumentele și folosește monotonia.
- **$\int Ff''$:** integrare prin părți + $\int ff' = \frac{f^2}{2}$.

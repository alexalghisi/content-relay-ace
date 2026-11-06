Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M2** (filiera tehnologică; filiera teoretică, specializarea științe ale naturii), sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_4 = 7$, $a_9 = 22$. Calculați $a_{14}$

$a_9 = a_4 + 5r \Rightarrow 22 = 7 + 5r \Rightarrow r = 3$. Apoi

$$a_{14} = a_9 + 5r = 22 + 15 = 37.$$

**Răspuns:** $a_{14} = 37$. *Barem: 2p, 3p.*

### 2. Punctul de intersecție a graficelor lui $f(x) = x - 3$ și $g(x) = 5 - x$

$$f(x) = g(x) \iff x - 3 = 5 - x \iff x = 4, \qquad y = f(4) = 1.$$

**Răspuns:** $A(4, 1)$. *Barem: 1p, 2p, 2p.*

### 3. Ecuația $2^{3-x} = \frac14$

$\frac14 = 2^{-2}$, deci $3 - x = -2 \iff x = 5$.

**Răspuns:** $x = 5$. *Barem: 2p, 3p.*

### 4. Câte numere naturale de 3 cifre distincte se pot forma cu elementele lui $M = \{0, 1, 2, 3\}$?

Tripletele de cifre distincte din $M$: $A_4^3 = 24$. Dintre ele, cele care încep cu $0$ (deci nu sunt numere de 3 cifre): $A_3^2 = 6$.

$$24 - 6 = 18.$$

(Direct: $3\cdot 3\cdot 2 = 18$.) **Răspuns:** $18$. *Barem: 2p, 2p, 1p.*

### 5. $A(1, 2)$, $B(3, 0)$; simetricul lui $A$ față de $B$

$B$ este mijlocul lui $AC$: $x_C = 2x_B - x_A = 5$, $y_C = 2y_B - y_A = -2$.

**Răspuns:** $C(5, -2)$. *Barem: 1p, 2p, 2p.*

### 6. Triunghiul $ABC$ cu $AB = 6$, $AC = 5$, $m(\angle BAC) = 60^\circ$. Lungimea $BC$

$$BC^2 = AB^2 + AC^2 - 2\cdot AB\cdot AC\cdot\cos A = 36 + 25 - 2\cdot 6\cdot 5\cdot\frac12 = 31.$$

**Răspuns:** $BC = \sqrt{31}$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases} x + y - 2z = 0\\ x - y + z = 1\\ x + y + az = 2\end{cases}$

#### a) Determinantul matricei sistemului

$$\Delta = \begin{vmatrix} 1 & 1 & -2\\ 1 & -1 & 1\\ 1 & 1 & a\end{vmatrix} = -a + 1 - 2 - (2 + 1 + a) = -2a - 4.$$

**Răspuns:** $\Delta = -2a - 4$. *Barem: 2p, 3p.*

#### b) $a$ pentru care matricea este inversabilă

$\Delta \ne 0 \iff -2a - 4 \ne 0 \iff a \ne -2$.

**Răspuns:** $a \in \mathbb R\setminus\{-2\}$. *Barem: 3p, 2p.*

#### c) Rezolvați sistemul pentru $a = 0$

$$\begin{cases} x + y - 2z = 0\\ x - y + z = 1\\ x + y = 2\end{cases}$$

Din prima și a treia: $2 - 2z = 0 \Rightarrow z = 1$. A doua: $x - y = 0$, iar cu $x + y = 2$: $x = y = 1$.

**Răspuns:** $(x, y, z) = (1, 1, 1)$. *Barem: 2p, 3p.*

### 2. $x * y = x + y - 1$ (asociativă)

#### a) $x * 1 = x$

$$x * 1 = x + 1 - 1 = x.$$

*Barem: 4p, 1p.*

#### b) Ecuația $x * x * x = 4$

$x * x = 2x - 1$, apoi $(x * x) * x = 2x - 1 + x - 1 = 3x - 2$.

$$3x - 2 = 4 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 2p, 2p, 1p.*

#### c) $n \ge 2$ cu $C_n^1 * C_n^2 = 14$

$C_n^1 = n$, $C_n^2 = \dfrac{n(n-1)}{2}$:

$$n + \frac{n(n-1)}{2} - 1 = 14 \iff 2n + n^2 - n = 30 \iff n^2 + n - 30 = 0 \iff (n + 6)(n - 5) = 0.$$

**Răspuns:** $n = 5$. *Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{x + 1}{e^x}$

#### a) $\dfrac{f'(x)}{f(x)} = -\dfrac{x}{x + 1}$

$$f'(x) = \frac{e^x - (x + 1)e^x}{e^{2x}} = \frac{-x}{e^x}, \qquad \frac{f'(x)}{f(x)} = \frac{-x}{e^x}\cdot\frac{e^x}{x + 1} = -\frac{x}{x+1}.$$

*Barem: 3p, 2p.*

#### b) $f$ este descrescătoare pe $(0, +\infty)$

$f'(x) = -\dfrac{x}{e^x} < 0$ pentru orice $x > 0$, deci $f$ este (strict) descrescătoare. *Barem: 3p, 2p.*

#### c) Asimptota oblică a graficului funcției $g(x) = \dfrac{e^{2x}f^2(x)}{x}$

$e^{2x}f^2(x) = (x + 1)^2$, deci $g(x) = \dfrac{x^2 + 2x + 1}{x}$.

$$m = \lim_{x\to+\infty}\frac{g(x)}{x} = \lim_{x\to+\infty}\frac{x^2 + 2x + 1}{x^2} = 1, \qquad n = \lim_{x\to+\infty}\big(g(x) - x\big) = \lim_{x\to+\infty}\frac{2x + 1}{x} = 2.$$

**Răspuns:** $y = x + 2$. *Barem: 1p, 1p, 1p, 2p.*

### 2. $f(x) = x^{2012} + x^{2011} + x^2 + x$

#### a) Primitiva $F$ cu $F(0) = 1$

$$F(x) = \frac{x^{2013}}{2013} + \frac{x^{2012}}{2012} + \frac{x^3}{3} + \frac{x^2}{2} + c, \quad F(0) = c = 1.$$

**Răspuns:** $F(x) = \dfrac{x^{2013}}{2013} + \dfrac{x^{2012}}{2012} + \dfrac{x^3}{3} + \dfrac{x^2}{2} + 1$. *Barem: 2p, 2p, 1p.*

#### b) $\displaystyle\int_0^1\frac{f(x)}{x + 1}\,dx$

$f(x) = x^{2011}(x + 1) + x(x + 1) = (x + 1)(x^{2011} + x)$, deci

$$\int_0^1(x^{2011} + x)\,dx = \left(\frac{x^{2012}}{2012} + \frac{x^2}{2}\right)\Big|_0^1 = \frac{1}{2012} + \frac12 = \frac{1007}{2012}.$$

**Răspuns:** $\dfrac{1007}{2012}$. *Barem: 2p, 3p.*

#### c) Volumul corpului de rotație pentru $g:[1, 2] \to \mathbb R$, $g(x) = f(x) - x^{2012} - x^{2011}$

$g(x) = x^2 + x$, deci

$$V = \pi\int_1^2(x^2 + x)^2\,dx = \pi\int_1^2(x^4 + 2x^3 + x^2)\,dx = \pi\left(\frac{x^5}{5} + \frac{x^4}{2} + \frac{x^3}{3}\right)\Big|_1^2.$$

$$= \pi\left(\frac{31}{5} + \frac{15}{2} + \frac73\right) = \pi\cdot\frac{186 + 225 + 70}{30} = \frac{481\pi}{30}.$$

**Răspuns:** $V = \dfrac{481\pi}{30}$. *Barem: 1p, 3p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_{14} = 37$ |
| I.2 | $A(4, 1)$ |
| I.3 | $x = 5$ |
| I.4 | $18$ |
| I.5 | $(5, -2)$ |
| I.6 | $BC = \sqrt{31}$ |
| II.1.a | $-2a - 4$ |
| II.1.b | $a \ne -2$ |
| II.1.c | $(1, 1, 1)$ |
| II.2.b | $x = 2$ |
| II.2.c | $n = 5$ |
| III.1.c | $y = x + 2$ |
| III.2.b | $\tfrac{1007}{2012}$ |
| III.2.c | $\tfrac{481\pi}{30}$ |

## Ce merită reținut din varianta 7

- **Progresii aritmetice**: $a_m - a_k = (m - k)r$ — nu ai nevoie de $a_1$.
- **Numere cu cifre distincte**: scade cazurile care încep cu $0$.
- **Factorizarea integrandului** ($f = (x+1)(x^{2011} + x)$) simplifică fracția înainte de integrare.
- **Volumul de rotație**: $V = \pi\int_a^b g^2(x)\,dx$ — ridică întâi la pătrat, apoi integrează termen cu termen.

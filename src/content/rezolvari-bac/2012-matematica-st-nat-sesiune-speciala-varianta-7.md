Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M2 (științe ale naturii / tehnologic)**, sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_4 = 7$, $a_9 = 22$; calculați $a_{14}$

$a_9 = a_4 + 5r \Rightarrow 22 = 7 + 5r \Rightarrow r = 3$, iar $a_{14} = a_9 + 5r = 22 + 15 = 37$.

**Răspuns:** $a_{14} = 37$. *Barem: 2p rația, 3p $a_{14}$.*

### 2. Intersecția graficelor $f(x) = x - 3$ și $g(x) = 5 - x$

$$x - 3 = 5 - x \iff x = 4, \quad y = 4 - 3 = 1.$$

**Răspuns:** $A(4, 1)$. *Barem: 1p ecuația, 2p $x_A$, 2p $y_A$.*

### 3. Ecuația $2^{3-x} = \dfrac14$

$\dfrac14 = 2^{-2}$, deci $3 - x = -2 \iff x = 5$.

**Răspuns:** $x = 5$. *Barem: 2p scrierea, 3p soluția.*

### 4. Câte numere naturale de 3 cifre distincte se pot forma cu cifrele din $\{0,1,2,3\}$?

Toate tripletele ordonate de cifre distincte: $A_4^3 = 24$. Le scădem pe cele care încep cu $0$: $A_3^2 = 6$.

$$24 - 6 = 18.$$

**Răspuns:** $18$ numere. *Barem: 2p $A_4^3$, 2p $A_3^2$, 1p rezultatul.*

### 5. Simetricul lui $A(1,2)$ față de $B(3,0)$

$B$ este mijlocul lui $[AC]$:

$$x_C = 2x_B - x_A = 5, \qquad y_C = 2y_B - y_A = -2.$$

**Răspuns:** $C(5, -2)$. *Barem: 1p mijlocul, 2p + 2p coordonatele.*

### 6. Latura $BC$, știind $AB = 6$, $AC = 5$, $\angle BAC = 60^\circ$

$$BC^2 = AB^2 + AC^2 - 2\cdot AB\cdot AC\cdot\cos A = 36 + 25 - 2\cdot6\cdot5\cdot\frac12 = 31.$$

**Răspuns:** $BC = \sqrt{31}$. *Barem: 2p teorema cosinusului, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}x + y - 2z = 0\\x - y + z = 1\\x + y + az = 2\end{cases}$

#### a) Determinantul matricei sistemului

$$\Delta = \begin{vmatrix}1&1&-2\\1&-1&1\\1&1&a\end{vmatrix} = 1(-a - 1) - 1(a - 1) - 2(1 + 1) = -2a - 4.$$

**Răspuns:** $\Delta = -2a - 4$. *Barem: 2p scrierea, 3p calculul.*

#### b) $a$ pentru care matricea este inversabilă

$\Delta \ne 0 \iff -2a - 4 \ne 0 \iff a \ne -2$.

**Răspuns:** $a \in \mathbb R\setminus\{-2\}$. *Barem: 3p condiția, 2p răspunsul.*

#### c) Rezolvare pentru $a = 0$

$$\begin{cases}x + y - 2z = 0\\x - y + z = 1\\x + y = 2\end{cases}$$

Din prima și a treia: $2 - 2z = 0 \Rightarrow z = 1$. Din a doua: $x - y = 0$, iar cu $x + y = 2$: $x = y = 1$.

**Răspuns:** $(1, 1, 1)$. *Barem: 2p sistemul, 3p soluția.*

### 2. $x * y = x + y - 1$ (asociativă)

#### a) $x * 1 = x$

$$x * 1 = x + 1 - 1 = x.$$

*Barem: 4p calculul, 1p concluzia.*

#### b) $x * x * x = 4$

$x * x = 2x - 1$, $(x * x) * x = 2x - 1 + x - 1 = 3x - 2$.

$$3x - 2 = 4 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 2p $x*x$, 2p $x*x*x$, 1p soluția.*

#### c) $n \ge 2$ cu $C_n^1 * C_n^2 = 14$

$$n + \frac{n(n-1)}{2} - 1 = 14 \iff 2n + n^2 - n - 2 = 28 \iff n^2 + n - 30 = 0 \iff (n + 6)(n - 5) = 0.$$

$n$ natural, deci $n = 5$. **Răspuns:** $n = 5$. *Barem: 2p combinările, 2p ecuația, 1p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \dfrac{x+1}{e^x}$

#### a) $\dfrac{f'(x)}{f(x)} = -\dfrac{x}{x+1}$

$$f'(x) = \frac{e^x - (x+1)e^x}{e^{2x}} = \frac{-x}{e^x}, \qquad \frac{f'(x)}{f(x)} = \frac{-x}{e^x}\cdot\frac{e^x}{x+1} = -\frac{x}{x+1}.$$

*Barem: 3p derivata, 2p finalizarea.*

#### b) $f$ este descrescătoare pe $(0, +\infty)$

$f'(x) = -\dfrac{x}{e^x} < 0$ pentru $x > 0$. *Barem: 3p semnul, 2p concluzia.*

#### c) Asimptota oblică pentru $g(x) = \dfrac{e^{2x}f^2(x)}{x}$

$$g(x) = \frac{e^{2x}\cdot\frac{(x+1)^2}{e^{2x}}}{x} = \frac{x^2 + 2x + 1}{x}.$$

$$m = \lim_{x\to+\infty}\frac{g(x)}{x} = 1, \qquad n = \lim_{x\to+\infty}\big(g(x) - x\big) = \lim_{x\to+\infty}\frac{2x + 1}{x} = 2.$$

**Răspuns:** $y = x + 2$. *Barem: 1p $g$, 1p $m$, 1p $n$, 2p ecuația.*

### 2. $f(x) = x^{2012} + x^{2011} + x^2 + x$

#### a) Primitiva $F$ cu $F(0) = 1$

$$F(x) = \frac{x^{2013}}{2013} + \frac{x^{2012}}{2012} + \frac{x^3}{3} + \frac{x^2}{2} + c, \qquad F(0) = c = 1.$$

**Răspuns:** $F(x) = \dfrac{x^{2013}}{2013} + \dfrac{x^{2012}}{2012} + \dfrac{x^3}{3} + \dfrac{x^2}{2} + 1$. *Barem: 2p primitivele, 2p constanta, 1p răspunsul.*

#### b) $\displaystyle\int_0^1\frac{f(x)}{x+1}\,dx$

$f(x) = x^{2011}(x + 1) + x(x + 1) = (x+1)(x^{2011} + x)$, deci

$$\int_0^1(x^{2011} + x)\,dx = \left(\frac{x^{2012}}{2012} + \frac{x^2}{2}\right)\Big|_0^1 = \frac1{2012} + \frac12 = \frac{1007}{2012}.$$

**Răspuns:** $\dfrac{1007}{2012}$. *Barem: 2p simplificarea, 3p calculul.*

#### c) Volumul pentru $g(x) = f(x) - x^{2012} - x^{2011}$, $x \in [1,2]$

$g(x) = x^2 + x$, $g^2(x) = x^4 + 2x^3 + x^2$:

$$V = \pi\int_1^2(x^4 + 2x^3 + x^2)\,dx = \pi\left(\frac{x^5}{5} + \frac{x^4}{2} + \frac{x^3}{3}\right)\Big|_1^2 = \pi\left(\frac{31}{5} + \frac{15}{2} + \frac73\right) = \frac{481\pi}{30}.$$

**Răspuns:** $V = \dfrac{481\pi}{30}$. *Barem: 1p $g$, 3p integrala, 1p rezultatul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_{14} = 37$ |
| I.2 | $A(4, 1)$ |
| I.3 | $x = 5$ |
| I.4 | $18$ |
| I.5 | $C(5, -2)$ |
| I.6 | $BC = \sqrt{31}$ |
| II.1.a | $-2a - 4$ |
| II.1.b | $a \ne -2$ |
| II.1.c | $(1, 1, 1)$ |
| II.2.b | $x = 2$ |
| II.2.c | $n = 5$ |
| III.1.c | $y = x + 2$ |
| III.2.b | $\frac{1007}{2012}$ |
| III.2.c | $\frac{481\pi}{30}$ |

## Ce merită reținut din varianta 7

- **Numere cu cifre distincte care includ cifra 0**: scade aranjamentele care încep cu $0$.
- **Legea $x + y - 1$**: $1$ este element neutru, iar $x * x * \dots * x$ ($n$ ori) $= nx - (n-1)$.
- **Factorizarea înainte de integrare**: $x^{2012} + x^{2011} + x^2 + x = (x+1)(x^{2011} + x)$.
- **Volumul de rotație**: $V = \pi\int g^2$ — ridică la pătrat corect.

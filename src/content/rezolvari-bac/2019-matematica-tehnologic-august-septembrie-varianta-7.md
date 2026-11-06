Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(\frac32 - \frac23\right) : \left(\frac32 + \frac23\right)\cdot\frac{13}{5} = 1$

$\frac32 - \frac23 = \frac56$, $\frac32 + \frac23 = \frac{13}{6}$, deci

$$\frac56\cdot\frac{6}{13}\cdot\frac{13}{5} = 1.\ \blacksquare$$

*Barem: 3p, 2p.*

### 2. $f(x) = 2x - 4$ cu $f(m + 1) = m$

$2(m + 1) - 4 = 2m - 2 = m \iff m = 2$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_7(2x + 3) = \log_7 9$

$2x + 3 = 9 \iff x = 3$, care convine. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{10, 20, \dots, 90\}$ să fie multiplu de 3

9 cazuri posibile; multipli de 3: $30, 60, 90$ — 3 cazuri. $p = \frac39 = \frac13$. *Barem: 2p, 2p, 1p.*

### 5. Aria triunghiului $MNP$, $M(4,1)$, $N(1,5)$, $P(4,5)$

$MP$ este verticală ($x = 4$), $NP$ orizontală ($y = 5$), deci triunghiul e dreptunghic în $P$, cu $MP = 4$, $NP = 3$:

$$\mathcal A = \frac{4\cdot 3}{2} = 6.$$

*Barem: 2p, 3p.*

### 6. Arătați că $\frac{1}{\sqrt3}\sin60^\circ + \sin^245^\circ = 1$

$\frac1{\sqrt3}\cdot\frac{\sqrt3}2 + \left(\frac{\sqrt2}2\right)^2 = \frac12 + \frac12 = 1$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$, $M(a) = \begin{pmatrix}1 + a & -a\\ a & 1 - a\end{pmatrix}$

**a)** $\det A = 4 - 6 = -2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$M(a)M(b) = \begin{pmatrix}(1+a)(1+b) - ab & -b(1+a) - a(1-b)\\ a(1+b) + b(1 - a) & -ab + (1-a)(1-b)\end{pmatrix} = \begin{pmatrix}1 + a + b & -(a + b)\\ a + b & 1 - (a+b)\end{pmatrix} = M(a + b).\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Din b), $M(a)M(-a) = M(0) = I_2$, deci $M(a)^{-1} = M(-a)$. Atunci

$$X = M(-1)\,A\,M(-2) = \begin{pmatrix}0 & 1\\ -1 & 2\end{pmatrix}\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}\begin{pmatrix}-1 & 2\\ -2 & 3\end{pmatrix} = \begin{pmatrix}3 & 4\\ 5 & 6\end{pmatrix}\begin{pmatrix}-1 & 2\\ -2 & 3\end{pmatrix} = \begin{pmatrix}-11 & 18\\ -17 & 28\end{pmatrix}.$$

*Barem: 2p, 3p.*

### 2. $f = 2X^3 - 4X^2 + 4X - 3$

**a)** $f(0) = -3$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Viète: $x_1 + x_2 + x_3 = 2$, $x_1x_2 + x_2x_3 + x_3x_1 = 2$, $x_1x_2x_3 = \frac32$.

$$a = 3\cdot\frac{x_1x_2 + x_2x_3 + x_3x_1}{x_1x_2x_3} = 3\cdot\frac{2}{3/2} = 4 \in \mathbb N.\ \blacksquare$$

*Barem: 2p, 3p.*

**c)** $x_1^2 + x_2^2 + x_3^2 = 2^2 - 2\cdot 2 = 0$. Dacă toate rădăcinile ar fi reale, suma pătratelor nule ar impune $x_1 = x_2 = x_3 = 0$, dar $f(0) = -3 \ne 0$. Contradicție. $\blacksquare$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x}{x^6 + 5}$

**a)** $$f'(x) = \frac{x^6 + 5 - 6x^6}{(x^6+5)^2} = \frac{5(1 - x^6)}{(x^6+5)^2} = \frac{5(1 - x^3)(1 + x^3)}{(x^6+5)^2}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $f(0) = 0$, $f'(0) = \frac{5}{25} = \frac15$. Tangenta: $y = \frac15x$. *Barem: 2p, 3p.*

**c)** $f' \le 0$ pe $(-\infty, -1]$, $f' \ge 0$ pe $[-1, 1]$, $f' \le 0$ pe $[1, +\infty)$. Valori: $\lim\limits_{x\to\pm\infty}f(x) = 0$, $f(-1) = -\frac16$, $f(1) = \frac16$. Funcția fiind continuă:

**Răspuns:** $\mathrm{Im}\,f = \left[-\frac16, \frac16\right]$. *Barem: 2p, 3p.*

### 2. $f(x) = (x - 1)e^x$

**a)** $\int_0^1\frac{f(x)}{e^x}dx = \int_0^1(x - 1)\,dx = \frac12 - 1 = -\frac12$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $F'(x) = e^x + (x - 2)e^x = (x - 1)e^x = f(x)$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $f^2f' = \left(\frac{f^3}{3}\right)'$:

$$\int_0^1 f^2(x)f'(x)\,dx = \frac{f^3(1) - f^3(0)}{3} = \frac{0 - (-1)^3}{3} = \frac13.$$

**Răspuns:** $\dfrac13$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 2$ |
| I.3 | $x = 3$ |
| I.4 | $p = \tfrac13$ |
| I.5 | $6$ |
| II.1.c | $X = \begin{pmatrix}-11&18\\-17&28\end{pmatrix}$ |
| II.2.b | $a = 4$ |
| III.1.b | $y = \tfrac15x$ |
| III.1.c | $[-\tfrac16, \tfrac16]$ |
| III.2.c | $\tfrac13$ |

## Ce merită reținut din varianta 7

- **$M(a)M(b) = M(a+b)$** dă imediat inversa: $M(a)^{-1} = M(-a)$.
- **Suma pătratelor rădăcinilor $= 0$** cu rădăcini reale implică toate nule.
- **$\int f^2f' = \frac{f^3}{3}$** — recunoaște derivata unei puteri.

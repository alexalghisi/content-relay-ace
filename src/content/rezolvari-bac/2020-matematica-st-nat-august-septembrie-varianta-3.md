Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Primul termen al progresiei aritmetice cu $a_2 = 3$, $a_3 = 5$

$r = a_3 - a_2 = 2$, deci $a_1 = a_2 - r = 1$.

**Răspuns:** $a_1 = 1$. *Barem: 3p rația, 2p $a_1$.*

### 2. $f(x) = x^2 - 1$: numărul natural $n$ cu $f(n) = 3$

$n^2 - 1 = 3 \iff n^2 = 4 \iff n = \pm 2$; cum $n \in \mathbb N$, $n = 2$.

**Răspuns:** $n = 2$. *Barem: 3p, 2p.*

### 3. Ecuația $\sqrt{x^2 - 9} = x - 1$

Ridicăm la pătrat: $x^2 - 9 = x^2 - 2x + 1 \iff 2x = 10 \iff x = 5$.

**Verificare:** $\sqrt{25 - 9} = 4 = 5 - 1$ ✔ (membrul drept e pozitiv).

**Răspuns:** $x = 5$. *Barem: 3p, 2p.*

### 4. Numărul de submulțimi cu trei elemente ale lui $\{1,2,3,4\}$

$$C_4^3 = \frac{4!}{3!\cdot 1!} = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

### 5. $M(1,1)$, $N(3,3)$, $P(4,3)$, $Q(1,a)$: $MNPQ$ trapez cu bazele $MN$ și $PQ$

$m_{MN} = \dfrac{3-1}{3-1} = 1$, $m_{PQ} = \dfrac{a - 3}{1 - 4} = \dfrac{3 - a}{3}$. Bazele sunt paralele: $\dfrac{3-a}{3} = 1 \iff a = 0$.

(Pentru $a = 0$: $MN = 2\sqrt2 \ne PQ = 3\sqrt2$, deci e trapez, nu paralelogram.)

**Răspuns:** $a = 0$. *Barem: 2p pantele, 3p condiția.*

### 6. Ipotenuza $BC$ când $AB = 5$, $\cos B = \frac12$

$\cos B = \dfrac{AB}{BC} \Rightarrow \dfrac12 = \dfrac{5}{BC} \Rightarrow BC = 10$.

**Răspuns:** $BC = 10$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}a & 0\\ 0 & b\end{pmatrix}$

**a)** $A\cdot A = \begin{pmatrix}a^2 & 0\\ 0 & b^2\end{pmatrix}$, deci $\det(A\cdot A) = a^2b^2$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Fie $X = \begin{pmatrix}x & y\\ z & t\end{pmatrix}$. Atunci

$$AX = \begin{pmatrix}ax & ay\\ bz & bt\end{pmatrix},\qquad XA = \begin{pmatrix}ax & by\\ az & bt\end{pmatrix}.$$

$AX = XA \Rightarrow ay = by$ și $bz = az$, adică $y(a - b) = 0$, $z(a - b) = 0$. Cum $a \ne b$, $y = z = 0$, deci $X = \begin{pmatrix}x & 0\\ 0 & t\end{pmatrix}$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** Pentru $a = 4$, $b = 0$: $A = \begin{pmatrix}4&0\\0&0\end{pmatrix}$. Dacă $Y^2 = A$, atunci $AY = Y^3 = YA$, deci, din b) ($4 \ne 0$), $Y = \begin{pmatrix}\alpha & 0\\ 0 & \beta\end{pmatrix}$.

$Y^2 = \begin{pmatrix}\alpha^2 & 0\\ 0 & \beta^2\end{pmatrix} = \begin{pmatrix}4&0\\0&0\end{pmatrix} \Rightarrow \alpha = \pm 2$, $\beta = 0$.

**Răspuns:** $Y = \begin{pmatrix}2&0\\0&0\end{pmatrix}$ sau $Y = \begin{pmatrix}-2&0\\0&0\end{pmatrix}$. *Barem: 2p forma diagonală, 3p soluțiile.*

### 2. Pe $M = [0, +\infty)$: $x * y = x\sqrt{y + 1} + y\sqrt{x + 1}$

**a)** $3 * 3 = 3\sqrt4 + 3\sqrt4 = 6 + 6 = 12$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x * 0 = x\sqrt1 + 0 = x$ și $0 * x = 0 + x\sqrt1 = x$. $\blacksquare$ *Barem: 2p, 3p.*

**c)** $(x^2 + 2x) * 3 = 7$:

$$(x^2 + 2x)\sqrt{4} + 3\sqrt{x^2 + 2x + 1} = 7 \iff 2(x^2 + 2x) + 3(x + 1) = 7$$

(pentru $x \ge 0$, $\sqrt{(x+1)^2} = x + 1$), adică $2x^2 + 7x - 4 = 0$, cu rădăcinile $x = -4$ (nu convine) și $x = \frac12$.

**Răspuns:** $x = \dfrac12$. *Barem: 3p ecuația, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f: (-1, +\infty) \to \mathbb R$, $f(x) = x\ln(x + 1)$

**a)** Regula produsului:

$$f'(x) = 1\cdot\ln(x + 1) + x\cdot\frac{1}{x + 1} = \ln(x+1) + \frac{x}{x+1}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $\left(\dfrac{x}{x+1}\right)' = \dfrac{1}{(x+1)^2}$, deci

$$f''(x) = \frac{1}{x+1} + \frac{1}{(x+1)^2} = \frac{x + 2}{(x+1)^2} > 0\quad\text{pe } (-1, +\infty),$$

deci $f$ este convexă. $\blacksquare$ *Barem: 3p $f''$, 2p semnul.*

**c)** $g(x) = (x+1)^x$ pe $(-1, 0]$. Pe acest interval $\ln(x + 1) \le 0$ și $\dfrac{x}{x+1} \le 0$, deci $f'(x) \le 0$ și $f$ este descrescătoare pe $(-1, 0]$.

Pentru $x_1 \le x_2$: $f(x_1) \ge f(x_2)$, adică $x_1\ln(x_1 + 1) \ge x_2\ln(x_2+1) \iff \ln(x_1+1)^{x_1} \ge \ln(x_2+1)^{x_2}$. Cum $e^t$ este crescătoare, $(x_1 + 1)^{x_1} \ge (x_2+1)^{x_2}$, adică $g(x_1) \ge g(x_2)$. $\blacksquare$

*Barem: 2p monotonia lui $f$, 3p concluzia.*

### 2. $f: [0,1] \to \mathbb R$, $f(x) = 1 - x^3$

**a)** $$\int_0^1 (1 - x^3)\,dx = \left(x - \frac{x^4}{4}\right)\Big|_0^1 = 1 - \frac14 = \frac34.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** Cu $(1 - x^3)' = -3x^2$, deci $x^2 = -\frac13(1-x^3)'$:

$$\int_0^1 x^2(1-x^3)^3dx = -\frac13\cdot\frac{(1 - x^3)^4}{4}\Big|_0^1 = -\frac1{12}(0 - 1) = \frac1{12}.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Facem diferența:

$$\int_0^1 (1 - x^3)^{n+1}dx - \int_0^1 (1-x^3)^n dx = \int_0^1 (1-x^3)^n\big[(1 - x^3) - 1\big]dx = -\int_0^1 x^3(1-x^3)^n dx.$$

Pe $[0,1]$: $x^3 \ge 0$ și $1 - x^3 \ge 0$, deci integrandul $x^3(1-x^3)^n \ge 0$ și diferența este $\le 0$. Așadar $\int_0^1 f^{n+1} \le \int_0^1 f^n$. $\blacksquare$

*Barem: 2p diferența, 3p semnul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 1$ |
| I.2 | $n = 2$ |
| I.3 | $x = 5$ |
| I.4 | $4$ |
| I.5 | $a = 0$ |
| I.6 | $BC = 10$ |
| II.1.c | $Y = \pm\begin{pmatrix}2&0\\0&0\end{pmatrix}$ |
| II.2.c | $x = \tfrac12$ |

## Ce merită reținut din varianta 3

- **Matrice care comută cu o matrice diagonală** cu elemente distincte sunt diagonale.
- **Dacă $Y^2 = A$, atunci $Y$ comută cu $A$** — truc de reducere a necunoscutelor.
- **Monotonia lui $(x+1)^x$** se studiază prin logaritm: $\ln g = x\ln(x+1) = f$.

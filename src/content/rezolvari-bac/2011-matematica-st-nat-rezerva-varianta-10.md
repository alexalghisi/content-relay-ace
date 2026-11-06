Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică (M2 — științe ale naturii / filiera tehnologică)**, sesiunea de rezervă, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\log_7(3 + \sqrt2) + \log_7(3 - \sqrt2)$

$$\log_7\big((3 + \sqrt2)(3 - \sqrt2)\big) = \log_7(9 - 2) = \log_7 7 = 1.$$

**Răspuns:** $1$. *Barem: 3p, 2p.*

### 2. $f(x) = x^2 + ax + b$ cu graficul prin $A(2,3)$ și $B(-1,0)$

$$f(2) = 3 \Rightarrow 2a + b = -1, \qquad f(-1) = 0 \Rightarrow -a + b = -1.$$

Scăzând: $3a = 0$, deci $a = 0$, $b = -1$.

**Răspuns:** $a = 0$, $b = -1$. *Barem: 2p, 2p, 1p.*

### 3. $3^x + 3^{x+1} = 36$

$3^x(1 + 3) = 36 \iff 3^x = 9 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 2p, 2p, 1p.*

### 4. Probabilitatea ca un număr din $\{10, 11, \dots, 99\}$ să fie divizibil cu 4

90 cazuri posibile. Multiplii lui 4: $12, 16, \dots, 96$, adică $\dfrac{96 - 12}{4} + 1 = 22$ favorabile.

$$p = \frac{22}{90} = \frac{11}{45}.$$

**Răspuns:** $p = \dfrac{11}{45}$. *Barem: 1p, 2p, 1p, 1p.*

### 5. Coordonatele vectorului $\vec{OM} + \vec{ON}$, $M(2,-1)$, $N(-1,3)$

$$\vec{OM} + \vec{ON} = (2\vec i - \vec j) + (-\vec i + 3\vec j) = \vec i + 2\vec j.$$

**Răspuns:** $(1, 2)$. *Barem: 3p, 2p.*

### 6. Latura triunghiului echilateral cu aria $4\sqrt3$

$$\frac{l^2\sqrt3}{4} = 4\sqrt3 \iff l^2 = 16 \iff l = 4.$$

**Răspuns:** $l = 4$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. Punctele $A_n(2^n, 3^n)$, $n \in \mathbb N$

#### a) Ecuația dreptei $A_0A_1$

$A_0(1, 1)$, $A_1(2, 3)$:

$$\begin{vmatrix} x & y & 1\\ 1 & 1 & 1\\ 2 & 3 & 1\end{vmatrix} = 0 \iff x(1 - 3) - y(1 - 2) + (3 - 2) = 0 \iff -2x + y + 1 = 0.$$

**Răspuns:** $y = 2x - 1$. *Barem: 1p, 2p, 2p.*

#### b) $A_1, A_2, A_3$ nu sunt coliniare

$A_1(2,3)$, $A_2(4,9)$, $A_3(8,27)$:

$$\begin{vmatrix} 2 & 3 & 1\\ 4 & 9 & 1\\ 8 & 27 & 1\end{vmatrix} = 2(9 - 27) - 3(4 - 8) + (108 - 72) = -36 + 12 + 36 = 12 \ne 0.$$

Determinantul nenul arată că punctele nu sunt coliniare. *Barem: 1p, 4p.*

#### c) $n$ cu aria triunghiului $A_nA_{n+1}A_{n+2}$ egală cu $216$

Notăm $a = 2^n$, $b = 3^n$. Scăzând liniile consecutive:

$$\Delta = \begin{vmatrix} a & b & 1\\ 2a & 3b & 1\\ 4a & 9b & 1\end{vmatrix} = \begin{vmatrix} a & b & 1\\ a & 2b & 0\\ 2a & 6b & 0\end{vmatrix} = 6ab - 4ab = 2ab = 2\cdot 6^n.$$

Aria $= \dfrac12|\Delta| = 6^n = 216 = 6^3$.

**Răspuns:** $n = 3$. *Barem: 1p, 3p, 1p.*

### 2. Legea $x\circ y = \dfrac12(xy - x - y + 3)$ (asociativă)

#### a) $e = 3$ este element neutru?

$$x\circ 3 = \tfrac12(3x - x - 3 + 3) = x, \qquad 3\circ x = \tfrac12(3x - 3 - x + 3) = x.$$

Da, $e = 3$ este elementul neutru. *Barem: 2p, 2p, 1p.*

#### b) Simetricul lui $2$

Căutăm $a$ cu $2\circ a = a\circ 2 = 3$ (comutativitatea e evidentă):

$$\tfrac12(2a - 2 - a + 3) = 3 \iff a + 1 = 6 \iff a = 5.$$

**Răspuns:** $5$. *Barem: 1p, 1p, 1p, 2p.*

#### c) $H = \{2k + 1 \mid k \in \mathbb Z\}$ este parte stabilă

Fie $x = 2k + 1$, $y = 2p + 1$. Atunci $xy - x - y + 3 = (x - 1)(y - 1) + 2 = 4kp + 2$, deci

$$x\circ y = 2kp + 1 \in H. \ \blacksquare$$

*Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \ln x + e^x$

#### a) $xf'(x) = 1 + xe^x$

$f'(x) = \dfrac1x + e^x$, deci $xf'(x) = 1 + xe^x$. *Barem: 3p, 2p.*

#### b) Tangenta în $A(1, e)$

$f(1) = e$, $f'(1) = 1 + e$:

$$y - e = (1 + e)(x - 1) \iff y = (e + 1)x - 1.$$

*Barem: 2p, 2p, 1p.*

#### c) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x}$

Cazul $\frac\infty\infty$; cu l'Hospital:

$$\lim_{x\to+\infty}\frac{\frac1x + e^x}{1} = +\infty.$$

**Răspuns:** $+\infty$. *Barem: 3p, 2p.*

### 2. $f(x) = 3x^2 + 2x + 1$

#### a) Aria între grafic, $Ox$, $x = 0$, $x = 1$

$f > 0$ ($\Delta = 4 - 12 < 0$), deci

$$\mathcal A = \int_0^1(3x^2 + 2x + 1)\,dx = (x^3 + x^2 + x)\Big|_0^1 = 3.$$

**Răspuns:** $3$. *Barem: 3p, 2p.*

#### b) Orice primitivă este concavă pe $\left(-\infty, -\dfrac13\right]$

$g' = f$, deci $g''(x) = f'(x) = 6x + 2 < 0$ pentru $x < -\dfrac13$; $g$ este concavă pe acest interval. *Barem: 2p, 1p, 2p.*

#### c) $\displaystyle\int_0^a f(x)\,dx \ge 3a^2 + 2$ pentru $a \ge 2$

$$\int_0^a f(x)\,dx = a^3 + a^2 + a.$$

$$a^3 + a^2 + a - 3a^2 - 2 = a^3 - 2a^2 + a - 2 = a^2(a - 2) + (a - 2) = (a - 2)(a^2 + 1) \ge 0$$

pentru $a \ge 2$. $\blacksquare$ *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a = 0$, $b = -1$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac{11}{45}$ |
| I.5 | $(1, 2)$ |
| I.6 | $l = 4$ |
| II.1.a | $y = 2x - 1$ |
| II.1.c | $n = 3$ |
| II.2.a | da, $e = 3$ |
| II.2.b | $5$ |
| III.1.b | $y = (e+1)x - 1$ |
| III.1.c | $+\infty$ |
| III.2.a | $3$ |

## Ce merită reținut din varianta 10

- **Coliniaritate și arie cu determinanți**: $\mathcal A = \frac12|\Delta|$, iar $\Delta = 0$ înseamnă puncte coliniare.
- **Parte stabilă**: scrie elementele generic ($2k+1$) și arată că rezultatul are aceeași formă.
- **Factorizare prin grupare**: $a^3 - 2a^2 + a - 2 = (a-2)(a^2+1)$.

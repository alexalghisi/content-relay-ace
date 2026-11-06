Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M2 (științe ale naturii / tehnologic)**, subiectul de rezervă, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\log_7\left(3 + \sqrt2\right) + \log_7\left(3 - \sqrt2\right)$

$$\log_7\big((3 + \sqrt2)(3 - \sqrt2)\big) = \log_7(9 - 2) = \log_7 7 = 1.$$

**Răspuns:** $1$. *Barem: 3p produsul, 2p rezultatul.*

### 2. $f(x) = x^2 + ax + b$; graficul conține $A(2,3)$ și $B(-1,0)$

$$\begin{cases}f(2) = 3\\f(-1) = 0\end{cases} \iff \begin{cases}4 + 2a + b = 3\\1 - a + b = 0\end{cases}$$

Scăzând: $3 + 3a = 3 \Rightarrow a = 0$, apoi $b = -1$.

**Răspuns:** $a = 0$, $b = -1$. *Barem: 2p + 2p ecuațiile, 1p soluția.*

### 3. Ecuația $3^x + 3^{x+1} = 36$

$$3^x + 3\cdot3^x = 36 \iff 4\cdot 3^x = 36 \iff 3^x = 9 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 2p factorul comun, 2p $3^x = 9$, 1p soluția.*

### 4. Probabilitatea ca un număr din $\{10, 11, \dots, 99\}$ să fie divizibil cu 4

- Cazuri posibile: **90**.
- Divizibile cu 4: $12, 16, \dots, 96$ — $\dfrac{96 - 12}{4} + 1 = 22$.

$$p = \frac{22}{90} = \frac{11}{45}.$$

*Barem: 1p formula, 2p favorabile, 1p posibile, 1p probabilitatea.*

### 5. $M(2,-1)$, $N(-1,3)$; coordonatele vectorului $\overrightarrow{OM} + \overrightarrow{ON}$

$$\overrightarrow{OM} + \overrightarrow{ON} = (2\vec i - \vec j) + (-\vec i + 3\vec j) = \vec i + 2\vec j.$$

**Răspuns:** $(1, 2)$. *Barem: 3p suma, 2p coordonatele.*

### 6. Latura triunghiului echilateral cu aria $4\sqrt3$

$$\frac{l^2\sqrt3}{4} = 4\sqrt3 \iff l^2 = 16 \iff l = 4.$$

**Răspuns:** $l = 4$. *Barem: 3p formula, 2p rezultatul.*

## Subiectul al II-lea (30 de puncte)

### 1. Punctele $A_n(2^n, 3^n)$, $n \in \mathbb N$

#### a) Ecuația dreptei $A_0A_1$

$A_0(1,1)$, $A_1(2,3)$:

$$\begin{vmatrix}x & y & 1\\1 & 1 & 1\\2 & 3 & 1\end{vmatrix} = 0 \iff x(1 - 3) - y(1 - 2) + (3 - 2) = 0 \iff -2x + y + 1 = 0.$$

**Răspuns:** $A_0A_1: y = 2x - 1$. *Barem: 1p punctele, 2p determinantul, 2p ecuația.*

#### b) $A_1, A_2, A_3$ nu sunt coliniare

$A_1(2,3)$, $A_2(4,9)$, $A_3(8,27)$:

$$\begin{vmatrix}2&3&1\\4&9&1\\8&27&1\end{vmatrix} = 2(9 - 27) - 3(4 - 8) + 1(108 - 72) = -36 + 12 + 36 = 12 \ne 0.$$

Deci punctele nu sunt coliniare. *Barem: 1p punctele, 4p determinantul nenul.*

#### c) $n$ cu aria triunghiului $A_nA_{n+1}A_{n+2}$ egală cu $216$

$$\Delta = \begin{vmatrix}2^n & 3^n & 1\\2^{n+1} & 3^{n+1} & 1\\2^{n+2} & 3^{n+2} & 1\end{vmatrix} = 2^n\cdot3^n\begin{vmatrix}1&1&1\\2&3&1\\4&9&1\end{vmatrix} = 6^n\cdot\big(1(3-9) - 1(2-4) + 1(18-12)\big) = 2\cdot 6^n.$$

$$\mathcal A = \frac12|\Delta| = 6^n = 216 = 6^3 \iff n = 3.$$

**Răspuns:** $n = 3$. *Barem: 1p formula ariei, 3p determinantul, 1p valoarea lui $n$.*

### 2. $x\circ y = \dfrac12(xy - x - y + 3)$ (asociativă)

#### a) $e = 3$ este element neutru

$$x\circ3 = \frac12(3x - x - 3 + 3) = x, \qquad 3\circ x = \frac12(3x - 3 - x + 3) = x.$$

**Răspuns:** da, $e = 3$. *Barem: 2p + 2p, 1p concluzia.*

#### b) Simetricul lui $2$

Căutăm $a$ cu $2\circ a = a\circ 2 = 3$ (legea e comutativă):

$$\frac12(2a - 2 - a + 3) = 3 \iff a + 1 = 6 \iff a = 5.$$

**Răspuns:** $2' = 5$. *Barem: 1p + 1p + 1p condiția, 2p valoarea.*

#### c) $H = \{2k + 1 \mid k \in \mathbb Z\}$ este parte stabilă

Fie $x = 2k + 1$, $y = 2p + 1$:

$$x\circ y = \frac12\big[(4kp + 2k + 2p + 1) - (2k + 1) - (2p + 1) + 3\big] = \frac12(4kp + 2) = 2kp + 1 \in H. \ \blacksquare$$

*Barem: 1p scrierea, 2p calculul, 2p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \ln x + e^x$

#### a) $xf'(x) = 1 + xe^x$

$f'(x) = \dfrac1x + e^x$, deci $xf'(x) = 1 + xe^x$. *Barem: 3p derivata, 2p finalizarea.*

#### b) Tangenta în $A(1, e)$

$f(1) = e$, $f'(1) = 1 + e$:

$$y - e = (1 + e)(x - 1) \iff y = (e+1)x - 1.$$

**Răspuns:** $y = (e+1)x - 1$. *Barem: 2p formula, 2p valorile, 1p ecuația.*

#### c) $\displaystyle\lim_{x\to+\infty}\frac{f(x)}{x}$

Nedeterminare $\frac\infty\infty$; regula lui l'Hôpital:

$$\lim_{x\to+\infty}\frac{\ln x + e^x}{x} = \lim_{x\to+\infty}\left(\frac1x + e^x\right) = +\infty.$$

**Răspuns:** $+\infty$. *Barem: 3p l'Hôpital, 2p rezultatul.*

### 2. $f(x) = 3x^2 + 2x + 1$

#### a) Aria între grafic, $Ox$, $x = 0$, $x = 1$

$f > 0$ ($\Delta = 4 - 12 < 0$):

$$\mathcal A = \int_0^1(3x^2 + 2x + 1)\,dx = (x^3 + x^2 + x)\Big|_0^1 = 3.$$

**Răspuns:** $3$. *Barem: 3p formula și primitiva, 2p rezultatul.*

#### b) Orice primitivă $g$ a lui $f$ este concavă pe $\left(-\infty, -\frac13\right)$

$g' = f$, deci $g''(x) = f'(x) = 6x + 2 < 0$ pentru $x < -\frac13$. Prin urmare $g$ este concavă pe acest interval. *Barem: 2p $g' = f$, 1p $g''$, 2p semnul.*

#### c) $\displaystyle\int_0^a f(x)\,dx \ge 3a^2 + 2$ pentru $a \ge 2$

$$\int_0^a f(x)\,dx = a^3 + a^2 + a.$$

$$a^3 + a^2 + a \ge 3a^2 + 2 \iff a^3 - 2a^2 + a - 2 \ge 0 \iff a^2(a - 2) + (a - 2) \ge 0 \iff (a - 2)(a^2 + 1) \ge 0,$$

adevărat pentru $a \ge 2$. $\blacksquare$ *Barem: 2p integrala, 3p factorizarea și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a = 0$, $b = -1$ |
| I.3 | $x = 2$ |
| I.4 | $p = \frac{11}{45}$ |
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

- **Aria cu determinant**: $\mathcal A = \frac12|\Delta|$; scoate factorii comuni pe coloane ($2^n$, $3^n$).
- **Element neutru și simetric**: verifică pe ambele părți (sau observă comutativitatea).
- **Parte stabilă pentru numere impare**: scrie $x = 2k + 1$ și arată că rezultatul are aceeași formă.
- **Inegalități polinomiale**: factorizează prin grupare.

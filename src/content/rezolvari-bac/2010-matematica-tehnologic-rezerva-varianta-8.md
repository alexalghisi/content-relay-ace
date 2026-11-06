Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M2** (filiera tehnologică / științele naturii), sesiunea de rezervă, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\log_2(3 + \sqrt5) + \log_2(3 - \sqrt5)$

Suma logaritmilor este logaritmul produsului:

$$\log_2\big((3+\sqrt5)(3-\sqrt5)\big) = \log_2(9 - 5) = \log_2 4 = 2.$$

*Barem: 3p produsul, 2p rezultatul.*

### 2. $f(x) = mx^2 + 2x - 5$; abscisa vârfului este $2$

$$x_V = -\frac{b}{2a} = -\frac{2}{2m} = -\frac1m = 2 \iff m = -\frac12.$$

**Răspuns:** $m = -\dfrac12$. *Barem: 3p ecuația, 2p valoarea.*

### 3. Ecuația $3^{1-x^2} = \frac{1}{27}$

$$3^{1-x^2} = 3^{-3} \iff 1 - x^2 = -3 \iff x^2 = 4 \iff x \in \{-2, 2\}.$$

*Barem: 3p ecuația exponenților, 2p soluțiile.*

### 4. Calculați $C_6^2 - A_4^2$

$$C_6^2 = \frac{6\cdot5}{2} = 15, \qquad A_4^2 = 4\cdot3 = 12, \qquad C_6^2 - A_4^2 = 3.$$

*Barem: 2p + 2p + 1p.*

### 5. Distanța de la $O$ la mijlocul lui $AB$, $A(2,-2)$, $B(6,8)$

Mijlocul: $C(4, 3)$. $OC = \sqrt{16 + 9} = 5$.

**Răspuns:** $5$. *Barem: 2p mijlocul, 3p distanța.*

### 6. Calculați $\cos130^\circ + \cos50^\circ$

$\cos(180^\circ - x) = -\cos x$, deci $\cos130^\circ = -\cos50^\circ$ și suma este $0$.

*Barem: 2p formula, 3p rezultatul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & -1 & -1\\ 1 & 3 & -1\\ m & 0 & 2\end{pmatrix}$, sistemul $\begin{cases} x - y - z = -2\\ x + 3y - z = -2\\ mx + 2z = 4\end{cases}$

#### a) $\det A$

Regula lui Sarrus:

$$\det A = 6 + m + 0 - (-3m) - 0 - (-2) = 8 + 4m.$$

*Barem: 3p scrierea, 2p calculul.*

#### b) $A$ inversabilă

$A$ inversabilă $\iff \det A \ne 0 \iff 8 + 4m \ne 0 \iff m \ne -2$.

**Răspuns:** $m \in \mathbb R\setminus\{-2\}$. *Barem: 3p + 2p.*

#### c) Sistemul pentru $m = -1$

$\det A = 4 \ne 0$, deci sistemul are soluție unică.

- Scădem primele două ecuații: $4y = 0 \Rightarrow y = 0$.
- Rămâne $x - z = -2$ și $-x + 2z = 4$; adunându-le: $z = 2$, apoi $x = 0$.

**Răspuns:** $x = 0$, $y = 0$, $z = 2$. *Barem: 2p determinantul, 3p soluția.*

### 2. $x\circ y = 2xy - 2x - 2y + 3$

#### a) $x\circ y = 2(x-1)(y-1) + 1$

$$2xy - 2x - 2y + 2 + 1 = 2x(y-1) - 2(y-1) + 1 = 2(x-1)(y-1) + 1.$$

*Barem: 2p + 3p.*

#### b) Elementul neutru

$x\circ e = x$ pentru orice $x$: $2(x-1)(e-1) + 1 = x \iff (x-1)\big(2(e-1) - 1\big) = 0$ pentru orice $x$, deci $2e - 3 = 0$. Legea este comutativă, deci și $e\circ x = x$.

**Răspuns:** $e = \dfrac32$. *Barem: 2p condiția, 3p valoarea.*

#### c) $a, b \in \mathbb Q\setminus\mathbb Z$ cu $a\circ b \in \mathbb Z$

Căutăm $2(a-1)(b-1)$ întreg. De exemplu $a = \frac52$, $b = \frac53$: $a - 1 = \frac32$, $b - 1 = \frac23$.

$$a\circ b = 2\cdot\frac32\cdot\frac23 + 1 = 2 + 1 = 3 \in \mathbb Z.$$

**Răspuns (exemplu):** $a = \frac52$, $b = \frac53$. *Barem: 2p exemplul, 3p verificarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{x^2 + 3}$

#### a) $f'(x)$

$$f'(x) = \frac{(x^2+3)'}{2\sqrt{x^2+3}} = \frac{x}{\sqrt{x^2+3}}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în $A(1,2)$

$f(1) = 2$, $f'(1) = \dfrac12$.

$$y - 2 = \frac12(x - 1) \iff y = \frac12x + \frac32.$$

*Barem: 1p formula, 2p valorile, 2p ecuația.*

#### c) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{\sqrt{x^2+3}}{x} = 1, \qquad n = \lim_{x\to+\infty}\left(\sqrt{x^2+3} - x\right) = \lim_{x\to+\infty}\frac{3}{\sqrt{x^2+3} + x} = 0.$$

**Răspuns:** $y = x$. *Barem: 2p + 1p + 1p + 1p.*

### 2. $f_n(x) = x^n\ln x$, $x > 0$

#### a) $\displaystyle\int_e^{e^2}\frac{\ln x}{f_1(x)}\,dx$

$\dfrac{\ln x}{x\ln x} = \dfrac1x$ (pe $[e, e^2]$, $\ln x \ne 0$):

$$\int_e^{e^2}\frac1x\,dx = \ln x\Big|_e^{e^2} = 2 - 1 = 1.$$

*Barem: 1p + 1p + 1p + 2p.*

#### b) Primitivele lui $f_1$ sunt convexe pe $\left[\frac1e, +\infty\right)$

Fie $F$ o primitivă: $F' = f_1$, deci $F''(x) = f_1'(x) = \ln x + 1$. Pentru $x \ge \frac1e$: $\ln x \ge -1$, deci $F''(x) \ge 0$ și $F$ este convexă. $\blacksquare$ *Barem: 3p $F''$, 2p concluzia.*

#### c) $\displaystyle\int_1^e\frac{f_{2009}(x)}{x^{2010}}\,dx$

$\dfrac{x^{2009}\ln x}{x^{2010}} = \dfrac{\ln x}{x}$:

$$\int_1^e\frac{\ln x}{x}\,dx = \frac{\ln^2 x}{2}\Big|_1^e = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 1p + 1p + 2p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $m = -\frac12$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | $3$ |
| I.5 | $5$ |
| I.6 | $0$ |
| II.1.a | $8 + 4m$ |
| II.1.b | $m \ne -2$ |
| II.1.c | $(0, 0, 2)$ |
| II.2.b | $e = \frac32$ |
| III.1.b | $y = \frac12x + \frac32$ |
| III.1.c | $y = x$ |
| III.2.a | $1$ |
| III.2.c | $\frac12$ |

## Ce merită reținut din varianta 8

- **$\log(a + \sqrt b) + \log(a - \sqrt b)$**: produsul conjugatelor scapă de radical.
- **Unghiuri suplementare**: $\cos(180^\circ - x) = -\cos x$, $\sin(180^\circ - x) = \sin x$.
- **Convexitatea primitivelor**: $F'' = f'$, deci studiezi semnul derivatei lui $f$.
- **$\sqrt{x^2 + c} - x$** la $+\infty$: amplifică cu conjugata.

Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $2(\sqrt7 + 1) - \sqrt{28}$ este număr natural

$\sqrt{28} = \sqrt{4\cdot 7} = 2\sqrt7$, deci

$$2\sqrt7 + 2 - 2\sqrt7 = 2 \in \mathbb N.$$

*Barem: 3p, 2p.*

### 2. $f(x) = 2x - 1$; calculați $f(1) + f(2) + \dots + f(10)$

$$2(1 + 2 + \dots + 10) - 10 = 2\cdot 55 - 10 = 100.$$

**Răspuns:** $100$. *Barem: 3p, 2p.*

### 3. Ecuația $4^{x+1} = 16$

$16 = 4^2$, deci $x + 1 = 2 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un element din $A = \{1, 2, \dots, 15\}$ să fie multiplu de 7

Cazuri posibile: **15**. Multiplii lui 7: $7, 14$ — **2**.

$$p = \frac{2}{15}.$$

*Barem: 2p, 1p, 2p.*

### 5. $\overrightarrow{AB} = 2\vec i + \vec j$, $\overrightarrow{BC} = \vec i - \vec j$; lungimea lui $\overrightarrow{AC}$

$$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = 3\vec i + 0\cdot\vec j, \qquad |\overrightarrow{AC}| = 3.$$

**Răspuns:** $3$. *Barem: 3p, 2p.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $\dfrac{3\sin x - 2\cos x}{\cos x} = 1$

$\cos x \ne 0$ pe interval. Ecuația devine $3\sin x - 2\cos x = \cos x \iff \sin x = \cos x \iff \operatorname{tg} x = 1$, deci $x = \dfrac\pi4$.

**Răspuns:** $x = \dfrac\pi4$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x & x\\ x & 1 & x\\ x & x & 1\end{pmatrix}$

#### a) $\det(A(2))$

$$\begin{vmatrix} 1 & 2 & 2\\ 2 & 1 & 2\\ 2 & 2 & 1\end{vmatrix} = 1 + 8 + 8 - 4 - 4 - 4 = 5.$$

**Răspuns:** $5$. *Barem: 2p, 3p.*

#### b) $A(1)\cdot A(2) = 5A(1)$

$A(1)$ are toate elementele $1$, deci fiecare element al produsului este suma elementelor unei coloane a lui $A(2)$, adică $1 + 2 + 2 = 5$:

$$A(1)\cdot A(2) = \begin{pmatrix} 5 & 5 & 5\\ 5 & 5 & 5\\ 5 & 5 & 5\end{pmatrix} = 5A(1).$$

*Barem: 2p, 3p.*

#### c) $x$ cu $\det(A(x)) = 0$

$$\det A(x) = 1 + x^3 + x^3 - x^2 - x^2 - x^2 = 2x^3 - 3x^2 + 1 = (x - 1)^2(2x + 1).$$

(Verificare: $x = 1$ e rădăcină; Horner dă $2x^3 - 3x^2 + 1 = (x - 1)(2x^2 - x - 1) = (x-1)(x-1)(2x+1)$.)

**Răspuns:** $x \in \left\{-\dfrac12, 1\right\}$. *Barem: 2p, 3p.*

### 2. $f = X^3 - 2X^2 - 2X + m$

#### a) Pentru $m = 3$, calculați $f(1)$

$f(1) = 1 - 2 - 2 + 3 = 0$.

**Răspuns:** $0$. *Barem: 2p, 3p.*

#### b) $m$ știind că restul împărțirii la $X - 2$ este $2$

Restul este $f(2) = 8 - 8 - 4 + m = m - 4 = 2 \iff m = 6$.

**Răspuns:** $m = 6$. *Barem: 3p, 2p.*

#### c) Pentru $m = 4$: $(x_1 + x_2 + x_3)\left(\frac{1}{x_1} + \frac{1}{x_2} + \frac{1}{x_3}\right) = 1$

Viète: $s_1 = 2$, $s_2 = -2$, $s_3 = x_1x_2x_3 = -4$.

$$\frac{1}{x_1} + \frac{1}{x_2} + \frac{1}{x_3} = \frac{s_2}{s_3} = \frac{-2}{-4} = \frac12 \Rightarrow s_1\cdot\frac12 = 2\cdot\frac12 = 1.$$

*Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x\ln x$

#### a) $f'(x)$

$$f'(x) = \ln x + x\cdot\frac1x = \ln x + 1.$$

*Barem: 2p, 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x^2}$

$$\lim_{x\to+\infty}\frac{x\ln x}{x^2} = \lim_{x\to+\infty}\frac{\ln x}{x} \overset{\text{l'H}}{=} \lim_{x\to+\infty}\frac{1/x}{1} = 0.$$

**Răspuns:** $0$. *Barem: 2p, 3p.*

#### c) $f$ este convexă pe $(0, +\infty)$

$f''(x) = \dfrac1x > 0$ pentru $x > 0$, deci $f$ este convexă. *Barem: 2p, 3p.*

### 2. $f(x) = \dfrac{1}{x^2 + 1}$

#### a) $\displaystyle\int_0^1 xf(x)\,dx = \frac12\ln 2$

$$\int_0^1\frac{x}{x^2+1}\,dx = \frac12\int_0^1\frac{(x^2+1)'}{x^2+1}\,dx = \frac12\ln(x^2+1)\Big|_0^1 = \frac12\ln 2.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1 xf'(x)\,dx$

Prin părți:

$$\int_0^1 xf'(x)\,dx = xf(x)\Big|_0^1 - \int_0^1 f(x)\,dx = \frac12 - \operatorname{arctg} x\Big|_0^1 = \frac12 - \frac\pi4.$$

**Răspuns:** $\dfrac12 - \dfrac\pi4$. *Barem: 2p, 3p.*

#### c) Volumul corpului de rotație pentru $h:[0,1] \to \mathbb R$, $h(x) = \dfrac{1}{f(x)}$

$h(x) = x^2 + 1$, deci

$$V = \pi\int_0^1(x^2 + 1)^2\,dx = \pi\int_0^1(x^4 + 2x^2 + 1)\,dx = \pi\left(\frac15 + \frac23 + 1\right) = \frac{28\pi}{15}.$$

**Răspuns:** $V = \dfrac{28\pi}{15}$. *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $100$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{2}{15}$ |
| I.5 | $3$ |
| I.6 | $x = \tfrac\pi4$ |
| II.1.a | $5$ |
| II.1.c | $x \in \{-\tfrac12, 1\}$ |
| II.2.a | $0$ |
| II.2.b | $m = 6$ |
| III.1.b | $0$ |
| III.2.b | $\tfrac12 - \tfrac\pi4$ |
| III.2.c | $\tfrac{28\pi}{15}$ |

## Ce merită reținut din varianta 3

- **Relația lui Chasles**: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.
- **$\sum\frac{1}{x_i} = \frac{s_2}{s_3}$** pentru un polinom de grad 3.
- **Determinantul $\begin{vmatrix} 1 & x & x\\ x & 1 & x\\ x & x & 1\end{vmatrix} = (x-1)^2(2x+1)$** — merită recunoscut.
- **$\int x f'(x)dx$**: integrare prin părți, cu $u = x$.

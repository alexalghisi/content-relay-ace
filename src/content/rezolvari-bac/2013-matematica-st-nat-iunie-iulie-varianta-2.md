Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x = 2(1 + i) - 2i$ este real

$$x = 2 + 2i - 2i = 2 \in \mathbb R.$$

*Barem: 3p calculul, 2p concluzia.*

### 2. Calculați $f(1)\cdot f(2)\cdot\ldots\cdot f(5)$ pentru $f(x) = x - 2$

$f(2) = 0$, deci produsul este $0$.

**Răspuns:** $0$. *Barem: 3p $f(2) = 0$, 2p concluzia.*

### 3. Ecuația $\sqrt{x^2 + 1} = x + 1$

Condiția $x + 1 \ge 0$. Ridicăm la pătrat:

$$x^2 + 1 = x^2 + 2x + 1 \iff x = 0,$$

care verifică ecuația ($\sqrt1 = 1$).

**Răspuns:** $x = 0$. *Barem: 2p ridicarea la pătrat, 3p soluția și verificarea.*

### 4. Probabilitatea ca un număr de două cifre să aibă produsul cifrelor 5

$5$ este prim, deci cifrele sunt $1$ și $5$: numerele $15$ și $51$ — **2** cazuri favorabile din **90** posibile.

$$p = \frac{2}{90} = \frac{1}{45}.$$

*Barem: 2p favorabile, 1p posibile, 2p probabilitatea.*

### 5. $\overrightarrow{AB} = 2\vec i + 2\vec j$, $\overrightarrow{BC} = 2\vec i + \vec j$; lungimea lui $\overrightarrow{AC}$

$$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC} = 4\vec i + 3\vec j, \qquad |\overrightarrow{AC}| = \sqrt{16 + 9} = 5.$$

**Răspuns:** $5$. *Barem: 3p suma, 2p lungimea.*

### 6. $E(x) = \sin x + \cos\dfrac x2$; calculați $E\left(\frac\pi3\right)$

$$E\left(\frac\pi3\right) = \sin\frac\pi3 + \cos\frac\pi6 = \frac{\sqrt3}{2} + \frac{\sqrt3}{2} = \sqrt3.$$

**Răspuns:** $\sqrt3$. *Barem: 2p înlocuirea, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1&2\\3&5\end{pmatrix}$

#### a) $\det A$

$$\det A = 1\cdot5 - 2\cdot3 = -1.$$

*Barem: 3p formula, 2p calculul.*

#### b) $A^2 - 6A = I_2$

$$A^2 = \begin{pmatrix}7 & 12\\18 & 31\end{pmatrix}, \qquad A^2 - 6A = \begin{pmatrix}7 - 6 & 12 - 12\\18 - 18 & 31 - 30\end{pmatrix} = I_2.$$

*Barem: 2p $A^2$, 3p diferența.*

#### c) Inversa matricei $B = A - 6I_2$

$B = \begin{pmatrix}-5 & 2\\3 & -1\end{pmatrix}$, $\det B = 5 - 6 = -1$.

$$B^{-1} = \frac{1}{-1}\begin{pmatrix}-1 & -2\\-3 & -5\end{pmatrix} = \begin{pmatrix}1&2\\3&5\end{pmatrix} = A.$$

(Explicație: din b), $A(A - 6I_2) = I_2$, deci $B^{-1} = A$.) *Barem: 2p $B$ și determinantul, 3p inversa.*

### 2. $x * y = \sqrt{x^2 + y^2 + 4}$ (asociativă)

#### a) $2 * 2$

$$2 * 2 = \sqrt{4 + 4 + 4} = \sqrt{12} = 2\sqrt3.$$

**Răspuns:** $2\sqrt3$. *Barem: 2p înlocuirea, 3p rezultatul.*

#### b) $x * x = \sqrt{12}$

$$\sqrt{2x^2 + 4} = \sqrt{12} \iff 2x^2 + 4 = 12 \iff x^2 = 4 \iff x = \pm2.$$

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 2p ecuația, 3p soluțiile.*

#### c) $\underbrace{1 * 1 * \dots * 1}_{8\text{ ori}}$ este întreg

Observăm că $(x * y)^2 = x^2 + y^2 + 4$; prin inducție, pentru $n$ elemente:

$$(x_1 * x_2 * \dots * x_n)^2 = x_1^2 + \dots + x_n^2 + 4(n - 1).$$

Pentru opt de $1$: $(1 * \dots * 1)^2 = 8\cdot1 + 4\cdot7 = 36$, iar rezultatul legii este nenegativ, deci

$$\underbrace{1 * \dots * 1}_{8} = 6 \in \mathbb Z.$$

*Barem: 3p formula, 2p rezultatul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x(x^2 - 6x + 9)$

#### a) $f'(x) = e^x(x^2 - 4x + 3)$

$$f'(x) = e^x(x^2 - 6x + 9) + e^x(2x - 6) = e^x(x^2 - 4x + 3).$$

*Barem: 3p regula produsului, 2p simplificarea.*

#### b) $f(x) + f''(x) = 2\big(f'(x) + e^x\big)$

$f''(x) = e^x(x^2 - 4x + 3) + e^x(2x - 4) = e^x(x^2 - 2x - 1)$.

$$f(x) + f''(x) = e^x(2x^2 - 8x + 8), \qquad 2\big(f'(x) + e^x\big) = 2e^x(x^2 - 4x + 4) = e^x(2x^2 - 8x + 8).$$

**Răspuns:** da, egalitatea are loc pentru orice $x$. *Barem: 2p $f''$, 3p verificarea.*

#### c) Punctele de extrem

$f'(x) = e^x(x - 1)(x - 3) = 0 \iff x \in \{1, 3\}$.

| $x$ | $(-\infty,1)$ | $1$ | $(1,3)$ | $3$ | $(3,+\infty)$ |
|---|---|---|---|---|---|
| $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |

**Răspuns:** $x = 1$ punct de maxim, $x = 3$ punct de minim. *Barem: 2p rădăcinile, 2p semnul, 1p concluzia.*

### 2. $f:(-1,+\infty)\to\mathbb R$, $f(x) = \dfrac{x}{x+1}$

#### a) $\displaystyle\int_0^1(x+1)f(x)\,dx$

$$\int_0^1 x\,dx = \frac{x^2}{2}\Big|_0^1 = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 2p simplificarea, 3p calculul.*

#### b) $\displaystyle\int_0^1 x^2f(x)\,dx + \int_0^1x^3f(x)\,dx = \frac14$

$$\int_0^1\frac{x^3 + x^4}{x+1}\,dx = \int_0^1\frac{x^3(x+1)}{x+1}\,dx = \int_0^1x^3\,dx = \frac14.$$

*Barem: 2p gruparea, 3p calculul.*

#### c) Volumul corpului de rotație pentru $h = f$ pe $[0,1]$

$h(x) = 1 - \dfrac1{x+1}$, deci $h^2(x) = 1 - \dfrac{2}{x+1} + \dfrac{1}{(x+1)^2}$:

$$V = \pi\left(x - 2\ln(x+1) - \frac1{x+1}\right)\Big|_0^1 = \pi\left[\left(1 - 2\ln2 - \frac12\right) - (-1)\right] = \pi\left(\frac32 - 2\ln2\right).$$

**Răspuns:** $V = \pi\left(\dfrac32 - 2\ln2\right)$. *Barem: 3p dezvoltarea, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x = 0$ |
| I.4 | $p = \frac1{45}$ |
| I.5 | $5$ |
| I.6 | $\sqrt3$ |
| II.1.a | $-1$ |
| II.1.c | $B^{-1} = A$ |
| II.2.a | $2\sqrt3$ |
| II.2.b | $x = \pm2$ |
| II.2.c | $6$ |
| III.1.c | max în $x = 1$, min în $x = 3$ |
| III.2.a | $\frac12$ |
| III.2.c | $\pi\left(\frac32 - 2\ln2\right)$ |

## Ce merită reținut din varianta 2

- **Relația $A^2 - 6A = I_2$** dă imediat inversa: $A(A - 6I_2) = I_2$.
- **Legi cu radical**: lucrează cu pătratul legii — compunerea devine o sumă.
- **Puncte de extrem**: rădăcinile lui $f'$ unde derivata își schimbă semnul.
- **$\frac{x}{x+1} = 1 - \frac1{x+1}$** — simplifică integralele și volumele.

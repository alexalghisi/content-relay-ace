Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2014 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei geometrice cu termeni reali, $b_2 = 1$, $b_5 = 8$

$$b_5 = b_2q^3 \Rightarrow q^3 = 8 \Rightarrow q = 2.$$

(Rădăcina reală de ordinul 3 a lui 8 este unică.) **Răspuns:** $q = 2$. *Barem: 3p, 2p.*

### 2. $f(x) = x^2 + 2x + 7$; calculați $(f\circ f)(0)$

$f(0) = 7$, apoi $(f\circ f)(0) = f(7) = 49 + 14 + 7 = 70$.

**Răspuns:** $70$. *Barem: 2p, 3p.*

### 3. Ecuația $2\log_5(x - 3) = \log_5(x - 1)$

**Condiții:** $x - 3 > 0$ și $x - 1 > 0$, deci $x > 3$.

$2\log_5(x - 3) = \log_5(x - 3)^2$, deci

$$(x - 3)^2 = x - 1 \iff x^2 - 7x + 10 = 0 \iff (x - 2)(x - 5) = 0.$$

$x = 2$ nu verifică $x > 3$; $x = 5$ convine.

**Răspuns:** $x = 5$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr din $A = \{1, 2, \dots, 50\}$ să fie divizibil cu 11

Multiplii lui 11 din $A$: $11, 22, 33, 44$ — **4 cazuri favorabile**; **50 cazuri posibile**.

$$p = \frac{4}{50} = \frac{2}{25}.$$

*Barem: 2p, 1p, 2p.*

### 5. $a$ pentru care $\vec v = 2\vec i + (a + 1)\vec j$ și $\vec u = \vec i + 2\vec j$ sunt coliniari

$$\frac21 = \frac{a + 1}{2} \iff a + 1 = 4 \iff a = 3.$$

**Răspuns:** $a = 3$. *Barem: 3p, 2p.*

### 6. Ecuația $2\sin x - 1 = 0$, $x \in \left(0, \frac\pi2\right)$

$\sin x = \frac12$, iar în primul cadran singura soluție este $x = \dfrac\pi6$.

**Răspuns:** $x = \dfrac\pi6$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 0\\ 0 & 4\end{pmatrix}$, $B = \begin{pmatrix} 1 & 0\\ 0 & 5\end{pmatrix}$

#### a) $A\cdot B = B\cdot A$

Matricele sunt diagonale:

$$A\cdot B = \begin{pmatrix} 1 & 0\\ 0 & 20\end{pmatrix} = B\cdot A.$$

*Barem: 2p, 3p.*

#### b) Este $\det(A + B) > \det A + \det B$?

$A + B = \begin{pmatrix} 2 & 0\\ 0 & 9\end{pmatrix}$, $\det(A + B) = 18$; $\det A + \det B = 4 + 5 = 9$.

**Răspuns:** da, $18 > 9$. *Barem: 2p, 3p.*

#### c) Numărul matricelor $X = \begin{pmatrix} a & 0\\ 0 & b\end{pmatrix}$ cu $X^2 = A$

$$X^2 = \begin{pmatrix} a^2 & 0\\ 0 & b^2\end{pmatrix} = \begin{pmatrix} 1 & 0\\ 0 & 4\end{pmatrix} \iff a^2 = 1,\ b^2 = 4 \iff a \in \{-1, 1\},\ b \in \{-2, 2\}.$$

**Răspuns:** $2\cdot 2 = 4$ matrice. *Barem: 2p, 3p.*

### 2. $f = X^3 + X + a$, cu rădăcinile $x_1, x_2, x_3$

#### a) Pentru $a = -2$: $f(1) = 0$

$f = X^3 + X - 2$, $f(1) = 1 + 1 - 2 = 0$. *Barem: 3p, 2p.*

#### b) $a$ cu $(2 - x_1)(2 - x_2)(2 - x_3) = 2$

$f = (X - x_1)(X - x_2)(X - x_3)$, deci $(2 - x_1)(2 - x_2)(2 - x_3) = f(2) = 8 + 2 + a = 10 + a$.

$$10 + a = 2 \iff a = -8.$$

**Răspuns:** $a = -8$. *Barem: 3p, 2p.*

#### c) Pentru $a \ne 0$: un polinom de grad trei cu coeficienți reali, cu rădăcinile $\frac{1}{x_1}, \frac{1}{x_2}, \frac{1}{x_3}$

Viète: $s_1 = 0$, $s_2 = 1$, $s_3 = x_1x_2x_3 = -a \ne 0$ (deci rădăcinile sunt nenule). Pentru $y_i = \frac{1}{x_i}$:

$$\sum y_i = \frac{s_2}{s_3} = -\frac1a, \qquad \sum y_iy_j = \frac{s_1}{s_3} = 0, \qquad y_1y_2y_3 = \frac{1}{s_3} = -\frac1a.$$

Polinomul monic cu aceste rădăcini este $X^3 + \frac1aX^2 + 0\cdot X + \frac1a$; înmulțind cu $a$:

$$g = aX^3 + X^2 + 1.$$

(Verificare: $X^3f\!\left(\frac1X\right) = 1 + X^2 + aX^3$.) **Răspuns (un exemplu):** $g = aX^3 + X^2 + 1$. *Barem: 1p, 3p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \ln(x + 1) - \ln x$

#### a) $f'(x)$

$$f'(x) = \frac{1}{x + 1} - \frac1x = -\frac{1}{x(x+1)}.$$

*Barem: 2p, 3p.*

#### b) $f$ este descrescătoare

$f'(x) = -\dfrac{1}{x(x+1)} < 0$ pentru orice $x > 0$, deci $f$ este (strict) descrescătoare. *Barem: 2p, 3p.*

#### c) $\lim\limits_{x\to+\infty} xf(x)$

Scriem ca $\frac00$ și aplicăm l'Hospital:

$$\lim_{x\to+\infty}\frac{\ln(x+1) - \ln x}{\frac1x} = \lim_{x\to+\infty}\frac{\frac{1}{x+1} - \frac1x}{-\frac{1}{x^2}} = \lim_{x\to+\infty}\frac{x^2}{x(x+1)} = 1.$$

**Răspuns:** $1$. *Barem: 2p, 3p.*

### 2. $f:(-2, +\infty) \to \mathbb R$, $f(x) = \dfrac{x}{x + 2}$

#### a) $\displaystyle\int_0^1 (x + 2)f(x)\,dx$

$$\int_0^1 x\,dx = \frac{x^2}{2}\Big|_0^1 = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 2p, 3p.*

#### b) $\displaystyle\int_{2013}^{2014}\big(f(x) + (x + 2)f'(x)\big)dx = 1$

Integrandul este derivata unui produs: $f(x) + (x + 2)f'(x) = \big((x + 2)f(x)\big)' = (x)' = 1$. Deci

$$\int_{2013}^{2014} 1\,dx = 2014 - 2013 = 1.$$

*Barem: 3p, 2p.*

#### c) Volumul corpului obținut prin rotația graficului lui $g:[1, 2] \to \mathbb R$, $g(x) = \dfrac{x}{f(x)}$

$g(x) = x + 2$, deci

$$V = \pi\int_1^2(x + 2)^2\,dx = \pi\frac{(x + 2)^3}{3}\Big|_1^2 = \pi\cdot\frac{64 - 27}{3} = \frac{37\pi}{3}.$$

**Răspuns:** $V = \dfrac{37\pi}{3}$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $q = 2$ |
| I.2 | $70$ |
| I.3 | $x = 5$ |
| I.4 | $p = \tfrac{2}{25}$ |
| I.5 | $a = 3$ |
| I.6 | $x = \tfrac\pi6$ |
| II.1.b | da ($18 > 9$) |
| II.1.c | $4$ matrice |
| II.2.b | $a = -8$ |
| II.2.c | $g = aX^3 + X^2 + 1$ |
| III.1.c | $1$ |
| III.2.a | $\tfrac12$ |
| III.2.c | $\tfrac{37\pi}{3}$ |

## Ce merită reținut din model

- **$\prod(c - x_i) = f(c)$** pentru un polinom monic — evită calculul cu Viète.
- **Polinomul cu rădăcinile inverse**: $X^n f\!\left(\frac1X\right)$ (coeficienții în ordine inversă).
- **Derivata unui produs „ascunsă" în integrand**: $f + (x+2)f' = \big((x+2)f\big)'$.
- **Ecuații logaritmice cu coeficient**: $2\log_a u = \log_a u^2$ doar când $u > 0$ — pune condițiile la început.

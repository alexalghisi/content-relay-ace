Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Pentru $a = 3$: $\frac a2 - \frac2a = \frac56$

$$\frac32 - \frac23 = \frac{9 - 4}{6} = \frac56.$$

*Barem: 2p + 3p.*

### 2. Abscisa punctului de intersecție a graficelor lui $f(x) = 2x - 3$ și $g(x) = x + 1$

$$2x - 3 = x + 1 \iff x = 4.$$

*Barem: 3p + 2p.*

### 3. Ecuația $\sqrt{x^2 + 5} = 3$

$x^2 + 5 = 9 \iff x^2 = 4 \iff x \in \{-2, 2\}$; ambele verifică ($\sqrt9 = 3$).

*Barem: 2p + 3p.*

### 4. Prețul de 120 lei după o scumpire cu 10%

$\frac{10}{100}\cdot120 = 12$ lei, deci prețul nou este $132$ lei. *Barem: 3p + 2p.*

### 5. Perimetrul triunghiului $A(2,2)$, $B(2,5)$, $C(6,5)$

$AB = 5 - 2 = 3$ (vertical), $BC = 6 - 2 = 4$ (orizontal), deci triunghiul e dreptunghic în $B$ și $AC = \sqrt{9 + 16} = 5$.

$$P = 3 + 4 + 5 = 12.$$

*Barem: 3p + 2p.*

### 6. $\cos A$, știind $\sin A = \frac{\sqrt3}{2}$ și $A$ ascuțit

$$\cos A = \sqrt{1 - \frac34} = \frac12.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 2\\ 1 & 0\end{pmatrix}$, $B = \begin{pmatrix} b & b\\ 0 & 1\end{pmatrix}$, $C = \begin{pmatrix} 1 & 0\\ 0 & 0\end{pmatrix}$

#### a) $\det A = -2$

$$\det A = 1\cdot0 - 1\cdot2 = -2.$$

*Barem: 2p + 3p.*

#### b) $b$ cu $A + B = AB + C$

$$A + B = \begin{pmatrix} b+1 & b+2\\ 1 & 1\end{pmatrix}, \qquad AB = \begin{pmatrix} b & b + 2\\ b & b\end{pmatrix}, \qquad AB + C = \begin{pmatrix} b+1 & b+2\\ b & b\end{pmatrix}.$$

Egalitatea cere $b = 1$ (din linia a doua).

**Răspuns:** $b = 1$. *Barem: 3p + 2p.*

#### c) $\det(B + 2C) = \det B - \det A$

$$B + 2C = \begin{pmatrix} b + 2 & b\\ 0 & 1\end{pmatrix}, \qquad \det(B + 2C) = b + 2.$$

$\det B = b$, deci $\det B - \det A = b - (-2) = b + 2$. Egalitate pentru orice $b$. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f = X^3 - 4X^2 + X + 2$

#### a) $f(1) = 0$

$$f(1) = 1 - 4 + 1 + 2 = 0.$$

*Barem: 3p + 2p.*

#### b) Câtul și restul împărțirii la $X - 1$

Schema lui Horner cu $1$:

| | $1$ | $-4$ | $1$ | $2$ |
|---|---|---|---|---|
| $1$ | $1$ | $-3$ | $-2$ | $0$ |

**Răspuns:** câtul $X^2 - 3X - 2$, restul $0$. *Barem: 3p + 2p.*

#### c) $(x_1 + x_2 + x_3)\left(\frac{1}{x_1} + \frac{1}{x_2} + \frac{1}{x_3}\right) = -2$

Viète: $\sum x_i = 4$, $\sum x_ix_j = 1$, $x_1x_2x_3 = -2$.

$$\frac{1}{x_1} + \frac{1}{x_2} + \frac{1}{x_3} = \frac{x_1x_2 + x_2x_3 + x_1x_3}{x_1x_2x_3} = -\frac12,$$

deci produsul este $4\cdot\left(-\frac12\right) = -2$. $\blacksquare$ *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = x^2 - \ln x$

#### a) $\lim\limits_{x\to1} f(x) = 1$

$f$ este continuă, deci $\lim\limits_{x\to1} f(x) = f(1) = 1 - \ln1 = 1$. *Barem: 2p + 3p.*

#### b) $f'(x) = 2x - \frac1x$

$$f'(x) = (x^2)' - (\ln x)' = 2x - \frac1x.$$

*Barem: 2p + 3p.*

#### c) $f$ convexă pe $(0, +\infty)$

$$f''(x) = 2 + \frac{1}{x^2} > 0,$$

deci $f$ este convexă. *Barem: 2p + 3p.*

### 2. $f:(-1,+\infty)\to\mathbb R$, $f(x) = \dfrac{x^2}{x+1}$

#### a) $\displaystyle\int_0^1 x^2\,dx = \frac13$

$$\int_0^1 x^2\,dx = \frac{x^3}{3}\Big|_0^1 = \frac13.$$

*Barem: 3p + 2p.*

#### b) Aria sub grafic pe $[0,1]$

$f(x) \ge 0$ pe $[0,1]$. Împărțim: $x^2 = (x+1)(x-1) + 1$, deci $\dfrac{x^2}{x+1} = x - 1 + \dfrac{1}{x+1}$.

$$\mathcal A = \int_0^1\left(x - 1 + \frac{1}{x+1}\right)dx = \left(\frac{x^2}{2} - x + \ln(x+1)\right)\Big|_0^1 = \frac12 - 1 + \ln2 = \ln2 - \frac12.$$

**Răspuns:** $\ln2 - \dfrac12$. *Barem: 3p + 2p.*

#### c) Orice primitivă a lui $f$ este crescătoare pe $(-1, +\infty)$

Dacă $F$ este o primitivă, $F'(x) = f(x) = \dfrac{x^2}{x+1} \ge 0$ pentru $x > -1$ (numărător $\ge 0$, numitor $> 0$). Deci $F$ este crescătoare. $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $x = 4$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | 132 lei |
| I.5 | $12$ |
| I.6 | $\cos A = \frac12$ |
| II.1.b | $b = 1$ |
| II.2.b | cât $X^2 - 3X - 2$, rest $0$ |
| III.2.b | $\ln2 - \frac12$ |

## Ce merită reținut din varianta 7

- **Suma inverselor rădăcinilor**: $\sum\frac{1}{x_i} = \frac{\sigma_2}{\sigma_3}$ (din Viète).
- **Schema lui Horner** dă rapid câtul și restul împărțirii la $X - a$.
- **Primitivele unei funcții pozitive** sunt crescătoare (derivata lor este chiar funcția).
- **Fracții raționale** cu grad numărător $\ge$ grad numitor: împarte înainte să integrezi.

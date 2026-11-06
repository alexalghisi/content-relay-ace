Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_tehnologic**, sesiunea de rezervă, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\left(1 - \dfrac34\right) : \dfrac14 = 1$

$1 - \dfrac34 = \dfrac14$, iar $\dfrac14 : \dfrac14 = 1$. *Barem: 3p, 2p.*

### 2. $f(x) = x^2 - 1$: $f(-1) + f(1)$

$f(-1) = 0$, $f(1) = 0$, deci suma este $0$. *Barem: 2p, 3p.*

### 3. $\sqrt{3x + 4} = 4$

$3x + 4 = 16 \iff x = 4$, care verifică. **Răspuns:** $x = 4$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{1, \dots, 10\}$ să fie multiplu de 3

Favorabile: $3, 6, 9$ — 3 din 10.

**Răspuns:** $p = \dfrac{3}{10}$. *Barem: 1p, 2p, 2p.*

### 5. Triunghiul $AOB$, $O(0,0)$, $A(0,5)$, $B(5,0)$, este isoscel

$AO = 5$ și $BO = 5$, deci $AO = BO$. *Barem: 2p, 3p.*

### 6. Aria triunghiului dreptunghic în $A$, $AB = 4$, $AC = 3$

$\mathcal A = \dfrac{4\cdot3}{2} = 6$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 2\\ 1 & 1\end{pmatrix}$

#### a) $\det A = -1$

$1\cdot1 - 2\cdot1 = -1$. *Barem: 3p, 2p.*

#### b) $A\cdot A - 2A = I_2$

$$A\cdot A = \begin{pmatrix} 3 & 4\\ 2 & 3\end{pmatrix}, \qquad A\cdot A - 2A = \begin{pmatrix} 3 - 2 & 4 - 4\\ 2 - 2 & 3 - 2\end{pmatrix} = I_2.$$

*Barem: 3p, 2p.*

#### c) $x$ cu $A\cdot B = I_2$, $B = \begin{pmatrix} -1 & x\\ x - 1 & -1\end{pmatrix}$

$$A\cdot B = \begin{pmatrix} -1 + 2(x - 1) & x - 2\\ -1 + x - 1 & x - 1\end{pmatrix} = \begin{pmatrix} 2x - 3 & x - 2\\ x - 2 & x - 1\end{pmatrix} = I_2 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 2. $f = X^3 + 5X^2 - 4$

#### a) $f(1) = 2$

$1 + 5 - 4 = 2$. *Barem: 3p, 2p.*

#### b) Câtul și restul împărțirii la $X + 1$

Horner cu $-1$: coeficienții $1, 5, 0, -4$ devin $1,\ 4,\ -4,\ 0$.

**Răspuns:** câtul $X^2 + 4X - 4$, restul $0$. *Barem: 3p, 2p.*

#### c) $\dfrac{x_2 + x_3}{x_1} + \dfrac{x_3 + x_1}{x_2} + \dfrac{x_1 + x_2}{x_3} = -3$

Viète: $\sum x_i = -5$, $\sum x_ix_j = 0$, $x_1x_2x_3 = 4$. Cum $x_2 + x_3 = -5 - x_1$ etc.:

$$\sum\frac{-5 - x_i}{x_i} = -5\left(\frac1{x_1} + \frac1{x_2} + \frac1{x_3}\right) - 3 = -5\cdot\frac{0}{4} - 3 = -3. \ \blacksquare$$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 3x - x^3$

#### a) $f'(x) = 3(1 - x^2)$

$f'(x) = 3 - 3x^2$. *Barem: 2p, 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{\ln x}{f(x)} = 0$

L'Hospital ($\frac{\infty}{-\infty}$):

$$\lim_{x\to+\infty}\frac{1/x}{3 - 3x^2} = 0.$$

*Barem: 3p, 2p.*

#### c) Tangenta în $x = 1$

$f(1) = 2$, $f'(1) = 0$: tangenta orizontală $y = 2$. *Barem: 2p, 3p.*

### 2. $f(x) = x^3 - x^2 + x - 1$

#### a) $\displaystyle\int_{-1}^1(f(x) + x^2 - x + 1)\,dx = 0$

Integrandul este $x^3$: $\dfrac{x^4}{4}\Big|_{-1}^1 = \dfrac14 - \dfrac14 = 0$. *Barem: 3p, 2p.*

#### b) $F(x) = \dfrac{x^4}{4} - \dfrac{x^3}{3} + \dfrac{x^2}{2} - x$ este primitivă a lui $f$

$F'(x) = x^3 - x^2 + x - 1 = f(x)$. *Barem: 3p, 2p.*

#### c) Volumul pentru $g(x) = \dfrac{f(x)}{x^2 + 1}$, $x \in [1, 2]$

$f(x) = x^2(x - 1) + (x - 1) = (x - 1)(x^2 + 1)$, deci $g(x) = x - 1$:

$$V = \pi\int_1^2(x - 1)^2\,dx = \pi\frac{(x - 1)^3}{3}\Big|_1^2 = \frac\pi3.$$

**Răspuns:** $\dfrac\pi3$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x = 4$ |
| I.4 | $p = \tfrac3{10}$ |
| I.6 | $6$ |
| II.1.c | $x = 2$ |
| II.2.b | cât $X^2 + 4X - 4$, rest $0$ |
| III.1.b | $0$ |
| III.1.c | $y = 2$ |
| III.2.c | $\tfrac\pi3$ |

## Ce merită reținut din varianta 9

- **Expresii simetrice în rădăcini**: înlocuiește $x_2 + x_3 = S - x_1$.
- **Factorizare prin grupare**: $x^3 - x^2 + x - 1 = (x-1)(x^2+1)$.
- **Tangenta într-un punct de extrem** este orizontală ($f' = 0$).

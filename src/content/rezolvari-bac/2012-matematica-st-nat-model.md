Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2012 la Matematică M2** (profil real, științele naturii, și filiera tehnologică). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 5$, $r = 2$; suma primilor 5 termeni

$$S_5 = \frac{(2a_1 + 4r)\cdot5}{2} = \frac{(10 + 8)\cdot5}{2} = 45.$$

(Termenii: $5, 7, 9, 11, 13$.) *Barem: 3p + 2p.*

### 2. $m$ pentru care $x^2 - (m+1)x + m = 0$ are soluții reale egale

Soluții egale $\iff \Delta = 0$:

$$(m+1)^2 - 4m = m^2 - 2m + 1 = (m-1)^2 = 0 \iff m = 1.$$

*Barem: 1p + 2p + 2p.*

### 3. Intersecțiile graficului lui $f(x) = 2^{x+1} - 1$ cu axele

- Cu $Ox$: $2^{x+1} = 1 \iff x = -1$, deci $A(-1, 0)$.
- Cu $Oy$: $f(0) = 2 - 1 = 1$, deci $B(0, 1)$.

*Barem: 2p + 1p + 1p + 1p.*

### 4. Calculați $2C_4^2 - 3A_4^1$

$C_4^2 = 6$, $A_4^1 = 4$, deci $2\cdot6 - 3\cdot4 = 0$.

*Barem: 2p + 2p + 1p.*

### 5. $\vec v_1 = 2\vec i + a\vec j$ și $\vec v_2 = (a+3)\vec i + 2\vec j$ coliniari, $a > 0$

$$\frac{2}{a+3} = \frac{a}{2} \iff a^2 + 3a - 4 = 0 \iff (a-1)(a+4) = 0.$$

Cu $a > 0$: **$a = 1$**. *Barem: 2p + 2p + 1p.*

### 6. Aria triunghiului $MNP$ este $16$, $MN = NP = 8$; $\sin N$

$$\mathcal A = \frac{MN\cdot NP\cdot\sin N}{2} \Rightarrow \sin N = \frac{2\cdot16}{8\cdot8} = \frac12.$$

*Barem: 2p + 2p + 1p.*

## Subiectul al II-lea (30 de puncte)

### 1. Punctele $A_n(n - 1, n + 2)$, $n \in \mathbb N^*$

#### a) Ecuația dreptei $A_1A_2$

$A_1(0, 3)$, $A_2(1, 4)$. Panta: $\dfrac{4-3}{1-0} = 1$, deci $y - 3 = x$.

**Răspuns:** $A_1A_2: y = x + 3$. *Barem: 2p + 2p + 1p.*

#### b) $A_m, A_n, A_p$ sunt coliniare

Pentru orice $n$: $y_n = (n + 2) = (n - 1) + 3 = x_n + 3$, deci toate punctele $A_n$ se află pe dreapta $y = x + 3$ și sunt coliniare. Echivalent:

$$\begin{vmatrix} m-1 & m+2 & 1\\ n-1 & n+2 & 1\\ p-1 & p+2 & 1\end{vmatrix} = 0$$

(scăzând prima coloană din a doua se obține o coloană egală cu $3\times$ a treia). *Barem: 3p + 2p.*

#### c) $M_{2011} = \{n \in \mathbb N^* \mid A_nA_{2011} \le 2\}$

$$A_nA_{2011} = \sqrt{(n - 2011)^2 + (n - 2011)^2} = \sqrt2\,|n - 2011| \le 2 \iff |n - 2011| \le \sqrt2.$$

$n$ fiind natural, $|n - 2011| \in \{0, 1\}$.

**Răspuns:** $M_{2011} = \{2010, 2011, 2012\}$. *Barem: 1p + 1p + 1p + 2p.*

### 2. $f = X^3 + (m-3)X^2 - 17X + (2m + 7)$

#### a) Pentru $m = 4$: câtul și restul împărțirii la $X - 3$

$f = X^3 + X^2 - 17X + 15$. Schema lui Horner cu $3$:

| | $1$ | $1$ | $-17$ | $15$ |
|---|---|---|---|---|
| $3$ | $1$ | $4$ | $-5$ | $0$ |

**Răspuns:** câtul $X^2 + 4X - 5$, restul $0$. *Barem: 1p + 3p + 1p.*

#### b) $f$ divizibil cu $X - 1$

$f(1) = 1 + m - 3 - 17 + 2m + 7 = 3m - 12 = 0 \iff m = 4$.

*Barem: 2p + 1p + 2p.*

#### c) $27^x + 9^x - 17\cdot3^x + 15 = 0$

Cu $y = 3^x > 0$: $y^3 + y^2 - 17y + 15 = 0$ — chiar polinomul de la a): $(y - 3)(y^2 + 4y - 5) = (y-1)(y-3)(y+5) = 0$.

$y = -5$ nu convine; $y = 1 \Rightarrow x = 0$; $y = 3 \Rightarrow x = 1$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 2p + 1p + 1p + 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \begin{cases}\dfrac{-4}{x^2 + 1}, & x \le 0\\[2mm] x - 4, & x > 0\end{cases}$

#### a) Continuitatea în $0$

$\lim\limits_{x\nearrow0}\dfrac{-4}{x^2+1} = -4$, $\lim\limits_{x\searrow0}(x - 4) = -4$, $f(0) = -4$. Deci $f$ este continuă în $0$. *Barem: 3p + 2p.*

#### b) $\lim\limits_{x\to4}\dfrac{f(x)}{16 - x^2}$

Lângă $4$, $f(x) = x - 4$:

$$\lim_{x\to4}\frac{x - 4}{(4 - x)(4 + x)} = \lim_{x\to4}\frac{-1}{4 + x} = -\frac18.$$

*Barem: 3p + 2p.*

#### c) Tangenta în $A(-1, -2)$

Pentru $x < 0$: $f'(x) = \dfrac{8x}{(x^2+1)^2}$, deci $f'(-1) = \dfrac{-8}{4} = -2$; $f(-1) = -2$.

$$y + 2 = -2(x + 1) \iff y = -2x - 4.$$

*Barem: 2p + 2p + 1p.*

### 2. $f_m(x) = 3m^2x^2 + 6mx + 9$

#### a) Primitivele lui $f_0$

$f_0(x) = 9$, deci $\displaystyle\int 9\,dx = 9x + C$.

*Barem: 2p + 3p.*

#### b) Aria sub $f_1$ pe $[0,1]$

$f_1(x) = 3x^2 + 6x + 9 > 0$:

$$\mathcal A = \int_0^1 (3x^2 + 6x + 9)\,dx = (x^3 + 3x^2 + 9x)\Big|_0^1 = 13.$$

*Barem: 2p + 2p + 1p.*

#### c) $\displaystyle\int_1^2\frac{f_2(x) - 9}{x}\cdot e^x\,dx$

$f_2(x) = 12x^2 + 12x + 9$, deci $\dfrac{f_2(x) - 9}{x} = 12x + 12$. Cum $(xe^x)' = (x+1)e^x$:

$$\int_1^2 12(x+1)e^x\,dx = 12xe^x\Big|_1^2 = 24e^2 - 12e.$$

**Răspuns:** $24e^2 - 12e$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $S_5 = 45$ |
| I.2 | $m = 1$ |
| I.3 | $A(-1,0)$, $B(0,1)$ |
| I.4 | $0$ |
| I.5 | $a = 1$ |
| I.6 | $\sin N = \frac12$ |
| II.1.a | $y = x + 3$ |
| II.1.c | $\{2010, 2011, 2012\}$ |
| II.2.a | cât $X^2 + 4X - 5$, rest $0$ |
| II.2.b | $m = 4$ |
| II.2.c | $x \in \{0, 1\}$ |
| III.1.b | $-\frac18$ |
| III.1.c | $y = -2x - 4$ |
| III.2.b | $13$ |
| III.2.c | $24e^2 - 12e$ |

## Ce merită reținut din modelul 2012

- **Rădăcini egale** $\iff \Delta = 0$.
- **Puncte $A_n$ cu coordonate de gradul I în $n$** stau pe aceeași dreaptă — elimină $n$ între coordonate.
- **Ecuații cu $3^x, 9^x, 27^x$**: substituția $y = 3^x$ duce la un polinom deja studiat în subpunctele anterioare.
- **$\int (x+1)e^x\,dx = xe^x + C$**.

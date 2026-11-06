Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $(\sqrt2 - 3)^2 + (\sqrt2 + 3)^2 = 22$

$(\sqrt2 - 3)^2 = 11 - 6\sqrt2$, $(\sqrt2 + 3)^2 = 11 + 6\sqrt2$, suma $22$. *Barem: 2p, 3p.*

### 2. $f(x) = 2x + 2$: $f(-1)f(0)f(1)$

$f(-1) = 0$, deci produsul este $0$. *Barem: 3p, 2p.*

### 3. $\log_3(x^2 - 6x + 6) = \log_3 1$

$x^2 - 6x + 6 = 1 \iff x^2 - 6x + 5 = 0 \iff x \in \{1, 5\}$ (argumentul devine $1 > 0$).

**Răspuns:** $x \in \{1, 5\}$. *Barem: 2p, 3p.*

### 4. Numere pare de trei cifre distincte cu cifre din $\{5, 7, 8, 9\}$

Cifra unităților trebuie să fie $8$; zecile: 3 moduri; sutele: 2 moduri — $6$ numere.

**Răspuns:** 6. *Barem: 2p, 3p.*

### 5. Dreapta $d$ prin $O$, paralelă cu $AB$, $A(-1, 0)$, $B(1, 2)$

$m_{AB} = \dfrac{2 - 0}{1 + 1} = 1$, deci $d: y = x$. *Barem: 3p, 2p.*

### 6. $\sin\left(\dfrac{3\pi}{2} + x\right) - \sin\left(\dfrac{3\pi}{2} - x\right) = 0$

Formulele de reducere: $\sin\left(\frac{3\pi}2 + x\right) = -\cos x$ și $\sin\left(\frac{3\pi}2 - x\right) = -\cos x$, deci diferența este $0$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x & x^2 + x\\ 0 & 1 & 2x\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det(A(1)) = 1$

Superior triunghiulară, cu $1$ pe diagonală. *Barem: 2p, 3p.*

#### b) $A(x)A(y) = A(x + y)$

$$A(x)A(y) = \begin{pmatrix} 1 & x + y & y^2 + y + 2xy + x^2 + x\\ 0 & 1 & 2y + 2x\\ 0 & 0 & 1\end{pmatrix},$$

iar $y^2 + 2xy + x^2 + x + y = (x + y)^2 + (x + y)$. Deci produsul este $A(x + y)$. *Barem: 3p, 2p.*

#### c) $A\left(\frac{1}{1\cdot2}\right)A\left(\frac{1}{2\cdot3}\right)\cdots A\left(\frac{1}{2016\cdot2017}\right) = A\left(\frac{a}{a+1}\right)$

Din b), produsul este $A(S)$ cu suma telescopică

$$S = \sum_{k=1}^{2016}\left(\frac1k - \frac1{k+1}\right) = 1 - \frac1{2017} = \frac{2016}{2017}.$$

$\dfrac{a}{a+1} = \dfrac{2016}{2017} \iff a = 2016$.

**Răspuns:** $a = 2016$. *Barem: 3p, 2p.*

### 2. $f = X^4 + mX^2 + 2$

#### a) $m$ cu $f(1) = 0$

$1 + m + 2 = 0 \iff m = -3$. *Barem: 2p, 3p.*

#### b) $\sum x_i^2 + 2\sum_{i<j} x_ix_j = 0$

Membrul stâng este $(x_1 + x_2 + x_3 + x_4)^2$, iar din Viète suma rădăcinilor este $0$ (coeficientul lui $X^3$ e nul). $\blacksquare$ *Barem: 2p, 3p.*

#### c) Pentru $m = 3$: descompunere în factori ireductibili în $\mathbb R[X]$

$$f = X^4 + 3X^2 + 2 = (X^2 + 1)(X^2 + 2).$$

Ambii factori au gradul 2, coeficienți reali și nu au rădăcini reale, deci sunt ireductibili în $\mathbb R[X]$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x}{\sqrt{x^2 + 1}}$

#### a) $f'(x) = \dfrac{1}{(x^2+1)\sqrt{x^2+1}}$

$$f'(x) = \frac{\sqrt{x^2+1} - x\cdot\frac{x}{\sqrt{x^2+1}}}{x^2 + 1} = \frac{x^2 + 1 - x^2}{(x^2+1)\sqrt{x^2+1}}.$$

*Barem: 3p, 2p.*

#### b) Tangenta în $x = 0$

$f(0) = 0$, $f'(0) = 1$: $y = x$. *Barem: 2p, 3p.*

#### c) $f(x) = a$ are soluție unică pentru $a \in (-1, 1)$

$f' > 0$, deci $f$ e strict crescătoare (injectivă). $\lim\limits_{x\to-\infty} f(x) = -1$, $\lim\limits_{x\to+\infty} f(x) = 1$ (de ex. $f(x) = \frac{x}{|x|\sqrt{1 + 1/x^2}}$). Fiind continuă, $\operatorname{Im} f = (-1, 1)$, deci pentru orice $a \in (-1,1)$ ecuația are exact o soluție. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = e^x(x - 1)$

#### a) $\displaystyle\int_0^2 f(x)e^{-x}\,dx = 0$

$$\int_0^2(x - 1)\,dx = \left(\frac{x^2}{2} - x\right)\Big|_0^2 = 2 - 2 = 0.$$

*Barem: 3p, 2p.*

#### b) Aria între grafic, $Ox$, $x = 1$, $x = 2$ este $e$

Pe $[1,2]$, $f \ge 0$. Primitivă: $\big((x - 2)e^x\big)' = (x - 1)e^x$.

$$\mathcal A = (x - 2)e^x\Big|_1^2 = 0 - (-e) = e.$$

*Barem: 3p, 2p.*

#### c) $\lim\limits_{n\to\infty}\displaystyle\int_{-n}^1(f(x) + e^x)\,dx = 0$

$f(x) + e^x = xe^x$, cu primitiva $(x - 1)e^x$:

$$\int_{-n}^1 xe^x\,dx = 0 - (-n - 1)e^{-n} = \frac{n + 1}{e^n} \xrightarrow[n\to\infty]{} 0.$$

*Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $0$ |
| I.3 | $x \in \{1, 5\}$ |
| I.4 | 6 |
| I.5 | $y = x$ |
| II.1.c | $a = 2016$ |
| II.2.a | $m = -3$ |
| II.2.c | $(X^2 + 1)(X^2 + 2)$ |
| III.1.b | $y = x$ |

## Ce merită reținut din varianta 8

- **$\frac{1}{k(k+1)} = \frac1k - \frac1{k+1}$** — suma telescopică clasică.
- **Ireductibil în $\mathbb R[X]$**: polinoamele de gradul 2 fără rădăcini reale.
- **Soluție unică**: funcție continuă, strict monotonă, cu imaginea calculată din limite.

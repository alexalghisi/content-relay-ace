Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2022 la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $N = \log_2 24 - \log_2 12 + 3$ este pătratul unui număr natural

$$N = \log_2\frac{24}{12} + 3 = \log_2 2 + 3 = 1 + 3 = 4 = 2^2.$$

*Barem: 3p + 2p.*

### 2. $a$ real cu $A(a, a^2) \in G_f$, $f(x) = 2x - 1$

$$f(a) = a^2 \iff 2a - 1 = a^2 \iff (a - 1)^2 = 0 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p + 2p.*

### 3. Ecuația $\sqrt{x^2 - 2x - 2} = x - 2$

Condiție: $x - 2 \ge 0$. Ridicăm la pătrat:

$$x^2 - 2x - 2 = x^2 - 4x + 4 \iff 2x = 6 \iff x = 3.$$

Verificare: $\sqrt{9 - 6 - 2} = 1 = 3 - 2$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un element din $A = \{1!, 2!, \dots, 10!\}$ să fie divizibil cu 9

**10 cazuri posibile.** $n!$ e divizibil cu $9$ dacă conține factorul $3$ de două ori, adică $n \ge 6$ ($6! = 720 = 9\cdot80$; $5! = 120$ nu e divizibil cu 9). Favorabile: $6!, 7!, 8!, 9!, 10!$ — **5 cazuri**.

$$p = \frac{5}{10} = \frac12.$$

*Barem: 2p + 2p + 1p.*

### 5. $D$ mijlocul lui $BC$, $\overrightarrow{AE} = \overrightarrow{FD}$; arătați că $2\left(\overrightarrow{EB} + \overrightarrow{FC}\right) = \overrightarrow{AB} + \overrightarrow{AC}$

$$\overrightarrow{EB} + \overrightarrow{FC} = \overrightarrow{EA} + \overrightarrow{AB} + \overrightarrow{FD} + \overrightarrow{DC} = \overrightarrow{AB} + \overrightarrow{DC},$$

deoarece $\overrightarrow{EA} + \overrightarrow{FD} = -\overrightarrow{AE} + \overrightarrow{FD} = \vec 0$. Cum $D$ e mijlocul lui $BC$, $2\overrightarrow{DC} = \overrightarrow{BC}$:

$$2\left(\overrightarrow{EB} + \overrightarrow{FC}\right) = 2\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AB} + \overrightarrow{AC}.\ \blacksquare$$

*Barem: 2p + 3p.*

### 6. $(\sin x + \cos x)^2 - (\sin x - \cos x)^2 = 2\cos\left(\frac\pi2 - 2x\right)$

Diferența de pătrate (sau dezvoltare directă) dă $4\sin x\cos x = 2\sin 2x$, iar $\sin 2x = \cos\left(\frac\pi2 - 2x\right)$. $\blacksquare$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x^2 & 1\\ x - 1 & 1\end{pmatrix}$

#### a) $\det A(-1) = 3$

$$A(-1) = \begin{pmatrix}1 & 1\\ -2 & 1\end{pmatrix},\quad \det A(-1) = 1 + 2 = 3.$$

*Barem: 2p + 3p.*

#### b) $A(x)$ este inversabilă pentru orice $x$ real

$$\det A(x) = x^2 - (x - 1) = x^2 - x + 1 = \left(x - \tfrac12\right)^2 + \tfrac34 > 0.$$

Determinantul este nenul, deci $A(x)$ e inversabilă. *Barem: 3p + 2p.*

#### c) $X$ cu $A(1)\cdot X\cdot A(1) = A(2)$

$A(1) = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, $A(1)^{-1} = \begin{pmatrix}1&-1\\0&1\end{pmatrix}$, $A(2) = \begin{pmatrix}4&1\\1&1\end{pmatrix}$.

$$X = A(1)^{-1}A(2)A(1)^{-1} = \begin{pmatrix}3&0\\1&1\end{pmatrix}\begin{pmatrix}1&-1\\0&1\end{pmatrix} = \begin{pmatrix}3&-3\\1&0\end{pmatrix}.$$

*Barem: 2p inversa, 3p matricea $X$.*

### 2. Legea asociativă $x\circ y = xy - \sqrt2(x + y - 1) + 2$, cu element neutru

#### a) $\sqrt2\circ0 = \sqrt2$

$$\sqrt2\circ0 = 0 - \sqrt2(\sqrt2 - 1) + 2 = -2 + \sqrt2 + 2 = \sqrt2.$$

*Barem: 3p + 2p.*

#### b) $x$ cu $(x - \sqrt2)\circ(x + \sqrt2) = x$

$$x^2 - 2 - \sqrt2(2x - 1) + 2 = x \iff x^2 - (2\sqrt2 + 1)x + \sqrt2 = 0.$$

$\Delta = (2\sqrt2 + 1)^2 - 4\sqrt2 = 9$, deci $x = \dfrac{2\sqrt2 + 1 \pm 3}{2}$.

**Răspuns:** $x \in \{\sqrt2 - 1,\ \sqrt2 + 2\}$. *Barem: 3p + 2p.*

#### c) Numerele raționale al căror simetric este rațional

Legea se scrie $x\circ y = (x - \sqrt2)(y - \sqrt2) + \sqrt2$, deci neutrul este $e = \sqrt2 + 1$. $a'$ este simetricul lui $a$ dacă

$$aa' - \sqrt2(a + a' - 1) + 2 = \sqrt2 + 1 \iff (aa' + 1) - \sqrt2(a + a') = 0.$$

Cu $a, a' \in \mathbb Q$ și $\sqrt2$ irațional, trebuie $a + a' = 0$ și $aa' = -1$, deci $-a^2 = -1$, $a = \pm1$ (cu $a' = \mp1$, raționale).

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 2p neutrul, 3p finalizarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to(0,\infty)$, $f(x) = x\left(1 - \frac1x\ln(x^2+1)\right) = x - \ln(x^2+1)$

#### a) $f'(x) = \dfrac{(x-1)^2}{x^2+1}$

$$f'(x) = 1 - \frac{2x}{x^2+1} = \frac{x^2 - 2x + 1}{x^2+1} = \frac{(x-1)^2}{x^2+1}.$$

*Barem: 3p + 2p.*

#### b) $n \in \mathbb N^*$ cu tangenta în $A(n, f(n))$ paralelă cu $y = \frac15x + 1$

Condiția: $f'(n) = \frac15$:

$$5(n-1)^2 = n^2 + 1 \iff 2n^2 - 5n + 2 = 0 \iff n \in \left\{\tfrac12, 2\right\}.$$

**Răspuns:** $n = 2$. *Barem: 3p + 2p.*

#### c) $f$ este bijectivă

$f'(x) > 0$ pe $(0,1)$ și pe $(1,\infty)$, $f'(1) = 0$ și $f$ continuă, deci $f$ este strict crescătoare pe $(0,\infty)$ — injectivă.

$\lim\limits_{x\to0} f(x) = 0 - \ln 1 = 0$, $\lim\limits_{x\to\infty}f(x) = \lim x\left(1 - \frac{\ln(x^2+1)}{x}\right) = +\infty$. Fiind continuă și strict crescătoare, $f\big((0,\infty)\big) = (0, \infty)$ — surjectivă. Deci $f$ este bijectivă. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = \frac1{x^3} - \frac{2\ln x}{x^3}$, cu primitiva $F(x) = \frac{\ln x}{x^2}$

#### a) $\displaystyle\int_1^e x^2\left(f(x) + \frac{2\ln x}{x^3}\right)dx = 1$

$$\int_1^e x^2\cdot\frac1{x^3}dx = \int_1^e\frac1x dx = \ln x\Big|_1^e = 1.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_1^{\sqrt5} x f(x^2+3)\,dx = -\frac{5\ln2}{128}$

Cu $(x^2 + 3)' = 2x$:

$$\int_1^{\sqrt5}xf(x^2+3)dx = \frac12F(x^2+3)\Big|_1^{\sqrt5} = \frac12\big(F(8) - F(4)\big) = \frac12\left(\frac{3\ln2}{64} - \frac{2\ln 2}{16}\right) = \frac12\cdot\frac{-5\ln2}{64} = -\frac{5\ln2}{128}.$$

*Barem: 3p + 2p.*

#### c) $a$ cu $\displaystyle\int_e^{e^2}xF(x)\,dx = \frac{a^2 - 1}{2}$

$$\int_e^{e^2}\frac{\ln x}{x}dx = \frac{\ln^2x}{2}\Big|_e^{e^2} = \frac{4 - 1}{2} = \frac32.$$

$\dfrac{a^2-1}{2} = \dfrac32 \iff a^2 = 4$.

**Răspuns:** $a \in \{-2, 2\}$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x = 3$ |
| I.4 | $p = \frac12$ |
| II.1.c | $X = \begin{pmatrix}3&-3\\1&0\end{pmatrix}$ |
| II.2.b | $x \in \{\sqrt2-1, \sqrt2+2\}$ |
| II.2.c | $a \in \{-1,1\}$ |
| III.1.b | $n = 2$ |
| III.2.c | $a \in \{-2, 2\}$ |

## Ce merită reținut din model

- **Ecuații iraționale:** pune condiția $x - 2 \ge 0$ și verifică soluția la final.
- **Egalitatea $p + q\sqrt2 = 0$ cu $p, q$ raționale** impune $p = q = 0$.
- **Integrale cu $f(x^2+3)$:** recunoaște $2x$ ca derivata argumentului și folosește primitiva dată.

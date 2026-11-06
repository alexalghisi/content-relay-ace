Rezolvarea completă a subiectului de **Simulare Bacalaureat 2018 la Matematică M_șt-nat** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Conjugatul lui $z = (1 - i)(2 + i) + 5i$

$$(1 - i)(2 + i) = 2 + i - 2i - i^2 = 3 - i \Rightarrow z = 3 - i + 5i = 3 + 4i.$$

**Răspuns:** $\overline z = 3 - 4i$. *Barem: 3p $z = 3 + 4i$, 2p conjugatul.*

### 2. Numerele naturale $n$ cu $n^2 + n - 12 < 0$

$n^2 + n - 12 = (n + 4)(n - 3)$. Pentru $n$ natural, $n + 4 > 0$, deci inecuația devine $n - 3 < 0$, adică $n < 3$.

**Răspuns:** $n \in \{0, 1, 2\}$. *Barem: 2p $n < 3$, 3p soluțiile.*

### 3. $\lg(x + 1) = 2\lg(x - 5)$

Condiții: $x > 5$. Cum $2\lg(x-5) = \lg(x-5)^2$:

$$x + 1 = (x - 5)^2 \iff x^2 - 11x + 24 = 0 \iff (x - 3)(x - 8) = 0.$$

$x = 3$ nu convine ($3 < 5$), $x = 8$ convine: $\lg 9 = 2\lg 3$ ✔.

**Răspuns:** $x = 8$. *Barem: 2p ecuația, 3p soluția.*

### 4. Mulțimea cu $45$ de submulțimi de două elemente

O mulțime cu $n$ elemente are $C_n^2 = \dfrac{n(n-1)}{2}$ submulțimi cu două elemente:

$$\frac{n(n-1)}{2} = 45 \iff n^2 - n - 90 = 0 \iff (n - 10)(n + 9) = 0 \Rightarrow n = 10.$$

**Răspuns:** 10 elemente. *Barem: 2p $C_n^2$, 3p $n = 10$.*

### 5. Dreptunghiul $ABCD$, $\vec v = \vec{AB} + \vec{AC} + \vec{AD}$, $|\vec v| = 20$; lungimea lui $\vec{BD}$

Regula paralelogramului: $\vec{AB} + \vec{AD} = \vec{AC}$, deci $\vec v = 2\vec{AC}$ și $AC = 10$. Diagonalele dreptunghiului sunt egale: $BD = AC = 10$.

**Răspuns:** $|\vec{BD}| = 10$. *Barem: 3p $AC = 10$, 2p $BD$.*

### 6. Dacă $\sin x + \cos x = \sqrt2$, atunci $\operatorname{tg} x + \operatorname{ctg} x = 2$

Ridicăm la pătrat: $1 + 2\sin x\cos x = 2$, deci $\sin x\cos x = \dfrac12$ (în particular $\sin x, \cos x \ne 0$).

$$\operatorname{tg} x + \operatorname{ctg} x = \frac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \frac{1}{1/2} = 2.$$

*Barem: 2p $\sin x\cos x = \frac12$, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & 0 & 2x\\ -2x & 1 & -2x^2\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det(A(2))$

$$\det(A(2)) = \begin{vmatrix} 1 & 0 & 4\\ -4 & 1 & -8\\ 0 & 0 & 1\end{vmatrix} = 1 + 0 + 0 - 0 - 0 - 0 = 1.$$

(Dezvoltând după linia a treia, $\det(A(x)) = 1$ pentru orice $x$.) **Răspuns:** $1$. *Barem: 2p scrierea, 3p calculul.*

#### b) $a$ cu $\det(A(a) + aA(0)) = 8$

$A(0) = I_3$, deci

$$\det(A(a) + aI_3) = \begin{vmatrix} a+1 & 0 & 2a\\ -2a & a+1 & -2a^2\\ 0 & 0 & a+1\end{vmatrix} = (a+1)\begin{vmatrix} a+1 & 0\\ -2a & a+1\end{vmatrix} = (a+1)^3.$$

$(a + 1)^3 = 8 = 2^3 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p determinantul, 2p valoarea.*

#### c) $m < n$ naturale cu $\det((m+n)A(x)) = \det(mA(x)) + \det(nA(x)) + 18$

Pentru matrice de ordin 3, $\det(kA(x)) = k^3\det(A(x)) = k^3$. Relația devine:

$$(m + n)^3 = m^3 + n^3 + 18 \iff 3mn(m+n) = 18 \iff mn(m+n) = 6.$$

Cu $m < n$ naturale: $m = 0$ dă $0$; $m = 1$ dă $n(n+1) = 6$, deci $n = 2$; pentru $m \ge 2$, $n \ge 3$ produsul depășește 6.

**Răspuns:** $m = 1$, $n = 2$. *Barem: 2p relația, 3p soluția.*

### 2. Pe $\mathbb Z_7$: $x * y = xy + \hat6x + \hat6y + \hat2$

#### a) $x * y = (x + \hat6)(y + \hat6) + \hat1$

$$(x + \hat6)(y + \hat6) + \hat1 = xy + \hat6x + \hat6y + \widehat{36} + \hat1 = xy + \hat6x + \hat6y + \hat2,$$

deoarece $36 + 1 = 37 = 5\cdot 7 + 2$. *Barem: 3p, 2p.*

#### b) $x * \hat1 = \hat1 * x = \hat1$

$\hat1 + \hat6 = \hat7 = \hat0$, deci $x * \hat1 = (x + \hat6)\cdot\hat0 + \hat1 = \hat1$ și analog $\hat1 * x = \hat0\cdot(x + \hat6) + \hat1 = \hat1$. *Barem: 2p, 3p.*

#### c) $\hat0 * \hat1 * \hat2 * \hat3 * \hat4 * \hat5 * \hat6$

Folosind asociativitatea și b): $\hat0 * \hat1 = \hat1$, apoi $\hat1 * \hat2 = \hat1$, …, $\hat1 * \hat6 = \hat1$ ($\hat1$ este element „absorbant”).

**Răspuns:** $\hat1$. *Barem: 3p gruparea, 2p rezultatul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x(x^2 - 6x + 9)$

#### a) $f'(x) = e^x(x^2 - 4x + 3)$

$$f'(x) = e^x(x^2 - 6x + 9) + e^x(2x - 6) = e^x(x^2 - 4x + 3).$$

*Barem: 2p regula produsului, 3p finalizarea.*

#### b) Punctele de extrem

$f'(x) = e^x(x - 1)(x - 3) = 0 \iff x \in \{1, 3\}$.

| $x$ | $-\infty$ … $1$ … $3$ … $+\infty$ |
|---|---|
| $f'$ | $+ \quad 0 \quad - \quad 0 \quad +$ |
| $f$ | $\nearrow$ max $\searrow$ min $\nearrow$ |

**Răspuns:** $x = 1$ (punct de maxim) și $x = 3$ (punct de minim). *Barem: 2p rădăcinile, 3p semnul și concluzia.*

#### c) $(x - 3)^2 \le 4e^{1-x}$ pentru $x \in (-\infty, 3]$

Din b), $f$ crește pe $(-\infty, 1]$ și descrește pe $[1, 3]$, deci $f(x) \le f(1) = 4e$ pe $(-\infty, 3]$:

$$e^x(x-3)^2 \le 4e \iff (x - 3)^2 \le 4e^{1-x}. \ \blacksquare$$

*Barem: 3p maximul, 2p finalizarea.*

### 2. $f(x) = \begin{cases} 3x^2 - 4x + 1, & x < 1\\ \dfrac{\ln x}{\sqrt x}, & x \ge 1\end{cases}$

#### a) $f$ admite primitive

$\lim\limits_{x\nearrow 1}(3x^2 - 4x + 1) = 0$, $\lim\limits_{x\searrow 1}\dfrac{\ln x}{\sqrt x} = 0 = f(1)$, deci $f$ e continuă în $1$; pe celelalte intervale este continuă (operații cu funcții elementare). Fiind continuă pe $\mathbb R$, $f$ admite primitive. *Barem: 3p continuitatea în 1, 2p concluzia.*

#### b) $\displaystyle\int_{-1}^e f(x)\,dx = 2(4 - \sqrt e)$

$$\int_{-1}^1(3x^2 - 4x + 1)\,dx = (x^3 - 2x^2 + x)\Big|_{-1}^1 = 0 - (-4) = 4.$$

Pentru a doua parte, $\displaystyle\int \frac{\ln x}{\sqrt x}dx$ prin părți ($u = \ln x$, $v = 2\sqrt x$): $2\sqrt x\ln x - \displaystyle\int\frac{2}{\sqrt x}dx = 2\sqrt x\ln x - 4\sqrt x$.

$$\int_1^e \frac{\ln x}{\sqrt x}dx = (2\sqrt e - 4\sqrt e) - (0 - 4) = 4 - 2\sqrt e.$$

Total: $4 + 4 - 2\sqrt e = 2(4 - \sqrt e)$. *Barem: 2p împărțirea integralei, 3p calculul.*

#### c) $n$ natural cu $\displaystyle\int_{e^n}^{e^{n+1}} f^2(x)\,dx = \frac73$

Pe $[e^n, e^{n+1}] \subset [1, \infty)$: $f^2(x) = \dfrac{\ln^2 x}{x} = (\ln x)'\ln^2 x$.

$$\int_{e^n}^{e^{n+1}}\frac{\ln^2 x}{x}dx = \frac{\ln^3 x}{3}\Big|_{e^n}^{e^{n+1}} = \frac{(n+1)^3 - n^3}{3} = \frac{3n^2 + 3n + 1}{3}.$$

$3n^2 + 3n + 1 = 7 \iff n^2 + n - 2 = 0 \iff (n - 1)(n + 2) = 0$, iar $n$ natural.

**Răspuns:** $n = 1$. *Barem: 3p integrala, 2p valoarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $\overline z = 3 - 4i$ |
| I.2 | $n \in \{0, 1, 2\}$ |
| I.3 | $x = 8$ |
| I.4 | 10 elemente |
| I.5 | $BD = 10$ |
| II.1.a | $1$ |
| II.1.b | $a = 1$ |
| II.1.c | $m = 1$, $n = 2$ |
| II.2.c | $\hat1$ |
| III.1.b | $x = 1$ (max), $x = 3$ (min) |
| III.2.c | $n = 1$ |

## Ce merită reținut din simulare

- **$\det(kA) = k^n\det A$** pentru matrice de ordin $n$ — esențial la II.1.c.
- **Element absorbant**: dacă $\hat1 * x = \hat1$, orice compunere care îl conține dă $\hat1$.
- **Inegalități din extreme**: maximul global al lui $f$ pe un interval dă direct inegalitatea cerută.
- **Funcții pe ramuri**: continuitatea în punctul de racord garantează existența primitivelor.

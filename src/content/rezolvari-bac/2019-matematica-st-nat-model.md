Rezolvarea completă a subiectului de **Bacalaureat 2019 la Matematică M_șt-nat**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = \left(\frac{1}{1 - i} - \frac{1}{1 + i}\right)^2$ este întreg

$$\frac{1}{1-i} - \frac{1}{1+i} = \frac{(1 + i) - (1 - i)}{1 - i^2} = \frac{2i}{2} = i,\qquad a = i^2 = -1 \in \mathbb Z.\ \blacksquare$$

*Barem: 3p, 2p.*

### 2. Cel mai mare $m \in \mathbb N$ pentru care $x^2 - 7x + m = 0$ are soluții reale

$\Delta = 49 - 4m \ge 0 \iff m \le \frac{49}{4} = 12{,}25$.

**Răspuns:** $m = 12$. *Barem: 2p, 3p.*

### 3. Ecuația $3^x + 3^{x+1} + 3^{x+2} = 117$

$3^x(1 + 3 + 9) = 117 \iff 13\cdot 3^x = 117 \iff 3^x = 9 \iff x = 2$. *Barem: 3p, 2p.*

### 4. Mulțimea are exact 36 de submulțimi cu două elemente

$C_n^2 = \frac{n(n-1)}{2} = 36 \iff n(n - 1) = 72 \iff n = 9$.

**Răspuns:** $9$ elemente. *Barem: 3p, 2p.*

### 5. Mediana din $C$ în $\triangle ABC$, $A(-1,1)$, $B(3,-3)$, $C(3,0)$

Mijlocul lui $AB$: $M(1, -1)$. Panta $CM$: $\frac{0 + 1}{3 - 1} = \frac12$:

$$y + 1 = \tfrac12(x - 1) \iff y = \tfrac12x - \tfrac32.$$

*Barem: 2p, 3p.*

### 6. $x \in \left(0, \frac\pi2\right)$ cu $\cos x\sin(\pi - x) - \sin x\cos(\pi + x) = 1$

$\sin(\pi - x) = \sin x$, $\cos(\pi + x) = -\cos x$, deci $2\sin x\cos x = 1 \iff \sin 2x = 1$. Cu $2x \in (0, \pi)$: $2x = \frac\pi2$.

**Răspuns:** $x = \dfrac\pi4$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}2 & a & 1\\ 3 & 2a - 1 & 1\\ a - 3 & a & 1\end{pmatrix}$, sistemul cu termenii liberi $1, 1, 2a - 1$

**a)** $A(0) = \begin{pmatrix}2 & 0 & 1\\ 3 & -1 & 1\\ -3 & 0 & 1\end{pmatrix}$; Sarrus: $-2 + 0 + 0 - 3 - 0 - 0 = -5$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** Scădem linia 1 din liniile 2 și 3:

$$\det A(a) = \begin{vmatrix}2 & a & 1\\ 1 & a - 1 & 0\\ a - 5 & 0 & 0\end{vmatrix} = 1\cdot\big(1\cdot 0 - (a - 1)(a - 5)\big) = -(a - 1)(a - 5) = -a^2 + 6a - 5.$$

**Răspuns:** $a \in \{1, 5\}$. *Barem: 3p, 2p.*

**c)** Pentru $a = 1$: $\begin{cases}2x + y + z = 1\\ 3x + y + z = 1\\ -2x + y + z = 1\end{cases}$. Scăzând primele două ecuații: $x_0 = 0$, deci $y_0 + z_0 = 1$.

$x_0^2 = y_0z_0 \Rightarrow y_0z_0 = 0$: $(y_0, z_0) \in \{(1, 0), (0, 1)\}$.

**Răspuns:** $(0, 1, 0)$ și $(0, 0, 1)$. *Barem: 3p, 2p.*

### 2. $x * y = 5xy - 5(x + y) + 6$

**a)** $5xy - 5x - 5y + 5 + 1 = 5(x - 1)(y - 1) + 1$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $x * x = 5(x - 1)^2 + 1$, $x * x * x = 25(x - 1)^3 + 1 < 26 \iff (x - 1)^3 < 1 \iff x < 2$.

**Răspuns:** $x \in (-\infty, 2)$. *Barem: 2p, 3p.*

**c)** $\frac1{n^2} * \frac1{(n+1)^2} * \frac1{(n+2)^2} = 25\prod_{k=n}^{n+2}\left(\frac1{k^2} - 1\right) + 1$. Cum $\frac1{k^2} - 1 = -\frac{(k-1)(k+1)}{k^2}$, produsul telescopează:

$$\prod_{k=n}^{n+2}\left(-\frac{(k-1)(k+1)}{k^2}\right) = -\frac{(n-1)(n+1)}{n^2}\cdot\frac{n(n+2)}{(n+1)^2}\cdot\frac{(n+1)(n+3)}{(n+2)^2} = -\frac{(n-1)(n+3)}{n(n+2)}.$$

Ecuația: $-25\frac{(n-1)(n+3)}{n(n+2)} + 1 = -19 \iff \frac{(n-1)(n+3)}{n(n+2)} = \frac45 \iff 5n^2 + 10n - 15 = 4n^2 + 8n \iff n^2 + 2n - 15 = 0$, deci $n = 3$.

**Răspuns:** $n = 3$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \ln x - \dfrac{2(x - 1)}{x}$, $x > 0$

**a)** $\frac{2(x-1)}{x} = 2 - \frac2x$, deci $f'(x) = \frac1x - \frac{2}{x^2} = \frac{x - 2}{x^2}$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Tangenta perpendiculară pe $y = x$ (panta $1$) $\iff f'(a) = -1$:

$\frac{a - 2}{a^2} = -1 \iff a^2 + a - 2 = 0 \iff a \in \{-2, 1\}$; cum $a > 0$: $a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

**c)** $f' < 0$ pe $(0, 2)$, deci $f$ e strict descrescătoare acolo. Cum $1 < \frac\pi2 < 2$: $f\left(\frac\pi2\right) < f(1) = 0$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f(x) = x^2 + 1$

**a)** $\int_0^3(x^2 + 1)\,dx = 9 + 3 = 12$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $g(x) = \frac{x}{x^2 + 1} \ge 0$ pe $[0, 1]$:

$$\mathcal A = \frac12\ln(x^2 + 1)\Big|_0^1 = \frac12\ln 2.$$

**Răspuns:** $\frac12\ln 2$. *Barem: 3p, 2p.*

**c)** Fie $h(x) = \int_0^x e^{t^2+1}dt - x$. Atunci $h'(x) = e^{x^2+1} - 1 > 0$ (exponentul e $\ge 1$), deci $h$ este strict crescătoare, deci injectivă. Cum $h(0) = 0$, $x = 0$ este singura soluție a ecuației $h(x) = 0$. $\blacksquare$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = -1$ |
| I.2 | $m = 12$ |
| I.3 | $x = 2$ |
| I.4 | $9$ |
| I.5 | $y = \tfrac12x - \tfrac32$ |
| I.6 | $x = \tfrac\pi4$ |
| II.1.b | $a \in \{1, 5\}$ |
| II.1.c | $(0,1,0)$, $(0,0,1)$ |
| II.2.b | $x < 2$ |
| II.2.c | $n = 3$ |
| III.1.b | $a = 1$ |
| III.2.b | $\tfrac12\ln 2$ |

## Ce merită reținut din acest model

- **Produse telescopice:** $\frac1{k^2} - 1 = -\frac{(k-1)(k+1)}{k^2}$.
- **Unicitatea soluției** unei ecuații: funcție strict monotonă + o soluție evidentă.
- **Comparații de valori ale funcției:** folosește monotonia și un punct unde valoarea e cunoscută.

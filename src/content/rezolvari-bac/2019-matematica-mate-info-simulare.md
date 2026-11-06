Rezolvarea completă a subiectului de la **simularea Bacalaureatului 2019 (clasa a XII-a) la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Modulul lui $z = (2 - i)(3 + 2i) - 4(1 + i)$

$(2 - i)(3 + 2i) = 6 + 4i - 3i - 2i^2 = 8 + i$, deci $z = 8 + i - 4 - 4i = 4 - 3i$ și $|z| = \sqrt{16 + 9} = 5$.

**Răspuns:** $|z| = 5$. *Barem: 3p, 2p.*

### 2. $x^2 - (2m+1)x + m(m-1) \ge 0$ pentru orice $x$

Coeficientul dominant e pozitiv, deci condiția este $\Delta \le 0$:

$$\Delta = (2m+1)^2 - 4m(m - 1) = 8m + 1 \le 0 \iff m \le -\tfrac18.$$

**Răspuns:** $m \in \left(-\infty, -\frac18\right]$. *Barem: 2p, 3p.*

### 3. Ecuația $2\log_2 x - \log_x 2 = 1$

Condiții: $x > 0$, $x \ne 1$. Cu $t = \log_2 x$ și $\log_x 2 = \frac1t$:

$$2t - \frac1t = 1 \iff 2t^2 - t - 1 = 0 \iff (2t + 1)(t - 1) = 0.$$

$t = -\frac12 \Rightarrow x = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$; $t = 1 \Rightarrow x = 2$.

**Răspuns:** $x \in \left\{\frac{\sqrt2}{2}, 2\right\}$. *Barem: 3p, 2p.*

### 4. Mulțimea $A$ are exact 16 submulțimi cu cel mult două elemente

Cu $n = |A|$: $C_n^0 + C_n^1 + C_n^2 = 1 + n + \frac{n(n-1)}{2} = 16 \iff n^2 + n - 30 = 0 \iff n = 5$ (sau $-6$, exclus).

**Răspuns:** $5$ elemente. *Barem: 3p, 2p.*

### 5. $M$ mijlocul lui $BC$, $N$ mijlocul lui $AM$: $2\overrightarrow{AN} + \overrightarrow{BN} + \overrightarrow{CN} = \vec 0$

$M$ mijlocul lui $BC$: $\overrightarrow{BN} + \overrightarrow{CN} = 2\overrightarrow{MN}$. $N$ mijlocul lui $AM$: $\overrightarrow{MN} = \overrightarrow{NA}$. Atunci

$$2\overrightarrow{AN} + 2\overrightarrow{NA} = \vec 0.\ \blacksquare$$

*Barem: 2p, 3p.*

### 6. $x \in \left(\frac\pi2, \pi\right)$ cu $1 + 3\cos x = \cos 2x$

$\cos 2x = 2\cos^2x - 1$: $2\cos^2x - 3\cos x - 2 = 0 \iff (\cos x - 2)(2\cos x + 1) = 0$. $\cos x = 2$ e imposibil, deci $\cos x = -\frac12$; în cadranul II: $x = \frac{2\pi}{3}$.

**Răspuns:** $x = \dfrac{2\pi}{3}$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1 & 1 & 1\\ 1 & 2 & a\\ 2 & a & 4\end{pmatrix}$, sistemul $\begin{cases}x + y + z = 1\\ x + 2y + az = 2\\ 2x + ay + 4z = 3\end{cases}$

**a)** Sarrus: $\det A(a) = 8 + a + 2a - 4 - a^2 - 4 = -a^2 + 3a = a(3 - a)$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** Pentru $a = 0$: $\det A(0) = 0$, minorul principal $\begin{vmatrix}1&1\\1&2\end{vmatrix} = 1 \ne 0$, iar minorul caracteristic

$$\begin{vmatrix}1 & 1 & 1\\ 1 & 2 & 2\\ 2 & 0 & 3\end{vmatrix} = 3 \ne 0,$$

deci, conform teoremei lui Rouché, sistemul este incompatibil. $\blacksquare$ *Barem: 2p, 3p.*

**c)** Soluție unică $\iff a \notin \{0, 3\}$. Prin regula lui Cramer (sau scăzând ecuațiile) se obține

$$(x_0, y_0, z_0) = \left(1 - \frac2a, \frac1a, \frac1a\right).$$

(Verificare: suma $= 1$ ✔.) Pentru ca $\frac1a$ să fie întreg, cu $a$ întreg: $a \in \{-1, 1\}$; atunci și $x_0$ e întreg.

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 3p, 2p.*

### 2. $x \circ y = x^2y^2 + x^2 + y^2$

**a)** $x^2y^2 + x^2 + y^2 + 1 - 1 = (x^2 + 1)(y^2 + 1) - 1$. $\blacksquare$ *Barem: 2p, 3p.*

**b)** $(a^2 + 1)(b^2 + 1) = 2$. Cu $a, b$ naturali, factorii sunt $\ge 1$, deci unul este $1$ și celălalt $2$: $(a, b) \in \{(1, 0), (0, 1)\}$. *Barem: 2p, 3p.*

**c)** Din a), prin inducție, $\underbrace{1\circ1\circ\dots\circ1}_{n} = (1^2+1)^n - 1 = 2^n - 1$. Arătăm că $\sqrt{2^n - 1} \notin \mathbb N$ pentru $n \ge 2$.

Dacă $2^n - 1 = k^2$, $k$ este impar: $k = 2m + 1$, deci $2^n - 1 = 4m^2 + 4m + 1 \iff 2^{n-1} = 2m^2 + 2m + 1$. Membrul stâng este par ($n \ge 2$), cel drept impar — contradicție. $\blacksquare$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{x^2 + 2x + 2} - x + 1$

**a)** $$f'(x) = \frac{2x + 2}{2\sqrt{x^2+2x+2}} - 1 = \frac{x + 1 - \sqrt{x^2+2x+2}}{\sqrt{x^2+2x+2}}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $m = \lim\limits_{x\to-\infty}\dfrac{f(x)}{x} = \lim\limits_{x\to-\infty}\left(-\sqrt{1 + \frac2x + \frac2{x^2}} - 1 + \frac1x\right) = -2$ (pentru $x < 0$, $\sqrt{x^2} = -x$).

$n = \lim\limits_{x\to-\infty}(f(x) + 2x) = \lim\limits_{x\to-\infty}\left(\sqrt{x^2+2x+2} + x + 1\right) = \lim\limits_{x\to-\infty}\dfrac{1}{\sqrt{x^2+2x+2} - x - 1} = 0$.

**Răspuns:** asimptota oblică spre $-\infty$: $y = -2x$. *Barem: 2p, 3p.*

**c)** $\sqrt{x^2 + 2x + 2} = \sqrt{(x+1)^2 + 1} > |x + 1| \ge x + 1$, deci $f'(x) < 0$: $f$ strict descrescătoare.

$\lim\limits_{x\to-\infty}f(x) = +\infty$, iar $\lim\limits_{x\to+\infty}f(x) = \lim\left(\sqrt{x^2+2x+2} - x\right) + 1 = 1 + 1 = 2$. Fiind continuă: $\mathrm{Im}\,f = (2, +\infty)$.

*Barem: 2p, 3p.*

### 2. $f(x) = x\ln(x + 1)$, $x > -1$

**a)** $$\int_1^2\frac{(3x - 2)f(x)}{\ln(x+1)}dx = \int_1^2(3x^2 - 2x)\,dx = (x^3 - x^2)\Big|_1^2 = 4 - 0 = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

**b)** Prin părți, cu primitiva $\frac{x^2 - 1}{2}$ a lui $x$ (simplifică cu $x + 1$):

$$\int_0^1 x\ln(x+1)\,dx = \frac{x^2 - 1}{2}\ln(x + 1)\Big|_0^1 - \frac12\int_0^1 (x - 1)\,dx = 0 - \frac12\left(\frac12 - 1\right) = \frac14.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Cazul $\frac00$, l'Hospital de două ori (sau folosind limita remarcabilă):

$$\lim_{t\to0}\frac{\int_0^t f(x)\,dx}{t^3} = \lim_{t\to0}\frac{t\ln(t+1)}{3t^2} = \lim_{t\to0}\frac{\ln(1 + t)}{3t} = \frac13.$$

**Răspuns:** $\dfrac13$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $|z| = 5$ |
| I.2 | $m \le -\tfrac18$ |
| I.3 | $x \in \{\tfrac{\sqrt2}2, 2\}$ |
| I.4 | $5$ |
| I.6 | $x = \tfrac{2\pi}3$ |
| II.1.c | $a \in \{-1, 1\}$ |
| II.2.b | $(1,0)$, $(0,1)$ |
| III.1.b | $y = -2x$ |
| III.1.c | $(2, +\infty)$ |
| III.2.a | $4$ |
| III.2.c | $\tfrac13$ |

## Ce merită reținut din simulare

- **Trinom $\ge 0$ pe $\mathbb R$:** $a > 0$ și $\Delta \le 0$.
- **Pătrate perfecte și paritate:** $k^2$ impar $\Rightarrow k = 2m + 1$.
- **Asimptote spre $-\infty$ cu radicali:** $\sqrt{x^2} = -x$ pentru $x < 0$.

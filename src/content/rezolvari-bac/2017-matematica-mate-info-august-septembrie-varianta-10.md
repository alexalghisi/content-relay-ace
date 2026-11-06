Rezolvarea completă a subiectului de **Bacalaureat 2017 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 2 + 3i$, $z_2 = 1 + 2i$; arătați că $2z_1 - 3z_2 = 1$

$$2z_1 - 3z_2 = 2(2 + 3i) - 3(1 + 2i) = 4 + 6i - 3 - 6i = 1.$$

*Barem: 2p, 3p.*

### 2. $x_1, x_2$ soluțiile lui $x^2 - 3mx + 2 = 0$; $m$ cu $x_1 + x_2 + x_1x_2 + 1 = 0$

Relațiile lui Viète: $x_1 + x_2 = 3m$, $x_1x_2 = 2$. Atunci

$$3m + 2 + 1 = 0 \iff 3m + 3 = 0 \iff m = -1.$$

**Răspuns:** $m = -1$. *Barem: 3p, 2p.*

### 3. Ecuația $\log_4(x + 3) + \log_4(x - 3) = 2$

**Condiții:** $x + 3 > 0$, $x - 3 > 0$, deci $x > 3$.

$$\log_4\big((x+3)(x-3)\big) = 2 \iff x^2 - 9 = 4^2 = 16 \iff x^2 = 25 \iff x = \pm 5.$$

$x = -5$ nu verifică $x > 3$; $x = 5$ convine.

**Răspuns:** $x = 5$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca produsul cifrelor unui număr de două cifre să fie 6

Cazuri posibile: **90**. Scrierile lui $6$ ca produs de două cifre: $1\cdot 6$, $6\cdot 1$, $2\cdot 3$, $3\cdot 2$, deci numerele $16, 61, 23, 32$ — **4 cazuri favorabile**.

$$p = \frac{4}{90} = \frac{2}{45}.$$

**Răspuns:** $p = \dfrac{2}{45}$. *Barem: 2p, 2p, 1p.*

### 5. $\vec u = a\vec i + 2\vec j$ și $\vec v = 3\vec i - 3\vec j$ coliniari

Vectorii sunt coliniari dacă și numai dacă coordonatele lor sunt proporționale:

$$\frac a3 = \frac{2}{-3} \iff a = -2.$$

**Răspuns:** $a = -2$. *Barem: 3p, 2p.*

### 6. $(\sin x - \cos x)^2 + \sin 2x = 1$

$$\sin^2 x - 2\sin x\cos x + \cos^2 x + 2\sin x\cos x = \sin^2 x + \cos^2 x = 1.$$

*Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 1 & 1\\ x+1 & 1 & 1\\ 1 & x & 1\end{pmatrix}$

#### a) $\det(A(0)) = -1$

$$\det A(0) = \begin{vmatrix} 0 & 1 & 1\\ 1 & 1 & 1\\ 1 & 0 & 1\end{vmatrix} = 0 + 0 + 1 - 1 - 0 - 1 = -1.$$

*Barem: 2p, 3p.*

#### b) $x$ cu $\det(A(x))\cdot\det(A(x+1)) = 12$

Scădem linia a doua din prima: $L_1 - L_2 = (-1, 0, 0)$, deci

$$\det A(x) = \begin{vmatrix} -1 & 0 & 0\\ x+1 & 1 & 1\\ 1 & x & 1\end{vmatrix} = -1\cdot(1 - x) = x - 1.$$

Atunci $\det A(x+1) = x$, iar ecuația devine $(x - 1)x = 12 \iff x^2 - x - 12 = 0 \iff (x - 4)(x + 3) = 0$.

**Răspuns:** $x \in \{-3, 4\}$. *Barem: 3p determinanții, 2p soluțiile.*

#### c) Matricea $X$ cu $A(2)\cdot X = A(0)$

$A(2) = \begin{pmatrix} 2 & 1 & 1\\ 3 & 1 & 1\\ 1 & 2 & 1\end{pmatrix}$, $\det A(2) = 2 - 1 = 1 \ne 0$, deci $A(2)$ este inversabilă și $X = (A(2))^{-1}A(0)$.

$$(A(2))^{-1} = \begin{pmatrix} -1 & 1 & 0\\ -2 & 1 & 1\\ 5 & -3 & -1\end{pmatrix}$$

(verificare: $A(2)\cdot(A(2))^{-1} = I_3$). Apoi

$$X = \begin{pmatrix} -1 & 1 & 0\\ -2 & 1 & 1\\ 5 & -3 & -1\end{pmatrix}\begin{pmatrix} 0 & 1 & 1\\ 1 & 1 & 1\\ 1 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & 0 & 0\\ 2 & -1 & 0\\ -4 & 2 & 1\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix} 1 & 0 & 0\\ 2 & -1 & 0\\ -4 & 2 & 1\end{pmatrix}$. *Barem: 3p inversa, 2p matricea $X$.*

### 2. $f = X^3 - (m+2)X^2 + (m^2+2)X - 1$

#### a) $f(0) = -1$

$f(0) = 0 - 0 + 0 - 1 = -1$, pentru orice $m$ real. *Barem: 2p, 3p.*

#### b) $(x_1 - x_2)^2 + (x_2 - x_3)^2 + (x_3 - x_1)^2 = -4(m-1)^2$

Viète: $s_1 = x_1 + x_2 + x_3 = m + 2$, $s_2 = x_1x_2 + x_1x_3 + x_2x_3 = m^2 + 2$. Atunci

$$x_1^2 + x_2^2 + x_3^2 = s_1^2 - 2s_2 = m^2 + 4m + 4 - 2m^2 - 4 = -m^2 + 4m.$$

$$\sum(x_i - x_j)^2 = 2\sum x_i^2 - 2s_2 = 2(-m^2 + 4m) - 2(m^2 + 2) = -4m^2 + 8m - 4 = -4(m-1)^2.$$

*Barem: 3p, 2p.*

#### c) $m$ pentru care toate rădăcinile sunt reale

Dacă rădăcinile sunt reale, suma de pătrate din b) este $\ge 0$, deci $-4(m-1)^2 \ge 0$, adică $(m-1)^2 \le 0$, de unde $m = 1$.

**Reciproc:** pentru $m = 1$, $f = X^3 - 3X^2 + 3X - 1 = (X - 1)^3$, cu toate rădăcinile reale.

**Răspuns:** $m = 1$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 2e^x - x^2 - 2x - 2$

#### a) $f'(x) = 2(e^x - x - 1)$

$$f'(x) = 2e^x - 2x - 2 = 2(e^x - x - 1).$$

*Barem: 2p, 3p.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 2 - 0 - 0 - 2 = 0$, $f'(0) = 2(1 - 0 - 1) = 0$.

$$y - f(0) = f'(0)(x - 0) \iff y = 0.$$

**Răspuns:** $y = 0$. *Barem: 2p, 3p.*

#### c) $f$ este crescătoare pe $\mathbb R$

$f''(x) = 2(e^x - 1)$: $f'' \le 0$ pe $(-\infty, 0]$ și $f'' \ge 0$ pe $[0, +\infty)$, deci $f'$ este descrescătoare, apoi crescătoare, cu minimul $f'(0) = 0$.

Așadar $f'(x) \ge 0$ pentru orice $x$ real și $f$ este crescătoare pe $\mathbb R$. $\blacksquare$ *Barem: 1p, 1p, 1p, 2p.*

### 2. $f(x) = (x + 2)^n$, $n \in \mathbb N^*$

#### a) $\displaystyle\int_{-2}^1 (x+2)^2\,dx = 9$

$$\int_{-2}^1 (x+2)^2\,dx = \frac{(x+2)^3}{3}\Big|_{-2}^1 = \frac{27}{3} - 0 = 9.$$

*Barem: 3p, 2p.*

#### b) Pentru $n = 1$: $\displaystyle\int_0^1 (x + 2)e^x\,dx = 2e - 1$

Prin părți ($u = x + 2$, $v' = e^x$):

$$\int_0^1 (x+2)e^x\,dx = (x+2)e^x\Big|_0^1 - \int_0^1 e^x\,dx = 3e - 2 - (e - 1) = 2e - 1.$$

*Barem: 3p, 2p.*

#### c) $n$ pentru care aria dintre $G_f$, $Ox$, $x = -1$, $x = 1$ este $\frac{242}{n+1}$

Pe $[-1, 1]$, $x + 2 > 0$, deci $f \ge 0$ și

$$\mathcal A = \int_{-1}^1 (x+2)^n\,dx = \frac{(x+2)^{n+1}}{n+1}\Big|_{-1}^1 = \frac{3^{n+1} - 1}{n+1}.$$

$$\frac{3^{n+1} - 1}{n+1} = \frac{242}{n+1} \iff 3^{n+1} = 243 = 3^5 \iff n = 4.$$

**Răspuns:** $n = 4$. *Barem: 3p aria, 2p valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = -1$ |
| I.3 | $x = 5$ |
| I.4 | $p = \tfrac{2}{45}$ |
| I.5 | $a = -2$ |
| II.1.b | $x \in \{-3, 4\}$ |
| II.1.c | $X = \begin{pmatrix}1&0&0\\2&-1&0\\-4&2&1\end{pmatrix}$ |
| II.2.c | $m = 1$ |
| III.1.b | $y = 0$ |
| III.2.c | $n = 4$ |

## Ce merită reținut din varianta 10

- **$\sum(x_i - x_j)^2 = 2\sum x_i^2 - 2\sum x_ix_j$**: dacă iese negativă, polinomul are rădăcini complexe nereale.
- **Monotonie prin derivata a doua**: când semnul lui $f'$ nu se vede direct, studiază $f''$ și găsește minimul lui $f'$.
- **Ecuația matriceală $AX = B$** se rezolvă cu $X = A^{-1}B$ (inversa la stânga!).
- **Determinanți cu linii aproape egale**: scade liniile ca să apară zerouri.

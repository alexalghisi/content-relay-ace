Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică M1 (mate-info)**, **modelul oficial** publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numărul elementelor mulțimii $A = \{x \in \mathbb Z \mid |x + 1| \le 24\}$

$$|x + 1| \le 24 \iff -24 \le x + 1 \le 24 \iff -25 \le x \le 23.$$

Numărul întregilor din $[-25, 23]$ este $23 - (-25) + 1 = 49$.

**Răspuns:** $49$. *Barem: 2p, 1p intervalul, 2p numărarea.*

### 2. Intersecția dreptei $y = 2x - 1$ cu parabola $y = 2x^2 - 3x + 1$

$$2x - 1 = 2x^2 - 3x + 1 \iff 2x^2 - 5x + 2 = 0 \iff x \in \left\{2, \tfrac12\right\}.$$

$x = 2 \Rightarrow y = 3$; $x = \frac12 \Rightarrow y = 0$.

**Răspuns:** $(2, 3)$ și $\left(\frac12, 0\right)$. *Barem: 1p ecuația, 2p rădăcinile, 2p punctele.*

### 3. Ecuația $\sqrt[3]{1 + 7x} = 1 + x$

Ridicăm la cub (echivalent pentru radicalul de ordin impar):

$$1 + 7x = 1 + 3x + 3x^2 + x^3 \iff x^3 + 3x^2 - 4x = 0 \iff x(x - 1)(x + 4) = 0.$$

**Răspuns:** $x \in \{-4, 0, 1\}$. *Barem: 1p ridicarea la cub, 1p factorizarea, 3p soluțiile.*

### 4. Submulțimi cu 3 elemente ale lui $\{1, \dots, 10\}$ care conțin exact 2 numere impare

Alegem 2 numere impare din cele 5: $C_5^2 = 10$ moduri; apoi un număr par din cele 5: $5$ moduri.

$$10\cdot 5 = 50.$$

**Răspuns:** $50$. *Barem: 2p, 1p, 2p.*

### 5. Mediatoarea segmentului $[AB]$, $A(1,-2)$, $B(3,4)$

Mijlocul: $M(2, 1)$. $m_{AB} = \dfrac{4 + 2}{3 - 1} = 3$, deci mediatoarea are panta $-\dfrac13$:

$$y - 1 = -\frac13(x - 2) \iff y = -\frac13x + \frac53.$$

**Răspuns:** $y = -\dfrac13x + \dfrac53$ (sau $x + 3y - 5 = 0$). *Barem: 1p mijlocul, 2p panta, 2p ecuația.*

### 6. $\sin x$, știind $x \in \left(0, \frac\pi2\right)$ și $\cos 2x = \frac13$

$$\cos 2x = 1 - 2\sin^2 x = \frac13 \Rightarrow \sin^2 x = \frac13 \Rightarrow \sin x = \pm\frac{1}{\sqrt3}.$$

În cadranul I, $\sin x > 0$: $\sin x = \dfrac{1}{\sqrt3} = \dfrac{\sqrt3}{3}$. *Barem: 2p formula, 2p valorile, 1p semnul.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}x + my + m^2z = 0\\mx + m^2y + z = 0\\m^2x + y + mz = 0\end{cases}$

#### a) $m$ pentru care determinantul este nul

Cu regula lui Sarrus:

$$\Delta = \begin{vmatrix}1 & m & m^2\\m & m^2 & 1\\m^2 & 1 & m\end{vmatrix} = m^3 + m^3 + m^3 - m^6 - 1 - m^3 = -(m^6 - 2m^3 + 1) = -(m^3 - 1)^2.$$

$\Delta = 0 \iff m^3 = 1 \iff m = 1$ (singura rădăcină reală).

**Răspuns:** $m = 1$. *Barem: 3p determinantul, 2p valoarea.*

#### b) Sistemul nu are soluții cu toate componentele strict pozitive

Sistemul este omogen. Dacă $m \ne 1$, $\Delta \ne 0$ și singura soluție este $(0,0,0)$. Dacă $m = 1$, toate ecuațiile devin $x + y + z = 0$, care nu are soluții cu $x, y, z > 0$ (suma ar fi pozitivă). $\blacksquare$ *Barem: 2p $\Delta = 0$, 1p reducerea, 2p concluzia.*

#### c) Rangul matricei este diferit de 2

- $m = 1$: toate liniile sunt $(1, 1, 1)$, rangul este $1$;
- $m \ne 1$: $\Delta \ne 0$, rangul este $3$.

Deci rangul nu este niciodată $2$. $\blacksquare$ *Barem: 2p cazul $m = 1$, 3p cazul $m \ne 1$.*

### 2. $x * y = \dfrac12(x + y - xy + 1)$

Forma utilă: $x * y = 1 - \dfrac12(x-1)(y-1)$ (verificare: $1 - \frac12(xy - x - y + 1) = \frac12(x + y - xy + 1)$ ✔).

#### a) Asociativitatea

$$(x*y)*z = 1 - \frac12\big((x*y) - 1\big)(z - 1) = 1 + \frac14(x-1)(y-1)(z-1),$$

$$x*(y*z) = 1 - \frac12(x-1)\big((y*z) - 1\big) = 1 + \frac14(x-1)(y-1)(z-1).$$

Cele două coincid, deci legea este asociativă. *Barem: 4p calculele, 1p concluzia.*

#### b) Elementul neutru

$x * e = x \iff x + e - xe + 1 = 2x \iff (e + 1)(1 - x) = 0$ pentru orice $x$, deci $e = -1$. Verificare: $(-1) * x = \frac12(-1 + x + x + 1) = x$ ✔.

**Răspuns:** $e = -1$. *Barem: 1p definiția, 3p calculul, 1p verificarea.*

#### c) Ecuația $x * x * x = 3$

Din a): $x * x * x = 1 + \dfrac14(x-1)^3$.

$$1 + \frac14(x-1)^3 = 3 \iff (x - 1)^3 = 8 \iff x - 1 = 2 \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 2p expresia, 3p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 - 3x + 2$

#### a) $\displaystyle\lim_{x\to+\infty}\frac{f(x)}{f(-x)}$

$f(-x) = -x^3 + 3x + 2$, deci

$$\lim_{x\to+\infty}\frac{x^3 - 3x + 2}{-x^3 + 3x + 2} = \frac{1}{-1} = -1.$$

**Răspuns:** $-1$. *Barem: 2p $f(-x)$, 3p limita.*

#### b) $f$ este descrescătoare pe $[-1, 1]$

$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) \le 0$ pentru $x \in [-1, 1]$. *Barem: 2p derivata, 3p semnul.*

#### c) $m$ pentru care $f(x) = m$ are trei soluții reale distincte

$f$ crește pe $(-\infty, -1]$, scade pe $[-1, 1]$, crește pe $[1, +\infty)$; $f(-1) = 4$ (maxim local), $f(1) = 0$ (minim local), limitele la $\mp\infty$ sunt $\mp\infty$.

Dreapta $y = m$ intersectează graficul în trei puncte $\iff 0 < m < 4$.

**Răspuns:** $m \in (0, 4)$. *Barem: 2p valorile și limitele, 3p concluzia.*

### 2. $I_n = \displaystyle\int_0^1(1 - x^2)^n\,dx$

#### a) $I_2$

$$I_2 = \int_0^1(1 - 2x^2 + x^4)\,dx = \left(x - \frac{2x^3}{3} + \frac{x^5}{5}\right)\Big|_0^1 = 1 - \frac23 + \frac15 = \frac{8}{15}.$$

**Răspuns:** $\dfrac{8}{15}$. *Barem: 1p dezvoltarea, 3p primitiva, 1p rezultatul.*

#### b) $(I_n)$ este convergent

$$I_n - I_{n+1} = \int_0^1(1-x^2)^n\big(1 - (1 - x^2)\big)\,dx = \int_0^1 x^2(1 - x^2)^n\,dx \ge 0,$$

deci șirul este descrescător; $I_n \ge 0$ (integrand nenegativ), deci este mărginit inferior. Fiind monoton și mărginit, este convergent. $\blacksquare$ *Barem: 3p monotonia, 1p mărginirea, 1p concluzia.*

#### c) $(2n + 1)I_n = 2nI_{n-1}$ pentru $n \ge 2$

Integrăm prin părți cu $u = (1 - x^2)^n$, $v' = 1$ ($v = x$):

$$I_n = x(1 - x^2)^n\Big|_0^1 - \int_0^1 x\cdot n(1-x^2)^{n-1}(-2x)\,dx = 2n\int_0^1 x^2(1 - x^2)^{n-1}\,dx.$$

Scriem $x^2 = 1 - (1 - x^2)$:

$$I_n = 2n\int_0^1(1-x^2)^{n-1}\,dx - 2n\int_0^1(1-x^2)^n\,dx = 2nI_{n-1} - 2nI_n.$$

Deci $(2n + 1)I_n = 2nI_{n-1}$. $\blacksquare$ *Barem: 2p integrarea prin părți, 1p rescrierea, 2p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $49$ |
| I.2 | $(2,3)$, $\left(\frac12, 0\right)$ |
| I.3 | $x \in \{-4, 0, 1\}$ |
| I.4 | $50$ |
| I.5 | $y = -\frac13x + \frac53$ |
| I.6 | $\sin x = \frac{\sqrt3}{3}$ |
| II.1.a | $m = 1$ |
| II.1.c | rangul $1$ sau $3$ |
| II.2.b | $e = -1$ |
| II.2.c | $x = 3$ |
| III.1.a | $-1$ |
| III.1.c | $m \in (0, 4)$ |
| III.2.a | $\frac8{15}$ |

## Ce merită reținut din model

- **Ecuații cu radical de ordin 3**: ridicarea la cub este o transformare echivalentă (fără condiții).
- **Sisteme omogene**: au soluții nenule doar când determinantul este nul.
- **Legea $1 - \frac12(x-1)(y-1)$**: compunerea a trei elemente dă $1 + \frac14\prod(x_i - 1)$.
- **Recurențe pentru $\int(1-x^2)^n$**: integrare prin părți și $x^2 = 1 - (1 - x^2)$.

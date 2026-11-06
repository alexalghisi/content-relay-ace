Rezolvarea completă a **simulării pentru Bacalaureat 2021 la Matematică M_mate-info** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia geometrică cu $b_2 = 2$, $b_4 = 4$; determinați $b_6$

Într-o progresie geometrică, $b_4^2 = b_2\cdot b_6$ (termenul din mijloc e media geometrică): $16 = 2b_6 \Rightarrow b_6 = 8$.

**Răspuns:** $b_6 = 8$. *Barem: 3p + 2p.*

### 2. $f(x) = x^2 - 2x + m$; vârful parabolei pe dreapta $y = 3x$

$x_V = -\frac{b}{2a} = 1$, $y_V = f(1) = m - 1$. Condiția: $m - 1 = 3\cdot1 \iff m = 4$.

**Răspuns:** $m = 4$. *Barem: 2p + 3p.*

### 3. Ecuația $4^x - 2^{x+1} - 3 = 0$

Cu $t = 2^x > 0$: $t^2 - 2t - 3 = 0 \iff (t + 1)(t - 3) = 0$. Cum $t > 0$, $t = 3$, deci $x = \log_23$.

**Răspuns:** $x = \log_23$. *Barem: 3p + 2p.*

### 4. Câte numere de trei cifre au exact două cifre egale?

Formele posibile: $\overline{aab}$, $\overline{aba}$, $\overline{baa}$ cu $a \ne b$.

- $\overline{aab}$: $a \in \{1..9\}$ (9 moduri), $b \ne a$ (9 moduri) — 81;
- $\overline{aba}$: analog — 81;
- $\overline{baa}$: $b \ne 0$, $b \ne a$; $a$ oarecare. Dacă $a = 0$, $b$ are 9 variante; dacă $a \ne 0$ (9 valori), $b$ are 8 variante: $9 + 72 = 81$.

**Răspuns:** $3\cdot81 = 243$. *Barem: 2p + 3p.*

### 5. $AB$ și $A'B'$ au același mijloc; arătați că $\overrightarrow{AB'} + \overrightarrow{BA'} = \vec0$

Fie $M$ mijlocul comun: $\overrightarrow{AM} = \overrightarrow{MB}$, $\overrightarrow{A'M} = \overrightarrow{MB'}$.

$$\overrightarrow{AB'} + \overrightarrow{BA'} = \left(\overrightarrow{AM} + \overrightarrow{BM}\right) + \left(\overrightarrow{MB'} + \overrightarrow{MA'}\right) = \vec0 + \vec0 = \vec0.\ \blacksquare$$

*Barem: 2p + 3p.*

### 6. $AB + AC + BC = 2R(\sin A + \sin B + \sin C)$

Teorema sinusurilor: $\dfrac{BC}{\sin A} = \dfrac{AC}{\sin B} = \dfrac{AB}{\sin C} = 2R$, deci $BC = 2R\sin A$, $AC = 2R\sin B$, $AB = 2R\sin C$. Adunând se obține relația. $\blacksquare$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}ax + (a+1)y + (a+2)z = a\\bx + (b+1)y + (b+2)z = b\\y + z = 1\end{cases}$, $X(a,b) = \begin{pmatrix}a&a+1&a+2\\b&b+1&b+2\\0&1&1\end{pmatrix}$

#### a) $\det X(0,1) = 1$

$$\det\begin{pmatrix}0&1&2\\1&2&3\\0&1&1\end{pmatrix} = 0 + 0 + 2 - 0 - 0 - 1 = 1.$$

*Barem: 2p + 3p.*

#### b) Pentru $a \ne b$ sistemul are soluție unică

Scădem coloana 1 din coloanele 2 și 3:

$$\det X(a,b) = \begin{vmatrix}a&1&2\\b&1&2\\0&1&1\end{vmatrix} = a(1 - 2) - 1\cdot b + 2b = b - a.$$

Pentru $a \ne b$, $\det \ne 0$: sistem Cramer, soluție unică. $\blacksquare$ *Barem: 3p + 2p.*

#### c) Pentru orice soluție $(x_0, y_0, z_0)$: $y_0^2 - z_0^2 - 2ax_0 = 3$

**Cazul $a \ne b$:** $(0, 2, -1)$ verifică sistemul ($2(a+1) - (a+2) = a$, la fel pentru $b$, și $2 - 1 = 1$), deci e soluția unică: $4 - 1 - 0 = 3$.

**Cazul $a = b$:** primele două ecuații coincid. Cu $x = \alpha$ și $z = 1 - y$: $a\alpha + (a+1)y + (a+2)(1 - y) = a \Rightarrow y = 2 + a\alpha$, $z = -1 - a\alpha$.

$$y_0^2 - z_0^2 - 2ax_0 = (y_0 - z_0)(y_0 + z_0) - 2a\alpha = (3 + 2a\alpha)\cdot1 - 2a\alpha = 3.\ \blacksquare$$

*Barem: 2p + 3p.*

### 2. Pe $M = (2,\infty)$: $x * y = (x - 1)^{\log_3(y-1)} + 1$ (asociativă)

#### a) $5 * 10 = 17$

$$5 * 10 = 4^{\log_39} + 1 = 4^2 + 1 = 17.$$

*Barem: 3p + 2p.*

#### b) Elementul neutru

$x * e = x \iff (x - 1)^{\log_3(e-1)} = x - 1$ pentru orice $x > 2$, deci $\log_3(e - 1) = 1$, $e = 4 \in M$. Verificare: $4 * x = 3^{\log_3(x-1)} + 1 = x$.

**Răspuns:** $e = 4$. *Barem: 3p + 2p.*

#### c) $x \in M$ cu $x * x * x = x * x$

$x * x = (x-1)^{\log_3(x-1)} + 1$, iar $x * x * x = (x * x) * x = \left((x-1)^{\log_3(x-1)}\right)^{\log_3(x-1)} + 1 = (x-1)^{\log_3^2(x-1)} + 1$.

Cum $x - 1 > 1$ (bază diferită de 1), egalitatea exponenților: $\log_3^2(x-1) = \log_3(x-1)$, deci $\log_3(x-1) \in \{0, 1\}$, adică $x \in \{2, 4\}$. Doar $x = 4 \in M$.

**Răspuns:** $x = 4$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \sqrt{e^{2x} + x^4 + 2}$

#### a) $f'(x) = \dfrac{e^{2x} + 2x^3}{\sqrt{e^{2x} + x^4 + 2}}$

$$f'(x) = \frac{2e^{2x} + 4x^3}{2\sqrt{e^{2x} + x^4 + 2}} = \frac{e^{2x} + 2x^3}{\sqrt{e^{2x} + x^4 + 2}}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în $x = 0$ este paralelă cu $x - \sqrt3y = 0$

$f'(0) = \dfrac{1}{\sqrt3}$. Dreapta $y = \dfrac{x}{\sqrt3}$ are panta $\dfrac1{\sqrt3}$. Pantele sunt egale, iar tangenta trece prin $(0, \sqrt3)$, care nu e pe dreaptă — deci sunt paralele. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $f$ are un unic punct de extrem

Semnul lui $f'$ este semnul lui $g(x) = e^{2x} + 2x^3$. $g'(x) = 2e^{2x} + 6x^2 > 0$, deci $g$ strict crescătoare, continuă, cu limitele $-\infty$ și $+\infty$: există un unic $c$ cu $g(c) = 0$, $g < 0$ pe $(-\infty, c)$, $g > 0$ pe $(c, \infty)$.

Deci $f$ e strict descrescătoare pe $(-\infty, c]$ și strict crescătoare pe $[c, \infty)$: unic punct de extrem (minim) în $c$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = \dfrac12\left(\dfrac1{x^2+1} - \dfrac1{x^2+3}\right)$

#### a) $\displaystyle\int_0^1\left(2f(x) + \frac1{x^2+3}\right)dx = \frac\pi4$

$$\int_0^1\frac{1}{x^2+1}dx = \operatorname{arctg}x\Big|_0^1 = \frac\pi4.$$

*Barem: 3p + 2p.*

#### b) Orice primitivă $F$ a lui $f$ este strict crescătoare

$$F'(x) = f(x) = \frac12\cdot\frac{(x^2 + 3) - (x^2 + 1)}{(x^2+1)(x^2+3)} = \frac{1}{(x^2+1)(x^2+3)} > 0.$$

Deci $F$ e strict crescătoare. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $\displaystyle\int_a^bf(x)F^2(x)dx > 0$ pentru $a < b$

$$\int_a^bF^2(x)F'(x)dx = \frac{F^3(x)}{3}\Big|_a^b = \frac13\left(F^3(b) - F^3(a)\right).$$

$F$ strict crescătoare $\Rightarrow F(a) < F(b)$, iar $t\mapsto t^3$ e strict crescătoare $\Rightarrow F^3(a) < F^3(b)$. Integrala e strict pozitivă. $\blacksquare$ *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_6 = 8$ |
| I.2 | $m = 4$ |
| I.3 | $x = \log_23$ |
| I.4 | $243$ |
| II.2.b | $e = 4$ |
| II.2.c | $x = 4$ |

## Ce merită reținut din simulare

- **Progresii geometrice:** $b_k^2 = b_{k-p}\cdot b_{k+p}$.
- **Sistem cu parametri:** tratează separat cazul determinant nenul și cazul nedeterminat.
- **$\int F^2F'dx = \frac{F^3}{3}$** — cheia la c).
- **Unicitatea extremului:** studiază o funcție auxiliară care dă semnul derivatei.

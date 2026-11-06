Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_mate-info**, sesiunea specială, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Modulul lui $z = (2 + 3i)(2 - 3i) - (9 - 3i)$

$(2 + 3i)(2 - 3i) = 4 - 9i^2 = 13$, deci $z = 13 - 9 + 3i = 4 + 3i$.

$$|z| = \sqrt{4^2 + 3^2} = 5.$$

*Barem: 3p + 2p.*

### 2. $f(x) = x - 2$, $g(x) = 5x + 20$; calculați $(g\circ f)(2)$

$f(2) = 0$, deci $(g\circ f)(2) = g(0) = 20$.

*Barem: 2p + 3p.*

### 3. Ecuația $4^{x-5} = \frac1{16}$

$\frac1{16} = 4^{-2}$, deci $x - 5 = -2 \iff x = 3$.

*Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de trei cifre să aibă produsul cifrelor 8

900 de cazuri posibile. Cifrele (nenule) cu produsul 8: $\{1,1,8\}$ — 3 numere ($118, 181, 811$); $\{1,2,4\}$ — 6 numere; $\{2,2,2\}$ — 1 număr ($222$). Total **10 cazuri favorabile**.

$$p = \frac{10}{900} = \frac1{90}.$$

*Barem: 2p + 2p + 1p.*

### 5. Paralelogramul $ABCD$ cu $AB = 4$, $BC = 6$, $\angle ABC = 120^\circ$; $|\overrightarrow{AM}|$, $M$ mijlocul lui $BD$

Diagonalele paralelogramului se înjumătățesc, deci $M$ e și mijlocul lui $AC$: $AM = \frac{AC}2$.

Teorema cosinusului în $\triangle ABC$:

$$AC^2 = 16 + 36 - 2\cdot4\cdot6\cdot\cos120^\circ = 52 + 24 = 76 \Rightarrow AC = 2\sqrt{19}.$$

**Răspuns:** $|\overrightarrow{AM}| = \sqrt{19}$. *Barem: 2p + 3p.*

### 6. $AB = 12$, $AC = 16$, $BC = 20$: arătați că $\frac rR = \frac25$

$12^2 + 16^2 = 400 = 20^2$, deci triunghiul e dreptunghic în $A$ și $R = \frac{BC}{2} = 10$.

Aria: $\mathcal A = \frac{12\cdot16}{2} = 96$, semiperimetrul $p = 24$, deci $r = \frac{\mathcal A}{p} = 4$ și $\frac rR = \frac4{10} = \frac25$. $\blacksquare$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a&1&-2\\2&1&3\\2a-1&2&1\end{pmatrix}$ și sistemul $\begin{cases}ax + y - 2z = 2\\2x + y + 3z = 1\\(2a-1)x + 2y + z = a\end{cases}$

#### a) $\det A(4) = 5$

$$\det\begin{pmatrix}4&1&-2\\2&1&3\\7&2&1\end{pmatrix} = 4 + 21 - 8 + 14 - 2 - 24 = 5.$$

*Barem: 2p + 3p.*

#### b) $a$ pentru care $A(a)$ nu este inversabilă

Dezvoltând după prima linie:

$$\det A(a) = a(1 - 6) - 1\big(2 - 3(2a-1)\big) - 2\big(4 - (2a - 1)\big) = -5a + 6a - 5 - 10 + 4a = 5a - 15.$$

$\det A(a) = 0 \iff a = 3$. *Barem: 2p + 3p.*

#### c) Pentru $a = 3$, soluțiile cu $z_0^2 = x_0 + y_0$

Sistemul: $3x + y - 2z = 2$, $2x + y + 3z = 1$, $5x + 2y + z = 3$. A treia ecuație este suma primelor două, deci sistemul e compatibil nedeterminat. Fie $z = \alpha$. Scăzând primele două: $x - 5\alpha = 1 \Rightarrow x = 1 + 5\alpha$; apoi $y = 1 - 2x - 3\alpha = -1 - 13\alpha$.

Condiția: $\alpha^2 = (1 + 5\alpha) + (-1 - 13\alpha) = -8\alpha \iff \alpha(\alpha + 8) = 0$.

**Răspuns:** $(1, -1, 0)$ și $(-39, 103, -8)$. *Barem: 3p + 2p.*

### 2. Pe $G = (1,\infty)$: $x * y = \sqrt{x^{\log_3y}}$ (lege asociativă)

#### a) $4 * 3 = 2$

$$4 * 3 = \sqrt{4^{\log_33}} = \sqrt4 = 2.$$

*Barem: 3p + 2p.*

#### b) $e = 9$ este elementul neutru

$x * 9 = \sqrt{x^{\log_39}} = \sqrt{x^2} = x$ (căci $x > 0$). Iar $9 * x = \sqrt{9^{\log_3x}} = \sqrt{\left(3^{\log_3x}\right)^2} = \sqrt{x^2} = x$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) $x \in G$ egal cu simetricul său

$x$ e propriul simetric $\iff x * x = 9 \iff x^{\frac12\log_3x} = 9$. Logaritmând în baza 3:

$$\tfrac12\log_3^2x = 2 \iff \log_3^2x = 4 \iff \log_3x = \pm2.$$

$x = \frac19 \notin G$; $x = 9 \in G$.

**Răspuns:** $x = 9$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = (x^2 - 9)(x^2 - 4) + 3$

#### a) $f'(x) = 2x(2x^2 - 13)$

$$f'(x) = 2x(x^2 - 4) + (x^2 - 9)\cdot2x = 2x(2x^2 - 13).$$

*Barem: 3p + 2p.*

#### b) $\lim\limits_{x\to3}\dfrac{\sin(x-3)}{f(x) - 3} = \dfrac1{30}$

$$\lim_{x\to3}\frac{\sin(x - 3)}{(x - 3)(x + 3)(x^2 - 4)} = 1\cdot\frac{1}{6\cdot5} = \frac1{30},$$

folosind $\lim\limits_{t\to0}\frac{\sin t}{t} = 1$. *Barem: 2p + 3p.*

#### c) Valorile lui $m$ pentru care $f(x) = m$ are exact patru soluții reale

$f'(x) = 0 \iff x \in \left\{-\sqrt{\tfrac{13}2}, 0, \sqrt{\tfrac{13}2}\right\}$. Tabel de variație:

- $f$ strict descrescătoare pe $\left(-\infty, -\sqrt{\frac{13}{2}}\right]$ și pe $\left[0, \sqrt{\frac{13}{2}}\right]$;
- $f$ strict crescătoare pe $\left[-\sqrt{\frac{13}{2}}, 0\right]$ și pe $\left[\sqrt{\frac{13}{2}}, \infty\right)$.

Valori: $f\left(\pm\sqrt{\frac{13}2}\right) = \left(-\frac52\right)\cdot\frac52 + 3 = -\frac{13}4$ (minime), $f(0) = 36 + 3 = 39$ (maxim local), $\lim\limits_{x\to\pm\infty}f(x) = +\infty$.

Graficul are forma „W”: dreapta $y = m$ taie fiecare dintre cele patru ramuri de monotonie exact o dată dacă și numai dacă $-\frac{13}4 < m < 39$.

**Răspuns:** $m \in \left(-\frac{13}4, 39\right)$. *Barem: 3p + 2p.*

### 2. $f(x) = 2x\operatorname{arctg}x$

#### a) $\displaystyle\int_1^2\frac{f(x)}{\operatorname{arctg}x}dx = 3$

$$\int_1^2 2x\,dx = x^2\Big|_1^2 = 4 - 1 = 3.$$

*Barem: 3p + 2p.*

#### b) $a \ne 0$ cu $\displaystyle\int_0^{\sqrt3}f(x)dx = \frac\pi a - \sqrt3$

Prin părți, cu $(x^2 + 1)' = 2x$:

$$\int_0^{\sqrt3}(x^2+1)'\operatorname{arctg}x\,dx = (x^2+1)\operatorname{arctg}x\Big|_0^{\sqrt3} - \int_0^{\sqrt3}(x^2+1)\cdot\frac1{x^2+1}dx = 4\cdot\frac\pi3 - \sqrt3.$$

$\frac\pi a = \frac{4\pi}3 \iff a = \frac34$.

**Răspuns:** $a = \dfrac34$. *Barem: 3p + 2p.*

#### c) $\displaystyle\int_{-1}^1xf(x)dx = 0$

$h(x) = xf(x) = 2x^2\operatorname{arctg}x$ este impară: $h(-x) = 2x^2\operatorname{arctg}(-x) = -h(x)$. Cu substituția $x = -t$:

$$I = \int_{-1}^1h(x)dx = \int_{-1}^1h(-t)dt = -I \Rightarrow 2I = 0 \Rightarrow I = 0.\ \blacksquare$$

*Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $\lvert z\rvert = 5$ |
| I.2 | $20$ |
| I.3 | $x = 3$ |
| I.4 | $p = \frac1{90}$ |
| I.5 | $\sqrt{19}$ |
| II.1.b | $a = 3$ |
| II.1.c | $(1,-1,0)$, $(-39,103,-8)$ |
| II.2.c | $x = 9$ |
| III.1.c | $m \in (-\frac{13}{4}, 39)$ |
| III.2.b | $a = \frac34$ |

## Ce merită reținut din varianta 7

- **Sistem cu determinant nul:** caută o relație între ecuații și parametrizează soluția.
- **Funcție bipătratică:** graficul „W” are patru intersecții cu orizontala între minim și maximul local.
- **Integrala unei funcții impare pe $[-a,a]$ este 0.**
- **$r = \frac{\mathcal A}{p}$**, iar la triunghiul dreptunghic $R = \frac{\text{ipotenuza}}{2}$.

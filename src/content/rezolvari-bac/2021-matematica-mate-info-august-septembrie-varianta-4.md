Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Media aritmetică a numerelor $a = 2021 - \sqrt2$ și $b = 2021 + \sqrt2$

$$m_a = \frac{a + b}{2} = \frac{2021 - \sqrt2 + 2021 + \sqrt2}{2} = \frac{2\cdot2021}{2} = 2021.$$

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 - 3x + 1$; $m$ cu $A(1, m) \in G_f$

$m = f(1) = 1 - 3 + 1 = -1$.

**Răspuns:** $m = -1$. *Barem: 3p + 2p.*

### 3. Ecuația $\log_3(\sqrt x + 3) + \log_3(\sqrt x - 3) = 2$

Condiții: $x \ge 0$ și $\sqrt x > 3$, adică $x > 9$.

$$\log_3\big((\sqrt x + 3)(\sqrt x - 3)\big) = 2 \iff x - 9 = 9 \iff x = 18.$$

$18 > 9$, deci convine. **Răspuns:** $x = 18$. *Barem: 3p + 2p.*

### 4. Câte elemente are o mulțime cu exact 16 submulțimi?

O mulțime cu $n$ elemente are $2^n$ submulțimi: $2^n = 16 \iff n = 4$.

**Răspuns:** 4 elemente. *Barem: 3p + 2p.*

### 5. $M(3,0)$, $N(8,3)$, $P(6,3)$; $Q$ cu $\overrightarrow{MN} + \overrightarrow{MP} = \overrightarrow{MQ}$

Regula paralelogramului: $MNQP$ este paralelogram, deci $\vec r_Q = \vec r_N + \vec r_P - \vec r_M$:

$$Q(8 + 6 - 3,\ 3 + 3 - 0) = Q(11, 6).$$

*Barem: 3p + 2p.*

### 6. Triunghi ascuțitunghic cu $\sin2A\cdot\cos A = \sin A$; arătați că $A = \frac\pi4$

$\sin 2A = 2\sin A\cos A$, deci $2\sin A\cos^2A = \sin A$. Cum $\sin A \ne 0$, $\cos^2A = \frac12$. $A$ ascuțit $\Rightarrow \cos A = \frac{\sqrt2}{2}$, deci $A = \frac\pi4$. $\blacksquare$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}1&0&0\\0&a&0\\1 + \log_2a & 0 & 1\end{pmatrix}$, $a > 0$

#### a) $\det A(1) = 1$

$A(1) = \begin{pmatrix}1&0&0\\0&1&0\\1&0&1\end{pmatrix}$ (pentru că $\log_21 = 0$). Matricea e inferior triunghiulară, deci $\det A(1) = 1\cdot1\cdot1 = 1$.

*Barem: 2p + 3p.*

#### b) $A(a)$ este inversabilă pentru orice $a > 0$

Dezvoltând după prima linie: $\det A(a) = 1\cdot\begin{vmatrix}a&0\\0&1\end{vmatrix} = a \ne 0$. Deci $A(a)$ e inversabilă. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $\det\left(A(a) + A(a)^{-1}\right) \ge 8$

Notăm $c = 1 + \log_2 a$. Se verifică imediat prin înmulțire că

$$A(a)^{-1} = \begin{pmatrix}1&0&0\\0&\frac1a&0\\-c&0&1\end{pmatrix},\qquad A(a) + A(a)^{-1} = \begin{pmatrix}2&0&0\\0&a + \frac1a&0\\0&0&2\end{pmatrix}.$$

$$\det\left(A(a) + A(a)^{-1}\right) = 4\left(a + \frac1a\right) \ge 4\cdot2 = 8,$$

folosind $a + \frac1a \ge 2$ pentru $a > 0$ (inegalitatea mediilor). $\blacksquare$ *Barem: 2p inversa, 3p finalizarea.*

### 2. Legea $x\circ y = xy - m(x + y) + m(m + 1)$, $m > 0$

#### a) Pentru $m = 1$: $2\circ2 = 2$

$x\circ y = xy - (x + y) + 2$, deci $2\circ2 = 4 - 4 + 2 = 2$.

*Barem: 3p + 2p.*

#### b) Dacă $2\circ1 = 5$, atunci $2\circ5 = 1$

$$2 - 3m + m^2 + m = 5 \iff m^2 - 2m - 3 = 0 \iff (m - 3)(m + 1) = 0,$$

și cum $m > 0$, $m = 3$. Atunci $2\circ5 = 10 - 3\cdot7 + 3\cdot4 = 10 - 21 + 12 = 1$. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $x$ real cu $(mx^3)\circ(-mx^2) = m$ pentru orice $m > 0$

$$-m^2x^5 - m(mx^3 - mx^2) + m^2 + m = m \iff m^2\left(-x^5 - x^3 + x^2 + 1\right) = 0.$$

Cum $m > 0$: $x^5 + x^3 - x^2 - 1 = 0 \iff x^3(x^2 + 1) - (x^2 + 1) = 0 \iff (x^2 + 1)(x^3 - 1) = 0$, deci $x = 1$.

**Răspuns:** $x = 1$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = x^4 - 2 - 4\ln x$

#### a) $f'(x) = \dfrac{4(x^2+1)(x+1)(x-1)}{x}$

$$f'(x) = 4x^3 - \frac4x = \frac{4(x^4 - 1)}{x} = \frac{4(x^2 + 1)(x + 1)(x - 1)}{x}.$$

*Barem: 3p + 2p.*

#### b) Intervalele de monotonie

Pe $(0,\infty)$, $x^2 + 1 > 0$, $x + 1 > 0$, $x > 0$, deci semnul lui $f'$ este semnul lui $x - 1$:

- $f' \le 0$ pe $(0, 1]$ — $f$ **descrescătoare** pe $(0,1]$;
- $f' \ge 0$ pe $[1, \infty)$ — $f$ **crescătoare** pe $[1,\infty)$.

*Barem: 2p + 3p.*

#### c) $f(x) = 0$ are exact două soluții în $(0,\infty)$

$\lim\limits_{x\searrow0}f(x) = 0 - 2 - 4\cdot(-\infty) = +\infty$, $\lim\limits_{x\to\infty}f(x) = +\infty$ ($x^4$ domină $\ln x$), iar $f(1) = 1 - 2 - 0 = -1 < 0$.

$f$ e continuă și strict descrescătoare pe $(0, 1)$, de la $+\infty$ la $-1$: exact o soluție în $(0,1)$. Analog, strict crescătoare pe $(1,\infty)$ de la $-1$ la $+\infty$: exact o soluție în $(1, \infty)$. Total: **exact două soluții**. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = 1 + \dfrac{2x}{x^4 + 1}$

#### a) $\displaystyle\int_0^1(x^4 + 1)f(x)dx = \frac{11}{5}$

$$\int_0^1(x^4 + 1 + 2x)dx = \left(\frac{x^5}{5} + x + x^2\right)\Big|_0^1 = \frac15 + 1 + 1 = \frac{11}{5}.$$

*Barem: 3p + 2p.*

#### b) Panta asimptotei oblice spre $+\infty$ a primitivei $F$

Panta este $m = \lim\limits_{x\to\infty}\dfrac{F(x)}{x}$. Cum $F$ e crescătoare cu $F(x) \ge F(0) + x \to \infty$ (căci $f \ge 1$ pe $[0,\infty)$), aplicăm l'Hôpital ($\frac\infty\infty$):

$$m = \lim_{x\to\infty}\frac{F'(x)}{1} = \lim_{x\to\infty}\left(1 + \frac{2x}{x^4+1}\right) = 1.$$

**Răspuns:** panta este $1$. *Barem: 3p + 2p.*

#### c) $G$ primitiva cu $G(0) = 0$; arătați că $\displaystyle\int_0^1xG(x)dx = \frac13 + \frac\pi8 - \frac14\ln2$

$\dfrac{2t}{t^4 + 1} = \dfrac{(t^2)'}{1 + (t^2)^2}$, deci

$$G(x) = \int_0^x f(t)dt = x + \operatorname{arctg}(x^2).$$

$$\int_0^1 xG(x)dx = \int_0^1x^2dx + \int_0^1x\operatorname{arctg}(x^2)dx = \frac13 + \int_0^1 x\operatorname{arctg}(x^2)dx.$$

Prin părți, cu $u = \operatorname{arctg}(x^2)$, $v = \frac{x^2}{2}$, $u' = \frac{2x}{x^4+1}$:

$$\int_0^1x\operatorname{arctg}(x^2)dx = \frac{x^2}{2}\operatorname{arctg}(x^2)\Big|_0^1 - \int_0^1\frac{x^3}{x^4 + 1}dx = \frac\pi8 - \frac14\ln(x^4 + 1)\Big|_0^1 = \frac\pi8 - \frac14\ln2.$$

Deci $\displaystyle\int_0^1xG(x)dx = \frac13 + \frac\pi8 - \frac14\ln2$. $\blacksquare$ *Barem: 2p $G$, 3p integrala.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2021$ |
| I.2 | $m = -1$ |
| I.3 | $x = 18$ |
| I.4 | $4$ elemente |
| I.5 | $Q(11, 6)$ |
| II.2.c | $x = 1$ |
| III.1.b | descrescătoare pe $(0,1]$, crescătoare pe $[1,\infty)$ |
| III.2.b | panta $= 1$ |

## Ce merită reținut din varianta 4

- **Număr de soluții:** monotonie pe intervale + semnul valorilor în capete/limite (Darboux).
- **$\int\frac{2x}{1 + x^4}dx = \operatorname{arctg}(x^2)$** — substituția $t = x^2$.
- **Panta asimptotei oblice a unei primitive** $= \lim f(x)$ (l'Hôpital).
- **$a + \frac1a \ge 2$** pentru $a > 0$.

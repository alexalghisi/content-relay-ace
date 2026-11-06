Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2020 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni ai progresiei aritmetice este 30; determinați $a_2$

$2a_2 = a_1 + a_3$, deci $a_1 + a_2 + a_3 = 3a_2 = 30 \Rightarrow a_2 = 10$.

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 - 6x + 9$; arătați că $(f\circ f)(3) = 9$

$f(3) = 9 - 18 + 9 = 0$, deci $(f\circ f)(3) = f(0) = 9$. $\blacksquare$

*Barem: 2p + 3p.*

### 3. Ecuația $\log_2(x - 6) = 6 - \log_2(x + 6)$

Condiție: $x > 6$. $\log_2\big((x-6)(x+6)\big) = 6 \iff x^2 - 36 = 64 \iff x^2 = 100$.

$x = -10$ nu convine; $x = 10$ convine. **Răspuns:** $x = 10$. *Barem: 3p + 2p.*

### 4. Câte numere de două cifre distincte se pot forma cu cifrele $\{0,1,2,3,4,5\}$?

Cifra zecilor, nenulă: 5 moduri. Cifra unităților, diferită de cea a zecilor: 5 moduri. Total $5\cdot5 = 25$.

*Barem: 2p + 3p.*

### 5. $D$ mijlocul lui $AC$, $E$ mijlocul lui $BD$; $\overrightarrow{CE} = \frac14\overrightarrow{CA} - \frac12\overrightarrow{BC}$

$E$ mijlocul lui $BD$: $\overrightarrow{CE} = \frac12\overrightarrow{CD} + \frac12\overrightarrow{CB}$. Cum $\overrightarrow{CD} = \frac12\overrightarrow{CA}$ și $\overrightarrow{CB} = -\overrightarrow{BC}$:

$$\overrightarrow{CE} = \frac14\overrightarrow{CA} - \frac12\overrightarrow{BC}.\ \blacksquare$$

*Barem: 3p + 2p.*

### 6. $AB = 2\sqrt3$, $A = \frac\pi4$, $B = \frac{5\pi}{12}$; raza cercului circumscris

$C = \pi - \frac\pi4 - \frac{5\pi}{12} = \frac\pi3$, $\sin C = \frac{\sqrt3}2$. Teorema sinusurilor:

$$2R = \frac{AB}{\sin C} = \frac{2\sqrt3}{\sqrt3/2} = 4 \Rightarrow R = 2.$$

*Barem: 3p + 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a&2&1\\a&4&1\\1&-1&a\end{pmatrix}$, sistemul $\begin{cases}ax + 2y + z = 4\\ax + 4y + z = 6\\x - y + az = 1\end{cases}$

#### a) $\det A(1) = 0$

$$\det\begin{pmatrix}1&2&1\\1&4&1\\1&-1&1\end{pmatrix} = 4 - 1 + 2 - 4 + 1 - 2 = 0.$$

(Prima și a treia coloană sunt egale.) *Barem: 2p + 3p.*

#### b) $a$ pentru care $A(a)$ are rangul 2

$$\det A(a) = a(4a + 1) - 2(a^2 - 1) + (-a - 4) = 2a^2 - 2 = 2(a^2 - 1).$$

Minorul $\begin{vmatrix}2&1\\4&1\end{vmatrix} = -2 \ne 0$, deci rangul e cel puțin 2; e exact 2 $\iff \det A(a) = 0 \iff a \in \{-1, 1\}$.

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 2p + 3p.*

#### c) $a$ pentru care sistemul are soluție unică cu $x_0^2 + y_0^2 + z_0^2 = 3$

Soluție unică $\iff a \notin \{-1,1\}$. Scăzând primele două ecuații: $2y = 2 \Rightarrow y_0 = 1$. Rămân $ax + z = 2$ și $x + az = 2$; scăzându-le: $(a - 1)(x - z) = 0 \Rightarrow x = z$, deci $x_0 = z_0 = \frac2{a+1}$.

$$\frac{8}{(a+1)^2} + 1 = 3 \iff (a + 1)^2 = 4 \iff a \in \{-3, 1\}.$$

Cum $a \ne 1$: **$a = -3$**. *Barem: 3p + 2p.*

### 2. Legea asociativă $x * y = xy - \frac12(x + y) + \frac34$, cu $e = \frac32$

#### a) $x * y = \left(x - \frac12\right)\left(y - \frac12\right) + \frac12$

$$\left(x - \tfrac12\right)\left(y - \tfrac12\right) + \tfrac12 = xy - \tfrac x2 - \tfrac y2 + \tfrac14 + \tfrac12 = x * y.$$

*Barem: 2p + 3p.*

#### b) $x \ne 0$ cu $\frac1x * x * \frac1x = x * \frac1x * x$

Din a), $x * y * z = \left(x - \frac12\right)\left(y - \frac12\right)\left(z - \frac12\right) + \frac12$. Cu $u = \frac1x - \frac12$, $v = x - \frac12$: $u^2v = v^2u \iff uv(u - v) = 0$.

- $u = 0 \Rightarrow x = 2$;
- $v = 0 \Rightarrow x = \frac12$;
- $u = v \Rightarrow \frac1x = x \Rightarrow x = \pm1$.

**Răspuns:** $x \in \left\{-1, \frac12, 1, 2\right\}$. *Barem: 1p + 1p + 1p + 2p.*

#### c) Nu există $x, y$ întregi astfel încât $x$ să fie simetricul lui $y$

Presupunem că $x * y = \frac32$: $\left(x - \frac12\right)\left(y - \frac12\right) = 1 \iff (2x - 1)(2y - 1) = 4$. Pentru $x, y$ întregi, $2x - 1$ și $2y - 1$ sunt impare, deci produsul lor e impar — nu poate fi $4$. Contradicție. $\blacksquare$ *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = x^2 - 8x + 8\ln x + 12 - 8\ln2$

#### a) $f'(x) = \dfrac{2(x-2)^2}{x}$

$$f'(x) = 2x - 8 + \frac8x = \frac{2x^2 - 8x + 8}{x} = \frac{2(x-2)^2}x.$$

*Barem: 3p + 2p.*

#### b) Dreapta prin $A(3,3)$, paralelă cu tangenta în $x = 2$

Panta tangentei: $f'(2) = 0$, deci dreapta căutată este orizontală: $y = 3$.

*Barem: 2p + 3p.*

#### c) $M(a,b) \in G_g$, $N(a,c) \in G_h$, $g(x) = x^2 - 8\ln2 + 8\ln x$, $h(x) = 8x - 12$; $b \ge c$ pentru $a \ge 2$

Observăm că $f(x) = g(x) - h(x)$. $f' \ge 0$, deci $f$ crescătoare, iar $f(2) = 4 - 16 + 8\ln2 + 12 - 8\ln2 = 0$. Pentru $a \ge 2$: $f(a) \ge 0 \iff g(a) \ge h(a) \iff b \ge c$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = \dfrac{x^2 - 4}{x^2 + 4}$

#### a) $\displaystyle\int_0^1(x^2+4)f(x)dx = -\frac{11}3$

$$\int_0^1(x^2 - 4)dx = \frac13 - 4 = -\frac{11}3.$$

*Barem: 3p + 2p.*

#### b) Orice primitivă a lui $f$ este concavă pe $(-\infty, 0]$

$F'' = f'$, iar $f'(x) = \dfrac{2x(x^2+4) - 2x(x^2-4)}{(x^2+4)^2} = \dfrac{16x}{(x^2+4)^2} \le 0$ pe $(-\infty, 0]$. Deci $F$ e concavă acolo. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $I_n = \displaystyle\int_1^2x^nf(x)dx$; $\lim I_n = -\infty$

Pe $[1,2]$: $x^n(x^2 - 4) \le 0$ și $\frac1{x^2+4} \ge \frac18$, deci $x^nf(x) \le \frac18x^n(x^2 - 4)$.

$$I_n \le \frac18\left[\frac{x^{n+3}}{n+3} - \frac{4x^{n+1}}{n+1}\right]_1^2 = \frac18\left(-\frac{2^{n+4}}{(n+1)(n+3)} - \frac1{n+3} + \frac4{n+1}\right).$$

Cum $\dfrac{2^{n+4}}{(n+1)(n+3)} \to +\infty$ (exponențiala domină polinomul), membrul drept tinde la $-\infty$, deci $\lim\limits_{n\to\infty}I_n = -\infty$. $\blacksquare$ *Barem: 2p + 2p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_2 = 10$ |
| I.3 | $x = 10$ |
| I.4 | $25$ |
| I.6 | $R = 2$ |
| II.1.b | $a \in \{-1,1\}$ |
| II.1.c | $a = -3$ |
| II.2.b | $x \in \{-1, \frac12, 1, 2\}$ |
| III.1.b | $y = 3$ |

## Ce merită reținut din model

- **Rangul 2** al unei matrice $3\times3$: determinant nul + un minor de ordin 2 nenul.
- **Argument de paritate**: produs de numere impare nu poate fi par.
- **Limite de integrale spre $-\infty$**: majorează integrandul cu o funcție a cărei integrală explodează.

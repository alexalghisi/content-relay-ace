Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = (1 - i\sqrt2)(1 + i\sqrt2)$ este natural

$$z = 1^2 - (i\sqrt2)^2 = 1 - 2i^2 = 1 + 2 = 3 \in \mathbb N.$$

*Barem: 3p + 2p.*

### 2. $f(x) = 3x + a$; $a$ cu $f(x) + f(1 - x) = 7$ pentru orice $x$

$$3x + a + 3(1 - x) + a = 2a + 3 = 7 \iff a = 2.$$

*Barem: 3p + 2p.*

### 3. Ecuația $5^x + 5^{-x} = 2$

Înmulțind cu $5^x > 0$: $5^{2x} - 2\cdot5^x + 1 = 0 \iff (5^x - 1)^2 = 0 \iff 5^x = 1 \iff x = 0$.

*Barem: 3p + 2p.*

### 4. $A = \{1,2,3,4,5\}$; numărul submulțimilor cu 3 elemente care îl conțin pe 1

Pe lângă $1$ alegem încă 2 elemente din $\{2,3,4,5\}$: $C_4^2 = \dfrac{4!}{2!\,2!} = 6$.

**Răspuns:** $6$. *Barem: 3p + 2p.*

### 5. $M(-4,4)$; dreapta $d$ prin $M$, perpendiculară pe $OM$

$m_{OM} = \frac{4}{-4} = -1$, deci $m_d = 1$:

$$d:\ y - 4 = x + 4 \iff y = x + 8.$$

*Barem: 2p + 3p.*

### 6. $\triangle ABC$ dreptunghic în $A$ cu $\sin B = \cos B$ este isoscel

$\sin B = \dfrac{AC}{BC}$, $\cos B = \dfrac{AB}{BC}$. Egalitatea dă $AC = AB$: triunghiul e isoscel. $\blacksquare$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & a+1 & a+2\\ a^2+1 & a^2+2 & a^2+3\\ 1&2&4\end{pmatrix}$

#### a) $\det A(0) = -1$

$$\det\begin{pmatrix}0&1&2\\1&2&3\\1&2&4\end{pmatrix} = 0 + 3 + 4 - 4 - 0 - 4 = -1.$$

*Barem: 2p + 3p.*

#### b) $A(a)$ este inversabilă pentru orice $a$

Scădem coloana 1 din coloanele 2 și 3:

$$\det A(a) = \begin{vmatrix}a&1&2\\a^2+1&1&2\\1&1&3\end{vmatrix} = a(3 - 2) - \big(3(a^2+1) - 2\big) + 2\big((a^2+1) - 1\big) = -(a^2 - a + 1).$$

$a^2 - a + 1 = \left(a - \frac12\right)^2 + \frac34 > 0$, deci $\det A(a) \ne 0$. $\blacksquare$ *Barem: 3p + 2p.*

#### c) $a$ întreg pentru care $A(a)^{-1}$ are elemente întregi

Pentru $a$ întreg, $A(a)$ are elemente întregi. Dacă $A(a)^{-1}$ are elemente întregi, atunci $\det A(a)\cdot\det A(a)^{-1} = 1$ cu ambii factori întregi, deci $\det A(a) = \pm1$; reciproc, dacă $\det A(a) = \pm1$, inversa $= \pm A^*$ are elemente întregi.

Cum $\det A(a) < 0$: $-(a^2 - a + 1) = -1 \iff a(a - 1) = 0$.

**Răspuns:** $a \in \{0, 1\}$. *Barem: 3p + 2p.*

### 2. Pe $A = [1,\infty)$: $x * y = \frac12\sqrt[3]{x^3y^3 - x^3 - y^3 + 9}$

#### a) $1 * 2020 = 1$

$$1 * 2020 = \tfrac12\sqrt[3]{2020^3 - 1 - 2020^3 + 9} = \tfrac12\sqrt[3]8 = 1.$$

*Barem: 3p + 2p.*

#### b) $x * y = \sqrt[3]{\frac18(x^3-1)(y^3-1) + 1}$

$x^3y^3 - x^3 - y^3 + 9 = (x^3 - 1)(y^3 - 1) + 8$, iar $\frac12\sqrt[3]{u} = \sqrt[3]{\frac u8}$:

$$x * y = \sqrt[3]{\frac{(x^3-1)(y^3-1) + 8}{8}} = \sqrt[3]{\tfrac18(x^3-1)(y^3-1) + 1}.$$

*Barem: 3p + 2p.*

#### c) $x \in A$ cu $x * x = x$

$$\tfrac18(x^3 - 1)^2 + 1 = x^3 \iff (x^3 - 1)^2 = 8(x^3 - 1) \iff (x^3 - 1)(x^3 - 9) = 0.$$

**Răspuns:** $x \in \{1, \sqrt[3]9\}$ (ambele în $A$). *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(2,\infty)\to\mathbb R$, $f(x) = \dfrac1{x-2} + \ln\dfrac{x-1}{x}$

#### a) $f'(x) = \dfrac{-3x + 4}{x(x-1)(x-2)^2}$

$\ln\frac{x-1}x = \ln(x - 1) - \ln x$, deci

$$f'(x) = -\frac1{(x-2)^2} + \frac1{x - 1} - \frac1x = -\frac1{(x-2)^2} + \frac1{x(x-1)} = \frac{-x(x-1) + (x-2)^2}{x(x-1)(x-2)^2} = \frac{-3x + 4}{x(x-1)(x-2)^2}.$$

*Barem: 3p + 2p.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to\infty}f(x) = \lim_{x\to\infty}\left(\frac1{x-2} + \ln\left(1 - \frac1x\right)\right) = 0 + \ln1 = 0.$$

**Răspuns:** $y = 0$. *Barem: 3p + 2p.*

#### c) $\dfrac1{x-2} > \ln\dfrac x{x-1}$ pe $(2,\infty)$

Pentru $x > 2$: $-3x + 4 < 0$, deci $f' < 0$ și $f$ e strict descrescătoare. Cum $\lim\limits_{x\to\infty}f(x) = 0$, rezultă $f(x) > 0$ pe $(2,\infty)$:

$$\frac1{x-2} > -\ln\frac{x-1}x = \ln\frac x{x-1}.\ \blacksquare$$

*Barem: 3p + 2p.*

### 2. $f:(-1,\infty)\to\mathbb R$, $f(x) = \dfrac{x}{\sqrt{x^3+1}}$

#### a) $\displaystyle\int_0^1(x^3+1)f^2(x)dx = \frac13$

$$\int_0^1x^2dx = \frac{x^3}3\Big|_0^1 = \frac13.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1f^2(x)dx = \frac13\ln2$

$$\int_0^1\frac{x^2}{x^3+1}dx = \frac13\int_0^1\frac{(x^3+1)'}{x^3+1}dx = \frac13\ln(x^3+1)\Big|_0^1 = \frac13\ln2.$$

*Barem: 3p + 2p.*

#### c) $I_n = \displaystyle\int_0^1f(x^n)dx$; $\lim I_n = 0$

$f(x^n) = \dfrac{x^n}{\sqrt{x^{3n} + 1}}$ și, pentru $x \in [0,1]$, $0 \le f(x^n) \le x^n$ (numitorul $\ge 1$). Deci

$$0 \le I_n \le \int_0^1x^ndx = \frac1{n+1} \to 0,$$

și $\lim\limits_{n\to\infty}I_n = 0$. $\blacksquare$ *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z = 3$ |
| I.2 | $a = 2$ |
| I.3 | $x = 0$ |
| I.4 | $6$ |
| I.5 | $y = x + 8$ |
| II.1.c | $a \in \{0,1\}$ |
| II.2.c | $x \in \{1, \sqrt[3]9\}$ |
| III.1.b | $y = 0$ |

## Ce merită reținut din varianta 6

- **Inversa cu elemente întregi** $\iff \det = \pm1$ (pentru matrice întregi).
- **Semn din monotonie + limită:** strict descrescătoare cu limita $0$ la $+\infty$ $\Rightarrow$ pozitivă.
- **$5^x + 5^{-x} \ge 2$**, cu egalitate doar în $x = 0$.

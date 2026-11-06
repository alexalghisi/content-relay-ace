Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3\cdot\left(1 + \dfrac12\right) - \dfrac12 = 4$

Întâi paranteza: $1 + \dfrac12 = \dfrac32$. Apoi înmulțirea și scăderea:

$$3\cdot\frac32 - \frac12 = \frac92 - \frac12 = \frac82 = 4.$$

*Barem: 3p calculul parantezei și al produsului, 2p rezultatul.*

### 2. $f(x) = x + 2$: determinați $a$ cu $f(a) = 6$

$f(a) = a + 2$, deci $a + 2 = 6 \iff a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p $f(a) = a + 2$, 3p soluția.*

### 3. Ecuația $\log_7(2x + 1) = \log_7 9$

**Condiție de existență:** $2x + 1 > 0 \iff x > -\dfrac12$.

Logaritmul în aceeași bază este injectiv, deci argumentele sunt egale:

$$2x + 1 = 9 \iff 2x = 8 \iff x = 4.$$

**Verificare:** $4 > -\frac12$, deci soluția convine.

**Răspuns:** $x = 4$. *Barem: 3p ecuația $2x + 1 = 9$, 2p soluția, cu precizarea că ea convine.*

### 4. Probabilitatea ca un $n \in A = \{1, 2, 3, \ldots, 23\}$ să verifice $n \ge 10$

- cazuri posibile: $A$ are 23 de elemente;
- cazuri favorabile: $n \in \{10, 11, \ldots, 23\}$, adică $23 - 10 + 1 = 14$ numere.

$$P = \frac{14}{23}.$$

**Răspuns:** $P = \dfrac{14}{23}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.* Atenție la numărare: de la 10 la 23 inclusiv sunt 14 numere, nu 13.

### 5. Mijlocul segmentului $AB$, cu $A(-1, 2)$ și $B(1, 6)$

Coordonatele mijlocului sunt mediile aritmetice ale coordonatelor capetelor:

$$x_M = \frac{-1 + 1}{2} = 0, \qquad y_M = \frac{2 + 6}{2} = 4.$$

**Răspuns:** $M(0, 4)$. *Barem: 3p $x_M$, 2p $y_M$.*

### 6. Triunghi dreptunghic în $A$, $AC = \sqrt2$, $BC = 2$: triunghiul este isoscel

$BC$ este ipotenuza (opusă unghiului drept). Cu teorema lui Pitagora:

$$AB^2 = BC^2 - AC^2 = 4 - 2 = 2 \Rightarrow AB = \sqrt2.$$

Cum $AB = AC = \sqrt2$, triunghiul $ABC$ este isoscel (dreptunghic isoscel). *Barem: 3p calculul lui $AB$, 2p concluzia.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $A = \begin{pmatrix}3 & 2\\ 2 & 1\end{pmatrix}$, $B = \begin{pmatrix}0 & 4\\ 4 & 2\end{pmatrix}$, $C = \begin{pmatrix}-1 & 2\\ 2 & 1\end{pmatrix}$

#### a) $\det A = -1$

$$\det A = \begin{vmatrix}3 & 2\\ 2 & 1\end{vmatrix} = 3\cdot 1 - 2\cdot 2 = 3 - 4 = -1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $2B - A = 3C$

$$2B - A = \begin{pmatrix}0 & 8\\ 8 & 4\end{pmatrix} - \begin{pmatrix}3 & 2\\ 2 & 1\end{pmatrix} = \begin{pmatrix}-3 & 6\\ 6 & 3\end{pmatrix} = 3\begin{pmatrix}-1 & 2\\ 2 & 1\end{pmatrix} = 3C.$$

*Barem: 3p calculul lui $2B - A$, 2p concluzia.*

#### c) Matricea $X \in \mathcal M_2(\mathbb R)$ cu $2X\cdot A = B + 2C$

Membrul drept: $B + 2C = \begin{pmatrix}0 & 4\\ 4 & 2\end{pmatrix} + \begin{pmatrix}-2 & 4\\ 4 & 2\end{pmatrix} = \begin{pmatrix}-2 & 8\\ 8 & 4\end{pmatrix}$.

Cum $\det A = -1 \ne 0$, $A$ este inversabilă. Pentru o matrice $2\times2$, $A^{-1} = \dfrac{1}{\det A}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$:

$$A^{-1} = \frac{1}{-1}\begin{pmatrix}1 & -2\\ -2 & 3\end{pmatrix} = \begin{pmatrix}-1 & 2\\ 2 & -3\end{pmatrix}.$$

Înmulțim egalitatea **la dreapta** cu $A^{-1}$ (ordinea contează, $X$ este în stânga lui $A$): $2X = (B + 2C)A^{-1}$, deci

$$X = \frac12\begin{pmatrix}-2 & 8\\ 8 & 4\end{pmatrix}\begin{pmatrix}-1 & 2\\ 2 & -3\end{pmatrix} = \frac12\begin{pmatrix}2 + 16 & -4 - 24\\ -8 + 8 & 16 - 12\end{pmatrix} = \frac12\begin{pmatrix}18 & -28\\ 0 & 4\end{pmatrix} = \begin{pmatrix}9 & -14\\ 0 & 2\end{pmatrix}.$$

**Verificare:** $2XA = \begin{pmatrix}18 & -28\\ 0 & 4\end{pmatrix}\begin{pmatrix}3 & 2\\ 2 & 1\end{pmatrix} = \begin{pmatrix}54 - 56 & 36 - 28\\ 8 & 4\end{pmatrix} = \begin{pmatrix}-2 & 8\\ 8 & 4\end{pmatrix}$ ✔.

**Răspuns:** $X = \begin{pmatrix}9 & -14\\ 0 & 2\end{pmatrix}$. *Barem: 3p $B + 2C$ și $A^{-1}$, 2p matricea $X$.*

### 2. Legea de compoziție $x * y = (x - 4)(y - 4) + 4$

#### a) $5 * 4 = 4$

$$5 * 4 = (5 - 4)(4 - 4) + 4 = 1\cdot 0 + 4 = 4.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ real pentru care $x * 6 = 6x$

$x * 6 = (x - 4)\cdot 2 + 4 = 2x - 4$. Ecuația: $2x - 4 = 6x \iff -4x = 4 \iff x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p expresia $x * 6 = 2x - 4$, 2p soluția.*

#### c) Numerele naturale nenule $n$ cu $\dfrac4n * n > 4$

$$\frac4n * n = \left(\frac4n - 4\right)(n - 4) + 4 > 4 \iff 4\left(\frac1n - 1\right)(n - 4) > 0 \iff \frac{1 - n}{n}(n - 4) > 0.$$

Cum $n > 0$, semnul depinde de $(1 - n)(n - 4)$, deci condiția este $(n - 1)(n - 4) < 0 \iff 1 < n < 4$.

Numerele naturale din acest interval: $n \in \{2, 3\}$. Pentru $n = 1$ și $n = 4$ produsul este 0 (egalitate, nu inegalitate strictă), iar pentru $n \ge 5$ este negativ.

Verificare: $n = 2$: $2 * 2 = 4 + 4 = 8 > 4$ ✔; $n = 3$: $\frac43 * 3 = \left(-\frac83\right)(-1) + 4 = \frac{20}{3} > 4$ ✔.

**Răspuns:** $n \in \{2, 3\}$. *Barem: 2p reducerea la $\left(\frac1n - 1\right)(n - 4) > 0$, 3p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = x^3 + 6x^2 - 15x + 9$

#### a) $f'(x) = 3\left(x^2 + 4x - 5\right)$

Derivăm termen cu termen ($(x^n)' = nx^{n-1}$, derivata constantei este 0):

$$f'(x) = 3x^2 + 12x - 15 = 3\left(x^2 + 4x - 5\right).$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Intervalele de monotonie

$f'(x) = 0 \iff x^2 + 4x - 5 = 0 \iff (x + 5)(x - 1) = 0 \iff x \in \{-5, 1\}$.

Trinomul $x^2 + 4x - 5$ are coeficientul dominant pozitiv, deci este pozitiv în afara rădăcinilor și negativ între ele:

| $x$ | $-\infty$ | | $-5$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $109$ | ↘ | $1$ | ↗ | |

($f(-5) = -125 + 150 + 75 + 9 = 109$, $f(1) = 1 + 6 - 15 + 9 = 1$.)

**Răspuns:** $f$ este crescătoare pe $(-\infty, -5]$, descrescătoare pe $[-5, 1]$ și crescătoare pe $[1, +\infty)$. *Barem: 2p rădăcinile lui $f'$, 3p intervalele de monotonie.*

#### c) $\displaystyle\lim_{x\to+\infty}\frac{f'(x)}{e^x f''(x)} = 0$

$f''(x) = 3(2x + 4)$. Atunci

$$\frac{f'(x)}{e^x f''(x)} = \frac{3\left(x^2 + 4x - 5\right)}{3e^x(2x + 4)} = \frac{x^2 + 4x - 5}{e^x(2x + 4)}.$$

Avem nedeterminare $\frac\infty\infty$. Scriem $\dfrac{x^2 + 4x - 5}{2x + 4}\cdot\dfrac{1}{e^x}$; o variantă clară este l'Hôpital de două ori:

$$\lim_{x\to+\infty}\frac{x^2 + 4x - 5}{e^x(2x + 4)} \overset{\text{l'H}}{=} \lim_{x\to+\infty}\frac{2x + 4}{e^x(2x + 6)} \overset{\text{l'H}}{=} \lim_{x\to+\infty}\frac{2}{e^x(2x + 8)} = 0,$$

pentru că $(e^x(2x + 4))' = e^x(2x + 6)$ și $(e^x(2x + 6))' = e^x(2x + 8)$, iar numitorul final tinde la $+\infty$. Intuitiv: exponențiala crește mai repede decât orice polinom.

*Barem: 3p calculul lui $f''$ și aplicarea l'Hôpital, 2p limita.*

### 2. $f:(-9, +\infty) \to \mathbb R$, $f(x) = \dfrac{8x}{x + 9}$

#### a) $\displaystyle\int_0^1 (x + 9)f(x)\,dx = 4$

$(x + 9)f(x) = 8x$, deci

$$\int_0^1 8x\,dx = 4x^2\Big|_0^1 = 4 - 0 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^6\frac{1}{8x}f(x)\,dx = \ln\frac32$

$\dfrac{1}{8x}\cdot\dfrac{8x}{x + 9} = \dfrac{1}{x + 9}$, deci

$$\int_1^6\frac{1}{x + 9}\,dx = \ln(x + 9)\Big|_1^6 = \ln 15 - \ln 10 = \ln\frac{15}{10} = \ln\frac32.$$

*Barem: 3p primitiva, 2p calculul final.*

#### c) Numărul real $a$ cu $\displaystyle\int_0^3 f\left(x^2\right)dx = 6(4 + a\pi)$

$f(x^2) = \dfrac{8x^2}{x^2 + 9}$. Scoatem partea întreagă: $\dfrac{x^2}{x^2 + 9} = \dfrac{x^2 + 9 - 9}{x^2 + 9} = 1 - \dfrac{9}{x^2 + 9}$.

$$\int_0^3\frac{8x^2}{x^2 + 9}\,dx = 8\int_0^3\left(1 - \frac{9}{x^2 + 3^2}\right)dx = 8x\Big|_0^3 - 8\cdot 9\cdot\frac13\operatorname{arctg}\frac x3\Big|_0^3.$$

Am folosit $\displaystyle\int\frac{dx}{x^2 + a^2} = \frac1a\operatorname{arctg}\frac xa + C$. Cu $\operatorname{arctg}1 = \dfrac\pi4$ și $\operatorname{arctg}0 = 0$:

$$= 24 - 24\cdot\frac\pi4 = 24 - 6\pi = 6(4 - \pi).$$

Comparând cu $6(4 + a\pi)$: $a\pi = -\pi \Rightarrow a = -1$.

**Răspuns:** $a = -1$. *Barem: 3p calculul integralei ($24 - 6\pi$), 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 4$ |
| I.3 | $x = 4$ |
| I.4 | $P = \frac{14}{23}$ |
| I.5 | $M(0, 4)$ |
| II.1.c | $X = \begin{pmatrix}9 & -14\\ 0 & 2\end{pmatrix}$ |
| II.2.b | $x = -1$ |
| II.2.c | $n \in \{2, 3\}$ |
| III.1.b | ↗ pe $(-\infty, -5]$, ↘ pe $[-5, 1]$, ↗ pe $[1, +\infty)$ |
| III.2.c | $a = -1$ |

## Ce merită reținut din varianta 1

- **Ecuații matriceale** $XA = M$: înmulțești la dreapta cu $A^{-1}$, deci $X = MA^{-1}$ — nu $A^{-1}M$.
- **Legi de forma** $(x - k)(y - k) + k$: inegalitatea $x * y > k$ devine o condiție de semn pentru un produs.
- **Limite cu $e^x$ la numitor**: l'Hôpital repetat sau argumentul „exponențiala domină polinoamele”.
- **Integrale de forma** $\dfrac{x^2}{x^2 + a^2}$: scoate partea întreagă, apoi folosește arctangenta.

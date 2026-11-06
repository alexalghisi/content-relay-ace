Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $5 - 3\cdot\left(1 + \dfrac13\right) = 1$

Paranteza: $1 + \dfrac13 = \dfrac43$. Apoi $3\cdot\dfrac43 = 4$, deci

$$5 - 3\cdot\frac43 = 5 - 4 = 1.$$

*Barem: 3p calculul parantezei și al produsului, 2p finalizarea.*

### 2. $f(x) = x - 4$: determinați $a$ cu $f(a) = 2$

$f(a) = a - 4$, deci $a - 4 = 2 \iff a = 6$.

**Răspuns:** $a = 6$. *Barem: 2p $f(a) = a - 4$, 3p rezolvarea.*

### 3. Ecuația $\sqrt{4 + 2x} = 2$

**Condiție de existență:** $4 + 2x \ge 0 \iff x \ge -2$.

Ridicăm la pătrat (ambii membri nenegativi): $4 + 2x = 4 \iff 2x = 0 \iff x = 0$.

**Verificare:** $\sqrt{4 + 0} = 2$ ✔.

**Răspuns:** $x = 0$. *Barem: 3p ecuația $4 + 2x = 4$, 2p soluția care convine.*

### 4. Prețul unui produs de 90 de lei după o scumpire cu 10%

Scumpirea: $10\%$ din $90 = \dfrac{10}{100}\cdot 90 = 9$ lei.

Prețul nou: $90 + 9 = 99$ de lei (echivalent: $90\cdot 1{,}1 = 99$).

**Răspuns:** 99 de lei. *Barem: 3p valoarea scumpirii, 2p prețul final.*

### 5. $M(a, b)$ mijlocul segmentului $AB$, $A(1, 4)$, $B(5, 0)$

Coordonatele mijlocului sunt mediile aritmetice ale coordonatelor capetelor:

$$a = \frac{x_A + x_B}{2} = \frac{1 + 5}{2} = 3, \qquad b = \frac{y_A + y_B}{2} = \frac{4 + 0}{2} = 2.$$

**Răspuns:** $a = 3$, $b = 2$. *Barem: 3p formulele, 2p valorile.*

### 6. Triunghi dreptunghic în $A$, $m(\angle C) = 30^\circ$, $AB = 3$: arătați că $BC = 6$

În triunghiul dreptunghic, $BC$ este ipotenuza, iar $AB$ este cateta opusă unghiului $C$:

$$\sin C = \frac{AB}{BC} \Rightarrow \sin 30^\circ = \frac12 = \frac{3}{BC} \Rightarrow BC = 6.$$

(Echivalent: cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză.) *Barem: 2p $\sin C = \frac{AB}{BC}$, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}2 & 1\\ 4 & 3\end{pmatrix}$, $B = \begin{pmatrix}2 & -2\\ 1 & 3\end{pmatrix}$, $C = \begin{pmatrix}2 & -1\\ 2 & 3\end{pmatrix}$

#### a) $\det A = 2$

$$\det A = \begin{vmatrix}2 & 1\\ 4 & 3\end{vmatrix} = 2\cdot3 - 1\cdot4 = 6 - 4 = 2.$$

*Barem: 3p + 2p.*

#### b) $A + 2B = 3C$

$$2B = \begin{pmatrix}4 & -4\\ 2 & 6\end{pmatrix},\quad A + 2B = \begin{pmatrix}6 & -3\\ 6 & 9\end{pmatrix} = 3\begin{pmatrix}2 & -1\\ 2 & 3\end{pmatrix} = 3C.$$

*Barem: 3p calculul lui $A + 2B$, 2p concluzia.*

#### c) $x$ real cu $\det\big(B\cdot C + x(A - C)\big) = 0$

Produsul (linie × coloană):

$$B\cdot C = \begin{pmatrix}2\cdot2 + (-2)\cdot2 & 2\cdot(-1) + (-2)\cdot3\\ 1\cdot2 + 3\cdot2 & 1\cdot(-1) + 3\cdot3\end{pmatrix} = \begin{pmatrix}0 & -8\\ 8 & 8\end{pmatrix}.$$

$A - C = \begin{pmatrix}0 & 2\\ 2 & 0\end{pmatrix}$, deci

$$B\cdot C + x(A - C) = \begin{pmatrix}0 & -8 + 2x\\ 8 + 2x & 8\end{pmatrix}.$$

$$\det = 0\cdot 8 - (2x - 8)(2x + 8) = (8 - 2x)(8 + 2x).$$

$(8 - 2x)(8 + 2x) = 0 \iff x = 4$ sau $x = -4$.

**Răspuns:** $x \in \{-4, 4\}$. *Barem: 3p matricea și determinantul, 2p soluțiile.*

### 2. Legea $x * y = (x + 2y)(y + 2x) + 2$

#### a) $1 * 1 = 11$

$$1 * 1 = (1 + 2)(1 + 2) + 2 = 9 + 2 = 11.$$

#### b) $x * 0 = 4$

$x * 0 = (x + 0)(0 + 2x) + 2 = 2x^2 + 2$. Ecuația: $2x^2 + 2 = 4 \iff x^2 = 1 \iff x = \pm1$.

**Răspuns:** $x \in \{-1, 1\}$. *Barem: 3p expresia, 2p soluțiile.*

#### c) Demonstrați că $x * \dfrac1x > 7$ pentru orice $x \ne 0$

$$x * \frac1x = \left(x + \frac2x\right)\left(\frac1x + 2x\right) + 2.$$

Desfacem parantezele termen cu termen: $x\cdot\dfrac1x = 1$, $x\cdot2x = 2x^2$, $\dfrac2x\cdot\dfrac1x = \dfrac{2}{x^2}$, $\dfrac2x\cdot 2x = 4$. Deci

$$x * \frac1x = 1 + 2x^2 + \frac{2}{x^2} + 4 + 2 = 2\left(x^2 + \frac{1}{x^2}\right) + 7.$$

Pentru $x \ne 0$, $x^2 > 0$ și $\dfrac{1}{x^2} > 0$, deci $2\left(x^2 + \dfrac1{x^2}\right) > 0$ și $x * \dfrac1x > 7$. $\blacksquare$

*Barem: 3p calculul expresiei, 2p justificarea inegalității.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 2x^5 + 5x^4 - 10x^3 + 1$

#### a) $f'(x) = 10x^2(x^2 + 2x - 3)$

$$f'(x) = 2\cdot5x^4 + 5\cdot4x^3 - 10\cdot3x^2 = 10x^4 + 20x^3 - 30x^2 = 10x^2(x^2 + 2x - 3).$$

*Barem: 3p derivarea, 2p factorul comun.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 1$, $f'(0) = 0$. Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$, adică

$$y = 1.$$

**Răspuns:** $y = 1$ (tangentă orizontală). *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația.*

#### c) Demonstrați că $2x^5 + 5x^4 - 10x^3 + 3 \ge 0$ pentru $x \in [-3, +\infty)$

Observăm că expresia este $f(x) + 2$, deci trebuie arătat că $f(x) \ge -2$ pe $[-3, +\infty)$.

$x^2 + 2x - 3 = (x - 1)(x + 3)$, deci $f'(x) = 10x^2(x - 1)(x + 3)$, cu zerourile $-3$, $0$, $1$. Cum $10x^2 \ge 0$, semnul lui $f'$ pe $[-3, +\infty)$ este dat de $(x-1)(x+3)$:

| $x$ | $-3$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | $0$ | $-$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $190$ | ↘ | $1$ | ↘ | $-2$ | ↗ | |

Deci $f$ este descrescătoare pe $[-3, 1]$ și crescătoare pe $[1, +\infty)$, iar $x = 1$ este punct de minim pe $[-3, +\infty)$: $f(x) \ge f(1) = 2 + 5 - 10 + 1 = -2$.

Prin urmare $2x^5 + 5x^4 - 10x^3 + 1 \ge -2$, adică $2x^5 + 5x^4 - 10x^3 + 3 \ge 0$ pentru orice $x \in [-3, +\infty)$. $\blacksquare$

*Barem: 3p monotonia și minimul, 2p concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = 6x + \dfrac{2}{x + 1}$

#### a) $\displaystyle\int_0^2\left(f(x) - \frac{2}{x+1}\right)dx = 12$

$$\int_0^2 6x\,dx = 6\cdot\frac{x^2}{2}\Big|_0^2 = 3x^2\Big|_0^2 = 12 - 0 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1\big(f(x) - 6x\big)\,dx = 2\ln2$

$$\int_0^1\frac{2}{x+1}\,dx = 2\ln(x+1)\Big|_0^1 = 2\ln2 - 2\ln1 = 2\ln2.$$

(Pe $[0,1]$, $x + 1 > 0$, deci modulul din $\ln|x+1|$ nu e necesar.) *Barem: 3p + 2p.*

#### c) $a$ real cu $\displaystyle\int_1^e\left(f(x) - \frac{2}{x+1}\right)\ln^2x\,dx = \frac{a(e^2 - 1)}{2}$

Integrala devine $\displaystyle\int_1^e 6x\ln^2x\,dx$. Integrăm prin părți cu $u = \ln^2x$, $v' = 6x$, deci $u' = \dfrac{2\ln x}{x}$, $v = 3x^2$:

$$\int_1^e 6x\ln^2x\,dx = 3x^2\ln^2x\Big|_1^e - \int_1^e 3x^2\cdot\frac{2\ln x}{x}\,dx = 3e^2 - \int_1^e 6x\ln x\,dx.$$

A doua oară prin părți, cu $u = \ln x$, $v' = 6x$ ($u' = \frac1x$, $v = 3x^2$):

$$\int_1^e 6x\ln x\,dx = 3x^2\ln x\Big|_1^e - \int_1^e 3x\,dx = 3e^2 - \frac{3x^2}{2}\Big|_1^e = 3e^2 - \frac{3e^2 - 3}{2} = \frac{3e^2 + 3}{2}.$$

Deci

$$\int_1^e 6x\ln^2x\,dx = 3e^2 - \frac{3e^2 + 3}{2} = \frac{3e^2 - 3}{2} = \frac{3(e^2 - 1)}{2}.$$

Comparând cu $\dfrac{a(e^2-1)}{2}$ obținem $a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p calculul integralei (prin părți, de două ori), 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 6$ |
| I.3 | $x = 0$ |
| I.4 | 99 de lei |
| I.5 | $a = 3$, $b = 2$ |
| II.1.c | $x \in \{-4, 4\}$ |
| II.2.b | $x \in \{-1, 1\}$ |
| III.1.b | $y = 1$ |
| III.2.c | $a = 3$ |

## Ce merită reținut din varianta 1

- **Inegalități cu polinoame pe un interval**: recunoaște în expresie funcția dată ($f(x) + 2$) și folosește minimul ei din tabelul de variație.
- **Puncte în care $f'$ se anulează fără să schimbe semnul** (aici $x = 0$, din $x^2$): nu sunt extreme.
- **$\int x\ln^2 x\,dx$**: integrare prin părți de două ori, coborând de fiecare dată puterea logaritmului.

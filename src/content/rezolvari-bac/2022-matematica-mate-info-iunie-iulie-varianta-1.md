Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $8 - 6\sqrt6 + 6\left(\sqrt6 - 1\right) = 2$

Desfacem paranteza: $6\left(\sqrt6 - 1\right) = 6\sqrt6 - 6$. Atunci

$$8 - 6\sqrt6 + 6\sqrt6 - 6 = 8 - 6 = 2.$$

Termenii cu radical se reduc. *Barem: 3p desfacerea parantezei, 2p rezultatul.*

### 2. $f(x) = 3x + m$: determinați $m$ cu $(f \circ f)(0) = 4$

$f(0) = m$, deci $(f\circ f)(0) = f(f(0)) = f(m) = 3m + m = 4m$. Condiția: $4m = 4 \iff m = 1$.

**Răspuns:** $m = 1$. *Barem: 3p calculul lui $(f\circ f)(0)$, 2p valoarea lui $m$.*

### 3. Ecuația $3\cdot 2^{2x} + 4^x = 4$

Observăm că $2^{2x} = (2^2)^x = 4^x$. Ecuația devine

$$3\cdot 4^x + 4^x = 4 \iff 4\cdot 4^x = 4 \iff 4^x = 1 = 4^0 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 3p rescrierea $4\cdot 4^x = 4$, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifra zecilor divizor al lui 6

**Cazuri posibile:** 90 de numere de două cifre ($10, \dots, 99$).

**Cazuri favorabile:** divizorii lui 6 sunt $1, 2, 3, 6$, deci cifra zecilor are 4 variante, iar cifra unităților oricare dintre cele 10 cifre: $4\cdot 10 = 40$ de numere.

$$p = \frac{40}{90} = \frac49.$$

**Răspuns:** $p = \dfrac49$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. Dreapta $d: y = 3x - 2$ și $A(a, a)$ pe $d$: determinați $a$

Punctul aparține dreptei dacă coordonatele lui verifică ecuația: $a = 3a - 2 \iff 2a = 2 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p condiția de apartenență, 2p rezolvarea.*

### 6. Triunghi isoscel $ABC$, $AB = 10$, $\cos A = 0$: aria este 50

$\cos A = 0$ și $A \in (0, \pi)$ înseamnă $A = \dfrac\pi2$: triunghiul este dreptunghic în $A$. Într-un triunghi dreptunghic isoscel, laturile egale sunt catetele (ipotenuza este strict mai lungă decât fiecare catetă), deci $AC = AB = 10$.

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{10\cdot 10}{2} = 50.$$

*Barem: 2p $A = \frac\pi2$, 3p $AC = AB$ și aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1 & -x & x^2\\ 0 & 1 & -2x\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det(A(1)) = 1$

$A(1) = \begin{pmatrix}1 & -1 & 1\\ 0 & 1 & -2\\ 0 & 0 & 1\end{pmatrix}$ este superior triunghiulară, deci determinantul este produsul elementelor de pe diagonală: $1\cdot1\cdot1 = 1$. (Cu Sarrus: $1 + 0 + 0 - 0 - 0 - 0 = 1$.)

*Barem: 2p scrierea, 3p calculul.*

#### b) $A(x)\cdot A(y) = A(x+y)$, pentru orice $x, y$ reale

$$A(x)\cdot A(y) = \begin{pmatrix}1 & -x & x^2\\ 0 & 1 & -2x\\ 0 & 0 & 1\end{pmatrix}\begin{pmatrix}1 & -y & y^2\\ 0 & 1 & -2y\\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix}1 & -y - x & y^2 + 2xy + x^2\\ 0 & 1 & -2y - 2x\\ 0 & 0 & 1\end{pmatrix}.$$

Detaliu pentru elementul $(1,3)$: $1\cdot y^2 + (-x)(-2y) + x^2\cdot 1 = y^2 + 2xy + x^2 = (x+y)^2$. Deci

$$A(x)\cdot A(y) = \begin{pmatrix}1 & -(x+y) & (x+y)^2\\ 0 & 1 & -2(x+y)\\ 0 & 0 & 1\end{pmatrix} = A(x+y).$$

*Barem: 3p produsul, 2p identificarea cu $A(x+y)$.*

#### c) $n$ natural pentru care $A(n)\cdot A(n+1)\cdot A(n+2)\cdot A(n+3) = A(2n^2)$

Aplicând b) succesiv, produsul este $A$ de suma argumentelor:

$$A(n)A(n+1)A(n+2)A(n+3) = A\big(n + (n+1) + (n+2) + (n+3)\big) = A(4n + 6).$$

$A(4n+6) = A(2n^2)$; comparând elementul $(1,2)$: $4n + 6 = 2n^2 \iff n^2 - 2n - 3 = 0 \iff (n - 3)(n + 1) = 0$. Cum $n \in \mathbb N$, rămâne $n = 3$.

**Răspuns:** $n = 3$. *Barem: 3p produsul $A(4n+6)$, 2p rezolvarea ecuației.*

### 2. Legea $x * y = \dfrac{2x}{y+2} + \dfrac{2y}{x+2}$ pe $M = [0, +\infty)$

#### a) $1 * 0 = 1$

$$1 * 0 = \frac{2\cdot 1}{0 + 2} + \frac{2\cdot 0}{1 + 2} = 1 + 0 = 1.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 0$ este element neutru

Pentru orice $x \in M$ (și $0 \in M$):

$$x * 0 = \frac{2x}{2} + \frac{0}{x+2} = x, \qquad 0 * x = \frac{0}{x+2} + \frac{2x}{2} = x.$$

Deci $e = 0$ este elementul neutru.

*Barem: 2p $x * 0 = x$, 3p $0 * x = x$ și concluzia.*

#### c) $x \in M$, $x \ne 0$, cu $x * \dfrac4x = x$

$$x * \frac4x = \frac{2x}{\frac4x + 2} + \frac{\frac8x}{x + 2} = \frac{2x^2}{2(x+2)} + \frac{8}{x(x+2)} = \frac{x^2}{x+2} + \frac{8}{x(x+2)} = \frac{x^3 + 8}{x(x+2)}.$$

Cum $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$, expresia se simplifică: $x * \dfrac4x = \dfrac{x^2 - 2x + 4}{x}$. Ecuația:

$$\frac{x^2 - 2x + 4}{x} = x \iff x^2 - 2x + 4 = x^2 \iff x = 2.$$

$x = 2 \in M$, nenul — convine.

**Răspuns:** $x = 2$. *Barem: 3p expresia $\frac{x^3+8}{x(x+2)}$, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = 2 + \dfrac{x}{e^x - x}$

(Funcția e bine definită: $e^x \ge x + 1 > x$, deci $e^x - x > 0$ pentru orice $x$.)

#### a) $f'(x) = \dfrac{e^x(1-x)}{(e^x - x)^2}$

$$f'(x) = \frac{1\cdot(e^x - x) - x(e^x - 1)}{(e^x - x)^2} = \frac{e^x - x - xe^x + x}{(e^x - x)^2} = \frac{e^x - xe^x}{(e^x-x)^2} = \frac{e^x(1-x)}{(e^x - x)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Intervalele de monotonie

Numitorul și $e^x$ sunt pozitive, deci semnul lui $f'$ este semnul lui $1 - x$:

- pentru $x \in (-\infty, 1]$: $f'(x) \ge 0$, deci $f$ este **crescătoare** pe $(-\infty, 1]$;
- pentru $x \in [1, +\infty)$: $f'(x) \le 0$, deci $f$ este **descrescătoare** pe $[1, +\infty)$.

*Barem: 3p rădăcina $x = 1$ și monotonia pe $(-\infty, 1]$, 2p monotonia pe $[1, +\infty)$.*

#### c) Pentru orice $m \in (1, 2]$, ecuația $f(x) = m$ are soluție unică

Calculăm limitele la capete și valoarea maximă:

- $x \to -\infty$: $e^x \to 0$, deci $\dfrac{x}{e^x - x} \to \dfrac{x}{-x} = -1$ (formal: $\dfrac{x}{e^x - x} = \dfrac{1}{\frac{e^x}{x} - 1} \to \dfrac{1}{0 - 1} = -1$). Așadar $\lim\limits_{x\to-\infty}f(x) = 1$.
- $x \to +\infty$: $\dfrac{x}{e^x - x} = \dfrac{x/e^x}{1 - x/e^x} \to \dfrac{0}{1} = 0$, deci $\lim\limits_{x\to+\infty}f(x) = 2$.
- $f(1) = 2 + \dfrac{1}{e - 1}$ — maximul global.

Pe $(-\infty, 1]$, $f$ este continuă și strict crescătoare de la $1$ (neatins) la $2 + \frac{1}{e-1}$: ia fiecare valoare din $\left(1, 2 + \frac{1}{e-1}\right]$ exact o dată. Cum $2 < 2 + \frac{1}{e-1}$, orice $m \in (1, 2]$ este atins exact o dată pe acest interval.

Pe $(1, +\infty)$, $f$ este strict descrescătoare de la $2 + \frac{1}{e-1}$ spre $2$ (neatins), deci $f(x) > 2 \ge m$: nicio soluție.

Prin urmare, pentru orice $m \in (1, 2]$, ecuația $f(x) = m$ are soluție unică.

*Barem: 3p limitele și $f(1)$, 2p argumentul de continuitate și monotonie.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = 3 - x + \sqrt{x^2 + 9}$

#### a) $\displaystyle\int_1^5\left(f(x) - \sqrt{x^2+9}\right)dx = 0$

$$\int_1^5 (3 - x)\,dx = \left(3x - \frac{x^2}{2}\right)\Big|_1^5 = \left(15 - \frac{25}{2}\right) - \left(3 - \frac12\right) = \frac52 - \frac52 = 0.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^4\frac{x}{f(x) + x - 3}\,dx = 2$

$f(x) + x - 3 = \sqrt{x^2 + 9}$, deci integrandul este $\dfrac{x}{\sqrt{x^2+9}} = \dfrac{(x^2+9)'}{2\sqrt{x^2+9}} = \left(\sqrt{x^2+9}\right)'$:

$$\int_0^4\frac{x}{\sqrt{x^2+9}}\,dx = \sqrt{x^2 + 9}\,\Big|_0^4 = 5 - 3 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\lim\limits_{n\to+\infty} I_n = 0$, unde $I_n = \displaystyle\int_0^1\frac{x^n}{f(x)}\,dx$

Încadrăm integrandul. Pentru $x \in [0, 1]$: $3 - x \ge 2$ și $\sqrt{x^2 + 9} > 0$, deci $f(x) = 3 - x + \sqrt{x^2+9} \ge 2$. (De fapt $f(x) \ge 2 + 3 = 5$, dar $2$ ajunge.) Cum $x^n \ge 0$:

$$0 \le \frac{x^n}{f(x)} \le \frac{x^n}{2}, \quad x \in [0,1].$$

Integrăm inegalitățile (monotonia integralei):

$$0 \le I_n \le \frac12\int_0^1 x^n\,dx = \frac{1}{2(n+1)}.$$

Cum $\lim\limits_{n\to+\infty}\dfrac{1}{2(n+1)} = 0$, din criteriul cleștelui obținem $\lim\limits_{n\to+\infty} I_n = 0$.

*Barem: 2p rescrierea lui $I_n$, 3p încadrarea și trecerea la limită.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 1$ |
| I.3 | $x = 0$ |
| I.4 | $p = \dfrac49$ |
| I.5 | $a = 1$ |
| I.6 | aria $= 50$ |
| II.1.c | $n = 3$ |
| II.2.c | $x = 2$ |
| III.1.b | crescătoare pe $(-\infty, 1]$, descrescătoare pe $[1, +\infty)$ |
| III.2.c | $\lim I_n = 0$ |

## Ce merită reținut din varianta 1

- **Matrice cu proprietatea $A(x)A(y) = A(x+y)$**: un produs de mai mulți factori este $A$ de suma argumentelor.
- **Ecuații exponențiale**: recunoaște că $2^{2x} = 4^x$ înainte de orice substituție.
- **Soluție unică pentru $f(x) = m$**: limite la capete + valoarea extremului + strict monotonie pe fiecare interval.
- **Limite de șiruri de integrale**: încadrează integrandul între $0$ și $\frac{x^n}{c}$ și aplică criteriul cleștelui.

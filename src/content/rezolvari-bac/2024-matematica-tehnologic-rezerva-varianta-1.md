Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_tehnologic**, subiectul de rezervă (sesiunea august–septembrie), **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(\dfrac12 + \dfrac14\right)\cdot\dfrac43 = 1$

Numitor comun 4: $\dfrac12 + \dfrac14 = \dfrac24 + \dfrac14 = \dfrac34$.

$$\frac34\cdot\frac43 = \frac{12}{12} = 1.$$

(Două fracții inverse una alteia au produsul 1.) *Barem: 2p suma din paranteză, 3p produsul.*

### 2. $f(x) = 2x - 8$: determinați $a$ cu $f(a) = 0$

$f(a) = 2a - 8 = 0 \iff 2a = 8 \iff a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p $f(a)$, 3p rezolvarea.*

### 3. Ecuația $\sqrt{3x - 2} = 1$

**Condiția de existență:** $3x - 2 \ge 0 \iff x \ge \dfrac23$.

Ridicăm la pătrat (ambii membri nenegativi): $3x - 2 = 1 \iff 3x = 3 \iff x = 1$.

**Verificare:** $\sqrt{3 - 2} = \sqrt1 = 1$ ✔, iar $1 \ge \dfrac23$, deci soluția convine.

**Răspuns:** $x = 1$. *Barem: 3p ecuația $3x - 2 = 1$, 2p soluția care convine.*

### 4. Probabilitatea ca $n \in A = \{11, 12, \dots, 20\}$ să aibă suma cifrelor egală cu 2

$A$ are 10 elemente $\Rightarrow$ **10 cazuri posibile**.

Sumele cifrelor: $11 \to 2$, $12 \to 3$, …, $19 \to 10$, $20 \to 2$. Suma 2 o au doar $11$ și $20$ $\Rightarrow$ **2 cazuri favorabile**.

$$p = \frac{2}{10} = \frac15.$$

**Răspuns:** $p = \dfrac15$. Capcană: nu uita de 20! *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3,4)$, $B(6,8)$: arătați că $OA = AB$

$$OA = \sqrt{(3 - 0)^2 + (4 - 0)^2} = \sqrt{9 + 16} = 5,$$
$$AB = \sqrt{(6 - 3)^2 + (8 - 4)^2} = \sqrt{9 + 16} = 5.$$

Deci $OA = AB = 5$. (De fapt $A$ este mijlocul lui $OB$.) *Barem: 2p $OA$, 3p $AB$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 12$, $AC = 8$, $M$ mijlocul lui $AB$: $CM = 10$

$M$ mijlocul lui $AB$ $\Rightarrow$ $AM = \dfrac{AB}{2} = 6$.

Triunghiul $CAM$ este dreptunghic în $A$ (unghiul din $A$ este cel al triunghiului $ABC$), cu catetele $AC = 8$ și $AM = 6$. Din teorema lui Pitagora:

$$CM = \sqrt{AC^2 + AM^2} = \sqrt{64 + 36} = \sqrt{100} = 10.$$

*Barem: 2p $AM = 6$, 3p $CM = 10$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x - 1 & 2\\ 1 & x\end{pmatrix}$

#### a) $\det(A(2)) = 0$

$$A(2) = \begin{pmatrix}1 & 2\\ 1 & 2\end{pmatrix}, \qquad \det(A(2)) = 1\cdot 2 - 2\cdot 1 = 0.$$

(Cele două linii sunt egale, deci determinantul este nul.) *Barem: 3p dezvoltarea, 2p rezultatul.*

#### b) $A(3) + 2I_2 = A(5)$

$$A(3) + 2I_2 = \begin{pmatrix}2 & 2\\ 1 & 3\end{pmatrix} + \begin{pmatrix}2 & 0\\ 0 & 2\end{pmatrix} = \begin{pmatrix}4 & 2\\ 1 & 5\end{pmatrix} = \begin{pmatrix}5 - 1 & 2\\ 1 & 5\end{pmatrix} = A(5).$$

*Barem: 3p suma, 2p identificarea cu $A(5)$.*

#### c) $x$ cu $\det(A(x) + xI_2) = 0$

$$A(x) + xI_2 = \begin{pmatrix}2x - 1 & 2\\ 1 & 2x\end{pmatrix}, \qquad \det = (2x - 1)\cdot 2x - 2\cdot 1 = 4x^2 - 2x - 2.$$

$4x^2 - 2x - 2 = 0 \iff 2x^2 - x - 1 = 0$, $\Delta = 1 + 8 = 9$, $x = \dfrac{1 \pm 3}{4}$.

**Răspuns:** $x = 1$ sau $x = -\dfrac12$. *Barem: 3p determinantul, 2p soluțiile.*

### 2. Legea $x \circ y = 2x + 2y - 1$

#### a) $2 \circ 1 = 5$

$$2 \circ 1 = 2\cdot 2 + 2\cdot 1 - 1 = 4 + 2 - 1 = 5.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ cu $x \circ (x + 1) = 5$

$$x \circ (x + 1) = 2x + 2(x + 1) - 1 = 4x + 1.$$

$4x + 1 = 5 \iff x = 1$. Verificare: $1 \circ 2 = 2 + 4 - 1 = 5$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p expresia $4x + 1$, 2p soluția.*

#### c) Arătați că $x \circ x \le 4x^2$ pentru orice $x$ real

$x \circ x = 2x + 2x - 1 = 4x - 1$. Inegalitatea devine

$$4x - 1 \le 4x^2 \iff 4x^2 - 4x + 1 \ge 0 \iff (2x - 1)^2 \ge 0,$$

adevărat pentru orice $x$ real, deoarece un pătrat este nenegativ. (Egalitate pentru $x = \dfrac12$.)

*Barem: 2p $x \circ x = 4x - 1$, 3p reducerea la pătrat perfect și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x - 2\ln x$

#### a) $f'(x) = \dfrac{x - 2}{x}$

$$f'(x) = (x)' - 2(\ln x)' = 1 - \frac2x = \frac{x - 2}{x}.$$

*Barem: 2p derivatele termenilor, 3p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 1 - 2\ln 1 = 1$, $f'(1) = \dfrac{1 - 2}{1} = -1$.

$$y - f(1) = f'(1)(x - 1) \Rightarrow y - 1 = -(x - 1) \Rightarrow y = -x + 2.$$

**Răspuns:** $y = -x + 2$. *Barem: 2p $f(1)$ și $f'(1)$, 3p ecuația tangentei.*

#### c) $\ln\left(\dfrac x2\right) \le \dfrac{x - 2}{2}$ pentru orice $x > 0$

Pe $(0, +\infty)$, $x > 0$, deci semnul lui $f'$ este semnul lui $x - 2$; $f'(x) = 0 \iff x = 2$.

| $x$ | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $2 - 2\ln 2$ | ↗ | |

$f$ este descrescătoare pe $(0, 2]$ și crescătoare pe $[2, +\infty)$, deci $x = 2$ este punct de minim global: $f(x) \ge f(2) = 2 - 2\ln 2$ pentru orice $x > 0$.

Scriem: $x - 2\ln x \ge 2 - 2\ln 2 \iff x - 2 \ge 2(\ln x - \ln 2) = 2\ln\dfrac x2$. Împărțind la 2:

$$\ln\left(\frac x2\right) \le \frac{x - 2}{2}.$$

*Barem: 3p monotonia, 2p minimul $f(2)$ și transformarea inegalității.*

### 2. $f(x) = \dfrac{1}{x^2 + 1}$

#### a) $\displaystyle\int_0^3\frac{1}{f(x)}\,dx = 12$

$\dfrac{1}{f(x)} = x^2 + 1$:

$$\int_0^3 (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^3 = 9 + 3 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_2^3 2xf(x)\,dx = \ln 2$

$2xf(x) = \dfrac{2x}{x^2 + 1} = \dfrac{(x^2 + 1)'}{x^2 + 1}$, deci o primitivă este $\ln(x^2 + 1)$:

$$\int_2^3\frac{2x}{x^2 + 1}\,dx = \ln(x^2 + 1)\Big|_2^3 = \ln 10 - \ln 5 = \ln\frac{10}{5} = \ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ real cu $\displaystyle\int_1^2\frac{e^x}{f(x)}\,dx = e(ae - a + 1)$

$\dfrac{e^x}{f(x)} = e^x(x^2 + 1)$. Integrăm prin părți cu $u = x^2 + 1$, $v' = e^x$:

$$\int_1^2 e^x(x^2 + 1)\,dx = e^x(x^2 + 1)\Big|_1^2 - \int_1^2 2xe^x\,dx = (5e^2 - 2e) - \int_1^2 2xe^x\,dx.$$

Încă o dată prin părți: $\int 2xe^x\,dx = 2xe^x - 2e^x$, deci

$$\int_1^2 2xe^x\,dx = (2xe^x - 2e^x)\Big|_1^2 = (4e^2 - 2e^2) - (2e - 2e) = 2e^2.$$

Așadar integrala este $5e^2 - 2e - 2e^2 = 3e^2 - 2e = e(3e - 2)$.

Ecuația: $e(3e - 2) = e(ae - a + 1) \iff 3e - 2 = a(e - 1) + 1 \iff 3e - 3 = a(e - 1) \iff a = 3$ (am împărțit la $e - 1 \ne 0$).

**Răspuns:** $a = 3$. *Barem: 3p calculul integralei ($3e^2 - 2e$), 2p $a = 3$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 4$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac15$ |
| II.1.c | $x \in \left\{-\tfrac12, 1\right\}$ |
| II.2.b | $x = 1$ |
| III.1.b | $y = -x + 2$ |
| III.2.c | $a = 3$ |

## Ce merită reținut din varianta 1

- **Inegalități cu logaritmi**: găsește minimul funcției din enunț și rescrie inegalitatea $f(x) \ge f(x_{\min})$.
- **Integrale $\int P(x)e^x\,dx$**: integrare prin părți repetată, de câte ori este gradul polinomului.
- **Inegalități cu legi de compoziție**: adu totul într-un membru și caută un pătrat perfect.

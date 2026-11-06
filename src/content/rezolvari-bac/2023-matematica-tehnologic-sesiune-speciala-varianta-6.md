Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_tehnologic**, sesiunea specială, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: calculați $a_3$, știind $a_1 = 10$ și $a_2 = 20$

Rația este diferența a doi termeni consecutivi: $r = a_2 - a_1 = 20 - 10 = 10$. Atunci

$$a_3 = a_2 + r = 20 + 10 = 30.$$

**Răspuns:** $a_3 = 30$. *Barem: 2p rația, 3p $a_3$.*

### 2. $f(x) = 2x + 4$: arătați că $f(0) + f(1) = 10$

$f(0) = 2\cdot 0 + 4 = 4$ și $f(1) = 2\cdot 1 + 4 = 6$, deci $f(0) + f(1) = 4 + 6 = 10$.

*Barem: 2p $f(0)$, 3p $f(1)$ și suma.*

### 3. Ecuația $\log_2(x - 4) = \log_2 4$

**Condiție de existență:** $x - 4 > 0$, adică $x > 4$.

Funcția logaritmică este injectivă, deci argumentele sunt egale: $x - 4 = 4 \iff x = 8$. Cum $8 > 4$, soluția convine.

**Răspuns:** $x = 8$. *Barem: 3p ecuația $x - 4 = 4$, 2p soluția care convine.*

### 4. Prețul unui produs de 80 de lei după o ieftinire cu 20%

Ieftinirea este $20\%$ din 80: $\dfrac{20}{100}\cdot 80 = 16$ lei. Prețul nou: $80 - 16 = 64$ de lei.

(Echivalent: noul preț reprezintă $80\%$ din cel vechi, $0{,}8\cdot 80 = 64$.)

**Răspuns:** 64 de lei. *Barem: 2p valoarea ieftinirii, 3p prețul final.*

### 5. $M(0,2)$, $N(3,6)$: arătați că $MN = 5$

$$MN = \sqrt{(x_N - x_M)^2 + (y_N - y_M)^2} = \sqrt{(3-0)^2 + (6-2)^2} = \sqrt{9 + 16} = \sqrt{25} = 5.$$

*Barem: 3p formula și înlocuirea, 2p rezultatul.*

### 6. Triunghi dreptunghic în $A$, $AB = 4$, $\angle C = 45^\circ$; arătați că aria este 8

În triunghiul dreptunghic, $\angle B = 90^\circ - 45^\circ = 45^\circ = \angle C$, deci triunghiul este dreptunghic isoscel și catetele sunt egale: $AC = AB = 4$. (Sau: $\operatorname{tg} C = \dfrac{AB}{AC} = 1 \Rightarrow AC = 4$.)

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{4\cdot 4}{2} = 8.$$

*Barem: 3p $AC = 4$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(a) = \begin{pmatrix}a & a+3\\ -1 & 2\end{pmatrix}$

#### a) $\det(A(2)) = 9$

$A(2) = \begin{pmatrix}2 & 5\\ -1 & 2\end{pmatrix}$, deci $\det(A(2)) = 2\cdot 2 - 5\cdot(-1) = 4 + 5 = 9$.

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(a) + A(-a) = 2A(0)$, pentru orice $a$ real

$$A(a) + A(-a) = \begin{pmatrix}a & a+3\\ -1 & 2\end{pmatrix} + \begin{pmatrix}-a & -a+3\\ -1 & 2\end{pmatrix} = \begin{pmatrix}0 & 6\\ -2 & 4\end{pmatrix} = 2\begin{pmatrix}0 & 3\\ -1 & 2\end{pmatrix} = 2A(0).$$

*Barem: 3p suma, 2p identificarea cu $2A(0)$.*

#### c) $a$ real pentru care $\det\left(A(a)\cdot A(-1) - aI_2\right) = 0$

$A(-1) = \begin{pmatrix}-1 & 2\\ -1 & 2\end{pmatrix}$. Produsul (linie × coloană):

$$A(a)\cdot A(-1) = \begin{pmatrix}-a - (a+3) & 2a + 2(a+3)\\ 1 - 2 & -2 + 4\end{pmatrix} = \begin{pmatrix}-2a - 3 & 4a + 6\\ -1 & 2\end{pmatrix}.$$

$$A(a)\cdot A(-1) - aI_2 = \begin{pmatrix}-3a - 3 & 4a + 6\\ -1 & 2 - a\end{pmatrix}.$$

$$\det = (-3a - 3)(2 - a) - (4a + 6)(-1) = (3a^2 - 3a - 6) + 4a + 6 = 3a^2 + a.$$

$3a^2 + a = 0 \iff a(3a + 1) = 0 \iff a = 0$ sau $a = -\dfrac13$.

**Răspuns:** $a \in \left\{-\dfrac13, 0\right\}$. *Barem: 3p matricea și determinantul $3a^2 + a$, 2p soluțiile.*

### 2. Polinomul $f = X^3 + 3X^2 + mX - 4$

#### a) $f(0) = -4$, pentru orice $m$ real

$f(0) = 0^3 + 3\cdot 0^2 + m\cdot 0 - 4 = -4$, indiferent de $m$ (termenul liber nu depinde de $m$).

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ știind că $-1$ este rădăcină

$f(-1) = -1 + 3 - m - 4 = -m - 2$. Condiția $f(-1) = 0$ dă $-m - 2 = 0 \iff m = -2$.

**Răspuns:** $m = -2$. *Barem: 2p $f(-1)$, 3p rezolvarea.*

#### c) $m$ natural pentru care $x_1^2 + x_2^2 + x_3^2 > 5$

Relațiile lui Viète pentru $X^3 + 3X^2 + mX - 4$: $x_1 + x_2 + x_3 = -3$, $x_1x_2 + x_2x_3 + x_3x_1 = m$. Atunci

$$x_1^2 + x_2^2 + x_3^2 = (x_1 + x_2 + x_3)^2 - 2(x_1x_2 + x_2x_3 + x_3x_1) = 9 - 2m.$$

Inecuația: $9 - 2m > 5 \iff 2m < 4 \iff m < 2$. Cu $m \in \mathbb N$: $m \in \{0, 1\}$.

**Răspuns:** $m \in \{0, 1\}$. *Barem: 3p suma pătratelor, 2p valorile lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^2 - 3x + 4 + \ln x$

#### a) $f'(x) = \dfrac{(2x-1)(x-1)}{x}$

$$f'(x) = 2x - 3 + \frac1x = \frac{2x^2 - 3x + 1}{x}.$$

Trinomul $2x^2 - 3x + 1$ are $\Delta = 9 - 8 = 1$ și rădăcinile $\dfrac{3 \pm 1}{4}$, adică $1$ și $\dfrac12$, deci $2x^2 - 3x + 1 = 2\left(x - \dfrac12\right)(x - 1) = (2x - 1)(x - 1)$.

*Barem: 3p derivata, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 1 - 3 + 4 + \ln 1 = 2$, iar din a) $f'(1) = \dfrac{1\cdot 0}{1} = 0$.

Ecuația tangentei: $y - f(1) = f'(1)(x - 1) \iff y - 2 = 0 \iff y = 2$ (tangentă orizontală).

**Răspuns:** $y = 2$. *Barem: 2p $f(1)$ și $f'(1)$, 3p ecuația.*

#### c) $f(x) \le \dfrac{11}{4} - \ln 2$, pentru orice $x \in (0, 1]$

Studiem semnul lui $f'$ pe $(0,1]$. Pe acest interval $x > 0$, $x - 1 \le 0$, iar $2x - 1$ își schimbă semnul în $\frac12$:

| $x$ | $0$ | | $\tfrac12$ | | $1$ |
|---|---|---|---|---|---|
| $2x-1$ | | $-$ | $0$ | $+$ | |
| $x-1$ | | $-$ | | $-$ | $0$ |
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ |
| $f(x)$ | | ↗ | $f(\tfrac12)$ | ↘ | |

Deci $f$ este crescătoare pe $\left(0, \frac12\right]$ și descrescătoare pe $\left[\frac12, 1\right]$, iar $x = \frac12$ este punct de maxim pe $(0,1]$: $f(x) \le f\left(\frac12\right)$.

$$f\left(\frac12\right) = \frac14 - \frac32 + 4 + \ln\frac12 = \frac{1 - 6 + 16}{4} - \ln 2 = \frac{11}{4} - \ln 2.$$

Prin urmare $f(x) \le \dfrac{11}{4} - \ln 2$ pentru orice $x \in (0, 1]$.

*Barem: 3p monotonia, 2p valoarea maximă și concluzia.*

### 2. $f:\left(-\dfrac32, +\infty\right) \to \mathbb R$, $f(x) = e^x + \dfrac{6}{2x+3}$

#### a) $\displaystyle\int_1^3\left(f(x) - \frac{6}{2x+3}\right)dx = e(e^2 - 1)$

Integrandul este $e^x$:

$$\int_1^3 e^x\,dx = e^x\Big|_1^3 = e^3 - e = e(e^2 - 1).$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_{-1}^0 (f(x) - e^x)\,dx = 3\ln 3$

Integrandul este $\dfrac{6}{2x+3} = 3\cdot\dfrac{(2x+3)'}{2x+3}$, deci o primitivă este $3\ln(2x+3)$ (pe interval $2x + 3 > 0$):

$$\int_{-1}^0\frac{6}{2x+3}\,dx = 3\ln(2x+3)\Big|_{-1}^0 = 3(\ln 3 - \ln 1) = 3\ln 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Aria suprafeței delimitate de graficul lui $g(x) = (2x^2 + 3x)f(x)$, $Ox$, $x = 0$, $x = 1$, este $2(e+1)$

Simplificăm $g$: cum $2x^2 + 3x = x(2x + 3)$,

$$g(x) = (2x^2 + 3x)e^x + x(2x+3)\cdot\frac{6}{2x+3} = (2x^2 + 3x)e^x + 6x.$$

Pe $[0, 1]$ avem $g(x) \ge 0$, deci aria este $\mathcal A = \displaystyle\int_0^1 g(x)\,dx$.

Pentru $\displaystyle\int_0^1 (2x^2 + 3x)e^x\,dx$ integrăm prin părți de două ori:

$$\int_0^1 (2x^2 + 3x)e^x\,dx = (2x^2 + 3x)e^x\Big|_0^1 - \int_0^1 (4x + 3)e^x\,dx = 5e - \int_0^1(4x+3)e^x\,dx,$$

$$\int_0^1 (4x+3)e^x\,dx = (4x+3)e^x\Big|_0^1 - \int_0^1 4e^x\,dx = (7e - 3) - 4(e - 1) = 3e + 1.$$

Deci $\displaystyle\int_0^1 (2x^2 + 3x)e^x\,dx = 5e - 3e - 1 = 2e - 1$ (o primitivă este $(2x^2 - x + 1)e^x$). Apoi $\displaystyle\int_0^1 6x\,dx = 3x^2\Big|_0^1 = 3$.

$$\mathcal A = 2e - 1 + 3 = 2e + 2 = 2(e + 1).$$

*Barem: 3p expresia lui $g$, formula ariei și integrarea prin părți, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 30$ |
| I.2 | $f(0) + f(1) = 10$ |
| I.3 | $x = 8$ |
| I.4 | 64 de lei |
| I.5 | $MN = 5$ |
| I.6 | aria $= 8$ |
| II.1.c | $a \in \{-\tfrac13, 0\}$ |
| II.2.b | $m = -2$ |
| II.2.c | $m \in \{0, 1\}$ |
| III.1.b | $y = 2$ |
| III.1.c | maximul pe $(0,1]$ este $f(\tfrac12) = \tfrac{11}{4} - \ln 2$ |
| III.2.c | $\mathcal A = 2(e+1)$ |

## Ce merită reținut din varianta 6

- **Suma pătratelor rădăcinilor**: $x_1^2 + x_2^2 + x_3^2 = S_1^2 - 2S_2$ — apare des la polinoame cu parametru.
- **Inegalități de tip $f(x) \le c$ pe un interval**: tabel de monotonie, apoi valoarea în punctul de maxim.
- **Arii**: simplifică întâi funcția (aici fracția $\frac{6}{2x+3}$ dispare), verifică semnul pe interval, apoi integrează prin părți.

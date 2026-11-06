Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $1 + 6\cdot\left(\dfrac12 + \dfrac13\right) = 6$

Aducem fracțiile la numitorul comun 6: $\dfrac12 + \dfrac13 = \dfrac36 + \dfrac26 = \dfrac56$.

$$1 + 6\cdot\frac56 = 1 + 5 = 6.$$

Atenție la ordinea operațiilor: întâi paranteza, apoi înmulțirea, la final adunarea. *Barem: 3p calculul parantezei și al produsului, 2p finalizarea.*

### 2. Funcția $f(x) = x - 2$: arătați că $f(3) - f(2) = 1$

$f(3) = 3 - 2 = 1$ și $f(2) = 2 - 2 = 0$, deci

$$f(3) - f(2) = 1 - 0 = 1.$$

*Barem: 2p $f(3)$, 3p $f(2)$ și concluzia.*

### 3. Ecuația $\sqrt{3x + 1} = 2$

**Condiție de existență:** $3x + 1 \ge 0 \iff x \ge -\dfrac13$.

Ambii membri sunt nenegativi, deci putem ridica la pătrat: $3x + 1 = 4 \iff 3x = 3 \iff x = 1$.

**Verificare:** $x = 1 \ge -\frac13$ și $\sqrt{3\cdot1 + 1} = \sqrt4 = 2$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ecuația $3x + 1 = 4$, 2p soluția care convine.*

### 4. Probabilitatea ca $10 - n$ să fie par, $n \in A = \{1, 2, \dots, 9\}$

**Cazuri posibile:** $A$ are 9 elemente, deci 9 cazuri posibile.

**Cazuri favorabile:** $10$ este par, iar diferența a două numere este pară exact când au aceeași paritate. Deci $10 - n$ este par $\iff n$ este par: $n \in \{2, 4, 6, 8\}$ — 4 cazuri favorabile (verificare: $10-2=8$, $10-4=6$, $10-6=4$, $10-8=2$).

$$p = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac49.$$

**Răspuns:** $p = \dfrac49$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(a, 0)$, $B(a, 6)$: arătați că $AB = 6$ pentru orice $a$

Formula distanței: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.

$$AB = \sqrt{(a - a)^2 + (6 - 0)^2} = \sqrt{0 + 36} = 6,$$

indiferent de valoarea lui $a$ (abscisele sunt egale, deci segmentul este vertical, de lungime $|6 - 0|$). *Barem: 3p aplicarea formulei, 2p finalizarea.*

### 6. Triunghi dreptunghic în $A$, $AB = 5$, $AC = 2AB$: aria este 25

$AC = 2\cdot 5 = 10$. Într-un triunghi dreptunghic, catetele sunt perpendiculare, deci una este înălțimea corespunzătoare celeilalte:

$$\mathcal A_{\triangle ABC} = \frac{AB\cdot AC}{2} = \frac{5\cdot 10}{2} = 25.$$

*Barem: 2p $AC = 10$, 3p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $A = \begin{pmatrix}7 & 3\\ 3 & 1\end{pmatrix}$, $B = \begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}$, $I_2$

#### a) $\det A = -2$

$$\det A = \begin{vmatrix}7 & 3\\ 3 & 1\end{vmatrix} = 7\cdot1 - 3\cdot3 = 7 - 9 = -2.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A - 4I_2 = 3B$

$$A - 4I_2 = \begin{pmatrix}7 & 3\\ 3 & 1\end{pmatrix} - \begin{pmatrix}4 & 0\\ 0 & 4\end{pmatrix} = \begin{pmatrix}3 & 3\\ 3 & -3\end{pmatrix} = 3\begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix} = 3B.$$

*Barem: 3p calculul lui $A - 4I_2$, 2p scoaterea factorului 3.*

#### c) Matricea $X$ pentru care $X + X\cdot B = A$

Dăm factor comun pe $X$ **la stânga** (deoarece $B$ apare înmulțit la dreapta lui $X$): $X + XB = X(I_2 + B)$. Ecuația devine $X(I_2 + B) = A$.

$$I_2 + B = \begin{pmatrix}2 & 1\\ 1 & 0\end{pmatrix}, \qquad \det(I_2 + B) = 0 - 1 = -1 \ne 0,$$

deci $I_2 + B$ este inversabilă și $X = A\,(I_2 + B)^{-1}$ (înmulțim la dreapta cu inversa — ordinea contează, înmulțirea matricelor nu e comutativă).

Inversa unei matrice $2\times2$ $\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ este $\dfrac{1}{ad - bc}\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$:

$$(I_2 + B)^{-1} = \frac{1}{-1}\begin{pmatrix}0 & -1\\ -1 & 2\end{pmatrix} = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}.$$

$$X = \begin{pmatrix}7 & 3\\ 3 & 1\end{pmatrix}\begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix} = \begin{pmatrix}0 + 3 & 7 - 6\\ 0 + 1 & 3 - 2\end{pmatrix} = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix}.$$

**Verificare:** $XB = \begin{pmatrix}4 & 2\\ 2 & 0\end{pmatrix}$, iar $X + XB = \begin{pmatrix}7 & 3\\ 3 & 1\end{pmatrix} = A$ ✔.

**Răspuns:** $X = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix}$. *Barem: 2p scrierea $X = A(I_2 + B)^{-1}$, 3p inversa și matricea $X$.*

### 2. Legea $x * y = xy(x + y - 4)$

#### a) $2 * 3 = 6$

$$2 * 3 = 2\cdot3\cdot(2 + 3 - 4) = 6\cdot1 = 6.$$

*Barem: 3p + 2p.*

#### b) $1 * x = 4$

$1 * x = 1\cdot x\cdot(1 + x - 4) = x(x - 3) = x^2 - 3x$.

$$x^2 - 3x = 4 \iff x^2 - 3x - 4 = 0,\quad \Delta = 9 + 16 = 25,\quad x_{1,2} = \frac{3 \pm 5}{2}.$$

**Răspuns:** $x = -1$ sau $x = 4$. *Barem: 2p expresia $1 * x$, 3p rezolvarea ecuației.*

#### c) $2^x * 2^x = 2^{3x}$

$$2^x * 2^x = 2^x\cdot2^x\,(2^x + 2^x - 4) = 2^{2x}(2\cdot2^x - 4).$$

Ecuația: $2^{2x}(2\cdot2^x - 4) = 2^{3x}$. Împărțim prin $2^{2x} > 0$ (niciodată zero):

$$2\cdot2^x - 4 = 2^x \iff 2^x = 4 = 2^2 \iff x = 2.$$

**Răspuns:** $x = 2$. *Barem: 2p expresia compunerii, 3p rezolvarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 - 9x^2 + 3$

#### a) $f'(x) = 3x(x - 6)$

$$f'(x) = 3x^2 - 9\cdot2x + 0 = 3x^2 - 18x = 3x(x - 6).$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Intervalele de monotonie

$f'(x) = 0 \iff x = 0$ sau $x = 6$. Semnul lui $3x(x-6)$ (trinom de gradul II cu coeficient dominant pozitiv: pozitiv în afara rădăcinilor, negativ între ele):

| $x$ | $-\infty$ | | $0$ | | $6$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $3$ | ↘ | $-105$ | ↗ | |

**Răspuns:** $f$ este crescătoare pe $(-\infty, 0]$, descrescătoare pe $[0, 6]$ și crescătoare pe $[6, +\infty)$. *Barem: 2p rădăcinile derivatei, 3p intervalele.*

#### c) $\displaystyle\lim_{x\to1}\frac{f'(x) - f'(1)}{3f(x) - xf'(x)} = \frac23$

$f'(1) = 3 - 18 = -15$, deci numărătorul este $3x^2 - 18x + 15 = 3(x^2 - 6x + 5) = 3(x-1)(x-5)$.

Numitorul: $3f(x) - xf'(x) = 3x^3 - 27x^2 + 9 - 3x^3 + 18x^2 = 9 - 9x^2 = -9(x-1)(x+1)$.

În $x = 1$ ambele se anulează (nedeterminare $\frac00$), așa că simplificăm prin $x - 1$:

$$\lim_{x\to1}\frac{3(x-1)(x-5)}{-9(x-1)(x+1)} = \lim_{x\to1}\frac{x - 5}{-3(x+1)} = \frac{-4}{-6} = \frac23.$$

*Barem: 2p aducerea la forma $\frac{3(x^2-6x+5)}{9(1-x^2)}$, 3p simplificarea și limita.*

### 2. $f(x) = (x - 1)e^x$

#### a) $\displaystyle\int_0^2\frac{f(x)}{e^x}\,dx = 0$

$\dfrac{f(x)}{e^x} = x - 1$, deci

$$\int_0^2 (x - 1)\,dx = \left(\frac{x^2}{2} - x\right)\Big|_0^2 = (2 - 2) - 0 = 0.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = 2 - e$

Integrare prin părți cu $u = x - 1$, $v' = e^x$ ($u' = 1$, $v = e^x$):

$$\int_0^1 (x-1)e^x\,dx = (x-1)e^x\Big|_0^1 - \int_0^1 e^x\,dx = \big(0 - (-1)\big) - (e - 1) = 1 - e + 1 = 2 - e.$$

*Barem: 3p integrarea prin părți, 2p rezultatul.*

#### c) $n > 2$ natural cu $\displaystyle\int_2^n\frac{x}{f(x)f(-x)}\,dx = \frac12\ln\frac38$

Calculăm produsul: $f(-x) = (-x - 1)e^{-x}$, deci

$$f(x)f(-x) = (x-1)(-x-1)e^{x}e^{-x} = -(x-1)(x+1) = 1 - x^2.$$

Integrandul este $\dfrac{x}{1 - x^2} = -\dfrac12\cdot\dfrac{(x^2 - 1)'}{x^2 - 1}$. Pe $[2, n]$ avem $x^2 - 1 > 0$, deci:

$$\int_2^n\frac{x}{1 - x^2}\,dx = -\frac12\ln(x^2 - 1)\Big|_2^n = -\frac12\big(\ln(n^2 - 1) - \ln3\big) = \frac12\ln\frac{3}{n^2 - 1}.$$

Ecuația: $\dfrac12\ln\dfrac{3}{n^2-1} = \dfrac12\ln\dfrac38 \iff n^2 - 1 = 8 \iff n^2 = 9$. Cum $n > 2$ natural, $n = 3$.

**Răspuns:** $n = 3$. *Barem: 3p calculul integralei, 2p determinarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 1$ |
| I.4 | $p = \frac49$ |
| II.1.c | $X = \begin{pmatrix}3 & 1\\ 1 & 1\end{pmatrix}$ |
| II.2.b | $x \in \{-1, 4\}$ |
| II.2.c | $x = 2$ |
| III.1.b | crescătoare pe $(-\infty, 0]$ și $[6, +\infty)$, descrescătoare pe $[0, 6]$ |
| III.2.c | $n = 3$ |

## Ce merită reținut din varianta 7

- **Ecuații matriceale** $X + XB = A$: factorul comun se scoate pe partea corectă ($X(I_2 + B)$), iar inversa se înmulțește tot la dreapta.
- **Ecuații exponențiale** cu $2^x$: împarte prin puteri strict pozitive și ajungi la o ecuație simplă în $2^x$.
- **Limite $\frac00$ cu polinoame**: descompune și simplifică factorul $x - a$.
- **Integrale de forma** $\int\frac{x}{x^2 + c}\,dx$: numărătorul este jumătate din derivata numitorului, deci primitiva este un logaritm.

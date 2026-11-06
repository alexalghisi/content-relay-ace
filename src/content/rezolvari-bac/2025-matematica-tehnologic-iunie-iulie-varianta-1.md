Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 1** (filiera tehnologică: profilurile servicii, resurse și tehnic). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac{1}{10} + 3\cdot\left(\dfrac12 - \dfrac15\right) = 1$

Paranteza, cu numitorul comun 10: $\dfrac12 - \dfrac15 = \dfrac{5}{10} - \dfrac{2}{10} = \dfrac{3}{10}$.

$$\frac{1}{10} + 3\cdot\frac{3}{10} = \frac{1}{10} + \frac{9}{10} = \frac{10}{10} = 1.$$

*Barem: 3p calculul parantezei și al produsului, 2p finalizarea.*

### 2. $f(x) = 6x - 3$; determinați $a$ cu $f(2) = a + f(0)$

$f(2) = 12 - 3 = 9$ și $f(0) = -3$. Ecuația: $9 = a - 3 \Rightarrow a = 12$.

**Răspuns:** $a = 12$. *Barem: 2p $f(2)$ și $f(0)$, 3p valoarea lui $a$.*

### 3. Ecuația $5^{2x} = 5^{3-x}$

Bazele sunt egale, iar funcția exponențială este injectivă, deci exponenții sunt egali:

$$2x = 3 - x \iff 3x = 3 \iff x = 1.$$

**Verificare:** $5^2 = 5^{2}$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca $n \in A = \{0, 1, \dots, 9\}$ să verifice $6n > 25$

**Cazuri posibile:** $A$ are 10 elemente.

**Cazuri favorabile:** $6n > 25 \iff n > \dfrac{25}{6} \approx 4{,}17$, deci $n \in \{5, 6, 7, 8, 9\}$ — 5 numere. (Verificare la limită: $6\cdot 4 = 24 < 25$, $6\cdot 5 = 30 > 25$.)

$$p = \frac{5}{10} = \frac12.$$

**Răspuns:** $p = \dfrac12$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(2,0)$, $B(2,1)$, $C(6,4)$; determinați $a$ cu $BC = a\cdot AB$

$$BC = \sqrt{(6-2)^2 + (4-1)^2} = \sqrt{16 + 9} = 5, \qquad AB = \sqrt{(2-2)^2 + (1-0)^2} = 1.$$

Din $5 = a\cdot 1$ obținem $a = 5$.

**Răspuns:** $a = 5$. *Barem: 2p $BC = 5$, 3p $AB = 1$ și $a = 5$.*

### 6. Triunghi dreptunghic în $M$, $MN = 4\cdot MP$, $MN = 8$: aria este 8

Din $MN = 4\cdot MP$: $MP = \dfrac{8}{4} = 2$. Unghiul drept este în $M$, deci $MN$ și $MP$ sunt catetele, iar aria este semiprodusul catetelor:

$$\mathcal A_{MNP} = \frac{MN\cdot MP}{2} = \frac{8\cdot 2}{2} = 8.$$

*Barem: 2p $MP = 2$, 3p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}5 & 2\\ 2 & 1\end{pmatrix}$, $B = \begin{pmatrix}5 & 3\\ 3 & -1\end{pmatrix}$, $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$

#### a) $\det A = 1$

$$\det A = \begin{vmatrix}5 & 2\\ 2 & 1\end{vmatrix} = 5\cdot 1 - 2\cdot 2 = 5 - 4 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $x$ cu $3A - 5I_2 = xB$

$$3A - 5I_2 = \begin{pmatrix}15 & 6\\ 6 & 3\end{pmatrix} - \begin{pmatrix}5 & 0\\ 0 & 5\end{pmatrix} = \begin{pmatrix}10 & 6\\ 6 & -2\end{pmatrix} = 2\begin{pmatrix}5 & 3\\ 3 & -1\end{pmatrix} = 2B.$$

Din $2B = xB$ (comparând, de exemplu, elementele de pe poziția $(1,1)$: $10 = 5x$) obținem $x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p calculul $3A - 5I_2 = 2B$, 2p $x = 2$.*

#### c) Mulțimea valorilor $x$ cu $\det\left(A\cdot(B - A) + xI_2\right) \le 2$

$B - A = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}$, deci

$$A(B - A) = \begin{pmatrix}5 & 2\\ 2 & 1\end{pmatrix}\begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix} = \begin{pmatrix}0 + 2 & 5 - 4\\ 0 + 1 & 2 - 2\end{pmatrix} = \begin{pmatrix}2 & 1\\ 1 & 0\end{pmatrix}.$$

$$A(B - A) + xI_2 = \begin{pmatrix}2 + x & 1\\ 1 & x\end{pmatrix}, \qquad \det = (2 + x)x - 1 = x^2 + 2x - 1.$$

Inecuația: $x^2 + 2x - 1 \le 2 \iff x^2 + 2x - 3 \le 0$. Rădăcinile trinomului sunt $-3$ și $1$; trinomul (cu coeficient dominant pozitiv) este $\le 0$ între rădăcini.

**Răspuns:** $x \in [-3, 1]$. *Barem: 3p determinantul $x^2 + 2x - 1$, 2p rezolvarea inecuației.*

### 2. Polinomul $f = X^3 - 3X^2 + X + m$

#### a) Pentru $m = 1$, $f(1) = 0$

$$f(1) = 1 - 3 + 1 + 1 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ cu $2x_1 + 2x_2 + 2x_3 = 1 + x_1x_2x_3$

Relațiile lui Viète pentru $X^3 + bX^2 + cX + d$ (aici $b = -3$, $d = m$): $x_1 + x_2 + x_3 = 3$ și $x_1x_2x_3 = -m$.

Condiția devine $2\cdot 3 = 1 - m \iff m = -5$.

**Răspuns:** $m = -5$. *Barem: 3p relațiile lui Viète și ecuația, 2p $m = -5$.*

#### c) Restul împărțirii lui $f$ la $X - 2$ este $-5$; arătați că $f$ se divide cu $X^2 + 1$

**Teorema restului:** restul împărțirii lui $f$ la $X - 2$ este $f(2)$.

$f(2) = 8 - 12 + 2 + m = m - 2$, deci $m - 2 = -5 \Rightarrow m = -3$.

Pentru $m = -3$: $f = X^3 - 3X^2 + X - 3$. Grupăm termenii:

$$f = X^2(X - 3) + (X - 3) = (X - 3)(X^2 + 1),$$

deci $f$ este divizibil cu $X^2 + 1$. $\blacksquare$

*Barem: 3p $m = -3$ din teorema restului, 2p descompunerea și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x - 2}{e^x}$

#### a) $f'(x) = \dfrac{3 - x}{e^x}$

Regula câtului:

$$f'(x) = \frac{1\cdot e^x - (x - 2)e^x}{(e^x)^2} = \frac{e^x(1 - x + 2)}{e^{2x}} = \frac{3 - x}{e^x}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = \dfrac{-2}{1} = -2$ și $f'(0) = \dfrac{3}{1} = 3$. Ecuația tangentei $y - f(0) = f'(0)(x - 0)$:

$$y + 2 = 3x \iff y = 3x - 2.$$

**Răspuns:** $y = 3x - 2$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația tangentei.*

#### c) $-e^{x-1} \le x - 2 \le e^{x-3}$, pentru orice $x \in [1, 4]$

**Ideea:** împărțind inegalitatea cerută la $e^x > 0$, ea devine echivalentă cu

$$-\frac1e \le \frac{x-2}{e^x} \le \frac{1}{e^3}, \quad \text{adică} \quad -\frac1e \le f(x) \le \frac{1}{e^3}.$$

**Monotonia pe $[1, 4]$.** Semnul lui $f'$ este semnul lui $3 - x$: $f' \ge 0$ pe $[1, 3]$ și $f' \le 0$ pe $[3, 4]$. Deci $f$ crește pe $[1,3]$ și scade pe $[3,4]$.

| $x$ | $1$ | | $3$ | | $4$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-\tfrac1e$ | ↗ | $\tfrac{1}{e^3}$ | ↘ | $\tfrac{2}{e^4}$ |

**Valorile:** $f(1) = -\dfrac1e$, $f(3) = \dfrac{1}{e^3}$, $f(4) = \dfrac{2}{e^4}$.

Maximul pe $[1,4]$ este $f(3) = \dfrac{1}{e^3}$. Minimul este cel mai mic dintre valorile la capete: $f(1) = -\dfrac1e < 0 < \dfrac{2}{e^4} = f(4)$, deci minimul este $-\dfrac1e$. Așadar $-\dfrac1e \le f(x) \le \dfrac{1}{e^3}$ pe $[1,4]$.

Înmulțind cu $e^x > 0$ (sensul inegalităților se păstrează): $-e^{x-1} \le x - 2 \le e^{x-3}$, pentru orice $x \in [1, 4]$. $\blacksquare$

*Barem: 2p monotonia, 3p valorile extreme și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^2 + 4x + 8$

#### a) $\displaystyle\int_0^1 \left(f(x) - x^2 - 8\right)dx = 2$

$f(x) - x^2 - 8 = 4x$, deci

$$\int_0^1 4x\,dx = 2x^2\Big|_0^1 = 2 - 0 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^8 \frac{x}{f(x) - 4x}\,dx = \ln 3$

$f(x) - 4x = x^2 + 8$. Numărătorul $x$ este jumătate din derivata numitorului, $(x^2 + 8)' = 2x$:

$$\int_0^8 \frac{x}{x^2 + 8}\,dx = \frac12\int_0^8 \frac{(x^2 + 8)'}{x^2 + 8}\,dx = \frac12\ln(x^2 + 8)\Big|_0^8 = \frac12(\ln 72 - \ln 8) = \frac12\ln 9 = \ln 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a > 0$ cu $\displaystyle\int_0^a \frac{1}{f(x) - 4}\,dx = \frac14$

$f(x) - 4 = x^2 + 4x + 4 = (x + 2)^2$, iar o primitivă a lui $\dfrac{1}{(x+2)^2}$ este $-\dfrac{1}{x+2}$:

$$\int_0^a \frac{dx}{(x+2)^2} = -\frac{1}{x+2}\Big|_0^a = -\frac{1}{a+2} + \frac12.$$

Ecuația: $\dfrac12 - \dfrac{1}{a+2} = \dfrac14 \iff \dfrac{1}{a+2} = \dfrac14 \iff a + 2 = 4 \iff a = 2$, care aparține lui $(0, +\infty)$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p $a = 2$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a = 12$ |
| I.3 | $x = 1$ |
| I.4 | $p = \dfrac12$ |
| I.5 | $a = 5$ |
| I.6 | aria $= 8$ |
| II.1.b | $x = 2$ |
| II.1.c | $x \in [-3, 1]$ |
| II.2.b | $m = -5$ |
| II.2.c | $m = -3$, $f = (X-3)(X^2+1)$ |
| III.1.b | $y = 3x - 2$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 1

- **Teorema restului**: restul împărțirii lui $f$ la $X - a$ este $f(a)$ — de aici afli parametrul.
- **Inegalități cu exponențiale**: împarte la $e^x$ ca să recunoști funcția din enunț, apoi folosește tabelul de variație.
- **Integrale de forma** $\int\frac{x}{x^2 + c}\,dx$: numărătorul e (pe jumătate) derivata numitorului, primitiva este $\frac12\ln(x^2 + c)$.
- **Trinom pătrat perfect la numitor**: $\int\frac{dx}{(x+k)^2} = -\frac{1}{x+k} + C$.

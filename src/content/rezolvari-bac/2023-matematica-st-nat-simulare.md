Rezolvarea completă a subiectului din **simularea națională** de **Bacalaureat 2023 la Matematică M_șt-nat** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2(1 + i) - i(2 - i) = 1$, unde $i^2 = -1$

Desfacem parantezele:

$$2(1 + i) - i(2 - i) = 2 + 2i - 2i + i^2 = 2 + i^2 = 2 - 1 = 1.$$

Partea imaginară se anulează ($2i - 2i = 0$), iar $i^2 = -1$. *Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = 3x + 10$: determinați $a$ pentru care $A(2a, a)$ aparține graficului

Un punct $(x_0, y_0)$ aparține graficului lui $f$ dacă $f(x_0) = y_0$. Aici $f(2a) = a$:

$$3\cdot 2a + 10 = a \iff 6a - a = -10 \iff 5a = -10 \iff a = -2.$$

Verificare: $A(-4, -2)$, $f(-4) = -12 + 10 = -2$ ✔.

**Răspuns:** $a = -2$. *Barem: 3p scrierea condiției, 2p soluția.*

### 3. Ecuația $\sqrt{2x^2 + 2} = 2x$

Radicalul este mereu definit ($2x^2 + 2 > 0$), dar membrul stâng este nenegativ, deci trebuie $2x \ge 0$, adică $x \ge 0$.

Ridicăm la pătrat: $2x^2 + 2 = 4x^2 \iff 2x^2 = 2 \iff x^2 - 1 = 0 \iff x \in \{-1, 1\}$.

**Verificare:** $x = -1$: $\sqrt4 = 2 \ne -2$ — nu convine; $x = 1$: $\sqrt4 = 2$ ✔.

**Răspuns:** $x = 1$. *Barem: 2p ecuația $x^2 - 1 = 0$, 3p eliminarea lui $-1$ și soluția care convine.* Greșeala frecventă: păstrarea lui $x = -1$ — ridicarea la pătrat poate introduce soluții străine.

### 4. Numere naturale impare de trei cifre formate cu elemente din $A = \{0, 1, 2, 3, 4\}$

Numărul $\overline{abc}$ (cifrele se pot repeta, enunțul nu cere cifre distincte):

- cifra unităților $c$ trebuie să fie impară: $\{1, 3\}$ — 2 alegeri;
- cifra zecilor $b$: oricare din cele 5 — 5 alegeri;
- cifra sutelor $a$: nu poate fi 0 — 4 alegeri.

$$2\cdot 5\cdot 4 = 40.$$

**Răspuns:** 40 de numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.*

### 5. $\vec u = a\vec i + (a - 1)\vec j$ și $\vec v = \vec i + 2\vec j$ coliniari

Doi vectori $x_1\vec i + y_1\vec j$ și $x_2\vec i + y_2\vec j$ sunt coliniari când coordonatele sunt proporționale: $\dfrac{x_1}{x_2} = \dfrac{y_1}{y_2}$ (echivalent $x_1y_2 - x_2y_1 = 0$).

$$\frac{a}{1} = \frac{a - 1}{2} \iff 2a = a - 1 \iff a = -1.$$

Verificare: $\vec u = -\vec i - 2\vec j = -\vec v$ ✔.

**Răspuns:** $a = -1$. *Barem: 3p condiția de coliniaritate, 2p soluția.*

### 6. Triunghi dreptunghic în $A$, $\angle B = \dfrac\pi6$, $BC = 24$, $CD$ bisectoarea unghiului $C$: aflați $CD$

**Pas 1 — cateta $AC$.** Cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză: $AC = BC\sin\dfrac\pi6 = 24\cdot\dfrac12 = 12$.

**Pas 2 — unghiul $ACD$.** $\angle C = \dfrac\pi2 - \dfrac\pi6 = \dfrac\pi3$, iar bisectoarea îl înjumătățește: $\angle ACD = \dfrac\pi6$.

**Pas 3 — triunghiul $ACD$** este dreptunghic în $A$ (căci $D \in AB$), cu ipotenuza $CD$:

$$\cos\angle ACD = \frac{AC}{CD} \Rightarrow \frac{12}{CD} = \frac{\sqrt3}{2} \Rightarrow CD = \frac{24}{\sqrt3} = 8\sqrt3.$$

**Răspuns:** $CD = 8\sqrt3$. *Barem: 3p $AC = 12$ și $\angle ACD = \frac\pi6$, 2p calculul lui $CD$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_3$ și $A(x) = \begin{pmatrix}x + 1 & -1 & 1\\ 0 & x & 0\\ 1 & -1 & x + 1\end{pmatrix}$

#### a) $\det(A(1)) = 3$

$$\det(A(1)) = \begin{vmatrix}2 & -1 & 1\\ 0 & 1 & 0\\ 1 & -1 & 2\end{vmatrix}.$$

Cel mai rapid: dezvoltăm după linia a doua, care are un singur element nenul (pe poziția $(2,2)$, semn $+$):

$$\det(A(1)) = 1\cdot\begin{vmatrix}2 & 1\\ 1 & 2\end{vmatrix} = 4 - 1 = 3.$$

(Cu Sarrus: $4 + 0 + 0 - 1 - 0 - 0 = 3$.) *Barem: 3p scrierea și dezvoltarea determinantului, 2p rezultatul.*

#### b) $x$ real pentru care $A(0)\cdot A(x) = A(0)$

$A(0) = \begin{pmatrix}1 & -1 & 1\\ 0 & 0 & 0\\ 1 & -1 & 1\end{pmatrix}$. Linia 1 (și linia 3) înmulțită cu coloanele lui $A(x)$:

- coloana 1: $1\cdot(x+1) + (-1)\cdot 0 + 1\cdot 1 = x + 2$;
- coloana 2: $1\cdot(-1) + (-1)\cdot x + 1\cdot(-1) = -x - 2$;
- coloana 3: $1\cdot 1 + (-1)\cdot 0 + 1\cdot(x + 1) = x + 2$.

$$A(0)A(x) = \begin{pmatrix}x + 2 & -x - 2 & x + 2\\ 0 & 0 & 0\\ x + 2 & -x - 2 & x + 2\end{pmatrix}.$$

Egalând cu $A(0)$: $x + 2 = 1 \iff x = -1$ (și $-x - 2 = -1$ dă tot $x = -1$).

**Răspuns:** $x = -1$. *Barem: 3p calculul produsului, 2p valoarea lui $x$.*

#### c) $a, b$ reali cu $\left(A(1)\right)^{-1} = aA(1) + bI_3$

Din a), $\det A(1) = 3 \ne 0$, deci $A(1)$ este inversabilă. Înmulțim egalitatea la stânga cu $A(1)$:

$$\left(A(1)\right)^{-1} = aA(1) + bI_3 \iff I_3 = aA(1)^2 + bA(1).$$

(Echivalența are loc pentru că $A(1)$ este inversabilă.) Calculăm

$$A(1)^2 = \begin{pmatrix}2 & -1 & 1\\ 0 & 1 & 0\\ 1 & -1 & 2\end{pmatrix}^2 = \begin{pmatrix}5 & -4 & 4\\ 0 & 1 & 0\\ 4 & -4 & 5\end{pmatrix}.$$

Atunci

$$aA(1)^2 + bA(1) = \begin{pmatrix}5a + 2b & -4a - b & 4a + b\\ 0 & a + b & 0\\ 4a + b & -4a - b & 5a + 2b\end{pmatrix} = \begin{pmatrix}1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{pmatrix}.$$

Din $4a + b = 0$ și $a + b = 1$: scăzând, $3a = -1 \Rightarrow a = -\dfrac13$, $b = \dfrac43$. Verificare: $5a + 2b = -\dfrac53 + \dfrac83 = 1$ ✔.

**Răspuns:** $a = -\dfrac13$, $b = \dfrac43$. *Barem: 3p reducerea la $aA(1)^2 + bA(1) = I_3$ și calculul lui $A(1)^2$, 2p valorile.*

### 2. Legea de compoziție $x * y = xy + x + y - 1 + 2^{xy}$

#### a) $1 * 2 = 8$

$$1 * 2 = 1\cdot 2 + 1 + 2 - 1 + 2^{1\cdot 2} = 4 + 4 = 8.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 0$ este elementul neutru

Trebuie arătat că $x * 0 = 0 * x = x$ pentru orice $x$ real.

$$x * 0 = x\cdot 0 + x + 0 - 1 + 2^{0} = x - 1 + 1 = x,$$

$$0 * x = 0\cdot x + 0 + x - 1 + 2^{0} = x.$$

Deci $e = 0$ este element neutru. (Legea fiind comutativă, a doua verificare se putea deduce din prima, dar e bine să o scrii.) *Barem: 2p $x * 0 = x$, 3p $0 * x = x$ și concluzia.*

#### c) $n \in \mathbb N^*$ cu $n * \left(-\dfrac1n\right) = 0$

Produsul $n\cdot\left(-\dfrac1n\right) = -1$, deci $2^{xy} = 2^{-1} = \dfrac12$:

$$n * \left(-\frac1n\right) = -1 + n - \frac1n - 1 + \frac12 = n - \frac1n - \frac32 = \frac{2n^2 - 3n - 2}{2n}.$$

$$\frac{2n^2 - 3n - 2}{2n} = 0 \iff 2n^2 - 3n - 2 = 0 \iff (n - 2)(2n + 1) = 0 \iff n \in \left\{2, -\frac12\right\}.$$

Doar $n = 2$ este natural nenul.

**Răspuns:** $n = 2$. *Barem: 2p expresia $\frac{2n^2 - 3n - 2}{2n}$, 3p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{2x + 1 + \ln x}{x}$

#### a) $f'(x) = -\dfrac{\ln x}{x^2}$

Regula câtului, cu $(2x + 1 + \ln x)' = 2 + \dfrac1x$:

$$f'(x) = \frac{\left(2 + \frac1x\right)x - (2x + 1 + \ln x)}{x^2} = \frac{2x + 1 - 2x - 1 - \ln x}{x^2} = -\frac{\ln x}{x^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

Împărțim termen cu termen: $f(x) = 2 + \dfrac1x + \dfrac{\ln x}{x}$.

$\dfrac1x \to 0$, iar $\lim\limits_{x\to+\infty}\dfrac{\ln x}{x} = 0$ (cu l'Hôpital: $\lim\dfrac{1/x}{1} = 0$). Deci

$$\lim_{x\to+\infty} f(x) = 2.$$

**Răspuns:** asimptota orizontală spre $+\infty$ este $y = 2$. *Barem: 3p limita, 2p concluzia.*

#### c) $\dfrac{\ln y}{y} - \dfrac{\ln x}{x} < \dfrac1x - \dfrac1y$, pentru orice $x, y \in (1, +\infty)$, $x < y$

Pentru $x > 1$ avem $\ln x > 0$, deci $f'(x) = -\dfrac{\ln x}{x^2} < 0$: $f$ este **strict descrescătoare** pe $(1, +\infty)$.

Pentru $1 < x < y$: $f(x) > f(y)$, adică

$$2 + \frac1x + \frac{\ln x}{x} > 2 + \frac1y + \frac{\ln y}{y}.$$

Scăzând 2 și regrupând termenii: $\dfrac{\ln y}{y} - \dfrac{\ln x}{x} < \dfrac1x - \dfrac1y$, ceea ce trebuia demonstrat.

*Barem: 2p monotonia strictă, 3p deducerea inegalității.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^3 + x$

#### a) $\displaystyle\int_3^5\left(f(x) - x^3\right)dx = 8$

$$\int_3^5 x\,dx = \frac{x^2}{2}\Big|_3^5 = \frac{25}{2} - \frac92 = 8.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^2\frac{x^2}{f(x) - x + 2}\,dx = \frac{\ln5}{3}$

Numitorul: $f(x) - x + 2 = x^3 + 2$, pozitiv pe $[0, 2]$. Cum $(x^3 + 2)' = 3x^2$, integrandul este $\dfrac13\cdot\dfrac{u'}{u}$:

$$\int_0^2\frac{x^2}{x^3 + 2}\,dx = \frac13\ln\left(x^3 + 2\right)\Big|_0^2 = \frac13(\ln 10 - \ln 2) = \frac13\ln\frac{10}{2} = \frac{\ln5}{3}.$$

*Barem: 3p primitiva, 2p calculul final.*

#### c) Orice primitivă $G$ a lui $g(x) = \dfrac{f(x)e^{-x}}{x}$ este concavă pe $(0, +\infty)$

Simplificăm: $g(x) = \dfrac{(x^3 + x)e^{-x}}{x} = (x^2 + 1)e^{-x}$.

$G$ primitivă $\Rightarrow G'(x) = g(x)$, deci $G''(x) = g'(x)$:

$$G''(x) = 2x\,e^{-x} - (x^2 + 1)e^{-x} = \left(-x^2 + 2x - 1\right)e^{-x} = -(x - 1)^2e^{-x}.$$

Cum $(x - 1)^2 \ge 0$ și $e^{-x} > 0$, avem $G''(x) \le 0$ pentru orice $x > 0$, deci $G$ este concavă. Raționamentul nu depinde de constanta primitivei.

*Barem: 3p calculul lui $G''$, 2p semnul și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = -2$ |
| I.3 | $x = 1$ |
| I.4 | 40 de numere |
| I.5 | $a = -1$ |
| I.6 | $CD = 8\sqrt3$ |
| II.1.b | $x = -1$ |
| II.1.c | $a = -\frac13$, $b = \frac43$ |
| II.2.c | $n = 2$ |
| III.1.b | $y = 2$ |

## Ce merită reținut din simulare

- **Ecuații iraționale**: verifică întotdeauna soluțiile în ecuația inițială (sau pune condiția $2x \ge 0$).
- **Inversa ca combinație** $aA + bI$: înmulțește cu $A$ și compară cu $I_3$ — nu e nevoie să calculezi inversa.
- **Inegalități cu două variabile** $x < y$: rescrie-le ca $f(x) > f(y)$ pentru o funcție monotonă.
- **Concavitatea unei primitive**: $G'' = g'$; studiază semnul lui $g'$.

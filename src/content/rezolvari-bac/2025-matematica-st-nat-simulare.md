Rezolvarea completă a subiectului de la **simularea națională** pentru **Bacalaureat 2025 la Matematică M_șt-nat** (filiera teoretică, profilul real, specializarea științe ale naturii). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2i(6 - i) + 3(1 - 4i) = 5$, unde $i^2 = -1$

Desfacem parantezele:

$$2i(6 - i) + 3(1 - 4i) = 12i - 2i^2 + 3 - 12i.$$

Termenii în $i$ se reduc ($12i - 12i = 0$), iar $-2i^2 = -2\cdot(-1) = 2$, deci rezultatul este $2 + 3 = 5$.

*Barem: 3p desfacerea parantezelor, 2p finalizarea.*

### 2. $f(x) = x + 5$; determinați $a$ cu $(f \circ f)(a) = 2a$

$(f \circ f)(a) = f(f(a)) = f(a + 5) = (a + 5) + 5 = a + 10$.

Ecuația: $a + 10 = 2a \Rightarrow a = 10$.

**Răspuns:** $a = 10$. *Barem: 3p calculul lui $(f\circ f)(a)$, 2p valoarea lui $a$.*

### 3. Ecuația $\sqrt{x^2 + 4x - 4} = x\sqrt2$

**Condiție:** membrul stâng este nenegativ, deci trebuie $x\sqrt2 \ge 0$, adică $x \ge 0$ (radicandul va fi automat nenegativ, fiind egal cu $2x^2$).

Ridicăm la pătrat:

$$x^2 + 4x - 4 = 2x^2 \iff x^2 - 4x + 4 = 0 \iff (x - 2)^2 = 0 \iff x = 2.$$

**Verificare:** $\sqrt{4 + 8 - 4} = \sqrt8 = 2\sqrt2$ ✔ și $x = 2 \ge 0$.

**Răspuns:** $x = 2$. *Barem: 3p ecuația $(x-2)^2 = 0$, 2p soluția care convine.*

### 4. Probabilitatea ca $2^n$ să fie divizibil cu 16, $n$ natural de o cifră

**Cazuri posibile:** $n \in \{0, 1, \dots, 9\}$ — 10 cazuri.

**Cazuri favorabile:** $16 = 2^4$, iar $2^n$ se divide cu $2^4$ exact când $n \ge 4$: $n \in \{4, 5, 6, 7, 8, 9\}$ — 6 cazuri.

$$p = \frac{6}{10} = \frac35.$$

**Răspuns:** $p = \dfrac35$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3,1)$, $B(2,4)$: triunghiul $OAB$ este dreptunghic în $A$

Trebuie arătat că $OA \perp AB$. Pantele:

$$m_{OA} = \frac{1 - 0}{3 - 0} = \frac13, \qquad m_{AB} = \frac{4 - 1}{2 - 3} = -3.$$

Produsul pantelor: $m_{OA}\cdot m_{AB} = \dfrac13\cdot(-3) = -1$, deci $OA \perp AB$ și unghiul din $A$ este drept. $\blacksquare$

(Variantă: reciproca teoremei lui Pitagora — $OA^2 = 10$, $AB^2 = 10$, $OB^2 = 20 = OA^2 + AB^2$.) *Barem: 2p $m_{OA}$, 3p $m_{AB}$ și concluzia.*

### 6. $E(x) = \sin x + 2\cos 2x + 2\sin^2\dfrac{x}{2}$; arătați că $E\left(\dfrac\pi2\right) = 0$

Pentru $x = \dfrac\pi2$: $\sin\dfrac\pi2 = 1$, $\cos\pi = -1$, $\sin\dfrac\pi4 = \dfrac{\sqrt2}{2}$.

$$E\left(\frac\pi2\right) = 1 + 2\cdot(-1) + 2\left(\frac{\sqrt2}{2}\right)^2 = 1 - 2 + 2\cdot\frac24 = 1 - 2 + 1 = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x+1 & -x\\ -2x & 2x+1\end{pmatrix}$

#### a) $\det(A(1)) = 4$

$$A(1) = \begin{pmatrix}2 & -1\\ -2 & 3\end{pmatrix}, \qquad \det(A(1)) = 2\cdot 3 - (-1)(-2) = 6 - 2 = 4.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(-1)\cdot A(x) = A(-2x - 1)$, pentru orice $x$ real

$A(-1) = \begin{pmatrix}0 & 1\\ 2 & -1\end{pmatrix}$. Înmulțim:

$$A(-1)A(x) = \begin{pmatrix}0 & 1\\ 2 & -1\end{pmatrix}\begin{pmatrix}x+1 & -x\\ -2x & 2x+1\end{pmatrix} = \begin{pmatrix}-2x & 2x+1\\ 2x + 2 + 2x & -2x - 2x - 1\end{pmatrix} = \begin{pmatrix}-2x & 2x+1\\ 4x+2 & -4x-1\end{pmatrix}.$$

Pe de altă parte, înlocuind $x$ cu $t = -2x - 1$ în $A(t)$:

$$A(-2x-1) = \begin{pmatrix}-2x - 1 + 1 & -(-2x-1)\\ -2(-2x-1) & 2(-2x-1) + 1\end{pmatrix} = \begin{pmatrix}-2x & 2x+1\\ 4x+2 & -4x-1\end{pmatrix}.$$

Matricele coincid, deci $A(-1)A(x) = A(-2x-1)$ pentru orice $x$. $\blacksquare$ *Barem: 3p produsul, 2p identificarea cu $A(-2x-1)$.*

#### c) Perechile $(m, n)$ de numere naturale, $m < n$, cu $A(-1)\left(A(m) + A(n)\right) = 2A(-4)$

Din b): $A(-1)\left(A(m) + A(n)\right) = A(-1)A(m) + A(-1)A(n) = A(-2m-1) + A(-2n-1)$.

Elementele lui $A(t)$ sunt funcții de gradul I în $t$, deci $A(p) + A(q) = 2A\left(\dfrac{p+q}{2}\right)$ (de exemplu, $(p+1) + (q+1) = 2\left(\frac{p+q}{2} + 1\right)$ și la fel pentru celelalte elemente). Așadar

$$A(-2m-1) + A(-2n-1) = 2A(-m-n-1).$$

Condiția devine $2A(-m-n-1) = 2A(-4)$. Comparând elementele de pe poziția $(1,2)$: $m + n + 1 = 4$, deci $m + n = 3$.

Numere naturale cu $m < n$ și $m + n = 3$: $(0, 3)$ și $(1, 2)$.

**Răspuns:** $(m, n) \in \{(0, 3), (1, 2)\}$. *Barem: 3p reducerea la $2A(-m-n-1)$, 2p perechile.*

### 2. Legea $x \circ y = x\cdot 3^y + y\cdot 3^x$

#### a) $1 \circ 2 = 15$

$$1 \circ 2 = 1\cdot 3^2 + 2\cdot 3^1 = 9 + 6 = 15.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $e = 0$ este elementul neutru

$$x \circ 0 = x\cdot 3^0 + 0\cdot 3^x = x, \qquad 0 \circ x = 0\cdot 3^x + x\cdot 3^0 = x,$$

pentru orice $x$ real (am folosit $3^0 = 1$). Deci $e = 0$ este element neutru. *Barem: 2p $x \circ 0 = x$, 3p $0 \circ x = x$ și concluzia.*

#### c) $x \ne 0$ cu $x \circ (3x) = (2x) \circ (2x)$

$$x \circ (3x) = x\cdot 3^{3x} + 3x\cdot 3^x = x\cdot 3^x\left(3^{2x} + 3\right), \qquad (2x)\circ(2x) = 2\cdot 2x\cdot 3^{2x} = 4x\cdot 3^{2x}.$$

Ecuația: $x\cdot 3^x(3^{2x} + 3) = 4x\cdot 3^{2x}$. Cum $x \ne 0$ și $3^x > 0$, împărțim la $x\cdot 3^x$:

$$3^{2x} + 3 = 4\cdot 3^x.$$

Notăm $t = 3^x > 0$: $t^2 - 4t + 3 = 0 \iff (t-1)(t-3) = 0$.

- $t = 1 \Rightarrow 3^x = 1 \Rightarrow x = 0$ — respins (se cere $x$ nenul);
- $t = 3 \Rightarrow 3^x = 3 \Rightarrow x = 1$.

**Verificare:** $1 \circ 3 = 27 + 9 = 36$, $2 \circ 2 = 2\cdot 9 + 2\cdot 9 = 36$ ✔.

**Răspuns:** $x = 1$. *Barem: 2p expresiile celor doi membri, 3p rezolvarea și $x = 1$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{e^x}{x^2 + 3x + 3}$

(Numitorul are $\Delta = 9 - 12 < 0$, deci $x^2 + 3x + 3 > 0$ pentru orice $x$ și $f$ este bine definită.)

#### a) $f'(x) = \dfrac{e^x(x^2 + x)}{(x^2 + 3x + 3)^2}$

Regula câtului:

$$f'(x) = \frac{e^x(x^2 + 3x + 3) - e^x(2x + 3)}{(x^2 + 3x + 3)^2} = \frac{e^x(x^2 + 3x + 3 - 2x - 3)}{(x^2 + 3x + 3)^2} = \frac{e^x(x^2 + x)}{(x^2 + 3x + 3)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty} f(x) = +\infty$

Avem nedeterminarea $\dfrac{\infty}{\infty}$. Aplicăm de două ori regula lui l'Hôpital:

$$\lim_{x\to+\infty}\frac{e^x}{x^2 + 3x + 3} = \lim_{x\to+\infty}\frac{e^x}{2x + 3} = \lim_{x\to+\infty}\frac{e^x}{2} = +\infty.$$

(La al doilea pas tot $\frac\infty\infty$, de aceea mai aplicăm o dată.) Intuitiv: exponențiala crește mai repede decât orice polinom. *Barem: 3p prima aplicare l'Hôpital, 2p finalizarea.*

#### c) $f(x) - f(y) \le \dfrac{3 - e}{3e}$, pentru orice $x \le 0 \le y$

**Monotonia.** Semnul lui $f'$ este semnul lui $x^2 + x = x(x+1)$, care se anulează în $-1$ și $0$:

| $x$ | $-\infty$ | | $-1$ | | $0$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $\tfrac1e$ | ↘ | $\tfrac13$ | ↗ | |

Valorile: $f(-1) = \dfrac{e^{-1}}{1 - 3 + 3} = \dfrac1e$, $f(0) = \dfrac13$.

**Majorarea lui $f(x)$, $x \le 0$.** Pe $(-\infty, 0]$, $f$ crește până în $-1$ și apoi scade, deci $f(-1) = \dfrac1e$ este maximul pe acest interval: $f(x) \le \dfrac1e$.

**Minorarea lui $f(y)$, $y \ge 0$.** Pe $[0, +\infty)$, $f$ este crescătoare, deci $f(y) \ge f(0) = \dfrac13$.

Atunci

$$f(x) - f(y) \le \frac1e - \frac13 = \frac{3 - e}{3e}. \qquad \blacksquare$$

*Barem: 2p monotonia, 3p estimările $f(x) \le f(-1)$, $f(y) \ge f(0)$ și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 4x + 1 + 3x\ln x$

#### a) $\displaystyle\int_1^2 \left(f(x) - 3x\ln x\right)dx = 7$

$$\int_1^2 (4x + 1)\,dx = \left(2x^2 + x\right)\Big|_1^2 = (8 + 2) - (2 + 1) = 7.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \frac{f(x) - 4x - 1}{x}\,dx = 3$

Integrandul: $\dfrac{3x\ln x}{x} = 3\ln x$. Integrăm prin părți, cu $u = \ln x$, $v' = 3$ ($u' = \frac1x$, $v = 3x$):

$$\int_1^e 3\ln x\,dx = 3x\ln x\Big|_1^e - \int_1^e 3x\cdot\frac1x\,dx = 3e - 3x\Big|_1^e = 3e - (3e - 3) = 3.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $a$ cu $\displaystyle\int_2^4 \frac{f(x) - 1}{x^2\ln x}\,dx = a\ln 2$

Simplificăm integrandul: $f(x) - 1 = 4x + 3x\ln x$, deci

$$\frac{4x + 3x\ln x}{x^2\ln x} = \frac{4}{x\ln x} + \frac{3}{x}.$$

Primitive: $\dfrac{1}{x\ln x} = \dfrac{(\ln x)'}{\ln x}$ are primitiva $\ln(\ln x)$ (pe $[2,4]$, $\ln x > 0$), iar $\dfrac3x$ are primitiva $3\ln x$:

$$\int_2^4 \left(\frac{4}{x\ln x} + \frac3x\right)dx = 4\ln(\ln x)\Big|_2^4 + 3\ln x\Big|_2^4 = 4\ln\frac{\ln 4}{\ln 2} + 3(\ln 4 - \ln 2).$$

Cum $\ln 4 = 2\ln 2$: $\dfrac{\ln 4}{\ln 2} = 2$ și $\ln 4 - \ln 2 = \ln 2$. Deci integrala este $4\ln 2 + 3\ln 2 = 7\ln 2$.

Din $a\ln 2 = 7\ln 2$ obținem $a = 7$.

**Răspuns:** $a = 7$. *Barem: 3p descompunerea și primitivele, 2p $7\ln 2$ și $a = 7$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $5$ |
| I.2 | $a = 10$ |
| I.3 | $x = 2$ |
| I.4 | $p = \dfrac35$ |
| I.5 | $m_{OA}\cdot m_{AB} = -1$ |
| I.6 | $E(\pi/2) = 0$ |
| II.1.c | $(0,3)$ și $(1,2)$ |
| II.2.c | $x = 1$ |
| III.1.b | $+\infty$ |
| III.2.c | $a = 7$ |

## Ce merită reținut din simularea 2025

- **Ecuații iraționale de forma** $\sqrt{E} = g(x)$: impune $g(x) \ge 0$ înainte să ridici la pătrat.
- **Matrice ale căror elemente sunt funcții de gradul I în parametru**: $A(p) + A(q) = 2A\left(\frac{p+q}{2}\right)$.
- **Ecuații exponențiale cu $3^{2x}$ și $3^x$**: substituția $t = 3^x > 0$ duce la o ecuație de gradul al II-lea.
- **Inegalități de forma $f(x) - f(y) \le c$**: majorezi $f(x)$ cu maximul pe un interval și minorezi $f(y)$ cu minimul pe celălalt.
- **Integrale cu $\frac{1}{x\ln x}$**: primitiva este $\ln(\ln x)$.

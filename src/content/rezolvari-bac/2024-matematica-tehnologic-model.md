Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_tehnologic**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac18 + 3\cdot\left(1 - \dfrac38\right) = 2$

Întâi paranteza: $1 - \dfrac38 = \dfrac88 - \dfrac38 = \dfrac58$. Apoi înmulțirea: $3\cdot\dfrac58 = \dfrac{15}{8}$.

$$\frac18 + \frac{15}{8} = \frac{16}{8} = 2.$$

*Barem: 3p calculul parantezei și al produsului, 2p rezultatul.*

### 2. $f(x) = 2x - 2$: determinați $a$ cu $f(a) = 0$

$f(a) = 2a - 2 = 0 \iff a = 1$. (Adică $a$ este zeroul funcției — abscisa punctului în care graficul taie $Ox$.)

**Răspuns:** $a = 1$. *Barem: 3p $f(a) = 2a - 2$, 2p $a = 1$.*

### 3. Ecuația $5^{2x} = 5^{2 + x}$

Bazele sunt egale, iar funcția exponențială este injectivă, deci exponenții sunt egali:

$$2x = 2 + x \iff x = 2.$$

**Verificare:** $5^4 = 5^{4}$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca $n \in A = \{1, 2, \dots, 9\}$ să verifice $n + 9 \le 15$

**Cazuri posibile:** 9.

$n + 9 \le 15 \iff n \le 6$, deci convin $n \in \{1, 2, 3, 4, 5, 6\}$ — **6 cazuri favorabile**.

$$p = \frac69 = \frac23.$$

**Răspuns:** $p = \dfrac23$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0,5)$, $B(4,-5)$, $C(a,b)$ mijlocul lui $AB$

$$a = \frac{x_A + x_B}{2} = \frac{0 + 4}{2} = 2, \qquad b = \frac{y_A + y_B}{2} = \frac{5 + (-5)}{2} = 0.$$

**Răspuns:** $a = 2$, $b = 0$. *Barem: 3p $a$, 2p $b$.*

### 6. Arătați că $\sqrt2\cdot(\sin 45^\circ + \cos 45^\circ)\cdot\sin 30^\circ = 1$

Valorile: $\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt2}{2}$, $\sin 30^\circ = \dfrac12$.

$$\sqrt2\cdot\left(\frac{\sqrt2}{2} + \frac{\sqrt2}{2}\right)\cdot\frac12 = \sqrt2\cdot\sqrt2\cdot\frac12 = 2\cdot\frac12 = 1.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}3 & 2\\ -1 & 0\end{pmatrix}$, $B = \begin{pmatrix}3 & 4\\ -2 & -3\end{pmatrix}$, $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$

#### a) $\det A = 2$

$$\det A = \begin{vmatrix}3 & 2\\ -1 & 0\end{vmatrix} = 3\cdot 0 - 2\cdot(-1) = 0 + 2 = 2.$$

*Barem: 3p dezvoltarea, 2p rezultatul.*

#### b) $B + 3I_2 = 2A$

$$B + 3I_2 = \begin{pmatrix}3 & 4\\ -2 & -3\end{pmatrix} + \begin{pmatrix}3 & 0\\ 0 & 3\end{pmatrix} = \begin{pmatrix}6 & 4\\ -2 & 0\end{pmatrix} = 2\begin{pmatrix}3 & 2\\ -1 & 0\end{pmatrix} = 2A.$$

*Barem: 3p suma, 2p identificarea cu $2A$.*

#### c) $x$ real cu $A\cdot(xA + B) = 2xI_2$

$$xA + B = \begin{pmatrix}3x + 3 & 2x + 4\\ -x - 2 & -3\end{pmatrix}.$$

$$A(xA + B) = \begin{pmatrix}3(3x+3) + 2(-x-2) & 3(2x+4) + 2(-3)\\ -(3x+3) + 0 & -(2x+4) + 0\end{pmatrix} = \begin{pmatrix}7x + 5 & 6x + 6\\ -3x - 3 & -2x - 4\end{pmatrix}.$$

Egalăm cu $2xI_2 = \begin{pmatrix}2x & 0\\ 0 & 2x\end{pmatrix}$, element cu element:

- $7x + 5 = 2x \Rightarrow x = -1$;
- $6x + 6 = 0 \Rightarrow x = -1$;
- $-3x - 3 = 0 \Rightarrow x = -1$;
- $-2x - 4 = 2x \Rightarrow x = -1$.

Toate cele patru ecuații dau aceeași valoare, deci sistemul este compatibil.

**Răspuns:** $x = -1$. *Barem: 3p calculul produsului, 2p $x = -1$.*

### 2. Legea $x \circ y = 2xy - 3(x + y) + 1$

#### a) $1 \circ 0 = -2$

$$1 \circ 0 = 2\cdot 1\cdot 0 - 3(1 + 0) + 1 = 0 - 3 + 1 = -2.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Legea este comutativă

Pentru orice $x, y$ reali:

$$y \circ x = 2yx - 3(y + x) + 1 = 2xy - 3(x + y) + 1 = x \circ y.$$

*Barem: 2p scrierea lui $y \circ x$, 3p egalitatea și concluzia.*

#### c) $x$ real cu $x \circ (-2x) \ge 0$

$$x \circ (-2x) = 2x(-2x) - 3(x - 2x) + 1 = -4x^2 + 3x + 1.$$

Inecuația $-4x^2 + 3x + 1 \ge 0 \iff 4x^2 - 3x - 1 \le 0$. Rădăcinile lui $4x^2 - 3x - 1$: $\Delta = 9 + 16 = 25$, $x = \dfrac{3 \pm 5}{8}$, adică $x_1 = -\dfrac14$, $x_2 = 1$.

Trinomul cu coeficient dominant pozitiv este $\le 0$ între rădăcini.

**Răspuns:** $x \in \left[-\dfrac14, 1\right]$. *Barem: 2p expresia, 3p rezolvarea inecuației.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(4, +\infty) \to \mathbb R$, $f(x) = \dfrac{3x - 4}{x - 4}$

#### a) $f'(x) = -\dfrac{8}{(x - 4)^2}$

$$f'(x) = \frac{3(x - 4) - (3x - 4)\cdot 1}{(x - 4)^2} = \frac{3x - 12 - 3x + 4}{(x-4)^2} = -\frac{8}{(x - 4)^2}.$$

*Barem: 3p regula câtului, 2p simplificarea.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{3x - 4}{x - 4} = \lim_{x\to+\infty}\frac{3 - \frac4x}{1 - \frac4x} = 3.$$

Limita este finită $\Rightarrow$ $y = 3$ este asimptotă orizontală spre $+\infty$.

**Răspuns:** $y = 3$. *Barem: 3p limita, 2p concluzia.*

#### c) $g(x) = f'(x)$ este crescătoare

Studiem semnul derivatei lui $g$: $g(x) = -8(x - 4)^{-2}$, deci

$$g'(x) = f''(x) = -8\cdot(-2)(x - 4)^{-3} = \frac{16}{(x - 4)^3}.$$

Pentru $x > 4$, $(x - 4)^3 > 0$, deci $g'(x) > 0$ pe $(4, +\infty)$, iar $g$ este crescătoare.

*Barem: 3p calculul lui $g'$, 2p semnul și concluzia.*

### 2. $f(x) = x + (x + 3)^2$

#### a) $\displaystyle\int_0^2\left(f(x) - (x + 3)^2\right)dx = 2$

$f(x) - (x + 3)^2 = x$:

$$\int_0^2 x\,dx = \frac{x^2}{2}\Big|_0^2 = \frac42 - 0 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_{-2}^0\frac{1}{f(x) - x}\,dx = \frac23$

$f(x) - x = (x + 3)^2$, care nu se anulează pe $[-2, 0]$. O primitivă a lui $(x + 3)^{-2}$ este $-\dfrac{1}{x + 3}$:

$$\int_{-2}^0\frac{dx}{(x + 3)^2} = -\frac{1}{x + 3}\Big|_{-2}^0 = -\frac13 - (-1) = \frac23.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ real cu $\displaystyle\int_0^6\frac{f(x)}{x + 3}\,dx = 3(a - \ln 3)$

Împărțim termen cu termen: $\dfrac{x + (x + 3)^2}{x + 3} = \dfrac{x}{x + 3} + x + 3$. Scriem $\dfrac{x}{x+3} = \dfrac{(x + 3) - 3}{x + 3} = 1 - \dfrac{3}{x + 3}$, deci

$$\frac{f(x)}{x + 3} = x + 4 - \frac{3}{x + 3}.$$

$$\int_0^6\left(x + 4 - \frac{3}{x + 3}\right)dx = \left(\frac{x^2}{2} + 4x - 3\ln(x + 3)\right)\Big|_0^6 = (18 + 24 - 3\ln 9) - (-3\ln 3).$$

Cum $\ln 9 = 2\ln 3$: rezultatul este $42 - 6\ln 3 + 3\ln 3 = 42 - 3\ln 3$.

Ecuația: $42 - 3\ln 3 = 3a - 3\ln 3 \iff 3a = 42 \iff a = 14$.

**Răspuns:** $a = 14$. *Barem: 3p calculul integralei ($42 - 3\ln 3$), 2p $a = 14$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac23$ |
| I.5 | $a = 2$, $b = 0$ |
| II.1.c | $x = -1$ |
| II.2.c | $x \in \left[-\tfrac14, 1\right]$ |
| III.1.b | $y = 3$ |
| III.2.c | $a = 14$ |

## Ce merită reținut din model

- **Ecuații matriceale cu parametru**: egalează toate cele patru elemente; soluția trebuie să le verifice pe toate.
- **Monotonia lui $f'$**: se studiază cu semnul lui $f''$.
- **Fracții cu grad numărător ≥ grad numitor**: împarte (sau scrie $x = (x + 3) - 3$) înainte de integrare.

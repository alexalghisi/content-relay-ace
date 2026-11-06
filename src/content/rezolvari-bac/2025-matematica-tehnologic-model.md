Rezolvarea completă a **modelului oficial** pentru **Bacalaureat 2025 la Matematică M_tehnologic** (filiera tehnologică: profilurile servicii, resurse și tehnic). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(3 + 3\sqrt2)\cdot\sqrt2 - 3\sqrt2 + 4 = 10$

Desfacem paranteza, folosind $\sqrt2\cdot\sqrt2 = 2$:

$$(3 + 3\sqrt2)\sqrt2 = 3\sqrt2 + 3\cdot 2 = 3\sqrt2 + 6.$$

Atunci expresia devine $3\sqrt2 + 6 - 3\sqrt2 + 4 = 6 + 4 = 10$ (termenii cu radical se reduc).

*Barem: 2p desfacerea parantezei, 3p finalizarea.*

### 2. $f(x) = 3x + 6$; arătați că $f(0) + f(2) = f(4)$

$f(0) = 6$, $f(2) = 6 + 6 = 12$, $f(4) = 12 + 6 = 18$. Deci $f(0) + f(2) = 6 + 12 = 18 = f(4)$.

*Barem: 2p $f(0)$ și $f(2)$, 3p $f(4)$ și concluzia.*

### 3. Ecuația $\sqrt{2x - 1} - 3 = 0$

**Condiție de existență:** $2x - 1 \ge 0$, adică $x \ge \dfrac12$.

Izolăm radicalul: $\sqrt{2x - 1} = 3$. Ridicăm la pătrat: $2x - 1 = 9 \iff x = 5$. Cum $5 \ge \dfrac12$, soluția convine.

**Verificare:** $\sqrt{9} - 3 = 0$ ✔.

**Răspuns:** $x = 5$. *Barem: 3p ecuația $2x - 1 = 9$, 2p soluția care convine.*

### 4. Prețul de 400 de lei după o ieftinire cu $25\%$

Valoarea ieftinirii: $\dfrac{25}{100}\cdot 400 = 100$ de lei. Noul preț: $400 - 100 = 300$ de lei.

(Echivalent: după ieftinire rămâne $75\%$ din preț, $0{,}75\cdot 400 = 300$.)

**Răspuns:** 300 de lei. *Barem: 2p valoarea ieftinirii, 3p prețul final.*

### 5. $A(2,3)$, $B(5,6)$, $C(6,2)$: triunghiul $ABC$ este isoscel

Calculăm lungimile laturilor cu formula distanței:

$$AB = \sqrt{3^2 + 3^2} = 3\sqrt2, \qquad AC = \sqrt{(6-2)^2 + (2-3)^2} = \sqrt{16 + 1} = \sqrt{17}, \qquad BC = \sqrt{(6-5)^2 + (2-6)^2} = \sqrt{1 + 16} = \sqrt{17}.$$

Cum $AC = BC$, triunghiul $ABC$ este isoscel (cu baza $AB$). $\blacksquare$

*Barem: 2p $AC$, 3p $BC$ și concluzia.* (Este suficient să găsești două laturi egale; $AB$ nu e obligatoriu.)

### 6. Triunghi dreptunghic în $A$, $AC = 4$, $C = 60^\circ$: arătați că $BC = 8$

În triunghiul dreptunghic, $AC$ este cateta alăturată unghiului $C$, iar $BC$ este ipotenuza:

$$\cos C = \frac{AC}{BC} \Rightarrow \frac12 = \frac{4}{BC} \Rightarrow BC = 8.$$

(Variantă: unghiul $B$ are $30^\circ$, iar cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză.) *Barem: 3p $\cos C = \frac{AC}{BC}$, 2p $BC = 8$.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A(x) = \begin{pmatrix}1 & 1\\ 2 & x\end{pmatrix}$

#### a) $\det(A(3)) = 1$

$$\det(A(3)) = \begin{vmatrix}1 & 1\\ 2 & 3\end{vmatrix} = 1\cdot 3 - 1\cdot 2 = 3 - 2 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(2) + A(6) = 2A(4)$

$$A(2) + A(6) = \begin{pmatrix}1 & 1\\ 2 & 2\end{pmatrix} + \begin{pmatrix}1 & 1\\ 2 & 6\end{pmatrix} = \begin{pmatrix}2 & 2\\ 4 & 8\end{pmatrix} = 2\begin{pmatrix}1 & 1\\ 2 & 4\end{pmatrix} = 2A(4).$$

*Barem: 3p suma, 2p identificarea cu $2A(4)$.*

#### c) $x$ cu $A(x)\cdot A(x) = 3I_2$

$$A(x)\cdot A(x) = \begin{pmatrix}1 & 1\\ 2 & x\end{pmatrix}\begin{pmatrix}1 & 1\\ 2 & x\end{pmatrix} = \begin{pmatrix}1 + 2 & 1 + x\\ 2 + 2x & 2 + x^2\end{pmatrix} = \begin{pmatrix}3 & 1 + x\\ 2 + 2x & 2 + x^2\end{pmatrix}.$$

Egalăm cu $3I_2 = \begin{pmatrix}3 & 0\\ 0 & 3\end{pmatrix}$, element cu element:

- $1 + x = 0 \Rightarrow x = -1$;
- $2 + 2x = 0 \Rightarrow x = -1$;
- $2 + x^2 = 3 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$.

Toate condițiile trebuie îndeplinite simultan, deci $x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p calculul lui $A(x)\cdot A(x)$, 2p $x = -1$.* Atenție: $x = 1$ verifică doar ultima ecuație, nu și pe celelalte.

### 2. Legea $x \circ y = x + y + 6$

#### a) $1 \circ (-3) = 4$

$$1 \circ (-3) = 1 + (-3) + 6 = 4.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $x$ cu $x \circ 2 = 3x$

$x \circ 2 = x + 2 + 6 = x + 8$. Ecuația: $x + 8 = 3x \iff 2x = 8 \iff x = 4$.

**Răspuns:** $x = 4$. *Barem: 3p $x \circ 2 = x + 8$, 2p $x = 4$.*

#### c) $(x^2 + 2) \circ (1 - 6x) \ge 0$, pentru orice $x$ real

$$(x^2 + 2) \circ (1 - 6x) = x^2 + 2 + 1 - 6x + 6 = x^2 - 6x + 9 = (x - 3)^2.$$

Un pătrat al unui număr real este întotdeauna nenegativ, deci $(x - 3)^2 \ge 0$ pentru orice $x$ real. $\blacksquare$

*Barem: 2p calculul compunerii, 3p scrierea ca pătrat perfect și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{5x - 2}{x - 1}$

#### a) $f'(x) = -\dfrac{3}{(x-1)^2}$

Regula câtului $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$:

$$f'(x) = \frac{5(x - 1) - (5x - 2)\cdot 1}{(x-1)^2} = \frac{5x - 5 - 5x + 2}{(x-1)^2} = \frac{-3}{(x-1)^2}.$$

*Barem: 3p aplicarea regulii câtului, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 2$

$f(2) = \dfrac{10 - 2}{1} = 8$ și $f'(2) = -\dfrac{3}{1} = -3$. Ecuația tangentei $y - f(2) = f'(2)(x - 2)$:

$$y - 8 = -3(x - 2) \iff y = -3x + 14.$$

**Răspuns:** $y = -3x + 14$. *Barem: 2p $f(2)$ și $f'(2)$, 3p ecuația tangentei.*

#### c) $f$ este convexă

Derivăm încă o dată $f'(x) = -3(x-1)^{-2}$:

$$f''(x) = -3\cdot(-2)(x-1)^{-3} = \frac{6}{(x-1)^3}.$$

Pentru $x > 1$ avem $x - 1 > 0$, deci $(x-1)^3 > 0$ și $f''(x) > 0$. O funcție cu derivata a doua pozitivă pe un interval este convexă pe acel interval, deci $f$ este convexă pe $(1, +\infty)$. $\blacksquare$

*Barem: 3p calculul lui $f''$, 2p semnul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = 2x + 3$

#### a) $\displaystyle\int_0^1 \left(f(x) - 3\right)dx = 1$

$f(x) - 3 = 2x$, deci

$$\int_0^1 2x\,dx = x^2\Big|_0^1 = 1 - 0 = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 e^x f(x)\,dx = 3e - 1$

Integrăm prin părți, cu $u = 2x + 3$, $v' = e^x$ ($u' = 2$, $v = e^x$):

$$\int_0^1 e^x(2x + 3)\,dx = e^x(2x + 3)\Big|_0^1 - \int_0^1 2e^x\,dx = (5e - 3) - 2e^x\Big|_0^1 = 5e - 3 - (2e - 2) = 3e - 1.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $a > 0$ cu $\displaystyle\int_1^2 \frac{f(x)}{x(x+3)}\,dx = \ln\frac a2$

Numitorul este $x(x+3) = x^2 + 3x$, cu derivata $2x + 3 = f(x)$. Deci integrandul are forma $\dfrac{u'}{u}$, cu primitiva $\ln|u|$ (pe $[1,2]$, $x^2 + 3x > 0$):

$$\int_1^2 \frac{(x^2 + 3x)'}{x^2 + 3x}\,dx = \ln(x^2 + 3x)\Big|_1^2 = \ln 10 - \ln 4 = \ln\frac{10}{4} = \ln\frac52.$$

Din $\ln\dfrac52 = \ln\dfrac a2$ și injectivitatea logaritmului: $\dfrac a2 = \dfrac52 \Rightarrow a = 5$, care aparține lui $(0, +\infty)$.

**Răspuns:** $a = 5$. *Barem: 3p calculul integralei, 2p $a = 5$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $10$ |
| I.2 | $f(0) + f(2) = 18 = f(4)$ |
| I.3 | $x = 5$ |
| I.4 | 300 de lei |
| I.5 | $AC = BC = \sqrt{17}$ |
| I.6 | $BC = 8$ |
| II.1.c | $x = -1$ |
| II.2.b | $x = 4$ |
| II.2.c | $(x-3)^2 \ge 0$ |
| III.1.b | $y = -3x + 14$ |
| III.2.c | $a = 5$ |

## Ce merită reținut din modelul 2025

- **Ieftiniri și scumpiri**: calculează întâi valoarea procentului din prețul inițial, apoi scazi sau aduni.
- **Triunghi isoscel în reper cartezian**: calculează lungimile laturilor și găsește două egale.
- **Egalități de matrice**: egalezi element cu element și păstrezi doar valorile care verifică toate ecuațiile.
- **Convexitate**: semnul lui $f''$ pe domeniu decide — $f'' > 0$ înseamnă convexă.
- **Integrale de forma** $\int\frac{u'}{u}$: recunoaște derivata numitorului la numărător; primitiva este $\ln|u|$.

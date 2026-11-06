Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, subiectul de rezervă al sesiunii iunie–iulie, **varianta 8**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2\cdot(1{,}2 + 0{,}1) + 0{,}4 = 3$

$$2\cdot 1{,}3 + 0{,}4 = 2{,}6 + 0{,}4 = 3.$$

*Barem: 2p calculul parantezei, 3p finalizarea.*

### 2. $f(x) = 2x + 1$: determinați $a$ cu $f(a) - f(2) = a$

$f(a) = 2a + 1$, $f(2) = 5$. Ecuația: $2a + 1 - 5 = a \iff 2a - 4 = a \iff a = 4$.

**Răspuns:** $a = 4$. *Barem: 2p valorile funcției, 3p rezolvarea ecuației.*

### 3. Ecuația $\log_8(x^2 - 5x + 5) = \log_8 x$

**Condiții de existență:** $x > 0$ și $x^2 - 5x + 5 > 0$.

Logaritmul în baza 8 este injectiv: $x^2 - 5x + 5 = x \iff x^2 - 6x + 5 = 0 \iff (x - 1)(x - 5) = 0$, deci $x = 1$ sau $x = 5$.

**Verificare:** dacă argumentele sunt egale și $x > 0$, atunci automat și $x^2 - 5x + 5 = x > 0$. Pentru $x = 1$: $1 - 5 + 5 = 1 > 0$ ✔; pentru $x = 5$: $25 - 25 + 5 = 5 > 0$ ✔.

**Răspuns:** $x \in \{1, 5\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Numere naturale impare, de două cifre distincte, cu cifre din $A = \{1, 3, 4, 6, 8\}$

Un număr este impar dacă ultima lui cifră este impară.

- **Cifra unităților**: impară, din $A$: $1$ sau $3$ — **2 moduri**.
- **Cifra zecilor**: orice cifră din $A$ diferită de cea a unităților (cifrele trebuie să fie distincte; $0 \notin A$, deci nu există problema primei cifre nule) — **4 moduri**.

Regula produsului: $2\cdot 4 = 8$ numere (de exemplu $31, 41, 61, 81, 13, 43, 63, 83$).

**Răspuns:** 8 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea.*

### 5. $A(0,8)$, $B(4,2)$, $C$ mijlocul lui $OA$: mijlocul segmentului $BC$

$C$ este mijlocul lui $OA$: $C\left(\dfrac{0+0}{2}, \dfrac{0+8}{2}\right) = C(0, 4)$.

Mijlocul $M$ al lui $BC$: $x_M = \dfrac{4 + 0}{2} = 2$, $y_M = \dfrac{2 + 4}{2} = 3$.

**Răspuns:** $M(2, 3)$. *Barem: 2p coordonatele lui $C$, 3p mijlocul lui $BC$.*

### 6. Triunghi dreptunghic în $A$, $AB = 8$, $C = \dfrac\pi4$: aria este 32

Suma unghiurilor: $B = \pi - \dfrac\pi2 - \dfrac\pi4 = \dfrac\pi4 = C$, deci triunghiul este dreptunghic isoscel și $AC = AB = 8$. (Echivalent: $\operatorname{tg} C = \dfrac{AB}{AC} = 1 \Rightarrow AC = 8$.)

Aria unui triunghi dreptunghic este semiprodusul catetelor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{8\cdot 8}{2} = 32.$$

*Barem: 3p $AC = 8$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$, $A = \begin{pmatrix}1 & 3\\ 1 & 3\end{pmatrix}$ și $B(x) = \begin{pmatrix}x - 2 & x - 2\\ x - 4 & x\end{pmatrix}$

#### a) $\det(B(5)) = 12$

$B(5) = \begin{pmatrix}3 & 3\\ 1 & 5\end{pmatrix}$, deci $\det(B(5)) = 3\cdot5 - 3\cdot1 = 15 - 3 = 12$.

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $a$ pentru care $(B(4) - B(2))\cdot A = aA$

$B(4) = \begin{pmatrix}2 & 2\\ 0 & 4\end{pmatrix}$, $B(2) = \begin{pmatrix}0 & 0\\ -2 & 2\end{pmatrix}$, deci $B(4) - B(2) = \begin{pmatrix}2 & 2\\ 2 & 2\end{pmatrix}$.

$$(B(4) - B(2))\cdot A = \begin{pmatrix}2 + 2 & 6 + 6\\ 2 + 2 & 6 + 6\end{pmatrix} = \begin{pmatrix}4 & 12\\ 4 & 12\end{pmatrix} = 4A.$$

Din $4A = aA$ și $A \ne O_2$ obținem $a = 4$.

**Răspuns:** $a = 4$. *Barem: 3p calculul produsului, 2p valoarea lui $a$.*

#### c) $x$ pentru care $\det(A\cdot B(x) - 4xI_2) = 0$

$$A\cdot B(x) = \begin{pmatrix}(x-2) + 3(x-4) & (x-2) + 3x\\ (x-2) + 3(x-4) & (x-2) + 3x\end{pmatrix} = \begin{pmatrix}4x - 14 & 4x - 2\\ 4x - 14 & 4x - 2\end{pmatrix}.$$

Scădem $4xI_2$ (doar de pe diagonală):

$$A\cdot B(x) - 4xI_2 = \begin{pmatrix}-14 & 4x - 2\\ 4x - 14 & -2\end{pmatrix}.$$

$$\det = (-14)(-2) - (4x-2)(4x-14) = 28 - (16x^2 - 64x + 28) = -16x^2 + 64x = -16x(x - 4).$$

$-16x(x-4) = 0 \iff x \in \{0, 4\}$.

**Răspuns:** $x \in \{0, 4\}$. *Barem: 3p matricea și determinantul, 2p soluțiile.*

### 2. Legea $x \circ y = x(x - 2) + y(y - 2)$

#### a) $3 \circ 3 = 6$

$$3 \circ 3 = 3(3 - 2) + 3(3 - 2) = 3 + 3 = 6.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $2 \circ x = x^2 + 2$

$2 \circ x = 2\cdot 0 + x(x - 2) = x^2 - 2x$. Ecuația: $x^2 - 2x = x^2 + 2 \iff -2x = 2 \iff x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p expresia și ecuația, 2p soluția.*

#### c) $x \circ y \ge -2$ pentru orice $x, y$ reali

Completăm pătratele: $x^2 - 2x = (x - 1)^2 - 1$ și $y^2 - 2y = (y - 1)^2 - 1$. Deci

$$x \circ y = (x - 1)^2 + (y - 1)^2 - 2 \ge 0 + 0 - 2 = -2,$$

deoarece pătratele numerelor reale sunt nenegative. Egalitatea are loc pentru $x = y = 1$. $\blacksquare$

*Barem: 2p scrierea expresiei, 3p restrângerea în pătrate și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2\sqrt x - \dfrac1x - 3$

#### a) $f'(x) = \dfrac{x\sqrt x + 1}{x^2}$

$(2\sqrt x)' = \dfrac{2}{2\sqrt x} = \dfrac{1}{\sqrt x}$ și $\left(-\dfrac1x\right)' = \dfrac{1}{x^2}$:

$$f'(x) = \frac{1}{\sqrt x} + \frac{1}{x^2} = \frac{\sqrt x}{x} + \frac{1}{x^2} = \frac{x\sqrt x + 1}{x^2}.$$

(Am folosit $\dfrac{1}{\sqrt x} = \dfrac{\sqrt x}{x}$ și am amplificat cu $x$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 2 - 1 - 3 = -2$, $f'(1) = \dfrac{1 + 1}{1} = 2$.

$y - f(1) = f'(1)(x - 1) \iff y + 2 = 2(x - 1) \iff y = 2x - 4$.

**Răspuns:** $y = 2x - 4$. *Barem: 2p $f(1)$ și $f'(1)$, 3p ecuația.*

#### c) $f$ este bijectivă

**Injectivitate:** pentru $x > 0$, $x\sqrt x + 1 > 0$ și $x^2 > 0$, deci $f'(x) > 0$; $f$ este strict crescătoare pe $(0, +\infty)$, deci injectivă.

**Surjectivitate:** calculăm limitele la capete:

$$\lim_{x\to0^+} f(x) = 0 - \infty - 3 = -\infty \quad\left(\text{pentru că } \tfrac1x \to +\infty\right), \qquad \lim_{x\to+\infty} f(x) = +\infty$$

(în al doilea caz $2\sqrt x \to +\infty$, iar $\tfrac1x \to 0$). $f$ este continuă și strict crescătoare, deci ia toate valorile dintre limitele de la capete: $\operatorname{Im} f = (-\infty, +\infty) = \mathbb R$, adică $f$ este surjectivă.

Injectivă și surjectivă $\Rightarrow$ $f$ este bijectivă. $\blacksquare$

*Barem: 2p injectivitatea, 3p surjectivitatea și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{4x}{x^2 + 1}$

#### a) $\displaystyle\int_1^2 (x^2 + 1)f(x)\,dx = 6$

$(x^2 + 1)f(x) = 4x$:

$$\int_1^2 4x\,dx = 2x^2\Big|_1^2 = 8 - 2 = 6.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_2^3 f(x)\,dx = 2\ln 2$

Cum $(x^2 + 1)' = 2x$, avem $f(x) = 2\cdot\dfrac{(x^2+1)'}{x^2+1}$:

$$\int_2^3 \frac{4x}{x^2+1}\,dx = 2\ln(x^2 + 1)\Big|_2^3 = 2\ln 10 - 2\ln 5 = 2\ln\frac{10}{5} = 2\ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $m \in (1, +\infty)$ pentru care $\displaystyle\int_1^m\left(\frac{f(\sqrt x)}{\sqrt x}\right)^3 dx = 6$

Pentru $x > 0$: $f(\sqrt x) = \dfrac{4\sqrt x}{x + 1}$, deci $\dfrac{f(\sqrt x)}{\sqrt x} = \dfrac{4}{x+1}$ și

$$\left(\frac{f(\sqrt x)}{\sqrt x}\right)^3 = \frac{64}{(x+1)^3}.$$

Primitiva lui $(x+1)^{-3}$ este $\dfrac{(x+1)^{-2}}{-2}$:

$$\int_1^m \frac{64}{(x+1)^3}\,dx = -\frac{32}{(x+1)^2}\Big|_1^m = -\frac{32}{(m+1)^2} + \frac{32}{4} = 8 - \frac{32}{(m+1)^2}.$$

Ecuația: $8 - \dfrac{32}{(m+1)^2} = 6 \iff \dfrac{32}{(m+1)^2} = 2 \iff (m+1)^2 = 16 \iff m + 1 = \pm 4$.

Cum $m > 1$, $m + 1 > 0$, deci $m + 1 = 4$, adică $m = 3$ (valoarea $m = -5$ se respinge).

**Răspuns:** $m = 3$. *Barem: 3p calculul integralei, 2p valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 4$ |
| I.3 | $x \in \{1, 5\}$ |
| I.4 | 8 numere |
| I.5 | $(2, 3)$ |
| II.1.b | $a = 4$ |
| II.1.c | $x \in \{0, 4\}$ |
| II.2.b | $x = -1$ |
| III.1.b | $y = 2x - 4$ |
| III.2.c | $m = 3$ |

## Ce merită reținut din varianta 8

- **Numărare cu restricții**: începe cu poziția cea mai restrictivă (aici cifra unităților), apoi aplică regula produsului.
- **Minorări de tipul $x \circ y \ge k$**: restrânge în pătrate perfecte.
- **Bijectivitate**: derivata strict pozitivă (injectivitate) + limitele la capete $\pm\infty$ și continuitatea (surjectivitate).
- **Integrale cu $f(\sqrt x)$**: înlocuiește întâi și simplifică — integrala devine una elementară.

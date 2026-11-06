Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_mate-info**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2(1 - 2i) + i(4 + i) = 1$

Desfacem parantezele:

$$2(1 - 2i) + i(4 + i) = 2 - 4i + 4i + i^2 = 2 + i^2 = 2 + (-1) = 1.$$

*Barem: 3p desfacerea parantezelor, 2p folosirea lui $i^2 = -1$.*

### 2. $f(x) = x^2 + ax - a$: $a$ pentru care $A(3, -3)$ aparține graficului

Punctul $A(3, -3)$ este pe grafic dacă $f(3) = -3$:

$$9 + 3a - a = -3 \iff 2a = -12 \iff a = -6.$$

**Răspuns:** $a = -6$. *Barem: 3p condiția $f(3) = -3$, 2p soluția.*

### 3. Ecuația $\log_2(x^2 + 8) = \log_2(8 - 2x)$

**Condiții de existență:** $x^2 + 8 > 0$ (mereu adevărat) și $8 - 2x > 0$, adică $x < 4$.

Logaritmul este injectiv, deci argumentele sunt egale:

$$x^2 + 8 = 8 - 2x \iff x^2 + 2x = 0 \iff x(x + 2) = 0 \iff x \in \{-2, 0\}.$$

Ambele valori sunt mai mici decât 4, deci convin.

**Răspuns:** $x \in \{-2, 0\}$. *Barem: 3p ecuația $x^2 + 2x = 0$, 2p soluțiile care convin.*

### 4. Numere de două cifre distincte, cu cifra zecilor pară, din $A = \{1, 2, 3, 4, 5\}$

Cifra zecilor trebuie să fie pară: $2$ sau $4$ — **2 moduri**.

Cifra unităților: orice element din $A$ diferit de cifra zecilor — **4 moduri**.

Regula produsului: $2\cdot 4 = 8$ numere (21, 23, 24, 25, 41, 42, 43, 45).

**Răspuns:** 8 numere. *Barem: 2p cifra zecilor, 3p numărarea.*

### 5. $A(0, 3)$, $B(4, 0)$: coordonatele lui $C$ cu $\overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{OC}$

$\overrightarrow{OA} = 3\vec j$, $\overrightarrow{OB} = 4\vec i$, deci $\overrightarrow{OC} = 4\vec i + 3\vec j$. Vectorul de poziție $\overrightarrow{OC}$ are chiar coordonatele punctului $C$.

**Răspuns:** $C(4, 3)$. *Barem: 2p vectorii de poziție, 3p coordonatele lui $C$.*

### 6. Triunghi ascuțitunghic, $AB = 5$, $C = \dfrac\pi4$, înălțimea $AD = 4$: arătați că $BC = 7$

Înălțimea $AD$ împarte triunghiul în două triunghiuri dreptunghice în $D$. Triunghiul fiind ascuțitunghic, piciorul $D$ al înălțimii se află între $B$ și $C$, deci $BC = BD + DC$.

- În $\triangle ADC$ (dreptunghic în $D$) cu $C = 45^\circ$: triunghiul este isoscel, deci $DC = AD = 4$.
- În $\triangle ADB$ (dreptunghic în $D$), cu Pitagora: $BD = \sqrt{AB^2 - AD^2} = \sqrt{25 - 16} = 3$.

$$BC = BD + DC = 3 + 4 = 7.$$

*Barem: 2p $DC = 4$, 3p $BD = 3$ și concluzia.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_3$ și $A(a) = \begin{pmatrix}0 & 0 & 1\\ a & -1 & a\\ 1 & 0 & 0\end{pmatrix}$

#### a) $\det(A(1)) = 1$

$$\det(A(1)) = \begin{vmatrix}0 & 0 & 1\\ 1 & -1 & 1\\ 1 & 0 & 0\end{vmatrix} = 0 + 0 + 0 - \big(1\cdot(-1)\cdot 1\big) - 0 - 0 = 1.$$

(Cu regula lui Sarrus, singurul produs nenul este cel de pe diagonala secundară: $1\cdot(-1)\cdot 1 = -1$, care se scade.) *Barem: 2p scrierea, 3p calculul.*

#### b) $A(a)\cdot A(b) = A(a) - A(b) + I_3$

Produsul, linie × coloană:

$$A(a)\cdot A(b) = \begin{pmatrix}0 & 0 & 1\\ a & -1 & a\\ 1 & 0 & 0\end{pmatrix}\begin{pmatrix}0 & 0 & 1\\ b & -1 & b\\ 1 & 0 & 0\end{pmatrix} = \begin{pmatrix}1 & 0 & 0\\ a - b & 1 & a - b\\ 0 & 0 & 1\end{pmatrix}.$$

Pe de altă parte

$$A(a) - A(b) + I_3 = \begin{pmatrix}0 & 0 & 0\\ a - b & 0 & a - b\\ 0 & 0 & 0\end{pmatrix} + \begin{pmatrix}1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix}1 & 0 & 0\\ a - b & 1 & a - b\\ 0 & 0 & 1\end{pmatrix}.$$

Cele două matrice coincid, pentru orice $a, b$. *Barem: 3p produsul, 2p finalizarea.*

#### c) Matricea $X$ cu $A(1)\cdot X\cdot A(0) = I_3$

Din b) cu $a = b$: $A(a)\cdot A(a) = A(a) - A(a) + I_3 = I_3$. Deci fiecare $A(a)$ este **propria inversă**: $A(1)^{-1} = A(1)$, $A(0)^{-1} = A(0)$.

Înmulțind la stânga cu $A(1)^{-1}$ și la dreapta cu $A(0)^{-1}$:

$$X = A(1)^{-1}\cdot A(0)^{-1} = A(1)\cdot A(0).$$

Din formula de la b) cu $a = 1$, $b = 0$:

$$X = A(1) - A(0) + I_3 = \begin{pmatrix}1 & 0 & 0\\ 1 & 1 & 1\\ 0 & 0 & 1\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix}1 & 0 & 0\\ 1 & 1 & 1\\ 0 & 0 & 1\end{pmatrix}$. *Barem: 2p inversele, 3p calculul lui $X$.*

### 2. Pe $M = [3, +\infty)$: $x \circ y = m(x - 3)(y - 3) + 3$, $m > 0$

#### a) $3 \circ 5 = 3$ pentru orice $m > 0$

$$3 \circ 5 = m(3 - 3)(5 - 3) + 3 = m\cdot 0\cdot 2 + 3 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $m = 2$, $e = \dfrac72$ este elementul neutru

Trebuie arătat că $x \circ \frac72 = \frac72 \circ x = x$ pentru orice $x \in M$ (și că $\frac72 \in M$, ceea ce e adevărat: $\frac72 \ge 3$).

$$x \circ \frac72 = 2(x - 3)\left(\frac72 - 3\right) + 3 = 2(x - 3)\cdot\frac12 + 3 = x - 3 + 3 = x.$$

Analog $\dfrac72 \circ x = 2\cdot\dfrac12(x - 3) + 3 = x$. Deci $e = \dfrac72$ este elementul neutru.

*Barem: 2p o egalitate, 3p cealaltă și concluzia.*

#### c) Pentru $m = 1$ și $f(x) = 3 + \sqrt{x - 3}$: $f(x \circ y) = f(x) \circ f(y)$

Pentru $m = 1$: $x \circ y = (x - 3)(y - 3) + 3$, deci $x \circ y - 3 = (x - 3)(y - 3) \ge 0$ pentru $x, y \in M$.

**Membrul stâng:**

$$f(x \circ y) = 3 + \sqrt{(x - 3)(y - 3) + 3 - 3} = 3 + \sqrt{(x - 3)(y - 3)} = 3 + \sqrt{x - 3}\cdot\sqrt{y - 3}.$$

**Membrul drept:** $f(x) - 3 = \sqrt{x - 3}$ și $f(y) - 3 = \sqrt{y - 3}$, deci

$$f(x) \circ f(y) = \big(f(x) - 3\big)\big(f(y) - 3\big) + 3 = \sqrt{x - 3}\cdot\sqrt{y - 3} + 3.$$

Cei doi membri sunt egali, pentru orice $x, y \in M$. ∎ (Am folosit $\sqrt{ab} = \sqrt a\sqrt b$, valabil pentru $a, b \ge 0$.)

*Barem: 2p calculul lui $f(x \circ y)$, 3p finalizarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = x - \dfrac{e^{-x}}{x - 1}$

#### a) $f'(x) = \dfrac{(x - 1)^2 + xe^{-x}}{(x - 1)^2}$

Derivăm fracția cu regula câtului, cu $(e^{-x})' = -e^{-x}$:

$$\left(\frac{e^{-x}}{x - 1}\right)' = \frac{-e^{-x}(x - 1) - e^{-x}}{(x - 1)^2} = \frac{-xe^{-x}}{(x - 1)^2}.$$

$$f'(x) = 1 - \frac{-xe^{-x}}{(x - 1)^2} = 1 + \frac{xe^{-x}}{(x - 1)^2} = \frac{(x - 1)^2 + xe^{-x}}{(x - 1)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(1 - \frac{e^{-x}}{x(x - 1)}\right) = 1,$$

$$n = \lim_{x\to+\infty}(f(x) - x) = \lim_{x\to+\infty}\left(-\frac{e^{-x}}{x - 1}\right) = 0,$$

deoarece $e^{-x} \to 0$ și $x - 1 \to +\infty$.

**Răspuns:** asimptota oblică este $y = x$. *Barem: 3p panta, 2p ordonata la origine și concluzia.*

#### c) $f$ este bijectivă

**Injectivitate.** Pe $(1, +\infty)$: $(x - 1)^2 > 0$ și $xe^{-x} > 0$, deci $f'(x) > 0$. $f$ este strict crescătoare, deci injectivă.

**Surjectivitate.** Calculăm limitele la capetele domeniului:

- $\lim\limits_{x\to+\infty}f(x) = +\infty$ (pentru că $x \to +\infty$, iar fracția tinde la 0);
- $\lim\limits_{x\searrow1}f(x) = 1 - \dfrac{e^{-1}}{0^+} = -\infty$.

$f$ este continuă și strict crescătoare, deci imaginea ei este $(-\infty, +\infty) = \mathbb R$, adică $f$ este surjectivă.

Injectivă și surjectivă $\Rightarrow$ $f$ este bijectivă. ∎

*Barem: 2p injectivitatea, 3p surjectivitatea.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x}{(x^2 + 1)^2}$

#### a) $\displaystyle\int_1^3 f(x)(x^2 + 1)^2\,dx = 4$

$f(x)(x^2 + 1)^2 = x$:

$$\int_1^3 x\,dx = \frac{x^2}{2}\Big|_1^3 = \frac92 - \frac12 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = \frac14$

Observăm că $x = \frac12(x^2 + 1)'$, deci integrandul este de forma $\frac12\cdot\frac{u'}{u^2}$, cu primitiva $-\frac12\cdot\frac1u$:

$$\int_0^1\frac{x}{(x^2 + 1)^2}dx = -\frac12\cdot\frac{1}{x^2 + 1}\Big|_0^1 = -\frac14 + \frac12 = \frac14.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $I_n = \displaystyle\int_0^1 x^n\sqrt{xf(x)}\,dx$; arătați că $I_n - I_{n+4} = \dfrac{2}{(n + 2)(n + 4)}$

**Simplificăm radicalul.** $xf(x) = \dfrac{x^2}{(x^2 + 1)^2}$, iar pe $[0, 1]$ avem $x \ge 0$, deci

$$\sqrt{xf(x)} = \frac{x}{x^2 + 1} \quad\Rightarrow\quad I_n = \int_0^1\frac{x^{n+1}}{x^2 + 1}dx.$$

**Diferența.**

$$I_n - I_{n+4} = \int_0^1\frac{x^{n+1} - x^{n+5}}{x^2 + 1}dx = \int_0^1\frac{x^{n+1}(1 - x^4)}{x^2 + 1}dx.$$

Cum $1 - x^4 = (1 - x^2)(1 + x^2)$, fracția se simplifică:

$$I_n - I_{n+4} = \int_0^1 x^{n+1}(1 - x^2)\,dx = \int_0^1(x^{n+1} - x^{n+3})\,dx = \frac{x^{n+2}}{n + 2}\Big|_0^1 - \frac{x^{n+4}}{n + 4}\Big|_0^1 = \frac1{n + 2} - \frac1{n + 4}.$$

Aducem la același numitor:

$$\frac{(n + 4) - (n + 2)}{(n + 2)(n + 4)} = \frac{2}{(n + 2)(n + 4)}. \ ∎$$

*Barem: 2p simplificarea lui $I_n$, 3p calculul diferenței.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = -6$ |
| I.3 | $x \in \{-2, 0\}$ |
| I.4 | 8 numere |
| I.5 | $C(4, 3)$ |
| II.1.c | $X = \begin{pmatrix}1 & 0 & 0\\ 1 & 1 & 1\\ 0 & 0 & 1\end{pmatrix}$ |
| III.1.b | $y = x$ |

## Ce merită reținut din model

- **Matrice involutive** ($A^2 = I$): sunt propriile inverse, iar ecuațiile matriceale devin simple înmulțiri.
- **Bijectivitate**: strict monoton $\Rightarrow$ injectiv; continuitate + limitele $-\infty$ și $+\infty$ la capete $\Rightarrow$ surjectiv pe $\mathbb R$.
- **Șiruri de integrale**: la diferențe de tipul $I_n - I_{n+k}$, caută un factor care se simplifică cu numitorul.

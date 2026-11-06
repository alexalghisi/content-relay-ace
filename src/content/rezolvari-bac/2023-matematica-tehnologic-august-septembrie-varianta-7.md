Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $1{,}5 + 3\cdot(1 - 0{,}5) = 3$

Respectăm ordinea operațiilor: întâi paranteza, apoi înmulțirea, la final adunarea.

$$1{,}5 + 3\cdot 0{,}5 = 1{,}5 + 1{,}5 = 3.$$

*Barem: 3p calculul parantezei și al produsului, 2p rezultatul.*

### 2. $f(x) = 5 - x$: arătați că $f(0) - f(1) = 1$

$f(0) = 5 - 0 = 5$ și $f(1) = 5 - 1 = 4$, deci $f(0) - f(1) = 5 - 4 = 1$.

*Barem: 2p $f(0)$, 3p $f(1)$ și concluzia.*

### 3. Ecuația $\sqrt{3x - 8} = 1$

**Condiție de existență:** $3x - 8 \ge 0 \iff x \ge \dfrac83$.

Ridicăm la pătrat (ambii membri sunt nenegativi): $3x - 8 = 1 \iff 3x = 9 \iff x = 3$.

**Verificare:** $3 \ge \frac83$ și $\sqrt{9 - 8} = 1$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p ecuația $3x - 8 = 1$, 2p soluția, cu precizarea că ea convine.*

### 4. Probabilitatea ca un $n \in A = \{1, 3, 5, 7, 9\}$ să verifice $2n \ge 9$

$$P = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}}.$$

- cazuri posibile: $A$ are 5 elemente;
- $2n \ge 9 \iff n \ge 4{,}5$, deci $n \in \{5, 7, 9\}$ — 3 cazuri favorabile (pentru $n = 3$: $6 < 9$, nu convine).

$$P = \frac35.$$

**Răspuns:** $P = \dfrac35$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,0)$, $B(1,2)$, $C(4,1)$: triunghiul $ABC$ este isoscel

Calculăm laturile cu formula distanței:

$$AC = \sqrt{(4 - 1)^2 + (1 - 0)^2} = \sqrt{10}, \qquad BC = \sqrt{(4 - 1)^2 + (1 - 2)^2} = \sqrt{10}.$$

Cum $AC = BC$, triunghiul este isoscel (cu baza $AB$, de lungime 2). *Barem: 2p $AC$, 3p $BC$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, aria 50, $AC = 5$: arătați că $AB = 20$

Într-un triunghi dreptunghic, catetele sunt înălțimi una pentru cealaltă, deci aria este semiprodusul catetelor:

$$\mathcal A = \frac{AB\cdot AC}{2} \Rightarrow 50 = \frac{AB\cdot 5}{2} \Rightarrow AB = \frac{2\cdot 50}{5} = 20.$$

*Barem: 3p formula ariei, 2p calculul lui $AB$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix}x & 1\\ -x & 2 - x\end{pmatrix}$

#### a) $\det(A(1)) = 2$

$A(1) = \begin{pmatrix}1 & 1\\ -1 & 1\end{pmatrix}$, deci

$$\det(A(1)) = 1\cdot 1 - 1\cdot(-1) = 1 + 1 = 2.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $3A(2) + A(6) = 4A(3)$

$A(2) = \begin{pmatrix}2 & 1\\ -2 & 0\end{pmatrix}$, $A(6) = \begin{pmatrix}6 & 1\\ -6 & -4\end{pmatrix}$, $A(3) = \begin{pmatrix}3 & 1\\ -3 & -1\end{pmatrix}$.

$$3A(2) + A(6) = \begin{pmatrix}6 & 3\\ -6 & 0\end{pmatrix} + \begin{pmatrix}6 & 1\\ -6 & -4\end{pmatrix} = \begin{pmatrix}12 & 4\\ -12 & -4\end{pmatrix} = 4\begin{pmatrix}3 & 1\\ -3 & -1\end{pmatrix} = 4A(3).$$

*Barem: 3p calculul membrului stâng, 2p concluzia.*

#### c) $x$ real pentru care $A(x)\cdot A(x) = 2A(x)$

Calculăm produsul (linie cu coloană):

- $(1,1)$: $x\cdot x + 1\cdot(-x) = x^2 - x$;
- $(1,2)$: $x\cdot 1 + 1\cdot(2 - x) = 2$;
- $(2,1)$: $-x\cdot x + (2 - x)(-x) = -x^2 - 2x + x^2 = -2x$;
- $(2,2)$: $-x\cdot 1 + (2 - x)^2 = x^2 - 5x + 4$.

$$A(x)A(x) = \begin{pmatrix}x^2 - x & 2\\ -2x & x^2 - 5x + 4\end{pmatrix}, \qquad 2A(x) = \begin{pmatrix}2x & 2\\ -2x & 4 - 2x\end{pmatrix}.$$

Egalăm elementele corespunzătoare:

- $x^2 - x = 2x \iff x^2 - 3x = 0 \iff x(x - 3) = 0 \iff x \in \{0, 3\}$;
- $x^2 - 5x + 4 = 4 - 2x \iff x^2 - 3x = 0$ — aceeași condiție;
- elementele $(1,2)$ și $(2,1)$ sunt egale pentru orice $x$.

**Răspuns:** $x = 0$ sau $x = 3$. *Barem: 2p calculul lui $A(x)A(x)$, 3p rezolvarea.*

### 2. Legea de compoziție $x * y = xy + 2x - y - 1$

#### a) $1 * 1 = 1$

$$1 * 1 = 1\cdot 1 + 2\cdot 1 - 1 - 1 = 1 + 2 - 1 - 1 = 1.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ real pentru care $x * 2 = x$

$x * 2 = 2x + 2x - 2 - 1 = 4x - 3$. Ecuația: $4x - 3 = x \iff 3x = 3 \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 3p expresia $x * 2 = 4x - 3$, 2p soluția.*

#### c) $(1 - x) * x \le 2$, pentru orice $x$ real

Înlocuim primul element cu $1 - x$ și al doilea cu $x$:

$$(1 - x) * x = (1 - x)x + 2(1 - x) - x - 1 = x - x^2 + 2 - 2x - x - 1 = -x^2 - 2x + 1.$$

Formăm un pătrat perfect: $-x^2 - 2x + 1 = -(x^2 + 2x + 1) + 2 = -(x + 1)^2 + 2$.

Cum $(x + 1)^2 \ge 0$, avem $-(x + 1)^2 \le 0$, deci $(1 - x) * x \le 2$ pentru orice $x$ real (egalitate pentru $x = -1$).

*Barem: 3p calculul expresiei, 2p pătratul perfect și concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = 2x + \dfrac{2}{e^x} - 1$

#### a) $f'(x) = \dfrac{2\left(e^x - 1\right)}{e^x}$

Scriem $\dfrac{2}{e^x} = 2e^{-x}$, cu $(e^{-x})' = -e^{-x}$:

$$f'(x) = 2 - 2e^{-x} = 2 - \frac{2}{e^x} = \frac{2e^x - 2}{e^x} = \frac{2\left(e^x - 1\right)}{e^x}.$$

*Barem: 3p derivarea, 2p aducerea la forma cerută.*

#### b) Tangenta în punctul de abscisă $x = 0$

Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$.

$f(0) = 0 + \dfrac21 - 1 = 1$ și $f'(0) = \dfrac{2(1 - 1)}{1} = 0$.

$$y - 1 = 0\cdot x \iff y = 1.$$

Tangenta este orizontală (punctul $(0, 1)$ este de minim, căci $f'$ schimbă semnul din $-$ în $+$).

**Răspuns:** $y = 1$. *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația tangentei.*

#### c) $m$ și $n$ pentru care $y = mx + n$ este asimptotă oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(2 + \frac{2}{x\,e^x} - \frac1x\right) = 2,$$

$$n = \lim_{x\to+\infty}\left(f(x) - 2x\right) = \lim_{x\to+\infty}\left(\frac{2}{e^x} - 1\right) = 0 - 1 = -1,$$

pentru că $e^x \to +\infty$, deci $\dfrac{2}{e^x} \to 0$.

**Răspuns:** $m = 2$, $n = -1$ (asimptota $y = 2x - 1$). *Barem: 3p $m$, 2p $n$.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = 4x^3 + 3x$

#### a) $\displaystyle\int_1^2\left(f(x) - 3x\right)dx = 15$

Integrandul este $4x^3$:

$$\int_1^2 4x^3\,dx = x^4\Big|_1^2 = 16 - 1 = 15.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_2^5\frac{1}{f(x) - 4x^3 + 3}\,dx = \frac13\ln 2$

Numitorul: $4x^3 + 3x - 4x^3 + 3 = 3x + 3 = 3(x + 1)$, pozitiv pe $[2, 5]$.

$$\int_2^5\frac{1}{3(x + 1)}\,dx = \frac13\ln(x + 1)\Big|_2^5 = \frac13(\ln 6 - \ln 3) = \frac13\ln\frac63 = \frac13\ln 2.$$

*Barem: 3p primitiva, 2p calculul final.*

#### c) Volumul corpului de rotație generat de $g(x) = \dfrac{x^3 + f(x)}{x}$, $x \in [1, 2]$, este $2\pi f(3)$

Simplificăm: $g(x) = \dfrac{x^3 + 4x^3 + 3x}{x} = \dfrac{5x^3 + 3x}{x} = 5x^2 + 3$ (pe $[1, 2]$, $x \ne 0$).

Volumul corpului de rotație: $V = \pi\displaystyle\int_1^2 g^2(x)\,dx$, cu $g^2(x) = (5x^2 + 3)^2 = 25x^4 + 30x^2 + 9$:

$$V = \pi\int_1^2\left(25x^4 + 30x^2 + 9\right)dx = \pi\left(5x^5 + 10x^3 + 9x\right)\Big|_1^2.$$

Pentru $x = 2$: $160 + 80 + 18 = 258$; pentru $x = 1$: $5 + 10 + 9 = 24$. Deci $V = \pi(258 - 24) = 234\pi$.

Pe de altă parte, $f(3) = 4\cdot 27 + 9 = 117$, iar $2\pi f(3) = 234\pi$. Așadar $V = 2\pi f(3)$.

*Barem: 3p simplificarea lui $g$ și calculul volumului, 2p $f(3)$ și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 3$ |
| I.4 | $P = \frac35$ |
| II.1.c | $x \in \{0, 3\}$ |
| II.2.b | $x = 1$ |
| II.2.c | $(1-x)*x = 2 - (x+1)^2 \le 2$ |
| III.1.b | $y = 1$ |
| III.1.c | $m = 2$, $n = -1$ |
| III.2.c | $V = 234\pi = 2\pi f(3)$ |

## Ce merită reținut din varianta 7

- **Ecuații matriceale** $A^2 = kA$: compară element cu element; de obicei toate condițiile duc la aceeași ecuație.
- **Inegalități cu legi de compoziție**: ajungi la o expresie de gradul II și formezi pătrat perfect.
- **Asimptota oblică**: $m = \lim \frac{f(x)}{x}$, $n = \lim (f(x) - mx)$; termenii cu $e^{-x}$ tind la 0 spre $+\infty$.
- **Volume de rotație**: simplifică funcția înainte de a o ridica la pătrat.

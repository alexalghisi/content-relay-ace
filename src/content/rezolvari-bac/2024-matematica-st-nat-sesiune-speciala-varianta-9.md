Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $6 - 2\sqrt5 + \sqrt5\cdot(2 - \sqrt5) = 1$

Desfacem paranteza: $\sqrt5\cdot(2 - \sqrt5) = 2\sqrt5 - (\sqrt5)^2 = 2\sqrt5 - 5$.

$$6 - 2\sqrt5 + 2\sqrt5 - 5 = 6 - 5 = 1.$$

*Barem: 2p desfacerea parantezei, 3p finalizarea.*

### 2. $f(x) = 2x - 3$: determinați $a$ cu $f(a) + f(1) = 0$

$f(a) = 2a - 3$ și $f(1) = 2 - 3 = -1$. Ecuația: $2a - 3 - 1 = 0 \iff 2a = 4 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p valorile funcției, 2p rezolvarea.*

### 3. Ecuația $10^{x-1} = 10^{-2x}\cdot 10^2$

Membrul drept: $10^{-2x}\cdot10^2 = 10^{-2x+2}$. Exponențiala de bază 10 este injectivă, deci

$$x - 1 = -2x + 2 \iff 3x = 3 \iff x = 1.$$

**Verificare:** $10^0 = 1$ și $10^{-2}\cdot10^2 = 1$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Numere de două cifre distincte, cu cifre din $A = \{1, 2, 3, 4, 5, 6\}$, având ambele cifre pare

Cifrele pare din $A$ sunt $2, 4, 6$.

- **Cifra zecilor**: una dintre $2, 4, 6$ — **3 moduri**.
- **Cifra unităților**: pară și diferită de cifra zecilor — **2 moduri**.

Total: $3\cdot2 = 6$ numere: $24, 26, 42, 46, 62, 64$.

**Răspuns:** 6 numere. *Barem: 3p alegerea cifrei zecilor, 2p numărarea.*

### 5. $A(4,6)$, $B(6,0)$, $M$ mijlocul lui $OA$: distanța $BM$

$M\left(\dfrac{0+4}{2}, \dfrac{0+6}{2}\right) = M(2, 3)$.

$$BM = \sqrt{(6 - 2)^2 + (0 - 3)^2} = \sqrt{16 + 9} = 5.$$

**Răspuns:** $BM = 5$. *Barem: 2p coordonatele lui $M$, 3p distanța.*

### 6. Triunghi dreptunghic în $A$, $AC = 6$, aria 24: arătați că $AB = 8$

Catetele $AB$ și $AC$ sunt perpendiculare, deci aria este semiprodusul lor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} \Rightarrow 24 = \frac{AB\cdot 6}{2} = 3AB \Rightarrow AB = 8. \ \blacksquare$$

*Barem: 3p formula ariei, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $A = \begin{pmatrix}1 & 1\\ 1 & 2\end{pmatrix}$ și $B(x) = \begin{pmatrix}x + 1 & x + 4\\ 2x & 4x - 3\end{pmatrix}$

#### a) $\det A = 1$

$$\det A = 1\cdot 2 - 1\cdot 1 = 2 - 1 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $x$ pentru care $\det(B(x) - xA) = x$

$$B(x) - xA = \begin{pmatrix}x + 1 - x & x + 4 - x\\ 2x - x & 4x - 3 - 2x\end{pmatrix} = \begin{pmatrix}1 & 4\\ x & 2x - 3\end{pmatrix}.$$

$\det(B(x) - xA) = 1\cdot(2x - 3) - 4x = -2x - 3$. Ecuația: $-2x - 3 = x \iff -3x = 3 \iff x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p determinantul, 2p soluția.*

#### c) $x$ pentru care $B(x) + B(x + 2) = 2A\cdot A\cdot A$

$$A\cdot A = \begin{pmatrix}1 + 1 & 1 + 2\\ 1 + 2 & 1 + 4\end{pmatrix} = \begin{pmatrix}2 & 3\\ 3 & 5\end{pmatrix}, \quad A\cdot A\cdot A = \begin{pmatrix}2 + 3 & 2 + 6\\ 3 + 5 & 3 + 10\end{pmatrix} = \begin{pmatrix}5 & 8\\ 8 & 13\end{pmatrix},$$

deci $2A\cdot A\cdot A = \begin{pmatrix}10 & 16\\ 16 & 26\end{pmatrix}$.

$B(x + 2) = \begin{pmatrix}x + 3 & x + 6\\ 2x + 4 & 4x + 5\end{pmatrix}$, deci

$$B(x) + B(x+2) = \begin{pmatrix}2x + 4 & 2x + 10\\ 4x + 4 & 8x + 2\end{pmatrix}.$$

Egalăm element cu element: $2x + 4 = 10$, $2x + 10 = 16$, $4x + 4 = 16$, $8x + 2 = 26$ — toate dau $x = 3$.

**Răspuns:** $x = 3$. *Barem: 3p calculul lui $2A\cdot A\cdot A$, 2p suma și valoarea lui $x$.*

### 2. Polinomul $f = X^3 + mX^2 - 2X - 4$

#### a) Pentru $m = 6$: $f(1) = 1$

$f = X^3 + 6X^2 - 2X - 4$, deci $f(1) = 1 + 6 - 2 - 4 = 1$.

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $m$ pentru care $(x_1x_2x_3)^2 = x_1 + x_2 + x_3 + x_1x_2x_3$

Relațiile lui Viète pentru $X^3 + aX^2 + bX + c$: $x_1 + x_2 + x_3 = -a$, $x_1x_2x_3 = -c$. Aici $a = m$, $c = -4$:

$$x_1 + x_2 + x_3 = -m, \qquad x_1x_2x_3 = 4.$$

Condiția: $4^2 = -m + 4 \iff 16 = 4 - m \iff m = -12$.

**Răspuns:** $m = -12$. *Barem: 2p relațiile lui Viète, 3p valoarea lui $m$.*

#### c) Rădăcinile lui $f$, știind că restul împărțirii la $X - 2$ este 8

Teorema restului: restul împărțirii lui $f$ la $X - 2$ este $f(2)$.

$f(2) = 8 + 4m - 4 - 4 = 4m$, deci $4m = 8 \Rightarrow m = 2$ și $f = X^3 + 2X^2 - 2X - 4$.

Grupăm termenii: $f = X^2(X + 2) - 2(X + 2) = (X + 2)(X^2 - 2) = (X + 2)(X - \sqrt2)(X + \sqrt2)$.

**Răspuns:** rădăcinile sunt $-2$, $-\sqrt2$, $\sqrt2$. *Barem: 2p $m = 2$, 3p rădăcinile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{3 - x}{x^2} + \ln x$

#### a) $f'(x) = \dfrac{x^2 + x - 6}{x^3}$

Regula câtului pentru prima fracție:

$$\left(\frac{3 - x}{x^2}\right)' = \frac{-x^2 - 2x(3 - x)}{x^4} = \frac{x^2 - 6x}{x^4} = \frac{x - 6}{x^3}.$$

Deci $f'(x) = \dfrac{x - 6}{x^3} + \dfrac1x = \dfrac{x - 6 + x^2}{x^3} = \dfrac{x^2 + x - 6}{x^3}$.

(Variantă: $\dfrac{3 - x}{x^2} = 3x^{-2} - x^{-1}$, cu derivata $-6x^{-3} + x^{-2}$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}(f(x) - \ln x) = 0$

$f(x) - \ln x = \dfrac{3 - x}{x^2} = \dfrac{3}{x^2} - \dfrac1x$, deci

$$\lim_{x\to+\infty}\left(\frac{3}{x^2} - \frac1x\right) = 0 - 0 = 0.$$

*Barem: 3p simplificarea, 2p limita.*

#### c) $4f(x) - 1 \ge \ln 16$ pentru orice $x > 0$

Factorizăm: $x^2 + x - 6 = (x - 2)(x + 3)$. Pentru $x > 0$, $x + 3 > 0$ și $x^3 > 0$, deci semnul lui $f'$ este semnul lui $x - 2$:

| $x$ | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↘ | $\tfrac14 + \ln2$ | ↗ | |

$x = 2$ este punct de minim global: $f(x) \ge f(2) = \dfrac{3 - 2}{4} + \ln 2 = \dfrac14 + \ln2$.

Înmulțim cu 4 și scădem 1: $4f(x) - 1 \ge 1 + 4\ln 2 - 1 = 4\ln 2 = \ln 2^4 = \ln 16$, pentru orice $x \in (0, +\infty)$. $\blacksquare$

*Barem: 3p monotonia, 2p minimul și concluzia.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = 3x + \dfrac{1}{\sqrt{x+3}}$

#### a) $\displaystyle\int_2^4\left(f(x) - \frac{1}{\sqrt{x+3}}\right)dx = 18$

Integrandul este $3x$:

$$\int_2^4 3x\,dx = \frac{3x^2}{2}\Big|_2^4 = \frac{48}{2} - \frac{12}{2} = 24 - 6 = 18.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^6 (f(x) - 3x)\,dx = 2$

Integrandul este $\dfrac{1}{\sqrt{x+3}}$. Cum $(\sqrt{x+3})' = \dfrac{1}{2\sqrt{x+3}}$, o primitivă este $2\sqrt{x+3}$:

$$\int_1^6 \frac{dx}{\sqrt{x+3}} = 2\sqrt{x+3}\Big|_1^6 = 2\cdot3 - 2\cdot2 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ pentru care $\displaystyle\int_{-2}^1\frac{1}{x+3}\left(f(x) - \frac{1}{\sqrt{x+3}}\right)dx = 9(a - 2\ln 2)$

Integrandul este $\dfrac{3x}{x+3}$. Scriem $\dfrac{3x}{x+3} = \dfrac{3(x+3) - 9}{x+3} = 3 - \dfrac{9}{x+3}$. Pe $[-2, 1]$, $x + 3 > 0$:

$$\int_{-2}^1\left(3 - \frac{9}{x+3}\right)dx = \Big(3x - 9\ln(x+3)\Big)\Big|_{-2}^1 = (3 - 9\ln4) - (-6 - 9\ln1) = 9 - 9\ln 4.$$

Cum $\ln 4 = 2\ln 2$, integrala este $9(1 - 2\ln 2)$. Din $9(1 - 2\ln2) = 9(a - 2\ln2)$ obținem $a = 1$.

**Răspuns:** $a = 1$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 2$ |
| I.3 | $x = 1$ |
| I.4 | 6 numere |
| I.5 | $BM = 5$ |
| II.1.b | $x = -1$ |
| II.1.c | $x = 3$ |
| II.2.b | $m = -12$ |
| II.2.c | $-2, -\sqrt2, \sqrt2$ |
| III.2.c | $a = 1$ |

## Ce merită reținut din varianta 9

- **Teorema restului**: restul împărțirii lui $f$ la $X - a$ este $f(a)$ — dă direct parametrul.
- **Factorizare prin grupare**: la polinoame de grad 3 cu coeficienții în proporție ($1:2$ și $-2:-4$), grupează câte doi termeni.
- **Fracții raționale în integrale**: scrie $\dfrac{3x}{x+3} = 3 - \dfrac{9}{x+3}$ înainte de a integra.

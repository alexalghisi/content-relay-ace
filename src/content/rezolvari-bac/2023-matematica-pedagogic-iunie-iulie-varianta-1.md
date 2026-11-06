Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_pedagogic**, sesiunea iunie–iulie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt{25} + \sqrt{64} - \sqrt{169} = 0$

Toți cei trei termeni sunt pătrate perfecte: $25 = 5^2$, $64 = 8^2$, $169 = 13^2$.

$$\sqrt{25} + \sqrt{64} - \sqrt{169} = 5 + 8 - 13 = 13 - 13 = 0.$$

*Barem: 3p calculul radicalilor, 2p finalizarea.*

### 2. $f(x) = 2x + 2$, $g(x) = x^2 + 2$: numerele naturale $n$ cu $f(n) \ge g(n)$

$$2n + 2 \ge n^2 + 2 \iff 2n \ge n^2 \iff n^2 - 2n \le 0 \iff n(n - 2) \le 0.$$

Produsul $n(n-2)$ este $\le 0$ pentru $n \in [0, 2]$. Numerele naturale din acest interval sunt $0, 1, 2$.

**Răspuns:** $n \in \{0, 1, 2\}$. *Barem: 2p inecuația, 3p soluțiile naturale.* Nu împărți prin $n$ — ai pierde $n = 0$.

### 3. Ecuația $2 + \log_3(2x - 1) = \log_3 27$

**Condiție de existență:** $2x - 1 > 0$, adică $x > \dfrac12$.

$\log_3 27 = \log_3 3^3 = 3$, deci ecuația devine

$$2 + \log_3(2x - 1) = 3 \iff \log_3(2x - 1) = 1 \iff 2x - 1 = 3^1 = 3 \iff x = 2.$$

$x = 2 > \frac12$, deci convine.

**Răspuns:** $x = 2$. *Barem: 3p $\log_3(2x-1) = 1$ și $2x - 1 = 3$, 2p soluția care convine.*

### 4. Prețul de 150 de lei după două scumpiri succesive cu câte 20%

A doua scumpire se aplică la prețul **nou**, nu la cel inițial.

- După prima scumpire: $150 + \dfrac{20}{100}\cdot 150 = 150 + 30 = 180$ lei.
- După a doua scumpire: $180 + \dfrac{20}{100}\cdot 180 = 180 + 36 = 216$ lei.

(Echivalent: $150\cdot 1{,}2^2 = 150\cdot 1{,}44 = 216$.)

**Răspuns:** 216 lei. *Barem: 2p prima scumpire, 3p a doua scumpire.* Greșeala clasică: $150 + 40\% \cdot 150 = 210$ — scumpirile succesive nu se adună.

### 5. $A(0, 4)$, $M(3, 6)$, $M$ mijlocul lui $AB$: coordonatele lui $B$

$$x_M = \frac{x_A + x_B}{2} \Rightarrow 3 = \frac{0 + x_B}{2} \Rightarrow x_B = 6; \qquad y_M = \frac{y_A + y_B}{2} \Rightarrow 6 = \frac{4 + y_B}{2} \Rightarrow y_B = 8.$$

**Răspuns:** $B(6, 8)$. *Barem: 3p relațiile de mijloc, 2p coordonatele.*

### 6. Arătați că $\dfrac{\sqrt3}{2}\sin 60^\circ - \dfrac{1}{\sqrt3}\cos 30^\circ\cos 60^\circ = \dfrac12$

Valorile: $\sin 60^\circ = \dfrac{\sqrt3}{2}$, $\cos 30^\circ = \dfrac{\sqrt3}{2}$, $\cos 60^\circ = \dfrac12$.

$$\frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} - \frac{1}{\sqrt3}\cdot\frac{\sqrt3}{2}\cdot\frac12 = \frac34 - \frac14 = \frac24 = \frac12.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

Legea pe $\mathbb R$: $x * y = x + y - 4$.

### 1. Arătați că $2 * (-2) = -4$

$$2 * (-2) = 2 + (-2) - 4 = 0 - 4 = -4.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. Legea este asociativă

Calculăm ambele grupări, pentru $x, y, z$ reali arbitrari:

$$(x * y) * z = (x + y - 4) * z = (x + y - 4) + z - 4 = x + y + z - 8,$$

$$x * (y * z) = x * (y + z - 4) = x + (y + z - 4) - 4 = x + y + z - 8.$$

Cele două expresii coincid, deci $(x * y) * z = x * (y * z)$ pentru orice $x, y, z$: legea este asociativă. *Barem: 2p prima grupare, 3p a doua și concluzia.*

### 3. Arătați că $1 * 2 * 3 * 4 * 5 * 6 > 0$

Asociativitatea ne permite să grupăm: $1 * 2 * 3 = 1 + 2 + 3 - 8 = -2$ și $4 * 5 * 6 = 4 + 5 + 6 - 8 = 7$ (am folosit formula de la 2).

$$1 * 2 * 3 * 4 * 5 * 6 = (-2) * 7 = -2 + 7 - 4 = 1 > 0.$$

(Formula generală: compunerea a $n$ numere este suma lor minus $4(n-1)$; aici $21 - 20 = 1$.) *Barem: 3p gruparea, 2p calculul.*

### 4. $x$ real cu $x * x * x = (x + 1) * x$

Din 2: $x * x * x = 3x - 8$. Iar $(x+1) * x = x + 1 + x - 4 = 2x - 3$.

$$3x - 8 = 2x - 3 \iff x = 5.$$

**Răspuns:** $x = 5$. *Barem: 2p cele două expresii, 3p rezolvarea.*

### 5. Ecuația $4^x * 2^x = 2$

$4^x * 2^x = 4^x + 2^x - 4$, deci ecuația devine $4^x + 2^x - 6 = 0$.

Notăm $t = 2^x > 0$; atunci $4^x = (2^2)^x = t^2$:

$$t^2 + t - 6 = 0 \iff (t - 2)(t + 3) = 0 \iff t = 2 \ \text{sau}\ t = -3.$$

$t = -3$ se respinge ($2^x > 0$). $2^x = 2 \Rightarrow x = 1$.

**Răspuns:** $x = 1$. *Barem: 2p ecuația $4^x + 2^x - 4 = 2$, 3p rezolvarea.*

### 6. Arătați că $x^2 * \dfrac{1}{x^2} \ge -2$, pentru orice $x$ real nenul

$$x^2 * \frac{1}{x^2} = x^2 + \frac{1}{x^2} - 4.$$

Inegalitatea devine $x^2 + \dfrac{1}{x^2} - 4 \ge -2 \iff x^2 + \dfrac{1}{x^2} - 2 \ge 0$. Dar

$$x^2 - 2 + \frac{1}{x^2} = \left(x - \frac1x\right)^2 \ge 0,$$

ca pătrat al unui număr real. Deci $x^2 * \frac{1}{x^2} \ge -2$ pentru orice $x \ne 0$ (cu egalitate pentru $x = \pm 1$). *Barem: 2p reducerea la $x^2 + \frac{1}{x^2} - 2 \ge 0$, 3p pătratul perfect și concluzia.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix}1 & 0\\ 1 & -1\end{pmatrix}$, $B = \begin{pmatrix}1 & 2\\ 0 & -1\end{pmatrix}$, $I_2$, $O_2$.

### 1. $\det A = -1$

$$\det A = \begin{vmatrix}1 & 0\\ 1 & -1\end{vmatrix} = 1\cdot(-1) - 0\cdot 1 = -1.$$

*Barem: 3p dezvoltarea, 2p rezultatul.*

### 2. $A\cdot A - B\cdot B = O_2$

$$A\cdot A = \begin{pmatrix}1\cdot1 + 0\cdot1 & 1\cdot0 + 0\cdot(-1)\\ 1\cdot1 + (-1)\cdot1 & 1\cdot0 + (-1)(-1)\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix},$$

$$B\cdot B = \begin{pmatrix}1\cdot1 + 2\cdot0 & 1\cdot2 + 2\cdot(-1)\\ 0\cdot1 + (-1)\cdot0 & 0\cdot2 + (-1)(-1)\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}.$$

Ambele sunt egale cu $I_2$, deci $A\cdot A - B\cdot B = I_2 - I_2 = O_2$. *Barem: 2p $A\cdot A$, 3p $B\cdot B$ și concluzia.*

### 3. $x$ real cu $\det(A\cdot A - xI_2) = 0$

Din 2, $A\cdot A = I_2$, deci $A\cdot A - xI_2 = \begin{pmatrix}1 - x & 0\\ 0 & 1 - x\end{pmatrix}$ și

$$\det(A\cdot A - xI_2) = (1 - x)^2 = 0 \iff x = 1.$$

**Răspuns:** $x = 1$. *Barem: 3p determinantul, 2p valoarea lui $x$.*

### 4. $x$ real cu $A - B - xI_2 = \begin{pmatrix}-2 & -2\\ 1 & -2\end{pmatrix}$

$$A - B = \begin{pmatrix}0 & -2\\ 1 & 0\end{pmatrix}, \qquad A - B - xI_2 = \begin{pmatrix}-x & -2\\ 1 & -x\end{pmatrix}.$$

Egalând elementele de pe diagonală: $-x = -2 \Rightarrow x = 2$ (celelalte elemente coincid deja).

**Răspuns:** $x = 2$. *Barem: 3p matricea $A - B - xI_2$, 2p valoarea lui $x$.*

### 5. $a$ real cu $\det\left(a(A + B)\right) = -6$

$$A + B = \begin{pmatrix}2 & 2\\ 1 & -2\end{pmatrix}, \qquad a(A+B) = \begin{pmatrix}2a & 2a\\ a & -2a\end{pmatrix}.$$

$$\det\left(a(A+B)\right) = 2a\cdot(-2a) - 2a\cdot a = -4a^2 - 2a^2 = -6a^2.$$

$-6a^2 = -6 \iff a^2 = 1 \iff a \in \{-1, 1\}$.

**Răspuns:** $a = -1$ sau $a = 1$. *Barem: 3p determinantul, 2p valorile.*

### 6. Rezolvați ecuația $A\cdot X = B$

$\det A = -1 \ne 0$, deci $A$ este inversabilă și $X = A^{-1}\cdot B$ (înmulțim la **stânga**, pentru că $A$ e la stânga lui $X$).

Din 2, $A\cdot A = I_2$, deci $A^{-1} = A$. Atunci

$$X = A\cdot B = \begin{pmatrix}1 & 0\\ 1 & -1\end{pmatrix}\begin{pmatrix}1 & 2\\ 0 & -1\end{pmatrix} = \begin{pmatrix}1 & 2\\ 1 & 3\end{pmatrix}.$$

Verificare: $A\cdot X = \begin{pmatrix}1 & 0\\ 1 & -1\end{pmatrix}\begin{pmatrix}1 & 2\\ 1 & 3\end{pmatrix} = \begin{pmatrix}1 & 2\\ 0 & -1\end{pmatrix} = B$ ✔.

**Răspuns:** $X = \begin{pmatrix}1 & 2\\ 1 & 3\end{pmatrix}$. *Barem: 3p $A^{-1} = A$ și $X = A\cdot B$, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $n \in \{0, 1, 2\}$ |
| I.3 | $x = 2$ |
| I.4 | 216 lei |
| I.5 | $B(6, 8)$ |
| II.4 | $x = 5$ |
| II.5 | $x = 1$ |
| III.3 | $x = 1$ |
| III.4 | $x = 2$ |
| III.5 | $a \in \{-1, 1\}$ |
| III.6 | $X = \begin{pmatrix}1 & 2\\ 1 & 3\end{pmatrix}$ |

## Ce merită reținut din varianta 1

- **Scumpiri succesive**: procentul se aplică la prețul obținut după scumpirea anterioară.
- **Legea** $x + y - k$: compunerea a $n$ numere este suma lor minus $k(n-1)$.
- **Ecuații exponențiale** cu $4^x$ și $2^x$: substituția $t = 2^x > 0$.
- **Matrice cu** $A^2 = I_2$: inversa este chiar $A$ — folosește rezultatele de la punctele anterioare.

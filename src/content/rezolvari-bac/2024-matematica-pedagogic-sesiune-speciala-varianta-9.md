Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_pedagogic**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt3\cdot\left(2 - \sqrt3\right) - 2\sqrt3 + 4 = 1$

Desfacem paranteza: $\sqrt3\cdot 2 = 2\sqrt3$ și $\sqrt3\cdot\sqrt3 = 3$.

$$\sqrt3(2 - \sqrt3) - 2\sqrt3 + 4 = 2\sqrt3 - 3 - 2\sqrt3 + 4 = -3 + 4 = 1.$$

*Barem: 2p desfacerea parantezei, 3p finalizarea.*

### 2. $f(x) = 5x - 4$: determinați $a$ cu $f(a) = a$

$5a - 4 = a \iff 4a = 4 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p $f(a)$, 3p rezolvarea.*

### 3. Ecuația $\sqrt{x^2 + 4x + 5} = 1$

Sub radical: $x^2 + 4x + 5 = (x+2)^2 + 1 > 0$ pentru orice $x$, deci radicalul e definit pe $\mathbb R$. Ridicăm la pătrat (ambii membri nenegativi):

$$x^2 + 4x + 5 = 1 \iff x^2 + 4x + 4 = 0 \iff (x + 2)^2 = 0 \iff x = -2.$$

**Verificare:** $\sqrt{4 - 8 + 5} = \sqrt1 = 1$ ✔.

**Răspuns:** $x = -2$. *Barem: 3p ecuația $x^2 + 4x + 4 = 0$, 2p soluția care convine.*

### 4. Probabilitatea ca $n^2 \in A$, pentru $n \in A = \{0, 1, \dots, 9\}$

**Cazuri posibile:** $A$ are 10 elemente.

**Cazuri favorabile:** $n^2 \le 9$: $0^2 = 0$, $1^2 = 1$, $2^2 = 4$, $3^2 = 9$ aparțin lui $A$; pentru $n \ge 4$, $n^2 \ge 16 \notin A$. Deci 4 cazuri favorabile.

$$p = \frac{4}{10} = \frac25.$$

**Răspuns:** $p = \dfrac25$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3, 4)$, $B(7, -4)$; arătați că $OA = OM$, $M$ mijlocul lui $AB$

$$M\left(\frac{3 + 7}{2}, \frac{4 + (-4)}{2}\right) = M(5, 0), \qquad OM = \sqrt{5^2 + 0^2} = 5.$$

$$OA = \sqrt{3^2 + 4^2} = \sqrt{25} = 5.$$

Deci $OA = OM$. *Barem: 3p mijlocul și $OM$, 2p $OA$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 8$, $AC = 3$, $M$ mijlocul lui $AB$: perimetrul lui $AMC$ este 12

$M$ e pe cateta $AB$, deci $AM = \dfrac{AB}{2} = 4$. Triunghiul $AMC$ este dreptunghic în $A$ (unghiul dintre $AM \subset AB$ și $AC$ e drept). Din Pitagora:

$$MC = \sqrt{AM^2 + AC^2} = \sqrt{16 + 9} = 5.$$

$$P_{AMC} = AM + AC + MC = 4 + 3 + 5 = 12.$$

*Barem: 2p $AM$, 3p $MC$ și perimetrul.*

## Subiectul al II-lea (30 de puncte)

Pe $\mathbb R$ se definește $x \circ y = 2xy - 5(x + y) + 15$.

### 1. Arătați că $2 \circ 2 = 3$

$$2 \circ 2 = 2\cdot2\cdot2 - 5(2 + 2) + 15 = 8 - 20 + 15 = 3.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

### 2. Arătați că $e = 3$ este elementul neutru

$$x \circ 3 = 6x - 5(x + 3) + 15 = 6x - 5x - 15 + 15 = x, \qquad 3 \circ x = 6x - 5(3 + x) + 15 = x,$$

pentru orice $x$ real, deci $e = 3$ este elementul neutru. *Barem: 2p $x\circ 3 = x$, 3p $3\circ x = x$ și concluzia.*

### 3. Mulțimea numerelor reale $x$ cu $x \circ 4 \le 1$

$$x \circ 4 = 8x - 5(x + 4) + 15 = 3x - 5.$$

Inecuația: $3x - 5 \le 1 \iff 3x \le 6 \iff x \le 2$.

**Răspuns:** $x \in (-\infty, 2]$. *Barem: 2p expresia, 3p rezolvarea.*

### 4. Arătați că $x \circ y = 2\left(x - \frac52\right)\left(y - \frac52\right) + \frac52$

Scriem $15 = \dfrac{25}{2} + \dfrac52$ și grupăm:

$$x \circ y = 2xy - 5x - 5y + \frac{25}{2} + \frac52 = 2x\left(y - \frac52\right) - 5\left(y - \frac52\right) + \frac52 = (2x - 5)\left(y - \frac52\right) + \frac52.$$

Cum $2x - 5 = 2\left(x - \frac52\right)$, obținem $x\circ y = 2\left(x - \frac52\right)\left(y - \frac52\right) + \frac52$.

(Verificare inversă: $2\left(xy - \frac52x - \frac52y + \frac{25}{4}\right) + \frac52 = 2xy - 5x - 5y + 15$ ✔.) *Barem: 3p gruparea, 2p finalizarea.*

### 5. Numerele reale $x$ cu $x \circ x = x$

Din punctul 4: $x \circ x = 2\left(x - \frac52\right)^2 + \frac52$. Ecuația:

$$2\left(x - \frac52\right)^2 + \frac52 = x \iff 2\left(x - \frac52\right)^2 - \left(x - \frac52\right) = 0 \iff \left(x - \frac52\right)\left(2x - 5 - 1\right) = 0.$$

Deci $x = \dfrac52$ sau $2x - 6 = 0 \iff x = 3$.

Verificare: $3 \circ 3 = 3$ ✔ (3 e neutru); $\frac52 \circ \frac52 = \frac52$ ✔.

**Răspuns:** $x \in \left\{\dfrac52, 3\right\}$. *Barem: 2p expresia lui $x\circ x$, 3p soluțiile.*

### 6. Numărul natural nenul $n$ pentru care $n \circ \frac1n$ este natural

$$n \circ \frac1n = 2\cdot n\cdot\frac1n - 5\left(n + \frac1n\right) + 15 = 2 - 5n - \frac5n + 15 = 17 - 5n - \frac5n.$$

Ca să fie natural, trebuie întâi să fie întreg, deci $\dfrac5n$ întreg $\Rightarrow n \mid 5 \Rightarrow n \in \{1, 5\}$.

- $n = 1$: $17 - 5 - 5 = 7 \in \mathbb N$ ✔;
- $n = 5$: $17 - 25 - 1 = -9 \notin \mathbb N$ — nu convine.

**Răspuns:** $n = 1$. *Barem: 2p expresia, 3p analiza cazurilor.*

## Subiectul al III-lea (30 de puncte)

Se consideră $I_2$ și $A(a) = \begin{pmatrix}1 & a - 1\\ 0 & a\end{pmatrix}$.

### 1. Arătați că $\det(A(2)) = 2$

$$A(2) = \begin{pmatrix}1 & 1\\ 0 & 2\end{pmatrix}, \qquad \det(A(2)) = 1\cdot 2 - 0\cdot 1 = 2.$$

*Barem: 3p aplicarea formulei, 2p rezultatul.*

### 2. Arătați că $2A(3) - A(5) = I_2$

$$2A(3) - A(5) = 2\begin{pmatrix}1 & 2\\ 0 & 3\end{pmatrix} - \begin{pmatrix}1 & 4\\ 0 & 5\end{pmatrix} = \begin{pmatrix}2 & 4\\ 0 & 6\end{pmatrix} - \begin{pmatrix}1 & 4\\ 0 & 5\end{pmatrix} = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix} = I_2.$$

*Barem: 3p calculul, 2p concluzia.*

### 3. Numerele reale $a$ cu $\det(A(a + 1)) = 2a^2$

Matricea e triunghiulară, deci $\det(A(t)) = 1\cdot t - 0 = t$; în particular $\det(A(a+1)) = a + 1$.

Ecuația: $a + 1 = 2a^2 \iff 2a^2 - a - 1 = 0$, cu $\Delta = 1 + 8 = 9$:

$$a_{1,2} = \frac{1 \pm 3}{4} \Rightarrow a = 1 \text{ sau } a = -\frac12.$$

**Răspuns:** $a \in \left\{-\dfrac12, 1\right\}$. *Barem: 3p determinantul, 2p soluțiile.*

### 4. Arătați că $A(a)\cdot A(b) = A(ab)$

$$A(a)\cdot A(b) = \begin{pmatrix}1 & a - 1\\ 0 & a\end{pmatrix}\begin{pmatrix}1 & b - 1\\ 0 & b\end{pmatrix} = \begin{pmatrix}1 & (b - 1) + (a - 1)b\\ 0 & ab\end{pmatrix}.$$

Elementul din dreapta sus: $b - 1 + ab - b = ab - 1$. Deci

$$A(a)\cdot A(b) = \begin{pmatrix}1 & ab - 1\\ 0 & ab\end{pmatrix} = A(ab).$$

*Barem: 3p produsul, 2p identificarea cu $A(ab)$.*

### 5. Inversa matricei $B = A(2)\cdot A(3)$

Din punctul 4, $B = A(6)$. Observăm că $A(1) = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix} = I_2$ și, tot din punctul 4,

$$A(6)\cdot A\left(\tfrac16\right) = A(1) = I_2, \qquad A\left(\tfrac16\right)\cdot A(6) = A(1) = I_2.$$

Deci $B^{-1} = A\left(\frac16\right) = \begin{pmatrix}1 & -\frac56\\ 0 & \frac16\end{pmatrix}$.

Verificare directă: $B = \begin{pmatrix}1 & 5\\ 0 & 6\end{pmatrix}$, $\det B = 6$, iar $B^{-1} = \dfrac16\begin{pmatrix}6 & -5\\ 0 & 1\end{pmatrix} = \begin{pmatrix}1 & -\frac56\\ 0 & \frac16\end{pmatrix}$ ✔.

**Răspuns:** $B^{-1} = \begin{pmatrix}1 & -\frac56\\ 0 & \frac16\end{pmatrix}$. *Barem: 2p $B = A(6)$, 3p inversa.*

### 6. Perechile $(a, b)$ de numere naturale cu $\det(bA(a)) = 4$

$bA(a) = \begin{pmatrix}b & b(a-1)\\ 0 & ab\end{pmatrix}$, deci $\det(bA(a)) = b\cdot ab - 0 = ab^2$. (Regula generală: pentru matrice $2\times2$, $\det(bM) = b^2\det M$.)

Ecuația $ab^2 = 4$ în numere naturale: $b^2$ trebuie să fie un pătrat perfect care divide pe 4, deci $b^2 \in \{1, 4\}$:

- $b = 1 \Rightarrow a = 4$;
- $b = 2 \Rightarrow a = 1$.

**Răspuns:** $(a, b) \in \{(1, 2),\ (4, 1)\}$. *Barem: 2p $\det(bA(a)) = ab^2$, 3p perechile.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x = -2$ |
| I.4 | $p = \frac25$ |
| II.3 | $x \in (-\infty, 2]$ |
| II.5 | $x \in \{\frac52, 3\}$ |
| II.6 | $n = 1$ |
| III.3 | $a \in \{-\frac12, 1\}$ |
| III.5 | $B^{-1} = \begin{pmatrix}1 & -\frac56\\ 0 & \frac16\end{pmatrix}$ |
| III.6 | $(1,2)$ și $(4,1)$ |

## Ce merită reținut din varianta 9

- **Proprietatea $A(a)A(b) = A(ab)$** dă inversa imediat: $A(a)^{-1} = A\left(\frac1a\right)$, pentru că $A(1) = I_2$.
- **$\det(bM) = b^2\det M$** pentru matrice de ordin 2.
- **„Natural” înseamnă și nenegativ**: verifică semnul, nu doar că rezultatul e întreg (cazul $n = 5$).

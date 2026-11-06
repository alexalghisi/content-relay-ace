Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_pedagogic**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 5$, $r = -2$. Calculați $a_3$

Termenul general: $a_n = a_1 + (n-1)r$, deci

$$a_3 = a_1 + 2r = 5 + 2\cdot(-2) = 1.$$

**Răspuns:** $a_3 = 1$. *Barem: 3p formula, 2p calculul.*

### 2. $A(1, 2)$ aparține graficului lui $f(x) = x^2 + ax + 3$

$A \in G_f \iff f(1) = 2 \iff 1 + a + 3 = 2 \iff a = -2.$

**Răspuns:** $a = -2$. *Barem: 3p condiția, 2p valoarea lui $a$.*

### 3. Ecuația $\sqrt{x} = \sqrt{x^2 - 2}$

Ridicăm la pătrat: $x = x^2 - 2 \iff x^2 - x - 2 = 0$, cu rădăcinile $x = -1$ și $x = 2$.

**Verificare:** $x = -1$ nu convine ($\sqrt{-1}$ nu există în $\mathbb R$); $x = 2$: $\sqrt2 = \sqrt{4-2}$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p ecuația de gradul al doilea, 2p soluția care convine.*

### 4. Pix, creion, stilou: stiloul costă 70 de lei. Cât costă creionul?

Notăm cu $x$ prețul creionului. Pixul costă $5x$, iar stiloul de 7 ori mai mult decât pixul: $7\cdot 5x = 35x$.

$$35x = 70 \iff x = 2.$$

**Răspuns:** creionul costă $2$ lei. *Barem: 3p ecuația $35x = 70$, 2p rezultatul.*

### 5. Paralelogramul $ABCD$, $O = AC\cap BD$: arătați că $\overrightarrow{OC} = \frac12\left(\overrightarrow{AB} + \overrightarrow{AD}\right)$

Regula paralelogramului: $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$. Diagonalele unui paralelogram se înjumătățesc, deci $O$ este mijlocul lui $AC$:

$$\overrightarrow{OC} = \frac12\overrightarrow{AC} = \frac12\left(\overrightarrow{AB} + \overrightarrow{AD}\right).\ \blacksquare$$

*Barem: 2p regula paralelogramului, 3p finalizarea.*

### 6. $\triangle ABC$ dreptunghic în $A$, $AC = 2AB$, $BC = 5$: perimetrul este $3\sqrt5 + 5$

Teorema lui Pitagora: $BC^2 = AB^2 + AC^2 = AB^2 + 4AB^2 = 5AB^2$, deci $5AB^2 = 25$, $AB = \sqrt5$ și $AC = 2\sqrt5$.

$$P = AB + AC + BC = \sqrt5 + 2\sqrt5 + 5 = 3\sqrt5 + 5.\ \blacksquare$$

*Barem: 3p $AB = \sqrt5$, 2p perimetrul.*

## Subiectul al II-lea (30 de puncte)

Legea de compoziție: $x \circ y = x^2 - xy + y^2$.

### 1. Arătați că $1 \circ 2 = 3$

$$1 \circ 2 = 1^2 - 1\cdot 2 + 2^2 = 1 - 2 + 4 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. Legea este comutativă

$$x \circ y = x^2 - xy + y^2 = y^2 - yx + x^2 = y \circ x,\ \forall x, y \in \mathbb R.\ \blacksquare$$

*Barem: 3p, 2p.*

### 3. $a = (1\circ 3)\circ 2$, $b = 1 \circ (3 \circ 2)$; calculați $b - a$

$1 \circ 3 = 1 - 3 + 9 = 7$, deci $a = 7 \circ 2 = 49 - 14 + 4 = 39$.

$3 \circ 2 = 9 - 6 + 4 = 7$, deci $b = 1 \circ 7 = 1 - 7 + 49 = 43$.

$$b - a = 43 - 39 = 4.$$

**Observație:** legea nu este asociativă. *Barem: 3p $a = 39$, 2p $b$ și diferența.*

### 4. $x \circ x = 4$

$x \circ x = x^2 - x^2 + x^2 = x^2$, deci $x^2 = 4 \iff x \in \{-2, 2\}$.

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 3p $x\circ x = x^2$, 2p soluțiile.*

### 5. Dacă $x \circ y = 0$, atunci $x = y = 0$

Formăm un pătrat perfect:

$$x^2 - xy + y^2 = \left(x - \frac{y}{2}\right)^2 + \frac{3y^2}{4} = 0.$$

O sumă de două numere nenegative este $0$ doar dacă ambele sunt $0$: $y = 0$ și $x - \dfrac y2 = 0$, deci $x = y = 0$. $\blacksquare$

*Barem: 2p forma canonică, 3p concluzia.*

### 6. $3 \circ 2^x = 7$

$$9 - 3\cdot 2^x + 2^{2x} = 7 \iff (2^x)^2 - 3\cdot 2^x + 2 = 0 \iff (2^x - 1)(2^x - 2) = 0.$$

$2^x = 1 \Rightarrow x = 0$; $2^x = 2 \Rightarrow x = 1$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 3p factorizarea, 2p soluțiile.*

## Subiectul al III-lea (30 de puncte)

Matricea $A(a) = \begin{pmatrix}1 & a\\ 0 & 1\end{pmatrix}$, $a \in \mathbb R$.

### 1. $\det(A(5)) = 1$

$$\det(A(5)) = \begin{vmatrix}1 & 5\\ 0 & 1\end{vmatrix} = 1\cdot 1 - 5\cdot 0 = 1.$$

*Barem: 3p, 2p.*

### 2. $\det(A(1) + A(2))$

$$A(1) + A(2) = \begin{pmatrix}2 & 3\\ 0 & 2\end{pmatrix},\qquad \det = 2\cdot 2 - 3\cdot 0 = 4.$$

**Răspuns:** $4$. *Barem: 2p suma, 3p determinantul.*

### 3. $A(a)\cdot A(b) = A(a+b)$

$$A(a)A(b) = \begin{pmatrix}1 & a\\ 0 & 1\end{pmatrix}\begin{pmatrix}1 & b\\ 0 & 1\end{pmatrix} = \begin{pmatrix}1 & b + a\\ 0 & 1\end{pmatrix} = A(a+b).\ \blacksquare$$

*Barem: 3p produsul, 2p finalizarea.*

### 4. $A(a)\cdot A(2a) = A(30)$

Din punctul 3: $A(a)A(2a) = A(3a)$, deci $A(3a) = A(30) \iff 3a = 30 \iff a = 10$.

**Răspuns:** $a = 10$. *Barem: 2p, 3p.*

### 5. $\det(I_2 + xA(x)) = 25$

$$I_2 + xA(x) = \begin{pmatrix}1 + x & x^2\\ 0 & 1 + x\end{pmatrix},\qquad \det = (1+x)^2.$$

$(1+x)^2 = 25 \iff 1 + x = \pm 5 \iff x \in \{-6, 4\}$.

**Răspuns:** $x \in \{-6, 4\}$. *Barem: 3p determinantul, 2p soluțiile.*

### 6. Numerele naturale $n$ cu $A(n)\cdot A(n) = A(2n^2)$

$A(n)A(n) = A(2n)$, deci $2n = 2n^2 \iff n(n - 1) = 0 \iff n \in \{0, 1\}$ (ambele naturale).

**Răspuns:** $n \in \{0, 1\}$. *Barem: 3p ecuația $2n = 2n^2$, 2p soluțiile.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 1$ |
| I.2 | $a = -2$ |
| I.3 | $x = 2$ |
| I.4 | $2$ lei |
| II.3 | $b - a = 4$ |
| II.4 | $x \in \{-2, 2\}$ |
| II.6 | $x \in \{0, 1\}$ |
| III.2 | $4$ |
| III.4 | $a = 10$ |
| III.5 | $x \in \{-6, 4\}$ |
| III.6 | $n \in \{0, 1\}$ |

## Ce merită reținut din varianta 6

- **Ecuații cu radicali:** după ridicarea la pătrat verifică întotdeauna soluțiile în ecuația inițială.
- **$x^2 - xy + y^2$** se scrie ca sumă de pătrate — util pentru a arăta că expresia e nulă doar în $(0,0)$.
- **Matricele $A(a)$ cu $A(a)A(b) = A(a+b)$** transformă ecuațiile matriceale în ecuații cu numere.

Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_pedagogic**, sesiunea iunie–iulie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia geometrică cu $b_1 = 4$, $b_2 = 8$: calculați $b_3$

Într-o progresie geometrică fiecare termen se obține din precedentul înmulțind cu rația $q$:

$$q = \frac{b_2}{b_1} = \frac84 = 2, \qquad b_3 = b_2\cdot q = 8\cdot 2 = 16.$$

(Altfel: $b_2^2 = b_1 b_3 \Rightarrow 64 = 4b_3 \Rightarrow b_3 = 16$.)

**Răspuns:** $b_3 = 16$. *Barem: 3p rația, 2p $b_3$.*

### 2. $f(x) = 7x + 2$: determinați $a$ cu $f(a) = 9$

$f(a) = 7a + 2 = 9 \iff 7a = 7 \iff a = 1$.

**Răspuns:** $a = 1$. *Barem: 2p $f(a)$, 3p rezolvarea.*

### 3. Ecuația $\log_2(2x + 3) = \log_2(3x + 1)$

**Condiții de existență:** $2x + 3 > 0$ și $3x + 1 > 0$, adică $x > -\dfrac13$.

Funcția logaritmică este injectivă, deci argumentele sunt egale:

$$2x + 3 = 3x + 1 \iff x = 2.$$

**Verificare:** $x = 2 > -\frac13$ ✔ (ambele argumente devin $7$).

**Răspuns:** $x = 2$. *Barem: 3p egalarea argumentelor, 2p soluția care convine.*

### 4. După o scumpire cu 25%, prețul crește cu 50 de lei: prețul inițial

Fie $x$ prețul inițial. Creșterea reprezintă 25% din $x$:

$$\frac{25}{100}\cdot x = 50 \iff x = 50\cdot 4 = 200 \text{ lei}.$$

**Răspuns:** 200 de lei. *Barem: 3p ecuația, 2p rezultatul.* Atenție: se cere prețul **înainte** de scumpire (prețul final ar fi 250 de lei).

### 5. $A(0,4)$, $B(8,4)$, $C(4,0)$; arătați că $BM = CM$, $M$ mijlocul lui $AB$

Mijlocul: $M\left(\dfrac{0 + 8}{2}, \dfrac{4 + 4}{2}\right) = M(4, 4)$.

$$BM = \sqrt{(8-4)^2 + (4-4)^2} = 4, \qquad CM = \sqrt{(4-4)^2 + (0-4)^2} = 4.$$

Deci $BM = CM$. *Barem: 2p coordonatele lui $M$, 3p distanțele.*

### 6. Triunghi dreptunghic în $A$, $AB = 12$, $BC = 13$: perimetrul este 30

$BC$ este ipotenuza (opusă unghiului drept). Din teorema lui Pitagora:

$$AC = \sqrt{BC^2 - AB^2} = \sqrt{169 - 144} = \sqrt{25} = 5.$$

$$P_{ABC} = AB + BC + AC = 12 + 13 + 5 = 30.$$

*Barem: 3p $AC$, 2p perimetrul.*

## Subiectul al II-lea (30 de puncte)

Pe $M = (0, +\infty)$ se definește $x \circ y = \dfrac1x + \dfrac1y + 1$.

### 1. Arătați că $1 \circ 1 = 3$

$$1 \circ 1 = \frac11 + \frac11 + 1 = 3.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

### 2. Determinați $x \in M$ cu $x \circ x = 2$

$x \circ x = \dfrac2x + 1$. Ecuația: $\dfrac2x + 1 = 2 \iff \dfrac2x = 1 \iff x = 2$, care aparține lui $M$.

**Răspuns:** $x = 2$. *Barem: 3p expresia lui $x\circ x$, 2p soluția.*

### 3. Legea este comutativă

Pentru orice $x, y \in M$:

$$y \circ x = \frac1y + \frac1x + 1 = \frac1x + \frac1y + 1 = x \circ y,$$

pentru că adunarea numerelor reale este comutativă. *Barem: 3p calculul lui $y\circ x$, 2p concluzia.*

### 4. Determinați $x \in M$ cu $x \circ \frac1x = 3$

Cum $\dfrac{1}{1/x} = x$:

$$x \circ \frac1x = \frac1x + x + 1 = \frac{x^2 + x + 1}{x}.$$

Ecuația: $\dfrac{x^2 + x + 1}{x} = 3 \iff x^2 + x + 1 = 3x \iff x^2 - 2x + 1 = 0 \iff (x-1)^2 = 0 \iff x = 1$, care convine ($1 \in M$).

**Răspuns:** $x = 1$. *Barem: 2p expresia, 3p rezolvarea.*

### 5. Numerele naturale $n$ pentru care $(n+1)\circ(n+1)$ este natural

$$(n+1)\circ(n+1) = \frac{2}{n+1} + 1.$$

Acesta este natural exact când $\dfrac{2}{n+1}$ este natural, adică $n + 1$ divide pe 2. Cum $n + 1 \ge 1$, avem $n + 1 \in \{1, 2\}$, deci $n \in \{0, 1\}$.

Verificare: $n = 0$: $2 + 1 = 3$ ✔; $n = 1$: $1 + 1 = 2$ ✔.

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p expresia, 3p valorile lui $n$.*

### 6. Determinați $x \in (1, +\infty)$ cu $(\log_2 x)\circ(\log_x 2) = \dfrac72$

Pentru $x > 1$, $\log_2 x > 0$ și $\log_x 2 > 0$, deci ambele aparțin lui $M$. Știm că $\log_x 2 = \dfrac{1}{\log_2 x}$. Notăm $t = \log_2 x > 0$:

$$(\log_2 x)\circ(\log_x 2) = \frac1t + \frac{1}{1/t} + 1 = \frac1t + t + 1.$$

Ecuația: $t + \dfrac1t + 1 = \dfrac72 \iff t + \dfrac1t = \dfrac52 \iff 2t^2 - 5t + 2 = 0$, cu $\Delta = 25 - 16 = 9$:

$$t_{1,2} = \frac{5 \pm 3}{4} \Rightarrow t = 2 \text{ sau } t = \frac12.$$

- $\log_2 x = 2 \Rightarrow x = 4$;
- $\log_2 x = \frac12 \Rightarrow x = 2^{1/2} = \sqrt2$.

Ambele sunt mai mari decât 1, deci convin.

**Răspuns:** $x \in \{\sqrt2, 4\}$. *Barem: 2p scrierea expresiei, 3p rezolvarea și soluțiile.*

## Subiectul al III-lea (30 de puncte)

Se consideră $I_2$ și $A(a) = \begin{pmatrix}a + 2 & 2\\ 2 & a - 6\end{pmatrix}$.

### 1. Arătați că $\det(A(6)) = -4$

$$A(6) = \begin{pmatrix}8 & 2\\ 2 & 0\end{pmatrix}, \qquad \det(A(6)) = 8\cdot 0 - 2\cdot 2 = -4.$$

*Barem: 3p aplicarea formulei, 2p rezultatul.*

### 2. Arătați că $A(3)\cdot A(1) = 19I_2$

$A(3) = \begin{pmatrix}5 & 2\\ 2 & -3\end{pmatrix}$, $A(1) = \begin{pmatrix}3 & 2\\ 2 & -5\end{pmatrix}$.

$$A(3)\cdot A(1) = \begin{pmatrix}15 + 4 & 10 - 10\\ 6 - 6 & 4 + 15\end{pmatrix} = \begin{pmatrix}19 & 0\\ 0 & 19\end{pmatrix} = 19I_2.$$

*Barem: 3p produsul, 2p scrierea ca $19I_2$.*

### 3. Demonstrați că $A(a) + A(-a) = 2A(0)$

$$A(a) + A(-a) = \begin{pmatrix}a + 2 & 2\\ 2 & a - 6\end{pmatrix} + \begin{pmatrix}-a + 2 & 2\\ 2 & -a - 6\end{pmatrix} = \begin{pmatrix}4 & 4\\ 4 & -12\end{pmatrix} = 2\begin{pmatrix}2 & 2\\ 2 & -6\end{pmatrix} = 2A(0).$$

*Barem: 3p suma, 2p identificarea cu $2A(0)$.*

### 4. Numărul real $a$ cu $\det(A(a)) = -20$

$$\det(A(a)) = (a+2)(a-6) - 4 = a^2 - 4a - 12 - 4 = a^2 - 4a - 16.$$

Ecuația: $a^2 - 4a - 16 = -20 \iff a^2 - 4a + 4 = 0 \iff (a - 2)^2 = 0 \iff a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p determinantul, 2p soluția.*

### 5. Numerele reale $a$ cu $A(a^2) - A(a) = 2I_2$

$$A(a^2) - A(a) = \begin{pmatrix}a^2 + 2 - a - 2 & 0\\ 0 & a^2 - 6 - a + 6\end{pmatrix} = \begin{pmatrix}a^2 - a & 0\\ 0 & a^2 - a\end{pmatrix}.$$

Egalând cu $2I_2$: $a^2 - a = 2 \iff a^2 - a - 2 = 0 \iff (a - 2)(a + 1) = 0 \iff a \in \{-1, 2\}$.

**Răspuns:** $a = -1$ sau $a = 2$. *Barem: 2p diferența matricelor, 3p soluțiile.*

### 6. Numerele reale $x, y$ cu $A(-1)\cdot\begin{pmatrix}x\\ y\end{pmatrix} = \begin{pmatrix}-1\\ 9\end{pmatrix}$

$A(-1) = \begin{pmatrix}1 & 2\\ 2 & -7\end{pmatrix}$, deci

$$A(-1)\begin{pmatrix}x\\ y\end{pmatrix} = \begin{pmatrix}x + 2y\\ 2x - 7y\end{pmatrix}.$$

Obținem sistemul $\begin{cases}x + 2y = -1\\ 2x - 7y = 9\end{cases}$. Din prima, $x = -1 - 2y$; înlocuim în a doua: $-2 - 4y - 7y = 9 \iff -11y = 11 \iff y = -1$, apoi $x = -1 + 2 = 1$.

Verificare: $1 - 2 = -1$ ✔, $2 + 7 = 9$ ✔.

**Răspuns:** $x = 1$, $y = -1$. *Barem: 2p produsul, 3p rezolvarea sistemului.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_3 = 16$ |
| I.2 | $a = 1$ |
| I.3 | $x = 2$ |
| I.4 | 200 de lei |
| II.2 | $x = 2$ |
| II.4 | $x = 1$ |
| II.5 | $n \in \{0, 1\}$ |
| II.6 | $x \in \{\sqrt2, 4\}$ |
| III.4 | $a = 2$ |
| III.5 | $a \in \{-1, 2\}$ |
| III.6 | $x = 1$, $y = -1$ |

## Ce merită reținut din varianta 10

- **$\log_x 2 = \dfrac{1}{\log_2 x}$**: o substituție $t = \log_2 x$ transformă ecuația într-una de gradul II.
- **Ecuații logaritmice**: scrie condițiile de existență și verifică soluțiile.
- **Procente**: „crește cu 50 de lei” este creșterea, nu prețul final.

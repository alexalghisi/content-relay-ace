Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_pedagogic**, simularea națională. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_1 = 6$, $a_2 = 8$: calculați $a_3$

Rația unei progresii aritmetice este diferența dintre doi termeni consecutivi:

$$r = a_2 - a_1 = 8 - 6 = 2.$$

Atunci $a_3 = a_2 + r = 8 + 2 = 10$ (sau, cu formula termenului general, $a_3 = a_1 + 2r = 6 + 4 = 10$).

**Răspuns:** $a_3 = 10$. *Barem: 2p rația, 3p $a_3$.*

### 2. $f(x) = 4x - 9$: determinați $m$ pentru care $A(m, 3)$ aparține graficului

Un punct $A(m, 3)$ se află pe graficul lui $f$ exact când $f(m) = 3$:

$$4m - 9 = 3 \iff 4m = 12 \iff m = 3.$$

**Răspuns:** $m = 3$. *Barem: 3p condiția $f(m) = 3$, 2p valoarea lui $m$.*

### 3. Ecuația exponențială $4^x = 2^{3x-2}$

Scriem ambii membri în aceeași bază: $4^x = (2^2)^x = 2^{2x}$. Ecuația devine

$$2^{2x} = 2^{3x-2}.$$

Funcția exponențială $t \mapsto 2^t$ este injectivă, deci exponenții sunt egali: $2x = 3x - 2 \iff x = 2$.

**Verificare:** $4^2 = 16$ și $2^{3\cdot 2 - 2} = 2^4 = 16$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. 40% dintre concurenți sunt fete, iar fetele sunt 80: numărul total de concurenți

Notăm cu $x$ numărul total de concurenți. 40% din $x$ înseamnă $\dfrac{40}{100}\cdot x$:

$$\frac{40}{100}\cdot x = 80 \iff x = \frac{80\cdot 100}{40} = 200.$$

**Răspuns:** 200 de concurenți. *Barem: 3p ecuația, 2p rezultatul.*

### 5. $A(3,1)$, $B(1,3)$, $C(a,a)$: $AB$ și $OC$ au același mijloc

Mijlocul lui $AB$: $M\left(\dfrac{3+1}{2}, \dfrac{1+3}{2}\right) = M(2, 2)$.

Mijlocul lui $OC$, cu $O(0,0)$: $\left(\dfrac{0+a}{2}, \dfrac{0+a}{2}\right)$. Cerem să coincidă cu $M$:

$$\frac{a}{2} = 2 \iff a = 4.$$

(Ambele coordonate dau aceeași condiție, deci valoarea convine.)

**Răspuns:** $a = 4$. *Barem: 2p mijlocul lui $AB$, 3p condiția pentru $OC$ și $a = 4$.*

### 6. Triunghi dreptunghic în $A$, $AB = 8\sqrt3$, $BC = 16$: arătați că $AMC$ este echilateral ($M$ mijlocul lui $BC$)

Cu teorema lui Pitagora în triunghiul $ABC$ (ipotenuza este $BC$):

$$AC = \sqrt{BC^2 - AB^2} = \sqrt{256 - 192} = \sqrt{64} = 8.$$

$M$ este mijlocul ipotenuzei, deci $CM = \dfrac{BC}{2} = 8$. Într-un triunghi dreptunghic, **mediana corespunzătoare ipotenuzei este jumătate din ipotenuză**, deci $AM = \dfrac{BC}{2} = 8$.

Așadar $AM = MC = CA = 8$, iar triunghiul $AMC$ este echilateral.

*Barem: 2p $AC = 8$, 3p $CM = AM = 8$ și concluzia.*

## Subiectul al II-lea (30 de puncte)

Legea de compoziție: $x \circ y = 3(xy - 2x - 2y) + 14$.

**Observație utilă pentru toate punctele:** $xy - 2x - 2y = (x-2)(y-2) - 4$, deci

$$x \circ y = 3(x-2)(y-2) - 12 + 14 = 3(x-2)(y-2) + 2.$$

### 1. Arătați că $3 \circ 3 = 1 \circ 1$

$$3 \circ 3 = 3(9 - 6 - 6) + 14 = 3\cdot(-3) + 14 = 5,$$
$$1 \circ 1 = 3(1 - 2 - 2) + 14 = 3\cdot(-3) + 14 = 5.$$

Deci $3 \circ 3 = 1 \circ 1 = 5$. *Barem: 2p $3\circ 3$, 3p $1 \circ 1$ și concluzia.*

### 2. Demonstrați că $x \circ 2 = 2$ pentru orice $x$ real

$$x \circ 2 = 3(2x - 2x - 4) + 14 = 3\cdot(-4) + 14 = -12 + 14 = 2.$$

Termenii în $x$ se reduc, deci rezultatul nu depinde de $x$. (Cu forma factorizată: $x \circ 2 = 3(x-2)\cdot 0 + 2 = 2$.) *Barem: 3p înlocuirea, 2p finalizarea.*

### 3. Arătați că $e = \dfrac73$ este element neutru

Trebuie verificat că $x \circ \dfrac73 = x$ **și** $\dfrac73 \circ x = x$ pentru orice $x$ real.

$$x \circ \frac73 = 3\left(\frac{7x}{3} - 2x - \frac{14}{3}\right) + 14 = 7x - 6x - 14 + 14 = x.$$

Legea este comutativă (expresia $xy - 2x - 2y$ e simetrică în $x$ și $y$), deci și $\dfrac73 \circ x = 7x - 14 - 6x + 14 = x$.

Prin urmare $e = \dfrac73$ este elementul neutru. *Barem: 2p prima egalitate, 3p a doua și concluzia.*

### 4. Determinați $x$ real cu $x \circ x = 5$

$$x \circ x = 3(x^2 - 4x) + 14 = 3x^2 - 12x + 14.$$

$$3x^2 - 12x + 14 = 5 \iff 3x^2 - 12x + 9 = 0 \iff x^2 - 4x + 3 = 0 \iff (x-1)(x-3) = 0.$$

**Răspuns:** $x = 1$ sau $x = 3$. (Se potrivește cu punctul 1: $1\circ 1 = 3\circ 3 = 5$.) *Barem: 2p expresia lui $x \circ x$, 3p soluțiile.*

### 5. Arătați că $x \circ y \ge 2$ pentru $x \ge 2$, $y \ge 2$

Din $x \ge 2$ și $y \ge 2$ avem $x - 2 \ge 0$ și $y - 2 \ge 0$, deci produsul $(x-2)(y-2) \ge 0$.

Folosind forma factorizată: $x \circ y = 3(x-2)(y-2) + 2 \ge 0 + 2 = 2$.

*Barem: 2p $(x-2)(y-2) \ge 0$, 3p scrierea $x \circ y = 3(x-2)(y-2) + 2$ și concluzia.*

### 6. Dacă $m, n \in \mathbb N^*$ și $m \circ n = 8$, atunci $m + n = 7$

$$m \circ n = 8 \iff 3(m-2)(n-2) + 2 = 8 \iff (m-2)(n-2) = 2.$$

Cum $m, n$ sunt naturale nenule, $m - 2$ și $n - 2$ sunt numere întregi $\ge -1$ al căror produs este 2. Descompunerile lui 2 în produs de doi întregi sunt $1\cdot 2$, $2 \cdot 1$, $(-1)(-2)$, $(-2)(-1)$; ultimele două cer un factor $-2$, adică $m = 0$ sau $n = 0$ — excluse. Rămân:

- $m - 2 = 1$, $n - 2 = 2 \Rightarrow m = 3$, $n = 4$;
- $m - 2 = 2$, $n - 2 = 1 \Rightarrow m = 4$, $n = 3$.

În ambele cazuri $m + n = 7$. *Barem: 3p relația $(m-2)(n-2) = 2$, 2p găsirea perechilor și concluzia.*

## Subiectul al III-lea (30 de puncte)

$I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A = \begin{pmatrix}3 & 6\\ -1 & -2\end{pmatrix}$, $X(a) = I_2 + aA$.

### 1. Arătați că $\det A = 0$

$$\det A = \begin{vmatrix}3 & 6\\ -1 & -2\end{vmatrix} = 3\cdot(-2) - 6\cdot(-1) = -6 + 6 = 0.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

### 2. Arătați că $A \cdot A = A$

$$A\cdot A = \begin{pmatrix}3\cdot 3 + 6\cdot(-1) & 3\cdot 6 + 6\cdot(-2)\\ -1\cdot 3 + (-2)(-1) & -1\cdot 6 + (-2)(-2)\end{pmatrix} = \begin{pmatrix}3 & 6\\ -1 & -2\end{pmatrix} = A.$$

(Linie din prima matrice × coloană din a doua.) *Barem: 3p produsul, 2p finalizarea.*

### 3. Determinați $a$ cu $\det(X(a)) = 2a^2$

$$X(a) = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix} + \begin{pmatrix}3a & 6a\\ -a & -2a\end{pmatrix} = \begin{pmatrix}1 + 3a & 6a\\ -a & 1 - 2a\end{pmatrix}.$$

$$\det(X(a)) = (1+3a)(1-2a) - 6a\cdot(-a) = 1 + a - 6a^2 + 6a^2 = 1 + a.$$

Ecuația: $1 + a = 2a^2 \iff 2a^2 - a - 1 = 0$, cu $\Delta = 1 + 8 = 9$, deci $a = \dfrac{1 \pm 3}{4}$.

**Răspuns:** $a = -\dfrac12$ sau $a = 1$. *Barem: 3p determinantul $1 + a$, 2p soluțiile.*

### 4. Demonstrați că $A \cdot X(a) = (a+1)A$

Folosim distributivitatea înmulțirii matricelor, $A\cdot I_2 = A$ și punctul 2 ($A\cdot A = A$):

$$A\cdot X(a) = A(I_2 + aA) = A\cdot I_2 + a\,A\cdot A = A + aA = (a+1)A.$$

*Barem: 3p dezvoltarea produsului, 2p concluzia.*

### 5. Demonstrați că $X(m)\cdot X(n) = X(m + n + mn)$

$$X(m)X(n) = (I_2 + mA)(I_2 + nA) = I_2 + nA + mA + mn\,A\cdot A.$$

Cum $A \cdot A = A$:

$$X(m)X(n) = I_2 + (m + n + mn)A = X(m + n + mn).$$

*Barem: 3p dezvoltarea, 2p folosirea lui $A^2 = A$ și concluzia.*

### 6. Dacă $a \ne b$ și $X(a)X(a) = X(b)X(b)$, atunci $a + b + 2 = 0$

Din punctul 5 cu $m = n = a$: $X(a)X(a) = X(2a + a^2)$; analog $X(b)X(b) = X(2b + b^2)$. Deci

$$X(2a + a^2) = X(2b + b^2).$$

Funcția $t \mapsto X(t)$ este injectivă: $X(u) = X(v) \Rightarrow (u - v)A = O_2$, iar cum $A \ne O_2$, rezultă $u = v$. Așadar

$$2a + a^2 = 2b + b^2 \iff a^2 - b^2 + 2(a - b) = 0 \iff (a - b)(a + b + 2) = 0.$$

Cum $a \ne b$, avem $a - b \ne 0$, deci $a + b + 2 = 0$.

*Barem: 2p egalitatea $2a + a^2 = 2b + b^2$, 3p factorizarea și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 10$ |
| I.2 | $m = 3$ |
| I.3 | $x = 2$ |
| I.4 | 200 de concurenți |
| I.5 | $a = 4$ |
| I.6 | $AM = MC = CA = 8$ |
| II.1 | $3\circ 3 = 1 \circ 1 = 5$ |
| II.4 | $x \in \{1, 3\}$ |
| II.6 | $(m,n) \in \{(3,4), (4,3)\}$, $m + n = 7$ |
| III.3 | $a \in \left\{-\tfrac12, 1\right\}$ |

## Ce merită reținut din această simulare

- **Legea $x \circ y = 3(xy - 2x - 2y) + 14$** se scrie $3(x-2)(y-2) + 2$: forma factorizată rezolvă imediat punctele 2, 5 și 6.
- **Matrice idempotente** ($A^2 = A$): produsele de tipul $(I_2 + mA)(I_2 + nA)$ se calculează fără înmulțiri explicite.
- **Mediana pe ipotenuză** este jumătate din ipotenuză — cheia oricărei probleme cu mijlocul ipotenuzei.

Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_pedagogic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\log_2 16 - \log_2 8 + \log_2 1 = 1$

Scriem fiecare număr ca putere a lui 2: $16 = 2^4$, $8 = 2^3$, $1 = 2^0$. Deci $\log_2 16 = 4$, $\log_2 8 = 3$, $\log_2 1 = 0$.

$$\log_2 16 - \log_2 8 + \log_2 1 = 4 - 3 + 0 = 1.$$

Variantă: $\log_2 16 - \log_2 8 = \log_2\frac{16}{8} = \log_2 2 = 1$. *Barem: 3p valorile logaritmilor, 2p calculul.*

### 2. $f(x) = 5x + 7$: $m$ pentru care $A(m, 2022)$ aparține graficului

Un punct $(m, n)$ aparține graficului lui $f$ dacă $f(m) = n$. Deci

$$5m + 7 = 2022 \iff 5m = 2015 \iff m = 403.$$

**Răspuns:** $m = 403$. *Barem: 3p condiția $f(m) = 2022$, 2p rezolvarea.*

### 3. Ecuația $\sqrt{5x - 2} = \sqrt3$

**Condiție de existență:** $5x - 2 \ge 0$, adică $x \ge \dfrac25$.

Ridicăm la pătrat (ambii membri sunt nenegativi): $5x - 2 = 3 \iff 5x = 5 \iff x = 1$.

**Verificare:** $1 \ge \frac25$ și $\sqrt{5 - 2} = \sqrt3$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ecuația $5x - 2 = 3$, 2p soluția care convine.*

### 4. După două scumpiri succesive cu 20% prețul este 180 lei: prețul inițial

Notăm cu $x$ prețul inițial. O scumpire cu 20% înmulțește prețul cu $1 + \dfrac{20}{100} = \dfrac65$.

- după prima scumpire: $\dfrac{6x}{5}$;
- după a doua (20% din **noul** preț): $\dfrac65\cdot\dfrac{6x}{5} = \dfrac{36x}{25}$.

$$\frac{36x}{25} = 180 \iff x = \frac{180\cdot 25}{36} = 125 \text{ lei}.$$

**Verificare:** $125 \to 150 \to 180$ ✔. Greșeală frecventă: a considera o scumpire totală de 40% ($1{,}4x = 180$ nu dă un număr întreg și e greșit, deoarece a doua scumpire se aplică prețului deja mărit).

**Răspuns:** 125 lei. *Barem: 2p prețul după prima scumpire, 3p ecuația și rezultatul.*

### 5. Ecuația dreptei $AB$, $A(6, 7)$, $B(2, 5)$

Folosim ecuația dreptei prin două puncte:

$$\frac{x - 6}{2 - 6} = \frac{y - 7}{5 - 7} \iff \frac{x - 6}{-4} = \frac{y - 7}{-2} \iff x - 6 = 2(y - 7) \iff x - 2y + 8 = 0.$$

**Verificare:** $A$: $6 - 14 + 8 = 0$ ✔; $B$: $2 - 10 + 8 = 0$ ✔. Echivalent, $y = \dfrac{x}{2} + 4$ (panta $\frac{5-7}{2-6} = \frac12$).

**Răspuns:** $AB: x - 2y + 8 = 0$. *Barem: 3p scrierea ecuației, 2p forma finală.*

### 6. Arătați că $(\sin 45^\circ - \sin 30^\circ)(\sin 45^\circ + \sin 30^\circ) = \dfrac14$

Produsul are forma $(a - b)(a + b) = a^2 - b^2$, cu $\sin 45^\circ = \dfrac{\sqrt2}{2}$ și $\sin 30^\circ = \dfrac12$:

$$\left(\frac{\sqrt2}{2}\right)^2 - \left(\frac12\right)^2 = \frac24 - \frac14 = \frac14.$$

*Barem: 3p valorile funcțiilor trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

Legea de compoziție: $x \circ y = xy + 5(x + y) + 7$, pe $\mathbb R$.

### 1. Arătați că $(-2) \circ 2 = 3$

$$(-2) \circ 2 = (-2)\cdot 2 + 5(-2 + 2) + 7 = -4 + 0 + 7 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. Legea este comutativă

Pentru orice $x, y$ reali, folosind comutativitatea înmulțirii și adunării numerelor reale:

$$x \circ y = xy + 5(x + y) + 7 = yx + 5(y + x) + 7 = y \circ x.$$

Deci legea „$\circ$” este comutativă. *Barem: 3p calculul, 2p concluzia.*

### 3. Demonstrați că $x \circ y = (x + 5)(y + 5) - 18$

Scriem $7 = 25 - 18$ și grupăm:

$$x \circ y = xy + 5x + 5y + 25 - 18 = x(y + 5) + 5(y + 5) - 18 = (x + 5)(y + 5) - 18.$$

*Barem: 3p scrierea cu $+25 - 18$, 2p factorizarea.*

### 4. Numerele reale $x$ cu $x \circ x = 7$

$x \circ x = x^2 + 10x + 7$, deci

$$x^2 + 10x + 7 = 7 \iff x^2 + 10x = 0 \iff x(x + 10) = 0 \iff x \in \{-10, 0\}.$$

Verificare cu forma de la 3: $(x + 5)^2 - 18 = 7 \iff (x+5)^2 = 25 \iff x + 5 = \pm 5$ ✔.

**Răspuns:** $x \in \{-10, 0\}$. *Barem: 2p ecuația, 3p soluțiile.*

### 5. Demonstrați că $((-x) \circ (-y)) + ((-x) \circ y) + (x \circ (-y)) + (x \circ y) = 28$

Calculăm fiecare termen:

- $(-x) \circ (-y) = xy - 5x - 5y + 7$;
- $(-x) \circ y = -xy - 5x + 5y + 7$;
- $x \circ (-y) = -xy + 5x - 5y + 7$;
- $x \circ y = xy + 5x + 5y + 7$.

Adunând: termenii în $xy$ dau $xy - xy - xy + xy = 0$, cei în $x$ dau $-5x - 5x + 5x + 5x = 0$, cei în $y$ dau $-5y + 5y - 5y + 5y = 0$, iar constantele $4\cdot 7 = 28$. Deci suma este $28$ pentru orice $x, y$ reali.

*Barem: 2p un termen calculat corect, 3p suma.*

### 6. Perechile $(a, b)$ de numere întregi cu $a \circ b = -19$

Din 3: $(a + 5)(b + 5) - 18 = -19 \iff (a + 5)(b + 5) = -1$.

$a + 5$ și $b + 5$ sunt întregi cu produsul $-1$, deci una este $1$ și cealaltă $-1$:

- $a + 5 = 1$, $b + 5 = -1$: $(a, b) = (-4, -6)$;
- $a + 5 = -1$, $b + 5 = 1$: $(a, b) = (-6, -4)$.

**Răspuns:** $(a, b) \in \{(-6, -4), (-4, -6)\}$. *Barem: 3p ecuația $(a+5)(b+5) = -1$, 2p perechile.*

## Subiectul al III-lea (30 de puncte)

Matricele: $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A = \begin{pmatrix}5 & 5\\ -4 & -4\end{pmatrix}$, $X(a) = I_2 + aA$.

### 1. Arătați că $\det A = 0$

$$\det A = \begin{vmatrix}5 & 5\\ -4 & -4\end{vmatrix} = 5\cdot(-4) - 5\cdot(-4) = -20 + 20 = 0.$$

*Barem: 3p formula, 2p calculul.*

### 2. Arătați că $A \cdot A = A$

$$A\cdot A = \begin{pmatrix}5\cdot5 + 5\cdot(-4) & 5\cdot5 + 5\cdot(-4)\\ -4\cdot5 + (-4)(-4) & -4\cdot5 + (-4)(-4)\end{pmatrix} = \begin{pmatrix}5 & 5\\ -4 & -4\end{pmatrix} = A.$$

*Barem: 3p calculul produsului, 2p concluzia.*

### 3. Arătați că $X(-1) + X(1) = 2I_2$

$X(-1) = I_2 - A$ și $X(1) = I_2 + A$, deci $X(-1) + X(1) = I_2 - A + I_2 + A = 2I_2$.

*Barem: 2p $X(-1)$, 3p $X(1)$ și suma.*

### 4. Demonstrați că $X(a)\cdot X(-1) = X(-1)$, pentru orice $a$ real

Desfacem produsul (atenție la ordinea factorilor; aici $I_2$ comută cu orice matrice):

$$X(a)\cdot X(-1) = (I_2 + aA)(I_2 - A) = I_2 - A + aA - aA^2.$$

Din 2, $A^2 = A$, deci $aA - aA^2 = aA - aA = O_2$ și rămâne $I_2 - A = X(-1)$.

*Barem: 3p desfacerea produsului, 2p folosirea lui $A^2 = A$ și concluzia.*

### 5. Valorile lui $a$ pentru care $X(a)$ nu este inversabilă

$$X(a) = \begin{pmatrix}1 + 5a & 5a\\ -4a & 1 - 4a\end{pmatrix}, \quad \det(X(a)) = (1 + 5a)(1 - 4a) - 5a\cdot(-4a) = 1 + a - 20a^2 + 20a^2 = 1 + a.$$

O matrice pătratică nu este inversabilă exact când determinantul ei este 0: $1 + a = 0 \Rightarrow a = -1$.

**Răspuns:** $a = -1$. *Barem: 3p determinantul, 2p valoarea lui $a$.*

### 6. Valorile lui $a$ pentru care $\det\left(X(a^2)\right) \le 10$

Din 5, $\det(X(t)) = 1 + t$, deci $\det(X(a^2)) = a^2 + 1$.

$$a^2 + 1 \le 10 \iff a^2 \le 9 \iff |a| \le 3 \iff a \in [-3, 3].$$

**Răspuns:** $a \in [-3, 3]$. *Barem: 3p $\det(X(a^2)) = a^2 + 1$, 2p intervalul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 403$ |
| I.3 | $x = 1$ |
| I.4 | 125 lei |
| I.5 | $x - 2y + 8 = 0$ |
| II.4 | $x \in \{-10, 0\}$ |
| II.6 | $(-6, -4)$ și $(-4, -6)$ |
| III.5 | $a = -1$ |
| III.6 | $a \in [-3, 3]$ |

## Ce merită reținut din varianta 7

- **Scumpiri succesive**: fiecare procent se aplică prețului curent — se înmulțesc factorii ($1{,}2 \cdot 1{,}2 = 1{,}44$), nu se adună procentele.
- **Legi de forma $xy + k(x+y) + k^2 - c$**: scrie-le ca $(x + k)(y + k) - c$; ecuațiile în întregi devin probleme cu divizori.
- **Matrice idempotente ($A^2 = A$)**: produsele de forma $(I_2 + aA)(I_2 + bA)$ se simplifică rapid, iar $\det(I_2 + aA)$ e liniar în $a$.

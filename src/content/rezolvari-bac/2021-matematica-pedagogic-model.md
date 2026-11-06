Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_pedagogic**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt3\cdot\left(\dfrac{1}{\sqrt3-1} + \dfrac{1}{\sqrt3+1}\right) = 3$

Aducem fracțiile la numitorul comun $(\sqrt3-1)(\sqrt3+1) = 3 - 1 = 2$:

$$\frac{1}{\sqrt3-1} + \frac{1}{\sqrt3+1} = \frac{(\sqrt3+1) + (\sqrt3-1)}{2} = \frac{2\sqrt3}{2} = \sqrt3.$$

Atunci $\sqrt3\cdot\sqrt3 = 3$.

**De ce funcționează:** $(a-b)(a+b) = a^2 - b^2$ elimină radicalii de la numitor. *Barem: 3p suma fracțiilor, 2p finalizarea.*

### 2. $f(x) = x - 2$: numerele naturale $n$ cu $f(n) < 0$

$f(n) = n - 2 < 0 \iff n < 2$. Numerele naturale mai mici decât 2 sunt $0$ și $1$ (nu uita că $0 \in \mathbb N$).

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p inecuația, 3p soluțiile naturale.*

### 3. Ecuația $\log_3(x^2 - 1) = 1$

**Condiție de existență:** $x^2 - 1 > 0$.

Din definiția logaritmului: $x^2 - 1 = 3^1 = 3 \iff x^2 = 4 \iff x = \pm 2$.

**Verificare:** pentru $x = \pm2$, $x^2 - 1 = 3 > 0$, deci ambele convin.

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 3p ecuația $x^2 - 4 = 0$, 2p soluțiile care convin.*

### 4. După o scumpire cu $20\%$, prețul este $660$ de lei. Prețul inițial?

Notăm cu $x$ prețul inițial. Scumpirea adaugă $\dfrac{20}{100}x$:

$$x + \frac{20}{100}x = 660 \iff \frac{6x}{5} = 660 \iff x = 550.$$

**Verificare:** $20\%$ din $550$ este $110$, iar $550 + 110 = 660$ ✔.

**Răspuns:** $550$ de lei. *Barem: 3p ecuația, 2p rezultatul.*

### 5. Dreapta prin $M(2, 0)$ paralelă cu $d: y = 3x$

Dreptele paralele au aceeași pantă, deci panta căutată este $m = 3$. Ecuația dreptei prin $M(x_0, y_0)$ cu panta $m$ este $y - y_0 = m(x - x_0)$:

$$y - 0 = 3(x - 2) \iff y = 3x - 6.$$

**Răspuns:** $y = 3x - 6$. *Barem: 2p panta, 3p ecuația dreptei.*

### 6. Aria rombului $ABCD$ cu $AC = 2\sqrt5$, $BD = 4$

Diagonalele rombului sunt perpendiculare, iar aria este semiprodusul lor:

$$\mathcal{A}_{ABCD} = \frac{AC\cdot BD}{2} = \frac{2\sqrt5\cdot 4}{2} = 4\sqrt5.$$

**Răspuns:** $4\sqrt5$. *Barem: 2p formula, 3p calculul.*

## Subiectul al II-lea (30 de puncte)

Legea de compoziție pe $\mathbb R$: $x * y = 3xy + 7(x + y) + 14$.

### 1. Arătați că $(-3) * 3 = -13$

$$(-3) * 3 = 3\cdot(-3)\cdot 3 + 7\cdot(-3 + 3) + 14 = -27 + 0 + 14 = -13.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. Legea este comutativă

Pentru orice $x, y \in \mathbb R$, folosind comutativitatea înmulțirii și adunării numerelor reale:

$$x * y = 3xy + 7(x + y) + 14 = 3yx + 7(y + x) + 14 = y * x.$$

Deci legea „$*$” este comutativă. *Barem: 3p calculul, 2p concluzia.*

### 3. Arătați că $x * y = 3\left(x + \dfrac73\right)\left(y + \dfrac73\right) - \dfrac73$

Dezvoltăm membrul drept:

$$3\left(x + \frac73\right)\left(y + \frac73\right) - \frac73 = 3\left(xy + \frac73x + \frac73y + \frac{49}{9}\right) - \frac73 = 3xy + 7x + 7y + \frac{49}{3} - \frac73.$$

Cum $\dfrac{49}{3} - \dfrac73 = \dfrac{42}{3} = 14$, obținem $3xy + 7(x+y) + 14 = x * y$, pentru orice $x, y$ reale. *Barem: 3p scrierea lui 14 ca $\frac{49}{3} - \frac73$, 2p gruparea în factori.*

### 4. Numerele reale $x$ cu $x * x = x$

Din punctul 3: $x * x = 3\left(x + \dfrac73\right)^2 - \dfrac73$. Ecuația devine

$$3\left(x + \frac73\right)^2 - \frac73 = x \iff 3\left(x + \frac73\right)^2 - \left(x + \frac73\right) = 0 \iff \left(x + \frac73\right)\left(3x + 7 - 1\right) = 0,$$

adică $\left(x + \dfrac73\right)(3x + 6) = 0$.

**Răspuns:** $x = -\dfrac73$ sau $x = -2$. (Direct: $3x^2 + 14x + 14 = x \iff 3x^2 + 13x + 14 = 0$, cu aceleași rădăcini.) *Barem: 2p expresia lui $x*x$, 3p soluțiile.*

### 5. Arătați că $x * \dfrac1x \ge 31$ pentru orice $x > 0$

$$x * \frac1x = 3\cdot x\cdot\frac1x + 7\left(x + \frac1x\right) + 14 = 17 + 7\left(x + \frac1x\right).$$

Inegalitatea devine $17 + 7\left(x + \dfrac1x\right) \ge 31 \iff x + \dfrac1x \ge 2$.

Pentru $x > 0$: $x + \dfrac1x - 2 = \dfrac{x^2 - 2x + 1}{x} = \dfrac{(x-1)^2}{x} \ge 0$, deoarece numărătorul este un pătrat, iar numitorul este pozitiv. Deci inegalitatea este adevărată (cu egalitate pentru $x = 1$). *Barem: 3p reducerea la $x + \frac1x \ge 2$, 2p justificarea.*

### 6. Numărul real $x$ cu $3^x * 3^x = 83$

Notăm $t = 3^x > 0$. Din punctul 3:

$$3\left(t + \frac73\right)^2 - \frac73 = 83 \iff \left(t + \frac73\right)^2 = \frac{256}{9} \iff t + \frac73 = \pm\frac{16}{3}.$$

Cum $t > 0$, avem $t + \dfrac73 > 0$, deci $t + \dfrac73 = \dfrac{16}{3} \Rightarrow t = 3$. Varianta $t + \frac73 = -\frac{16}{3}$ dă $t = -\frac{23}{3} < 0$ — respinsă.

$3^x = 3 \Rightarrow x = 1$.

**Răspuns:** $x = 1$. *Barem: 2p ecuația în $3^x$, 3p rezolvarea.*

## Subiectul al III-lea (30 de puncte)

Matricea $A(a) = \begin{pmatrix}3 & a\\ a & 3\end{pmatrix}$, $a \in \mathbb R$.

### 1. Arătați că $\det(A(1)) = 8$

$$A(1) = \begin{pmatrix}3 & 1\\ 1 & 3\end{pmatrix},\qquad \det(A(1)) = 3\cdot3 - 1\cdot1 = 9 - 1 = 8.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

### 2. Arătați că $A(0)\cdot A(2020) = 3A(2020)$

$A(0) = \begin{pmatrix}3 & 0\\ 0 & 3\end{pmatrix} = 3I_2$. Cum $I_2$ este elementul neutru la înmulțirea matricelor:

$$A(0)\cdot A(2020) = 3I_2\cdot A(2020) = 3A(2020).$$

*Barem: 2p $A(0) = 3I_2$, 3p concluzia.*

### 3. Numerele reale $a$ cu $\det(A(a)) = -16$

$\det(A(a)) = 9 - a^2$. Ecuația: $9 - a^2 = -16 \iff a^2 = 25 \iff a = \pm5$.

**Răspuns:** $a \in \{-5, 5\}$. *Barem: 2p determinantul, 3p soluțiile.*

### 4. Arătați că $A(1) + A(2) + \dots + A(10) = 10A\left(\dfrac{11}{2}\right)$

Adunăm element cu element. Pe diagonală avem de 10 ori $3$, adică $30$; în afara diagonalei avem $1 + 2 + \dots + 10 = \dfrac{10\cdot 11}{2} = 55$:

$$A(1) + \dots + A(10) = \begin{pmatrix}30 & 55\\ 55 & 30\end{pmatrix} = 10\begin{pmatrix}3 & \frac{11}{2}\\ \frac{11}{2} & 3\end{pmatrix} = 10A\left(\frac{11}{2}\right).$$

*Barem: 2p suma matricelor, 3p scrierea finală.*

### 5. Numărul natural $m$ pentru care $B = A(m) + A(m^2)$ nu este inversabilă

$$B = \begin{pmatrix}6 & m + m^2\\ m + m^2 & 6\end{pmatrix},\qquad \det B = 36 - (m + m^2)^2.$$

$B$ nu este inversabilă $\iff \det B = 0 \iff (m + m^2)^2 = 36 \iff m + m^2 = \pm 6$.

Pentru $m \in \mathbb N$, $m + m^2 \ge 0$, deci $m^2 + m - 6 = 0 \iff (m - 2)(m + 3) = 0$; singura valoare naturală este $m = 2$.

**Răspuns:** $m = 2$. *Barem: 2p determinantul lui $B$, 3p rezolvarea.*

### 6. Perechile de întregi $(a, b)$ pentru care suma elementelor lui $A(a)\cdot A(b)$ este $2$

$$A(a)\cdot A(b) = \begin{pmatrix}3 & a\\ a & 3\end{pmatrix}\begin{pmatrix}3 & b\\ b & 3\end{pmatrix} = \begin{pmatrix}9 + ab & 3b + 3a\\ 3a + 3b & ab + 9\end{pmatrix}.$$

Suma elementelor: $2(9 + ab) + 6(a + b) = 2 \iff ab + 3a + 3b + 9 = 1 \iff (a + 3)(b + 3) = 1$.

Produsul a doi întregi este $1$ doar dacă ambii sunt $1$ sau ambii sunt $-1$:

- $a + 3 = b + 3 = 1 \Rightarrow (a, b) = (-2, -2)$;
- $a + 3 = b + 3 = -1 \Rightarrow (a, b) = (-4, -4)$.

**Răspuns:** $(a, b) \in \{(-2, -2),\ (-4, -4)\}$. *Barem: 2p produsul și relația, 3p perechile.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $n \in \{0, 1\}$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | $550$ de lei |
| I.5 | $y = 3x - 6$ |
| I.6 | $4\sqrt5$ |
| II.4 | $x \in \{-\tfrac73, -2\}$ |
| II.6 | $x = 1$ |
| III.3 | $a \in \{-5, 5\}$ |
| III.5 | $m = 2$ |
| III.6 | $(-2,-2)$ și $(-4,-4)$ |

## Ce merită reținut din acest model

- **Legi de forma** $kxy + p(x+y) + q$: scrierea $k(x + c)(y + c) - c$ face ecuațiile $x * x = x$ și $t * t = $ const. foarte simple.
- **Ecuații exponențiale**: notează $t = 3^x$ și folosește $t > 0$ ca să elimini soluțiile false.
- **Matrice cu parametru**: $\det = 0$ înseamnă neinversabilă; ecuațiile în întregi se rezolvă prin factorizare de tipul $(a+3)(b+3) = 1$.

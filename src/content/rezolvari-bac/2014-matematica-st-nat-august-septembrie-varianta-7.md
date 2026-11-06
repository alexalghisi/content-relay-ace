Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x$ pentru care $2$, $x + 2$, $10$ sunt termeni consecutivi ai unei progresii aritmetice

Termenul din mijloc este media aritmetică a vecinilor:

$$x + 2 = \frac{2 + 10}{2} = 6 \iff x = 4.$$

**Răspuns:** $x = 4$. *Barem: 3p, 2p.*

### 2. Valoarea minimă a funcției $f(x) = x^2 - 2x - 10$

$\Delta = 4 + 40 = 44$; cum $a = 1 > 0$, minimul este

$$-\frac{\Delta}{4a} = -\frac{44}{4} = -11$$

(atins în $x = 1$: $f(1) = 1 - 2 - 10 = -11$). **Răspuns:** $-11$. *Barem: 2p, 3p.*

### 3. Ecuația $\log_2(x^2 - 2x) = 3$

$$x^2 - 2x = 2^3 = 8 \iff x^2 - 2x - 8 = 0 \iff (x - 4)(x + 2) = 0.$$

Ambele soluții verifică $x^2 - 2x = 8 > 0$.

**Răspuns:** $x \in \{-2, 4\}$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie par

Cazuri posibile: **90**. Numere pare de două cifre: $10, 12, \dots, 98$ — **45**.

$$p = \frac{45}{90} = \frac12.$$

*Barem: 2p, 1p, 2p.*

### 5. $a$ pentru care $\vec u = (a - 2)\vec i - 2\vec j$ și $\vec v = 3\vec i + 2\vec j$ sunt opuși

$\vec u = -\vec v = -3\vec i - 2\vec j$, deci $a - 2 = -3 \iff a = -1$.

**Răspuns:** $a = -1$. *Barem: 3p, 2p.*

### 6. $\cos A$ în triunghiul cu $AB = 4$, $AC = 5$, $BC = 6$

Teorema cosinusului:

$$\cos A = \frac{AB^2 + AC^2 - BC^2}{2\cdot AB\cdot AC} = \frac{16 + 25 - 36}{40} = \frac{5}{40} = \frac18.$$

**Răspuns:** $\cos A = \dfrac18$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 0 & 1 & 0\\ 1 & 0 & 1\\ 0 & 1 & 0\end{pmatrix}$, $B = \begin{pmatrix} 0 & 0 & 1\\ 0 & 1 & 0\\ 1 & 0 & 0\end{pmatrix}$

#### a) $\det B$

$$\det B = 0 + 0 + 0 - 1\cdot 1\cdot 1 - 0 - 0 = -1.$$

**Răspuns:** $-1$. *Barem: 3p, 2p.*

#### b) $AB = BA$

Înmulțirea la dreapta cu $B$ inversează ordinea coloanelor, iar la stânga — ordinea liniilor. Matricea $A$ este simetrică „față de mijloc" în ambele sensuri, deci:

$$AB = \begin{pmatrix} 0 & 1 & 0\\ 1 & 0 & 1\\ 0 & 1 & 0\end{pmatrix} = BA.$$

*Barem: 2p, 3p.*

#### c) $x$ cu $\det(B + xA) = 1$

$$B + xA = \begin{pmatrix} 0 & x & 1\\ x & 1 & x\\ 1 & x & 0\end{pmatrix}, \quad \det = 0 + x^2 + x^2 - 1 - 0 - 0 = 2x^2 - 1.$$

$2x^2 - 1 = 1 \iff x^2 = 1 \iff x = \pm 1$.

**Răspuns:** $x \in \{-1, 1\}$. *Barem: 3p, 2p.*

### 2. $x * y = xy - 4(x + y - 5)$ (asociativă)

#### a) $4 * 5$

$$4 * 5 = 20 - 4(4 + 5 - 5) = 20 - 16 = 4.$$

**Răspuns:** $4$. *Barem: 3p, 2p.*

#### b) $x * y = (x - 4)(y - 4) + 4$

$$(x - 4)(y - 4) + 4 = xy - 4x - 4y + 16 + 4 = xy - 4x - 4y + 20 = x * y.$$

*Barem: 2p, 3p.*

#### c) $1 * 2 * 3 * \dots * 2014$

Din b), $x * 4 = 4 * x = 4$ pentru orice $x$ ($4$ este element absorbant). Folosind asociativitatea:

$$(1 * 2 * 3) * 4 * (5 * \dots * 2014) = 4 * (5 * \dots * 2014) = 4.$$

**Răspuns:** $4$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 - 3}{x^2 + 3}$

#### a) $\lim\limits_{x\to+\infty} f(x)$

Raport de polinoame de același grad, cu coeficienții dominanți egali: limita este $1$.

**Răspuns:** $1$. *Barem: 2p, 3p.*

#### b) $f'(x) = \dfrac{12x}{(x^2+3)^2}$

$$f'(x) = \frac{2x(x^2 + 3) - 2x(x^2 - 3)}{(x^2+3)^2} = \frac{12x}{(x^2+3)^2}.$$

*Barem: 2p, 3p.*

#### c) $f$ este convexă pe $(-1, 1)$

$$f''(x) = \frac{12(x^2+3)^2 - 12x\cdot 2(x^2+3)\cdot 2x}{(x^2+3)^4} = \frac{12(x^2 + 3) - 48x^2}{(x^2+3)^3} = \frac{36(1 - x^2)}{(x^2+3)^3}.$$

Pentru $x \in (-1, 1)$, $1 - x^2 > 0$, deci $f''(x) > 0$ și $f$ este convexă. *Barem: 3p, 2p.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = \ln x$

#### a) $\displaystyle\int_1^e f(x)f'(x)\,dx = \frac12$

$$\int_1^e f(x)f'(x)\,dx = \frac{f^2(x)}{2}\Big|_1^e = \frac{\ln^2 e - \ln^2 1}{2} = \frac12.$$

*Barem: 3p, 2p.*

#### b) $\displaystyle\int_1^e x^3 f(x)\,dx = \frac{3e^4 + 1}{16}$

Prin părți, cu $u = \ln x$, $v' = x^3$, $v = \frac{x^4}{4}$:

$$\int_1^e x^3\ln x\,dx = \frac{x^4}{4}\ln x\Big|_1^e - \int_1^e\frac{x^3}{4}\,dx = \frac{e^4}{4} - \frac{x^4}{16}\Big|_1^e = \frac{e^4}{4} - \frac{e^4 - 1}{16} = \frac{3e^4 + 1}{16}.$$

*Barem: 2p, 3p.*

#### c) Aria suprafeței delimitate de $G_f$, $Ox$, $x = 1$, $x = e$

Pe $[1, e]$, $\ln x \ge 0$:

$$\mathcal A = \int_1^e\ln x\,dx = (x\ln x - x)\Big|_1^e = (e - e) - (0 - 1) = 1.$$

**Răspuns:** $\mathcal A = 1$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 4$ |
| I.2 | $-11$ |
| I.3 | $x \in \{-2, 4\}$ |
| I.4 | $p = \tfrac12$ |
| I.5 | $a = -1$ |
| I.6 | $\cos A = \tfrac18$ |
| II.1.a | $-1$ |
| II.1.c | $x \in \{-1, 1\}$ |
| II.2.a | $4$ |
| II.2.c | $4$ |
| III.1.a | $1$ |
| III.2.c | $1$ |

## Ce merită reținut din varianta 7

- **Trei termeni consecutivi în progresie aritmetică**: cel din mijloc este media celorlalți doi.
- **Element absorbant** în forma $(x-a)(y-a) + a$: este $a$, deci orice compunere care îl conține dă $a$.
- **$\int f\cdot f' = \frac{f^2}{2}$** — recunoaște forma $u\cdot u'$.
- **$\int\ln x\,dx = x\ln x - x + C$** — primitivă de știut.

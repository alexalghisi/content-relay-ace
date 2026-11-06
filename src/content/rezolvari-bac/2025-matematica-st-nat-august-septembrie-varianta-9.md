Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 5$ și $a_3 = 35$: determinați $a_2$

Termenul din mijloc al trei termeni consecutivi dintr-o progresie aritmetică este media aritmetică a celorlalți doi:

$$a_2 = \frac{a_1 + a_3}{2} = \frac{5 + 35}{2} = \frac{40}{2} = 20.$$

(Verificare: rația $r = 15$, iar $5, 20, 35$ ✔.)

**Răspuns:** $a_2 = 20$. *Barem: 3p relația de medie, 2p calculul.*

### 2. $f(x) = 2x + 3$: determinați $m$ cu $f(m) = f(0)\cdot f(1)$

$f(0) = 3$, $f(1) = 5$, $f(m) = 2m + 3$. Ecuația:

$$2m + 3 = 3\cdot 5 = 15 \iff 2m = 12 \iff m = 6.$$

**Răspuns:** $m = 6$. *Barem: 3p valorile funcției, 2p rezolvarea.*

### 3. Ecuația $\sqrt[3]{x^2 - 4} = \sqrt[3]{3x - 6}$

Radicalul de ordin impar este definit pe tot $\mathbb R$ și este injectiv, deci nu avem condiții de existență și putem ridica la puterea a treia fără pierderi sau soluții străine:

$$x^2 - 4 = 3x - 6 \iff x^2 - 3x + 2 = 0 \iff (x - 1)(x - 2) = 0.$$

**Răspuns:** $x \in \{1, 2\}$. *Barem: 3p ecuația de gradul al II-lea, 2p soluțiile.*

### 4. Probabilitatea ca un număr natural de o cifră să verifice $3n^2 < 100$

Cazuri posibile: numerele naturale de o cifră sunt $0, 1, \dots, 9$ — **10** numere.

Cazuri favorabile: $3n^2 < 100 \iff n^2 < 33{,}(3)$. Pătratele: $0, 1, 4, 9, 16, 25$ sunt sub 33,3, iar $6^2 = 36$ nu mai este. Deci $n \in \{0, 1, 2, 3, 4, 5\}$ — **6** numere.

$$p = \frac{6}{10} = \frac35.$$

**Răspuns:** $p = \dfrac35$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.* Atenție: $0$ este număr natural de o cifră.

### 5. $A(0,2)$, $B(2,5)$, $B$ mijlocul lui $AC$: coordonatele lui $C$

Formulele mijlocului: $x_B = \dfrac{x_A + x_C}{2}$, $y_B = \dfrac{y_A + y_C}{2}$:

$$2 = \frac{0 + x_C}{2} \Rightarrow x_C = 4, \qquad 5 = \frac{2 + y_C}{2} \Rightarrow y_C = 8.$$

**Răspuns:** $C(4, 8)$. *Barem: 3p scrierea relațiilor, 2p coordonatele.*

### 6. Triunghi dreptunghic isoscel în $A$ cu aria 18: arătați că $BC = 6\sqrt2$

Aria unui triunghi dreptunghic este semiprodusul catetelor: $\dfrac{AB\cdot AC}{2} = 18$. Cum $AB = AC$: $AB^2 = 36$, deci $AB = AC = 6$.

Teorema lui Pitagora: $BC^2 = 36 + 36 = 72$, deci $BC = \sqrt{72} = 6\sqrt2$.

*Barem: 3p catetele egale cu 6, 2p calculul lui $BC$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $A(x) = \begin{pmatrix}1 - x & 3x\\ -x & 1 + 4x\end{pmatrix}$

#### a) $\det(A(2)) = 3$

$$A(2) = \begin{pmatrix}-1 & 6\\ -2 & 9\end{pmatrix}, \qquad \det(A(2)) = (-1)\cdot 9 - 6\cdot(-2) = -9 + 12 = 3.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $xA(y) - A(xy) = (x - 1)I_2$

$$xA(y) = \begin{pmatrix}x - xy & 3xy\\ -xy & x + 4xy\end{pmatrix}, \qquad A(xy) = \begin{pmatrix}1 - xy & 3xy\\ -xy & 1 + 4xy\end{pmatrix}.$$

Scăzând element cu element, termenii cu $xy$ se reduc:

$$xA(y) - A(xy) = \begin{pmatrix}x - 1 & 0\\ 0 & x - 1\end{pmatrix} = (x - 1)I_2.$$

*Barem: 3p diferența, 2p scrierea ca $(x-1)I_2$.*

#### c) Numerele $x$ cu $A(1)\cdot A(x - 1) = xA(x)$

$A(1) = \begin{pmatrix}0 & 3\\ -1 & 5\end{pmatrix}$, $A(x - 1) = \begin{pmatrix}2 - x & 3x - 3\\ 1 - x & 4x - 3\end{pmatrix}$.

$$A(1)\cdot A(x - 1) = \begin{pmatrix}3(1 - x) & 3(4x - 3)\\ -(2 - x) + 5(1 - x) & -(3x - 3) + 5(4x - 3)\end{pmatrix} = \begin{pmatrix}3 - 3x & 12x - 9\\ 3 - 4x & 17x - 12\end{pmatrix}.$$

$$xA(x) = \begin{pmatrix}x - x^2 & 3x^2\\ -x^2 & x + 4x^2\end{pmatrix}.$$

Egalăm elementul $(1,1)$: $3 - 3x = x - x^2 \iff x^2 - 4x + 3 = 0 \iff x \in \{1, 3\}$.

Verificăm celelalte elemente:
- $x = 1$: $12 - 9 = 3 = 3\cdot 1^2$ ✔, $3 - 4 = -1 = -1^2$ ✔, $17 - 12 = 5 = 1 + 4$ ✔;
- $x = 3$: $36 - 9 = 27 = 3\cdot 9$ ✔, $3 - 12 = -9 = -9$ ✔, $51 - 12 = 39 = 3 + 36$ ✔.

**Răspuns:** $x \in \{1, 3\}$. *Barem: 3p produsul $A(1)A(x-1)$, 2p soluțiile.* Verificarea pe toate cele patru elemente este necesară — o egalitate de matrice înseamnă patru ecuații simultane.

### 2. Legea $x \circ y = \dfrac14(x + 1)(y + 1) - 1$

#### a) $1 \circ 5 = 2$

$$1\circ 5 = \frac14(1 + 1)(5 + 1) - 1 = \frac{12}{4} - 1 = 3 - 1 = 2.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 3$ este elementul neutru

Trebuie să arătăm $x\circ 3 = 3\circ x = x$ pentru orice $x$ real:

$$x\circ 3 = \frac14(x + 1)\cdot 4 - 1 = x + 1 - 1 = x, \qquad 3\circ x = \frac14\cdot 4\cdot(x + 1) - 1 = x.$$

Deci $e = 3$ este element neutru. *Barem: 2p $x\circ 3 = x$, 3p $3\circ x = x$ și concluzia.*

#### c) Perechile $(m, n)$ naturale, $m \le n$, cu $m\circ n = 3$

$$\frac14(m + 1)(n + 1) - 1 = 3 \iff (m + 1)(n + 1) = 16.$$

$m + 1$ și $n + 1$ sunt naturale nenule, cu $m + 1 \le n + 1$, și produsul 16. Descompunerile lui 16: $1\cdot 16$, $2\cdot 8$, $4\cdot 4$:
- $m + 1 = 1$, $n + 1 = 16$ $\Rightarrow (0, 15)$;
- $m + 1 = 2$, $n + 1 = 8$ $\Rightarrow (1, 7)$;
- $m + 1 = 4$, $n + 1 = 4$ $\Rightarrow (3, 3)$.

**Răspuns:** $(m, n) \in \{(0, 15),\ (1, 7),\ (3, 3)\}$. *Barem: 2p relația $(m+1)(n+1) = 16$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^2 - 3x - 1 + \ln x$

#### a) $f'(x) = \dfrac{(2x - 1)(x - 1)}{x}$

$$f'(x) = 2x - 3 + \frac1x = \frac{2x^2 - 3x + 1}{x}.$$

Trinomul $2x^2 - 3x + 1$ are rădăcinile $x = 1$ și $x = \dfrac12$ ($\Delta = 9 - 8 = 1$), deci $2x^2 - 3x + 1 = 2\left(x - \frac12\right)(x - 1) = (2x - 1)(x - 1)$.

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to1}\frac{f(x) + 3x}{\ln x} = 3$

$f(x) + 3x = x^2 - 1 + \ln x$. Pentru $x \to 1$: numărătorul $\to 0$ și $\ln x \to 0$ — nedeterminare $\frac00$. Aplicăm regula lui l'Hôpital:

$$\lim_{x\to1}\frac{x^2 - 1 + \ln x}{\ln x} = \lim_{x\to1}\frac{2x + \frac1x}{\frac1x} = \lim_{x\to1}(2x^2 + 1) = 3.$$

(Variantă fără l'Hôpital: $\dfrac{x^2 - 1}{\ln x} + 1$ și limita fundamentală $\lim\limits_{x\to1}\dfrac{\ln x}{x - 1} = 1$ dau $2 + 1 = 3$.) *Barem: 3p aplicarea l'Hôpital, 2p calculul.*

#### c) $f(x) + f(y) \le -\dfrac{21}{4}$, pentru orice $x \in (0, 1]$ și $y \in [1, 2]$

Din a), $f'(x) = 0 \iff x = \dfrac12$ sau $x = 1$. Pentru $x > 0$ numitorul e pozitiv, deci semnul lui $f'$ este semnul lui $(2x - 1)(x - 1)$:

| $x$ | $0$ | | $\frac12$ | | $1$ | | $2$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | $f(\frac12)$ | ↘ | | ↗ | $f(2)$ |

- Pe $(0, 1]$, $f$ crește până în $\frac12$ și apoi scade, deci $f(x) \le f\left(\frac12\right)$.
- Pe $[1, 2]$, $f$ este crescătoare, deci $f(y) \le f(2)$.

Calculăm:

$$f\left(\tfrac12\right) = \frac14 - \frac32 - 1 + \ln\frac12 = -\frac94 - \ln 2, \qquad f(2) = 4 - 6 - 1 + \ln 2 = -3 + \ln 2.$$

Adunând inegalitățile:

$$f(x) + f(y) \le -\frac94 - \ln 2 - 3 + \ln 2 = -\frac{21}{4}.$$

*Barem: 3p monotonia pe intervale, 2p valorile maxime și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{x - 1}{\sqrt x}$

#### a) $\displaystyle\int_2^4 f(x)\sqrt x\,dx = 4$

$f(x)\sqrt x = x - 1$, deci

$$\int_2^4 (x - 1)\,dx = \left(\frac{x^2}{2} - x\right)\Big|_2^4 = (8 - 4) - (2 - 2) = 4.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^4 f(x)\,dx = \frac83$

Împărțim termen cu termen: $\dfrac{x - 1}{\sqrt x} = \sqrt x - \dfrac{1}{\sqrt x} = x^{1/2} - x^{-1/2}$. Primitive: $\dfrac{2x\sqrt x}{3}$ și $2\sqrt x$.

$$\int_1^4\left(\sqrt x - \frac{1}{\sqrt x}\right)dx = \left(\frac{2x\sqrt x}{3} - 2\sqrt x\right)\Big|_1^4 = \left(\frac{16}{3} - 4\right) - \left(\frac23 - 2\right) = \frac{14}{3} - 2 = \frac83.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Volumul corpului de rotație generat de $g(x) = \dfrac{\sqrt2}{f(x)}$, $x \in [2, 3]$, este $\pi\ln(4e)$

$g(x) = \dfrac{\sqrt2\cdot\sqrt x}{x - 1} = \dfrac{\sqrt{2x}}{x - 1}$, deci $g^2(x) = \dfrac{2x}{(x - 1)^2}$. Volumul:

$$V = \pi\int_2^3 g^2(x)\,dx = 2\pi\int_2^3\frac{x}{(x - 1)^2}\,dx.$$

Scriem $x = (x - 1) + 1$: $\dfrac{x}{(x-1)^2} = \dfrac{1}{x - 1} + \dfrac{1}{(x - 1)^2}$, cu primitivele $\ln(x - 1)$ și $-\dfrac{1}{x - 1}$:

$$V = 2\pi\left(\ln(x - 1) - \frac{1}{x - 1}\right)\Big|_2^3 = 2\pi\left[\left(\ln 2 - \frac12\right) - (0 - 1)\right] = 2\pi\left(\ln 2 + \frac12\right) = \pi(2\ln 2 + 1).$$

Cum $2\ln 2 + 1 = \ln 4 + \ln e = \ln(4e)$, obținem $V = \pi\ln(4e)$.

*Barem: 2p formula volumului cu $g^2$, 3p calculul integralei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_2 = 20$ |
| I.2 | $m = 6$ |
| I.3 | $x \in \{1, 2\}$ |
| I.4 | $p = \tfrac35$ |
| I.5 | $C(4, 8)$ |
| II.1.c | $x \in \{1, 3\}$ |
| II.2.c | $(0,15)$, $(1,7)$, $(3,3)$ |
| III.1.b | $3$ |
| III.2.c | $V = \pi\ln(4e)$ |

## Ce merită reținut din varianta 9

- **Radicali de ordin impar:** nu au condiții de existență și se pot „ridica la cub” direct.
- **Ecuații egale între matrice:** rezolvă din elementul cel mai simplu, apoi verifică celelalte.
- **Inegalități de tip $f(x) + f(y) \le c$ pe intervale diferite:** majorează separat fiecare termen prin maximul lui $f$ pe intervalul respectiv.
- **Volume de rotație:** $V = \pi\int_a^b g^2(x)\,dx$; descompune fracția în fracții simple înainte de integrare.

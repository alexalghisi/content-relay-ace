Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_pedagogic**, simularea națională (filiera vocațională, profilul pedagogic, specializarea învățător-educatoare). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni ai progresiei aritmetice cu $a_1 = 3$, $r = 2$

Termenii se obțin adunând rația: $a_2 = a_1 + r = 5$, $a_3 = a_1 + 2r = 7$.

$$S_3 = \frac{(a_1 + a_3)\cdot 3}{2} = \frac{(3 + 7)\cdot 3}{2} = 15.$$

(Verificare directă: $3 + 5 + 7 = 15$.)

**Răspuns:** $S_3 = 15$. *Barem: 2p $a_3 = a_1 + 2r$, 3p $a_3 = 7$ și suma.*

### 2. $f(x) = (1 - 2a)x + 1$; determinați $a$ cu $f(1) = f(-1)$

$$f(1) = 1 - 2a + 1 = 2 - 2a, \qquad f(-1) = -(1 - 2a) + 1 = 2a.$$

$$2 - 2a = 2a \iff 4a = 2 \iff a = \frac12.$$

**Observație:** pentru $a = \frac12$ coeficientul lui $x$ este $0$, deci $f$ este constantă ($f(x) = 1$) — de aceea ia aceeași valoare în $1$ și $-1$.

**Răspuns:** $a = \dfrac12$. *Barem: 2p $f(1)$ și $f(-1)$, 3p rezolvarea ecuației.*

### 3. Ecuația $1 + \log_2(2x + 1) = \log_2 4$

**Condiția de existență:** $2x + 1 > 0 \iff x > -\dfrac12$.

Cum $\log_2 4 = 2$, ecuația devine $1 + \log_2(2x+1) = 2 \iff \log_2(2x + 1) = 1 \iff 2x + 1 = 2^1 = 2 \iff x = \dfrac12$.

Verificăm condiția: $\dfrac12 > -\dfrac12$ ✔ (și $\log_2 2 = 1$, deci $1 + 1 = 2$ ✔).

**Răspuns:** $x = \dfrac12$. *Barem: 2p $\log_2 4 = 2$, 3p rezolvarea și faptul că soluția convine.*

### 4. Probabilitatea ca un număr natural de o cifră să fie pătrat perfect

Numerele naturale de o cifră sunt $0, 1, 2, \dots, 9$: **10 cazuri posibile** (nu uita de $0$!).

Pătratele perfecte dintre ele: $0 = 0^2$, $1 = 1^2$, $4 = 2^2$, $9 = 3^2$: **4 cazuri favorabile**.

$$P = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac{4}{10} = \frac25.$$

**Răspuns:** $P = \dfrac25$. *Barem: 2p cazurile favorabile, 2p cazurile posibile, 1p probabilitatea.*

### 5. Lungimea medianei din $A$ în triunghiul cu $A(1,4)$, $B(-3,2)$, $C(5,2)$

Mediana din $A$ unește $A$ cu mijlocul $M$ al laturii $BC$:

$$x_M = \frac{x_B + x_C}{2} = \frac{-3 + 5}{2} = 1, \qquad y_M = \frac{y_B + y_C}{2} = \frac{2 + 2}{2} = 2.$$

$$AM = \sqrt{(x_M - x_A)^2 + (y_M - y_A)^2} = \sqrt{0^2 + (2 - 4)^2} = \sqrt 4 = 2.$$

**Răspuns:** $AM = 2$. *Barem: 2p coordonatele mijlocului, 3p lungimea.*

### 6. Calculați $\sqrt3 \cdot \sin 60^\circ \cdot \sin 45^\circ - 3 \cdot \sin 30^\circ \cdot \cos 45^\circ$

Valorile: $\sin 30^\circ = \dfrac12$, $\sin 45^\circ = \cos 45^\circ = \dfrac{\sqrt2}{2}$, $\sin 60^\circ = \dfrac{\sqrt3}{2}$.

$$\sqrt3\cdot\frac{\sqrt3}{2}\cdot\frac{\sqrt2}{2} - 3\cdot\frac12\cdot\frac{\sqrt2}{2} = \frac{3\sqrt2}{4} - \frac{3\sqrt2}{4} = 0.$$

**Răspuns:** $0$. *Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

Legea asociativă pe $\mathbb R$: $x * y = -\dfrac{(x-1)(y-1)}{3} + 1$.

### 1. Arătați că $3 * 4 = -1$

$$3 * 4 = -\frac{(3-1)(4-1)}{3} + 1 = -\frac{2\cdot 3}{3} + 1 = -2 + 1 = -1.$$

*Barem: 2p înlocuirea, 3p calculul.*

### 2. Verificați dacă $e = -2$ este element neutru

Trebuie ca $x * (-2) = (-2) * x = x$ pentru orice $x$ real.

$$x * (-2) = -\frac{(x-1)(-2-1)}{3} + 1 = -\frac{-3(x-1)}{3} + 1 = (x - 1) + 1 = x.$$

$$(-2) * x = -\frac{(-3)(x-1)}{3} + 1 = x - 1 + 1 = x.$$

(Legea este și comutativă, deci a doua verificare rezultă din prima, dar e bine să o scrii.) Ambele egalități au loc pentru orice $x \in \mathbb R$, deci **$e = -2$ este elementul neutru**.

*Barem: 2p $x * (-2) = x$, 3p $(-2) * x = x$ și concluzia.*

### 3. Determinați $a$ cu $a * 7 = 5$

$$-\frac{(a-1)(7-1)}{3} + 1 = 5 \iff -2(a - 1) + 1 = 5 \iff -2(a-1) = 4 \iff a - 1 = -2 \iff a = -1.$$

Verificare: $(-1) * 7 = -\dfrac{(-2)\cdot 6}{3} + 1 = 4 + 1 = 5$ ✔.

**Răspuns:** $a = -1$. *Barem: 2p scrierea ecuației, 3p rezolvarea.*

### 4. Valorile lui $x$ cu $x * (1 + x) \ge -3$

$$x * (1+x) = -\frac{(x-1)(1 + x - 1)}{3} + 1 = -\frac{x(x-1)}{3} + 1.$$

Inecuația: $-\dfrac{x(x-1)}{3} + 1 \ge -3 \iff -\dfrac{x(x-1)}{3} \ge -4 \iff x(x-1) \le 12 \iff x^2 - x - 12 \le 0$.

Rădăcinile trinomului: $\Delta = 1 + 48 = 49$, $x_{1,2} = \dfrac{1 \pm 7}{2}$, adică $-3$ și $4$. Trinomul are coeficientul dominant pozitiv, deci este $\le 0$ între rădăcini.

**Răspuns:** $x \in [-3, 4]$. *Barem: 2p expresia $x * (1+x)$, 3p rezolvarea inecuației.* Atenție la schimbarea sensului inegalității când înmulțești cu $-3$.

### 5. Cel mai mare $n \in \mathbb N$ cu $n * n * n \le n$

Pas 1: $n * n = -\dfrac{(n-1)^2}{3} + 1$.

Pas 2 (legea e asociativă, calculăm $(n * n) * n$): în formulă, $(n*n) - 1 = -\dfrac{(n-1)^2}{3}$, deci

$$n * n * n = -\frac{\left(-\frac{(n-1)^2}{3}\right)(n-1)}{3} + 1 = \frac{(n-1)^3}{9} + 1.$$

Inecuația: $\dfrac{(n-1)^3}{9} + 1 \le n \iff \dfrac{(n-1)^3}{9} \le n - 1 \iff (n-1)^3 - 9(n-1) \le 0 \iff (n-1)\big((n-1)^2 - 9\big) \le 0$,

adică $(n-1)(n-4)(n+2) \le 0$.

Pentru $n$ natural, $n + 2 > 0$, deci condiția devine $(n-1)(n-4) \le 0 \iff n \in [1, 4]$. Pentru $n \ge 5$ ambii factori sunt pozitivi și inegalitatea nu mai are loc.

**Răspuns:** $n = 4$. *Barem: 3p calculul lui $n * n * n$, 2p rezolvarea și concluzia.*

### 6. Perechile $(m, n)$ de numere naturale cu $m * n = -1$

$$-\frac{(m-1)(n-1)}{3} + 1 = -1 \iff \frac{(m-1)(n-1)}{3} = 2 \iff (m-1)(n-1) = 6.$$

Cum $m, n \in \mathbb N$, avem $m - 1, n - 1 \ge -1$. Scrierile lui $6$ ca produs de două întregi $\ge -1$: produsul fiind pozitiv, ambii factori au același semn; ambii negativi ar însemna $(-1)(-1) = 1 \ne 6$, deci ambii sunt pozitivi: $1\cdot 6$, $2\cdot 3$, $3\cdot 2$, $6\cdot 1$.

- $m - 1 = 1, n - 1 = 6 \Rightarrow (2, 7)$;
- $m - 1 = 2, n - 1 = 3 \Rightarrow (3, 4)$;
- $m - 1 = 3, n - 1 = 2 \Rightarrow (4, 3)$;
- $m - 1 = 6, n - 1 = 1 \Rightarrow (7, 2)$.

**Răspuns:** $(m, n) \in \{(2,7), (3,4), (4,3), (7,2)\}$. *Barem: 2p $(m-1)(n-1) = 6$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix}2 & 3\\ 1 & -2\end{pmatrix}$, $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$.

### 1. Arătați că $\det(A) = -7$

$$\det(A) = \begin{vmatrix}2 & 3\\ 1 & -2\end{vmatrix} = 2\cdot(-2) - 1\cdot 3 = -4 - 3 = -7.$$

*Barem: 3p formula determinantului, 2p calculul.*

### 2. Arătați că $\det(A + xI_2) \ge -7$ pentru orice $x$ real

$$A + xI_2 = \begin{pmatrix}2 + x & 3\\ 1 & -2 + x\end{pmatrix}, \quad \det(A + xI_2) = (x+2)(x-2) - 3 = x^2 - 4 - 3 = x^2 - 7.$$

Cum $x^2 \ge 0$ pentru orice $x$ real, $x^2 - 7 \ge -7$. Egalitatea are loc doar pentru $x = 0$.

*Barem: 2p matricea $A + xI_2$, 3p determinantul și justificarea.*

### 3. Determinați $a$ cu $A \cdot A = aI_2$

$$A\cdot A = \begin{pmatrix}2 & 3\\ 1 & -2\end{pmatrix}\begin{pmatrix}2 & 3\\ 1 & -2\end{pmatrix} = \begin{pmatrix}4 + 3 & 6 - 6\\ 2 - 2 & 3 + 4\end{pmatrix} = \begin{pmatrix}7 & 0\\ 0 & 7\end{pmatrix}.$$

$aI_2 = \begin{pmatrix}a & 0\\ 0 & a\end{pmatrix}$; două matrice sunt egale când au elementele corespunzătoare egale, deci $a = 7$.

**Răspuns:** $a = 7$. *Barem: 3p calculul lui $A\cdot A$ și $aI_2$, 2p concluzia.*

### 4. Determinați $m$ cu $\det(mA - I_2) = m\cdot\det(A + I_2)$

$$mA - I_2 = \begin{pmatrix}2m - 1 & 3m\\ m & -2m - 1\end{pmatrix}, \quad \det(mA - I_2) = (2m-1)(-2m-1) - 3m^2 = 1 - 4m^2 - 3m^2 = 1 - 7m^2.$$

Din punctul 2 cu $x = 1$: $\det(A + I_2) = 1 - 7 = -6$.

Ecuația: $1 - 7m^2 = -6m \iff 7m^2 - 6m - 1 = 0$. $\Delta = 36 + 28 = 64$, $m_{1,2} = \dfrac{6 \pm 8}{14}$, adică $m = 1$ sau $m = -\dfrac17$.

**Răspuns:** $m \in \left\{-\dfrac17, 1\right\}$. *Barem: 2p cei doi determinanți, 3p rezolvarea ecuației.*

### 5. $M = \begin{pmatrix}x & y\\ y & x\end{pmatrix}$ cu $AM = MA$; arătați că $y = 0$

$$A\cdot M = \begin{pmatrix}2x + 3y & 2y + 3x\\ x - 2y & y - 2x\end{pmatrix}, \qquad M\cdot A = \begin{pmatrix}2x + y & 3x - 2y\\ 2y + x & 3y - 2x\end{pmatrix}.$$

Egalând elementele de pe poziția $(1,1)$: $2x + 3y = 2x + y \iff 2y = 0 \iff y = 0$.

Verificare: pentru $y = 0$ toate pozițiile coincid ($3x = 3x$, $x = x$, $-2x = -2x$), deci condiția este compatibilă.

*Barem: 3p calculul celor două produse, 2p concluzia $y = 0$.*

### 6. Pentru câte valori întregi ale lui $a$ avem $\det(aA) \ge -28$?

Înmulțind o matrice de ordin 2 cu $a$, fiecare linie se înmulțește cu $a$, deci $\det(aA) = a^2\det(A) = -7a^2$.

$$-7a^2 \ge -28 \iff a^2 \le 4 \iff a \in [-2, 2].$$

Valorile întregi: $-2, -1, 0, 1, 2$.

**Răspuns:** 5 valori. *Barem: 2p $\det(aA) = -7a^2$, 3p rezolvarea și numărarea.* Greșeală frecventă: $\det(aA) = a\det(A)$ — pentru ordinul 2 factorul este $a^2$.

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $15$ |
| I.2 | $a = \tfrac12$ |
| I.3 | $x = \tfrac12$ |
| I.4 | $P = \tfrac25$ |
| I.5 | $AM = 2$ |
| I.6 | $0$ |
| II.3 | $a = -1$ |
| II.4 | $x \in [-3, 4]$ |
| II.5 | $n = 4$ |
| II.6 | $(2,7), (3,4), (4,3), (7,2)$ |
| III.3 | $a = 7$ |
| III.4 | $m \in \{-\tfrac17, 1\}$ |
| III.6 | 5 valori |

## Ce merită reținut

- **Legi de forma** $k(x-a)(y-a) + a$: elementul neutru, compunerea a trei elemente și ecuațiile se rezolvă ușor dacă păstrezi forma factorizată.
- **Probabilități**: mulțimea numerelor naturale de o cifră include $0$.
- **Determinanți**: $\det(aA) = a^2\det(A)$ pentru matrice de ordin 2.

Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_tehnologic**, simularea națională. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Termenul $a_3$ al progresiei aritmetice cu $a_1 = 3$ și $a_2 = 10$

Rația este diferența a doi termeni consecutivi: $r = a_2 - a_1 = 10 - 3 = 7$.

$$a_3 = a_2 + r = 10 + 7 = 17.$$

**Răspuns:** $a_3 = 17$. *Barem: 3p rația, 2p $a_3$.*

### 2. $f(x) = 3x - 4$, $g(x) = x + 2$: numărul $a$ cu $f(a) = a + g(2)$

$g(2) = 2 + 2 = 4$ și $f(a) = 3a - 4$. Ecuația:

$$3a - 4 = a + 4 \iff 2a = 8 \iff a = 4.$$

**Verificare:** $f(4) = 8$ și $4 + g(2) = 8$ ✔.

**Răspuns:** $a = 4$. *Barem: 3p calculul lui $g(2)$ și $f(a)$, 2p rezolvarea.*

### 3. Ecuația $\log_3(10x - 1) = 2$

**Condiție de existență:** argumentul logaritmului trebuie să fie pozitiv: $10x - 1 > 0$, adică $x > \dfrac1{10}$.

Din definiția logaritmului, $\log_3 A = 2 \iff A = 3^2$:

$$10x - 1 = 9 \iff 10x = 10 \iff x = 1.$$

$x = 1 > \dfrac1{10}$, deci convine.

**Răspuns:** $x = 1$. *Barem: 3p trecerea la $10x - 1 = 9$, 2p soluția care convine.*

### 4. După o ieftinire cu $45\%$ produsul costă 110 lei. Prețul inițial?

Fie $x$ prețul inițial. După ieftinire rămâne $100\% - 45\% = 55\%$ din $x$:

$$x - \frac{45}{100}\,x = 110 \iff \frac{55}{100}\,x = 110 \iff x = \frac{110\cdot 100}{55} = 200.$$

**Verificare:** $45\%$ din 200 înseamnă 90 de lei, iar $200 - 90 = 110$ ✔.

**Răspuns:** 200 de lei. *Barem: 3p ecuația, 2p rezultatul.*

### 5. $A(0,4)$, $B(0,-1)$, $C(8,3)$; $M$ mijlocul lui $BC$. Arătați că $AB = AM$

$A$ și $B$ au aceeași abscisă, deci $AB = |4 - (-1)| = 5$.

Mijlocul segmentului $BC$: $M\left(\dfrac{0 + 8}{2}, \dfrac{-1 + 3}{2}\right) = M(4, 1)$.

$$AM = \sqrt{(4 - 0)^2 + (1 - 4)^2} = \sqrt{16 + 9} = 5.$$

Deci $AB = AM = 5$. *Barem: 2p $AB$, 3p coordonatele lui $M$, $AM$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AB = 6$, $AC = 8$: arătați că $\sin C = \dfrac35$

**Teorema lui Pitagora:** $BC^2 = AB^2 + AC^2 = 36 + 64 = 100$, deci $BC = 10$ (ipotenuza).

În triunghiul dreptunghic, sinusul unui unghi ascuțit = cateta opusă / ipotenuză. Opusă unghiului $C$ este cateta $AB$:

$$\sin C = \frac{AB}{BC} = \frac{6}{10} = \frac35.$$

*Barem: 2p $BC = 10$, 3p calculul lui $\sin C$.* Atenție să nu iei cateta alăturată ($AC$) — aceea dă $\cos C$.

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 3a\\ a & 2a + 3\end{pmatrix}$, $a \in \mathbb R$

#### a) $\det(A(2)) = 2$

$A(2) = \begin{pmatrix}2 & 6\\ 2 & 7\end{pmatrix}$, deci

$$\det(A(2)) = 2\cdot 7 - 6\cdot 2 = 14 - 12 = 2.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) Numărul $x$ pentru care $A(1)\cdot A(1) + 2I_2 = xA(1)$

$A(1) = \begin{pmatrix}1 & 3\\ 1 & 5\end{pmatrix}$. Produsul:

$$A(1)\cdot A(1) = \begin{pmatrix}1\cdot1 + 3\cdot1 & 1\cdot3 + 3\cdot5\\ 1\cdot1 + 5\cdot1 & 1\cdot3 + 5\cdot5\end{pmatrix} = \begin{pmatrix}4 & 18\\ 6 & 28\end{pmatrix}.$$

$$A(1)\cdot A(1) + 2I_2 = \begin{pmatrix}6 & 18\\ 6 & 30\end{pmatrix} = 6\begin{pmatrix}1 & 3\\ 1 & 5\end{pmatrix} = 6A(1).$$

Egalitatea $6A(1) = xA(1)$ cu $A(1) \ne O_2$ dă $x = 6$ (comparăm de exemplu elementul de pe poziția $(1,1)$: $6 = x$).

**Răspuns:** $x = 6$. *Barem: 3p calculul matricei, 2p valoarea lui $x$.*

#### c) Matricea $X$ cu $A(2)\cdot X\cdot A(2) = A(0)$

Cum $\det(A(2)) = 2 \ne 0$, $A(2)$ este inversabilă. Înmulțim egalitatea la stânga și la dreapta cu $A(2)^{-1}$:

$$X = A(2)^{-1}\cdot A(0)\cdot A(2)^{-1}.$$

**Inversa:** pentru $\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ cu determinant $\Delta$, inversa este $\dfrac1\Delta\begin{pmatrix}d & -b\\ -c & a\end{pmatrix}$:

$$A(2)^{-1} = \frac12\begin{pmatrix}7 & -6\\ -2 & 2\end{pmatrix} = \begin{pmatrix}\frac72 & -3\\ -1 & 1\end{pmatrix}, \qquad A(0) = \begin{pmatrix}0 & 0\\ 0 & 3\end{pmatrix}.$$

$$A(2)^{-1}A(0) = \begin{pmatrix}0 & -9\\ 0 & 3\end{pmatrix}, \qquad X = \begin{pmatrix}0 & -9\\ 0 & 3\end{pmatrix}\begin{pmatrix}\frac72 & -3\\ -1 & 1\end{pmatrix} = \begin{pmatrix}9 & -9\\ -3 & 3\end{pmatrix}.$$

**Răspuns:** $X = \begin{pmatrix}9 & -9\\ -3 & 3\end{pmatrix}$. *Barem: 2p scrierea lui $X$ cu inversele, 3p calculul inversei și al lui $X$.* Ordinea contează: înmulțirea matricelor nu este comutativă.

### 2. Legea asociativă $x * y = xy - 2x - 2y + 6$

#### a) $0 * 2 = 2$

$$0 * 2 = 0 - 0 - 4 + 6 = 2.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * (2x) = 6$

$$x * (2x) = x\cdot 2x - 2x - 4x + 6 = 2x^2 - 6x + 6.$$

Ecuația: $2x^2 - 6x + 6 = 6 \iff 2x^2 - 6x = 0 \iff 2x(x - 3) = 0 \iff x \in \{0, 3\}$.

**Răspuns:** $x = 0$ sau $x = 3$. *Barem: 2p expresia, 3p soluțiile.*

#### c) Elementul neutru e $e = 3$; numărul $x$ al cărui simetric este 4

$x' = 4$ este simetricul lui $x$ dacă $x * 4 = 4 * x = e = 3$ (legea e comutativă, deci ajunge o egalitate).

$$x * 4 = 4x - 2x - 8 + 6 = 2x - 2.$$

$2x - 2 = 3 \iff x = \dfrac52$.

**Verificare:** $\dfrac52 * 4 = 10 - 5 - 8 + 6 = 3$ ✔.

**Răspuns:** $x = \dfrac52$. *Barem: 3p condiția $x * 4 = 3$, 2p soluția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2x^2 - 2 - \ln x$

#### a) $f'(x) = \dfrac{(2x - 1)(2x + 1)}{x}$

$$f'(x) = 4x - \frac1x = \frac{4x^2 - 1}{x} = \frac{(2x - 1)(2x + 1)}{x}.$$

(Am folosit diferența de pătrate $4x^2 - 1 = (2x)^2 - 1^2$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to1}\frac{f(x) + \ln x}{3x - 3} = \frac43$

Logaritmii se reduc: $f(x) + \ln x = 2x^2 - 2 = 2(x - 1)(x + 1)$. Atunci

$$\lim_{x\to1}\frac{2(x - 1)(x + 1)}{3(x - 1)} = \lim_{x\to1}\frac{2(x + 1)}{3} = \frac{2\cdot 2}{3} = \frac43.$$

Simplificarea cu $x - 1$ este permisă pentru că $x \to 1$, dar $x \ne 1$. *Barem: 3p factorizarea, 2p limita.*

#### c) $\dfrac{4x^2 - 1}{2} \ge \ln(2x)$, pentru orice $x > 0$

**Idee:** inegalitatea se obține din valoarea minimă a lui $f$.

**Monotonia.** Pe $(0, +\infty)$ avem $x > 0$ și $2x + 1 > 0$, deci semnul lui $f'$ este semnul lui $2x - 1$:

- pe $\left(0, \frac12\right]$: $f'(x) \le 0$, $f$ descrescătoare;
- pe $\left[\frac12, +\infty\right)$: $f'(x) \ge 0$, $f$ crescătoare.

Deci $x = \frac12$ este punct de minim global: $f(x) \ge f\left(\frac12\right)$ pentru orice $x > 0$, unde

$$f\left(\frac12\right) = 2\cdot\frac14 - 2 - \ln\frac12 = -\frac32 + \ln 2.$$

**Transformarea.** $f(x) \ge -\frac32 + \ln 2 \iff 2x^2 - 2 - \ln x \ge -\frac32 + \ln 2 \iff 2x^2 - \frac12 \ge \ln x + \ln 2 = \ln(2x)$.

Cum $2x^2 - \frac12 = \dfrac{4x^2 - 1}{2}$, obținem exact $\dfrac{4x^2 - 1}{2} \ge \ln(2x)$ pentru orice $x \in (0, +\infty)$. ∎

*Barem: 2p monotonia, 3p minimul și finalizarea.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = e^x + 2x + 2$

#### a) $\displaystyle\int_0^1(f(x) - 2x)\,dx = e + 1$

$f(x) - 2x = e^x + 2$:

$$\int_0^1(e^x + 2)\,dx = (e^x + 2x)\Big|_0^1 = (e + 2) - (1 + 0) = e + 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^3\frac{1}{f(x) - e^x}\,dx = \ln 2$

$f(x) - e^x = 2x + 2 = 2(x + 1)$, deci

$$\int_0^3\frac{dx}{2(x + 1)} = \frac12\ln(x + 1)\Big|_0^3 = \frac12(\ln 4 - \ln 1) = \frac12\cdot 2\ln 2 = \ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Numărul $a$ pentru care $\displaystyle\int_0^1\frac{f(x)}{e^x}\,dx = 5 + \frac{a}{e}$

Despărțim fracția: $\dfrac{f(x)}{e^x} = 1 + (2x + 2)e^{-x}$.

Pentru $\int(2x + 2)e^{-x}dx$ folosim **integrarea prin părți** cu $u = 2x + 2$, $v' = e^{-x}$, deci $u' = 2$, $v = -e^{-x}$:

$$\int(2x + 2)e^{-x}dx = -(2x + 2)e^{-x} + \int 2e^{-x}dx = -(2x + 2)e^{-x} - 2e^{-x} = -(2x + 4)e^{-x} + C.$$

Atunci

$$\int_0^1\frac{f(x)}{e^x}dx = \Big(x - (2x + 4)e^{-x}\Big)\Big|_0^1 = \left(1 - \frac6e\right) - (0 - 4) = 5 - \frac6e.$$

Din $5 - \dfrac6e = 5 + \dfrac ae$ rezultă $a = -6$.

**Răspuns:** $a = -6$. *Barem: 3p integrarea prin părți, 2p calculul și valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 17$ |
| I.2 | $a = 4$ |
| I.3 | $x = 1$ |
| I.4 | 200 de lei |
| II.1.b | $x = 6$ |
| II.1.c | $X = \begin{pmatrix}9 & -9\\ -3 & 3\end{pmatrix}$ |
| II.2.b | $x \in \{0, 3\}$ |
| II.2.c | $x = \frac52$ |
| III.2.c | $a = -6$ |

## Ce merită reținut din simulare

- **Ecuații matriceale** $AXB = C$: dacă $A$ și $B$ sunt inversabile, $X = A^{-1}CB^{-1}$ — păstrează ordinea factorilor.
- **Inegalități cu funcții**: găsește minimul cu ajutorul derivatei, apoi rescrie $f(x) \ge f_{\min}$ până ajungi la forma cerută.
- **Integrale cu $e^{-x}$**: produsul polinom × exponențială se rezolvă prin părți, derivând polinomul.

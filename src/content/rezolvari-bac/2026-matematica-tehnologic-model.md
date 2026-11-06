Rezolvarea completă a **modelului oficial** de **Bacalaureat 2026 la Matematică M_tehnologic**, publicat de Centrul Național pentru Curriculum și Evaluare. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac14 + 3\cdot\left(\dfrac32 - \dfrac14\right) = 4$

Respectăm ordinea operațiilor: întâi paranteza, apoi înmulțirea, la final adunarea.

Aducem paranteza la numitorul comun 4: $\dfrac32 - \dfrac14 = \dfrac64 - \dfrac14 = \dfrac54$.

$$\frac14 + 3\cdot\frac54 = \frac14 + \frac{15}{4} = \frac{16}{4} = 4.$$

*Barem: 3p calculul parantezei, 2p finalizarea.*

### 2. $f(x) = 4x - 9$: determinați $a$ cu $f(a) = a$

$f(a) = 4a - 9$, deci ecuația devine

$$4a - 9 = a \iff 3a = 9 \iff a = 3.$$

**Verificare:** $f(3) = 12 - 9 = 3$ ✔.

**Răspuns:** $a = 3$. *Barem: 2p expresia lui $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{2x - 1} = x$

**Condiții:** $2x - 1 \ge 0$ (radical definit) și $x \ge 0$ (un radical este nenegativ, deci și membrul drept trebuie să fie). Rezultă $x \ge \dfrac12$.

Ridicăm la pătrat: $2x - 1 = x^2 \iff x^2 - 2x + 1 = 0 \iff (x - 1)^2 = 0 \iff x = 1$.

**Verificare:** $\sqrt{2 - 1} = 1$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ecuația de gradul II, 2p soluția care convine.*

### 4. Probabilitatea ca $n(n+1)$ să fie multiplu de 10, $n \in A = \{1, 2, \dots, 8\}$

Cazuri posibile: $|A| = 8$.

Calculăm produsele: $1\cdot2 = 2$, $2\cdot3 = 6$, $3\cdot4 = 12$, $4\cdot5 = 20$, $5\cdot6 = 30$, $6\cdot7 = 42$, $7\cdot8 = 56$, $8\cdot9 = 72$. Multipli de 10 sunt doar $20$ și $30$, adică pentru $n \in \{4, 5\}$ (unul dintre factori trebuie să fie multiplu de 5, iar produsul a două numere consecutive e mereu par).

$$p = \frac{\text{cazuri favorabile}}{\text{cazuri posibile}} = \frac28 = \frac14.$$

**Răspuns:** $p = \dfrac14$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(6, 8)$, $B(8, 4)$, $M$ mijlocul lui $OA$: triunghiul $OBM$ este isoscel

Mijlocul unui segment are coordonatele mediile coordonatelor capetelor: $M\left(\dfrac{0 + 6}{2}, \dfrac{0 + 8}{2}\right) = M(3, 4)$.

Distanțele (formula $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$):

$$OM = \sqrt{3^2 + 4^2} = 5, \qquad BM = \sqrt{(8 - 3)^2 + (4 - 4)^2} = 5.$$

Cum $OM = BM$, triunghiul $OBM$ este isoscel (cu baza $OB$). *Barem: 3p coordonatele lui $M$ și $OM$, 2p $BM$ și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AC = 6$, $AC = 3AB$: arătați că $BC = 2\sqrt{10}$

Din $AC = 3AB$: $AB = \dfrac{6}{3} = 2$.

$BC$ este ipotenuza, deci din teorema lui Pitagora:

$$BC^2 = AB^2 + AC^2 = 4 + 36 = 40 \Rightarrow BC = \sqrt{40} = 2\sqrt{10}.$$

*Barem: 2p $AB = 2$, 3p Pitagora și finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $M(a) = \begin{pmatrix} a + 1 & 4 \\ -1 & a - 4 \end{pmatrix}$

#### a) $\det(M(0)) = 0$

$$M(0) = \begin{pmatrix} 1 & 4 \\ -1 & -4 \end{pmatrix}, \qquad \det(M(0)) = 1\cdot(-4) - 4\cdot(-1) = -4 + 4 = 0.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $M(3) + 2M(0) = 3M(1)$

$$M(3) = \begin{pmatrix} 4 & 4 \\ -1 & -1 \end{pmatrix}, \quad 2M(0) = \begin{pmatrix} 2 & 8 \\ -2 & -8 \end{pmatrix} \Rightarrow M(3) + 2M(0) = \begin{pmatrix} 6 & 12 \\ -3 & -9 \end{pmatrix}.$$

$$3M(1) = 3\begin{pmatrix} 2 & 4 \\ -1 & -3 \end{pmatrix} = \begin{pmatrix} 6 & 12 \\ -3 & -9 \end{pmatrix}.$$

Matricele sunt egale. *Barem: 3p suma, 2p finalizarea.*

#### c) $a$ real cu $M(a)\cdot M(0) = 3M(0)$

Înmulțim „linie cu coloană”:

$$M(a)\cdot M(0) = \begin{pmatrix} a + 1 & 4 \\ -1 & a - 4 \end{pmatrix}\begin{pmatrix} 1 & 4 \\ -1 & -4 \end{pmatrix} = \begin{pmatrix} a + 1 - 4 & 4a + 4 - 16 \\ -1 - a + 4 & -4 - 4a + 16 \end{pmatrix} = \begin{pmatrix} a - 3 & 4a - 12 \\ 3 - a & 12 - 4a \end{pmatrix}.$$

$3M(0) = \begin{pmatrix} 3 & 12 \\ -3 & -12 \end{pmatrix}$. Egalând elementele: $a - 3 = 3$, $4a - 12 = 12$, $3 - a = -3$, $12 - 4a = -12$ — toate dau $a = 6$.

**Răspuns:** $a = 6$. *Barem: 3p produsul, 2p determinarea lui $a$.*

### 2. Legea $x \circ y = xy + 4(x + y)$

#### a) $1 \circ 2 = 14$

$$1 \circ 2 = 1\cdot2 + 4(1 + 2) = 2 + 12 = 14.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \circ 3 = x$

$x \circ 3 = 3x + 4(x + 3) = 7x + 12$. Ecuația: $7x + 12 = x \iff 6x = -12 \iff x = -2$.

**Răspuns:** $x = -2$. *Barem: 3p expresia $7x + 12$, 2p soluția.*

#### c) $2^x \circ 4 = 2^{x+4}$

Notăm $t = 2^x > 0$. Atunci $t \circ 4 = 4t + 4(t + 4) = 8t + 16$, iar $2^{x+4} = 2^x\cdot 2^4 = 16t$.

$$8t + 16 = 16t \iff 8t = 16 \iff t = 2 \iff 2^x = 2 \iff x = 1.$$

($t = 2 > 0$, deci valoarea convine.)

**Răspuns:** $x = 1$. *Barem: 2p expresia $8\cdot 2^x + 16$, 3p rezolvarea ecuației exponențiale.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{1}{x^2 + 4x + 5}$

#### a) $f'(x) = \dfrac{-2(x + 2)}{(x^2 + 4x + 5)^2}$

Regula câtului $\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}$ cu $u = 1$, $v = x^2 + 4x + 5$:

$$f'(x) = \frac{0\cdot(x^2 + 4x + 5) - 1\cdot(2x + 4)}{(x^2 + 4x + 5)^2} = \frac{-(2x + 4)}{(x^2 + 4x + 5)^2} = \frac{-2(x + 2)}{(x^2 + 4x + 5)^2}.$$

(Numitorul nu se anulează: $x^2 + 4x + 5 = (x + 2)^2 + 1 \ge 1$.) *Barem: 2p regula de derivare, 3p finalizarea.*

#### b) $\lim\limits_{x\to+\infty}(x^2 - 1)f(x) = 1$

$$\lim_{x\to+\infty}\frac{x^2 - 1}{x^2 + 4x + 5} = \lim_{x\to+\infty}\frac{x^2\left(1 - \frac{1}{x^2}\right)}{x^2\left(1 + \frac4x + \frac{5}{x^2}\right)} = \frac{1 - 0}{1 + 0 + 0} = 1.$$

(Numărătorul și numitorul au același grad, deci limita este raportul coeficienților dominanți.) *Barem: 3p scoaterea factorului comun, 2p calculul limitei.*

#### c) $5f(x) + f(-x) \le 2$ pentru orice $x \in [0, +\infty)$

**Monotonia.** Numitorul lui $f'$ este pozitiv, deci semnul lui $f'$ este semnul lui $-2(x + 2)$: $f'(x) = 0 \iff x = -2$; $f'(x) > 0$ pe $(-\infty, -2)$, deci $f$ e crescătoare acolo, și $f'(x) < 0$ pe $(-2, +\infty)$, deci $f$ e descrescătoare acolo.

| $x$ | $-\infty$ | | $-2$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↗ | $1$ | ↘ | |

**Prima estimare.** Pentru $x \ge 0$ suntem în zona unde $f$ e descrescătoare, deci $f(x) \le f(0) = \dfrac15$, adică $5f(x) \le 1$.

**A doua estimare.** $x = -2$ este punct de maxim global, deci $f(-x) \le f(-2) = \dfrac{1}{4 - 8 + 5} = 1$ pentru orice $x$.

Adunând: $5f(x) + f(-x) \le 1 + 1 = 2$, pentru orice $x \in [0, +\infty)$. $\blacksquare$

*Barem: 2p monotonia, 3p estimările și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = 5x^2 + 2x + 1$

#### a) $\displaystyle\int_0^1 \big(f(x) - 2x\big)\,dx = \frac83$

$f(x) - 2x = 5x^2 + 1$, deci

$$\int_0^1 (5x^2 + 1)\,dx = \left(\frac{5x^3}{3} + x\right)\Big|_0^1 = \frac53 + 1 - 0 = \frac83.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^2 \frac{1}{f(x) - 5x^2}\,dx = \frac{\ln 5}{2}$

$f(x) - 5x^2 = 2x + 1$, care este pozitiv pe $[0, 2]$. Cum $(2x + 1)' = 2$, scriem integrandul ca $\dfrac12\cdot\dfrac{(2x+1)'}{2x+1}$, cu primitiva $\dfrac12\ln(2x + 1)$:

$$\int_0^2 \frac{dx}{2x + 1} = \frac12\ln(2x + 1)\Big|_0^2 = \frac12(\ln 5 - \ln 1) = \frac{\ln 5}{2}.$$

Greșeală frecventă: uitarea factorului $\dfrac12$ care compensează derivata lui $2x + 1$. *Barem: 3p primitiva, 2p calculul.*

#### c) Primitiva $G$ a lui $g(x) = \dfrac{f(x) - 2x}{\sqrt x}$ pe $(0, +\infty)$ cu $G(1) = 5$

Simplificăm: $g(x) = \dfrac{5x^2 + 1}{\sqrt x} = 5x^{\frac32} + x^{-\frac12} = 5x\sqrt x + \dfrac{1}{\sqrt x}$.

Folosim $\int x^r\,dx = \dfrac{x^{r+1}}{r+1} + C$:

$$\int g(x)\,dx = 5\cdot\frac{x^{5/2}}{5/2} + \frac{x^{1/2}}{1/2} + C = 2x^2\sqrt x + 2\sqrt x + C.$$

Deci $G(x) = 2x^2\sqrt x + 2\sqrt x + c$. Din $G(1) = 2 + 2 + c = 5$ obținem $c = 1$.

**Verificare:** $G'(x) = 2\cdot\dfrac52 x^{3/2} + 2\cdot\dfrac{1}{2\sqrt x} = 5x\sqrt x + \dfrac{1}{\sqrt x} = g(x)$ ✔.

**Răspuns:** $G(x) = 2x^2\sqrt x + 2\sqrt x + 1$, $x \in (0, +\infty)$. *Barem: 3p mulțimea primitivelor, 2p determinarea constantei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 3$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac14$ |
| I.5 | $OM = BM = 5$ |
| I.6 | $AB = 2$, $BC = 2\sqrt{10}$ |
| II.1.c | $a = 6$ |
| II.2.b | $x = -2$ |
| II.2.c | $x = 1$ |
| III.2.c | $G(x) = 2x^2\sqrt x + 2\sqrt x + 1$ |

## Ce merită reținut din model

- **Ecuații iraționale**: pune condițiile (radicandul $\ge 0$, membrul drept $\ge 0$) și verifică soluțiile la final.
- **Ecuații exponențiale cu lege de compoziție**: notează $t = 2^x > 0$ și ajungi la o ecuație de gradul I.
- **Inegalități cu funcții**: monotonia din semnul derivatei dă valorile maxime pe fiecare interval — estimează separat fiecare termen.
- **Primitive cu radical**: scrie $\sqrt x = x^{1/2}$ și împarte fiecare termen la $\sqrt x$ înainte de integrare.

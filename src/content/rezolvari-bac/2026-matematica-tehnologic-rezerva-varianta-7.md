Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_tehnologic**, subiectul de rezervă, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3\cdot(2{,}9 - 1{,}7) + 0{,}4 = 4$

Întâi paranteza: $2{,}9 - 1{,}7 = 1{,}2$. Apoi înmulțirea: $3\cdot 1{,}2 = 3{,}6$. La final adunarea:

$$3{,}6 + 0{,}4 = 4.$$

*Barem: 2p calculul parantezei, 3p finalizarea.*

### 2. $f(x) = 2x - 1$: determinați $m$ cu $f(0) + f(m) = 0$

$f(0) = -1$ și $f(m) = 2m - 1$. Ecuația devine

$$-1 + 2m - 1 = 0 \iff 2m = 2 \iff m = 1.$$

**Răspuns:** $m = 1$. *Barem: 3p valorile funcției, 2p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{3x + 6} = 6$

**Condiție:** $3x + 6 \ge 0 \iff x \ge -2$. Membrul drept este pozitiv, deci ridicăm la pătrat:

$$3x + 6 = 36 \iff 3x = 30 \iff x = 10.$$

**Verificare:** $\sqrt{30 + 6} = \sqrt{36} = 6$ ✔.

**Răspuns:** $x = 10$. *Barem: 3p ridicarea la pătrat, 2p soluția care convine.*

### 4. Prețul unui obiect de 500 de lei după o scumpire cu 30%

Scumpirea reprezintă $30\%$ din prețul inițial:

$$\frac{30}{100}\cdot 500 = 150 \text{ lei}.$$

Prețul nou: $500 + 150 = 650$ de lei. (Echivalent: $500\cdot 1{,}3 = 650$.)

**Răspuns:** 650 de lei. *Barem: 3p valoarea scumpirii, 2p prețul final.*

### 5. $M(0, 4)$, $N(2, 8)$, $P(4, 0)$: distanța dintre mijlocul lui $MP$ și $N$

Notăm cu $Q$ mijlocul lui $MP$: $Q\left(\dfrac{0 + 4}{2}, \dfrac{4 + 0}{2}\right) = Q(2, 2)$.

$$QN = \sqrt{(2 - 2)^2 + (8 - 2)^2} = \sqrt{36} = 6.$$

**Răspuns:** distanța este 6. *Barem: 2p mijlocul $Q$, 3p distanța $QN$.*

### 6. Triunghi dreptunghic în $A$, $BC = 10$, $2BC = 5AB$: arătați că $AC = 2\sqrt{21}$

Din $2BC = 5AB$: $5AB = 20 \Rightarrow AB = 4$.

$BC$ este ipotenuza, deci din teorema lui Pitagora:

$$AC^2 = BC^2 - AB^2 = 100 - 16 = 84 \Rightarrow AC = \sqrt{84} = \sqrt{4\cdot 21} = 2\sqrt{21}.$$

*Barem: 3p $AB = 4$, 2p Pitagora și finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ și $A(x) = \begin{pmatrix} x & x - 1 \\ x + 1 & x + 1 \end{pmatrix}$

#### a) $\det(A(1)) = 2$

$$A(1) = \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix}, \qquad \det(A(1)) = 1\cdot 2 - 0\cdot 2 = 2.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $2A(1) + A(7) = 3A(3)$

$$2A(1) = \begin{pmatrix} 2 & 0 \\ 4 & 4 \end{pmatrix}, \quad A(7) = \begin{pmatrix} 7 & 6 \\ 8 & 8 \end{pmatrix} \Rightarrow 2A(1) + A(7) = \begin{pmatrix} 9 & 6 \\ 12 & 12 \end{pmatrix}.$$

$$3A(3) = 3\begin{pmatrix} 3 & 2 \\ 4 & 4 \end{pmatrix} = \begin{pmatrix} 9 & 6 \\ 12 & 12 \end{pmatrix}.$$

Matricele sunt egale. *Barem: 3p suma, 2p finalizarea.*

#### c) $x, y$ reale cu $\big(A(x) - (2x + 1)I_2\big)\cdot A(2) = yI_2$

Scădem $2x + 1$ doar de pe diagonala principală:

$$A(x) - (2x + 1)I_2 = \begin{pmatrix} x - 2x - 1 & x - 1 \\ x + 1 & x + 1 - 2x - 1 \end{pmatrix} = \begin{pmatrix} -x - 1 & x - 1 \\ x + 1 & -x \end{pmatrix}.$$

Cu $A(2) = \begin{pmatrix} 2 & 1 \\ 3 & 3 \end{pmatrix}$, produsul (linie cu coloană) este

$$\begin{pmatrix} 2(-x-1) + 3(x-1) & (-x-1) + 3(x-1) \\ 2(x+1) - 3x & (x+1) - 3x \end{pmatrix} = \begin{pmatrix} x - 5 & 2x - 4 \\ 2 - x & 1 - 2x \end{pmatrix}.$$

Egalăm cu $yI_2 = \begin{pmatrix} y & 0 \\ 0 & y \end{pmatrix}$:

- elementele din afara diagonalei: $2x - 4 = 0$ și $2 - x = 0$, deci $x = 2$;
- diagonala: $y = x - 5 = -3$ și $y = 1 - 2x = -3$ — consistent.

**Răspuns:** $x = 2$, $y = -3$. *Barem: 3p calculul produsului, 2p determinarea lui $x$ și $y$.*

### 2. Legea $x * y = x + y - xy + 1$

#### a) $2 * 3 = 0$

$$2 * 3 = 2 + 3 - 2\cdot 3 + 1 = 2 + 3 - 6 + 1 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * 5 = 10$

$x * 5 = x + 5 - 5x + 1 = -4x + 6$. Ecuația: $-4x + 6 = 10 \iff -4x = 4 \iff x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p expresia $-4x + 6$, 2p soluția.*

#### c) Numerele naturale nenule $n$ pentru care $N = \dfrac3n * (3 + n)$ este natural

$$N = \frac3n + 3 + n - \frac3n(3 + n) + 1 = \frac3n + n + 4 - \frac9n - 3 = n + 1 - \frac6n.$$

Cum $n + 1$ este natural, $N$ este întreg doar dacă $\dfrac6n$ este întreg, adică $n$ divide 6: $n \in \{1, 2, 3, 6\}$. Verificăm că $N \ge 0$:

- $n = 1$: $N = 2 - 6 = -4 \notin \mathbb N$ — respins;
- $n = 2$: $N = 3 - 3 = 0$ ✔;
- $n = 3$: $N = 4 - 2 = 2$ ✔;
- $n = 6$: $N = 7 - 1 = 6$ ✔.

**Răspuns:** $n \in \{2, 3, 6\}$. Capcana: $n = 1$ dă un număr întreg, dar negativ, deci nu natural. *Barem: 2p expresia lui $N$, 3p determinarea valorilor.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac3x - 1 + 3\ln x$

#### a) $f'(x) = \dfrac{3(x - 1)}{x^2}$

Folosim $\left(\dfrac1x\right)' = -\dfrac{1}{x^2}$ și $(\ln x)' = \dfrac1x$:

$$f'(x) = -\frac{3}{x^2} + \frac3x = \frac{-3 + 3x}{x^2} = \frac{3(x - 1)}{x^2}, \quad x \in (0, +\infty).$$

*Barem: 3p derivarea termenilor, 2p aducerea la forma cerută.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x} = 0$

Separăm termenii:

$$\frac{f(x)}{x} = \frac{3}{x^2} - \frac1x + 3\cdot\frac{\ln x}{x}.$$

Primii doi termeni tind la 0. Pentru $\dfrac{\ln x}{x}$ avem nedeterminarea $\dfrac\infty\infty$; cu l'Hôpital, $\lim\limits_{x\to+\infty}\dfrac{\ln x}{x} = \lim\limits_{x\to+\infty}\dfrac{1/x}{1} = 0$. Deci limita este $0 - 0 + 0 = 0$.

(Baremul aplică direct l'Hôpital întregului raport: $\lim \dfrac{f'(x)}{1} = \lim \dfrac{3(x-1)}{x^2} = 0$ — la fel de corect, fiindcă $f(x) \to +\infty$.) *Barem: 3p aplicarea l'Hôpital, 2p calculul limitei.*

#### c) $\ln x \ge 1 - \dfrac1x$ pentru orice $x \in (0, +\infty)$

Din a): $f'(x) = 0 \iff x = 1$. Pe $(0, 1]$, $x - 1 \le 0$, deci $f' \le 0$ și $f$ e descrescătoare; pe $[1, +\infty)$, $f' \ge 0$ și $f$ e crescătoare. Prin urmare $x = 1$ este punct de minim global:

$$f(x) \ge f(1) = 3 - 1 + 0 = 2, \quad \text{pentru orice } x > 0.$$

Rescriem inegalitatea: $\dfrac3x - 1 + 3\ln x \ge 2 \iff 3\ln x \ge 3 - \dfrac3x \iff \ln x \ge 1 - \dfrac1x$. $\blacksquare$

Ideea-cheie: inegalitatea cerută este exact $f(x) \ge f(1)$, rescrisă. *Barem: 2p monotonia, 3p minimul și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 4x + 3 - 6\sqrt x$

#### a) $\displaystyle\int_1^2 \big(f(x) - 3 + 6\sqrt x\big)\,dx = 6$

Integrandul se simplifică: $f(x) - 3 + 6\sqrt x = 4x$.

$$\int_1^2 4x\,dx = 2x^2\Big|_1^2 = 8 - 2 = 6.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^4 \frac{4x - f(x)}{\sqrt x}\,dx = 12$

$4x - f(x) = -3 + 6\sqrt x$, deci integrandul este $\dfrac{-3}{\sqrt x} + 6$. Cum $\left(\sqrt x\right)' = \dfrac{1}{2\sqrt x}$, o primitivă a lui $\dfrac{1}{\sqrt x}$ este $2\sqrt x$:

$$\int_1^4 \left(-\frac{3}{\sqrt x} + 6\right)dx = \left(-6\sqrt x + 6x\right)\Big|_1^4 = (-12 + 24) - (-6 + 6) = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Orice primitivă $G$ a lui $g(x) = f(x)\sqrt x$ este convexă

$G$ este primitivă a lui $g$, deci $G' = g$ și $G'' = g'$. $G$ este convexă pe $(0, +\infty)$ dacă $G''(x) = g'(x) \ge 0$ pentru orice $x > 0$.

Derivăm produsul $g(x) = (4x + 3 - 6\sqrt x)\cdot\sqrt x$:

$$g'(x) = \left(4 - \frac{3}{\sqrt x}\right)\sqrt x + (4x + 3 - 6\sqrt x)\cdot\frac{1}{2\sqrt x} = 4\sqrt x - 3 + \frac{4x + 3 - 6\sqrt x}{2\sqrt x}.$$

Aducem la numitorul $2\sqrt x$:

$$g'(x) = \frac{8x - 6\sqrt x + 4x + 3 - 6\sqrt x}{2\sqrt x} = \frac{12x - 12\sqrt x + 3}{2\sqrt x} = \frac{3\left(4x - 4\sqrt x + 1\right)}{2\sqrt x} = \frac{3\left(2\sqrt x - 1\right)^2}{2\sqrt x}.$$

Numărătorul este un pătrat (înmulțit cu 3), deci $\ge 0$, iar numitorul este pozitiv. Rezultă $G''(x) \ge 0$ pentru orice $x \in (0, +\infty)$, deci orice primitivă $G$ este convexă. $\blacksquare$

(Alternativ: $g(x) = 4x\sqrt x + 3\sqrt x - 6x$, deci $g'(x) = 6\sqrt x + \dfrac{3}{2\sqrt x} - 6$ — același rezultat.) *Barem: 3p calculul lui $G''$, 2p semnul și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 1$ |
| I.3 | $x = 10$ |
| I.4 | 650 de lei |
| I.5 | 6 |
| I.6 | $AB = 4$, $AC = 2\sqrt{21}$ |
| II.1.c | $x = 2$, $y = -3$ |
| II.2.b | $x = -1$ |
| II.2.c | $n \in \{2, 3, 6\}$ |
| III.1.c | $f(x) \ge f(1) = 2$ |
| III.2.c | $G''(x) = \frac{3(2\sqrt x - 1)^2}{2\sqrt x} \ge 0$ |

## Ce merită reținut din varianta 7

- **Procente**: o scumpire cu $p\%$ înseamnă înmulțirea prețului cu $1 + \frac{p}{100}$.
- **Condiții de naturalitate**: după ce faci expresia întreagă, verifică și semnul — un număr întreg negativ nu e natural.
- **Inegalități cu logaritmi**: construiește funcția potrivită și arată că valoarea minimă este exact cea cerută.
- **Convexitatea unei primitive**: $G'' = g'$, deci studiezi semnul derivatei lui $g$; caută un pătrat perfect la numărător.

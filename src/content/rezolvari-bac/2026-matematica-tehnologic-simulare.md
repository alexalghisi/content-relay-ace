Rezolvarea completă a subiectului de la **simularea națională** a **Bacalaureatului 2026 la Matematică M_tehnologic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(3 + \dfrac35\right) : 4 + \dfrac{1}{10} = 1$

Paranteza: $3 + \dfrac35 = \dfrac{15}{5} + \dfrac35 = \dfrac{18}{5}$. Împărțirea la 4: $\dfrac{18}{5}\cdot\dfrac14 = \dfrac{18}{20} = \dfrac{9}{10}$.

$$\frac{9}{10} + \frac{1}{10} = \frac{10}{10} = 1.$$

*Barem: 3p calculul parantezei și al împărțirii, 2p finalizarea.*

### 2. $f(x) = 3x + 6$: determinați $a$ cu $f(1) + f(a) = 2f(0)$

$f(1) = 9$, $f(0) = 6$, $f(a) = 3a + 6$. Ecuația:

$$9 + 3a + 6 = 12 \iff 3a = -3 \iff a = -1.$$

**Răspuns:** $a = -1$. *Barem: 3p valorile funcției, 2p rezolvarea.*

### 3. Ecuația $\sqrt{4x - x^2} = \sqrt{3x}$

**Condiții de existență:** $3x \ge 0$ și $4x - x^2 \ge 0$, adică $x(4 - x) \ge 0 \iff x \in [0, 4]$. Deci $x \in [0, 4]$.

Ambii membri sunt nenegativi, deci ridicăm la pătrat:

$$4x - x^2 = 3x \iff x^2 - x = 0 \iff x(x - 1) = 0 \iff x \in \{0, 1\}.$$

**Verificare:** $x = 0$: $\sqrt0 = \sqrt0$ ✔; $x = 1$: $\sqrt3 = \sqrt3$ ✔. Ambele sunt în $[0, 4]$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Probabilitatea ca un număr din $A = \{0, 1, 2, \dots, 26\}$ să fie pătrat perfect

Cazuri posibile: de la 0 la 26 sunt **27** de numere (nu 26 — numărăm și pe 0).

Pătratele numerelor naturale din $A$: $0 = 0^2$, $1$, $4$, $9$, $16$, $25$ — deci 6 cazuri favorabile ($6^2 = 36 > 26$).

$$p = \frac{6}{27} = \frac29.$$

**Răspuns:** $p = \dfrac29$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(0, 4)$, $B(3, 0)$, $C(4, 7)$: triunghiul $ABC$ este dreptunghic isoscel

$$AB = \sqrt{3^2 + (-4)^2} = 5, \quad AC = \sqrt{4^2 + 3^2} = 5, \quad BC = \sqrt{1^2 + 7^2} = \sqrt{50}.$$

$AB = AC$, deci triunghiul este isoscel. În plus, $AB^2 + AC^2 = 25 + 25 = 50 = BC^2$, deci, conform reciprocei teoremei lui Pitagora, triunghiul este dreptunghic în $A$.

Așadar $ABC$ este dreptunghic isoscel. *Barem: 2p $AB$ și $AC$, 3p $BC$ și reciproca lui Pitagora.*

### 6. Arătați că $2\sin 60^\circ + \sqrt3\sin 30^\circ - 3\cos 30^\circ = 0$

Valorile: $\sin 60^\circ = \cos 30^\circ = \dfrac{\sqrt3}{2}$, $\sin 30^\circ = \dfrac12$.

$$2\cdot\frac{\sqrt3}{2} + \sqrt3\cdot\frac12 - 3\cdot\frac{\sqrt3}{2} = \sqrt3 + \frac{\sqrt3}{2} - \frac{3\sqrt3}{2} = \frac{2\sqrt3 + \sqrt3 - 3\sqrt3}{2} = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $M(a) = \begin{pmatrix} 2a & a \\ a & a - 2 \end{pmatrix}$

#### a) $\det(M(4)) = 0$

$$M(4) = \begin{pmatrix} 8 & 4 \\ 4 & 2 \end{pmatrix}, \qquad \det(M(4)) = 8\cdot 2 - 4\cdot 4 = 16 - 16 = 0.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $M(1)\cdot M(1) - M(1) = 3I_2$

$M(1) = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$. Produsul:

$$M(1)\cdot M(1) = \begin{pmatrix} 4 + 1 & 2 - 1 \\ 2 - 1 & 1 + 1 \end{pmatrix} = \begin{pmatrix} 5 & 1 \\ 1 & 2 \end{pmatrix}.$$

$$M(1)\cdot M(1) - M(1) = \begin{pmatrix} 5 - 2 & 1 - 1 \\ 1 - 1 & 2 + 1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix} = 3I_2.$$

*Barem: 3p calculul, 2p finalizarea.*

#### c) $N = \det\big(M(n) - 3(M(1))^{-1}\big)$ este natural impar pentru orice $n \in \mathbb N^*$

**Inversa lui $M(1)$.** Din b): $M(1)\cdot M(1) - M(1) = 3I_2 \iff M(1)\big(M(1) - I_2\big) = 3I_2$, deci $(M(1))^{-1} = \dfrac13\big(M(1) - I_2\big)$ și

$$3(M(1))^{-1} = M(1) - I_2 = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}.$$

(La fel se obține cu formula: $\det M(1) = -3$, $M(1)^{-1} = \dfrac{1}{-3}\begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix}$.)

**Diferența:**

$$M(n) - 3(M(1))^{-1} = \begin{pmatrix} 2n - 1 & n - 1 \\ n - 1 & n \end{pmatrix}.$$

$$N = (2n - 1)n - (n - 1)^2 = 2n^2 - n - n^2 + 2n - 1 = n^2 + n - 1 = n(n + 1) - 1.$$

$n$ și $n + 1$ sunt numere consecutive, deci unul dintre ele e par și produsul $n(n+1)$ este par. Pentru $n \ge 1$, $n(n + 1) \ge 2$, deci $N = n(n+1) - 1 \ge 1$ este natural, iar ca număr par minus 1 este impar. $\blacksquare$

*Barem: 3p calculul lui $N$, 2p justificarea parității.*

### 2. Legea $x * y = xy - 3x - 3y + 12$

#### a) $2 * 5 = 1$

$$2 * 5 = 2\cdot 5 - 3\cdot 2 - 3\cdot 5 + 12 = 10 - 6 - 15 + 12 = 1.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 4$ este elementul neutru

Trebuie verificat că $x * 4 = 4 * x = x$ pentru orice $x$ real:

$$x * 4 = 4x - 3x - 12 + 12 = x, \qquad 4 * x = 4x - 12 - 3x + 12 = x.$$

Deci $e = 4$ este elementul neutru. (Observație: legea se scrie $x * y = (x - 3)(y - 3) + 3$, formă utilă la c.) *Barem: 2p $x * 4 = x$, 3p $4 * x = x$ și concluzia.*

#### c) $a$ pentru care $(a - x) * (a - x) = (a + x) * (a + x)$ pentru orice $x$

Pentru orice $t$: $t * t = t^2 - 6t + 12$. Atunci

$$(a - x)^2 - 6(a - x) + 12 = (a + x)^2 - 6(a + x) + 12.$$

Folosind $(a + x)^2 - (a - x)^2 = 4ax$ și $-6(a+x) + 6(a-x) = -12x$, ecuația devine $0 = 4ax - 12x$, adică

$$4x(a - 3) = 0 \quad \text{pentru orice } x \in \mathbb R.$$

Pentru ca egalitatea să aibă loc și pentru $x \ne 0$, trebuie $a - 3 = 0$, deci $a = 3$.

**Răspuns:** $a = 3$. *Barem: 2p expresiile, 3p condiția și valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 - 3}{x^3}$

#### a) $f'(x) = \dfrac{9 - x^2}{x^4}$

Regula câtului:

$$f'(x) = \frac{2x\cdot x^3 - (x^2 - 3)\cdot 3x^2}{x^6} = \frac{x^2\left(2x^2 - 3x^2 + 9\right)}{x^6} = \frac{9 - x^2}{x^4}.$$

(Alternativ: $f(x) = \dfrac1x - \dfrac{3}{x^3}$, deci $f'(x) = -\dfrac{1}{x^2} + \dfrac{9}{x^4}$ — același rezultat.) *Barem: 3p derivarea, 2p simplificarea.*

#### b) Ecuația tangentei în punctul de abscisă $x = 1$

$f(1) = \dfrac{1 - 3}{1} = -2$ și $f'(1) = \dfrac{9 - 1}{1} = 8$.

Ecuația tangentei: $y - f(1) = f'(1)(x - 1)$, adică $y + 2 = 8(x - 1)$, deci

$$y = 8x - 10.$$

**Răspuns:** $y = 8x - 10$. *Barem: 2p $f(1)$ și $f'(1)$, 3p ecuația tangentei.*

#### c) $9f(2x) - f(x) \le 4$ pentru orice $x \in [1, 2]$

**Monotonia.** Semnul lui $f'$ este semnul lui $9 - x^2 = (3 - x)(3 + x)$; pe $(0, +\infty)$, $3 + x > 0$, deci $f'(x) = 0 \iff x = 3$, $f' \ge 0$ pe $(0, 3]$ ($f$ crescătoare) și $f' \le 0$ pe $[3, +\infty)$ ($f$ descrescătoare).

| $x$ | $0$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↗ | $\tfrac29$ | ↘ | |

**Estimarea lui $f(2x)$.** $x = 3$ este punct de maxim global pe $(0, +\infty)$, deci $f(2x) \le f(3) = \dfrac{9 - 3}{27} = \dfrac29$, adică $9f(2x) \le 2$.

**Estimarea lui $f(x)$.** Pentru $x \in [1, 2] \subset (0, 3]$, $f$ este crescătoare, deci $f(x) \ge f(1) = -2$, adică $-f(x) \le 2$.

Adunând: $9f(2x) - f(x) \le 2 + 2 = 4$, pentru orice $x \in [1, 2]$. $\blacksquare$

*Barem: 2p monotonia, 3p estimările și concluzia.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = x + 2 + \dfrac{2}{\sqrt{x + 3}}$

#### a) $\displaystyle\int_0^4 \left(f(x) - \frac{2}{\sqrt{x + 3}}\right)dx = 16$

Integrandul devine $x + 2$:

$$\int_0^4 (x + 2)\,dx = \left(\frac{x^2}{2} + 2x\right)\Big|_0^4 = 8 + 8 = 16.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^6 \big(f(x) - x - 2\big)\,dx = 4$

Integrandul devine $\dfrac{2}{\sqrt{x + 3}}$. Cum $\left(\sqrt{x + 3}\right)' = \dfrac{1}{2\sqrt{x + 3}}$, o primitivă este $4\sqrt{x + 3}$:

$$\int_1^6 \frac{2}{\sqrt{x + 3}}\,dx = 4\sqrt{x + 3}\Big|_1^6 = 4\cdot 3 - 4\cdot 2 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ real cu $\displaystyle\int_{-2}^1 f'(x)\left(1 + \frac{1}{f(x)}\right)dx = \ln\left(2e^a\right)$

Desfacem paranteza:

$$\int_{-2}^1 f'(x)\,dx + \int_{-2}^1 \frac{f'(x)}{f(x)}\,dx = f(x)\Big|_{-2}^1 + \ln|f(x)|\Big|_{-2}^1.$$

(Prima integrală: $f$ este o primitivă a lui $f'$. A doua: $\ln|f|$ este o primitivă a lui $\dfrac{f'}{f}$.)

Valorile: $f(1) = 1 + 2 + \dfrac{2}{\sqrt4} = 4$ și $f(-2) = -2 + 2 + \dfrac{2}{\sqrt1} = 2$; $f$ este pozitivă pe $[-2, 1]$ (ca sumă a termenilor $x + 2 \ge 0$ și $\frac{2}{\sqrt{x+3}} > 0$), deci $\dfrac1f$ e definită acolo.

$$I = (4 - 2) + (\ln 4 - \ln 2) = 2 + \ln 2.$$

Membrul drept: $\ln\left(2e^a\right) = \ln 2 + \ln e^a = \ln 2 + a$. Egalând: $a + \ln 2 = 2 + \ln 2 \Rightarrow a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p determinarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = -1$ |
| I.3 | $x \in \{0, 1\}$ |
| I.4 | $p = \tfrac29$ |
| I.5 | $AB = AC = 5$, $BC = 5\sqrt2$ |
| II.1.c | $N = n(n+1) - 1$, impar |
| II.2.c | $a = 3$ |
| III.1.b | $y = 8x - 10$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din simulare

- **Numărarea elementelor**: mulțimea $\{0, 1, \dots, 26\}$ are 27 de elemente — capcană clasică la probabilități.
- **Inversa din relația matriceală**: dacă $M^2 - M = 3I_2$, atunci $M^{-1} = \frac13(M - I_2)$, fără calcul de determinant.
- **Paritate**: produsul a două numere consecutive este par.
- **Integrale de forma $\int f'\left(1 + \frac1f\right)$**: primitivele sunt $f$ și $\ln|f|$ — calculezi doar valorile lui $f$ la capete.

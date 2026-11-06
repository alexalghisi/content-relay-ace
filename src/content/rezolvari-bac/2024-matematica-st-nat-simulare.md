Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, simularea națională. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 3 - i$, $z_2 = 1 + i$: arătați că $z_1 + iz_2 = 2$

Calculăm întâi $iz_2 = i(1 + i) = i + i^2 = i - 1$. Atunci

$$z_1 + iz_2 = 3 - i + i - 1 = 2.$$

(Am folosit $i^2 = -1$.) *Barem: 3p calculul lui $iz_2$ și înlocuirea, 2p finalizarea.*

### 2. $f(x) = 5 - x$, $g(x) = x + 2$: determinați $a$ cu $f(a) = g(a+1)$

$f(a) = 5 - a$, iar $g(a + 1) = (a + 1) + 2 = a + 3$. Ecuația:

$$5 - a = a + 3 \iff 2 = 2a \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 2p expresiile, 3p rezolvarea.*

### 3. Ecuația $\log_3(4x - x^2) = 1$

**Condiția de existență:** $4x - x^2 > 0 \iff x(4 - x) > 0 \iff x \in (0, 4)$.

Din definiția logaritmului, $\log_3 u = 1 \iff u = 3^1 = 3$:

$$4x - x^2 = 3 \iff x^2 - 4x + 3 = 0 \iff (x-1)(x-3) = 0.$$

Soluțiile $x = 1$ și $x = 3$ sunt în $(0, 4)$, deci convin (verificare: $4 - 1 = 3$, $12 - 9 = 3$).

**Răspuns:** $x \in \{1, 3\}$. *Barem: 3p ecuația de gradul II, 2p soluțiile care convin.*

### 4. Numere naturale impare de două cifre, cu cifra zecilor pară, formate cu cifre din $A = \{1, 2, 3, 4, 5, 6, 7\}$

- Numărul este impar $\Rightarrow$ cifra unităților este impară: $1, 3, 5, 7$ — **4 moduri**.
- Cifra zecilor este pară: $2, 4, 6$ — **3 moduri**.

Enunțul nu cere cifre distincte, dar oricum o cifră pară și una impară sunt automat diferite. Cu regula produsului: $4 \cdot 3 = 12$ numere.

**Răspuns:** 12 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.*

### 5. $A(0,3)$, $B(2,0)$, $B$ mijlocul lui $OC$: distanța $AC$

Dacă $C(x_C, y_C)$ și $B$ este mijlocul lui $OC$, atunci $\dfrac{0 + x_C}{2} = 2$ și $\dfrac{0 + y_C}{2} = 0$, deci $C(4, 0)$.

$$AC = \sqrt{(4 - 0)^2 + (0 - 3)^2} = \sqrt{16 + 9} = 5.$$

**Răspuns:** $AC = 5$. *Barem: 2p coordonatele lui $C$, 3p distanța.*

### 6. Triunghi dreptunghic în $A$, $B = \dfrac{\pi}{6}$, mediana $AM = 4$: arătați că aria este $8\sqrt3$

Mediana din vârful unghiului drept este jumătate din ipotenuză, deci $BC = 2\cdot AM = 8$.

Cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză: $AC = BC\cdot\sin\dfrac{\pi}{6} = 8\cdot\dfrac12 = 4$.

Cealaltă catetă: $AB = BC\cdot\cos\dfrac{\pi}{6} = 8\cdot\dfrac{\sqrt3}{2} = 4\sqrt3$ (sau din Pitagora: $\sqrt{64 - 16} = \sqrt{48} = 4\sqrt3$).

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{4\sqrt3\cdot 4}{2} = 8\sqrt3.$$

*Barem: 2p $AC = 4$, 3p $AB = 4\sqrt3$ și aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x & 3x - 3\\ 1 - x & 3x - 2\end{pmatrix}$

#### a) $\det(A(0)) = 3$

$$A(0) = \begin{pmatrix}0 & -3\\ 1 & -2\end{pmatrix}, \qquad \det(A(0)) = 0\cdot(-2) - (-3)\cdot 1 = 3.$$

*Barem: 3p scrierea și dezvoltarea determinantului, 2p rezultatul.*

#### b) $m$ cu $A(2)\cdot A(0) + A(5) = mI_2$

$$A(2) = \begin{pmatrix}2 & 3\\ -1 & 4\end{pmatrix}, \quad A(5) = \begin{pmatrix}5 & 12\\ -4 & 13\end{pmatrix}.$$

$$A(2)\cdot A(0) = \begin{pmatrix}2\cdot 0 + 3\cdot 1 & 2\cdot(-3) + 3\cdot(-2)\\ -1\cdot 0 + 4\cdot 1 & -1\cdot(-3) + 4\cdot(-2)\end{pmatrix} = \begin{pmatrix}3 & -12\\ 4 & -5\end{pmatrix}.$$

$$A(2)A(0) + A(5) = \begin{pmatrix}8 & 0\\ 0 & 8\end{pmatrix} = 8I_2.$$

Din $8I_2 = mI_2$ rezultă $m = 8$.

**Răspuns:** $m = 8$. *Barem: 3p calculul matricelor, 2p valoarea lui $m$.*

#### c) $x$ cu $\det\big(A(x) - A(0)\cdot A(1-x)\big) = 3$

$$A(1 - x) = \begin{pmatrix}1 - x & 3(1-x) - 3\\ 1 - (1 - x) & 3(1-x) - 2\end{pmatrix} = \begin{pmatrix}1 - x & -3x\\ x & 1 - 3x\end{pmatrix}.$$

$$A(0)\cdot A(1-x) = \begin{pmatrix}0 & -3\\ 1 & -2\end{pmatrix}\begin{pmatrix}1 - x & -3x\\ x & 1 - 3x\end{pmatrix} = \begin{pmatrix}-3x & 9x - 3\\ 1 - 3x & 3x - 2\end{pmatrix}.$$

Scădem din $A(x)$:

$$A(x) - A(0)A(1-x) = \begin{pmatrix}x + 3x & 3x - 3 - 9x + 3\\ 1 - x - 1 + 3x & 0\end{pmatrix} = \begin{pmatrix}4x & -6x\\ 2x & 0\end{pmatrix}.$$

$$\det = 4x\cdot 0 - (-6x)(2x) = 12x^2.$$

$12x^2 = 3 \iff x^2 = \dfrac14 \iff x = \pm\dfrac12$.

**Răspuns:** $x \in \left\{-\dfrac12, \dfrac12\right\}$. *Barem: 3p calculul determinantului $12x^2$, 2p soluțiile.*

### 2. Pe $M = (0, +\infty)$: $x \circ y = x + y + 1 - \sqrt{xy + 1}$

#### a) $1 \circ 8 = 7$

$$1 \circ 8 = 1 + 8 + 1 - \sqrt{8 + 1} = 10 - 3 = 7.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \in M$ cu $x \circ \dfrac3x = x$

$$x \circ \frac3x = x + \frac3x + 1 - \sqrt{x\cdot\frac3x + 1} = x + \frac3x + 1 - \sqrt4 = x + \frac3x - 1.$$

Ecuația: $x + \dfrac3x - 1 = x \iff \dfrac3x = 1 \iff x = 3$, care aparține lui $M$, deci convine.

**Răspuns:** $x = 3$. *Barem: 3p simplificarea expresiei, 2p soluția.*

#### c) $n \in \mathbb N^*$ cu $\big(n \circ (n+2)\big) \circ (n+4) > \dfrac{n^2}{2}$

Observăm pătrate perfecte sub radical: $n(n+2) + 1 = (n+1)^2$, deci

$$n \circ (n + 2) = n + n + 2 + 1 - (n + 1) = n + 2.$$

Apoi $(n+2)(n+4) + 1 = n^2 + 6n + 9 = (n+3)^2$, deci

$$(n + 2) \circ (n + 4) = n + 2 + n + 4 + 1 - (n + 3) = n + 4.$$

Inecuația devine $n + 4 > \dfrac{n^2}{2} \iff n^2 - 2n - 8 < 0 \iff (n - 4)(n + 2) < 0 \iff n \in (-2, 4)$.

Cum $n$ este natural nenul: $n \in \{1, 2, 3\}$.

**Răspuns:** $n \in \{1, 2, 3\}$. *Barem: 3p calculul compunerii ($n + 4$), 2p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = (x^3 + 2x^2)e^x$

#### a) $f'(x) = x(x^2 + 5x + 4)e^x$

Regula produsului $(uv)' = u'v + uv'$, cu $(e^x)' = e^x$:

$$f'(x) = (3x^2 + 4x)e^x + (x^3 + 2x^2)e^x = (x^3 + 5x^2 + 4x)e^x = x(x^2 + 5x + 4)e^x.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = 0\cdot e^0 = 0$ și $f'(0) = 0$. Ecuația tangentei $y - f(0) = f'(0)(x - 0)$ devine

$$y = 0.$$

**Răspuns:** $y = 0$ (axa $Ox$). *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația tangentei.*

#### c) $-\dfrac{32}{e^{x+4}} \le x^2(x + 2) \le \dfrac{1}{e^{x+1}}$ pentru $x \in [-4, 0]$

Înmulțind cu $e^x > 0$, inegalitatea este echivalentă cu

$$-\frac{32}{e^4} \le x^2(x+2)e^x = f(x) \le \frac1e,$$

deci trebuie să arătăm că pe $[-4, 0]$ valorile lui $f$ stau între $-\dfrac{32}{e^4}$ și $\dfrac1e$.

$f'(x) = x(x + 1)(x + 4)e^x$ (pentru că $x^2 + 5x + 4 = (x+1)(x+4)$), cu zerourile $-4, -1, 0$.

- pe $[-4, -1]$: $x \le 0$, $x + 1 \le 0$, $x + 4 \ge 0 \Rightarrow f'(x) \ge 0$, $f$ crescătoare;
- pe $[-1, 0]$: $x \le 0$, $x + 1 \ge 0$, $x + 4 > 0 \Rightarrow f'(x) \le 0$, $f$ descrescătoare.

Valori: $f(-4) = (-64 + 32)e^{-4} = -\dfrac{32}{e^4}$, $f(-1) = (-1 + 2)e^{-1} = \dfrac1e$, $f(0) = 0$.

Maximul pe $[-4, 0]$ este $f(-1) = \dfrac1e$, iar minimul este $\min\left(f(-4), f(0)\right) = -\dfrac{32}{e^4}$. Deci $-\dfrac{32}{e^4} \le f(x) \le \dfrac1e$; împărțind prin $e^x > 0$ obținem exact inegalitatea cerută.

*Barem: 2p monotonia, 3p valorile extreme și concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = 3x^2 - \dfrac{2}{x+1}$

#### a) $\displaystyle\int_1^2\left(f(x) + \frac{2}{x+1}\right)dx = 7$

Fracția se reduce: $f(x) + \dfrac{2}{x+1} = 3x^2$.

$$\int_1^2 3x^2\,dx = x^3\Big|_1^2 = 8 - 1 = 7.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^5\left(3x^2 - f(x)\right)dx = 2\ln 3$

$3x^2 - f(x) = \dfrac{2}{x + 1} = 2\cdot\dfrac{(x+1)'}{x+1}$, deci o primitivă este $2\ln(x + 1)$ ($x + 1 > 0$ pe interval):

$$\int_1^5 \frac{2}{x+1}\,dx = 2\ln(x + 1)\Big|_1^5 = 2\ln 6 - 2\ln 2 = 2\ln\frac62 = 2\ln 3.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $g(x) = f(\sqrt x - 1)$ pe $(0, +\infty)$: $\displaystyle\int_1^4\big(a + bg(x)\big)g'(x)\,dx = 4a$

($g$ este bine definită: $\sqrt x - 1 > -1$ pentru $x > 0$.) Separăm integrala:

$$\int_1^4 a\,g'(x)\,dx + \int_1^4 b\,g(x)g'(x)\,dx = a\,g(x)\Big|_1^4 + b\,\frac{g^2(x)}{2}\Big|_1^4,$$

pentru că $\left(\dfrac{g^2}{2}\right)' = g\,g'$. Deci integrala este

$$a\big(g(4) - g(1)\big) + \frac b2\big(g^2(4) - g^2(1)\big).$$

Calculăm valorile: $g(1) = f(0) = 0 - 2 = -2$ și $g(4) = f(1) = 3 - 1 = 2$.

Atunci $g(4) - g(1) = 4$ și $g^2(4) - g^2(1) = 4 - 4 = 0$, deci integrala este $4a + 0 = 4a$, oricare ar fi $a$ și $b$.

*Barem: 3p primitivele $a\,g$ și $\frac b2 g^2$, 2p valorile $g(1)$, $g(4)$ și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 1$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | 12 numere |
| I.5 | $AC = 5$ |
| I.6 | $\mathcal A = 8\sqrt3$ |
| II.1.b | $m = 8$ |
| II.1.c | $x = \pm\tfrac12$ |
| II.2.b | $x = 3$ |
| II.2.c | $n \in \{1, 2, 3\}$ |
| III.1.b | $y = 0$ |

## Ce merită reținut din această simulare

- **Legea cu radical**: caută pătrate perfecte sub radical — $n(n+2) + 1 = (n+1)^2$.
- **Inegalități cu exponențiale**: înmulțește cu $e^x$ ca să ajungi la valorile extreme ale lui $f$ pe interval.
- **Integrale de forma $\int g\,g'$**: primitiva este $\frac{g^2}{2}$; aici termenul cu $b$ dispare pentru că $g(4) = -g(1)$.

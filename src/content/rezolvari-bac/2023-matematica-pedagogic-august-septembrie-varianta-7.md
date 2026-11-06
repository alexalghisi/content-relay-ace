Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_pedagogic**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt{50} - 5\left(\sqrt2 - 1\right) = 5$

Scoatem factorul de sub radical: $\sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt2$. Desfacem paranteza: $5\left(\sqrt2 - 1\right) = 5\sqrt2 - 5$.

$$\sqrt{50} - 5\left(\sqrt2 - 1\right) = 5\sqrt2 - 5\sqrt2 + 5 = 5.$$

Atenție la semn: minusul din fața parantezei schimbă $-5$ în $+5$. *Barem: 3p $\sqrt{50} = 5\sqrt2$ și desfacerea parantezei, 2p finalizarea.*

### 2. $f(x) = x^2 - 3x + a$: arătați că $f(1) = f(2)$ pentru orice $a$

$$f(1) = 1 - 3 + a = a - 2, \qquad f(2) = 4 - 6 + a = a - 2.$$

Deci $f(1) = f(2)$ pentru orice $a$ real. (Explicație geometrică: vârful parabolei are abscisa $\frac{3}{2}$, iar $1$ și $2$ sunt simetrice față de $\frac32$.) *Barem: 2p $f(1)$, 3p $f(2)$ și concluzia.*

### 3. Ecuația $\log_3(x + 2) = \log_3(4 - x)$

**Condiții de existență:** $x + 2 > 0$ și $4 - x > 0$, adică $x \in (-2, 4)$.

Logaritmul în bază 3 este injectiv, deci argumentele sunt egale:

$$x + 2 = 4 - x \iff 2x = 2 \iff x = 1.$$

$x = 1 \in (-2, 4)$, deci convine (ambele argumente sunt egale cu 3).

**Răspuns:** $x = 1$. *Barem: 2p egalarea argumentelor, 3p soluția care convine.*

### 4. Probabilitatea ca un număr de două cifre să aibă produsul cifrelor 8

Numerele naturale de două cifre sunt $10, 11, \dots, 99$: **90** de cazuri posibile.

Scriem $8$ ca produs de două cifre (prima nenulă): $8 = 1\cdot 8 = 2\cdot 4 = 4\cdot 2 = 8\cdot 1$. Numerele: $18, 24, 42, 81$ — **4** cazuri favorabile.

$$p = \frac{4}{90} = \frac{2}{45}.$$

**Răspuns:** $p = \dfrac{2}{45}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3, a)$ este mijlocul segmentului $BC$, cu $B(1,0)$, $C(5,2)$

Coordonatele mijlocului sunt mediile coordonatelor capetelor:

$$x_A = \frac{1 + 5}{2} = 3 \ \text{✔}, \qquad a = y_A = \frac{0 + 2}{2} = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p formula mijlocului, 2p valoarea lui $a$.*

### 6. Arătați că $\sin 30^\circ + \sqrt2\cos 45^\circ + \cos 60^\circ = 2$

Valorile: $\sin 30^\circ = \dfrac12$, $\cos 45^\circ = \dfrac{\sqrt2}{2}$, $\cos 60^\circ = \dfrac12$.

$$\frac12 + \sqrt2\cdot\frac{\sqrt2}{2} + \frac12 = \frac12 + \frac{2}{2} + \frac12 = \frac12 + 1 + \frac12 = 2.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

Legea asociativă pe $\mathbb R$: $x * y = 3(4 - x - y) + xy$.

### 1. Arătați că $3 * 0 = 3$

$$3 * 0 = 3(4 - 3 - 0) + 3\cdot 0 = 3\cdot 1 + 0 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

### 2. Demonstrați că $x * y = (x - 3)(y - 3) + 3$

Desfacem paranteza și regrupăm (scriem $12 = 9 + 3$):

$$x * y = 12 - 3x - 3y + xy = xy - 3x - 3y + 9 + 3.$$

Factorizăm primii patru termeni:

$$xy - 3x - 3y + 9 = x(y - 3) - 3(y - 3) = (x - 3)(y - 3),$$

deci $x * y = (x-3)(y-3) + 3$ pentru orice $x, y$ reali. *Barem: 2p regruparea, 3p factorizarea.*

### 3. $e = 4$ este elementul neutru

Folosim forma de la 2:

$$x * 4 = (x - 3)(4 - 3) + 3 = x - 3 + 3 = x, \qquad 4 * x = (4 - 3)(x - 3) + 3 = x,$$

pentru orice $x \in \mathbb R$. Deci $e = 4$ este element neutru. (Trebuie verificate ambele ordini; legea fiind comutativă, ele coincid, dar scrie-le pe amândouă.) *Barem: 2p $x * 4 = x$, 3p $4 * x = x$ și concluzia.*

### 4. $\dfrac73$ este simetricul lui $\dfrac32$

Trebuie arătat că $\frac73 * \frac32 = \frac32 * \frac73 = e = 4$:

$$\frac73 * \frac32 = \left(\frac73 - 3\right)\left(\frac32 - 3\right) + 3 = \left(-\frac23\right)\left(-\frac32\right) + 3 = 1 + 3 = 4,$$

și analog $\frac32 * \frac73 = \left(-\frac32\right)\left(-\frac23\right) + 3 = 4$. Deci $\frac73$ este simetricul lui $\frac32$. *Barem: 2p primul produs, 3p al doilea și concluzia.*

### 5. Ecuația $9^x * 3^x = 3$

Cu forma de la 2: $9^x * 3^x = (9^x - 3)(3^x - 3) + 3$. Ecuația devine

$$(9^x - 3)(3^x - 3) = 0.$$

- $9^x = 3 \iff 3^{2x} = 3^1 \iff 2x = 1 \iff x = \dfrac12$;
- $3^x = 3 \iff x = 1$.

**Răspuns:** $x \in \left\{\dfrac12, 1\right\}$. *Barem: 2p forma produsului, 3p soluțiile.*

### 6. Calculați $3 * 4 * 5 * \dots * 2023$

Observăm că $3$ este element „absorbant”: $3 * x = (3 - 3)(x - 3) + 3 = 0 + 3 = 3$ pentru orice $x$ real.

Legea fiind asociativă, grupăm:

$$3 * 4 * 5 * \dots * 2023 = 3 * (4 * 5 * \dots * 2023) = 3,$$

oricare ar fi valoarea parantezei.

**Răspuns:** $3$. *Barem: 2p $3 * x = 3$, 3p concluzia.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix}-1 & 2\\ 2 & 1\end{pmatrix}$, $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $B(a) = \begin{pmatrix}a+2 & 1\\ 1 & a\end{pmatrix}$.

### 1. $\det(B(0)) = -1$

$$\det(B(0)) = \begin{vmatrix}2 & 1\\ 1 & 0\end{vmatrix} = 2\cdot 0 - 1\cdot 1 = -1.$$

*Barem: 3p scrierea și dezvoltarea, 2p rezultatul.*

### 2. $A\cdot A = 5I_2$

Înmulțim linie cu coloană:

$$A\cdot A = \begin{pmatrix}(-1)(-1) + 2\cdot 2 & (-1)\cdot 2 + 2\cdot 1\\ 2\cdot(-1) + 1\cdot 2 & 2\cdot 2 + 1\cdot 1\end{pmatrix} = \begin{pmatrix}5 & 0\\ 0 & 5\end{pmatrix} = 5I_2.$$

*Barem: 3p calculul produsului, 2p concluzia.*

### 3. $a$ real pentru care $\det(B(a) + A) = 0$

$$B(a) + A = \begin{pmatrix}a + 1 & 3\\ 3 & a + 1\end{pmatrix}, \qquad \det(B(a) + A) = (a+1)^2 - 9.$$

$(a+1)^2 = 9 \iff a + 1 = \pm 3 \iff a \in \{2, -4\}$.

**Răspuns:** $a = 2$ sau $a = -4$. *Barem: 3p determinantul, 2p valorile.*

### 4. $a$ real pentru care $B(a)\cdot B(-2) = B(0) - I_2$

$B(-2) = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}$, deci

$$B(a)\cdot B(-2) = \begin{pmatrix}(a+2)\cdot 0 + 1\cdot 1 & (a+2)\cdot 1 + 1\cdot(-2)\\ 1\cdot 0 + a\cdot 1 & 1\cdot 1 + a\cdot(-2)\end{pmatrix} = \begin{pmatrix}1 & a\\ a & 1 - 2a\end{pmatrix}.$$

$B(0) - I_2 = \begin{pmatrix}2 & 1\\ 1 & 0\end{pmatrix} - \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix} = \begin{pmatrix}1 & 1\\ 1 & -1\end{pmatrix}$.

Egalând elementele: $a = 1$ și $1 - 2a = -1 \Rightarrow a = 1$ — consistent.

**Răspuns:** $a = 1$. *Barem: 2p produsul, 3p identificarea și valoarea lui $a$.*

### 5. $B(a - 1)$ este inversabilă pentru orice $a$ rațional

$$B(a-1) = \begin{pmatrix}a + 1 & 1\\ 1 & a - 1\end{pmatrix}, \qquad \det(B(a-1)) = (a+1)(a-1) - 1 = a^2 - 2.$$

Dacă $\det = 0$, atunci $a^2 = 2$, adică $a = \pm\sqrt2$, numere iraționale. Pentru $a \in \mathbb Q$ avem deci $a^2 - 2 \ne 0$, iar o matrice cu determinant nenul este inversabilă. *Barem: 2p determinantul, 3p justificarea.*

### 6. $X \in \mathcal M_2(\mathbb R)$ cu $X\cdot B(0) = A$

$\det(B(0)) = -1 \ne 0$, deci $B(0)$ este inversabilă și $X = A\cdot B(0)^{-1}$ (înmulțim la **dreapta** cu inversa, pentru că $B(0)$ e la dreapta lui $X$).

Pentru $\begin{pmatrix}p & q\\ r & s\end{pmatrix}$ inversa este $\dfrac{1}{ps - qr}\begin{pmatrix}s & -q\\ -r & p\end{pmatrix}$:

$$B(0)^{-1} = \frac{1}{-1}\begin{pmatrix}0 & -1\\ -1 & 2\end{pmatrix} = \begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix}.$$

$$X = \begin{pmatrix}-1 & 2\\ 2 & 1\end{pmatrix}\begin{pmatrix}0 & 1\\ 1 & -2\end{pmatrix} = \begin{pmatrix}2 & -5\\ 1 & 0\end{pmatrix}.$$

Verificare: $X\cdot B(0) = \begin{pmatrix}2 & -5\\ 1 & 0\end{pmatrix}\begin{pmatrix}2 & 1\\ 1 & 0\end{pmatrix} = \begin{pmatrix}-1 & 2\\ 2 & 1\end{pmatrix} = A$ ✔.

**Răspuns:** $X = \begin{pmatrix}2 & -5\\ 1 & 0\end{pmatrix}$. *Barem: 2p inversa lui $B(0)$, 3p calculul lui $X$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 1$ |
| I.4 | $p = \frac{2}{45}$ |
| I.5 | $a = 1$ |
| II.5 | $x \in \{\frac12, 1\}$ |
| II.6 | $3$ |
| III.3 | $a \in \{-4, 2\}$ |
| III.4 | $a = 1$ |
| III.6 | $X = \begin{pmatrix}2 & -5\\ 1 & 0\end{pmatrix}$ |

## Ce merită reținut din varianta 7

- **Legi de forma** $(x-k)(y-k)+k$: elementul $k$ este absorbant, $k+1$ este neutru — calculele lungi devin imediate.
- **Ecuații exponențiale cu lege**: produsul se anulează când unul din factori e zero; scrie bazele ca puteri ale lui 3.
- **Ecuația matriceală** $X\cdot B = A$ se rezolvă cu $X = A\cdot B^{-1}$, nu $B^{-1}\cdot A$.

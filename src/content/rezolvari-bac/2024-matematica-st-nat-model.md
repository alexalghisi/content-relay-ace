Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, **modelul oficial** publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $0{,}5 + 10\cdot(1 - 0{,}75) = 3$

Respectăm ordinea operațiilor: întâi paranteza, apoi înmulțirea, la final adunarea.

$$0{,}5 + 10\cdot 0{,}25 = 0{,}5 + 2{,}5 = 3.$$

*Barem: 2p calculul parantezei și al produsului, 3p finalizarea.*

### 2. $f(x) = 2x - 1$, $g(x) = x + 1$: arătați că $f(m) + g(-m) = m$ pentru orice $m$ real

$f(m) = 2m - 1$ și $g(-m) = -m + 1$. Adunăm:

$$f(m) + g(-m) = 2m - 1 - m + 1 = m, \text{ pentru orice } m \in \mathbb R. \ \blacksquare$$

*Barem: 2p $f(m)$, 3p $g(-m)$ și finalizarea.*

### 3. Ecuația $\sqrt{x^2 + 6} = \sqrt{5x}$

**Condiții de existență:** $5x \ge 0$, adică $x \ge 0$ ($x^2 + 6 > 0$ mereu).

Ridicăm la pătrat (ambii membri sunt nenegativi): $x^2 + 6 = 5x \iff x^2 - 5x + 6 = 0 \iff (x - 2)(x - 3) = 0$, deci $x = 2$ sau $x = 3$.

**Verificare:** $x = 2$: $\sqrt{10} = \sqrt{10}$ ✔; $x = 3$: $\sqrt{15} = \sqrt{15}$ ✔. Ambele sunt pozitive, deci convin.

**Răspuns:** $x \in \{2, 3\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. $A = \{1, 2, \dots, 9\}$: probabilitatea ca numărul ales să fie divizor al lui 30

**Cazuri posibile:** 9.

**Cazuri favorabile:** divizorii lui $30 = 2\cdot3\cdot5$ din $A$ sunt $1, 2, 3, 5, 6$ (următorul divizor, $10$, nu e în $A$) — 5 numere.

$$p = \frac59.$$

**Răspuns:** $p = \dfrac59$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,1)$, $B(2,2)$, $C(4,0)$: triunghiul $ABC$ este dreptunghic în $B$

$$m_{AB} = \frac{2 - 1}{2 - 1} = 1, \qquad m_{BC} = \frac{0 - 2}{4 - 2} = -1.$$

$m_{AB}\cdot m_{BC} = -1$, deci $AB \perp BC$ și triunghiul este dreptunghic în $B$. $\blacksquare$

*Barem: 2p $m_{AB}$, 3p $m_{BC}$ și concluzia.*

### 6. $E(x) = 3\cos^2 x - \cos\dfrac x2\cdot\sin x$: arătați că $E\left(\dfrac\pi3\right) = 0$

Pentru $x = \dfrac\pi3$: $\cos\dfrac\pi3 = \dfrac12$, $\cos\dfrac\pi6 = \dfrac{\sqrt3}{2}$, $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$.

$$E\left(\frac\pi3\right) = 3\cdot\frac14 - \frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} = \frac34 - \frac34 = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix}x & -2x\\ 1 & x - 6\end{pmatrix}$

#### a) $\det(A(6)) = 12$

$A(6) = \begin{pmatrix}6 & -12\\ 1 & 0\end{pmatrix}$:

$$\det(A(6)) = 6\cdot 0 - (-12)\cdot 1 = 0 + 12 = 12.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $a$ pentru care $A(4)\cdot A(4) = aA(4)$

$A(4) = \begin{pmatrix}4 & -8\\ 1 & -2\end{pmatrix}$.

$$A(4)\cdot A(4) = \begin{pmatrix}16 - 8 & -32 + 16\\ 4 - 2 & -8 + 4\end{pmatrix} = \begin{pmatrix}8 & -16\\ 2 & -4\end{pmatrix} = 2A(4).$$

Din $aA(4) = 2A(4)$ și $A(4) \ne O_2$ rezultă $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p produsul, 2p valoarea lui $a$.*

#### c) Perechile $(m, n)$ de naturale nenule, $m < n$, cu $\det(A(m) + A(n)) = 0$

$$A(m) + A(n) = \begin{pmatrix}m + n & -2m - 2n\\ 2 & m + n - 12\end{pmatrix}.$$

Notăm $s = m + n$. Atunci

$$\det(A(m) + A(n)) = s(s - 12) - 2\cdot(-2s) = s^2 - 12s + 4s = s(s - 8).$$

Condiția $s(s - 8) = 0$, cu $s = m + n \ge 3 > 0$, dă $m + n = 8$. Cu $1 \le m < n$: $(1, 7)$, $(2, 6)$, $(3, 5)$ (perechea $(4,4)$ nu respectă $m < n$).

**Răspuns:** $(m, n) \in \{(1,7), (2,6), (3,5)\}$. *Barem: 2p determinantul, 3p perechile.*

### 2. Legea $x * y = xy(x + y - xy)$

#### a) $1 * 3 = 3$

$$1 * 3 = 1\cdot3\cdot(1 + 3 - 1\cdot3) = 3\cdot 1 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * 2 = -x^2$

$x * 2 = 2x(x + 2 - 2x) = 2x(2 - x)$. Ecuația:

$$2x(2 - x) = -x^2 \iff 4x - 2x^2 + x^2 = 0 \iff x(4 - x) = 0 \iff x \in \{0, 4\}.$$

**Răspuns:** $x \in \{0, 4\}$. *Barem: 2p expresia lui $x * 2$, 3p soluțiile.*

#### c) $m$ întreg nenul cu $\dfrac{1}{2m} * m = m$

Produsul celor două elemente este $\dfrac{1}{2m}\cdot m = \dfrac12$. Deci

$$\frac{1}{2m} * m = \frac12\left(\frac{1}{2m} + m - \frac12\right) = \frac12\cdot\frac{1 + 2m^2 - m}{2m} = \frac{2m^2 - m + 1}{4m}.$$

Ecuația $\dfrac{2m^2 - m + 1}{4m} = m \iff 2m^2 - m + 1 = 4m^2 \iff 2m^2 + m - 1 = 0$.

$\Delta = 1 + 8 = 9$, deci $m = \dfrac{-1 \pm 3}{4}$, adică $m = \dfrac12$ sau $m = -1$. Doar $m = -1$ este întreg.

**Răspuns:** $m = -1$. *Barem: 2p expresia, 3p rezolvarea și alegerea soluției întregi.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 - 2}{x} - 3\ln x$

#### a) $f'(x) = \dfrac{x^2 - 3x + 2}{x^2}$

$$f'(x) = \frac{2x\cdot x - (x^2 - 2)}{x^2} - \frac3x = \frac{x^2 + 2}{x^2} - \frac{3x}{x^2} = \frac{x^2 - 3x + 2}{x^2}.$$

(Sau, mai simplu: $f(x) = x - \dfrac2x - 3\ln x$, deci $f'(x) = 1 + \dfrac{2}{x^2} - \dfrac3x$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f(x) + 3\ln x}{x+1} = 1$

Termenii cu logaritm se reduc: $f(x) + 3\ln x = \dfrac{x^2 - 2}{x}$. Atunci

$$\lim_{x\to+\infty}\frac{x^2 - 2}{x(x + 1)} = \lim_{x\to+\infty}\frac{x^2\left(1 - \frac{2}{x^2}\right)}{x^2\left(1 + \frac1x\right)} = \frac{1 - 0}{1 + 0} = 1.$$

*Barem: 3p simplificarea, 2p calculul limitei.*

#### c) $\dfrac{x^2 + x - 2}{x} \le 3\ln x$ pentru orice $x \in (0, 2]$

Observăm că $\dfrac{x^2 + x - 2}{x} - 3\ln x = \dfrac{x^2 - 2}{x} + 1 - 3\ln x = f(x) + 1$. Deci inegalitatea cerută este echivalentă cu $f(x) \le -1$.

Din a): $x^2 - 3x + 2 = (x - 1)(x - 2)$, iar $x^2 > 0$, deci semnul lui $f'$ este semnul lui $(x-1)(x-2)$:

| $x$ | $0$ | | $1$ | | $2$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ |
| $f(x)$ | | ↗ | $-1$ | ↘ | |

$f$ crește pe $(0, 1]$ și descrește pe $[1, 2]$, deci $x = 1$ este punct de maxim pe $(0, 2]$: $f(x) \le f(1) = \dfrac{1 - 2}{1} - 3\ln 1 = -1$.

Așadar $f(x) + 1 \le 0$, adică $\dfrac{x^2 + x - 2}{x} \le 3\ln x$ pentru orice $x \in (0, 2]$. $\blacksquare$

*Barem: 3p monotonia și maximul, 2p concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x^3 + x + 1$

#### a) $\displaystyle\int_0^2 (f(x) - x^3)\,dx = 4$

$$\int_0^2 (x + 1)\,dx = \left(\frac{x^2}{2} + x\right)\Big|_0^2 = 2 + 2 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1\frac{x^2}{f(x) - x}\,dx = \frac{\ln 2}{3}$

$f(x) - x = x^3 + 1 > 0$ pe $[0,1]$, iar $(x^3 + 1)' = 3x^2$, deci integrandul este de forma $\dfrac13\cdot\dfrac{u'}{u}$:

$$\int_0^1 \frac{x^2}{x^3 + 1}\,dx = \frac13\ln(x^3 + 1)\Big|_0^1 = \frac{\ln2}{3} - \frac{\ln 1}{3} = \frac{\ln2}{3}.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a \in (-\infty, 0)$ cu $\displaystyle\int_a^0 e^{-x}\left(f'(x) - f(x)\right)dx = 1 - a^3e^{-a}$

Cheia: $\left(e^{-x}f(x)\right)' = -e^{-x}f(x) + e^{-x}f'(x) = e^{-x}\left(f'(x) - f(x)\right)$. Deci

$$\int_a^0 e^{-x}\left(f'(x) - f(x)\right)dx = e^{-x}f(x)\Big|_a^0 = f(0) - e^{-a}f(a) = 1 - e^{-a}(a^3 + a + 1).$$

Egalăm cu $1 - a^3e^{-a}$:

$$e^{-a}(a^3 + a + 1) = a^3e^{-a} \iff a^3 + a + 1 = a^3 \iff a = -1.$$

(Am împărțit prin $e^{-a} > 0$.) Valoarea $a = -1$ aparține intervalului $(-\infty, 0)$, deci convine.

**Răspuns:** $a = -1$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x \in \{2, 3\}$ |
| I.4 | $p = \tfrac59$ |
| II.1.b | $a = 2$ |
| II.1.c | $(1,7)$, $(2,6)$, $(3,5)$ |
| II.2.b | $x \in \{0, 4\}$ |
| II.2.c | $m = -1$ |
| III.2.c | $a = -1$ |

## Ce merită reținut din model

- **Determinanți cu sume de parametri**: notează $s = m + n$ — ecuația devine una de gradul II în $s$.
- **Inegalități cu logaritmi**: rescrie expresia cerută în funcție de $f$ (aici $f(x) + 1 \le 0$) și folosește extremul lui $f$.
- **Integrala $\int e^{-x}(f' - f)$**: recunoaște derivata produsului $e^{-x}f(x)$; nu e nevoie de integrare prin părți.

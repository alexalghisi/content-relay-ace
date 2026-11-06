Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Media aritmetică a numerelor $a = 20 - \sqrt{21}$ și $b = 22 + \sqrt{21}$ este $21$

$$m_a = \frac{a + b}{2} = \frac{20 - \sqrt{21} + 22 + \sqrt{21}}{2} = \frac{42}{2} = 21.$$

Radicalii se reduc pentru că apar cu semne opuse. *Barem: 3p scrierea mediei, 2p calculul.*

### 2. $f(x) = x - 1$, $g(x) = 3 - x$; arătați că $f(a) + g(a) = 2$ pentru orice $a$

$f(a) = a - 1$, $g(a) = 3 - a$, deci

$$f(a) + g(a) = a - 1 + 3 - a = 2, \quad \text{pentru orice } a \in \mathbb R.$$

*Barem: 2p $f(a)$, 3p $g(a)$ și suma.*

### 3. Ecuația $\sqrt{7x - 6} = x$

**Condiții:** $7x - 6 \ge 0$ (radicalul există) și $x \ge 0$ (radicalul este nenegativ, deci și membrul drept trebuie să fie).

Ridicăm la pătrat: $7x - 6 = x^2 \iff x^2 - 7x + 6 = 0 \iff (x-1)(x-6) = 0$, deci $x = 1$ sau $x = 6$.

**Verificare:** $x = 1$: $\sqrt{1} = 1$ ✔; $x = 6$: $\sqrt{36} = 6$ ✔.

**Răspuns:** $x \in \{1, 6\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Câte numere naturale pare de două cifre au cifrele în $\{1, 2, 3, 4\}$?

Un număr este par dacă cifra unităților este pară: cifra unităților poate fi $2$ sau $4$ — **2 moduri**.

Cifra zecilor poate fi oricare din $\{1, 2, 3, 4\}$ (cifrele se pot repeta, enunțul nu cere cifre distincte) — **4 moduri**.

Regula produsului: $2 \cdot 4 = 8$ numere ($12, 14, 22, 24, 32, 34, 42, 44$).

**Răspuns:** 8 numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea.*

### 5. $A(6,0)$, $B(6,6)$, $M$ mijlocul lui $OB$; triunghiul $AOM$ este isoscel

$M\left(\dfrac{0 + 6}{2}, \dfrac{0 + 6}{2}\right) = M(3, 3)$.

$$OM = \sqrt{3^2 + 3^2} = 3\sqrt2, \qquad AM = \sqrt{(3 - 6)^2 + (3 - 0)^2} = \sqrt{18} = 3\sqrt2.$$

Cum $OM = AM$, triunghiul $AOM$ este isoscel (cu baza $OA$).

*Barem: 2p coordonatele lui $M$, 3p lungimile și concluzia.*

### 6. Triunghi dreptunghic în $A$, $AC = 4$, $\angle B = 60^\circ$; înălțimea din $A$ este $2$

În triunghiul $ABC$: $\angle C = 180^\circ - 90^\circ - 60^\circ = 30^\circ$.

Fie $AD \perp BC$, $D \in BC$. Triunghiul $ACD$ este dreptunghic în $D$, cu $\angle ACD = 30^\circ$. Cateta opusă unghiului de $30^\circ$ este jumătate din ipotenuză, iar ipotenuza lui $ACD$ este $AC$:

$$AD = \frac{AC}{2} = \frac42 = 2.$$

(Echivalent: $AD = AC\sin 30^\circ = 4\cdot\frac12 = 2$.)

*Barem: 2p $\angle C = 30^\circ$, 3p triunghiul $ACD$ și $AD = 2$.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1 & -x\\ x & x + 1\end{pmatrix}$, $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$

#### a) $\det(A(1)) = 3$

$$A(1) = \begin{pmatrix}1 & -1\\ 1 & 2\end{pmatrix}, \quad \det(A(1)) = 1\cdot 2 - (-1)\cdot 1 = 2 + 1 = 3.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(-1)\cdot A(2) - A(-1) = 2I_2$

$A(-1) = \begin{pmatrix}1 & 1\\ -1 & 0\end{pmatrix}$, $A(2) = \begin{pmatrix}1 & -2\\ 2 & 3\end{pmatrix}$.

$$A(-1)\cdot A(2) = \begin{pmatrix}1 + 2 & -2 + 3\\ -1 + 0 & 2 + 0\end{pmatrix} = \begin{pmatrix}3 & 1\\ -1 & 2\end{pmatrix}.$$

$$A(-1)A(2) - A(-1) = \begin{pmatrix}3 - 1 & 1 - 1\\ -1 + 1 & 2 - 0\end{pmatrix} = \begin{pmatrix}2 & 0\\ 0 & 2\end{pmatrix} = 2I_2.$$

*Barem: 3p produsul și diferența, 2p finalizarea.*

#### c) Numerele reale $x$ cu $A(x)\cdot A(-x) + xA(x) = 3I_2$

$A(-x) = \begin{pmatrix}1 & x\\ -x & 1 - x\end{pmatrix}$.

$$A(x)A(-x) = \begin{pmatrix}1 + x^2 & x - x(1-x)\\ x - x(x+1) & x^2 + (x+1)(1-x)\end{pmatrix} = \begin{pmatrix}1 + x^2 & x^2\\ -x^2 & 1\end{pmatrix}.$$

$$xA(x) = \begin{pmatrix}x & -x^2\\ x^2 & x^2 + x\end{pmatrix}.$$

Adunând: $A(x)A(-x) + xA(x) = \begin{pmatrix}x^2 + x + 1 & 0\\ 0 & x^2 + x + 1\end{pmatrix} = (x^2 + x + 1)I_2$.

Condiția $(x^2 + x + 1)I_2 = 3I_2 \iff x^2 + x - 2 = 0 \iff (x + 2)(x - 1) = 0$.

**Răspuns:** $x \in \{-2, 1\}$. *Barem: 3p calculul expresiei matriceale, 2p rezolvarea ecuației.*

### 2. Legea $x \circ y = 4(xy + 1) - 3(x + y)$

#### a) $1 \circ 2 = 3$

$$1 \circ 2 = 4(1\cdot 2 + 1) - 3(1 + 2) = 12 - 9 = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Dacă $a \circ 3 = 4$, atunci $a \circ (-a) = 0$

$a \circ 3 = 4(3a + 1) - 3(a + 3) = 12a + 4 - 3a - 9 = 9a - 5$.

$9a - 5 = 4 \iff a = 1$. Atunci

$$a \circ (-a) = 1 \circ (-1) = 4(-1 + 1) - 3(1 - 1) = 0.$$

*Barem: 3p determinarea lui $a = 1$, 2p calculul lui $1 \circ (-1)$.*

#### c) Valorile lui $x$ cu $(x \circ 1) \circ (x - 1) \le 4$

Pas 1: $x \circ 1 = 4(x + 1) - 3(x + 1) = x + 1$.

Pas 2: $(x + 1) \circ (x - 1) = 4\big((x+1)(x-1) + 1\big) - 3\big((x + 1) + (x - 1)\big) = 4x^2 - 6x$.

Inecuația: $4x^2 - 6x \le 4 \iff 2x^2 - 3x - 2 \le 0$. $\Delta = 9 + 16 = 25$, rădăcinile $x = \dfrac{3 \pm 5}{4}$, adică $-\dfrac12$ și $2$. Trinomul (coeficient dominant pozitiv) este $\le 0$ între rădăcini.

**Răspuns:** $x \in \left[-\dfrac12, 2\right]$. *Barem: 3p $x \circ 1$ și expresia compusă, 2p rezolvarea inecuației.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2x^2 + x + 3 - 5\ln x$

#### a) $f'(x) = \dfrac{(x-1)(4x+5)}{x}$

$$f'(x) = 4x + 1 - \frac5x = \frac{4x^2 + x - 5}{x}.$$

Descompunem trinomul: rădăcinile lui $4x^2 + x - 5$ sunt $x = 1$ (suma coeficienților e $0$) și $x = -\dfrac54$, deci $4x^2 + x - 5 = (x - 1)(4x + 5)$. Rezultă $f'(x) = \dfrac{(x-1)(4x+5)}{x}$, $x \in (0, +\infty)$.

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f(x) + 5\ln x}{3 - x - x^2} = -2$

Logaritmii se reduc: $f(x) + 5\ln x = 2x^2 + x + 3$. Dăm factor comun forțat $x^2$:

$$\lim_{x\to+\infty}\frac{2x^2 + x + 3}{3 - x - x^2} = \lim_{x\to+\infty}\frac{x^2\left(2 + \frac1x + \frac3{x^2}\right)}{x^2\left(\frac3{x^2} - \frac1x - 1\right)} = \frac{2}{-1} = -2.$$

*Barem: 3p simplificarea și factorul comun, 2p calculul limitei.*

#### c) $2x^2 + x \ge 3 + 5\ln x$ pentru orice $x > 0$

Inegalitatea este echivalentă cu $2x^2 + x + 3 - 5\ln x \ge 6$, adică $f(x) \ge 6$.

Din a): pe $(0, +\infty)$ avem $x > 0$ și $4x + 5 > 0$, deci semnul lui $f'$ este semnul lui $x - 1$:

- $f'(x) \le 0$ pe $(0, 1]$ $\Rightarrow$ $f$ descrescătoare pe $(0, 1]$;
- $f'(x) \ge 0$ pe $[1, +\infty)$ $\Rightarrow$ $f$ crescătoare pe $[1, +\infty)$.

Deci $x = 1$ este punct de minim global: $f(x) \ge f(1)$ pentru orice $x > 0$. Cum $f(1) = 2 + 1 + 3 - 5\ln 1 = 6$, obținem $2x^2 + x + 3 - 5\ln x \ge 6$, adică $2x^2 + x \ge 3 + 5\ln x$. $\blacksquare$

*Barem: 3p monotonia și minimul, 2p $f(1) = 6$ și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = (3 - 2x)e^x$

#### a) $\displaystyle\int_0^1\frac{f(x)}{e^x}\,dx = 2$

$\dfrac{f(x)}{e^x} = 3 - 2x$, deci

$$\int_0^1(3 - 2x)\,dx = \left(3x - x^2\right)\Big|_0^1 = 3 - 1 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^2 f(x)\,dx = e^2 - 5$

Integrăm prin părți cu $u = 3 - 2x$ ($u' = -2$) și $v' = e^x$ ($v = e^x$):

$$\int_0^2(3 - 2x)e^x\,dx = (3 - 2x)e^x\Big|_0^2 + 2\int_0^2 e^x\,dx = (-e^2 - 3) + 2(e^2 - 1) = e^2 - 5.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $a \in (-\infty, 1)$ cu $\displaystyle\int_a^1\frac{e^{3x}}{f^3(x)}\,dx = \frac29$

$f^3(x) = (3 - 2x)^3e^{3x}$, deci $\dfrac{e^{3x}}{f^3(x)} = \dfrac{1}{(3 - 2x)^3}$, bine definită pe $[a, 1]$ pentru că $3 - 2x > 0$ când $x < \frac32$.

O primitivă: cu $t = 3 - 2x$, $dt = -2\,dx$, $\displaystyle\int\frac{dx}{(3-2x)^3} = -\frac12\int t^{-3}\,dt = \frac{1}{4t^2} = \frac{1}{4(3 - 2x)^2}$. (Verificare prin derivare: $\left(\frac14(3-2x)^{-2}\right)' = \frac14\cdot(-2)(3-2x)^{-3}\cdot(-2) = (3-2x)^{-3}$ ✔.)

$$\int_a^1\frac{dx}{(3-2x)^3} = \frac{1}{4(3-2x)^2}\Big|_a^1 = \frac14\left(1 - \frac{1}{(3 - 2a)^2}\right).$$

Ecuația: $\dfrac14\left(1 - \dfrac{1}{(3-2a)^2}\right) = \dfrac29 \iff 1 - \dfrac{1}{(3-2a)^2} = \dfrac89 \iff (3 - 2a)^2 = 9 \iff 3 - 2a = \pm 3$, deci $a = 0$ sau $a = 3$.

Cum $a < 1$, păstrăm doar $a = 0$.

**Răspuns:** $a = 0$. *Barem: 3p calculul integralei în funcție de $a$, 2p rezolvarea și alegerea soluției.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x \in \{1, 6\}$ |
| I.4 | 8 numere |
| II.1.c | $x \in \{-2, 1\}$ |
| II.2.b | $a = 1$, $1 \circ (-1) = 0$ |
| II.2.c | $x \in [-\tfrac12, 2]$ |
| III.1.c | minimul $f(1) = 6$ |
| III.2.b | $e^2 - 5$ |
| III.2.c | $a = 0$ |

## Ce merită reținut din varianta 7

- **Inegalități cu logaritmi**: mută totul într-o funcție, află minimul cu derivata și compară cu valoarea minimă.
- **Integrale cu $e^x$ la numitor**: simplifică exponențialele înainte de a integra.
- **Ecuații cu parametru în limita de integrare**: verifică la final condiția impusă parametrului ($a < 1$).

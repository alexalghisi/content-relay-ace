Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $n = |1-\sqrt2| + |2-\sqrt2|$ este natural

Cum $\sqrt2 \approx 1{,}41$: $1 - \sqrt2 < 0$, deci $|1-\sqrt2| = \sqrt2 - 1$; $2 - \sqrt2 > 0$, deci $|2-\sqrt2| = 2 - \sqrt2$.

$$n = \sqrt2 - 1 + 2 - \sqrt2 = 1 \in \mathbb N.$$

*Barem: 2p explicitarea modulelor, 3p finalizarea.*

### 2. $f(x) = 11 - x$, $g(x) = 1 - 11x$; inecuația $f(x) \ge g(x)$

$$11 - x \ge 1 - 11x \iff 10x \ge -10 \iff x \ge -1.$$

**Răspuns:** $x \in [-1, +\infty)$. *Barem: 3p inecuația liniară, 2p soluția.*

### 3. Ecuația $3^x \cdot 2^{x+1} = 72$

$3^x\cdot 2^x\cdot 2 = 72 \iff 6^x = 36 = 6^2 \iff x = 2.$

**Răspuns:** $x = 2$. *Barem: 3p $6^x = 36$, 2p soluția.*

### 4. Câte numere de trei cifre distincte se formează doar cu cifre impare

Cifrele impare sunt $1, 3, 5, 7, 9$ (5 cifre, niciuna nu e $0$). Sutele: 5 moduri; zecile: 4 moduri; unitățile: 3 moduri.

$$5\cdot 4\cdot 3 = 60 \quad(\text{adică } A_5^3).$$

**Răspuns:** 60 de numere. *Barem: 2p primele două cifre, 3p finalizarea.*

### 5. Aria triunghiului $A(-3,3)$, $B(1,3)$, $C(1,5)$

$A$ și $B$ au aceeași ordonată, deci $AB$ e orizontal: $AB = 1 - (-3) = 4$. $B$ și $C$ au aceeași abscisă, deci $BC$ e vertical: $BC = 5 - 3 = 2$. Așadar $AB \perp BC$, triunghiul e dreptunghic în $B$:

$$\mathcal A_{ABC} = \frac{AB\cdot BC}{2} = \frac{4\cdot 2}{2} = 4.$$

**Răspuns:** $4$. *Barem: 2p laturile, 3p aria.*

### 6. Raza cercului circumscris, $BC = 4$, $B = \frac{\pi}{3}$, $C = \frac{\pi}{6}$

$A = \pi - \left(\dfrac\pi3 + \dfrac\pi6\right) = \dfrac\pi2$. Din teorema sinusurilor, $\dfrac{BC}{\sin A} = 2R$:

$$2R = \frac{4}{\sin\frac\pi2} = 4 \Rightarrow R = 2.$$

(Triunghiul e dreptunghic în $A$, deci ipotenuza $BC$ este diametru.) **Răspuns:** $R = 2$. *Barem: 2p unghiul $A$, 3p raza.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x-2 & 0\\ 0 & 1 & 0\\ 0 & 0 & e^{x-2}\end{pmatrix}$

#### a) $\det(A(2)) = 1$

$$A(2) = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & e^0\end{pmatrix} = I_3 \Rightarrow \det(A(2)) = 1\cdot1\cdot1 = 1.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(x)A(y) = A(x+y-2)$

$$A(x)A(y) = \begin{pmatrix} 1 & (y-2)+(x-2) & 0\\ 0 & 1 & 0\\ 0 & 0 & e^{x-2}e^{y-2}\end{pmatrix} = \begin{pmatrix} 1 & x+y-4 & 0\\ 0 & 1 & 0\\ 0 & 0 & e^{x+y-4}\end{pmatrix}.$$

Cum $(x+y-2) - 2 = x+y-4$, matricea obținută este exact $A(x+y-2)$. *Barem: 3p produsul, 2p finalizarea.*

#### c) $A(1)A(2)\cdots A(10) = A(m^2+m+17)$

Din b), la fiecare înmulțire argumentele se adună și se scade $2$. La 10 factori sunt 9 înmulțiri:

$$A(1)A(2)\cdots A(10) = A(1+2+\dots+10 - 2\cdot 9) = A(55 - 18) = A(37).$$

$A$ este injectivă (elementul $(1,2)$ este $x-2$), deci $m^2 + m + 17 = 37 \iff m^2 + m - 20 = 0 \iff (m+5)(m-4) = 0$.

**Răspuns:** $m \in \{-5, 4\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 2. $f = X^3 - 4X^2 + 5X + a$

#### a) $f(1) - f(-1) = 12$

$f(1) = 1 - 4 + 5 + a = a + 2$, $f(-1) = -1 - 4 - 5 + a = a - 10$.

$$f(1) - f(-1) = (a+2) - (a-10) = 12.$$

*Barem: 2p $f(1)$, 3p $f(-1)$ și finalizarea.*

#### b) $f$ divizibil cu $X - 2$

Teorema lui Bézout: $X - 2 \mid f \iff f(2) = 0$. $f(2) = 8 - 16 + 10 + a = a + 2 = 0$.

**Răspuns:** $a = -2$. *Barem: 2p condiția, 3p valoarea lui $a$.*

#### c) Toate rădăcinile sunt întregi

Relațiile lui Viète: $x_1 + x_2 + x_3 = 4$, $x_1x_2 + x_1x_3 + x_2x_3 = 5$. Atunci

$$x_1^2 + x_2^2 + x_3^2 = 4^2 - 2\cdot 5 = 6.$$

Trei pătrate perfecte cu suma 6: singura posibilitate este $1 + 1 + 4$. Deci $|x_i| \in \{1, 1, 2\}$, iar din suma $4$ obținem $x_1 = x_2 = 1$, $x_3 = 2$ (verificare: $1\cdot1 + 1\cdot2 + 1\cdot2 = 5$ ✔). Din $x_1x_2x_3 = -a$: $2 = -a$.

**Răspuns:** $a = -2$ (convine: $f = (X-1)^2(X-2)$). *Barem: 2p relațiile Viète, 3p finalizarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \dfrac{1}{\sqrt x}\ln x$

#### a) $f'(x) = \dfrac{2 - \ln x}{2x\sqrt x}$

Scriem $f(x) = x^{-1/2}\ln x$ și derivăm produsul:

$$f'(x) = -\frac{1}{2x\sqrt x}\ln x + \frac{1}{\sqrt x}\cdot\frac1x = \frac{-\ln x + 2}{2x\sqrt x}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta perpendiculară pe $Oy$

O dreaptă perpendiculară pe $Oy$ este orizontală, deci panta tangentei este $0$: $f'(a) = 0 \iff 2 - \ln a = 0 \iff a = e^2$.

**Răspuns:** abscisa $x = e^2$. *Barem: 3p condiția $f'(a)=0$, 2p soluția.*

#### c) $2^{\sqrt3} < 3^{\sqrt2}$

Pe $(0, e^2)$, $\ln x < 2$, deci $f'(x) > 0$ și $f$ este strict crescătoare. Cum $0 < 2 < 3 < e^2$:

$$f(2) < f(3) \iff \frac{\ln 2}{\sqrt2} < \frac{\ln 3}{\sqrt3} \iff \sqrt3\ln2 < \sqrt2\ln3 \iff \ln 2^{\sqrt3} < \ln 3^{\sqrt2}.$$

Funcția $\ln$ fiind strict crescătoare, $2^{\sqrt3} < 3^{\sqrt2}$. $\blacksquare$ *Barem: 2p monotonia, 3p finalizarea.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = 4x - x^2$

#### a) $\displaystyle\int_0^3 f(x)\,dx = 9$

$$\int_0^3 (4x - x^2)\,dx = \left(2x^2 - \frac{x^3}{3}\right)\Big|_0^3 = 18 - 9 = 9.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^2 \frac{2-x}{f(x)}\,dx = \frac12\ln\frac43$

Observăm $(4x - x^2)' = 4 - 2x = 2(2-x)$, deci integrandul este $\dfrac12\cdot\dfrac{u'}{u}$ (cu $u > 0$ pe $[1,2]$):

$$\int_1^2 \frac{2-x}{4x-x^2}\,dx = \frac12\ln(4x - x^2)\Big|_1^2 = \frac12(\ln 4 - \ln 3) = \frac12\ln\frac43.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $I_n = \displaystyle\int_0^4 f^n(x)\,dx$; $I_{n+1} \le 4I_n$

$$I_{n+1} - 4I_n = \int_0^4 f^n(x)\big(4x - x^2 - 4\big)\,dx = -\int_0^4 f^n(x)(x-2)^2\,dx.$$

Pe $[0,4]$, $f(x) = x(4-x) \ge 0$, deci $f^n(x)(x-2)^2 \ge 0$ și integrala sa este $\ge 0$. Rezultă $I_{n+1} - 4I_n \le 0$, adică $I_{n+1} \le 4I_n$. $\blacksquare$ *Barem: 3p scrierea diferenței, 2p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 1$ |
| I.2 | $x \in [-1, +\infty)$ |
| I.3 | $x = 2$ |
| I.4 | 60 |
| I.5 | aria $= 4$ |
| I.6 | $R = 2$ |
| II.1.c | $m \in \{-5, 4\}$ |
| II.2.b | $a = -2$ |
| II.2.c | $a = -2$ |
| III.1.b | $x = e^2$ |
| III.1.c | $2^{\sqrt3} < 3^{\sqrt2}$ |
| III.2.c | $I_{n+1} \le 4I_n$ |

## Ce merită reținut din varianta 9

- **Legea $A(x)A(y) = A(x+y-k)$**: la un produs de $p$ factori se adună argumentele și se scade $(p-1)k$.
- **Rădăcini întregi**: din Viète calculezi suma pătratelor — ea limitează drastic posibilitățile.
- **Comparări de tip $a^b$ vs $b^a$**: logaritmează și folosește monotonia unei funcții de forma $\frac{\ln x}{g(x)}$.
- **Inegalități între integrale**: scrie diferența ca o singură integrală și studiază semnul integrandului (aici apare un pătrat perfect).

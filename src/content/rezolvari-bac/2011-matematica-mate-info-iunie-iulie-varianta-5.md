Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M1** (filiera teoretică, specializarea matematică-informatică), sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(\sqrt2, \sqrt5) \cap \mathbb Z = \{2\}$

$1 < \sqrt2 < 2$ (deoarece $1 < 2 < 4$) și $2 < \sqrt5 < 3$ (deoarece $4 < 5 < 9$). Deci intervalul $(\sqrt2, \sqrt5)$ este inclus în $(1, 3)$ și conține pe $2$; singurul întreg din el este $2$. *Barem: 2p, 2p, 1p.*

### 2. $m$ pentru care $x = 2$ este axa de simetrie a parabolei $y = x^2 + mx + 4$

Axa de simetrie este $x = x_V = -\dfrac{b}{2a} = -\dfrac m2$:

$$-\frac m2 = 2 \iff m = -4.$$

**Răspuns:** $m = -4$. *Barem: 2p, 3p.*

### 3. Ecuația $\sin\left(x - \frac\pi6\right) = \frac12$, $x \in [0, 2\pi)$

$x - \frac\pi6 \in \left\{(-1)^k\frac\pi6 + k\pi \mid k \in \mathbb Z\right\}$. Cum $x - \frac\pi6 \in \left[-\frac\pi6, \frac{11\pi}{6}\right)$, valorile posibile sunt $\frac\pi6$ și $\frac{5\pi}{6}$:

$$x = \frac\pi6 + \frac\pi6 = \frac\pi3 \quad\text{sau}\quad x = \frac{5\pi}{6} + \frac\pi6 = \pi.$$

**Răspuns:** $x \in \left\{\dfrac\pi3, \pi\right\}$. *Barem: 3p, 2p.*

### 4. $n \ge 2$ cu $C_n^2 + A_n^2 = 18$

$A_n^2 = n(n-1)$, $C_n^2 = \dfrac{n(n-1)}{2}$, deci

$$\frac{3n(n-1)}{2} = 18 \iff n(n-1) = 12 \iff n = 4.$$

**Răspuns:** $n = 4$. *Barem: 2p, 2p, 1p.*

### 5. $a$ pentru care $d_1: ax + y + 2011 = 0$ și $d_2: x - 2y = 0$ sunt paralele

Coeficienții lui $x$ și $y$ trebuie să fie proporționali:

$$\frac a1 = \frac{1}{-2} \iff a = -\frac12.$$

(Dreptele nu coincid: $d_2$ trece prin origine, $d_1$ nu.) **Răspuns:** $a = -\dfrac12$. *Barem: 3p, 2p.*

### 6. Dacă $\operatorname{tg} x + \operatorname{ctg} x = 2$, atunci $\sin 2x = 1$

$$\frac{\sin x}{\cos x} + \frac{\cos x}{\sin x} = \frac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \frac{1}{\sin x\cos x} = 2.$$

Deci $2\sin x\cos x = 1$, adică $\sin 2x = 1$. $\blacksquare$ *Barem: 2p, 2p, 1p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & x & x^2\\ 0 & 1 & 2x\\ 0 & 0 & 1\end{pmatrix}$

#### a) $A(x)\cdot A(y) = A(x + y)$

$$A(x)A(y) = \begin{pmatrix} 1 & y + x & y^2 + 2xy + x^2\\ 0 & 1 & 2y + 2x\\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & x + y & (x+y)^2\\ 0 & 1 & 2(x+y)\\ 0 & 0 & 1\end{pmatrix} = A(x + y).$$

*Barem: 1p, 4p.*

#### b) $(A(x) - A(y))^{2011} = O_3$

$$B = A(x) - A(y) = \begin{pmatrix} 0 & x - y & x^2 - y^2\\ 0 & 0 & 2(x - y)\\ 0 & 0 & 0\end{pmatrix}, \quad B^2 = \begin{pmatrix} 0 & 0 & 2(x-y)^2\\ 0 & 0 & 0\\ 0 & 0 & 0\end{pmatrix}, \quad B^3 = O_3.$$

Atunci $B^{2011} = B^3\cdot B^{2008} = O_3$. $\blacksquare$ *Barem: 1p, 2p, 2p.*

#### c) Inversa matricei $A(x)$

$\det A(x) = 1 \ne 0$ (matrice triunghiulară), deci $A(x)$ este inversabilă. Din a), $A(x)A(-x) = A(0) = I_3 = A(-x)A(x)$, deci

$$(A(x))^{-1} = A(-x) = \begin{pmatrix} 1 & -x & x^2\\ 0 & 1 & -2x\\ 0 & 0 & 1\end{pmatrix}.$$

*Barem: 1p, 4p.*

### 2. $f = X^3 + (1 - \alpha)X^2 + (\alpha - 2)iX + \alpha + (\alpha - 2)i$, $\alpha \in \mathbb C$

#### a) $f$ are rădăcina $-1$

$$f(-1) = -1 + 1 - \alpha - (\alpha - 2)i + \alpha + (\alpha - 2)i = 0.$$

*Barem: 2p, 3p.*

#### b) Dacă $g = X^2 + pX + q$ are două rădăcini distincte complex conjugate, atunci $p, q \in \mathbb R$ și $p^2 < 4q$

Rădăcinile sunt $x_{1,2} = u \pm iv$ cu $u, v \in \mathbb R$, $v \ne 0$. Din Viète:

$$p = -(x_1 + x_2) = -2u \in \mathbb R, \qquad q = x_1x_2 = u^2 + v^2 \in \mathbb R.$$

Ecuația cu coeficienți reali $x^2 + px + q = 0$ are rădăcini nereale distincte doar dacă $\Delta = p^2 - 4q < 0$, deci $p^2 < 4q$. $\blacksquare$ *Barem: 1p, 1p, 2p, 1p.*

#### c) $\alpha$ pentru care $f$ are două rădăcini distincte complex conjugate

Din a), $f = (X + 1)\big(X^2 - \alpha X + \alpha + (\alpha - 2)i\big)$. Cum $-1$ este real, cele două rădăcini complex conjugate trebuie să fie rădăcinile lui $h = X^2 - \alpha X + \alpha + (\alpha - 2)i$.

Din b): $-\alpha \in \mathbb R$ și $\alpha + (\alpha - 2)i \in \mathbb R$, deci $\alpha \in \mathbb R$ și $\alpha - 2 = 0$: $\alpha = 2$.

**Verificare:** $h = X^2 - 2X + 2$, cu rădăcinile $1 \pm i$, distincte și conjugate ✔.

**Răspuns:** $\alpha = 2$. *Barem: 2p, 1p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(1, +\infty) \to \mathbb R$, $f(x) = \ln(x + 1) - \ln(x - 1)$

#### a) $f$ este strict descrescătoare

$$f'(x) = \frac{1}{x+1} - \frac{1}{x-1} = \frac{(x - 1) - (x + 1)}{x^2 - 1} = \frac{-2}{x^2 - 1} < 0$$

pentru orice $x > 1$, deci $f$ este strict descrescătoare. *Barem: 3p, 2p.*

#### b) Asimptotele graficului

- $\lim\limits_{x\searrow 1} f(x) = \ln 2 - (-\infty) = +\infty$: **$x = 1$ asimptotă verticală** (alte asimptote verticale nu există, $f$ fiind continuă pe $(1, +\infty)$).
- $\lim\limits_{x\to+\infty} f(x) = \lim\limits_{x\to+\infty}\ln\dfrac{x+1}{x-1} = \ln 1 = 0$: **$y = 0$ asimptotă orizontală spre $+\infty$** (deci nu există asimptotă oblică).

*Barem: 2p, 1p, 2p.*

#### c) $\lim\limits_{x\to+\infty} xf(x)$

Scriem $xf(x) = \dfrac{\ln(x+1) - \ln(x-1)}{x^{-1}}$, nedeterminare $\frac00$. Cu l'Hospital:

$$\lim_{x\to+\infty}\frac{\frac{1}{x+1} - \frac{1}{x-1}}{-\frac{1}{x^2}} = \lim_{x\to+\infty}\frac{-2}{x^2-1}\cdot(-x^2) = \lim_{x\to+\infty}\frac{2x^2}{x^2 - 1} = 2.$$

**Răspuns:** $2$. *Barem: 2p, 3p.*

### 2. $f:[1, 2] \to \mathbb R$, $f(x) = x^2 - 3x + 2$

#### a) $\displaystyle\int_1^4 f(\sqrt x)\,dx$

$f(\sqrt x) = x - 3\sqrt x + 2$:

$$\int_1^4\left(x - 3x^{1/2} + 2\right)dx = \left(\frac{x^2}{2} - 2x^{3/2} + 2x\right)\Big|_1^4 = (8 - 16 + 8) - \left(\frac12 - 2 + 2\right) = -\frac12.$$

**Răspuns:** $-\dfrac12$. *Barem: 4p, 1p.*

#### b) Aria suprafeței determinate de graficul lui $g(x) = \dfrac{f(x)}{x}$ și axa $Ox$

$f(x) = (x - 1)(x - 2) \le 0$ pe $[1, 2]$, deci $g \le 0$ și

$$\mathcal A = -\int_1^2\frac{x^2 - 3x + 2}{x}\,dx = -\int_1^2\left(x - 3 + \frac2x\right)dx = -\left(\frac32 - 3 + 2\ln 2\right) = \frac32 - 2\ln 2.$$

**Răspuns:** $\mathcal A = \dfrac32 - 2\ln 2$. *Barem: 2p, 1p, 2p.*

#### c) $(4n + 2)\displaystyle\int_1^2 f^n(x)\,dx + n\int_1^2 f^{n-1}(x)\,dx = 0$

Scriem $1 = \frac12(2x - 3)'$ și integrăm prin părți; $f(1) = f(2) = 0$, iar $(f^n)' = nf^{n-1}(2x - 3)$:

$$\int_1^2 f^n\,dx = \frac12(2x-3)f^n(x)\Big|_1^2 - \frac n2\int_1^2(2x-3)^2 f^{n-1}(x)\,dx = -\frac n2\int_1^2(2x-3)^2 f^{n-1}(x)\,dx.$$

Cum $(2x - 3)^2 = 4x^2 - 12x + 9 = 4f(x) + 1$:

$$\int_1^2 f^n\,dx = -2n\int_1^2 f^n\,dx - \frac n2\int_1^2 f^{n-1}\,dx.$$

Înmulțind cu 2 și trecând totul în stânga: $(4n + 2)\int_1^2 f^n\,dx + n\int_1^2 f^{n-1}\,dx = 0$. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = -4$ |
| I.3 | $x \in \{\tfrac\pi3, \pi\}$ |
| I.4 | $n = 4$ |
| I.5 | $a = -\tfrac12$ |
| II.1.c | $(A(x))^{-1} = A(-x)$ |
| II.2.c | $\alpha = 2$ |
| III.1.b | $x = 1$ (verticală), $y = 0$ (orizontală spre $+\infty$) |
| III.1.c | $2$ |
| III.2.a | $-\tfrac12$ |
| III.2.b | $\tfrac32 - 2\ln 2$ |

## Ce merită reținut din varianta 5

- **Familii de matrice cu $A(x)A(y) = A(x+y)$**: inversa este $A(-x)$.
- **Matrice strict triunghiulare $3\times 3$** sunt nilpotente: cubul lor este $O_3$.
- **Rădăcini complex conjugate** apar doar pentru polinoame cu coeficienți reali — folosește Viète pentru a impune condiția.
- **Recurențe pentru $\int f^n$** cu $f$ de gradul 2: scrie $(f')^2$ în funcție de $f$ (aici $(2x-3)^2 = 4f + 1$).

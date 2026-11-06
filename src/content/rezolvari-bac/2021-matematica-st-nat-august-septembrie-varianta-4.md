Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $3(4 - i) + 3i(1 + i) = 9$

$$12 - 3i + 3i + 3i^2 = 12 - 3 = 9.$$

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 - 4$; calculați $(f\circ f)(2)$

$f(2) = 0$, deci $(f\circ f)(2) = f(0) = -4$.

*Barem: 2p + 3p.*

### 3. Ecuația $\log_3(x^2 - 2x + 4) = 1$

$x^2 - 2x + 4 = 3 \iff (x - 1)^2 = 0 \iff x = 1$ (convine: $1 - 2 + 4 = 3 > 0$).

*Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr de două cifre să fie divizibil cu 10

90 cazuri posibile; $10, 20, \dots, 90$ — 9 favorabile.

$$p = \frac9{90} = \frac1{10}.$$

*Barem: 2p + 2p + 1p.*

### 5. $A(2,4)$, $B(3,a)$; $O$, $A$, $B$ coliniare

$m_{OA} = \frac42 = 2$, $m_{OB} = \frac a3$. Coliniare $\iff \frac a3 = 2 \iff a = 6$.

*Barem: 2p + 3p.*

### 6. $E(x) = \cos x + \cos2x + \cos3x$; arătați că $E\left(\frac\pi4\right) = 0$

$$E\left(\tfrac\pi4\right) = \cos\tfrac\pi4 + \cos\tfrac\pi2 + \cos\tfrac{3\pi}4 = \tfrac{\sqrt2}2 + 0 - \tfrac{\sqrt2}2 = 0.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x,y) = \begin{pmatrix}x + 3y & 4y\\ -2y & x - 3y\end{pmatrix}$

#### a) $\det A(1,1) = 0$

$$A(1,1) = \begin{pmatrix}4&4\\-2&-2\end{pmatrix},\quad \det = -8 + 8 = 0.$$

*Barem: 2p + 3p.*

#### b) Dacă $A(x,y)$ e inversabilă, atunci $|x| \ne |y|$

$$\det A(x,y) = (x + 3y)(x - 3y) + 8y^2 = x^2 - 9y^2 + 8y^2 = x^2 - y^2.$$

Inversabilă $\iff x^2 - y^2 \ne 0 \iff |x| \ne |y|$. $\blacksquare$ *Barem: 2p + 3p.*

#### c) Perechile de întregi $(m,n)$ cu $A(m,n)\cdot A(-m,n) = I_2$

$$A(m,n)A(-m,n) = \begin{pmatrix}m + 3n & 4n\\ -2n & m - 3n\end{pmatrix}\begin{pmatrix}-m + 3n & 4n\\ -2n & -m - 3n\end{pmatrix} = \begin{pmatrix}n^2 - m^2 & 0\\ 0 & n^2 - m^2\end{pmatrix}.$$

(De ex. elementul $(1,1)$: $9n^2 - m^2 - 8n^2$.) Condiția: $(n - m)(n + m) = 1$. În întregi: $n - m = n + m = \pm1$, deci $m = 0$, $n = \pm1$.

**Răspuns:** $(0, 1)$ și $(0, -1)$. *Barem: 3p + 2p.*

### 2. Pe $A = [0,\infty)$: $x\circ y = 4^{xy} - (1 - x - y)$

#### a) $2\circ0 = 2$

$$2\circ0 = 4^0 - (1 - 2 - 0) = 1 + 1 = 2.$$

*Barem: 3p + 2p.*

#### b) $x\circ\frac1x \ge 5$ pentru $x > 0$

$$x\circ\tfrac1x = 4^1 - 1 + x + \tfrac1x = x + \tfrac1x + 3 = \frac{(x - 1)^2}{x} + 5 \ge 5.$$

*Barem: 2p + 3p.*

#### c) Dacă $m, n$ sunt naturale impare, $m\circ n$ e natural impar

$m\circ n = 4^{mn} + (m + n - 1)$. Cum $m, n \ge 1$, $mn \ge 1$ și $4^{mn}$ este natural par; $m + n$ e par (sumă de impare), deci $m + n - 1$ e natural impar. Suma par + impar este impară. $\blacksquare$ *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,\infty)\to\mathbb R$, $f(x) = x^3 - 3\ln x$

#### a) $f'(x) = \dfrac{3(x-1)(x^2+x+1)}{x}$

$$f'(x) = 3x^2 - \frac3x = \frac{3(x^3 - 1)}{x} = \frac{3(x - 1)(x^2 + x + 1)}{x}.$$

*Barem: 3p + 2p.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 1$, $f'(1) = 0$, deci tangenta: $y - 1 = 0$, adică $y = 1$. *Barem: 2p + 3p.*

#### c) $x^3 \ge 3\ln x + 1$ pentru $x > 0$

$x^2 + x + 1 > 0$, deci semnul lui $f'$ este al lui $x - 1$: $f$ descrescătoare pe $(0,1]$, crescătoare pe $[1, \infty)$. Minimul: $f(1) = 1$.

$f(x) \ge 1 \iff x^3 - 3\ln x \ge 1 \iff x^3 \ge 3\ln x + 1$. $\blacksquare$ *Barem: 3p + 2p.*

### 2. $f(x) = xe^x$

#### a) $\displaystyle\int_0^2\frac{f(x)}{e^x}dx = 2$

$$\int_0^2x\,dx = \frac{x^2}{2}\Big|_0^2 = 2.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_{-1}^1\left(f(x) + e^x\right)dx = \frac{e^2 + 1}{e}$

$xe^x + e^x = (xe^x)'$, deci

$$\int_{-1}^1(xe^x)'dx = xe^x\Big|_{-1}^1 = e - \left(-\frac1e\right) = e + \frac1e = \frac{e^2 + 1}{e}.$$

*Barem: 3p + 2p.*

#### c) $\displaystyle\int_{-1-a}^{-1+a}f(x)dx \ge -\frac{2a}{e}$, $a > 0$

$f'(x) = (x + 1)e^x$: $f$ descrescătoare pe $(-\infty, -1]$, crescătoare pe $[-1, \infty)$, deci $f(x) \ge f(-1) = -\frac1e$ pentru orice $x$.

$$\int_{-1-a}^{-1+a}f(x)dx \ge \int_{-1-a}^{-1+a}\left(-\frac1e\right)dx = -\frac1e\cdot2a = -\frac{2a}{e}.\ \blacksquare$$

*Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $-4$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac1{10}$ |
| I.5 | $a = 6$ |
| II.1.c | $(0,1), (0,-1)$ |
| III.1.b | $y = 1$ |

## Ce merită reținut din varianta 4

- **Minorarea unei integrale:** dacă $f \ge m$ pe $[a,b]$, atunci $\int_a^b f \ge m(b - a)$.
- **$(xe^x)' = xe^x + e^x$** — recunoaște derivata unui produs.
- **Paritate:** $4^k$ ($k \ge 1$) e par; suma a două impare e pară.

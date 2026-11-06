Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2013 la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $n = (\sqrt5 - 1)^2 + 2\sqrt5$ este natural

$$(\sqrt5 - 1)^2 = 5 - 2\sqrt5 + 1 = 6 - 2\sqrt5, \qquad n = 6 - 2\sqrt5 + 2\sqrt5 = 6 \in \mathbb N.$$

*Barem: 3p + 2p.*

### 2. $f(x) = x^2 + mx + 4$ intersectează $Ox$ în două puncte distincte

Ecuația $f(x) = 0$ trebuie să aibă două rădăcini reale distincte: $\Delta = m^2 - 16 > 0 \iff |m| > 4$.

**Răspuns:** $m \in (-\infty, -4) \cup (4, +\infty)$. *Barem: 2p + 1p + 2p.*

### 3. Ecuația $\log_2(2 - x^2) = \log_2 x$

**Condiții:** $x > 0$ și $2 - x^2 > 0$. Ecuația: $2 - x^2 = x \iff x^2 + x - 2 = 0 \iff (x - 1)(x + 2) = 0$.

$x = 1$ convine ($2 - 1 = 1 > 0$); $x = -2$ nu convine ($x > 0$).

**Răspuns:** $x = 1$. *Barem: 1p + 2p + 2p.*

### 4. Probabilitatea ca o submulțime a lui $\{1, \dots, 7\}$ să aibă cel mult un element

Cazuri posibile: $2^7 = 128$. Favorabile: mulțimea vidă și cele 7 submulțimi cu un element: $C_7^0 + C_7^1 = 8$.

$$p = \frac{8}{128} = \frac{1}{16}.$$

*Barem: 1p + 2p + 1p + 1p.*

### 5. $\overrightarrow{AB} = \vec i + 6\vec j$, $\overrightarrow{BC} = 4\vec i + 6\vec j$; lungimea lui $[AC]$

$$\overrightarrow{AC} = 5\vec i + 12\vec j, \qquad AC = \sqrt{25 + 144} = 13.$$

*Barem: 3p + 2p.*

### 6. Dacă $a + b = \frac\pi3$, atunci $2\cos b = \cos a + \sqrt3\sin a$

$b = \dfrac\pi3 - a$, deci

$$\cos b = \cos\frac\pi3\cos a + \sin\frac\pi3\sin a = \frac12\cos a + \frac{\sqrt3}{2}\sin a.$$

Înmulțind cu $2$: $2\cos b = \cos a + \sqrt3\sin a$. $\blacksquare$ *Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(x,y) = \det A(x,y)$, $A(x,y) = \begin{pmatrix} x & 1 & 2\\ 2 & x & 1\\ 1 & y & x\end{pmatrix}$

#### a) $D(-1, 2)$

$$D(-1,2) = \begin{vmatrix} -1 & 1 & 2\\ 2 & -1 & 1\\ 1 & 2 & -1\end{vmatrix} = -1 + 1 + 8 - (-2) - (-2) - (-2) = 14.$$

*Barem: 1p + 3p + 1p.*

#### b) $q$ pentru care $\operatorname{rang} A(2, q) = 2$

$A(2,q) = \begin{pmatrix} 2 & 1 & 2\\ 2 & 2 & 1\\ 1 & q & 2\end{pmatrix}$. Minorul $\begin{vmatrix} 2 & 1\\ 2 & 2\end{vmatrix} = 2 \ne 0$, deci rangul este cel puțin 2. Rangul este exact 2 $\iff D(2,q) = 0$.

În general, $D(x,y) = x^3 + 1 + 4y - 2x - xy - 2x = x^3 - 4x + 4y - xy + 1$. Atunci $D(2,q) = 8 - 8 + 4q - 2q + 1 = 2q + 1 = 0$.

**Răspuns:** $q = -\dfrac12$. *Barem: 1p + 1p + 1p + 2p.*

#### c) Există $(x,y)$, $x \ne y$, cu $D(x,y) = D(y,x)$

$$D(x,y) - D(y,x) = x^3 - y^3 - 8x + 8y = (x - y)(x^2 + xy + y^2 - 8).$$

Pentru $x \ne y$ trebuie $x^2 + xy + y^2 = 8$. De exemplu $x = 0$, $y = 2\sqrt2$: $0 + 0 + 8 = 8$ ✔.

**Răspuns (exemplu):** $(x,y) = (0, 2\sqrt2)$. *Barem: 1p + 1p + 2p + 1p.*

### 2. $f = X^3 + X - m$, rădăcinile $x_1, x_2, x_3$

#### a) $m$ cu restul împărțirii la $X - 1$ egal cu $8$

Restul este $f(1) = 2 - m = 8 \iff m = -6$.

*Barem: 2p + 2p + 1p.*

#### b) $x_1^2 + x_2^2 + x_3^2$ este întreg

Viète: $\sum x_i = 0$, $\sum x_ix_j = 1$.

$$x_1^2 + x_2^2 + x_3^2 = 0^2 - 2\cdot1 = -2 \in \mathbb Z.$$

(Rădăcinile nu sunt toate reale, de aceea suma pătratelor poate fi negativă.) *Barem: 2p + 3p.*

#### c) Pentru $m = 2$: $g = aX^3 + bX^2 + cX + d$ cu rădăcinile $\frac{1}{x_1}, \frac{1}{x_2}, \frac{1}{x_3}$

$f = X^3 + X - 2$, cu $x_i \ne 0$ (căci $f(0) = -2$). Dacă $t = \frac1x$, atunci $f\left(\frac1t\right) = 0 \iff \dfrac{1}{t^3} + \dfrac1t - 2 = 0 \iff 1 + t^2 - 2t^3 = 0$.

Deci numerele $\frac{1}{x_i}$ sunt rădăcinile lui $2X^3 - X^2 - 1$.

**Răspuns (exemplu):** $a = 2$, $b = -1$, $c = 0$, $d = -1$. *Barem: 2p + 2p + 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = e^x - x$

#### a) $f'(0)$

$f'(x) = e^x - 1$, deci $f'(0) = 0$. *Barem: 3p + 2p.*

#### b) $f(x) = n$ are exact o soluție în $(0, +\infty)$, $n \ge 2$

**Existență:** $f$ continuă pe $[0, +\infty)$, $f(0) = 1 < n$, $\lim\limits_{x\to+\infty} f(x) = +\infty$. Din proprietatea lui Darboux, $f$ ia valoarea $n$ pe $(0, +\infty)$.

**Unicitate:** $f'(x) = e^x - 1 > 0$ pentru $x > 0$, deci $f$ este strict crescătoare, deci injectivă pe $(0, +\infty)$. *Barem: 3p + 2p.*

#### c) $\lim\limits_{n\to\infty} x_n = +\infty$

$f(x_n) = n \Rightarrow e^{x_n} = n + x_n > n$ (căci $x_n > 0$). Deci $x_n > \ln n$, iar $\ln n \to +\infty$, așa că $x_n \to +\infty$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = \cos x$, suprafața $S$ între grafic, $Ox$, $x = 0$, $x = \frac\pi2$

#### a) Aria lui $S$

Pe $\left[0, \frac\pi2\right]$, $\cos x \ge 0$:

$$\mathcal A = \int_0^{\pi/2}\cos x\,dx = \sin x\Big|_0^{\pi/2} = 1.$$

*Barem: 2p + 3p.*

#### b) Volumul corpului de rotație

$$V = \pi\int_0^{\pi/2}\cos^2 x\,dx = \frac\pi2\int_0^{\pi/2}(1 + \cos2x)\,dx = \frac\pi2\left(x + \frac{\sin2x}{2}\right)\Big|_0^{\pi/2} = \frac\pi2\cdot\frac\pi2 = \frac{\pi^2}{4}.$$

*Barem: 1p + 4p.*

#### c) $\displaystyle\int_0^{2\pi}f^n(kx)\,dx = \int_0^{2\pi}f^n(x)\,dx$

Substituția $t = kx$, $dt = k\,dx$:

$$\int_0^{2\pi}\cos^n(kx)\,dx = \frac1k\int_0^{2k\pi}\cos^n t\,dt.$$

Funcția $\cos^n$ are perioada $2\pi$, deci integrala pe fiecare interval $[2(j-1)\pi, 2j\pi]$ este aceeași:

$$\int_0^{2k\pi}\cos^n t\,dt = \sum_{j=1}^{k}\int_{2(j-1)\pi}^{2j\pi}\cos^n t\,dt = k\int_0^{2\pi}\cos^n t\,dt.$$

Împărțind la $k$ obținem egalitatea cerută. $\blacksquare$ *Barem: 2p + 2p + 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 6$ |
| I.2 | $m \in (-\infty, -4) \cup (4, +\infty)$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{1}{16}$ |
| I.5 | $13$ |
| II.1.a | $14$ |
| II.1.b | $q = -\frac12$ |
| II.1.c | de ex. $(0, 2\sqrt2)$ |
| II.2.a | $m = -6$ |
| II.2.b | $-2$ |
| II.2.c | $g = 2X^3 - X^2 - 1$ |
| III.1.a | $0$ |
| III.2.a | $1$ |
| III.2.b | $\frac{\pi^2}{4}$ |

## Ce merită reținut din modelul 2013

- **Rangul 2** al unei matrice $3\times3$: un minor de ordin 2 nenul și determinantul egal cu $0$.
- **Polinomul cu rădăcinile inverse** se obține înlocuind $X$ cu $\frac1X$ și înmulțind cu $X^n$ (coeficienții se inversează ca ordine).
- **Existență + unicitate**: Darboux (continuitate și valori la capete) + strict monotonie.
- **Integrale de funcții periodice** pe un multiplu de perioade: $k$ copii ale integralei pe o perioadă.

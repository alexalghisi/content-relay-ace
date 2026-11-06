Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_tehnologic**, modelul oficial publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(10 - 2\cdot 3)(10 + 2\cdot 3) = 64$

$10 - 6 = 4$, $10 + 6 = 16$, deci produsul este $4\cdot 16 = 64$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $x^2 - 7x + 10 = 0$: arătați că $2(x_1 + x_2) - x_1x_2 = 4$

Viète: $x_1 + x_2 = 7$, $x_1x_2 = 10$, deci $2\cdot 7 - 10 = 4$. $\blacksquare$ *Barem: 2p, 3p.*

### 3. Ecuația $\log_2(x - 2020) = 2\log_2 3$

Condiție: $x > 2020$. $2\log_2 3 = \log_2 9$, deci $x - 2020 = 9 \iff x = 2029$, care convine.

**Răspuns:** $x = 2029$. *Barem: 3p, 2p.*

### 4. Prețul unui obiect de 200 de lei după o scumpire cu $10\%$

$10\%$ din $200$ este $20$, deci noul preț este $220$ de lei. *Barem: 3p, 2p.*

### 5. Distanța de la $O$ la mijlocul lui $AB$, $A(2,4)$, $B(4,4)$

Mijlocul: $M\left(\frac{2+4}{2}, \frac{4+4}{2}\right) = M(3, 4)$. $OM = \sqrt{3^2 + 4^2} = 5$.

**Răspuns:** $5$. *Barem: 2p, 3p.*

### 6. Arătați că $\sin 60^\circ + \cos 150^\circ = 0$

$\cos 150^\circ = \cos(180^\circ - 30^\circ) = -\cos 30^\circ = -\frac{\sqrt3}{2}$, iar $\sin 60^\circ = \frac{\sqrt3}2$; suma este $0$. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}-2 & 9\\ 0 & -2\end{pmatrix}$, $B(x) = \begin{pmatrix}x & -3x\\ 0 & x\end{pmatrix}$

**a)** $\det A = (-2)(-2) - 0 = 4$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$B(x)B(-x) = \begin{pmatrix}x & -3x\\ 0 & x\end{pmatrix}\begin{pmatrix}-x & 3x\\ 0 & -x\end{pmatrix} = \begin{pmatrix}-x^2 & 6x^2\\ 0 & -x^2\end{pmatrix},$$
$$B(x)B(-x) + B(x) = \begin{pmatrix}-x^2 + x & 6x^2 - 3x\\ 0 & -x^2 + x\end{pmatrix} = \begin{pmatrix}-2 & 9\\ 0 & -2\end{pmatrix}.$$

$-x^2 + x = -2 \iff x \in \{-1, 2\}$; $6x^2 - 3x = 9 \iff x \in \{-1, \frac32\}$. Soluția comună: $x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p, 2p.*

**c)** $B(1) = \begin{pmatrix}1 & -3\\ 0 & 1\end{pmatrix}$, $\det B(1) = 1$, $B(1)^{-1} = \begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}$.

$$X = B(1)^{-1}A = \begin{pmatrix}1 & 3\\ 0 & 1\end{pmatrix}\begin{pmatrix}-2 & 9\\ 0 & -2\end{pmatrix} = \begin{pmatrix}-2 & 3\\ 0 & -2\end{pmatrix}.$$

*Barem: 3p inversa, 2p $X$.*

### 2. Pe $M = (0, +\infty)$: $x \circ y = \dfrac{x^2 + y^2}{xy}$

**a)** $$3 \circ \tfrac13 = \frac{9 + \frac19}{3\cdot\frac13} = 9 + \frac19 = \frac{82}{9}.\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $$x \circ y - 2 = \frac{x^2 + y^2 - 2xy}{xy} = \frac{(x - y)^2}{xy} \ge 0,$$

deoarece $x, y > 0$. $\blacksquare$ *Barem: 3p, 2p.*

**c)** $a^2 \circ \dfrac1{a^2} = \dfrac{a^4 + \frac1{a^4}}{1} = 2 \iff \left(a^2 - \dfrac1{a^2}\right)^2 = 0 \iff a^4 = 1$. Cum $a > 0$: $a = 1$ ($a = -1$ nu convine).

**Răspuns:** $a = 1$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x(x^2 - 12) + 3 = x^3 - 12x + 3$

**a)** $f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $f(3) = 27 - 36 + 3 = -6$, deci limita este definiția derivatei în $3$:

$$\lim_{x\to3}\frac{f(x) + 6}{x - 3} = \lim_{x\to3}\frac{f(x) - f(3)}{x - 3} = f'(3) = 3\cdot1\cdot5 = 15.\ \blacksquare$$

*Barem: 3p, 2p.*

**c)** Pe $[-2, 2]$: $(x - 2) \le 0$, $(x + 2) \ge 0$, deci $f'(x) \le 0$ și $f$ este descrescătoare. Atunci $f(2) \le f(x) \le f(-2)$, cu $f(-2) = -8 + 24 + 3 = 19$, $f(2) = 8 - 24 + 3 = -13$. $\blacksquare$

*Barem: 2p, 3p.*

### 2. $f(x) = x^5 + x + 1$

**a)** $$\int_{-1}^1 (f(x) - x^5 - 1)\,dx = \int_{-1}^1 x\,dx = \frac{x^2}{2}\Big|_{-1}^1 = 0.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $f(x) - x - 1 = x^5$, deci

$$\int_0^1 x^{2020}\cdot x^5dx = \int_0^1 x^{2025}dx = \frac{x^{2026}}{2026}\Big|_0^1 = \frac{1}{2026}.$$

**Răspuns:** $\dfrac1{2026}$. *Barem: 3p, 2p.*

**c)** $g(x) = \dfrac1x(f(x) - x^5) = \dfrac{x + 1}{x} = 1 + \dfrac1x$, deci

$$V = \pi\int_1^2\left(1 + \frac2x + \frac1{x^2}\right)dx = \pi\left(x + 2\ln x - \frac1x\right)\Big|_1^2 = \pi\left(2 + 2\ln2 - \frac12 - 1 + 1\right) = \pi\left(2\ln 2 + \frac32\right).\ \blacksquare$$

*Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 2029$ |
| I.4 | $220$ lei |
| I.5 | $5$ |
| II.1.b | $x = -1$ |
| II.1.c | $X = \begin{pmatrix}-2&3\\0&-2\end{pmatrix}$ |
| II.2.c | $a = 1$ |
| III.2.b | $\tfrac1{2026}$ |

## Ce merită reținut din acest model

- **Limita $\frac{f(x) - f(a)}{x - a}$** este derivata în $a$ — recunoaște-o după valoarea $f(a)$.
- **Inegalitatea mediilor** apare ca $\frac{(x-y)^2}{xy} \ge 0$.
- **Volumul corpului de rotație:** $V = \pi\int_a^b g^2(x)\,dx$.

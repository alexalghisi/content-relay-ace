Rezolvarea completă a **simulării de Bacalaureat 2014 la Matematică M_tehnologic** pentru elevii clasei a XII-a. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Suma primilor trei termeni ai unei progresii aritmetice cu $a_2 = 4$

$$a_1 + a_2 + a_3 = (a_2 - r) + a_2 + (a_2 + r) = 3a_2 = 12.$$

*Barem: 3p + 2p.*

### 2. $f(x) = 2014x - 2013$; calculați $(f(1))^{2014}$

$f(1) = 2014 - 2013 = 1$, deci $(f(1))^{2014} = 1$. *Barem: 2p + 3p.*

### 3. Ecuația $3^{2-3x} = 3^{x+6}$

$2 - 3x = x + 6 \iff -4x = 4 \iff x = -1$. *Barem: 2p + 3p.*

### 4. Probabilitatea ca un număr natural de o cifră să fie divizor al lui $10$

Divizorii lui $10$ de o cifră: $1, 2, 5$ — 3 favorabile din 10 posibile ($0, \dots, 9$).

$$p = \frac{3}{10}.$$

*Barem: 2p + 1p + 2p.*

### 5. Ecuația dreptei $AB$, $A(1,3)$, $B(-1,1)$

$$\frac{y - 3}{1 - 3} = \frac{x - 1}{-1 - 1} \iff y - 3 = x - 1 \iff y = x + 2.$$

*Barem: 3p + 2p.*

### 6. $\sqrt3\cos30^\circ + \sqrt2\sin45^\circ = \frac52$

$$\sqrt3\cdot\frac{\sqrt3}{2} + \sqrt2\cdot\frac{\sqrt2}{2} = \frac32 + 1 = \frac52.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 1 & 1\\ 1 & 2 & 3\\ 1 & 4 & 9\end{pmatrix}$

#### a) $\det A$

$$\det A = 18 + 4 + 3 - 2 - 12 - 9 = 2.$$

(Vandermonde în $1, 2, 3$: $(2-1)(3-1)(3-2) = 2$.) *Barem: 3p + 2p.*

#### b) $m$ cu $A + mI_3 = \begin{pmatrix} 0 & 1 & 1\\ 1 & 1 & 3\\ 1 & 4 & 8\end{pmatrix}$

$A + mI_3$ are pe diagonală $1 + m$, $2 + m$, $9 + m$, iar restul elementelor coincid. Egalitatea cere $1 + m = 0$, $2 + m = 1$, $9 + m = 8$, deci $m = -1$.

*Barem: 3p + 2p.*

#### c) $AX = \begin{pmatrix} 0\\ 1\\ 3\end{pmatrix}$

$$\begin{cases} x + y + z = 0\\ x + 2y + 3z = 1\\ x + 4y + 9z = 3\end{cases}$$

Scăzând consecutiv: $y + 2z = 1$ și $2y + 6z = 2 \Rightarrow y + 3z = 1$. Deci $z = 0$, $y = 1$, $x = -1$.

**Răspuns:** $X = \begin{pmatrix} -1\\ 1\\ 0\end{pmatrix}$. *Barem: 2p + 3p.*

### 2. Legea comutativă $x * y = x + y - 5$

#### a) $2 * (-2) = 2014 * (-2014)$

$2 * (-2) = 0 - 5 = -5$, $2014 * (-2014) = 0 - 5 = -5$. *Barem: 2p + 3p.*

#### b) Asociativitate

$$(x*y)*z = x + y + z - 10 = x*(y*z).$$

**Răspuns:** da, legea este asociativă. *Barem: 2p + 3p.*

#### c) $(-4) * (-3) * \dots * 3 * 4$

Grupăm opușii: $(-k) * k = -5$ pentru $k = 1, 2, 3, 4$. Rămâne

$$(-5) * (-5) * (-5) * (-5) * 0 = (-20 - 3\cdot5) * 0 = (-35) * 0 = -40.$$

(Altfel: 9 termeni cu suma $0$, minus $5\cdot8 = 40$.)

**Răspuns:** $-40$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^3 - 3x + 7$

#### a) $\lim\limits_{x\to0}\dfrac{f(x) - f(0)}{x} = -3$

Limita este $f'(0)$; $f'(x) = 3x^2 - 3$, deci $f'(0) = -3$. *Barem: 2p + 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x(2x+1)(3x+2)}$

$$\lim_{x\to+\infty}\frac{x^3\left(1 - \frac{3}{x^2} + \frac{7}{x^3}\right)}{x^3\left(2 + \frac1x\right)\left(3 + \frac2x\right)} = \frac{1}{6}.$$

*Barem: 2p + 3p.*

#### c) $f(x) \ge 5$ pentru $x \in [-1, +\infty)$

$f'(x) = 3(x-1)(x+1) = 0 \iff x = \pm1$. Pe $[-1, 1]$, $f' \le 0$ (descrescătoare); pe $[1, +\infty)$, $f' \ge 0$ (crescătoare). Minimul pe $[-1, +\infty)$ este $f(1) = 1 - 3 + 7 = 5$. Deci $f(x) \ge 5$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = e^x + 2x$, $F(x) = e^x + x^2 + 2014$

#### a) $\displaystyle\int_1^2(f(x) - e^x)\,dx$

$$\int_1^2 2x\,dx = x^2\Big|_1^2 = 3.$$

*Barem: 2p + 3p.*

#### b) $F$ este primitivă a lui $f$

$F'(x) = e^x + 2x = f(x)$. *Barem: 3p + 2p.*

#### c) $\displaystyle\int_0^1 f(x)F(x)\,dx$

Cum $F' = f$, integrandul este $F\cdot F'$, cu primitiva $\frac{F^2}{2}$:

$$\int_0^1 F(x)F'(x)\,dx = \frac{F^2(x)}{2}\Big|_0^1 = \frac{(e + 2015)^2 - 2015^2}{2} = \frac{e^2 + 4030e}{2}.$$

**Răspuns:** $\dfrac{e^2 + 4030e}{2}$. *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $12$ |
| I.2 | $1$ |
| I.3 | $x = -1$ |
| I.4 | $p = \frac{3}{10}$ |
| I.5 | $y = x + 2$ |
| II.1.a | $2$ |
| II.1.b | $m = -1$ |
| II.1.c | $(-1, 1, 0)$ |
| II.2.c | $-40$ |
| III.1.b | $\frac16$ |
| III.2.a | $3$ |
| III.2.c | $\frac{e^2 + 4030e}{2}$ |

## Ce merită reținut din simularea 2014

- **Suma a trei termeni consecutivi** dintr-o progresie aritmetică este $3\times$ termenul din mijloc.
- **Legea $x + y - k$** pe $n$ termeni: suma minus $k(n-1)$.
- **$\int F\cdot F' = \frac{F^2}{2}$** — recunoaște derivata în integrand.
- **Limite de funcții raționale la $\infty$**: raportul coeficienților dominanți.

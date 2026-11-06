Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_mate-info**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z_1 = 2 + 3i$, $z_2 = 1 - 3i$; $z_1 + z_2$ este real

$$z_1 + z_2 = 3 \in \mathbb R.$$

*Barem: 3p, 2p.*

### 2. $(f\circ g)(1)$ pentru $f(x) = x - 1$, $g(x) = 3x$

$g(1) = 3$, $f(3) = 2$. **Răspuns:** $2$. *Barem: 2p, 3p.*

### 3. Ecuația $4^x - 64 = 0$

$4^x = 64 = 4^3 \iff x = 3$. *Barem: 2p, 3p.*

### 4. Probabilitatea ca un număr de două cifre să fie divizibil cu 7

Multiplii lui 7 de două cifre: $14, 21, \dots, 98$ — $\frac{98 - 14}{7} + 1 = 13$; posibile: $90$.

$$p = \frac{13}{90}.$$

*Barem: 1p, 2p, 2p.*

### 5. Paralela prin $A(2,0)$ la $d: y = 4x + 1$

Panta $4$: $y = 4(x - 2) = 4x - 8$.

**Răspuns:** $y = 4x - 8$. *Barem: 2p, 3p.*

### 6. $\sin(\pi - x)\sin x - \cos(\pi - x)\cos x = 1$

$\sin(\pi - x) = \sin x$, $\cos(\pi - x) = -\cos x$:

$$\sin^2 x + \cos^2 x = 1.$$

(Altfel: expresia este $-\cos\big((\pi - x) + x\big) = -\cos\pi = 1$.) *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}1&0&1\\0&1&0\\1&0&1\end{pmatrix}$, $B(x) = \begin{pmatrix}0&x&0\\x&0&x\\0&x&0\end{pmatrix}$

#### a) $\det A = 0$

Prima și a treia linie sunt egale, deci $\det A = 0$ (Sarrus: $1 + 0 + 0 - 1 - 0 - 0 = 0$). *Barem: 2p, 3p.*

#### b) $A\cdot B(x) + B(x)\cdot A = 3B(x)$

$$A B(x) = \begin{pmatrix}0 & 2x & 0\\x & 0 & x\\0 & 2x & 0\end{pmatrix}, \qquad B(x)A = \begin{pmatrix}0 & x & 0\\2x & 0 & 2x\\0 & x & 0\end{pmatrix}.$$

Suma: $\begin{pmatrix}0 & 3x & 0\\3x & 0 & 3x\\0 & 3x & 0\end{pmatrix} = 3B(x)$. *Barem: 2p, 3p.*

#### c) $x$ cu $B(x)\cdot B(x)\cdot B(x) = B(x^2 + x - 2)$

$$B(x)^2 = \begin{pmatrix}x^2 & 0 & x^2\\0 & 2x^2 & 0\\x^2 & 0 & x^2\end{pmatrix}, \qquad B(x)^3 = \begin{pmatrix}0 & 2x^3 & 0\\2x^3 & 0 & 2x^3\\0 & 2x^3 & 0\end{pmatrix} = B(2x^3).$$

$$2x^3 = x^2 + x - 2 \iff 2x^3 - x^2 - x + 2 = 0 \iff (x + 1)(2x^2 - 3x + 2) = 0.$$

$2x^2 - 3x + 2$ are $\Delta = 9 - 16 < 0$, deci singura soluție reală este $x = -1$.

**Răspuns:** $x = -1$. *Barem: 3p puterea, 2p soluția.*

### 2. $f = X^3 - 2X^2 + 2X + m$

#### a) $f(0) = m$. *Barem: 3p, 2p.*

#### b) Pentru $m = -1$: $(x_1 + x_2 + x_3)\left(\frac1{x_1} + \frac1{x_2} + \frac1{x_3}\right) = 4$

Viète: $S_1 = 2$, $S_2 = 2$, $S_3 = x_1x_2x_3 = -m = 1$.

$$S_1\cdot\frac{S_2}{S_3} = 2\cdot\frac21 = 4.$$

*Barem: 3p Viète, 2p calculul.*

#### c) $f$ nu are toate rădăcinile reale

$$x_1^2 + x_2^2 + x_3^2 = S_1^2 - 2S_2 = 4 - 4 = 0.$$

Dacă toate rădăcinile ar fi reale, suma pătratelor nule ar implica $x_1 = x_2 = x_3 = 0$, contradicție cu $x_1 + x_2 + x_3 = 2$. $\blacksquare$ *Barem: 2p suma pătratelor, 3p contradicția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 - x + 1}{x^2 + x + 1}$

#### a) $f'(x) = \dfrac{2(x-1)(x+1)}{(x^2+x+1)^2}$

$$f'(x) = \frac{(2x - 1)(x^2 + x + 1) - (2x + 1)(x^2 - x + 1)}{(x^2+x+1)^2} = \frac{2x^2 - 2}{(x^2+x+1)^2}.$$

(Numărătorul: $(2x^3 + x^2 + x - 1) - (2x^3 - x^2 + x + 1) = 2x^2 - 2$.) *Barem: 3p, 2p.*

#### b) Tangenta în $x = 0$

$f(0) = 1$, $f'(0) = -2$: $y = -2x + 1$. *Barem: 2p, 3p.*

#### c) $\lim\limits_{x\to+\infty}\big(f(x)\big)^x$

Nedeterminare $1^\infty$: $f(x) = 1 - \dfrac{2x}{x^2 + x + 1}$.

$$\lim_{x\to+\infty}\left(1 - \frac{2x}{x^2+x+1}\right)^x = e^{\lim\limits_{x\to+\infty}\frac{-2x^2}{x^2+x+1}} = e^{-2}.$$

**Răspuns:** $e^{-2}$. *Barem: 2p rescrierea, 3p limita.*

### 2. $f(x) = e^x - 2x$

#### a) $\displaystyle\int_0^1(f(x) + 2x)\,dx = e - 1$

$$\int_0^1 e^x\,dx = e - 1.$$

*Barem: 2p, 3p.*

#### b) Primitiva $F$ cu $F(1) = e - 3$

$F(x) = e^x - x^2 + c$; $F(1) = e - 1 + c = e - 3 \Rightarrow c = -2$.

**Răspuns:** $F(x) = e^x - x^2 - 2$. *Barem: 2p, 3p.*

#### c) Volumul pentru $g = f$ pe $[0,1]$ este $\frac\pi6(3e^2 - 19)$

$$V = \pi\int_0^1(e^x - 2x)^2\,dx = \pi\int_0^1\left(e^{2x} - 4xe^x + 4x^2\right)dx.$$

Cu $\int xe^x\,dx = (x-1)e^x$:

$$V = \pi\left[\frac{e^{2x}}{2} - 4(x-1)e^x + \frac{4x^3}{3}\right]_0^1 = \pi\left[\left(\frac{e^2}{2} + \frac43\right) - \left(\frac12 + 4\right)\right] = \pi\left(\frac{e^2}{2} - \frac{19}{6}\right) = \frac\pi6(3e^2 - 19).$$

*Barem: 2p dezvoltarea, 3p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $2$ |
| I.3 | $x = 3$ |
| I.4 | $p = \frac{13}{90}$ |
| I.5 | $y = 4x - 8$ |
| II.1.c | $x = -1$ |
| II.2.a | $m$ |
| III.1.b | $y = -2x + 1$ |
| III.1.c | $e^{-2}$ |
| III.2.a | $e - 1$ |
| III.2.b | $F(x) = e^x - x^2 - 2$ |

## Ce merită reținut din varianta 9

- **Suma pătratelor rădăcinilor nulă** cu sumă nenulă implică rădăcini nereale.
- **Puteri ale matricelor de tip $B(x)$**: calculează $B^2$, apoi $B^3$ și recunoaște forma.
- **Limite $1^\infty$**: $\lim(1 + a)^b = e^{\lim ab}$.
- **Volume cu $(e^x - 2x)^2$**: dezvoltă pătratul; termenul mixt cere integrare prin părți.

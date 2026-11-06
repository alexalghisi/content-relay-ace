Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_șt-nat**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresia aritmetică cu $a_1 = 7$, $a_3 = 15$; aflați $a_2$

Într-o progresie aritmetică, fiecare termen este media aritmetică a vecinilor:

$$a_2 = \frac{a_1 + a_3}{2} = \frac{7 + 15}{2} = 11.$$

*Barem: 3p formula, 2p rezultatul.*

### 2. $f(x) = 3x + 2$; numerele naturale $n$ cu $f(n) < 8$

$$3n + 2 < 8 \iff 3n < 6 \iff n < 2.$$

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p inecuația, 3p numerele naturale.*

### 3. Ecuația $\sqrt{x^2 - 1} = x + 1$

Ridicăm la pătrat: $x^2 - 1 = (x+1)^2 = x^2 + 2x + 1 \iff 2x + 2 = 0 \iff x = -1$.

**Verificare:** $\sqrt{1 - 1} = 0 = -1 + 1$ ✔.

**Răspuns:** $x = -1$. *Barem: 3p ecuația obținută, 2p soluția care convine.*

### 4. Submulțimi cu trei elemente ale lui $\{0,1,2,3,4\}$

$$C_5^3 = \frac{5!}{3!\cdot2!} = \frac{120}{6\cdot2} = 10.$$

**Răspuns:** 10. *Barem: 3p formula, 2p rezultatul.*

### 5. $d_1: y = \frac x2 + 2$, $d_2: y = (m-3)x + 1$ perpendiculare

Pantele: $m_{d_1} = \frac12$, $m_{d_2} = m - 3$. Perpendiculare $\iff m_{d_1}\cdot m_{d_2} = -1$:

$$\frac12(m - 3) = -1 \iff m - 3 = -2 \iff m = 1.$$

**Răspuns:** $m = 1$. *Barem: 2p pantele, 3p valoarea lui $m$.*

### 6. Dacă $\sin 2x = \frac12$, atunci $(\sin x + \cos x)^2 = \frac32$

$$(\sin x + \cos x)^2 = \sin^2 x + \cos^2 x + 2\sin x\cos x = 1 + \sin 2x = 1 + \frac12 = \frac32.$$

*Barem: 3p dezvoltarea, 2p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $X(a,b) = \begin{pmatrix} a & b\\ 9b & a\end{pmatrix}$

#### a) $\det(X(3,1)) = 0$

$$\det\begin{pmatrix} 3 & 1\\ 9 & 3\end{pmatrix} = 3\cdot3 - 9\cdot1 = 0.$$

*Barem: 3p scrierea, 2p calculul.*

#### b) $X(a,b)X(c,d) = X(ac + 9bd, ad + bc)$

$$\begin{pmatrix} a & b\\ 9b & a\end{pmatrix}\begin{pmatrix} c & d\\ 9d & c\end{pmatrix} = \begin{pmatrix} ac + 9bd & ad + bc\\ 9bc + 9ad & 9bd + ac\end{pmatrix} = \begin{pmatrix} ac + 9bd & ad + bc\\ 9(ad + bc) & ac + 9bd\end{pmatrix},$$

care are exact forma $X(ac + 9bd, ad + bc)$. *Barem: 3p produsul, 2p finalizarea.*

#### c) Perechile de întregi $(m,n)$ cu $\det(X(m,n)) = 1$

$\det(X(m,n)) = m^2 - 9n^2 = (m - 3n)(m + 3n) = 1$. Produsul a doi întregi este $1$ doar dacă ambii sunt $1$ sau ambii sunt $-1$:

- $m - 3n = m + 3n = 1 \Rightarrow n = 0$, $m = 1$;
- $m - 3n = m + 3n = -1 \Rightarrow n = 0$, $m = -1$.

**Răspuns:** $(m,n) \in \{(-1,0), (1,0)\}$. *Barem: 2p determinantul, 3p perechile.*

### 2. $f = 2X^3 - 4X^2 - 7X + m$

#### a) Pentru $m = 9$, $f(1) = 0$

$$f(1) = 2 - 4 - 7 + 9 = 0.$$

*Barem: 2p înlocuirea, 3p calculul.*

#### b) $f$ divizibil cu $X + \sqrt2$

Bézout: $f(-\sqrt2) = 0$. Cu $(-\sqrt2)^2 = 2$ și $(-\sqrt2)^3 = -2\sqrt2$:

$$2(-2\sqrt2) - 4\cdot2 - 7(-\sqrt2) + m = -4\sqrt2 - 8 + 7\sqrt2 + m = 3\sqrt2 - 8 + m = 0.$$

**Răspuns:** $m = 8 - 3\sqrt2$. *Barem: 3p condiția, 2p valoarea lui $m$.*

#### c) Suma a două rădăcini este $1$

Viète: $x_1 + x_2 + x_3 = \dfrac{4}{2} = 2$. Dacă $x_1 + x_2 = 1$, atunci $x_3 = 1$ este rădăcină: $f(1) = 2 - 4 - 7 + m = m - 9 = 0$.

**Răspuns:** $m = 9$. *Barem: 3p $x_3 = 1$, 2p valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = (x-1)e^x + 1$

#### a) $f'(x) = xe^x$

$$f'(x) = 1\cdot e^x + (x-1)e^x = xe^x.$$

*Barem: 2p regula produsului, 3p finalizarea.*

#### b) Asimptota orizontală spre $-\infty$

$\displaystyle\lim_{x\to-\infty}(x-1)e^x = \lim_{x\to-\infty}\frac{x-1}{e^{-x}} \overset{L'H}{=} \lim_{x\to-\infty}\frac{1}{-e^{-x}} = 0$, deci $\displaystyle\lim_{x\to-\infty} f(x) = 1$.

**Răspuns:** $y = 1$. *Barem: 3p limita, 2p concluzia.*

#### c) $\sqrt[n]{e} \le \dfrac{n}{n-1}$ pentru $n \ge 2$

Pe $[0,+\infty)$, $f'(x) = xe^x \ge 0$, deci $f$ este crescătoare, iar $f(0) = -1 + 1 = 0$. Rezultă $f(x) \ge 0$ pentru $x \ge 0$. Pentru $x = \frac1n$:

$$\left(\frac1n - 1\right)e^{\frac1n} + 1 \ge 0 \iff \frac{n-1}{n}e^{\frac1n} \le 1 \iff \sqrt[n]e \le \frac{n}{n-1}. \ \blacksquare$$

*Barem: 3p $f \ge 0$ pe $[0,+\infty)$, 2p finalizarea.*

### 2. $f:[2,+\infty)\to\mathbb R$, $f(x) = x\sqrt{x-2}$

#### a) $\displaystyle\int_2^3 f(x)\sqrt{x-2}\,dx = \frac43$

$f(x)\sqrt{x-2} = x(x-2) = x^2 - 2x$:

$$\int_2^3 (x^2 - 2x)\,dx = \left(\frac{x^3}{3} - x^2\right)\Big|_2^3 = (9 - 9) - \left(\frac83 - 4\right) = \frac43.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Volumul pentru $g(x) = \dfrac{f(x+2)}{x+2}\cdot\sqrt{e^x}$, $x \in [0,1]$

$f(x+2) = (x+2)\sqrt x$, deci $g(x) = \sqrt x\cdot\sqrt{e^x}$ și $g^2(x) = xe^x$.

$$V = \pi\int_0^1 xe^x\,dx = \pi(x-1)e^x\Big|_0^1 = \pi\big(0 - (-1)\big) = \pi.$$

(Primitiva lui $xe^x$ este $(x-1)e^x$ — se vede din a) a punctului 1.) *Barem: 3p formula volumului și primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{x\to+\infty}\frac{\int_3^x f(t)\frac{1}{\sqrt{t-2}}\,dt}{x^2}$

Integrandul se simplifică: $f(t)\cdot\dfrac{1}{\sqrt{t-2}} = t$. Deci

$$\int_3^x t\,dt = \frac{t^2}{2}\Big|_3^x = \frac{x^2 - 9}{2}, \qquad \lim_{x\to+\infty}\frac{x^2 - 9}{2x^2} = \frac12.$$

**Răspuns:** $\dfrac12$. *Barem: 3p integrala, 2p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_2 = 11$ |
| I.2 | $n \in \{0, 1\}$ |
| I.3 | $x = -1$ |
| I.4 | 10 |
| I.5 | $m = 1$ |
| II.1.c | $(\pm1, 0)$ |
| II.2.b | $m = 8 - 3\sqrt2$ |
| II.2.c | $m = 9$ |
| III.1.b | $y = 1$ |
| III.2.b | $V = \pi$ |
| III.2.c | $\frac12$ |

## Ce merită reținut din varianta 3

- **Ecuații iraționale**: după ridicarea la pătrat, verifică întotdeauna soluția în ecuația inițială.
- **$(\sin x + \cos x)^2 = 1 + \sin 2x$** — identitate des folosită.
- **Ecuații diofantice $m^2 - 9n^2 = 1$**: factorizează diferența de pătrate.
- **Inegalități cu $\sqrt[n]e$**: alege $x = \frac1n$ într-o inegalitate $f(x) \ge 0$ demonstrată prin monotonie.
- **Volumul corpului de rotație**: $V = \pi\int_a^b g^2(x)\,dx$ — ridicarea la pătrat elimină radicalii.

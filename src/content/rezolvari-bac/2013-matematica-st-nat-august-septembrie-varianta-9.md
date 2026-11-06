Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a = 3(2 + 5i) - 5(1 + 3i)$ este real

$$a = 6 + 15i - 5 - 15i = 1 \in \mathbb R.$$

*Barem: 2p + 2p produsele, 1p concluzia.*

### 2. Intersecția graficului $f(x) = x^2 + 10x + 25$ cu axa $Ox$

$f(x) = 0 \iff (x + 5)^2 = 0 \iff x = -5$.

**Răspuns:** $(-5, 0)$. *Barem: 2p ecuația, 3p punctul.*

### 3. Ecuația $\log_5(x^2 + x + 1) = \log_5(x + 2)$

**Condiții:** $x^2 + x + 1 > 0$ (mereu) și $x + 2 > 0$.

$$x^2 + x + 1 = x + 2 \iff x^2 = 1 \iff x = \pm1.$$

Ambele verifică $x > -2$. **Răspuns:** $x \in \{-1, 1\}$. *Barem: 3p ecuația, 2p soluțiile.*

### 4. Prețul înainte de o ieftinire cu $10\%$, știind că după ieftinire este $90$ lei

$$x - \frac{10}{100}x = 90 \iff 0{,}9x = 90 \iff x = 100.$$

**Răspuns:** $100$ de lei. *Barem: 3p ecuația, 2p soluția.*

### 5. Dreapta $d$ prin $A(2,2)$, paralelă cu $h: y = x - 1$

$m_d = m_h = 1$, deci $d: y - 2 = 1\cdot(x - 2) \iff y = x$.

**Răspuns:** $d: y = x$. *Barem: 3p panta, 2p ecuația.*

### 6. $\cos A$ în triunghiul cu $AB = 5$, $AC = 6$, $BC = 7$

$$\cos A = \frac{25 + 36 - 49}{2\cdot5\cdot6} = \frac{12}{60} = \frac15.$$

**Răspuns:** $\cos A = \dfrac15$. *Barem: 3p formula, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}1&1&0\\x&1&1\\1&-1&1\end{pmatrix}$

#### a) $A(2) + A(6) = 2A(4)$

$$A(2) + A(6) = \begin{pmatrix}2&2&0\\8&2&2\\2&-2&2\end{pmatrix} = 2\begin{pmatrix}1&1&0\\4&1&1\\1&-1&1\end{pmatrix} = 2A(4).$$

*Barem: 3p suma, 2p finalizarea.*

#### b) $x$ cu $\det(A(x)) = 0$

$$\det A(x) = 1\cdot(1 + 1) - 1\cdot(x - 1) + 0 = 3 - x.$$

$3 - x = 0 \iff x = 3$. **Răspuns:** $x = 3$. *Barem: 3p determinantul, 2p soluția.*

#### c) Inversa matricei $A(2)$

$\det A(2) = 3 - 2 = 1$. Complemenții algebrici ai lui $A(2) = \begin{pmatrix}1&1&0\\2&1&1\\1&-1&1\end{pmatrix}$:

$$\Gamma_{11} = 2,\ \Gamma_{12} = -1,\ \Gamma_{13} = -3;\quad \Gamma_{21} = -1,\ \Gamma_{22} = 1,\ \Gamma_{23} = 2;\quad \Gamma_{31} = 1,\ \Gamma_{32} = -1,\ \Gamma_{33} = -1.$$

$$\big(A(2)\big)^{-1} = \frac{1}{1}\begin{pmatrix}2&-1&1\\-1&1&-1\\-3&2&-1\end{pmatrix}.$$

(Verificare: prima linie a lui $A(2)$ înmulțită cu prima coloană a inversei: $2 - 1 + 0 = 1$ ✔.) *Barem: 2p determinantul, 3p inversa.*

### 2. $f = X^3 + X^2 + mX + m$, rădăcinile $x_1, x_2, x_3$

Observație: $f = X^2(X + 1) + m(X + 1) = (X + 1)(X^2 + m)$.

#### a) $f$ este divizibil cu $X + 1$

$f(-1) = -1 + 1 - m + m = 0$, deci $X + 1 \mid f$. *Barem: 2p $f(-1)$, 3p concluzia.*

#### b) $m$ cu $x_1^2 + x_2^2 + x_3^2 = 11$

Viète: $S_1 = -1$, $S_2 = m$, deci $x_1^2 + x_2^2 + x_3^2 = 1 - 2m = 11 \iff m = -5$.

**Răspuns:** $m = -5$. *Barem: 2p Viète, 2p suma pătratelor, 1p valoarea.*

#### c) $m$ real cu $|x_1| = |x_2| = |x_3|$

O rădăcină este $x_1 = -1$, deci $|x_2| = |x_3| = 1$. $x_2, x_3$ sunt rădăcinile lui $X^2 + m$, cu $x_2x_3 = m$, deci $|m| = 1$.

- $m = 1$: $x_{2,3} = \pm i$, $|\pm i| = 1$ ✔;
- $m = -1$: $x_{2,3} = \pm1$ ✔.

**Răspuns:** $m \in \{-1, 1\}$. *Barem: 2p $|x_2| = |x_3| = 1$, 1p produsul, 2p valorile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = x - \ln x$

#### a) $f'(x)$

$$f'(x) = 1 - \frac1x = \frac{x - 1}{x}.$$

*Barem: 2p, 3p.*

#### b) Tangenta în $x_0 = 1$

$f(1) = 1$, $f'(1) = 0$, deci $y = 1$.

**Răspuns:** $y = 1$. *Barem: 2p formula, 3p ecuația.*

#### c) $x \ge \ln x + 1$ pentru $x > 0$

$f' < 0$ pe $(0,1)$ și $f' > 0$ pe $(1, +\infty)$, deci $x = 1$ este punct de minim global:

$$f(x) \ge f(1) = 1 \iff x - \ln x \ge 1 \iff x \ge \ln x + 1. \ \blacksquare$$

*Barem: 3p monotonia, 2p concluzia.*

### 2. $f(x) = x(x+1)(x-1)$

#### a) $\displaystyle\int_2^3\frac{f(x)}{x(x-1)}\,dx = \frac72$

$$\int_2^3(x + 1)\,dx = \left(\frac{x^2}{2} + x\right)\Big|_2^3 = \frac{15}{2} - 4 = \frac72.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Primitiva $F$ cu $F(1) = -1$

$f(x) = x^3 - x$, deci $F(x) = \dfrac{x^4}{4} - \dfrac{x^2}{2} + c$. $F(1) = -\dfrac14 + c = -1 \Rightarrow c = -\dfrac34$.

**Răspuns:** $F(x) = \dfrac{x^4}{4} - \dfrac{x^2}{2} - \dfrac34$. *Barem: 3p primitivele, 2p constanta.*

#### c) $\displaystyle\int_2^e\frac{f(x)\ln x}{x^2 - 1}\,dx = \frac{e^2}{4} - 2\ln2 + 1$

$\dfrac{f(x)}{x^2 - 1} = x$. Prin părți ($u = \ln x$, $v' = x$):

$$\int_2^e x\ln x\,dx = \frac{x^2}{2}\ln x\Big|_2^e - \int_2^e\frac x2\,dx = \frac{e^2}{2} - 2\ln 2 - \frac{e^2 - 4}{4} = \frac{e^2}{4} - 2\ln2 + 1.$$

*Barem: 2p simplificarea, 3p integrarea prin părți.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 1$ |
| I.2 | $(-5, 0)$ |
| I.3 | $x \in \{-1, 1\}$ |
| I.4 | $100$ lei |
| I.5 | $y = x$ |
| I.6 | $\cos A = \frac15$ |
| II.1.b | $x = 3$ |
| II.1.c | $\begin{pmatrix}2&-1&1\\-1&1&-1\\-3&2&-1\end{pmatrix}$ |
| II.2.b | $m = -5$ |
| II.2.c | $m \in \{-1, 1\}$ |
| III.1.b | $y = 1$ |
| III.2.b | $F(x) = \frac{x^4}4 - \frac{x^2}2 - \frac34$ |

## Ce merită reținut din varianta 9

- **Polinoame de forma $X^3 + X^2 + mX + m$**: factorizează prin grupare — $(X+1)(X^2 + m)$.
- **Inversa unei matrice $3\times3$**: transpusa adjunctei împărțită la determinant; verifică un element.
- **Inegalitatea $x \ge \ln x + 1$** rezultă din minimul lui $x - \ln x$.
- **$\int x\ln x$**: prin părți cu $u = \ln x$.

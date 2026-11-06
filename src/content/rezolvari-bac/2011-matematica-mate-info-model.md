Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2011 la Matematică M1** (filiera teoretică, specializarea matematică-informatică). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Modulul numărului $z = 1 - i\sqrt3$

$$|z| = \sqrt{1^2 + \left(-\sqrt3\right)^2} = \sqrt{1 + 3} = \sqrt4 = 2.$$

**Răspuns:** $|z| = 2$. *Barem: 3p, 2p.*

### 2. Mulțimea valorilor funcției $f(x) = x^2 + x + 1$

$y \in \operatorname{Im} f \iff$ ecuația $x^2 + x + 1 - y = 0$ are soluții reale $\iff \Delta = 1 - 4(1 - y) = 4y - 3 \ge 0 \iff y \ge \frac34$.

(Echivalent: minimul este $-\frac{\Delta}{4a} = \frac34$, atins în $x_V = -\frac12$.)

**Răspuns:** $\operatorname{Im} f = \left[\dfrac34, +\infty\right)$. *Barem: 1p, 2p, 2p.*

### 3. Progresie geometrică cu $b_3 = 6$, $b_5 = 24$; termenul $b_7$

$b_5 = b_3q^2 \Rightarrow q^2 = 4$. Atunci

$$b_7 = b_5q^2 = 24\cdot 4 = 96.$$

(Rezultatul nu depinde de semnul lui $q$.) **Răspuns:** $b_7 = 96$. *Barem: 1p, 2p, 2p.*

### 4. $x > 0$ cu $\log_a x = 2\log_a 3 - 3\log_a 2$

$$2\log_a 3 - 3\log_a 2 = \log_a 9 - \log_a 8 = \log_a\frac98,$$

iar logaritmul este injectiv, deci $x = \dfrac98$.

**Răspuns:** $x = \dfrac98$. *Barem: 2p, 3p.*

### 5. Dreapta prin $A(3, 2)$, perpendiculară pe $d: x + 2y + 5 = 0$

$d: y = -\frac12x - \frac52$, deci $m_d = -\frac12$. Pentru perpendiculară $m_d\cdot m_{d'} = -1$, deci $m_{d'} = 2$.

$$d': y - 2 = 2(x - 3) \iff y = 2x - 4.$$

**Răspuns:** $y = 2x - 4$. *Barem: 2p, 3p.*

### 6. $x \in \left(\frac\pi2, \pi\right)$, $\sin x = \frac{2\sqrt2}{3}$; calculați $\cos x$

$$\cos^2 x = 1 - \sin^2 x = 1 - \frac89 = \frac19 \Rightarrow \cos x = \pm\frac13.$$

În cadranul al II-lea cosinusul este negativ: $\cos x = -\dfrac13$.

**Răspuns:** $\cos x = -\dfrac13$. *Barem: 2p, 1p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 & -2x & 4x^2\\ 0 & 1 & -4x\\ 0 & 0 & 1\end{pmatrix}$

#### a) $(A(2) - A(0))^{2010}$

$$B = A(2) - A(0) = \begin{pmatrix} 0 & -4 & 16\\ 0 & 0 & -8\\ 0 & 0 & 0\end{pmatrix}, \quad B^2 = \begin{pmatrix} 0 & 0 & 32\\ 0 & 0 & 0\\ 0 & 0 & 0\end{pmatrix}, \quad B^3 = O_3.$$

Deci $B^{2010} = B^3\cdot B^{2007} = O_3$.

**Răspuns:** $O_3$. *Barem: 2p, 2p, 1p.*

#### b) $A(x)\cdot A(y) = A(x + y)$

$$A(x)A(y) = \begin{pmatrix} 1 & -2y - 2x & 4y^2 + 8xy + 4x^2\\ 0 & 1 & -4y - 4x\\ 0 & 0 & 1\end{pmatrix} = \begin{pmatrix} 1 & -2(x+y) & 4(x+y)^2\\ 0 & 1 & -4(x+y)\\ 0 & 0 & 1\end{pmatrix} = A(x+y).$$

*Barem: 3p, 2p.*

#### c) $A(x)$ este inversabilă; inversa

$\det A(x) = 1 \ne 0$ (matrice triunghiulară cu $1$ pe diagonală). Din b), $A(x)A(-x) = A(-x)A(x) = A(0) = I_3$, deci

$$(A(x))^{-1} = A(-x) = \begin{pmatrix} 1 & 2x & 4x^2\\ 0 & 1 & 4x\\ 0 & 0 & 1\end{pmatrix}.$$

*Barem: 1p, 2p, 2p.*

### 2. Pe $G = (0, 1)$: $x * y = \dfrac{xy}{2xy - x - y + 1}$ (asociativă)

#### a) $e = \frac12$ este element neutru

$$x * \frac12 = \frac{\frac x2}{x - x - \frac12 + 1} = \frac{\frac x2}{\frac12} = x,$$

și, legea fiind simetrică în $x$ și $y$, și $\frac12 * x = x$. Cum $\frac12 \in G$, $e = \frac12$ este elementul neutru. *Barem: 1p, 3p, 1p.*

#### b) Orice element din $G$ este simetrizabil

Căutăm $x'$ cu $x * x' = \frac12$:

$$\frac{xx'}{2xx' - x - x' + 1} = \frac12 \iff 2xx' = 2xx' - x - x' + 1 \iff x' = 1 - x.$$

Pentru $x \in (0, 1)$, $x' = 1 - x \in (0, 1) = G$. $\blacksquare$ *Barem: 3p, 2p.*

#### c) $f(x) = \frac1x - 1$ este izomorfism de la $(G, *)$ la $(\mathbb R_+^*, \cdot)$

**Bijectivitate:** $f$ este continuă și strict descrescătoare pe $(0,1)$, cu $\lim\limits_{x\searrow 0} f = +\infty$ și $\lim\limits_{x\nearrow 1} f = 0$, deci $f:(0,1) \to (0, +\infty)$ este bijectivă (inversa: $f^{-1}(y) = \frac{1}{y+1}$).

**Morfism:**

$$f(x * y) = \frac{2xy - x - y + 1}{xy} - 1 = \frac{xy - x - y + 1}{xy} = \frac{(x-1)(y-1)}{xy},$$

$$f(x)f(y) = \frac{1-x}{x}\cdot\frac{1-y}{y} = \frac{(x-1)(y-1)}{xy} = f(x * y). \ \blacksquare$$

*Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = (x - 2)(x - 3)(x - 4)(x - 5) + 1$

#### a) $f'(5)$

$f(5) = 1$, deci

$$f'(5) = \lim_{x\to 5}\frac{f(x) - f(5)}{x - 5} = \lim_{x\to 5}(x-2)(x-3)(x-4) = 3\cdot 2\cdot 1 = 6.$$

**Răspuns:** $f'(5) = 6$. *Barem: 2p, 2p, 1p.*

#### b) $\lim\limits_{n\to\infty}\left(\dfrac{f(n+1) - 1}{f(n) - 1}\right)^n$

$$\frac{f(n+1) - 1}{f(n) - 1} = \frac{(n-1)(n-2)(n-3)(n-4)}{(n-2)(n-3)(n-4)(n-5)} = \frac{n-1}{n-5} = 1 + \frac{4}{n-5}.$$

Avem $1^\infty$:

$$\lim_{n\to\infty}\left(1 + \frac{4}{n-5}\right)^n = e^{\lim\limits_{n\to\infty}\frac{4n}{n-5}} = e^4.$$

**Răspuns:** $e^4$. *Barem: 1p, 1p, 1p, 2p.*

#### c) Ecuația $f'(x) = 0$ are exact trei soluții reale distincte

$f(2) = f(3) = f(4) = f(5) = 1$. $f$ este polinomială, deci continuă și derivabilă. Aplicând **teorema lui Rolle** pe $[2,3]$, $[3,4]$, $[4,5]$, obținem câte o rădăcină a lui $f'$ în fiecare dintre intervalele $(2,3)$, $(3,4)$, $(4,5)$ — trei rădăcini distincte.

$f'$ are gradul 3, deci nu poate avea mai mult de trei rădăcini. Așadar are exact trei. $\blacksquare$ *Barem: 1p, 1p, 1p, 2p.*

### 2. $I_n = \displaystyle\int_0^1\frac{(x^2 + x + 1)^n - x}{x^2 + 1}\,dx$, $n \in \mathbb N$

#### a) $I_0$

$$I_0 = \int_0^1\frac{1 - x}{x^2 + 1}\,dx = \int_0^1\frac{dx}{x^2+1} - \frac12\int_0^1\frac{2x}{x^2+1}\,dx = \operatorname{arctg} x\Big|_0^1 - \frac12\ln(x^2+1)\Big|_0^1 = \frac\pi4 - \frac{\ln 2}{2}.$$

**Răspuns:** $I_0 = \dfrac\pi4 - \dfrac{\ln 2}{2}$. *Barem: 1p, 1p, 2p, 1p.*

#### b) Este $I_2 - I_0 \in \mathbb Q$?

$$I_2 - I_0 = \int_0^1\frac{(x^2 + x + 1)^2 - 1}{x^2 + 1}\,dx.$$

$(x^2 + x + 1)^2 - 1 = x^4 + 2x^3 + 3x^2 + 2x = (x^2 + 1)(x^2 + 2x + 2) - 2$, deci

$$I_2 - I_0 = \int_0^1 (x^2 + 2x + 2)\,dx - 2\int_0^1\frac{dx}{x^2+1} = \frac13 + 1 + 2 - 2\cdot\frac\pi4 = \frac{10}{3} - \frac\pi2.$$

Cum $\pi$ este irațional, $I_2 - I_0 \notin \mathbb Q$.

**Răspuns:** nu, $I_2 - I_0 = \dfrac{10}{3} - \dfrac\pi2 \notin \mathbb Q$. *Barem: 1p, 1p, 1p, 2p.*

#### c) $I_{4n+1} \in \mathbb Q$

Fie $P = (X^2 + X + 1)^{4n+1} - X$. Verificăm rădăcinile lui $X^2 + 1$:

- $P(i) = (i^2 + i + 1)^{4n+1} - i = i^{4n+1} - i = i - i = 0$;
- $P(-i) = (-i)^{4n+1} + i = -i + i = 0$.

Deci $X^2 + 1 \mid P$, iar câtul $g$ are coeficienți întregi ($X^2 + 1$ fiind monic și $P \in \mathbb Z[X]$). Atunci

$$I_{4n+1} = \int_0^1 g(x)\,dx,$$

iar integrala unui polinom cu coeficienți întregi pe $[0, 1]$ este o sumă de fracții $\frac{c_k}{k+1}$, deci rațională. $\blacksquare$ *Barem: 2p, 1p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $2$ |
| I.2 | $[\tfrac34, +\infty)$ |
| I.3 | $b_7 = 96$ |
| I.4 | $x = \tfrac98$ |
| I.5 | $y = 2x - 4$ |
| I.6 | $\cos x = -\tfrac13$ |
| II.1.a | $O_3$ |
| II.1.c | $A(-x)$ |
| II.2.b | $x' = 1 - x$ |
| III.1.a | $6$ |
| III.1.b | $e^4$ |
| III.2.a | $\tfrac\pi4 - \tfrac{\ln 2}{2}$ |
| III.2.b | $\tfrac{10}{3} - \tfrac\pi2 \notin \mathbb Q$ |

## Ce merită reținut din model

- **Imaginea unei funcții de gradul 2**: $\left[-\frac{\Delta}{4a}, +\infty\right)$ pentru $a > 0$.
- **Teorema lui Rolle** + gradul derivatei dau numărul exact de rădăcini ale lui $f'$.
- **Divizibilitate prin $X^2 + 1$**: verifică $P(i) = 0$ (pentru coeficienți reali, și $P(-i) = 0$ automat).
- **Izomorfism**: bijectivitate + $f(x * y) = f(x)\cdot f(y)$.
- **$\int\frac{1}{x^2+1} = \operatorname{arctg} x$**, $\int\frac{2x}{x^2+1} = \ln(x^2+1)$.

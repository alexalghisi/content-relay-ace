Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M1** (filiera teoretică, specializarea matematică-informatică), sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei geometrice cu termeni pozitivi, $b_1 + b_2 = 6$, $b_3 + b_4 = 24$

$b_3 = b_1q^2$, $b_4 = b_2q^2$, deci $b_3 + b_4 = q^2(b_1 + b_2)$:

$$24 = 6q^2 \iff q^2 = 4.$$

Termenii fiind pozitivi, $q > 0$, deci $q = 2$.

**Răspuns:** $q = 2$. *Barem: 2p, 2p, 1p.*

### 2. $a$ pentru care $f(x) = (1 - a^2)x + 4$ este constantă

$f$ este constantă $\iff$ coeficientul lui $x$ este nul: $1 - a^2 = 0 \iff a \in \{-1, 1\}$.

**Răspuns:** $a \in \{-1, 1\}$. *Barem: 3p, 2p.*

### 3. Inecuația $\left(\frac32\right)^x < \left(\frac23\right)^x$

$\left(\frac23\right)^x = \left(\frac32\right)^{-x}$. Baza $\frac32 > 1$, deci funcția exponențială este strict crescătoare:

$$x < -x \iff x < 0.$$

**Răspuns:** $S = (-\infty, 0)$. *Barem: 1p, 2p, 2p.*

### 4. Numărul termenilor raționali ai dezvoltării $(1 + \sqrt2)^{10}$

$$T_{k+1} = C_{10}^k\cdot 1^{10-k}\cdot(\sqrt2)^k = C_{10}^k\cdot 2^{k/2}, \quad k \in \{0, 1, \dots, 10\}.$$

$T_{k+1} \in \mathbb Q \iff k$ par: $k \in \{0, 2, 4, 6, 8, 10\}$.

**Răspuns:** $6$ termeni raționali. *Barem: 2p, 2p, 1p.*

### 5. Distanța de la $A(2,2)$ la dreapta $BC$, $B(1,0)$, $C(0,1)$

Ecuația dreptei prin tăieturi: $BC: x + y - 1 = 0$.

$$d(A, BC) = \frac{|2 + 2 - 1|}{\sqrt{1 + 1}} = \frac{3}{\sqrt2} = \frac{3\sqrt2}{2}.$$

**Răspuns:** $\dfrac{3\sqrt2}{2}$. *Barem: 2p, 3p.*

### 6. $m(\angle A) = 60^\circ$, $AB = 4$, $AC = 5$; calculați $\overrightarrow{AB}\cdot\overrightarrow{AC}$

$$\overrightarrow{AB}\cdot\overrightarrow{AC} = AB\cdot AC\cdot\cos A = 4\cdot 5\cdot\frac12 = 10.$$

**Răspuns:** $10$. *Barem: 2p, 2p, 1p.*

## Subiectul al II-lea (30 de puncte)

### 1. $H = \{A \in \mathcal M_2(\mathbb R) \mid A^2 = A\}$

#### a) $\begin{pmatrix} 1 & 2\\ 0 & 0\end{pmatrix} \in H$

$$\begin{pmatrix} 1 & 2\\ 0 & 0\end{pmatrix}\begin{pmatrix} 1 & 2\\ 0 & 0\end{pmatrix} = \begin{pmatrix} 1 & 2\\ 0 & 0\end{pmatrix},$$

deci matricea aparține lui $H$. *Barem: 4p, 1p.*

#### b) Dacă $A \in H$, atunci $A^n \in H$

$$(A^n)^2 = A^{2n} = (A^2)^n = A^n,$$

deci $A^n \in H$. (De fapt, prin inducție $A^n = A$.) *Barem: 2p, 3p.*

#### c) $H$ este infinită

Pentru orice $x \in \mathbb R$:

$$\begin{pmatrix} 1 & x\\ 0 & 0\end{pmatrix}^2 = \begin{pmatrix} 1 & x\\ 0 & 0\end{pmatrix},$$

deci $H$ conține o infinitate de matrice distincte. $\blacksquare$ *Barem: 4p, 1p.*

### 2. $f = (X + i)^{10} + (X - i)^{10} = a_{10}X^{10} + \dots + a_1X + a_0$

#### a) Restul împărțirii lui $f$ la $X - i$

Restul este $f(i)$:

$$f(i) = (2i)^{10} + 0^{10} = 2^{10}\cdot i^{10} = 1024\cdot(-1) = -1024.$$

**Răspuns:** restul este $-2^{10} = -1024$. *Barem: 2p, 3p.*

#### b) Toți coeficienții lui $f$ sunt reali

Dezvoltăm cu binomul lui Newton:

$$f = \sum_{k=0}^{10} C_{10}^k X^{10-k}\left(i^k + (-i)^k\right) = \sum_{k=0}^{10} C_{10}^k X^{10-k}\, i^k\left(1 + (-1)^k\right).$$

- pentru $k$ impar, $1 + (-1)^k = 0$, coeficientul este $0 \in \mathbb R$;
- pentru $k = 2p$, coeficientul este $2C_{10}^{2p}\, i^{2p} = 2C_{10}^{2p}(-1)^p \in \mathbb R$. $\blacksquare$

*Barem: 2p, 1p, 2p.*

#### c) Toate rădăcinile lui $f$ sunt reale

Dacă $f(z) = 0$, atunci $(z + i)^{10} = -(z - i)^{10}$. Luând modulul: $|z + i|^{10} = |z - i|^{10}$, deci $|z + i| = |z - i|$.

Punctul de afix $z$ este egal depărtat de punctele de afixe $i$ și $-i$, deci se află pe mediatoarea segmentului lor, adică pe axa reală: $z \in \mathbb R$. $\blacksquare$ *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^5 - 5x + 4$

#### a) $\lim\limits_{x\to 2}\dfrac{f(x) - f(2)}{x - 2}$

Limita este, prin definiție, $f'(2)$. $f'(x) = 5x^4 - 5$, deci $f'(2) = 80 - 5 = 75$.

**Răspuns:** $75$. *Barem: 2p, 2p, 1p.*

#### b) Graficul are un punct de inflexiune

$f''(x) = 20x^3$ se anulează în $x = 0$ și își schimbă semnul ($f'' < 0$ pe $(-\infty, 0)$, $f'' > 0$ pe $(0, +\infty)$). Deci $x = 0$ este punct de inflexiune (punctul $(0, 4)$). *Barem: 3p, 2p.*

#### c) Pentru $m \in (0, 8)$, $f(x) = m$ are exact trei soluții reale distincte

$f'(x) = 5(x^4 - 1) = 0 \iff x = \pm 1$. Tabelul de variație:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f$ | $-\infty$ | $\nearrow$ | $8$ | $\searrow$ | $0$ | $\nearrow$ | $+\infty$ |

$f(-1) = -1 + 5 + 4 = 8$, $f(1) = 1 - 5 + 4 = 0$. Pentru $m \in (0, 8)$, $f$ fiind continuă și strict monotonă pe fiecare interval, ecuația are exact câte o soluție în $(-\infty, -1)$, $(-1, 1)$ și $(1, +\infty)$: în total trei soluții distincte. $\blacksquare$ *Barem: 1p, 2p, 2p.*

### 2. $g(x) = e^{-x}$

#### a) $\displaystyle\int_0^1 g(x)\,dx$

$$\int_0^1 e^{-x}\,dx = -e^{-x}\Big|_0^1 = 1 - \frac1e = \frac{e - 1}{e}.$$

**Răspuns:** $\dfrac{e-1}{e}$. *Barem: 3p, 2p.*

#### b) $\displaystyle\int_0^1 x^5 g(x^3)\,dx$

Substituția $t = x^3$, $dt = 3x^2\,dx$; $x^5\,dx = x^3\cdot x^2\,dx = \frac{t}{3}\,dt$:

$$\int_0^1 x^5 e^{-x^3}\,dx = \frac13\int_0^1 te^{-t}\,dt = \frac13\left(-te^{-t}\Big|_0^1 + \int_0^1 e^{-t}\,dt\right) = \frac13\left(-\frac1e + 1 - \frac1e\right) = \frac{e - 2}{3e}.$$

**Răspuns:** $\dfrac{e-2}{3e}$. *Barem: 2p, 3p.*

#### c) Șirul $I_n = \displaystyle\int_1^n g(x^3)\,dx$ este convergent

**Monotonie:** $I_{n+1} - I_n = \displaystyle\int_n^{n+1} e^{-x^3}\,dx \ge 0$, deci șirul este crescător.

**Mărginire:** pentru $x \ge 1$, $x^3 \ge x$, deci $e^{-x^3} \le e^{-x}$:

$$0 \le I_n \le \int_1^n e^{-x}\,dx = \frac1e - \frac{1}{e^n} < \frac1e.$$

Șirul este monoton și mărginit, deci convergent (teorema lui Weierstrass). $\blacksquare$ *Barem: 2p, 2p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $q = 2$ |
| I.2 | $a \in \{-1, 1\}$ |
| I.3 | $(-\infty, 0)$ |
| I.4 | $6$ |
| I.5 | $\tfrac{3\sqrt2}{2}$ |
| I.6 | $10$ |
| II.2.a | $-1024$ |
| III.1.a | $75$ |
| III.2.a | $\tfrac{e-1}{e}$ |
| III.2.b | $\tfrac{e-2}{3e}$ |

## Ce merită reținut din varianta 2

- **Limita $\frac{f(x) - f(a)}{x - a}$** este derivata $f'(a)$ — nu calcula limita „de mână".
- **Termeni raționali în $(a + \sqrt b)^n$**: puterea radicalului trebuie să fie pară.
- **$|z - a| = |z - b|$** înseamnă că $z$ se află pe mediatoarea segmentului $[ab]$.
- **Convergența unui șir de integrale**: monotonie (semnul integrandului) + mărginire (comparație cu o funcție mai simplă).

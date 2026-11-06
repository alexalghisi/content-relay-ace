Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M1 (mate-info)**, sesiunea iunie–iulie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\big((1-i)(i-1)\big)^4$

$(1-i)(i-1) = -(1-i)^2 = -(1 - 2i + i^2) = -(-2i) = 2i$.

$$(2i)^4 = 16\,i^4 = 16.$$

**Răspuns:** $16$. *Barem: 3p produsul, 2p puterea.*

### 2. $f:(-3,3)\to\mathbb R$, $f(x) = \ln\dfrac{3-x}{3+x}$ este impară

Domeniul este simetric față de $0$, iar

$$f(-x) = \ln\frac{3+x}{3-x} = \ln\left(\frac{3-x}{3+x}\right)^{-1} = -\ln\frac{3-x}{3+x} = -f(x). \ \blacksquare$$

*Barem: 2p $f(-x)$, 2p proprietatea logaritmului, 1p concluzia.*

### 3. Soluțiile întregi ale inecuației $x^2 + 2x - 8 < 0$

$x^2 + 2x - 8 = (x-2)(x+4) < 0 \iff x \in (-4, 2)$.

**Răspuns:** $x \in \{-3, -2, -1, 0, 1\}$. *Barem: 2p descompunerea, 1p intervalul, 2p soluțiile întregi.*

### 4. Câte elemente din $\{1, \dots, 100\}$ sunt divizibile cu 4 sau cu 5?

Principiul includerii și excluderii:

- divizibile cu 4: $\left[\frac{100}{4}\right] = 25$;
- divizibile cu 5: $\left[\frac{100}{5}\right] = 20$;
- divizibile cu 4 și 5 (cu 20): $5$.

$$25 + 20 - 5 = 40.$$

**Răspuns:** $40$. *Barem: 1p + 1p + 1p cele trei numărări, 2p rezultatul.*

### 5. $M(1,-2)$, $N(-3,-1)$, $P(-1,2)$; $Q$ astfel încât $MNPQ$ paralelogram

$MNPQ$ paralelogram $\iff \overrightarrow{MQ} = \overrightarrow{NP}$. Cu $Q(a, b)$:

$$\overrightarrow{MQ} = (a-1)\vec i + (b+2)\vec j, \quad \overrightarrow{NP} = 2\vec i + 3\vec j \Rightarrow a = 3,\ b = 1.$$

**Răspuns:** $Q(3, 1)$. *Barem: 2p vectorii, 2p egalitatea, 1p punctul.*

### 6. $AB = 6$, $AC = 3$, $BC = 5$; lungimea înălțimii $[AD]$

Formula lui Heron cu $p = \frac{6 + 3 + 5}{2} = 7$:

$$\mathcal A = \sqrt{7\cdot(7-6)(7-3)(7-5)} = \sqrt{56} = 2\sqrt{14}.$$

$$AD = \frac{2\mathcal A}{BC} = \frac{4\sqrt{14}}{5}.$$

**Răspuns:** $AD = \dfrac{4\sqrt{14}}{5}$. *Barem: 3p aria, 2p înălțimea.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}x - 2y - 8z = -65\\3x + y - 3z = 22\\x + y + z = 28\end{cases}$, $A = \begin{pmatrix}1&-2&-8\\3&1&-3\\1&1&1\end{pmatrix}$

#### a) Rangul lui $A$ este 2

$$\det A = 1\cdot(1 + 3) + 2\cdot(3 + 3) - 8\cdot(3 - 1) = 4 + 12 - 16 = 0,$$

iar minorul $\begin{vmatrix}1 & -2\\3 & 1\end{vmatrix} = 1 + 6 = 7 \ne 0$. Deci $\operatorname{rang} A = 2$. *Barem: 3p determinantul, 2p minorul.*

#### b) Rezolvarea sistemului

Minorul caracteristic (bordarea minorului principal cu coloana termenilor liberi și linia a treia) este nul, deci sistemul este compatibil nedeterminat. Luăm $z = \alpha$ necunoscută secundară și rezolvăm prima și a treia ecuație:

$$\begin{cases}x - 2y = -65 + 8\alpha\\x + y = 28 - \alpha\end{cases} \Rightarrow 3y = 93 - 9\alpha \Rightarrow y = 31 - 3\alpha,\quad x = 2\alpha - 3.$$

Verificare în ecuația a doua: $3(2\alpha - 3) + (31 - 3\alpha) - 3\alpha = 22$ ✔.

**Răspuns:** $(x, y, z) = (2\alpha - 3,\ 31 - 3\alpha,\ \alpha)$, $\alpha \in \mathbb R$. *Barem: 2p compatibilitatea, 3p soluția.*

#### c) Numărul soluțiilor din $\mathbb N\times\mathbb N\times\mathbb N$

$z = \alpha \in \mathbb N$, $x = 2\alpha - 3 \ge 0$, $y = 31 - 3\alpha \ge 0$:

$$\frac32 \le \alpha \le \frac{31}{3} \Rightarrow \alpha \in \{2, 3, \dots, 10\}.$$

**Răspuns:** $9$ soluții. *Barem: 1p condițiile, 2p intervalul, 1p valorile, 1p numărul.*

### 2. $A = \left\{\begin{pmatrix}a & b\\-b & a\end{pmatrix} \,\middle|\, a, b \in \mathbb Z_5\right\}$

#### a) Numărul elementelor lui $A$

$a$ și $b$ se aleg independent din $\mathbb Z_5$ (5 valori fiecare): $5\cdot 5 = 25$ de elemente.

**Răspuns:** $25$. *Barem: 2p, 3p.*

#### b) Există $M \in A$ nenulă cu $\begin{pmatrix}\hat3 & \hat1\\-\hat1 & \hat3\end{pmatrix}M = O_2$

Cu $M = \begin{pmatrix}a&b\\-b&a\end{pmatrix}$:

$$\begin{pmatrix}\hat3&\hat1\\-\hat1&\hat3\end{pmatrix}\begin{pmatrix}a&b\\-b&a\end{pmatrix} = \begin{pmatrix}\hat3a - b & \hat3b + a\\-a - \hat3b & -b + \hat3a\end{pmatrix}.$$

Se anulează dacă $b = \hat3a$ și $a = -\hat3b$. Pentru $a = \hat1$, $b = \hat3$: $-\hat3\cdot\hat3 = -\hat9 = \hat1 = a$ ✔.

**Exemplu:** $M = \begin{pmatrix}\hat1 & \hat3\\-\hat3 & \hat1\end{pmatrix} = \begin{pmatrix}\hat1 & \hat3\\\hat2 & \hat1\end{pmatrix}$. *Barem: 2p produsul, 1p condițiile, 2p exemplul.*

#### c) Ecuația $X^2 = I_2$ în $A$

$X = \begin{pmatrix}x&y\\-y&x\end{pmatrix}$, $X^2 = \begin{pmatrix}x^2 - y^2 & \hat2xy\\-\hat2xy & x^2 - y^2\end{pmatrix}$. Condiția: $x^2 - y^2 = \hat1$ și $\hat2xy = \hat0$, adică $xy = \hat0$ ($\hat2$ inversabil, $\mathbb Z_5$ corp).

- $x = \hat0$: $-y^2 = \hat1 \Rightarrow y^2 = \hat4 \Rightarrow y \in \{\hat2, \hat3\}$;
- $y = \hat0$: $x^2 = \hat1 \Rightarrow x \in \{\hat1, \hat4\}$.

**Răspuns:** $\begin{pmatrix}\hat0&\hat2\\-\hat2&\hat0\end{pmatrix}$, $\begin{pmatrix}\hat0&\hat3\\-\hat3&\hat0\end{pmatrix}$, $\begin{pmatrix}\hat1&\hat0\\\hat0&\hat1\end{pmatrix}$, $\begin{pmatrix}\hat4&\hat0\\\hat0&\hat4\end{pmatrix}$. *Barem: 1p sistemul, 2p cazurile, 2p matricele.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R\setminus\{-1\}\to\mathbb R$, $f(x) = \operatorname{arctg}\dfrac{x}{x+1}$

#### a) Asimptota spre $+\infty$

$\dfrac{x}{x+1} \to 1$, deci $\lim\limits_{x\to+\infty}f(x) = \operatorname{arctg}1 = \dfrac\pi4$.

**Răspuns:** $y = \dfrac\pi4$ (asimptotă orizontală). *Barem: 3p limita, 2p concluzia.*

#### b) Monotonia

$$f'(x) = \frac{1}{1 + \frac{x^2}{(x+1)^2}}\cdot\frac{(x+1) - x}{(x+1)^2} = \frac{1}{(x+1)^2 + x^2} = \frac{1}{2x^2 + 2x + 1}.$$

$2x^2 + 2x + 1$ are $\Delta = 4 - 8 < 0$, deci $f'(x) > 0$: $f$ este strict crescătoare pe $(-\infty, -1)$ și pe $(-1, +\infty)$. *Barem: 2p derivata, 2p semnul, 1p concluzia.*

#### c) Punctele de inflexiune

$$f''(x) = -\frac{4x + 2}{(2x^2 + 2x + 1)^2} = \frac{-2(2x+1)}{(2x^2+2x+1)^2}.$$

$f''(x) = 0 \iff x = -\frac12$; $f''$ schimbă semnul în $-\frac12$ (pozitivă pe $\left(-1, -\frac12\right)$, negativă pe $\left(-\frac12, +\infty\right)$), iar $f$ e continuă acolo.

**Răspuns:** $x = -\dfrac12$ este punct de inflexiune. *Barem: 2p $f''$, 1p rădăcina, 2p schimbarea semnului.*

### 2. $I_n = \displaystyle\int_n^{n+1}\frac{2x - 1}{x}\,dx$

Calculăm direct:

$$I_n = \int_n^{n+1}\left(2 - \frac1x\right)dx = (2x - \ln x)\Big|_n^{n+1} = 2 - \ln\frac{n+1}{n}.$$

#### a) $(I_n)$ este strict crescător

$$I_{n+1} - I_n = \ln\frac{n+1}{n} - \ln\frac{n+2}{n+1} = \ln\frac{(n+1)^2}{n(n+2)} = \ln\left(1 + \frac{1}{n^2 + 2n}\right) > 0. \ \blacksquare$$

*Barem: 2p calculul lui $I_n$, 1p diferența, 2p semnul.*

#### b) $(I_n)$ este mărginit

$1 < \dfrac{n+1}{n} \le 2 < e$, deci $0 < \ln\dfrac{n+1}{n} < 1$ și $1 < I_n < 2$. *Barem: 2p, 2p, 1p.*

#### c) $\lim\limits_{n\to\infty} n(2 - I_n)$

$$\lim_{n\to\infty} n\ln\frac{n+1}{n} = \lim_{n\to\infty}\ln\left(1 + \frac1n\right)^n = \ln e = 1.$$

**Răspuns:** $1$. *Barem: 2p rescrierea, 3p limita.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $16$ |
| I.3 | $\{-3, -2, -1, 0, 1\}$ |
| I.4 | $40$ |
| I.5 | $Q(3, 1)$ |
| I.6 | $AD = \frac{4\sqrt{14}}{5}$ |
| II.1.b | $(2\alpha - 3, 31 - 3\alpha, \alpha)$ |
| II.1.c | $9$ soluții |
| II.2.a | $25$ |
| II.2.c | 4 matrice |
| III.1.a | $y = \frac\pi4$ |
| III.1.c | $x = -\frac12$ |
| III.2.c | $1$ |

## Ce merită reținut din varianta 9

- **Includere–excludere**: $|A\cup B| = |A| + |B| - |A\cap B|$.
- **Sisteme compatibile nedeterminate**: o necunoscută secundară $\alpha$, apoi condițiile de naturalitate dau un interval pentru $\alpha$.
- **Ecuații matriceale în $\mathbb Z_p$**: lucrează pe componente și ține cont că $\mathbb Z_5$ este corp.
- **$n\ln\left(1+\frac1n\right) \to 1$** — limită fundamentală deghizată.

Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M1 (mate-info)**, **modelul oficial** publicat de minister. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea reală a numărului $\left(\sqrt3 + i\right)^6$

Forma trigonometrică: $\sqrt3 + i = 2\left(\dfrac{\sqrt3}{2} + \dfrac12 i\right) = 2\left(\cos\dfrac\pi6 + i\sin\dfrac\pi6\right)$.

Formula lui Moivre:

$$\left(\sqrt3 + i\right)^6 = 2^6\left(\cos\pi + i\sin\pi\right) = 64\cdot(-1) = -64.$$

**Răspuns:** $\operatorname{Re} = -64$. *Barem: 2p forma trigonometrică, 3p puterea.*

### 2. $f(x) = \dfrac{1}{\sqrt[3]x}$; calculați $(f\circ f)(512)$

$512 = 8^3$, deci $f(512) = \dfrac18$, apoi $f\left(\dfrac18\right) = \dfrac{1}{\sqrt[3]{1/8}} = \dfrac{1}{1/2} = 2$.

**Răspuns:** $2$. *Barem: 2p $f(512)$, 3p rezultatul.*

### 3. Ecuația $\cos 2x + \sin x = 0$

$\cos 2x = 1 - 2\sin^2 x$, deci

$$1 - 2\sin^2x + \sin x = 0 \iff 2\sin^2 x - \sin x - 1 = 0 \iff \sin x \in \left\{1, -\tfrac12\right\}.$$

- $\sin x = 1 \Rightarrow x = \dfrac\pi2 + 2k\pi$, $k \in \mathbb Z$;
- $\sin x = -\dfrac12 \Rightarrow x = (-1)^{k+1}\dfrac\pi6 + k\pi$, $k \in \mathbb Z$.

*Barem: 3p ecuația în $\sin x$, 2p soluțiile.*

### 4. Numărul tripletelor $(a,b,c)$ din $M = \{0,1,2,3,4,5\}$ cu $a < b < c$

Fiecărei submulțimi cu trei elemente îi corespunde exact un triplet ordonat crescător. Deci numărul cerut este

$$C_6^3 = \frac{6\cdot5\cdot4}{6} = 20.$$

**Răspuns:** $20$. *Barem: 3p reducerea la submulțimi, 2p calculul.*

### 5. Distanța dintre dreptele paralele $x + 2y = 6$ și $2x + 4y = 11$

Punctul $A(0,3)$ se află pe prima dreaptă. Distanța de la $A$ la $2x + 4y - 11 = 0$:

$$d = \frac{|2\cdot0 + 4\cdot3 - 11|}{\sqrt{2^2 + 4^2}} = \frac{1}{\sqrt{20}} = \frac{\sqrt5}{10}.$$

**Răspuns:** $\dfrac{\sqrt5}{10}$. *Barem: 2p punctul, 3p distanța.*

### 6. Paralelogramul $ABCD$: $AB = 1$, $BC = 2$, $\angle BAD = 60^\circ$; calculați $\overrightarrow{AC}\cdot\overrightarrow{AD}$

$\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}$ (regula paralelogramului), $AD = BC = 2$:

$$\overrightarrow{AC}\cdot\overrightarrow{AD} = \overrightarrow{AB}\cdot\overrightarrow{AD} + AD^2 = 1\cdot2\cdot\cos60^\circ + 4 = 1 + 4 = 5.$$

**Răspuns:** $5$. *Barem: 3p descompunerea, 1p $\overrightarrow{AB}\cdot\overrightarrow{AD}$, 1p rezultatul.*

## Subiectul al II-lea (30 de puncte)

### 1. Sistemul $\begin{cases}ax + by + cz = b\\cx + ay + bz = a\\bx + cy + az = c\end{cases}$, $a, b, c \in \mathbb R^*$

#### a) $\Delta = (a + b + c)(a^2 + b^2 + c^2 - ab - ac - bc)$

Adunăm coloanele la prima și scoatem factorul comun:

$$\Delta = \begin{vmatrix}a&b&c\\c&a&b\\b&c&a\end{vmatrix} = (a+b+c)\begin{vmatrix}1&b&c\\1&a&b\\1&c&a\end{vmatrix}.$$

Cu regula lui Sarrus:

$$\begin{vmatrix}1&b&c\\1&a&b\\1&c&a\end{vmatrix} = a^2 + b^2 + c^2 - ac - bc - ab.$$ *Barem: 2p factorul comun, 3p calculul.*

#### b) Rezolvarea în cazul compatibil determinat

Observăm că $x = 0$, $y = 1$, $z = 0$ verifică toate ecuațiile ($b = b$, $a = a$, $c = c$). Cum soluția este unică, ea este soluția sistemului.

**Răspuns:** $(x,y,z) = (0, 1, 0)$. *Barem: 3p verificarea, 2p unicitatea.*

#### c) Dacă $a^2 + b^2 + c^2 - ab - ac - bc = 0$, există o infinitate de soluții cu $x^2 + y^2 = z - 1$

$$a^2 + b^2 + c^2 - ab - ac - bc = \frac12\big[(a-b)^2 + (a-c)^2 + (b-c)^2\big] = 0 \iff a = b = c.$$

Sistemul devine o singură ecuație: $x + y + z = 1$ (după împărțire la $a \ne 0$). Soluțiile sunt $(\alpha, \beta, 1 - \alpha - \beta)$. Condiția $x^2 + y^2 = z - 1$ devine

$$\alpha^2 + \beta^2 = -\alpha - \beta \iff \left(\alpha + \tfrac12\right)^2 + \left(\beta + \tfrac12\right)^2 = \tfrac12,$$

ecuația unui cerc, care are o infinitate de puncte. Explicit: $\beta = \dfrac{-1 + \sqrt{1 - 4\alpha^2 - 4\alpha}}{2}$ pentru orice $\alpha$ cu $4\alpha^2 + 4\alpha - 1 \le 0$. $\blacksquare$ *Barem: 2p $a = b = c$, 2p forma soluțiilor, 1p infinitatea.*

### 2. $G = \left\{\begin{pmatrix}a&b\\\hat0&c\end{pmatrix} \,\middle|\, a,b,c \in \mathbb Z_4\right\}$

#### a) Numărul elementelor lui $G$

$a, b, c$ iau fiecare 4 valori: $4^3 = 64$ de matrice.

**Răspuns:** $64$. *Barem: 3p, 2p.*

#### b) $A \in G$ cu $\det A \ne \hat0$ și $\det A^2 = \hat0$

$A = \begin{pmatrix}\hat1 & \hat0\\\hat0 & \hat2\end{pmatrix}$: $\det A = \hat2 \ne \hat0$, iar $\det A^2 = (\det A)^2 = \hat4 = \hat0$.

*Barem: 3p exemplul, 2p verificarea.*

#### c) Numărul soluțiilor ecuației $X^2 = \begin{pmatrix}\hat1&\hat0\\\hat0&\hat0\end{pmatrix}$

$X = \begin{pmatrix}a&b\\\hat0&c\end{pmatrix}$, $X^2 = \begin{pmatrix}a^2 & b(a+c)\\\hat0 & c^2\end{pmatrix}$:

- $a^2 = \hat1 \Rightarrow a \in \{\hat1, \hat3\}$;
- $c^2 = \hat0 \Rightarrow c \in \{\hat0, \hat2\}$;
- $a + c \in \{\hat1, \hat3\}$ este inversabil în $\mathbb Z_4$, deci $b(a+c) = \hat0 \Rightarrow b = \hat0$.

**Răspuns:** $2\cdot2 = 4$ soluții. *Barem: 2p $X^2$, 1p sistemul, 2p numărarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^2 + x + 1}{x + 1}$, $x \ne -1$

Observație: $f(x) = x + \dfrac{1}{x+1}$.

#### a) Asimptota spre $+\infty$

$$m = \lim_{x\to\infty}\frac{f(x)}{x} = 1, \qquad n = \lim_{x\to\infty}\big(f(x) - x\big) = \lim_{x\to\infty}\frac1{x+1} = 0.$$

**Răspuns:** asimptota oblică $y = x$. *Barem: 2p panta, 3p ordonata și concluzia.*

#### b) $f'(x)$

$$f'(x) = \frac{(2x+1)(x+1) - (x^2 + x + 1)}{(x+1)^2} = \frac{x^2 + 2x}{(x+1)^2}.$$

*Barem: 3p regula câtului, 2p forma finală.*

#### c) $f$ este concavă pe $(-\infty, -1)$

$f'(x) = 1 - \dfrac{1}{(x+1)^2}$, deci $f''(x) = \dfrac{2}{(x+1)^3}$. Pentru $x < -1$, $(x+1)^3 < 0$, deci $f''(x) < 0$ și $f$ este concavă. $\blacksquare$ *Barem: 3p $f''$, 2p semnul.*

### 2. $f_n(x) = |\sin nx|$, $I_n = \displaystyle\int_\pi^{2\pi}\frac{f_n(x)}{x}\,dx$

#### a) $\displaystyle\int_0^\pi f_2(x)\,dx$

$$\int_0^\pi|\sin2x|\,dx = \int_0^{\pi/2}\sin 2x\,dx - \int_{\pi/2}^\pi\sin 2x\,dx = \left(-\frac{\cos2x}{2}\right)\Big|_0^{\pi/2} + \frac{\cos 2x}{2}\Big|_{\pi/2}^{\pi} = 1 + 1 = 2.$$

**Răspuns:** $2$. *Barem: 2p explicitarea modulului, 2p primitivele, 1p rezultatul.*

#### b) $I_n \le \ln 2$

$|\sin nx| \le 1$, deci

$$I_n \le \int_\pi^{2\pi}\frac1x\,dx = \ln x\Big|_\pi^{2\pi} = \ln 2. \ \blacksquare$$

*Barem: 3p majorarea, 2p calculul.*

#### c) $I_n \ge \dfrac2\pi\left(\dfrac1{n+1} + \dfrac1{n+2} + \dots + \dfrac1{2n}\right)$

Substituția $t = nx$ ($dx = \frac{dt}{n}$, $\frac{dx}{x} = \frac{dt}{t}$):

$$I_n = \int_{n\pi}^{2n\pi}\frac{|\sin t|}{t}\,dt = \sum_{k=n}^{2n-1}\int_{k\pi}^{(k+1)\pi}\frac{|\sin t|}{t}\,dt.$$

Pe $[k\pi, (k+1)\pi]$, $\dfrac1t \ge \dfrac{1}{(k+1)\pi}$, iar $\displaystyle\int_{k\pi}^{(k+1)\pi}|\sin t|\,dt = 2$. Deci

$$I_n \ge \sum_{k=n}^{2n-1}\frac{2}{(k+1)\pi} = \frac2\pi\left(\frac1{n+1} + \dots + \frac1{2n}\right). \ \blacksquare$$

*Barem: 1p substituția, 2p împărțirea, 1p minorarea, 1p concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $-64$ |
| I.2 | $2$ |
| I.3 | $x = \frac\pi2 + 2k\pi$ sau $x = (-1)^{k+1}\frac\pi6 + k\pi$ |
| I.4 | $20$ |
| I.5 | $\frac{\sqrt5}{10}$ |
| I.6 | $5$ |
| II.1.b | $(0, 1, 0)$ |
| II.2.a | $64$ |
| II.2.c | $4$ soluții |
| III.1.a | $y = x$ |
| III.2.a | $2$ |

## Ce merită reținut din model

- **Puteri de numere complexe**: treci în formă trigonometrică și aplică Moivre.
- **Tripletele strict crescătoare** se numără cu combinări.
- **Determinantul circulant** se factorizează cu $a + b + c$; al doilea factor este $\frac12\sum(a-b)^2$.
- **În $\mathbb Z_4$** există divizori ai lui zero ($\hat2\cdot\hat2 = \hat0$) — atenție la simplificări.
- **Integrale cu $|\sin nx|$**: substituția $t = nx$ și împărțirea în intervale de lungime $\pi$.

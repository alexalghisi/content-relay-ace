Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M2** (profil real, științele naturii, și filiera tehnologică), sesiunea iunie–iulie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\log_2\frac18 + \sqrt[3]{27}$

$\log_2\dfrac18 = \log_2 2^{-3} = -3$, $\sqrt[3]{27} = 3$. Suma: $-3 + 3 = 0$.

*Barem: 2p logaritmul, 2p radicalul, 1p rezultatul.*

### 2. Vârful parabolei $f(x) = x^2 - 2x + 3$

$$x_V = -\frac{b}{2a} = 1, \qquad y_V = -\frac{\Delta}{4a} = -\frac{4 - 12}{4} = 2.$$

**Răspuns:** $V(1, 2)$. *Barem: 2p + 2p + 1p.*

### 3. Ecuația $2 - 3^{x^2-1} = 1$

$$3^{x^2-1} = 1 = 3^0 \iff x^2 - 1 = 0 \iff x \in \{-1, 1\}.$$

**Răspuns:** $x \in \{-1, 1\}$. *Barem: 1p + 2p + 2p.*

### 4. Numere de trei cifre distincte cu cifre din $\{1,2,3,4\}$

Aranjamente de 4 luate câte 3:

$$A_4^3 = 4\cdot3\cdot2 = 24.$$

**Răspuns:** 24. *Barem: 2p formula, 3p calculul.*

### 5. $\vec w = 2\vec v_1 - \vec v_2$, $\vec v_1 = 2\vec i - \vec j$, $\vec v_2 = \vec i + 3\vec j$

$$\vec w = 4\vec i - 2\vec j - \vec i - 3\vec j = 3\vec i - 5\vec j.$$

**Răspuns:** $\vec w(3, -5)$. *Barem: 2p + 3p.*

### 6. Înălțimea din $A$ în triunghiul dreptunghic cu catetele $3$ și $4$

Ipotenuza: $BC = \sqrt{9 + 16} = 5$. Din aria scrisă în două moduri: $AB\cdot AC = BC\cdot h$.

$$h = \frac{AB\cdot AC}{BC} = \frac{12}{5}.$$

**Răspuns:** $h = \dfrac{12}{5}$. *Barem: 2p ipotenuza, 3p înălțimea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 1\\ 1 & 0\end{pmatrix}$

#### a) $A^2 - A$

$$A^2 = \begin{pmatrix} 2 & 1\\ 1 & 1\end{pmatrix}, \qquad A^2 - A = \begin{pmatrix} 1 & 0\\ 0 & 1\end{pmatrix} = I_2.$$

*Barem: 3p $A^2$, 2p diferența.*

#### b) Inversa lui $A$

$\det A = 0 - 1 = -1 \ne 0$. Adjuncta: $A^* = \begin{pmatrix} 0 & -1\\ -1 & 1\end{pmatrix}$, deci

$$A^{-1} = \frac{1}{-1}A^* = \begin{pmatrix} 0 & 1\\ 1 & -1\end{pmatrix}.$$

(Sau direct din a): $A(A - I_2) = I_2$, deci $A^{-1} = A - I_2$.) *Barem: 1p + 2p + 2p.*

#### c) $A\cdot X = \begin{pmatrix} 2010 & 2010\\ 2009 & 2010\end{pmatrix}$

$$X = A^{-1}\begin{pmatrix} 2010 & 2010\\ 2009 & 2010\end{pmatrix} = \begin{pmatrix} 0 & 1\\ 1 & -1\end{pmatrix}\begin{pmatrix} 2010 & 2010\\ 2009 & 2010\end{pmatrix} = \begin{pmatrix} 2009 & 2010\\ 1 & 0\end{pmatrix}.$$

*Barem: 2p + 2p + 1p.*

### 2. $f = X^2 + X$, $g = X^2 + \hat2X + a$ în $\mathbb Z_3[X]$

#### a) $f(\hat0) + f(\hat1)$

$f(\hat0) = \hat0$, $f(\hat1) = \hat2$, suma este $\hat2$.

*Barem: 2p + 2p + 1p.*

#### b) Rădăcinile lui $f$

$f(\hat0) = \hat0$, $f(\hat1) = \hat2$, $f(\hat2) = \hat4 + \hat2 = \hat6 = \hat0$.

**Răspuns:** $\hat0$ și $\hat2$. *Barem: 3p valorile, 2p rădăcinile.*

#### c) $f(\hat0) + f(\hat1) + f(\hat2) = g(\hat0) + g(\hat1) + g(\hat2)$

Membrul stâng: $\hat0 + \hat2 + \hat0 = \hat2$.

$g(\hat0) = a$, $g(\hat1) = \hat1 + \hat2 + a = a$, $g(\hat2) = \hat4 + \hat4 + a = \hat2 + a$. Suma: $3a + \hat2 = \hat2$ (căci $3a = \hat0$ în $\mathbb Z_3$). Egalitate pentru orice $a$. $\blacksquare$ *Barem: 2p + 2p + 1p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^2e^x$

#### a) $f'(x)$

$$f'(x) = 2xe^x + x^2e^x = (x^2 + 2x)e^x.$$

*Barem: 2p + 3p.*

#### b) $f$ descrescătoare pe $[-2, 0]$

$f'(x) = x(x+2)e^x$. Pe $[-2, 0]$: $x \le 0$, $x + 2 \ge 0$, $e^x > 0$, deci $f'(x) \le 0$ și $f$ este descrescătoare. *Barem: 2p semnul, 3p concluzia.*

#### c) $0 \le f(x) + f(x^2) \le \frac{e^2+1}{e}$ pentru $x\in[-1,0]$

- $f$ descrescătoare pe $[-1, 0]$: $f(0) \le f(x) \le f(-1)$, adică $0 \le f(x) \le \dfrac1e$.
- Pe $[0, +\infty)$, $f' \ge 0$, deci $f$ e crescătoare; $x^2 \in [0,1]$, deci $f(0) \le f(x^2) \le f(1)$, adică $0 \le f(x^2) \le e$.

Adunând: $0 \le f(x) + f(x^2) \le \dfrac1e + e = \dfrac{e^2 + 1}{e}$. $\blacksquare$ *Barem: 1p + 2p + 2p.*

### 2. $f:\mathbb R^*\to\mathbb R$, $f(x) = x + \frac1x$

#### a) $\displaystyle\int_1^3\left(f(x) - \frac1x\right)dx$

$$\int_1^3 x\,dx = \frac{x^2}{2}\Big|_1^3 = \frac92 - \frac12 = 4.$$

*Barem: 2p + 2p + 1p.*

#### b) Volumul pentru $g = f$ pe $[1,2]$

$g^2(x) = x^2 + 2 + \dfrac{1}{x^2}$:

$$V = \pi\int_1^2\left(x^2 + 2 + \frac{1}{x^2}\right)dx = \pi\left(\frac{x^3}{3} + 2x - \frac1x\right)\Big|_1^2 = \pi\left(\frac{37}{6} - \frac43\right) = \frac{29\pi}{6}.$$

(Calcul: în $2$: $\frac83 + 4 - \frac12 = \frac{37}{6}$; în $1$: $\frac13 + 2 - 1 = \frac43$.) *Barem: 1p + 1p + 2p + 1p.*

#### c) $\displaystyle\int_1^e f(x)\ln x\,dx$

$$\int_1^e x\ln x\,dx + \int_1^e\frac{\ln x}{x}\,dx.$$

- Prin părți: $\displaystyle\int x\ln x\,dx = \frac{x^2}{2}\ln x - \frac{x^2}{4}$, deci $\displaystyle\int_1^e x\ln x\,dx = \frac{e^2}{2} - \frac{e^2}{4} + \frac14 = \frac{e^2 + 1}{4}$.
- $\displaystyle\int_1^e\frac{\ln x}{x}\,dx = \frac{\ln^2 x}{2}\Big|_1^e = \frac12$.

$$\frac{e^2 + 1}{4} + \frac12 = \frac{e^2 + 3}{4}.$$

**Răspuns:** $\dfrac{e^2 + 3}{4}$. *Barem: 1p + 2p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $0$ |
| I.2 | $V(1, 2)$ |
| I.3 | $x \in \{-1, 1\}$ |
| I.4 | 24 |
| I.5 | $\vec w(3, -5)$ |
| I.6 | $\frac{12}{5}$ |
| II.1.a | $I_2$ |
| II.1.b | $A^{-1} = \begin{pmatrix}0&1\\1&-1\end{pmatrix}$ |
| II.1.c | $X = \begin{pmatrix}2009&2010\\1&0\end{pmatrix}$ |
| II.2.b | $\hat0$, $\hat2$ |
| III.2.a | $4$ |
| III.2.b | $\frac{29\pi}{6}$ |
| III.2.c | $\frac{e^2+3}{4}$ |

## Ce merită reținut din varianta 9

- **Înălțimea pe ipotenuză**: $h = \dfrac{c_1c_2}{ip}$.
- **Dacă $A^2 - A = I_2$**, atunci $A^{-1} = A - I_2$ fără calcul de adjunctă.
- **În $\mathbb Z_3$**, $3a = \hat0$ pentru orice $a$ — de aici independența de $a$.
- **$\int\frac{\ln x}{x}dx = \frac{\ln^2 x}{2}$** și **$\int x\ln x\,dx$ prin părți** sunt clasice.

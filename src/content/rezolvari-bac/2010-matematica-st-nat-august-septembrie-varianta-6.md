Rezolvarea completă a subiectului de **Bacalaureat 2010 la Matematică M2** (profil real, științele naturii, și filiera tehnologică), sesiunea august–septembrie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x \in \mathbb Z$ cu $-1 \le \frac{x+1}{3} \le 1$

Înmulțim cu $3$: $-3 \le x + 1 \le 3 \iff -4 \le x \le 2$.

**Răspuns:** $x \in \{-4, -3, -2, -1, 0, 1, 2\}$. *Barem: 2p + 2p + 1p.*

### 2. Funcția de gradul al doilea prin $A(0,0)$, $B(2,2)$, $C(-1,2)$

Fie $f(x) = ax^2 + bx + c$.

$$\begin{cases} f(0) = 0\\ f(2) = 2\\ f(-1) = 2\end{cases} \iff \begin{cases} c = 0\\ 4a + 2b = 2\\ a - b = 2\end{cases}$$

Din a doua: $2a + b = 1$; adunând cu $a - b = 2$: $3a = 3$, $a = 1$, $b = -1$.

**Răspuns:** $f(x) = x^2 - x$. *Barem: 3p sistemul, 2p soluția.*

### 3. Ecuația $\log_2(x+3) - \log_2 x = 2$

**Condiții:** $x > 0$. Atunci $\log_2\dfrac{x+3}{x} = 2 \iff \dfrac{x+3}{x} = 4 \iff x + 3 = 4x \iff x = 1$.

**Răspuns:** $x = 1$. *Barem: 1p condițiile, 2p ecuația, 2p soluția.*

### 4. Probabilitatea ca $n \in \{1,2,3,4\}$ să verifice $2^n \ge n^2$

| $n$ | $2^n$ | $n^2$ | $2^n \ge n^2$? |
|---|---|---|---|
| 1 | 2 | 1 | da |
| 2 | 4 | 4 | da |
| 3 | 8 | 9 | nu |
| 4 | 16 | 16 | da |

$$p = \frac34.$$

*Barem: 1p formula, 1p cazurile posibile, 2p cazurile favorabile, 1p probabilitatea.*

### 5. $C$ cu $\overrightarrow{OC} = 2\overrightarrow{OA} + \overrightarrow{OB}$; $A(2,0)$, $B(1,-1)$

$$2\overrightarrow{OA} + \overrightarrow{OB} = 2(2\vec i) + (\vec i - \vec j) = 5\vec i - \vec j.$$

**Răspuns:** $C(5, -1)$. *Barem: 3p vectorul, 2p coordonatele.*

### 6. Raza cercului circumscris, $AB = 6$, $C = 30^\circ$

Teorema sinusurilor: $\dfrac{AB}{\sin C} = 2R$:

$$R = \frac{6}{2\cdot\frac12} = 6.$$

**Răspuns:** $R = 6$. *Barem: 3p formula, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 1 & 0 & 1\end{pmatrix}$

#### a) $\det A$

Matricea este inferior triunghiulară, deci determinantul este produsul diagonalei: $\det A = 1$.

*Barem: 3p scrierea, 2p calculul.*

#### b) Verificați $A^{-1} = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 & 0 & 1\end{pmatrix}$

Notăm $B$ matricea propusă.

$$A\cdot B = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 1 - 1 & 0 & 1\end{pmatrix} = I_3, \qquad B\cdot A = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 + 1 & 0 & 1\end{pmatrix} = I_3.$$

Deci $B = A^{-1}$. *Barem: 2p + 2p produsele, 1p concluzia.*

#### c) $A\cdot X = \begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 3 & 3 & 3\end{pmatrix}$

Înmulțim la stânga cu $A^{-1}$:

$$X = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ -1 & 0 & 1\end{pmatrix}\begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 3 & 3 & 3\end{pmatrix} = \begin{pmatrix} 1 & 1 & 1\\ 2 & 2 & 2\\ 2 & 2 & 2\end{pmatrix}.$$

(Linia a treia: $-1\cdot1 + 1\cdot3 = 2$.) *Barem: 3p formula, 2p calculul.*

### 2. $f = X^3 + \hat2X^2 \in \mathbb Z_3[X]$, $G = \{aX^3 + bX^2 + cX + d \mid a,b,c,d \in \mathbb Z_3\}$

#### a) $f(\hat1)$

$$f(\hat1) = \hat1 + \hat2 = \hat3 = \hat0.$$

*Barem: 2p + 3p.*

#### b) Rădăcinile lui $f$

$f = X^2(X + \hat2)$. Rădăcinile: $\hat0$ (din $X^2$) și $X = -\hat2 = \hat1$. Verificare pentru $\hat2$: $\hat8 + \hat8 = \widehat{16} = \hat1 \ne \hat0$.

**Răspuns:** $\hat0$ și $\hat1$. *Barem: 2p factorizarea, 3p rădăcinile.*

#### c) Numărul elementelor lui $G$

Fiecare coeficient $a, b, c, d$ poate lua 3 valori, independent:

$$|G| = 3^4 = 81.$$

*Barem: 3p raționamentul, 2p rezultatul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:[0,1]\to\mathbb R$, $f(x) = \dfrac{e^x}{1+x}$

#### a) $\dfrac{f'(x)}{f(x)} = \dfrac{x}{x+1}$

$$f'(x) = \frac{e^x(1+x) - e^x}{(1+x)^2} = \frac{xe^x}{(x+1)^2},$$

$$\frac{f'(x)}{f(x)} = \frac{xe^x}{(x+1)^2}\cdot\frac{x+1}{e^x} = \frac{x}{x+1}.$$

*Barem: 3p derivata, 2p raportul.*

#### b) $f$ este crescătoare pe $[0,1]$

$f'(x) = \dfrac{xe^x}{(x+1)^2} \ge 0$ pentru $x \in [0,1]$, deci $f$ este crescătoare. *Barem: 2p semnul, 3p concluzia.*

#### c) $\dfrac2e \le \dfrac{1}{f(x)} \le 1$ pentru $x\in[0,1]$

Din monotonie: $f(0) \le f(x) \le f(1)$, adică $1 \le f(x) \le \dfrac e2$. Trecând la inverse (toate pozitive, sensul se schimbă):

$$\frac2e \le \frac{1}{f(x)} \le 1. \ \blacksquare$$

*Barem: 2p încadrarea lui $f$, 3p finalizarea.*

### 2. $f(x) = \begin{cases}\sqrt{x^2 + 3}, & x \ge 1\\ 2x, & x < 1\end{cases}$

#### a) $f$ admite primitive pe $\mathbb R$

Pe fiecare ramură $f$ este continuă. În $x = 1$: $\lim\limits_{x\nearrow1} 2x = 2$, $\lim\limits_{x\searrow1}\sqrt{x^2+3} = 2 = f(1)$. Deci $f$ este continuă pe $\mathbb R$ și, prin urmare, admite primitive. *Barem: 3p continuitatea în 1, 2p concluzia.*

#### b) Volumul pentru $g = f$ pe $[1,2]$

$$V = \pi\int_1^2 (x^2 + 3)\,dx = \pi\left(\frac{x^3}{3} + 3x\right)\Big|_1^2 = \pi\left(\frac{26}{3} - \frac{10}{3}\right) = \frac{16\pi}{3}.$$

**Răspuns:** $V = \dfrac{16\pi}{3}$. *Barem: 1p formula, 3p calculul, 1p rezultatul.*

#### c) $\displaystyle\int_1^{\sqrt6} x\cdot f(x)\,dx$

Pe $[1, \sqrt6]$, $f(x) = \sqrt{x^2+3}$. Substituția $t = x^2 + 3$, $dt = 2x\,dx$; $x = 1 \Rightarrow t = 4$, $x = \sqrt6 \Rightarrow t = 9$:

$$\int_1^{\sqrt6} x\sqrt{x^2+3}\,dx = \frac12\int_4^9 \sqrt t\,dt = \frac12\cdot\frac23t\sqrt t\Big|_4^9 = \frac13(27 - 8) = \frac{19}{3}.$$

**Răspuns:** $\dfrac{19}{3}$. *Barem: 1p scrierea, 4p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x \in \{-4, \dots, 2\}$ |
| I.2 | $f(x) = x^2 - x$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac34$ |
| I.5 | $C(5, -1)$ |
| I.6 | $R = 6$ |
| II.1.a | $\det A = 1$ |
| II.1.c | $X = \begin{pmatrix}1&1&1\\2&2&2\\2&2&2\end{pmatrix}$ |
| II.2.b | $\hat0$, $\hat1$ |
| II.2.c | 81 |
| III.2.b | $\frac{16\pi}{3}$ |
| III.2.c | $\frac{19}{3}$ |

## Ce merită reținut din varianta 6

- **Funcții definite pe ramuri**: continuitatea în punctul de racord garantează existența primitivelor.
- **Polinoame peste $\mathbb Z_n$**: $-\hat a = \widehat{n-a}$; numărul polinoamelor de grad cel mult $k$ este $n^{k+1}$.
- **Monotonie ⇒ încadrare**: o funcție crescătoare pe $[a,b]$ ia valori între $f(a)$ și $f(b)$.
- **Substituția $t = x^2 + c$** pentru integrale de forma $\int x\sqrt{x^2 + c}\,dx$.

Rezolvarea completă a subiectului de **Bacalaureat 2013 la Matematică M_mate-info**, sesiunea specială, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $x$ pentru care $1$, $2x + 2$, $7$ sunt termeni consecutivi ai unei progresii aritmetice

$$2x + 2 = \frac{1 + 7}{2} = 4 \iff x = 1.$$

**Răspuns:** $x = 1$. *Barem: 3p condiția, 2p soluția.*

### 2. Distanța dintre punctele de intersecție ale graficului $f(x) = x^2 - 4x + 3$ cu $Ox$

$f(x) = 0 \iff x \in \{1, 3\}$; distanța dintre $(1,0)$ și $(3,0)$ este $2$.

**Răspuns:** $2$. *Barem: 3p rădăcinile, 2p distanța.*

### 3. Ecuația $\sqrt{x^2 + 4} = x + 2$

Cu $x + 2 \ge 0$, ridicăm la pătrat: $x^2 + 4 = x^2 + 4x + 4 \iff x = 0$, care verifică ecuația ($\sqrt4 = 2$).

**Răspuns:** $x = 0$. *Barem: 3p ecuația, 2p soluția și verificarea.*

### 4. Numere $\overline{ab}$ impare cu $a, b \in \{2,3,4,5\}$, $a \ne b$

$b$ impar: $b \in \{3, 5\}$ — 2 variante; pentru fiecare, $a$ se alege din celelalte 3 cifre.

$$2\cdot 3 = 6.$$

**Răspuns:** $6$ numere. *Barem: 2p, 2p, 1p.*

### 5. Dreptunghiul $ABCD$ cu $AB = 8$, $BC = 6$; lungimea lui $\vec v = \overrightarrow{AB} + \overrightarrow{AO} + \overrightarrow{AD}$

Regula paralelogramului: $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC} = 2\overrightarrow{AO}$. Deci $\vec v = 3\overrightarrow{AO}$.

$AC = \sqrt{8^2 + 6^2} = 10$, $AO = 5$, deci $|\vec v| = 15$.

**Răspuns:** $15$. *Barem: 3p $\vec v = 3\overrightarrow{AO}$, 2p lungimea.*

### 6. $\sin A$ în triunghiul cu $AB = 6$, $BC = 10$, $\sin C = \frac35$

$$\frac{AB}{\sin C} = \frac{BC}{\sin A} \Rightarrow \frac{6}{3/5} = \frac{10}{\sin A} \Rightarrow 10 = \frac{10}{\sin A} \Rightarrow \sin A = 1.$$

**Răspuns:** $\sin A = 1$ (triunghiul este dreptunghic în $A$). *Barem: 2p teorema sinusurilor, 3p rezultatul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a&1&1\\1&a&1\\1&1&a\end{pmatrix}$

#### a) $\det(A(0))$

$$\det\begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix} = 0 + 1 + 1 - 0 - 0 - 0 = 2.$$

*Barem: 2p scrierea, 3p calculul.*

#### b) $a$ cu $5A(a) - (A(a))^2 = 4I_3$

$$(A(a))^2 = \begin{pmatrix}a^2 + 2 & 2a + 1 & 2a + 1\\2a+1 & a^2 + 2 & 2a+1\\2a+1 & 2a+1 & a^2+2\end{pmatrix},$$

$$5A(a) - (A(a))^2 = \begin{pmatrix}5a - a^2 - 2 & 4 - 2a & 4 - 2a\\4 - 2a & 5a - a^2 - 2 & 4 - 2a\\4 - 2a & 4 - 2a & 5a - a^2 - 2\end{pmatrix}.$$

Egalitatea cu $4I_3$ cere $4 - 2a = 0$ și $5a - a^2 - 2 = 4$: $a = 2$ verifică ambele ($10 - 4 - 2 = 4$).

**Răspuns:** $a = 2$. *Barem: 2p pătratul, 1p diferența, 2p valoarea.*

#### c) Inversa matricei $A(2)$

Din b): $A(2)\big(5I_3 - A(2)\big) = 4I_3$ și analog în ordine inversă, deci

$$\big(A(2)\big)^{-1} = \frac14\big(5I_3 - A(2)\big) = \frac14\begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}.$$

*Barem: 2p relația, 3p inversa.*

### 2. $f = X^3 - mX^2 + 3X - 1$

#### a) $f(2) - f(-2)$

$$f(2) = 8 - 4m + 6 - 1 = 13 - 4m, \qquad f(-2) = -8 - 4m - 6 - 1 = -15 - 4m.$$

$$f(2) - f(-2) = 28.$$

**Răspuns:** $28$. *Barem: 2p $f(2)$, 3p diferența.*

#### b) Restul împărțirii la $X + 2$, știind că restul la $X - 2$ este $9$

Teorema restului: $f(2) = 9$. Din a), $f(-2) = f(2) - 28 = -19$, iar restul împărțirii la $X + 2$ este $f(-2)$.

**Răspuns:** $-19$. *Barem: 2p $f(2) = 9$, 3p $f(-2) = -19$.*

#### c) $m$ cu $x_1^3 + x_2^3 + x_3^3 = 3$

Viète: $S_1 = m$, $S_2 = 3$, $S_3 = 1$. Deci $x_1^2 + x_2^2 + x_3^2 = m^2 - 6$.

Fiecare rădăcină verifică $x_i^3 = mx_i^2 - 3x_i + 1$; adunând:

$$x_1^3 + x_2^3 + x_3^3 = m(m^2 - 6) - 3m + 3 = m^3 - 9m + 3.$$

$m^3 - 9m + 3 = 3 \iff m(m^2 - 9) = 0 \iff m \in \{-3, 0, 3\}$.

**Răspuns:** $m \in \{-3, 0, 3\}$. *Barem: 2p suma pătratelor, 2p suma cuburilor, 1p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(-1,1)\to\mathbb R$, $f(x) = \ln\dfrac{1-x}{1+x}$

#### a) $f'(x)$

$f(x) = \ln(1 - x) - \ln(1 + x)$, deci

$$f'(x) = -\frac{1}{1-x} - \frac1{1+x} = -\frac{2}{1 - x^2} = \frac{2}{x^2 - 1}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) $f$ este descrescătoare pe $(-1, 1)$

Pentru $x \in (-1,1)$, $x^2 - 1 < 0$, deci $f'(x) < 0$ și $f$ este (strict) descrescătoare.

**Răspuns:** da. *Barem: 2p semnul numitorului, 3p concluzia.*

#### c) Punctele de inflexiune

$$f''(x) = -\frac{2\cdot 2x}{(x^2 - 1)^2} = -\frac{4x}{(x^2-1)^2}.$$

$f''(x) = 0 \iff x = 0$; $f'' \ge 0$ pe $(-1, 0]$ și $f'' \le 0$ pe $[0, 1)$, deci schimbă semnul.

**Răspuns:** $x = 0$. *Barem: 2p $f''$, 1p rădăcina, 2p concluzia.*

### 2. $I_n = \displaystyle\int_1^2 x^ne^x\,dx$

#### a) $I_0$

$$I_0 = \int_1^2 e^x\,dx = e^2 - e.$$

*Barem: 2p, 3p.*

#### b) $I_1 = e^2$

$$I_1 = xe^x\Big|_1^2 - \int_1^2 e^x\,dx = (2e^2 - e) - (e^2 - e) = e^2.$$

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $I_{n+1} + (n+1)I_n = 2^{n+1}e^2 - e$

Prin părți cu $u = x^{n+1}$, $v' = e^x$:

$$I_{n+1} = x^{n+1}e^x\Big|_1^2 - (n+1)\int_1^2x^ne^x\,dx = 2^{n+1}e^2 - e - (n+1)I_n. \ \blacksquare$$

*Barem: 2p scrierea, 3p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $x = 1$ |
| I.2 | $2$ |
| I.3 | $x = 0$ |
| I.4 | $6$ |
| I.5 | $15$ |
| I.6 | $\sin A = 1$ |
| II.1.a | $2$ |
| II.1.b | $a = 2$ |
| II.1.c | $\frac14\begin{pmatrix}3&-1&-1\\-1&3&-1\\-1&-1&3\end{pmatrix}$ |
| II.2.a | $28$ |
| II.2.b | $-19$ |
| II.2.c | $m \in \{-3, 0, 3\}$ |
| III.1.c | $x = 0$ |
| III.2.a | $e^2 - e$ |

## Ce merită reținut din varianta 3

- **Inversa dintr-o relație polinomială**: $A(5I - A) = 4I \Rightarrow A^{-1} = \frac14(5I - A)$.
- **Teorema restului**: restul împărțirii la $X - a$ este $f(a)$.
- **Suma cuburilor rădăcinilor**: înlocuiește $x_i^3$ din ecuație și adună.
- **$\ln\frac{1-x}{1+x}$**: scrie ca diferență de logaritmi înainte de derivare.

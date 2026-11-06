Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_șt-nat**, sesiunea de rezervă (subiectul poartă data de 2 iulie 2014), **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $z = 2 + i$; calculați $z^2$

$$z^2 = (2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i.$$

**Răspuns:** $z^2 = 3 + 4i$. *Barem: 3p, 2p.*

### 2. $M(m, 1)$ aparține graficului funcției $f(x) = x - 3$

$f(m) = 1 \iff m - 3 = 1 \iff m = 4$.

**Răspuns:** $m = 4$. *Barem: 2p, 3p.*

### 3. Ecuația $\log_3(x - 3) = 2$

Condiție: $x > 3$. $x - 3 = 3^2 = 9 \iff x = 12$, care verifică condiția.

**Răspuns:** $x = 12$. *Barem: 3p, 2p.*

### 4. Numărul submulțimilor cu număr impar de elemente ale lui $A = \{1, 2, 3, 4\}$

Submulțimi cu 1 element sau cu 3 elemente:

$$C_4^1 + C_4^3 = 4 + 4 = 8.$$

(În general, o mulțime cu $n \ge 1$ elemente are $2^{n-1}$ submulțimi cu număr impar de elemente.) **Răspuns:** $8$. *Barem: 3p, 2p.*

### 5. Dreptunghiul $ABCD$, $M$ mijlocul lui $AD$: $\overrightarrow{MB} + \overrightarrow{MC} = 2\overrightarrow{AB}$

$$\overrightarrow{MB} = \overrightarrow{MA} + \overrightarrow{AB}, \qquad \overrightarrow{MC} = \overrightarrow{MD} + \overrightarrow{DC}.$$

$M$ fiind mijlocul lui $AD$, $\overrightarrow{MA} + \overrightarrow{MD} = \vec 0$, iar $\overrightarrow{DC} = \overrightarrow{AB}$. Adunând: $\overrightarrow{MB} + \overrightarrow{MC} = 2\overrightarrow{AB}$. $\blacksquare$ *Barem: 2p, 3p.*

### 6. Triunghi dreptunghic în $A$: $\sin B\cos C + \sin C\cos B = 1$

$B + C = 90^\circ$, deci $\cos C = \sin B$ și $\sin C = \cos B$:

$$\sin B\cos C + \sin C\cos B = \sin^2 B + \cos^2 B = 1.$$

(Sau: expresia este $\sin(B + C) = \sin 90^\circ = 1$.) *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 0 & 2014\\ 1 & -1\end{pmatrix}$

#### a) $\det A$

$$\det A = 0\cdot(-1) - 2014\cdot 1 = -2014.$$

**Răspuns:** $-2014$. *Barem: 3p, 2p.*

#### b) $A + A\cdot A = 2014I_2$

$$A\cdot A = \begin{pmatrix} 2014 & -2014\\ -1 & 2015\end{pmatrix}, \qquad A + A\cdot A = \begin{pmatrix} 2014 & 0\\ 0 & 2014\end{pmatrix} = 2014I_2.$$

*Barem: 3p, 2p.*

#### c) Ecuația $A\cdot X = 2014I_2$

Din b), $A(I_2 + A) = A + A^2 = 2014I_2$. Cum $\det A \ne 0$, $A$ este inversabilă și soluția este unică:

$$X = I_2 + A = \begin{pmatrix} 1 & 2014\\ 1 & 0\end{pmatrix}.$$

(Altfel: $A^{-1} = \frac{1}{2014}\begin{pmatrix} 1 & 2014\\ 1 & 0\end{pmatrix}$ și $X = 2014A^{-1}$.) **Răspuns:** $X = \begin{pmatrix} 1 & 2014\\ 1 & 0\end{pmatrix}$. *Barem: 3p, 2p.*

### 2. $f = X^3 - 6X^2 + mX - 6$

#### a) $f(0)$

$f(0) = -6$. *Barem: 2p, 3p.*

#### b) $\dfrac{1}{x_1x_2} + \dfrac{1}{x_1x_3} + \dfrac{1}{x_2x_3} = 1$

Viète: $x_1 + x_2 + x_3 = 6$, $x_1x_2x_3 = 6$.

$$\frac{1}{x_1x_2} + \frac{1}{x_1x_3} + \frac{1}{x_2x_3} = \frac{x_3 + x_2 + x_1}{x_1x_2x_3} = \frac66 = 1.$$

*Barem: 2p, 3p.*

#### c) $m$ știind că rădăcinile sunt trei numere întregi consecutive

Fie rădăcinile $k - 1$, $k$, $k + 1$. Suma lor: $3k = 6 \Rightarrow k = 2$, deci rădăcinile sunt $1, 2, 3$ (produsul $6$, în acord cu Viète).

$$m = x_1x_2 + x_1x_3 + x_2x_3 = 2 + 3 + 6 = 11.$$

**Răspuns:** $m = 11$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x}{x^2 + 1}$

#### a) $f'(x) = \dfrac{(1 - x)(1 + x)}{(x^2+1)^2}$

$$f'(x) = \frac{(x^2 + 1) - x\cdot 2x}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2} = \frac{(1-x)(1+x)}{(x^2+1)^2}.$$

*Barem: 2p, 3p.*

#### b) Tangenta în punctul de abscisă $x_0 = 1$

$f(1) = \frac12$, $f'(1) = 0$, deci tangenta este $y = \dfrac12$.

**Răspuns:** $y = \dfrac12$. *Barem: 2p, 3p.*

#### c) Punctele de extrem

$f'(x) = 0 \iff x = \pm 1$. Semnul lui $f'$ este semnul lui $1 - x^2$: negativ pe $(-\infty, -1)$, pozitiv pe $(-1, 1)$, negativ pe $(1, +\infty)$.

**Răspuns:** $x = -1$ este punct de minim ($f(-1) = -\frac12$), $x = 1$ este punct de maxim ($f(1) = \frac12$). *Barem: 2p, 2p, 1p.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{1}{x+1} + \dfrac{1}{x+2} + \dfrac{1}{x+3}$

#### a) $\displaystyle\int_0^1\left(f(x) - \frac{1}{x+2} - \frac{1}{x+3}\right)dx = \ln 2$

$$\int_0^1\frac{dx}{x + 1} = \ln(x + 1)\Big|_0^1 = \ln 2.$$

*Barem: 2p, 3p.*

#### b) Orice primitivă a lui $f$ este concavă pe $(-1, +\infty)$

$$F''(x) = f'(x) = -\frac{1}{(x+1)^2} - \frac{1}{(x+2)^2} - \frac{1}{(x+3)^2} < 0,$$

deci $F$ este concavă. *Barem: 2p, 3p.*

#### c) Aria delimitată de $G_f$, $Ox$, $x = 0$, $x = n$ este cel puțin $\ln 4$

$f > 0$ pe $[0, n]$:

$$\mathcal A = \int_0^n f(x)\,dx = \ln\big((x+1)(x+2)(x+3)\big)\Big|_0^n = \ln\frac{(n+1)(n+2)(n+3)}{6}.$$

Pentru $n \ge 1$: $(n+1)(n+2)(n+3) \ge 2\cdot 3\cdot 4 = 24$, deci $\mathcal A \ge \ln\frac{24}{6} = \ln 4$ (logaritmul fiind crescător). $\blacksquare$ *Barem: 2p, 1p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $3 + 4i$ |
| I.2 | $m = 4$ |
| I.3 | $x = 12$ |
| I.4 | $8$ |
| II.1.a | $-2014$ |
| II.1.c | $X = \begin{pmatrix}1&2014\\1&0\end{pmatrix}$ |
| II.2.a | $-6$ |
| II.2.c | $m = 11$ |
| III.1.b | $y = \tfrac12$ |
| III.1.c | $x = -1$ (minim), $x = 1$ (maxim) |
| III.2.a | $\ln 2$ |

## Ce merită reținut din varianta 5

- **Submulțimi cu număr impar de elemente**: jumătate din toate submulțimile, adică $2^{n-1}$.
- **Ecuații matriceale $AX = cI$**: caută o relație de forma $A\cdot B = cI$ (aici $B = I + A$).
- **Rădăcini consecutive**: notează-le $k-1, k, k+1$ și folosește suma din Viète.
- **Concavitatea primitivei** se citește din semnul lui $f'$.

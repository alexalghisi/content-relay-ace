Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2013 la Matematică M_pedagogic**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Valoarea de adevăr a propoziției $\dfrac13 - \dfrac1{18} + \dfrac1{12} = \dfrac{13}{36}$

Aducem la numitorul comun 36:

$$\frac{12}{36} - \frac{2}{36} + \frac{3}{36} = \frac{13}{36}.$$

**Răspuns:** propoziția este adevărată. *Barem: 3p, 2p.*

### 2. Sistemul $\begin{cases} 2x + 3y = 1\\ 3x + 2y = -1\end{cases}$

Adunând: $5x + 5y = 0$, deci $y = -x$. Înlocuind în prima: $2x - 3x = 1 \Rightarrow x = -1$, $y = 1$.

**Răspuns:** $(x, y) = (-1, 1)$. *Barem: 2p, 3p.*

### 3. $x^2 + 2x - 3 < 0$

Rădăcinile: $x = -3$ și $x = 1$; trinomul este negativ între ele.

**Răspuns:** $x \in (-3, 1)$. *Barem: 3p, 2p.*

### 4. Domeniul maxim al lui $f(x) = \log_2(3 - x)$

Argumentul logaritmului trebuie să fie pozitiv: $3 - x > 0 \iff x < 3$.

**Răspuns:** $D = (-\infty, 3)$. *Barem: 2p, 3p.*

### 5. Pătratul $ABCD$ de centru $O$: $\vec{AO} = -\vec{CD} + \dfrac12\vec{BD}$

Regula triunghiului: $\vec{AO} = \vec{AB} + \vec{BO}$. În pătrat, $\vec{AB} = \vec{DC} = -\vec{CD}$, iar $O$ este mijlocul diagonalei $BD$, deci $\vec{BO} = \dfrac12\vec{BD}$. Rezultă egalitatea cerută. *Barem: 2p, 2p, 1p.*

### 6. Triunghiul cu laturile $5\sqrt2$, $5$, $5$ este dreptunghic isoscel

Are două laturi egale ($5 = 5$), deci este isoscel. În plus, $(5\sqrt2)^2 = 50 = 25 + 25 = 5^2 + 5^2$, deci, din reciproca teoremei lui Pitagora, este dreptunghic (unghiul drept opus laturii $5\sqrt2$). *Barem: 1p, 2p, 2p.*

## Subiectul al II-lea (30 de puncte)

Legea: $x\circ y = \log_3(3^x + 3^y + 1)$.

### 1. $0\circ0 = 1$

$0\circ0 = \log_3(1 + 1 + 1) = \log_3 3 = 1$. *Barem: 2p, 2p, 1p.*

### 2. Comutativitatea

$x\circ y = \log_3(3^x + 3^y + 1) = \log_3(3^y + 3^x + 1) = y\circ x$ (adunarea e comutativă). *Barem: 2p, 2p, 1p.*

### 3. $x\circ0 = x + 1$

$$\log_3(3^x + 2) = x + 1 \iff 3^x + 2 = 3\cdot3^x \iff 3^x = 1 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 2p, 2p, 1p.*

### 4. $x\circ y > 0$

$3^x > 0$, $3^y > 0$, deci $3^x + 3^y + 1 > 1$ și, cum $\log_3$ e crescătoare, $\log_3(3^x + 3^y + 1) > \log_3 1 = 0$. *Barem: 2p, 3p.*

### 5. Admite legea element neutru?

Dacă $e$ ar fi neutru: $x\circ e = x \Rightarrow 3^x + 3^e + 1 = 3^x \Rightarrow 3^e = -1$, imposibil.

**Răspuns:** legea **nu** admite element neutru. *Barem: 2p, 1p, 2p.*

### 6. $(x\circ x)\circ x = \log_3(2 + 3^{x+1})$

$x\circ x = \log_3(2\cdot3^x + 1)$, deci $3^{x\circ x} = 2\cdot 3^x + 1$ și

$$(x\circ x)\circ x = \log_3(2\cdot3^x + 1 + 3^x + 1) = \log_3(3\cdot3^x + 2) = \log_3(2 + 3^{x+1}).$$

*Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix} m & 1 & 2\\ 2 & -1 & m\\ 1 & 1 & 1\end{pmatrix}$, sistemul (S): $\begin{cases} mx + y + 2z = 1\\ 2x - y + mz = 2\\ x + y + z = -1\end{cases}$.

### 1. Pentru $m = 1$: $\det A = 3$

$$\begin{vmatrix} 1 & 1 & 2\\ 2 & -1 & 1\\ 1 & 1 & 1\end{vmatrix} = -1 + 1 + 4 + 2 - 1 - 2 = 3.$$

*Barem: 3p, 2p.*

### 2. $\det A$

Sarrus:

$$\det A = -m + m + 4 + 2 - m^2 - 2 = 4 - m^2.$$

**Răspuns:** $\det A = 4 - m^2$. *Barem: 3p, 2p.*

### 3. $m > 0$ cu $\det(2A) = -16$

$\det(2A) = 2^3\det A = 8(4 - m^2) = -16 \iff 4 - m^2 = -2 \iff m^2 = 6$. Cu $m > 0$: $m = \sqrt6$.

**Răspuns:** $m = \sqrt6$. *Barem: 2p, 1p, 2p.*

### 4. Pentru $m = 3$: este $\left(\dfrac75, -\dfrac85, -\dfrac45\right)$ soluție?

- $3\cdot\frac75 - \frac85 - \frac85 = \frac{21 - 16}{5} = 1$ ✔;
- $2\cdot\frac75 + \frac85 - \frac{12}{5} = \frac{14 + 8 - 12}{5} = 2$ ✔;
- $\frac{7 - 8 - 4}{5} = -1$ ✔.

**Răspuns:** da, este soluție. *Barem: 2p, 3p.*

### 5. Sistemul pentru $m = 1$

$x + y + 2z = 1$, $2x - y + z = 2$, $x + y + z = -1$. Prima minus a treia: $z = 2$. Rămân $x + y = -3$ și $2x - y = 0$, deci $3x = -3$, $x = -1$, $y = -2$.

**Răspuns:** $(x, y, z) = (-1, -2, 2)$. *Barem: 2p, 3p.*

### 6. Pentru $m = 2$ sistemul nu are soluții

$2x + y + 2z = 1$, $2x - y + 2z = 2$, $x + y + z = -1$. Scăzând primele două: $2y = -1$, $y = -\dfrac12$. Atunci prima dă $x + z = \dfrac34$, iar a treia $x + z = -\dfrac12$ — contradicție. Sistemul este incompatibil. $\blacksquare$ *Barem: 2p, 1p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | adevărată |
| I.2 | $(-1, 1)$ |
| I.3 | $x \in (-3, 1)$ |
| I.4 | $D = (-\infty, 3)$ |
| II.3 | $x = 0$ |
| II.5 | nu admite element neutru |
| III.2 | $4 - m^2$ |
| III.3 | $m = \sqrt6$ |
| III.4 | da |
| III.5 | $(-1, -2, 2)$ |
| III.6 | sistem incompatibil |

## Ce merită reținut din model

- **Legi cu logaritmi și exponențiale**: treci la $3^{x\circ y}$ ca să scapi de logaritm.
- **Element neutru inexistent**: arată că ecuația pentru $e$ duce la o imposibilitate ($3^e = -1$).
- **$\det(kA) = k^3\det A$** pentru matrice de ordinul 3.

Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Număr complex: arătați că $z(z + 2i) = 10$, pentru $z = 3 - i$

Calculăm întâi paranteza: $z + 2i = 3 - i + 2i = 3 + i$, adică exact conjugatul lui $z$.

$$z(z+2i) = (3-i)(3+i) = 9 - i^2 = 9 - (-1) = 10.$$

**De ce funcționează:** $(a-bi)(a+bi) = a^2 + b^2$ — produsul unui număr complex cu conjugatul său este mereu real. *Barem: 2p calculul produsului, 3p finalizarea.*

### 2. Funcția $f(x) = 3x - 4$: determinați $a$ cu $f(a) + f(-2a) = a$

$f(a) = 3a - 4$ și $f(-2a) = -6a - 4$. Ecuația devine:

$$3a - 4 - 6a - 4 = a \iff -3a - 8 = a \iff -4a = 8 \iff a = -2.$$

**Răspuns:** $a = -2$. *Barem: 3p expresiile, 2p rezolvarea ecuației.*

### 3. Ecuație irațională: $\sqrt{x^2 + 7} = 2\sqrt{x + 1}$

**Condiții de existență:** $x + 1 \ge 0$, adică $x \ge -1$ ($x^2 + 7 > 0$ mereu).

Ridicăm la pătrat (ambii membri sunt nenegativi): $x^2 + 7 = 4(x + 1) \iff x^2 - 4x + 3 = 0$, cu soluțiile $x_1 = 1$, $x_2 = 3$.

**Verificare:** $x = 1$: $\sqrt 8 = 2\sqrt 2$ ✔; $x = 3$: $\sqrt{16} = 2\cdot 2$ ✔.

**Răspuns:** $x \in \{1, 3\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.* Nu uita să scrii că soluțiile „convin” — verificarea face parte din punctaj.

### 4. Submulțimi cu 3 elemente ale lui $A = \{1, 2, 3, 5, 7\}$ care conțin 5

Dacă 5 este obligatoriu în submulțime, mai alegem **2 elemente** din celelalte 4: $\{1, 2, 3, 7\}$.

$$C_4^2 = \frac{4!}{2!\,2!} = 6.$$

**Răspuns:** 6 submulțimi. *Barem: 3p reducerea la submulțimi cu două elemente ale lui $A \setminus \{5\}$, 2p numărarea.*

### 5. Dreptele $OA$ și $BC$ paralele, $A(3,6)$, $B(4,1)$, $C(5,a)$

Pantele: $m_{OA} = \dfrac{6 - 0}{3 - 0} = 2$ și $m_{BC} = \dfrac{a - 1}{5 - 4} = a - 1$.

Drepte paralele $\Rightarrow$ pante egale: $a - 1 = 2 \Rightarrow a = 3$.

**Răspuns:** $a = 3$. *Barem: 2p $m_{OA}$, 3p $m_{BC}$ și concluzia.*

### 6. $E(x) = (1 + \operatorname{tg}^2 x)\sin\dfrac{x}{2} + \cos 3x$; arătați că $E\left(\dfrac{\pi}{3}\right) = 1$

Valori: $\operatorname{tg}\dfrac{\pi}{3} = \sqrt 3$, $\sin\dfrac{\pi}{6} = \dfrac12$, $\cos\pi = -1$.

$$E\left(\frac{\pi}{3}\right) = \left(1 + (\sqrt3)^2\right)\cdot\frac12 + (-1) = 4\cdot\frac12 - 1 = 1.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(a) = \begin{pmatrix}1 & a & a\\ a & 3 & a\\ 0 & 2 & 1\end{pmatrix}$ și sistemul $\begin{cases}x + ay + az = 1\\ ax + 3y + az = 0\\ 2y + z = 0\end{cases}$

#### a) $\det(A(1)) = 2$

$$\det(A(1)) = \begin{vmatrix}1 & 1 & 1\\ 1 & 3 & 1\\ 0 & 2 & 1\end{vmatrix} = 3 + 2 + 0 - 0 - 2 - 1 = 2.$$

(Regula lui Sarrus: suma produselor pe diagonala principală și „paralelele” ei, minus cele de pe diagonala secundară.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Sistemul are soluție unică pentru orice $a$ real

$$\det(A(a)) = \begin{vmatrix}1 & a & a\\ a & 3 & a\\ 0 & 2 & 1\end{vmatrix} = 3 + 2a^2 + 0 - 0 - 2a - a^2 = a^2 - 2a + 3.$$

Scriem ca pătrat perfect: $a^2 - 2a + 3 = (a-1)^2 + 2 \ge 2 > 0$, deci $\det(A(a)) \ne 0$ pentru orice $a$. Sistemul este **de tip Cramer** $\Rightarrow$ soluție unică.

*Barem: 3p determinantul, 2p justificarea că e nenul.*

#### c) $a$ natural nenul pentru care soluția are $z_0 = n x_0$, $n \in \mathbb N$

Cu regula lui Cramer, notând $\Delta = a^2 - 2a + 3$:

$$\Delta_x = \begin{vmatrix}1 & a & a\\ 0 & 3 & a\\ 0 & 2 & 1\end{vmatrix} = 3 - 2a, \qquad \Delta_z = \begin{vmatrix}1 & a & 1\\ a & 3 & 0\\ 0 & 2 & 0\end{vmatrix} = 2a.$$

Deci $x_0 = \dfrac{3 - 2a}{\Delta}$ și $z_0 = \dfrac{2a}{\Delta}$. Condiția $z_0 = n x_0$ devine $2a = n(3 - 2a)$.

Cum $a \ge 1$, membrul stâng $2a > 0$, deci și $n(3-2a) > 0$, adică $n \ge 1$ și $3 - 2a > 0 \Rightarrow a < \dfrac32 \Rightarrow a = 1$. Verificare: $2 = n \cdot 1 \Rightarrow n = 2$ ✔.

**Răspuns:** $a = 1$. *Barem: 3p relația $2a = n(3-2a)$, 2p concluzia.*

### 2. Legea $x * y = \dfrac23(x-3)(y-3) + 3$ (asociativă)

#### a) $0 * 2 = 5$

$$0 * 2 = \frac23(0-3)(2-3) + 3 = \frac23\cdot 3 + 3 = 2 + 3 = 5.$$

#### b) $x * \dfrac{3x}{2} = 5x$

$$x * \frac{3x}{2} = \frac23(x-3)\left(\frac{3x}{2} - 3\right) + 3 = \frac23(x-3)\cdot\frac{3(x-2)}{2} + 3 = (x-3)(x-2) + 3 = x^2 - 5x + 9.$$

Ecuația: $x^2 - 5x + 9 = 5x \iff x^2 - 10x + 9 = 0 \iff x \in \{1, 9\}$.

**Răspuns:** $x = 1$ sau $x = 9$. *Barem: 2p expresia, 3p soluțiile.*

#### c) Perechile $(m, n)$ de numere naturale cu $m * m * n = -1$

Pas 1: $m * m = \dfrac23(m-3)^2 + 3$.

Pas 2: $(m * m) * n = \dfrac23\left(\dfrac23(m-3)^2 + 3 - 3\right)(n-3) + 3 = \dfrac49(m-3)^2(n-3) + 3$.

Ecuația: $\dfrac49(m-3)^2(n-3) + 3 = -1 \iff (m-3)^2(n-3) = -9$.

$(m-3)^2$ este pătrat perfect și divizor al lui 9: poate fi $1$ sau $9$.

- $(m-3)^2 = 1 \Rightarrow n - 3 = -9 \Rightarrow n = -6 \notin \mathbb N$ — respins;
- $(m-3)^2 = 9 \Rightarrow n - 3 = -1 \Rightarrow n = 2$, iar $m - 3 = \pm 3 \Rightarrow m \in \{0, 6\}$.

**Răspuns:** $(m, n) \in \{(0, 2),\ (6, 2)\}$. *Barem: 2p calculul compunerii, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x^3 - 4x}{x^2 + 5}$

#### a) $f'(x) = \dfrac{(x^2 - 1)(x^2 + 20)}{(x^2 + 5)^2}$

Regula câtului $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$:

$$f'(x) = \frac{(3x^2 - 4)(x^2 + 5) - (x^3 - 4x)\cdot 2x}{(x^2+5)^2} = \frac{3x^4 + 11x^2 - 20 - 2x^4 + 8x^2}{(x^2+5)^2} = \frac{x^4 + 19x^2 - 20}{(x^2+5)^2}.$$

Descompunem: $x^4 + 19x^2 - 20 = (x^2 - 1)(x^2 + 20)$ (rădăcinile în $t = x^2$ sunt $1$ și $-20$). *Barem: 3p derivarea, 2p forma finală.*

#### b) Dreapta $y = x$ este asimptotă oblică spre $+\infty$

Pentru asimptota $y = mx + n$: $m = \lim\limits_{x\to+\infty}\dfrac{f(x)}{x} = 1$ și

$$n = \lim_{x\to+\infty}(f(x) - x) = \lim_{x\to+\infty}\frac{x^3 - 4x - x^3 - 5x}{x^2 + 5} = \lim_{x\to+\infty}\frac{-9x}{x^2+5} = 0.$$

Deci $y = x$ este asimptota oblică spre $+\infty$. *Barem: 2p + 3p.*

#### c) $m$ pentru care $f(x) = m$ are exact trei soluții

Din a): $f'(x) = 0 \iff x = \pm 1$. Semnul lui $f'$ este semnul lui $x^2 - 1$:

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | ↗ | $\tfrac12$ | ↘ | $-\tfrac12$ | ↗ | $+\infty$ |

Valorile: $f(-1) = \dfrac{-1 + 4}{6} = \dfrac12$, $f(1) = \dfrac{1 - 4}{6} = -\dfrac12$.

$f$ este continuă; o dreaptă orizontală $y = m$ taie graficul în **trei puncte** exact când trece strict între minimul local și maximul local: $m \in \left(-\dfrac12, \dfrac12\right)$.

**Răspuns:** $m \in \left(-\dfrac12, \dfrac12\right)$. Pentru $m = \pm\dfrac12$ sunt doar două soluții (una dublă) — capcană frecventă. *Barem: 2p monotonia, 3p concluzia.*

### 2. $f:(1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 - 4}{x\ln x}$

#### a) $\displaystyle\int_2^3 f(x)\, x\ln x\, dx = \frac73$

Produsul se simplifică: $f(x)\cdot x\ln x = x^2 - 4$.

$$\int_2^3 (x^2 - 4)\,dx = \left(\frac{x^3}{3} - 4x\right)\Big|_2^3 = (9 - 12) - \left(\frac83 - 8\right) = -3 + \frac{16}{3} = \frac73.$$

#### b) $\displaystyle\int_e^{e^2}\frac{f(x)}{x^2 - 4}\,dx = \ln 2$

$\dfrac{f(x)}{x^2 - 4} = \dfrac{1}{x\ln x} = \dfrac{(\ln x)'}{\ln x}$, deci o primitivă este $\ln(\ln x)$:

$$\int_e^{e^2}\frac{1}{x\ln x}\,dx = \ln(\ln x)\Big|_e^{e^2} = \ln 2 - \ln 1 = \ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\lim_{x\to2}\frac{1}{F^2(x)}\int_2^x (t-2)F(t)\,dt = \frac{\ln2}{4}$, unde $F$ e primitiva lui $f$ cu $F(2) = 0$

Pentru $x \to 2$, numărătorul $\int_2^x (t-2)F(t)\,dt \to 0$ și $F^2(x) \to F^2(2) = 0$: nedeterminare $\frac00$. Aplicăm **regula lui l'Hôpital** (derivata integralei cu limita superioară variabilă este integrandul):

$$\lim_{x\to2}\frac{(x-2)F(x)}{2F(x)f(x)} = \lim_{x\to2}\frac{x-2}{2f(x)}.$$

Cum $f(x) = \dfrac{(x-2)(x+2)}{x\ln x}$:

$$\lim_{x\to2}\frac{x-2}{2f(x)} = \lim_{x\to2}\frac{x\ln x}{2(x+2)} = \frac{2\ln2}{8} = \frac{\ln2}{4}.$$

*Barem: 3p aplicarea l'Hôpital, 2p calculul limitei.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z(z+2i) = 10$ |
| I.2 | $a = -2$ |
| I.3 | $x \in \{1, 3\}$ |
| I.4 | 6 submulțimi |
| I.5 | $a = 3$ |
| I.6 | $E(\pi/3) = 1$ |
| II.1.c | $a = 1$ |
| II.2.b | $x \in \{1, 9\}$ |
| II.2.c | $(0,2)$ și $(6,2)$ |
| III.1.c | $m \in (-\tfrac12, \tfrac12)$ |
| III.2.c | $\dfrac{\ln 2}{4}$ |

## Ce merită reținut din varianta 3

- **Sistemele cu parametru**: transformă determinantul într-un pătrat perfect plus o constantă pozitivă ca să arăți că e mereu nenul.
- **Legi de compoziție de forma** $k(x-a)(y-a) + a$: compunerea a trei elemente are forma $k^2(x-a)(y-a)(z-a) + a$ — calculează pas cu pas.
- **Numărul de soluții ale ecuației $f(x) = m$**: tabelul de variație + valorile extremelor locale răspund direct.
- **Limite cu integrale**: nedeterminarea $\frac00$ + l'Hôpital + teorema fundamentală a calculului integral.

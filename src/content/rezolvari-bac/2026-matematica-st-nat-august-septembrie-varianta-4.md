Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numere complexe: arătați că $iz_1 + z_2 = 4$, pentru $z_1 = 2 - 3i$, $z_2 = 1 - 2i$

Înmulțim întâi $z_1$ cu $i$, folosind $i^2 = -1$:

$$iz_1 = i(2 - 3i) = 2i - 3i^2 = 2i + 3.$$

Adunăm $z_2$:

$$iz_1 + z_2 = 3 + 2i + 1 - 2i = 4.$$

Părțile imaginare $2i$ și $-2i$ se reduc, rămâne numărul real $4$. *Barem: 2p calculul lui $iz_1 + z_2$ până la forma cu $i^2$, 3p finalizarea.*

### 2. Funcția $f(x) = x + 3$: determinați $a$ cu $f(a + 2) = a + f(a)$

Calculăm fiecare membru: $f(a + 2) = (a + 2) + 3 = a + 5$ și $f(a) = a + 3$. Ecuația devine:

$$a + 5 = a + (a + 3) \iff a + 5 = 2a + 3 \iff a = 2.$$

**Verificare:** $f(4) = 7$ și $2 + f(2) = 2 + 5 = 7$ ✔.

**Răspuns:** $a = 2$. *Barem: 2p expresiile $f(a+2)$ și $f(a)$, 3p rezolvarea ecuației.*

### 3. Ecuație irațională: $\sqrt{2x} = \sqrt{x^2 - x + 2}$

**Condiții de existență:** $2x \ge 0$, adică $x \ge 0$; $x^2 - x + 2$ are discriminantul $\Delta = 1 - 8 < 0$, deci este mereu pozitiv.

Ambii membri sunt nenegativi, deci putem ridica la pătrat:

$$2x = x^2 - x + 2 \iff x^2 - 3x + 2 = 0 \iff (x - 1)(x - 2) = 0,$$

cu soluțiile $x_1 = 1$, $x_2 = 2$.

**Verificare:** $x = 1$: $\sqrt 2 = \sqrt{1 - 1 + 2} = \sqrt 2$ ✔; $x = 2$: $\sqrt 4 = \sqrt{4 - 2 + 2} = \sqrt 4$ ✔.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 2p ecuația de gradul al II-lea, 3p soluțiile, cu precizarea că ele convin.*

### 4. Probabilitatea ca un număr natural de o cifră să verifice $3n^2 > 100$

**Cazuri posibile:** numerele naturale de o cifră sunt $0, 1, 2, \dots, 9$ — atenție, $0$ este și el număr natural de o cifră — deci sunt $10$ cazuri posibile.

**Cazuri favorabile:** $3n^2 > 100 \iff n^2 > \dfrac{100}{3} \approx 33{,}3$. Verificăm: $5^2 = 25$ nu convine ($3 \cdot 25 = 75$), $6^2 = 36$ convine ($3 \cdot 36 = 108 > 100$). Deci convin $n \in \{6, 7, 8, 9\}$ — $4$ cazuri favorabile.

$$p = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac{4}{10} = \frac25.$$

**Răspuns:** $p = \dfrac25$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. Distanța de la $C(1, 9)$ la mijlocul segmentului $AB$, cu $A(6, 0)$, $B(8, 2)$

Mijlocul $M$ al lui $AB$ are coordonatele mediile coordonatelor capetelor:

$$M\left(\frac{6 + 8}{2}, \frac{0 + 2}{2}\right) = M(7, 1).$$

Formula distanței:

$$CM = \sqrt{(7 - 1)^2 + (1 - 9)^2} = \sqrt{36 + 64} = \sqrt{100} = 10.$$

**Răspuns:** $CM = 10$. *Barem: 3p coordonatele mijlocului, 2p distanța.*

### 6. Triunghiul $ABC$ cu $AC = 9$ și $B = \dfrac{\pi}{3}$: arătați că $R = 3\sqrt3$

Din **teorema sinusurilor**, latura opusă unghiului $B$ este $AC$, iar

$$\frac{AC}{\sin B} = 2R.$$

Cum $\sin\dfrac{\pi}{3} = \dfrac{\sqrt3}{2}$:

$$2R = \frac{9}{\frac{\sqrt3}{2}} = \frac{18}{\sqrt3} = \frac{18\sqrt3}{3} = 6\sqrt3 \Rightarrow R = 3\sqrt3.$$

*Barem: 3p scrierea teoremei sinusurilor, 2p valoarea lui $\sin\frac{\pi}{3}$ și concluzia.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x, y) = \begin{pmatrix} x + y & xy \\ 4 & x + y \end{pmatrix}$, $x, y \in \mathbb R$

#### a) $\det(A(1, 2)) = 1$

Pentru $x = 1$, $y = 2$: $x + y = 3$, $xy = 2$, deci

$$A(1, 2) = \begin{pmatrix} 3 & 2 \\ 4 & 3 \end{pmatrix}, \qquad \det(A(1, 2)) = 3 \cdot 3 - 2 \cdot 4 = 9 - 8 = 1.$$

*Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

#### b) $A(x, y)$ este inversabilă pentru orice $x \ne y$

$$\det(A(x, y)) = (x + y)^2 - 4xy = x^2 + 2xy + y^2 - 4xy = x^2 - 2xy + y^2 = (x - y)^2.$$

O matrice pătratică este inversabilă dacă și numai dacă determinantul ei este nenul. Dacă $x \ne y$, atunci $x - y \ne 0$, deci $(x - y)^2 > 0$, adică $\det(A(x, y)) \ne 0$. Prin urmare $A(x, y)$ este inversabilă pentru orice numere reale distincte $x$ și $y$.

*Barem: 3p calculul determinantului ca $(x - y)^2$, 2p justificarea inversabilității.*

#### c) $x$ și $y$ cu $A(x, 2) \cdot A(x, 2) = 4A(y, 0)$

Scriem matricele:

$$A(x, 2) = \begin{pmatrix} x + 2 & 2x \\ 4 & x + 2 \end{pmatrix}, \qquad 4A(y, 0) = 4\begin{pmatrix} y & 0 \\ 4 & y \end{pmatrix} = \begin{pmatrix} 4y & 0 \\ 16 & 4y \end{pmatrix}.$$

Produsul (linie cu coloană):

$$A(x, 2)\cdot A(x, 2) = \begin{pmatrix} (x+2)^2 + 8x & 2x(x+2) + 2x(x+2) \\ 4(x+2) + 4(x+2) & 8x + (x+2)^2 \end{pmatrix} = \begin{pmatrix} x^2 + 12x + 4 & 4x^2 + 8x \\ 8x + 16 & x^2 + 12x + 4 \end{pmatrix}.$$

Egalăm element cu element:

- poziția $(2,1)$: $8x + 16 = 16 \Rightarrow x = 0$;
- poziția $(1,2)$: $4x^2 + 8x = 0$ — pentru $x = 0$ este verificată ✔;
- poziția $(1,1)$: $x^2 + 12x + 4 = 4y \Rightarrow 4 = 4y \Rightarrow y = 1$.

**Răspuns:** $x = 0$, $y = 1$. *Barem: 3p calculul produsului și al lui $4A(y,0)$, 2p valorile lui $x$ și $y$.* Greșeală frecventă: din $4x^2 + 8x = 0$ s-ar obține și $x = -2$, dar acesta nu verifică poziția $(2,1)$ — trebuie folosite toate egalitățile.

### 2. Legea $x * y = 5 - \dfrac{x + y}{2} + xy$

#### a) $1 * 3 = 6$

$$1 * 3 = 5 - \frac{1 + 3}{2} + 1 \cdot 3 = 5 - 2 + 3 = 6.$$

*Barem: 3p înlocuirea în lege, 2p calculul.*

#### b) $x$ real cu $x * 5 = 2x$

$$x * 5 = 5 - \frac{x + 5}{2} + 5x = \frac{10 - x - 5 + 10x}{2} = \frac{9x + 5}{2}.$$

Ecuația: $\dfrac{9x + 5}{2} = 2x \iff 9x + 5 = 4x \iff 5x = -5 \iff x = -1$.

**Verificare:** $(-1) * 5 = 5 - 2 - 5 = -2 = 2 \cdot (-1)$ ✔.

**Răspuns:** $x = -1$. *Barem: 3p expresia lui $x * 5$, 2p rezolvarea ecuației.*

#### c) Perechile $(m, n)$ de numere naturale cu $(m - n) * (m + n) = m^2$

Suma este $(m - n) + (m + n) = 2m$, iar produsul $(m - n)(m + n) = m^2 - n^2$. Deci

$$(m - n) * (m + n) = 5 - \frac{2m}{2} + m^2 - n^2 = 5 - m + m^2 - n^2.$$

Ecuația devine $5 - m + m^2 - n^2 = m^2 \iff m + n^2 = 5$.

Cum $m, n \in \mathbb N$, avem $n^2 \le 5$, deci $n \in \{0, 1, 2\}$:

- $n = 0 \Rightarrow m = 5$;
- $n = 1 \Rightarrow m = 4$;
- $n = 2 \Rightarrow m = 1$.

**Răspuns:** $(m, n) \in \{(1, 2), (4, 1), (5, 0)\}$. *Barem: 2p relația $m + n^2 = 5$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x^2 + 8x - 2}{x^2 + 2}$

#### a) $f'(x) = \dfrac{8(x + 1)(2 - x)}{(x^2 + 2)^2}$

Regula câtului $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$, cu $u = x^2 + 8x - 2$, $u' = 2x + 8$, $v = x^2 + 2$, $v' = 2x$:

$$f'(x) = \frac{(2x + 8)(x^2 + 2) - (x^2 + 8x - 2)\cdot 2x}{(x^2 + 2)^2}.$$

Dezvoltăm numărătorul:

$$(2x^3 + 8x^2 + 4x + 16) - (2x^3 + 16x^2 - 4x) = -8x^2 + 8x + 16 = -8(x^2 - x - 2) = -8(x + 1)(x - 2) = 8(x + 1)(2 - x).$$

Deci $f'(x) = \dfrac{8(x + 1)(2 - x)}{(x^2 + 2)^2}$, $x \in \mathbb R$. *Barem: 3p aplicarea regulii de derivare, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

Calculăm limita, dând factor comun forțat $x^2$:

$$\lim_{x \to +\infty} \frac{x^2 + 8x - 2}{x^2 + 2} = \lim_{x \to +\infty} \frac{x^2\left(1 + \frac8x - \frac{2}{x^2}\right)}{x^2\left(1 + \frac{2}{x^2}\right)} = \frac{1 + 0 - 0}{1 + 0} = 1.$$

Limita este finită, deci graficul are asimptotă orizontală spre $+\infty$.

**Răspuns:** dreapta de ecuație $y = 1$. *Barem: 3p calculul limitei, 2p concluzia.*

#### c) Demonstrați că $-2 \le f(x) - f(y) \le 2$, pentru orice $x, y \in [-4, 0]$

**Monotonia pe $[-4, 0]$.** Numitorul $(x^2 + 2)^2 > 0$, iar pentru $x \le 0$ avem $2 - x > 0$, deci semnul lui $f'$ pe $[-4, 0]$ este semnul lui $x + 1$:

- pe $[-4, -1]$: $x + 1 \le 0 \Rightarrow f'(x) \le 0$, $f$ descrescătoare;
- pe $[-1, 0]$: $x + 1 \ge 0 \Rightarrow f'(x) \ge 0$, $f$ crescătoare.

**Valorile la capete și în punctul de minim:**

$$f(-4) = \frac{16 - 32 - 2}{18} = -1, \qquad f(-1) = \frac{1 - 8 - 2}{3} = -3, \qquad f(0) = \frac{-2}{2} = -1.$$

Așadar pe $[-4, 0]$ minimul lui $f$ este $-3$ (în $x = -1$), iar maximul este $\max\{f(-4), f(0)\} = -1$:

$$-3 \le f(x) \le -1 \quad\text{și}\quad -3 \le f(y) \le -1, \quad \forall x, y \in [-4, 0].$$

Din a doua dublă inegalitate, înmulțind cu $-1$: $1 \le -f(y) \le 3$. Adunând cu prima:

$$-3 + 1 \le f(x) - f(y) \le -1 + 3 \iff -2 \le f(x) - f(y) \le 2.$$

*Barem: 2p monotonia lui $f$ pe $[-4,-1]$ și $[-1,0]$, 3p valorile $f(-4)$, $f(-1)$, $f(0)$, încadrarea și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 5x^2 - 3 + \ln x$

#### a) $\displaystyle\int_1^2 \left(f(x) - \ln x\right)dx = \frac{26}{3}$

Logaritmul se reduce: $f(x) - \ln x = 5x^2 - 3$.

$$\int_1^2 (5x^2 - 3)\,dx = \left(\frac{5x^3}{3} - 3x\right)\Big|_1^2 = \frac{5}{3}(8 - 1) - 3(2 - 1) = \frac{35}{3} - 3 = \frac{26}{3}.$$

*Barem: 3p primitiva, 2p calculul final.*

#### b) $\displaystyle\int_1^e \frac1x\left(f(x) - 5x^2 + 3\right)dx = \frac12$

Paranteza se reduce: $f(x) - 5x^2 + 3 = \ln x$, deci integrala este $\displaystyle\int_1^e \frac{\ln x}{x}\,dx$. Observăm că $\dfrac1x = (\ln x)'$, deci integrandul are forma $u \cdot u'$ cu $u = \ln x$, cu primitiva $\dfrac{u^2}{2}$:

$$\int_1^e \ln x\cdot(\ln x)'\,dx = \frac{\ln^2 x}{2}\Big|_1^e = \frac{\ln^2 e}{2} - \frac{\ln^2 1}{2} = \frac12 - 0 = \frac12.$$

*Barem: 3p primitiva $\frac{\ln^2 x}{2}$, 2p calculul.*

#### c) $m$ real pentru care aria de sub graficul lui $g(x) = \dfrac{f(x) + 3}{\sqrt x}$, între $x = 1$ și $x = 4$, este $58 + m\ln 2$

Avem $f(x) + 3 = 5x^2 + \ln x$, deci $g(x) = \dfrac{5x^2 + \ln x}{\sqrt x} = 5x\sqrt x + \dfrac{\ln x}{\sqrt x}$.

Pe $[1, 4]$: $5x^2 > 0$ și $\ln x \ge 0$, deci $g(x) > 0$ și aria este

$$\mathcal A = \int_1^4 |g(x)|\,dx = \int_1^4 \left(5x\sqrt x + \frac{\ln x}{\sqrt x}\right)dx.$$

**Primul termen:** $5x\sqrt x = 5x^{3/2}$, cu primitiva $5\cdot\dfrac{x^{5/2}}{5/2} = 2x^2\sqrt x$:

$$2x^2\sqrt x\,\Big|_1^4 = 2\cdot 16\cdot 2 - 2 = 62.$$

**Al doilea termen**, prin părți: $\dfrac{1}{\sqrt x} = (2\sqrt x)'$, deci

$$\int_1^4 (2\sqrt x)'\ln x\,dx = 2\sqrt x\ln x\,\Big|_1^4 - \int_1^4 2\sqrt x\cdot\frac1x\,dx = 4\ln 4 - \int_1^4 \frac{2}{\sqrt x}\,dx = 8\ln 2 - 4\sqrt x\,\Big|_1^4 = 8\ln 2 - 4.$$

Aria totală: $\mathcal A = 62 + 8\ln 2 - 4 = 58 + 8\ln 2$.

Din $58 + m\ln 2 = 58 + 8\ln 2$ obținem $m = 8$.

**Răspuns:** $m = 8$. *Barem: 2p scrierea ariei ca integrală din $g$ (cu $g \ge 0$), 3p calculul integralei și valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $iz_1 + z_2 = 4$ |
| I.2 | $a = 2$ |
| I.3 | $x \in \{1, 2\}$ |
| I.4 | $p = \tfrac25$ |
| I.5 | $CM = 10$ |
| I.6 | $R = 3\sqrt3$ |
| II.1.c | $x = 0$, $y = 1$ |
| II.2.b | $x = -1$ |
| II.2.c | $(1,2)$, $(4,1)$, $(5,0)$ |
| III.1.b | $y = 1$ |
| III.2.c | $m = 8$ |

## Ce merită reținut din varianta 4

- **Probabilități cu „numere de o cifră”**: $0$ intră în mulțime — sunt 10 cazuri posibile, nu 9.
- **Ecuații matriceale**: egalează toate elementele; o singură egalitate poate da soluții false.
- **Încadrarea unei diferențe** $f(x) - f(y)$: găsește minimul și maximul lui $f$ pe interval, apoi $\min - \max \le f(x) - f(y) \le \max - \min$.
- **Integrale cu $\dfrac{\ln x}{\sqrt x}$**: integrare prin părți cu $\dfrac{1}{\sqrt x} = (2\sqrt x)'$.

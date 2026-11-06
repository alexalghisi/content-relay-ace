Rezolvarea completă a subiectului de **Bacalaureat 2011 la Matematică M4** (filiera vocațională, profil pedagogic), sesiunea august–septembrie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Calculați $\log_2(5 + \sqrt{17}) + \log_2(5 - \sqrt{17})$

$$\log_2\big((5+\sqrt{17})(5-\sqrt{17})\big) = \log_2(25 - 17) = \log_2 8 = 3.$$

*Barem: 2p + 2p + 1p.*

### 2. Calculați $\dfrac{P_4 - C_4^1}{A_5^1}$

$P_4 = 4! = 24$, $C_4^1 = 4$, $A_5^1 = 5$:

$$\frac{24 - 4}{5} = 4.$$

*Barem: 3p valorile, 2p rezultatul.*

### 3. Parabolă cu abscisa vârfului $2$, care taie $Ox$ în $x = 5$ și în alt punct

Dreapta $x = 2$ este axă de simetrie a parabolei, deci punctele de intersecție cu $Ox$ sunt simetrice față de ea:

$$\frac{x_1 + 5}{2} = 2 \iff x_1 = -1.$$

**Răspuns:** $x_1 = -1$. *Barem: 2p axa de simetrie, 3p rezultatul.*

### 4. Ecuația $2^{x+3} = \frac14$ în $\mathbb Z$

$$2^{x+3} = 2^{-2} \iff x + 3 = -2 \iff x = -5 \in \mathbb Z.$$

*Barem: 2p + 1p + 2p.*

### 5. $AB \perp d$, unde $A(1,-2)$, $B(-2,4)$, $d: x - 2y + 3 = 0$

$d: y = \frac12x + \frac32$, deci $m_d = \frac12$. $m_{AB} = \dfrac{4 - (-2)}{-2 - 1} = -2$.

$m_d\cdot m_{AB} = \frac12\cdot(-2) = -1$, deci $AB \perp d$. $\blacksquare$ *Barem: 2p + 1p + 2p.*

### 6. Raza cercului circumscris, $AB = 6$, $C = 60^\circ$

$$2R = \frac{AB}{\sin C} = \frac{6}{\frac{\sqrt3}{2}} = \frac{12}{\sqrt3} = 4\sqrt3 \Rightarrow R = 2\sqrt3.$$

**Răspuns:** $R = 2\sqrt3$. *Barem: 2p + 2p + 1p.*

## Subiectul al II-lea (30 de puncte)

Legile pe $\mathbb R$: $x * y = x + y - 1$ și $x\circ y = \frac12(xy - x - y + 3)$.

### a) Legea $*$ este asociativă

$$(x*y)*z = (x + y - 1) + z - 1 = x + y + z - 2, \qquad x*(y*z) = x + (y + z - 1) - 1 = x + y + z - 2.$$

Egale pentru orice $x, y, z$. *Barem: 2p + 2p + 1p.*

### b) Elementul neutru pentru $*$

$x * e = x + e - 1 = x$ pentru orice $x \iff e = 1$ (și $e * x = x$ analog, legea fiind comutativă).

**Răspuns:** $e = 1$. *Barem: 2p + 2p + 1p.*

### c) $x\circ y = \frac12(x-1)(y-1) + 1$

$$\frac12(xy - x - y + 1 + 2) = \frac12(xy - x - y + 1) + 1 = \frac12(x-1)(y-1) + 1.$$

*Barem: 3p + 2p.*

### d) Ecuația $2^x\circ3 = 1$

$$\frac12(2^x - 1)(3 - 1) + 1 = 1 \iff 2^x - 1 = 0 \iff 2^x = 1 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 2p + 2p + 1p.*

### e) Sistemul $(x+1)*y = 3$, $(2x)\circ(y-1) = xy - 1$

- $(x+1) + y - 1 = 3 \iff x + y = 3$.
- $\frac12(2x - 1)(y - 2) + 1 = xy - 1 \iff (2x-1)(y-2) = 2xy - 4 \iff 2xy - 4x - y + 2 = 2xy - 4 \iff 4x + y = 6$.

Scăzând: $3x = 3$, deci $x = 1$, $y = 2$.

**Răspuns:** $x = 1$, $y = 2$. *Barem: 3p sistemul, 2p soluția.*

### f) $(x * y)\circ z = (x\circ z) * (y\circ z)$

Membrul stâng, cu c): $(x + y - 1)\circ z = \frac12(x + y - 2)(z - 1) + 1$.

Membrul drept:

$$(x\circ z) + (y\circ z) - 1 = \frac12(x-1)(z-1) + 1 + \frac12(y-1)(z-1) + 1 - 1 = \frac12(x + y - 2)(z-1) + 1.$$

Cele două expresii coincid. $\blacksquare$ *Barem: 2p + 2p + 1p.*

## Subiectul al III-lea (30 de puncte)

$A = \begin{pmatrix} 1 & 2 & a\\ 2 & a & 1\\ a & 1 & 2\end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 & 1\\ 1 & 0 & 1\\ 1 & 1 & 0\end{pmatrix}$ și sistemul $(S)$ cu matricea $A$ și termenii liberi $6, 6, 6$.

### a) $a$ pentru care $(1,1,1)$ este soluție

Fiecare ecuație devine $1 + 2 + a = 6$, deci $a = 3$.

**Răspuns:** $a = 3$. *Barem: 3p + 2p.*

### b) $A^2 - (a^2 + 5)I_3 = (3a + 2)B$

$$A^2 = \begin{pmatrix} a^2 + 5 & 3a + 2 & 3a + 2\\ 3a + 2 & a^2 + 5 & 3a + 2\\ 3a + 2 & 3a + 2 & a^2 + 5\end{pmatrix}$$

(de exemplu $(1,1)$: $1 + 4 + a^2$; $(1,2)$: $2 + 2a + a = 3a + 2$; matricea fiind simetrică „circulantă", la fel pentru toate). Scăzând $(a^2 + 5)I_3$ rămâne exact $(3a+2)B$. $\blacksquare$ *Barem: 2p $A^2$, 1p + 1p, 1p finalizarea.*

### c) Suma elementelor lui $A^2$ egală cu $0$

$$3(a^2 + 5) + 6(3a + 2) = 3a^2 + 18a + 27 = 3(a + 3)^2 = 0 \iff a = -3.$$

**Răspuns:** $a = -3$. *Barem: 3p suma, 2p valoarea.*

### d) Pentru $a = -3$, $(S)$ este incompatibil

$$\begin{cases} x + 2y - 3z = 6\\ 2x - 3y + z = 6\\ -3x + y + 2z = 6\end{cases}$$

Adunând cele trei ecuații: membrul stâng devine $0x + 0y + 0z = 0$, iar membrul drept $18$. Obținem $0 = 18$, contradicție, deci sistemul este incompatibil. *Barem: 1p + 3p + 1p.*

### e) Pentru $a = 0$, rezolvați $(S)$

$$\begin{cases} x + 2y = 6\\ 2x + z = 6\\ y + 2z = 6\end{cases}$$

Din prima: $x = 6 - 2y$; din a doua: $z = 6 - 2x = 4y - 6$; în a treia: $y + 8y - 12 = 6 \Rightarrow y = 2$, deci $x = 2$, $z = 2$.

**Răspuns:** $(2, 2, 2)$. *Barem: 2p + 3p.*

### f) Inversa lui $B$

$\det B = 0 + 1 + 1 - 0 - 0 - 0 = 2 \ne 0$. Observăm $B^2 = \begin{pmatrix} 2 & 1 & 1\\ 1 & 2 & 1\\ 1 & 1 & 2\end{pmatrix} = B + 2I_3$, deci $B(B - I_3) = 2I_3$ și

$$B^{-1} = \frac12(B - I_3) = \begin{pmatrix} -\frac12 & \frac12 & \frac12\\ \frac12 & -\frac12 & \frac12\\ \frac12 & \frac12 & -\frac12\end{pmatrix}.$$

(Același rezultat se obține cu adjuncta $B^* = \begin{pmatrix} -1 & 1 & 1\\ 1 & -1 & 1\\ 1 & 1 & -1\end{pmatrix}$.) *Barem: 2p determinantul, 3p inversa.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $3$ |
| I.2 | $4$ |
| I.3 | $-1$ |
| I.4 | $x = -5$ |
| I.6 | $R = 2\sqrt3$ |
| II.b | $e = 1$ |
| II.d | $x = 0$ |
| II.e | $x = 1$, $y = 2$ |
| III.a | $a = 3$ |
| III.c | $a = -3$ |
| III.e | $(2, 2, 2)$ |
| III.f | $B^{-1} = \frac12(B - I_3)$ |

## Ce merită reținut din varianta 2

- **Rădăcinile unei funcții de gradul II** sunt simetrice față de abscisa vârfului: $\frac{x_1 + x_2}{2} = x_V$.
- **Legea $x + y - k$** are elementul neutru $k$.
- **Sisteme incompatibile**: caută o combinație a ecuațiilor care anulează necunoscutele, dar nu și termenul liber.
- **Relații de tip $B^2 = B + 2I$** dau inversa fără adjunctă.

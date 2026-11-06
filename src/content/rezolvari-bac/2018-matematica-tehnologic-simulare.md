Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_tehnologic**, **simularea pentru clasa a XII-a**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Rația progresiei geometrice cu $b_1 = 3$, $b_4 = 24$

$$b_4 = b_1q^3 \Rightarrow 3q^3 = 24 \Rightarrow q^3 = 8 \Rightarrow q = 2.$$

**Răspuns:** $q = 2$. *Barem: 3p $q^3 = 8$, 2p $q = 2$.*

### 2. $A(a, 2)$ aparține graficului lui $f(x) = x^2 - 2x + 3$

$$f(a) = 2 \iff a^2 - 2a + 3 = 2 \iff a^2 - 2a + 1 = 0 \iff (a-1)^2 = 0 \iff a = 1.$$

**Răspuns:** $a = 1$. *Barem: 3p ecuația, 2p soluția.*

### 3. Ecuația $\log_3(x+1) + \log_3(x-1) = \log_3 8$

**Condiții:** $x + 1 > 0$ și $x - 1 > 0$, deci $x > 1$.

$$\log_3\big((x+1)(x-1)\big) = \log_3 8 \iff x^2 - 1 = 8 \iff x^2 = 9 \iff x = \pm 3.$$

$x = -3$ nu respectă condiția; $x = 3$ convine.

**Răspuns:** $x = 3$. *Barem: 3p $x^2 - 1 = 8$, 2p selectarea soluției.*

### 4. Numere de trei cifre cu produsul cifrelor $7$

$7$ este prim, deci cifrele sunt $1, 1, 7$ (în orice ordine): $117$, $171$, $711$.

**Răspuns:** $117, 171, 711$. *Barem: 2p cifrele, 3p numerele.*

### 5. $A(1,2)$, $B(5,5)$, $C(7,10)$: $AC = 2AB$

$$AB = \sqrt{4^2 + 3^2} = 5, \qquad AC = \sqrt{6^2 + 8^2} = 10 = 2AB.$$

*Barem: 2p $AB$, 3p $AC$ și concluzia.*

### 6. Aria triunghiului $MNP$ cu $MN = 4$, $\angle N = \angle P = 75^\circ$

Unghiurile din $N$ și $P$ sunt egale, deci triunghiul este isoscel cu $MP = MN = 4$, iar $\angle M = 180^\circ - 150^\circ = 30^\circ$.

$$\mathcal A_{MNP} = \frac{MN\cdot MP\cdot\sin M}{2} = \frac{4\cdot 4\cdot\frac12}{2} = 4.$$

**Răspuns:** $4$. *Barem: 2p $MP = 4$, 3p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix}3&7\\2&5\end{pmatrix}$, $B = \begin{pmatrix}5&-7\\-2&3\end{pmatrix}$

#### a) $5A - 3B = 8\begin{pmatrix}0&7\\2&2\end{pmatrix}$

$$5A - 3B = \begin{pmatrix}15&35\\10&25\end{pmatrix} - \begin{pmatrix}15&-21\\-6&9\end{pmatrix} = \begin{pmatrix}0&56\\16&16\end{pmatrix} = 8\begin{pmatrix}0&7\\2&2\end{pmatrix}.$$

*Barem: 3p calculul, 2p factorizarea.*

#### b) $B$ este inversa lui $A$

$$A B = \begin{pmatrix}15 - 14 & -21 + 21\\10 - 10 & -14 + 15\end{pmatrix} = I_2, \qquad BA = \begin{pmatrix}15 - 14 & 35 - 35\\-6 + 6 & -14 + 15\end{pmatrix} = I_2.$$

Deci $B = A^{-1}$. *Barem: 2p $AB$, 3p $BA$ și concluzia.*

#### c) $x, y$ cu $xA\cdot A - 8A = yI_2$

Înmulțim la dreapta cu $B = A^{-1}$:

$$xA - 8I_2 = yB \iff \begin{pmatrix}3x - 8 & 7x\\2x & 5x - 8\end{pmatrix} = \begin{pmatrix}5y & -7y\\-2y & 3y\end{pmatrix}.$$

Din $7x = -7y$: $y = -x$. Din $3x - 8 = -5x$: $x = 1$, $y = -1$ (și $5 - 8 = -3 = 3y$ ✔).

**Răspuns:** $x = 1$, $y = -1$. *Barem: 3p ecuația matriceală, 2p valorile.*

### 2. Legea $x * y = xy - 2(x + y) + 6$ (asociativă)

#### a) $x * y = (x-2)(y-2) + 2$

$$x * y = xy - 2x - 2y + 4 + 2 = x(y-2) - 2(y-2) + 2 = (x-2)(y-2) + 2.$$

*Barem: 2p rescrierea, 3p factorizarea.*

#### b) $x * 3 = 2018$

$$(x-2)(3-2) + 2 = 2018 \iff x - 2 = 2016 \iff x = 2018.$$

**Răspuns:** $x = 2018$. *Barem: 2p ecuația, 3p soluția.*

#### c) $\log_2 2 * \log_2 3 * \log_2 4 * \dots * \log_2 2018$

Din a): $x * 2 = (x-2)\cdot 0 + 2 = 2$ și $2 * y = 2$ pentru orice $x, y$ ($2$ este element „absorbant”).

Printre factori apare $\log_2 4 = 2$. Folosind asociativitatea:

$$\big((\log_2 2 * \log_2 3) * 2\big) * (\log_2 5 * \dots * \log_2 2018) = 2 * (\dots) = 2.$$

**Răspuns:** $2$. *Barem: 2p elementul absorbant, 3p calculul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^6 - 6x + 10$

#### a) $\displaystyle\lim_{x\to1}\frac{f(x) - 5}{x - 1} = 0$

$f(1) = 1 - 6 + 10 = 5$, deci limita este derivata în $1$: $f'(x) = 6x^5 - 6$, $f'(1) = 0$.

$$\lim_{x\to1}\frac{f(x) - f(1)}{x - 1} = f'(1) = 0.$$

*Barem: 2p derivata, 3p limita.*

#### b) Intervalele de monotonie

$f'(x) = 6(x^5 - 1) = 0 \iff x = 1$. Pentru $x \le 1$, $x^5 \le 1$ și $f' \le 0$; pentru $x \ge 1$, $f' \ge 0$.

**Răspuns:** $f$ descrescătoare pe $(-\infty, 1]$, crescătoare pe $[1, +\infty)$. *Barem: 2p $f' = 0$, 3p monotonia.*

#### c) $f(0{,}9) + f(1{,}1) \ge 10$

Din b), $x = 1$ este punct de minim global: $f(x) \ge f(1) = 5$ pentru orice $x$. Deci $f(0{,}9) \ge 5$ și $f(1{,}1) \ge 5$, iar suma este $\ge 10$. $\blacksquare$ *Barem: 2p $f(x) \ge 5$, 3p concluzia.*

### 2. $f(x) = xe^x$

#### a) $\displaystyle\int_1^2 \frac{f(x)}{x}\,dx = e(e-1)$

$$\int_1^2 e^x\,dx = e^x\Big|_1^2 = e^2 - e = e(e-1).$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Primitiva $F$ cu $F(1) = 0$

Integrăm prin părți ($u = x$, $v' = e^x$):

$$\int xe^x\,dx = xe^x - \int e^x\,dx = (x-1)e^x + c.$$

$F(1) = 0\cdot e + c = 0 \Rightarrow c = 0$.

**Răspuns:** $F(x) = (x-1)e^x$. *Barem: 3p primitivele, 2p constanta.*

#### c) $a$ cu $\displaystyle\int_0^1 f(x)f'(x)\,dx = \frac12 e^a$

$$\int_0^1 f(x)f'(x)\,dx = \frac{f^2(x)}{2}\Big|_0^1 = \frac{e^2}{2} - 0 = \frac12 e^2.$$

**Răspuns:** $a = 2$. *Barem: 3p integrala, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $q = 2$ |
| I.2 | $a = 1$ |
| I.3 | $x = 3$ |
| I.4 | $117, 171, 711$ |
| I.6 | aria $= 4$ |
| II.1.c | $x = 1$, $y = -1$ |
| II.2.b | $x = 2018$ |
| II.2.c | $2$ |
| III.1.b | descr. pe $(-\infty,1]$, cresc. pe $[1,+\infty)$ |
| III.2.b | $F(x) = (x-1)e^x$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din simulare

- **Element absorbant**: dacă $x * a = a$ pentru orice $x$, orice compunere care îl conține pe $a$ dă $a$.
- **Limita $\frac{f(x) - f(a)}{x - a}$** este definiția derivatei în $a$.
- **Minim global din monotonie** demonstrează rapid inegalități numerice.
- **$\int f f' = \frac{f^2}{2}$** — formă $u'u$.

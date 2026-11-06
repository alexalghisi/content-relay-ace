Rezolvarea completă a **simulării de Bacalaureat 2016 la Matematică M_tehnologic** pentru clasa a XII-a. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $a, b$ reali cu $\frac{10}{3 + i} = a + ib$

Amplificăm cu conjugatul $3 - i$:

$$\frac{10}{3 + i} = \frac{10(3 - i)}{9 - i^2} = \frac{10(3 - i)}{10} = 3 - i.$$

**Răspuns:** $a = 3$, $b = -1$. *Barem: 3p + 2p.*

### 2. $f(x) = x^2 - 1$; $(f(1))^{2016} + (f(0))^{2016}$

$f(1) = 0$, $f(0) = -1$, deci $0^{2016} + (-1)^{2016} = 0 + 1 = 1$. *Barem: 2p + 3p.*

### 3. Ecuația $6^{x^2 - 3x + 5} = 216$

$216 = 6^3$, deci $x^2 - 3x + 5 = 3 \iff x^2 - 3x + 2 = 0 \iff (x-1)(x-2) = 0$.

**Răspuns:** $x \in \{1, 2\}$. *Barem: 3p + 2p.*

### 4. În câte moduri se alege o echipă de 5 elevi din 6

Ordinea nu contează, deci combinări:

$$C_6^5 = C_6^1 = 6.$$

*Barem: 3p + 2p.*

### 5. $A(5,0)$, $B(2m+1, 0)$; $C(10,0)$ este mijlocul lui $AB$

$$10 = \frac{5 + 2m + 1}{2} \iff 2m + 6 = 20 \iff m = 7.$$

*Barem: 3p + 2p.*

### 6. $\cos C$ în triunghiul cu $AB = 5$, $AC = 12$, $BC = 13$

$5^2 + 12^2 = 169 = 13^2$, deci triunghiul e dreptunghic în $A$. $AC$ este cateta alăturată unghiului $C$:

$$\cos C = \frac{AC}{BC} = \frac{12}{13}.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} 1 & 2 & 4\\ 0 & 1 & 3\\ 0 & 0 & 1\end{pmatrix}$

#### a) $\det A$

Matrice superior triunghiulară cu diagonala $1, 1, 1$: $\det A = 1$. *Barem: 3p + 2p.*

#### b) $(A - I_3)^3 = O_3$

$$A - I_3 = \begin{pmatrix} 0 & 2 & 4\\ 0 & 0 & 3\\ 0 & 0 & 0\end{pmatrix}, \qquad (A - I_3)^2 = \begin{pmatrix} 0 & 0 & 6\\ 0 & 0 & 0\\ 0 & 0 & 0\end{pmatrix},$$

iar înmulțind încă o dată cu $A - I_3$ obținem $O_3$ (singura linie nenulă, $(0, 0, 6)$, înmulțită cu orice coloană a lui $A - I_3$, care are ultima componentă $0$, dă $0$). $\blacksquare$ *Barem: 2p + 3p.*

#### c) $AX = \begin{pmatrix} 0\\ 1\\ 2\end{pmatrix}$

$$\begin{cases} x + 2y + 4z = 0\\ y + 3z = 1\\ z = 2\end{cases}$$

Rezolvăm de jos în sus: $z = 2$, $y = 1 - 6 = -5$, $x = -2y - 4z = 10 - 8 = 2$.

**Răspuns:** $X = \begin{pmatrix} 2\\ -5\\ 2\end{pmatrix}$. *Barem: 2p + 3p.*

### 2. Legea asociativă $x * y = xy - x - y + 2$

#### a) $x * y = (x-1)(y-1) + 1$

$$xy - x - y + 1 + 1 = x(y-1) - (y-1) + 1 = (x-1)(y-1) + 1.$$

*Barem: 2p + 3p.*

#### b) $0 * 1 * 2 * 3$

$1$ este element absorbant: $x * 1 = (x-1)\cdot0 + 1 = 1$ și $1 * y = 1$. Deci $(0 * 1) * (2 * 3) = 1 * (2 * 3) = 1$.

**Răspuns:** $1$. *Barem: 3p + 2p.*

#### c) $a * a * 2016 = 2016$

$a * a = (a-1)^2 + 1$, iar

$$(a * a) * 2016 = (a-1)^2\cdot2015 + 1.$$

$2015(a-1)^2 + 1 = 2016 \iff (a-1)^2 = 1 \iff a \in \{0, 2\}$. *Barem: 2p + 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = \dfrac{x+1}{x}$

#### a) $\lim\limits_{x\to2}\dfrac{f(x) - f(2)}{x - 2}$

$f(x) = 1 + \frac1x$, $f'(x) = -\frac{1}{x^2}$; limita este $f'(2) = -\frac14$. *Barem: 2p + 3p.*

#### b) Tangenta în $x = 1$

$f(1) = 2$, $f'(1) = -1$: $y - 2 = -(x - 1) \iff y = -x + 3$. *Barem: 2p + 3p.*

#### c) $\frac{2017}{2016} \le f(x) \le 2$ pentru $x \in [1, 2016]$

$f'(x) < 0$, deci $f$ este descrescătoare: $f(2016) \le f(x) \le f(1)$, adică $\dfrac{2017}{2016} \le f(x) \le 2$. $\blacksquare$ *Barem: 2p + 3p.*

### 2. $f(x) = x^3 - 3x^2 + 2$

#### a) $\displaystyle\int_0^2(f(x) + 3x^2 - 2)\,dx$

$$\int_0^2 x^3\,dx = \frac{x^4}{4}\Big|_0^2 = 4.$$

*Barem: 3p + 2p.*

#### b) $\displaystyle\int_0^1(f(x) - x^3 + 3x^2 + x)e^x\,dx = 2e - 1$

Integrandul este $(2 + x)e^x$, cu primitiva $(1 + x)e^x$ (derivata: $e^x + (1 + x)e^x = (2 + x)e^x$ ✔):

$$(1 + x)e^x\Big|_0^1 = 2e - 1.$$

*Barem: 2p + 3p.*

#### c) $\displaystyle\int_{1-a}^{1+a} f(x)\,dx = 0$ pentru orice $a$

Cu substituția $x = 1 + t$:

$$f(1 + t) = (1+t)^3 - 3(1+t)^2 + 2 = t^3 - 3t,$$

care este o funcție impară de $t$. Atunci

$$\int_{1-a}^{1+a} f(x)\,dx = \int_{-a}^{a}(t^3 - 3t)\,dt = 0.$$

(Baremul calculează direct cu primitiva $\frac{x^4}{4} - x^3 + 2x$ și obține $0$.) $\blacksquare$ *Barem: 2p + 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 3$, $b = -1$ |
| I.2 | $1$ |
| I.3 | $x \in \{1, 2\}$ |
| I.4 | $6$ |
| I.5 | $m = 7$ |
| I.6 | $\cos C = \frac{12}{13}$ |
| II.1.a | $1$ |
| II.1.c | $(2, -5, 2)$ |
| II.2.b | $1$ |
| II.2.c | $a \in \{0, 2\}$ |
| III.1.a | $-\frac14$ |
| III.1.b | $y = -x + 3$ |
| III.2.a | $4$ |

## Ce merită reținut din simularea 2016

- **Împărțirea cu numere complexe**: amplifică cu conjugatul numitorului.
- **$C_n^k = C_n^{n-k}$** — alegerea a 5 din 6 echivalează cu excluderea unuia.
- **Matricele strict triunghiulare $3\times3$** sunt nilpotente: $N^3 = O_3$.
- **Simetria graficului** față de un punct ($f(1+t)$ impară în $t$) anulează integrala pe un interval simetric în jurul lui.

Rezolvarea completă a subiectului de **Bacalaureat 2015 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 1**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Al treilea termen, $a_1 = 2$, $a_2 = 5$

$r = 3$, $a_3 = 8$. **Răspuns:** $a_3 = 8$. *Barem: 3p, 2p.*

### 2. $A(3, 5)$ pe graficul lui $f(x) = a - x$

$f(3) = a - 3 = 5 \iff a = 8$. **Răspuns:** $a = 8$. *Barem: 3p, 2p.*

### 3. $8^{4-x} = 2^{2x+2}$

$8^{4-x} = 2^{12 - 3x}$, deci $12 - 3x = 2x + 2 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca produsul cifrelor unui număr de două cifre să fie 0

Prima cifră e nenulă, deci a doua trebuie să fie $0$: $10, 20, \dots, 90$ — 9 favorabile din 90.

**Răspuns:** $p = \dfrac{1}{10}$. *Barem: 1p, 2p, 2p.*

### 5. Dreapta prin $M(1,1)$ cu panta $2$

$y - 1 = 2(x - 1) \iff y = 2x - 1$. *Barem: 2p, 3p.*

### 6. $AB = 5$, $AC = 12$, $BC = 13$: $\sin C = \dfrac5{13}$

$13^2 = 169 = 25 + 144 = 5^2 + 12^2$, deci triunghiul e dreptunghic în $A$ și $\sin C = \dfrac{AB}{BC} = \dfrac5{13}$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} 1 - x & 0 & 2x\\ 0 & 1 & 0\\ -x & 0 & 1 + 2x\end{pmatrix}$

#### a) $\det(A(1)) = 2$

$$\begin{vmatrix} 0 & 0 & 2\\ 0 & 1 & 0\\ -1 & 0 & 3\end{vmatrix} = 0 + 0 + 0 - (2\cdot1\cdot(-1)) - 0 - 0 = 2.$$

*Barem: 2p, 3p.*

#### b) $A(x)A(y) = A(xy + x + y)$

Elementele nenule (linia și coloana a doua sunt triviale):

- $(1,1)$: $(1 - x)(1 - y) - 2xy = 1 - (xy + x + y)$;
- $(1,3)$: $2y(1 - x) + 2x(1 + 2y) = 2(xy + x + y)$;
- $(3,1)$: $-x(1 - y) - y(1 + 2x) = -(xy + x + y)$;
- $(3,3)$: $-2xy + (1 + 2x)(1 + 2y) = 1 + 2(xy + x + y)$.

Deci produsul este $A(xy + x + y)$. *Barem: 3p, 2p.*

#### c) $A(x)A(x)A(x) = A(7)$

$xy + x + y = (x + 1)(y + 1) - 1$, deci $A(x)A(x) = A((x+1)^2 - 1)$ și $A(x)^3 = A((x + 1)^3 - 1)$. Cum $A(a) = A(b) \iff a = b$:

$$(x + 1)^3 - 1 = 7 \iff (x + 1)^3 = 8 \iff x = 1.$$

**Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 2. $f = X^3 + 2X^2 + X + m$

#### a) $f(0) = m$

$0 + 0 + 0 + m = m$. *Barem: 3p, 2p.*

#### b) Pentru $m = 1$: $x_1^3 + x_2^3 + x_3^3 = 5x_1x_2x_3$

Viète: $\sum x_i = -2$, $\sum x_ix_j = 1$, $x_1x_2x_3 = -1$; $\sum x_i^2 = 4 - 2 = 2$.

Fiecare rădăcină verifică $x_i^3 = -2x_i^2 - x_i - 1$, deci

$$\sum x_i^3 = -2\cdot 2 - (-2) - 3 = -5 = 5\cdot(-1) = 5x_1x_2x_3. \ \blacksquare$$

*Barem: 3p, 2p.*

#### c) $m$ prim pentru care $f$ are o rădăcină întreagă

Dacă $x_1 \in \mathbb Z$ și $f(x_1) = 0$: $m = -x_1^3 - 2x_1^2 - x_1 = -x_1(x_1 + 1)^2$.

$m$ prim (pozitiv) impune $x_1 < 0$ și $m = |x_1|\cdot(x_1 + 1)^2$. Un număr prim are un singur factor diferit de 1:

- $(x_1 + 1)^2 = 1 \Rightarrow x_1 = -2$ ($x_1 = 0$ nu convine), $m = 2$ — prim ✔;
- $|x_1| = 1 \Rightarrow x_1 = -1$, $m = 0$ — nu e prim.

**Răspuns:** $m = 2$. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x - \sqrt{x^2 + 1}$

#### a) $f'(x) = 1 - \dfrac{x}{\sqrt{x^2+1}}$

$f'(x) = 1 - \dfrac{2x}{2\sqrt{x^2+1}} = 1 - \dfrac{x}{\sqrt{x^2 + 1}}$. *Barem: 3p, 2p.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\left(x - \sqrt{x^2+1}\right) = \lim_{x\to+\infty}\frac{-1}{x + \sqrt{x^2 + 1}} = 0.$$

**Răspuns:** $y = 0$. *Barem: 3p, 2p.*

#### c) $f'$ descrescătoare pe $\mathbb R$

$$f''(x) = -\frac{\sqrt{x^2 + 1} - x\cdot\frac{x}{\sqrt{x^2+1}}}{x^2 + 1} = -\frac{1}{(x^2 + 1)\sqrt{x^2 + 1}} < 0,$$

deci $f'$ este descrescătoare. *Barem: 3p, 2p.*

### 2. $f(x) = \ln x$

#### a) $\displaystyle\int_1^e\frac1x\,dx = 1$

$\ln x\Big|_1^e = 1 - 0 = 1$. *Barem: 3p, 2p.*

#### b) Aria între grafic, $Ox$, $x = 1$, $x = e$

$\ln x \ge 0$ pe $[1, e]$. Prin părți:

$$\mathcal A = \int_1^e\ln x\,dx = x\ln x\Big|_1^e - \int_1^e 1\,dx = e - (e - 1) = 1.$$

**Răspuns:** $1$. *Barem: 3p, 2p.*

#### c) $n$ cu $\displaystyle\int_1^e\frac1x(\ln x)^n\,dx = \frac{1}{2015}$

$$\int_1^e(\ln x)^n(\ln x)'\,dx = \frac{\ln^{n+1}x}{n + 1}\Big|_1^e = \frac{1}{n + 1}.$$

$\dfrac{1}{n+1} = \dfrac1{2015} \iff n = 2014$.

**Răspuns:** $n = 2014$. *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 8$ |
| I.2 | $a = 8$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac1{10}$ |
| I.5 | $y = 2x - 1$ |
| II.1.a | $2$ |
| II.1.c | $x = 1$ |
| II.2.c | $m = 2$ |
| III.1.b | $y = 0$ |
| III.2.b | $1$ |
| III.2.c | $n = 2014$ |

## Ce merită reținut din varianta 1

- **$xy + x + y = (x+1)(y+1) - 1$**: puterile matricei devin $A((x+1)^n - 1)$.
- **Rădăcini întregi și numere prime**: scrie $m$ ca produs și impune ca un factor să fie 1.
- **$\int\frac{\ln^n x}{x}dx = \frac{\ln^{n+1}x}{n+1}$.**

Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_șt-nat**, sesiunea august–septembrie, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\sqrt3(\sqrt3 - 1)(\sqrt3 + 1) - \sqrt{12} = 0$

$(\sqrt3 - 1)(\sqrt3 + 1) = 3 - 1 = 2$ și $\sqrt{12} = 2\sqrt3$:

$$\sqrt3\cdot 2 - 2\sqrt3 = 0.$$

*Barem: 3p calculul produsului și al radicalului, 2p finalizarea.*

### 2. $f(x) = x^2 + 2x + 3$, $g(x) = x + a$ se intersectează în punctul de abscisă $x = 1$

$$f(1) = g(1) \iff 1 + 2 + 3 = 1 + a \iff a = 5.$$

**Răspuns:** $a = 5$. *Barem: 3p condiția, 2p valoarea.*

### 3. $\sqrt{x+1} = 1 - \sqrt x$

Condiții: $x \ge 0$ și $1 - \sqrt x \ge 0$, adică $x \in [0, 1]$. Ridicăm la pătrat:

$$x + 1 = 1 - 2\sqrt x + x \iff 2\sqrt x = 0 \iff x = 0.$$

Verificare: $\sqrt1 = 1 - 0$ ✔.

**Răspuns:** $x = 0$. *Barem: 3p $2\sqrt x = 0$, 2p soluția care convine.*

### 4. Numere de trei cifre distincte cu cifre din $\{0, 1, 2, 3, 4\}$

- cifra sutelor nu poate fi $0$: **4** moduri;
- cifra zecilor, diferită de prima (poate fi 0): **4** moduri;
- cifra unităților, diferită de primele două: **3** moduri.

$$4\cdot 4\cdot 3 = 48.$$

**Răspuns:** 48 de numere. *Barem: 1p + 1p + 3p.*

### 5. $d_1: y = ax + 2$ și $d_2: y = \dfrac x4 + 1$ paralele

$m_{d_1} = a$, $m_{d_2} = \dfrac14$. Paralele (ordonatele la origine $2 \ne 1$, deci nu coincid) $\iff m_{d_1} = m_{d_2}$:

**Răspuns:** $a = \dfrac14$. *Barem: 2p pantele, 3p condiția și valoarea.*

### 6. $\sin(\pi - x)\cos(2\pi + x) - \sin(2\pi + x)\cos(\pi - x) = \sin 2x$

Reducem la primul cadran: $\sin(\pi - x) = \sin x$, $\cos(2\pi + x) = \cos x$, $\sin(2\pi + x) = \sin x$, $\cos(\pi - x) = -\cos x$:

$$\sin x\cos x - \sin x(-\cos x) = 2\sin x\cos x = \sin 2x.$$

*Barem: 3p reducerile, 2p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} -3 & -2\\ 3 & 2\end{pmatrix}$, $M(x) = I_2 + xA$

#### a) $\det(M(1)) = 0$

$$M(1) = \begin{pmatrix} -2 & -2\\ 3 & 3\end{pmatrix} \Rightarrow \det(M(1)) = (-2)\cdot 3 - 3\cdot(-2) = -6 + 6 = 0.$$

*Barem: 3p matricea și formula, 2p calculul.*

#### b) $M(x) - M(2018) = M(-2018) - M(-x)$

$$M(x) - M(2018) = I_2 + xA - I_2 - 2018A = (x - 2018)A,$$

$$M(-2018) - M(-x) = I_2 - 2018A - I_2 + xA = (x - 2018)A.$$

Cele două expresii sunt egale. *Barem: 2p primul membru, 3p finalizarea.*

#### c) Perechile $(m, n)$ de naturale nenule cu $M(m)M(n) = M(mn)$

Calculăm $A^2 = \begin{pmatrix} 9 - 6 & 6 - 4\\ -9 + 6 & -6 + 4\end{pmatrix} = \begin{pmatrix} 3 & 2\\ -3 & -2\end{pmatrix} = -A$. Atunci

$$M(m)M(n) = I_2 + (m+n)A + mnA^2 = I_2 + (m + n - mn)A.$$

Egalitatea cu $M(mn) = I_2 + mnA$ (și $A \ne O_2$) dă $m + n - mn = mn$, adică $m + n = 2mn$.

Pentru $m, n \ge 1$: $2mn - m - n = m(n-1) + n(m-1) \ge 0$, cu egalitate doar pentru $m = n = 1$.

**Răspuns:** $(m, n) = (1, 1)$. *Barem: 3p relația $m + n = 2mn$, 2p perechea.*

### 2. Legea $x \circ y = 8xy + x + y$ (asociativă)

#### a) $x \circ y = 8\left(x + \dfrac18\right)\left(y + \dfrac18\right) - \dfrac18$

$$8\left(x + \tfrac18\right)\left(y + \tfrac18\right) - \tfrac18 = 8xy + x + y + \tfrac18 - \tfrac18 = x\circ y.$$

*Barem: 3p dezvoltarea, 2p finalizarea.*

#### b) $x \circ x = 1$

$$8\left(x + \tfrac18\right)^2 - \tfrac18 = 1 \iff \left(x + \tfrac18\right)^2 = \tfrac{9}{64} \iff x + \tfrac18 = \pm\tfrac38.$$

**Răspuns:** $x \in \left\{-\dfrac12, \dfrac14\right\}$. *Barem: 3p ecuația, 2p soluțiile.*

#### c) $f(x) = 8x + 1$; $f(x\circ y\circ z) = f(x)f(y)f(z)$

$$f(x\circ y) = 8(8xy + x + y) + 1 = 64xy + 8x + 8y + 1 = (8x+1)(8y+1) = f(x)f(y).$$

Folosind asociativitatea: $f(x\circ y\circ z) = f\big((x\circ y)\circ z\big) = f(x\circ y)f(z) = f(x)f(y)f(z)$. $\blacksquare$ *Barem: 3p $f(x\circ y) = f(x)f(y)$, 2p finalizarea.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x + 1}{x^2 + 3}$

#### a) $f'(x) = \dfrac{(1-x)(x+3)}{(x^2+3)^2}$

$$f'(x) = \frac{(x^2 + 3) - (x+1)\cdot 2x}{(x^2+3)^2} = \frac{-x^2 - 2x + 3}{(x^2+3)^2} = \frac{(1-x)(x+3)}{(x^2+3)^2}.$$

*Barem: 3p derivata câtului, 2p forma finală.*

#### b) Tangenta în $x = 0$

$f(0) = \dfrac13$, $f'(0) = \dfrac{3}{9} = \dfrac13$:

$$y - \tfrac13 = \tfrac13(x - 0) \iff y = \tfrac13 x + \tfrac13.$$

**Răspuns:** $y = \dfrac{x}{3} + \dfrac13$. *Barem: 2p valorile, 3p ecuația.*

#### c) $f(\sqrt2) > f(\sqrt[3]3)$

Pentru $x > 1$: $1 - x < 0$, $x + 3 > 0$, deci $f'(x) < 0$ — $f$ strict descrescătoare pe $(1, +\infty)$.

Comparăm: $(\sqrt2)^6 = 8 < 9 = (\sqrt[3]3)^6$, deci $1 < \sqrt2 < \sqrt[3]3$. Funcția descrescătoare inversează ordinea: $f(\sqrt2) > f(\sqrt[3]3)$. $\blacksquare$ *Barem: 3p monotonia, 2p concluzia.*

### 2. $f(x) = xe^x$

#### a) $\displaystyle\int_0^3 \frac{x f(x)}{e^x}\,dx = 9$

$$\int_0^3 \frac{x^2 e^x}{e^x}\,dx = \int_0^3 x^2\,dx = \frac{x^3}{3}\Big|_0^3 = 9.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) Orice primitivă $F$ a lui $f$ are un singur punct de inflexiune

$F' = f$, deci $F''(x) = f'(x) = e^x + xe^x = (x+1)e^x$.

$F''(x) < 0$ pe $(-\infty, -1)$, $F''(-1) = 0$, $F''(x) > 0$ pe $(-1, +\infty)$: $F''$ își schimbă semnul doar în $x = -1$, deci $F$ are un singur punct de inflexiune, de abscisă $-1$. $\blacksquare$ *Barem: 2p $F''$, 3p studiul semnului.*

#### c) $n \ge 1$ cu aria dintre $G_f$, $Ox$, $x = 0$, $x = n$ egală cu $1$

Pe $[0, n]$, $f(x) \ge 0$, deci aria este $\displaystyle\int_0^n xe^x\,dx$. Prin părți ($\int xe^x = (x-1)e^x$):

$$A = (x - 1)e^x\Big|_0^n = (n-1)e^n + 1.$$

$(n-1)e^n + 1 = 1 \iff (n-1)e^n = 0 \iff n = 1$.

**Răspuns:** $n = 1$. *Barem: 3p aria, 2p valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a = 5$ |
| I.3 | $x = 0$ |
| I.4 | 48 de numere |
| I.5 | $a = \tfrac14$ |
| II.1.c | $(m,n) = (1,1)$ |
| II.2.b | $x \in \{-\tfrac12, \tfrac14\}$ |
| III.1.b | $y = \tfrac x3 + \tfrac13$ |
| III.2.a | $9$ |
| III.2.c | $n = 1$ |

## Ce merită reținut din varianta 9

- **Cifra 0** nu poate fi prima cifră — numără întâi poziția restricționată.
- **$A^2 = -A$** face ca $M(m)M(n) = M(m + n - mn)$; compară coeficienții lui $A$.
- **Compară radicali de ordine diferite** ridicând la o putere comună ($\sqrt2$ vs $\sqrt[3]3$ la puterea 6).
- **Punct de inflexiune al primitivei** = punct unde $f'$ își schimbă semnul.

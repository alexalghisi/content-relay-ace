Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numărul complex $z$ cu $2\overline z - z = 1 - 3i$

Scriem $z = a + bi$, $a, b \in \mathbb R$, deci $\overline z = a - bi$:

$$2\overline z - z = 2a - 2bi - a - bi = a - 3bi.$$

Din $a - 3bi = 1 - 3i$ identificăm $a = 1$ și $-3b = -3$, adică $b = 1$.

**Răspuns:** $z = 1 + i$. *Barem: 3p forma $a - 3bi$, 2p finalizarea.*

### 2. $f(x) = x^2 - mx + 1$; vârful parabolei se află pe axa $Ox$

Vârful este pe $Ox$ $\iff y_V = -\dfrac{\Delta}{4a} = 0 \iff \Delta = 0$.

$$\Delta = m^2 - 4 = 0 \iff m \in \{-2, 2\}.$$

**Răspuns:** $m = -2$ sau $m = 2$. *Barem: 3p condiția $\Delta = 0$, 2p valorile lui $m$.*

### 3. Ecuația $\dfrac{\lg x}{\lg(x+2)} = \dfrac12$

**Condiții:** $x > 0$ și $\lg(x+2) \ne 0$ (adică $x \ne -1$, automat pentru $x > 0$).

$$2\lg x = \lg(x+2) \iff \lg x^2 = \lg(x+2) \iff x^2 - x - 2 = 0 \iff (x-2)(x+1) = 0.$$

$x = -1$ nu convine ($x > 0$), $x = 2$ convine: $\dfrac{\lg 2}{\lg 4} = \dfrac{\lg 2}{2\lg 2} = \dfrac12$ ✔.

**Răspuns:** $x = 2$. *Barem: 3p ecuația $x^2 - x - 2 = 0$, 2p soluția care convine.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifrele distincte și impare

Cazuri posibile: $10, 11, \dots, 99$ — **90**.

Cifrele impare sunt $1, 3, 5, 7, 9$. Cifra zecilor: 5 variante; cifra unităților, impară și diferită de prima: 4 variante — $5 \cdot 4 = 20$ **cazuri favorabile**.

$$p = \frac{20}{90} = \frac29.$$

**Răspuns:** $p = \dfrac29$. *Barem: 1p cazurile posibile, 2p cazurile favorabile, 2p probabilitatea.*

### 5. Dreapta prin $A(-5, 2)$, perpendiculară pe $d: y = x + 1$

$m_d = 1$; pentru drepte perpendiculare $m \cdot m_d = -1$, deci $m = -1$.

$$y - 2 = -1\cdot(x + 5) \iff y = -x - 3.$$

**Răspuns:** $y = -x - 3$. *Barem: 3p panta, 2p ecuația.*

### 6. $\sin\left(\dfrac\pi4 + x\right) - \cos\left(\dfrac\pi4 - x\right) = 0$

Folosim formulele de adunare și $\sin\dfrac\pi4 = \cos\dfrac\pi4 = \dfrac{\sqrt2}{2}$:

$$\sin\left(\tfrac\pi4 + x\right) = \tfrac{\sqrt2}{2}(\cos x + \sin x), \qquad \cos\left(\tfrac\pi4 - x\right) = \tfrac{\sqrt2}{2}(\cos x + \sin x).$$

Diferența este $\dfrac{\sqrt2}{2}(\cos x + \sin x - \cos x - \sin x) = 0$. (Altfel: $\dfrac\pi4 + x$ și $\dfrac\pi4 - x$ sunt complementare, deci sinusul unuia este cosinusul celuilalt.) *Barem: 2p dezvoltarea, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $M(m) = \begin{pmatrix} 2m & 1 & 1\\ 1 & 2m & 1\\ 1 & 1 & 2m\end{pmatrix}$ și sistemul $\begin{cases} 2mx + y + z = -1\\ x + 2my + z = 0\\ x + y + 2mz = 1\end{cases}$

#### a) $\det(M(0)) = 2$

$$\det(M(0)) = \begin{vmatrix} 0 & 1 & 1\\ 1 & 0 & 1\\ 1 & 1 & 0\end{vmatrix} = 0 + 1 + 1 - 0 - 0 - 0 = 2.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Valorile lui $m$ cu $\det(M(m)) = 0$

Adunăm toate coloanele la prima (fiecare linie are suma $2m + 2$) și scoatem factorul comun:

$$\det(M(m)) = (2m+2)\begin{vmatrix} 1 & 1 & 1\\ 1 & 2m & 1\\ 1 & 1 & 2m\end{vmatrix} = (2m+2)(2m-1)^2 = 2(m+1)(2m-1)^2$$

(scăzând prima linie din celelalte, determinantul rămas este $(2m-1)^2$).

$$2(m+1)(2m-1)^2 = 0 \iff m = -1 \text{ sau } m = \tfrac12.$$

**Răspuns:** $m \in \left\{-1, \dfrac12\right\}$. *Barem: 3p determinantul, 2p valorile.*

#### c) Pentru $m = -1$, dacă $(a,b,c)$ e soluție, cel mult unul dintre $a, b, c$ e întreg

Pentru $m = -1$ sistemul este $-2a + b + c = -1$, $a - 2b + c = 0$, $a + b - 2c = 1$.

- Ecuația 1 minus ecuația 2: $-3a + 3b = -1 \Rightarrow a - b = \dfrac13$;
- Ecuația 2 minus ecuația 3: $-3b + 3c = -1 \Rightarrow b - c = \dfrac13$;
- adunându-le: $a - c = \dfrac23$.

Dacă două dintre numere ar fi întregi, diferența lor ar fi întreagă — dar $\dfrac13, \dfrac13, \dfrac23 \notin \mathbb Z$. Deci cel mult unul este întreg. $\blacksquare$ *Barem: 3p diferențele, 2p concluzia.*

### 2. Legea $x * y = 4xy + 3x + 3y + \dfrac32$ (asociativă)

#### a) $x * y = 4\left(x + \dfrac34\right)\left(y + \dfrac34\right) - \dfrac34$

$$4\left(x + \tfrac34\right)\left(y + \tfrac34\right) - \tfrac34 = 4xy + 3x + 3y + \tfrac94 - \tfrac34 = 4xy + 3x + 3y + \tfrac32 = x * y.$$

*Barem: 2p dezvoltarea, 3p finalizarea.*

#### b) $x * x * x = -\dfrac12$

Notăm $t = x + \dfrac34$. Din a): $x * x = 4t^2 - \dfrac34$, deci $(x*x) + \dfrac34 = 4t^2$ și

$$x * x * x = 4\cdot 4t^2 \cdot t - \tfrac34 = 16t^3 - \tfrac34.$$

$$16t^3 - \tfrac34 = -\tfrac12 \iff t^3 = \tfrac{1}{64} \iff t = \tfrac14 \iff x = \tfrac14 - \tfrac34 = -\tfrac12.$$

**Răspuns:** $x = -\dfrac12$. *Barem: 2p forma lui $x*x*x$, 3p rezolvarea.*

#### c) $f(x) = ae^x - \dfrac34$, cu $f(x) * f(y) = f(x+y)$

$f(x) + \dfrac34 = ae^x$, deci din a):

$$f(x) * f(y) = 4\cdot ae^x \cdot ae^y - \tfrac34 = 4a^2 e^{x+y} - \tfrac34.$$

Egalitatea cu $f(x+y) = ae^{x+y} - \dfrac34$ pentru orice $x, y$ înseamnă $4a^2 = a$, adică $a(4a - 1) = 0$.

**Răspuns:** $a = 0$ sau $a = \dfrac14$. *Barem: 2p calculul, 3p valorile lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 8x^2 - \ln x$

#### a) $f'(x) = \dfrac{(4x-1)(4x+1)}{x}$

$$f'(x) = 16x - \frac1x = \frac{16x^2 - 1}{x} = \frac{(4x-1)(4x+1)}{x}, \quad x > 0.$$

*Barem: 3p derivata, 2p forma finală.*

#### b) $A\left(\dfrac23, 3\right)$ aparține tangentei în $x = 1$

$f(1) = 8 - 0 = 8$, $f'(1) = 16 - 1 = 15$. Tangenta: $y - 8 = 15(x - 1) \iff y = 15x - 7$.

Pentru $x = \dfrac23$: $15\cdot\dfrac23 - 7 = 10 - 7 = 3$ ✔, deci $A$ aparține tangentei. *Barem: 3p ecuația tangentei, 2p verificarea.*

#### c) $f\left(\dfrac13\right) < f\left(\dfrac1{\sqrt7}\right) < f\left(\dfrac12\right)$

Pentru $x > \dfrac14$: $4x - 1 > 0$, deci $f'(x) > 0$ și $f$ este strict crescătoare pe $\left(\dfrac14, +\infty\right)$.

Comparăm argumentele: $2 < \sqrt7 < 3$ (căci $4 < 7 < 9$), deci $\dfrac14 < \dfrac13 < \dfrac1{\sqrt7} < \dfrac12$. Monotonia păstrează ordinea, de unde inegalitatea cerută. $\blacksquare$ *Barem: 2p monotonia, 3p concluzia.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = \dfrac{2x+3}{x+3}$

#### a) $\displaystyle\int_0^1 (x+3) f(x)\,dx = 4$

$$\int_0^1 (2x + 3)\,dx = (x^2 + 3x)\Big|_0^1 = 1 + 3 - 0 = 4.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = 2 - 3\ln\frac43$

Scriem $\dfrac{2x+3}{x+3} = \dfrac{2(x+3) - 3}{x+3} = 2 - \dfrac{3}{x+3}$:

$$\int_0^1\left(2 - \frac{3}{x+3}\right)dx = 2x\Big|_0^1 - 3\ln(x+3)\Big|_0^1 = 2 - 3(\ln 4 - \ln 3) = 2 - 3\ln\frac43.$$

*Barem: 3p descompunerea și primitiva, 2p calculul.*

#### c) $I_n = \displaystyle\int_0^1 e^x(x+3)^n f^n(x)\,dx$; arătați că $I_n + 2nI_{n-1} = e\cdot 5^n - 3^n$

Cum $(x+3)f(x) = 2x + 3$, avem $I_n = \displaystyle\int_0^1 e^x(2x+3)^n\,dx$. Integrăm prin părți cu $u = (2x+3)^n$, $v' = e^x$ ($u' = 2n(2x+3)^{n-1}$, $v = e^x$):

$$I_n = e^x(2x+3)^n\Big|_0^1 - 2n\int_0^1 e^x(2x+3)^{n-1}dx = e\cdot 5^n - 3^n - 2nI_{n-1}.$$

Deci $I_n + 2nI_{n-1} = e\cdot 5^n - 3^n$ pentru orice $n \ge 1$. $\blacksquare$ *Barem: 3p integrarea prin părți, 2p finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $z = 1 + i$ |
| I.2 | $m \in \{-2, 2\}$ |
| I.3 | $x = 2$ |
| I.4 | $p = \tfrac29$ |
| I.5 | $y = -x - 3$ |
| II.1.a | $\det M(0) = 2$ |
| II.1.b | $m \in \{-1, \tfrac12\}$ |
| II.2.b | $x = -\tfrac12$ |
| II.2.c | $a \in \{0, \tfrac14\}$ |
| III.1.b | tangenta $y = 15x - 7$ |
| III.2.b | $2 - 3\ln\tfrac43$ |

## Ce merită reținut din varianta 2

- **Legea $axy + b(x+y) + c$** se scrie mereu ca $a(x+k)(y+k) - k$; compunerile repetate devin puteri: $x*x*x = 16(x + \frac34)^3 - \frac34$.
- **Determinant cu linii de sumă constantă**: adună coloanele la prima și scoate factorul comun.
- **„Cel mult unul e întreg”**: arată că diferențele dintre necunoscute nu sunt întregi.
- **Monotonie pentru comparații**: o inegalitate între valori ale lui $f$ revine la ordonarea argumentelor pe un interval de monotonie.

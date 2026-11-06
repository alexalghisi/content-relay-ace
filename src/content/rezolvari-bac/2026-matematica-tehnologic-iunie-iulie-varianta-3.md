Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_tehnologic**, sesiunea iunie–iulie, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: $a_3$, știind $a_1 = 10$ și $a_2 = 18$

Rația este diferența dintre doi termeni consecutivi: $r = a_2 - a_1 = 18 - 10 = 8$.

$$a_3 = a_2 + r = 18 + 8 = 26.$$

**Răspuns:** $a_3 = 26$. *Barem: 3p rația, 2p termenul $a_3$.*

### 2. $f(x) = 2x - 2$: arătați că $f(4) - f(3) - f(2) = 0$

$f(4) = 8 - 2 = 6$, $f(3) = 6 - 2 = 4$, $f(2) = 4 - 2 = 2$.

$$f(4) - f(3) - f(2) = 6 - 4 - 2 = 0.$$

*Barem: 3p cele trei valori, 2p calculul final.*

### 3. Ecuație exponențială: $7^{3 - x} = 7^{4x - 2}$

Funcția exponențială $t \mapsto 7^t$ este injectivă (baza $7 > 0$, $7 \ne 1$), deci două puteri ale lui 7 sunt egale doar dacă exponenții sunt egali:

$$3 - x = 4x - 2 \iff 5 = 5x \iff x = 1.$$

**Verificare:** $7^{2} = 7^{2}$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca un număr natural de o cifră să verifice $20 - 2n < 15$

**Cazuri posibile:** numerele naturale de o cifră sunt $0, 1, \dots, 9$ — adică $10$ numere (nu uita de $0$).

**Cazuri favorabile:** $20 - 2n < 15 \iff 5 < 2n \iff n > \dfrac52 = 2{,}5$, deci $n \in \{3, 4, 5, 6, 7, 8, 9\}$ — $7$ numere.

$$p = \frac{7}{10}.$$

**Răspuns:** $p = \dfrac{7}{10}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,1)$, $M(2,4)$, $B(a,b)$; $M$ mijlocul lui $AB$

Coordonatele mijlocului sunt mediile aritmetice ale coordonatelor capetelor:

$$x_M = \frac{x_A + x_B}{2} \Rightarrow \frac{1 + a}{2} = 2 \Rightarrow a = 3, \qquad y_M = \frac{y_A + y_B}{2} \Rightarrow \frac{1 + b}{2} = 4 \Rightarrow b = 7.$$

**Răspuns:** $a = 3$, $b = 7$. *Barem: 3p relațiile pentru mijloc, 2p valorile lui $a$ și $b$.*

### 6. Triunghi dreptunghic în $A$, $AB = 15$, $\angle B = 30^\circ$: arătați că $BC = 10\sqrt3$

În triunghiul dreptunghic, $BC$ este ipotenuza, iar $AB$ este cateta alăturată unghiului $B$:

$$\cos B = \frac{AB}{BC} \Rightarrow \frac{\sqrt3}{2} = \frac{15}{BC} \Rightarrow BC = \frac{2\cdot 15}{\sqrt3} = \frac{30}{\sqrt3} = \frac{30\sqrt3}{3} = 10\sqrt3.$$

(Am raționalizat numitorul înmulțind cu $\sqrt3$.) *Barem: 3p scrierea lui $\cos B$, 2p calculul lui $BC$.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(x) = \begin{pmatrix}x & 1\\ x - 1 & 2\end{pmatrix}$

#### a) $\det(A(4)) = 5$

$$A(4) = \begin{pmatrix}4 & 1\\ 3 & 2\end{pmatrix}, \qquad \det(A(4)) = 4\cdot2 - 1\cdot3 = 8 - 3 = 5.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $2A(1) + A(4) = 3A(2)$

$A(1) = \begin{pmatrix}1 & 1\\ 0 & 2\end{pmatrix}$, $A(2) = \begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$.

$$2A(1) + A(4) = \begin{pmatrix}2 & 2\\ 0 & 4\end{pmatrix} + \begin{pmatrix}4 & 1\\ 3 & 2\end{pmatrix} = \begin{pmatrix}6 & 3\\ 3 & 6\end{pmatrix} = 3\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix} = 3A(2).$$

*Barem: 3p calculul sumei, 2p identificarea cu $3A(2)$.*

#### c) $x$, $y$ reali cu $A(-x)\cdot A(x) = A(y)$

$A(-x) = \begin{pmatrix}-x & 1\\ -x - 1 & 2\end{pmatrix}$. Înmulțim linie cu coloană:

$$A(-x)\cdot A(x) = \begin{pmatrix}-x\cdot x + 1\cdot(x-1) & -x\cdot 1 + 1\cdot 2\\ (-x-1)x + 2(x-1) & (-x-1) + 4\end{pmatrix} = \begin{pmatrix}-x^2 + x - 1 & 2 - x\\ -x^2 + x - 2 & 3 - x\end{pmatrix}.$$

Egalăm cu $A(y) = \begin{pmatrix}y & 1\\ y - 1 & 2\end{pmatrix}$, element cu element:

- poziția $(1,2)$: $2 - x = 1 \Rightarrow x = 1$;
- poziția $(2,2)$: $3 - x = 2 \Rightarrow x = 1$ ✔ (compatibil);
- poziția $(1,1)$: $y = -1 + 1 - 1 = -1$;
- poziția $(2,1)$: $y - 1 = -1 + 1 - 2 = -2 \Rightarrow y = -1$ ✔.

**Răspuns:** $x = 1$, $y = -1$. *Barem: 3p produsul $A(-x)\cdot A(x)$, 2p valorile lui $x$ și $y$.* Toate cele patru egalități trebuie să fie satisfăcute simultan — verifică-le pe toate.

### 2. Legea $x * y = (4 - x)(4 - y) + 2$

#### a) $0 * 3 = 6$

$$0 * 3 = (4 - 0)(4 - 3) + 2 = 4\cdot 1 + 2 = 6.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ real cu $2 * x = 2$

$$2 * x = (4 - 2)(4 - x) + 2 = 2(4 - x) + 2 = -2x + 10.$$

$-2x + 10 = 2 \iff -2x = -8 \iff x = 4$. (Observă: $(4-2)(4-x) = 0$ cere $x = 4$.)

**Răspuns:** $x = 4$. *Barem: 3p expresia $2 * x$, 2p soluția.*

#### c) Perechile $(m, n)$ de numere întregi cu $(2m) * (2n + 1) = 10$

$$(2m) * (2n+1) = (4 - 2m)(4 - 2n - 1) + 2 = (4 - 2m)(3 - 2n) + 2 = 10 \iff (4 - 2m)(3 - 2n) = 8.$$

Pentru $m, n$ întregi ambii factori sunt întregi, iar $3 - 2n$ este **impar**. Singurii divizori impari ai lui 8 sunt $1$ și $-1$:

- $3 - 2n = 1 \Rightarrow n = 1$ și $4 - 2m = 8 \Rightarrow m = -2$;
- $3 - 2n = -1 \Rightarrow n = 2$ și $4 - 2m = -8 \Rightarrow m = 6$.

**Verificare:** $(-4) * 3 = 8 \cdot 1 + 2 = 10$ ✔; $12 * 5 = (-8)(-1) + 2 = 10$ ✔.

**Răspuns:** $(m, n) \in \{(-2, 1),\ (6, 2)\}$. *Barem: 2p expresia compunerii, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = 3x^4 - 4x^3 - 12x^2 - 1$

#### a) $f'(x) = 12x(x + 1)(x - 2)$

Derivăm termen cu termen, cu $(x^n)' = nx^{n-1}$:

$$f'(x) = 12x^3 - 12x^2 - 24x = 12x(x^2 - x - 2).$$

Trinomul $x^2 - x - 2$ are rădăcinile $-1$ și $2$ ($\Delta = 9$), deci $x^2 - x - 2 = (x+1)(x-2)$ și $f'(x) = 12x(x+1)(x-2)$.

*Barem: 3p derivarea, 2p descompunerea.*

#### b) Tangenta în punctul de abscisă $x = 0$

$f(0) = -1$, $f'(0) = 0$. Ecuația tangentei: $y - f(0) = f'(0)(x - 0)$, adică

$$y + 1 = 0 \cdot x \iff y = -1.$$

**Răspuns:** $y = -1$ (tangentă orizontală, $x = 0$ este punct critic). *Barem: 2p $f(0)$ și $f'(0)$, 3p ecuația.*

#### c) $3x^4 + 5 \ge 4x^3 + 12x^2$, pentru orice $x \in (-\infty, 0]$

Inegalitatea se rescrie: $3x^4 - 4x^3 - 12x^2 + 5 \ge 0 \iff f(x) + 6 \ge 0 \iff f(x) \ge -6$.

Studiem monotonia lui $f$ pe $(-\infty, 0]$ folosind a). Pe acest interval $f'(x) = 0 \iff x = -1$ sau $x = 0$. Semnul lui $f'(x) = 12x(x+1)(x-2)$:

| $x$ | $-\infty$ | | $-1$ | | $0$ |
|---|---|---|---|---|---|
| $12x$ | | $-$ | $-$ | $-$ | $0$ |
| $x+1$ | | $-$ | $0$ | $+$ | $+$ |
| $x-2$ | | $-$ | $-$ | $-$ | $-$ |
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ |
| $f(x)$ | | ↘ | $-6$ | ↗ | $-1$ |

Deci $f$ este descrescătoare pe $(-\infty, -1]$ și crescătoare pe $[-1, 0]$, iar $x = -1$ este punct de minim pe $(-\infty, 0]$, cu

$$f(-1) = 3 + 4 - 12 - 1 = -6.$$

Prin urmare $f(x) \ge f(-1) = -6$ pentru orice $x \le 0$, adică $3x^4 - 4x^3 - 12x^2 - 1 \ge -6$, echivalent cu $3x^4 + 5 \ge 4x^3 + 12x^2$. $\blacksquare$

(Verificare algebrică: $3x^4 - 4x^3 - 12x^2 + 5 = (x+1)^2(3x^2 - 10x + 5)$, iar pentru $x \le 0$ al doilea factor este $\ge 5 > 0$.) *Barem: 3p monotonia pe $(-\infty, 0]$, 2p concluzia cu $f(-1) = -6$.*

### 2. $f(x) = x + 1 + xe^x$

#### a) $\displaystyle\int_0^4 \left(f(x) - xe^x\right)dx = 12$

$f(x) - xe^x = x + 1$, deci

$$\int_0^4 (x + 1)\,dx = \left(\frac{x^2}{2} + x\right)\Big|_0^4 = (8 + 4) - 0 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 \left(f(x) - x - 1\right)dx = 1$

$f(x) - x - 1 = xe^x$. Integrăm prin părți, cu $u = x$, $v' = e^x$ ($u' = 1$, $v = e^x$):

$$\int_0^1 xe^x\,dx = xe^x\Big|_0^1 - \int_0^1 e^x\,dx = (e - 0) - e^x\Big|_0^1 = e - (e - 1) = 1.$$

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) $g(x) = \dfrac{\sqrt{f'(x)}}{f(x)}$ pe $[0,1]$: volumul corpului de rotație este $\dfrac{\pi(e+1)}{e+2}$

Întâi verificăm că $g$ are sens: $f'(x) = 1 + e^x + xe^x = 1 + (x+1)e^x > 0$ și $f(x) = x + 1 + xe^x > 0$ pe $[0, 1]$.

Volumul corpului obținut prin rotația graficului lui $g$ în jurul axei $Ox$:

$$V = \pi\int_0^1 g^2(x)\,dx = \pi\int_0^1 \frac{f'(x)}{f^2(x)}\,dx.$$

Recunoaștem derivata: $\left(-\dfrac{1}{f(x)}\right)' = \dfrac{f'(x)}{f^2(x)}$. Deci

$$V = \pi\left(-\frac{1}{f(x)}\right)\Big|_0^1 = \pi\left(-\frac{1}{f(1)} + \frac{1}{f(0)}\right).$$

Cu $f(0) = 1$ și $f(1) = 1 + 1 + e = e + 2$:

$$V = \pi\left(1 - \frac{1}{e+2}\right) = \pi\cdot\frac{e + 2 - 1}{e + 2} = \frac{\pi(e+1)}{e+2}.$$

*Barem: 3p formula volumului și primitiva $-\frac{1}{f}$, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 26$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{7}{10}$ |
| I.5 | $a = 3$, $b = 7$ |
| I.6 | $BC = 10\sqrt3$ |
| II.1.c | $x = 1$, $y = -1$ |
| II.2.b | $x = 4$ |
| II.2.c | $(-2, 1)$ și $(6, 2)$ |
| III.1.b | $y = -1$ |
| III.2.c | $V = \dfrac{\pi(e+1)}{e+2}$ |

## Ce merită reținut din varianta 3

- **Ecuații exponențiale cu aceeași bază**: egalezi exponenții.
- **Ecuații în numere întregi** de forma produs $= $ constantă: folosește paritatea factorilor ca să reduci rapid cazurile.
- **Inegalități pe un interval**: scrie-le ca $f(x) \ge f(x_0)$ și arată că $x_0$ este punct de minim pe acel interval.
- **Volume de rotație** cu $\dfrac{f'}{f^2}$: primitiva este $-\dfrac{1}{f}$.

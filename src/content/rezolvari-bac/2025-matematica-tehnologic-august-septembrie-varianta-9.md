Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_tehnologic**, sesiunea august–septembrie, **varianta 9** (filiera tehnologică: profilurile servicii, resurse și tehnic). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $5\cdot(0{,}7 - 0{,}2) + 0{,}5 = 3$

Întâi paranteza, apoi înmulțirea, apoi adunarea:

$$5\cdot(0{,}7 - 0{,}2) + 0{,}5 = 5\cdot 0{,}5 + 0{,}5 = 2{,}5 + 0{,}5 = 3.$$

*Barem: 2p calculul parantezei, 3p finalizarea.*

### 2. $f(x) = 6x - 2$; determinați $m$ cu $f(m) = 10$

$f(m) = 6m - 2$, deci $6m - 2 = 10 \iff 6m = 12 \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 2p $f(m) = 6m - 2$, 3p rezolvarea ecuației.*

### 3. Ecuația $\sqrt{16 - 3x} = 1$

**Condiție de existență:** $16 - 3x \ge 0$, adică $x \le \dfrac{16}{3}$.

Ridicăm la pătrat: $16 - 3x = 1 \iff 3x = 15 \iff x = 5$. Cum $5 \le \dfrac{16}{3}$, soluția convine.

**Verificare:** $\sqrt{16 - 15} = \sqrt1 = 1$ ✔.

**Răspuns:** $x = 5$. *Barem: 3p ecuația $16 - 3x = 1$, 2p soluția care convine.*

### 4. După o scumpire cu $60\%$ obiectul costă 320 de lei; prețul inițial

Notăm cu $x$ prețul inițial. Scumpirea adaugă $60\%$ din $x$:

$$x + \frac{60}{100}x = 320 \iff \frac{160}{100}x = 320 \iff x = \frac{320\cdot 100}{160} = 200.$$

**Verificare:** $200 + 0{,}6\cdot 200 = 200 + 120 = 320$ ✔.

**Răspuns:** 200 de lei. *Barem: 3p ecuația, 2p prețul.* Greșeală frecventă: să scazi $60\%$ din 320 (ar da 128 lei, greșit — procentul se aplică prețului inițial, nu celui final).

### 5. $A(3,0)$, $B(3,2)$, $C(a,b)$; $B$ este mijlocul lui $AC$

Coordonatele mijlocului sunt mediile coordonatelor capetelor:

$$x_B = \frac{x_A + x_C}{2} \Rightarrow 3 = \frac{3 + a}{2} \Rightarrow a = 3, \qquad y_B = \frac{y_A + y_C}{2} \Rightarrow 2 = \frac{0 + b}{2} \Rightarrow b = 4.$$

**Răspuns:** $a = 3$, $b = 4$. *Barem: 2p $a = 3$, 3p $b = 4$.*

### 6. Arătați că $5\cos 60^\circ - \sin 30^\circ + 4(\sin 60^\circ)^2 = 5$

Valori: $\cos 60^\circ = \dfrac12$, $\sin 30^\circ = \dfrac12$, $\sin 60^\circ = \dfrac{\sqrt3}{2}$.

$$5\cdot\frac12 - \frac12 + 4\cdot\left(\frac{\sqrt3}{2}\right)^2 = \frac52 - \frac12 + 4\cdot\frac34 = 2 + 3 = 5.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$, $A(x) = \begin{pmatrix}2 & x\\ -x & -2\end{pmatrix}$

#### a) $\det(A(5)) = 21$

$$A(5) = \begin{pmatrix}2 & 5\\ -5 & -2\end{pmatrix}, \qquad \det(A(5)) = 2\cdot(-2) - 5\cdot(-5) = -4 + 25 = 21.$$

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $2A(-1) + A(5) = 3A(1)$

$A(-1) = \begin{pmatrix}2 & -1\\ 1 & -2\end{pmatrix}$, $A(1) = \begin{pmatrix}2 & 1\\ -1 & -2\end{pmatrix}$.

$$2A(-1) + A(5) = \begin{pmatrix}4 & -2\\ 2 & -4\end{pmatrix} + \begin{pmatrix}2 & 5\\ -5 & -2\end{pmatrix} = \begin{pmatrix}6 & 3\\ -3 & -6\end{pmatrix} = 3\begin{pmatrix}2 & 1\\ -1 & -2\end{pmatrix} = 3A(1).$$

*Barem: 3p calculul sumei, 2p identificarea cu $3A(1)$.*

#### c) Mulțimea valorilor $x$ cu $\det\left(A(x)\cdot A(-x) - x^2I_2\right) \ge 0$

$A(-x) = \begin{pmatrix}2 & -x\\ x & -2\end{pmatrix}$. Produsul:

$$A(x)A(-x) = \begin{pmatrix}2 & x\\ -x & -2\end{pmatrix}\begin{pmatrix}2 & -x\\ x & -2\end{pmatrix} = \begin{pmatrix}4 + x^2 & -2x - 2x\\ -2x - 2x & x^2 + 4\end{pmatrix} = \begin{pmatrix}x^2 + 4 & -4x\\ -4x & x^2 + 4\end{pmatrix}.$$

Scădem $x^2I_2$:

$$A(x)A(-x) - x^2I_2 = \begin{pmatrix}4 & -4x\\ -4x & 4\end{pmatrix}, \qquad \det = 16 - 16x^2 = 16(1 - x^2).$$

Inecuația $16(1 - x^2) \ge 0 \iff x^2 \le 1 \iff x \in [-1, 1]$.

**Răspuns:** $x \in [-1, 1]$. *Barem: 3p determinantul $16(1-x^2)$, 2p rezolvarea inecuației.*

### 2. Polinomul $f = X^3 + mX^2 - X - m$

#### a) $f(1) = 0$, pentru orice $m$ real

$$f(1) = 1^3 + m\cdot 1^2 - 1 - m = 1 + m - 1 - m = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Pentru $m = -3$, 3 este rădăcină

$f = X^3 - 3X^2 - X + 3$, deci

$$f(3) = 27 - 3\cdot 9 - 3 + 3 = 27 - 27 - 3 + 3 = 0,$$

adică 3 este rădăcină a lui $f$. *Barem: 3p înlocuirea, 2p calculul și concluzia.*

#### c) $m$ cu $(x_1x_2 + x_1x_3 + x_2x_3)^2 + x_1x_2x_3(x_1 + x_2 + x_3) = 1$

Relațiile lui Viète pentru $X^3 + bX^2 + cX + d$ (aici $b = m$, $c = -1$, $d = -m$):

$$x_1 + x_2 + x_3 = -m, \qquad x_1x_2 + x_1x_3 + x_2x_3 = -1, \qquad x_1x_2x_3 = -(-m) = m.$$

Înlocuim: $(-1)^2 + m\cdot(-m) = 1 - m^2$. Condiția: $1 - m^2 = 1 \iff m^2 = 0 \iff m = 0$.

**Răspuns:** $m = 0$. *Barem: 3p relațiile lui Viète, 2p valoarea lui $m$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2x^2 - 1 + \dfrac4x$

#### a) $f'(x) = \dfrac{4(x^3 - 1)}{x^2}$

Derivăm termen cu termen, cu $\left(\dfrac1x\right)' = -\dfrac{1}{x^2}$:

$$f'(x) = 4x - \frac{4}{x^2} = \frac{4x^3 - 4}{x^2} = \frac{4(x^3 - 1)}{x^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în punctul de abscisă $x = 2$

$f(2) = 8 - 1 + 2 = 9$ și $f'(2) = \dfrac{4(8 - 1)}{4} = 7$. Ecuația tangentei $y - f(2) = f'(2)(x - 2)$:

$$y - 9 = 7(x - 2) \iff y = 7x - 5.$$

**Răspuns:** $y = 7x - 5$. *Barem: 2p $f(2)$ și $f'(2)$, 3p ecuația tangentei.*

#### c) $6 \le 2x^2 + \dfrac4x \le 33$, pentru orice $x \in \left[\dfrac14, 4\right]$

Observăm că $2x^2 + \dfrac4x = f(x) + 1$, deci inegalitatea este echivalentă cu $5 \le f(x) \le 32$.

**Monotonia.** $x^2 > 0$, deci semnul lui $f'$ este semnul lui $x^3 - 1$: $f'(x) \le 0$ pe $\left[\dfrac14, 1\right]$ și $f'(x) \ge 0$ pe $[1, 4]$. Deci $f$ scade pe $\left[\dfrac14, 1\right]$ și crește pe $[1, 4]$.

| $x$ | $\tfrac14$ | | $1$ | | $4$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | |
| $f(x)$ | $\tfrac{121}{8}$ | ↘ | $5$ | ↗ | $32$ |

**Valorile:** $f(1) = 2 - 1 + 4 = 5$; $f(4) = 32 - 1 + 1 = 32$; $f\left(\dfrac14\right) = \dfrac18 - 1 + 16 = \dfrac{121}{8} \approx 15{,}1$.

Minimul pe interval este $f(1) = 5$, iar maximul este cel mai mare dintre valorile la capete, $\max\left(\dfrac{121}{8}, 32\right) = 32$. Așadar $5 \le f(x) \le 32$, adică

$$6 \le 2x^2 + \frac4x \le 33, \quad \text{pentru orice } x \in \left[\frac14, 4\right]. \qquad \blacksquare$$

*Barem: 2p monotonia, 3p valorile și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x - 1 + 2\ln x$

#### a) $\displaystyle\int_1^3 \left(f(x) - 2\ln x\right)dx = 2$

$$\int_1^3 (x - 1)\,dx = \left(\frac{x^2}{2} - x\right)\Big|_1^3 = \left(\frac92 - 3\right) - \left(\frac12 - 1\right) = \frac32 + \frac12 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e \frac{f(x) - x + 1}{x}\,dx = 1$

$f(x) - x + 1 = 2\ln x$, deci integrandul este $\dfrac{2\ln x}{x} = 2\ln x\cdot(\ln x)'$, cu primitiva $\ln^2 x$:

$$\int_1^e \frac{2\ln x}{x}\,dx = \ln^2 x\Big|_1^e = 1^2 - 0^2 = 1.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) Aria delimitată de graficul lui $g(x) = 3x\left(f(x) + 1\right)$, axa $Ox$, $x = 1$, $x = 3$, este $a + 27\ln 3$

$g(x) = 3x(x + 2\ln x) = 3x^2 + 6x\ln x$. Pe $[1, 3]$ avem $x > 0$ și $\ln x \ge 0$, deci $g(x) \ge 0$ și aria este chiar integrala:

$$\mathcal A = \int_1^3 (3x^2 + 6x\ln x)\,dx = x^3\Big|_1^3 + \int_1^3 6x\ln x\,dx = 26 + \int_1^3 6x\ln x\,dx.$$

Pentru a doua integrală, prin părți cu $u = \ln x$, $v' = 6x$ ($u' = \frac1x$, $v = 3x^2$):

$$\int_1^3 6x\ln x\,dx = 3x^2\ln x\Big|_1^3 - \int_1^3 3x^2\cdot\frac1x\,dx = 27\ln 3 - \frac{3x^2}{2}\Big|_1^3 = 27\ln 3 - \left(\frac{27}{2} - \frac32\right) = 27\ln 3 - 12.$$

Deci $\mathcal A = 26 - 12 + 27\ln 3 = 14 + 27\ln 3$. Din $a + 27\ln 3 = 14 + 27\ln 3$ obținem $a = 14$.

**Răspuns:** $a = 14$. *Barem: 3p scrierea ariei și integrarea prin părți, 2p $14 + 27\ln 3$ și $a = 14$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $3$ |
| I.2 | $m = 2$ |
| I.3 | $x = 5$ |
| I.4 | 200 de lei |
| I.5 | $a = 3$, $b = 4$ |
| I.6 | $5$ |
| II.1.c | $x \in [-1, 1]$ |
| II.2.c | $m = 0$ |
| III.1.b | $y = 7x - 5$ |
| III.2.c | $a = 14$ |

## Ce merită reținut din varianta 9

- **Probleme cu procente**: scrie ecuația față de prețul inițial, $x + \frac{p}{100}x = \text{preț final}$.
- **Mijlocul unui segment**: dacă știi mijlocul și un capăt, celălalt capăt are coordonatele $2x_M - x_A$, $2y_M - y_A$.
- **Inegalități de forma** $m \le h(x) \le M$ pe un interval: tabelul de variație dă minimul (în punctul critic) și maximul (la unul dintre capete).
- **Aria sub grafic**: verifică semnul funcției pe interval; dacă e pozitivă, aria este integrala.
- **$\int x\ln x\,dx$**: prin părți, derivezi $\ln x$ și integrezi polinomul.

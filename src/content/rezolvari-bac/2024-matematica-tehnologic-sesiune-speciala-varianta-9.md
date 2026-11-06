Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_tehnologic**, sesiunea specială, **varianta 9**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\sqrt2\cdot(3 + 2\sqrt2) - 3\sqrt2 + 3 = 7$

Desfacem paranteza înmulțind $\sqrt2$ cu fiecare termen:

$$\sqrt2\cdot 3 + \sqrt2\cdot 2\sqrt2 = 3\sqrt2 + 2\cdot(\sqrt2)^2 = 3\sqrt2 + 4.$$

Atunci expresia devine:

$$3\sqrt2 + 4 - 3\sqrt2 + 3 = 4 + 3 = 7.$$

Termenii cu radical se reduc ($3\sqrt2 - 3\sqrt2 = 0$). *Barem: 2p desfacerea parantezei, 3p finalizarea.*

### 2. $f(x) = 3x - 6$: determinați $m$ cu $f(m) = 3$

Înlocuim $x$ cu $m$: $f(m) = 3m - 6$. Ecuația devine:

$$3m - 6 = 3 \iff 3m = 9 \iff m = 3.$$

**Răspuns:** $m = 3$. *Barem: 3p expresia lui $f(m)$, 2p rezolvarea ecuației.*

### 3. Ecuația exponențială $5^{4x-2} = 5^2$

Funcția exponențială cu baza $5$ este injectivă (strict crescătoare), deci două puteri ale lui $5$ sunt egale doar dacă exponenții sunt egali:

$$4x - 2 = 2 \iff 4x = 4 \iff x = 1.$$

Verificare: $5^{4\cdot1-2} = 5^2$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p egalarea exponenților și $4x = 4$, 2p soluția.*

### 4. Prețul de 300 de lei după o ieftinire cu 30%

Ieftinirea înseamnă $30\%$ din prețul inițial:

$$\frac{30}{100}\cdot 300 = 90 \text{ lei}.$$

Prețul nou: $300 - 90 = 210$ lei. (Echivalent: rămân $70\%$ din preț, $0{,}7\cdot 300 = 210$.)

**Răspuns:** 210 lei. *Barem: 3p valoarea ieftinirii, 2p prețul final.*

### 5. $A(1,1)$, $B(5,m)$, $M(3,4)$ mijlocul lui $AB$

Coordonatele mijlocului sunt mediile coordonatelor capetelor:

$$x_M = \frac{x_A + x_B}{2},\qquad y_M = \frac{y_A + y_B}{2}.$$

Pe abscisă: $\dfrac{1+5}{2} = 3$ ✔ (se potrivește cu $x_M = 3$). Pe ordonată: $\dfrac{1 + m}{2} = 4 \iff 1 + m = 8 \iff m = 7$.

**Răspuns:** $m = 7$. *Barem: 3p scrierea relațiilor de mijloc, 2p $m = 7$.*

### 6. Arătați că $2(\sin45^\circ + \sin30^\circ)(\sin45^\circ - \sin30^\circ) = \cos60^\circ$

Valorile necesare: $\sin30^\circ = \dfrac12$, $\sin45^\circ = \dfrac{\sqrt2}{2}$, $\cos60^\circ = \dfrac12$.

Produsul $(a+b)(a-b) = a^2 - b^2$:

$$2\left(\left(\frac{\sqrt2}{2}\right)^2 - \left(\frac12\right)^2\right) = 2\left(\frac24 - \frac14\right) = 2\cdot\frac14 = \frac12 = \cos60^\circ.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(x) = \begin{pmatrix}1 & x\\ x+1 & 0\end{pmatrix}$

#### a) $\det(A(0)) = 0$

Pentru $x = 0$: $A(0) = \begin{pmatrix}1 & 0\\ 1 & 0\end{pmatrix}$.

$$\det(A(0)) = \begin{vmatrix}1 & 0\\ 1 & 0\end{vmatrix} = 1\cdot 0 - 0\cdot 1 = 0.$$

(Determinantul de ordin 2: produsul diagonalei principale minus produsul diagonalei secundare. O coloană nulă dă mereu determinant $0$.) *Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $A(3) + A(5) = 2A(4)$

$$A(3) + A(5) = \begin{pmatrix}1 & 3\\ 4 & 0\end{pmatrix} + \begin{pmatrix}1 & 5\\ 6 & 0\end{pmatrix} = \begin{pmatrix}2 & 8\\ 10 & 0\end{pmatrix} = 2\begin{pmatrix}1 & 4\\ 5 & 0\end{pmatrix} = 2A(4).$$

Adunarea se face element cu element, iar la final dăm factor comun pe $2$. *Barem: 3p suma, 2p identificarea cu $2A(4)$.*

#### c) Numerele naturale $n$ cu $\det(A(n) + I_2) \ge 0$

$$A(n) + I_2 = \begin{pmatrix}1 & n\\ n+1 & 0\end{pmatrix} + \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix} = \begin{pmatrix}2 & n\\ n+1 & 1\end{pmatrix},$$

$$\det(A(n) + I_2) = 2\cdot 1 - n(n+1) = 2 - n(n+1).$$

Condiția: $2 - n(n+1) \ge 0 \iff n(n+1) \le 2$.

Cum $n$ este natural, testăm: $n = 0$: $0 \le 2$ ✔; $n = 1$: $2 \le 2$ ✔; $n = 2$: $6 > 2$ ✗, iar pentru $n \ge 2$ produsul $n(n+1)$ crește, deci nu mai convine nicio valoare. (Echivalent: $n^2 + n - 2 \le 0 \iff (n-1)(n+2) \le 0 \iff n \in [-2, 1]$.)

**Răspuns:** $n \in \{0, 1\}$. *Barem: 2p matricea și determinantul, 3p valorile lui $n$.*

### 2. Polinomul $f = X^3 - 3X^2 + mX - 1$

#### a) $f(0) = -1$ pentru orice $m$

$$f(0) = 0^3 - 3\cdot0^2 + m\cdot 0 - 1 = 0 - 0 + 0 - 1 = -1,$$

rezultat care nu depinde de $m$. *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $x_1 + x_2 + x_3 = 3x_1x_2x_3$ pentru orice $m$

Relațiile lui Viète pentru $aX^3 + bX^2 + cX + d$ (aici $a = 1$, $b = -3$, $c = m$, $d = -1$):

$$x_1 + x_2 + x_3 = -\frac{b}{a} = 3, \qquad x_1x_2x_3 = -\frac{d}{a} = 1.$$

Atunci $3x_1x_2x_3 = 3\cdot 1 = 3 = x_1 + x_2 + x_3$, oricare ar fi $m$ (niciuna dintre cele două relații nu îl conține pe $m$).

*Barem: 2p suma rădăcinilor, 3p produsul și concluzia.* Atenție la semne: produsul este $-\dfrac{d}{a}$ pentru gradul 3.

#### c) $m$ pentru care $f$ este divizibil cu $X - 1$

După teorema lui Bézout, $X - 1$ divide $f$ dacă și numai dacă $f(1) = 0$.

$$f(1) = 1 - 3 + m - 1 = m - 3.$$

$f(1) = 0 \iff m = 3$.

**Răspuns:** $m = 3$. *Barem: 2p calculul lui $f(1)$, 3p condiția și $m = 3$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x}{x^2 + 1}$

#### a) $f'(x) = \dfrac{1 - x^2}{(x^2+1)^2}$

Regula câtului $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$, cu $u = x$, $v = x^2 + 1$:

$$f'(x) = \frac{1\cdot(x^2+1) - x\cdot 2x}{(x^2+1)^2} = \frac{x^2 + 1 - 2x^2}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2},\quad x \in \mathbb R.$$

*Barem: 3p aplicarea regulii câtului, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty} x f(x) = 1$

$$x f(x) = \frac{x^2}{x^2 + 1} = \frac{x^2}{x^2\left(1 + \frac{1}{x^2}\right)} = \frac{1}{1 + \frac{1}{x^2}}.$$

Cum $\dfrac{1}{x^2} \to 0$ când $x \to +\infty$:

$$\lim_{x\to+\infty} x f(x) = \frac{1}{1 + 0} = 1.$$

(Raport de polinoame de același grad: limita este raportul coeficienților dominanți, $\frac11 = 1$.) *Barem: 3p factorul comun forțat, 2p limita.*

#### c) Intervalele de monotonie

Numitorul $(x^2+1)^2 > 0$, deci semnul lui $f'$ este semnul lui $1 - x^2 = (1-x)(1+x)$.

$f'(x) = 0 \iff x^2 = 1 \iff x \in \{-1, 1\}$.

| $x$ | $-\infty$ | | $-1$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↘ | $-\tfrac12$ | ↗ | $\tfrac12$ | ↘ | |

**Răspuns:** $f$ este descrescătoare pe $(-\infty, -1]$, crescătoare pe $[-1, 1]$ și descrescătoare pe $[1, +\infty)$. *Barem: 3p rădăcinile derivatei și primele două intervale, 2p ultimul interval.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = (x^2 + 1)e^x$

#### a) $\displaystyle\int_0^1 \frac{f(x)}{e^x}\,dx = \frac43$

Factorul $e^x$ se simplifică: $\dfrac{f(x)}{e^x} = x^2 + 1$.

$$\int_0^1 (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^1 = \frac13 + 1 - 0 - 0 = \frac43.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $F(x) = (x^2 - 2x + 3)e^x$ este o primitivă a lui $f$

$F$ este derivabilă (produs de funcții derivabile). Cu regula produsului $(uv)' = u'v + uv'$:

$$F'(x) = (2x - 2)e^x + (x^2 - 2x + 3)e^x = (x^2 - 2x + 3 + 2x - 2)e^x = (x^2 + 1)e^x = f(x),$$

pentru orice $x \in \mathbb R$, deci $F$ este o primitivă a lui $f$. *Barem: 3p calculul derivatei, 2p concluzia $F' = f$.*

#### c) Aria dintre graficul lui $f$, axa $Ox$, $x = 0$ și $x = 2$ este $3(e^2 - 1)$

Pe $[0, 2]$ avem $x^2 + 1 > 0$ și $e^x > 0$, deci $f(x) > 0$ și $|f(x)| = f(x)$. Folosim primitiva de la b) (formula Leibniz–Newton):

$$\mathcal A = \int_0^2 f(x)\,dx = F(2) - F(0) = (4 - 4 + 3)e^2 - (0 - 0 + 3)e^0 = 3e^2 - 3 = 3(e^2 - 1).$$

*Barem: 3p scrierea ariei ca integrală și $F(2) - F(0)$, 2p rezultatul.* Nu uita să justifici că $f \ge 0$ pe interval — altfel aria nu este direct integrala.

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $7$ |
| I.2 | $m = 3$ |
| I.3 | $x = 1$ |
| I.4 | 210 lei |
| I.5 | $m = 7$ |
| I.6 | $\frac12 = \cos 60^\circ$ |
| II.1.c | $n \in \{0, 1\}$ |
| II.2.c | $m = 3$ |
| III.1.c | ↘ pe $(-\infty,-1]$, ↗ pe $[-1,1]$, ↘ pe $[1,+\infty)$ |
| III.2.c | $3(e^2-1)$ |

## Ce merită reținut din varianta 9

- **Divizibilitatea cu $X - a$**: teorema lui Bézout, $f(a) = 0$ — cea mai rapidă cale.
- **Relațiile lui Viète la gradul 3**: $x_1 + x_2 + x_3 = -\frac{b}{a}$, $x_1x_2x_3 = -\frac{d}{a}$.
- **Inecuații în $\mathbb N$**: după ce obții $n(n+1) \le 2$, testează valorile mici și argumentează că restul nu convin.
- **Aria cu primitivă dată**: dacă la b) ai demonstrat o primitivă, folosește-o direct la c) cu $F(b) - F(a)$.

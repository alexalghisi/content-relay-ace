Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 10**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_2 = 8$, $a_3 = 12$: determinați $a_1$

Rația este diferența a doi termeni consecutivi: $r = a_3 - a_2 = 12 - 8 = 4$. Atunci $a_1 = a_2 - r = 8 - 4 = 4$.

**Răspuns:** $a_1 = 4$. *Barem: 3p rația, 2p termenul $a_1$.*

### 2. $f(x) = 3x - 2$: determinați $m$ cu $f(m) = m$

$f(m) = 3m - 2$, deci $3m - 2 = m \iff 2m = 2 \iff m = 1$.

**Răspuns:** $m = 1$. *Barem: 2p scrierea lui $f(m)$, 3p rezolvarea ecuației.*

### 3. Ecuația $\log_6(9 - x^2) = \log_6 5$

**Condiția de existență:** $9 - x^2 > 0 \iff x \in (-3, 3)$.

Logaritmul în baza 6 este injectiv, deci argumentele sunt egale: $9 - x^2 = 5 \iff x^2 = 4 \iff x = \pm 2$.

**Verificare:** pentru $x = \pm2$, $9 - 4 = 5 > 0$, deci ambele soluții se află în domeniu.

**Răspuns:** $x \in \{-2, 2\}$. *Barem: 2p ecuația $x^2 - 4 = 0$, 3p soluțiile care convin.*

### 4. $A = \{0, 1, \dots, 9\}$: probabilitatea ca $\sqrt{2n+1} \in A$

**Cazuri posibile:** $A$ are 10 elemente.

**Cazuri favorabile:** $\sqrt{2n+1}$ trebuie să fie un număr natural cel mult 9, deci $2n + 1$ trebuie să fie pătrat perfect. Cum $n \le 9$, avem $2n + 1 \in \{1, 3, 5, \dots, 19\}$; dintre acestea, pătrate perfecte sunt doar $1$ și $9$:
- $2n + 1 = 1 \Rightarrow n = 0$, $\sqrt1 = 1 \in A$;
- $2n + 1 = 9 \Rightarrow n = 4$, $\sqrt9 = 3 \in A$.

Deci 2 cazuri favorabile:

$$p = \frac{2}{10} = \frac15.$$

**Răspuns:** $p = \dfrac15$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,0)$, $B(4,4)$, $C(5,2)$: triunghiul $ABC$ este dreptunghic în $C$

Calculăm pantele laturilor care pleacă din $C$:

$$m_{AC} = \frac{2 - 0}{5 - 1} = \frac12, \qquad m_{BC} = \frac{2 - 4}{5 - 4} = -2.$$

Produsul pantelor: $m_{AC}\cdot m_{BC} = \dfrac12\cdot(-2) = -1$, deci $AC \perp BC$ și triunghiul este dreptunghic în $C$. $\blacksquare$

(Variantă: cu reciproca teoremei lui Pitagora, $AC^2 = 20$, $BC^2 = 5$, $AB^2 = 25 = AC^2 + BC^2$.) *Barem: 2p $m_{AC}$, 3p $m_{BC}$ și concluzia.*

### 6. $E(x) = 2\sin x\cos\dfrac{x}{2} + \left(\sin\dfrac{3x}{4}\right)^2$: arătați că $E\left(\dfrac{\pi}{3}\right) = 2$

Pentru $x = \dfrac\pi3$: $\dfrac x2 = \dfrac\pi6$ și $\dfrac{3x}{4} = \dfrac\pi4$. Valorile: $\sin\dfrac\pi3 = \dfrac{\sqrt3}{2}$, $\cos\dfrac\pi6 = \dfrac{\sqrt3}{2}$, $\sin\dfrac\pi4 = \dfrac{\sqrt2}{2}$.

$$E\left(\frac\pi3\right) = 2\cdot\frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} + \left(\frac{\sqrt2}{2}\right)^2 = \frac32 + \frac24 = \frac32 + \frac12 = 2.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $A = \begin{pmatrix}1 & 0\\ 0 & 4\end{pmatrix}$ și $B(a) = \begin{pmatrix}a & a+1\\ a-3 & 4a-1\end{pmatrix}$

#### a) $\det(B(1)) = 7$

$B(1) = \begin{pmatrix}1 & 2\\ -2 & 3\end{pmatrix}$, deci

$$\det(B(1)) = 1\cdot 3 - 2\cdot(-2) = 3 + 4 = 7.$$

*Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

#### b) $B(2) - B(0)\cdot B(1) = 4A$

$B(0) = \begin{pmatrix}0 & 1\\ -3 & -1\end{pmatrix}$, $B(1) = \begin{pmatrix}1 & 2\\ -2 & 3\end{pmatrix}$, $B(2) = \begin{pmatrix}2 & 3\\ -1 & 7\end{pmatrix}$.

$$B(0)\cdot B(1) = \begin{pmatrix}0\cdot1 + 1\cdot(-2) & 0\cdot2 + 1\cdot3\\ -3\cdot1 + (-1)(-2) & -3\cdot2 + (-1)\cdot3\end{pmatrix} = \begin{pmatrix}-2 & 3\\ -1 & -9\end{pmatrix}.$$

$$B(2) - B(0)\cdot B(1) = \begin{pmatrix}2 + 2 & 3 - 3\\ -1 + 1 & 7 + 9\end{pmatrix} = \begin{pmatrix}4 & 0\\ 0 & 16\end{pmatrix} = 4\begin{pmatrix}1 & 0\\ 0 & 4\end{pmatrix} = 4A. \ \blacksquare$$

*Barem: 3p calculul lui $B(0)\cdot B(1)$, 2p finalizarea.*

#### c) $a$ pentru care $C(a) = B(a) - aA$ nu este inversabilă

$$C(a) = \begin{pmatrix}a - a & a + 1\\ a - 3 & 4a - 1 - 4a\end{pmatrix} = \begin{pmatrix}0 & a + 1\\ a - 3 & -1\end{pmatrix}.$$

$$\det(C(a)) = 0\cdot(-1) - (a+1)(a-3) = -(a-3)(a+1).$$

O matrice pătratică nu este inversabilă exact când determinantul ei este zero: $-(a-3)(a+1) = 0 \iff a \in \{-1, 3\}$.

**Răspuns:** $a \in \{-1, 3\}$. *Barem: 3p determinantul lui $C(a)$, 2p valorile lui $a$.*

### 2. Legea $x * y = xy - 2x - 3y + 6$

#### a) $2 * 2 = 0$

$$2 * 2 = 2\cdot2 - 2\cdot2 - 3\cdot2 + 6 = 4 - 4 - 6 + 6 = 0.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * 6 = x$

$x * 6 = 6x - 2x - 18 + 6 = 4x - 12$. Ecuația $4x - 12 = x \iff 3x = 12 \iff x = 4$.

**Răspuns:** $x = 4$. *Barem: 3p expresia lui $x * 6$, 2p soluția.*

#### c) Mulțimea numerelor reale $x$ cu $x * (2 * x) \ge 2$

Observație utilă: legea se scrie $x * y = (x - 3)(y - 2)$, pentru că $(x-3)(y-2) = xy - 2x - 3y + 6$.

Pasul 1: $2 * x = (2 - 3)(x - 2) = -(x - 2) = 2 - x$.

Pasul 2: $x * (2 - x) = (x - 3)(2 - x - 2) = (x - 3)(-x) = -x^2 + 3x$.

Inecuația: $-x^2 + 3x \ge 2 \iff x^2 - 3x + 2 \le 0 \iff (x - 1)(x - 2) \le 0$.

Trinomul are rădăcinile $1$ și $2$ și coeficientul dominant pozitiv, deci este negativ sau zero între rădăcini: $x \in [1, 2]$.

**Răspuns:** $x \in [1, 2]$. *Barem: 2p calculul lui $x * (2 * x)$, 3p rezolvarea inecuației.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{2x}{x^2 + x + 4}$

#### a) $f'(x) = \dfrac{2(4 - x^2)}{(x^2 + x + 4)^2}$

Numitorul nu se anulează ($\Delta = 1 - 16 < 0$). Regula câtului:

$$f'(x) = \frac{2(x^2 + x + 4) - 2x(2x + 1)}{(x^2 + x + 4)^2} = \frac{2x^2 + 2x + 8 - 4x^2 - 2x}{(x^2 + x + 4)^2} = \frac{8 - 2x^2}{(x^2+x+4)^2} = \frac{2(4 - x^2)}{(x^2+x+4)^2}.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

$$\lim_{x\to+\infty}\frac{2x}{x^2 + x + 4} = \lim_{x\to+\infty}\frac{2}{x\left(1 + \frac1x + \frac{4}{x^2}\right)} = 0.$$

Limita este finită, deci dreapta $y = 0$ este asimptota orizontală spre $+\infty$.

**Răspuns:** $y = 0$. *Barem: 3p limita, 2p concluzia.*

#### c) $f(x) - f(4 - x) \le 1$ pentru orice $x \in [4, +\infty)$

Din a): $f'(x) = 0 \iff x = \pm 2$; semnul lui $f'$ este semnul lui $4 - x^2$:

| $x$ | $-\infty$ | | $-2$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↘ | $-\tfrac23$ | ↗ | $\tfrac12$ | ↘ | |

Valori: $f(-2) = \dfrac{-4}{4 - 2 + 4} = -\dfrac23$, $f(4) = \dfrac{8}{16 + 4 + 4} = \dfrac13$.

- Pentru $x \ge 4$: $f$ este descrescătoare pe $[2, +\infty)$, deci $f(x) \le f(4) = \dfrac13$.
- Pentru $x \ge 4$: $4 - x \in (-\infty, 0]$. Pe acest interval $f$ scade până la $-2$ și crește după, deci minimul lui $f$ pe $(-\infty, 0]$ este $f(-2)$: $f(4 - x) \ge -\dfrac23$.

Scăzând: $f(x) - f(4 - x) \le \dfrac13 - \left(-\dfrac23\right) = 1$. $\blacksquare$

*Barem: 2p monotonia, 3p estimările și concluzia.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x+3}{x+1}$

#### a) $\displaystyle\int_0^2 (x+1)f(x)\,dx = 8$

$(x+1)f(x) = x + 3$:

$$\int_0^2 (x + 3)\,dx = \left(\frac{x^2}{2} + 3x\right)\Big|_0^2 = 2 + 6 = 8.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = 1 + 2\ln 2$

Scriem $\dfrac{x+3}{x+1} = \dfrac{(x+1) + 2}{x+1} = 1 + \dfrac{2}{x+1}$:

$$\int_0^1\left(1 + \frac{2}{x+1}\right)dx = \Big(x + 2\ln(x+1)\Big)\Big|_0^1 = 1 + 2\ln2 - 0 - 2\ln1 = 1 + 2\ln 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $a$ pentru care $\displaystyle\int_1^2 (x^2 - 1)e^x f(x)\,dx = e(e + a)$

Simplificăm: $(x^2 - 1)f(x) = (x-1)(x+1)\cdot\dfrac{x+3}{x+1} = (x-1)(x+3) = x^2 + 2x - 3$.

Căutăm o primitivă a lui $(x^2 + 2x - 3)e^x$. Observăm că $\left(P(x)e^x\right)' = (P(x) + P'(x))e^x$; pentru $P(x) = x^2 - 3$ avem $P + P' = x^2 + 2x - 3$. Deci

$$\int_1^2 (x^2 + 2x - 3)e^x\,dx = (x^2 - 3)e^x\Big|_1^2 = e^2 - (-2)e = e^2 + 2e = e(e + 2).$$

Din $e(e + a) = e(e + 2)$ obținem $a = 2$.

**Răspuns:** $a = 2$. *Barem: 3p calculul integralei, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_1 = 4$ |
| I.2 | $m = 1$ |
| I.3 | $x \in \{-2, 2\}$ |
| I.4 | $p = \tfrac15$ |
| II.1.c | $a \in \{-1, 3\}$ |
| II.2.b | $x = 4$ |
| II.2.c | $x \in [1, 2]$ |
| III.1.b | $y = 0$ |
| III.2.c | $a = 2$ |

## Ce merită reținut din varianta 10

- **Legi de compoziție**: încearcă scrierea $x * y = (x - \alpha)(y - \beta) + \gamma$; calculele devin mult mai scurte.
- **Inegalități de tipul $f(x) - f(g(x)) \le k$**: majorează separat primul termen și minorează separat al doilea, folosind tabelul de variație.
- **Integrale cu $e^x$**: o primitivă a lui $Q(x)e^x$ este $P(x)e^x$ cu $P + P' = Q$ — mai rapid decât integrarea prin părți de două ori.

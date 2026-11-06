Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie geometrică: $b_3$, știind $b_1 = 2$ și $b_2 = 10$

Rația unei progresii geometrice este raportul dintre doi termeni consecutivi:

$$q = \frac{b_2}{b_1} = \frac{10}{2} = 5.$$

Termenul general este $b_n = b_1 q^{n-1}$, deci $b_3 = b_1 q^2 = 2 \cdot 25 = 50$. (Verificare: $b_3 = b_2 \cdot q = 10 \cdot 5 = 50$.)

**Răspuns:** $b_3 = 50$. *Barem: 3p rația, 2p $b_3$.*

### 2. $f(x) = x - 5$, $g(x) = ax - 1$: determinați $a$ cu $(f \circ g)(2) = 2$

Compunerea se calculează „din interior spre exterior”: $(f\circ g)(2) = f(g(2))$.

$g(2) = 2a - 1$, apoi $f(2a - 1) = 2a - 1 - 5 = 2a - 6$.

$$2a - 6 = 2 \iff 2a = 8 \iff a = 4.$$

**Răspuns:** $a = 4$. *Barem: 3p calculul lui $(f\circ g)(2)$, 2p rezolvarea ecuației.*

### 3. Ecuația $\log_8 x + \log_8(8 - x) = \log_8(6 + x)$

**Condiții de existență:** $x > 0$, $8 - x > 0$, $6 + x > 0$, adică $x \in (0, 8)$.

Folosim $\log_8 u + \log_8 v = \log_8(uv)$:

$$\log_8\big(x(8-x)\big) = \log_8(6 + x) \iff 8x - x^2 = 6 + x \iff x^2 - 7x + 6 = 0.$$

$\Delta = 49 - 24 = 25$, deci $x_1 = \dfrac{7 - 5}{2} = 1$, $x_2 = \dfrac{7+5}{2} = 6$. Ambele se află în $(0, 8)$, deci convin.

**Răspuns:** $x \in \{1, 6\}$. *Barem: 2p ecuația de gradul II, 3p soluțiile care convin.*

### 4. Câte numere naturale pare de două cifre se pot forma cu cifre din $A = \{1, 2, 4, 6, 8\}$

Un număr $\overline{ab}$ este par dacă cifra unităților $b$ este pară: $b \in \{2, 4, 6, 8\}$ — **4 moduri**.

Cifra zecilor $a$ poate fi orice cifră din $A$ (cifrele se pot repeta, iar $0 \notin A$, deci nu avem problema primei cifre nule) — **5 moduri**.

Regula produsului: $4 \cdot 5 = 20$.

**Răspuns:** 20 de numere. *Barem: 2p alegerea cifrei unităților, 3p numărarea finală.* Atenție: enunțul nu cere cifre distincte, deci numere ca 22 sau 88 se numără.

### 5. Dreapta $d$ prin $B(2,2)$, paralelă cu $AC$, unde $A(1,3)$, $C(4,6)$

Panta dreptei $AC$: $m_{AC} = \dfrac{6 - 3}{4 - 1} = 1$. Drepte paralele au pante egale, deci $m_d = 1$.

Ecuația dreptei prin $B$ cu panta $1$: $y - y_B = m_d(x - x_B) \iff y - 2 = x - 2 \iff y = x$.

**Răspuns:** $d: y = x$. *Barem: 3p panta, 2p ecuația.*

### 6. $E(x) = 3\operatorname{tg}\dfrac{x}{3} + \sin x - 2\sin\dfrac{2x}{3}$; arătați că $E\left(\dfrac{\pi}{2}\right) = 1$

Pentru $x = \dfrac{\pi}{2}$: $\dfrac{x}{3} = \dfrac{\pi}{6}$ și $\dfrac{2x}{3} = \dfrac{\pi}{3}$. Valorile necesare:

$$\operatorname{tg}\frac{\pi}{6} = \frac{1}{\sqrt3} = \frac{\sqrt3}{3}, \qquad \sin\frac{\pi}{2} = 1, \qquad \sin\frac{\pi}{3} = \frac{\sqrt3}{2}.$$

$$E\left(\frac{\pi}{2}\right) = 3\cdot\frac{\sqrt3}{3} + 1 - 2\cdot\frac{\sqrt3}{2} = \sqrt3 + 1 - \sqrt3 = 1.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricea $A(a) = \begin{pmatrix}1 & a & -2a\\ 2 & -1 & -a\\ 1 & -a & 0\end{pmatrix}$ și sistemul $\begin{cases}x + ay - 2az = -1\\ 2x - y - az = a\\ x - ay = a\end{cases}$

#### a) $\det(A(2)) = 4$

$$\det(A(2)) = \begin{vmatrix}1 & 2 & -4\\ 2 & -1 & -2\\ 1 & -2 & 0\end{vmatrix}.$$

Cu regula lui Sarrus: termenii cu plus sunt $1\cdot(-1)\cdot 0 = 0$, $2\cdot(-2)\cdot 1 = -4$, $(-4)\cdot 2\cdot(-2) = 16$; termenii cu minus sunt $(-4)\cdot(-1)\cdot 1 = 4$, $1\cdot(-2)\cdot(-2) = 4$, $2\cdot 2\cdot 0 = 0$.

$$\det(A(2)) = 0 - 4 + 16 - 4 - 4 - 0 = 4.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Pentru $a = 1$ sistemul are o infinitate de soluții

Pentru $a = 1$ sistemul devine $\begin{cases}x + y - 2z = -1\\ 2x - y - z = 1\\ x - y = 1\end{cases}$, iar

$$\det(A(1)) = \begin{vmatrix}1 & 1 & -2\\ 2 & -1 & -1\\ 1 & -1 & 0\end{vmatrix} = 0 - 1 + 4 - 2 - 1 - 0 = 0.$$

Minorul $\begin{vmatrix}1 & 1\\ 2 & -1\end{vmatrix} = -3 \ne 0$ este minor principal, deci rangul matricei este 2, cu $z$ necunoscută secundară. Minorul caracteristic (bordăm cu coloana termenilor liberi și linia a treia):

$$\Delta_c = \begin{vmatrix}1 & 1 & -1\\ 2 & -1 & 1\\ 1 & -1 & 1\end{vmatrix} = -1 + 1 + 2 - 1 + 1 - 2 = 0.$$

Conform teoremei lui Rouché, sistemul este compatibil; cum rangul (2) este mai mic decât numărul de necunoscute (3), el este **compatibil nedeterminat**, adică are o infinitate de soluții.

Concret: din ecuația a treia $x = y + 1$; înlocuind în prima, $2y + 1 - 2z = -1 \Rightarrow y = z - 1$, $x = z$. Soluțiile sunt $(\alpha, \alpha - 1, \alpha)$, $\alpha \in \mathbb R$ (verifică și ecuația a doua: $2\alpha - \alpha + 1 - \alpha = 1$ ✔).

*Barem: 2p determinantul nul, 3p minorul principal și minorul caracteristic nul.*

#### c) Pentru $a \in \mathbb R \setminus\{0, 1\}$: soluție unică și $4x_0z_0 = 1$

Calculăm determinantul general (Sarrus):

$$\det(A(a)) = 0 - a^2 + 4a^2 - 2a - a^2 - 0 = 2a^2 - 2a = 2a(a - 1).$$

Pentru $a \notin \{0, 1\}$ avem $\det(A(a)) \ne 0$, deci sistemul este de tip Cramer și are soluție unică.

Rezolvăm direct. Din ecuația a treia: $x = a + ay$. Înlocuim în a doua: $2a + 2ay - y - az = a \Rightarrow az = a + (2a - 1)y$. Înlocuim în prima: $a + ay + ay - 2az = -1$, iar $2az = 2a + 2(2a-1)y$, deci

$$a + 2ay - 2a - (4a - 2)y = -1 \iff (2 - 2a)y = a - 1 \iff y_0 = -\frac12 \quad (a \ne 1).$$

Atunci $x_0 = a - \dfrac a2 = \dfrac a2$, iar $a z_0 = a - \dfrac{2a - 1}{2} = \dfrac12 \Rightarrow z_0 = \dfrac{1}{2a}$ ($a \ne 0$).

$$4x_0 z_0 = 4\cdot\frac a2\cdot\frac{1}{2a} = 1.$$

*Barem: 2p determinantul nenul și soluția unică, 3p calculul lui $x_0$, $z_0$ și concluzia.*

### 2. Polinomul $f = X^3 + X^2 + aX + 8$

#### a) $f(0) = 8$ pentru orice $a$

$$f(0) = 0^3 + 0^2 + a\cdot 0 + 8 = 8,$$

indiferent de valoarea lui $a$ (termenul $aX$ se anulează în $0$). *Barem: 3p înlocuirea, 2p finalizarea.*

#### b) $a$ pentru care $f$ este divizibil cu $g = X + 2$

După teorema lui Bézout, $X + 2 \mid f \iff f(-2) = 0$.

$$f(-2) = -8 + 4 - 2a + 8 = 4 - 2a = 0 \iff a = 2.$$

**Răspuns:** $a = 2$. *Barem: 3p $f(-2)$, 2p valoarea lui $a$.*

#### c) $a$ pentru care raportul a două rădăcini este $2$

Fie $x_1, x_2, x_3$ rădăcinile, cu $x_2 = 2x_1$ (rădăcinile sunt nenule, deoarece $x_1x_2x_3 = -8 \ne 0$). Relațiile lui Viète:

$$x_1 + x_2 + x_3 = -1, \qquad x_1x_2x_3 = -8.$$

Din prima: $x_3 = -1 - 3x_1$. Din a doua: $x_1\cdot 2x_1\cdot(-1 - 3x_1) = -8 \iff -2x_1^2 - 6x_1^3 = -8 \iff 3x_1^3 + x_1^2 - 4 = 0$.

Observăm că $x_1 = 1$ e rădăcină, deci $3x_1^3 + x_1^2 - 4 = (x_1 - 1)(3x_1^2 + 4x_1 + 4)$. Al doilea factor are $\Delta = 16 - 48 < 0$, deci rădăcini complexe nereale.

De ce nu pot fi acelea? Dacă $x_1$ ar fi complex nereal, atunci și $x_2 = 2x_1$ ar fi nereal, iar un polinom cu coeficienți reali are rădăcinile nereale în perechi conjugate: conjugatul lui $x_1$ ar trebui să fie $x_2$ sau $x_3$. $\overline{x_1} = 2x_1$ ar da $|x_1| = 2|x_1|$, imposibil; $\overline{x_1} = x_3$ ar face ca $\overline{x_2} = 2\overline{x_1}$ să fie o a patra rădăcină — imposibil la gradul 3. Deci $x_1 = 1$ real.

Atunci $f(1) = 0$: $1 + 1 + a + 8 = 0 \Rightarrow a = -10$.

**Verificare:** $X^3 + X^2 - 10X + 8 = (X - 1)(X - 2)(X + 4)$, rădăcinile $1, 2, -4$, iar $\dfrac21 = 2$ ✔.

**Răspuns:** $a = -10$. *Barem: 3p ecuația $3x_1^3 + x_1^2 - 4 = 0$ din relațiile lui Viète, 2p rezolvarea și valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = 2x^2 - 4x - 3 - (2x - 3)e^{2x}$

#### a) $f'(x) = 4(x - 1)(1 - e^{2x})$

Derivăm termen cu termen; pentru produs folosim $(uv)' = u'v + uv'$, cu $(e^{2x})' = 2e^{2x}$:

$$f'(x) = 4x - 4 - \left[2e^{2x} + (2x - 3)\cdot 2e^{2x}\right] = 4x - 4 - e^{2x}(2 + 4x - 6) = 4(x-1) - 4(x-1)e^{2x}.$$

Dăm factor comun $4(x-1)$: $f'(x) = 4(x - 1)(1 - e^{2x})$, $x \in \mathbb R$. *Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to0}\frac{f(x)}{x^2} = 4$

$f(0) = -3 - (-3)\cdot 1 = 0$, deci avem nedeterminarea $\frac00$. Aplicăm regula lui l'Hôpital:

$$\lim_{x\to0}\frac{f(x)}{x^2} = \lim_{x\to0}\frac{f'(x)}{2x} = \lim_{x\to0}\frac{4(x-1)(1 - e^{2x})}{2x} = \lim_{x\to 0} 4(x-1)\cdot\frac{1 - e^{2x}}{2x}.$$

Din limita remarcabilă $\lim\limits_{t\to0}\dfrac{e^t - 1}{t} = 1$ (cu $t = 2x$) obținem $\lim\limits_{x\to0}\dfrac{1 - e^{2x}}{2x} = -1$. Deci limita este $4\cdot(-1)\cdot(-1) = 4$.

*Barem: 3p aplicarea l'Hôpital, 2p calculul limitei.*

#### c) Ecuația $f(x) + n = 0$ are soluție unică pentru orice $n \in \mathbb N^*$

Ecuația este $f(x) = -n$, cu $-n \le -1 < 0$. Studiem semnul lui $f'(x) = 4(x - 1)(1 - e^{2x})$: $f'(x) = 0 \iff x = 1$ sau $e^{2x} = 1 \iff x = 0$.

| $x$ | $-\infty$ | | $0$ | | $1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $x - 1$ | | $-$ | $-$ | $-$ | $0$ | $+$ | |
| $1 - e^{2x}$ | | $+$ | $0$ | $-$ | $-$ | $-$ | |
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | | ↘ | $0$ | ↗ | $e^2 - 5$ | ↘ | $-\infty$ |

- Pe $(-\infty, 0]$, $f$ este descrescătoare, deci $f(x) \ge f(0) = 0$.
- Pe $[0, 1]$, $f$ este crescătoare, deci $f(x) \ge f(0) = 0$.

Așadar $f(x) \ge 0 > -n$ pe $(-\infty, 1]$ — acolo ecuația nu are soluții.

- Pe $(1, +\infty)$, $f$ este strict descrescătoare, deci injectivă; e continuă, $f(1) = e^2 - 5 > 0$ și $\lim\limits_{x\to+\infty} f(x) = -\infty$ (termenul $-(2x-3)e^{2x}$ domină). Prin proprietatea lui Darboux, $f\big((1, +\infty)\big) = (-\infty, e^2 - 5)$, care conține $-n$.

Prin urmare ecuația $f(x) = -n$ are exact o soluție, situată în $(1, +\infty)$, pentru orice $n \in \mathbb N^*$.

*Barem: 3p monotonia, 2p concluzia (folosind $f(0) = 0$, limita la $+\infty$ și continuitatea).*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x - 2}{\sqrt{x^2 - 4x + 5}}$

Observație utilă: $x^2 - 4x + 5 = (x - 2)^2 + 1 > 0$, deci $f$ este bine definită pe $\mathbb R$.

#### a) $\displaystyle\int_2^4 f(x)\sqrt{x^2 - 4x + 5}\,dx = 2$

Radicalii se simplifică: $f(x)\sqrt{x^2 - 4x + 5} = x - 2$.

$$\int_2^4 (x - 2)\,dx = \left(\frac{x^2}{2} - 2x\right)\Big|_2^4 = (8 - 8) - (2 - 4) = 0 - (-2) = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^3 f(x)\,dx = 0$

Observăm că $(x^2 - 4x + 5)' = 2x - 4 = 2(x - 2)$, deci $f(x) = \dfrac{(x^2 - 4x + 5)'}{2\sqrt{x^2 - 4x + 5}} = \left(\sqrt{x^2 - 4x + 5}\right)'$.

$$\int_1^3 f(x)\,dx = \sqrt{x^2 - 4x + 5}\,\Big|_1^3 = \sqrt{2} - \sqrt{2} = 0.$$

(Alternativ: graficul lui $f$ este simetric față de punctul $(2, 0)$ — $f(4 - x) = -f(x)$ — iar intervalul $[1, 3]$ este simetric față de $2$.) *Barem: 3p primitiva, 2p calculul.*

#### c) $m$ nenul cu $V = \pi\left(1 - \dfrac{\pi}{m}\right)$ pentru $g = f|_{[2,3]}$

Volumul corpului de rotație: $V = \pi\displaystyle\int_2^3 g^2(x)\,dx$, cu

$$g^2(x) = \frac{(x-2)^2}{(x-2)^2 + 1} = 1 - \frac{1}{(x-2)^2 + 1}.$$

O primitivă a lui $\dfrac{1}{(x-2)^2 + 1}$ este $\operatorname{arctg}(x - 2)$, deci

$$V = \pi\Big(x - \operatorname{arctg}(x - 2)\Big)\Big|_2^3 = \pi\left[(3 - \operatorname{arctg}1) - (2 - \operatorname{arctg}0)\right] = \pi\left(1 - \frac{\pi}{4}\right).$$

Egalând cu $\pi\left(1 - \dfrac\pi m\right)$: $\dfrac\pi m = \dfrac\pi4 \Rightarrow m = 4$.

**Răspuns:** $m = 4$. *Barem: 3p scrierea și calculul integralei, 2p valoarea lui $m$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $b_3 = 50$ |
| I.2 | $a = 4$ |
| I.3 | $x \in \{1, 6\}$ |
| I.4 | 20 de numere |
| I.5 | $y = x$ |
| I.6 | $E(\pi/2) = 1$ |
| II.1.c | $x_0 = \frac a2$, $z_0 = \frac{1}{2a}$ |
| II.2.b | $a = 2$ |
| II.2.c | $a = -10$ |
| III.1.c | soluție unică în $(1, +\infty)$ |
| III.2.c | $m = 4$ |

## Ce merită reținut din varianta 4

- **Sistem compatibil nedeterminat**: determinant nul + minor principal nenul + toți minorii caracteristici nuli.
- **Rădăcini într-un raport dat**: notează $x_2 = 2x_1$, folosește relațiile lui Viète și argumentează de ce rădăcina găsită trebuie să fie reală.
- **Unicitatea soluției lui $f(x) = c$**: tabelul de variație arată pe ce intervale e imposibilă egalitatea și pe care $f$ e strict monotonă și surjectivă.
- **Volume de rotație cu fracții raționale**: scrie $\dfrac{t^2}{t^2+1} = 1 - \dfrac{1}{t^2+1}$ ca să apară $\operatorname{arctg}$.

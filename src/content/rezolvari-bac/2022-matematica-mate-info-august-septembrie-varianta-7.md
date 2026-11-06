Rezolvarea completă a subiectului de **Bacalaureat 2022 la Matematică M_mate-info**, sesiunea august–septembrie, **varianta 7**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Număr complex: arătați că $2i(3 - i) - 6i = 2$

Desfacem paranteza și folosim $i^2 = -1$:

$$2i(3 - i) - 6i = 6i - 2i^2 - 6i = -2i^2 = -2\cdot(-1) = 2.$$

*Barem: 3p desfacerea parantezei, 2p finalizarea.*

### 2. $f(x) = x^2 - mx$: determinați $m$ cu $f(-1) = f(1)$

$f(-1) = 1 + m$ și $f(1) = 1 - m$. Condiția: $1 + m = 1 - m \iff 2m = 0 \iff m = 0$.

**Răspuns:** $m = 0$. *Barem: 2p valorile, 3p rezolvarea.*

### 3. Ecuația $27^{x-1} = 9^x$

Aducem la baza 3: $27^{x-1} = 3^{3(x-1)} = 3^{3x-3}$ și $9^x = 3^{2x}$. Din injectivitatea funcției exponențiale:

$$3x - 3 = 2x \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 3p aducerea la aceeași bază, 2p soluția.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifrele $\le 3$

**Cazuri posibile:** numerele $10, \dots, 99$ — sunt 90.

**Cazuri favorabile:** cifra zecilor poate fi $1, 2, 3$ (nu poate fi 0) — 3 variante; cifra unităților poate fi $0, 1, 2, 3$ — 4 variante. Regula produsului: $3\cdot 4 = 12$ numere.

$$p = \frac{12}{90} = \frac{2}{15}.$$

**Răspuns:** $p = \dfrac{2}{15}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(3,2)$, $B(1,-1)$: coordonatele lui $C$ cu $\overrightarrow{AC} = 2\overrightarrow{BC}$

Vectorii au aceeași direcție și sens și $AC = 2BC$, deci $C$ se află pe dreaptă astfel încât $B$ este mijlocul lui $AC$. Algebric: $C - A = 2(C - B) \iff C = 2B - A$.

Cu formula mijlocului ($B$ mijlocul lui $AC$):

$$\frac{x_C + 3}{2} = 1 \Rightarrow x_C = -1, \qquad \frac{y_C + 2}{2} = -1 \Rightarrow y_C = -4.$$

**Răspuns:** $C(-1, -4)$. *Barem: 3p observația că $B$ este mijlocul lui $AC$, 2p coordonatele.*

### 6. $E(x) = \sin 2x - 2\operatorname{tg}x\cdot\sin\dfrac{2x}{3}$; arătați că $E\left(\dfrac\pi4\right) = 0$

Pentru $x = \dfrac\pi4$: $2x = \dfrac\pi2$, $\dfrac{2x}{3} = \dfrac{\pi}{6}$. Valori: $\sin\dfrac\pi2 = 1$, $\operatorname{tg}\dfrac\pi4 = 1$, $\sin\dfrac\pi6 = \dfrac12$.

$$E\left(\frac\pi4\right) = 1 - 2\cdot 1\cdot\frac12 = 1 - 1 = 0.$$

*Barem: 3p valorile, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x & 1-x & 1\\ 1-x & x & 1\\ 1 & 1 & 0\end{pmatrix}$, $I_3$

#### a) $\det(A(0)) = 2$

$$\det(A(0)) = \begin{vmatrix}0 & 1 & 1\\ 1 & 0 & 1\\ 1 & 1 & 0\end{vmatrix} = 0 + 1 + 1 - 0 - 0 - 0 = 2$$

(regula lui Sarrus: diagonalele „principale” dau $0\cdot0\cdot0 + 1\cdot1\cdot1 + 1\cdot1\cdot1 = 2$, cele „secundare” dau $1\cdot0\cdot1 + 0\cdot1\cdot1 + 1\cdot1\cdot0 = 0$).

*Barem: 2p scrierea, 3p calculul.*

#### b) $A(1)\cdot A(x) - A(x-1) = 2I_3$, pentru orice $x$

$A(1) = \begin{pmatrix}1 & 0 & 1\\ 0 & 1 & 1\\ 1 & 1 & 0\end{pmatrix}$. Înmulțim linie cu coloană:

$$A(1)\cdot A(x) = \begin{pmatrix}x + 1 & 1 - x + 1 & 1 + 0\\ 1 - x + 1 & x + 1 & 1 + 0\\ x + 1 - x & 1 - x + x & 1 + 1\end{pmatrix} = \begin{pmatrix}x+1 & 2-x & 1\\ 2-x & x+1 & 1\\ 1 & 1 & 2\end{pmatrix}.$$

$A(x-1) = \begin{pmatrix}x-1 & 2-x & 1\\ 2-x & x-1 & 1\\ 1 & 1 & 0\end{pmatrix}$, deci

$$A(1)\cdot A(x) - A(x-1) = \begin{pmatrix}2 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 2\end{pmatrix} = 2I_3.$$

*Barem: 3p produsul, 2p diferența.*

#### c) $x$ pentru care $A(1)\cdot A(1)\cdot A(x) = 3A(1) + 2I_3$

Din b): $A(1)\cdot A(x) = A(x-1) + 2I_3$, pentru orice $x$. Aplicăm de două ori (folosind asociativitatea înmulțirii):

$$A(1)\cdot\big(A(1)\cdot A(x)\big) = A(1)\cdot\big(A(x-1) + 2I_3\big) = A(1)\cdot A(x-1) + 2A(1) = A(x-2) + 2I_3 + 2A(1).$$

Ecuația devine $A(x-2) + 2I_3 + 2A(1) = 3A(1) + 2I_3 \iff A(x-2) = A(1)$. Comparând elementul de pe poziția $(1,1)$: $x - 2 = 1$, deci $x = 3$ (și celelalte elemente coincid atunci).

**Răspuns:** $x = 3$. *Barem: 3p scrierea produsului cu ajutorul lui b), 2p concluzia.*

### 2. Legea $x * y = \dfrac{xy(x+y)}{xy+1}$ pe $M = [0, +\infty)$

#### a) $1 * 3 = 3$

$$1 * 3 = \frac{1\cdot 3\cdot(1+3)}{1\cdot3 + 1} = \frac{12}{4} = 3.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $e = 1$ este element neutru

Trebuie $x * 1 = 1 * x = x$ pentru orice $x \in M$ (și $1 \in M$):

$$x * 1 = \frac{x\cdot 1\cdot(x+1)}{x + 1} = x, \qquad 1 * x = \frac{1\cdot x\cdot(1+x)}{x + 1} = x$$

($x + 1 > 0$, deci simplificarea e permisă). Deci $e = 1$ este elementul neutru.

*Barem: 2p $x * 1 = x$, 3p $1 * x = x$ și concluzia.*

#### c) Perechile $(m, n)$, $m \le n$ naturale nenule, cu $\dfrac1m * \dfrac1n = \dfrac{1}{16}(m * n)$

Membrul stâng:

$$\frac1m * \frac1n = \frac{\frac{1}{mn}\cdot\frac{m+n}{mn}}{\frac{1}{mn} + 1} = \frac{\frac{m+n}{m^2n^2}}{\frac{1 + mn}{mn}} = \frac{m+n}{mn(mn+1)}.$$

Membrul drept: $\dfrac{1}{16}\cdot\dfrac{mn(m+n)}{mn+1}$. Egalând și simplificând cu $\dfrac{m+n}{mn+1} \ne 0$:

$$\frac{1}{mn} = \frac{mn}{16} \iff m^2n^2 = 16 \iff mn = 4.$$

Cu $1 \le m \le n$: $(m, n) \in \{(1, 4), (2, 2)\}$.

**Răspuns:** $(1, 4)$ și $(2, 2)$. *Barem: 3p cele două expresii, 2p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x^2 - 3x + 1}{e^x}$

#### a) $f'(x) = \dfrac{(x-1)(4-x)}{e^x}$

Regula câtului:

$$f'(x) = \frac{(2x - 3)e^x - (x^2 - 3x + 1)e^x}{(e^x)^2} = \frac{2x - 3 - x^2 + 3x - 1}{e^x} = \frac{-x^2 + 5x - 4}{e^x}.$$

$-x^2 + 5x - 4 = -(x^2 - 5x + 4) = -(x-1)(x-4) = (x-1)(4-x)$.

*Barem: 3p derivarea, 2p forma finală.*

#### b) Axa $Ox$ este asimptotă orizontală spre $+\infty$

Calculăm $\lim\limits_{x\to+\infty} f(x)$; avem nedeterminare $\frac\infty\infty$, aplicăm de două ori l'Hôpital:

$$\lim_{x\to+\infty}\frac{x^2 - 3x + 1}{e^x} = \lim_{x\to+\infty}\frac{2x - 3}{e^x} = \lim_{x\to+\infty}\frac{2}{e^x} = 0.$$

Limita finită $0$ arată că dreapta $y = 0$, adică axa $Ox$, este asimptotă orizontală spre $+\infty$.

*Barem: 3p calculul limitei, 2p concluzia.*

#### c) Ecuația $f(x) = n$ are soluție unică pentru orice $n \in \mathbb N^*$

Semnul lui $f'$ (cu $e^x > 0$) este semnul lui $(x-1)(4-x)$:

| $x$ | $-\infty$ | | $1$ | | $4$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |
| $f(x)$ | $+\infty$ | ↘ | $-\tfrac1e$ | ↗ | $\tfrac{5}{e^4}$ | ↘ | $0$ |

Valori: $f(1) = \dfrac{-1}{e}$, $f(4) = \dfrac{16 - 12 + 1}{e^4} = \dfrac{5}{e^4}$, iar $\lim\limits_{x\to-\infty}f(x) = +\infty$ (numărătorul $\to +\infty$, $e^x \to 0^+$).

- Pe $[1, +\infty)$: maximul lui $f$ este $f(4) = \dfrac{5}{e^4} < 1$ (căci $e^4 > 5$), deci $f(x) < 1 \le n$ — **nicio soluție** aici.
- Pe $(-\infty, 1]$: $f$ este continuă și strict descrescătoare, de la $+\infty$ până la $-\dfrac1e$, deci ia fiecare valoare din $\left[-\frac1e, +\infty\right)$ **exact o dată**; în particular ia valoarea $n \ge 1$ o singură dată.

Prin urmare, ecuația $f(x) = n$ are soluție unică pentru orice $n \in \mathbb N^*$.

*Barem: 3p monotonia, 2p argumentul cu limita, $f(4) < 1$ și continuitatea.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = x\sqrt{x^2 + 4}$

#### a) $\displaystyle\int_0^2\frac{f(x)}{\sqrt{x^2+4}}\,dx = 2$

Integrandul se simplifică la $x$:

$$\int_0^2 x\,dx = \frac{x^2}{2}\Big|_0^2 = \frac42 - 0 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^{\sqrt5} f(x)\,dx = \frac{19}{3}$

Observăm că $x = \dfrac12(x^2 + 4)'$, deci integrandul are forma $\dfrac12 u'\sqrt u$ cu $u = x^2 + 4$. O primitivă a lui $u'\,u^{1/2}$ este $\dfrac{2}{3}u^{3/2}$, deci

$$\int_0^{\sqrt5} x\sqrt{x^2+4}\,dx = \frac12\cdot\frac23(x^2 + 4)\sqrt{x^2+4}\,\Big|_0^{\sqrt5} = \frac13\left(9\cdot 3 - 4\cdot 2\right) = \frac{19}{3}.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $n \ge 2$ pentru care $I_{n+2} + 4I_n = \dfrac{3}{n-1}$, unde $I_n = \displaystyle\int_1^2\frac{x^n}{f^2(x)}\,dx$

$f^2(x) = x^2(x^2 + 4)$, deci

$$I_n = \int_1^2\frac{x^n}{x^2(x^2+4)}\,dx = \int_1^2\frac{x^{n-2}}{x^2 + 4}\,dx.$$

Adunăm (liniaritatea integralei):

$$I_{n+2} + 4I_n = \int_1^2\frac{x^n + 4x^{n-2}}{x^2+4}\,dx = \int_1^2\frac{x^{n-2}(x^2 + 4)}{x^2+4}\,dx = \int_1^2 x^{n-2}\,dx = \frac{x^{n-1}}{n-1}\Big|_1^2 = \frac{2^{n-1} - 1}{n-1}.$$

Condiția: $\dfrac{2^{n-1} - 1}{n-1} = \dfrac{3}{n-1} \iff 2^{n-1} = 4 = 2^2 \iff n = 3$, care respectă $n \ge 2$.

**Răspuns:** $n = 3$. *Barem: 2p rescrierea lui $I_n$, 3p calculul $I_{n+2} + 4I_n$ și valoarea lui $n$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 0$ |
| I.3 | $x = 3$ |
| I.4 | $p = \dfrac{2}{15}$ |
| I.5 | $C(-1, -4)$ |
| II.1.c | $x = 3$ |
| II.2.c | $(1,4)$ și $(2,2)$ |
| III.1.b | $y = 0$ asimptotă spre $+\infty$ |
| III.2.b | $\dfrac{19}{3}$ |
| III.2.c | $n = 3$ |

## Ce merită reținut din varianta 7

- **Relații matriceale de tipul $A(1)A(x) = A(x-1) + 2I_3$**: folosește-le repetat în loc să înmulțești trei matrice.
- **Număr de soluții pentru $f(x) = n$**: tabel de variație + compararea maximului local cu valorile lui $n$.
- **Șiruri de integrale**: combinația $I_{n+2} + 4I_n$ e aleasă ca să se simplifice numitorul $x^2 + 4$.

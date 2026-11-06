Rezolvarea completă a subiectului de **Bacalaureat 2018 la Matematică M_mate-info**, **modelul oficial** publicat de CNEE. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $n = \log_3(\sqrt7 - 2) + \log_3(\sqrt7 + 2)$ este natural

Suma de logaritmi în aceeași bază este logaritmul produsului:

$$n = \log_3\big((\sqrt7-2)(\sqrt7+2)\big) = \log_3(7 - 4) = \log_3 3 = 1 \in \mathbb N.$$

*Barem: 3p produsul $(\sqrt7)^2 - 2^2$, 2p finalizarea.*

### 2. Intersecția graficelor $f(x) = 2x - 1$ și $g(x) = x^2 + 6x + 3$

Rezolvăm $f(x) = g(x)$:

$$2x - 1 = x^2 + 6x + 3 \iff x^2 + 4x + 4 = 0 \iff (x+2)^2 = 0 \iff x = -2.$$

Atunci $y = f(-2) = -4 - 1 = -5$.

**Răspuns:** punctul $(-2, -5)$ (graficele sunt tangente). *Barem: 2p ecuația, 3p coordonatele.*

### 3. Ecuația $(x+2)^3 = (2-x)^3$

Funcția $t \mapsto t^3$ este injectivă pe $\mathbb R$, deci

$$x + 2 = 2 - x \iff 2x = 0 \iff x = 0.$$

**Răspuns:** $x = 0$. *Barem: 3p $x+2 = 2-x$, 2p soluția.*

### 4. Numere de două cifre distincte cu cifre din $\{0,2,4,6,8\}$

- Cifra zecilor nu poate fi $0$: **4 alegeri** ($2,4,6,8$).
- Cifra unităților trebuie să difere de cifra zecilor (dar poate fi $0$): **4 alegeri**.

$$4 \cdot 4 = 16 \text{ numere}.$$

**Răspuns:** $16$. *Barem: 2p cifra zecilor, 3p numărul total.*

### 5. $2\overrightarrow{MN} + 3\overrightarrow{NP} = \vec 0$, $MN = 3$; calculați $MP$

Din relație, $\overrightarrow{NP} = -\dfrac23\overrightarrow{MN} = \dfrac23\overrightarrow{NM}$, deci $NP = \dfrac23\cdot 3 = 2$, iar $P$ se află pe segmentul $[MN]$ (vectorul $\overrightarrow{NP}$ are sensul lui $\overrightarrow{NM}$ și lungime mai mică).

$$MP = MN - NP = 3 - 2 = 1.$$

**Răspuns:** $MP = 1$. *Barem: 2p $NP = 2$, 3p $MP = 1$.*

### 6. Arătați că $\sin x + \sin(\pi - x) + \sin(\pi + x) + \sin(2\pi - x) = 0$

Formulele de reducere: $\sin(\pi - x) = \sin x$, $\sin(\pi + x) = -\sin x$, $\sin(2\pi - x) = -\sin x$.

$$\sin x + \sin x - \sin x - \sin x = 0.$$

*Barem: 3p formulele de reducere, 2p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x,y) = \begin{pmatrix} x & y & 1\\ 1 & x & y\\ x & 1 & y\end{pmatrix}$

#### a) $\det(A(2,3)) = 12$

$$\det\begin{pmatrix} 2 & 3 & 1\\ 1 & 2 & 3\\ 2 & 1 & 3\end{pmatrix} = 12 + 18 + 1 - 4 - 6 - 9 = 12.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $\det(A(n^2, n)) \ge 0$ pentru orice $n$ natural

$$\det\begin{pmatrix} n^2 & n & 1\\ 1 & n^2 & n\\ n^2 & 1 & n\end{pmatrix}.$$

Adunăm coloanele la prima (fiecare linie are suma $n^2 + n + 1$) și scoatem factorul comun:

$$= (n^2+n+1)\begin{vmatrix} 1 & n & 1\\ 1 & n^2 & n\\ 1 & 1 & n\end{vmatrix} = (n^2+n+1)\begin{vmatrix} 1 & n & 1\\ 0 & n^2-n & n-1\\ 0 & 1-n & n-1\end{vmatrix}.$$

$$= (n^2+n+1)\big[(n^2-n)(n-1) + (n-1)^2\big] = (n^2+n+1)(n-1)^2(n+1).$$

Pentru $n$ natural, toți factorii sunt $\ge 0$, deci $\det \ge 0$. *Barem: 3p calculul determinantului, 2p concluzia.*

#### c) $x$ pentru care inversa lui $B = A(x,0)\cdot A(x,0)$ este $A(x,0)$

$A(x,0) = \begin{pmatrix} x & 0 & 1\\ 1 & x & 0\\ x & 1 & 0\end{pmatrix}$, deci

$$B = \begin{pmatrix} x^2+x & 1 & x\\ 2x & x^2 & 1\\ x^2+1 & x & x\end{pmatrix}, \quad B\cdot A(x,0) = A(x,0)\cdot B = \begin{pmatrix} x^3+2x^2+1 & x & x^2+x\\ 3x^2+x & x^3+1 & 2x\\ x^3+x^2+2x & x^2+x & x^2+1\end{pmatrix}.$$

$A(x,0)$ este inversa lui $B$ $\iff$ $B\cdot A(x,0) = I_3$. Elementul $(2,3)$ cere $2x = 0$, deci $x = 0$; pentru $x = 0$ matricea devine $I_3$ ✔.

**Răspuns:** $x = 0$. *Barem: 3p produsul, 2p valoarea lui $x$.*

### 2. $f = nX^n + X^2 - nX - 1$, $n \ge 3$

#### a) $f(1) = 0$

$$f(1) = n + 1 - n - 1 = 0.$$

*Barem: 3p înlocuirea, 2p finalizarea.*

#### b) Pentru $n$ impar, $f$ este divizibil cu $X^2 - 1$

Pentru $n$ impar, $(-1)^n = -1$:

$$f(-1) = -n + 1 + n - 1 = 0,$$

deci $X + 1 \mid f$. Din a), $X - 1 \mid f$. Cum $X - 1$ și $X + 1$ sunt prime între ele, $X^2 - 1 = (X-1)(X+1) \mid f$. *Barem: 2p $f(-1) = 0$, 3p concluzia.*

#### c) Pentru $n \ge 5$, $f$ nu are rădăcini în $\mathbb Q \setminus \mathbb Z$

$f$ are coeficienți întregi, coeficient dominant $n$ și termen liber $-1$. O rădăcină rațională $\alpha = \dfrac pq$ (ireductibilă) are $p \mid -1$ și $q \mid n$; dacă $\alpha \notin \mathbb Z$, atunci $\alpha = \dfrac1d$ cu $d \in \mathbb Z\setminus\{\pm1\}$, $d \mid n$.

Din $f\left(\frac1d\right) = 0$, înmulțind cu $d^n$:

$$\frac{n}{d^n} + \frac1{d^2} - \frac nd - 1 = 0 \ \Big|\cdot d^n \Rightarrow n + d^{n-2} - nd^{n-1} - d^n = 0 \Rightarrow d^{n-2}(d^2 + nd - 1) = n.$$

Deci $d^{n-2} \mid n$, de unde $|d|^{n-2} \le n$. Dar $|d| \ge 2$, deci $|d|^{n-2} \ge 2^{n-2} > n$ pentru $n \ge 5$ ($2^3 = 8 > 5$ și inducție). Contradicție, deci $f$ nu are rădăcini în $\mathbb Q \setminus \mathbb Z$. $\blacksquare$

*Barem: 1p forma rădăcinii, 2p $|d|^{n-2} \le n$, 2p contradicția.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \operatorname{arctg} x - x$

#### a) $f'(x) = -\dfrac{x^2}{x^2+1}$

$$f'(x) = \frac{1}{x^2+1} - 1 = \frac{1 - x^2 - 1}{x^2+1} = -\frac{x^2}{x^2+1}.$$

*Barem: 2p derivarea, 3p forma finală.*

#### b) Asimptota oblică spre $+\infty$

$$m = \lim_{x\to+\infty}\frac{f(x)}{x} = \lim_{x\to+\infty}\left(\frac{\operatorname{arctg} x}{x} - 1\right) = 0 - 1 = -1,$$

$$n = \lim_{x\to+\infty}\big(f(x) + x\big) = \lim_{x\to+\infty}\operatorname{arctg} x = \frac\pi2.$$

**Răspuns:** $y = -x + \dfrac\pi2$. *Barem: 2p panta, 3p ordonata la origine și ecuația.*

#### c) $f(x) + g(x) = \dfrac\pi2$, unde $g(x) = \operatorname{arcctg} x + x$

$h(x) = f(x) + g(x) = \operatorname{arctg} x + \operatorname{arcctg} x$, iar

$$h'(x) = \frac1{x^2+1} - \frac1{x^2+1} = 0,$$

deci $h$ este constantă pe $\mathbb R$. Cum $h(0) = 0 + \dfrac\pi2 = \dfrac\pi2$, rezultă $h(x) = \dfrac\pi2$ pentru orice $x$. *Barem: 3p derivata nulă, 2p constanta.*

### 2. $f(x) = e^{-x^2}$

#### a) $\displaystyle\int_0^1 f(\sqrt x)\,dx = \frac{e-1}{e}$

$f(\sqrt x) = e^{-x}$:

$$\int_0^1 e^{-x}\,dx = -e^{-x}\Big|_0^1 = -\frac1e + 1 = \frac{e-1}{e}.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Orice primitivă $F$ a lui $f$ este concavă pe $(0, +\infty)$

$F' = f$, deci $F''(x) = f'(x) = -2x e^{-x^2} < 0$ pentru $x > 0$. Prin urmare $F$ este concavă pe $(0,+\infty)$. *Barem: 2p $F' = f$, 3p semnul lui $F''$.*

#### c) $I_n = \displaystyle\int_{1/n}^1 f(x)\,dx$ este convergent

**Monotonie:** $I_{n+1} - I_n = \displaystyle\int_{\frac1{n+1}}^{\frac1n} f(x)\,dx \ge 0$, deoarece $f > 0$ și $\frac1{n+1} < \frac1n$. Șirul este crescător.

**Mărginire:** $0 < e^{-x^2} \le 1$, deci $0 \le I_n \le \displaystyle\int_{1/n}^1 1\,dx = 1 - \frac1n < 1$.

Șir monoton și mărginit $\Rightarrow$ convergent (teorema lui Weierstrass). $\blacksquare$

*Barem: 1p monotonia, 3p mărginirea, 1p concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $n = 1$ |
| I.2 | $(-2, -5)$ |
| I.3 | $x = 0$ |
| I.4 | $16$ numere |
| I.5 | $MP = 1$ |
| II.1.b | $\det = (n^2+n+1)(n-1)^2(n+1) \ge 0$ |
| II.1.c | $x = 0$ |
| III.1.b | $y = -x + \frac\pi2$ |
| III.2.a | $\frac{e-1}{e}$ |
| III.2.c | șir crescător și mărginit, deci convergent |

## Ce merită reținut din model

- **Suma de logaritmi** devine logaritmul produsului — caută conjugatele.
- **Determinanți cu linii de sumă constantă**: adună coloanele și scoate factorul comun.
- **Rădăcini raționale** ale unui polinom cu coeficienți întregi: $p \mid$ termenul liber, $q \mid$ coeficientul dominant.
- **$\operatorname{arctg} x + \operatorname{arcctg} x = \frac\pi2$**: derivată nulă + o valoare.
- **Convergența unui șir de integrale**: monotonie din semnul integrandului + mărginire.

Rezolvarea completă a **modelului oficial de Bacalaureat 2025 la Matematică M_mate-info**, publicat de minister înaintea examenului. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numere complexe: arătați că $i\cdot z_1 + z_2 = 1$, pentru $z_1 = 4 + i$, $z_2 = 2 - 4i$

$$i\cdot z_1 = i(4 + i) = 4i + i^2 = 4i - 1.$$

$$i\cdot z_1 + z_2 = (-1 + 4i) + (2 - 4i) = 1.$$

Părțile imaginare $4i$ și $-4i$ se reduc. *Barem: 3p calculul lui $iz_1 + z_2$, 2p finalizarea.*

### 2. $f(x) = x^2 - 3x + 5$: determinați $a$ pentru care $A(a, 5)$ aparține graficului

Un punct $(a, b)$ aparține graficului lui $f$ exact când $f(a) = b$. Deci:

$$a^2 - 3a + 5 = 5 \iff a^2 - 3a = 0 \iff a(a - 3) = 0.$$

**Răspuns:** $a = 0$ sau $a = 3$. *Barem: 3p ecuația $a^2 - 3a = 0$, 2p soluțiile.*

### 3. Ecuație logaritmică: $\log_6(7x - 5) = \log_6(x + 1) + \dfrac{1}{\log_x 6}$

**Condiții de existență:** $7x - 5 > 0 \Rightarrow x > \dfrac57$; $x + 1 > 0$; baza $x$ a logaritmului $\log_x 6$ trebuie să fie $x > 0$, $x \ne 1$. Toate împreună: $x \in \left(\dfrac57, 1\right)\cup(1, +\infty)$.

**Schimbarea bazei:** $\dfrac{1}{\log_x 6} = \log_6 x$. Ecuația devine

$$\log_6(7x - 5) = \log_6(x + 1) + \log_6 x = \log_6\big(x(x+1)\big).$$

Logaritmul în bază 6 este injectiv, deci $7x - 5 = x^2 + x \iff x^2 - 6x + 5 = 0 \iff (x - 1)(x - 5) = 0$.

**Verificare:** $x = 1$ **nu convine** (nu poate fi bază de logaritm); $x = 5$ convine ($7\cdot5 - 5 = 30 = 5\cdot 6$ ✔).

**Răspuns:** $x = 5$. *Barem: 3p ecuația $x^2 - 6x + 5 = 0$, 2p selectarea soluției $x = 5$.* Greșeala frecventă: păstrarea lui $x = 1$.

### 4. Probabilitatea ca un număr natural de două cifre să fie multiplu impar al lui 9

**Cazuri posibile:** numerele de la 10 la 99, adică 90.

**Cazuri favorabile:** multiplii de 9 de două cifre sunt $18, 27, 36, 45, 54, 63, 72, 81, 90, 99$; cei impari sunt $27, 45, 63, 81, 99$ — 5 numere (multiplii impari ai lui 9 sunt $9\cdot k$ cu $k$ impar).

$$p = \frac{5}{90} = \frac{1}{18}.$$

**Răspuns:** $p = \dfrac{1}{18}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(2, 0)$, $B(2, 4)$, $C(5, a)$; dreptele $OB$ și $AC$ paralele

Pantele: $m_{OB} = \dfrac{4 - 0}{2 - 0} = 2$, $m_{AC} = \dfrac{a - 0}{5 - 2} = \dfrac{a}{3}$.

Drepte paralele $\Rightarrow$ pante egale: $\dfrac{a}{3} = 2 \Rightarrow a = 6$.

**Răspuns:** $a = 6$. *Barem: 2p $m_{OB}$, 3p $m_{AC}$ și valoarea lui $a$.*

### 6. $AB = 6$, $BC = 10$, $\cos B = \dfrac45$; arătați că aria triunghiului este 18

Din identitatea fundamentală, cu $B \in (0, \pi)$ (deci $\sin B > 0$):

$$\sin B = \sqrt{1 - \cos^2 B} = \sqrt{1 - \frac{16}{25}} = \frac35.$$

Aria cu formula „două laturi și unghiul dintre ele” (unghiul $B$ este cuprins între $AB$ și $BC$):

$$\mathcal A_{ABC} = \frac{AB\cdot BC\cdot\sin B}{2} = \frac{6\cdot10\cdot\frac35}{2} = \frac{36}{2} = 18.$$

*Barem: 3p $\sin B = \frac35$, 2p calculul ariei.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_3$, $A = \begin{pmatrix}0 & 0 & 1\\ -1 & 0 & 0\\ 0 & -1 & 0\end{pmatrix}$, $B(x) = \begin{pmatrix}1 & x & 0\\ 0 & 1 & x\\ -x & 0 & 1\end{pmatrix}$

#### a) $\det A = 1$

Cu regula lui Sarrus, singurul produs nenul este cel pe „paralela” care trece prin elementele $a_{13}, a_{21}, a_{32}$:

$$\det A = 0 + 0 + 1\cdot(-1)\cdot(-1) - 0 - 0 - 0 = 1.$$

*Barem: 3p scrierea și dezvoltarea determinantului, 2p rezultatul.*

#### b) $A - B(x)\cdot A = xI_3$

Calculăm produsul $B(x)\cdot A$ (linie din $B$ × coloană din $A$):

$$B(x)\cdot A = \begin{pmatrix}1 & x & 0\\ 0 & 1 & x\\ -x & 0 & 1\end{pmatrix}\begin{pmatrix}0 & 0 & 1\\ -1 & 0 & 0\\ 0 & -1 & 0\end{pmatrix} = \begin{pmatrix}-x & 0 & 1\\ -1 & -x & 0\\ 0 & -1 & -x\end{pmatrix}.$$

De exemplu, poziția $(1,1)$: $1\cdot0 + x\cdot(-1) + 0\cdot0 = -x$; poziția $(1,3)$: $1\cdot1 + 0 + 0 = 1$.

$$A - B(x)A = \begin{pmatrix}0 - (-x) & 0 & 1 - 1\\ -1 - (-1) & 0 - (-x) & 0\\ 0 & -1 - (-1) & 0 - (-x)\end{pmatrix} = \begin{pmatrix}x & 0 & 0\\ 0 & x & 0\\ 0 & 0 & x\end{pmatrix} = xI_3.$$

*Barem: 3p calculul $A - B(x)A$, 2p identificarea cu $xI_3$.*

#### c) $A\cdot C(x) = B(x)$; arătați că $C(x) - C(y) = (y - x)A$

Cum $\det A = 1 \ne 0$, matricea $A$ este inversabilă, iar din $A\cdot C(x) = B(x)$ obținem $C(x) = A^{-1}B(x)$.

**Inversa lui $A$.** Matricea transpusă $A^T = \begin{pmatrix}0 & -1 & 0\\ 0 & 0 & -1\\ 1 & 0 & 0\end{pmatrix}$ verifică $A\cdot A^T = I_3$ (liniile lui $A$ sunt vectori unitari diferiți, cu un singur element nenul $\pm1$), deci $A^{-1} = A^T$ (se poate obține și cu adjuncta: $A^{-1} = \frac{1}{\det A}A^*$).

$$C(x) = A^{-1}B(x) = \begin{pmatrix}0 & -1 & 0\\ 0 & 0 & -1\\ 1 & 0 & 0\end{pmatrix}\begin{pmatrix}1 & x & 0\\ 0 & 1 & x\\ -x & 0 & 1\end{pmatrix} = \begin{pmatrix}0 & -1 & -x\\ x & 0 & -1\\ 1 & x & 0\end{pmatrix}.$$

Verificare rapidă: $A\cdot C(x)$, prima linie $= (0,0,1)\cdot C(x) = (1, x, 0)$ ✔ (prima linie a lui $B(x)$).

Diferența:

$$C(x) - C(y) = \begin{pmatrix}0 & 0 & -(x - y)\\ x - y & 0 & 0\\ 0 & x - y & 0\end{pmatrix} = (y - x)\begin{pmatrix}0 & 0 & 1\\ -1 & 0 & 0\\ 0 & -1 & 0\end{pmatrix} = (y - x)A.$$

*Barem: 3p calculul lui $A^{-1}$ și $C(x)$, 2p diferența $C(x) - C(y)$.*

### 2. Legea $x * y = x^2y + xy^2 + x + y$

#### a) $1 * 3 = 16$

$$1 * 3 = 1^2\cdot3 + 1\cdot3^2 + 1 + 3 = 3 + 9 + 4 = 16.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x \ne 0$ cu $x * \dfrac2x = 9x$

$$x * \frac2x = x^2\cdot\frac2x + x\cdot\frac{4}{x^2} + x + \frac2x = 2x + \frac4x + x + \frac2x = 3x + \frac6x = \frac{3x^2 + 6}{x}.$$

Ecuația, înmulțită cu $x \ne 0$: $3x^2 + 6 = 9x^2 \iff 6x^2 = 6 \iff x^2 = 1 \iff x = \pm1$. Ambele sunt nenule, deci convin.

**Răspuns:** $x \in \{-1, 1\}$. *Barem: 3p expresia lui $x * \frac2x$, 2p soluțiile.*

#### c) Perechile $(m, n)$ de numere întregi, $m \le n$, cu $m * n = 1$

**Factorizare:** $x^2y + xy^2 + x + y = xy(x + y) + (x + y) = (x + y)(xy + 1)$.

Ecuația: $(m + n)(mn + 1) = 1$. Ambii factori sunt numere întregi al căror produs este 1, deci sunt egali cu $1$ ambii sau cu $-1$ ambii.

- $m + n = 1$ și $mn + 1 = 1$, adică $mn = 0$: $m, n$ sunt rădăcinile lui $t^2 - t = 0$, deci $\{0, 1\}$; cu $m \le n$: $(0, 1)$.
- $m + n = -1$ și $mn + 1 = -1$, adică $mn = -2$: rădăcinile lui $t^2 + t - 2 = 0$ sunt $1$ și $-2$; cu $m \le n$: $(-2, 1)$.

Verificare: $0 * 1 = 0 + 0 + 0 + 1 = 1$ ✔; $(-2) * 1 = 4 - 2 - 2 + 1 = 1$ ✔.

**Răspuns:** $(m, n) \in \{(-2, 1),\ (0, 1)\}$. *Barem: 2p factorizarea $(m+n)(mn+1)$, 3p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \dfrac{\ln x}{x^3}$

#### a) $f'(x) = \dfrac{1 - 3\ln x}{x^4}$

Regula câtului:

$$f'(x) = \frac{\frac1x\cdot x^3 - \ln x\cdot 3x^2}{x^6} = \frac{x^2 - 3x^2\ln x}{x^6} = \frac{x^2(1 - 3\ln x)}{x^6} = \frac{1 - 3\ln x}{x^4}.$$

*Barem: 3p derivarea, 2p simplificarea.*

#### b) Asimptota orizontală spre $+\infty$

Limita este de tipul $\frac{\infty}{\infty}$; aplicăm l'Hôpital:

$$\lim_{x\to+\infty}\frac{\ln x}{x^3} = \lim_{x\to+\infty}\frac{\frac1x}{3x^2} = \lim_{x\to+\infty}\frac{1}{3x^3} = 0.$$

**Răspuns:** dreapta $y = 0$ (axa $Ox$) este asimptotă orizontală spre $+\infty$. *Barem: 3p limita, 2p concluzia.*

#### c) Mulțimea valorilor lui $m$ pentru care $f(x) = m$ are cel puțin o soluție

Ecuația are soluție exact când $m$ aparține imaginii lui $f$, deci trebuie să aflăm $\operatorname{Im} f$.

$f'(x) = 0 \iff 1 - 3\ln x = 0 \iff \ln x = \frac13 \iff x = \sqrt[3]{e}$. Semnul lui $f'$ este semnul lui $1 - 3\ln x$:

| $x$ | $0$ | | $\sqrt[3]{e}$ | | $+\infty$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | |
| $f(x)$ | $-\infty$ | ↗ | $\tfrac{1}{3e}$ | ↘ | $0$ |

Valoarea maximă: $f(\sqrt[3]{e}) = \dfrac{\ln e^{1/3}}{(e^{1/3})^3} = \dfrac{1/3}{e} = \dfrac{1}{3e}$.

Limita la 0: $\ln x \to -\infty$ și $x^3 \to 0^+$, deci $f(x) \to -\infty$.

Pe $(0, \sqrt[3]{e}]$, $f$ este continuă și crescătoare de la $-\infty$ la $\frac{1}{3e}$, deci ia toate valorile din $\left(-\infty, \frac{1}{3e}\right]$. Pe $[\sqrt[3]{e}, +\infty)$ ia valori din $\left(0, \frac{1}{3e}\right]$, deja incluse. Deci $\operatorname{Im} f = \left(-\infty, \frac{1}{3e}\right]$.

**Răspuns:** $m \in \left(-\infty, \dfrac{1}{3e}\right]$. *Barem: 2p monotonia, 3p limita, maximul și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = e^x + x^2 - 1$

#### a) $\displaystyle\int_1^4\big(f(x) - e^x\big)dx = 18$

$f(x) - e^x = x^2 - 1$:

$$\int_1^4 (x^2 - 1)\,dx = \left(\frac{x^3}{3} - x\right)\Big|_1^4 = \left(\frac{64}{3} - 4\right) - \left(\frac13 - 1\right) = \frac{63}{3} - 3 = 21 - 3 = 18.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^2\frac{e^x}{f(x) - x^2}\,dx = \ln(e + 1)$

$f(x) - x^2 = e^x - 1$, care este pozitiv pe $[1, 2]$. Numărătorul $e^x$ este derivata numitorului, deci integrandul are forma $\dfrac{u'}{u}$:

$$\int_1^2\frac{e^x}{e^x - 1}\,dx = \ln(e^x - 1)\Big|_1^2 = \ln(e^2 - 1) - \ln(e - 1) = \ln\frac{(e-1)(e+1)}{e - 1} = \ln(e + 1).$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\int_0^1\frac{x}{f(x) + 1}\,dx \le 1 - \frac2e$

$f(x) + 1 = e^x + x^2$. Pe $[0, 1]$: $x^2 \ge 0$, deci $e^x + x^2 \ge e^x > 0$, iar cum $x \ge 0$,

$$\frac{x}{e^x + x^2} \le \frac{x}{e^x} = xe^{-x}, \quad x \in [0, 1].$$

Integrala păstrează inegalitatea (proprietatea de monotonie a integralei definite), deci

$$\int_0^1\frac{x}{f(x)+1}\,dx \le \int_0^1 xe^{-x}\,dx.$$

Calculăm prin părți, cu $u = x$, $v' = e^{-x}$ ($v = -e^{-x}$):

$$\int_0^1 xe^{-x}\,dx = -xe^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = -\frac1e - e^{-x}\Big|_0^1 = -\frac1e - \frac1e + 1 = 1 - \frac2e.$$

Deci $\displaystyle\int_0^1\frac{x}{f(x)+1}\,dx \le 1 - \frac2e$. (Numeric: integrala ≈ 0,221, iar $1 - \frac2e \approx 0{,}264$.)

*Barem: 3p majorarea integrandului cu $xe^{-x}$, 2p calculul integralei prin părți și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $iz_1 + z_2 = 1$ |
| I.2 | $a \in \{0, 3\}$ |
| I.3 | $x = 5$ |
| I.4 | $p = \dfrac{1}{18}$ |
| I.5 | $a = 6$ |
| I.6 | aria $= 18$ |
| II.1.c | $C(x) = \begin{pmatrix}0 & -1 & -x\\ x & 0 & -1\\ 1 & x & 0\end{pmatrix}$ |
| II.2.b | $x \in \{-1, 1\}$ |
| II.2.c | $(-2, 1)$ și $(0, 1)$ |
| III.1.b | $y = 0$ |
| III.1.c | $m \in \left(-\infty, \frac{1}{3e}\right]$ |

## Ce merită reținut din model

- **Logaritmi cu baze diferite**: $\frac{1}{\log_x 6} = \log_6 x$; verifică întotdeauna condiția de bază ($x > 0$, $x \ne 1$).
- **Ecuații în numere întregi cu o lege de compoziție**: factorizează expresia; un produs de întregi egal cu 1 are doar variantele $1\cdot1$ și $(-1)(-1)$.
- **„Cel puțin o soluție” pentru $f(x) = m$** înseamnă $m \in \operatorname{Im} f$: tabel de variație + limite la capete.
- **Inegalități cu integrale**: majorează integrandul cu o funcție ușor de integrat și folosește monotonia integralei.

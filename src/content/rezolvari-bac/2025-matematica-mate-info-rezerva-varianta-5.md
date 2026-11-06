Rezolvarea completă a subiectului de **Bacalaureat 2025 la Matematică M_mate-info**, subiectul de rezervă al sesiunii iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $2(\log_5 10 - \log_5 2) + \log_5 25 = 4$

Diferența de logaritmi în aceeași bază este logaritmul câtului: $\log_5 10 - \log_5 2 = \log_5\dfrac{10}{2} = \log_5 5 = 1$.

Iar $\log_5 25 = \log_5 5^2 = 2$.

$$2(\log_5 10 - \log_5 2) + \log_5 25 = 2\cdot1 + 2 = 4.$$

*Barem: 3p aplicarea proprietăților logaritmilor, 2p finalizarea.*

### 2. $f(x) = x - 4$: determinați $m$ cu $f(2 + m) = 2 - m$

$f(2 + m) = (2 + m) - 4 = m - 2$. Ecuația: $m - 2 = 2 - m \iff 2m = 4 \iff m = 2$.

**Răspuns:** $m = 2$. *Barem: 2p $f(2+m) = m - 2$, 3p rezolvarea ecuației.*

### 3. Ecuație exponențială: $8^x\cdot 2^{1-x} = 2^7$

Scriem totul ca puteri ale lui 2: $8^x = (2^3)^x = 2^{3x}$. Atunci

$$2^{3x}\cdot 2^{1-x} = 2^{3x + 1 - x} = 2^{2x+1}.$$

Funcția exponențială este injectivă, deci $2^{2x+1} = 2^7 \iff 2x + 1 = 7 \iff x = 3$.

**Verificare:** $8^3\cdot 2^{-2} = 512/4 = 128 = 2^7$ ✔.

**Răspuns:** $x = 3$. *Barem: 3p ecuația $2x + 1 = 7$, 2p soluția.*

### 4. Câte numere de trei cifre distincte, cu cifre din $A = \{1,2,3,4,5,6\}$, sunt divizibile cu 5?

Un număr este divizibil cu 5 dacă ultima cifră este 0 sau 5. Cifra 0 nu e în $A$, deci **cifra unităților este 5** — un singur mod.

- Cifra sutelor: orice cifră din $A$ diferită de 5 — **5 moduri**.
- Cifra zecilor: diferită de 5 și de cifra sutelor — **4 moduri**.

Regula produsului: $1\cdot5\cdot4 = 20$.

**Răspuns:** 20 de numere. *Barem: 2p cifra unităților, 3p numărarea celorlalte cifre.*

### 5. Dreapta $d$ prin $A(0,1)$, paralelă cu $BC$, unde $B(2,0)$, $C(4,6)$

Panta lui $BC$: $m_{BC} = \dfrac{6 - 0}{4 - 2} = 3$. Drepte paralele au aceeași pantă, deci $m_d = 3$.

Ecuația dreptei prin $A(0,1)$ cu panta 3: $y - 1 = 3(x - 0)$, adică $y = 3x + 1$.

**Răspuns:** $d: y = 3x + 1$ (sau $3x - y + 1 = 0$). *Barem: 3p panta, 2p ecuația dreptei.*

### 6. $E(x) = \operatorname{tg}x\cdot\left(\cos\dfrac{3x}{4}\right)^2 - \cos\dfrac x2$; arătați că $E\left(\dfrac\pi3\right) = 0$

Pentru $x = \dfrac\pi3$: $\dfrac{3x}{4} = \dfrac\pi4$ și $\dfrac x2 = \dfrac\pi6$. Valori:

$$\operatorname{tg}\frac\pi3 = \sqrt3,\qquad \cos\frac\pi4 = \frac{\sqrt2}{2},\qquad \cos\frac\pi6 = \frac{\sqrt3}{2}.$$

$$E\left(\frac\pi3\right) = \sqrt3\cdot\left(\frac{\sqrt2}{2}\right)^2 - \frac{\sqrt3}{2} = \sqrt3\cdot\frac12 - \frac{\sqrt3}{2} = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & -2\\ 0 & a & 1\\ 2 & 4 & 1\end{pmatrix}$ și sistemul $\begin{cases}ax + y - 2z = 4\\ ay + z = 1\\ 2x + 4y + z = 4\end{cases}$

#### a) $\det(A(1)) = 3$

$$\det(A(1)) = \begin{vmatrix}1 & 1 & -2\\ 0 & 1 & 1\\ 2 & 4 & 1\end{vmatrix} = 1\cdot1\cdot1 + 1\cdot1\cdot2 + (-2)\cdot0\cdot4 - (-2)\cdot1\cdot2 - 1\cdot1\cdot4 - 1\cdot0\cdot1.$$

$$= 1 + 2 + 0 + 4 - 4 - 0 = 3.$$

*Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Sistemul are soluție unică pentru orice $a$

Matricea sistemului este exact $A(a)$. Cu Sarrus:

$$\det(A(a)) = a\cdot a\cdot1 + 1\cdot1\cdot2 + (-2)\cdot0\cdot4 - (-2)\cdot a\cdot2 - a\cdot1\cdot4 - 1\cdot0\cdot1 = a^2 + 2 + 4a - 4a = a^2 + 2.$$

Cum $a^2 \ge 0$, avem $a^2 + 2 \ge 2 > 0$, deci $\det(A(a)) \ne 0$ pentru orice $a$: sistemul este de tip Cramer și are soluție unică.

*Barem: 3p determinantul, 2p justificarea.*

#### c) $a$ pentru care $y_0 \ge 1$

Cu regula lui Cramer, $y_0 = \dfrac{\Delta_y}{\Delta}$, unde $\Delta = a^2 + 2$ și $\Delta_y$ se obține înlocuind coloana a doua cu termenii liberi:

$$\Delta_y = \begin{vmatrix}a & 4 & -2\\ 0 & 1 & 1\\ 2 & 4 & 1\end{vmatrix} = a + 8 + 0 - (-4) - 4a - 0 = 12 - 3a.$$

(Detaliat: $a\cdot1\cdot1 + 4\cdot1\cdot2 + (-2)\cdot0\cdot4 - (-2)\cdot1\cdot2 - a\cdot1\cdot4 - 4\cdot0\cdot1$.)

Deci $y_0 = \dfrac{12 - 3a}{a^2 + 2}$. Cum numitorul este pozitiv, putem înmulți fără să schimbăm sensul:

$$\frac{12 - 3a}{a^2 + 2} \ge 1 \iff 12 - 3a \ge a^2 + 2 \iff a^2 + 3a - 10 \le 0 \iff (a + 5)(a - 2) \le 0.$$

Trinomul are rădăcinile $-5$ și $2$ și este $\le 0$ între ele.

**Răspuns:** $a \in [-5, 2]$. *Barem: 3p calculul lui $y_0$, 2p rezolvarea inecuației.*

### 2. Legea asociativă $x * y = 4 - \dfrac12(x - 4)(y - 4)$

#### a) $6 * 7 = 1$

$$6 * 7 = 4 - \frac12(6 - 4)(7 - 4) = 4 - \frac12\cdot2\cdot3 = 4 - 3 = 1.$$

#### b) $x$ real cu $x * (x + 4) = 6$

$$x * (x + 4) = 4 - \frac12(x - 4)(x + 4 - 4) = 4 - \frac12x(x - 4).$$

Ecuația: $4 - \dfrac12x(x - 4) = 6 \iff x(x - 4) = -4 \iff x^2 - 4x + 4 = 0 \iff (x - 2)^2 = 0$.

**Răspuns:** $x = 2$. *Barem: 2p expresia, 3p rezolvarea.*

#### c) Tripletele $(m, n, p)$ de numere naturale, $m < n < p$, cu $m * n * p = 3$

**Pas 1.** Notăm $m * n = 4 - \frac12(m-4)(n-4)$, deci $(m * n) - 4 = -\frac12(m-4)(n-4)$.

**Pas 2.** $(m * n) * p = 4 - \dfrac12\big((m*n) - 4\big)(p - 4) = 4 - \dfrac12\cdot\left(-\dfrac12\right)(m-4)(n-4)(p-4) = 4 + \dfrac14(m-4)(n-4)(p-4).$

**Pas 3.** $4 + \dfrac14(m-4)(n-4)(p-4) = 3 \iff (m-4)(n-4)(p-4) = -4$.

Notăm $u = m - 4 < v = n - 4 < w = p - 4$, numere întregi cu $u, v, w \ge -4$ și $uvw = -4$. Toți trebuie să fie divizori ai lui 4, distincți, cu produsul negativ:

- **un singur factor negativ** ($u < 0 < v < w$): $v, w$ pozitivi distincți, $|u|\cdot v\cdot w = 4$. Cu $v < w$ divizori ai lui 4: $(v, w) = (1, 2)$ dă $|u| = 2$, $u = -2$; $(v,w) = (1, 4)$ dă $|u| = 1$, $u = -1$. (Perechea $(2, 4)$ ar cere $|u| = \frac12$ — imposibil.)
- **trei factori negativi** ($u < v < w < 0$): $|u|\cdot|v|\cdot|w| = 4$ cu trei valori absolute distincte — cel mai mic produs posibil este $1\cdot2\cdot3 = 6 > 4$, imposibil.

Revenim: $(u, v, w) = (-2, 1, 2) \Rightarrow (m, n, p) = (2, 5, 6)$; $(u, v, w) = (-1, 1, 4) \Rightarrow (m, n, p) = (3, 5, 8)$.

Verificare: $(2-4)(5-4)(6-4) = -4$ ✔; $(3-4)(5-4)(8-4) = -4$ ✔.

**Răspuns:** $(m, n, p) \in \{(2, 5, 6),\ (3, 5, 8)\}$. *Barem: 3p formula lui $m * n * p$, 2p tripletele.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = (x - 5)\sqrt{x^2 + 2}$

#### a) $f'(x) = \dfrac{2x^2 - 5x + 2}{\sqrt{x^2 + 2}}$

Regula produsului, cu $\left(\sqrt{u}\right)' = \dfrac{u'}{2\sqrt u}$:

$$f'(x) = 1\cdot\sqrt{x^2 + 2} + (x - 5)\cdot\frac{2x}{2\sqrt{x^2+2}} = \frac{(x^2 + 2) + x(x - 5)}{\sqrt{x^2 + 2}} = \frac{2x^2 - 5x + 2}{\sqrt{x^2+2}}.$$

*Barem: 3p derivarea, 2p aducerea la același numitor.*

#### b) Intervalele de monotonie

Numitorul este pozitiv, deci semnul lui $f'$ este semnul lui $2x^2 - 5x + 2$. Rădăcinile: $\Delta = 25 - 16 = 9$, $x_{1,2} = \dfrac{5 \pm 3}{4}$, adică $\dfrac12$ și $2$.

| $x$ | $-\infty$ | | $\tfrac12$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | | ↗ | | ↘ | | ↗ | |

**Răspuns:** $f$ este crescătoare pe $\left(-\infty, \dfrac12\right]$, descrescătoare pe $\left[\dfrac12, 2\right]$ și crescătoare pe $[2, +\infty)$. *Barem: 2p rădăcinile derivatei, 3p semnul și intervalele.*

#### c) $\displaystyle\lim_{x\to+\infty}\left(\frac{x^2 - 5x}{f(x)}\right)^x = 1$

Pentru $x > 5$ simplificăm cu $x - 5$:

$$\frac{x^2 - 5x}{f(x)} = \frac{x(x-5)}{(x-5)\sqrt{x^2+2}} = \frac{x}{\sqrt{x^2+2}} \xrightarrow{x\to\infty} 1,$$

iar exponentul tinde la $+\infty$: nedeterminare $1^\infty$.

Cum baza este pozitivă: $\left(\dfrac{x}{\sqrt{x^2+2}}\right)^x = \left(\dfrac{x^2}{x^2+2}\right)^{x/2} = \left(1 - \dfrac{2}{x^2+2}\right)^{x/2}$.

Folosim limita fundamentală $\lim\limits_{t\to0}(1 + t)^{1/t} = e$, cu $t = -\dfrac{2}{x^2+2} \to 0$:

$$\left(1 - \frac{2}{x^2+2}\right)^{x/2} = \left[\left(1 - \frac{2}{x^2+2}\right)^{-\frac{x^2+2}{2}}\right]^{-\frac{2}{x^2+2}\cdot\frac x2}.$$

Paranteza dreaptă tinde la $e$, iar exponentul $-\dfrac{x}{x^2+2} \to 0$. Deci limita este $e^0 = 1$.

*Barem: 3p aducerea la limita fundamentală, 2p calculul exponentului și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = 8x^3 + 1 + \ln^2 x$

#### a) $\displaystyle\int_1^2\big(f(x) - \ln^2 x\big)dx = 31$

$$\int_1^2 (8x^3 + 1)\,dx = (2x^4 + x)\Big|_1^2 = (32 + 2) - (2 + 1) = 34 - 3 = 31.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^e\frac{f(x) - 8x^3 - 1}{x}\,dx = \frac13$

$f(x) - 8x^3 - 1 = \ln^2 x$, deci integrandul este $\ln^2 x\cdot\dfrac1x = \ln^2 x\cdot(\ln x)'$, de forma $u^2u'$, cu primitiva $\dfrac{u^3}{3}$:

$$\int_1^e\frac{\ln^2 x}{x}\,dx = \frac{\ln^3 x}{3}\Big|_1^e = \frac{1}{3} - 0 = \frac13.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $I_n = \displaystyle\int_1^{e^2}\frac{x(\ln x)^n}{f(x) - 8x^3}\,dx$; demonstrați că $I_{n+2} + I_n \le 2^{n-1}(e^4 - 1)$

Numitorul: $f(x) - 8x^3 = 1 + \ln^2 x$. Adunăm cele două integrale (aceleași limite):

$$I_{n+2} + I_n = \int_1^{e^2}\frac{x(\ln x)^{n+2} + x(\ln x)^n}{1 + \ln^2 x}\,dx = \int_1^{e^2}\frac{x(\ln x)^n(\ln^2 x + 1)}{1 + \ln^2 x}\,dx = \int_1^{e^2}x(\ln x)^n\,dx.$$

**Majorare.** Pentru $x \in [1, e^2]$: $0 \le \ln x \le \ln e^2 = 2$, deci $(\ln x)^n \le 2^n$ și, cum $x > 0$, $x(\ln x)^n \le 2^n x$. Prin monotonia integralei:

$$I_{n+2} + I_n \le 2^n\int_1^{e^2}x\,dx = 2^n\cdot\frac{x^2}{2}\Big|_1^{e^2} = 2^n\cdot\frac{e^4 - 1}{2} = 2^{n-1}(e^4 - 1).$$

(Verificare numerică pentru $n = 1$: $I_3 + I_1 \approx 41{,}2 \le e^4 - 1 \approx 53{,}6$.)

*Barem: 3p $I_{n+2} + I_n = \int_1^{e^2}x(\ln x)^n\,dx$, 2p majorarea și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $4$ |
| I.2 | $m = 2$ |
| I.3 | $x = 3$ |
| I.4 | 20 de numere |
| I.5 | $y = 3x + 1$ |
| I.6 | $E(\pi/3) = 0$ |
| II.1.c | $a \in [-5, 2]$ |
| II.2.b | $x = 2$ |
| II.2.c | $(2,5,6)$ și $(3,5,8)$ |
| III.1.b | crescătoare pe $(-\infty, \frac12]$ și $[2, \infty)$, descrescătoare pe $[\frac12, 2]$ |
| III.1.c | limita $= 1$ |

## Ce merită reținut din varianta 5

- **Legi de forma $c + k(x-c)(y-c)$**: compunerea a trei elemente dă $c + k^2(x-c)(y-c)(z-c)$; ecuația devine un produs de întregi cu valoare fixă.
- **Inecuații cu fracții**: înmulțește cu numitorul doar după ce ai arătat că e pozitiv.
- **Limite $1^\infty$**: adu baza la forma $1 + t$, cu $t \to 0$, și calculează limita lui $t\cdot$exponent.
- **Șiruri de integrale $I_{n+2} + I_n$**: adunarea simplifică numitorul; apoi majorează $(\ln x)^n$ cu valoarea maximă de pe interval.

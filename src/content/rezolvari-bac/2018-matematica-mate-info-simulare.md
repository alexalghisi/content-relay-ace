Rezolvarea completă a **simulării de Bacalaureat 2018 la Matematică M_mate-info** pentru clasa a XII-a. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Partea întreagă a lui $a = \sqrt[3]{125} + \sqrt5$

$\sqrt[3]{125} = 5$, deci $a = 5 + \sqrt5$. Cum $4 < 5 < 9$, avem $2 < \sqrt5 < 3$, deci $7 < a < 8$:

$$[a] = 7.$$

*Barem: 2p $a = 5 + \sqrt5$, 3p partea întreagă.*

### 2. $f(x) = x + m$ și $(f\circ f)(x) = f(x+1)$ pentru orice $x$

$(f\circ f)(x) = f(x + m) = x + 2m$, iar $f(x+1) = x + 1 + m$.

$$x + 2m = x + 1 + m \iff m = 1.$$

**Răspuns:** $m = 1$. *Barem: 2p expresiile, 3p valoarea lui $m$.*

### 3. Inecuația $\left(\frac23\right)^{4x+1} \le \left(\frac23\right)^{3x+5}$

Baza $\frac23 \in (0,1)$, deci funcția exponențială este **descrescătoare** și sensul inegalității se schimbă:

$$4x + 1 \ge 3x + 5 \iff x \ge 4.$$

**Răspuns:** $x \in [4, +\infty)$. *Barem: 3p inecuația echivalentă, 2p soluția.*

### 4. Submulțimi cu cel puțin trei elemente ale lui $A = \{0, 1, \dots, 9\}$

$A$ are 10 elemente, deci $2^{10} = 1024$ submulțimi în total. Scădem pe cele cu 0, 1 sau 2 elemente:

$$2^{10} - C_{10}^0 - C_{10}^1 - C_{10}^2 = 1024 - 1 - 10 - 45 = 968.$$

**Răspuns:** 968. *Barem: 3p scrierea sumei, 2p calculul.*

### 5. $MN = 6$, $MP = 8$, $\angle M = 90^\circ$; $|\vec u|$, $\vec u = \overrightarrow{MN} + \overrightarrow{MP}$

Regula paralelogramului: $\overrightarrow{MN} + \overrightarrow{MP} = \overrightarrow{MQ}$, unde $MNQP$ este paralelogram. Cum unghiul $M$ este drept, $MNQP$ este dreptunghi, iar diagonalele sunt egale:

$$|\vec u| = MQ = NP = \sqrt{6^2 + 8^2} = 10.$$

**Răspuns:** $10$. *Barem: 2p paralelogramul, 3p lungimea.*

### 6. $\operatorname{tg} x + \operatorname{ctg} x + 2 = 0$, $x \in \left(\frac\pi2, \pi\right)$

Cu $\operatorname{ctg} x = \frac{1}{\operatorname{tg} x}$:

$$\operatorname{tg} x + \frac{1}{\operatorname{tg} x} + 2 = 0 \iff \frac{(\operatorname{tg} x + 1)^2}{\operatorname{tg} x} = 0 \iff \operatorname{tg} x = -1.$$

În cadranul II, $\operatorname{tg} x = -1$ dă $x = \dfrac{3\pi}{4}$.

**Răspuns:** $x = \dfrac{3\pi}{4}$. *Barem: 2p ecuația în $\operatorname{tg} x$, 3p soluția.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix} x & 0 & 2x-1\\ 0 & \frac12 & 0\\ 2x-1 & 0 & x\end{pmatrix}$

#### a) $\det(A(x)) = 0$

Regula lui Sarrus (doar diagonala principală și cea secundară au termeni nenuli):

$$\det(A(x)) = \frac{x^2}{2} - \frac{(2x-1)^2}{2} = \frac{-3x^2 + 4x - 1}{2}.$$

$-3x^2 + 4x - 1 = 0 \iff 3x^2 - 4x + 1 = 0 \iff (3x-1)(x-1) = 0$.

**Răspuns:** $x \in \left\{\dfrac13, 1\right\}$. *Barem: 3p determinantul, 2p soluțiile.*

#### b) $A(x) + A(1-x) = 2A\left(\frac12\right)$

$$A(x) + A(1-x) = \begin{pmatrix} x & 0 & 2x-1\\ 0 & \frac12 & 0\\ 2x-1 & 0 & x\end{pmatrix} + \begin{pmatrix} 1-x & 0 & 1-2x\\ 0 & \frac12 & 0\\ 1-2x & 0 & 1-x\end{pmatrix} = I_3.$$

Iar $A\left(\frac12\right) = \begin{pmatrix} \frac12 & 0 & 0\\ 0 & \frac12 & 0\\ 0 & 0 & \frac12\end{pmatrix} = \frac12 I_3$, deci $2A\left(\frac12\right) = I_3$. $\blacksquare$ *Barem: 3p suma, 2p finalizarea.*

#### c) $A(x)\cdot A(1-x) = \frac12 A\left(\frac12\right)$

Membrul drept este $\frac14 I_3$. Calculăm produsul:

- elementul $(1,1)$: $x(1-x) + (2x-1)(1-2x) = x - x^2 - (2x-1)^2 = -5x^2 + 5x - 1$;
- elementul $(1,3)$: $x(1-2x) + (2x-1)(1-x) = (2x-1)(1 - x - x) = -(2x-1)^2$;
- elementul $(2,2)$: $\frac14$; analog $(3,3) = -5x^2+5x-1$, $(3,1) = -(2x-1)^2$.

Egalitatea cu $\frac14 I_3$ cere $-(2x-1)^2 = 0$, adică $x = \frac12$, și atunci $-\frac54 + \frac52 - 1 = \frac14$ ✔.

**Răspuns:** $x = \dfrac12$. *Barem: 3p produsul, 2p soluția.*

### 2. Pe $\mathbb Z_{20}$: $x \circ y = xy + \hat3x + \hat3y + \hat9$

#### a) $x \circ y = (x + \hat3)(y + \hat3)$

$$xy + \hat3x + \hat3y + \hat9 = x(y + \hat3) + \hat3(y + \hat3) = (x + \hat3)(y + \hat3).$$

*Barem: 2p gruparea, 3p finalizarea.*

#### b) $a \circ x = \hat0$ pentru orice $x \in \mathbb Z_{20}$

$(a + \hat3)(x + \hat3) = \hat0$ pentru orice $x$; luând $x = \hat{-2} = \widehat{18}$ (deci $x + \hat3 = \hat1$) obținem $a + \hat3 = \hat0$, adică $a = \widehat{17}$ (care evident convine).

**Răspuns:** $a = \widehat{17}$. *Barem: 2p scrierea condiției, 3p valoarea lui $a$.*

#### c) $a, b \ne \widehat{17}$ cu $a \circ b = \hat0$

Avem nevoie de $(a + \hat3)(b + \hat3) = \hat0$ cu ambii factori nenuli — divizori ai lui zero în $\mathbb Z_{20}$. Cum $4\cdot5 = 20$: $a = \hat1$ ($a + \hat3 = \hat4$) și $b = \hat2$ ($b + \hat3 = \hat5$); $\hat4\cdot\hat5 = \widehat{20} = \hat0$.

**Răspuns (exemplu):** $a = \hat1$, $b = \hat2$. *Barem: 2p condiția, 3p exemplul.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0,+\infty)\to\mathbb R$, $f(x) = 2x^2 - \sqrt x$

#### a) $\lim\limits_{x\to1}\dfrac{f(x) - 1}{x - 1} = \dfrac72$

$f(1) = 2 - 1 = 1$, deci limita este definiția derivatei în $1$. $f'(x) = 4x - \dfrac{1}{2\sqrt x}$, deci

$$\lim_{x\to1}\frac{f(x) - f(1)}{x-1} = f'(1) = 4 - \frac12 = \frac72.$$

*Barem: 2p derivata, 3p limita.*

#### b) Imaginea funcției

$f'(x) = 0 \iff 4x = \dfrac{1}{2\sqrt x} \iff x\sqrt x = \dfrac18 \iff x^{3/2} = \left(\dfrac14\right)^{3/2} \iff x = \dfrac14.$

$f' < 0$ pe $\left(0, \frac14\right)$ (descrescătoare), $f' > 0$ pe $\left(\frac14, +\infty\right)$ (crescătoare). Minimul: $f\left(\frac14\right) = \frac{2}{16} - \frac12 = -\frac38$.

$\lim\limits_{x\to0} f(x) = 0$, $\lim\limits_{x\to+\infty} f(x) = +\infty$; $f$ continuă, deci ia toate valorile din $\left[-\frac38, +\infty\right)$.

**Răspuns:** $\operatorname{Im} f = \left[-\dfrac38, +\infty\right)$. *Barem: 1p punctul critic, 2p monotonia, 2p imaginea.*

#### c) $2e^{2x} - e^{\frac x2} + \frac38 \ge 0$ pentru orice $x$ real

Pentru orice $x$, $e^x > 0$, deci din b) $f(e^x) \ge -\frac38$:

$$2(e^x)^2 - \sqrt{e^x} \ge -\frac38 \iff 2e^{2x} - e^{\frac x2} + \frac38 \ge 0. \ \blacksquare$$

*Barem: 3p $f(e^x) \ge -\frac38$, 2p finalizarea.*

### 2. $f(x) = \operatorname{arctg} x$

#### a) $\displaystyle\int_0^1 f(\operatorname{tg} x)\,dx = \frac12$

Pentru $x \in [0,1] \subset \left(-\frac\pi2, \frac\pi2\right)$, $\operatorname{arctg}(\operatorname{tg} x) = x$:

$$\int_0^1 x\,dx = \frac{x^2}{2}\Big|_0^1 = \frac12.$$

*Barem: 3p simplificarea, 2p calculul.*

#### b) $\displaystyle\int_0^1 \frac{f(x)}{x^2+1}\,dx$

Cum $(\operatorname{arctg} x)' = \dfrac{1}{x^2+1}$, integrandul este $u\cdot u'$:

$$\int_0^1 \operatorname{arctg} x\cdot(\operatorname{arctg} x)'\,dx = \frac{\operatorname{arctg}^2 x}{2}\Big|_0^1 = \frac12\left(\frac\pi4\right)^2 = \frac{\pi^2}{32}.$$

**Răspuns:** $\dfrac{\pi^2}{32}$. *Barem: 3p primitiva, 2p calculul.*

#### c) $\dfrac\pi4 - \dfrac{1}{n+2} \le (n+1)\displaystyle\int_0^1 x^n f(x)\,dx \le \dfrac\pi4 - \dfrac{1}{2(n+2)}$

**Integrare prin părți** cu $(x^{n+1})' = (n+1)x^n$:

$$(n+1)\int_0^1 x^n\operatorname{arctg} x\,dx = x^{n+1}\operatorname{arctg} x\Big|_0^1 - \int_0^1 \frac{x^{n+1}}{x^2+1}\,dx = \frac\pi4 - \int_0^1\frac{x^{n+1}}{x^2+1}\,dx.$$

**Încadrare:** pentru $x \in [0,1]$, $1 \le x^2 + 1 \le 2$, deci $\frac12 x^{n+1} \le \dfrac{x^{n+1}}{x^2+1} \le x^{n+1}$. Integrând și folosind $\int_0^1 x^{n+1}dx = \frac{1}{n+2}$:

$$\frac{1}{2(n+2)} \le \int_0^1\frac{x^{n+1}}{x^2+1}\,dx \le \frac{1}{n+2}.$$

Scăzând din $\frac\pi4$ (inegalitățile se inversează) obținem exact cerința. $\blacksquare$ *Barem: 2p integrarea prin părți, 3p încadrarea și finalizarea.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $[a] = 7$ |
| I.2 | $m = 1$ |
| I.3 | $x \in [4, +\infty)$ |
| I.4 | 968 |
| I.5 | $\lvert\vec u\rvert = 10$ |
| I.6 | $x = \frac{3\pi}{4}$ |
| II.1.a | $x \in \{\frac13, 1\}$ |
| II.1.c | $x = \frac12$ |
| II.2.b | $a = \widehat{17}$ |
| II.2.c | de ex. $a = \hat1$, $b = \hat2$ |
| III.1.b | $\operatorname{Im} f = [-\frac38, +\infty)$ |
| III.2.b | $\frac{\pi^2}{32}$ |

## Ce merită reținut din simularea 2018

- **Inecuații exponențiale cu bază subunitară**: sensul se schimbă.
- **Legi de tipul $xy + ax + ay + a^2 - a$** se scriu ca $(x+a)(y+a) - a$; în $\mathbb Z_n$ apar divizori ai lui zero.
- **Limite de forma $\frac{f(x)-f(a)}{x-a}$** sunt derivata în $a$.
- **Imaginea unei funcții** = minimul/maximul din tabelul de variație + limitele la capete + continuitatea.
- **Integrale cu $x^n$**: prin părți, apoi încadrezi restul folosind margini simple ale numitorului.

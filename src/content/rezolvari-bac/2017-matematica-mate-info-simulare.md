Rezolvarea completă a **simulării pentru clasa a XII-a, Bacalaureat 2017, la Matematică M_mate-info**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\dfrac{2+i}{2-i} + \dfrac{2-i}{2+i} = \dfrac65$

Aducem la numitorul comun $(2-i)(2+i) = 4 - i^2 = 5$:

$$\frac{(2+i)^2 + (2-i)^2}{5} = \frac{(4 + 4i + i^2) + (4 - 4i + i^2)}{5} = \frac{8 - 2}{5} = \frac65.$$

*Barem: 2p numitorul comun, 3p calculul.*

### 2. $x_1, x_2$ soluțiile lui $x^2 - (2m+3)x + m^2 + 3m + 2 = 0$; arătați că $(x_1 - x_2)^2 = 1$

Viète: $x_1 + x_2 = 2m + 3$, $x_1x_2 = m^2 + 3m + 2$.

$$(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2 = 4m^2 + 12m + 9 - 4m^2 - 12m - 8 = 1.$$

*Barem: 2p, 3p.*

### 3. Ecuația $\sqrt{x - 3} = 5 - x$

**Condiții:** $x \ge 3$ și $5 - x \ge 0$, adică $x \in [3, 5]$.

Ridicăm la pătrat: $x - 3 = 25 - 10x + x^2 \iff x^2 - 11x + 28 = 0 \iff (x - 4)(x - 7) = 0$.

$x = 7 \notin [3, 5]$ (verificare: $\sqrt4 = 2 \ne -2$); $x = 4$: $\sqrt1 = 1 = 5 - 4$ ✔.

**Răspuns:** $x = 4$. *Barem: 3p, 2p.*

### 4. Câte numere naturale de trei cifre distincte se pot forma doar cu cifre pare?

Cifrele pare sunt $0, 2, 4, 6, 8$.

- cifra sutelor: nu poate fi $0$ — **4** moduri;
- cifra zecilor: oricare dintre cele 4 cifre rămase (inclusiv $0$) — **4** moduri;
- cifra unităților: **3** moduri.

$$4\cdot 4\cdot 3 = 48.$$

**Răspuns:** $48$. *Barem: 2p, 3p.*

### 5. $M, N, P$ mijloacele laturilor $AB$, $BC$, $AC$; arătați că $\overrightarrow{BM} + \overrightarrow{BN} = \overrightarrow{BP}$

$MP$ și $NP$ sunt linii mijlocii: $MP \parallel BC$ și $NP \parallel AB$. Deci $BMPN$ este paralelogram, iar după regula paralelogramului

$$\overrightarrow{BM} + \overrightarrow{BN} = \overrightarrow{BP}.$$

*Barem: 2p liniile mijlocii, 3p concluzia.*

### 6. $\sin 2x = \cos x$, $x \in \left[\frac\pi2, \pi\right]$

$$2\sin x\cos x = \cos x \iff \cos x(2\sin x - 1) = 0 \iff \cos x = 0 \ \text{sau}\ \sin x = \frac12.$$

În $\left[\frac\pi2, \pi\right]$: $\cos x = 0 \Rightarrow x = \frac\pi2$; $\sin x = \frac12 \Rightarrow x = \frac{5\pi}{6}$.

**Răspuns:** $x \in \left\{\dfrac\pi2, \dfrac{5\pi}{6}\right\}$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & 1 & 1\\ 1 & a & 3\\ 1 & 3 & a\end{pmatrix}$ și sistemul $\begin{cases} x + y + z = 1\\ x + ay + 3z = 2\\ x + 3y + az = 2\end{cases}$

#### a) $\det(A(a)) = (a+1)(a-3)$

$$\det A(a) = a^2 + 3 + 3 - a - 9 - a = a^2 - 2a - 3 = (a+1)(a-3).$$

*Barem: 3p, 2p.*

#### b) $m$ cu $A(m)A(2-m) = A(2-m)A(m)$

Calculăm prima linie a fiecărui produs:

- $A(m)A(2-m)$: $\big(3,\ 1 + (2-m) + 3,\ 1 + 3 + (2-m)\big) = (3,\ 6 - m,\ 6 - m)$;
- $A(2-m)A(m)$: $\big(3,\ 1 + m + 3,\ 1 + 3 + m\big) = (3,\ m + 4,\ m + 4)$.

Egalitatea impune $6 - m = m + 4$, deci $m = 1$. Pentru $m = 1$ cele două matrice sunt chiar $A(1)\cdot A(1)$, deci egalitatea are loc.

$$A(m)A(2-m) = \begin{pmatrix} 3 & 6-m & 6-m\\ m+4 & -m^2+2m+10 & 7\\ m+4 & 7 & -m^2+2m+10\end{pmatrix}.$$

**Răspuns:** $m = 1$. *Barem: 2p, 3p.*

#### c) Numerele întregi $a$ pentru care soluția unică are componente întregi

Soluție unică $\iff \det A(a) \ne 0 \iff a \ne -1,\ a \ne 3$.

Scăzând prima ecuație din celelalte: $(a-1)y + 2z = 1$ și $2y + (a-1)z = 1$. Scăzându-le: $(a-3)(y - z) = 0$, deci $y = z$ și $(a+1)y = 1$:

$$y_0 = z_0 = \frac{1}{a+1}, \qquad x_0 = 1 - \frac{2}{a+1} = \frac{a-1}{a+1}.$$

$z_0 \in \mathbb Z \iff (a + 1) \mid 1 \iff a + 1 \in \{-1, 1\} \iff a \in \{-2, 0\}$; atunci și $x_0 = 1 - 2z_0 \in \mathbb Z$.

**Răspuns:** $a \in \{-2, 0\}$. *Barem: 3p soluția, 2p valorile.*

### 2. $x * y = -5xy + 10x + 10y - 18$

#### a) $x * y = 2 - 5(x - 2)(y - 2)$

$$2 - 5(xy - 2x - 2y + 4) = -5xy + 10x + 10y - 18 = x * y.$$

*Barem: 2p, 3p.*

#### b) $n \in \mathbb N$ cu $(n * n) * n = n$

$n * n = 2 - 5(n-2)^2$, apoi $(n*n)*n = 2 - 5\cdot\big(-5(n-2)^2\big)(n-2) = 2 + 25(n-2)^3$.

$$2 + 25(n-2)^3 = n \iff (n-2)\big(25(n-2)^2 - 1\big) = 0 \iff n = 2 \ \text{sau}\ n - 2 = \pm\frac15.$$

Singura valoare naturală este $n = 2$.

**Răspuns:** $n = 2$. *Barem: 3p, 2p.*

#### c) Dacă $a * a = b$ și $b * b = a$, atunci $a = b = 2$ sau $a = b = \frac95$

Din a): $b - 2 = -5(a-2)^2$ și $a - 2 = -5(b-2)^2$. Înlocuind:

$$a - 2 = -5\cdot 25(a-2)^4 = -125(a-2)^4 \iff (a-2)\big(1 + 125(a-2)^3\big) = 0.$$

- $a - 2 = 0 \Rightarrow a = 2$, $b = 2$;
- $(a-2)^3 = -\frac{1}{125} \Rightarrow a - 2 = -\frac15$, $a = \frac95$, iar $b - 2 = -5\cdot\frac{1}{25} = -\frac15$, $b = \frac95$. $\blacksquare$

*Barem: 1p, 2p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = \dfrac{x}{\sqrt{x^2 + 2x + 2}}$

#### a) Intervalele de monotonie

$$f'(x) = \frac{\sqrt{x^2+2x+2} - x\cdot\dfrac{x+1}{\sqrt{x^2+2x+2}}}{x^2+2x+2} = \frac{x^2 + 2x + 2 - x^2 - x}{(x^2+2x+2)\sqrt{x^2+2x+2}} = \frac{x + 2}{(x^2+2x+2)\sqrt{x^2+2x+2}}.$$

Semnul lui $f'$ este semnul lui $x + 2$: $f$ **descrescătoare pe $(-\infty, -2]$**, **crescătoare pe $[-2, +\infty)$**. *Barem: 3p derivata, 1p, 1p.*

#### b) $\lim\limits_{x\to+\infty}(f(x))^{2x} = \dfrac{1}{e^2}$

$\lim\limits_{x\to+\infty} f(x) = 1$, deci avem $1^\infty$. Scriem $(f(x))^{2x} = \left(\dfrac{x^2}{x^2+2x+2}\right)^x = \left(1 + \dfrac{-2x-2}{x^2+2x+2}\right)^x$:

$$\lim_{x\to+\infty}\left(1 + \frac{-2x-2}{x^2+2x+2}\right)^{x} = e^{\lim\limits_{x\to+\infty}\frac{-2x^2 - 2x}{x^2+2x+2}} = e^{-2} = \frac{1}{e^2}.$$

*Barem: 1p, 2p, 2p.*

#### c) Pentru $a \in (-\sqrt2, -1)$, ecuația $f(x) = a$ are exact două soluții

Limitele: $\lim\limits_{x\to-\infty} f(x) = -1$ (pentru $x < 0$, $\sqrt{x^2} = -x$), $\lim\limits_{x\to+\infty} f(x) = 1$, iar minimul este $f(-2) = \dfrac{-2}{\sqrt2} = -\sqrt2$.

Fie $g(x) = f(x) - a$, continuă, strict descrescătoare pe $(-\infty, -2]$ și strict crescătoare pe $[-2, +\infty)$:

- $\lim\limits_{x\to-\infty} g = -1 - a > 0$ și $g(-2) = -\sqrt2 - a < 0$ ⇒ exact o soluție în $(-\infty, -2)$;
- $g(-2) < 0$ și $\lim\limits_{x\to+\infty} g = 1 - a > 0$ ⇒ exact o soluție în $(-2, +\infty)$.

Deci ecuația are exact două soluții reale distincte. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{1}{\sqrt{x+1}}$, $I_n = \displaystyle\int_0^1 x^n f(x)\,dx$

#### a) $\displaystyle\int_0^1 f(x)\,dx = 2(\sqrt2 - 1)$

$(\sqrt{x+1})' = \dfrac{1}{2\sqrt{x+1}}$, deci o primitivă este $2\sqrt{x+1}$:

$$\int_0^1\frac{dx}{\sqrt{x+1}} = 2\sqrt{x+1}\Big|_0^1 = 2\sqrt2 - 2 = 2(\sqrt2 - 1).$$

*Barem: 3p, 2p.*

#### b) $I_n \le \dfrac{1}{n+1}$

Pentru $x \in [0, 1]$: $\sqrt{x+1} \ge 1$, deci $\dfrac{1}{\sqrt{x+1}} \le 1$, iar $x^n \ge 0$; rezultă $\dfrac{x^n}{\sqrt{x+1}} \le x^n$.

$$I_n \le \int_0^1 x^n\,dx = \frac{x^{n+1}}{n+1}\Big|_0^1 = \frac{1}{n+1}.$$

*Barem: 2p, 3p.*

#### c) $(2n+1)I_n = 2\sqrt2 - 2nI_{n-1}$, $n \ge 2$

Scriem $f(x) = 2(\sqrt{x+1})'$ și integrăm prin părți:

$$I_n = 2x^n\sqrt{x+1}\Big|_0^1 - 2n\int_0^1 x^{n-1}\sqrt{x+1}\,dx = 2\sqrt2 - 2n\int_0^1 x^{n-1}\frac{x+1}{\sqrt{x+1}}\,dx.$$

$$\int_0^1\frac{x^n + x^{n-1}}{\sqrt{x+1}}\,dx = I_n + I_{n-1} \Rightarrow I_n = 2\sqrt2 - 2nI_n - 2nI_{n-1},$$

adică $(2n+1)I_n = 2\sqrt2 - 2nI_{n-1}$. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.3 | $x = 4$ |
| I.4 | $48$ |
| I.6 | $x \in \{\tfrac\pi2, \tfrac{5\pi}{6}\}$ |
| II.1.b | $m = 1$ |
| II.1.c | $a \in \{-2, 0\}$ |
| II.2.b | $n = 2$ |
| III.1.a | descrescătoare pe $(-\infty,-2]$, crescătoare pe $[-2,+\infty)$ |
| III.1.b | $\tfrac{1}{e^2}$ |
| III.2.a | $2(\sqrt2-1)$ |

## Ce merită reținut din simulare

- **Ecuații iraționale**: pune condiția ca membrul drept să fie $\ge 0$ și verifică soluțiile după ridicarea la pătrat.
- **Numărare cu cifre**: tratează separat cifra de pe prima poziție (nu poate fi $0$).
- **Limite $1^\infty$**: $\lim(1 + u)^v = e^{\lim uv}$ când $u \to 0$.
- **Număr de soluții ale lui $f(x) = a$**: monotonia pe intervale + valorile la capete (limite și extreme).
- **Relații de recurență pentru $I_n$**: integrare prin părți, apoi rescrie integrala obținută în funcție de $I_n$ și $I_{n-1}$.

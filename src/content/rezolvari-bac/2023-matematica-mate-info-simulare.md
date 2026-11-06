Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_mate-info**, simularea națională. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Numere complexe: arătați că $z_1^2 + 4z_2 = 1$, pentru $z_1 = 1 + 2i$, $z_2 = 1 - i$

Ridicăm la pătrat cu formula $(a+b)^2 = a^2 + 2ab + b^2$ și folosim $i^2 = -1$:

$$z_1^2 = (1+2i)^2 = 1 + 4i + 4i^2 = 1 + 4i - 4 = -3 + 4i.$$

Apoi $4z_2 = 4 - 4i$, deci

$$z_1^2 + 4z_2 = -3 + 4i + 4 - 4i = 1.$$

*Barem: 3p dezvoltarea pătratului și a produsului, 2p finalizarea.*

### 2. $f(x) = 3x + 1$, $g(x) = x^2 + x + m$: graficele au exact un punct comun

Abscisele punctelor comune sunt soluțiile ecuației $f(x) = g(x)$:

$$x^2 + x + m = 3x + 1 \iff x^2 - 2x + m - 1 = 0.$$

Graficele au exact un punct comun dacă ecuația de gradul al II-lea are o singură soluție reală, adică $\Delta = 0$:

$$\Delta = (-2)^2 - 4(m-1) = 8 - 4m = 0 \iff m = 2.$$

Verificare: pentru $m = 2$ ecuația devine $(x-1)^2 = 0$, deci $x = 1$ și punctul comun este $(1, 4)$.

**Răspuns:** $m = 2$. *Barem: 2p ecuația $x^2 - 2x + m - 1 = 0$, 3p condiția $\Delta = 0$ și valoarea lui $m$.*

### 3. Ecuația $\lg(x^2 + 9) = 2\lg\left(x\sqrt{10}\right)$

**Condiții de existență:** $x^2 + 9 > 0$ (mereu) și $x\sqrt{10} > 0$, adică $x > 0$.

Membrul drept: $2\lg\left(x\sqrt{10}\right) = \lg\left(x\sqrt{10}\right)^2 = \lg(10x^2)$. Funcția $\lg$ fiind injectivă:

$$x^2 + 9 = 10x^2 \iff 9x^2 = 9 \iff x^2 = 1 \iff x \in \{-1, 1\}.$$

$x = -1$ nu respectă condiția $x > 0$; $x = 1$ convine: $\lg 10 = 1$ și $2\lg\sqrt{10} = 2\cdot\frac12 = 1$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ecuația $x^2 - 1 = 0$, 2p eliminarea lui $-1$ și soluția $x = 1$.* Greșeală frecventă: păstrarea lui $x = -1$ — pentru el $\lg(-\sqrt{10})$ nu există.

### 4. Probabilitatea ca un număr natural de cel mult două cifre să fie divizibil cu 9

Mulțimea $A = \{0, 1, 2, \dots, 99\}$ are **100** de elemente (atenție: și $0$ este număr natural de o cifră) — 100 de cazuri posibile.

Multiplii lui 9 din $A$: $9\cdot 0, 9\cdot 1, \dots, 9\cdot 11 = 99$, deci **12** cazuri favorabile.

$$p = \frac{12}{100} = \frac{3}{25}.$$

**Răspuns:** $p = \dfrac{3}{25}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $M$ mijlocul lui $AC$, $D, E \in AB$ cu $AD = BE$: arătați că $\overrightarrow{MD} + \overrightarrow{ME} = \overrightarrow{CB}$

Folosim regula triunghiului (Chasles):

$$\overrightarrow{MD} = \overrightarrow{MA} + \overrightarrow{AD}, \qquad \overrightarrow{ME} = \overrightarrow{MC} + \overrightarrow{CB} + \overrightarrow{BE}.$$

Adunând: $\overrightarrow{MD} + \overrightarrow{ME} = (\overrightarrow{MA} + \overrightarrow{MC}) + (\overrightarrow{AD} + \overrightarrow{BE}) + \overrightarrow{CB}$.

- $M$ este mijlocul lui $AC$, deci $\overrightarrow{MA} = -\overrightarrow{MC}$ și $\overrightarrow{MA} + \overrightarrow{MC} = \vec 0$.
- $D$ și $E$ sunt pe segmentul $AB$, cu $AD = BE$: vectorul $\overrightarrow{AD}$ are sensul de la $A$ spre $B$, iar $\overrightarrow{BE}$ sensul de la $B$ spre $A$, cu aceeași lungime, deci $\overrightarrow{AD} + \overrightarrow{BE} = \vec 0$.

Rămâne $\overrightarrow{MD} + \overrightarrow{ME} = \overrightarrow{CB}$. *Barem: 2p descompunerile, 3p finalizarea.*

### 6. $x \in [0, \pi]$ cu $\sin 2x = 1 + \cos 2x$

Folosim $\sin 2x = 2\sin x\cos x$ și $1 + \cos 2x = 2\cos^2 x$:

$$2\sin x\cos x = 2\cos^2 x \iff 2\cos x(\sin x - \cos x) = 0.$$

- $\cos x = 0$, cu $x \in [0, \pi]$ $\Rightarrow x = \dfrac{\pi}{2}$;
- $\sin x = \cos x$, cu $x \in [0, \pi]$ $\Rightarrow \operatorname{tg} x = 1 \Rightarrow x = \dfrac{\pi}{4}$.

Verificare: $x = \frac{\pi}{2}$: $\sin\pi = 0 = 1 + \cos\pi$ ✔; $x = \frac{\pi}{4}$: $\sin\frac{\pi}{2} = 1 = 1 + \cos\frac{\pi}{2}$ ✔.

**Răspuns:** $x \in \left\{\dfrac{\pi}{4}, \dfrac{\pi}{2}\right\}$. *Barem: 2p factorizarea, 3p soluțiile.* Nu împărți prin $\cos x$ — pierzi soluția $\frac{\pi}{2}$.

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}a & 1 & 2\\ 1 & a & -1\\ 2 & 2 & 1\end{pmatrix}$ și sistemul $\begin{cases}ax + y + 2z = -2\\ x + ay - z = 4\\ 2x + 2y + z = 2\end{cases}$

#### a) $\det(A(0)) = 1$

$$\det(A(0)) = \begin{vmatrix}0 & 1 & 2\\ 1 & 0 & -1\\ 2 & 2 & 1\end{vmatrix} = 0 + (-2) + 4 - 0 - 0 - 1 = 1.$$

(Sarrus: $0\cdot0\cdot1 + 1\cdot(-1)\cdot2 + 2\cdot1\cdot2 - 2\cdot0\cdot2 - 0\cdot(-1)\cdot2 - 1\cdot1\cdot1$.) *Barem: 3p dezvoltarea, 2p rezultatul.*

#### b) Valorile lui $a$ pentru care sistemul are soluție unică

$$\det(A(a)) = a^2 + (-2) + 4 - 4a - (-2a) - 1 = a^2 - 2a + 1 = (a-1)^2.$$

Sistemul (de 3 ecuații cu 3 necunoscute) are soluție unică exact când $\det(A(a)) \ne 0$, adică $(a-1)^2 \ne 0 \iff a \ne 1$.

**Răspuns:** $a \in \mathbb R \setminus \{1\}$. *Barem: 3p determinantul, 2p concluzia.*

#### c) Pentru $a = 1$: soluțiile întregi cu $x_0 > y_0 > z_0$

Pentru $a = 1$ sistemul este $x + y + 2z = -2$, $x + y - z = 4$, $2x + 2y + z = 2$. Notăm $s = x + y$:

- din primele două: scăzând, $3z = -6 \Rightarrow z = -2$, apoi $s = 2$;
- a treia: $2\cdot 2 + (-2) = 2$ ✔ — compatibilă.

Sistemul este compatibil nedeterminat: soluțiile sunt $(\alpha,\ 2 - \alpha,\ -2)$, $\alpha \in \mathbb R$.

Condițiile: $\alpha \in \mathbb Z$ și $\alpha > 2 - \alpha > -2$, adică $\alpha > 1$ și $\alpha < 4$, deci $\alpha \in \{2, 3\}$.

**Răspuns:** $(2, 0, -2)$ și $(3, -1, -2)$. *Barem: 2p forma soluțiilor, 3p condițiile și soluțiile.*

### 2. Pe $M = [-1, 1]$: $x * y = \dfrac{xy}{1 + \sqrt{(1-x^2)(1-y^2)}}$

#### a) $1 * \dfrac12 = \dfrac12$

$$1 * \frac12 = \frac{1\cdot\frac12}{1 + \sqrt{(1-1)\left(1-\frac14\right)}} = \frac{\frac12}{1 + 0} = \frac12.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x * (-x) \ge -x^2$, pentru orice $x \in M$

$$x * (-x) = \frac{-x^2}{1 + \sqrt{(1-x^2)^2}} = \frac{-x^2}{1 + (1 - x^2)} = \frac{-x^2}{2 - x^2},$$

unde am folosit $\sqrt{(1-x^2)^2} = |1 - x^2| = 1 - x^2$, deoarece $x^2 \le 1$ pe $M$. Atunci

$$x * (-x) - (-x^2) = x^2 - \frac{x^2}{2 - x^2} = \frac{x^2(2 - x^2) - x^2}{2 - x^2} = \frac{x^2(1 - x^2)}{2 - x^2} \ge 0,$$

pentru că $x^2 \ge 0$, $1 - x^2 \ge 0$ și $2 - x^2 \ge 1 > 0$. Deci $x * (-x) \ge -x^2$. *Barem: 3p calculul lui $x*(-x)$, 2p inegalitatea.*

#### c) Perechile $(a, b) \in M \times M$ cu $a * b = 1$

$$a * b = 1 \iff ab = 1 + \sqrt{(1-a^2)(1-b^2)}.$$

Radicalul este $\ge 0$, deci $ab \ge 1$. Dar $a, b \in [-1, 1]$ dau $|ab| \le 1$, deci obligatoriu $ab = 1$ (și radicalul $= 0$). $ab = 1$ cu $|a|, |b| \le 1$ forțează $|a| = |b| = 1$ și același semn: $(a, b) \in \{(-1,-1), (1,1)\}$.

Verificare: pentru $a = b = \pm 1$, radicalul este $0$ și $a * b = \frac{1}{1} = 1$ ✔.

**Răspuns:** $(-1, -1)$ și $(1, 1)$. *Barem: 3p obținerea lui $ab \ge 1$, 2p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = x - 1 - \ln\left(e^x + x^2\right)$

#### a) $f'(x) = \dfrac{x(x-2)}{e^x + x^2}$

Cu $(\ln u)' = \dfrac{u'}{u}$:

$$f'(x) = 1 - \frac{e^x + 2x}{e^x + x^2} = \frac{e^x + x^2 - e^x - 2x}{e^x + x^2} = \frac{x^2 - 2x}{e^x + x^2} = \frac{x(x-2)}{e^x + x^2}.$$

(Funcția e bine definită: $e^x + x^2 > 0$.) *Barem: 3p derivarea, 2p forma finală.*

#### b) Tangenta în $(a, f(a))$ paralelă cu $Ox$

Tangenta e paralelă cu $Ox$ $\iff$ panta ei $f'(a) = 0$:

$$\frac{a(a-2)}{e^a + a^2} = 0 \iff a(a-2) = 0 \iff a \in \{0, 2\}.$$

**Răspuns:** $a = 0$ sau $a = 2$. *Barem: 3p condiția $f'(a) = 0$, 2p valorile.*

#### c) Imaginea funcției $f$

Numitorul lui $f'$ este pozitiv, deci semnul lui $f'$ e semnul lui $x(x-2)$:

| $x$ | $-\infty$ | | $0$ | | $2$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | ↗ | $-1$ | ↘ | $1 - \ln(e^2+4)$ | ↗ | $-1$ |

Valori și limite:

- $f(0) = -1 - \ln 1 = -1$;
- spre $-\infty$: $e^x + x^2 \approx x^2$, iar $x - 1 - \ln(e^x + x^2) \to -\infty$ (termenul liniar $x$ domină logaritmul);
- spre $+\infty$: $\ln(e^x + x^2) = x + \ln\left(1 + x^2e^{-x}\right)$, deci $f(x) = -1 - \ln\left(1 + x^2 e^{-x}\right) \to -1 - \ln 1 = -1$ (deoarece $x^2e^{-x} \to 0$).

Pe $(-\infty, 0]$, $f$ crește continuu de la $-\infty$ la $-1$, deci ia toate valorile din $(-\infty, -1]$. Pe $[0, +\infty)$, $f$ scade apoi crește spre $-1$ fără a o atinge, deci valorile rămân $\le -1$. În concluzie, $\operatorname{Im} f = (-\infty, -1]$.

**Răspuns:** $\operatorname{Im} f = (-\infty, -1]$. *Barem: 2p monotonia, 3p limitele și concluzia.*

### 2. $f:(-3, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2 + 1}{\sqrt{x+3}}$

#### a) $\displaystyle\int_0^3 f(x)\sqrt{x+3}\,dx = 12$

Radicalul se simplifică: $f(x)\sqrt{x+3} = x^2 + 1$.

$$\int_0^3 (x^2 + 1)\,dx = \left(\frac{x^3}{3} + x\right)\Big|_0^3 = 9 + 3 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_{-2}^1 \frac{f(x)}{x^2 + 1}\,dx = 2$

$\dfrac{f(x)}{x^2+1} = \dfrac{1}{\sqrt{x+3}}$, iar $\left(2\sqrt{x+3}\right)' = \dfrac{1}{\sqrt{x+3}}$:

$$\int_{-2}^1 \frac{dx}{\sqrt{x+3}} = 2\sqrt{x+3}\,\Big|_{-2}^1 = 2\sqrt4 - 2\sqrt1 = 4 - 2 = 2.$$

*Barem: 3p primitiva, 2p calculul.*

#### c) $\displaystyle\int_0^1 \frac{1}{f(x)}\,dx \le \frac{\pi}{2}$

$\dfrac{1}{f(x)} = \dfrac{\sqrt{x+3}}{x^2+1}$. Pentru $x \in [0, 1]$ avem $x + 3 \le 4$, deci $\sqrt{x+3} \le 2$ și

$$\frac{1}{f(x)} \le \frac{2}{x^2 + 1}, \quad \forall x \in [0,1].$$

Integrala păstrează inegalitatea (monotonia integralei):

$$\int_0^1 \frac{dx}{f(x)} \le 2\int_0^1 \frac{dx}{x^2+1} = 2\operatorname{arctg} x\,\Big|_0^1 = 2\cdot\frac{\pi}{4} = \frac{\pi}{2}.$$

(Numeric, integrala este $\approx 1{,}456 < \frac{\pi}{2} \approx 1{,}571$.) *Barem: 3p majorarea integrandului, 2p calculul cu arctangentă.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = 2$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{3}{25}$ |
| I.6 | $x \in \{\frac{\pi}{4}, \frac{\pi}{2}\}$ |
| II.1.b | $a \in \mathbb R \setminus \{1\}$ |
| II.1.c | $(2,0,-2)$, $(3,-1,-2)$ |
| II.2.c | $(-1,-1)$, $(1,1)$ |
| III.1.b | $a \in \{0, 2\}$ |
| III.1.c | $(-\infty, -1]$ |

## Ce merită reținut din această simulare

- **Mulțimea numerelor de cel mult două cifre** include $0$: 100 de elemente, nu 99.
- **Sisteme compatibile nedeterminate**: scrie soluția cu un parametru, apoi impune condițiile (întregi, ordonare).
- **Legi pe intervale**: folosește marginile intervalului ($|ab| \le 1$) pentru a forța egalități.
- **Imaginea unei funcții**: tabel de variație + limite la capete; atenție la limitele care nu sunt atinse.
- **Inegalități cu integrale**: majorează integrandul pe interval, apoi integrează.

Rezolvarea completă a subiectului de **Bacalaureat 2016 la Matematică M_mate-info**, sesiunea de rezervă, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $24$, $1020$, $a$ termeni consecutivi ai unei progresii aritmetice

$24 + a = 2\cdot1020 \iff a = 2016$. *Barem: 3p, 2p.*

### 2. Parabola lui $f(x) = x^2 + 4x + m$ tangentă axei $Ox$

$\Delta = 16 - 4m = 0 \iff m = 4$. *Barem: 3p, 2p.*

### 3. $\left(\dfrac13\right)^{2x - 3} = 27$

$3^{-(2x - 3)} = 3^3 \iff -2x + 3 = 3 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{\sqrt1, \sqrt2, \dots, \sqrt{25}\}$ să fie rațional

$\sqrt k$ este rațional exact când $k$ este pătrat perfect: $k \in \{1, 4, 9, 16, 25\}$ — 5 din 25.

**Răspuns:** $p = \dfrac15$. *Barem: 1p, 2p, 2p.*

### 5. Dreapta prin $A(0,1)$ perpendiculară pe $BC$, $B(-2,-1)$, $C(2,3)$

$m_{BC} = \dfrac{3 + 1}{2 + 2} = 1$, deci $m_d = -1$ și $d: y = -x + 1$. *Barem: 2p, 3p.*

### 6. Raza cercului circumscris: $m(\angle A) = 45^\circ$, $BC = 2\sqrt2$

$$R = \frac{BC}{2\sin A} = \frac{2\sqrt2}{2\cdot\frac{\sqrt2}{2}} = 2.$$

**Răspuns:** $R = 2$. *Barem: 3p, 2p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} 1 & a & a^2\\ 1 & -1 & 1\\ 1 & 1 & -a\end{pmatrix}$, sistemul $\begin{cases} x + ay + a^2z = 0\\ x - y + z = 2\\ x + y - az = -4\end{cases}$

#### a) $\det(A(0)) = -1$

$$\begin{vmatrix} 1 & 0 & 0\\ 1 & -1 & 1\\ 1 & 1 & 0\end{vmatrix} = 0 + 0 + 0 - 0 - 1 - 0 = -1.$$

*Barem: 2p, 3p.*

#### b) $A(a)$ inversabilă pentru $a \ne -1$, $a \ne \frac13$

Sarrus: $\det A(a) = a + a + a^2 + a^2 - 1 + a^2 = 3a^2 + 2a - 1 = (3a - 1)(a + 1)$, nenul pentru $a \notin \left\{-1, \frac13\right\}$. $\blacksquare$ *Barem: 2p, 3p.*

#### c) $a$ pentru care sistemul are soluție unică cu $x_0 = y_0$

Soluție unică $\iff a \notin \{-1, \frac13\}$. Impunem $x_0 = y_0 = t$:

- a doua ecuație: $t - t + z_0 = 2 \Rightarrow z_0 = 2$;
- a treia: $2t - 2a = -4 \Rightarrow t = a - 2$;
- prima: $t(1 + a) + 2a^2 = 0 \Rightarrow (a - 2)(a + 1) + 2a^2 = 0 \iff 3a^2 - a - 2 = 0 \iff (3a + 2)(a - 1) = 0$.

Ambele valori sunt admise.

**Răspuns:** $a \in \left\{-\dfrac23, 1\right\}$. *Barem: 2p, 3p.*

### 2. Legea $x * y = -xy + 2x + 2y - 2$ (asociativă)

#### a) $x * y = 2 - (x - 2)(y - 2)$

$2 - (xy - 2x - 2y + 4) = -xy + 2x + 2y - 2$. *Barem: 2p, 3p.*

#### b) $x * x = 1$

$2 - (x - 2)^2 = 1 \iff (x - 2)^2 = 1 \iff x \in \{1, 3\}$.

**Răspuns:** $x \in \{1, 3\}$. *Barem: 2p, 3p.*

#### c) Dacă $m * n * p = 2$ ($m, n, p \in \mathbb Z$), atunci $2 \mid mnp$

Din a), $(x * y) - 2 = -(x - 2)(y - 2)$, deci $m * n * p - 2 = (m - 2)(n - 2)(p - 2)$. Condiția dă $(m - 2)(n - 2)(p - 2) = 0$, adică unul dintre numere este $2$, iar produsul $mnp$ este par. $\blacksquare$ *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = e^x + \ln x + 1$

#### a) $f'(x) = e^x + \dfrac1x$

Derivăm termen cu termen. *Barem: 2p, 3p.*

#### b) Tangenta în $x = 1$

$f(1) = e + 1$, $f'(1) = e + 1$: $y - (e + 1) = (e + 1)(x - 1) \iff y = (e + 1)x$. *Barem: 2p, 3p.*

#### c) $f(x) = 0$ are soluție unică în $(0, 1)$

$f' > 0$, deci $f$ strict crescătoare (cel mult o soluție). $\lim\limits_{x\searrow0} f(x) = 1 - \infty + 1 = -\infty$, $f(1) = e + 1 > 0$, iar $f$ e continuă: există (Darboux) exact o soluție în $(0, 1)$. $\blacksquare$ *Barem: 2p, 3p.*

### 2. $I_n = \displaystyle\int_0^1\frac{x^{n+1}}{x + 3}dx$

#### a) $I_0 = 1 + 3\ln\dfrac34$

$$I_0 = \int_0^1\left(1 - \frac{3}{x + 3}\right)dx = 1 - 3(\ln4 - \ln3) = 1 + 3\ln\frac34.$$

*Barem: 3p, 2p.*

#### b) $I_{n+1} + 3I_n = \dfrac{1}{n+2}$

$$I_{n+1} + 3I_n = \int_0^1\frac{x^{n+1}(x + 3)}{x + 3}dx = \int_0^1 x^{n+1}dx = \frac{1}{n + 2}.$$

*Barem: 3p, 2p.*

#### c) $\lim\limits_{n\to\infty} nI_n = \dfrac14$

Pe $[0,1]$, $x^{n+2} \le x^{n+1}$, deci $I_{n+1} \le I_n$ (șir descrescător, pozitiv). Din b):

$$4I_{n+1} \le I_{n+1} + 3I_n = \frac{1}{n+2} \le 4I_n.$$

Deci $I_n \ge \dfrac{1}{4(n+2)}$, iar scriind relația pentru $n - 1$: $I_n \le \dfrac{1}{4(n+1)}$. Atunci

$$\frac{n}{4(n+2)} \le nI_n \le \frac{n}{4(n+1)},$$

și ambele margini tind la $\dfrac14$. Criteriul cleștelui încheie. $\blacksquare$

(Baremul oficial ajunge la același rezultat integrând prin părți.) *Barem: 2p, 3p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a = 2016$ |
| I.2 | $m = 4$ |
| I.3 | $x = 0$ |
| I.4 | $p = \tfrac15$ |
| I.5 | $y = -x + 1$ |
| I.6 | $R = 2$ |
| II.1.c | $a \in \{-\tfrac23, 1\}$ |
| II.2.b | $x \in \{1, 3\}$ |
| III.1.b | $y = (e+1)x$ |
| III.2.c | $\tfrac14$ |

## Ce merită reținut din varianta 5

- **$\sqrt k \in \mathbb Q$** doar pentru $k$ pătrat perfect.
- **Condiții pe soluția unui sistem**: impune condiția ($x = y$) direct în ecuații — e mai rapid decât regula lui Cramer.
- **Legea $2 - (x-2)(y-2)$**: compunerea a trei elemente dă $2 + (m-2)(n-2)(p-2)$.
- **$\lim nI_n$**: monotonie + recurență = încadrare + clește.

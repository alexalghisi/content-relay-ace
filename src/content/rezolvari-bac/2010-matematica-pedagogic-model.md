Rezolvarea completă a **modelului de subiect pentru Bacalaureat 2010 la Matematică, filiera vocațională, profilul pedagogic** (specializarea învățător-educatoare). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Probabilitatea ca un element din $\{0, 1, 2, 3, 4\}$ să fie soluție a ecuației $x^2 - 4x + 3 = 0$

$x^2 - 4x + 3 = (x - 1)(x - 3) = 0 \iff x \in \{1, 3\}$. Ambele soluții sunt în mulțime: **2 cazuri favorabile** din **5 posibile**.

$$P = \frac25.$$

*Barem: 2p soluțiile, 3p probabilitatea.*

### 2. Suma $S = 1 + 2 + 3 + \dots + 40$

Formula lui Gauss $1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$:

$$S = \frac{40\cdot 41}{2} = 820.$$

**Răspuns:** $820$. *Barem: 3p, 2p.*

### 3. $m$ pentru care $x^2 - 4mx + 1 = 0$ are soluții reale

Soluții reale $\iff \Delta \ge 0$:

$$\Delta = 16m^2 - 4 \ge 0 \iff m^2 \ge \frac14 \iff |m| \ge \frac12.$$

**Răspuns:** $m \in \left(-\infty, -\frac12\right] \cup \left[\frac12, +\infty\right)$. *Barem: 2p $\Delta$, 3p mulțimea.*

### 4. Distanța de la $A(1, 2)$ la dreapta $d: x + y + 1 = 0$

$$d(A, d) = \frac{|ax_A + by_A + c|}{\sqrt{a^2 + b^2}} = \frac{|1 + 2 + 1|}{\sqrt{1 + 1}} = \frac{4}{\sqrt2} = 2\sqrt2.$$

**Răspuns:** $2\sqrt2$. *Barem: 3p formula, 2p calculul.*

### 5. Ecuația $7^{2x} - 8\cdot 7^x + 7 = 0$

Notăm $y = 7^x > 0$: $y^2 - 8y + 7 = 0 \iff (y - 1)(y - 7) = 0$.

- $y = 1 \Rightarrow 7^x = 1 \Rightarrow x = 0$;
- $y = 7 \Rightarrow 7^x = 7 \Rightarrow x = 1$.

**Răspuns:** $x \in \{0, 1\}$. *Barem: 1p, 2p, 2p.*

### 6. $\dfrac12\cos 135^\circ + 3\sin 135^\circ$

$\cos 135^\circ = -\cos 45^\circ = -\dfrac{\sqrt2}{2}$, $\sin 135^\circ = \sin 45^\circ = \dfrac{\sqrt2}{2}$.

$$\frac12\cdot\left(-\frac{\sqrt2}{2}\right) + 3\cdot\frac{\sqrt2}{2} = -\frac{\sqrt2}{4} + \frac{6\sqrt2}{4} = \frac{5\sqrt2}{4}.$$

**Răspuns:** $\dfrac{5\sqrt2}{4}$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

Pe $\mathbb Z$: $x * y = xy + 2x + 2y + a$, $a \in \mathbb Z$.

### a) $a$ știind că legea admite element neutru

Legea este comutativă, deci e suficient $x * e = x$ pentru orice $x \in \mathbb Z$:

$$xe + 2x + 2e + a = x \iff (e + 2)x + 2e + a = x,\ \forall x \iff \begin{cases} e + 2 = 1\\ 2e + a = 0\end{cases}$$

Rezultă $e = -1$ și $a = 2$.

**Răspuns:** $a = 2$ (elementul neutru $e = -1$). *Barem: 1p, 2p, 2p.*

### b) Pentru $a = 2$, legea este asociativă

Pentru $a = 2$: $x * y = (x + 2)(y + 2) - 2$.

$$(x * y) * z = (x+2)(y+2)(z+2) - 2 = xyz + 2(xy + yz + zx) + 4(x + y + z) + 6,$$

și, la fel, $x * (y * z) = (x+2)(y+2)(z+2) - 2$ — aceeași expresie. Deci legea este asociativă. *Barem: 1p, 2p, 2p.*

### c) $(x + y + 2) * z = (x * z) + (y * z) + 2$

$$(x + y + 2) * z = (x + y + 4)(z + 2) - 2,$$

$$(x * z) + (y * z) + 2 = (x+2)(z+2) - 2 + (y+2)(z+2) - 2 + 2 = (x + y + 4)(z + 2) - 2.$$

Membrii sunt egali. $\blacksquare$ *Barem: 2p, 2p, 1p.*

### d) $M = \{x \in \mathbb Z \mid \exists x' \in \mathbb Z,\ x * x' = -1\}$

$$(x + 2)(x' + 2) - 2 = -1 \iff (x+2)(x'+2) = 1 \iff x' = -2 + \frac{1}{x + 2}.$$

$x' \in \mathbb Z \iff (x + 2) \mid 1 \iff x + 2 \in \{-1, 1\} \iff x \in \{-3, -1\}$.

**Răspuns:** $M = \{-3, -1\}$ (elementele simetrizabile). *Barem: 2p, 2p, 1p.*

### e) $x, y \in \mathbb Z$ cu $x * y = 3$

$(x + 2)(y + 2) = 5$. Descompunerile lui 5 în produs de doi întregi: $1\cdot 5$, $5\cdot 1$, $(-1)\cdot(-5)$, $(-5)\cdot(-1)$.

**Răspuns:** $(x, y) \in \{(-1, 3),\ (3, -1),\ (-3, -7),\ (-7, -3)\}$. *Barem: 1p, 4p.*

### f) $a \in \mathbb Z$ astfel încât $H = \{-3, -1\}$ să fie parte stabilă

Calculăm, pentru $a$ arbitrar:

- $(-3) * (-3) = 9 - 6 - 6 + a = a - 3$ și $(-1) * (-1) = 1 - 2 - 2 + a = a - 3$; trebuie $a - 3 \in \{-3, -1\}$, deci $a \in \{0, 2\}$;
- $(-3) * (-1) = (-1) * (-3) = 3 - 6 - 2 + a = a - 5$; trebuie $a - 5 \in \{-3, -1\}$, deci $a \in \{2, 4\}$.

**Răspuns:** $a = 2$. *Barem: 2p, 2p, 1p.*

## Subiectul al III-lea (30 de puncte)

$D = \begin{vmatrix} 1 & a & a^2\\ 1 & b & b^2\\ 1 & c & c^2\end{vmatrix}$ (determinant Vandermonde).

### a) $D$ pentru $a = 1$, $b = 2$, $c = 3$

$$D = \begin{vmatrix} 1 & 1 & 1\\ 1 & 2 & 4\\ 1 & 3 & 9\end{vmatrix} = 18 + 4 + 3 - 2 - 12 - 9 = 2.$$

**Răspuns:** $D = 2$. *Barem: 2p, 3p.*

### b) Dacă $a = b$, atunci $D = 0$

Pentru $a = b$, primele două linii sunt egale, iar un determinant cu două linii egale este nul. *Barem: 2p, 3p.*

### c) Pentru $b = 2$, $c = 3$: $a$ cu $D = 2$

$$D = \begin{vmatrix} 1 & a & a^2\\ 1 & 2 & 4\\ 1 & 3 & 9\end{vmatrix} = 18 + 4a + 3a^2 - 2a^2 - 12 - 9a = a^2 - 5a + 6.$$

$a^2 - 5a + 6 = 2 \iff a^2 - 5a + 4 = 0 \iff (a - 1)(a - 4) = 0$.

**Răspuns:** $a \in \{1, 4\}$. *Barem: 2p, 1p, 2p.*

### d) $D = (b - a)(c - a)(c - b)$

Scădem prima linie din celelalte două:

$$D = \begin{vmatrix} 1 & a & a^2\\ 0 & b - a & b^2 - a^2\\ 0 & c - a & c^2 - a^2\end{vmatrix} = (b-a)(c-a)\begin{vmatrix} 1 & a & a^2\\ 0 & 1 & b + a\\ 0 & 1 & c + a\end{vmatrix} = (b-a)(c-a)(c + a - b - a) = (b-a)(c-a)(c-b).$$

*Barem: 2p, 3p.*

### e) Dacă $D = 0$, cel puțin două numere sunt egale

$(b - a)(c - a)(c - b) = 0$ implică $b = a$ sau $c = a$ sau $c = b$. $\blacksquare$ *Barem: 3p, 2p.*

### f) Dacă $a, b, c \in \mathbb Z$, atunci $D$ este par

Fiecare întreg este par sau impar, deci dintre trei întregi cel puțin doi au aceeași paritate (principiul cutiei). Diferența lor este pară, iar această diferență apare ca factor în $D = (b-a)(c-a)(c-b)$. Așadar $D$ este par. $\blacksquare$ *Barem: 3p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $P = \tfrac25$ |
| I.2 | $820$ |
| I.3 | $m \in (-\infty, -\tfrac12] \cup [\tfrac12, +\infty)$ |
| I.4 | $2\sqrt2$ |
| I.5 | $x \in \{0, 1\}$ |
| I.6 | $\tfrac{5\sqrt2}{4}$ |
| II.a | $a = 2$, $e = -1$ |
| II.d | $M = \{-3, -1\}$ |
| II.e | $(-1,3), (3,-1), (-3,-7), (-7,-3)$ |
| II.f | $a = 2$ |
| III.a | $D = 2$ |
| III.c | $a \in \{1, 4\}$ |

## Ce merită reținut din model

- **Determinantul Vandermonde** $\begin{vmatrix} 1 & a & a^2\\ 1 & b & b^2\\ 1 & c & c^2\end{vmatrix} = (b-a)(c-a)(c-b)$ — merită știut pe de rost.
- **Legea $xy + 2x + 2y + 2 = (x+2)(y+2) - 2$**: forma factorizată face ușoare asociativitatea, simetricele și ecuațiile în $\mathbb Z$.
- **Ecuații în numere întregi** de forma $(x+2)(y+2) = 5$: enumeră divizorii (inclusiv cei negativi).
- **Principiul cutiei**: din trei întregi, doi au aceeași paritate.

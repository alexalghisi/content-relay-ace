Rezolvarea completă a **simulării pentru elevii clasei a XII-a, Bacalaureat 2014, la Matematică M_șt-nat**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Conjugatul numărului $z = 1 + i + i^2 + i^3 + i^4 + i^5 + i^6$

Puterile lui $i$ se repetă din 4 în 4: $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, $i^5 = i$, $i^6 = -1$.

$$z = 1 + i - 1 - i + 1 + i - 1 = i \Rightarrow \bar z = -i.$$

**Răspuns:** $\bar z = -i$. *Barem: 3p, 2p.*

### 2. Valoarea maximă a funcției $f(x) = -x^2 + 4x - 5$

$a = -1 < 0$, $\Delta = 16 - 20 = -4$. Maximul este

$$-\frac{\Delta}{4a} = -\frac{-4}{-4} = -1$$

(atins în $x = 2$: $f(2) = -4 + 8 - 5 = -1$). **Răspuns:** $-1$. *Barem: 2p, 3p.*

### 3. Ecuația $3 - \sqrt{x^2 + 3} = x$

$\sqrt{x^2 + 3} = 3 - x$, cu condiția $3 - x \ge 0$. Ridicăm la pătrat:

$$x^2 + 3 = 9 - 6x + x^2 \iff 6x = 6 \iff x = 1.$$

Verificare: $3 - \sqrt4 = 1$ ✔. **Răspuns:** $x = 1$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr de două cifre să aibă cifrele distincte

Numere de două cifre: **90**. Cu cifre egale: $11, 22, \dots, 99$ — 9, deci cu cifre distincte: **81**.

$$p = \frac{81}{90} = \frac{9}{10}.$$

*Barem: 2p, 1p, 2p.*

### 5. Aria triunghiului cu $A(2, 3)$, $B(4, 0)$, $C(2, 0)$

$AC$ este verticală ($x = 2$), cu $AC = 3$; $BC$ este pe $Ox$, cu $BC = 2$; deci $m(\angle C) = 90^\circ$.

$$\mathcal A = \frac{AC\cdot BC}{2} = \frac{3\cdot 2}{2} = 3.$$

**Răspuns:** $3$. *Barem: 3p, 2p.*

### 6. $(\sin x + \cos x)^2 + (\sin x - \cos x)^2 = 2$

$$(\sin x + \cos x)^2 = 1 + 2\sin x\cos x, \qquad (\sin x - \cos x)^2 = 1 - 2\sin x\cos x.$$

Suma este $2$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $D(a, b) = \begin{vmatrix} 1 & 1 & 1\\ 1 & a & b\\ 1 & a^2 & b^2\end{vmatrix}$

#### a) $D(1, 0)$

$$D(1, 0) = \begin{vmatrix} 1 & 1 & 1\\ 1 & 1 & 0\\ 1 & 1 & 0\end{vmatrix} = 0$$

(ultimele două linii sunt egale). **Răspuns:** $0$. *Barem: 2p, 3p.*

#### b) $D(a, b) = (a - 1)(b - 1)(b - a)$

Scădem prima coloană din celelalte două:

$$D = \begin{vmatrix} 1 & 0 & 0\\ 1 & a - 1 & b - 1\\ 1 & a^2 - 1 & b^2 - 1\end{vmatrix} = (a-1)(b-1)\begin{vmatrix} 1 & 1\\ a + 1 & b + 1\end{vmatrix} = (a-1)(b-1)(b - a).$$

*Barem: 2p, 3p.*

#### c) $D(m, n)$ este par pentru orice $m, n \in \mathbb Z$

$D(m, n) = (m-1)(n-1)(n-m)$.

- dacă $m$ și $n$ au aceeași paritate, $n - m$ este par;
- dacă au parități diferite, unul dintre $m - 1$, $n - 1$ este par.

În ambele cazuri produsul este par. $\blacksquare$ *Barem: 1p, 2p, 2p.*

### 2. Inelul $(\mathbb Z_6, +, \cdot)$

#### a) Ecuația $\hat 3x + \hat 2 = \hat 5$

$\hat 3x = \hat 3$. Încercăm toate elementele: $\hat 3\cdot\hat 1 = \hat 3$, $\hat 3\cdot\hat 3 = \hat 9 = \hat 3$, $\hat 3\cdot\hat 5 = \widehat{15} = \hat 3$, iar pentru $x$ par $\hat 3x = \hat 0$.

**Răspuns:** $x \in \{\hat 1, \hat 3, \hat 5\}$. *Barem: 2p, 3p.*

#### b) Mulțimea valorilor funcției $f(x) = x^3 - x$

$\hat 0^3 = \hat 0$, $\hat 1^3 = \hat 1$, $\hat 2^3 = \hat 8 = \hat 2$, $\hat 3^3 = \widehat{27} = \hat 3$, $\hat 4^3 = \widehat{64} = \hat 4$, $\hat 5^3 = \widehat{125} = \hat 5$. Deci $x^3 = x$ pentru orice $x \in \mathbb Z_6$ și $f(x) = \hat 0$.

**Răspuns:** $\operatorname{Im} f = \{\hat 0\}$. *Barem: 3p, 2p.*

#### c) Numărul elementelor mulțimii $H = \{x^{10} \mid x \in \mathbb Z_6\}$

Din b), $x^3 = x$, deci $x^9 = (x^3)^3 = x^3 = x$ și $x^{10} = x^2$. Pătratele: $\hat 0, \hat 1, \hat 4, \hat 9 = \hat 3, \widehat{16} = \hat 4, \widehat{25} = \hat 1$.

$H = \{\hat 0, \hat 1, \hat 3, \hat 4\}$. **Răspuns:** $4$ elemente. *Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = \frac1x + \ln x$

#### a) $\lim\limits_{x\to 2}\dfrac{f(x) - f(2)}{x - 2}$

Limita este $f'(2)$. $f'(x) = -\dfrac{1}{x^2} + \dfrac1x$, deci $f'(2) = -\frac14 + \frac12 = \frac14$.

**Răspuns:** $\dfrac14$. *Barem: 2p, 3p.*

#### b) Tangenta în punctul de abscisă $x = 1$

$f(1) = 1$, $f'(1) = -1 + 1 = 0$, deci tangenta este $y = 1$.

**Răspuns:** $y = 1$. *Barem: 2p, 3p.*

#### c) $f(x) \ge 1$ pentru orice $x > 0$

$f'(x) = \dfrac{x - 1}{x^2}$: $f' \le 0$ pe $(0, 1]$ ($f$ descrescătoare), $f' \ge 0$ pe $[1, +\infty)$ ($f$ crescătoare). Minimul global este $f(1) = 1$, deci $f(x) \ge 1$. $\blacksquare$ *Barem: 2p, 2p, 1p.*

### 2. $f:(-1, +\infty) \to \mathbb R$, $f(x) = \dfrac{x^2}{x + 1}$

#### a) $\displaystyle\int_0^1 (x + 1)f(x)\,dx$

$$\int_0^1 x^2\,dx = \frac{x^3}{3}\Big|_0^1 = \frac13.$$

**Răspuns:** $\dfrac13$. *Barem: 2p, 3p.*

#### b) $\displaystyle\int_1^e (x + 1)f(x)\ln x\,dx$

Prin părți ($u = \ln x$, $v' = x^2$):

$$\int_1^e x^2\ln x\,dx = \frac{x^3}{3}\ln x\Big|_1^e - \int_1^e\frac{x^2}{3}\,dx = \frac{e^3}{3} - \frac{e^3 - 1}{9} = \frac{2e^3 + 1}{9}.$$

**Răspuns:** $\dfrac{2e^3 + 1}{9}$. *Barem: 2p, 3p.*

#### c) $F(e - 1) = \dfrac{e^2 - 4e + 7}{2}$, unde $F$ este primitiva lui $f$ cu $F(0) = 1$

$\dfrac{x^2}{x + 1} = x - 1 + \dfrac{1}{x + 1}$, deci

$$F(x) = \frac{x^2}{2} - x + \ln(x + 1) + c, \qquad F(0) = c = 1.$$

$$F(e - 1) = \frac{(e-1)^2}{2} - (e - 1) + \ln e + 1 = \frac{e^2 - 2e + 1}{2} - e + 3 = \frac{e^2 - 4e + 7}{2}. \ \blacksquare$$

*Barem: 3p, 1p, 1p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $\bar z = -i$ |
| I.2 | $-1$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{9}{10}$ |
| I.5 | $3$ |
| II.1.a | $0$ |
| II.2.a | $x \in \{\hat 1, \hat 3, \hat 5\}$ |
| II.2.b | $\{\hat 0\}$ |
| II.2.c | $4$ |
| III.1.a | $\tfrac14$ |
| III.1.b | $y = 1$ |
| III.2.a | $\tfrac13$ |
| III.2.b | $\tfrac{2e^3+1}{9}$ |

## Ce merită reținut din simulare

- **Puterile lui $i$** au perioada 4: $i, -1, -i, 1$.
- **În $\mathbb Z_6$, $x^3 = x$** pentru orice $x$ — util la puteri mari.
- **Paritatea unui produs**: e suficient ca un singur factor să fie par.
- **Fracții raționale improprii** ($\frac{x^2}{x+1}$) se împart întâi, apoi se integrează.

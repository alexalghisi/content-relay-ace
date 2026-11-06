Rezolvarea completă a subiectului de **Bacalaureat 2014 la Matematică M_tehnologic**, sesiunea de rezervă, **varianta 3**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1 + \sqrt2)^2 - 2\sqrt2 = 3$

$$(1 + \sqrt2)^2 = 1 + 2\sqrt2 + 2 = 3 + 2\sqrt2, \qquad 3 + 2\sqrt2 - 2\sqrt2 = 3.$$

*Barem: 3p + 2p.*

### 2. Intersecția graficului lui $f(x) = x - 1$ cu $Ox$

$f(x) = 0 \iff x = 1$. **Răspuns:** punctul $(1, 0)$. *Barem: 3p + 2p.*

### 3. Ecuația $3^{x+1} = 3^2$

$x + 1 = 2 \iff x = 1$. *Barem: 3p + 2p.*

### 4. Probabilitatea ca un număr natural de o cifră să fie divizor al lui $8$

Numere de o cifră: $0, 1, \dots, 9$ — 10 cazuri posibile. Divizori ai lui $8$: $1, 2, 4, 8$ — 4 favorabile.

$$p = \frac{4}{10} = \frac25.$$

*Barem: 2p + 1p + 2p.*

### 5. Triunghiul $A(1,1)$, $B(3,1)$, $C(3,3)$ este isoscel

$AB = 3 - 1 = 2$ (segment orizontal), $BC = 3 - 1 = 2$ (segment vertical). $AB = BC$, deci triunghiul este isoscel. *Barem: 2p + 3p.*

### 6. Triunghi dreptunghic în $A$, $BC = 10$, $C = 30^\circ$; aflați $AB$

$AB$ este cateta opusă unghiului $C$:

$$\sin C = \frac{AB}{BC} \Rightarrow AB = 10\cdot\frac12 = 5.$$

*Barem: 2p + 3p.*

## Subiectul al II-lea (30 de puncte)

### 1. $A = \begin{pmatrix} a & 1\\ 8 & 3\end{pmatrix}$, $B = \begin{pmatrix} 1 & 1\\ 8 & 3\end{pmatrix}$, $a \in \mathbb Z$

#### a) $\det B = -5$

$$\det B = 3 - 8 = -5.$$

*Barem: 2p + 3p.*

#### b) $\det A \ne 0$ pentru orice $a$ întreg

$\det A = 3a - 8$. $3a - 8 = 0 \iff a = \frac83 \notin \mathbb Z$, deci pentru $a$ întreg $\det A \ne 0$. *Barem: 3p + 2p.*

#### c) $a$ întreg pentru care $A^{-1}$ are toate elementele întregi

$$A^{-1} = \frac{1}{3a - 8}\begin{pmatrix} 3 & -1\\ -8 & a\end{pmatrix}.$$

Elementul $\dfrac{-1}{3a - 8}$ trebuie să fie întreg, deci $3a - 8 \in \{-1, 1\}$:

- $3a - 8 = -1 \Rightarrow a = \frac73 \notin \mathbb Z$;
- $3a - 8 = 1 \Rightarrow a = 3$; atunci $A^{-1} = \begin{pmatrix} 3 & -1\\ -8 & 3\end{pmatrix}$, cu elemente întregi.

**Răspuns:** $a = 3$. *Barem: 3p + 1p + 1p.*

### 2. $x * y = xy - 5x - 5y + 30$

#### a) $1 * 5 = 5$

$$5 - 5 - 25 + 30 = 5.$$

*Barem: 3p + 2p.*

#### b) $x * y = (x-5)(y-5) + 5$

$$xy - 5x - 5y + 25 + 5 = x(y-5) - 5(y-5) + 5 = (x-5)(y-5) + 5.$$

*Barem: 2p + 3p.*

#### c) $x * x = x$

$$(x-5)^2 + 5 = x \iff x^2 - 11x + 30 = 0 \iff (x-5)(x-6) = 0.$$

**Răspuns:** $x \in \{5, 6\}$. *Barem: 3p + 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f(x) = x^2 - x$

#### a) $f'(x) = 2x - 1$

$(x^2)' - x' = 2x - 1$. *Barem: 2p + 3p.*

#### b) $\lim\limits_{x\to+\infty}\dfrac{f(x)}{x^2}$

$$\lim_{x\to+\infty}\frac{x^2 - x}{x^2} = \lim_{x\to+\infty}\left(1 - \frac1x\right) = 1.$$

*Barem: 2p + 3p.*

#### c) Tangenta în $x_0 = 1$

$f(1) = 0$, $f'(1) = 1$, deci $y = x - 1$. *Barem: 2p + 3p.*

### 2. $f:(0,+\infty)\to\mathbb R$, $f(x) = 2x + \frac1x$

#### a) $\displaystyle\int_1^e\frac1x\,dx = 1$

$$\ln x\Big|_1^e = 1 - 0 = 1.$$

*Barem: 3p + 2p.*

#### b) $F(x) = x^2 + \ln x + 2$ este primitivă a lui $f$

$$F'(x) = 2x + \frac1x = f(x).$$

*Barem: 3p + 2p.*

#### c) Aria pe $[1,2]$ este strict mai mică decât $4$

$f > 0$ pe $[1,2]$, deci

$$\mathcal A = \int_1^2\left(2x + \frac1x\right)dx = (x^2 + \ln x)\Big|_1^2 = 4 + \ln2 - 1 = 3 + \ln2.$$

Cum $2 < e$, $\ln2 < 1$, deci $\mathcal A < 4$. $\blacksquare$ *Barem: 3p + 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $(1, 0)$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac25$ |
| I.6 | $AB = 5$ |
| II.1.c | $a = 3$ |
| II.2.c | $x \in \{5, 6\}$ |
| III.1.b | $1$ |
| III.1.c | $y = x - 1$ |
| III.2.c | $3 + \ln2 < 4$ |

## Ce merită reținut din varianta 3

- **Inversa unei matrice cu elemente întregi** are elemente întregi când $\det = \pm1$ (aici, impus de un element $\pm1$ din adjunctă).
- **Cateta opusă unghiului de $30^\circ$** este jumătate din ipotenuză.
- **Numerele naturale de o cifră** includ și $0$ — 10 cazuri posibile.
- **Estimări cu $\ln$**: $\ln2 < \ln e = 1$.

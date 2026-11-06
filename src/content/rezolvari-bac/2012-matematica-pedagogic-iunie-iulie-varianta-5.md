Rezolvarea completă a subiectului de **Bacalaureat 2012 la Matematică, filiera vocațională, profilul pedagogic**, sesiunea iunie–iulie, **varianta 5**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. $\lg 100 + \lg\frac{1}{10}$

$$\lg 100 + \lg\frac{1}{10} = \lg\left(100\cdot\frac{1}{10}\right) = \lg 10 = 1.$$

(Sau: $2 + (-1) = 1$.) **Răspuns:** $1$. *Barem: 3p, 2p.*

### 2. Mulțimea valorilor funcției $f:\{-1, 0, 1\} \to \mathbb R$, $f(x) = -x + 2$

$f(-1) = 3$, $f(0) = 2$, $f(1) = 1$.

**Răspuns:** $\operatorname{Im} f = \{1, 2, 3\}$. *Barem: 3p, 2p.*

### 3. Vârful parabolei asociate funcției $f(x) = x^2 + 2x - 1$

$$x_V = -\frac{b}{2a} = -1, \qquad y_V = f(-1) = 1 - 2 - 1 = -2 \quad\left(= -\frac{\Delta}{4a} = -\frac{8}{4}\right).$$

**Răspuns:** $V(-1, -2)$. *Barem: 2p, 3p.*

### 4. Ecuația $3^{2x+1} = 9$

$9 = 3^2$, deci $2x + 1 = 2 \iff x = \dfrac12$.

**Răspuns:** $x = \dfrac12$. *Barem: 2p, 3p.*

### 5. Distanța de la $A(1, 2)$ la $B(2, 0)$

$$AB = \sqrt{(2-1)^2 + (0-2)^2} = \sqrt{1 + 4} = \sqrt5.$$

**Răspuns:** $\sqrt5$. *Barem: 3p, 2p.*

### 6. $\sin^2 10^\circ + \sin^2 80^\circ$

Unghiurile sunt complementare: $\sin 80^\circ = \cos 10^\circ$. Atunci

$$\sin^2 10^\circ + \cos^2 10^\circ = 1.$$

**Răspuns:** $1$. *Barem: 2p, 3p.*

## Subiectul al II-lea (30 de puncte)

Pe $M = \left(\frac13, +\infty\right)$: $x \circ y = xy - \frac13x - \frac13y + \frac49$.

### a) $x \circ y = \left(x - \frac13\right)\left(y - \frac13\right) + \frac13$

$$\left(x - \frac13\right)\left(y - \frac13\right) + \frac13 = xy - \frac13x - \frac13y + \frac19 + \frac39 = xy - \frac13x - \frac13y + \frac49 = x \circ y.$$

*Barem: 1p, 2p, 2p.*

### b) $x \circ y = y \circ x$

$x \circ y = xy - \frac13x - \frac13y + \frac49$ și $y \circ x = yx - \frac13y - \frac13x + \frac49$ — aceeași expresie (înmulțirea și adunarea numerelor reale sunt comutative). *Barem: 2p, 2p, 1p.*

### c) Legea este asociativă

Din a):

$$(x \circ y)\circ z = \left(x - \tfrac13\right)\left(y - \tfrac13\right)\left(z - \tfrac13\right) + \tfrac13 = x \circ (y \circ z),$$

deoarece $x \circ y - \frac13 = \left(x - \frac13\right)\left(y - \frac13\right)$. *Barem: 2p, 2p, 1p.*

### d) Elementul neutru $e \in M$

Legea fiind comutativă, e suficient $x \circ e = x$:

$$\left(x - \frac13\right)\left(e - \frac13\right) + \frac13 = x \iff \left(x - \frac13\right)\left(e - \frac13\right) = x - \frac13,\ \forall x \in M.$$

Cum $x - \frac13 \ne 0$, $e - \frac13 = 1$, adică $e = \frac43 \in M$.

**Răspuns:** $e = \dfrac43$. *Barem: 1p, 3p, 1p.*

### e) Ecuația $x \circ x = \frac49$

$$\left(x - \frac13\right)^2 + \frac13 = \frac49 \iff \left(x - \frac13\right)^2 = \frac19 \iff x - \frac13 = \pm\frac13 \iff x \in \left\{0, \frac23\right\}.$$

Cum $0 \notin M$, singura soluție este $x = \frac23$. (Echivalent: $x^2 - \frac23x = 0$.)

**Răspuns:** $x = \dfrac23$. *Barem: 2p, 2p, 1p.*

### f) $\left(a + \frac13\right)\circ 3\circ\left(a + \frac13\right) = \dfrac{8a^2 + 1}{3}$

Folosind forma de la a) (extinsă la trei elemente prin asociativitate):

$$\left(a + \tfrac13\right)\circ 3\circ\left(a + \tfrac13\right) = a\cdot\left(3 - \tfrac13\right)\cdot a + \frac13 = \frac83a^2 + \frac13 = \frac{8a^2 + 1}{3}. \ \blacksquare$$

*Barem: 2p, 3p.*

## Subiectul al III-lea (30 de puncte)

$A(m) = \begin{pmatrix} m & 1 & -1\\ 1 & m & -1\\ -1 & 1 & m\end{pmatrix}$ și sistemul $(S)$: $\begin{cases} mx + y - z = 1\\ x + my - z = 1\\ -x + y + mz = 1\end{cases}$

### a) $\det(A(2))$

$$\det A(2) = \begin{vmatrix} 2 & 1 & -1\\ 1 & 2 & -1\\ -1 & 1 & 2\end{vmatrix} = 8 + 1 - 1 - 2 + 2 - 2 = 6.$$

**Răspuns:** $6$. *Barem: 2p, 3p.*

### b) $\det(A(m)) = m^3 - m$

Regula lui Sarrus:

$$\det A(m) = m^3 + 1 - 1 - \big(m - m + m\big) = m^3 - m.$$

(Termenii: $m\cdot m\cdot m$, $1\cdot(-1)\cdot(-1)$, $(-1)\cdot 1\cdot 1$, minus $(-1)\cdot m\cdot(-1)$, $m\cdot(-1)\cdot 1$, $1\cdot 1\cdot m$.) *Barem: 2p, 3p.*

### c) $m$ cu $\det(A(m)) = 0$

$$m^3 - m = m(m - 1)(m + 1) = 0 \iff m \in \{-1, 0, 1\}.$$

**Răspuns:** $m \in \{-1, 0, 1\}$. *Barem: 2p, 3p.*

### d) Pentru $m = 3$, $\left(\frac13, \frac13, \frac13\right)$ este soluție

$$3\cdot\tfrac13 + \tfrac13 - \tfrac13 = 1,\quad \tfrac13 + 3\cdot\tfrac13 - \tfrac13 = 1,\quad -\tfrac13 + \tfrac13 + 3\cdot\tfrac13 = 1. \ ✔$$

*Barem: 2p, 3p.*

### e) Rezolvați sistemul pentru $m = 2$

$$\begin{cases} 2x + y - z = 1\\ x + 2y - z = 1\\ -x + y + 2z = 1\end{cases}$$

$\det A(2) = 6 \ne 0$ (sistem Cramer). Scăzând primele două ecuații: $x - y = 0$, deci $y = x$. Rămân $3x - z = 1$ și $2z = 1$, de unde $z = \frac12$ și $x = \frac12$.

**Răspuns:** $(x, y, z) = \left(\dfrac12, \dfrac12, \dfrac12\right)$. *Barem: 1p, 4p.*

### f) Pentru $m = 0$ sistemul nu are soluții

$$\begin{cases} y - z = 1\\ x - z = 1\\ -x + y = 1\end{cases}$$

Scăzând primele două ecuații: $y - x = 0$. Înlocuind în a treia: $0 = 1$, imposibil. Deci sistemul este incompatibil. $\blacksquare$ *Barem: 1p, 2p, 2p.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $\{1, 2, 3\}$ |
| I.3 | $V(-1, -2)$ |
| I.4 | $x = \tfrac12$ |
| I.5 | $\sqrt5$ |
| I.6 | $1$ |
| II.d | $e = \tfrac43$ |
| II.e | $x = \tfrac23$ |
| III.a | $6$ |
| III.c | $m \in \{-1, 0, 1\}$ |
| III.e | $(\tfrac12, \tfrac12, \tfrac12)$ |

## Ce merită reținut din varianta 5

- **Unghiuri complementare**: $\sin(90^\circ - x) = \cos x$, deci $\sin^2 x + \sin^2(90^\circ - x) = 1$.
- **Legea $(x-a)(y-a) + a$**: asociativă, comutativă, cu elementul neutru $a + 1$.
- **Verifică apartenența la mulțime**: soluțiile ecuațiilor cu legi definite pe intervale trebuie să fie în $M$.
- **Sistem incompatibil**: combinațiile de ecuații duc la o contradicție de tipul $0 = 1$.

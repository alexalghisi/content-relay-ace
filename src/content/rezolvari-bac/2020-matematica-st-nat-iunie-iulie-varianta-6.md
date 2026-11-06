Rezolvarea completă a subiectului de **Bacalaureat 2020 la Matematică M_șt-nat**, sesiunea iunie–iulie, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică cu $a_1 = 2$, $r = 3$: calculați $a_3$

$a_3 = a_1 + 2r = 2 + 6 = 8$. *Barem: 3p, 2p.*

### 2. $f(x) = 2x + 1$: numerele reale $x$ cu $f(x^2) = 9$

$2x^2 + 1 = 9 \iff x^2 = 4 \iff x \in \{-2, 2\}$. *Barem: 3p, 2p.*

### 3. Ecuația $3^{2x+2} - 3^{2x} = 8$

Dăm factor comun $3^{2x}$: $3^{2x}(3^2 - 1) = 8 \iff 8\cdot 3^{2x} = 8 \iff 3^{2x} = 1 \iff x = 0$.

**Răspuns:** $x = 0$. *Barem: 3p, 2p.*

### 4. Probabilitatea ca un număr din $\{1, \dots, 9\}$ să fie divizor al lui $100$

9 cazuri posibile. Divizorii lui $100 = 2^2\cdot 5^2$ din mulțime: $1, 2, 4, 5$ — 4 cazuri favorabile.

$$p = \frac49.$$

*Barem: 2p, 2p, 1p.*

### 5. $P$ în planul paralelogramului $ABCD$: $\overrightarrow{PA} + \overrightarrow{PC} = \overrightarrow{PB} + \overrightarrow{PD}$

Fie $O = AC\cap BD$. Diagonalele se înjumătățesc, deci $O$ este mijlocul ambelor diagonale. Formula mijlocului dă

$$\overrightarrow{PO} = \frac12\left(\overrightarrow{PA} + \overrightarrow{PC}\right) = \frac12\left(\overrightarrow{PB} + \overrightarrow{PD}\right),$$

de unde egalitatea cerută. $\blacksquare$ *Barem: 3p, 2p.*

### 6. $\sin\left(x - \frac\pi4\right) + \cos\left(x + \frac\pi4\right) = 0$

$$\sin x\cos\tfrac\pi4 - \sin\tfrac\pi4\cos x + \cos x\cos\tfrac\pi4 - \sin x\sin\tfrac\pi4 = \tfrac{\sqrt2}{2}(\sin x - \cos x + \cos x - \sin x) = 0.\ \blacksquare$$

*Barem: 2p formulele, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix}12 + a & a\\ 1 + a & 3 + a\end{pmatrix}$

**a)** $A(0) = \begin{pmatrix}12 & 0\\ 1 & 3\end{pmatrix}$, $\det A(0) = 36 - 0 = 36$. $\blacksquare$ *Barem: 3p, 2p.*

**b)** $$A(a) - (12 + a)I_2 = \begin{pmatrix}0 & a\\ 1 + a & -9\end{pmatrix},\quad \det = 0 - a(1 + a) = -a(1+a).$$

$-a(1 + a) = 0 \iff a \in \{-1, 0\}$. *Barem: 3p, 2p.*

**c)** Fie $X = \begin{pmatrix}a & b\\ c & d\end{pmatrix}$ cu $X^2 = A(0)$:

$$X^2 = \begin{pmatrix}a^2 + bc & b(a + d)\\ c(a + d) & d^2 + bc\end{pmatrix} = \begin{pmatrix}12 & 0\\ 1 & 3\end{pmatrix}.$$

Din $c(a + d) = 1$ rezultă $a + d \ne 0$; atunci $b(a + d) = 0$ dă $b = 0$. Din $d^2 + bc = 3$: $d^2 = 3$, deci $d = \pm\sqrt3$ — număr irațional. $\blacksquare$

*Barem: 2p $X^2$, 3p concluzia.*

### 2. $x \circ y = x + \sqrt[3]{y} - 2$

**a)** $1 \circ 1 = 1 + 1 - 2 = 0$. *Barem: 3p, 2p.*

**b)** $x + \sqrt[3]a - 2 = x$ pentru orice $x \iff \sqrt[3]a = 2 \iff a = 8$.

**Răspuns:** $a = 8$. *Barem: 2p, 3p.*

**c)** $x \circ x^6 = x + \sqrt[3]{x^6} - 2 = x + x^2 - 2$, deci $x^2 + x - 2 = 4 \iff x^2 + x - 6 = 0 \iff x \in \{-3, 2\}$.

**Răspuns:** $x \in \{-3, 2\}$. *Barem: 3p, 2p.*

## Subiectul al III-lea (30 de puncte)

### 1. $f: (1, +\infty) \to \mathbb R$, $f(x) = x^2 - 2\sqrt{x^2 - 1}$

**a)** $$f'(x) = 2x - 2\cdot\frac{2x}{2\sqrt{x^2 - 1}} = 2x - \frac{2x}{\sqrt{x^2-1}} = 2x\left(1 - \frac{1}{\sqrt{x^2-1}}\right).\ \blacksquare$$

*Barem: 3p, 2p.*

**b)** $x^2 - f(x) = 2\sqrt{x^2 - 1}$, deci

$$\lim_{x\to+\infty}\frac{2\sqrt{x^2 - 1}}{x} = \lim_{x\to+\infty} 2\sqrt{1 - \frac1{x^2}} = 2.$$

**Răspuns:** $2$. *Barem: 3p, 2p.*

**c)** Intersecția cu $Ox$: $f(x) = 0 \iff x^2 = 2\sqrt{x^2-1} \iff x^4 = 4x^2 - 4 \iff (x^2 - 2)^2 = 0 \iff x^2 = 2$, deci $x = \sqrt2$ (cum $x > 1$).

În $A(\sqrt2, 0)$ panta tangentei este $f'(\sqrt2) = 2\sqrt2\left(1 - \frac{1}{1}\right) = 0$. Tangenta în $A$ este deci $y = 0$, adică axa $Ox$. $\blacksquare$

*Barem: 2p punctul, 3p panta și concluzia.*

### 2. $f(x) = \dfrac{x}{x^2 + 2x + 2}$

**a)** $$\int_0^1 (x^2 + 2x + 2)f(x)\,dx = \int_0^1 x\,dx = \frac{x^2}{2}\Big|_0^1 = \frac12.\ \blacksquare$$

*Barem: 2p, 3p.*

**b)** $f(x) + \dfrac{1}{x^2 + 2x + 2} = \dfrac{x + 1}{x^2 + 2x + 2} = \dfrac12\cdot\dfrac{(x^2 + 2x + 2)'}{x^2 + 2x + 2}$, deci

$$\int_0^2 \left(f(x) + \frac{1}{x^2+2x+2}\right)dx = \frac12\ln(x^2 + 2x + 2)\Big|_0^2 = \frac12(\ln 10 - \ln 2) = \frac12\ln 5.\ \blacksquare$$

*Barem: 2p primitiva, 3p calculul.*

**c)** $\dfrac{1}{f(x)} - 2 = \dfrac{x^2 + 2x + 2}{x} - 2 = x + \dfrac2x$, deci

$$\int_1^e\left(x + \frac2x\right)\ln x\,dx = \int_1^e x\ln x\,dx + 2\int_1^e (\ln x)'\ln x\,dx.$$

Prin părți, $\int_1^e x\ln x\,dx = \frac{x^2}{2}\ln x\Big|_1^e - \int_1^e\frac x2dx = \frac{e^2}{2} - \frac{e^2 - 1}{4} = \frac{e^2 + 1}{4}$, iar $2\int_1^e(\ln x)'\ln x\,dx = \ln^2 x\Big|_1^e = 1$.

$$\text{Total} = \frac{e^2 + 1}{4} + 1 = \frac{e^2 + 5}{4}.\ \blacksquare$$

*Barem: 3p descompunerea, 2p calculul.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 8$ |
| I.2 | $x \in \{-2, 2\}$ |
| I.3 | $x = 0$ |
| I.4 | $p = \tfrac49$ |
| II.1.b | $a \in \{-1, 0\}$ |
| II.2.b | $a = 8$ |
| II.2.c | $x \in \{-3, 2\}$ |
| III.1.b | $2$ |

## Ce merită reținut din varianta 6

- **Factor comun la exponențiale:** $3^{2x+2} - 3^{2x} = 3^{2x}(9 - 1)$.
- **Tangenta orizontală:** o dreaptă $y = 0$ e tangentă dacă $f(x_0) = 0$ și $f'(x_0) = 0$.
- **$\int \frac{u'}{u} = \ln|u|$** — caută derivata numitorului la numărător.

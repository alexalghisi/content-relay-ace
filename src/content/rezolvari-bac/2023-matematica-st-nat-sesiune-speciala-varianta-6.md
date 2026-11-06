Rezolvarea completă a subiectului de **Bacalaureat 2023 la Matematică M_șt-nat**, sesiunea specială, **varianta 6**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(\sqrt6 - 2\right)\left(\sqrt6 + 2\right) = 2$

Folosim formula diferenței de pătrate $(a - b)(a + b) = a^2 - b^2$:

$$\left(\sqrt6 - 2\right)\left(\sqrt6 + 2\right) = \left(\sqrt6\right)^2 - 2^2 = 6 - 4 = 2.$$

*Barem: 3p aplicarea formulei, 2p calculul.*

### 2. $f(x) = x^2 + 1$: determinați $a$ cu $f(a) = 1 - a$

$$a^2 + 1 = 1 - a \iff a^2 + a = 0 \iff a(a + 1) = 0 \iff a \in \{-1, 0\}.$$

Verificare: $f(0) = 1 = 1 - 0$ ✔; $f(-1) = 2 = 1 - (-1)$ ✔.

**Răspuns:** $a = -1$ sau $a = 0$. *Barem: 3p ecuația $a^2 + a = 0$, 2p soluțiile.*

### 3. Ecuația $\log_4\left(x^2 + 4\right) = \log_4(6x - 4)$

**Condiții de existență:** $x^2 + 4 > 0$ (mereu adevărat) și $6x - 4 > 0 \iff x > \dfrac23$.

Funcția logaritmică este injectivă, deci argumentele sunt egale:

$$x^2 + 4 = 6x - 4 \iff x^2 - 6x + 8 = 0 \iff (x - 2)(x - 4) = 0 \iff x \in \{2, 4\}.$$

**Verificare:** ambele valori sunt mai mari decât $\frac23$; $x = 2$: $\log_4 8 = \log_4 8$ ✔; $x = 4$: $\log_4 20 = \log_4 20$ ✔.

**Răspuns:** $x \in \{2, 4\}$. *Barem: 3p ecuația de gradul II, 2p soluțiile, cu precizarea că ele convin.*

### 4. Numere de două cifre, cu cifra zecilor impară, formate cu elemente din $\{1, 2, 3, 4, 5\}$

Enunțul nu cere cifre distincte, deci cifrele se pot repeta.

- cifra zecilor trebuie să fie impară: $\{1, 3, 5\}$ — 3 alegeri;
- cifra unităților: oricare din cele 5 elemente — 5 alegeri.

Regula produsului: $3 \cdot 5 = 15$ numere.

**Răspuns:** 15 numere. *Barem: 2p alegerea cifrei zecilor, 3p numărarea finală.*

### 5. $A(1, -5)$, $B(5, 5)$: distanța de la $O$ la mijlocul lui $AB$

Mijlocul: $M\left(\dfrac{1 + 5}{2}, \dfrac{-5 + 5}{2}\right) = M(3, 0)$.

$$OM = \sqrt{3^2 + 0^2} = 3.$$

**Răspuns:** $OM = 3$. *Barem: 3p coordonatele lui $M$, 2p distanța.*

### 6. Triunghi dreptunghic în $A$, $AC = 6$, $\operatorname{tg}C = \sqrt3$: aria este $18\sqrt3$

Într-un triunghi dreptunghic, tangenta unui unghi ascuțit este cateta opusă supra cateta alăturată. Pentru unghiul $C$: cateta opusă este $AB$, cea alăturată este $AC$.

$$\operatorname{tg}C = \frac{AB}{AC} \Rightarrow \frac{AB}{6} = \sqrt3 \Rightarrow AB = 6\sqrt3.$$

Aria triunghiului dreptunghic este semiprodusul catetelor:

$$\mathcal A_{ABC} = \frac{AB\cdot AC}{2} = \frac{6\sqrt3\cdot 6}{2} = 18\sqrt3.$$

*Barem: 3p calculul lui $AB$, 2p aria.*

## Subiectul al II-lea (30 de puncte)

### 1. Matricele $I_2$ și $A(a) = \begin{pmatrix}1 - a & a\\ -3a & 3a + 1\end{pmatrix}$

#### a) $\det(A(2)) = 5$

$A(2) = \begin{pmatrix}-1 & 2\\ -6 & 7\end{pmatrix}$, deci

$$\det(A(2)) = (-1)\cdot 7 - 2\cdot(-6) = -7 + 12 = 5.$$

*Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

#### b) $A(a) - I_2 = a\left(A(1) - I_2\right)$, pentru orice $a$ real

$$A(a) - I_2 = \begin{pmatrix}-a & a\\ -3a & 3a\end{pmatrix} = a\begin{pmatrix}-1 & 1\\ -3 & 3\end{pmatrix}.$$

Pe de altă parte, $A(1) = \begin{pmatrix}0 & 1\\ -3 & 4\end{pmatrix}$, deci $A(1) - I_2 = \begin{pmatrix}-1 & 1\\ -3 & 3\end{pmatrix}$ și $a\left(A(1) - I_2\right) = a\begin{pmatrix}-1 & 1\\ -3 & 3\end{pmatrix}$.

Cele două expresii coincid pentru orice $a$ real. *Barem: 2p $A(a) - I_2$, 3p $A(1)$ și concluzia.*

#### c) Numărul întreg $m$ pentru care $A(m)\cdot A(2m) = A(1)$

Calculăm întâi produsul general $A(a)A(b)$. Din b), $A(a) = I_2 + aB$, unde $B = \begin{pmatrix}-1 & 1\\ -3 & 3\end{pmatrix}$. Avem

$$B^2 = \begin{pmatrix}1 - 3 & -1 + 3\\ 3 - 9 & -3 + 9\end{pmatrix} = \begin{pmatrix}-2 & 2\\ -6 & 6\end{pmatrix} = 2B.$$

Atunci $A(a)A(b) = (I_2 + aB)(I_2 + bB) = I_2 + (a + b)B + abB^2 = I_2 + (a + b + 2ab)B = A(a + b + 2ab)$.

Pentru $a = m$, $b = 2m$: $A(m)A(2m) = A(m + 2m + 4m^2) = A(4m^2 + 3m)$.

Egalitatea $A(4m^2 + 3m) = A(1)$: comparând elementul de pe linia 1, coloana 2 (care este chiar parametrul), obținem $4m^2 + 3m = 1$:

$$4m^2 + 3m - 1 = 0 \iff (m + 1)(4m - 1) = 0 \iff m \in \left\{-1, \frac14\right\}.$$

Cum $m$ trebuie să fie întreg, $m = -1$.

**Răspuns:** $m = -1$. *Barem: 3p $A(m)A(2m) = A(4m^2 + 3m)$, 2p valoarea lui $m$.*

### 2. Legea de compoziție $x \circ y = xy - x - y + 4$

#### a) $0 \circ 3 = 1$

$$0 \circ 3 = 0\cdot 3 - 0 - 3 + 4 = 1.$$

*Barem: 3p înlocuirea, 2p calculul.*

#### b) Numerele reale $x$ pentru care $x \circ x = 3x$

$x \circ x = x^2 - 2x + 4$. Ecuația:

$$x^2 - 2x + 4 = 3x \iff x^2 - 5x + 4 = 0 \iff (x - 1)(x - 4) = 0 \iff x \in \{1, 4\}.$$

**Răspuns:** $x = 1$ sau $x = 4$. *Barem: 2p $x\circ x$, 3p soluțiile.*

#### c) Numărul real $a$ pentru care $x \circ a = x + a$, pentru orice $x$ real

$$xa - x - a + 4 = x + a \iff xa - 2x - 2a + 4 = 0 \iff x(a - 2) - 2(a - 2) = 0 \iff (a - 2)(x - 2) = 0.$$

Egalitatea trebuie să fie adevărată **pentru orice** $x$ — inclusiv pentru $x \ne 2$, de exemplu $x = 0$ — deci $a - 2 = 0$.

Verificare: $x \circ 2 = 2x - x - 2 + 4 = x + 2$ ✔.

**Răspuns:** $a = 2$. *Barem: 2p scrierea condiției, 3p concluzia.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = e^x\left(x^2 + 2x - 2\right)$

#### a) $f'(x) = e^x\left(x^2 + 4x\right)$

Regula produsului $(uv)' = u'v + uv'$:

$$f'(x) = e^x\left(x^2 + 2x - 2\right) + e^x(2x + 2) = e^x\left(x^2 + 2x - 2 + 2x + 2\right) = e^x\left(x^2 + 4x\right).$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) $\displaystyle\lim_{x\to+\infty}\frac{f(x)}{f'(x)} = 1$

Pentru $x$ suficient de mare $f'(x) \ne 0$, iar $e^x$ se simplifică:

$$\lim_{x\to+\infty}\frac{e^x\left(x^2 + 2x - 2\right)}{e^x\left(x^2 + 4x\right)} = \lim_{x\to+\infty}\frac{x^2\left(1 + \frac2x - \frac2{x^2}\right)}{x^2\left(1 + \frac4x\right)} = \frac{1 + 0 - 0}{1 + 0} = 1.$$

(Raport de polinoame de același grad: limita este raportul coeficienților dominanți, $\frac11$.) *Barem: 2p simplificarea, 3p calculul limitei.*

#### c) $e^{x+4}\left(x^2 + 2x - 2\right) \le 6$, pentru orice $x \in (-\infty, 0]$

Observăm că $e^{x+4}\left(x^2 + 2x - 2\right) = e^4 f(x)$, deci inegalitatea este echivalentă cu $f(x) \le \dfrac{6}{e^4}$ pe $(-\infty, 0]$.

Din a): $f'(x) = e^x\,x(x + 4)$, iar $e^x > 0$, deci $f'(x) = 0 \iff x \in \{-4, 0\}$.

| $x$ | $-\infty$ | | $-4$ | | $0$ |
|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ |
| $f(x)$ | | ↗ | $\frac{6}{e^4}$ | ↘ | $-2$ |

$f$ este crescătoare pe $(-\infty, -4]$ și descrescătoare pe $[-4, 0]$, deci $x = -4$ este punct de maxim pe $(-\infty, 0]$:

$$f(-4) = e^{-4}(16 - 8 - 2) = \frac{6}{e^4}.$$

Așadar $f(x) \le \dfrac{6}{e^4}$ pentru orice $x \le 0$; înmulțind cu $e^4 > 0$: $e^{x+4}\left(x^2 + 2x - 2\right) \le 6$. Egalitatea are loc pentru $x = -4$.

*Barem: 2p monotonia, 3p maximul și concluzia.*

### 2. $f:(0, +\infty) \to \mathbb R$, $f(x) = x^3 + \dfrac3x$

#### a) $\displaystyle\int_1^2\left(f(x) - \frac3x\right)dx = \frac{15}{4}$

Integrandul este $x^3$:

$$\int_1^2 x^3\,dx = \frac{x^4}{4}\Big|_1^2 = \frac{16}{4} - \frac14 = \frac{15}{4}.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) Orice primitivă $G$ a lui $g(x) = \dfrac{1}{\sqrt x}f(x)$ este crescătoare

Dacă $G$ este o primitivă a lui $g$, atunci $G$ este derivabilă și $G'(x) = g(x)$ pentru orice $x > 0$.

$$G'(x) = \frac{1}{\sqrt x}\left(x^3 + \frac3x\right).$$

Pentru $x > 0$: $\dfrac{1}{\sqrt x} > 0$, $x^3 > 0$ și $\dfrac3x > 0$, deci $G'(x) > 0$. O funcție cu derivata pozitivă pe un interval este (strict) crescătoare pe acel interval, deci $G$ este crescătoare. Raționamentul nu depinde de constanta primitivei, deci e valabil pentru orice primitivă.

*Barem: 2p $G' = g$, 3p semnul și concluzia.*

#### c) $\displaystyle\int_1^{\sqrt3}\frac{1}{f(x)}\,dx = \frac{\pi}{12\sqrt3}$

Aducem la același numitor: $f(x) = \dfrac{x^4 + 3}{x}$, deci $\dfrac{1}{f(x)} = \dfrac{x}{x^4 + 3}$.

Substituția $t = x^2$, $dt = 2x\,dx$: pentru $x = 1$, $t = 1$; pentru $x = \sqrt3$, $t = 3$.

$$\int_1^{\sqrt3}\frac{x}{x^4 + 3}\,dx = \frac12\int_1^3\frac{dt}{t^2 + \left(\sqrt3\right)^2} = \frac12\cdot\frac{1}{\sqrt3}\operatorname{arctg}\frac{t}{\sqrt3}\Big|_1^3.$$

Valorile: $\operatorname{arctg}\dfrac{3}{\sqrt3} = \operatorname{arctg}\sqrt3 = \dfrac\pi3$, $\operatorname{arctg}\dfrac{1}{\sqrt3} = \dfrac\pi6$.

$$\frac{1}{2\sqrt3}\left(\frac\pi3 - \frac\pi6\right) = \frac{1}{2\sqrt3}\cdot\frac\pi6 = \frac{\pi}{12\sqrt3}.$$

*Barem: 3p primitiva cu arctangentă, 2p calculul final.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $a \in \{-1, 0\}$ |
| I.3 | $x \in \{2, 4\}$ |
| I.4 | 15 numere |
| I.5 | $OM = 3$ |
| II.1.c | $m = -1$ |
| II.2.b | $x \in \{1, 4\}$ |
| II.2.c | $a = 2$ |
| III.1.c | maxim $f(-4) = 6/e^4$ |

## Ce merită reținut din varianta 6

- **Matrice de forma** $I_2 + aB$ cu $B^2 = kB$: produsul $A(a)A(b) = A(a + b + kab)$ simplifică orice ecuație matriceală.
- **„Pentru orice $x$”**: scrie condiția ca $(\ldots)\cdot x + (\ldots) = 0$ și anulează coeficienții.
- **Inegalități cu exponențiale**: recunoaște funcția din enunț (aici $e^4 f(x)$) și folosește maximul din tabelul de variație.
- **Integrale cu $x^4 + k$ la numitor și $x$ la numărător**: substituția $t = x^2$ duce la arctangentă.

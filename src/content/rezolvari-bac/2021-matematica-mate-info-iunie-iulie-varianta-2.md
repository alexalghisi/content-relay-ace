Rezolvarea completă a subiectului de **Bacalaureat 2021 la Matematică M_mate-info**, sesiunea iunie–iulie, **varianta 2**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1+i)^2 - 2(1+i) + 2 = 0$

Dezvoltăm pătratul: $(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$.

$$(1+i)^2 - 2(1+i) + 2 = 2i - 2 - 2i + 2 = 0.$$

**Observație:** rezultatul spune că $1+i$ este rădăcină a ecuației $z^2 - 2z + 2 = 0$ (discriminant $-4$, rădăcini $1 \pm i$). *Barem: 3p dezvoltarea, 2p finalizarea.*

### 2. $f(x) = x^2 + ax - 5$; determinați $a$ știind că $M(1, 2)$ aparține graficului

$M(1,2) \in G_f \iff f(1) = 2$:

$$1 + a - 5 = 2 \iff a - 4 = 2 \iff a = 6.$$

**Răspuns:** $a = 6$. *Barem: 3p condiția $f(1) = 2$, 2p valoarea lui $a$.*

### 3. Ecuația $\log_4(x^2+1) = \log_4 x + \log_4(x+1)$

**Condiții de existență:** $x > 0$ și $x + 1 > 0$, deci $x > 0$ ($x^2 + 1 > 0$ mereu).

Folosim $\log_4 x + \log_4(x+1) = \log_4\big(x(x+1)\big)$, iar logaritmul este injectiv:

$$x^2 + 1 = x^2 + x \iff x = 1.$$

**Verificare:** $x = 1 > 0$; $\log_4 2 = \log_4 1 + \log_4 2$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p ecuația $x^2+1 = x^2+x$, 2p soluția care convine.*

### 4. Probabilitatea ca un număr natural de două cifre să fie divizibil cu 2 și cu 5

Numerele de două cifre sunt $10, 11, \dots, 99$: **90 de cazuri posibile**.

Divizibil cu 2 și cu 5 $\iff$ divizibil cu 10 (2 și 5 sunt prime între ele): $10, 20, \dots, 90$ — **9 cazuri favorabile**.

$$p = \frac{9}{90} = \frac{1}{10}.$$

**Răspuns:** $p = \dfrac{1}{10}$. *Barem: 2p cazurile posibile, 2p cazurile favorabile, 1p probabilitatea.*

### 5. Dreapta $d$ prin $P(3,0)$, paralelă cu $MN$, $M(3,4)$, $N(0,1)$

Panta lui $MN$: $m_{MN} = \dfrac{1 - 4}{0 - 3} = \dfrac{-3}{-3} = 1$. Drepte paralele au pante egale, deci $m_d = 1$.

$$d:\ y - y_P = m_d(x - x_P) \iff y - 0 = 1\cdot(x - 3) \iff y = x - 3.$$

**Răspuns:** $d: y = x - 3$ (sau $x - y - 3 = 0$). *Barem: 3p panta, 2p ecuația dreptei.*

### 6. Triunghiul $ABC$ dreptunghic în $C$: arătați că $\operatorname{tg} B = \dfrac{1}{\operatorname{tg} A}$

În triunghiul dreptunghic, tangenta unui unghi ascuțit = cateta opusă / cateta alăturată. Catetele sunt $AC$ și $BC$ (ipotenuza este $AB$).

$$\operatorname{tg} A = \frac{BC}{AC}, \qquad \operatorname{tg} B = \frac{AC}{BC} = \frac{1}{\dfrac{BC}{AC}} = \frac{1}{\operatorname{tg} A}.$$

(Altfel: $A + B = 90^\circ$, deci $\operatorname{tg} B = \operatorname{ctg} A = \dfrac{1}{\operatorname{tg} A}$.) *Barem: 2p $\operatorname{tg} A$, 3p finalizarea.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(a) = \begin{pmatrix} a+2 & 0 & -a\\ 0 & 2 & 0\\ 3a & 0 & 2-3a\end{pmatrix}$, $a \in \mathbb R$

#### a) $\det(A(0)) = 8$

$$A(0) = \begin{pmatrix} 2 & 0 & 0\\ 0 & 2 & 0\\ 0 & 0 & 2\end{pmatrix} \Rightarrow \det(A(0)) = 2\cdot 2\cdot 2 + 0 + 0 - 0 - 0 - 0 = 8.$$

Matricea este diagonală, deci determinantul este produsul elementelor de pe diagonală. *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) Matricea $B$ cu $aB = A(a) - 2I_3$ pentru orice $a$ real

$$A(a) - 2I_3 = \begin{pmatrix} a & 0 & -a\\ 0 & 0 & 0\\ 3a & 0 & -3a\end{pmatrix} = a\begin{pmatrix} 1 & 0 & -1\\ 0 & 0 & 0\\ 3 & 0 & -3\end{pmatrix}.$$

Egalitatea $aB = a\begin{pmatrix} 1 & 0 & -1\\ 0 & 0 & 0\\ 3 & 0 & -3\end{pmatrix}$ trebuie să aibă loc pentru orice $a$; luând de exemplu $a = 1$, obținem:

**Răspuns:** $B = \begin{pmatrix} 1 & 0 & -1\\ 0 & 0 & 0\\ 3 & 0 & -3\end{pmatrix}$ (și această matrice verifică relația pentru orice $a$). *Barem: 3p calculul $A(a) - 2I_3$, 2p matricea $B$.*

#### c) Numărul natural $n$ cu $\det(A(n)\cdot A(-n)) > 0$

Calculăm produsul:

$$A(n)\cdot A(-n) = \begin{pmatrix} n+2 & 0 & -n\\ 0 & 2 & 0\\ 3n & 0 & 2-3n\end{pmatrix}\begin{pmatrix} 2-n & 0 & n\\ 0 & 2 & 0\\ -3n & 0 & 2+3n\end{pmatrix} = \begin{pmatrix} 4 + 2n^2 & 0 & -2n^2\\ 0 & 4 & 0\\ 6n^2 & 0 & 4 - 6n^2\end{pmatrix}.$$

De exemplu, elementul $(1,1)$: $(n+2)(2-n) + (-n)(-3n) = 4 - n^2 + 3n^2 = 4 + 2n^2$.

Dezvoltăm după linia a doua:

$$\det = 4\big[(4+2n^2)(4-6n^2) + 12n^4\big] = 4\big[16 - 16n^2 - 12n^4 + 12n^4\big] = 64(1 - n^2).$$

(Verificare rapidă: $\det A(n) = 2\big[(n+2)(2-3n) + 3n^2\big] = 2(4 - 4n) = 8(1-n)$, iar $\det A(-n) = 8(1+n)$; produsul este $64(1-n^2)$ ✔.)

$64(1 - n^2) > 0 \iff n^2 < 1$, iar pentru $n$ natural rămâne doar $n = 0$.

**Răspuns:** $n = 0$. *Barem: 3p determinantul $64(1-n^2)$, 2p concluzia.*

### 2. Legea $x * y = \dfrac12\big(x + y + |x - y|\big)$ (asociativă)

#### a) $2 * 0 = 2$

$$2 * 0 = \frac12\big(2 + 0 + |2 - 0|\big) = \frac12(2 + 2) = 2.$$

*Barem: 3p înlocuirea, 2p finalizarea.*

#### b) Dacă $a \le b$, atunci $a * b = b$

Dacă $a \le b$, atunci $a - b \le 0$, deci $|a - b| = -(a - b) = b - a$. Rezultă:

$$a * b = \frac12\big(a + b + b - a\big) = \frac12\cdot 2b = b.$$

**Interpretare:** legea întoarce maximul celor două numere: $x * y = \max(x, y)$. *Barem: 2p explicitarea modulului, 3p finalizarea.*

#### c) $(2x) * (x^2 + 1) * (-2x) = 10$

Din b), $x * y = \max(x,y)$ (legea este și comutativă, deci $a * b = b$ și $b * a = b$ pentru $a \le b$).

- $x^2 + 1 - 2x = (x-1)^2 \ge 0$, deci $2x \le x^2 + 1$ și $(2x) * (x^2+1) = x^2 + 1$;
- $x^2 + 1 + 2x = (x+1)^2 \ge 0$, deci $-2x \le x^2 + 1$ și $(x^2+1) * (-2x) = x^2 + 1$.

Așadar membrul stâng este $x^2 + 1$ pentru orice $x$ real, iar ecuația devine:

$$x^2 + 1 = 10 \iff x^2 = 9 \iff x \in \{-3, 3\}.$$

**Răspuns:** $x \in \{-3, 3\}$. *Barem: 3p reducerea la $x^2+1$, 2p soluțiile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = x - \sqrt{x^2 + 3}$

#### a) $f'(x) = \dfrac{\sqrt{x^2+3} - x}{\sqrt{x^2+3}}$

Folosim $(\sqrt u)' = \dfrac{u'}{2\sqrt u}$:

$$f'(x) = 1 - \frac{2x}{2\sqrt{x^2+3}} = 1 - \frac{x}{\sqrt{x^2+3}} = \frac{\sqrt{x^2+3} - x}{\sqrt{x^2+3}}, \quad x \in \mathbb R.$$

*Barem: 3p derivarea, 2p forma finală.*

#### b) Asimptota orizontală spre $+\infty$

Avem nedeterminarea $\infty - \infty$; amplificăm cu conjugata:

$$\lim_{x\to+\infty}\left(x - \sqrt{x^2+3}\right) = \lim_{x\to+\infty}\frac{x^2 - (x^2+3)}{x + \sqrt{x^2+3}} = \lim_{x\to+\infty}\frac{-3}{x + \sqrt{x^2+3}} = 0.$$

**Răspuns:** dreapta $y = 0$ este asimptota orizontală spre $+\infty$. *Barem: 3p limita, 2p concluzia.*

#### c) Valorile lui $a$ pentru care $f(x) = a$ are soluție

**Semnul derivatei:** $\sqrt{x^2+3} > \sqrt{x^2} = |x| \ge x$, deci numărătorul $\sqrt{x^2+3} - x > 0$ și $f'(x) > 0$ pentru orice $x$. Funcția este **strict crescătoare**.

**Limitele la capete:** $\lim\limits_{x\to+\infty} f(x) = 0$ (din b)), iar $\lim\limits_{x\to-\infty} f(x) = -\infty - \infty = -\infty$.

$f$ este continuă și strict crescătoare, deci $\operatorname{Im} f = \left(\lim\limits_{x\to-\infty}f,\ \lim\limits_{x\to+\infty}f\right) = (-\infty, 0)$. Valoarea $0$ nu este atinsă (ar trebui $x = \sqrt{x^2+3}$, imposibil).

Ecuația $f(x) = a$ are soluție exact când $a \in \operatorname{Im} f$.

**Răspuns:** $a \in (-\infty, 0)$. *Barem: 2p monotonia, 3p concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = \dfrac{x}{x^2 + x + 3}$

(Numitorul are $\Delta = 1 - 12 < 0$, deci $x^2 + x + 3 > 0$ pentru orice $x$, iar $f$ e bine definită.)

#### a) $\displaystyle\int_0^2 (x^2 + x + 3) f(x)\,dx = 2$

Produsul se simplifică: $(x^2 + x + 3)f(x) = x$.

$$\int_0^2 x\,dx = \frac{x^2}{2}\Big|_0^2 = \frac42 - 0 = 2.$$

*Barem: 3p simplificarea și primitiva, 2p calculul.*

#### b) $\displaystyle\int_1^2 g(x)\,dx = \ln\frac95$, $g(x) = \dfrac{2x+1}{x}\cdot f(x)$

Simplificăm: $g(x) = \dfrac{2x+1}{x}\cdot\dfrac{x}{x^2+x+3} = \dfrac{2x+1}{x^2+x+3}$ pentru $x > 0$. Numărătorul este exact derivata numitorului, deci $\displaystyle\int \frac{u'}{u} = \ln u$:

$$\int_1^2 \frac{(x^2+x+3)'}{x^2+x+3}\,dx = \ln(x^2+x+3)\Big|_1^2 = \ln 9 - \ln 5 = \ln\frac95.$$

*Barem: 3p forma $u'/u$, 2p calculul.*

#### c) Pentru $0 \le a < b$, $I_n = \displaystyle\int_a^b f^n(x)\,dx$; demonstrați că $\lim\limits_{n\to\infty} I_n = 0$

**Pasul 1 — încadrarea lui $f$ pe $[0, +\infty)$.** Pentru $x \ge 0$, $f(x) \ge 0$ (numărător și numitor nenegative/pozitive). Apoi

$$f(x) \le \frac12 \iff 2x \le x^2 + x + 3 \iff x^2 - x + 3 \ge 0,$$

adevărat pentru orice $x$ ($\Delta = 1 - 12 < 0$). Deci $0 \le f(x) \le \dfrac12$ pe $[0, +\infty)$, și ridicând la puterea $n$: $0 \le f^n(x) \le \left(\dfrac12\right)^n$.

**Pasul 2 — integrăm inegalitățile** pe $[a, b] \subset [0, +\infty)$ (integrala păstrează inegalitățile):

$$0 \le I_n \le \int_a^b \left(\frac12\right)^n dx = \left(\frac12\right)^n (b - a).$$

**Pasul 3 — criteriul cleștelui.** Cum $\left(\frac12\right)^n \to 0$ (bază în $(0,1)$), membrul drept tinde la $0$, deci $\lim\limits_{n\to\infty} I_n = 0$. $\blacksquare$

**Atenție:** condiția $a \ge 0$ este esențială — pe $(-\infty, 0)$ funcția $f$ ia valori negative și argumentul de semn nu mai merge direct. *Barem: 2p încadrarea lui $f^n$, 3p încadrarea integralei și concluzia.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | expresia este $0$ |
| I.2 | $a = 6$ |
| I.3 | $x = 1$ |
| I.4 | $p = \tfrac{1}{10}$ |
| I.5 | $y = x - 3$ |
| II.1.b | $B = \begin{pmatrix}1&0&-1\\0&0&0\\3&0&-3\end{pmatrix}$ |
| II.1.c | $n = 0$ |
| II.2.c | $x \in \{-3, 3\}$ |
| III.1.b | $y = 0$ |
| III.1.c | $a \in (-\infty, 0)$ |
| III.2.c | $\lim I_n = 0$ |

## Ce merită reținut din varianta 2

- **Legea $\frac12(x + y + |x-y|)$** este $\max(x,y)$; recunoașterea ei simplifică imediat compunerile.
- **Determinantul unui produs** este produsul determinanților: $\det(A(n)A(-n)) = \det A(n)\cdot\det A(-n)$ — o verificare rapidă.
- **$\infty - \infty$ cu radicali**: amplifică cu conjugata.
- **Limite de integrale de tip $\int f^n$**: încadrează $f$ între $0$ și o constantă subunitară, apoi folosește criteriul cleștelui.

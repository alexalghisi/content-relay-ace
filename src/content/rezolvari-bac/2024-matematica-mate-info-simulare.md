Rezolvarea completă a subiectului de **Bacalaureat 2024 la Matematică M_mate-info**, simularea națională. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $\left(3 + \lg\dfrac{1}{10}\right)\cdot \lg\sqrt{10} = 1$

Folosim definiția logaritmului zecimal: $\lg 10^k = k$.

- $\lg\dfrac{1}{10} = \lg 10^{-1} = -1$;
- $\lg\sqrt{10} = \lg 10^{1/2} = \dfrac12$.

$$\left(3 + \lg\frac{1}{10}\right)\cdot\lg\sqrt{10} = (3 - 1)\cdot\frac12 = 2\cdot\frac12 = 1.$$

*Barem: 3p calculul parantezei ($3 + \lg\frac{1}{10} = 2$), 2p finalizarea.*

### 2. $f(x) = x^2 + ax - 1$: determinați $a$ pentru care $(f\circ f)(1) = 1$

Pas 1: $f(1) = 1 + a - 1 = a$.

Pas 2: $(f\circ f)(1) = f(f(1)) = f(a) = a^2 + a\cdot a - 1 = 2a^2 - 1$.

Ecuația: $2a^2 - 1 = 1 \iff a^2 = 1 \iff a \in \{-1, 1\}$.

**Răspuns:** $a = -1$ sau $a = 1$. *Barem: 2p $f(1)$ și $(f\circ f)(1) = 2a^2 - 1$, 3p rezolvarea ecuației.*

### 3. Ecuația $2^{x+1}\cdot 8^x = 32$

Scriem totul ca puteri ale lui 2: $8^x = (2^3)^x = 2^{3x}$ și $32 = 2^5$.

$$2^{x+1}\cdot 2^{3x} = 2^5 \iff 2^{4x+1} = 2^5 \iff 4x + 1 = 5 \iff x = 1.$$

Funcția exponențială este injectivă, deci putem egala exponenții. Verificare: $2^2\cdot 8 = 32$ ✔.

**Răspuns:** $x = 1$. *Barem: 3p aducerea la aceeași bază și egalarea exponenților, 2p soluția.*

### 4. Probabilitatea ca $\sqrt{n + 100}$ să fie natural, $n$ număr natural de două cifre

**Cazuri posibile:** numerele de două cifre sunt $10, 11, \dots, 99$, adică $90$ de numere.

**Cazuri favorabile:** $\sqrt{n+100}$ este natural exact când $n + 100$ este pătrat perfect. Cum $10 \le n \le 99$, avem $110 \le n + 100 \le 199$. Pătratele perfecte din acest interval sunt $11^2 = 121$, $12^2 = 144$, $13^2 = 169$, $14^2 = 196$, deci $n \in \{21, 44, 69, 96\}$ — 4 cazuri favorabile.

$$p = \frac{4}{90} = \frac{2}{45}.$$

**Răspuns:** $p = \dfrac{2}{45}$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $A(1,4)$, $B(4,6)$, $C(4,2)$; coordonatele lui $D$ cu $\overrightarrow{OD} = \frac12\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$

Coordonatele unui vector: $\overrightarrow{AB} = (x_B - x_A)\vec i + (y_B - y_A)\vec j$.

- $\overrightarrow{AB} = 3\vec i + 2\vec j$;
- $\overrightarrow{AC} = 3\vec i - 2\vec j$.

$$\overrightarrow{OD} = \frac12\left(6\vec i + 0\vec j\right) = 3\vec i.$$

Cum $\overrightarrow{OD} = x_D\vec i + y_D\vec j$, rezultă $D(3, 0)$.

**Observație:** $\frac12(\overrightarrow{AB} + \overrightarrow{AC}) = \overrightarrow{AM}$, unde $M$ e mijlocul lui $BC$; aici $M(4,4)$ și $\overrightarrow{AM} = 3\vec i$ — aceeași concluzie.

**Răspuns:** $D(3, 0)$. *Barem: 3p calculul vectorului $\overrightarrow{OD}$, 2p coordonatele.*

### 6. $E(x) = \operatorname{tg} x - 4\cos\dfrac{x}{2}\cdot\cos x$; arătați că $E\left(\dfrac{\pi}{3}\right) = 0$

Valori necesare: $\operatorname{tg}\dfrac{\pi}{3} = \sqrt3$, $\cos\dfrac{\pi}{6} = \dfrac{\sqrt3}{2}$, $\cos\dfrac{\pi}{3} = \dfrac12$.

$$E\left(\frac{\pi}{3}\right) = \sqrt3 - 4\cdot\frac{\sqrt3}{2}\cdot\frac12 = \sqrt3 - \sqrt3 = 0.$$

*Barem: 3p valorile trigonometrice, 2p calculul final.*

## Subiectul al II-lea (30 de puncte)

### 1. $I_3$ și $A(x) = \begin{pmatrix}1 & -1 & x\\ -1 & 0 & 0\\ x & 0 & -1\end{pmatrix}$

#### a) $\det(A(0)) = 1$

$$\det(A(0)) = \begin{vmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{vmatrix}.$$

Dezvoltăm după coloana a treia (are un singur element nenul, $-1$ pe poziția $(3,3)$, cu semnul $(-1)^{3+3} = +$):

$$\det(A(0)) = (-1)\cdot\begin{vmatrix}1 & -1\\ -1 & 0\end{vmatrix} = (-1)\cdot(0 - 1) = 1.$$

(Cu regula lui Sarrus: $0 + 0 + 0 - 0 - 0 - (-1)(-1)(-1) = 1$.) *Barem: 2p scrierea determinantului, 3p calculul.*

#### b) $\det\left(A(x)\cdot A(x) - I_3\right) \le 0$ pentru orice $x$ real

Calculăm produsul linie cu coloană:

$$A(x)\cdot A(x) = \begin{pmatrix}1+1+x^2 & -1 & x - x\\ -1 & 1 & -x\\ x - x & -x & x^2 + 1\end{pmatrix} = \begin{pmatrix}x^2 + 2 & -1 & 0\\ -1 & 1 & -x\\ 0 & -x & x^2 + 1\end{pmatrix}.$$

Scădem $I_3$:

$$A(x)\cdot A(x) - I_3 = \begin{pmatrix}x^2 + 1 & -1 & 0\\ -1 & 0 & -x\\ 0 & -x & x^2\end{pmatrix}.$$

Dezvoltăm după prima linie:

$$\det = (x^2+1)\begin{vmatrix}0 & -x\\ -x & x^2\end{vmatrix} - (-1)\begin{vmatrix}-1 & -x\\ 0 & x^2\end{vmatrix} = (x^2+1)(-x^2) + (-x^2) = -x^2(x^2 + 2).$$

Cum $x^2 \ge 0$ și $x^2 + 2 > 0$, produsul $x^2(x^2+2) \ge 0$, deci $\det\left(A(x)A(x) - I_3\right) = -x^2(x^2+2) \le 0$.

*Barem: 3p calculul matricei $A(x)A(x) - I_3$, 2p determinantul și concluzia.*

#### c) $X \in \mathcal M_{2,3}(\mathbb R)$ cu $X\cdot(A(0))^{-1} = B\cdot A(0)$, $B = \begin{pmatrix}1 & 0 & 1\\ 0 & 1 & 0\end{pmatrix}$

$A(0)$ este inversabilă ($\det = 1 \ne 0$, din a)). Înmulțim egalitatea la **dreapta** cu $A(0)$:

$$X\cdot(A(0))^{-1}\cdot A(0) = B\cdot A(0)\cdot A(0) \Rightarrow X = B\cdot A(0)\cdot A(0).$$

Nu e nevoie să calculăm inversa. Pas 1:

$$B\cdot A(0) = \begin{pmatrix}1 & 0 & 1\\ 0 & 1 & 0\end{pmatrix}\begin{pmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{pmatrix} = \begin{pmatrix}1 & -1 & -1\\ -1 & 0 & 0\end{pmatrix}.$$

Pas 2:

$$X = \begin{pmatrix}1 & -1 & -1\\ -1 & 0 & 0\end{pmatrix}\begin{pmatrix}1 & -1 & 0\\ -1 & 0 & 0\\ 0 & 0 & -1\end{pmatrix} = \begin{pmatrix}2 & -1 & 1\\ -1 & 1 & 0\end{pmatrix}.$$

**Atenție la ordine:** înmulțirea matricelor nu e comutativă; înmulțim la dreapta pentru că $(A(0))^{-1}$ stă la dreapta lui $X$.

**Răspuns:** $X = \begin{pmatrix}2 & -1 & 1\\ -1 & 1 & 0\end{pmatrix}$. *Barem: 2p $X = B\cdot A(0)\cdot A(0)$, 3p calculul matricei.*

### 2. Pe $M = [0, +\infty)$: $x * y = \dfrac{x^2 + y^2 + x + y}{x + y + 1}$

#### a) $1 * 2 = 2$

$$1 * 2 = \frac{1 + 4 + 1 + 2}{1 + 2 + 1} = \frac{8}{4} = 2.$$

*Barem: 3p înlocuirea, 2p rezultatul.*

#### b) $e = 0$ este elementul neutru

Trebuie $x * 0 = 0 * x = x$ pentru orice $x \in M$ (și $0 \in M$ ✔).

$$x * 0 = \frac{x^2 + 0 + x + 0}{x + 0 + 1} = \frac{x(x+1)}{x+1} = x,$$

simplificarea fiind permisă pentru că $x + 1 \ge 1 > 0$. Analog (legea e simetrică în $x$ și $y$) $0 * x = \dfrac{x^2 + x}{x + 1} = x$. Deci $e = 0$ este element neutru.

*Barem: 2p $x * 0 = x$, 3p $0 * x = x$ și concluzia.*

#### c) Perechile $(m, n)$ de numere naturale cu $m * n = 5$

$$\frac{m^2 + n^2 + m + n}{m + n + 1} = 5 \iff m^2 + n^2 + m + n = 5m + 5n + 5 \iff m^2 - 4m + n^2 - 4n = 5.$$

Completăm pătratele (adunăm 8 în ambii membri):

$$(m-2)^2 + (n-2)^2 = 13.$$

Singura scriere a lui 13 ca sumă de două pătrate perfecte este $4 + 9$. Deci $\{|m-2|, |n-2|\} = \{2, 3\}$.

- $|m - 2| = 2 \Rightarrow m \in \{0, 4\}$; $|n - 2| = 3 \Rightarrow n \in \{5, -1\}$, iar $-1 \notin \mathbb N$, deci $n = 5$.
- Simetric: $m = 5$, $n \in \{0, 4\}$.

Verificare: $0 * 5 = \dfrac{25 + 5}{6} = 5$ ✔, $4 * 5 = \dfrac{16 + 25 + 9}{10} = 5$ ✔.

**Răspuns:** $(m,n) \in \{(0,5),\ (4,5),\ (5,0),\ (5,4)\}$. *Barem: 3p ecuația $(m-2)^2 + (n-2)^2 = 13$, 2p perechile.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:\mathbb R \to \mathbb R$, $f(x) = (x + 6)\sqrt{x^2 + 4}$

#### a) $f'(x) = \dfrac{2(x^2 + 3x + 2)}{\sqrt{x^2 + 4}}$

Regula produsului, cu $\left(\sqrt{x^2+4}\right)' = \dfrac{2x}{2\sqrt{x^2+4}} = \dfrac{x}{\sqrt{x^2+4}}$:

$$f'(x) = \sqrt{x^2 + 4} + (x + 6)\cdot\frac{x}{\sqrt{x^2+4}} = \frac{x^2 + 4 + x^2 + 6x}{\sqrt{x^2+4}} = \frac{2x^2 + 6x + 4}{\sqrt{x^2+4}} = \frac{2(x^2 + 3x + 2)}{\sqrt{x^2+4}}.$$

*Barem: 3p derivarea, 2p aducerea la forma cerută.*

#### b) Intervalele de monotonie

Numitorul $\sqrt{x^2+4} > 0$, deci semnul lui $f'$ este semnul lui $x^2 + 3x + 2 = (x+1)(x+2)$, cu rădăcinile $-2$ și $-1$.

| $x$ | $-\infty$ | | $-2$ | | $-1$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $f'(x)$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
| $f(x)$ | $-\infty$ | ↗ | $8\sqrt2$ | ↘ | $5\sqrt5$ | ↗ | $+\infty$ |

**Răspuns:** $f$ este crescătoare pe $(-\infty, -2]$, descrescătoare pe $[-2, -1]$ și crescătoare pe $[-1, +\infty)$. *Barem: 2p rădăcinile derivatei, 3p intervalele de monotonie.*

#### c) $f(x) = m$ are soluție unică pentru orice $m \in \mathbb Z$

Valorile din tabel:

- $f(-2) = 4\sqrt{8} = 8\sqrt2 = \sqrt{128}$;
- $f(-1) = 5\sqrt5 = \sqrt{125}$;
- $\lim\limits_{x\to-\infty} f(x) = -\infty$, $\lim\limits_{x\to+\infty} f(x) = +\infty$.

Cheia: $121 < 125 < 128 < 144$, deci $11 < \sqrt{125} < \sqrt{128} < 12$. Pe intervalul $[-2, -1]$, $f$ ia valori în $[\sqrt{125}, \sqrt{128}] \subset (11, 12)$ — **nu există niciun întreg** acolo.

Fie $m$ întreg. $f$ este continuă.

- Dacă $m \le 11$: pe $(-\infty, -2]$, $f$ e strict crescătoare de la $-\infty$ la $\sqrt{128} > m$, deci ia valoarea $m$ exact o dată; pe $[-2, +\infty)$, $f(x) \ge \sqrt{125} > 11 \ge m$, deci nu mai există alte soluții.
- Dacă $m \ge 12$: pe $(-\infty, -1]$, $f(x) \le \sqrt{128} < 12 \le m$, deci nicio soluție; pe $[-1, +\infty)$, $f$ e strict crescătoare de la $\sqrt{125}$ la $+\infty$, deci ia valoarea $m$ exact o dată.

În ambele cazuri ecuația are soluție unică. (Pentru $m$ real oarecare din $(\sqrt{125}, \sqrt{128})$ ar exista trei soluții — de aceea enunțul cere $m$ întreg.)

*Barem: 3p limitele, valorile $f(-2)$, $f(-1)$, continuitatea și încadrarea $11 < \sqrt{125} < \sqrt{128} < 12$; 2p concluzia din monotonie.*

### 2. $f:\mathbb R\to\mathbb R$, $f(x) = \dfrac{x + 1}{e^x}$

#### a) $\displaystyle\int_0^4 e^x f(x)\,dx = 12$

Se simplifică: $e^x f(x) = x + 1$.

$$\int_0^4 (x + 1)\,dx = \left(\frac{x^2}{2} + x\right)\Bigg|_0^4 = 8 + 4 - 0 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 f(x)\,dx = \frac{2e - 3}{e}$

$f(x) = (x+1)e^{-x}$. Integrăm prin părți cu $u = x + 1$, $v' = e^{-x}$, deci $u' = 1$, $v = -e^{-x}$:

$$\int_0^1 (x+1)e^{-x}\,dx = -(x+1)e^{-x}\Big|_0^1 + \int_0^1 e^{-x}\,dx = \left(-\frac{2}{e} + 1\right) + \left(-e^{-x}\right)\Big|_0^1.$$

$$= 1 - \frac2e + 1 - \frac1e = 2 - \frac3e = \frac{2e - 3}{e}.$$

*Barem: 3p integrarea prin părți, 2p calculul final.*

#### c) $I_n = \displaystyle\int_0^1 \frac{x^{n-1}}{f(x^n)}\,dx$; arătați că $\dfrac{\ln 2}{n} \le I_n \le \dfrac{e - 1}{n}$, $n \ge 2$

Cum $f(x^n) = \dfrac{x^n + 1}{e^{x^n}}$, avem $\dfrac{1}{f(x^n)} = \dfrac{e^{x^n}}{x^n + 1}$, deci

$$I_n = \int_0^1 \frac{x^{n-1} e^{x^n}}{x^n + 1}\,dx.$$

**Schimbare de variabilă:** $t = x^n$, $dt = n x^{n-1}\,dx$; pentru $x = 0$, $t = 0$; pentru $x = 1$, $t = 1$:

$$I_n = \frac1n\int_0^1 \frac{e^t}{t + 1}\,dt.$$

Pentru $t \in [0, 1]$ avem $e^t \ge 1$ și $t + 1 \ge 1$. Deci:

- **Minorare** (folosim $e^t \ge 1$): $\dfrac{e^t}{t+1} \ge \dfrac{1}{t+1}$, deci $I_n \ge \dfrac1n\displaystyle\int_0^1\frac{dt}{t+1} = \dfrac1n\ln(t+1)\Big|_0^1 = \dfrac{\ln 2}{n}$.
- **Majorare** (folosim $t + 1 \ge 1$): $\dfrac{e^t}{t+1} \le e^t$, deci $I_n \le \dfrac1n\displaystyle\int_0^1 e^t\,dt = \dfrac{e - 1}{n}$.

Am folosit monotonia integralei: dacă $g \le h$ pe $[0,1]$, atunci $\int_0^1 g \le \int_0^1 h$. Rezultă $\dfrac{\ln 2}{n} \le I_n \le \dfrac{e-1}{n}$.

*Barem: 3p schimbarea de variabilă $I_n = \frac1n\int_0^1\frac{e^t}{t+1}dt$, 2p cele două inegalități.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $1$ |
| I.2 | $a \in \{-1, 1\}$ |
| I.3 | $x = 1$ |
| I.4 | $p = \frac{2}{45}$ |
| I.5 | $D(3, 0)$ |
| I.6 | $E(\pi/3) = 0$ |
| II.1.c | $X = \begin{pmatrix}2 & -1 & 1\\ -1 & 1 & 0\end{pmatrix}$ |
| II.2.c | $(0,5), (4,5), (5,0), (5,4)$ |
| III.1.b | ↗ pe $(-\infty,-2]$, ↘ pe $[-2,-1]$, ↗ pe $[-1,\infty)$ |
| III.2.b | $\frac{2e-3}{e}$ |

## Ce merită reținut din această simulare

- **Ecuații matriceale** $X\cdot M^{-1} = N$: înmulțește la dreapta cu $M$ — eviți calculul inversei.
- **Ecuații diofantice cu pătrate**: completează pătratele și caută scrierea numărului ca sumă de pătrate perfecte.
- **„Soluție unică pentru $m$ întreg”**: verifică între ce întregi consecutivi se află extremele locale.
- **Încadrări de integrale**: după substituție, majorează/minorează integrandul pe intervalul de integrare.

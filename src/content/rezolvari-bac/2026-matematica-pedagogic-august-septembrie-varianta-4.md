Rezolvarea completă a subiectului de **Bacalaureat 2026 la Matematică M_pedagogic**, sesiunea august–septembrie, **varianta 4**. Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru la examen: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Progresie aritmetică: $a_3$, știind $a_1 = 2$ și $a_2 = 16$

Într-o progresie aritmetică diferența dintre doi termeni consecutivi este constantă (rația $r$):

$$r = a_2 - a_1 = 16 - 2 = 14.$$

Atunci $a_3 = a_2 + r = 16 + 14 = 30$ (sau, cu formula termenului general, $a_3 = a_1 + 2r = 2 + 28 = 30$).

**Răspuns:** $a_3 = 30$. *Barem: 3p rația, 2p termenul $a_3$.*

### 2. Funcția $f(x) = x - 2$: determinați $m$ cu $f(3) + f(5) = f(m)$

Calculăm: $f(3) = 3 - 2 = 1$, $f(5) = 5 - 2 = 3$, iar $f(m) = m - 2$.

$$1 + 3 = m - 2 \iff m = 6.$$

**Răspuns:** $m = 6$. *Barem: 3p valorile funcției, 2p rezolvarea ecuației.*

### 3. Ecuație irațională: $\sqrt{3x} = \sqrt{12 - x}$

**Condiții de existență:** $3x \ge 0$ și $12 - x \ge 0$, adică $x \in [0, 12]$.

Ambii membri sunt nenegativi, deci putem ridica la pătrat fără să pierdem sau să adăugăm soluții:

$$3x = 12 - x \iff 4x = 12 \iff x = 3.$$

**Verificare:** $\sqrt{9} = 3$ și $\sqrt{12 - 3} = \sqrt 9 = 3$ ✔; în plus $3 \in [0, 12]$.

**Răspuns:** $x = 3$. *Barem: 3p ecuația $3x = 12 - x$, 2p soluția și precizarea că aceasta convine.*

### 4. Probabilitatea ca un număr din $A = \{20, 21, \dots, 35\}$ să fie multiplu de 5

**Cazuri posibile:** numerele de la 20 la 35 sunt $35 - 20 + 1 = 16$. Atenție: nu $15$ — ambele capete se numără.

**Cazuri favorabile:** multiplii lui 5 din $A$ sunt $20, 25, 30, 35$, adică $4$ numere.

$$p = \frac{\text{nr. cazuri favorabile}}{\text{nr. cazuri posibile}} = \frac{4}{16} = \frac14.$$

**Răspuns:** $p = \dfrac14$. *Barem: 2p cazurile posibile, 3p cazurile favorabile și probabilitatea.*

### 5. $M(1,3)$, $N(7,1)$: triunghiul $OMN$ este dreptunghic

Calculăm lungimile laturilor cu formula distanței $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$:

- $OM = \sqrt{1^2 + 3^2} = \sqrt{10}$;
- $ON = \sqrt{7^2 + 1^2} = \sqrt{50}$;
- $MN = \sqrt{(7-1)^2 + (1-3)^2} = \sqrt{36 + 4} = \sqrt{40}$.

Latura cea mai mare este $ON$ și verificăm reciproca teoremei lui Pitagora:

$$OM^2 + MN^2 = 10 + 40 = 50 = ON^2.$$

Deci triunghiul $OMN$ este dreptunghic, cu unghiul drept în $M$. (Alternativ: pantele $m_{OM} = 3$ și $m_{MN} = \frac{1-3}{7-1} = -\frac13$ au produsul $-1$, deci $OM \perp MN$.)

*Barem: 2p $OM$ și $ON$, 3p $MN$ și reciproca teoremei lui Pitagora.*

### 6. Triunghi dreptunghic în $A$, $BC = 8$, $\angle B = 45^\circ$: perimetrul este $8(1 + \sqrt2)$

Cum $\angle A = 90^\circ$ și $\angle B = 45^\circ$, rezultă $\angle C = 45^\circ$, deci triunghiul este dreptunghic isoscel: $AB = AC$.

Din $\sin B = \dfrac{AC}{BC}$: $AC = 8 \cdot \sin 45^\circ = 8 \cdot \dfrac{\sqrt2}{2} = 4\sqrt2$, deci și $AB = 4\sqrt2$. (Verificare cu Pitagora: $AB^2 + AC^2 = 32 + 32 = 64 = BC^2$ ✔.)

$$P_{ABC} = BC + AB + AC = 8 + 4\sqrt2 + 4\sqrt2 = 8 + 8\sqrt2 = 8(1 + \sqrt2).$$

*Barem: 2p catetele $AB = AC = 4\sqrt2$, 3p perimetrul.*

## Subiectul al II-lea (30 de puncte)

Pe $\mathbb R$ se definește legea asociativă $x \circ y = \dfrac13(x-2)(y-2) + 2$.

### 1. Arătați că $4 \circ 8 = 6$

$$4 \circ 8 = \frac13(4 - 2)(8 - 2) + 2 = \frac13 \cdot 2 \cdot 6 + 2 = 4 + 2 = 6.$$

*Barem: 3p înlocuirea în lege, 2p calculul final.*

### 2. Determinați $x$ real cu $(-1) \circ x = x$

$$(-1) \circ x = \frac13(-1 - 2)(x - 2) + 2 = \frac13 \cdot (-3)(x-2) + 2 = -(x - 2) + 2 = -x + 4.$$

Ecuația devine $-x + 4 = x \iff 2x = 4 \iff x = 2$.

**Răspuns:** $x = 2$. *Barem: 3p expresia $(-1)\circ x = -x + 4$, 2p soluția.*

### 3. Arătați că $e = 5$ este elementul neutru

Trebuie verificat că $x \circ 5 = 5 \circ x = x$ pentru orice $x$ real:

$$x \circ 5 = \frac13(x - 2)(5 - 2) + 2 = \frac13 \cdot 3(x-2) + 2 = x - 2 + 2 = x,$$

$$5 \circ x = \frac13(5 - 2)(x - 2) + 2 = x - 2 + 2 = x.$$

Ambele egalități au loc pentru orice $x \in \mathbb R$, deci $e = 5$ este elementul neutru. (Legea este și comutativă, dar trebuie scrise ambele verificări sau justificată comutativitatea.)

*Barem: 2p $x \circ 5 = x$, 3p $5 \circ x = x$ și concluzia.*

### 4. Numerele naturale $n$ pentru care $N = n \circ (-n)$ este natural

$$N = \frac13(n - 2)(-n - 2) + 2 = -\frac13(n-2)(n+2) + 2 = \frac{-(n^2 - 4) + 6}{3} = \frac{10 - n^2}{3}.$$

Ca $N$ să fie natural trebuie ca $10 - n^2 \ge 0$, adică $n^2 \le 10$, deci $n \in \{0, 1, 2, 3\}$. Verificăm fiecare caz:

- $n = 0$: $N = \frac{10}{3} \notin \mathbb N$;
- $n = 1$: $N = \frac{9}{3} = 3 \in \mathbb N$ ✔;
- $n = 2$: $N = \frac{6}{3} = 2 \in \mathbb N$ ✔;
- $n = 3$: $N = \frac{1}{3} \notin \mathbb N$.

**Răspuns:** $n \in \{1, 2\}$. *Barem: 2p expresia lui $N$, 3p valorile $n = 1$ și $n = 2$.*

### 5. Determinați $x$, știind că 1 este simetricul lui $x$

„1 este simetricul lui $x$” înseamnă $x \circ 1 = 1 \circ x = e = 5$ (elementul neutru de la punctul 3).

$$x \circ 1 = \frac13(x - 2)(1 - 2) + 2 = -\frac13(x - 2) + 2.$$

$$-\frac13(x-2) + 2 = 5 \iff -\frac13(x - 2) = 3 \iff x - 2 = -9 \iff x = -7.$$

**Verificare:** $(-7) \circ 1 = \frac13 \cdot (-9)\cdot(-1) + 2 = 3 + 2 = 5$ ✔.

**Răspuns:** $x = -7$. *Barem: 3p ecuația $x \circ 1 = 5$, 2p soluția.*

### 6. Numerele naturale $m$, $p$ cu $2^m \circ 3^p = 4$

$$2^m \circ 3^p = \frac13(2^m - 2)(3^p - 2) + 2 = 4 \iff (2^m - 2)(3^p - 2) = 6.$$

Pentru $m, p$ naturale, factorii sunt numere întregi. Analizăm valorile posibile:

- $3^p - 2 \in \{-1, 1, 7, 25, \dots\}$; dintre acestea, divizori ai lui 6 sunt doar $-1$ (pentru $p = 0$) și $1$ (pentru $p = 1$).
- $p = 0$: $2^m - 2 = -6 \Rightarrow 2^m = -4$, imposibil.
- $p = 1$: $2^m - 2 = 6 \Rightarrow 2^m = 8 \Rightarrow m = 3$.

**Verificare:** $8 \circ 3 = \frac13 \cdot 6 \cdot 1 + 2 = 4$ ✔.

**Răspuns:** $m = 3$, $p = 1$. *Barem: 2p ecuația $\frac13(2^m-2)(3^p-2)+2 = 4$, 3p obținerea lui $m = 3$, $p = 1$.*

## Subiectul al III-lea (30 de puncte)

Se consideră $I_2 = \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$ și $A(x) = \begin{pmatrix}2 & 0\\ x & x - 3\end{pmatrix}$, $x \in \mathbb R$.

### 1. Arătați că $\det(A(5)) = 4$

$$A(5) = \begin{pmatrix}2 & 0\\ 5 & 2\end{pmatrix}, \qquad \det(A(5)) = \begin{vmatrix}2 & 0\\ 5 & 2\end{vmatrix} = 2 \cdot 2 - 0 \cdot 5 = 4.$$

(Determinantul de ordin 2: produsul diagonalei principale minus produsul diagonalei secundare.) *Barem: 3p scrierea matricei și a determinantului, 2p calculul.*

### 2. Determinați $x$ cu $3A(5) - A(1) = 2A(x)$

$A(1) = \begin{pmatrix}2 & 0\\ 1 & -2\end{pmatrix}$, deci

$$3A(5) - A(1) = \begin{pmatrix}6 & 0\\ 15 & 6\end{pmatrix} - \begin{pmatrix}2 & 0\\ 1 & -2\end{pmatrix} = \begin{pmatrix}4 & 0\\ 14 & 8\end{pmatrix}.$$

Pe de altă parte $2A(x) = \begin{pmatrix}4 & 0\\ 2x & 2x - 6\end{pmatrix}$. Egalând elementele corespunzătoare: $2x = 14$ și $2x - 6 = 8$, ambele dau $x = 7$.

**Răspuns:** $x = 7$. *Barem: 3p calculul $3A(5) - A(1) = 2A(7)$, 2p concluzia.*

### 3. Determinați $m$ cu $A(4)\cdot A(4) + 2I_2 = mA(4)$

$A(4) = \begin{pmatrix}2 & 0\\ 4 & 1\end{pmatrix}$. Înmulțim „linie cu coloană”:

$$A(4)\cdot A(4) = \begin{pmatrix}2\cdot2 + 0\cdot4 & 2\cdot0 + 0\cdot1\\ 4\cdot2 + 1\cdot4 & 4\cdot0 + 1\cdot1\end{pmatrix} = \begin{pmatrix}4 & 0\\ 12 & 1\end{pmatrix}.$$

$$A(4)\cdot A(4) + 2I_2 = \begin{pmatrix}6 & 0\\ 12 & 3\end{pmatrix} = 3\begin{pmatrix}2 & 0\\ 4 & 1\end{pmatrix} = 3A(4).$$

Din $3A(4) = mA(4)$ și $A(4) \ne O_2$ rezultă $m = 3$ (de exemplu, din elementul de pe poziția $(1,1)$: $6 = 2m$).

**Răspuns:** $m = 3$. *Barem: 3p calculul matriceal, 2p valoarea lui $m$.*

### 4. Determinați $x$ cu $\det\left(A(x) + A(x^2)\right) = 0$

$$A(x) + A(x^2) = \begin{pmatrix}2 & 0\\ x & x - 3\end{pmatrix} + \begin{pmatrix}2 & 0\\ x^2 & x^2 - 3\end{pmatrix} = \begin{pmatrix}4 & 0\\ x + x^2 & x^2 + x - 6\end{pmatrix}.$$

$$\det\left(A(x) + A(x^2)\right) = 4(x^2 + x - 6) - 0 = 4(x^2 + x - 6).$$

Ecuația $x^2 + x - 6 = 0$ are $\Delta = 1 + 24 = 25$, deci $x_{1,2} = \dfrac{-1 \pm 5}{2}$, adică $x = -3$ sau $x = 2$. (Factorizat: $4(x - 2)(x + 3)$.)

**Răspuns:** $x \in \{-3, 2\}$. *Barem: 2p determinantul, 3p soluțiile.*

### 5. Determinați $a$, $b$ astfel încât suma elementelor lui $A(x)\cdot A(a)$ să fie $b$, pentru orice $x$

$$A(x)\cdot A(a) = \begin{pmatrix}2 & 0\\ x & x - 3\end{pmatrix}\begin{pmatrix}2 & 0\\ a & a - 3\end{pmatrix} = \begin{pmatrix}4 & 0\\ 2x + a(x-3) & (x-3)(a-3)\end{pmatrix}.$$

Elementele de pe linia a doua: $2x + ax - 3a$ și $ax - 3a - 3x + 9$. Suma tuturor elementelor:

$$4 + 0 + (2x + ax - 3a) + (ax - 3a - 3x + 9) = 2ax - x - 6a + 13 = x(2a - 1) - 6a + 13.$$

Condiția $x(2a - 1) - 6a + 13 = b$ pentru **orice** $x$ real înseamnă că expresia nu depinde de $x$: coeficientul lui $x$ este zero și termenul liber este $b$:

$$2a - 1 = 0 \Rightarrow a = \frac12, \qquad b = -6\cdot\frac12 + 13 = 10.$$

**Răspuns:** $a = \dfrac12$, $b = 10$. *Barem: 2p produsul și suma elementelor, 3p valorile lui $a$ și $b$.*

### 6. $B = \begin{pmatrix}4\\ 0\end{pmatrix}$: determinați $C \in \mathcal M_{2,1}(\mathbb R)$ cu $A(5)\cdot C = B$

Căutăm $C = \begin{pmatrix}a\\ b\end{pmatrix}$ (o matrice cu 2 linii și o coloană):

$$A(5)\cdot C = \begin{pmatrix}2 & 0\\ 5 & 2\end{pmatrix}\begin{pmatrix}a\\ b\end{pmatrix} = \begin{pmatrix}2a\\ 5a + 2b\end{pmatrix}.$$

Din $\begin{pmatrix}2a\\ 5a + 2b\end{pmatrix} = \begin{pmatrix}4\\ 0\end{pmatrix}$: $2a = 4 \Rightarrow a = 2$, apoi $10 + 2b = 0 \Rightarrow b = -5$.

**Verificare:** $\begin{pmatrix}2 & 0\\ 5 & 2\end{pmatrix}\begin{pmatrix}2\\ -5\end{pmatrix} = \begin{pmatrix}4\\ 10 - 10\end{pmatrix} = \begin{pmatrix}4\\ 0\end{pmatrix}$ ✔.

**Răspuns:** $C = \begin{pmatrix}2\\ -5\end{pmatrix}$. *Barem: 2p produsul $A(5)\cdot C$, 3p rezolvarea sistemului.* (Alternativ: $C = A(5)^{-1}B$, inversa există deoarece $\det A(5) = 4 \ne 0$.)

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.1 | $a_3 = 30$ |
| I.2 | $m = 6$ |
| I.3 | $x = 3$ |
| I.4 | $p = \tfrac14$ |
| I.5 | $OM^2 + MN^2 = ON^2$ |
| I.6 | $P = 8(1+\sqrt2)$ |
| II.2 | $x = 2$ |
| II.4 | $n \in \{1, 2\}$ |
| II.5 | $x = -7$ |
| II.6 | $m = 3$, $p = 1$ |
| III.2 | $x = 7$ |
| III.3 | $m = 3$ |
| III.4 | $x \in \{-3, 2\}$ |
| III.5 | $a = \tfrac12$, $b = 10$ |
| III.6 | $C = \begin{pmatrix}2\\ -5\end{pmatrix}$ |

## Ce merită reținut din varianta 4

- **Legi de forma** $k(x-a)(y-a) + a$: elementul neutru se găsește din $k(e - a) = 1$, iar ecuațiile se reduc la un produs de doi factori egal cu o constantă.
- **Ecuații în numere naturale** cu puteri ($2^m$, $3^p$): listează valorile posibile ale factorilor care pot divide constanta.
- **„Pentru orice $x$”**: o expresie de gradul I în $x$ este constantă doar dacă coeficientul lui $x$ este zero.
- **Probabilități**: numără corect elementele unei mulțimi de numere consecutive — $b - a + 1$, nu $b - a$.

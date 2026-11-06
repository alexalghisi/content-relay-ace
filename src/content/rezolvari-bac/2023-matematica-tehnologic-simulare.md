Rezolvarea completă a subiectului de la **simularea națională a Bacalaureatului 2023 la Matematică M_tehnologic** (clasa a XII-a). Pentru fiecare cerință găsești enunțul pe scurt, rezolvarea pas cu pas, răspunsul final și cum se punctează conform baremului oficial. Timp de lucru: 3 ore; se acordă 10 puncte din oficiu.

> **Cum să folosești rezolvarea:** lucrează întâi singur subiectul (deschide PDF-ul de mai sus), apoi compară fiecare pas. Dacă ai ajuns la alt drum corect, primești tot punctajul — baremul acceptă orice soluție corectă.

## Subiectul I (30 de puncte)

### 1. Arătați că $(1 - 0{,}2) : 2 + 0{,}3\cdot 2 = 1$

Respectăm ordinea operațiilor: întâi paranteza, apoi împărțirea și înmulțirea, la final adunarea.

$$(1 - 0{,}2) : 2 + 0{,}3\cdot 2 = 0{,}8 : 2 + 0{,}6 = 0{,}4 + 0{,}6 = 1.$$

*Barem: 3p primele calcule, 2p rezultatul.*

### 2. $f(x) = x^2 - 3x + 2$, $g(x) = x + m$: determinați $m$ cu $f(2) = g(2)$

$f(2) = 4 - 6 + 2 = 0$ și $g(2) = 2 + m$. Condiția: $0 = 2 + m \iff m = -2$.

**Răspuns:** $m = -2$. *Barem: 3p valorile, 2p rezolvarea.*

### 3. Ecuația $7^{x+3} = 49^x$

Scriem ambii membri ca puteri ale lui 7: $49^x = (7^2)^x = 7^{2x}$. Funcția exponențială este injectivă, deci exponenții sunt egali:

$$7^{x+3} = 7^{2x} \iff x + 3 = 2x \iff x = 3.$$

**Răspuns:** $x = 3$. *Barem: 3p aducerea la aceeași bază, 2p soluția.*

### 4. După o ieftinire cu 30%, un produs costă 210 lei. Prețul inițial?

Fie $x$ prețul inițial. Ieftinirea este $\dfrac{30}{100}x$, deci

$$x - \frac{30}{100}x = 210 \iff \frac{70}{100}x = 210 \iff x = \frac{210\cdot 100}{70} = 300.$$

**Răspuns:** 300 de lei. *Barem: 3p ecuația, 2p rezultatul.* Greșeală frecventă: să aduni 30% din 210 (ar da 273, greșit) — procentul se aplică prețului inițial.

### 5. $A(0,5)$, $B(2,-1)$, $M$ mijlocul lui $AB$: triunghiul $OMB$ este dreptunghic în $O$

Mijlocul: $M\left(\dfrac{0+2}{2}, \dfrac{5 + (-1)}{2}\right) = M(1, 2)$. Lungimile laturilor:

$$OM = \sqrt{1^2 + 2^2} = \sqrt5,\quad OB = \sqrt{2^2 + (-1)^2} = \sqrt5,\quad MB = \sqrt{(2-1)^2 + (-1-2)^2} = \sqrt{10}.$$

Verificăm reciproca teoremei lui Pitagora: $OM^2 + OB^2 = 5 + 5 = 10 = MB^2$. Deci triunghiul $OMB$ este dreptunghic, cu unghiul drept opus laturii $MB$, adică în $O$.

*Barem: 3p mijlocul și lungimile $OM$, $MB$, 2p $OB$ și reciproca teoremei lui Pitagora.*

### 6. Arătați că $\sqrt3\sin45^\circ + 2\sin30^\circ - \sqrt2\cos30^\circ = 1$

Valori: $\sin45^\circ = \dfrac{\sqrt2}{2}$, $\sin30^\circ = \dfrac12$, $\cos30^\circ = \dfrac{\sqrt3}{2}$.

$$\sqrt3\cdot\frac{\sqrt2}{2} + 2\cdot\frac12 - \sqrt2\cdot\frac{\sqrt3}{2} = \frac{\sqrt6}{2} + 1 - \frac{\sqrt6}{2} = 1.$$

*Barem: 3p valorile, 2p calculul.*

## Subiectul al II-lea (30 de puncte)

### 1. $A(x) = \begin{pmatrix}x+2 & -2\\ 2 & x-1\end{pmatrix}$

#### a) $\det(A(2)) = 8$

$A(2) = \begin{pmatrix}4 & -2\\ 2 & 1\end{pmatrix}$, deci $\det(A(2)) = 4\cdot 1 - (-2)\cdot 2 = 4 + 4 = 8$.

*Barem: 3p scrierea determinantului, 2p calculul.*

#### b) $x$ pentru care $A(0)\cdot A(0) = A(x)$

$A(0) = \begin{pmatrix}2 & -2\\ 2 & -1\end{pmatrix}$.

$$A(0)\cdot A(0) = \begin{pmatrix}2\cdot2 + (-2)\cdot 2 & 2\cdot(-2) + (-2)(-1)\\ 2\cdot 2 + (-1)\cdot 2 & 2\cdot(-2) + (-1)(-1)\end{pmatrix} = \begin{pmatrix}0 & -2\\ 2 & -3\end{pmatrix}.$$

Egalăm cu $A(x) = \begin{pmatrix}x+2 & -2\\ 2 & x-1\end{pmatrix}$: $x + 2 = 0$ și $x - 1 = -3$, ambele dau $x = -2$.

**Răspuns:** $x = -2$. *Barem: 3p produsul, 2p valoarea lui $x$.*

#### c) Dacă $x \ne y$ și $\det(A(x)) = \det(A(y))$, atunci $x + y = -1$

$$\det(A(x)) = (x+2)(x-1) - (-2)\cdot 2 = x^2 + x - 2 + 4 = x^2 + x + 2.$$

Egalitatea $\det(A(x)) = \det(A(y))$ devine:

$$x^2 + x + 2 = y^2 + y + 2 \iff (x^2 - y^2) + (x - y) = 0 \iff (x - y)(x + y + 1) = 0.$$

Cum $x \ne y$, factorul $x - y \ne 0$, deci $x + y + 1 = 0$, adică $x + y = -1$.

*Barem: 2p determinantul, 3p factorizarea și concluzia.*

### 2. Legea $x * y = 4xy - 3x + 2y - 1$

#### a) $1 * 2 = 8$

$1 * 2 = 4\cdot1\cdot2 - 3\cdot 1 + 2\cdot 2 - 1 = 8 - 3 + 4 - 1 = 8$.

*Barem: 3p înlocuirea, 2p calculul.*

#### b) $x$ pentru care $x * (-1) = 4$

$x * (-1) = -4x - 3x - 2 - 1 = -7x - 3$. Ecuația: $-7x - 3 = 4 \iff -7x = 7 \iff x = -1$.

**Răspuns:** $x = -1$. *Barem: 2p expresia, 3p rezolvarea.*

#### c) $a$ pentru care $x * a = -x$, pentru orice $x$ real

$x * a = 4ax - 3x + 2a - 1$. Condiția:

$$4ax - 3x + 2a - 1 = -x \iff 4ax - 2x + 2a - 1 = 0 \iff 2x(2a - 1) + (2a - 1) = 0 \iff (2a - 1)(2x + 1) = 0.$$

Egalitatea trebuie să aibă loc **pentru orice** $x$ (deci și pentru $x = 0$, unde $2x + 1 \ne 0$), așa că $2a - 1 = 0$, adică $a = \dfrac12$. Reciproc, pentru $a = \frac12$ relația e adevărată pentru orice $x$.

**Răspuns:** $a = \dfrac12$. *Barem: 3p transformarea relației, 2p valoarea lui $a$.*

## Subiectul al III-lea (30 de puncte)

### 1. $f:(0, +\infty) \to \mathbb R$, $f(x) = 2x - 1 + \dfrac8x$

#### a) $f'(x) = \dfrac{2(x^2 - 4)}{x^2}$

$\left(\dfrac8x\right)' = -\dfrac{8}{x^2}$, deci

$$f'(x) = 2 - \frac{8}{x^2} = \frac{2x^2 - 8}{x^2} = \frac{2(x^2 - 4)}{x^2}.$$

*Barem: 3p derivata, 2p forma cerută.*

#### b) Tangenta în punctul de abscisă $x = 2$

$f(2) = 4 - 1 + 4 = 7$, iar $f'(2) = \dfrac{2(4 - 4)}{4} = 0$.

$y - f(2) = f'(2)(x - 2) \iff y - 7 = 0 \iff y = 7$.

**Răspuns:** $y = 7$. *Barem: 2p $f(2)$ și $f'(2)$, 3p ecuația tangentei.*

#### c) $f(1 - x) \ge f(1 + x)$, pentru orice $x \in (0, 1)$

Semnul lui $f'$: $x^2 > 0$, deci semnul este dat de $x^2 - 4 = (x-2)(x+2)$. Pe $(0, 2]$ avem $x - 2 \le 0$ și $x + 2 > 0$, deci $f'(x) \le 0$ (cu egalitate doar în $x = 2$): **$f$ este descrescătoare pe $(0, 2]$**.

Pentru $x \in (0,1)$: $0 < 1 - x < 1 < 1 + x < 2$, deci ambele numere $1 - x$ și $1 + x$ sunt în $(0, 2]$ și $1 - x < 1 + x$. O funcție descrescătoare inversează inegalitatea:

$$1 - x < 1 + x \Rightarrow f(1 - x) \ge f(1 + x).$$

*Barem: 2p monotonia pe $(0, 2]$, 3p încadrarea și concluzia.*

### 2. $f:\mathbb R \to \mathbb R$, $f(x) = 3x^2 + 4x + 2$

#### a) $\displaystyle\int_0^2 (f(x) - 4x)\,dx = 12$

$$\int_0^2 (3x^2 + 2)\,dx = (x^3 + 2x)\Big|_0^2 = 8 + 4 - 0 = 12.$$

*Barem: 3p primitiva, 2p calculul.*

#### b) $\displaystyle\int_0^1 (f(x) - 3x^2 - 2)e^x\,dx = 4$

Integrandul devine $4xe^x$. Integrăm prin părți, cu $u = 4x$, $v' = e^x$:

$$\int_0^1 4xe^x\,dx = 4xe^x\Big|_0^1 - \int_0^1 4e^x\,dx = 4e - 4(e - 1) = 4.$$

(Echivalent: o primitivă a lui $4xe^x$ este $4(x-1)e^x$, iar $4(x-1)e^x\big|_0^1 = 0 - (-4) = 4$.)

*Barem: 3p integrarea prin părți, 2p calculul.*

#### c) $a \in (0, +\infty)$ pentru care $\displaystyle\int_{-1}^0 a\, f'(x)\,(f(x))^{a-1}\,dx = 63$

Observăm că integrandul este derivata unei funcții compuse: $\left((f(x))^a\right)' = a\,(f(x))^{a-1}f'(x)$. (Puterea are sens: $f$ are discriminantul $16 - 24 < 0$, deci $f(x) > 0$ pentru orice $x$.)

$$\int_{-1}^0 a\,f'(x)(f(x))^{a-1}\,dx = (f(x))^a\Big|_{-1}^0 = f(0)^a - f(-1)^a.$$

$f(0) = 2$, $f(-1) = 3 - 4 + 2 = 1$, deci integrala este $2^a - 1^a = 2^a - 1$.

$$2^a - 1 = 63 \iff 2^a = 64 = 2^6 \iff a = 6,$$

care aparține lui $(0, +\infty)$, deci convine.

**Răspuns:** $a = 6$. *Barem: 3p calculul integralei $2^a - 1$, 2p valoarea lui $a$.*

## Rezumatul răspunsurilor

| Cerință | Răspuns |
|---|---|
| I.2 | $m = -2$ |
| I.3 | $x = 3$ |
| I.4 | 300 de lei |
| I.5 | $OM^2 + OB^2 = MB^2$ |
| II.1.b | $x = -2$ |
| II.1.c | $x + y = -1$ |
| II.2.b | $x = -1$ |
| II.2.c | $a = \dfrac12$ |
| III.1.b | $y = 7$ |
| III.2.c | $a = 6$ |

## Ce merită reținut din simulare

- **Procente inverse**: după o ieftinire cu $p\%$, prețul nou este $(100 - p)\%$ din cel inițial — împarte, nu aduna.
- **„Pentru orice $x$”**: grupează după $x$ și impune ca toți coeficienții să fie zero.
- **Inegalități între valori ale funcției**: stabilește monotonia, apoi compară argumentele.
- **Integrale de forma $a f'(x) f^{a-1}(x)$**: recunoaște derivata lui $f^a$ — integrarea devine imediată.

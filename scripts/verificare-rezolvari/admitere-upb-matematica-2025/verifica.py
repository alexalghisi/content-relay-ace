#!/usr/bin/env python3
"""Verificare simbolică (SymPy) a rezolvării UPB 2025 (iulie), Algebră și Elemente de Analiză Matematică, Varianta S.
Pentru fiecare item: calculează independent răspunsul, cere să coincidă cu EXACT o variantă tipărită
și cu varianta declarată în rezolvare.
Rulează: python3 -I scripts/verificare-rezolvari/admitere-upb-matematica-2025/verifica.py  (ieșire 0 = toate PASS)"""
import sys

from sympy import (E, Abs, Matrix, Poly, Rational, Symbol, binomial, diff, exp, floor, integrate,
                   limit, log, minimum, oo, simplify, solve, Interval)

x = Symbol("x", real=True)
fail = 0


def check(nume, valoare, optiuni, declarata):
    """valoare = rezultatul calculat; optiuni = {litera: valoare tipărită}; declarata = litera din rezolvare."""
    global fail
    potriviri = [l for l, v in optiuni.items() if simplify(v - valoare) == 0]
    ok = potriviri == [declarata]
    print(("PASS " if ok else "FAIL ") + f"{nume}: calculat {valoare} -> variante potrivite {potriviri}, declarat {declarata}")
    fail |= not ok


# 1. 2^(x+1) + 2^x = 12
s = solve(2 ** (x + 1) + 2 ** x - 12, x)
assert len(s) == 1
check("Q1 x", s[0], dict(a=2, b=-2, c=1, d=-1, e=0, f=3), "a")

# 2. C(n,2) = 6, n natural
n = Symbol("n")
s = [v for v in solve(n * (n - 1) / 2 - 6, n) if v.is_integer and v >= 2]
assert len(s) == 1 and binomial(s[0], 2) == 6
check("Q2 n", s[0], dict(a=4, b=2, c=3, d=5, e=8, f=10), "a")

# 3. progresie aritmetică r = 3, a3 = 7 -> a5
a1 = Symbol("a1")
a1v = solve(a1 + 2 * 3 - 7, a1)[0]
check("Q3 a5", a1v + 4 * 3, dict(a=13, b=10, c=8, d=9, e=14, f=12), "a")

# 4. det [[x,6],[1,2]] = 0
s = solve(Matrix([[x, 6], [1, 2]]).det(), x)
assert len(s) == 1
check("Q4 x", s[0], dict(a=3, b=0, c=-1, d=2, e=-2, f=-3), "a")

# 5. f(x) = e^x + x^2, f'(1)
check("Q5 f'(1)", diff(exp(x) + x ** 2, x).subs(x, 1),
      dict(a=E + 2, b=2 * E + 1, c=2, d=0, e=E, f=E + 1), "a")

# 6. lim x->2 (x^2-3x+2)/(x-2)
check("Q6 l", limit((x ** 2 - 3 * x + 2) / (x - 2), x, 2), dict(a=1, b=0, c=3, d=2, e=-1, f=-2), "a")

# 7. f(x) = x + 1/(x-1) pe (1,∞): asimptota oblică și aria între x = 2 și x = 3
f7 = x + 1 / (x - 1)
mm = limit(f7 / x, x, oo)
nn = limit(f7 - mm * x, x, oo)
assert (mm, nn) == (1, 0)
dif = simplify(f7 - (mm * x + nn))
assert minimum(dif, x, Interval(2, 3)) > 0  # graficul e deasupra asimptotei pe [2, 3]
arie = integrate(dif, (x, 2, 3))
check("Q7 aria", arie, dict(a=log(2), b=log(3), c=1, d=3, e=2 * log(2), f=2), "a")

# 8. X^3 + mX + 6, m < 0, Σ x_i^4 = 98 -> Σ |x_i|
m, X = Symbol("m"), Symbol("X")
# Viète: s1 = 0, s2 = m, s3 = -6; sume de puteri prin identitățile lui Newton
s1, s2, s3 = 0, m, -6
P1 = s1
P2 = s1 * P1 - 2 * s2
P3 = s1 * P2 - s2 * P1 + 3 * s3
P4 = s1 * P3 - s2 * P2 + s3 * P1
assert simplify(P4 - 2 * m ** 2) == 0
ms = [v for v in solve(P4 - 98, m) if v < 0]
assert ms == [-7]
radacini = Poly(X ** 3 - 7 * X + 6, X).all_roots()
assert sorted(radacini) == [-3, 1, 2] and sum(t ** 4 for t in radacini) == 98
check("Q8 Σ|xi|", sum(Abs(t) for t in radacini), dict(a=6, b=2, c=4, d=0, e=5, f=3), "a")

# 9. [(2x-1)/3] + [(4x+1)/6] = (5x-4)/3 — numărul soluțiilor reale
# Membrul drept e un întreg k, deci x = (3k+4)/5; marginea analitică dă -5,5 < k ≤ 4,5.
# Verificăm exhaustiv o plajă mult mai largă decât marginea.
sol9 = []
for k in range(-1000, 1001):
    xv = Rational(3 * k + 4, 5)
    if floor((2 * xv - 1) / 3) + floor((4 * xv + 1) / 6) == (5 * xv - 4) / 3:
        sol9.append(xv)
assert sol9 == [Rational(-2, 5), Rational(1, 5), Rational(4, 5), Rational(7, 5), 2], sol9
check("Q9 număr soluții", len(sol9), dict(a=5, b=9, c=10, d=8, e=6, f=7), "a")

# 10. ||x-1|-2|-3| = mx are o infinitate de soluții
g = Abs(Abs(Abs(x - 1) - 2) - 3)
# g e liniară pe porțiuni cu nodurile -4, -1, 1, 3, 6. Infinit de soluții ⇔ pe o porțiune g(x) ≡ mx,
# adică porțiunea trece prin origine (termen liber 0) și m = panta ei.
noduri = [-oo, -4, -1, 1, 3, 6, oo]
valori_m = set()
for st, dr in zip(noduri, noduri[1:]):
    t = st + 1 if dr == oo else (dr - 1 if st == -oo else Rational(st + dr, 2))
    panta = diff(g, x).subs(x, t)
    termen_liber = simplify(g.subs(x, t) - panta * t)
    if termen_liber == 0:
        valori_m.add(panta)
assert valori_m == {1}, valori_m
assert all(g.subs(x, Rational(v, 10)) == Rational(v, 10) for v in range(10, 31))  # pe [1,3], g(x) = x
check("Q10 m", valori_m.pop(), dict(a=1, b=-1, c=3, d=-4, e=-2, f=-3), "a")

print("TOATE PASS" if not fail else "EXISTĂ FAIL")
sys.exit(1 if fail else 0)

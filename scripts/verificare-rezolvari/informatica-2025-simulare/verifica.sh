#!/usr/bin/env bash
# Compilează și rulează rezolvările de la Informatică BAC 2025, simulare (mate-info, C/C++).
# Ieșire 0 = toate verificările au trecut. Rulează: bash scripts/verificare-rezolvari/informatica-2025-simulare/verifica.sh
set -euo pipefail
cd "$(dirname "$0")"
W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
fail=0
check() { if [[ "$2" == "$3" ]]; then echo "PASS $1"; else echo "FAIL $1: așteptat [$3], obținut [$2]"; fail=1; fi; }
for f in s1_verificari s2_1c s2_1d s2_2 s2_3 s3_1 s3_2 s3_3; do g++ -std=c++17 -O2 -Wall -Werror -o "$W/$f" "$f.cpp"; done

out=$("$W/s1_verificari")
check "I.1 (c: 7)" "$(grep '^I1' <<<"$out")" "I1 7"
check "I.2 (a: v[0].s)" "$(grep '^I2' <<<"$out")" "I2 v[0].s=1.5"
check "I.3 (b: 8)" "$(grep '^I3' <<<"$out")" "I3 lant(14,47)=8 lca=1"
check "I.4 (b: 4)" "$(grep '^I4' <<<"$out")" "I4 f(1234)=4"
check "I.5 (c: 10)" "$(grep '^I5' <<<"$out")" "I5 muchii=21 minim eliminate=10"

check "II.1a n=20 m=30" "$(echo 20 30 | "$W/s2_1c")" "2"
# II.1a independent: numărul de numere prime din [20,30], calculat în Python
check "II.1a control Python" "$(python3 -I -c "print(sum(all(x%d for d in range(2,x)) for x in range(20,31) if x>=2))")" "2"
two=$(for n in $(seq 1 22); do [[ $(echo "$n 22" | "$W/s2_1c") == 2 ]] && printf "%s " $n; done; true)
check "II.1b valorile lui n (m=22) care dau 2" "$two" "14 15 16 17 "
ok=1
for n in $(seq 0 40); do for m in $(seq $n 45); do
  a=$(echo "$n $m" | "$W/s2_1c"); b=$(echo "$n $m" | "$W/s2_1d")
  [[ "$a" == "$b" ]] || { echo "FAIL II.1d echivalență la n=$n m=$m"; ok=0; fail=1; }
done; done
[[ $ok == 1 ]] && echo "PASS II.1d echivalent cu algoritmul dat pentru toate 0≤n≤m, n≤40, m≤45"
check "II.1d n=m=97" "$(echo 97 97 | "$W/s2_1d")" "1"

check "II.2 primul mai tânăr" "$(echo '15 170 60.25 17 180 70.50' | "$W/s2_2")" "170"
check "II.2 al doilea mai tânăr" "$(echo '18 170 60.25 16 165 70.50' | "$W/s2_2")" "165"
check "II.2 aceeași vârstă, al doilea mai ușor" "$(echo '16 170 72.10 16 182 65.75' | "$W/s2_2")" "182"
check "II.2 aceeași vârstă, primul mai ușor" "$(echo '16 170 61.10 16 182 65.75' | "$W/s2_2")" "170"
check "II.3 tabloul din enunț" "$("$W/s2_3")" "$(printf '1 1 1 1 1 1\n2 2 0 0 2 2\n3 3 0 0 3 3\n4 4 0 0 4 4\n5 5 0 0 5 5\n6 6 6 6 6 6')"
nat=$(grep -c 'a\[i\]\[j\] = ' s2_3.cpp)
check "II.3 o singură atribuire în secvență (≤ 6 permise)" "$nat" "1"

check "III.1 exemplul din enunț (imp=4, returnează 3)" "$(echo '7 2 25 7 6 15 9 8' | "$W/s3_1")" "4 3"
check "III.1 un singur element 1000" "$(echo '1 1000' | "$W/s3_1")" "0 3"
check "III.1 negative" "$(echo '3 -4 -25 3' | "$W/s3_1")" "2 2"
check "III.1 conține 0 (produs 0)" "$(echo '3 5 0 7' | "$W/s3_1")" "2 1"
# III.1 independent: 300 de vectori aleatori, produsul calculat exact în Python (întregi nelimitați)
python3 -I -c "
import random
random.seed(2025)
inp, exp = [], []
for _ in range(300):
    n = random.randint(1, 100)
    a = [random.choice([random.randint(-1000, 1000), random.choice([2,4,5,10,25,125,16,40,-50])]) for _ in range(n)]
    p = 1
    for v in a: p *= v
    s = str(abs(p)); z = len(s) - len(s.rstrip('0')) if p != 0 else 1
    inp.append(' '.join(map(str, [n] + a))); exp.append(f'{sum(v % 2 != 0 for v in a)} {z}')
open('$W/r31.in', 'w').write('\n'.join(inp) + '\n'); open('$W/r31.exp', 'w').write('\n'.join(exp) + '\n')"
check "III.1 300 de vectori aleatori vs produsul exact din Python" "$("$W/s3_1" < "$W/r31.in")" "$(cat "$W/r31.exp")"

ex=$(echo 'la orele de muzica fredonam doine, balade, solfegii si cantece remixate' | "$W/s3_2")
check "III.2 exemplul din enunț" "$ex" "8 fredonam"
check "III.2 virgule și spații multiple" "$(echo 'sol,,  domisol , cer,re' | "$W/s3_2")" "3 domisol"
check "III.2 niciun cuvânt muzical" "$(echo 'cer albastru' | "$W/s3_2")" "0"
# III.2 independent: aceeași cerință implementată separat în Python, pe texte aleatoare
python3 -I -c "
import random, re
random.seed(7)
note = ['do','re','mi','fa','sol','la','si']
ins, exps = [], []
for _ in range(200):
    words = [''.join(random.choice('adefilmorsx') for _ in range(random.randint(1, 8))) for _ in range(random.randint(1, 20))]
    t = ''
    for w in words: t += w + random.choice([' ', ',', ', ', '  '])
    t = t[:200].rstrip(' ,')
    ws = [w for w in re.split('[ ,]+', t) if w]
    c = [sum(x in w for x in note) for w in ws]
    nr = sum(v > 0 for v in c)
    best = ws[c.index(max(c))] if nr else ''
    ins.append(t); exps.append(f'{nr} {best}' if nr else '0')
open('$W/r32.in','w').write('\n'.join(ins)+'\n'); open('$W/r32.exp','w').write('\n'.join(exps)+'\n')"
ok=1; i=0
while IFS= read -r t; do i=$((i+1)); e=$(sed -n "${i}p" "$W/r32.exp"); g=$(printf '%s\n' "$t" | "$W/s3_2")
  [[ "$g" == "$e" ]] || { echo "FAIL III.2 text aleator #$i: [$t] așteptat [$e] obținut [$g]"; ok=0; fail=1; }
done < "$W/r32.in"
[[ $ok == 1 ]] && echo "PASS III.2 200 de texte aleatoare vs implementarea independentă din Python"

run33() { (cd "$W" && printf '%s\n%s\n' "$1" "$2" > BAC.IN && ./s3_3); }
check "III.3 exemplul m=5 n=14" "$(run33 5 14)" "OK 4"
check "III.3 exemplul m=5 n=24" "$(run33 5 24)" "EROARE"
check "III.3 m=5 n=15 (ultimul semnal emis)" "$(run33 5 15)" "OK 5"
check "III.3 m=5 n=16" "$(run33 5 16)" "EROARE"
check "III.3 m=1 n=1" "$(run33 1 1)" "OK 1"
# Toate perechile mici (m ≤ 30, n ≤ m(m+1)/2 + 3) comparate cu șirul construit efectiv
ok=1
while read -r m n e; do g=$(run33 "$m" "$n"); [[ "$g" == "$e" ]] || { echo "FAIL III.3 m=$m n=$n: așteptat [$e] obținut [$g]"; ok=0; fail=1; }
done < <(python3 -I -c "
for m in range(1, 31):
    s = [c for k in range(1, m + 1) for c in range(1, k + 1)]
    for n in range(1, len(s) + 4):
        print(m, n, f'OK {s[n-1]}' if n <= len(s) else 'EROARE')")
[[ $ok == 1 ]] && echo "PASS III.3 toate perechile m ≤ 30 comparate cu șirul generat în Python"
# Valori mari: n = 10^9 și m = 10^6 (rezultat calculat cu formula închisă în Python)
big=$(python3 -I -c "
from math import isqrt
def r(m, n):
    k = (isqrt(8*n + 1) - 1) // 2
    if k*(k+1)//2 < n: k += 1
    return 'EROARE' if k > m else f'OK {n - (k-1)*k//2}'
print(r(1000000, 1000000000)); print(r(44720, 1000000000)); print(r(44721, 1000000000)); print(r(1000000, 999961560))")
check "III.3 m=10^6 n=10^9" "$(run33 1000000 1000000000)" "$(sed -n 1p <<<"$big")"
check "III.3 m=44720 n=10^9" "$(run33 44720 1000000000)" "$(sed -n 2p <<<"$big")"
check "III.3 m=44721 n=10^9" "$(run33 44721 1000000000)" "$(sed -n 3p <<<"$big")"
check "III.3 m=10^6 n=999961560" "$(run33 1000000 999961560)" "$(sed -n 4p <<<"$big")"
exit $fail

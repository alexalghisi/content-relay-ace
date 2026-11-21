#!/usr/bin/env bash
# Compilează și rulează rezolvările de la Informatică BAC 2027, model oficial (C/C++).
# Ieșire 0 = toate verificările au trecut. Rulează: bash scripts/verificare-rezolvari/informatica-2027-model/verifica.sh
set -euo pipefail
cd "$(dirname "$0")"
W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
fail=0
check() { if [[ "$2" == "$3" ]]; then echo "PASS $1"; else echo "FAIL $1: obținut [$2], așteptat [$3]"; fail=1; fi; }
for f in s1_verificari s2_1c s2_1d s2_3 s3_1 s3_2 s3_3; do g++ -std=c++17 -O2 -Wall -o "$W/$f" "$f.cpp"; done

out=$("$W/s1_verificari")
check "I.1 (A este singura cu valoarea 0)" "$(grep I1 <<<"$out")" "I1 0111"
check "I.3 f(97,0)" "$(grep I3 <<<"$out")" "I3 19"
check "I.4 primele trei soluții + a șasea" "$(grep I4 <<<"$out")" "I4 (rucsac, lanterna, bidon, harta) | (rucsac, lanterna, busola) | (rucsac, bidon, busola, harta) | (lanterna, bidon, pelerina, harta)"
check "I.5 frunze pentru total minim" "$(grep I5 <<<"$out")" "I5 24 total 36"

check "II.1a (11, 2)" "$(echo 11 2 | "$W/s2_1c")" "2048"
b=""; for y in $(seq 1 10); do v=$(echo 3 $y | "$W/s2_1c"); if (( v >= 27 && v <= 127 )); then b="$b $y"; fi; done
check "II.1b y din [1,10] pentru x=3" "$b" " 3 4 5"
eq=ok; for x in $(seq 0 12); do for y in $(seq 0 5); do
  [[ "$(echo $x $y | "$W/s2_1c")" == "$(echo $x $y | "$W/s2_1d")" ]] || eq="diferit la $x $y"; done; done
check "II.1d echivalent cu II.1c (x 0..12, y 0..5, inclusiv x=0)" "$eq" "ok"
exp=$(for i in $(seq 8); do echo "2 2 0 0 2 2 7 7"; done)
check "II.3 tabloul cerut" "$("$W/s2_3")" "$exp"

check "III.1 exemplul 18 24" "$(echo 18 24 | "$W/s3_1")" "432 cu latura 1;108 cu latura 2;48 cu latura 3;12 cu latura 6;"
check "III.1 x=y=1" "$(echo 1 1 | "$W/s3_1")" "1 cu latura 1;"
check "III.1 numere prime între ele 7 10" "$(echo 7 10 | "$W/s3_1")" "70 cu latura 1;"
check "III.2 exemplul din enunț" "$(echo 'a(b5) xyz [x1]y2 (x) {a6bc} 27 pq {ba}a)' | "$W/s3_2")" "3"
check "III.2 fără litere și paranteze" "$(echo '27 99' | "$W/s3_2")" "0"
check "III.2 un singur cuvânt" "$(echo '()ab' | "$W/s3_2")" "1"

( cd "$W" && printf '19912 19910 28012 38012 29011 3010 19015 38011 37015 22030 29915 29910 18911' > bac.txt && check "III.3 exemplul din enunț" "$(./s3_3)" "12" )
# Comparație cu o implementare independentă în Python pe date aleatoare.
for seed in 1 2 3 4 5 6 7 8; do
  python3 - "$seed" > "$W/bac.txt" <<'PY'
import random, sys
random.seed(int(sys.argv[1])); out=[]
for e in random.sample(range(10,100), random.randint(1,30)):
    for p in random.sample([1,2,3], random.randint(1,3)):
        out.append(int(f"{p}{random.choice([99,99,random.randint(0,99)])}{e}"))
random.shuffle(out); print(" ".join(map(str,out)))
PY
  ref=$(python3 - "$W/bac.txt" <<'PY'
import sys
t={}
for s in open(sys.argv[1]).read().split():
    e=int(s[-2:]); sc=int(s[1:-2]); a=t.setdefault(e,[0,0]); a[0]+=sc; a[1]+= sc==99
print(min(t, key=lambda e:(-t[e][0],-t[e][1],e)))
PY
)
  check "III.3 aleator seed $seed" "$(cd "$W" && ./s3_3)" "$ref"
done
exit $fail

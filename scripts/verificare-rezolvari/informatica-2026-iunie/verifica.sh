#!/usr/bin/env bash
# Compilează și rulează rezolvările de la Informatică BAC 2026 iunie (Varianta 4, C/C++).
# Ieșire 0 = toate verificările au trecut. Rulează: bash scripts/verificare-rezolvari/informatica-2026-iunie/verifica.sh
set -euo pipefail
cd "$(dirname "$0")"
W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
fail=0
check() { if [[ "$2" == "$3" ]]; then echo "PASS $1"; else echo "FAIL $1: așteptat [$3], obținut [$2]"; fail=1; fi; }
for f in s1_verificari s2_1c s2_1d s2_3 s3_1 s3_2 s3_3; do g++ -std=c++17 -O2 -Wall -o "$W/$f" "$f.cpp"; done

out=$("$W/s1_verificari")
check "I.1 (d: 2026%100=26)" "$(grep '^I1' <<<"$out")" "I1 a=20 b=20 c=0 d=26"
check "I.2 (b: 3)" "$(grep '^I2' <<<"$out")" "I2 f(1,10)=3"
check "I.3 (b)" "$(grep '^I3' <<<"$out")" "I3 inainte: Eselnita,Predeal,Olimp"
check "I.4 (c)" "$(grep '^I4' <<<"$out" | tr '\n' ' ')" "I4 a circuit elementar: NU I4 b circuit elementar: NU I4 c circuit elementar: DA I4 d circuit elementar: NU "
check "I.5 (c: 5)" "$(grep "^I5" <<<"$out")" "I5 minim muchii eliminate=5"
check "II.2" "$(grep '^II2' <<<"$out")" "II2 10 DA DA"

check "II.1a n=2600" "$(echo 2600 | "$W/s2_1c")" "3"
for n in $(seq 10 99); do
  a=$(echo $n | "$W/s2_1c"); b=$(echo $n | "$W/s2_1d")
  [[ "$a" == "$b" ]] || { echo "FAIL II.1d echivalență la n=$n"; fail=1; }
done
echo "PASS II.1d echivalent cu algoritmul dat pentru n=10..99"
for n in 1 2 97 1000000 999999937; do
  a=$(echo $n | "$W/s2_1c"); b=$(echo $n | "$W/s2_1d"); check "II.1d n=$n" "$b" "$a"
done
ones=$(for n in $(seq 10 99); do [[ $(echo $n | "$W/s2_1c") == 1 ]] && printf "%s " $n; done; true)
check "II.1b numere cu afișare 1" "$ones" "11 13 16 17 19 23 25 27 29 31 32 37 41 43 47 49 53 59 61 64 67 71 73 79 81 83 89 97 "
"$W/s2_3"; check "II.3 structura compilează și se folosește" "ok" "ok"

check "III.1 n=576798" "$(echo 576798 | "$W/s3_1")" "3"
check "III.1 n=5700" "$(echo 5700 | "$W/s3_1")" "3"
check "III.1 n=0" "$(echo 0 | "$W/s3_1")" "1"
check "III.1 n=8" "$(echo 8 | "$W/s3_1")" "1"
check "III.1 n=1000000000" "$(echo 1000000000 | "$W/s3_1")" "2"
check "III.1 n=135792" "$(echo 135792 | "$W/s3_1")" "6"

ex=$(printf '4 5\n7 5 3 0 9\n1 2 1 9 7\n2 2 0 1 5\n5 6 1 2 8\n' | "$W/s3_2" | sed 's/ *$//')
check "III.2 exemplul din enunț" "$ex" "$(printf '7 2 0 0 9\n5 5 1 9 7\n2 2 3 1 8\n1 6 1 2 5')"
ex=$(printf '2 2\n4 4\n4 4\n' | "$W/s3_2" | sed 's/ *$//')
check "III.2 minime egale" "$ex" "$(printf '4 4\n4 4')"

(cd "$W" && echo "189 93" | ./s3_3 && check "III.3 exemplul din enunț" "$(cat bac.txt)" "189 93 45 21 9 3 0")
(cd "$W" && echo "3 0" | ./s3_3 && check "III.3 doar două luni" "$(cat bac.txt)" "3 0")
big=$(python3 -c "
a=[0,3]
while a[-1]<=10**9: a.append(a[-1]+2*abs(a[-1]-a[-2]))
a.pop(); print(a[-1],a[-2]); print(' '.join(map(str,reversed(a))))")
(cd "$W" && head -1 <<<"$big" | ./s3_3 && check "III.3 cel mai mare termen ≤ 10^9" "$(cat bac.txt)" "$(tail -1 <<<"$big")")
exit $fail

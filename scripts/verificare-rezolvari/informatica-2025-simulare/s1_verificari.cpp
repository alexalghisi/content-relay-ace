// Verifică itemii de grilă din Subiectul I (Informatică 2025, simulare, mate-info).
#include <bits/stdc++.h>
using namespace std;
struct interval { float s, d; } v[20];
int f(int n){ if (n!=0) return (n%2)*(n%10)+f(n/10); return 0; }
int main(){
  // I.1 — expresia exact ca în enunț
  printf("I1 %d\n", 3+7/4+3);
  // I.2 — v[0].s compilează și este extremitatea stângă a primului interval
  v[0].s = 1.5f; v[0].d = 2.5f;
  printf("I2 v[0].s=%.1f\n", v[0].s);
  // I.3 — tatăl lui i este [i/2]; lungimea lanțului = numărul de muchii între 14 și 47
  auto adancime = [](int x){ int d = 0; while (x != 1) { x /= 2; d++; } return d; };
  int a = 14, b = 47, lca_a = a, lca_b = b;
  while (lca_a != lca_b) { if (lca_a > lca_b) lca_a /= 2; else lca_b /= 2; }
  int lung = adancime(a) + adancime(b) - 2 * adancime(lca_a);
  printf("I3 lant(14,47)=%d lca=%d\n", lung, lca_a);
  // I.4
  printf("I4 f(1234)=%d\n", f(1234));
  // I.5 — 7 noduri, 21 de muchii = graf complet K7. Forță brută peste toate grafurile parțiale
  // (2^21 submulțimi de muchii): minimul de muchii eliminate astfel încât să rămână exact
  // două componente conexe, fiecare cu cel puțin două noduri.
  vector<pair<int,int>> E;
  for (int i = 0; i < 7; i++) for (int j = i + 1; j < 7; j++) E.push_back({i, j});
  int best = INT_MAX;
  for (int mask = 0; mask < (1 << 21); mask++) {          // mask = muchiile păstrate
    int elim = 21 - __builtin_popcount(mask);
    if (elim >= best) continue;
    int p[7]; iota(p, p + 7, 0);
    function<int(int)> rad = [&](int x){ return p[x] == x ? x : p[x] = rad(p[x]); };
    for (int e = 0; e < 21; e++) if (mask >> e & 1) p[rad(E[e].first)] = rad(E[e].second);
    map<int,int> cnt; for (int i = 0; i < 7; i++) cnt[rad(i)]++;
    if (cnt.size() != 2) continue;
    bool ok = true; for (auto& c : cnt) ok &= c.second >= 2;
    if (ok) best = elim;
  }
  printf("I5 muchii=%zu minim eliminate=%d\n", E.size(), best);
}

// Verificări pentru Subiectul I (BAC 2027, model, informatică C/C++).
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int f(int n, int k) {
    if (n == 0) return 0;
    else if (k * k <= n) return k + f(n / 2, k + 1);
    else return k + f(n / 2, n);
}

const char* NUME[] = {"rucsac", "bocanci", "lanterna", "bidon", "pelerina", "busola", "harta"};
const int PRET[] = {100, 200, 50, 20, 100, 50, 30};
vector<string> sol;
int st[8];
void bt(int k, int start, int suma) {
    if (suma == 200) {
        string s = "(";
        for (int i = 0; i < k; i++) s += string(i ? ", " : "") + NUME[st[i]];
        sol.push_back(s + ")");
        return;
    }
    for (int i = start; i < 7; i++)
        if (suma + PRET[i] <= 200) { st[k] = i; bt(k + 1, i + 1, suma + PRET[i]); }
}

int main() {
    cout << "I1 " << (27 == 27 / (3 * 3 * 3)) << (27 == (27 + 1) / 3 * 3) << (27 == 27 / 3 + 27 / 3 + 27 / 3)
         << (27 == (27 + 2) / 3 + (27 + 1) / 3 + 27 / 3) << "\n";
    cout << "I3 " << f(97, 0) << "\n";
    bt(0, 0, 0);
    cout << "I4 " << sol[0] << " | " << sol[1] << " | " << sol[2] << " | " << sol[5] << "\n";
    int best = 1 << 30, frunze = 0;
    for (int a = 1; a <= 9; a++) for (int b = 1; b <= 9; b++) for (int c = 1; c <= 9; c++) {
        if (a == b || a == c || b == c || a == 4 || b == 4 || c == 4) continue;
        int total = 1 + a + a * b + 4 * a * b + 4 * a * b * c;
        if (total < best) { best = total; frunze = 4 * a * b * c; }
    }
    cout << "I5 " << frunze << " total " << best << "\n";
}

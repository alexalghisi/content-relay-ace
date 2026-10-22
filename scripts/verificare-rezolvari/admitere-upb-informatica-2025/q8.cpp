// Itemul 8: căutarea „în scară” într-o matrice sortată pe linii și pe coloane, comparată cu căutarea completă.
#include <iostream>
#include <random>
#include <vector>
#include <algorithm>

int comparatii;

bool cauta(const std::vector<std::vector<double>>& a, int n, double x) {
  int i = 0, j = n - 1;           // pornim din colțul dreapta-sus
  while (i < n && j >= 0) {
    comparatii++;
    if (a[i][j] == x) return true;
    if (a[i][j] > x) j--;         // tot ce e sub a[i][j] pe coloana j e și mai mare
    else i++;                     // tot ce e în stânga lui a[i][j] pe linia i e și mai mic
  }
  return false;
}

int main() {
  std::mt19937 rng(2025);
  long long teste = 0, gresite = 0, pesteLimita = 0;
  for (int n = 1; n <= 40; n++)
    for (int rep = 0; rep < 60; rep++) {
      std::vector<std::vector<double>> a(n, std::vector<double>(n));
      for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) {
          double sus = i ? a[i - 1][j] : 0, st = j ? a[i][j - 1] : 0;
          a[i][j] = std::max(sus, st) + (rng() % 3) * 0.5; // crescător pe linii și pe coloane
        }
      for (int q = 0; q < 20; q++) {
        double x = (rng() % (4 * n + 4)) * 0.25;
        bool brut = false;
        for (auto& lin : a)
          for (double v : lin)
            if (v == x) brut = true;
        comparatii = 0;
        bool r = cauta(a, n, x);
        teste++;
        if (r != brut) gresite++;
        if (comparatii > 2 * n - 1) pesteLimita++;
      }
    }
  std::cout << "teste=" << teste << " gresite=" << gresite << " peste_2n-1=" << pesteLimita << "\n";
  return 0;
}

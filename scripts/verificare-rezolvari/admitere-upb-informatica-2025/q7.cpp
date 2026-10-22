// Itemul 7: tipurile din subiect și expresia aleasă, testată pe un număr real și pe unul imaginar.
#include <iostream>

typedef struct {
    int re, im;
} Complex;
typedef struct {
    int n;
    Complex elemente[100];
} ComplexSecv;

int main() {
  ComplexSecv CS;
  CS.n = 2;
  CS.elemente[0].re = 5; CS.elemente[0].im = 0;   // 5 este real
  CS.elemente[1].re = 0; CS.elemente[1].im = 3;
  bool real1 = CS.elemente[0].im==0;
  CS.elemente[0].re = 0; CS.elemente[0].im = 2;   // 2i nu este real
  bool real2 = CS.elemente[0].im==0;
  bool variantaB = CS.elemente[0].re==0;          // b) ar declara „real” numărul 2i
  std::cout << real1 << " " << real2 << " " << variantaB << "\n";
  return 0;
}

// Itemul 3: secvența din subiect, rulată pe datele din enunț.
#include <iostream>

int main() {
  int n, i;
  int a[6] = {2, 1, 5, 3, 4, 6}, b[6] = {1, 3, 5, 2, 4, 6};
  n = 6;
  for(i=0;i<n;i++) a[i]=a[b[n-i-1]-1];
  for(i=0;i<n;i++) b[n-i-1]=b[a[i]-1];
  std::cout << "final a=(";
  for (i = 0; i < n; i++) std::cout << a[i] << (i + 1 < n ? "," : ")");
  std::cout << " b=(";
  for (i = 0; i < n; i++) std::cout << b[i] << (i + 1 < n ? "," : ")");
  std::cout << "\n";
  return 0;
}

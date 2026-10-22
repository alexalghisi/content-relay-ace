#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    ifstream fin("BAC.IN");
    long long m, n, k = 1, s = 1;    // s = câte semnale s-au emis până la finalul minutului k
    fin >> m >> n;
    while (s < n && k < m)
    {
        k++;
        s = s + k;                   // în minutul k se emit k semnale
    }
    if (s < n)
        cout << "EROARE";
    else
        cout << "OK " << n - (s - k);  // poziția lui n în grupul 1 2 ... k
    fin.close();
    return 0;
}

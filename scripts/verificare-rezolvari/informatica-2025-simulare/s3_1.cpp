#include <iostream>
using namespace std;

int zero(int a[], int n, int &imp)
{
    int i, x, d2 = 0, d5 = 0;    // de câte ori apar factorii 2 și 5 în produs
    bool areZero = false;
    imp = 0;
    for (i = 0; i < n; i++)
    {
        if (a[i] % 2 != 0)       // merge și pentru numere negative
            imp++;
        if (a[i] == 0)
            areZero = true;
        else
        {
            x = a[i] < 0 ? -a[i] : a[i];
            while (x % 2 == 0) { d2++; x = x / 2; }
            while (x % 5 == 0) { d5++; x = x / 5; }
        }
    }
    if (areZero)
        return 1;                // produsul este 0, scris cu o singură cifră 0
    return d2 < d5 ? d2 : d5;    // fiecare zero final = o pereche 2·5
}

int main()
{
    int n, a[100], imp;
    while (cin >> n)
    {
        for (int i = 0; i < n; i++)
            cin >> a[i];
        int z = zero(a, n, imp);
        cout << imp << ' ' << z << '\n';
    }
    return 0;
}

#include <iostream>
using namespace std;

void moda(int n, int &pc)
{
    int poz = 0, k = 0;          // k = poziția cifrei curente, numărată de la dreapta
    do
    {
        k++;
        if (n % 10 % 2 == 0)     // cifră pară = costum
            poz = k;             // ultimul găsit de la dreapta = primul de la stânga
        n = n / 10;
    } while (n != 0);
    pc = k - poz + 1;            // k = numărul de cifre
}

int main()
{
    int n, pc;
    while (cin >> n)
    {
        moda(n, pc);
        cout << pc << '\n';
    }
    return 0;
}

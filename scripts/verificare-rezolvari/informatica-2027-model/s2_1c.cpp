#include <iostream>
using namespace std;

int main()
{
    int x, y, n, ok;
    cin >> x >> y;
    n = 1;
    while (x > 0)
    {
        ok = 1;
        while (ok == 1)
            if (x % 2 == 0)
            {
                y = y * y;
                x = x / 2;
            }
            else
            {
                x = x - 1;
                ok = 0;
            }
        n = n * y;
    }
    cout << n;
    return 0;
}

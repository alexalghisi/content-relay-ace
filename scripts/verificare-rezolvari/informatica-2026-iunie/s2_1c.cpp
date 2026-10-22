#include <iostream>
using namespace std;
int main()
{
    int n, nr = 0, d = 2, p;
    cin >> n;
    while (d * d <= n)
    {
        p = 0;
        while (n % d == 0)
        {
            p = 1;
            n = n / d;
        }
        nr = nr + p;
        d = d + 1;
    }
    if (n != 1)
        nr = nr + 1;
    cout << nr;
    return 0;
}

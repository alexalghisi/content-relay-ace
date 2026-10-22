#include <iostream>
using namespace std;
int main()
{
    int n, m, b = 0, x, a;
    cin >> n >> m;
    for (x = n; x <= m; x++)
        if (x >= 2)
        {
            a = 2;
            while (x % a > 0)
                a = a + 1;
            if (x == a)
                b = b + 1;
        }
    cout << b;
    return 0;
}

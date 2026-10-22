// Transcrierea în C++ a algoritmului echivalent de la II.1d (pentru → cât timp), comparată cu s2_1c.
#include <iostream>
using namespace std;
int main()
{
    int n, m, b = 0, x, a;
    cin >> n >> m;
    x = n;
    while (x <= m)
    {
        if (x >= 2)
        {
            a = 2;
            while (x % a > 0)
                a = a + 1;
            if (x == a)
                b = b + 1;
        }
        x = x + 1;
    }
    cout << b;
    return 0;
}

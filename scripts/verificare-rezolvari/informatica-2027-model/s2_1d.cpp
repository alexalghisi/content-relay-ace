// Varianta cu prima structură „cât timp” înlocuită de „execută … cât timp” (do-while).
#include <iostream>
using namespace std;

int main()
{
    long long x, y, n, ok;
    cin >> x >> y;
    n = 1;
    if (x > 0)
        do
        {
            ok = 1;
            while (ok == 1)
                if (x % 2 == 0) { y = y * y; x = x / 2; }
                else { x = x - 1; ok = 0; }
            n = n * y;
        } while (x > 0);
    cout << n;
    return 0;
}

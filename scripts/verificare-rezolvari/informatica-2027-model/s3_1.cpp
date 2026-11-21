#include <iostream>
using namespace std;

void parcele(int x, int y)
{
    for (int d = 1; d <= x && d <= y; d++)
        if (x % d == 0 && y % d == 0)
            cout << (x / d) * (y / d) << " cu latura " << d << ";";
}

int main()
{
    int x, y;
    cin >> x >> y;
    parcele(x, y);
    return 0;
}

#include <iostream>
using namespace std;
struct
{
    int varsta, inaltimea;
    float greutatea;
} s[2];
int main()
{
    cin >> s[0].varsta >> s[0].inaltimea >> s[0].greutatea;
    cin >> s[1].varsta >> s[1].inaltimea >> s[1].greutatea;
    if (s[0].varsta < s[1].varsta)
        cout << s[0].inaltimea;
    else if (s[1].varsta < s[0].varsta)
        cout << s[1].inaltimea;
    else if (s[0].greutatea < s[1].greutatea)
        cout << s[0].inaltimea;
    else
        cout << s[1].inaltimea;
    return 0;
}

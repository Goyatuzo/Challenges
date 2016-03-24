#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;


int main() {
    int t;
    cin >> t;
    
    for (int i = 0; i < t; ++i) {
        int a;
        int b;
        
        cin >> a >> b;
        
        cout << (floor(sqrt(b)) - ceil(sqrt(a)) + 1) << endl;
    }
    return 0;
}

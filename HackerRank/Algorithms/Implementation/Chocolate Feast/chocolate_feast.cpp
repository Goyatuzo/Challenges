#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <assert.h>

using namespace std;

int countChocolate(int money, int cost, int bonus) {
    int boughtWrappers = money / cost;
    
    return boughtWrappers + (boughtWrappers - 1) / (bonus - 1);
}

void assertGiven() {
    assert(countChocolate(10, 2, 5) == 6);
    assert(countChocolate(12, 4, 4) == 3);
    assert(countChocolate(6, 2, 2) == 5);
}

int main(){
    assertGiven();
    
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        int c;
        int m;
        cin >> n >> c >> m;
        
        cout << countChocolate(n, c, m) << endl;
        
    }
    return 0;
}

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

/**
 * Run the Utopian tree for N cycles and output the expected length.
 * @param n The number of cycles the tree goes through.
 */
int afterNCycles(int n) {
    int size = 1;
    
    // Start at 1 because the Spring cycle already happened.
    for (int i = 1; i <= n; ++i) {
        // Spring   (Even) + 1
        // Fall     (Odd) * 2
        if (size % 2 == 0) {
            ++size;
        } else {
            size *= 2;
        }
    }
    
    return size;
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        cin >> n;
        
        cout << afterNCycles(n) << endl;
    }
    return 0;
}

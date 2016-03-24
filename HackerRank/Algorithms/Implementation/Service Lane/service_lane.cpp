#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int findMin(vector<int> width, int enter, int exit) {
    int min = 3;
    
    for (int i = enter; i <= exit; ++i) {
        if (width[i] < min) {
            min = width[i];
        }
    }
    
    return min;
}

int main() {
    int n;
    int t;
    cin >> n >> t;
    vector<int> width(n);
    for(int width_i = 0;width_i < n;width_i++){
       cin >> width[width_i];
    }
    for(int a0 = 0; a0 < t; a0++){
        int i;
        int j;
        cin >> i >> j;
        cout << findMin(width, i, j) << endl;
    }
    return 0;
}

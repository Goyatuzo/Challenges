#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

bool shouldCancel(vector<int> attendance, int threshold, int size) {
    int n = attendance.size();
    
    for (int i = 0; i < n; ++i) {
        // If the student missed class, one less is attending.
        if (attendance[i] > 0) {
            --size;
        }
        
        // If less students than threshold, cancel.
        if (size < threshold) {
            return true;
        }
    }
    
    // If bottom of loop is reached, don't cancel.
    return false;
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        int k;
        cin >> n >> k;
        vector<int> a(n);
        for(int a_i = 0;a_i < n;a_i++){
           cin >> a[a_i];
        }
        
        if (shouldCancel(a, k, n)) {
            cout << "YES" << endl;
        } else {
            cout << "NO" << endl;
        }
    }
    return 0;
}

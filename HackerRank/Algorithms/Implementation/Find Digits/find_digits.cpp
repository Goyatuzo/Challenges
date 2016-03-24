#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;

int divisibleCount(int value) {
    string valueString = to_string(value);
    int count = 0;
    
    for (auto it = valueString.begin(); it != valueString.end(); ++it) {
        // Rather than using atoi, subtract '0' since diff is the value.
        int digit = *it - '0';
        
        // If digit is non-zero AND divides the input value.
        if (digit != 0 && value % digit == 0) {
            ++count;
        }
    }
    
    return count;
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        cin >> n;
        
        cout << divisibleCount(n) << endl;
    }
    return 0;
}

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

bool isDecent(string& number) {
    int three = 0;
    int five = 0;
    
    for (auto it = number.begin(); it != number.end(); ++it) {
        // 1. Its digits can only be 3's and/or 5's.
        if (*it != '3' && *it != '5') {
            return false;
        }
        // Count 3's and 5's for bullets 2 and 3.
        if (*it == '3') {
            ++three;
        } else if (*it == '5') {
            ++five;
        }
    }
    
    /*
    2. The number of 3's it contains is divisible by 5.
    3. The number of 5's it contains is divisible by 3.
    */
    if (three % 5 == 0 && five % 3 == 0) {
        return true;
    }
    
    // If all else fails, it's false.
    return false;
}

string largestDecent(int digitCount) {
    string result = string(digitCount, '5');
    
    // Each iteration, check to see if the result is valid. If it is, done.
    for (int i = result.length() - 1; i >= 0; --i) {
        if (isDecent(result)) {
            return result;
        }
        
        // If the current number was not decent, then change last digit to 3.
        result[i] = '3';
    }
    
    // Since the case where the swapping at index 0 isn't evaluated, do it manually.
    if (isDecent(result)) {
        return result;
    }
    
    // If nothing was decent, then return -1.
    return "-1";
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        cin >> n;
        cout << largestDecent(n) << endl;
    }
    return 0;
}

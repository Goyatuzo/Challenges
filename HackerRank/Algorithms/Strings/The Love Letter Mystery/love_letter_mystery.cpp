#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <assert.h>

using namespace std;

int distance(char a, char b) {
    return abs(a - b);
}

int reduceCount(string& input) {
    int total = 0;
    
    for (int i = 0; i < (input.size() / 2); ++i) {
        int j = input.size() - i - 1;
        
        total += distance(input[i], input[j]);
    }
    return total;
}

void assertGiven() {
    string input = "abc";
    assert(reduceCount(input) == 2);
    input = "abcba";
    assert(reduceCount(input) == 0);
    input = "abcd";
    assert(reduceCount(input) == 4);
    input = "cba";
    assert(reduceCount(input) == 2);
}

int main() {
    assertGiven();
    
    int t;
    cin >> t;
    
    for (int i = 0; i < t; ++i) {
        string input;
        cin >> input;
        
        cout << reduceCount(input) << endl;
    }
    return 0;
}

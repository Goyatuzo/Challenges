#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

/**
 * Sort the vector first. This way, you know when the sticks will be cut.
 * What matters is not the length that is cut, because you know that the last
 * remaining stick will always be the longest one. Rather, what matters is the
 * number of different numbers, and the number of times that it is repeated.
 * However storing these values in a dictionary takes unnecessary space. So
 * just sort them, and subtract from the total amount of sticks each time a new
 * value is introduced, or when a value is repeated.
 * @param sticks The vector that contains the lengths of the sticks.
 */
void cut(vector<int> sticks) {
    sort(sticks.begin(), sticks.end());
    int i = 0;
    int curr = -1;
    int count = sticks.size() + 1;
    
    while (i < sticks.size()) {
        --count;
        
        // Skip iterations where the lengths are the same.
        if (curr != sticks[i]) {
            // If a new length exists, be sure to print out what the current count is.
            cout << count << endl;
            curr = sticks[i];
        }
        
        ++i;
    }
}

int main(){
int n;
cin >> n;
vector<int> arr(n);
for(int arr_i = 0;arr_i < n;arr_i++){
   cin >> arr[arr_i];
}

cut(arr);

return 0;
}

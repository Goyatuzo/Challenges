using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    
    static uint SpecialCount(int n, int k, int[] problems) {
        uint page = 1;
        uint special = 0;
        
        foreach (int count in problems) {
            int extra = (int)Math.Ceiling((double)count / (double)k);
            int question = 1;
            // If the page number is less than the number of problems, there's a chance a special number occurs.
            if (page < count) {
                for (int i = 0; i <= k; ++i) {
                    // If the question # is within page and page + extra.
                    if (question >= page && question <= page + extra) {
                        ++special;
                    }
                    problems += k;
                }
            }
            
            page += extra;
        }
    }
    
    static void Main(String[] args) {
        string[] tokens = Console.ReadLine().Split(' ');
        
        int n = Convert.ToInt32(tokens[0]);
        int k = Convert.ToInt32(tokens[1]);
        
        string[] problemString = Console.ReadLine().Split(' ');
        int[] problems = Array.ConvertAll(problemString, Int32.Parse);
    }
}
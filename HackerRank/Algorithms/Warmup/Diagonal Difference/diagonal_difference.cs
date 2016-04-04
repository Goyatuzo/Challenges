using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static int DiagonalDifference(int[][] input, int n) {
        int forward = 0;
        int backward = 0;
        
        for (int i = 0; i < n; ++i) {
            forward += input[i][i];
            backward += input[i][n - i - 1];
        }
        
        return Math.Abs(forward - backward);
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        int[][] a = new int[n][];
        for(int a_i = 0; a_i < n; a_i++){
           string[] a_temp = Console.ReadLine().Split(' ');
           a[a_i] = Array.ConvertAll(a_temp,Int32.Parse);
        }
        
        Console.WriteLine(DiagonalDifference(a, n));
    }
}

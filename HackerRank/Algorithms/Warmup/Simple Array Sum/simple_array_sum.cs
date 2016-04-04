using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        // Ignore the first line.
        Console.ReadLine();
        string[] arr_temp = Console.ReadLine().Split(' ');
        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);
        
        Console.WriteLine(arr.Sum());
    }
}

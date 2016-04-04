using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {
    
    static void PrintSections(int[] input) {
        float positive = 0.0f;
        float zero = 0.0f;
        float negative = 0.0f;
        
        for (int i = 0; i < input.Length; ++i) {
            if (input[i] == 0) {
                zero += 1.0f;
            } else if (input[i] > 0) {
                positive += 1.0f;
            } else {
                negative += 1.0f;
            }
        }
        
        Console.WriteLine((positive / input.Length).ToString("N6"));
        Console.WriteLine((negative / input.Length).ToString("N6"));
        Console.WriteLine((zero / input.Length).ToString("N6"));
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] arr_temp = Console.ReadLine().Split(' ');
        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);
        
        PrintSections(arr);
    }
}

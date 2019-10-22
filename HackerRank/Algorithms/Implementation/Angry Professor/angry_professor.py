#!/bin/python

import sys


def should_cancel(students, threshold, arrivals):
    return True if len([i for i in arrivals if i <= 0]) < threshold else False

def run_solution():
    t = int(input().strip())

    for a0 in range(t):
        n,k = input().strip().split(' ')
        n,k = [int(n),int(k)]
        a = map(int,input().strip().split(' '))

        if should_cancel(n, k, a):
            print("YES")
        else:
            print("NO")

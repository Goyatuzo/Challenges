from typing import List


def counting_pretty_numbers_helper(num: int) -> int:
    last_digit = num % 10

    if last_digit == 9:
        offset = 3
    elif last_digit >= 3:
        offset = 2
    elif last_digit == 2:
        offset = 1
    else:
        offset = 0

    # Count all 2, 3, and 9 below this number
    tens = int(num / 10)

    return offset + tens * 3


def counting_pretty_numbers(lo: int, hi: int) -> int:
    """https://www.codechef.com/problems/NUM239"""
    last_digit = lo % 10

    if last_digit == 9 or last_digit == 3 or last_digit == 2:
        return counting_pretty_numbers_helper(hi) - counting_pretty_numbers_helper(lo) + 1
    else:
        return counting_pretty_numbers_helper(hi) - counting_pretty_numbers_helper(lo)


if __name__ == '__main__':
    t = int(input())

    while t > 0:
        l, r = [int(i) for i in input().split()]

        print(counting_pretty_numbers(l, r))

        t -= 1

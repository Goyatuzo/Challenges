def largest_decent(n):
    if n < 3:
        return -1

    # Try greedy; start with all 5's and see if it's valid.
    curr = int("".join(['5'] * n))

    three_size = 0

    while not is_decent(curr):
        # Threes have to be multiples of 5 so add 5 at a time.
        three_size += 5

        if three_size <= n:
            threes = "".join(['3'] * three_size)
            fives = "".join(['5'] * (n - three_size))

            curr = int(fives + threes)
        else:
            break

    # By the end of this, if it's not decent, then there is no valid number.
    if not is_decent(curr):
        return -1

    return curr

def is_decent(n):
    threes = 0
    fives = 0

    for digit in str(n):
        # Only 3 or 5's can be its digits.
        if digit != '3' and digit != '5':
            return False

        # Count 3's and 5's for divisibility.
        if digit == '3':
            threes += 1
        elif digit == '5':
            fives += 1

    # Once the threes and fives have been counted, make sure they're divisible.
    return threes % 5 == 0 and fives % 3 == 0
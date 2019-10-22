def chars_to_delete(a, b):
    a = list(a.strip())
    b = list(b.strip())

    a.sort()
    b.sort()

    count = 0

    a_idx = 0
    b_idx = 0

    a_repeat = False
    b_repeat = False

    while a_idx < len(a) and b_idx < len(b):
        # Determine if there are repeated letters.
        if a_idx > 0:
            a_repeat = a[a_idx] == a[a_idx - 1]

        if b_idx > 0:
            b_repeat = b[b_idx] == b[b_idx - 1]

        # If the two characters are equal, increment both indices by one.
        if a[a_idx] == b[b_idx]:
            a_idx += 1
            b_idx += 1
        # Frequencies differ: a has more
        elif a_repeat and a[a_idx] != b[b_idx]:
            a_idx += 1
            count += 1
        # Inverse of the above scenario.
        elif b_repeat and a[a_idx] != b[b_idx]:
            b_idx += 1
            count += 1
        # If different letters
        elif a[a_idx] > b[b_idx]:
            b_idx += 1
            count += 2
        elif a[a_idx] < b[b_idx]:
            a_idx += 1
            count += 2

    # At the end, if the two idx pointers go to the end and there are remainders, add.
    if a_idx == b_idx:
        a_rem = len(a) - a_idx
        b_rem = len(b) - b_idx
    else:
        a_rem = 0
        b_rem = 0

    print(a)
    print(b)
    print(len(a), len(b))
    print(a_idx, b_idx)
    print(a_rem, b_rem)

    return count + abs(a_rem + b_rem)
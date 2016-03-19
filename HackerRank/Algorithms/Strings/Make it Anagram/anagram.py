def chars_to_delete(a, b):
    a = list(a.strip())
    b = list(b.strip())

    a.sort()
    b.sort()

    # If one string is longer than the other, the extra chracters will always be deleted.
    count = abs(len(a) - len(b))

    curr = 'a'

    a_idx = 0
    b_idx = 0

    while a_idx < len(a) and b_idx < len(b):
        # If the two characters are equal, increment both indices by one.
        if a[a_idx] == b[b_idx]:
            a_idx += 1
            b_idx += 1
        # If char of a is one less than char of b, increment a and count by one.
        elif ord(a[a_idx]) == ord(b[b_idx]) + 1:
            a_idx += 1
            count += 1
        # Inverse of the above scenario.
        elif ord(b[b_idx]) == ord(a[a_idx]) + 1:
            b_idx += 1
            count += 1
        # The only other possible case is if b is higher in the alphabet than a.
        elif a[a_idx] > b[b_idx]:
            b_idx += 1
            count += 2
        elif a[a_idx] < b[b_idx]:
            a_idx += 1
            count += 2

    return count
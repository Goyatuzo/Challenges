def is_funny(input_str):
    n = len(input_str)

    chars = list(input_str)

    for i in xrange(0, n - 1):
        first = abs(ord(chars[i + 1]) - ord(chars[i]))
        second = abs(ord(chars[n - i - 2]) - ord(chars[n - i - 1]))

        if first != second:
            return False

    return True
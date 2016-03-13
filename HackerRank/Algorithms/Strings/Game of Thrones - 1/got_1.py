def contains_palindrome(input_string):
    """If the input string has an odd count, make sure that only
    one character has an odd number of letters. That signifies
    that the character is at the center of the palindrome. If the
    input string has an even count of letters, make sure that each
    letter in the string have an even count.
    :param input_string: The string to be evaluated."""

    counts = {}

    for char in list(input_string):
        # Count the number of times each letter occurs.
        if char in counts:
            counts[char] += 1
        else:
            counts[char] = 1

    length = len(input_string)
    odd_found = False

    # If the string is even, make sure each letter only occurs even number of times.
    if length % 2 == 0:
        for key in counts:
            # If this letter happens odd, then it's false.
            if counts[key] % 2 == 1:
                return False
    # Now check for the odd case.
    else:
        for key in counts:
            # Only one count should be odd. If two are found, return false.
            if odd_found and counts[key] % 2 == 1:
                return False
            elif counts[key] % 2 == 1:
                odd_found = True

    # If the validation checking is passed, then it's true.
    return True
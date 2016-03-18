def first_non_repeating(input_string):
    occured = {}

    # First count the number of times char appears.
    for char in input_string:
        if char not in occured:
            occured[char] = 1
        else:
            occured[char] += 1

    # Then find the first letter that happens once in the string.
    for char in input_string:
        if occured[char] == 1:
            return char

    return None
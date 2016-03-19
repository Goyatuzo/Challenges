def common_gems(input_strings):
    # In case the input isn't stripped of unnecessary characters, do it here.
    input_strings = [string.strip() for string in input_strings]

    letters = {}

    for i, gem in enumerate(input_strings):
        string_happened = {}

        for char in gem:
            # Check if the char has already happened; then make sure that the
            # count is still less than the index of the string that is being evaluated.
            if char in letters and char not in string_happened:
                letters[char] += 1
            elif char not in letters:
                letters[char] = 1

            string_happened[char] = True

    complete_count = 0
    string_count = len(input_strings)

    # Count the number of times that a letter has occured; if equal to string count, then increment.
    for char in letters:
        if letters[char] == string_count:
            complete_count += 1

    return complete_count
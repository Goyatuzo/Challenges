def search_for_substring(input_string):
    # Break the string into tokens.
    tokens = input_string.split(',')

    word = tokens[0]
    substring = tokens[1]

    sub_idx = 0
    asterisk = False

    for char in word:
        # If the index of the substring is the entire length, the substring exists so return true.
        if sub_idx >= len(substring) - 1:
            return "true"

        if char == substring[sub_idx]:
            sub_idx += 1
        # First check for escape string of *; if true, then advance the point by 2 spaces.
        elif (substring[sub_idx] == '\\' and substring[sub_idx + 1] == '*') and char == '*':
            sub_idx += 2
        # If the asterisk is not escaped, then it means it should match one or more.
        elif substring[sub_idx] == '*':
            sub_idx += 1
            asterisk = True
        elif not asterisk:
            sub_idx = 0

    # If it reaches this part, then return false.
    return "false"
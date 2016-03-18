def smallest_multiple(input_string):
    tokens = input_string.split(',')

    x = int(tokens[0])
    n = int(tokens[1])

    curr = n

    while x > curr:
        curr += n

    return curr
import math

def sqrt(n):
    """http://stackoverflow.com/questions/15390807/integer-square-root-in-python
    Find the square root of a number for the purpose of determining whether or not
    it is a whole number."""
    x = n
    y = (x + 1) // 2
    while y < x:
        x = y
        y = (x + n // x) // 2
    return x

def between_squares(input_string):
    tokens = input_string.split(' ')

    low = int(tokens[0])
    high = int(tokens[1])

    low_sqrt = sqrt(low)

    # If the lower end square root is a whole number, subtract it by one.
    if low_sqrt ** 2 == low:
        low -= 1

    return int(math.floor(high ** (0.5))) - int(math.floor(low ** (0.5)))
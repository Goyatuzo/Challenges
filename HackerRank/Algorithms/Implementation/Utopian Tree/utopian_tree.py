import math


def after_n_cycles(n):

    height = 1

    for i in xrange(1, n + 1):
        # If n is odd, it's the first growth so double the height
        if i % 2 == 1:
            height *= 2
        # Otherwise it's the second growth so only +1.
        else:
            height += 1

    return height

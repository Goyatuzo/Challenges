import operator

def difference(n):
    differences = []

    # Map all values of n to int.
    n = map(int, n)
    # First evaluate the sum square difference of the highest value in the list.
    highest = max(n)

    # Keep track of each point in the iteration to make computation simpler.
    sum_square = 0
    square_sum = 0

    for i in range(1, highest+1):
        sum_square += i ** 2
        square_sum += i

        differences.append(square_sum ** 2 - sum_square)

    return [differences[i-1] for i in n]
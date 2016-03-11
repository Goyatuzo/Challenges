def fizz_buzz(fizz, buzz, highest):
    result = []

    for i in xrange(1, highest + 1):
        letter = ''

        # If divisible by fizz or buzz, add F or B appropriately.
        if i % fizz == 0:
            letter += 'F'
        if i % buzz == 0:
            letter += 'B'

        # If neither F or B has been labeled, it's just the digit.
        if letter == '':
            letter = str(i)

        result.append(letter)

    return " ".join(result)
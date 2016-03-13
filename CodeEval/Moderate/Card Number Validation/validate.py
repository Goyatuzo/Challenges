def sum_digits(number_string):
    sum_value = 0

    for num in number_string:
        sum_value += int(num)

    return sum_value

def validate(number):
    odd = True

    sum_value = 0

    for num in reversed(number):
        # Make sure it's not a space.
        if num == ' ':
            continue

        # On every other number, double the digit. Odd means it's not the other.
        if odd:
            sum_value += int(num)
        else:
            double = int(num) * 2

            # If the double of the digit > 9, then add digits.
            if double > 9:
                sum_value += sum_digits(str(double))
            else:
                sum_value += double

        # Flip the bit
        odd = not odd

    return sum_value % 10 == 0
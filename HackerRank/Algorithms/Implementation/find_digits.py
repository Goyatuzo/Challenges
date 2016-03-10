def find_digits(n):
    digits = str(n)
    # Utilize the fact that and end the moment the if statement is false.
    return len([i for i in digits if int(i) != 0 and n % int(i) == 0])
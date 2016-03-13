def mth_to_last(input_string):
    lst = input_string.split(" ")

    # Separate the list from the index to be queried.
    m = int(lst[-1])
    lst = lst[:-1]

    # If the input's too large, return None.
    if m > len(lst):
        return None

    return lst[-(m)]
def count_deletions(input_string):
    del_count = 0

    prev_char = None

    for char in input_string:
        if prev_char == char:
            del_count += 1

        prev_char = char

    return del_count
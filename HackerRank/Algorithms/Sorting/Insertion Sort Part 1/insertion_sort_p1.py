def insertion_sort(lst):
    """Instead of just inserting the value where it should be at,
    it shifts the entire array until the location is found. It prints
    out all the intermediate steps, but the final step is actually just
    returned, so the output must be manually printed.
    :param lst: The list of values to be sorted by insertion."""

    # The value to be inserted.
    to_insert = lst[-1]
    n = len(lst)

    # Remove the element to be added and replace with last element.
    del lst[-1]
    lst.append(lst[-1])

    print(" ".join(map(str, lst)))

    for i in range(n - 2, -1, -1):
        # If it's at the beginning of the list, just insert it.
        if i <= 0:
            lst.insert(0, to_insert)
            del lst[1]
            break

        # If it's in the middle of the list.
        elif lst[i - 1] <= to_insert and lst[i] >= to_insert:
            lst.insert(i, to_insert)
            del lst[i + 1]
            break
        else:
            lst.insert(i, lst[i - 1])
            del lst[i + 1]

        print(" ".join(map(str, lst)))

    return " ".join(map(str, lst))

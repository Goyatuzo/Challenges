def pairs(a, k):
    a.sort()
    
    # Keep track of the indices of the first value
    # and the second, larger value.
    one = 0
    two = 0
    
    count = 0
    
    while one < len(a):
        diff = a[two] - a[one]
        # If diff == k, then add count and increment two.
        if diff == k and two <= len(a):
            count += 1
            # Only increment two if it's not at least idx.
            if two < len(a) - 1:
                two += 1
        # If diff < k, only increment two.
        elif diff < k and two < len(a):
            if two < len(a) - 1:
                two += 1
        else:
            one += 1
            
    return count
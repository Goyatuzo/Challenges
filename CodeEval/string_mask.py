def string_mask(word, mask):
    mask = str(mask)
    word = list(word)

    for i, bit in enumerate(mask):
        if bit == '1':
            word[i] = word[i].upper()

    return "".join(word)
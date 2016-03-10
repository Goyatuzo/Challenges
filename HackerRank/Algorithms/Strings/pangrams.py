def is_pangram(word):
    letters = {}

    for letter in word.strip().lower():
        if letter.islower():
            letters[letter] = True
        
    return len(letters) == 26
class Stack:
    def __init__(self, values=""):
        if values != "":
            self.data = values.split()
        else:
            self.data = []

    def pop(self):
        temp = None

        # If there exists data, get the top and remove.
        if len(self.data) > 0:
            temp = self.data[-1]
            del self.data[-1]

        return temp

    def push(self, value):
        self.data.append(value)


if __name__ == '__main__':
    import sys
    test_cases = open("test.txt", 'r')
    # test_cases = open(sys.argv[1], 'r')
    for test in test_cases:
        stack = Stack(test.strip())

        count = 0

        top = stack.pop()

        while top != None:
            if count % 2 == 0:
                print(top, end='')

            top = stack.pop()
            count += 1

        print("")


    test_cases.close()
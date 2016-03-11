import unittest

from stack_implementation import Stack

class TestStackImplementation(unittest.TestCase):
    def test_constructor(self):
        test = Stack("1 2 3")
        self.assertEqual(['1', '2', '3'], test.data)

    def test_pop_odd(self):
        test = Stack('1 2 3')

        self.assertEqual('3', test.pop())
        self.assertEqual(['1', '2'], test.data)

        self.assertEqual('2', test.pop())
        self.assertEqual(['1'], test.data)
        self.assertEqual('1', test.pop())
        self.assertEqual(None, test.pop())

    def test_pop_even(self):
        test = Stack('1 2 3 4')

        self.assertEqual('4', test.pop())
        self.assertEqual(['1', '2', '3'], test.data)

        self.assertEqual('3', test.pop())
        self.assertEqual(['1', '2'], test.data)
        self.assertEqual('2', test.pop())
        self.assertEqual('1', test.pop())
        self.assertEqual(None, test.pop())

    def test_push(self):
        test = Stack()
        test.push('5')

        self.assertEqual(['5'], test.data)

if __name__ == '__main__':
    unittest.main()
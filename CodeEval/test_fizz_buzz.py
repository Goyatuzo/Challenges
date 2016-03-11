import unittest

from fizz_buzz import *

class TestFizzBuzz(unittest.TestCase):
    def test_given(self):
        self.assertEqual("1 2 F 4 B F 7 8 F B", fizz_buzz(3, 5, 10))
        self.assertEqual("1 F 3 F 5 F B F 9 F 11 F 13 FB 15", fizz_buzz(2, 7, 15))


if __name__ == '__main__':
    unittest.main()
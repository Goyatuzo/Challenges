import unittest

from find_digits import *

class TestFindDigits(unittest.TestCase):

    def test_given(self):
        self.assertEqual(2, find_digits(12))
        self.assertEqual(3, find_digits(1012))


if __name__ == '__main__':
    unittest.main()
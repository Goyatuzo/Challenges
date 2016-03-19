import unittest

from sherlock_and_squares import *

class TestMultiplesOfANumber(unittest.TestCase):
    def test_given(self):
        self.assertEqual(2, between_squares('3 9'))
        self.assertEqual(0, between_squares('17 24'))

    def test_two_squares(self):
        self.assertEqual(2, between_squares('1 4'))
        self.assertEqual(3, between_squares('1 9'))
        self.assertEqual(2, between_squares('4 9'))

    def test_first_square(self):
        self.assertEqual(3, between_squares('1 10'))

    def test_second_square(self):
        self.assertEqual(2, between_squares('2 9'))


if __name__ == '__main__':
    unittest.main()
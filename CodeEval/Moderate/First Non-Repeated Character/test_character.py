import unittest

from character import *

class TestSummationOfPrimes(unittest.TestCase):
    def test_edge(self):
        self.assertEqual(None, first_non_repeating('ttyy'))

    def test_given(self):
        self.assertEqual('y', first_non_repeating('yellow'))
        self.assertEqual('h', first_non_repeating('tooth'))


if __name__ == '__main__':
    unittest.main()
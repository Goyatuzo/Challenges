import unittest

from summation_of_primes import *

class TestSummationOfPrimes(unittest.TestCase):
    def test_edge(self):
        self.assertEqual([10, 17], sum_primes([6, 7]))

    def test_given(self):
        self.assertEqual([17, 10], sum_primes([5, 10]))


if __name__ == '__main__':
    unittest.main()
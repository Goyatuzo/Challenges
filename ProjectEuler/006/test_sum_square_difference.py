import unittest

from sum_square_difference import *

class TestSumSquareDifference(unittest.TestCase):
    def test_given(self):
        self.assertEqual([22, 2640], difference(['3', '10']))


if __name__ == '__main__':
    unittest.main()
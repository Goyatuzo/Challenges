import unittest

from ops_on_matrix import ops_on_matrix

class TestPhonePrices(unittest.TestCase):

    def test_example(self):
        res = ops_on_matrix(2, 2, [[1, 1], [1, 2], [2, 1]])
        self.assertEqual(2, res)

if __name__ == '__main__':
	unittest.main()
import unittest

from utopian_tree import *

class TestUtopianTree(unittest.TestCase):

    def test_given(self):
        self.assertEqual(1, after_n_cycles(0))
        self.assertEqual(2, after_n_cycles(1))
        self.assertEqual(7, after_n_cycles(4))

    def test_case_2(self):
        self.assertEqual(6, after_n_cycles(3))
        self.assertEqual(7, after_n_cycles(4))


if __name__ == '__main__':
    unittest.main()
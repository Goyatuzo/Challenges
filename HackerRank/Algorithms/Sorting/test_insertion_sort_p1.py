import unittest

from insertion_sort_p1 import *

class TestInsertionSortPartA(unittest.TestCase):

    def test_given(self):
        self.assertEqual("2 3 4 6 8", insertion_sort([2, 4, 6, 8, 3]))

    def test_one(self):
        self.assertEqual("5 6 7 8 8", insertion_sort([5, 6, 7, 8, 8]))
        self.assertEqual("5 6 7 8 8", insertion_sort([6, 7, 8, 8, 5]))


if __name__ == '__main__':
    unittest.main()
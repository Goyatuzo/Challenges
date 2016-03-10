import unittest

from sherlock_and_the_beast import *

class TestSherlockBeast(unittest.TestCase):

    def test_is_decent(self):
        # A non-3 or 5.
        self.assertFalse(is_decent(54))

        self.assertTrue(is_decent(555))
        self.assertTrue(is_decent(33333))
        self.assertTrue(is_decent(55555533333))

    def test_none(self):
        self.assertEqual(-1, largest_decent(1))

    def test_given(self):
        self.assertEqual(-1, largest_decent(1))
        self.assertEqual(555, largest_decent(3))
        self.assertEqual(33333, largest_decent(5))
        self.assertEqual(55555533333, largest_decent(11))

    def test_set_14(self):
        self.assertEqual(-1, largest_decent(1))
        self.assertEqual(-1, largest_decent(2))
        self.assertEqual(555, largest_decent(3))
        self.assertEqual(-1, largest_decent(4))
        self.assertEqual(33333, largest_decent(5))
        self.assertEqual(555555, largest_decent(6))
        self.assertEqual(-1, largest_decent(7))
        self.assertEqual(55533333, largest_decent(8))
        self.assertEqual(555555555, largest_decent(9))
        self.assertEqual(3333333333, largest_decent(10))
        self.assertEqual(55555533333, largest_decent(11))



if __name__ == '__main__':
    unittest.main()
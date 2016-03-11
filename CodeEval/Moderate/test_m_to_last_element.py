import unittest

from m_to_last_element import *

class TestMthLastElement(unittest.TestCase):
    def test_easy(self):
        self.assertEqual('2', mth_to_last("2 1"))

    def test_given(self):
        self.assertEqual('a', mth_to_last('a b c d 4'))
        self.assertEqual('b', mth_to_last('a b c d 3'))
        self.assertEqual('c', mth_to_last('a b c d 2'))
        self.assertEqual('g', mth_to_last('e f g h 2'))

    def test_none(self):
        self.assertEqual(None, mth_to_last('a b c d 5'))

if __name__ == '__main__':
    unittest.main()
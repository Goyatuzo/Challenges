import unittest

from anagram import *

class TestMakeItAnagram(unittest.TestCase):
    def test_given(self):
        self.assertEqual(4, chars_to_delete('cde', 'abc'))

    def test_same_length(self):
        self.assertEqual(2, chars_to_delete('bd', 'ab'))
        self.assertEqual(1, chars_to_delete('abc', 'abbc'))

    def test_diff_length(self):
        self.assertEqual(1, chars_to_delete('ab', 'abc'))
        self.assertEqual(3, chars_to_delete('ab', 'acd'))


if __name__ == '__main__':
    unittest.main()
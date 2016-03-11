import unittest

from alternating_characters import *

class TestAlternatingCharacters(unittest.TestCase):
    def test_given(self):
        self.assertEqual(3,count_deletions('AAAA'))
        self.assertEqual(4, count_deletions('BBBBB'))
        self.assertEqual(0, count_deletions('ABABABAB'))
        self.assertEqual(0, count_deletions('BABABA'))
        self.assertEqual(4, count_deletions('AAABBB'))

if __name__ == '__main__':
    unittest.main()
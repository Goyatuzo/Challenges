import unittest

from got_1 import contains_palindrome

class TestGOTOne(unittest.TestCase):
    def test_given(self):
        self.assertTrue(contains_palindrome('aaabbbb'))
        self.assertFalse(contains_palindrome('cdefghmnopqrstuvw'))
        self.assertTrue(contains_palindrome('cdcdcdcdeeeef'))


if __name__ == '__main__':
    unittest.main()
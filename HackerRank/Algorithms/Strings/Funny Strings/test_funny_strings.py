import unittest

from funny_strings import *

class TestFunnyStrings(unittest.TestCase):
    def test_given(self):
        self.assertTrue(is_funny('acxz'))
        self.assertFalse(is_funny('bcxz'))

if __name__ == '__main__':
    unittest.main()
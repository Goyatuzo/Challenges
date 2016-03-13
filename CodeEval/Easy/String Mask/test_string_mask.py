import unittest

from string_mask import *

class TestFizzBuzz(unittest.TestCase):
    def test_given(self):
        self.assertEqual('HEllO', string_mask('hello', 11001))
        self.assertEqual('World', string_mask('world', 10000))
        self.assertEqual('CBA', string_mask('cba', 111))

if __name__ == '__main__':
    unittest.main()
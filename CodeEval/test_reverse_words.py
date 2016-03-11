import unittest

from reverse_words import *

class TestReverseWords(unittest.TestCase):
    def test_given(self):
        self.assertEqual("World Hello", reverse_words("Hello World"))
        self.assertEqual("CodeEval Hello", reverse_words("Hello CodeEval"))

    def test_cases(self):
        self.assertEqual("illo ab quae ipsa eaque aperiam rem", reverse_words("rem aperiam eaque ipsa quae ab illo"))

if __name__ == '__main__':
    unittest.main()
import unittest

from string_searching import search_for_substring

class TestStringSearching(unittest.TestCase):
    def test_edge(self):
        self.assertEqual('true', search_for_substring('Hello,ello'))
        self.assertEqual('true', search_for_substring('Hello,Hello'))

    def test_given(self):
        self.assertEqual('true', search_for_substring('Hello,ell'))
        self.assertEqual('true', search_for_substring('This is good, is'))
        self.assertEqual('true', search_for_substring('CodeEval,C*Eval'))
        self.assertEqual('false', search_for_substring('Old,Young'))

    def test_asterisk(self):
        self.assertEqual('false', search_for_substring('CodeEval,C*Dval'))
        self.assertEqual('true', search_for_substring('CodeECodeEval,C*Eval'))
        self.assertEqual('true', search_for_substring(r'C*de,C*de'))
        self.assertEqual('true', search_for_substring(r'C*de,*de'))


if __name__ == '__main__':
    unittest.main()
import unittest

from gemstones import *

class TestCommonGems(unittest.TestCase):
    def test_given(self):
        self.assertEqual(2, common_gems(['abcdde', 'baccd', 'eeabg']))


if __name__ == '__main__':
    unittest.main()
import unittest

from multiples import smallest_multiple

class TestMultiplesOfANumber(unittest.TestCase):
    def test_given(self):
        self.assertEqual(16, smallest_multiple('13,8'))
        self.assertEqual(32, smallest_multiple('17, 16'))


if __name__ == '__main__':
    unittest.main()
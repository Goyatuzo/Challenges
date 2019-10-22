import unittest

from counting_pretty_numbers import counting_pretty_numbers


class TestCountingPrettyNumbers(unittest.TestCase):
    def test_given(self):
        self.assertEqual(3, counting_pretty_numbers(1, 11))


if __name__ == '__main__':
    unittest.main()

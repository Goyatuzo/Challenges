import unittest

from phone_prices import phone_prices

class TestPhonePrices(unittest.TestCase):

    def test_example(self):
        res = phone_prices([375, 750, 723, 662, 647, 656, 619])
        self.assertEqual(2, res)

if __name__ == '__main__':
	unittest.main()
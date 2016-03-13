import unittest

from validate import validate

class TestCardNumberValidate(unittest.TestCase):
    def test_example(self):
        self.assertTrue(validate('1556 9144 6285 339'))
        self.assertFalse(validate('6363 1811 2857 7650'))
        
    def test_given(self):
        self.assertFalse(validate('6011 5940 0319 9511'))
        self.assertTrue(validate('5537 0213 6797 6815'))
        self.assertFalse(validate('5574 8363 8022 9735'))
        self.assertFalse(validate('3044 8507 9391 30'))
        self.assertTrue(validate('6370 1675 9034 6211 774'))


if __name__ == '__main__':
    unittest.main()
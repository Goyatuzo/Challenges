import unittest

from angry_professor import should_cancel

class TestAngryProfessor(unittest.TestCase):

    def test_threshold(self):

        the_class = [-2, -1, 0, 1, 2, 3, 4, 5]
        class_size = len(the_class)

        # Classes should be in session until the threshold reaches 7. 6 should be ok
        # because there are exactly 6 students who make the class.

        for i in range(0, 4):
            result = should_cancel(class_size, i, the_class)
            self.assertFalse(result)

        for i in range(4, class_size):
            result = should_cancel(class_size, i, the_class)
            self.assertTrue(result)

    def test_given(self):
        size = 4
        threshold = 3
        the_class = [-1, -3, 4, 2]

        result = should_cancel(size, threshold, the_class)
        self.assertTrue(result)

        size = 4
        threshold = 2
        the_class = [0, -1, 2, 1]

        result = should_cancel(size, threshold, the_class)
        self.assertFalse(result)

    def test_suite_two(self):

        size = 50
        threshold = 20
        the_class = [97, -55, 48, -22, 99, -46, 40, 11, 5, -61, 78, -20, 44, 22, -8, 82, 24, -62, 0, 52, -79, 68, -73, -81, 33, 60, -99, -99, 59, -13, 90, -26, 84, 90, 76, 36, -45, 79, 87, 48, 59, -36, 42, -6, -13, 21, -19, -21, 39, -40, 50, 18]
        # Run the function and test output.
        result = should_cancel(size, threshold, the_class)
        self.assertFalse(result)

        size = 50
        threshold = 18
        the_class = [-50, 58, 24, 69, 81, 84, 72, 50, -85, 99, 42, 13, 90, 90, -81, -36, 55, 4, -69, -76, 55, 42, -84, -5, -67, 13, -54, 59, 2, 6, 21, 68, 89, 8, 98, 8, -48, -33, -48, 54, -46, 29, 46, 97, -90, -33, -97, -92, 25, 96]
        # Run the function and test output.
        result = should_cancel(size, threshold, the_class)
        self.assertFalse(result)

        size = 50
        threshold = 26
        the_class = [-36, 14, -60, 28, -50, 56, 94, -99, -39, 28, 0, -47, 59, -35, 39, 15, -4, -49, 85, -43, -77, 38, -49, -67, 92, -43, 29, 82, 41, -26, 61, 60, -23, -81, -90, -96, -77, 90, 24, -14, 5, 12, 0, 26, 16, 78, -46, 47, 51, 31]
        # Run the function and test output.
        result = should_cancel(size, threshold, the_class)
        self.assertTrue(result)


if __name__ == '__main__':
	unittest.main()
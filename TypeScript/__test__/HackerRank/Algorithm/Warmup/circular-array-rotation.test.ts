import rotateArray from '../../../../HackerRank/Algorithm/Warmup/circular-array-rotation';

describe("CircularArrayRotation", () => {
    describe('Array: [0, 1, 2]', () => {
        let array: Array<number>;

        beforeEach(() => {
            array = [0, 1, 2];
        });

        it('k = 0 should return same array.', () => {
            expect(rotateArray(array, 0)).toEqual(array);
        });

        it('k = 1 should return [1, 2, 0].', () => {
            expect(rotateArray(array, 1)).toEqual([2, 0, 1]);
        });

        it('k = 2 shoudl return [2, 0, 1].', () => {
            expect(rotateArray(array, 2)).toEqual([1, 2, 0]);
        });
    });
});

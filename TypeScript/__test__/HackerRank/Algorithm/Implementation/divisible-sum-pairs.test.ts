import divisibleSumPairs from '../../../../HackerRank/Algorithm/Implementation/divisible-sum-pairs';

describe('DivisibleSumPairs', () => {
    let array: Array<number>;

    describe('[1, 3, 2, 6, 1, 2]', () => {
        beforeEach(() => {
            array = [1, 3, 2, 6, 1, 2];
        });

        it('k = 3', () => {
            expect(divisibleSumPairs(array, 3)).toBe(5);
        });
    });

    describe('[0, 1, 2, 3, 4, 5]', () => {
        beforeEach(() => {
            array = [0, 1, 2, 3, 4, 5];
        });

        it('k = 1', () => {
            expect(divisibleSumPairs(array, 1)).toBe(15);
        });
    });
});
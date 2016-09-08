import solveMeFirst from '../../../../HackerRank/Algorithm/Warmup/solve-me-first';

describe('SolveMeFirst', () => {
    it('1 + 2 should be 3', () => {
        expect(solveMeFirst(1, 2)).toBe(3);
    });

    it('-1 + -1 should be -2', () => {
        expect(solveMeFirst(-1, -1)).toBe(-2);
    });
});

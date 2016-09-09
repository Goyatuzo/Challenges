import removeDuplicate from '../../../../HackerRank/Algorithm/Implementation/super-reduced-string';

describe('SuperReducedString', () => {
    it('aaabccddd should be abd', () => {
        expect(removeDuplicate('aaabccddd')).toBe('abd');
    });

    it('baab', () => {
        expect(removeDuplicate('baab')).toBe('Empty String');
    });

    it('aa', () => {
        expect(removeDuplicate('aa')).toBe('Empty String');
    });
});
import removeDuplicate from '../super-reduced-string';

describe('SuperReducedString', () => {
    it('aaabccddd should be abd', () => {
        expect(removeDuplicate('aaabccddd')).toEqual('abd');
    });

    it('baab', () => {
        expect(removeDuplicate('baab')).toEqual('Empty String');
    });

    it('aa', () => {
        expect(removeDuplicate('aa')).toEqual('Empty String');
    });
});
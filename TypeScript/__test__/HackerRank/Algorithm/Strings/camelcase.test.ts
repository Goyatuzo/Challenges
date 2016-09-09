import camelCaseWordCount from '../../../../HackerRank/Algorithm/Strings/camelcase';

describe('CamelCase', () => {
    it('thisIsATest should be 4', () => {
        expect(camelCaseWordCount('thisIsATest')).toBe(4);
    });

    it('saveChangesInTheEditor should be 5', () => {
        expect(camelCaseWordCount('saveChangesInTheEditor')).toBe(5);
    });
});
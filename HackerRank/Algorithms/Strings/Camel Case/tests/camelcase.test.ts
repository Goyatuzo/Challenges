import camelCaseWordCount from '../camelcase';

describe('CamelCase', () => {
    it('thisIsATest should be 4', () => {
        expect(camelCaseWordCount('thisIsATest')).toEqual(4);
    });

    it('saveChangesInTheEditor should be 5', () => {
        expect(camelCaseWordCount('saveChangesInTheEditor')).toEqual(5);
    });
});
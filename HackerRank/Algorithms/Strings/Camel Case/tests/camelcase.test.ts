import { expect } from 'chai';

import camelCaseWordCount from '../camelcase';

describe('CamelCase', () => {
    it('thisIsATest should be 4', () => {
        expect(camelCaseWordCount('thisIsATest')).to.eql(4);
    });

    it('saveChangesInTheEditor should be 5', () => {
        expect(camelCaseWordCount('saveChangesInTheEditor')).to.eql(5);
    });
});
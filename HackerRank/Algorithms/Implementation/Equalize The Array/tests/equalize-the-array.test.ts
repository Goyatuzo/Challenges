import { expect } from 'chai';

import equalizeArray from '../equalize-the-array';

describe('EqualizeArray', () => {
    it('Sample Input', () => {
        expect(equalizeArray([3, 3, 2, 1, 3])).to.eql(2);
    });

    it('Test Input', () => {
        expect(equalizeArray([3, 3, 2])).to.eql(1);
    });
});
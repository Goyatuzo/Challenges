import { expect } from 'chai';

import minMaxSum from '../min-max-sum';

describe('MinMaxSum', () => {
    it('Sample Input', () => {
        expect(minMaxSum([1, 2, 3, 4, 5])).to.eql("10 14");
    });
});
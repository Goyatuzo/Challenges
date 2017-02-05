import { expect } from 'chai';

import sumArray from '../../../../HackerRank/Algorithm/Warmup/simple-array-sum';

describe('SimpleArraySum', () => {
    it(`[0, 1] should be 1`, () => {
        let array = [0, 1];
        expect(sumArray(array)).to.eql(1);
    });

    it(`[-1, 0, 1] should be 0`, () => {
        let array = [-1, 0, 1];
        expect(sumArray(array)).to.eql(0);
    });

    it(`[1, 2, 3] should be 6`, () => {
        let array = [1, 2, 3];
        expect(sumArray(array)).to.eql(6);
    });
});
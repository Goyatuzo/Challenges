import { expect } from 'chai';

import compareTriplets from '../../../../HackerRank/Algorithm/Warmup/compare-the-triplets';

describe('CompareTheTriplets', () => {
    it('0, 0, 0 and 0, 0, 0', () => {
        expect(compareTriplets([0, 0, 0], [0, 0, 0])).to.eql("0 0");
    });

    it('0, 0, 0 and 1, 1, 1', () => {
        expect(compareTriplets([0, 0, 0], [1, 1, 1])).to.eql("0 3");
    });

    it('1, 1, 1 and 0, 0, 0', () => {
        expect(compareTriplets([1, 1, 1], [0, 0, 0])).to.eql("3 0");
    });

    it('1, 0, 0 and 0, 0, 1', () => {
        expect(compareTriplets([1, 0, 0], [0, 0, 1])).to.eql("1 1");
    });

    it('1, 1, 0 and 0, 0, 1', () => {
        expect(compareTriplets([1, 1, 0], [0, 0, 1])).to.eql("2 1");
    });

    it('5, 6, 7 and 3, 6, 10', () => {
        expect(compareTriplets([5, 6, 7], [3, 6, 10])).to.eql("1 1");
    });
});
import { expect } from 'chai';

import solveMeFirst from '../../../../../HackerRank/Algorithms/Warmup/Solve Me First/solve-me-first';

describe('SolveMeFirst', () => {
    it('1 + 2 should be 3', () => {
        expect(solveMeFirst(1, 2)).to.eql(3);
    });

    it('-1 + -1 should be -2', () => {
        expect(solveMeFirst(-1, -1)).to.eql(-2);
    });
});
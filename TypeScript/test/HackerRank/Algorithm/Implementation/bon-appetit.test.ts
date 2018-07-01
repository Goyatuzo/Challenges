import { expect } from 'chai';

import bonAppetit from '../../../../HackerRank/Algorithm/Implementation/bon-appetit';

describe('BonAppetit', () => {
    describe('Sample Input', () => {
        it('#1', () => {
            expect(bonAppetit(1, 12, [3, 10, 2, 9])).to.eql("5");
        });

        it('#2', () => {
            expect(bonAppetit(1, 7, [3, 10, 2, 9])).to.eql("Bon Appetit");
        });
    });


});
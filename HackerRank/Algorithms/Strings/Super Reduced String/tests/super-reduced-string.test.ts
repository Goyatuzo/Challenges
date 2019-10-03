import { expect } from 'chai';

import removeDuplicate from '../super-reduced-string';

describe('SuperReducedString', () => {
    it('aaabccddd should be abd', () => {
        expect(removeDuplicate('aaabccddd')).to.eql('abd');
    });

    it('baab', () => {
        expect(removeDuplicate('baab')).to.eql('Empty String');
    });

    it('aa', () => {
        expect(removeDuplicate('aa')).to.eql('Empty String');
    });
});
import { expect } from 'chai';

import findNonSosCharacterCount from '../mars-exploration';

describe('MarsExploration', () => {
    it("SOS should give 0", () => {
        expect(findNonSosCharacterCount("SOS")).to.eql(0);
    });

    it("SOSSPSSQSSOR should give 3", () => {
        expect(findNonSosCharacterCount("SOSSPSSQSSOR")).to.eql(3);
    });

    it("SOSSOT should give 1", () => {
        expect(findNonSosCharacterCount("SOSSOT")).to.eql(1);
    });
});
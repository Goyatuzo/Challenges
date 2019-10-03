import findNonSosCharacterCount from '../mars-exploration';

describe('MarsExploration', () => {
    it("SOS should give 0", () => {
        expect(findNonSosCharacterCount("SOS")).toEqual(0);
    });

    it("SOSSPSSQSSOR should give 3", () => {
        expect(findNonSosCharacterCount("SOSSPSSQSSOR")).toEqual(3);
    });

    it("SOSSOT should give 1", () => {
        expect(findNonSosCharacterCount("SOSSOT")).toEqual(1);
    });
});
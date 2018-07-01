import { arraysDs } from "../../../../../HackerRank/Practice/Data-Structures/Arrays/arrays-ds";
import { expect } from "chai";

describe('Arrays - DS', () => {
    it('reverse [] should return itself', () => {
        expect(arraysDs([])).to.deep.equal([]);
    })

    it('reverse [1] should return itself', () => {
        expect(arraysDs([1])).to.deep.equal([1]);
    })

    it('reverse [1, 2] should return [2, 1]', () => {
        expect(arraysDs([1, 2])).to.deep.equal([2, 1]);
    })

    it('reverse [1, 4, 3, 2] should return [2, 3, 4, 1]', () => {
        expect(arraysDs([1, 4, 3, 2])).to.deep.equal([2, 3, 4, 1]);
    })
});
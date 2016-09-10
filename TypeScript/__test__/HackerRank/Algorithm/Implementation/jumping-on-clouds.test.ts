import jumpingOnClouds from '../../../../HackerRank/Algorithm/Implementation/jumping-on-clouds';

describe('JumpingOnClouds', () => {
    it('[0, 0, 1, 0, 0, 1, 0] should be 4', () => {
        let clouds = [0, 0, 1, 0, 0, 1, 0];
        expect(jumpingOnClouds(clouds)).toBe(4);
    });

    it('[0, 0, 0, 0, 1, 0] should be 3', () => {
        let clouds = [0, 0, 0, 0, 1, 0];
        expect(jumpingOnClouds(clouds)).toBe(3);
    });
});
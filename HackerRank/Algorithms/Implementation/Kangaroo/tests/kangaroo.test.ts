import willLandOnSameLocation, { Kangaroo } from '../Kangaroo';

describe('Kangaroo', () => {
    let one: Kangaroo;

    describe('Kangaroo 1: x = 0, v = 5', () => {
        beforeEach(() => {
            one = {
                x: 0,
                v: 5
            };
        });

        it('Kangaroo 2: x = 0, v = 5 should be YES', () => {
            let two: Kangaroo = {
                x: 0,
                v: 5
            };
            expect(willLandOnSameLocation(one, two)).toEqual("YES");
        });

        it('Kangaroo 2: x = 1, v = 5 should be NO', () => {
            let two: Kangaroo = {
                x: 1,
                v: 5
            };
            expect(willLandOnSameLocation(one, two)).toEqual("NO");
        });
    });

    describe('Kangaroo 1: x = 5, v = 5', () => {
        beforeEach(() => {
            one = {
                x: 5,
                v: 5
            };
        });

        it('Kangaroo 2: x = 0, v = 1 should be NO', () => {
            let two: Kangaroo = {
                x: 0,
                v: 1
            };
            expect(willLandOnSameLocation(one, two)).toEqual("NO");
        });

        it('Kangaroo 2: x = 0, v = 10 should be YES', () => {
            let two: Kangaroo = {
                x: 0,
                v: 10
            };
            expect(willLandOnSameLocation(one, two)).toEqual("YES");
        });
    });

    describe('Kangaroo 1: x = 0, x = 3', () => {
        beforeEach(() => {
            one = {
                x: 0,
                v: 3
            };
        });

        it('Kangaroo 2: x = 4, v = 2', () => {
            let two: Kangaroo = {
                x: 4,
                v: 2
            };
            expect(willLandOnSameLocation(one, two)).toEqual("YES");
        });
    });

    describe('Kangaroo: 1 x = 0, v = 2', () => {
        beforeEach(() => {
            one = {
                x: 0,
                v: 2
            };
        });

        it('Kangaroo 2: x = 5, v = 3', () => {
            let two: Kangaroo = {
                x: 5,
                v: 3
            };
            expect(willLandOnSameLocation(one, two)).toEqual("NO");
        });
    });

    describe('Kangaroo 1: x = 23, v = 9867', () => {
        beforeEach(() => {
            one = {
                x: 23,
                v: 9867
            };
        });

        it('Kangaroo 2: x = 9814, v = 5861', () => {
            let two: Kangaroo = {
                x: 9814,
                v: 5861
            };
            expect(willLandOnSameLocation(one, two)).toEqual("NO");
        });
    });
});
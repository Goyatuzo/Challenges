import solution = require('..');

function testing(actual, expected) {
    expect(actual).toEqual(expected);
}

describe("Steps in Primes", function() {
    it("given cases", function() {        
        testing(solution.G964.step(2,100,110), [101, 103]);
        testing(solution.G964.step(4,100,110), [103, 107]);
        testing(solution.G964.step(6,100,110), [101, 107]);
        testing(solution.G964.step(8,300,400), [359, 367]);
        testing(solution.G964.step(10,300,400), [307, 317]);
    });
});


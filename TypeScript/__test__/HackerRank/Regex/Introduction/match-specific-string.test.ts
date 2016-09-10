import processData, {Regex_Pattern} from '../../../../HackerRank/Regex/Introduction/matching-specific-string';

describe('MatchingSpecificString', () => {
    const regex = new RegExp(Regex_Pattern, "g");
    it('hackerrank should be just 1', () => {
        const match = "hackerrank".match(regex);
        expect(match.length).toBe(1);
    });

    it('long string should have 2', () => {
        const match = "The hackerrank team is on a mission to flatten the world by restructuring the DNA of every company on the planet. We rank programmers based on their coding skills, helping companies source great programmers and reduce the time to hire. As a result, we are revolutionizing the way companies discover and evaluate talented engineers. The hackerrank platform is the destination for the best engineers to hone their skills and companies to find top engineers.".match(regex);
        expect(match.length).toBe(2);
    });
});
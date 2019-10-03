export default function findNonSosCharacterCount(str: string): number {
    let count = 0;

    for (let i = 0; i < str.length; i += 3) {
        if (str[i] !== "S") {
            count++;
        }

        if (str[i + 1] !== "O") {
            count++;
        }

        if (str[i + 2] !== "S") {
            count++;
        }
    }

    return count;
}

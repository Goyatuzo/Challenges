
/////////////// ignore above this line ////////////////////
export default function bonAppetit(k: number, b: number, c: Array<number>): string {
    let paidSum = c.reduce((sum, curr, idx) => {
        if (idx === k) {
            return sum;
        }

        return sum + curr;
    });

    let expected = paidSum / 2;

    if (b === expected) {
        return "Bon Appetit";
    }

    return (b - expected).toString();
}

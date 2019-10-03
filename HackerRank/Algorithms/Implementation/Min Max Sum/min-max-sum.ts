
export default function minMaxSum(values: Array<number>): string {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    let sum = values.reduce((cumSum, curr) => {
        min = Math.min(min, curr);
        max = Math.max(max, curr);
        return cumSum + curr;
    }, 0);

    return `${sum - max} ${sum - min}`;
}

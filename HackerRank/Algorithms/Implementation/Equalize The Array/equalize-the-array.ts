export default function equalizeArray(values: Array<number>): number {
    let count: { [number: number]: number } = {};

    values.forEach(num => {
        if (num in count) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });

    let max = Number.MIN_SAFE_INTEGER;
    Object.keys(count).forEach(key => {
        max = Math.max(count[key], max);
    });

    return values.length - max;
}

export interface Kangaroo {
    x: number;
    v: number;
};

export default function willLandOnSameLocation(one: Kangaroo, two: Kangaroo): string {

    if (one.v === two.v) {
        if (one.x === two.x) {
            return "YES";
        }
        return "NO";
    }

    // Equation is x1 + v1 * t = x2 + v2 * t
    // t = (x2 - x1) / (v1 - v2)
    const t = (two.x - one.x) / (one.v - two.v);

    if (t > 0 && t % 1 === 0) {
        return "YES";
    }
    return "NO";
}

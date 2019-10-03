
export default function camelCaseWordCount(camelCase: string): number {
    const capitals = camelCase.replace(/[^A-Z]/g, '');

    return capitals.length + 1;
}
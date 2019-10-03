export default function removeDuplicate(input: string): string {
    let prev = input;
    input = input.replace(/(.)\1{1}/, '');

    while (prev !== input) {
        prev = input;
        input = input.replace(/(.)\1{1}/, '');
    }

    if (input.length == 0) {
        return "Empty String";
    }
    return input;
}

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

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    console.log(removeDuplicate(_input));
});

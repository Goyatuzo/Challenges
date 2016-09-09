process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";
let inputArray: Array<string>;
let inputIndex = 0;

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    inputArray = _input.split("\n");
    main();
});

export default function rotateArray(input: Array<number>, k: number): Array<number> {
    while (k-- > 0) {
        const top = input[input.length - 1];

        input.unshift(top);
        input.pop();
    }

    return input;
}

function readLine() {
    return inputArray[inputIndex++];
}

function main() {
    // Get n, k, q
    let nkq = readLine().split(' ');
    const n = parseInt(nkq[0]);
    const k = parseInt(nkq[1]);
    let q = parseInt(nkq[2]);

    let numbers = (readLine().split(' ')).map(element => parseInt(element));

    const scrambled = rotateArray(numbers, k);

    while (q-- > 0) {
        console.log(scrambled[parseInt(readLine())]);
    }
}
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array: Array<string>;
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

export default function divisibleSumPairs(a: Array<number>, k: number) {
    let count = 0;

    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if ((a[i] + a[j]) % k === 0) {
                ++count;
            }
        }
    }

    return count;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var a = readLine().split(' ');
    let mapped = a.map(Number);

    console.log(divisibleSumPairs(mapped, k));
}

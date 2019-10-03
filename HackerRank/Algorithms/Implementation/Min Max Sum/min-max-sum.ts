process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array: Array<string> = [];
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


function main() {
    var str = readLine();

    if (str) {
        var a_temp = str.split(' ');
        var ints = a_temp.map(Number);

        console.log(minMaxSum(ints));
    }
}

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
export default function equalizeArray(values: Array<number>): number {
    let count: { [number: number]: number } = {};

    values.forEach(num => {
        if (num in count) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });

    let min = Number.MAX_SAFE_INTEGER;
    Object.keys(count).forEach(key => {
        min = Math.min(count[key], min);
    });

    let sum = 0;
    Object.keys(count).forEach(key => {
        sum += count[key] - min;
    });

    return sum;
}


function main() {
    var n = readLine();
    var str = readLine();

    if (str) {
        var a_temp = str.split(' ');
        var ints = a_temp.map(Number);

        console.log(equalizeArray(ints));
    }
}

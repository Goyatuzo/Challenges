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

export default function compareTriplets(first: Array<number>, second: Array<number>): string {
    let points = {
        alice: 0,
        bob: 0
    };

    for (let i = 0; i < first.length; ++i) {
        if (first[i] > second[i]) {
            points.alice++;
        } else if (first[i] < second[i]) {
            points.bob++;
        }
    }

    return `${points.alice} ${points.bob}`;
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);

    console.log(compareTriplets([a0, a1, a2], [b0, b1, b2]));
}

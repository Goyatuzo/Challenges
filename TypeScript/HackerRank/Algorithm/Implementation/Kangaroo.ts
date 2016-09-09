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
    
    if (t > 0) {
        return "YES";
    }
    return "NO";
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    const one: Kangaroo = {
        x: x1,
        v: v1
    };

    const two: Kangaroo = {
        x: x2,
        v: v2
    }

    console.log(willLandOnSameLocation(one, two));
}

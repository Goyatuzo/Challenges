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

export default function jumpingOnClouds(clouds: Array<number>) {
    let idx = 0;
    let moves = 0;

    while (idx < clouds.length - 1) {
        if (clouds[idx + 2] === 0) {
            ++moves;
            idx += 2;
            continue;
        }

        // If skipping doesn't work, then the next one will always work.
        ++moves;
        ++idx;
    }

    return moves;
}

function main() {
    var n = parseInt(readLine());
    let c = readLine().split(' ');
    let mapped = c.map(Number);

    console.log(jumpingOnClouds(mapped));
}

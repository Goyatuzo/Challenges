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
export default function camelCaseWordCount(camelCase: string): number {
    const capitals = camelCase.replace(/[^A-Z]/g, '');

    return capitals.length + 1;
}


function main() {
    var s = readLine();

    console.log(camelCaseWordCount(s));
}
